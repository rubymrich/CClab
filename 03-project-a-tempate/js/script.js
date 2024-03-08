let angle = 0;
let tailLength = 100; // Length of the tail
let tailWidth = 20; // Width of the tail
let thiqqSlider;

function setup() {
  let canvas= createCanvas(800, 500);
 canvas.parent("p5-canvas-container")
  thiqqSlider = createSlider(220, 800, 100);
  thiqqSlider.position(50, 40);
  frameRate(15);
  
  //textSize(30)
  //fill(0);
  //text("Feed me!")
}

function draw() {
  background(220, 255, 255, 30); 
  
   let thiqq = thiqqSlider.value();

if (thiqq > 400) { 
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      strokeWeight(0)
      let size = random(20, 100);
      drawHeart(x, y, size);
    }

  
}
  textSize(20)
  fill(0);
  text("Feed me!", 60,30)
  
  let w = width;
  let h = height;
  let l = 300;
  fill(0);

  //let thiqq = thiqqSlider.value();

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
  
  if (thiqq ==800) { 
    for (let i = 0; i < 50; i++) {
      fill(255,0,0)
      drawHeart(340, 240, 35);
      drawHeart(470, 240, 33);
    ///WHY ISNT T INCREASING?
    let t = 30 
    for (let i = 0; i < .001; i++) {
      let x = random(width);
      let y = random(height);
       
      textSize(t);
      fill(0);
      fill(255,0,0)
      text("MORE!    更多!    MEHR!   أكثر!   PLUS!    MÁS!", x, y);
      t +=1
    }
      
    }}
}


function drawHeart(x, y, size) {
  //SOURCE: https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);}