const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
// const newYear = "01 jan 2022";
let inputValue = document.getElementById("myInput");
inputValue.value = new Date(Date.now() + 10000).toLocaleDateString("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
console.log(
  new Date(Date.now() + 10000).toLocaleDateString("se-SE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
);
function countDown(newYear) {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;

  console.log(newYearDate - currentDate);
}
let a = null;

function getInputValue() {
  inputValue = inputValue.value;
  console.log(inputValue);
  clearInterval(a);

  a = setInterval(() => {
    countDown(inputValue);
  }, 1000);
}
// function getInputValue() {
//   let a = document.getElementById("StartTimer");
//   a = setInterval(countDown, 1000);
// }
function getInputValueforstop() {
  let a = document.getElementById("StopTimer").value;

  clearInterval(a);
}
// setInterval(countDown, 1000);
