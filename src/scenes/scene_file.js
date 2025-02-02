import '../context';
import '../context.js';

// import Scene_MenuBase from './scene_menu_base.js';

import { Window_Help, Window_SavefileList } from '../windows/index';

/**
 * Scene_File
 * 
 * The superclass of Scene_Save and Scene_Load. Manages the common behavior for both saving and loading scenes.
 * 
 * @class Scene_File
 * @extends Scene_MenuBase
 */
Scene_File = class extends Scene_MenuBase {
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
     * Create the necessary components for the file scene.
     */
    create() {
        super.create();
        DataManager.loadAllSavefileImages();
        this.createHelpWindow();
        this.createListWindow();
    }

    /**
     * Start the scene and refresh the savefile list.
     */
    start() {
        super.start();
        this._listWindow.refresh();
    }

    /**
     * Get the savefile ID for the selected index.
     * 
     * @returns {number} The savefile ID.
     */
    savefileId() {
        return this._listWindow.index() + 1;
    }

    /**
     * Create the help window for displaying context or instructions.
     */
    createHelpWindow() {
        this._helpWindow = new Window_Help(1);
        this._helpWindow.setText(this.helpWindowText());
        this.addWindow(this._helpWindow);
    }

    /**
     * Create the list window displaying the savefiles.
     */
    createListWindow() {
        const x = 0;
        const y = this._helpWindow.height;
        const width = Graphics.boxWidth;
        const height = Graphics.boxHeight - y;
        this._listWindow = new Window_SavefileList(x, y, width, height);
        this._listWindow.setHandler('ok', this.onSavefileOk.bind(this));
        this._listWindow.setHandler('cancel', this.popScene.bind(this));
        this._listWindow.select(this.firstSavefileIndex());
        this._listWindow.setTopRow(this.firstSavefileIndex() - 2);
        this._listWindow.setMode(this.mode());
        this._listWindow.refresh();
        this.addWindow(this._listWindow);
    }

    /**
     * Get the mode for the scene (null for now, can be overridden in subclasses).
     * 
     * @returns {null} Currently returns null, can be modified in subclasses.
     */
    mode() {
        return null;
    }

    /**
     * Activate the list window to allow selection.
     */
    activateListWindow() {
        this._listWindow.activate();
    }

    /**
     * Get the text to be displayed in the help window.
     * 
     * @returns {string} The help text.
     */
    helpWindowText() {
        return '';
    }

    /**
     * Get the index of the first savefile in the list.
     * 
     * @returns {number} The first savefile index.
     */
    firstSavefileIndex() {
        return 0;
    }

    /**
     * Placeholder method to be overridden in subclasses for savefile selection.
     */
    onSavefileOk() {
        // Placeholder, should be overridden in subclasses (Scene_Save or Scene_Load).
    }
}

export default Scene_File;
