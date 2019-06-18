const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december"
];

const dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

function displayYear() {
  var d = new Date();
  var year = d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = year;
  var element = document.getElementById("year");
  element.classList.add("active");
  var element = document.getElementById("month");
  element.classList.remove("active");
  var element = document.getElementById("day");
  element.classList.remove("active");
};

function displayMonth() {
  var d = new Date();
  var n = d.getMonth() + 1;
  var name = monthNames[d.getMonth()] + " " + d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = name;
  var element = document.getElementById("month");
  element.classList.add("active");
  var element = document.getElementById("year");
  element.classList.remove("active");
  var element = document.getElementById("day");
  element.classList.remove("active");
};

function displayDay() {
  var d = new Date();
  var n = d.getDate();
  var t = d.getDay();
  var day = dayNames[d.getDay()] + " " + d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = day;

  var element = document.getElementById("day");
  element.classList.add("active");
  var element = document.getElementById("year");
  element.classList.remove("active");
  var element = document.getElementById("month");
  element.classList.remove("active");
}