import '../stores';
import '../context.js';

/**
 * The Game Over Scene class that extends Scene_Base
 * 
 * @class Scene_Gameover
 * @extends Scene_Base
 */
Scene_Gameover = class extends Scene_Base {
  constructor(...args) {
    super(...args);
  }

  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }

  /**
   * Create the components for the game over scene.
   */
  create() {
    super.create();
    this.playGameoverMusic();
    this.createBackground();
  }

  /**
   * Start the game over scene.
   */
  start() {
    super.start();
    this.startFadeIn(this.slowFadeSpeed(), false);
  }

  /**
   * Update the game over scene.
   */
  update() {
    if (this.isActive() && !this.isBusy() && this.isTriggered()) {
      this.gotoTitle();
    }
    super.update();
  }

  /**
   * Stop the game over scene.
   */
  stop() {
    super.stop();
    this.fadeOutAll();
  }

  /**
   * Terminate the game over scene.
   */
  terminate() {
    super.terminate();
    AudioManager.stopAll();
  }

  /**
   * Play the game over music.
   */
  playGameoverMusic() {
    AudioManager.stopBgm();
    AudioManager.stopBgs();
    AudioManager.playMe($dataSystem.gameoverMe);
  }

  /**
   * Create the background for the game over scene.
   */
  createBackground() {
    this._backSprite = new Sprite();
    this._backSprite.bitmap = ImageManager.loadSystem('GameOver');
    this.addChild(this._backSprite);
  }

  /**
   * Check if the 'ok' button or touch input is triggered.
   * 
   * @return {Boolean} True if triggered, else false
   */
  isTriggered() {
    return Input.isTriggered('ok') || TouchInput.isTriggered();
  }

  /**
   * Switch to the title scene.
   */
  gotoTitle() {
    SceneManager.goto(Scene_Title);
  }
}

export default Scene_Gameover;
