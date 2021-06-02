class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            friction: 0
        }

        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        if (this.body.speed < 3) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill("white");
            stroke();
            strokeWeight(2);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility)
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }

    }


}