var fixedRect, movingRect,car,wall,wall2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
wall2 = createSprite(200,400,60,80);
wall2.velocityX= 4;
car = createSprite(200,200,50,80);
car.shapeColor = "blue";
car.velocityX = 3;

wall = createSprite(600,200,40,80);
wall.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(car,wall)){
text("touched",100,100);

}

bounceOff(wall2,fixedRect);


if (isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}


  drawSprites();
}




