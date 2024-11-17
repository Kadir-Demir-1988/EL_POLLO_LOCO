class Endboss extends MovableObject {
  height = 375;
  width = 250;
  y = 80;
  energy = 100;

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
    top: 20,
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
    this.animate();
  }

  takeDamage(amount) {
    this.energy = Math.max(0, this.energy - amount); // Gesundheit reduzieren, aber nicht negativ
    this.lastHit = new Date().getTime(); // Zeitpunkt des Treffers speichern
    console.log(`Endboss nimmt Schaden: ${amount}. Gesundheit: ${this.energy}`);
  }


  playHurt() {
    console.log("Endboss erleidet Schaden!");
    this.playAnimation(this.IMAGES_HURT); // Spielt die Hurt-Animation ab
  }






  animate() {
    setInterval(() => {
      if (this.isDead()) {
        this.die();
      } else if (this.isHurt()) {
        if (!this.isCurrentlyHurt) {
          this.isCurrentlyHurt = true;
          this.playOnce(this.IMAGES_HURT);
          setTimeout(() => {
            this.isCurrentlyHurt = false;
          }, 500);
        }
      } else {
        this.moveLeft();
      }
    }, 1000 / 60);

    setInterval(() => {
      if (!this.isHurt() && !this.isDead()) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);
  }

  die() {
    this.playOnce(this.IMAGES_DEAD); 

    setTimeout(() => {
      this.y = -1000; 
      this.isSplicable = true; 
    },1000); 
  }






}
