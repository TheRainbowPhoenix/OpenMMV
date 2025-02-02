import '../context.js';
import { Window_Help } from '../windows/index';

/**
 * The superclass of all the menu-type scenes.
 * 
 * @class Scene_MenuBase
 * @extends Scene_Base
 */
Scene_MenuBase = class extends Scene_Base {
    constructor(...args) {
        super(...args);
    }

    /**
     * Initialize the menu scene.
     */
    initialize() {
        super.initialize();
    }

    /**
     * Create the components for the menu scene.
     */
    create() {
        super.create();
        this.createBackground();
        this.updateActor();
        this.createWindowLayer();
    }

    /**
     * Get the current actor in the menu.
     * 
     * @return {Game_Actor} The current actor
     */
    actor() {
        return this._actor;
    }

    /**
     * Update the current actor.
     */
    updateActor() {
        this._actor = $gameParty.menuActor();
    }

    /**
     * Create the background for the menu scene.
     */
    createBackground() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
        this.addChild(this._backgroundSprite);
    }

    /**
     * Set the background opacity.
     * 
     * @param {Number} opacity The opacity to set (0 to 255)
     */
    setBackgroundOpacity(opacity) {
        this._backgroundSprite.opacity = opacity;
    }

    /**
     * Create the help window.
     */
    createHelpWindow() {
        this._helpWindow = new Window_Help();
        this.addWindow(this._helpWindow);
    }

    /**
     * Switch to the next actor in the menu.
     */
    nextActor() {
        $gameParty.makeMenuActorNext();
        this.updateActor();
        this.onActorChange();
    }

    /**
     * Switch to the previous actor in the menu.
     */
    previousActor() {
        $gameParty.makeMenuActorPrevious();
        this.updateActor();
        this.onActorChange();
    }

    /**
     * Handle the event when the actor changes.
     */
    onActorChange() {
        // Can be overridden in subclasses
    }
}

export default Scene_MenuBase;
