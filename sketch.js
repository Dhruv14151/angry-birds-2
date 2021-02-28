const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log,log2,log3,log4;
var bird
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(400,380,800,20,object_options);
    World.add(world,object);
   box1=new Box(500,300,70,70)
   box2=new Box(700,300,70,70)
   box3=new Box(500,220,70,70)
   box4=new Box(700,220,70,70)
   box5=new Box(600,150,70,70)
pig1=new Pigg(600,300)
log1=new Log(600,250,280,PI/2)
pig2=new Pigg(600,210)
log2=new Log(600,180,280,PI/2)
log3=new Log(550,140,140,PI/7)
log4=new Log(650,140,140,PI/-7)
bird=new Bird(1,200)
    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,800,20);
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    pig1.display()
    log1.display()
    pig2.display()
    log2.display()
    log3.display()
    log4.display()
    box5.display()
    bird.display()
}
