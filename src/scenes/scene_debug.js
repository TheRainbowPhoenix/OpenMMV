import '../stores';
import "../context.js";

// import Scene_MenuBase from './scene_menu_base.js';

import { Window_Base, Window_DebugRange, Window_DebugEdit } from '../windows/index';

/**
 * Scene_Debug
 * 
 * The scene class for the debug screen.
 * 
 * @class Scene_Debug
 * @extends Scene_MenuBase
 */
Scene_Debug = class extends Scene_MenuBase {
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
     * Create the components for the debug screen.
     */
    create() {
        super.create();
        this.createRangeWindow();
        this.createEditWindow();
        this.createDebugHelpWindow();
    }

    /**
     * Create the range selection window.
     */
    createRangeWindow() {
        this._rangeWindow = new Window_DebugRange(0, 0);
        this._rangeWindow.setHandler('ok',     this.onRangeOk.bind(this));
        this._rangeWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._rangeWindow);
    }

    /**
     * Create the edit window for modifying values.
     */
    createEditWindow() {
        const wx = this._rangeWindow.width;
        const ww = Graphics.boxWidth - wx;
        this._editWindow = new Window_DebugEdit(wx, 0, ww);
        this._editWindow.setHandler('cancel', this.onEditCancel.bind(this));
        this._rangeWindow.setEditWindow(this._editWindow);
        this.addWindow(this._editWindow);
    }

    /**
     * Create the debug help window.
     */
    createDebugHelpWindow() {
        const wx = this._editWindow.x;
        const wy = this._editWindow.height;
        const ww = this._editWindow.width;
        const wh = Graphics.boxHeight - wy;
        this._debugHelpWindow = new Window_Base(wx, wy, ww, wh);
        this.addWindow(this._debugHelpWindow);
    }

    /**
     * Handle the OK action for the range window.
     */
    onRangeOk() {
        this._editWindow.activate();
        this._editWindow.select(0);
        this.refreshHelpWindow();
    }

    /**
     * Handle the cancel action for the edit window.
     */
    onEditCancel() {
        this._rangeWindow.activate();
        this._editWindow.deselect();
        this.refreshHelpWindow();
    }

    /**
     * Refresh the help window contents based on the current state.
     */
    refreshHelpWindow() {
        this._debugHelpWindow.contents.clear();
        if (this._editWindow.active) {
            this._debugHelpWindow.drawTextEx(this.helpText(), 4, 0);
        }
    }

    /**
     * Get the help text to display in the help window.
     * 
     * @return {string} The help text for the current mode.
     */
    helpText() {
        if (this._rangeWindow.mode() === 'switch') {
            return 'Enter : ON / OFF';
        } else {
            return ('Left     :  -1\n' +
                    'Right    :  +1\n' +
                    'Pageup   : -10\n' +
                    'Pagedown : +10');
        }
    }
}

export default Scene_Debug;
