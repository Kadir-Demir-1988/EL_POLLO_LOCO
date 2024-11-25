class Endbossbar extends DrawableObject {

    IMAGES = [
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green0.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green20.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green40.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green60.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green80.png",
        "img_pollo_locco/img/7_statusbars/2_statusbar_endboss/green/green100.png",
    ];

    // offset = {
    //     top: 10,
    //     bottom: 20,
    //     left: 30,
    //     right: 30
    // };

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
        if (this.percentage >= 100) {
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