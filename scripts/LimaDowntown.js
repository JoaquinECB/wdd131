document.getElementById("currentyear").textContent = new Date().getFullYear();

function showGreeting() {
    const greetingEl = document.getElementById("greeting");
    const hours = new Date().getHours();
    let message = "";

    if (hours < 12) {
        message = "Good morning! Ready to explore Lima?";
    } else if (hours < 18) {
        message = "Good afternoon! Let's discover downtown Lima.";
    } else {
        message = "Good evening! Enjoy Lima's night charm.";
    }

    greetingEl.textContent = message;
}

function showWeather() {
    const weatherEl = document.getElementById("weather");
    const temp = 22; // Example temperature
    const condition = "Sunny";

    weatherEl.textContent = `Weather: ${temp}°C - ${condition}`;
}

function saveContactData(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const contactData = { name, email, message };
    localStorage.setItem("contactForm", JSON.stringify(contactData));

    alert("Thank you! Your message has been saved.");
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("greeting")) showGreeting();
    if (document.getElementById("weather")) showWeather();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.addEventListener("submit", saveContactData);
});

const weatherData = {
    temp: 26,
    condition: "sunny", 
    icon: "images/sunny.png"
};

document.getElementById("temperature").textContent = `${weatherData.temp}°C`;

document.getElementById("weatherIcon").src = weatherData.icon;
document.getElementById("weatherIcon").alt = `Weather: ${weatherData.condition}`;
