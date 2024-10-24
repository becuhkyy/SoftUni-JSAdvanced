function storeCatalogue(inputArr) {
  const result = {};

  for (const item of inputArr) {
    const [product, price] = item.split(" : ");

    const letter = product.slice(0, 1).toUpperCase();

    if (result[letter] === undefined) result[letter] = [];

    result[letter].push({ name: product, price: Number(price) });
  }

  const sorted = Object.entries(result).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sorted.forEach(([letter, products]) => {
    console.log(letter);
    products
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((p) => console.log(`  ${p.name}: ${p.price}`));
  });
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
