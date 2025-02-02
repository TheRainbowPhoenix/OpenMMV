import '../context';

// import Scene_MenuBase from './scene_menu_base.js';

import { Window_MenuActor } from '../windows/index';

/**
 * Scene_ItemBase
 * 
 * The superclass for both Scene_Item and Scene_Skill, providing common functionality 
 * for handling item use in the menu system.
 * 
 * @class Scene_ItemBase
 * @extends Scene_MenuBase
 */
Scene_ItemBase = class extends Scene_MenuBase {
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
     * Create the components needed for the item menu.
     */
    create() {
        super.create();
    }

    /**
     * Create the actor window for selecting which actor will use an item.
     */
    createActorWindow() {
        this._actorWindow = new Window_MenuActor();
        this._actorWindow.setHandler('ok', this.onActorOk.bind(this));
        this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
        this.addWindow(this._actorWindow);
    }

    /**
     * Get the currently selected item.
     * @returns {object} The selected item.
     */
    item() {
        return this._itemWindow.item();
    }

    /**
     * Get the user (typically the actor) that will use the item.
     * @returns {object|null} The user of the item, or null.
     */
    user() {
        return null;
    }

    /**
     * Check if the cursor is on the left side.
     * @returns {boolean} True if the cursor is on the left side.
     */
    isCursorLeft() {
        return this._itemWindow.index() % 2 === 0;
    }

    /**
     * Show a sub-window, either on the left or right based on cursor position.
     * @param {object} window The window to show.
     */
    showSubWindow(window) {
        window.x = this.isCursorLeft() ? Graphics.boxWidth - window.width : 0;
        window.show();
        window.activate();
    }

    /**
     * Hide a sub-window and reactivate the item window.
     * @param {object} window The window to hide.
     */
    hideSubWindow(window) {
        window.hide();
        window.deactivate();
        this.activateItemWindow();
    }

    /**
     * Handle selecting an actor and using the item.
     */
    onActorOk() {
        if (this.canUse()) {
            this.useItem();
        } else {
            SoundManager.playBuzzer();
        }
    }

    /**
     * Handle canceling item use selection for the actor.
     */
    onActorCancel() {
        this.hideSubWindow(this._actorWindow);
    }

    /**
     * Decide what happens when an item is determined for use.
     */
    determineItem() {
        const action = new Game_Action(this.user());
        const item = this.item();
        action.setItemObject(item);
        if (action.isForFriend()) {
            this.showSubWindow(this._actorWindow);
            this._actorWindow.selectForItem(this.item());
        } else {
            this.useItem();
            this.activateItemWindow();
        }
    }

    /**
     * Use the selected item and apply its effects.
     */
    useItem() {
        this.playSeForItem();
        this.user().useItem(this.item());
        this.applyItem();
        this.checkCommonEvent();
        this.checkGameover();
        this._actorWindow.refresh();
    }

    /**
     * Reactivate the item window.
     */
    activateItemWindow() {
        this._itemWindow.refresh();
        this._itemWindow.activate();
    }

    /**
     * Get the actors targeted by the item based on its effects.
     * @returns {Array} A list of targeted actors.
     */
    itemTargetActors() {
        const action = new Game_Action(this.user());
        action.setItemObject(this.item());
        if (!action.isForFriend()) {
            return [];
        } else if (action.isForAll()) {
            return $gameParty.members();
        } else {
            return [$gameParty.members()[this._actorWindow.index()]];
        }
    }

    /**
     * Check if the item can be used by the user.
     * @returns {boolean} True if the item can be used.
     */
    canUse() {
        return this.user().canUse(this.item()) && this.isItemEffectsValid();
    }

    /**
     * Validate the effects of the item on its target actors.
     * @returns {boolean} True if the item can have valid effects on at least one target.
     */
    isItemEffectsValid() {
        const action = new Game_Action(this.user());
        action.setItemObject(this.item());
        return this.itemTargetActors().some((target) => action.testApply(target));
    }

    /**
     * Apply the item effects to the target actors.
     */
    applyItem() {
        const action = new Game_Action(this.user());
        action.setItemObject(this.item());
        this.itemTargetActors().forEach((target) => {
            for (let i = 0; i < action.numRepeats(); i++) {
                action.apply(target);
            }
        });
        action.applyGlobal();
    }

    /**
     * Check if there is a common event to trigger after using the item.
     */
    checkCommonEvent() {
        if ($gameTemp.isCommonEventReserved()) {
            SceneManager.goto(Scene_Map);
        }
    }
}

export default Scene_ItemBase;
