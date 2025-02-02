import '../context.js';
// import Scene_File from './scene_file.js';

// Scene_Save
//
// The scene class of the save screen.

Scene_Save = class extends Scene_File {
    constructor(...args) {
        super(...args);
    }

    initialize() {
        super.initialize();
    }

    mode() {
        return 'save';
    }

    helpWindowText() {
        return TextManager.saveMessage;
    }

    firstSavefileIndex() {
        return DataManager.lastAccessedSavefileId() - 1;
    }

    onSavefileOk() {
        super.onSavefileOk();
        $gameSystem.onBeforeSave();
        if (DataManager.saveGame(this.savefileId())) {
            this.onSaveSuccess();
        } else {
            this.onSaveFailure();
        }
    }

    onSaveSuccess() {
        SoundManager.playSave();
        StorageManager.cleanBackup(this.savefileId());
        this.popScene();
    }

    onSaveFailure() {
        SoundManager.playBuzzer();
        this.activateListWindow();
    }
}

export default Scene_Save;
