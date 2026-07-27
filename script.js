document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling for nav links
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Contact Form handling
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message, Selina will get back to you soon!');
        form.reset();
    });
});
