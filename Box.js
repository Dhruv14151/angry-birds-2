class Box{
    constructor(x,y,w,h){
        var balloptions={
            restitution:0.8,
            density:1,
            friction:1
        }
    this.body =Bodies.rectangle(x,y,w,h,balloptions)
    this.w=w
    this.h=h
    World.add(world,this.body);
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop ()
    }
    
}