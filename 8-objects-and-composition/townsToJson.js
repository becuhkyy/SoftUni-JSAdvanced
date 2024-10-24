function townsToJson(towns) {
  towns = towns.splice(1);
  const result = [];

  for (let town of towns) {
    const [name, lat, lon] = town.replaceAll("|", "").trim().split("  ");
    result.push({
      Town: name,
      Latitude: parseFloat(Number(lat).toFixed(2)),
      Longitude: parseFloat(Number(lon).toFixed(2)),
    });
  }

  return JSON.stringify(result);
}

console.log(
  townsToJson([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
