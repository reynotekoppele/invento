window.onload = () => {
  const loginForm = document.querySelector(".login__form");
  const nameField = document.querySelector("#usernameInput");
  const passField = document.querySelector("#passwordInput");
  const errorField = document.querySelector(".login__error");

  loginForm.addEventListener("submit", event =>
    validateUser({event, nameField, passField, errorField})
  );

  nameField.addEventListener("focusout", () =>
    validateFieldEmpty(event.target)
  );

  passField.addEventListener("focusout", () =>
    validateFieldEmpty(event.target)
  );
};

const validateUser = async args => {
  const {event, nameField, passField, errorField} = args;

  event.preventDefault();

  const isNameValid = validateFieldEmpty(nameField);
  const isPassValid = validateFieldEmpty(passField);
  errorField.classList.remove("login__error--visible");

  if (isNameValid && isPassValid) {
    const username = nameField.value;
    const password = passField.value;

    const status = await (await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password}),
    })).json();

    const role = await (await fetch(
      `/api/result/role/_id/${status.role_id}`
    )).json();

    if (status.status) {
      Cookies.set("user", JSON.stringify(status));
      Cookies.set("role", JSON.stringify(role));
      status.firstTime
        ? (window.location.href = "/setup.html")
        : (window.location.href = "/");
    } else {
      errorField.innerHTML = status.message;
      errorField.classList.add("login__error--visible");
    }
  } else {
    errorField.innerHTML = "Gebruikersnaam en / of wachtwoord incorrect";
    errorField.classList.add("login__error--visible");
  }
};

const validateFieldEmpty = field => {
  const isValid = field.value.trim() === "" ? false : true;

  if (isValid) {
    field.classList.remove("login__input--invalid");
    field.classList.add("login__input--valid");
  } else {
    field.classList.remove("login__input--valid");
    field.classList.add("login__input--invalid");
  }

  return isValid;
};
