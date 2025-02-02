import '../context.js';
// import Scene_MenuBase from './scene_menu_base.js';

import { Window_Options } from '../windows/index';

// Scene_Options
//
// The scene class of the options screen.

Scene_Options = class extends Scene_MenuBase {
    constructor(...args) {
        super(...args);
    }

    initialize() {
        super.initialize();
    }

    create() {
        super.create();
        this.createOptionsWindow();
    }

    terminate() {
        super.terminate();
        ConfigManager.save();
    }

    createOptionsWindow() {
        this._optionsWindow = new Window_Options();
        this._optionsWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._optionsWindow);
    }
}

export default Scene_Options;
