import '../context';
import Scene_ItemBase from './scene_item_base.js';
import { Window_SkillType, Window_SkillStatus, Window_SkillList } from '../windows/index';

/**
 * The scene class for the skill screen.
 * 
 * @class Scene_Skill
 * @extends Scene_ItemBase
 */
Scene_Skill = class extends Scene_ItemBase {
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
     * Create the components of the skill scene.
     */
    create() {
        super.create();
        this.createHelpWindow();
        this.createSkillTypeWindow();
        this.createStatusWindow();
        this.createItemWindow();
        this.createActorWindow();
    }

    /**
     * Start the scene and refresh the actor.
     */
    start() {
        super.start();
        this.refreshActor();
    }

    /**
     * Create the skill type window for the skill scene.
     */
    createSkillTypeWindow() {
        const wy = this._helpWindow.height;
        this._skillTypeWindow = new Window_SkillType(0, wy);
        this._skillTypeWindow.setHelpWindow(this._helpWindow);
        this._skillTypeWindow.setHandler('skill', this.commandSkill.bind(this));
        this._skillTypeWindow.setHandler('cancel', this.popScene.bind(this));
        this._skillTypeWindow.setHandler('pagedown', this.nextActor.bind(this));
        this._skillTypeWindow.setHandler('pageup', this.previousActor.bind(this));
        this.addWindow(this._skillTypeWindow);
    }

    /**
     * Create the status window for the skill scene.
     */
    createStatusWindow() {
        const wx = this._skillTypeWindow.width;
        const wy = this._helpWindow.height;
        const ww = Graphics.boxWidth - wx;
        const wh = this._skillTypeWindow.height;
        this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
        this._statusWindow.reserveFaceImages();
        this.addWindow(this._statusWindow);
    }

    /**
     * Create the item window for the skill scene.
     */
    createItemWindow() {
        const wx = 0;
        const wy = this._statusWindow.y + this._statusWindow.height;
        const ww = Graphics.boxWidth;
        const wh = Graphics.boxHeight - wy;
        this._itemWindow = new Window_SkillList(wx, wy, ww, wh);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
        this._skillTypeWindow.setSkillWindow(this._itemWindow);
        this.addWindow(this._itemWindow);
    }

    /**
     * Refresh the actor's information in the windows.
     */
    refreshActor() {
        const actor = this.actor();
        this._skillTypeWindow.setActor(actor);
        this._statusWindow.setActor(actor);
        this._itemWindow.setActor(actor);
    }

    /**
     * Get the user actor for skills.
     * 
     * @return {Game_Actor} The current actor
     */
    user() {
        return this.actor();
    }

    /**
     * Handle the skill type selection.
     */
    commandSkill() {
        this._itemWindow.activate();
        this._itemWindow.selectLast();
    }

    /**
     * Handle the item selection confirmation.
     */
    onItemOk() {
        this.actor().setLastMenuSkill(this.item());
        this.determineItem();
    }

    /**
     * Handle the item cancel action.
     */
    onItemCancel() {
        this._itemWindow.deselect();
        this._skillTypeWindow.activate();
    }

    /**
     * Play the sound effect for using a skill.
     */
    playSeForItem() {
        SoundManager.playUseSkill();
    }

    /**
     * Use the item and refresh the windows.
     */
    useItem() {
        super.useItem();
        this._statusWindow.refresh();
        this._itemWindow.refresh();
    }

    /**
     * Handle the actor change event.
     */
    onActorChange() {
        this.refreshActor();
        this._skillTypeWindow.activate();
    }
}

export default Scene_Skill;
