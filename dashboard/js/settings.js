window.onload = () => {
  const cardCounter = document.querySelector(".card__counter");
  const cardSelectors = document.querySelectorAll(".card__selector");
  const cardContent = document.querySelectorAll(".card__content");
  const cardBtn = document.querySelector(".card__btn");

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
};

showCardContent = args => {
  const {cardCounter, cardSelectors, cardContent, target} = args;

  cardCounter.innerHTML = target;

  cardContent.forEach(content =>
    content.classList.remove("card__content--visible")
  );

  cardSelectors.forEach(selector =>
    selector.classList.remove("card__selector--active")
  );

  cardContent[target - 1].classList.add("card__content--visible");
  cardSelectors[target - 1].classList.add("card__selector--active");
};
