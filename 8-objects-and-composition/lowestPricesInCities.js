function lowestPricesInCities(inputArr) {
  const result = {};

  for (const token of inputArr) {
    let [townName, productName, price] = token.split(" | ");

    if (result[productName] === undefined) {
      result[productName] = {
        townName,
        price: Number(price),
      };

      continue;
    }

    if (result[productName].price > Number(price)) {
      result[productName] = { townName, price: Number(price) };
    }
  }

  Object.entries(result).forEach((e) =>
    console.log(`${e[0]} -> ${e[1].price} (${e[1].townName})`)
  );
}

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
