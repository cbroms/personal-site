function shape(x, y, easing)
{
   this.x = x;
   this.y = y;
   this.easing = easing ;
}

var shapes = [];

function randomPosition(max){
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function randomSmallNumber(){
  var num = (Math.random() * (0.001 - 0.0100) + 0.0100).toFixed(4) 
  return num;
}

function makeSign(){
  var sign = Math.random();
  if (sign >= 0.5){
    return -0.5;
  }
  return 0.5;
}

var angle = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL); 
  noStroke();  

  for (var i = 0; i < 30; i++){

    shapes[i] = new shape(
      randomPosition(window.innerWidth), 
      randomPosition(window.innerHeight), 
      Math.abs(randomSmallNumber()));
  }
}

function draw() { 
  background('rgba(1, 1, 1, 0.5)');


  rectMode(CENTER);

  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.6);

  box(10, 100, 50);

  angle += 0.07;
  
for (var j = 0; j < 30; j++) {
/*
  var targetX = mouseX;
  var dx = targetX - shapes[j].x ;

  if (dx > window.innerWidth / 3){
    shapes[j].x += dx * shapes[j].easing;
  }
  
  
  var targetY = mouseY;
  var dy = targetY - shapes[j].y ;
  if (dy > window.innerHeight / 3){

  shapes[j].y += dy * shapes[j].easing;
  ellipse(shapes[j].x, shapes[j].y, 66, 66);
}
*/
}



}


