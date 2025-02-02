import '../context.js';

// import Scene_MenuBase from './scene_menu_base.js';

import { Window_GameEnd } from '../windows/index';

/**
 * Scene_GameEnd
 * 
 * The scene class for the game end screen, where the player can choose to return to the title screen or exit.
 * 
 * @class Scene_GameEnd
 * @extends Scene_MenuBase
 */
Scene_GameEnd = class extends Scene_MenuBase {
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
     * Create the necessary components for the game end screen.
     */
    create() {
        super.create();
        this.createCommandWindow();
    }

    /**
     * Stop the scene, closing the command window.
     */
    stop() {
        super.stop();
        this._commandWindow.close();
    }

    /**
     * Create the background for the game end screen with reduced opacity.
     */
    createBackground() {
        super.createBackground();
        this.setBackgroundOpacity(128);
    }

    /**
     * Create the command window for the game end screen with options.
     */
    createCommandWindow() {
        this._commandWindow = new Window_GameEnd();
        this._commandWindow.setHandler('toTitle', this.commandToTitle.bind(this));
        this._commandWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._commandWindow);
    }

    /**
     * Command to return to the title screen when selected.
     */
    commandToTitle() {
        this.fadeOutAll();
        SceneManager.goto(Scene_Title);
    }
}

export default Scene_GameEnd;
