function toggle() {
  const extra = document.getElementById("extra");
  const button = document.getElementsByClassName("button")[0];

  if (!extra.style.display || extra.style.display === "none") {
    extra.style.display = "block";
    button.innerText = "Less";
  } else {
    extra.style.display = "none";
    button.innerText = "More";
  }
}
