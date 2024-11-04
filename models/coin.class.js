class Coin extends MovableObject {

    height = 100;
    width = 100;

    IMAGES = [
        "img_pollo_locco/img/8_coin/coin_1.png",
        "img_pollo_locco/img/8_coin/coin_2.png"
    ];

    offset = {
        top: 45,
        bottom: 90,
        left: 45,
        right: 45,
    };



    constructor(x, y) {
        super().loadImage("img_pollo_locco/img/8_coin/coin_2.png");
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    drawFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "2 ";
        ctx.strokeStyle = "red"; 
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }
}