var clip;
var button;
var jumpButton;
function preload(){
    clip = loadSound("/music/01.mp3");
}

function setup() {
  createCanvas(400, 400);
  background(220);
 // clip = loadSound("sound/clip_00.mp3");
    
  button = createButton("play");
  button.mousePressed(togglePlay);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

  clip.addCue(2, changeBackground, color(random(0, 255), random(0, 255), random(0, 255)));
  clip.addCue(4, changeBackground, color(random(0, 255), random(0, 255), random(0, 255)));
  clip.addCue(6, changeBackground, color(random(0, 255), random(0, 255), random(0, 255)));
}

function changeBackground( col) {
    console.log("changeBackground");
  background(col);
  stroke(3);
    fill(145);
    textSize(random(10,20));
  text('Aazam',random(1,350),random(1,350));
  
}

function togglePlay() {
  if (!clip.isPlaying()) {
    clip.play();
    button.html("pause");
  } else {
    clip.pause();
    button.html("play");
  }
}

function jumpSong() {
  var len = clip.duration();
  var j = random(len);
  clip.jump(j);
}

function draw() {
  //var bpm = clip.getBPM();

  //print(currTime);
}

function mousePressed() {
  var currTime = clip.currentTime();
  print("Current Time: " + currTime);
  var len = clip.duration();
  print("Clip Length " + len);
}