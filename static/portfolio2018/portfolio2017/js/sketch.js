/*
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|

code by CB -> www.christianbroms.com

File: sketch.js
Desc: animation of tree growing on landing page using p5.js
Created on: 06/19/17
Requires: index.html (for CDNs)
Dependants: index.html
CDN: p5.min.js, p5.dom.min.js
Links to: None

*/

// global variables
var paths = [];
var reps = 0;
var finalNumberOfLoops = 0;
var previousFinalNumberOfLoops = 0;
var currentColor = 230;
var endColor = 85;
var distance = currentColor - endColor;
var targetNumberOfLoops = 0;

// tree control variables
var branchMultiplier = 2.65; // number of branches, where 1.5 < x < 3.5
var branchThickness = 2;     // thickness of branches, where 1.5 < x < 2.5
var branchBump = 0.088;      // "curlyness" of branches, where 0.05 < x < 1
var sizeOfTree = 0.02;       // overall tree size, where 0.01 < x < 0.05

function setup() {

  // setting up the main canvas where the animation will sit
  // window.innerWidth - 17 accounts for the width of the scroll bar,
  // which we do not want to include. This will vary by browser, but
  // the 17px is the largest bar I could find; it's Chrome's
  var canvas = createCanvas(window.innerWidth - 17, window.innerHeight);
  canvas.parent('treeAnimation'); // Move the canvas so it's inside <div id="treeAnimation">
  background(255, 255, 255, 0);
  fill(255);
  noStroke();
  paths[0] = new pathfinder();
  paths[1] = new pathfinder();
  paths[1].diameter = width / 75; // jumpstarting the inital growth
}

function draw() {

  // changing the color as the tree grows
  currentColor -= distance / targetNumberOfLoops;
  if(currentColor > endColor){
    fill(currentColor);
  }

  for (var i = 0; i < paths.length; i++) {
    // drawing the branches of the tree as an ellipse
    var location = paths[i].location;
    ellipse(location.x, location.y, paths[i].diameter, paths[i].diameter);
    paths[i].update();
    finalNumberOfLoops = i;
  }
  // checking if the loop is repeating (animation is finished)
  if (finalNumberOfLoops === previousFinalNumberOfLoops){
    reps++;
  }
  else{
    previousFinalNumberOfLoops = finalNumberOfLoops;
    reps = 0;
  }
  if(reps > 175){
    // the animation is complete, stop drawing
    noLoop();
    // could call resetAnimation() to restart
  }
}

// function to clear the animation and restart
function resetAnimation() {
  clear();
  paths = [];
  setup();
}

// function to clear the animation and text and restart
// called by the system on window resize
function windowResized() {
  clear();
  paths = [];
  currentColor = 255;
  distance = currentColor - endColor;
  reps = 0;
  times = 0;
  loop();
  setup();
}

// pathfinder class
function pathfinder(parent) {

  var location;
  var velocity;
  var diameter;

  if (parent == undefined) {
    // if nothing is passed, create a new object and vectors
    // this is the starting "trunk" of the tree
    this.location = new p5.Vector(width / 2, height - 200);
    this.velocity = new p5.Vector(0, -1.5);
    this.diameter = width / 60;
    // derrived equation to estimate the number of loops it will
    // take to complete the animation, its not exact, but pretty close
    // to the number of loops
    targetNumberOfLoops = (19.067408021946 * this.diameter) - 97.502238497339;
    // this will be used to estimate the gadient for changing the stroke color
  }
  else if (parent instanceof pathfinder) {
    // if a pathfinder object is passed, make a new object based on
    // the parent's vectors and properties
    this.location = parent.location.copy();
    this.velocity = parent.velocity.copy();
    var areaOfParent = sq(parent.diameter / 2) * PI; // ellipse area
    var newLimbDiameter = sqrt(areaOfParent / branchMultiplier / PI) * branchThickness;
    this.diameter = newLimbDiameter;
    parent.diameter = newLimbDiameter;
  }
  else {
    // let the function excecute without action
  }

  this.update = function() {
    // on update, change the direction of the path
    if (this.diameter > 0.75) {
      var bump = new p5.Vector(random(-0.75, 0.75), random(-0.75, 0.75));
      bump.mult(branchBump);
      this.velocity.add(bump);
      this.velocity.normalize();
      this.location.add(this.velocity);

      if (random(0, 1.5) < sizeOfTree) {
        // if the random value is within a range, make a new
        // pathfinder object and add it to the array
        append(paths, new pathfinder(this));
      }
    }
  }
}
