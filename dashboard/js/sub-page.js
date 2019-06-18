const url = new URL(window.location.href);
const room = url.searchParams.get("room");

document.body.innerHTML = document.body.innerHTML.replace(/@ROOM@/g, room);

function changeActiveDay() {
  var element = document.getElementById("dag");
  element.classList.add("active");
  var element = document.getElementById("nacht");
  element.classList.remove("active");
  var element = document.getElementById("gezel");
  element.classList.remove("active");
};

function changeActiveNight() {
  var element = document.getElementById("nacht");
  element.classList.add("active");
  var element = document.getElementById("dag");
  element.classList.remove("active");
  var element = document.getElementById("gezel");
  element.classList.remove("active");
};

function changeActiveGezel() {
  var element = document.getElementById("gezel");
  element.classList.add("active");
  var element = document.getElementById("nacht");
  element.classList.remove("active");
  var element = document.getElementById("dag");
  element.classList.remove("active");
};