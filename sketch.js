const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16   

var polygon, stand, stant2, slingShot

var smallBox1, smallBox2, smallBox3, smallBox4, smallBox5, smallBox6, smallBox7, smallBox8, smallBox9

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  stand = new Stand(390, 500, 300, 10);
  stand2 = new Stand(650, 300, 270, 10);

  box1 = new lowBox1(300, 275, 30, 40);
  box2 = new lowBox1(330, 275, 30, 40);
  box3 = new lowBox1(360, 275, 30, 40);
  box4 = new lowBox1(390, 275, 30, 40);
  box5 = new lowBox1(420, 275, 30, 40);
  box6 = new lowBox1(450, 275, 30, 40);
  box7 = new lowBox1(480, 275, 30, 40);

  box8 = new lowMiddleBox1(330, 235, 30, 40);
  box9 = new lowMiddleBox1(360, 235, 30, 40);
  box10 = new lowMiddleBox1(390, 235, 30, 40);
  box11 = new lowMiddleBox1(420, 235, 30, 40);
  box12 = new lowMiddleBox1(450, 235, 30, 40);
  
  box13 = new highMiddleBox1(360, 195, 30, 40);
  box14 = new highMiddleBox1(390, 195, 30, 40);
  box15 = new highMiddleBox1(420, 195, 30, 40);
  
  box16 = new highBox1(390, 155, 30, 40);

  smallBox1 = new lowBox1(590, 200, 30, 40);
  smallBox2 = new lowBox1(620, 200, 30, 40);
  smallBox3 = new lowBox1(650, 200, 30, 40);
  smallBox4 = new lowBox1(680, 200, 30, 40);
  smallBox5 = new lowBox1(710, 200, 30, 40);

  smallBox6 = new highMiddleBox1(620, 160, 30, 40);
  smallBox7 = new highMiddleBox1(650, 160, 30, 40);
  smallBox8 = new highMiddleBox1(680, 160, 30, 40);

  smallBox9 = new lowMiddleBox1(650, 120, 30, 40);

  polygon = new Polygon(50, 200, 50);
  // polygon = Bodies.circle(50, 200, 20);
  // World.add(world, polygon);
  slingShot = new SlingShot(polygon.body, {x:100, y:500});
  polygon.scale=10;
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(rgb(56, 44, 44));  
  Engine.update(engine);


  a=a-1;
  
 
  
  // for (i=0;i<circles.length;i++) {
	//   circle(circles[i], height/2,20)
  // }
  // if(camera.position.x%width===0) {
	//   circles.push(camera.position.x+width/2)
  // }
 
  drawSprites();

  stand.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
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
  box15.display();
  box16.display();
  smallBox1.display();
  smallBox2.display();
  smallBox3.display();
  smallBox4.display();
  smallBox5.display();
  smallBox6.display();
  smallBox7.display();
  smallBox8.display();
  smallBox9.display();
  polygon.display();
  slingShot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}