function setup() {
  createCanvas(800, 800);
}

function draw() {
  textSize(32);
  fill(mouseX/200, mouseY/200);
  text("hello github.io!", mouseX, mouseY);
}