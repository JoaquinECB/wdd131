// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Select the footer paragraphs
const footer = document.querySelector('footer');
if (footer) {
    const paragraphs = footer.querySelectorAll('p');
    if (paragraphs.length > 0) {
        paragraphs[0].textContent = `© ${currentYear}`;
    }
    if (paragraphs.length > 1) {
        paragraphs[1].textContent = `Last Modified: ${lastModified}`;
    }
}