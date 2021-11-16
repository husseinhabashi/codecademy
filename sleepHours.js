const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 9;
  } else if (day === "friday") {
    return 5;
  } else if (day === "saturday") {
    return 9;
  } else {
    return 10;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours == idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You need a bit more sleep");
    console.log(`You've had ${getActualSleepHours()} hour(s) this week`);
    console.log(`You need ${getIdealSleepHours()} hour(s) per week`);
    console.log(
      `You have ${idealSleepHours - actualSleepHours} hour(s) to make up!`
    );
  } else {
    console.log("You've had too much sleep!");
    console.log(
      `You've had ${getActualSleepHours()} hour(s) of sleep this week`
    );
    console.log(`You only need ${getIdealSleepHours()} hour(s) per week`);
    console.log(
      `You've slept an extra ${
        actualSleepHours - idealSleepHours
      } hour(s) this week`
    );
  }
};

console.log(calculateSleepDebt());
