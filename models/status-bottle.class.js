class Bottlebar extends DrawableObject {

  emptyBottleSound = new Audio("audio/emptybottle.mp3");

  IMAGES = [
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  ];

  percentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 45;
    this.height = 50;
    this.width = 200;
    this.setPercantage(0);

  }

  shake() {
    const originalX = this.x; // Ursprüngliche Position speichern
    let offset = 10; // Bewegung nach links und rechts
    this.emptyBottleSound.play();

    // Bewege die Statusbar nach links, dann rechts, dann zurück zur Ursprungsposition
    setTimeout(() => { this.x = originalX - offset; }, 100); // Nach links
    setTimeout(() => { this.x = originalX + offset; }, 200); // Nach rechts
    setTimeout(() => { this.x = originalX; }, 300); // Zurück zur Ursprungsposition
  }

  setPercantage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
