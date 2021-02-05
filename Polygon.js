class Polygon {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density: 0.02
        }
        this.body = Bodies.circle(50, 200, 20);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
    }

    display() {
        var pos = this.body.position;
        strokeWeight(1);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 40, 40);
    }
}