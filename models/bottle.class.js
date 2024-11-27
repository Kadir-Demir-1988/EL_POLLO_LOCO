class Bottle extends DrawableObject {
  height = 80;
  width = 80;

  IMAGES = [
    "img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png"
  ];

  offset = {
    top: 15,
    bottom: 25,
    left: 25,
    right: 25,
  };

  constructor(x, y) {
    super();
    this.loadImage(this.IMAGES);
    this.x = x; 
    this.y = y;
  }
}
