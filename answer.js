//--------------------- Question - 1 ---------------------//

function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return `${type} | ${truthiness}`;
}console.log(describeValue(5));


//--------------------- Question - 2 ---------------------//

function getDayType(day){
    switch(day.toLowerCase()){
        case "friday":
            case "saturday":
                return "Weekend";
        case "sunday":
        case "monday":
        case "Tuesday":
        case "wednesday":
        case "Thursday":
            return "working day";
        default:
            return "Invalid day";
    }
}


console.log(getDayType("friday"));

//--------------------- Question - 3 ---------------------//

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}
console.log(validateUsername("taws"));

//--------------------- Question - 4 ---------------------//

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

//--------------------- Question - 5 ---------------------//

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
console.log(getChaseVerdict(100, 90, 6));