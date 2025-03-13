// Efecto básico al hacer clic en el botón "Platiquemos"
document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Envíame un mensaje para platicar.');
});