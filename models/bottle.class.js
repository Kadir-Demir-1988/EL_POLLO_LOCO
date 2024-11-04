class Bottle extends DrawableObject {
  height = 80;
  width = 80;

  offset = {
    top: 15,
    bottom: 25,
    left: 25,
    right: 25,
  };

  drawFrame(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "2 ";
    ctx.strokeStyle = "yellow"; 
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
}

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x + Math.random() * 500;
    this.y = y;
  }
}
