var DarthmaulIMG, Darthmaul, ScimitarIMG, Scimitar, SpaceIMG, Space;
var Darthmaulbody,zonebody;
var Lucrehulkimage,Lucrehulk;
var zone;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	DarthmaulIMG=loadImage("darth maul.png");
	ScimitarIMG=loadImage("sith.png");
	SpaceIMG=loadImage("star wars space.jpg");
	Lucrehulkimage=loadImage("lucrehulk.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	Space=createSprite(400,350,0,0);
	Space.addImage(SpaceIMG);
	Space.scale = 2;

	Darthmaul=createSprite(width/2, 80, 10,10);
	Darthmaul.addImage(DarthmaulIMG);
	Darthmaul.scale=0.2;

	Scimitar=createSprite(width/2, 200, 10,10);
	Scimitar.addImage(ScimitarIMG);
	Scimitar.scale=0.3;


	Lucrehulk=createSprite(width/2,550,10,10);
	Lucrehulk.addImage(Lucrehulkimage);

	Lucrehulk.depth = Darthmaul.depth
	Darthmaul.depth = Darthmaul.depth + 1;

	Scimitar.depth = Scimitar.depth + 2;

	 
	zone=createSprite(400,551,200,20);
	
	engine = Engine.create();
	world = engine.world;

	Darthmaulbody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, Darthmaulbody);
	
    zonebody = Bodies.rectangle(400 , 551 , 10 , 10 , {isStatic:true});
	World.add(world, zonebody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Darthmaul.x= Darthmaulbody.position.x 
  Darthmaul.y= Darthmaulbody.position.y 

  
  keyPressed();
  
  
 
  

  drawSprites();
 

}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    
	Matter.Body.setStatic(Darthmaulbody,false);
  }
}

function collision() {
if (Darthmaul.isTouching(zone)){
  
   Matter.Body.setStatic(Darthmaulbody,true);

}

}


