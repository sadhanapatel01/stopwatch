let seconds = 0;
let tens = 0;
let interval;

const startButton = document.getElementById("button-start");
const stopButton = document.getElementById("button-stop");
const resetButton = document.getElementById("button-reset");
const secondsDisplay = document.getElementById("seconds");
const tensDisplay = document.getElementById("tens");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    clearInterval(interval);
    interval = setInterval(() => {
        tens++;
        if (tens > 99) {
            seconds++;
            tens = 0;
        }
        secondsDisplay.innerHTML = (seconds < 10 ? "0" : "") + seconds;
        tensDisplay.innerHTML = (tens < 10 ? "0" : "") + tens;
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    secondsDisplay.innerHTML = "00";
    tensDisplay.innerHTML = "00";
}