class Cloud extends MovableObject {

  constructor() {
    super().loadImage("img_pollo_locco/img/5_background/layers/4_clouds/1.png");
    this.x = 500;
    this.y = 10;
    this.width = 500;
    this.height = 300;
    this.speed = 0.1;
    this.animate();
  }

  animate() {
    setInterval(() => {
        this.moveLeft();
    }, 1000 / 60);
}
}
