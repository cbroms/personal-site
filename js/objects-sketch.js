// shape object
function shape(x, y, height, width, depth, velocity){
 this.x = x;
 this.y = y;
 this.z = 175;
 this.height = height;
 this.width = width;
 this.depth = depth;
 this.vel = velocity
}

var shapes = [];

// set light at top right by default
var dirX = window.innerWidth / 2;
var dirY = window.innerHeight / 2;

// random integer
function randomNumber(max, min){
  return Math.floor(Math.random() * (max - min) + min);
}

// random float
function randomFloatNumber(max, min){
  return (Math.random() * (max - min) + min).toFixed(4);
}

function setup() {
  // Set a WEBGL canvas
  createCanvas(window.innerWidth, window.innerHeight, WEBGL); 
  noStroke();  

  for (var i = 0; i < 40; i++){
    // init shapes 
    shapes[i] = new shape(
      randomNumber((window.innerWidth)/2, -(window.innerWidth)/2), 
      randomNumber((window.innerHeight)/2, -(window.innerHeight)/2), 
      randomNumber(40, 10), 
      randomNumber(100, 10),
      randomNumber(400, 200),
      randomFloatNumber(0.08, 0.8));
  }
}

function draw() { 
  // transparent background
  background('rgba(1, 1, 1, 0.0)');
  rectMode(CENTER);

  // move light with mouse
  dirX = (mouseX / width - 0.5) * 2;
  dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, 0.25);

  // move camera with mouse
  var xMove = map(mouseX, 0, window.innerWidth, -50,  50);
  var yMove = map(mouseY, 0, window.innerHeight, -50,  50)
  camera(xMove, yMove, (height/2.0) / tan(PI /6), 0, 0, 0, 0, 1, 0);
  
  // draw shapes 
  for (var j = 0; j < 40; j++) {
    push();
    translate(shapes[j].x, shapes[j].y, shapes[j].z);
    box(shapes[j].height, shapes[j].width, shapes[j].depth);
    // move with object's velocity
    shapes[j].z -= shapes[j].vel;
    pop();
}
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}


