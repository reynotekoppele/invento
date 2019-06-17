const dataNodes = document.querySelectorAll(".load-data");
const avatars = document.querySelectorAll(".load-avatar");
const userData = JSON.parse(Cookies.get("user"));
const html = document.querySelector("html");

dataNodes.forEach(node => (node.innerHTML = userData[node.dataset.value]));

avatars.forEach(avatar => (avatar.src = `img/${userData.nicename}.jpeg`));

html.classList.add(userData.fontSize);
