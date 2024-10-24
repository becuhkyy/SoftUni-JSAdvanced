function heroicInventory(heroes) {
  const result = [];
  heroes = heroes.filter((h) => h !== "");

  for (let hero of heroes) {
    const [name, level, inventory] = hero.split(" / ");
    let items = inventory ? inventory.split(", ") : [];
    result.push({ name, level: Number(level), items });
  }

  return JSON.stringify(result);
}

console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);

const output = [
  { name: "Isacc", level: 25, items: ["Apple", "GravityGun"] },
  { name: "Derek", level: 12, items: ["BarrelVest", "DestructionSword"] },
  { name: "Hes", level: 1, items: ["Desolator", "Sentinel", "Antara"] },
];
