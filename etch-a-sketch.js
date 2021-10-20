let sketchBody = document.querySelector('.sketch-body');
let content 
let color = document.getElementById("favcolor").value;
let size = document.getElementById("myRange").value;
let gridSize;
let grid = document.getElementById("grid");

gridSize = prompt("How many rows?");
columnNumber = `repeat(${gridSize}, 1fr)`;
document.getElementById("grid").style.gridTemplateColumns = columnNumber;

for (var i = 0; i < gridSize**2; i++){
	content = document.createElement('div');
	content.classList.add('sketch-grid');
	sketchBody.appendChild(content);
	content.addEventListener("mouseover",function(e){
		if(e.buttons == 1){
			color = document.getElementById("favcolor").value;
			this.style.backgroundColor=color;
		}
	});
}

function clearSketch(){
	let cells = document.querySelectorAll('.sketch-grid');
	for (var i = 0; i < cells.length; i++){
		cells[i].style.backgroundColor = "white";
	}
}