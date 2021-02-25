
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,700,10);
  bob1=new Bob(200,550);
  bob2=new Bob(300,550);
	bob3=new Bob(400,550);
  bob4=new Bob(500,550);
  bob5=new Bob(600,550);
  rope1=new Rope(bob1.body,roof.body,-bob1Diameter*2,0);
  rope2=new Rope(bob2.body,roof.body,-bob2Diameter*2,0);
  rope3=new Rope(bob3.body,roof.body,-bob3Diameter*2,0);
  rope4=new Rope(bob4.body,roof.body,-bob4Diameter*2,0);
  rope5=new Rope(bob5.body,roof.body,-bob5Diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  roof.display();
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
  drawSprites();
 
}
