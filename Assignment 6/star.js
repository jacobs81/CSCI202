// From https://www.behance.net/gallery/76651183/STARRY-STORM-P5JS
let stars = [];
let speed;
let color;

class Star {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.z = random(width);
    }

    update() {
        this.z = this.z - speed;
        if(this.z < 1) {
            this.z = width;
            this.x = random(-width,width);
            this.y = random(-height,height);
        }
    }

    display() {
        fill(color);
        noStroke();
        let sx = map(this.x/this.z, 0, 1, 0, width);
        let sy = map(this.y/this.z, 0, 1, 0, height);
        let r = map(this.z, 0, width, 12, 0);
        ellipse(sx, sy, r, r);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 1000; i++) {
        stars.push(new Star(random(-width,width),random(-innerHeight,height)));
    }
}

function draw() {
    background(map(mouseY, 0, height, (0), (255)));
    speed = map(mouseX, 0, width, 1, 20);
    color = map(mouseY, 0, height, (255), (0));
    translate(width/2, height/2);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].display();
    }
}