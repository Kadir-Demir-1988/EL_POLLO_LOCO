class ThrowableObject extends MovableObject {

  IMAGES_BOTTLE_ROTATION = [
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_BOTTLE_SPLASH = [
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img_pollo_locco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ]


  constructor(x, y, character) {
    super().loadImage("img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.character = character;
    this.throw();
    this.animateRotation();
  }

  throw() {
    this.speedY = 25;
  
    if (this.character) {
      this.character.lastActionTime = new Date().getTime();
      this.character.playAnimation(this.character.IMAGES_WALKING);
    }
    
    this.applyGravity();
    // Speichert das Intervall in `this.throwInterval`
    this.throwInterval = setInterval(() => {
      this.x += 10; // Horizontale Bewegung der Flasche
    }, 50);
  }
  


  animateRotation() {
    this.rotationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
    }, 100); // Zeitintervall für die Rotation
  }
  

  splash() {
    if (this.hasSplashed) return;
    this.hasSplashed = true;
  
    this.speedY = 0;
    this.speedX = 0;
    this.acceleration = 0;
    this.applyGravity = () => {};
    clearInterval(this.throwInterval); // Stoppt die horizontale Bewegung
    clearInterval(this.rotationInterval); // Stoppt die Rotationsanimation
  
    this.playOnce(this.IMAGES_BOTTLE_SPLASH); // Spielt die Splash-Animation einmal ab
  
    setTimeout(() => {
      this.isSplicable = true;
    }, this.IMAGES_BOTTLE_SPLASH.length * 100);
  }
  
  
  
  








  // Methode zum Zeichnen des Rahmens um die Flasche
  drawFrame(ctx) {
    // Blauer Rahmen für die Flasche selbst
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "blue";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();

    // Roter Rahmen für den Offset-Bereich
    if (this.offset) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + (this.offset.left || 0),
        this.y + (this.offset.top || 0),
        this.width - (this.offset.left || 0) - (this.offset.right || 0),
        this.height - (this.offset.top || 0) - (this.offset.bottom || 0)
      );
      ctx.stroke();
    }
  }


}
