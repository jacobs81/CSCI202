function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
}

function draw() {
    strokeWeight(0);
    var middleX = width / 2;
    var middleY = height / 2;
    background(200);
    fill(169,169,169)
    rect(middleX, middleY, width, height)
    // Red Triangle
    fill(255,0,0);
    triangle(width, -5, middleX - .10 * width, middleY + .10 * height, width, height + .15 * height);

    // Black Triangle
    fill(0,255,0);
    triangle(middleX - .10 * width, -10, middleX - .10 * width, height + .10 * height, -50, middleY);

    // Tan Triangle
    fill(255,255,153);
    triangle(25,25,25,25,25,25);
    // triangle((middleX - .10 * width) / 2, (height + .10 * height ) * 1.5, -50, middleY, height)
    
}