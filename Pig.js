class Pigg{
    constructor(x,y){
        var balloptions={
            restitution:0.8,
            density:1,
            friction:1
        }
    this.body =Bodies.rectangle(x,y,50,50,balloptions)
    World.add(world,this.body);
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("green")
        rect(0,0,50,50)
        pop ()
    }
    
}