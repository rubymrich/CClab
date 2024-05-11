let sound1;
let sound2;

function preload() {
  sound1 = loadSound("assets/beat.mp3");
  sound2 = loadSound("assets/kick.mp3");
}

let circles = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5-canvas-container");

  let centerX = width / 2;
  let centerY = height / 2;
  let radius = 200;
  for (let i = 0; i < 10; i++) {
    let angle = TWO_PI * i;
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;
    let color = randomColor();
    let circle = new Circle(x, y, 10, angle, color, i);
    circles.push(circle);
  }
}

function draw() {
  background(0,42,85, 130);
  for (let circle of circles) {
    circle.update();
    circle.checkMouse();
    circle.display();
  }
}

class Circle {
  constructor(x, y, diameter, angle, color, index) {
    this.x = x;
    this.y = y;
    this.diameter = random(20, 80);
    this.angle = angle;
    this.speed = random(0.01, 0.03);
    this.color = color;
    this.initialColor = color; 
    this.index = index; // Index of the circle
  }

  update() {
    this.angle += this.speed;
    let radius = 200;
    this.x = width / 2 + cos(this.angle) * radius;
    this.y = height / 2 + sin(this.angle) * radius;
  }

  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.diameter / 2) {
      this.color = color(255, 255, 0); 
      if (mouseIsPressed && !sound1.isPlaying()) {
        sound1.play();
        let randomIndex = floor(random(3)); //seems like its getting stuck on the biking page?! 
        if (randomIndex === 0) {
          goToNewPage("sketch-02.html"); //biker
        } else if (randomIndex === 1) {
          goToNewPage("sketch-03.html");//drawing page
        } else {
          goToNewPage("sketch-06.html"); //selfie camera
        }
      }
    } else {
      this.color = this.initialColor;
    }
  }

  display() {
    fill(this.color);
    strokeWeight(0);
    circle(this.x, this.y, this.diameter);
  }
}

function randomColor() {
  let r = random(220, 255);
  let g = random(0, 255);
  let b = random(10, 100);
  return color(r, g, b, 190);
}

function goToNewPage(url) {
  window.location.href = url;
}