function solve() {
  let input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;

  let result = "";

  switch (convention) {
    case "Camel Case":
      result = input
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
      break;
    case "Pascal Case":
      result = input
        .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
          return g1.toUpperCase() + g2.toLowerCase();
        })
        .replace(/\s+/g, "");
      break;

    default:
      result = "Error!";
      break;
  }

  document.getElementById("result").innerText = result;
}
