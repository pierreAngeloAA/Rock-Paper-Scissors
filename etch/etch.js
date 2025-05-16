const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize');

function createGrid(size) {
  container.innerHTML = ''; // limpia la cuadrícula
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // cambia de color al pasar el mouse
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Introduce un nuevo tamaño de cuadrícula (máximo 100):');
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Por favor introduce un número entre 1 y 100.');
  }
});

createGrid(16); // cuadrícula inicial
