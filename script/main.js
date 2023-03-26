console.log('at least this is working');

const fill = document.querySelectorAll('.CD');
const drps = document.querySelectorAll('.drop');
// new thing------
const reloadBtn = document.getElementById('reload-btn');


let draggedPiece = null;

fill.forEach((item) => {
  item.addEventListener('dragstart', handleStartDrag);
  item.addEventListener('dragend', dragEnd);
});

drps.forEach((drp) => {
  drp.addEventListener('dragover', handleDragOver);
  drp.addEventListener('drop', handleDrop);
});

function handleStartDrag() {
  console.log('started dragging this piece:', this);
  draggedPiece = this;
}

function dragEnd() {
  console.log('dragging ended');
}

function handleDragOver(e) {
  e.preventDefault();
  console.log('dragged over me');
}

function handleDrop(e) {
  e.preventDefault();
  console.log('dropped something on me');
  const targetDrop = this;
  console.log('targetDrop:', targetDrop);
  console.log('draggedPiece:', draggedPiece);
  targetDrop.appendChild(draggedPiece);
}


// this is uselessss

reloadBtn.addEventListener('click', function() {
  location.reload();
});

// stop button with a class of reload thet reloads the page