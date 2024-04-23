//BIKER
var t = 0;
let k = 15; 
let n = 1; 
let r;
let theta;
let angleStep = 0.01;
let rotationAngle = 0;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(255);
  cycle();
  drawWheel();
  if (mouseIsPressed) {
   rotationAngle += 0.04; 
  }
  
}

function cycle() {
  fill(0)
  //head
  circle(width/2,height/3,40)
  //torso
  ellipse(width/2,height/3+45,40,60)
  //bun
  circle(width/2-20,height/3,15)
  //nose
  triangle(width/2+10,height/3-15,width/2+22,height/3+10,width/2+10,height/3+10)
  let y1 = height / 1.35 + sin(rotationAngle) * 20
  let y2 = height / 1.35 + sin(rotationAngle + PI) * 20;
  
  ellipse(width / 2 + 10, y1, 20, 10);
  ellipse(width / 2 - 10, y2, 20, 10); 
  push()
  strokeWeight(14)
  //knee
  let x1 = (width / 2+30) + sin(rotationAngle-PI) * 20
  let x2 = (width / 2+20)+ sin(rotationAngle) * 20;
  //leg
  line(width / 2 + 10,y1,x1,height*.6)
  line(width / 2 - 10,y2,x2,height*.6)
  line(width / 2,height/2,x1,height*.6)
  line(width / 2,height/2,x2,height*.6)
  pop()
  push()
     //arms
  strokeWeight(7)
  line(width/2,height*.4,width*0.66,height/2)
  strokeWeight(6)
  line(width/2-5,height*.38,width*0.7,height/2)
  pop()
  
  //seat
  ellipse(width/2+5,height/2+18,40,20)
  //bike lines
  push()
  strokeWeight(6)
  line(width/2+5,height/2+18,width/3,height*.75)
  line(width/2+5,height/2+18,width*.70,height*.75)
  line(width/3,height*.7,width*.70,height*.7)
  line(width*0.64,height*0.7,width*0.7,height/2)
  ellipse(width*0.66,height/2,20,10)
  ellipse(width*0.68,height/2,20,10)
  pop()
}

function drawWheel() {
  circle(width/3,height*.75,100)
  circle(width*.70,height*.75,100)
  //spokes
  fill(255)
  push()
  //source for how I got the wheels to spin https://editor.p5js.org/kk4597/sketches/oOGCPiykM
  translate(width/3, height*.75);
  rotate(rotationAngle);

  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += angleStep) {
    theta = n * angle;
    r = 50 * cos(k * theta);
    let x = r * cos(theta);
    let y = r * sin(theta);
    //fill(100);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop()
  push()
  translate(width*.70, height*.75)
  rotate(rotationAngle);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += angleStep) {
    theta = n * angle;
    r = 50 * cos(k * theta);
    let x = r * cos(theta);
    let y = r * sin(theta);
    //fill(100);
    vertex(x, y);
  }
  endShape(CLOSE);

  pop()
}
 