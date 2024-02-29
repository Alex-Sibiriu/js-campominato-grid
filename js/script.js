const grid = document.getElementById('grid-container');
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
let maxSquares;

btnStart.addEventListener('click', startGame);
btnRestart.addEventListener('click', startGame);

grid.append(btnStart);

/**************
  FUNCTIONS
**************/
// Funzione di avvio gioco
function startGame() {
  reset();
  
  const difficulty = document.getElementById('difficulty').value;

  setMaxSquares(difficulty);
  createGrid(difficulty);

  btnStart.classList.add('d-none');
  btnRestart.classList.remove('disable');
}

// Funzione per impostare il numero di quadrati
function setMaxSquares(difficulty) {
  if (difficulty === 'easy-grid') {
    maxSquares = 49;
  } else if (difficulty === 'medium-grid') {
    maxSquares = 81;
  } else {
    maxSquares = 100;
  }
}

// Funzione per creare la griglia
function createGrid(difficulty) {
  grid.className = difficulty;
  for (let i = 1; i <= maxSquares; i++) {
    const square = createSquare(i);
    grid.append(square);
  }
}

// Funzione per creare i quadrati
function createSquare(indexN) {
  const cell = document.createElement('div');
  cell.className = 'square';

  cell.addEventListener('click', function() {
    this.classList.toggle('clicked');
    this.innerHTML = (this.classList.contains('clicked')) ? indexN : '';
    checkWin();
  })

  return cell;
}

// Funzione per controllare se il giocatore ha vinto
function checkWin() {
  const allClickedSquares = document.querySelectorAll('.clicked');

  if (allClickedSquares.length === maxSquares) printResult();
}

// Funzione per stampare il risultato
function printResult() {
  const message = document.createElement('div');
  message.className = 'game-end';
  message.classList.add('win');
  message.innerHTML = 'Hai Vinto!';
  grid.append(message);
}

// Funzione di reset della griglia
function reset() {
  grid.innerHTML = '';
}