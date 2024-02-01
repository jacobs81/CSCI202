function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
}

function draw() {
    strokeWeight(0.5);
    // stroke();
    var middleX = width / 2;
    var middleY = height / 2;
    background(200);
    fill(169,169,169)
    rect(middleX, middleY, width, height)


    // Tan Triangle
    fill(255,255,153);
    triangle(0, middleY, middleX - .10 * width, middleY, 0, height);



    // Two light Gray Triangles
    fill(224,224,224);
    // Upper
    triangle(middleX - .10 * width, middleY + .10 * height, middleX - .10 * width, -55, width, middleY);
    // Lower
    triangle(middleX - .10 * width, height + 50, -5, height, middleX - .10 * width, middleY );





    // Red Triangle
    fill(255,0,0);
    triangle(width, -5, middleX - .10 * width, middleY + .10 * height, width, height + .15 * height);

    // Black Triangle
    fill(0,0,0);
    triangle(middleX - .10 * width, -10, middleX - .10 * width, height - 10, -50, middleY);
    
}