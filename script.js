document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const form = document.getElementById('contact-form');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = form.querySelector('#name')?.value.trim() || '';
            const business = form.querySelector('#business')?.value.trim() || '';
            const phone = form.querySelector('#phone')?.value.trim() || '';
            const message = form.querySelector('#message')?.value.trim() || '';

            const text = `Hola LG.Digital, soy ${name}.\nRubro/empresa: ${business}.\nTeléfono: ${phone}.\nObjetivo: ${message}`;
            const whatsappUrl = `https://wa.me/5493364354039?text=${encodeURIComponent(text)}`;

            window.open(whatsappUrl, '_blank', 'noopener');
            form.reset();
        });
    }
});
