let canvas;
let world;
let keyboard = new Keyboard();
let = bg_music = new Audio ("audio/bgmusic.mp3");


function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  bg_music.loop = true; 
  bg_music.volume = 0.1;
  bg_music.play();
  
}

function endGame(){
  world.gameOver = true;
  clearAllIntervals();
  initLevel();
  startGame();
}

function initBody() {
  document.getElementById("canvas").style.display = "none";
  bg_music.pause(); 
  
}



document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (e.keyCode == 38) {
    keyboard.UP = true;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (e.keyCode == 38) {
    keyboard.UP = false;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});
