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
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  angleMode(DEGREES);

  textAlign(CENTER);
  text("click to randomize!", 300, 300);

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
    background(random(200, 255));
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

function drawOmikujiBox(rotation) {
  push();
  background('maroon');
  translate(width / 2, height / 2);
  rotate(rotation);
  image(omikujiBox, 0, 0);
  pop();
}
