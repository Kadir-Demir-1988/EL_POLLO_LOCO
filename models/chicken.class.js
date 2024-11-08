class Chicken extends MovableObject {
  y = 390;
  height = 60;
  width = 90;

  
  IMAGES_WALKING = [
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
  ];

  offset = {
    top: 0,
    bottom: -10,
    left: -20,
    right: -20,
  };



  constructor() {
    super().loadImage(
      "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 400 + Math.random() * 500;
    this.speed = 0.8 * Math.random() * 0.5;
    this.animate();

  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }

  die() {
    // Stoppt die Bewegung des Gegners sofort
    this.speed = 0;

    // Spielt die Todesanimation ab und bewegt das Objekt nach einer Verzögerung aus dem sichtbaren Bereich
    this.playAnimation(this.IMAGES_DEAD);

    setTimeout(() => {
      this.y = -1000; // Bewegt das Objekt aus dem sichtbaren Bereich
    }, 500); // 500ms Verzögerung, bevor das Objekt verschwindet
  }






}
