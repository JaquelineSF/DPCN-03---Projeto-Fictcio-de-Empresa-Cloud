// Load header and footer
document.getElementById("header").innerHTML = fetch('components/header.html').then(response => response.text());
document.getElementById("footer").innerHTML = fetch('components/footer.html').then(response => response.text());

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav .menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
