/*Enter the 36 chambers of code*/


var mySound;//setting a variable for sound 
var bg;// setting a variable for background
var canvas;//setting a variable for canvas
var x=50;
var speed=5
//the first thing we are doing are preloading the sound so it is the first thing to play
//we used the function preload to get the mp3 to play from the assets folder
function preload() {
  mySound = loadSound('assets/wuTang.mp3');
}
//the sound volume was set and we placed the image in the new assets folder
//we are setting the background of the canvas as the image
//the loadImage from the assets folders helps to fill the canvas
//the sound loops meaning it plays over and over again when it finishes
//the variable for canvas is the size of the picture so it fits the screen
function setup() {
  mySound.amp(1);
  mySound.loop();
  bg = loadImage('assets/wuTangClan.jpg');
  canvas = createCanvas(700,525);
}

//the draw function will have the background as the wutang image and create a red circle with a grey fill
//the bounds were set to the width for the bouncing against the parameters of the canvas
// you can hard code it 525 and get the same results
//the if/else if  statement states the bounds of the speed causing the ball to bounce back and forth
 function draw() {
  background(bg)
  

  stroke(125);
  strokeWeight(2);
  fill(255, 0,0);
  ellipse(x, 240, 50, 50);
  if (x > width)  {
        speed=-5;
    }
  else if(x<0){
    speed=5
  }
  x=x+speed
}
 
