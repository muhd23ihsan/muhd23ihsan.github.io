// Konfigurasi ScrollReveal
ScrollReveal().reveal('.hero-content', { origin: 'left', distance: '100px', duration: 1500, delay: 200 });
ScrollReveal().reveal('.hero-visual', { origin: 'right', distance: '100px', duration: 1500, delay: 400 });
ScrollReveal().reveal('.skill-card', { interval: 200, origin: 'bottom', distance: '50px' });

// Smooth Scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
