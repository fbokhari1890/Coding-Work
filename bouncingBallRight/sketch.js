

var circleX = 0;
var speed= 1;

function setup() {
  createCanvas(600, 480);
}

function draw() {
  // background
  background(0);
  //draw a rectangle
  var c = color(255, 204, 0);  // Define color 'c'
  fill(c);  // Use color variable 'c' as fill color
  noStroke();  // Don't draw a stroke around shapes
  rect(500, 0, 500, 500);  // Draw rectangle
  // ellipse
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(circleX, 200, 100, 100);
     if (circleX > 600 || circleX < 0)  {
        xspeed = -xspeed;
    }
//Adding a declaration to increase the vertical location of the ellipse
    y = y + yspeed;
//The if statement creates the bounds for the canvas
//Once the ellipse hits the bounds, it reverses vertical direction
    if (y > 400 || y < 0) {
          yspeed = -yspeed;
 
}