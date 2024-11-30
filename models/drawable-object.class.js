class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 120;
  y = 280;

  height = 150;
  width = 100;

  // loadImage("img/test.png")
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementbyId("image") <img id="image" src>
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Chick ||
      this instanceof Endboss ||
      this instanceof Bottle ||
      this instanceof Coin
    ) {
      // Zeichnet den normalen Rahmen um das Objekt
      // ctx.beginPath();
      // ctx.lineWidth = "1";
      // ctx.strokeStyle = "blue";
      // ctx.rect(this.x, this.y, this.width, this.height);
      // ctx.stroke();

      // Zeichnet den Offset-Rahmen, wenn Offset definiert ist
      if (this.offset) {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red"; // Farbe für den Offset-Bereich
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


  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
