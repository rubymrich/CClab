let vid = document.getElementById("video-background");
var capture;
//SOURCE ON HOW TO DO THE WHOLE VIDEO THING: https://editor.p5js.org/khz2004/sketches/XM9Pyw7OD
function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
}

function draw() {
  image(capture, 0, 0, 320, 240);
  filter(POSTERIZE, 5);
}