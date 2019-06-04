const cardCounter = document.querySelector(".card-setup__counter");
const cardSelectors = document.querySelectorAll(".card-setup__selector");
const cardContent = document.querySelectorAll(".card-setup__content");
const cardBtn = document.querySelector(".card-setup__btn");

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

const showCardContent = args => {
  const {cardCounter, cardSelectors, cardContent, target} = args;

  if (target > cardContent.length) {
    saveSettings();
  } else {
    cardCounter.innerHTML = target;

    cardContent.forEach(content =>
      content.classList.remove("card-setup__content--visible")
    );

    cardSelectors.forEach(selector =>
      selector.classList.remove("card-setup__selector--active")
    );

    cardContent[target - 1].classList.add("card-setup__content--visible");
    cardSelectors[target - 1].classList.add("card-setup__selector--active");
  }
};

const saveSettings = () => {
  const user = JSON.parse(Cookies.get("user"));

  const data = {
    _id: user.id,
    firstTime: false,
    house: selectedSettings.house,
    fontSize: selectedSettings.text,
    experience: selectedSettings.exp,
  };

  fetch("/api/update/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(() => (window.location.href = "/"))
    .catch(error => console.log(error));
};
