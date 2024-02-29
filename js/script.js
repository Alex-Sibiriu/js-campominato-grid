const grid = document.getElementById('grid-container');

for (i = 1; i <= 100; i++) {
  const square = createSquare(i);
  grid.append(square);
}

///////// FUNCTIONS
function createSquare(index) {
  const cell = document.createElement('div');
  cell.className = 'square';

  cell._cellID = index;

  cell.addEventListener('click', function() {

    this.classList.toggle('clicked');

    this.innerHTML = (this.classList.contains('clicked')) 
                    ? this.innerHTML = this._cellID 
                    : this.innerHTML = '';
  })

  return cell;
}