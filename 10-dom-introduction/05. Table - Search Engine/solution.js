function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchText = document.querySelector("#searchField").value;
    const rows = document.querySelectorAll("tbody tr");

    for (row of Array.from(rows)) {
      for (cell of Array.from(row.children)) {
        if (searchText && cell.innerText.includes(searchText)) {
          row.classList.add("select");
          break;
        } else {
          row.classList.remove("select");
        }
      }
    }
  }
}
