//PAINTER
let drawing = false;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  //background(220);
  push()
  text("Press the space bar to restart",50,50)
  let r = random(0,255)
  let g = random(0,255)
  let b = random(0,255)
  if (drawing) {
    stroke(0);
    strokeWeight(15);
    stroke(r,g,b);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  if (keyIsPressed && keyCode === 32) {
    background(255);
  }
 
  pop()
}

function mousePressed() {
  drawing = true;
}

function mouseReleased() {
  drawing = false;
}