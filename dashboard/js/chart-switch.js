function displayYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("dateDisplay").innerHTML = n;
};

function displayMonth() {
  var d = new Date();
  var n = d.getMonth() + 1;
  document.getElementById("dateDisplay").innerHTML = n;
};

function displayDay() {
  var d = new Date();
  var n = d.getDate();
  document.getElementById("dateDisplay").innerHTML = n;
}