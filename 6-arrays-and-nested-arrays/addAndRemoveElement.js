function addAndRemoveElements(commands) {
  let step = 1;
  let resultArr = [];
  for (let command of commands) {
    if (command === "add") {
      resultArr.push(step);
    } else if (command === "remove") {
      resultArr.pop();
    }
    step++;
  }

  if (resultArr.length === 0) console.log("Empty");
  else resultArr.forEach((e) => console.log(e));
}

addAndRemoveElements(["add", "add", "add", "add"]);
console.log(addAndRemoveElements(["add", "add", "remove", "add", "add"]));
console.log(addAndRemoveElements(["remove", "remove", "remove"]));
