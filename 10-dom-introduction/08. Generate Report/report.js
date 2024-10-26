function generateReport() {
  const selectedColumns = Array.from(
    document.querySelectorAll("thead > tr > th > input")
  ).reduce(
    (prev, curr) => Object.assign(prev, { [curr.name]: curr.checked }),
    {}
  );

  const tableRows = document.querySelectorAll("tbody > tr");

  const results = [];
  for (let row of Array.from(tableRows)) {
    let columns = Array.from(row.querySelectorAll("td")).reduce(
      (prev, curr, currIdx) =>
        Object.entries(selectedColumns)[currIdx][1] === true
          ? Object.assign(prev, {
              [Object.entries(selectedColumns)[currIdx][0]]: curr.innerText,
            })
          : prev,
      {}
    );

    if (Object.keys(columns).length !== 0) results.push(columns);
  }

  document.querySelector("#output").value = JSON.stringify(results, null, 2);
}
