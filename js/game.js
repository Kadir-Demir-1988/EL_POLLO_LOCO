let canvas;
let world;
let keyboard = new Keyboard();
let = bg_music = new Audio("audio/bgmusic.mp3");
let soundMuted = false;
const originalPlay = Audio.prototype.play;

/**
 * Overrides the native Audio play method to respect the soundMuted setting.
 * If sound is not muted, it calls the original play method; otherwise, it does nothing.
 */
Audio.prototype.play = function () {
  if (!soundMuted) {
    return originalPlay.call(this);
  }
};

/**
 * Initializes the game by setting up the keyboard control, retrieving the canvas
 * element, creating a new World instance, setting up the background music, and
 * starting the music if sound is not muted.
 */
function init() {
  keyboard.mobileControl();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  bg_music.loop = true;
  bg_music.volume = 0.1;

  if (!soundMuted) {
    bg_music.play();
  }
}

/**
 * Ends the game by setting the gameOver flag to true, pausing the background music,
 * clearing all intervals, initializing a new level, and starting a new game.
 */
function endGame() {
  world.gameOver = true;
  bg_music.pause();
  clearAllIntervals();
  startGame();
}

/**
 * Initializes the body of the document by hiding the canvas element,
 * pausing the background music, and updating the sound icon based on
 * the soundMuted state retrieved from local storage.
 */
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

/**
 * Toggles the soundMuted state and updates the sound icon accordingly.
 * If the sound was previously muted, it is unmuted and the background music
 * is played. If the sound was previously unmuted, it is muted and the background
 * music is paused.
 */
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









