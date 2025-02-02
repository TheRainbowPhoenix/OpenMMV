import '../stores';
import "../context.js";
import { 
    Window_Help, Window_Message, Window_ScrollText, 
    Window_BattleLog, Window_PartyCommand, Window_ActorCommand, 
    Window_BattleStatus, Window_BattleActor, Window_BattleEnemy, 
    Window_BattleSkill, Window_BattleItem 
} from '../windows/index';

/**
 * Scene_Battle
 * 
 * The scene class for the battle screen.
 */
Scene_Battle = class extends Scene_Base {
    constructor(...args) {
        super(...args);
    }

    /**
     * Initialize Scene_Battle properties.
     * Can be called via `Scene_Battle.prototype.initialize.call(this)` for compatibility.
     */
    initialize() {
        super.initialize();
    }

    /**
     * Creates the display objects for the battle scene.
     */
    create() {
        super.create();
        this.createDisplayObjects();
    }

    /**
     * Starts the battle scene.
     */
    start() {
        super.start();
        this.startFadeIn(this.fadeSpeed(), false);
        BattleManager.playBattleBgm();
        BattleManager.startBattle();
    }

    /**
     * Updates the battle scene.
     */
    update() {
        const active = this.isActive();
        $gameTimer.update(active);
        $gameScreen.update();
        this.updateStatusWindow();
        this.updateWindowPositions();
        if (active && !this.isBusy()) {
            this.updateBattleProcess();
        }
        super.update();
    }

    /**
     * Updates the battle process.
     */
    updateBattleProcess() {
        if (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) {
            BattleManager.update();
            this.changeInputWindow();
        }
    }

    /**
     * Checks if any input window is active.
     * @returns {boolean} True if any input window is active, otherwise false.
     */
    isAnyInputWindowActive() {
        return (
            this._partyCommandWindow.active ||
            this._actorCommandWindow.active ||
            this._skillWindow.active ||
            this._itemWindow.active ||
            this._actorWindow.active ||
            this._enemyWindow.active
        );
    }

    /**
     * Changes the input window based on the current state.
     */
    changeInputWindow() {
        if (BattleManager.isInputting()) {
            if (BattleManager.actor()) {
                this.startActorCommandSelection();
            } else {
                this.startPartyCommandSelection();
            }
        } else {
            this.endCommandSelection();
        }
    }

    /**
     * Stops the battle scene.
     */
    stop() {
        super.stop();
        if (this.needsSlowFadeOut()) {
            this.startFadeOut(this.slowFadeSpeed(), false);
        } else {
            this.startFadeOut(this.fadeSpeed(), false);
        }
        this._statusWindow.close();
        this._partyCommandWindow.close();
        this._actorCommandWindow.close();
    }

    /**
     * Terminates the battle scene.
     */
    terminate() {
        super.terminate();
        $gameParty.onBattleEnd();
        $gameTroop.onBattleEnd();
        AudioManager.stopMe();
        ImageManager.clearRequest();
    }

    /**
     * Checks if the battle scene needs a slow fade out.
     * @returns {boolean} True if the next scene requires a slow fade out, otherwise false.
     */
    needsSlowFadeOut() {
        return (
            SceneManager.isNextScene(Scene_Title) || 
            SceneManager.isNextScene(Scene_Gameover)
        );
    }

    /**
     * Updates the status window based on the battle scene's state.
     */
    updateStatusWindow() {
        if ($gameMessage.isBusy()) {
            this._statusWindow.close();
            this._partyCommandWindow.close();
            this._actorCommandWindow.close();
        } else if (this.isActive() && !this._messageWindow.isClosing()) {
            this._statusWindow.open();
        }
    }

    /**
     * Updates the positions of the windows.
     */
    updateWindowPositions() {
        let statusX = 0;
        if (BattleManager.isInputting()) {
            statusX = this._partyCommandWindow.width;
        } else {
            statusX = this._partyCommandWindow.width / 2;
        }

        if (this._statusWindow.x < statusX) {
            this._statusWindow.x += 16;
            if (this._statusWindow.x > statusX) {
                this._statusWindow.x = statusX;
            }
        }
        if (this._statusWindow.x > statusX) {
            this._statusWindow.x -= 16;
            if (this._statusWindow.x < statusX) {
                this._statusWindow.x = statusX;
            }
        }
    }

    /**
     * Creates all the display objects for the battle scene.
     */
    createDisplayObjects() {
        this.createSpriteset();
        this.createWindowLayer();
        this.createAllWindows();
        BattleManager.setLogWindow(this._logWindow);
        BattleManager.setStatusWindow(this._statusWindow);
        BattleManager.setSpriteset(this._spriteset);
        this._logWindow.setSpriteset(this._spriteset);
    }

    /**
     * Creates the spriteset for the battle scene.
     */
    createSpriteset() {
        this._spriteset = new Spriteset_Battle();
        this.addChild(this._spriteset);
    }

    /**
     * Creates all the windows for the battle scene.
     */
    createAllWindows() {
        this.createLogWindow();
        this.createStatusWindow();
        this.createPartyCommandWindow();
        this.createActorCommandWindow();
        this.createHelpWindow();
        this.createSkillWindow();
        this.createItemWindow();
        this.createActorWindow();
        this.createEnemyWindow();
        this.createMessageWindow();
        this.createScrollTextWindow();
    }

    /**
     * Creates the log window.
     */
    createLogWindow() {
        this._logWindow = new Window_BattleLog();
        this.addWindow(this._logWindow);
    }

    /**
     * Creates the status window.
     */
    createStatusWindow() {
        this._statusWindow = new Window_BattleStatus();
        this.addWindow(this._statusWindow);
    }

    /**
     * Creates the party command window.
     */
    createPartyCommandWindow() {
        this._partyCommandWindow = new Window_PartyCommand();
        this._partyCommandWindow.setHandler('fight', this.commandFight.bind(this));
        this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
        this._partyCommandWindow.deselect();
        this.addWindow(this._partyCommandWindow);
    }

    /**
     * Creates the actor command window.
     */
    createActorCommandWindow() {
        this._actorCommandWindow = new Window_ActorCommand();
        this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
        this._actorCommandWindow.setHandler('skill', this.commandSkill.bind(this));
        this._actorCommandWindow.setHandler('guard', this.commandGuard.bind(this));
        this._actorCommandWindow.setHandler('item', this.commandItem.bind(this));
        this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
        this.addWindow(this._actorCommandWindow);
    }

    /**
     * Creates the help window.
     */
    createHelpWindow() {
        this._helpWindow = new Window_Help();
        this._helpWindow.visible = false;
        this.addWindow(this._helpWindow);
    }

    /**
     * Creates the skill window.
     */
    createSkillWindow() {
        const wy = this._helpWindow.y + this._helpWindow.height;
        const wh = this._statusWindow.y - wy;
        this._skillWindow = new Window_BattleSkill(0, wy, Graphics.boxWidth, wh);
        this._skillWindow.setHelpWindow(this._helpWindow);
        this._skillWindow.setHandler('ok', this.onSkillOk.bind(this));
        this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
        this.addWindow(this._skillWindow);
    }

    /**
     * Creates the item window.
     */
    createItemWindow() {
        const wy = this._helpWindow.y + this._helpWindow.height;
        const wh = this._statusWindow.y - wy;
        this._itemWindow = new Window_BattleItem(0, wy, Graphics.boxWidth, wh);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
        this.addWindow(this._itemWindow);
    }

    /**
     * Creates the actor window.
     */
    createActorWindow() {
        this._actorWindow = new Window_BattleActor(0, this._statusWindow.y);
        this._actorWindow.setHandler('ok', this.onActorOk.bind(this));
        this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
        this.addWindow(this._actorWindow);
    }

    /**
     * Creates the enemy window.
     */
    createEnemyWindow() {
        this._enemyWindow = new Window_BattleEnemy(0, this._statusWindow.y);
        this._enemyWindow.x = Graphics.boxWidth - this._enemyWindow.width;
        this._enemyWindow.setHandler('ok', this.onEnemyOk.bind(this));
        this._enemyWindow.setHandler('cancel', this.onEnemyCancel.bind(this));
        this.addWindow(this._enemyWindow);
    }

    /**
     * Creates the message window.
     */
    createMessageWindow() {
        this._messageWindow = new Window_Message();
        this.addWindow(this._messageWindow);
        this._messageWindow.subWindows().forEach(window => {
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
     * Refreshes the status window.
     */
    refreshStatus() {
        this._statusWindow.refresh();
    }

    /**
     * Starts the party command selection.
     */
    startPartyCommandSelection() {
        this.refreshStatus();
        this._statusWindow.deselect();
        this._statusWindow.open();
        this._actorCommandWindow.close();
        this._partyCommandWindow.setup();
    }

    /**
     * Selects the next command.
     */
    selectNextCommand() {
        if (this._partyCommandWindow.active) {
            this._partyCommandWindow.selectNextCommand();
        }
    }

    commandFight() {
        this.selectNextCommand();
    }

    commandEscape() {
        BattleManager.processEscape();
        this.changeInputWindow();
    }

    startActorCommandSelection() {
        this._statusWindow.select(BattleManager.actor().index());
        this._partyCommandWindow.close();
        this._actorCommandWindow.setup(BattleManager.actor());
    }

    commandAttack() {
        BattleManager.inputtingAction().setAttack();
        this.selectEnemySelection();
    }

    commandSkill() {
        this._skillWindow.setActor(BattleManager.actor());
        this._skillWindow.setStypeId(this._actorCommandWindow.currentExt());
        this._skillWindow.refresh();
        this._skillWindow.show();
        this._skillWindow.activate();
    }

    commandGuard() {
        BattleManager.inputtingAction().setGuard();
        this.selectNextCommand();
    }

    commandItem() {
        this._itemWindow.refresh();
        this._itemWindow.show();
        this._itemWindow.activate();
    }

    selectNextCommand() {
        BattleManager.selectNextCommand();
        this.changeInputWindow();
    }

    selectPreviousCommand() {
        BattleManager.selectPreviousCommand();
        this.changeInputWindow();
    }

    selectActorSelection() {
        this._actorWindow.refresh();
        this._actorWindow.show();
        this._actorWindow.activate();
    }

    onActorOk() {
        var action = BattleManager.inputtingAction();
        action.setTarget(this._actorWindow.index());
        this._actorWindow.hide();
        this._skillWindow.hide();
        this._itemWindow.hide();
        this.selectNextCommand();
    }

    onActorCancel() {
        this._actorWindow.hide();
        switch (this._actorCommandWindow.currentSymbol()) {
        case 'skill':
            this._skillWindow.show();
            this._skillWindow.activate();
            break;
        case 'item':
            this._itemWindow.show();
            this._itemWindow.activate();
            break;
        }
    }

    selectEnemySelection() {
        this._enemyWindow.refresh();
        this._enemyWindow.show();
        this._enemyWindow.select(0);
        this._enemyWindow.activate();
    }

    onEnemyOk() {
        var action = BattleManager.inputtingAction();
        action.setTarget(this._enemyWindow.enemyIndex());
        this._enemyWindow.hide();
        this._skillWindow.hide();
        this._itemWindow.hide();
        this.selectNextCommand();
    }

    onEnemyCancel() {
        this._enemyWindow.hide();
        switch (this._actorCommandWindow.currentSymbol()) {
        case 'attack':
            this._actorCommandWindow.activate();
            break;
        case 'skill':
            this._skillWindow.show();
            this._skillWindow.activate();
            break;
        case 'item':
            this._itemWindow.show();
            this._itemWindow.activate();
            break;
        }
    }

    onSkillOk() {
        var skill = this._skillWindow.item();
        var action = BattleManager.inputtingAction();
        action.setSkill(skill.id);
        BattleManager.actor().setLastBattleSkill(skill);
        this.onSelectAction();
    }

    onSkillCancel() {
        this._skillWindow.hide();
        this._actorCommandWindow.activate();
    }

    onItemOk() {
        var item = this._itemWindow.item();
        var action = BattleManager.inputtingAction();
        action.setItem(item.id);
        $gameParty.setLastItem(item);
        this.onSelectAction();
    }

    onItemCancel() {
        this._itemWindow.hide();
        this._actorCommandWindow.activate();
    }

    onSelectAction() {
        var action = BattleManager.inputtingAction();
        this._skillWindow.hide();
        this._itemWindow.hide();
        if (!action.needsSelection()) {
            this.selectNextCommand();
        } else if (action.isForOpponent()) {
            this.selectEnemySelection();
        } else {
            this.selectActorSelection();
        }
    }

    endCommandSelection() {
        this._partyCommandWindow.close();
        this._actorCommandWindow.close();
        this._statusWindow.deselect();
    }
}

export default Scene_Battle;
    