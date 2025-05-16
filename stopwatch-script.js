// Stopwatch Variables
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchRunning = false;

// Update Stopwatch Display
function updateStopwatch() {
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;
  document.getElementById("stopwatch-time").textContent = 
    `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Start/Stop Stopwatch
function toggleStopwatch() {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    document.getElementById("start-stopwatch").textContent = "Start";
  } else {
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      updateStopwatch();
    }, 1000);
    document.getElementById("start-stopwatch").textContent = "Stop";
  }
  stopwatchRunning = !stopwatchRunning;
}

// Reset Stopwatch
function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  updateStopwatch();
  document.getElementById("start-stopwatch").textContent = "Start";
  stopwatchRunning = false;
}

// Format Time with Leading Zero
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

// Update Clock
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  document.getElementById("current-time").textContent = 
    `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Update Clock Every Second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time immediately
