function subtract() {
  const firstElement = document.getElementById("firstNumber");
  const secondElement = document.getElementById("secondNumber");

  const result = Number(firstElement.value) - Number(secondElement.value);

  const resultDiv = document.getElementById("result");

  resultDiv.innerText = result;
}
