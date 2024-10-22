function timeToWalk(inputArr) {
  const [steps, stepLength, speed] = inputArr;

  const distanceToDestinationInMeters = steps * stepLength;
  const speedInMetersPerSecond = (speed * 1000) / 3600;
  const breaksInSeconds = Math.floor(distanceToDestinationInMeters / 500) * 60;
  const timeTakenInSeconds =
    breaksInSeconds + distanceToDestinationInMeters / speedInMetersPerSecond;

  const hours = Math.floor(timeTakenInSeconds / 3600);
  const minutes = Math.floor(timeTakenInSeconds / 60);
  const seconds = Math.round(timeTakenInSeconds % 60);

  console.log(
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  );
}

timeToWalk([2564, 0.7, 5.5]);
