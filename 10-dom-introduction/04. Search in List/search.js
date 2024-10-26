function search() {
  const searchText = document.querySelector("#searchText").value;
  const result = document.querySelector("#result");
  const list = document.querySelectorAll("#towns > li");

  let matches = 0;

  for (item of Array.from(list)) {
    if (searchText && item.innerText.includes(searchText)) {
      item.style.textDecoration = "underline";
      item.style.fontWeight = "bold";
      matches++;
    } else {
      item.style.textDecoration = "none";
      item.style.fontWeight = "normal";
    }
  }

  result.innerText = `${matches} matches found`;
}
