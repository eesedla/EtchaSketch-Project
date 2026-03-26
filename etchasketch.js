const grid = document.getElementById("grid");

function createGrid(size) {
  grid.innerHTML = ""; 

  const squareSize = 600 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    grid.appendChild(square);
  }
}

createGrid(16);


 grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    // get current opacity, default to 0 if not set yet
    let opacity = parseFloat(e.target.dataset.opacity) || 0;
    
    opacity += 0.1; // increase by 10% each hover
    
    e.target.dataset.opacity = opacity; // save it back
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
});

document.getElementById("newGrid").addEventListener("click", () => {
  let size = prompt("How many squares per side?");
  size = parseInt(size);
  createGrid(size);
});