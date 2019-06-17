const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december"
];

const dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

function displayYear() {
  var d = new Date();
  var year = d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = year;
};

function displayMonth() {
  var d = new Date();
  var n = d.getMonth() + 1;
  var name = monthNames[d.getMonth()] + " " + d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = name;
};

function displayDay() {
  var d = new Date();
  var n = d.getDate();
  var t = d.getDay();
  var day = dayNames[d.getDay()] + " " + d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = day;
}

// var day = new Date();
// var weekday = new Array(7);
// weekday[0] =  "Zondag";
// weekday[1] = "Maandag";
// weekday[2] = "Dinsdag";
// weekday[3] = "Woensdag";
// weekday[4] = "Donderdag";
// weekday[5] = "Vrijdag";
// weekday[6] = "Zaterdag";
//
// var dayName = weekday[day.getDay()];