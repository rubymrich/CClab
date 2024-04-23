let sound1;
let sound2;

let buttons = [];

function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  for (let y = 100; y <= 300; y += 50) {
    for (let x = 100; x <= 400; x += 50) {
      buttons.push(new Button(x, y, 20));
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.checkMouse();
    btn.display();
  }
}



class Button {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    //
    this.r = 255;
    this.g = 255;
    this.b = 255; // white
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // in
      this.r = 255;
      this.g = 255;
      this.b = 0; // yellow
      if (mouseIsPressed) {
        this.r = 255;
        this.g = 0;
        this.b = 0; // red
        if (sound1.isPlaying() == false) {
          sound1.play();
        }
        //background(random(255), random(255), random(255));
      }
    } else {
      // out
      this.r = 255;
      this.g = 255;
      this.b = 255; // white
    }
  }
  display() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.rad * 2);
  }
}