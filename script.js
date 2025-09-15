document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Slider Logic ---
    const navItems = document.querySelectorAll('.slider-nav-item');
    const slides = document.querySelectorAll('.slide');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');

            // Update active state for nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update active state for slides
            slides.forEach(slide => {
                if (slide.getAttribute('data-slide') === target) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        });
    });

    // --- Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav-menu');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }
});














document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once it's visible so it doesn't re-animate
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // relative to the viewport
        threshold: 0.1 // 10% of the item must be visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});















document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Optional: stop observing the element once it's visible
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
