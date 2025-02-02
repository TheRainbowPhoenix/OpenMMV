import '../context.js';
import { Window_MenuCommand, Window_Message, Window_ScrollText, Window_MapName } from '../windows/index';

/**
 * Scene_Map class for the map scene.
 * @extends Scene_Base
 */
Scene_Map = class extends Scene_Base {
    /** @type {number} */
    _waitCount = 0;
    /** @type {number} */
    _encounterEffectDuration = 0;
    /** @type {boolean} */
    _mapLoaded = false;
    /** @type {number} */
    _touchCount = 0;

    constructor(...args) {
        super(...args);
    }

    /**
     * Initializes the scene.
     */
    initialize() {
        super.initialize();
        this._waitCount = 0;
        this._encounterEffectDuration = 0;
        this._mapLoaded = false;
        this._touchCount = 0;
    }

    /**
     * Creates the scene objects.
     */
    create() {
        super.create();
        this._transfer = $gamePlayer.isTransferring();
        const mapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
        DataManager.loadMapData(mapId);
    }

    /**
     * Checks if the scene is ready.
     * @returns {boolean} Whether the scene is ready.
     */
    isReady() {
        if (!this._mapLoaded && DataManager.isMapLoaded()) {
            this.onMapLoaded();
            this._mapLoaded = true;
        }
        return this._mapLoaded && super.isReady();
    }

    /**
     * Called when the map is loaded.
     */
    onMapLoaded() {
        if (this._transfer) {
            $gamePlayer.performTransfer();
        }
        this.createDisplayObjects();
    }

    /**
     * Starts the scene.
     */
    start() {
        super.start();
        SceneManager.clearStack();
        if (this._transfer) {
            this.fadeInForTransfer();
            this._mapNameWindow.open();
            $gameMap.autoplay();
        } else if (this.needsFadeIn()) {
            this.startFadeIn(this.fadeSpeed(), false);
        }
        this.menuCalling = false;
    }

    /**
     * Updates the scene.
     */
    update() {
        this.updateDestination();
        this.updateMainMultiply();
        if (this.isSceneChangeOk()) {
            this.updateScene();
        } else if (SceneManager.isNextScene(Scene_Battle)) {
            this.updateEncounterEffect();
        }
        this.updateWaitCount();
        super.update();
    }

    /**
     * Updates the main scene while accounting for fast-forward input.
     */
    updateMainMultiply() {
        this.updateMain();
        if (this.isFastForward()) {
            this.updateMain();
        }
    }

    /**
     * Updates the main components of the scene.
     */
    updateMain() {
        const active = this.isActive();
        $gameMap.update(active);
        $gamePlayer.update(active);
        $gameTimer.update(active);
        $gameScreen.update();
    }

    /**
     * Checks if fast-forward is enabled.
     * @returns {boolean} Whether fast-forward is enabled.
     */
    isFastForward() {
        return (
            $gameMap.isEventRunning() &&
            !SceneManager.isSceneChanging() &&
            (Input.isLongPressed('ok') || TouchInput.isLongPressed())
        );
    }

    /**
     * Stops the scene.
     */
    stop() {
        super.stop();
        $gamePlayer.straighten();
        this._mapNameWindow.close();
        if (this.needsSlowFadeOut()) {
            this.startFadeOut(this.slowFadeSpeed(), false);
        } else if (SceneManager.isNextScene(Scene_Map)) {
            this.fadeOutForTransfer();
        } else if (SceneManager.isNextScene(Scene_Battle)) {
            this.launchBattle();
        }
    }

    /**
     * Checks if the scene is busy.
     * @returns {boolean} Whether the scene is busy.
     */
    isBusy() {
        return (
            (this._messageWindow && this._messageWindow.isClosing()) ||
            this._waitCount > 0 ||
            this._encounterEffectDuration > 0 ||
            super.isBusy()
        );
    }

    /**
     * Terminates the scene.
     */
    terminate() {
        super.terminate();
        if (!SceneManager.isNextScene(Scene_Battle)) {
            this._spriteset.update();
            this._mapNameWindow.hide();
            SceneManager.snapForBackground();
        } else {
            ImageManager.clearRequest();
        }

        if (SceneManager.isNextScene(Scene_Map)) {
            ImageManager.clearRequest();
        }

        $gameScreen.clearZoom();

        this.removeChild(this._fadeSprite);
        this.removeChild(this._mapNameWindow);
        this.removeChild(this._windowLayer);
        this.removeChild(this._spriteset);
    }

    /**
     * Checks if the scene needs fade-in.
     * @returns {boolean} Whether the scene needs fade-in.
     */
    needsFadeIn() {
        return SceneManager.isPreviousScene(Scene_Battle) || SceneManager.isPreviousScene(Scene_Load);
    }

    /**
     * Checks if the scene needs slow fade-out.
     * @returns {boolean} Whether the scene needs slow fade-out.
     */
    needsSlowFadeOut() {
        return SceneManager.isNextScene(Scene_Title) || SceneManager.isNextScene(Scene_Gameover);
    }

    /**
     * Updates the wait count for the scene.
     * @returns {boolean} Whether the wait count is greater than 0.
     */
    updateWaitCount() {
        if (this._waitCount > 0) {
            this._waitCount--;
            return true;
        }
        return false;
    }

    /**
     * Updates the destination for the player.
     */
    updateDestination() {
        if (this.isMapTouchOk()) {
            this.processMapTouch();
        } else {
            $gameTemp.clearDestination();
            this._touchCount = 0;
        }
    }

    /**
     * Checks if map touch is valid.
     * @returns {boolean} Whether map touch is valid.
     */
    isMapTouchOk() {
        return this.isActive() && $gamePlayer.canMove();
    }

    /**
     * Processes the map touch input.
     */
    processMapTouch() {
        if (TouchInput.isTriggered() || this._touchCount > 0) {
            if (TouchInput.isPressed()) {
                if (this._touchCount === 0 || this._touchCount >= 15) {
                    const x = $gameMap.canvasToMapX(TouchInput.x);
                    const y = $gameMap.canvasToMapY(TouchInput.y);
                    $gameTemp.setDestination(x, y);
                }
                this._touchCount++;
            } else {
                this._touchCount = 0;
            }
        }
    }

    /**
     * Checks if scene change is allowed.
     * @returns {boolean} Whether scene change is allowed.
     */
    isSceneChangeOk() {
        return this.isActive() && !$gameMessage.isBusy();
    }

    /**
     * Updates the scene components, including game-over and transfer checks.
     */
    updateScene() {
        this.checkGameover();
        if (!SceneManager.isSceneChanging()) {
            this.updateTransferPlayer();
        }
        if (!SceneManager.isSceneChanging()) {
            this.updateEncounter();
        }
        if (!SceneManager.isSceneChanging()) {
            this.updateCallMenu();
        }
        if (!SceneManager.isSceneChanging()) {
            this.updateCallDebug();
        }
    }

    /**
     * Creates the display objects for the scene.
     */
    createDisplayObjects() {
        this.createSpriteset();
        this.createMapNameWindow();
        this.createWindowLayer();
        this.createAllWindows();
    }

    /**
     * Creates the spriteset for the scene.
     */
    createSpriteset() {
        this._spriteset = new Spriteset_Map();
        this.addChild(this._spriteset);
    }

    /**
     * Creates all windows for the scene.
     */
    createAllWindows() {
        this.createMessageWindow();
        this.createScrollTextWindow();
    }

    /**
     * Creates the map name window.
     */
    createMapNameWindow() {
        this._mapNameWindow = new Window_MapName();
        this.addChild(this._mapNameWindow);
    }

    /**
     * Creates the message window.
     */
    createMessageWindow() {
        this._messageWindow = new Window_Message();
        this.addWindow(this._messageWindow);
        this._messageWindow.subWindows().forEach((window) => {
            this.addWindow(window);
        });
    }

    /**
     * Creates the scroll text window.
     */
    createScrollTextWindow() {
        this._scrollTextWindow = new Window_ScrollText();
        this.addWindow(this._scrollTextWindow);
    }

    /**
     * Updates the transfer of the player.
     */
    updateTransferPlayer() {
        if ($gamePlayer.isTransferring()) {
            SceneManager.goto(Scene_Map);
        }
    }

    /**
     * Updates the encounter state.
     */
    updateEncounter() {
        if ($gamePlayer.executeEncounter()) {
            SceneManager.push(Scene_Battle);
        }
    }

    /**
     * Updates the menu call state.
     */
    updateCallMenu() {
        if (this.isMenuEnabled()) {
            if (this.isMenuCalled()) {
                this.menuCalling = true;
            }
            if (this.menuCalling && !$gamePlayer.isMoving()) {
                this.callMenu();
            }
        } else {
            this.menuCalling = false;
        }
    }

    /**
     * Checks if the menu is enabled.
     * @returns {boolean} Whether the menu is enabled.
     */
    isMenuEnabled() {
        return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning();
    }

    /**
     * Checks if the menu is called.
     * @returns {boolean} Whether the menu is called.
     */
    isMenuCalled() {
        return Input.isTriggered('menu') || TouchInput.isCancelled();
    }

    /**
     * Calls the menu scene.
     */
    callMenu() {
        SoundManager.playOk();
        SceneManager.push(Scene_Menu);
        Window_MenuCommand.initCommandPosition();
        $gameTemp.clearDestination();
        this._mapNameWindow.hide();
        this._waitCount = 2;
    }

    /**
     * Updates the debug call state.
     */
    updateCallDebug() {
        if (this.isDebugCalled()) {
            SceneManager.push(Scene_Debug);
        }
    }

    /**
     * Checks if debug is called.
     * @returns {boolean} Whether debug is called.
     */
    isDebugCalled() {
        return Input.isTriggered('debug') && $gameTemp.isPlaytest();
    }

    /**
     * Starts the fade-in effect for player transfer.
     */
    fadeInForTransfer() {
        const fadeType = $gamePlayer.fadeType();
        switch (fadeType) {
            case 0:
            case 1:
                this.startFadeIn(this.fadeSpeed(), fadeType === 1);
                break;
        }
    }

    /**
     * Starts the fade-out effect for player transfer.
     */
    fadeOutForTransfer() {
        const fadeType = $gamePlayer.fadeType();
        switch (fadeType) {
            case 0:
            case 1:
                this.startFadeOut(this.fadeSpeed(), fadeType === 1);
                break;
        }
    }

    /**
     * Launches the battle.
     */
    launchBattle() {
        BattleManager.saveBgmAndBgs();
        this.stopAudioOnBattleStart();
        SoundManager.playBattleStart();
        this.startEncounterEffect();
        this._mapNameWindow.hide();
    }

    /**
     * Stops audio on battle start.
     */
    stopAudioOnBattleStart() {
        if (!AudioManager.isCurrentBgm($gameSystem.battleBgm())) {
            AudioManager.stopBgm();
        }
        AudioManager.stopBgs();
        AudioManager.stopMe();
        AudioManager.stopSe();
    }

    /**
     * Starts the encounter effect.
     */
    startEncounterEffect() {
        this._spriteset.hideCharacters();
        this._encounterEffectDuration = this.encounterEffectSpeed();
    }

    /**
     * Updates the encounter effect.
     */
    updateEncounterEffect() {
        if (this._encounterEffectDuration > 0) {
            this._encounterEffectDuration--;
            const speed = this.encounterEffectSpeed();
            const n = speed - this._encounterEffectDuration;
            const p = n / speed;
            const q = ((p - 1) * 20 * p + 5) * p + 1;
            const zoomX = $gamePlayer.screenX();
            const zoomY = $gamePlayer.screenY() - 24;
            if (n === 2) {
                $gameScreen.setZoom(zoomX, zoomY, 1);
                this.snapForBattleBackground();
                this.startFlashForEncounter(speed / 2);
            }
            $gameScreen.setZoom(zoomX, zoomY, q);
            if (n === Math.floor(speed / 6)) {
                this.startFlashForEncounter(speed / 2);
            }
            if (n === Math.floor(speed / 2)) {
                BattleManager.playBattleBgm();
                this.startFadeOut(this.fadeSpeed());
            }
        }
    }

    /**
     * Snaps the background for the battle.
     */
    snapForBattleBackground() {
        this._windowLayer.visible = false;
        SceneManager.snapForBackground();
        this._windowLayer.visible = true;
    }

    /**
     * Starts the flash effect for encounter.
     * @param {number} duration The duration of the flash.
     */
    startFlashForEncounter(duration) {
        const color = [255, 255, 255, 255];
        $gameScreen.startFlash(color, duration);
    }

    /**
     * Gets the speed of the encounter effect.
     * @returns {number} The encounter effect speed.
     */
    encounterEffectSpeed() {
        return 60;
    }
}

export default Scene_Map;