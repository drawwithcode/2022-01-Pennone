class Circles {
  constructor(xpos, ypos, radius, element, rate){
    this.x = xpos;
    this.y = ypos;
    this.r = radius;
    this.e = element;
    this.ra = rate;
    this.color = [random(255), random(255), random(255)];
  }

  move() {
    this.r += this.ra;

    push();
    fill(this.color);
    if (this.e >= 0 && this.e < 1){
      circle(this.x, this.y, this.r);
    } else if (this.e >= 1){
      square(this.x, this.y, this.r);
    }
    pop();
  }
}

let circles = [];

let numCircles = 0;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(30);

  angleMode(DEGREES);
  rectMode(CENTER);

  noStroke();

  console.log("click wherever");

  circles.push(new Circles(random(windowWidth), random(windowHeight), random(20), random(2), random(2)));
}

function draw() {
  // put drawing code here

  for(let i = 0; i < numCircles + 1; i++){
    circles[i].move();
  }

}

function mouseClicked() {
  numCircles += 1;
  circles.push(new Circles(mouseX, mouseY, random(20), random(2), random(2)));
}