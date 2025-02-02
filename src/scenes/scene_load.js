import '../stores';
import '../context.js';

// import Scene_File from './scene_file.js';

// Scene_Load
//
// The scene class for the load screen, handling the loading of saved games.

Scene_Load = class extends Scene_File {
    constructor(...args) {
        super(...args);
        this._loadSuccess = false;  // Flag to track load success
    }

    /**
     * Terminate the scene.
     * If the load was successful, perform post-load actions.
     */
    terminate() {
        super.terminate();
        if (this._loadSuccess) {
            $gameSystem.onAfterLoad();  // Perform actions after loading the game
        }
    }

    /**
     * Define the mode of the scene as 'load'.
     */
    mode() {
        return 'load';
    }

    /**
     * Provide the help text displayed on the load screen.
     */
    helpWindowText() {
        return TextManager.loadMessage;
    }

    /**
     * Return the first save file index based on the most recent savefile ID.
     */
    firstSavefileIndex() {
        return DataManager.latestSavefileId() - 1;  // Adjust index for zero-based array
    }

    /**
     * Handle the selection of a save file.
     * Attempts to load the selected game file and handle success/failure.
     */
    onSavefileOk() {
        super.onSavefileOk();
        const savefileId = this.savefileId();
        if (DataManager.loadGame(savefileId)) {
            this.onLoadSuccess();
        } else {
            this.onLoadFailure();
        }
    }

    /**
     * Handle successful game load.
     * Plays load sound, fades out the scene, reloads the map if necessary, 
     * and transitions to the game map.
     */
    onLoadSuccess() {
        SoundManager.playLoad();  // Play load success sound
        this.fadeOutAll();        // Fade out the load scene
        this.reloadMapIfUpdated(); // Reload the map if the version has changed
        SceneManager.goto(Scene_Map); // Switch to the game map scene
        this._loadSuccess = true;  // Mark the load as successful
    }

    /**
     * Handle failed load attempt.
     * Plays an error sound and reactivates the list window for file selection.
     */
    onLoadFailure() {
        SoundManager.playBuzzer();  // Play failure sound
        this.activateListWindow();  // Reactivate the file selection window
    }

    /**
     * Reload the map if the game version has changed.
     */
    reloadMapIfUpdated() {
        if ($gameSystem.versionId() !== $dataSystem.versionId) {
            $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y); // Reserve player position
            $gamePlayer.requestMapReload();  // Request map reload
        }
    }
}

export default Scene_Load;
