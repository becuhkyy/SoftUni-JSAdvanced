function listOfNames(inputArray) {
  const sorted = inputArray.map(Number).sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < Math.ceil(sorted.length / 2); i++) {
    if (i === sorted.length - 1 - i) {
      result.push(sorted[i]);
      break;
    }

    result.push(sorted[i]);
    result.push(sorted[sorted.length - 1 - i]);
  }

  result.forEach((i) => console.log(i));
}
console.log(listOfNames([22, 9, 3, 5]));
