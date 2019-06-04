const cardCounter = document.querySelector(".card-settings__counter");
const cardSelectors = document.querySelectorAll(".card-settings__selector");
const cardContent = document.querySelectorAll(".card-settings__content");
const cardBtn = document.querySelector(".card-settings__btn");

cardBtn.addEventListener("click", () => {
  const target = ++cardCounter.dataset.counter;
  showCardContent({cardCounter, cardSelectors, cardContent, target});
});

cardSelectors.forEach(selector =>
  selector.addEventListener("click", () => {
    const target = selector.dataset.target;
    cardCounter.dataset.counter = target;
    showCardContent({cardCounter, cardSelectors, cardContent, target});
  })
);

showCardContent = args => {
  const {cardCounter, cardSelectors, cardContent, target} = args;

  cardCounter.innerHTML = target;

  cardContent.forEach(content =>
    content.classList.remove("card-settings__content--visible")
  );

  cardSelectors.forEach(selector =>
    selector.classList.remove("card-settings__selector--active")
  );

  cardContent[target - 1].classList.add("card-settings__content--visible");
  cardSelectors[target - 1].classList.add("card-settings__selector--active");
};
