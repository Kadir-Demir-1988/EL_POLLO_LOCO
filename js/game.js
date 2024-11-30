let canvas;
let world;
let keyboard = new Keyboard();
let = bg_music = new Audio("audio/bgmusic.mp3");
let soundMuted = false;

const originalPlay = Audio.prototype.play;

Audio.prototype.play = function () {
  if (!soundMuted) {
    return originalPlay.call(this);
  }
};

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  bg_music.loop = true;
  bg_music.volume = 0.1;

  if (!soundMuted) {
    bg_music.play();
  }
}



function endGame() {
  world.gameOver = true;
  bg_music.pause();
  clearAllIntervals();
  initLevel();
  startGame();
}

function initBody() {
  document.getElementById("canvas").style.display = "none";
  bg_music.pause();
  soundMuted = JSON.parse(localStorage.getItem("soundMuted")) || false;
  const soundIcon = document.getElementById("soundid");
  if (soundMuted) {
    soundIcon.src = "./img_pollo_locco/soundoff.png";
  } else {
    soundIcon.src = "./img_pollo_locco/soundon.png";
  }
}


function mute() {
  const soundIcon = document.getElementById("soundid");
  const startscreen = document.getElementById("startscreen");
  soundMuted = !soundMuted;
  localStorage.setItem("soundMuted", JSON.stringify(soundMuted));
  if (soundMuted) {
    bg_music.pause();
    soundIcon.src = "./img_pollo_locco/soundoff.png";
  } else {
    if (startscreen.style.display !== "flex") {
      bg_music.play();
    }
    soundIcon.src = "./img_pollo_locco/soundon.png";
  }
}









