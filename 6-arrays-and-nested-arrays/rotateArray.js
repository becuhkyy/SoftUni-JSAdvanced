function rotateArray(inputArr) {
  const arr = Array.from(inputArr);
  const rotations = arr.pop();

  for (let i = 0; i < rotations; i++) {
    const el = arr.pop();
    arr.unshift(el);
  }

  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", 2]);
