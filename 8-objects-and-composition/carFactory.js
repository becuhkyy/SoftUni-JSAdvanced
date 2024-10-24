function carFactory(order) {
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  const carriages = [
    { type: "hatchback", color: "" },
    { type: "coupe", color: "" },
  ];

  const selectedEngine = engines
    .sort((a, b) => a.power - b.power)
    .find((e) => order.power <= e.power);

  const selectedCariadge = carriages.find((c) => c.type === order.carriage);

  let selectedWheelsize = Math.floor(order.wheelsize);

  selectedWheelsize =
    selectedWheelsize % 2 === 0 ? --selectedWheelsize : selectedWheelsize;

  return {
    model: order.model,
    engine: selectedEngine,
    carriage: {
      ...selectedCariadge,
      color: order.color,
    },
    wheels: Array.from({ length: 4 }, () => selectedWheelsize),
  };
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
