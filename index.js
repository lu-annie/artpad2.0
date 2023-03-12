// derived from https://www.florin-pop.com/blog/2019/04/drawing-app-built-with-p5js/

// https://editor.p5js.org/aferriss/sketches/bhh2UJd_Z

const colorInput = document.getElementById('color');
const bgColorInput = document.getElementById('background');
const weight = document.getElementById('weight');
const undo = document.getElementById('undo');
const clear = document.getElementById('clear');
const download = document.getElementById('download');
const paths = [];
let currentPath = [];

var slider = document.getElementById("weight");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function createName() {
  let name = prompt("Set a name for your file:");
  if (name!=null) {
    saveImage(name);
  }
}

function saveImage(x){
  save(x + ".png");
}

function draw() {
  noFill();
  background(bgColorInput.value);

  if(mouseIsPressed) {
    if (mouseY>115 === true ) {
        const point = {
      x: mouseX,
      y: mouseY,
      color: colorInput.value,
      weight: weight.value
    };
    currentPath.push(point);
      }
  }
  
  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });
  
}


function mousePressed() {
  currentPath = [];
  paths.push(currentPath);
}

clear.addEventListener('click', () => {
  paths.splice(0);
});

undo.addEventListener('click', () => {
  paths.shift();
});

download.addEventListener('click', () => {
  createName();
});
