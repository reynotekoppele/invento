const dataNodes = document.querySelectorAll(".load-data");
const userData = JSON.parse(Cookies.get("user"));
const html = document.querySelector("html");

dataNodes.forEach(node => (node.innerHTML = userData[node.dataset.value]));

html.classList.add(userData.fontSize);
