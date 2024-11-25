class World {
  character = new Character();
  level = level1;
  enemies = level1.enemies;
  clouds = level1.clouds;
  backgroundObjects = level1.backgroundObjects;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  bottleBar = new Bottlebar();
  coinBar = new Coinbar();
  endbossBar = new Endbossbar();
  throwableObjects = [];
  coins_sound = new Audio('audio/coins.mp3');
  bottle_sound = new Audio("audio/bottle.mp3");
  hurt_sound = new Audio("audio/hurt.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();

  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.collectingCoins();
      this.collectingBottles();
      this.checkThrowObjects();
      this.checkEndbossHealth();
    }, 200);
  }

  checkEndbossHealth() {

    const endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
    if (endboss) {
      if (endboss.energy > 0) {
        this.endbossBar.setPercantage(endboss.energy);
      } else {
        this.endbossBar.setPercantage(0);
      }
    }
  }


  checkThrowObjects() {
    if (this.keyboard.D) {
      if (this.character.amountOfBottle > 0) {
        let bottle = new ThrowableObject(
          this.character.x + 100,
          this.character.y + 100,
          
        );
        this.throwableObjects.push(bottle);
        this.character.amountOfBottle--;
        this.bottleBar.setPercantage((this.character.amountOfBottle / 10) * 100);
      } else {
        this.bottleBar.shake();
      }
    }
  }

  checkCollisions() {
    this.checkCharacterEnemyCollisions();
    this.checkBottleEnemyCollisions();
  }

  // checkCollisions() {
  //   this.level.enemies.forEach(enemy => {
  //     if (this.character.isColliding(enemy)) {
  //       if (enemy.isDead() && !this.character.isAboveGround()) {
  //         this.character.hit();
  //         this.character.pauseMoving();
  //         this.statusbarHealth.setPercentage(this.character.energy);
  //       } else {
  //         return;
  //       }
  //     }
  //   })
  // }

  checkCharacterEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.characterJumpToKill(enemy)) {
        enemy.die();
        setTimeout(() => {
          enemy.isSplicable = true;
        }, 1000);
      } else if (this.characterCollidingWithEnemies(enemy)) {
        this.characterGetsHurt();
      }
    });
    this.level.enemies = this.level.enemies.filter(enemy => !enemy.isSplicable);
  }

  checkBottleEnemyCollisions() {
    this.throwableObjects.forEach((bottle, i) => {
      this.level.enemies.forEach((enemy) => {
        if (bottle.isColliding(enemy)) {
          if (!bottle.collidedWith[enemy.id]) {
            bottle.splash(enemy);
            enemy.takeDamage(20);
            if (enemy instanceof Endboss) {
              this.endbossBar.setPercantage(enemy.energy);
            }

          }
        }
      });

      if (bottle.isSplicable) {
        this.throwableObjects.splice(i, 1);
      }
    });
  }

  characterJumpToKill(enemy) {
    return this.character.isColliding(enemy) && this.character.isAboveGround();
  }

  characterCollidingWithEnemies(enemy) {
    return this.character.isColliding(enemy) && enemy.energy > 0;
  }

  characterGetsHurt() {
    this.character.hit();
    this.hurt_sound.play();
    this.statusBar.setPercantage(this.character.energy);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.endbossBar);
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.enemies);

    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }

  collectingCoins() {
    this.level.coins.forEach((coin, i) => {
      if (this.character.isColliding(coin)) {
        this.character.collectCoin();
        this.coins_sound.play();
        this.level.coins.splice(i, 1);
        this.coinBar.setPercantage(this.character.amountOfCoins);
      }
    });
  }

  collectingBottles() {
    this.level.bottles.forEach((bottle, i) => {
      if (this.character.isColliding(bottle)) {
        this.character.amountOfBottle++;
        this.bottle_sound.play();
        this.level.bottles.splice(i, 1);
        this.bottleBar.setPercantage((this.character.amountOfBottle / 10) * 100);
      }
    });
  }

}
