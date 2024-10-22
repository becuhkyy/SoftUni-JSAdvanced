function increasingSubsetFromArray(inputArr) {
  return inputArr.reduce((accumulator, currentValue) => {
    if (
      accumulator.length === 0 ||
      accumulator[accumulator.length - 1] < currentValue
    )
      accumulator.push(currentValue);

    return accumulator;
  }, []);
}

increasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
