function calculateWindChill(tempC, windKmH) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmH, 0.16) + 0.3965 * tempC * Math.pow(windKmH, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const wind = parseFloat(document.getElementById("windSpeed").textContent);
    const windChillEl = document.getElementById("windChill");

    if (temp <= 10 && wind > 4.8) {
        const chill = calculateWindChill(temp, wind).toFixed(1);
        windChillEl.textContent = `${chill} °C`;
    } else {
        windChillEl.textContent = "N/A";
    }

    // Footer data
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});