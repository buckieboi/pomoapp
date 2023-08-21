// Global state variables
let startTime;
let timeInterval;
let running = false;
let rounds = 0;

// DOM elements
const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
const roundsDisplay = document.getElementById('roundsDisplay');

// Function to update the display with the current time
function updateDisplay(minutes, seconds) {
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Click event listener for the Start/Pause button
startStopButton.addEventListener('click', function() {
    if (running) {
        // If timer is running, then pause it
        clearInterval(timeInterval);
        running = false;
        startStopButton.textContent = "Start";
    } else {
        // Determine the start time
        if (!startTime) {
            startTime = Date.now();
        } else {
            // If timer was paused, adjust start time for the pause duration
            const elapsedTime = (25 * 60) - (parseInt(timerDisplay.textContent.split(":")[0]) * 60 + parseInt(timerDisplay.textContent.split(":")[1]));
            startTime = Date.now() - elapsedTime * 1000;
        }

// ... (rest of the code)

// Timer logic
timeInterval = setInterval(function() {
    const totalSeconds = (25 * 60) - Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    console.log(minutes, seconds); // Add this to debug

    // Update timer display
    updateDisplay(minutes, seconds);

    // Check if timer has finished
    if (minutes === 0 && seconds === 0) {
        console.log("Timer reached zero."); // This will help in debugging
        rounds++;
        roundsDisplay.textContent = `Rounds: ${rounds}`;
        clearInterval(timeInterval); // Stop the timer
        alert('Time is up!');
        running = false;
        startStopButton.textContent = "Start";
        updateDisplay(25, 0); // Reset the timer display
        startTime = null;  // Reset the start time for the next round
    }
}, 1000);

// ... (rest of the code)


        // Adjust global state and button text
        running = true;
        startStopButton.textContent = "Pause";
    }
});
