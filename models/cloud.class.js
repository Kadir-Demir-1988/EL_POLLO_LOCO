class Cloud extends MovableObject {
  y = 10;
  width = 500;
  height = 300;

  constructor() {
    super().loadImage("img_pollo_locco/img/5_background/layers/4_clouds/1.png");
    this.x = 0 + Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
