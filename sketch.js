var bullet , wall, thickness;
var speed , weight;
var lbullet,lwall;


function setup() {

  createCanvas(1600,400);
 bullet = createSprite(50, 200, 20, 20);
 bullet.shapeColor = "white";
 bullet.debug = "false";

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
 wall.debug = "false";

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

}

function draw() {
  background(0);  
 
 bullet.velocityX = speed;

 if(hasCollided(bullet,wall)){

  if( wall.x - bullet.x < wall.width/2 + bullet.width/2 ) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
    if ( damage > 10) {
  
      bullet.shapeColor = "red";
    }
  
    if(damage< 10){
  
      bullet.shapeColor = "green";
    }
    
  }

 }


 hasCollided();
  drawSprites();
}

function hasCollided(lbullet,lwall)
{

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge>=wallLeftEdge)
{
   return true;
}
   return false

}