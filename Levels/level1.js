let level1;
initLevel();

function initLevel(){

level1 = new Level(
    [new Chicken(), new Chicken(), new Chick(), new Chick(), new Endboss()],
    
    [new Cloud()],
    
    [
      new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png",-719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/3_third_layer/2.png",-719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/2_second_layer/2.png",-719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/1_first_layer/2.png",-719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png", 0),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/3_third_layer/1.png",0),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/2_second_layer/1.png",0),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/1_first_layer/1.png",0),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png",719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/3_third_layer/2.png",719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/2_second_layer/2.png",719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/1_first_layer/2.png",719),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png",719 * 2),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/3_third_layer/1.png",719 * 2),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/2_second_layer/1.png",719 * 2),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/1_first_layer/1.png",719 * 2),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png",719 * 3),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/3_third_layer/2.png",719 * 3),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/2_second_layer/2.png",719 * 3),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/1_first_layer/2.png",719 * 3),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png", 719 * 4),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/3_third_layer/1.png",719 * 4),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/2_second_layer/1.png",719 * 4),
      new BackgroundObject("img_pollo_locco/img/5_background/layers/1_first_layer/1.png",719 * 4),
    ],
    
    [
      new Coin(400, 280),
      new Coin(500, 230),
      new Coin(600, 280),
      new Coin(1200, 180),
      new Coin(1400, 130),
      new Coin(1600, 180),
      new Coin(2000, 310),
      new Coin(2100, 260),
      new Coin(2200, 220),
      new Coin(2300, 180),
    ],
    
    [
      new Bottle(300, 350),
      new Bottle(400, 350),
      new Bottle(510, 360),
      new Bottle(630, 355),
      new Bottle(1170, 370),
      new Bottle(1290, 350),
      new Bottle(1390, 350),
      new Bottle(1430, 365),
      new Bottle(2000, 365),
      new Bottle(2100, 360),
      new Bottle(2200, 370),
      new Bottle(2300, 370),
    ],
  );
  
}