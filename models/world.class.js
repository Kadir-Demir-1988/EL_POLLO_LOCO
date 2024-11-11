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
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObjects.push(bottle);
    }
  }

 

  checkCollisions() {
    this.level.enemies.forEach((enemy, i) => {
      if (this.characterJumpToKill(enemy)) {
        enemy.lost(); // Besiegt den Gegner
        enemy.isSplicable = true; // Markiert den Gegner zum Entfernen
      } else if (this.characterCollidingWithEnemies(enemy)) {
        this.characterGetsHurt(); // Verursacht Schaden für Pepe
      }

      // Entfernt besiegte Gegner aus dem Array
      if (enemy.isSplicable) {
        this.level.enemies.splice(i, 1);
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
    //enemiebar
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
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
        this.character.collectBottle();
        this.bottle_sound.play();
        this.level.bottles.splice(i, 1);
        this.bottleBar.setPercantage(this.character.amountOfBottle)
      }
    })
  }

  checkEnemyCollision() {
    this.level.enemies.forEach(enemy => {
      if (this.character.isColliding(enemy)) {
        console.log("Kollision erkannt"); // Überprüfung, ob die Kollision erkannt wird

        // Prüfen, ob der Charakter von oben auf den Gegner springt
        if (this.character.y + this.character.height - this.character.offset.bottom < enemy.y + enemy.offset.top + 30) {
          console.log("Charakter springt auf den Gegner"); // Sollte in der Konsole erscheinen, wenn die Bedingung erfüllt ist
          this.character.jumpOn(enemy); // Charakter besiegt den Gegner
        } else {
          console.log("Seitliche oder untere Kollision");
          this.character.hit(); // Charakter erleidet nur Schaden, wenn die Bedingung für den Sprung auf den Gegner nicht erfüllt ist
        }
      }
    });
  }









}
