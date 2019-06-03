const buttons = document.querySelectorAll(".btn-arduino");

const executeAction = event => {
  event.preventDefault();

  const data = {
    name: event.target.closest("button").dataset.action,
    datetime: new Date(),
  };

  // fetch("/api/save/action", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).catch(error => console.log(error));
};

buttons.forEach(btn => btn.addEventListener("click", executeAction));

const dataBtn = document.querySelector(".btn-data");
dataBtn.addEventListener("click", async () => {
  const entries = await (await fetch("/api/result/entry/")).json();
  for (entry of entries) {
    const user = await (await fetch(
      `/api/result/user/_id/${entry.user_id}`
    )).json();

    const role = await (await fetch(
      `/api/result/role/_id/${user[0].role_id}`
    )).json();

    console.log(entry._id, role);
  }
});
