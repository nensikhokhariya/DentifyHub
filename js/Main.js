const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const hamburgerButton = document.querySelector('.hamburger-button');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});
