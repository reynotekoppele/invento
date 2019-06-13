const actionBtns = document.querySelectorAll(".execute-action");

actionBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    fetch("/api/save/queue", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: event.target.dataset.action}),
    });
  })
);
