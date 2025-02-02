import '../context';
import { Window_ItemCategory, Window_ItemList } from '../windows/index';

/**
 * The scene class for the item screen.
 * 
 * @class Scene_Item
 * @extends Scene_ItemBase
 */
Scene_Item = class extends Scene_ItemBase {
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
     * Create the components of the item scene.
     */
    create() {
        super.create();
        this.createHelpWindow();
        this.createCategoryWindow();
        this.createItemWindow();
        this.createActorWindow();
    }

    /**
     * Create the category window for the item scene.
     */
    createCategoryWindow() {
        this._categoryWindow = new Window_ItemCategory();
        this._categoryWindow.setHelpWindow(this._helpWindow);
        this._categoryWindow.y = this._helpWindow.height;
        this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
        this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._categoryWindow);
    }

    /**
     * Create the item window for the item scene.
     */
    createItemWindow() {
        const wy = this._categoryWindow.y + this._categoryWindow.height;
        const wh = Graphics.boxHeight - wy;
        this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
        this.addWindow(this._itemWindow);
        this._categoryWindow.setItemWindow(this._itemWindow);
    }

    /**
     * Get the best actor to use the item.
     * 
     * @return {Game_Actor} The best actor
     */
    user() {
        const members = $gameParty.movableMembers();
        let bestActor = members[0];
        let bestPha = 0;
        for (let i = 0; i < members.length; i++) {
            if (members[i].pha > bestPha) {
                bestPha = members[i].pha;
                bestActor = members[i];
            }
        }
        return bestActor;
    }

    /**
     * Handle the category selection confirmation.
     */
    onCategoryOk() {
        this._itemWindow.activate();
        this._itemWindow.selectLast();
    }

    /**
     * Handle the item selection confirmation.
     */
    onItemOk() {
        $gameParty.setLastItem(this.item());
        this.determineItem();
    }

    /**
     * Handle the item cancel action.
     */
    onItemCancel() {
        this._itemWindow.deselect();
        this._categoryWindow.activate();
    }

    /**
     * Play the sound effect for using an item.
     */
    playSeForItem() {
        SoundManager.playUseItem();
    }

    /**
     * Use the item and update the window.
     */
    useItem() {
        super.useItem();
        this._itemWindow.redrawCurrentItem();
    }
}

export default Scene_Item;
