class Circles {
  constructor(xpos, ypos, radius){
    this.x = xpos;
    this.y = ypos;
    this.r = radius;
    this.color = [random(255), random(255), random(255)];
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    push();
    translate(this.x, this.y);
    fill(this.color);
    circle(0, 0, this.r);
    pop();
  }
}

let circles = [];

let numCircles = 1000;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(30);

  angleMode(DEGREES);

  noStroke();

  for (let i = 0; i < numCircles; i++){
    circles.push(new Circles(width/2, height/2, random(20)));
  }
}

function draw() {
  // put drawing code here

  for(let i = 0; i < circles.length; i++){
    circles[i].move();
  }

}

function mouseClicked() {

}