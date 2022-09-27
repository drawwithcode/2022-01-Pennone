function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // put setup code here
  // rectMode(CENTER);

  angleMode(DEGREES);
  frameRate(60);
  background("pink");

  noStroke();

  let coloris = ["white","green", "yellow", "lightblue", "cyan", "lightgreen"];
  let colorib = ["red", "blue", "gray", "purple", "brown", "black", "darkblue"];

  fill("orange");
  rect(0, 0, windowWidth, 50);
  rect(0, 75, windowWidth, 25);
  rect(0, 110, windowWidth, 10);

  fill("yellow");
  ellipse(windowWidth/2, 75, 100);

  const BaseWidth = 20;

  for(let j = 0; j < 8; j++){
    let Width = BaseWidth * (j + 1);
    let HeightSide = Width / 3;
    let OffsetY = Width - 25;
    if (j > 0){
      OffsetY *= j;
    }
    let Color1 = random(coloris);
    let Color2 = random(colorib);
    if (j < 5 && j > 0){
      for(let i = 0; i < windowWidth; i++){
        let Offset = Width / 2 * i;
        fill(Color1);
        rect(Width*i, OffsetY + Offset, Width, HeightSide);
        fill(Color2);
        rect(Width*i, OffsetY + HeightSide + Offset, Width, windowWidth);
      }
    } else {
      for(let i = 0; i < windowWidth; i++){
        let Offset = Width / 2 * i;
        fill(Color1);
        rect( windowWidth - Width*i, OffsetY + Offset, Width, HeightSide);
        fill(Color2);
        rect( windowWidth - Width*i, OffsetY + HeightSide + Offset, Width, windowWidth);
      }
    }
  }
}

function draw() {
  // put drawing code here
  

}
