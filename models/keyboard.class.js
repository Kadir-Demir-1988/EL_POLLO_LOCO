class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.keyBoardPress();
    
  }

  keyBoardPress() {
    window.addEventListener('keydown', (event) => {
      if (event.keyCode == 32) {
        keyboard.SPACE = true;
      }
      if (event.keyCode == 37) {
        keyboard.LEFT = true;
      }
      if (event.keyCode == 39) {
        keyboard.RIGHT = true;
      }
      if (event.keyCode == 40) {
        keyboard.DOWN = true;
      }
      if (event.keyCode == 68) {
        keyboard.D = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (event.keyCode == 32) {
        keyboard.SPACE = false;
      }
      if (event.keyCode == 37) {
        keyboard.LEFT = false;
      }
      if (event.keyCode == 39) {
        keyboard.RIGHT = false;
      }
      if (event.keyCode == 40) {
        keyboard.DOWN = false;
      }
      if (event.keyCode == 68) {
        keyboard.D = false;
      }
    });
  }





  mobileControl() {
    document.getElementById('leftbtn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.LEFT = true;
    }, { passive: false });
  
    document.getElementById('leftbtn').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.LEFT = false;
    }, { passive: false });
  
    document.getElementById('rightbtn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.RIGHT = true;
    }, { passive: false });
  
    document.getElementById('rightbtn').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.RIGHT = false;
    }, { passive: false });
  
    document.getElementById('jumpbtn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.SPACE = true;
    }, { passive: false });
  
    document.getElementById('jumpbtn').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.SPACE = false;
    }, { passive: false });
  
    document.getElementById('throwbtn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.D = true;
    }, { passive: false });
  
    document.getElementById('throwbtn').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.D = false;
    }, { passive: false });
  }

  
  

}

