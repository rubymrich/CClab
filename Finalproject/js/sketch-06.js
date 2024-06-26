let gravity;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  //background(0);
}

function draw() {
  colorMode(RGB);
  background(20, 20, 100, 25);
  
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}