class Endbossbar extends DrawableObject {

    IMAGES = [
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green0.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green20.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green40.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green60.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green80.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green100.png",
    ];

    

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 430;
        this.height = 50;
        this.width = 200;
        this.setPercantage(100);
    }

    setPercantage(percentage) {
        this.percentage = Math.max(0, percentage);
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5; // 100%
        } else if (this.percentage >= 61) {
            return 4; // 61-80%
        } else if (this.percentage >= 41) {
            return 3; // 41-60%
        } else if (this.percentage >= 21) {
            return 2; // 21-40%
        } else if (this.percentage >= 1) {
            return 1; // 1-20%
        } else {
            return 0; // 0%
        }
    }
    




}