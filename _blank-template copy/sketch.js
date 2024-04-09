let balls = []; // empty array
//attempt at making an array for diff firework colors
let fireworkColors = [];

function setup() {
  let canvas = createCanvas(1600,800);
  canvas.parent("p5-canvas-container");
  background(0, 250);
  fireworkColors.push(color(255, 0, 0)); 
  fireworkColors.push(color(0, 255, 0)); 
  fireworkColors.push(color(0, 0, 255)); 
  fireworkColors.push(color(255, 255, 0));
  fireworkColors.push(color(255, 155, 0));
  fireworkColors.push(color(155, 155, 100));
}

function draw() {
  background(0, 0, 70, 20);

  if (mouseIsPressed) {
    fireworks(mouseX, mouseY);
  }

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.update();
    b.display();
    if (b.alpha <= 0) {
      balls.splice(i, 1);
    }
  }

  //text(frameRate().toFixed(2), 10, 20);
  //text(balls.length, 10, 40);
}

function fireworks(x, y) {
  for (let i = 0; i < 30; i++) {
    let ball = new Ball(x, y,random(5, 30), random(200, 255), random(10, 255), 40);
    balls.push(ball);
  }
}

class Ball {
  constructor(initX, initY, initDia, color) {
    this.x = initX;
    this.y = initY;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);
    this.dia = initDia;
    this.alpha = 255; //this is the opacity, keep it at 255 to begin with i think
    //his.r = r
    //this.g = g
    this.color = color
    //this.b = b
  }
  update() {
    this.x += sin(this.xSpd * 0.1) * 30;
    this.y += sin(this.ySpd * 0.1) * 30;
    this.ySpd += 0.01; // gravity
    this.alpha -= 3;
  }
  speedUp() {
    this.xSpd *= 1.10;
    this.ySpd *= 1.10;
  }
  slowDown() {
    this.xSpd *= 0.95;
    this.ySpd *= 0.95;
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(PI / 3.0);
    fill(this.color[0], this.color[1], this.color[2], this.alpha); 
    ///WHy is it generating white>?
    //fill(this.color, this.alpha); 
    //fill(this.color);
    //if (keyIsPressed) {
     // fill(255)
    //}
    noStroke();
    ellipse(0, 0, 3, 1);
    pop();
  }
}