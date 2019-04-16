/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Collision detection and resolution
//move the mouse, the sprite responds to overlapings, collision,
//and displaces another sprite

var asterisk, circle;

function setup() {
  createCanvas(800, 400);

  //create 4 sprites
  circle = createSprite(400, 200);
  //compact way to add an image
  circle.addImage(loadImage('assets/plain_circle.png'));


  asterisk = createSprite(200, 200);
  asterisk.addAnimation('normal', 'assets/asterisk_normal0001.png', 'assets/asterisk_normal0003.png');

  asterisk.addAnimation('round', 'assets/asterisk_circle0006.png', 'assets/asterisk_circle0008.png');


}

function draw() {
  background(255, 255, 255);

  asterisk.position.x = mouseX;
  asterisk.position.y = mouseY;

  //check and resolve the inteactions between sprites

  //sprite.overlap() returns true if overlapping occours
  //note: by default the check is performed on the images bounding box
  //press mouse button to visualize them
  if(asterisk.overlap(circle))
    asterisk.changeAnimation('round');
  else
    asterisk.changeAnimation('normal');


  //if debug is set to true bounding boxes, centers and depths are visualized
  asterisk.debug = mouseIsPressed;
  circle.debug = mouseIsPressed;

  drawSprites();
}