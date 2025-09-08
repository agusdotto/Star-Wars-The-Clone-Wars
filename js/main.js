document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('#main-nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            // Alterna la clase 'is-active' para mostrar/ocultar el menú
            navMenu.classList.toggle('is-active');

            // Actualiza el atributo aria-expanded para accesibilidad
            const isExpanded = navMenu.classList.contains('is-active');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);

            // Cambia el ícono de hamburguesa (fa-bars) a una X (fa-xmark) y viceversa
            const icon = hamburgerBtn.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
});