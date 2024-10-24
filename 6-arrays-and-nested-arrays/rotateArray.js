function rotateArray(inputArr, rotations) {
  const arr = Array.from(inputArr);

  for (let i = 0; i < rotations; i++) {
    const el = arr.pop();
    arr.unshift(el);
  }

  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", 2]);
