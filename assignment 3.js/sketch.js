//setting the variables same as the last code

var mySound;
var bg;
var canvas;
var x=50;
var speed=5
//the song will preload first from the assets folders

function preload() {
  mySound = loadSound('assets/wuTang.mp3');
}
//the song loops
function setup() {
  mySound.amp(1);
  mySound.loop();
  bg = loadImage('assets/wuTangClan.jpg');
  canvas = createCanvas(700,525);
}
//the background is set as the image
 
 function draw() {
  background(bg)
  

//the moune is following the screen we messed around with the color
//the for lopp is following the mouse to cover the whole page with a "static" output
//the loop is creating a bunch of small circles
//we are defining x and y for the value of zero so the mouse creates circle from the first point of the circle
//We used assignment operator of += which adds the value of that expression to the value of the variable to the left of the operator, and assign the result to that variable
  for (var x=0; x<= mouseX; x+=10){
  for (var y=0; y<=mouseY;y+=10){fill (random(0),0,random (255));ellipse
  (x,y,25,25)}}
  }
   
   
 