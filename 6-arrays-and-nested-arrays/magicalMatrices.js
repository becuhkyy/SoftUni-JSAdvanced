function magicalMatrices(inputArr) {
  let initialSum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < inputArr[i].length; j++) {
      if (i === 0) initialSum += inputArr[i][j];
      rowSum += inputArr[i][j];
    }
    if (initialSum !== rowSum) return false;
  }

  for (let i = 0; i < inputArr[0].length; i++) {
    let colSum = 0;
    for (let j = 0; j < inputArr.length; j++) {
      colSum += inputArr[j][i];
    }
    if (colSum !== initialSum) return false;
  }

  return true;
}

console.log(
  magicalMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  magicalMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);

console.log(
  magicalMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);

console.log(
  magicalMatrices([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
