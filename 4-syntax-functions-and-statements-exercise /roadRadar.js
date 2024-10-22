function roadRadar(inputArr) {
  let [speed, area] = inputArr;
  speed = Number(speed);

  let difference = 0;
  let speedLimit = 0;
  let status = "";

  function getStatus(difference) {
    if (difference > 0 && difference <= 20) return "speeding";
    else if (difference > 20 && difference <= 40) return "excessive speeding";
    else if (difference > 40) return "reckless driving";
  }

  switch (area) {
    case "motorway":
      speedLimit = 130;
      difference = speed - speedLimit;
      status = getStatus(difference);
      break;
    case "interstate":
      speedLimit = 90;
      difference = speed - speedLimit;
      status = getStatus(difference);
      break;
    case "city":
      speedLimit = 50;
      difference = speed - speedLimit;
      status = getStatus(difference);
      break;
    case "residential":
      speedLimit = 20;
      difference = speed - speedLimit;
      status = getStatus(difference);
      break;
  }

  if (difference <= 0) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
