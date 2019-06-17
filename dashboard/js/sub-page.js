const url = new URL(window.location.href);
const room = url.searchParams.get("room");

document.body.innerHTML = document.body.innerHTML.replace(/@ROOM@/g, room);