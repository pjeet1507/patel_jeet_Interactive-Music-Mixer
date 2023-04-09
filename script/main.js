console.log('at least this is working');

const fills = document.querySelectorAll('.CD');
const drops = document.querySelectorAll('.drop');

let draggedPiece = null;

fills.forEach((item) => {
  item.addEventListener('dragstart', handleStartDrag);
  item.addEventListener('dragend', dragEnd);
});

drops.forEach((drop) => {
  drop.addEventListener('dragover', handleDragOver);
  drop.addEventListener('drop', handleDrop);
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

  // Get the audio element corresponding to the dropped piece
  let audioId = draggedPiece.getAttribute('data-audio');
  let audio = document.getElementById(audioId);

  audio.loop = true;

  // Play the audio file
  audio.play();

  // Append the dragged piece to the drop zone
  e.target.appendChild(draggedPiece);
}

const stopBtn = document.querySelector('.stop-btn');

stopBtn.addEventListener('click', function() {
  location.reload();
});

