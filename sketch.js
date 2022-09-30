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
  frameRate(30);
  background("white");
  strokeWeight(5);

  random1 = [random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight)];

  random2 = [random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight), random(0, windowHeight)];

  for (let i = 0; i < 8; i++){
    console.log(random1[i], random2[i]);
  }

}

function draw() {
  // put drawing code here

  let cont = frameCount/600;

  const sphereSize = 75;
  
  for (let i = 0; i < 10; i++){
    stroke(225-(20*i));
    line(0, random1[i], windowWidth, random2[i]);
    push();
    //ellipse(lerp(0, windowWidth, cont), lerp(random1[i], random2[i], cont), 50, 50);
    translate(lerp(0, windowWidth, cont), lerp(random1[i], random2[i], cont));
    fill(300);
    ellipse(0, 0, sphereSize, sphereSize);
    fill(225-(20*i));
    ellipse(0, 0, sphereSize, sphereSize);
    pop();
  }
}
