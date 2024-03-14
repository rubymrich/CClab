let feedingCount = 0;
let heartCount = 1; // time factor for heart animation
let angle = 0;
let tailLength = 100;
let tailWidth = 20;
let strong = 20 + feedingCount * 10;

function setup() {
  let canvas= createCanvas(800, 500);
  canvas.parent("p5-canvas-container")

  frameRate(15);

  //textSize(30)
  //fill(0);
  //text("Feed me!")
}

function draw() {
  background(220, 255, 255, 30);
  if (mouseX > 300 && mouseX < 600 && mouseY < 300 && mouseY > 200) {
    background(255, 220, 200);
  }
  if (mouseX > 300 && mouseX < 600 && mouseY > 300) {
    background(500, 200, 0);
  }

  if (feedingCount > 0) {
    feedingCount -= 0.05;
  } else {
    feedingCount = 0;
  }

  let thiqq = map(feedingCount, 0, 10, 220, 800, true);

  if (thiqq > 400) {
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      strokeWeight(0);
      let size = random(20, 100);
      drawHeart(x, y, size);
    }
  }
  if (mouseX > 300 && mouseX < 600 && mouseY > 300) {
    for (let i = 0; i < 10; i++) {
      let x = random(width);
      let y = random(height);
      drawexclamationmark(x, y);
    }
    angryeyebrows();
  }
  textSize(20);
  fill(0);
  text("Click to feed me!", 60, 30);
  let strong;
  strong = 20 + feedingCount * 10;
  //text("Kibble consumed: " + feedingCount.toFixed(0), 60, 60);
  text("Strength: " + strong.toFixed(0), 60, 60);

  let w = width;
  let h = height;
  let l = 300;
  fill(0);

  // Body
  ellipse(w / 2, h, thiqq, 400);

  // Head
  ellipse(w / 2, h / 2, l, l / 2 + 20);

  let x_cat = 280;
  let y_cat = 130;
  triangle(270, 230, x_cat, y_cat, 400, 230);
  triangle(420, 230, x_cat + 230, y_cat, 530, 230);

  let eye = 255;
  fill(eye);
  ellipse(w / 2 - 60, h / 2, 60, 30);
  ellipse(w / 2 + 70, h / 2, 50, 25);

  fill(0);
  ellipse(w / 2 - 60, h / 2, 20, 35);
  ellipse(w / 2 + 70, h / 2, 20, 30);

  fill(255, 100, 100);
  triangle(390, 270, w / 2 + 10, h / 2 + 30, 430, 270);

  if (mouseX > 300 && mouseX < 600 && mouseY > 300) {
    angryeyebrows();
  }

  if (mouseX > 300 && mouseX < 600 && mouseY < 300 && mouseY > 200) {
    meow();
  }

  // Tail
  let tailX = w / 2 + 100;
  let tailY = h - 90;
  let tailAngle = radians(-60 + sin(angle) * 20);

  push();
  translate(tailX, tailY);
  rotate(tailAngle);
  fill(255, 100, 100);
  strokeWeight(35);
  line(0, 0, tailLength, tailWidth);
  pop();

  angle += 0.05;
  kibble();
  if (thiqq == 800) {
    heartCount++;

    for (let i = 0; i < 50; i++) {
      fill(255, 0, 0);
      drawHeart(340, 240 + heartCount * -5, 35, heartCount * 0.5);
      drawHeart(470, 240, 33, heartCount * 0.5);
      
      let t = 30;
      for (let i = 0; i < 0.001; i++) {
        let x = random(width);
        let y = random(height);

        textSize(t);
        fill(0);
        fill(255, 0, 0);
        text("MORE!    更多!    MEHR!   أكثر!   PLUS!    MÁS!", x, y);
        t += 1;
      }
    }
  } else {
    heartCount = 1;
  }


  if (strong > 250) {
    finalForm();
  }
}
function drawHeart(x, y, size, scl = 1) {
  //SOURCE: https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
  push();
  translate(x, y);
  scale(scl);
  //rotate(frameCount * 0.1);
  beginShape();
  vertex(0, 0);
  bezierVertex(-size / 2, -size / 2, -size, size / 3, 0, size);
  bezierVertex(size, size / 3, size / 2, -size / 2, 0, 0);
  endShape(CLOSE);
  pop();
}

function drawexclamationmark(x, y, size) {
  fill(255, 0, 0);
  strokeWeight(0);
  rect(x, y, 20, 50);
  circle(x + 10, y + 70, 20);
}
///WHY isnt this function being called with the mouse position is on the cat?????
function angryeyebrows() {
  //Angry eyebrows
  push();

  fill(255);
  //stroke(255)
  strokeWeight(15);
  line(400, 260, 500, 230);
  line(300, 230, 400, 250);
  pop();
}
function meow() {
  fill(255, 100, 100);
  //mouth
  ellipse(width / 2 + 10, height / 2 + 50, 40, 10);
  fill(255, 100, 100, 60);
  ellipse(width / 2 - 60, height / 2 + 30, 30, 10);
  ellipse(width / 2 + 70, height / 2 + 30, 30, 10);
  fill(0);
  ellipse(width / 2 - 60, height / 2, 30, 35);
  ellipse(width / 2 + 70, height / 2, 25, 30);
}

function mousePressed() {
  if (mouseX > 300 && mouseX < 540 && mouseY > 280 && mouseY < 310) {
    feedingCount++;
  }
}
function kibble() {
  push();
  strokeWeight(0);
  fill(100, 80, 0);
  ellipse(mouseX, mouseY, 20, 10);
  pop();
}

function finalForm() {
  let r, g, b;
  r = random(200, 255);
  g = random(0, 200);
  b = random(0, 100);
  background(r, g, b);

  background(220);

  // Draw shadow
  beginShape(TRIANGLES);
  strokeWeight(0);
  fill(0, 0, 0, 20);
  vertex(0, height);
  vertex(width, height);
  vertex(width / 2, height * 0.5);
  endShape();

  drawCat();
}

//function drawCat() {
  //fill(0);
  //beginShape(TRIANGLES);
 //vertex(width * 0.6, height * 0.7);
  //vertex(width * 0.4, height * 0.7);
  //vertex(width / 2, height * 0.25);
  //endShape();
  //ellipse(width * 0.6, height * 0.7, 60, 25);
 // ellipse(width * 0.4, height * 0.7, 60, 25);
 // ellipse(width * 0.45, height * 0.4, 50, 38);
  //ellipse(width * 0.56, height * 0.4, 50, 38);
  //ellipse(width * 0.4, height * 0.4, 30, 35);
  //ellipse(width * 0.6, height * 0.4, 30, 35);
  //ellipse(width * 0.4, height * 0.4, 30, 35);
  //ellipse(width * 0.6, height * 0.4, 30, 35);
  // Forearms
  //ellipse(width * 0.37, height * 0.35, 12, 55);
  //ellipse(width * 0.63, height * 0.35, 12, 55);
  // Paws
  //ellipse(width * 0.37, height * 0.3, 20, 14);
  //ellipse(width * 0.63, height * 0.3, 20, 14);
  //ellipse(width / 2, height / 3.5, 70, 50); // Head
  // Ears
 // triangle(
    //width * 0.45,
    //height * 0.3,
   // width * 0.38,
   // height * 0.23,
   // width * 0.53,
   // height * 0.3
  //);
  //triangle(
   // width * 0.55,
    //height * 0.3,
    //width * 0.62,
   // height * 0.23,
    //width * 0.47,
   // height * 0.3
  //);
//}
