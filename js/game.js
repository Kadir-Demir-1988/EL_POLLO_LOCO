let canvas;
let world;
let keyboard = new Keyboard();
let = bg_music = new Audio("audio/bgmusic.mp3");
let soundMuted = false;


function init() {
  keyboard.mobileControl();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  bg_music.loop = true;
  bg_music.volume = 0.1;
  bg_music.play();

}

function endGame() {
  world.gameOver = true;
  clearAllIntervals();
  initLevel();
  startGame();
}

function initBody() {
  document.getElementById("canvas").style.display = "none";
  bg_music.pause();

}

function mute() {
  const bgMusic = bg_music; // Referenz auf die Musik
  const soundIcon = document.getElementById("soundid"); // Icon-Element

  if (!soundMuted) {
    bgMusic.pause();
    soundMuted = true;
    soundIcon.src = "./img_pollo_locco/soundoff.png"; // Icon ändern
  } else {
    bgMusic.play();
    soundMuted = false;
    soundIcon.src = "./img_pollo_locco/soundon.png"; // Icon ändern
  }
}






