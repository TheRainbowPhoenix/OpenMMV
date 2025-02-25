import '../context.js'; 
// import Scene_MenuBase from './scene_menu_base.js';

import { Window_NameEdit, Window_NameInput } from '../windows/index';

// Scene_Name
//
// The scene class of the name input screen.

Scene_Name = class extends Scene_MenuBase {
    constructor(...args) {
        super(...args);
    }

    initialize() {
        super.initialize();
    }

    prepare(actorId, maxLength) {
        this._actorId = actorId;
        this._maxLength = maxLength;
    }

    create() {
        super.create();
        this._actor = $gameActors.actor(this._actorId);
        this.createEditWindow();
        this.createInputWindow();
    }

    start() {
        super.start();
        this._editWindow.refresh();
    }

    createEditWindow() {
        this._editWindow = new Window_NameEdit(this._actor, this._maxLength);
        this.addWindow(this._editWindow);
    }

    createInputWindow() {
        this._inputWindow = new Window_NameInput(this._editWindow);
        this._inputWindow.setHandler('ok', this.onInputOk.bind(this));
        this.addWindow(this._inputWindow);
    }

    onInputOk() {
        this._actor.setName(this._editWindow.name());
        this.popScene();
    }
}

export default Scene_Name;
