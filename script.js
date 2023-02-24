const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

const timerDigits = document.querySelector(".timer-digits");

let timerInterval;
let minutes, seconds;
let remainingTime = 4 * 60 * 1000; // 4 minutes in milliseconds

const displayTimer = () => {
  minutes = Math.floor((remainingTime / (60 * 1000)) % 60)
    .toString()
    .padStart(2, "0");
  seconds = Math.floor((remainingTime / 1000) % 60)
    .toString()
    .padStart(2, "0");
  // Update the timer digits
  timerDigits.textContent = `${minutes}:${seconds}`;
};

startButton.addEventListener("click", () => {
  // Disable the start button once the timer has started
  startButton.disabled = true;

  timerInterval = setInterval(() => {
    // Convert the remaining time to hours, minutes, and seconds

    displayTimer();
    // Decrement the remaining time
    remainingTime -= 1000;

    if (remainingTime < 0) {
      // Stop the timer and enable the start button
      clearInterval(timerInterval);
      startButton.disabled = false;
      remainingTime = 4 * 60 * 1000;
      displayTimer();
    }
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  startButton.disabled = false;
});

stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  startButton.disabled = false;
  remainingTime = 4 * 60 * 1000;
  displayTimer();
});

// incrementation top and attempts in judges interface

const btnIncrementsEl = document.querySelectorAll(".operator-btn");
const attemptsInputEl = document.querySelector(".attempts-number");

btnIncrementsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (Number(attemptsInputEl.value) > 0 && btn.textContent === "-") {
      attemptsInputEl.value = Number(attemptsInputEl.value) - 1;
    }
    if (btn.textContent === "+") attemptsInputEl.value = Number(attemptsInputEl.value) + 1;
  });
});
