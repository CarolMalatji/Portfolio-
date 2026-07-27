// Basic interactivity for the Portfolio

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header if needed
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Form Submission Handling (Preventing page reload for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data (for example purposes)
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                message: contactForm.querySelector('textarea').value
            };

            console.log("Form Submitted:", formData);
            alert("Thank you, " + formData.name + "! Your message has been sent.");
            contactForm.reset();
        });
    }

    // 3. Simple scroll reveal effect (Optional)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.project-card, .timeline-item, .skill-tag');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
