let vid = document.getElementById("video-background");
let lastMouseX = 0;
let lastMouseY = 0;
let lastTime = 0;
var t = 0;
let k = 15; 
let n = 1; 
let r;
let theta;
let angleStep = 0.01;
let rotationAngle = 0;
let speed = 0;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://www.w3schools.com/jsref/jsref_abs.asp
  document.addEventListener('mousemove', function(event) {
    let currentTime = new Date().getTime();
    let deltaX = event.clientX - lastMouseX;
    let deltaY = event.clientY - lastMouseY;
    let deltaTime = currentTime - lastTime;

    let speedX = Math.abs(deltaX) / deltaTime;
    let speedY = Math.abs(deltaY) / deltaTime;

    speed = Math.sqrt(speedX * speedX + speedY * speedY);

    vid.playbackRate = 1 + speed * 0.8; 
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    lastTime = currentTime;
  });
}

function draw() {
  clear();

  cycle();
  drawWheel();
  if (mouseIsPressed) {
    rotationAngle += speed * 0.4; 
  }
}

function mousePressed() {
  vid.play();
}

function mouseReleased() {
  vid.pause();
}

function cycle() {
  fill(155,0,100)
  stroke(155,0,100)
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
  fill(0)
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
 