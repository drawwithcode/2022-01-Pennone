function preload() {
  // put preload code here
}

let random1;

let random2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // put setup code here
  // rectMode(CENTER);

  angleMode(DEGREES);
  frameRate(60);
  background("white");
  strokeWeight(10);

  random1 = [random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight),];

  random2 = [random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight),];

  for (let i = 0; i < 8; i++){
    console.log(random1[i], random2[i]);
  }

}

function draw() {
  // put drawing code here
  
  for (let i = 0; i < 8; i++){
    stroke(225-(25*i));
    fill(225-(25*i));
    line(0, random1[i], windowWidth, random2[i]);
    push();
    
    pop();
  }
}
