const grid = document.getElementById('grid-container');
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const difficulty = document.getElementById('difficulty').value;

btnStart.addEventListener('click', startGame);
btnRestart.addEventListener('click', startGame);

grid.append(btnStart);

///////// FUNCTIONS
function startGame() {
  reset();
  
  const difficulty = document.getElementById('difficulty').value;
  
  let maxSquares;

  if (difficulty === 'easy-grid') {
    maxSquares = 49;
  } else if (difficulty === 'medium-grid') {
    maxSquares = 81;
  } else {
    maxSquares = 100;
  }

  for (i = 1; i <= maxSquares; i++) {
    btnStart.classList.add('d-none')
    const square = createSquare(i);
    
    grid.classList.remove('easy-grid', 'medium-grid', 'hard-grid');
    grid.classList.add(difficulty);
    grid.append(square);
  }

  btnRestart.classList.remove('disable');
}

function createSquare(indexN) {
  const cell = document.createElement('div');
  cell.className = 'square';

  cell.addEventListener('click', function() {

    this.classList.toggle('clicked');

    this.innerHTML = (this.classList.contains('clicked')) 
                    ? this.innerHTML = indexN
                    : this.innerHTML = '';
  })

  return cell;
}

function reset() {
  grid.innerHTML = '';
}