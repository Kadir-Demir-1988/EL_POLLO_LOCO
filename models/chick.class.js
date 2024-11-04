class Chick extends MovableObject {

    width = 50;
    height = 50;
    y = 390;

    IMAGES_WALKING = [
        "img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
    ];

    IMAGES_DEAD = [
        "img_pollo_locco/img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];

    constructor() {
        super().loadImage(
            "img_pollo_locco/img/3_enemies_chicken/chicken_small/1_walk/1_w.png"
        );
        this.loadImages(this.IMAGES_WALKING);
        this.x = 350 + Math.random() * 500;
        this.speed = 0.7 * Math.random() * 0.5;
        this.animate();
    }

    drawFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "blue"; 
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    animate() {
        setInterval(() => {
          this.moveLeft();
        }, 1000 / 60);
    
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING);
        }, 200);
      }



}