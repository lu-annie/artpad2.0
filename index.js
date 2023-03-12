// derived from https://www.florin-pop.com/blog/2019/04/drawing-app-built-with-p5js/

// https://editor.p5js.org/aferriss/sketches/bhh2UJd_Z

document.getElementById('color');
document.getElementById('background');
document.getElementById('weight');
const undo = document.getElementById('undo');
const clear = document.getElementById('clear');
const download = document.getElementById('download');

var slider = document.getElementById("weight");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

function createName() {
  let name = prompt("Set a name for your file:");
  if (name!=null) {
    saveImage(name);
  }
}

function saveImage(x){
  save(x + ".png");
}

clear.addEventListener('click', () => {
});

undo.addEventListener('click', () => {
});

download.addEventListener('click', () => {
  createName();
});
