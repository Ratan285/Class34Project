const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var hero, monster, rope, ground;
var bgs;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  bgs = createSprite(1500, 350, 20, 20);
  bgs.addImage(bg);

  ground = new Ground();

  hero = new Hero(200, 400, 250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1500, 550, 300);

  box2 = new Box(600, 180 + 40, 70, 70);
  box3 = new Box(600, 260 + 40, 70, 70);
  box4 = new Box(600, 340 + 40, 70, 70);
  box5 = new Box(600, 420 + 40, 70, 70);
  box6 = new Box(600, 500 + 40, 70, 70);
  box7 = new Box(700, 500 + 40, 70, 70);
  box8 = new Box(700, 420 + 40, 70, 70);
  box1 = new Box(800, 500 + 40, 70, 70);
  box9 = new Box(800, 420 + 40, 70, 70);
  box10 = new Box(800, 340 + 40, 70, 70);
  box11 = new Box(800, 260 + 40, 70, 70);
  box12 = new Box(800, 180 + 40, 70, 70);
  box13 = new Box(700, 340 + 40, 70, 70);
  box14 = new Box(700, 260 + 40, 70, 70);

}

function draw() {
  
  Engine.update(engine);

  bgs.velocityX = -2;

  // if (bgs.x > 0) {                                                                                                             
  //   bgs.x = width / 2;                                                                                                             
  // }                                                                                                              
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();
  ground.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();


  
}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
