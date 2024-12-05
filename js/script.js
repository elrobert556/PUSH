// Selecciona todos los enlaces con la clase "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado de los enlaces
        const targetId = link.getAttribute('href'); // Obtén el ID del destino
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Desplázate suavemente al elemento destino
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});