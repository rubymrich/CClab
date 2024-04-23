let sound1;
let sound2;

let x = 250;
let y = 200;
let rad = 100;

let r = 255;
let g = 255;
let b = 255;

function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}

function draw() {
  background(220);

  let distance = dist(x, y, mouseX, mouseY);
  //text(distance, mouseX, mouseY);

  if (distance < rad) {
    // in
    r = 255;
    g = 255;
    b = 0; // yellow
    if (mouseIsPressed) {
      r = 255;
      g = 0;
      b = 0; // red
      if (sound1.isPlaying() == false) {
        sound1.play();
      }
    }
  } else {
    // out
    r = 255;
    g = 255;
    b = 255;
  }

  // display the circle
  push();
  fill(r, g, b);
  circle(x, y, rad * 2);
  pop();

  // display text
  text("circular button", 10, 20);
}