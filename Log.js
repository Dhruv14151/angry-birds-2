class Log{
    constructor(x,y,h,angle){
        var balloptions={
            restitution:0.8,
            density:1,
            friction:1
        }
        this.h=h;
    this.body =Bodies.rectangle(x,y,20,h,balloptions)
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body);
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("brown")
        rect(0,0,20,this.h)
        pop ()
    }
    
}