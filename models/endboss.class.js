class Endboss extends MovableObject {
  height = 375;
  width = 250;
  y = 80;
  energy = 100;
  boss_sound = new Audio("audio/boss.mp3");

  IMAGES_WALKING = [
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ALERT = [
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G13.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G14.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G15.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G16.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G17.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G18.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G19.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  offset = {
    top: 60,
    bottom: 20,
    left: 30,
    right: 30
  };

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2700;
    this.id = "endboss";
    this.energy = 100;
    this.speed = 0.8;
    this.walkLeft();
    this.animate();
}

  takeDamage(amount) {
    this.energy = Math.max(0, this.energy - amount);
    this.lastHit = new Date().getTime();
    console.log(`Endboss nimmt Schaden: ${amount}. Gesundheit: ${this.energy}`);
  }
  moveleftInt;
  playAniInt;
  animateInt;
  walkLeft(){
    this.moveleftInt = setInterval(() => {
      this.moveLeft();
    }, 200);

    this.playAniInt = setInterval(() => {
      if (!this.isDead()) {
        this.playAnimation(this.IMAGES_WALKING);
      }    
    }, 300);
  }

  animate() {
    this.animateInt = setInterval(() => {
      if (this.isDead()) {
        clearInterval(this.animate);
        clearInterval(this.moveLeft);
        clearInterval(this.playAniInt);
        this.playdie();
      } else if (this.isHurt()) {
        clearInterval(this.moveLeft);
        clearInterval(this.playAniInt);
        this.playHurt();
      } else{
        this.moveLeft();
      }
    }, 200);
  }



  playHurt() {
    this.boss_sound.play();
    this.playOnce(this.IMAGES_HURT);
    setTimeout(() => {
      this.walkLeft();
    }, 500);
  }

  playdie() {
    this.speed = 0;
    this.playOnce(this.IMAGES_DEAD);

    setTimeout(() => {
      this.y = -1000;
      this.isSplicable = true;
    }, 1500);

  }



















}
