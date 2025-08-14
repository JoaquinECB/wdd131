// Footer año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Mensaje de saludo según hora
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

// Clima con texto e imagen
function showWeather() {
    const temperatureEl = document.getElementById("temperature");
    const iconEl = document.getElementById("weatherIcon");

    // Aquí puedes cambiar valores según tu API o datos reales
    const weatherData = {
        temp: 26,
        condition: "Sunny",
        icon: "images/sunny.png"
    };

    temperatureEl.textContent = `${weatherData.temp}°C - ${weatherData.condition}`;
    iconEl.src = weatherData.icon;
    iconEl.alt = `Weather: ${weatherData.condition}`;
}

// Guardar datos de contacto en localStorage
function saveContactData(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const contactData = { name, email, message };
    localStorage.setItem("contactForm", JSON.stringify(contactData));

    alert("Thank you! Your message has been saved.");
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("greeting")) showGreeting();
    if (document.getElementById("temperature") && document.getElementById("weatherIcon")) showWeather();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.addEventListener("submit", saveContactData);
});
