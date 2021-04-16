class Iron {
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:3,
            density:30
        }

        this.body = Bodies.rectangle(x, y, 55, 55, options);
        this.width = 55;
        this.height = 55;

    }

    display(){
        push();
        rectMode(CENTER);

        fill("red");
        pop();

}