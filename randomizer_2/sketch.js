let desserts = [{
  name: "cream puff",
  ingredients: "flour"
}, {
  name: "eclair",
  ingredients: "chocolate"
}, {
  name: "parfait",
  ingredients: "ice cream"
}, {
  name: "souffle",
  ingredients: "eggs"
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

  if (desserts[0]) {
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

    randomIndex = int(random(desserts.length));
    text(`${desserts[randomIndex].name} key ingredient: ${desserts[randomIndex].ingredients}`, width / 2, height / 2);
    desserts.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("all gone!", width / 2, height / 2);
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
  text("おみくじ", width/2, height*.57);
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
