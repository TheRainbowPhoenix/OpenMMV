import '../stores';
import "../context.js";

// import Scene_MenuBase from './scene_menu_base.js';

import { Window_EquipStatus, Window_EquipCommand, Window_EquipSlot, Window_EquipItem } from '../windows/index';

/**
 * Scene_Equip
 * 
 * The scene class of the equipment screen.
 * 
 * @class Scene_Equip
 * @extends Scene_MenuBase
 */
Scene_Equip = class extends Scene_MenuBase {
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
     * Create the components for the equipment screen.
     */
    create() {
        super.create();
        this.createHelpWindow();
        this.createStatusWindow();
        this.createCommandWindow();
        this.createSlotWindow();
        this.createItemWindow();
        this.refreshActor();
    }

    /**
     * Create the status window for the character.
     */
    createStatusWindow() {
        this._statusWindow = new Window_EquipStatus(0, this._helpWindow.height);
        this.addWindow(this._statusWindow);
    }

    /**
     * Create the command window for equipment actions.
     */
    createCommandWindow() {
        const wx = this._statusWindow.width;
        const wy = this._helpWindow.height;
        const ww = Graphics.boxWidth - this._statusWindow.width;
        this._commandWindow = new Window_EquipCommand(wx, wy, ww);
        this._commandWindow.setHelpWindow(this._helpWindow);
        this._commandWindow.setHandler('equip',    this.commandEquip.bind(this));
        this._commandWindow.setHandler('optimize', this.commandOptimize.bind(this));
        this._commandWindow.setHandler('clear',    this.commandClear.bind(this));
        this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
        this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
        this._commandWindow.setHandler('pageup',   this.previousActor.bind(this));
        this.addWindow(this._commandWindow);
    }

    /**
     * Create the slot window for selecting equipment slots.
     */
    createSlotWindow() {
        const wx = this._statusWindow.width;
        const wy = this._commandWindow.y + this._commandWindow.height;
        const ww = Graphics.boxWidth - this._statusWindow.width;
        const wh = this._statusWindow.height - this._commandWindow.height;
        this._slotWindow = new Window_EquipSlot(wx, wy, ww, wh);
        this._slotWindow.setHelpWindow(this._helpWindow);
        this._slotWindow.setStatusWindow(this._statusWindow);
        this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
        this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
        this.addWindow(this._slotWindow);
    }

    /**
     * Create the item window for selecting items to equip.
     */
    createItemWindow() {
        const wx = 0;
        const wy = this._statusWindow.y + this._statusWindow.height;
        const ww = Graphics.boxWidth;
        const wh = Graphics.boxHeight - wy;
        this._itemWindow = new Window_EquipItem(wx, wy, ww, wh);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setStatusWindow(this._statusWindow);
        this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
        this._slotWindow.setItemWindow(this._itemWindow);
        this.addWindow(this._itemWindow);
    }

    /**
     * Refresh the actor's equipment windows.
     */
    refreshActor() {
        const actor = this.actor();
        this._statusWindow.setActor(actor);
        this._slotWindow.setActor(actor);
        this._itemWindow.setActor(actor);
    }

    /**
     * Handle the equip command selection.
     */
    commandEquip() {
        this._slotWindow.activate();
        this._slotWindow.select(0);
    }

    /**
     * Handle the optimize command selection.
     */
    commandOptimize() {
        SoundManager.playEquip();
        this.actor().optimizeEquipments();
        this._statusWindow.refresh();
        this._slotWindow.refresh();
        this._commandWindow.activate();
    }

    /**
     * Handle the clear command selection.
     */
    commandClear() {
        SoundManager.playEquip();
        this.actor().clearEquipments();
        this._statusWindow.refresh();
        this._slotWindow.refresh();
        this._commandWindow.activate();
    }

    /**
     * Handle the slot selection.
     */
    onSlotOk() {
        this._itemWindow.activate();
        this._itemWindow.select(0);
    }

    /**
     * Handle the slot cancel action.
     */
    onSlotCancel() {
        this._slotWindow.deselect();
        this._commandWindow.activate();
    }

    /**
     * Handle the item selection for equipping.
     */
    onItemOk() {
        SoundManager.playEquip();
        this.actor().changeEquip(this._slotWindow.index(), this._itemWindow.item());
        this._slotWindow.activate();
        this._slotWindow.refresh();
        this._itemWindow.deselect();
        this._itemWindow.refresh();
        this._statusWindow.refresh();
    }

    /**
     * Handle the item cancel action.
     */
    onItemCancel() {
        this._slotWindow.activate();
        this._itemWindow.deselect();
    }

    /**
     * Handle the actor change event.
     */
    onActorChange() {
        this.refreshActor();
        this._commandWindow.activate();
    }
}

export default Scene_Equip;
