var start = createSprite(50,200,100,400);
var end = createSprite(350,200,100,400);
var top = createSprite(200,100,400,2);
var bottom = createSprite(200,300,400,2);
var sam = createSprite(50,200,20,20);
var car1 = createSprite(225,110,20,20);
var car2 = createSprite(275,290,20,20);
var car3 = createSprite(175,290,20,20);
var car4 = createSprite(125,110,20,20);
sam.shapeColor = "Green";
start.shapeColor = "LightBlue";
end.shapeColor = "Yellow";
car1.shapeColor = "Red";
car2.shapeColor = "Red";
car3.shapeColor = "Red";
car4.shapeColor = "Red";

car1.velocityY = 5;
car2.velocityY = -5;
car3.velocityY = -5;
car4.velocityY = 5;

var life = 0;

function draw() {
  background("White");
  textSize(25);
  text("Life : "+life, 155, 95);
  drawSprites();
  
  if (sam.isTouching(end)) {
  textSize(25);
  text("You Win!", 145,200);
  car1.veloctiyY = 0;
  car4.veloctiyY = 0;
  car2.veloctiyY = 0;
  car3.veloctiyY = 0;
  }
  
  if (life==5) {
  textSize(25);
  text("You Lost Click R to play Again", 50,200);
  car1.veloctiyY = 0;
  car4.veloctiyY = 0;
  car2.veloctiyY = 0;
  car3.veloctiyY = 0;
  }
  
  if (keyDown("r")) {
    car1.x = 225;
    car1.y = 110;
    car2.x = 275;
    car2.y = 290;
    car3.x = 175;
    car3.y = 290;
    car4.x = 125;
    car4.y = 110;
    
    sam.x = 50;
    sam.y = 200;
    
    car1.velocityY = 0;
    car4.veloctiyY = 0;
    car2.veloctiyY = 0;
    car3.veloctiyY = 0;
  }
  
  
  
  
  if (keyDown("LEFT_ARROW")) {
    sam.x = sam.x-2;
  }
  
  if (keyDown("RIGHT_ARROW")) {
    sam.x = sam.x+2;
  }
  
  if (sam.isTouching(car1)) {
    sam.x = 50;
    sam.y = 200;
    life = life+1;
  }
  
  if (sam.isTouching(car2)) {
    sam.x = 50;
    sam.y = 200;
    life = life+1;
  }
  
  if (sam.isTouching(car3)) {
    sam.x = 50;
    sam.y = 200;
    life = life+1;
  }
  
  if (sam.isTouching(car4)) {
    sam.x = 50;
    sam.y = 200;
    life = life+1;
  }
  
  car1.bounceOff(top);
  car1.bounceOff(bottom);
  car2.bounceOff(top);
  car2.bounceOff(bottom);
  car3.bounceOff(top);
  car3.bounceOff(bottom);
  car4.bounceOff(top);
  car4.bounceOff(bottom);
}
