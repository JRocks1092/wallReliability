var speed, weight;
var war, bullet;
var thickness;

function setup() {

  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(25, 200, 30, 50);

  bullet.velocityX = speed;

}

function draw() {

  background("black");
  
  whenCollided();

  drawSprites();

}

function whenCollided() {

  if (hasCollided(bullet, wall)) {
    
    var damage = 0.5 * speed * speed * weight / (thickness *thickness *thickness);
    bullet.velocityX = 0;
    
    if (damage <= 10) {

      wall.shapeColor = rgb(0, 255, 0);

    }

    if (damage > 10) {

      wall.shapeColor = rgb(255, 0, 0);

    }

  }

  console.log(damage);

}

function hasCollided(object1, object2){

  var bulletRightEdge = object1.x + object1.width;
  var wallLeftEdge = object2.x;

  if(bulletRightEdge >= wallLeftEdge){

    return true;

  }

  return false;

}
