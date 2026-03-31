const hour = new Date().getHours();
const greet = document.querySelector("#greeting");

if (hour < 12) greet.textContent = "Good Morning";
else if (hour < 18) greet.textContent = "Good Afternoon";
else greet.textContent = "Good Evening";