var mySound;


function preload(){
    soundFormats('mp3', 'ogg');
    mySound = loadSound('/music/01.mp3');
}

function setup(){
    createCanvas(400, 400);
    background(0);
    stroke(3);
    fill(145);
    textAlign(CENTER);
   T1 =  text('click to play', width/2, height/2);
//mySound.clearCues();
  mySound.addCue(0.50, changeText, "hello" );
  mySound.addCue(1.00, changeText, "p5" );
  mySound.addCue(1.50, changeText, "what" );
  mySound.addCue(2.00, changeText, "do" );
  mySound.addCue(2.50, changeText, "you" );
  mySound.addCue(3.00, changeText, "want" );
  mySound.addCue(4.00, changeText, "to" );
  mySound.addCue(5.00, changeText, "make" );
  mySound.addCue(6.00, changeText, "?" ); 
     

}

function changeText(val) {
    background(0);
    text(val, width/2, height/2);
  }

function mouseClicked() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      if (mySound.isPlaying() ) {
        mySound.stop();
      } else {
        mySound.play();
      }
    }
  }

  function draw(){

    //background(160,130,238);
    console.log(mySound.currentTime());
    /*if (mySound.currentTime() > 2 )
        background(random(255),random(255),random(255)) ;*/

    
  }


    
