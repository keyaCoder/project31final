const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

    var particle = [];
    var plinko = [];
    var division = [];

    var divisionHeight = 391;

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(240,790,480,20);

  for(var i = 0; i <= width; i = i+80){
      division.push(new Division(i,height = divisionHeight,10,
      divisionHeight));
  }

  for(var j = 40; j <= width; j = j+50){
      plinko.push(new Plinko(j,75));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinko.push(new Plinko(j,175));
}
for(var j = 40; j <= width; j = j+50){
  plinko.push(new Plinko(j,275));
}
for(var j = 15; j <= width-10; j = j+50){
plinko.push(new Plinko(j,375));
}
 
if(frameCount % 60 === 0){
  particle.push(new Particle(random(width/2-20, width/2+20), 10, 10));
}
 
 
}

function draw(){
  background("black");
  Engine.update(engine);
  strokeWeight(4);
  
  ground.display();

  for(var j = 0; j < plinko.length; j++){
    plinko[j].display();
 }

 for(var i = 0; i < division.length;i++){
  division[i].display();
}

for(var k = 0; k < particle.length;k++){
  particle[k].display();
}




  drawSprites();
  
}