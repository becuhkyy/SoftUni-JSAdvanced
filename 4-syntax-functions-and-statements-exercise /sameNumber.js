function sameNumbers(number) {
  let stringifiedNumber = number.toString();
  let sum = 0;
  let isSameNumbers = true;

  for (let i = 0; i < stringifiedNumber.length; i++) {
    if (
      i !== 0 &&
      Number(stringifiedNumber[i]) !== Number(stringifiedNumber[i - 1])
    )
      isSameNumbers = false;

    sum += Number(stringifiedNumber[i]);
  }
  console.log(isSameNumbers);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
