function printArrayWithADelimiter(inputArr, delimiter) {
  const newInput = [...inputArr];
  const del = newInput.pop();
  console.log(newInput);
}

printArrayWithADelimiter(["One", "Two", "Three", "Four", "Five"], "-");
