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

let romance = ["love is just around the corner", "wait", "it will get better", "have faith", "take a breath"]
let health = ["checkups are important right now", "things will get worse before they get better", "there's no need to worry", "things are fine now but be cautious", "make preparations"]
let money = ["learning about new matters will improve your financial luck", "keep true and abundant fortune will await you", "not everything will work out the way you think", "there are many opportunities right now, if only you seize them", "don't rush matters"]
let item = ["spoon", "handkerchief", "hand sanitizer", "glasses",　"red pen", "chocolate"]

let randomIndex;
let randomRomance;
let randomHealth;
let randomMoney;
let randomItem;
let animating = false;
let button;
let omikujiBox;
let startAngle = 0;
let boxRotate = 0;
let rSpeed = 1;
let fortuneFont;
let chineseFont;

function preload() {
  omikujiBox = loadImage('omikuji-box.png');
  fortuneFont = loadFont('Peddana-Regular.ttf');
  chineseFont = loadFont('bodang-xingkai.ttf');
}

function setup() {
  createCanvas(1000, 600);
  background(255);
  imageMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);

  textStyle(NORMAL);
  textSize(width * .05);
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
    vertex(width * .02, height * .02);
    vertex(width * .98, height * .02);
    vertex(width * .98, height * .98);
    vertex(width * .02, height * .98);
    beginContour();
    vertex(width * .032, height * .04);
    vertex(width * .032, height * .96);
    vertex(width * .968, height * .96);
    vertex(width * .968, height * .04);
    endContour();
    endShape(CLOSE);

    randomIndex = int(random(fortunes.length));
    textSize(width * .08);
    textFont(chineseFont);
    // textStyle(BOLD);
    text(`${fortunes[randomIndex].name}`, width / 2, height * .19);
    textSize(width * .02);
    textFont(fortuneFont);
    textStyle(NORMAL);
    text(`${fortunes[randomIndex].english}`, width / 2, height * .25);

    push();
    rectMode(CENTER);
    randomRomance = int(random(romance.length));
    randomHealth = int(random(health.length));
    randomMoney = int(random(money.length));
    randomItem = int(random(item.length));
    textSize(width * .03);
    textFont(fortuneFont);
    text(`
---------------------------------------------------------------------------------------------------------------------------
Romantic Relationships: ${romance[randomRomance]}
---------------------------------------------------------------------------------------------------------------------------
Illness: ${health[randomHealth]}
---------------------------------------------------------------------------------------------------------------------------
Money Luck: ${money[randomMoney]}
---------------------------------------------------------------------------------------------------------------------------
Lucky Item: ${item[randomItem]}
---------------------------------------------------------------------------------------------------------------------------`, width * .5, height * .66, width * .9, height * .8);
    pop();

    push();
    fill(80, 40);
    rect(width * .913, height * .705, width * .02, height * .5, width * .05);
    fill('#EACBA1');
    rect(width * .91, height * .7, width * .02, height * .5, width * .05);
    pop();

    textAlign(CENTER);
    translate(width * .9245, height * .77);
    rotate(270);
    fill('#F21D1D');
    textSize(width * .013);
    textFont(chineseFont);
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
  textFont(chineseFont);
  textSize(width * .12);
  strokeWeight(7);
  text("おみくじ", width*.51, height * .565);
  stroke(0);
  line(width * .13, height * .37, width * .87, height * .37);
  line(width * .13, height * .63, width * .87, height * .63);
  fill(0);
  noStroke();
  beginShape();
  vertex(width * .02, height * .02);
  vertex(width * .98, height * .02);
  vertex(width * .98, height * .98);
  vertex(width * .02, height * .98);
  beginContour();
  vertex(width * .032, height * .04);
  vertex(width * .032, height * .96);
  vertex(width * .968, height * .96);
  vertex(width * .968, height * .04);
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
