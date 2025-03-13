// Function to save click history
function saveClickHistory(message) {
    let history = JSON.parse(localStorage.getItem("clickHistory")) || [];
    history.push({ message, timestamp: new Date().toLocaleString() });
    localStorage.setItem("clickHistory", JSON.stringify(history));
}

// Function to get click history and display it
function loadClickHistory() {
    let history = JSON.parse(localStorage.getItem("clickHistory")) || [];
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = ""; // Clear existing list
    history.forEach((entry) => {
        let li = document.createElement("li");
        li.textContent = `${entry.timestamp}: ${entry.message}`;
        historyList.appendChild(li);
    });
}

// Function to save last timer duration
function saveLastTimerDuration(duration) {
    localStorage.setItem("lastTimer", duration);
}

// Function to load and display last timer duration
function loadLastTimerDuration() {
    let lastDuration = localStorage.getItem("lastTimer") || "Not set";
    document.getElementById("lastTimer").textContent = lastDuration + " seconds";
}

// Function to start the timer
function startTimer() {
    let duration = 30; // 30 seconds
    saveLastTimerDuration(duration);
    saveClickHistory("Started a 30-second timer.");
    loadClickHistory(); // Refresh history display
    loadLastTimerDuration(); // Update UI with last timer

    // (Optional) Simulate timer countdown
    console.log(`Timer started for ${duration} seconds`);
}

// Attach event listener to the button
document.getElementById("startTimerBtn").addEventListener("click", startTimer);

// Load stored data when the page loads
window.onload = function () {
    loadClickHistory();
    loadLastTimerDuration();
};