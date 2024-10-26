function solve() {
  const textArea = document.querySelector("#input").value;

  let output = "";
  let buffer = [];
  textArea
    .split(".")
    .filter((s) => s.length > 1)
    .map((s) => s.trim())
    .forEach((s, idx, arr) => {
      buffer.push(s + ".");
      if (buffer.length === 3 || idx === arr.length - 1) {
        output += `<p>${buffer.join("")}</p>`;
        buffer = [];
      }
    });

  document.querySelector("#output").innerHTML = output;
}
