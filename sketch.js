  var bullet,wall;
  var speed,weight;
  var bulletRightEdge,wallLeftEdge;
  var thickness;
  function setup() {
    createCanvas(1600,400);
    speed=random(55,90);
    weight=random(400,1500);
    thickness=random(22,83)
    bullet=createSprite(50,200,75,10);
    bullet.shapeColor=color("brown")
    bullet.velocityX=speed;
    bullet.weight=weight;
    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=color("grey")
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
  }

  function draw() {
    
    background("black");  
    
    
    
    if (hasCollided(bullet,wall)){

      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10){
        wall.shapeColor=color("red")
      }
      if(damage<10){
        wall.shapeColor=color("green");
      }
    }

    drawSprites();
  
  }

  function hasCollided(bulletRightEdge,wallLeftEdge){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    else{
  return false;
    }
  } 
