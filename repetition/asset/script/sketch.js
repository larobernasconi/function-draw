let particles = [];
let R;
let maxR;
let t = 0;
let nt = 0;
let nR = 0;
let nTheta = 1000;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  pixelDensity(5);
  angleMode(DEGREES);
  noStroke();
  maxR = max(width, height) * 0.55;
  background(0); 
}

function draw() {

  let R = map(noise(nt * 0.01, nR), 0, 1, 0, maxR);
  let t = map(noise(nt * 0.001, nTheta), 0, 1, -360, 360);
  let x = R * cos(t) + width / 2;
  let y = R * sin(t) + height / 2;
  let p = new Particle(x, y);
  particles.push(p);

  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  for (let j = particles.length - 1; j > 0; j--) {
    particles[j].show();
    particles[j].update();
    if (particles[j].finished()) {
      particles.splice(j, 1);
    }
  }
  nt++;
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3)); 
    this.lifespan = 255; 
  }

  update() {
    this.pos.add(this.vel); 
    this.lifespan -= 2; 
  }

  show() {
    stroke(255, this.lifespan); 
    point(this.pos.x, this.pos.y); 
  }

  finished() {
    return this.lifespan < 0; 
  }
}
