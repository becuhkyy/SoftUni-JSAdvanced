function lockedProfile() {
  const clickEventHandler = (e) => {
    const parent = e.target.parentNode;

    const state = parent.querySelector('input[type="radio"]:checked').value;

    if (state === "lock") return;

    const hiddenFields = parent.querySelector('[id*="HiddenFields"]');

    if (hiddenFields.style.display === "block") {
      hiddenFields.style.display = "none";
      e.target.textContent = "Show more";
    } else {
      hiddenFields.style.display = "block";
      e.target.textContent = "Hide it";
    }
  };

  Array.from(document.querySelectorAll(".profile > button")).forEach((b) => {
    b.addEventListener("click", clickEventHandler);
  });
}
