let sound1;
let sound2;

let btn;
let btn1;
let buttons = [];

function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  btn = new Button(width / 2 - 60, height / 2, 40);
  btn1 = new Button(width / 2 + 60, height / 2, 40);
}

function draw() {
  background(220);

  btn.checkMouse();
  btn.display();

  btn1.checkMouse();
  btn1.display();
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