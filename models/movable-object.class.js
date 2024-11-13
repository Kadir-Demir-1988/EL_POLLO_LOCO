class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  amountOfCoins = 0;
  amountOfBottle = 0;
  lastHit = 0;

  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };



  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 180;
    }
  }

  // isColliding(mo) {
  //   return (this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
  //     this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
  //     this.x + this.offset.left < mo.x + mo.offset.right &&
  //     this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom)
  // }

  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left && // Rechte Kante der Flasche nach rechts
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // Linke Kante der Flasche nach links
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // Untere Kante der Flasche nach unten
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom // Obere Kante der Flasche nach oben
    );
  }
  

  collectCoin() {
    this.amountOfCoins += 10;
    if (this.amountOfCoins > 100) {
      this.amountOfCoins = 100;
    }
  }

  collectBottle() {
    this.amountOfBottle += 10;
    if (this.amountOfBottle > 100) {
      this.amountOfBottle = 100;
    }
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // difference in s
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  lost() {
    return this.energy = 0;
}

  /**
   *
   * @param {Array} arr - ["img/Image1.png", "img/image2.png", ...]
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  playOnce(images) {
    this.currentImage = 0;
  
    const animationInterval = setInterval(() => {
      if (this.currentImage < images.length) {
        let path = images[this.currentImage];
        this.img = this.imageCache[path];
        this.currentImage++;
      } else {
        clearInterval(animationInterval);
      }
    }, 100);
  }

  moveRight() {
    this.x += this.speed;
    this.lastActionTime = new Date().getTime(); 
  }

  moveLeft() {
    this.x -= this.speed;
    this.lastActionTime = new Date().getTime(); 
  }

  jump() {
    this.speedY = 30;
    this.lastActionTime = new Date().getTime(); 
  }

  jumpOn(enemy) {
    enemy.die();
  }
}


