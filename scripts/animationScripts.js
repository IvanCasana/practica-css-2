document.addEventListener('mousemove', function (e) {
  const seguidores = document.querySelectorAll('.seguidor');

  seguidores.forEach((seguidor, index) => {
    const delay = index * 3; // Controla el retraso de cada seguidor
    setTimeout(() => {
      // Ajustamos la posición tomando en cuenta el scroll
      seguidor.style.transform = `translate(${e.clientX - 25 + window.scrollX}px, ${e.clientY - 25 + window.scrollY}px)`;
    }, delay);
  });
});

function crearSeguidores() {
  const colores = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'pink', 'lime', 'aqua',
    'brown', 'grey', 'lightblue', 'magenta', 'teal', 'salmon', 'coral', 'gold', 'indigo', 'violet'
  ];

  for (let i = 0; i < 250; i++) {
    const seguidor = document.createElement('div');
    seguidor.classList.add('seguidor');
    seguidor.style.backgroundColor = colores[i % colores.length];
    document.body.prepend(seguidor); // Agrega al inicio del body
  }
}

crearSeguidores();
