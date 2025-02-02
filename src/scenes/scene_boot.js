import '../stores';
import "../context.js";
// import Scene_Base from './scene_base.js';
import { Window_TitleCommand } from '../windows/index';

/**
 * Scene_Boot
 * 
 * The scene class for initializing the entire game.
 * 
 * @class Scene_Boot
 * @extends Scene_Base
 */
Scene_Boot = class extends Scene_Base {
    constructor(...args) {
        super(...args);
    }

    /**
     * Initialize the scene.
     */
    initialize() {
        super.initialize();
        this._startDate = Date.now();
    }

    /**
     * Create the components needed for the boot scene.
     */
    create() {
        super.create();
        DataManager.loadDatabase();
        ConfigManager.load();
        this.loadSystemWindowImage();
    }

    /**
     * Load the system window image.
     */
    loadSystemWindowImage() {
        ImageManager.reserveSystem('Window');
    }

    /**
     * Load all system images.
     */
    static loadSystemImages() {
        ImageManager.reserveSystem('IconSet');
        ImageManager.reserveSystem('Balloon');
        ImageManager.reserveSystem('Shadow1');
        ImageManager.reserveSystem('Shadow2');
        ImageManager.reserveSystem('Damage');
        ImageManager.reserveSystem('States');
        ImageManager.reserveSystem('Weapons1');
        ImageManager.reserveSystem('Weapons2');
        ImageManager.reserveSystem('Weapons3');
        ImageManager.reserveSystem('ButtonSet');
    }

    /**
     * Check if the scene is ready to start.
     * 
     * @return {boolean} True if ready, false otherwise
     */
    isReady() {
        if (super.isReady()) {
            return DataManager.isDatabaseLoaded() && this.isGameFontLoaded();
        } else {
            return false;
        }
    }

    /**
     * Check if the game font is loaded.
     * 
     * @return {boolean} True if the font is loaded, false otherwise
     */
    isGameFontLoaded() {
        if (Graphics.isFontLoaded('GameFont')) {
            return true;
        } else if (!Graphics.canUseCssFontLoading()) {
            const elapsed = Date.now() - this._startDate;
            if (elapsed >= 60000) {
                throw new Error('Failed to load GameFont');
            }
        }
        return false;
    }

    /**
     * Start the scene by setting up resources and moving to the appropriate scene.
     */
    start() {
        super.start();
        SoundManager.preloadImportantSounds();

        if (DataManager.isBattleTest()) {
            DataManager.setupBattleTest();
            SceneManager.goto(Scene_Battle);
        } else if (DataManager.isEventTest()) {
            DataManager.setupEventTest();
            SceneManager.goto(Scene_Map);
        } else {
            this.checkPlayerLocation();
            DataManager.setupNewGame();
            SceneManager.goto(Scene_Title);
            Window_TitleCommand.initCommandPosition();
        }

        this.updateDocumentTitle();
    }

    /**
     * Update the document's title with the game title.
     */
    updateDocumentTitle() {
        document.title = $dataSystem.gameTitle;
    }

    /**
     * Check if the player's starting location is valid.
     */
    checkPlayerLocation() {
        if ($dataSystem.startMapId === 0) {
            throw new Error('Player\'s starting position is not set');
        }
    }
}

export default Scene_Boot;
