const user = JSON.parse(Cookies.get("user"));

//haal alle devices op uit de database
fetch("/api/result/device")
  .then(data => data.json())
  .then(devices => {
    //devices = devices.filter(device => device.user_id === user.id);

    const row = document.querySelector(".center-button"); //laad devices wrapper element
    const addBtn = document.querySelector(".add-button");

    //loop door ieder device
    devices.forEach(device => {
      const deviceButton = document.createElement("div"); //maak device button
      deviceButton.classList.add("knop", "col-md-3");

      //vul de devicebutton met de juiste waardes
      deviceButton.innerHTML = `
        <a class='btn-knop' href='sub-page.html'>
          <img class='img-size-simul svg' src='${device.icon}' alt='${
        device.name
      }'>
          <h4 class='white-text'>${device.name}</h4>
        </a>
      `;

      row.insertBefore(deviceButton, addBtn); //voeg button toe aan de row
    });
  });
