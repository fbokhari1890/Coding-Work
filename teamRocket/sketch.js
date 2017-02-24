function setup() {
    createCanvas (700, 700);
    background(0);
}

function draw() {
 stroke(0);
 //Changes the fill to light grey
 fill('#E0E0E0 ');
//Draws an ellipse at 120, 250 with a height and width of 250
stroke(255);

ellipse(120, 250, 200, 200);
//Draws a red triangle at the specified coordinates
stroke(0);
fill('red');
triangle(450, 250, 400, 300, 500, 300);
//Draws a white rectangle
fill(255);
rect(410, 300, 80, 200)
//Draws yellow triangles at the specified coordinates
fill('yellow');
triangle(410, 500, 410, 550, 450, 500);
triangle(490, 500, 490, 550, 450, 500);
fill('yellow');
ellipse(700, 0, -300, -300);
}
