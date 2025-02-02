import '../stores';
import '../context.js';
import { Window_TitleCommand } from '../windows/index';

/**
 * Scene_Title
 *
 * The scene class of the title screen.
 */
Scene_Title = class extends Scene_Base {
    constructor(...args) {
        super(...args);
    }

    /**
     * Initializes the title scene.
     */
    initialize() {
        super.initialize();
    }

    /**
     * Creates the title scene's elements.
     */
    create() {
        super.create();
        this.createBackground();
        this.createForeground();
        this.createWindowLayer();
        this.createCommandWindow();
    }

    /**
     * Starts the title scene by playing the title music and fading in.
     */
    start() {
        super.start();
        SceneManager.clearStack();
        this.centerSprite(this._backSprite1);
        this.centerSprite(this._backSprite2);
        this.playTitleMusic();
        this.startFadeIn(this.fadeSpeed(), false);
    }

    /**
     * Updates the title scene.
     */
    update() {
        if (!this.isBusy()) {
            this._commandWindow.open();
        }
        super.update();
    }

    /**
     * Checks if the title scene is busy.
     * @returns {boolean} True if the scene is busy, otherwise false.
     */
    isBusy() {
        return this._commandWindow.isClosing() || super.isBusy();
    }

    /**
     * Terminates the title scene.
     */
    terminate() {
        super.terminate();
        SceneManager.snapForBackground();
    }

    /**
     * Creates the background elements for the title screen.
     */
    createBackground() {
        this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name));
        this._backSprite2 = new Sprite(ImageManager.loadTitle2($dataSystem.title2Name));
        this.addChild(this._backSprite1);
        this.addChild(this._backSprite2);
    }

    /**
     * Creates the foreground elements for the title screen.
     */
    createForeground() {
        this._gameTitleSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
        this.addChild(this._gameTitleSprite);
        if ($dataSystem.optDrawTitle) {
            this.drawGameTitle();
        }
    }

    /**
     * Draws the game title on the title screen.
     */
    drawGameTitle() {
        const x = 20;
        const y = Graphics.height / 4;
        const maxWidth = Graphics.width - x * 2;
        const text = $dataSystem.gameTitle;
        this._gameTitleSprite.bitmap.outlineColor = 'black';
        this._gameTitleSprite.bitmap.outlineWidth = 8;
        this._gameTitleSprite.bitmap.fontSize = 72;
        this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
    }

    /**
     * Centers a sprite on the screen.
     * @param {Sprite} sprite - The sprite to center.
     */
    centerSprite(sprite) {
        sprite.x = Graphics.width / 2;
        sprite.y = Graphics.height / 2;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
    }

    /**
     * Creates the command window for the title screen.
     */
    createCommandWindow() {
        this._commandWindow = new Window_TitleCommand();
        this._commandWindow.setHandler('newGame', this.commandNewGame.bind(this));
        this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
        this._commandWindow.setHandler('options', this.commandOptions.bind(this));
        this.addWindow(this._commandWindow);
    }

    /**
     * Starts a new game.
     */
    commandNewGame() {
        DataManager.setupNewGame();
        this._commandWindow.close();
        this.fadeOutAll();
        SceneManager.goto(Scene_Map);
    }

    /**
     * Continues the game from the save file.
     */
    commandContinue() {
        this._commandWindow.close();
        SceneManager.push(Scene_Load);
    }

    /**
     * Opens the options menu.
     */
    commandOptions() {
        this._commandWindow.close();
        SceneManager.push(Scene_Options);
    }

    /**
     * Plays the title music.
     */
    playTitleMusic() {
        AudioManager.playBgm($dataSystem.titleBgm);
        AudioManager.stopBgs();
        AudioManager.stopMe();
    }
}

export default Scene_Title;
