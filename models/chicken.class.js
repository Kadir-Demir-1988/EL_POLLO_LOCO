class Chicken extends MovableObject {
  y = 380;
  height = 60;
  width = 90;
  health = 20;
  chicken_sound = new Audio("audio/chicken.mp3");

  IMAGES_WALKING = [
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
  ];

  offset = {
    top: -20,
    bottom: 0,
    left: -30,
    right: -30,
  };

  constructor() {
    super().loadImage(
      "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 700 + Math.random() * 500;
    this.speed = 0.8 * Math.random() * 0.5;
    this.animate();
    this.isDead = false;
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    if (this.health === 0) {
      this.die();
    }
  }

  die() {
    if (this.isDead) return;
    this.isDead = true;
    this.speed = 0;
    this.chicken_sound.play();
    this.img = this.imageCache[this.IMAGES_DEAD[0]];

    setTimeout(() => {
      this.y = -1000;
    }, 1000);
  }






}
