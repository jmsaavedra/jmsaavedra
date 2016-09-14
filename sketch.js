function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background('rgba(0,0,0, 0.1)');
  textSize(32);
  text("hello github.io!", mouseX, mouseY);
}

function mouseMoved(){
  fill(random(255), random(255), random(255));
}