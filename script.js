// Prompt for user's name
var name = prompt("Enter Your name Please! 🥰");

let h1 = document.querySelector('h1');
if (name === "null" ) {
    h1.textContent = 'HAPPY BIRTHDAY DEAR ' + "You have not filled name";
} else {
    h1.textContent = 'HAPPY BIRTHDAY DEAR ' + name;
}

// Select elements for displaying time
var dayselem = document.querySelector("#dayselem");
var hourselem = document.querySelector("#hourselem");
var minuteselem = document.querySelector("#minuteselem");
var secondselem = document.querySelector("#secondselem");

// Set interval to update the timer every second
setInterval(eventTimer, 1000);

function eventTimer() {
    var today = new Date();
    var future = new Date(2024, 8, 4, 0, 0, 0); // Change the date manually: year, month (0-based), day, hour, minute, second

    var diff = future - today;
    if (diff < 0) {
        diff = 0; // Ensure diff doesn't go negative
    }

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(diff / (1000 * 60));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    dayselem.textContent = days;
    hourselem.textContent = hours;
    minuteselem.textContent = minutes;
    secondselem.textContent = seconds;
}

function stopCounter() {
    clearInterval(intervalID);
    dayselem.textContent = 0;
    hourselem.textContent = 0;
    minuteselem.textContent = 0;
    secondselem.textContent = 0;
}

// Optionally, you can store the interval ID if you want to stop the timer
var intervalID = setInterval(eventTimer, 1000);