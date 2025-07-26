document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');
    let menuOpen = false;

    hamburger.addEventListener('click', function () {
        menuOpen = !menuOpen;
        nav.classList.toggle('open');
        hamburger.innerHTML = menuOpen ? '&times;' : '&#9776;';
        hamburger.setAttribute('aria-label', menuOpen ? 'Close navigation' : 'Open navigation');
    });
});