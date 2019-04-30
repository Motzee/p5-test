var song;
var playBtn;
var volumeSlider;
var stoppeur = false;

//fonction qui s'active une fois au chargement de la page
function setup() {
    song = loadSound("musics/test/Kyungri (9Muses) - Blue moon_inst.mp3", loaded);
    song.playMode("restart");
    console.log(volumeSlider);
    console.log(song);
}

//fonction qui dessine toute la page par cycle
function draw() {
    if(volumeSlider !== undefined) {
       song.setVolume(volumeSlider.value());
    }
}


/***********************************************************/

//on retire l'icône de loading et on affiche le bouton Play
function loaded() {
    createPlayButtons();
    let spinnerImg = document.getElementById("loadingSign");
    spinnerImg.remove(spinnerImg.selectedIndex);
}

function createPlayButtons() {
    playBtn = createButton("play");
    playBtn.mousePressed(togglePlaying);
    volumeSlider = createSlider(0, 1, 0.5, 0.01);
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