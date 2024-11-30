class Coin extends MovableObject {



    height = 100;
    width = 100;

    IMAGES = [
        "img_pollo_locco/img/8_coin/coin_1.png",
        "img_pollo_locco/img/8_coin/coin_2.png"
    ];

    offset = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40,
    };

    

    constructor(x, y) {
        super().loadImage("img_pollo_locco/img/8_coin/coin_2.png");
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }

    



} 