function sortByTwoCriteria(inputArr) {
  const sorted = inputArr.sort(
    (a, b) =>
      a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())
  );

  sorted.forEach((i) => console.log(i));
}

sortByTwoCriteria(["alpha", "beta", "gamma"]);
