let dots = [];
let spacing = 18;
let minSize = 2;
let maxSize = 12;

function setup() {
  let canvas = createCanvas(900, 300);
  canvas.parent("sketch-holder");

  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      dots.push({ x, y });
    }
  }
}

function draw() {
  clear();
  background(0);

  noStroke();
  fill(255);

  for (let d of dots) {
    let distance = dist(mouseX, mouseY, d.x, d.y);

    let size = map(distance, 0, 200, maxSize, minSize);
    size = constrain(size, minSize, maxSize);

    ellipse(d.x, d.y, size);
  }
}
