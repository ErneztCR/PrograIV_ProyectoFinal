document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del navbar
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Obtener el botón toggler y el elemento collapse
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navbarCollapse = document.querySelector('.navbar-collapse');

    // Agregar evento click a cada enlace
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Solo ejecutar en pantallas pequeñas (cuando el toggler es visible)
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});