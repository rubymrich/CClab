//painter
let vid = document.getElementById("video-background");
let drawing = false;
let strokeColor = [0, 0, 0];

function setup() {
  createCanvas(400, 400);
  background(255)
}

function draw() {
  //clear();
  //background(210);
  push();
  text("Press the space bar to restart", 50, 50);
  text("R = Red, B = Blue, Y = Yellow, G = Green", 50, 80);
  if (drawing) {
    stroke(0);
    strokeWeight(15);
    stroke(strokeColor[0], strokeColor[1], strokeColor[2]);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  pop();
}

function mousePressed() {
  drawing = true;
  vid.play();
}
function mouseReleased() {
  drawing = false;
  vid.pause();
} 



function keyPressed() {//color options 
  if (key === 'r' || key === 'R') {
    strokeColor = [255, 0, 0]; 
  } 
  else if (key === 'g' || key === 'G') {
    strokeColor = [0, 255, 0]; 
  } 
  else if (key === 'b' || key === 'B') {
    strokeColor = [0, 0, 255]; 
  } 
  else if (key === 'y' || key === 'Y') {
    strokeColor = [255, 255, 0];  

  } 
  else if (key === 'w' || key === 'W') {
    strokeColor = [255];  
  
}}

function keyReleased() {
  if (keyCode === 32) {
    background(255);
}}