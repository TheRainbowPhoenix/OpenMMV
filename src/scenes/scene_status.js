import '../context.js';
import { Window_Status } from '../windows/index';

/**
 * Scene_Status
 * 
 * The scene class of the status screen.
 */
Scene_Status = class extends Scene_MenuBase {
    constructor(...args) {
        super(...args);
    }

    /**
     * Initializes the status scene.
     */
    initialize() {
        super.initialize();
    }

    /**
     * Creates the status scene's elements.
     */
    create() {
        super.create();
        this._statusWindow = new Window_Status();
        this._statusWindow.setHandler('cancel', this.popScene.bind(this));
        this._statusWindow.setHandler('pagedown', this.nextActor.bind(this));
        this._statusWindow.setHandler('pageup', this.previousActor.bind(this));
        this._statusWindow.reserveFaceImages();
        this.addWindow(this._statusWindow);
    }

    /**
     * Starts the status scene by refreshing the actor's information.
     */
    start() {
        super.start();
        this.refreshActor();
    }

    /**
     * Refreshes the actor's information in the status window.
     */
    refreshActor() {
        const actor = this.actor();
        this._statusWindow.setActor(actor);
    }

    /**
     * Handles actor change and refreshes the status window.
     */
    onActorChange() {
        this.refreshActor();
        this._statusWindow.activate();
    }
}

export default Scene_Status;
