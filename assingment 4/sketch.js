//creating an object of oval
var oval = {
  x:0,
  speed:5
};
  
//the same variables are constant for the song and image to appear on canvas
var mySound;
var bg;
var canvas;

//preloading the song first from the assets folders
function preload() {
  mySound = loadSound('assets/wuTang.mp3');
}
//creatinga the canvas and have the song repeat

function setup() {
  mySound.amp(1);
  mySound.loop();
  bg = loadImage('assets/wuTangClan.jpg');
  canvas = createCanvas(700,525);
}
//the background and ball are still present
 function draw() {
  background(bg)
  
//instead of calling the varialbe we are now calling the object
//the oval.x replaced x for on the previous code
//we are constantly calling to the object
// the function does the same as the first

  stroke(125);
  strokeWeight(2);
  fill(255, 0,0);
  ellipse(oval.x,  240, 50, 50);
  if (oval.x > width)  {
        oval.speed=-5;
    }
  else if(oval.x<0){
    oval.speed=5
  }
  oval.x=oval.x+oval.speed
}
 
