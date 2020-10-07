let fortunes = [{
  name: "大吉",
  english: "[great blessing]",
}, {
  name: "中吉",
  english: "[middle blessing]",
}, {
  name: "小吉",
  english: "[small blessing]",
}, {
  name: "吉",
  english: "[blessing]",
}, {
  name: "凶",
  english: "[curse]",
}, {
  name: "小凶",
  english: "[small curse]",
}, {
  name: "大凶",
  english: "[great curse]",
}]

let randomIndex;
let animating = false;
let button;
let omikujiBox;
let startAngle = 0;
let boxRotate = 0;
let rSpeed = 1;

function preload() {
  omikujiBox = loadImage('omikuji-box.png');
}

function setup() {
  createCanvas(1000, 600);
  background(255);
  imageMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);

  textStyle(NORMAL);
  textSize(width*.05);
  noStroke();

  drawFrontPage();

  button = createButton("Receive Fortune...");
  button.mousePressed(buttonPressed);
  button.parent('randomizerButton');
}

function draw() {

  if (animating == true) {
    drawOmikujiBox(boxRotate);
    boxRotate += rSpeed
    if (boxRotate < -15 || boxRotate > 15) {
      rSpeed = -rSpeed;
    }
  }
  omikujiBox.resize(0, 300);

}

function randomizer() {
  animating = false;

  if (fortunes[0]) {
    background(255);

    fill(0);
    beginShape();
    vertex(width*.02, height*.02);
    vertex(width*.98, height*.02);
    vertex(width*.98, height*.98);
    vertex(width*.02, height*.98);
    beginContour();
    vertex(width*.032, height*.04);
    vertex(width*.032, height*.96);
    vertex(width*.968, height*.96);
    vertex(width*.968, height*.04);
    endContour();
    endShape(CLOSE);

    push();
    fill('#EACBA1');
    rect(width*.9, height*.7, width*.02, height*.5, width*.05);
    randomIndex = int(random(fortunes.length));

    // textStyle(BOLD);

    pop();

    randomIndex = int(random(fortunes.length));
    textSize(width*.08);
    textStyle(BOLD);
    text(`${fortunes[randomIndex].name}`, width / 2, height*.19);
    textSize(width*.015);
    textStyle(NORMAL);
    text(`${fortunes[randomIndex].english}`, width / 2, height*.24);
    translate(width*.9155, height*.77);
    rotate(270);
    fill('#F21D1D');
    textSize(width*.015);
    text(`${fortunes[randomIndex].name}`, 0, 0);

  }
}

function buttonPressed() {
  setTimeout(randomizer, 2000);
  animating = true;
}

function drawFrontPage() {
  push();
  textStyle(BOLD);
  textSize(width*.12);
  strokeWeight(7);
  text("おみくじ", width/2, height*.575);
  stroke(0);
  line(width*.13, height*.37, width*.87, height*.37);
  line(width*.13, height*.63, width*.87, height*.63);
  fill(0);
  noStroke();
  beginShape();
  vertex(width*.02, height*.02);
  vertex(width*.98, height*.02);
  vertex(width*.98, height*.98);
  vertex(width*.02, height*.98);
  beginContour();
  vertex(width*.032, height*.04);
  vertex(width*.032, height*.96);
  vertex(width*.968, height*.96);
  vertex(width*.968, height*.04);
  endContour();
  endShape(CLOSE);
  pop();
}

function drawOmikujiBox(rotation) {
  push();
  background(255);
  translate(width / 2, height / 2);
  rotate(rotation);
  image(omikujiBox, 0, 0);
  pop();
}
