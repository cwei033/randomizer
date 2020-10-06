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
// let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  textAlign(CENTER);
  text("click to randomize!", 300, 300);

  // time in milliseconds; 1000 = 1 second
  // setTimeout(changeBackground, 1000);
}

function draw() {
  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }
}


// function changeBackground() {
//   if (counter <= 5) {
//     counter++;
//     console.log(counter);
//     background(random(255), random(255), random(255));
//     setTimeout(changeBackground, 1000);
//   } else {
//   }
// }

function randomizer() {
  animating = false;
  if (desserts[0]) {
    background(random(200, 255));
    randomIndex = int(random(desserts.length));

    text(`${desserts[randomIndex].name} key ingredient: ${desserts[randomIndex].ingredients}`, 300, 300);

    desserts.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("all gone!", 300, 300);
  }
}

function mousePressed() {
  setTimeout(randomizer, 2000);
  animating = true;
}
