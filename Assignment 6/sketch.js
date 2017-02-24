//we set a variable for oval
//the index is 4

var oval = [0,5];

//have to keep the same variables to keep the song and background
var mySound;
var bg;
var canvas;

//preloading the song 
function preload() {
  mySound = loadSound('assets/wuTang.mp3');
}
//the song is looping and has the image set as the background
function setup() {
  mySound.amp(1);
  mySound.loop();
  bg = loadImage('assets/wuTangClan.jpg');
  canvas = createCanvas(700,525);
}

//drawing a background with a red circle with grey stroke
 
 function draw() {
  background(bg)
  
//using the oval variable as an array to iterate over the index.  We only used two numbers
//we are playing around with the our orignal code so we changed the speed to an array
//the if/else if statement still creates the bounds for the ellipse

  stroke(125);
  strokeWeight(2);
  fill(255, 0,0);
  ellipse(oval[0],  240, 50, 50);
  if (oval[0] > width)  {
        oval[1]=-5;
    }
  else if(oval[0]<0){
    oval[1]=5
  }
  oval[0]=oval[0]+oval[1]
}
 
