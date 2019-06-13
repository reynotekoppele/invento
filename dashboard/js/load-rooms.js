const user = JSON.parse(Cookies.get("user"));

//haal alle rooms op uit de database
fetch("/api/result/room")
  .then(data => data.json())
  .then(rooms => {
    rooms = rooms.filter(room => room.user_id === user.id);

    const row = document.querySelector(".center-button"); //laad rooms wrapper element
    const addBtn = document.querySelector(".add-button");

    //loop door iedere room
    rooms.forEach(room => {
      const roomButton = document.createElement("div"); //maak room button
      roomButton.classList.add("knop", "col-md-3");

      //vul de roombutton met de juiste waardes
      roomButton.innerHTML = `
        <a class='btn-knop' href='sub-page.html'>
          <img class='img-size-simul svg' src='${room.icon}' alt='${room.name}'>
          <h4 class='white-text'>${room.name}</h4>
        </a>
      `;

      row.insertBefore(roomButton, addBtn); //voeg button toe aan de row
    });
  });
