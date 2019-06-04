const htmlNode = document.querySelector("html");
const houseSetting = document.querySelector(".card-settings__answer--house");
const textSettings = document.querySelectorAll(".card-settings__answer--text");

textSettings.forEach(setting =>
  setting.addEventListener("click", event => showFontsize(event))
);

const showFontsize = event => {
  const size = event.target.dataset.size;
  htmlNode.classList.remove("large", "medium", "small");
  htmlNode.classList.add(size);
};
