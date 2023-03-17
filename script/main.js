console.log('at lest this is working');

const fill = document.querySelectorAll('.CD');
const drp = document.querySelector('.drop');
const d2 = document.querySelector('.d2');
const d3 = document.querySelector('.d3');

fill.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });   
  
  function dragStart() {
    console.log('dragging started');
    const draggedPiece = this
  }
  
  function dragEnd() {
    console.log('dragging ended');
  } 

function handleStartDrag() { 
	console.log('started dragging this piece:', this);

	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('dragged over me'); s
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	// bug fix #1 should go here, and it's at most 3 lines of JS code

	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"
	this.appendChild(draggedPiece);
}


// for(const drag1 of drp ){
//     drag1.addEventListener('dragover', dragOver)
//     drag1.addEventListener('dragenter', dragEnter)
//     drag1.addEventListener('dragleave', dragLeave)
//     drag1.addEventListener('drop', dragDrop)
// }

// function dragOver() {
//     console.log('over')

// }

// function dragEnter() {
//     console.log('End')

// }

// function dragLeave() {
//     console.log('leave')

// }

// function dragDrop() {
//     console.log('drop')

// }