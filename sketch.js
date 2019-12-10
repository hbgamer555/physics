const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;
var ball2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,390,1200,20,ground_options);
    World.add(world,ground);
var ball_options={
restitution:1
}
ball=Bodies.circle(200,200,20,ball_options);
World.add(world,ball);
var ball1_options={
    restitution:1
}
ball1=Bodies.circle(100,100,20,ball1_options);
World.add(world,ball1);
var ball2_options={
    restitution:1
}
ball2=Bodies.circle(300,300,20,ball2_options);
World.add(world,ball2);



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
ellipseMode(RADIUS)
fill("blue");
ellipse(ball.position.x,ball.position.y,20,20);
fill("yellow");
ellipseMode(RADIUS)
fill("red");
ellipse(ball1.position.x,ball1.position.y,20,20);
ellipseMode(RADIUS)
fill("violet");
ellipse(ball2.position.x,ball2.position.y,20,20);




}
