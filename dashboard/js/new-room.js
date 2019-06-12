/*
1. input id ophalen
2. icons ophalen
3. knop ophalen
3.1 klik toevoegen
3. De toegevoegde naam ophalen
3.100 class toevoegen aan geselecteerde item
Deselecteren icon
4. De geselecteerde icon ophalen
4. url van de afbeelding
5. Data opslaan

1. class verwijderen van alle icons
2. voeg class toe aan de click
 */

const nameInput = document.querySelector('#add-room');
const saveBtn = document.querySelector('.save-room');
const icons = document.querySelectorAll('.input-icon > img');


saveBtn.addEventListener( 'click', () => {
  const name = nameInput.value;
  const savedIcon = document.querySelector('.icon-active').src;
  console.log(savedIcon);
}  );



icons.forEach(icon =>{
  // voeg aan elke icon een klik toe
  icon.addEventListener('click', () =>{

    // voor elke icoon verwijder de active
    icons.forEach(icon =>{
      icon.classList.remove('icon-active');
    });
    // voeg een active toe aan de aangeklikte icoon
    icon.classList.add('icon-active');

  });
});
