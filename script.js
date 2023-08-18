function updateCountdown() {
  const now = new Date();
  const currentTimestamp = now.getTime();

  // Calculate the timestamp for the next midnight (12 AM)
  const nextMidnightTimestamp = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  ).getTime();

  // Calculate the time remaining in milliseconds
  const timeRemaining = nextMidnightTimestamp - currentTimestamp;

  // Convert milliseconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
  const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

  const countdownString = ` ${hours} Hrs : ${minutes} Min : ${seconds} Sec`;

  document.getElementById("clock").textContent = countdownString;
}

// Update the countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
