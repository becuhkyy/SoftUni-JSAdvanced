function listOfNames(inputArray) {
  const sorted = inputArray.sort((a, b) => a.localeCompare(b));

  sorted.forEach((name, idx) => console.log(`${idx + 1}.${name}`));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
