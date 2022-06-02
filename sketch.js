

var path
var pathImage

var runner
var runnerImage

var bound1
var bound2

function preload() {

  //pre-load images
  pathImage = loadImage("path.png");

  runnerImage = loadImage("Runner-1.png");
}

function setup() {

  createCanvas(400, 400);

  //creating path
  path = createSprite(180, 180, 20, 40);

  path.addImage("running", pathImage);

  path.velocityY = 4;

  //creating runner
  runner = createSprite(180, 180, 20, 20);

  runner.addImage("running", runnerImage);

  runner.scale = 0.05;

  //creating boundaries 
  invisiblebound1 = createSprite(325, 200, 20, 800);

  invisiblebound2 = createSprite(41, 200, 20, 800);

  invisiblebound1.visible = false;

  invisiblebound2.visible = false;

}

function draw() {
  background(0);

  //code to reset back
  if (path.y > 400) {
    path.y = height / 2;
  }

  runner.x = World.mouseX;

runner.collide(invisiblebound1);
runner.collide(invisiblebound2);

  drawSprites();
}
