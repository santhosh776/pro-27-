
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var bob1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(400,25,1600,50);
  roof2=new Roof(600,25,1600,50);
  roof3=new Roof(800,25,1600,50);
  roof4=new Roof(1000,25,1600,50);
  roof5=new Roof(1200,25,1600,50);
  bob1=new Bob(200,650);
  bob2=new Bob(300,620);
	bob3=new Bob(400,600);
  bob4=new Bob(500,550);
  bob5=new Bob(600,520);
  rope1=new Rope(bob1.body,roof1.body);
  rope2=new Rope(bob2.body,roof2.body);
  rope3=new Rope(bob3.body,roof3.body);
  rope4=new Rope(bob4.body,roof4.body);
  rope5=new Rope(bob5.body,roof5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}
function keyPressed ()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:2,y:-1.7});
  }
}