function attachEventsListeners() {
  const daysInputEl = document.querySelector("#days");
  const hoursInputEl = document.querySelector("#hours");
  const minutesInputEl = document.querySelector("#minutes");
  const secondsInputEl = document.querySelector("#seconds");

  const buttons = document.querySelectorAll('input[type="button"]');

  const units = {
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };

  function convertUnits(seconds) {
    daysInputEl.value = Number(seconds / units.days).toFixed(2);
    hoursInputEl.value = Number(seconds / units.hours).toFixed(2);
    minutesInputEl.value = Number(seconds / units.minutes).toFixed(2);
    secondsInputEl.value = Number(seconds / units.seconds).toFixed(2);
  }

  buttons.forEach((b) => {
    b.addEventListener("click", function (e) {
      const inputType = e.target.getAttribute("id").split("Btn")[0];
      const inputEl = document.querySelector("#" + inputType);
      const currentValue = inputEl.value;

      const multiplier = units[inputType];

      convertUnits(currentValue * multiplier);
    });
  });
}
