function buyFruit(fruit, weight, price) {
  const money = (weight * price) / 1000;
  const weightInKg = weight / 1000;

  return `I need \$${money.toFixed(2)} to buy ${weightInKg.toFixed(
    2
  )} kilograms ${fruit}.`;
}

console.log(buyFruit("apple", 1000, 2.5)); // I need $2.5 to buy 1000 kilograms apple.
