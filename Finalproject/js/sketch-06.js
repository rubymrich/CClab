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
}

function draw() {
  background(220);

  // generate
  if (random(1) < 0.02) {
    let x = width / 2;
    let y = height;
    buttons.push(new Button(x, y, random(5, 20)));
  }

  // update and display
  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.move();
    btn.fall();
    btn.checkMouse();
    btn.display();
  }

  // when removing the object, you should flip the for-loop!
  for (let i = buttons.length - 1; i >= 0; i--) {
    let btn = buttons[i];
    if (btn.isDone) {
      buttons.splice(i, 1);
    }
  }
}



class Button {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-8, -3);
    this.rad = rad;
    //
    this.r = 255;
    this.g = 255;
    this.b = 255; // white
    //
    this.isDone = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  fall() {
    this.ySpd += 0.1;
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
        this.isDone = true;
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
    if (this.isDone) {
      fill(random(255), random(255), random(255));
      text("Done!!", this.x + 20, this.y);
    }
    circle(this.x, this.y, this.rad * 2);
  }
}