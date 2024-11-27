class Endboss extends MovableObject {
  height = 375;
  width = 250;
  y = 80;
  energy = 100;
  boss_sound = new Audio("audio/boss.mp3");

  moveleftInt;
  playAniInt;
  animateInt;

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
    this.speed = 0.3;
    this.walkLeft();
    this.animate();
  }

  takeDamage(amount) {
    this.energy = Math.max(0, this.energy - amount);
    this.lastHit = new Date().getTime();
  }

  walkLeft() {
    if (this.moveleftInt) clearInterval(this.moveleftInt);
    if (this.playAniInt) clearInterval(this.playAniInt);
    this.moveleftInt = setInterval(() => {
      this.moveLeft();
    }, 200);

    this.playAniInt = setInterval(() => {
      if (!this.isDead()) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);
  }

  animate() {
    this.animateInt = setInterval(() => {
      if (this.isDead()) {
        this.playdie();
      } else if (this.isHurt()) {
        this.playHurt();
      } else if (this.energy == 60) {
        this.playAlert();
      } else if (this.energy == 19) {
        this.playAttack();
      } else {
        this.moveLeft();
      }
    }, 200);
  }

  playHurt() {
    if (this.hurtAnimationPlayed || this.energy == 60) return;
    this.hurtAnimationPlayed = true;
    clearInterval(this.moveleftInt);
    clearInterval(this.playAniInt);
    this.boss_sound.play();
    this.playOnce(this.IMAGES_HURT, 1200);
    setTimeout(() => {
      this.hurtAnimationPlayed = false;
      this.walkLeft();
    }, 1200);
  }

  playdie() {
    this.speed = 0;
    this.playOnce(this.IMAGES_DEAD, 1200);

    setTimeout(() => {
      this.y = -1000;
      this.isSplicable = true;
    }, 1400);

  }

  playAlert() {
    if (this.alertActive) return;
    this.alertActive = true;
    clearInterval(this.moveleftInt);
    clearInterval(this.playAniInt);
    this.energy -= 1;
    this.playOnce(this.IMAGES_ALERT, 3200);

    setTimeout(() => {
      this.alertActive = false;
      this.walkLeft();
    }, 3300);
  }

  playAttack() {
    if (this.alertattack) return;
    this.alertattack = true;
    clearInterval(this.moveleftInt);
    clearInterval(this.playAniInt);
    this.energy -= 1;
    this.playOnce(this.IMAGES_ATTACK, 3200);

    setTimeout(() => {
      this.alertattack = false;
      this.walkLeft();
    }, 3300);
  }






}
