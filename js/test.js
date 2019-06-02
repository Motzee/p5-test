var mySound;
var textW;
function preload() {
  mySound = loadSound('musics/test/Kyungri (9Muses) - Blue moon_inst.mp3');
}

function setup() {
  background(0);
  noStroke();
  fill(255);
  textW = text('click to play', width/2, height/2);

  // schedule calls to changeText

  console.log("test girafe");
  mySound.addCue(2.50, changeText, "you" );
  mySound.addCue(3.00, changeText, "want" );
  mySound.addCue(4.00, changeText, "to" );
  mySound.addCue(5.00, changeText, "make" );
  mySound.addCue(6.00, changeText, "?" );
}

function changeText(val) {
  background(0);
  console.log("test cheval");
  textW.text(val, width/2, height/2);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (mySound.isPlaying() ) {
      mySound.stop();
    } else {
        mySound.addCue(1, changeText, "hello" );
  mySound.addCue(2, changeText, "p5" );
  mySound.addCue(3, changeText, "what" );
  mySound.addCue(4, changeText, "do" );
  console.log("test éléphant");
      mySound.play();
    }
  }
}