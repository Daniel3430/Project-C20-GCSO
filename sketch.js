var car,wall;
var speed, weight; 


function setup() {
  createCanvas(1600, 400);
  speed=random(20,80)
  weight=random(400,1500)
  car=createSprite(-100, 200, 50,50);   
  car.velocityX = speed;
  car.shapeColor=color(255);
  wall=createSprite(1000,200,60,200)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
  if(wall.x-car.x < (car.width+wall.width)/2){
  	car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>60){
		car.shapeColor=color(255,0,0);
	}
	if(deformation<60 && deformation>40){
		car.shapeColor=color(230,230,0);
	}
	if(deformation<40){
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
}


