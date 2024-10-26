function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const input = JSON.parse(
      document.querySelector("#inputs > textarea").value
    );

    if (!input) alert("wtf");

    const restaurants = {};

    for (const restaurant of input) {
      const [name, workers] = restaurant.split(" - ");

      if (!restaurants[name])
        restaurants[name] = {
          totalSalaries: 0,
          bestSalary: 0,
          workers: [],
        };

      for (const worker of workers.split(", ")) {
        let [workerName, salary] = worker.split(" ");

        restaurants[name].totalSalaries += +salary;

        restaurants[name].bestSalary = Math.max(
          restaurants[name].bestSalary,
          +salary
        );
        restaurants[name].workers.push({
          name: workerName,
          salary: +salary,
        });
      }
    }

    const bestRestaurant = Object.entries(restaurants)
      .map(([name, data]) => ({
        name,
        averageSalary: data.totalSalaries / data.workers.length,
        bestSalary: data.bestSalary,
        workers: data.workers,
      }))
      .sort((a, b) => b.averageSalary - a.averageSalary)[0];

    if (!bestRestaurant) {
      alert("No valid restaurant data found.");
      return;
    }

    const output1 = `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurant.averageSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    document.querySelector("#bestRestaurant p").innerText = output1;

    const output2 = bestRestaurant.workers
      .sort((a, b) => b.salary - a.salary)
      .map((worker) => `Name: ${worker.name} With Salary: ${worker.salary}`)
      .join(" ");

    document.querySelector("#workers > p").innerText = output2;
  }
}
