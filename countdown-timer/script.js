const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const remainingSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(remainingSeconds / 60 / 60 / 24);
  const hours = Math.floor(remainingSeconds / 60 / 60) % 24;
  const minutes = Math.floor(remainingSeconds / 60) % 60;
  const seconds = Math.floor(remainingSeconds) % 60;

  console.log(days, hours, minutes, seconds);
  daysEl.innerText = days;
  hoursEl.innerText = format(hours);
  minsEl.innerText = format(minutes);
  secondsEl.innerText = format(seconds);
}

function format(time) {
    return time < 10 ? `0${time}`: time
}

countdown();

setInterval(countdown, 1000);
