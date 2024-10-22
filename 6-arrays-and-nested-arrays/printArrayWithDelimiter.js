function printArrayWithADelimiter(inputArr) {
  const delimiter = inputArr.pop();

  let buffer = "";

  for (let i = 0; i < inputArr.length - 1; i++) {
    buffer += inputArr[i];
    if (i < inputArr.length - 2) {
      buffer += delimiter;
    }
  }
  console.log(buffer);
}

printArrayWithADelimiter(["One", "Two", "Three", "Four", "Five", "-"]);
