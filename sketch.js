  var x = (100);
  var y = (100);
  var d = (200);
  var s = (50);

function setup() {
  createCanvas(1000,1000);
  background (200);
  strokeWeight(2);
}

function draw(){
  // put drawing code here
  rect(x ,y, s ,s);
  rect(x+d,y, 2*s, 2*s);
  rect(x+2*d+s,y,3*s, 3*s);
}

//js stands for java script , set ups draw once while draw puts up 60 frames per second
