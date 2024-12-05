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

// Seleccionamos el botón y el contenedor con la clase 'token-display'
const toggleButton = document.getElementById('toggleButton');
const tokenDisplay = document.querySelector('.token-display');

// Función para alternar la visibilidad del elemento con la clase 'token-display'
toggleButton.addEventListener('click', () => {
  if (tokenDisplay.style.display === 'none') {
    tokenDisplay.style.display = 'block'; // Mostrar el elemento
  } else {
    tokenDisplay.style.display = 'none'; // Ocultar el elemento
  }
});
