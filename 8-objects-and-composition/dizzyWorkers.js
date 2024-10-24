function dizzyWorkers(worker) {
  if (!worker.dizziness) return worker;

  worker.dizziness = false;
  let water = worker.weight * worker.experience * 0.1;
  worker.levelOfHydrated += water;
  return worker;
}

dizzyWorkers({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
