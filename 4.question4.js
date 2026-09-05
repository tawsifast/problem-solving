function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }

  fare = fare + waitingMinutes * 2;

  if (isNight) {
    fare = fare + fare * 0.2;
  }

  return fare;
}
console.log(getCngFare(10, true, 10));