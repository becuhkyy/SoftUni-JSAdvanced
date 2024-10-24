function calorieObject(inputArray) {
  const result = {};

  for (let i = 0; i < inputArray.length; i += 2) {
    const key = inputArray[i];
    const val = inputArray[i + 1];

    result[key] = Number(val);
  }

  console.log(result);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
