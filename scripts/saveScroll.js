// Guardar la posición del scroll
window.onbeforeunload = function () {
  localStorage.setItem('scrollPosition', window.scrollY);
};

// Restaurar la posición del scroll
window.onload = function () {
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
    localStorage.removeItem('scrollPosition'); // Limpiar la posición guardada
  }
};