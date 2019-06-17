const five = require("johnny-five");
const board = new five.Board();
const fetch = require("node-fetch");
const Room = require("./room");

const dots = ["", ".", "..", "..."];

const showMessage = (id, action) => {
  const rand = Math.floor(Math.random() * 3) + 1;
  console.log(`Button ${id} is pressed${dots[rand]}`);

  const data = {
    device: `Button ${id}`,
    datetime: new Date(),
    action: action,
    user_id: "5cf27866ebe5b211ed28971f",
  };

  fetch("http://localhost:3000/api/save/entry", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch(error => console.log(error));
};

board.on("ready", () => {
  const buttonOne = new five.Button(2);
  const buttonTwo = new five.Button(3);
  const buttonThree = new five.Button(4);
  const buttonFour = new five.Button(5);

  const livingroom = new Room("Livingroom", {
    lights: [
      new five.Led(8), // woon
      new five.Led(10), // boekenkast
    ],
  });

  const kitchen = new Room("Kitchen", {
    lights: [
      new five.Led(9), // keuken
      new five.Led(12), // buiten
    ],
    servos: [
      new five.Servo(7), // deur
    ],
  });

  const bedroom = new Room("Bedroom", {
    lights: [
      new five.Led(11), // slaapkamer
    ],
  });

  const actions = {
    // Woon- en slaapkamer
    one: () => {
      livingroom.toggleLightsOnOff();
      bedroom.toggleLightsOnOff();

      showMessage("A", "Woonkamer lampen");
    },
    // Alle lampen
    two: () => {
      if (
        livingroom.areLightsOn &&
        kitchen.areLightsOn &&
        bedroom.areLightsOn
      ) {
        livingroom.turnOffLights();
        kitchen.turnOffLights();
        bedroom.turnOffLights();

        kitchen.closeDoor();
        kitchen.lockDoor();
      } else {
        livingroom.turnOnLights();
        kitchen.turnOnLights();
        bedroom.turnOnLights();

        kitchen.unlockDoor();
      }

      showMessage("B", "Nachtstand");
    },
    // Keuken
    three: () => {
      kitchen.toggleLightsOnOff();
      showMessage("C", "Keuken lampen");
    },
    // Deur
    four: () => {
      kitchen.toggleDoorOpenClose();
      showMessage("D", "Deur open/sluiten");
    },
  };

  // Lightbulb icon
  buttonOne.on("down", actions.one);

  // Moon and stars icon
  buttonTwo.on("down", actions.two);

  // Curtain icon
  buttonThree.on("down", actions.three);

  // Vacuum cleaner icon
  buttonFour.on("down", actions.four);

  // Updates from website
  setInterval(() => {
    fetch("http://reynotekoppele.nl/invento/api/result/queue")
      .then(response => response.json())
      .then(results =>
        results.map(result => {
          console.log(result);
          actions[result.name]();
          fetch(
            `http://reynotekoppele.nl/invento/api/delete/queue/${result._id}`
          );
        })
      )
      .catch(error => console.log(error));
  }, 5000);
});