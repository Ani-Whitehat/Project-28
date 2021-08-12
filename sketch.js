const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var dground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

function preload(){
	boyimg=loadImage("images/boy.png");
  treeimg=loadImage("images/tree.png")
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

  dground = new Ground();

  stones = new Stone(100,460,53);

  mango1 = new Mango(600,290,34);
  mango2 = new Mango(855,325,35);
  mango3 = new Mango(670,260,35);
  mango4 = new Mango(730,200,35);
  mango5 = new Mango(710,320,36);
  mango6 = new Mango(780,250,35);
  mango7 = new Mango(825,170,33);
  mango8 = new Mango(880,260,35);
  mango9 = new Mango(940,220,35);
  mango10 = new Mango(980,305,35); 
  
  attach = new  Throw(stones.body,{x:100, y:465});

  tree = createSprite(755,368);
  tree.addImage(treeimg);
  tree.scale = 0.42;

  boy = createSprite(160,550);
  boy.addImage(boyimg);
  boy.scale = 0.125;

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
  //Add code for displaying text here!
  text("press the space key to play again!",10,10);


  detectCollision(mango1,stones);
  detectCollision(mango2,stones);
  detectCollision(mango3,stones);
  detectCollision(mango4,stones);
  detectCollision(mango5,stones);
  detectCollision(mango6,stones);
  detectCollision(mango7,stones);
  detectCollision(mango8,stones);
  detectCollision(mango9,stones);
  detectCollision(mango10,stones);

  drawSprites();

  stones.display();

  dground.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    attach.fly();
}

function detectCollision(lmango,lstones){
  if(lstones.body.position-lmango.body.position < lmango.diameter + lstones.diameter
      && lmango.body.position.x - lstones.body.position.x < lmango.diameter + lstones.diameter
      && lstones.body.position.y - lmango.body.position.y < lmango.diameter + lstones.diameter
      && lmango.body.position.y - lstones.body.position.y < lmango.diameter + lstones.diameter ){
        Matter.Body.setStatic(lmango.body, false)
  }
}


function keyPressed(){
  if(keyCode === 32){
    rope.attach(stone.body);
  }
}