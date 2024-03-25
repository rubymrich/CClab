/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35). ok
  2. adjust line 20 to reflect your dancer's name, too. ok
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new RubyDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class RubyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.feetx = 0
    this.feety = 100
    this.feetx1 = -15
    this.feety1 = 100
    this.facex = 0
    this.facey = -20


    // add properties for your dancer here:
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //this.x = this.x + 2;
    //this.y = this.y - 1;
    this.x = this.x + this.xSpeed;
    this.y = height / 2 + sin(frameCount * 0.1) * 50; 

    this.feety1 = 80 + sin(frameCount * 0.1) * 30;
    this.feety = 80 + sin(frameCount * 0.1) * 20;

    this.facex = sin(frameCount * 0.1) * 2;

    if (this.x < 250 || this.x > width-250) {
      this.xSpeed = this.xSpeed * -1;
    }

    if (this.y < 250 || this.y > height-250) {
      this.ySpeed *= -1;
    }
    //if (this.x == 200) {
      //console.log("Ni haody");
    
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    
    
    //feet
   
    strokeWeight(7)
    stroke(255,120,0)
    line(0,0,this.feetx,this.feety)
    line(-20,0,this.feetx1,this.feety1)

    

    //back wing illusion
    fill(54,65,120)
    strokeWeight(0)
    ellipse(-7,22+sin(frameCount * 0.1) * 2,60,53)
    //neck
    fill(69,105,153)
    ellipse(-10,0,45,80)
    ellipse(-14,20,60,50)
    //body
    ellipse(-32,40,90,80)
    ellipse(-35,40,80,70)
    //irredencent feathers
    fill(0,random(100,200),random(240,255))
    //ellipse(random(4,10),random(15,30),3)
    fill(0,170,random(200,255))
    ellipse(0,13,0)
    ellipse(0,9,5)
    ellipse(4,13,0)
    ellipse(1,5,3)
    ellipse(12,12,3.5)
    ellipse(10,19,3)
    ellipse(1,20,3)
    ellipse(5,19,3)
    ellipse(8,10,3)
    ellipse(7,27,3)

    //fill(0,random(200,255),random(200,255))
    fill(0,230,255)
    //ellipse(random(0,15),random(10,30),3)
    ellipse(0,13,3)
    ellipse(0,9,3)
    ellipse(4,13,3)
    ellipse(9,9,3)
    ellipse(12,14,3)
    ellipse(1,18,3)
    ellipse(3,19,3)
    ellipse(9,16,3)
    ellipse(8,10,2)
    ellipse(7,27,2)
    //fill(100,random(220,255),random(220,255))
    //ellipse(random(5,10),random(20,35),3)
    fill(255)
    ellipse(3,20,2.3)
    ellipse(7,12,2.3)
    ellipse(12,16,2.3)
    //tailfeathers
    fill(69,105,153)
    triangle(-102,70,-73,23,-20,78)
    fill(85, 151, 173)
    //head
    circle(this.facex,this.facey,40)
  
    //top wing
    fill(68, 130, 158)
    triangle(-90,80+sin(frameCount * 0.1) * 2,-50,10+sin(frameCount * 0.1) * 2,-25,80+sin(frameCount * 0.1) * 2)
    ellipse(-30,38+sin(frameCount * 0.1) * 2,60,85)
   //blush
    fill(255,0,0,30)
    ellipse(-10+sin(frameCount * 0.1) * 2,-13,8,4)
    //ellipse(-10,-13,this.blushx,this.blushy)
    ellipse(13+sin(frameCount * 0.1) * 2,-15,6,3)
    //ellipse(13,-15,this.blushx1,this.blushy1)
    //beak
    fill(255,120,0)
    triangle(0+sin(frameCount * 0.1) * 2,-20,12+sin(frameCount * 0.1) * 2,-15,0+sin(frameCount * 0.1) * 2,-10)
    //eyes
    fill(0)
    circle(-8+sin(frameCount * 0.1) * 2,-20,8)
    circle(10+sin(frameCount * 0.1) * 2,-20,4)
    fill(255)
    circle(-6+sin(frameCount * 0.1) * 2,-21,2)
    circle(11+sin(frameCount * 0.1) * 2,-21,1)

    //hat 
    fill(120,80,20)
    ellipse(-5+sin(frameCount * 0.1) * 2,-40,80,20)
    ellipse(-5+sin(frameCount * 0.1) * 2,-50,40,10)








    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/