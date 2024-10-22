function validityChecker(inputArr) {
  let [x1, y1, x2, y2] = inputArr;

  const p1ToCenter = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  const p2ToCenter = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
  const p1ToP2 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  console.log(
    `{${x1}, ${y1}} to {0, 0} is ${p1ToCenter % 1 > 0 ? "invalid" : "valid"}`
  );
  console.log(
    `{${x2}, ${y2}} to {0, 0} is ${p2ToCenter % 1 > 0 ? "invalid" : "valid"}`
  );
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
      p1ToP2 % 1 > 0 ? "invalid" : "valid"
    }`
  );
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
