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

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw() {

}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(desserts.length))
  text(desserts[randomIndex].name, 50, 50);
  desserts.splice(randomIndex, 1);
}
