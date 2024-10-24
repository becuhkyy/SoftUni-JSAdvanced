function printEveryNthElement(inputArr, step) {
  const newArr = [];
  for (let i = 0; i < inputArr.length; i += step) {
    newArr.push(inputArr[i]);
  }
  return newArr;
}
console.log(printEveryNthElement(["5", "20", "31", "4", "20", 2]));
