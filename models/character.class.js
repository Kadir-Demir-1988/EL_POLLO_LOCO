class Character extends MovableObject {
  world;
  y = 100;
  height = 250;
  width = 140;
  speed = 8;
  isJumping = false;
  amountOfCoins = 0;
  amountOfBottle = 0;
  pepe_snore = new Audio("audio/snore.mp3");
  loosingsound = new Audio("audio/losemusic.mp3");
  walking_sound = new Audio("audio/walking.mp3");

  IMAGES_WALKING = [
    "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "img_pollo_locco/img/2_character_pepe/3_jump/J-31.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-32.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-33.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-34.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-35.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-36.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-37.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-38.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "img_pollo_locco/img/2_character_pepe/5_dead/D-51.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-52.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-53.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-54.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-55.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-56.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png",
    "img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png",
    "img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_IDLE = [
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-1.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-2.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-3.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-4.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-5.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-6.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-7.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-8.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-9.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_SLEEP = [
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img_pollo_locco/img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  offset = {
    top: 80,
    bottom: 10,
    left: 10,
    right: 10,
  };

  /**
   * Initializes the Character instance by loading images for various states
   * such as walking, jumping, dead, hurt, idle, and sleep. It also applies
   * gravity and starts animations for the character. Additionally, it sets
   * the character to idle and long idle modes.
   */
  constructor() {
    super().loadImage("img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.applyGravity();
    this.animate();
    this.pepeIdleModus();
    this.pepeLongIdle();
  }

  /**
   * Handles the animations and movement of the character.
   * 
   * Animations are handled every 100 ms, and the movement is handled
   * every 60 frames per second.
   */
  animate() {
    setInterval(() => {
      this.handleMovement();
    }, 1000 / 60);

    setInterval(() => {
      this.handleAnimations();
    }, 100);
  }

  /**
   * Handles the movement of the character.
   * 
   * This function pauses the walking sound, handles the right and left
   * movement, handles the jump, and updates the camera position to
   * follow the character.
   */
  handleMovement() {
    this.walking_sound.pause();
    this.handleMoveRight();
    this.handleMoveLeft();
    this.handleJump();
    this.world.camera_x = -this.x + 100;
  }

  /**
   * Handles the animations of the character.
   * 
   * This function will play animations for the character when it is
   * dead, hurt, jumping, or walking.
   */
  handleAnimations() {
    this.handleDeadAnimation();
    this.handleHurtAnimation();
    this.handleJumpAnimation();
    this.handleWalkingAnimation();
  }

  /**
   * Handles the character's movement to the right.
   * 
   * This function checks if the right arrow key is pressed and the character's
   * position is within the level's boundaries. If true, it moves the character
   * to the right, sets the direction flag, plays the walking sound, and pauses
   * the snore sound.
   */
  handleMoveRight() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      this.otherDirection = false;
      this.walking_sound.play();
      this.pepe_snore.pause();
    }
  }

  /**
   * Handles the character's movement to the left.
   * 
   * This function checks if the left arrow key is pressed and the character's
   * position is within the level's boundaries. If true, it moves the character
   * to the left, sets the direction flag, plays the walking sound, and pauses
   * the snore sound.
   */
  handleMoveLeft() {
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.otherDirection = true;
      this.walking_sound.play();
      this.pepe_snore.pause();
    }
  }

  /**
   * Handles the character's jumping.
   * 
   * This function checks if the space key is pressed and the character is
   * not above the ground. If true, it makes the character jump and pauses
   * the snore sound.
   */
  handleJump() {
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.jump();
      this.pepe_snore.pause();
    }
  }

  /**
   * Handles the character's death animation.
   * 
   * This function checks if the character is dead and if true, plays the
   * death animation and calls the function pepeIsDead.
   */
  handleDeadAnimation() {
    if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
      this.pepeIsDead();
    }
  }

  /**
   * Handles the character's hurt animation.
   * 
   * This function checks if the character is hurt and if true, plays the
   * hurt animation.
   */
  handleHurtAnimation() {
    if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    }
  }

  /**
   * Handles the character's jumping animation.
   * 
   * This function checks if the character is above the ground and if true,
   * plays the jumping animation. If the character is not above the ground,
   * it sets the jumping animation to false.
   */
  handleJumpAnimation() {
    if (this.isAboveGround()) {
      if (!this.isJumping) {
        this.isJumping = true;
      }
      this.playOnce(this.IMAGES_JUMPING, 1800);
    } else {
      this.isJumping = false;
    }
  }

  /**
   * Handles the character's walking animation.
   * 
   * This function checks if the character is not above the ground and if the
   * left or right arrow key is pressed. If true, it plays the walking
   * animation.
   */
  handleWalkingAnimation() {
    if (!this.isAboveGround() && (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) {
      this.playAnimation(this.IMAGES_WALKING);
    }
  }

  /**
   * Makes the character jump by setting the vertical speed and jump state.
   * 
   * This function sets the character's vertical speed to initiate a jump and
   * marks the character as currently jumping.
   */
  jump() {
    this.speedY = 25;
    this.isJumping = true;
  }

  /**
   * Kills an enemy that the character jumps on.
   * 
   * This function takes an enemy object as a parameter and calls the die
   * method on it to kill it.
   * @param {Enemy} enemy The enemy object to be killed.
   */
  jumpOn(enemy) {
    enemy.die();
  }

  /**
   * Plays the idle animation if the character has not moved for 3 seconds.
   * 
   * This function uses an interval to check if the character has not moved for
   * 3 seconds (3000 milliseconds). If true, the idle animation is played.
   */
  pepeIdleModus() {
    setInterval(() => {
      let timeSinceLastAction = new Date().getTime() - this.lastActionTime;
      if (timeSinceLastAction > 3000) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 400);
  }

  /**
   * Plays the long idle animation if the character has not moved for 6 seconds.
   * 
   * This function uses an interval to check if the character has not moved for
   * 6 seconds (6000 milliseconds). If true, the sleep animation is played and
   * the snore sound is activated.
   */
  pepeLongIdle() {
    setInterval(() => {
      let timeSinceLastAction = new Date().getTime() - this.lastActionTime;
      if (timeSinceLastAction > 6000) {
        this.playAnimation(this.IMAGES_SLEEP);
        this.pepe_snore.play();
      }
    }, 400);
  }

  /**
   * Increases the amount of coins the character has by 10.
   * If the amount of coins exceeds 100, it is capped at 100.
   */
  collectCoin() {
    this.amountOfCoins += 20;
    if (this.amountOfCoins > 100) {
      this.amountOfCoins = 100;
    }
  }

  /**
   * Increases the amount of bottles the character has by 10.
   * If the amount of bottles exceeds 100, it is capped at 100.
   */
  collectBottle() {
    this.amountOfBottle += 1;
    if (this.amountOfBottle > 100) {
      this.amountOfBottle = 100;
    }
  }

  /**
   * Handles the character's death.
   * 
   * This function checks if the character's energy is 0 and if true, plays the
   * losing sound and calls the gameOver function after 1.5 seconds.
   */
  pepeIsDead() {
    if (this.energy == 0) {
      this.loosingsound.play();
      setTimeout(() => {
        gameOver();
      }, 1500);
    }
  }
}
