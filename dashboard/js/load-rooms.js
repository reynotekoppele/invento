//haal alle rooms op uit de database
const user = JSON.parse(Cookies.get("user"));

fetch("/api/result/room", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}).then(data => {
  return data.json();
}).then(rooms => {
  rooms = rooms.filter(room => room.user_id === user.id);
  const roomsWrapper = document.querySelector("#rooms"); //laad rooms wrapper element

  const row = document.createElement("div"); //maak een nieuwe row
  row.classList.add("center-button", "row"); //voeg de juiste classes er aan toe

  //loop door iedere room
  rooms.forEach((room, index) => {

    const roomButton = document.createElement("div"); //maak room button
    roomButton.classList.add("knop", "col-md-3");

    //vul de roombutton met de juiste waardes
    roomButton.innerHTML = "<a class='btn-knop' href='sub-page.html'>" +
      "<img class='img-size-simul svg' src='" + room.icon + "' alt='hal'>" +
      "<h4 class='white-text'>" + room.name + "</h4>" +
      "</a>";

    row.appendChild(roomButton);//voeg button toe aan de row
  });

  roomsWrapper.appendChild(row); //voeg de row toe aan de rooms wrapper
});

