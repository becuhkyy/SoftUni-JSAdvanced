function previousDay(inputArr) {
  const [year, month, day] = inputArr;

  const dateObj = new Date(year, month - 1, day);

  dateObj.setDate(dateObj.getDate() - 1);

  console.log(
    `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
  );
}

previousDay([1994, 9, 30]);
