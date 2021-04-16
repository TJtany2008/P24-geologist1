class Stone {
    constructor(x,y) {
        var options = {
            restituion:0.8,
            friction:0.9,
            density:12
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;

    }
    display(){
        push();
        rectMode(CENTER);

        fill("red");
        pop();
    }
}