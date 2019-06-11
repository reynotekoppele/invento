const dataNodes = document.querySelectorAll(".load-data");
const userData = JSON.parse(Cookies.get("user"));

dataNodes.forEach(node => (node.innerHTML = userData[node.dataset.value]));
