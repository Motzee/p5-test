var song;
var playBtn;
var stopBtn;
var volumeSlider;
var stoppeur = false;

//fonction qui s'active une fois au chargement de la page
function setup() {
    let gameCanvas = createCanvas(200, 200);
    let playZone = document.getElementById("playZone");
    gameCanvas.parent(playZone);
    song = loadSound("musics/test/Kyungri (9Muses) - Blue moon_inst.mp3", loaded);
    song.playMode("restart");
}

//fonction qui dessine toute la page par cycle
function draw() {
    if(volumeSlider !== undefined) {
       song.setVolume(volumeSlider.value());
    }
}


/***********************************************************/

//on retire le loading et on affiche les boutons du controleur multimédia
function loaded() {
    //get and empty the zone for controller btns
    let mediaController = document.getElementById("mediaController");
    mediaController.innerHTML ="";
    
    createPlayButtons(mediaController);
}

function createPlayButtons(mediaController) {
        
    //create a play/pause btn
    playBtn = createButton("play");
    playBtn.parent(mediaController);
    playBtn.mousePressed(togglePlaying);
    
    
    //create a stop btn
    stopBtn = createButton("finish");
    stopBtn.parent(mediaController);
    stopBtn.mousePressed(endGame);
    
    //create a slider btn
    volumeSlider = createSlider(0, 1, 0.5, 0.01);
    volumeSlider.id('volumeSlider');
    volumeSlider.parent(mediaController);
}

function togglePlaying() {
    if(song.isPlaying()) {
        song.pause();
        playBtn.html("play");
    } else {
        song.play();
        playBtn.html("pause");
    }
}

function endGame() {
    if(song.isPlaying()) {
        song.stop();
        playBtn.html("play");
    }
}