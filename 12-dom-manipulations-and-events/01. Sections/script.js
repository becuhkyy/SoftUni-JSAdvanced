function create(words) {
  for (word of words) {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.style.display = "none";
    p.textContent = word;

    div.appendChild(p);

    div.addEventListener("click", function (e) {
      e.target.querySelector("p").style.display = "block";
    });

    document.querySelector("#content").appendChild(div);
  }
}
