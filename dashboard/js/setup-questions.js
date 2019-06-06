const htmlNode = document.querySelector("html");
const houseSetting = document.querySelector(".card-setup__answer--house");
const textSettings = document.querySelectorAll(".card-setup__answer--text");
const textExample = document.querySelector(".card-setup__example");
const expSettings = document.querySelectorAll(
  ".card-setup__answer--experience"
);

const selectedSettings = {
  house: "",
  text: "",
  exp: "",
};

houseSetting.addEventListener(
  "focusout",
  event => (selectedSettings.house = event.target.value)
);

textSettings.forEach(setting =>
  setting.addEventListener("click", () => {
    const size = setting.dataset.size;
    textExample.classList.remove("large", "medium", "small");
    textExample.classList.add(size);
    selectedSettings.text = size;
  })
);

expSettings.forEach(setting => {
  setting.addEventListener(
    "click",
    () => (selectedSettings.exp = setting.dataset.experience)
  );
});
