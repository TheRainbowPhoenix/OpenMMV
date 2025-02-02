import '../context.js';
// import Scene_MenuBase from './scene_menu_base.js';

import { Window_Base, Window_Gold, Window_ItemCategory, Window_ShopCommand, Window_ShopBuy, Window_ShopSell, Window_ShopNumber, Window_ShopStatus } from '../windows/index';

/**
 * The scene class for the shop screen.
 * @extends Scene_MenuBase
 */
Scene_Shop = class extends Scene_MenuBase {
    /**
     * Initializes the scene.
     * @param {...*} args The arguments passed to the constructor.
     */
    constructor(...args) {
        super(...args);
    }

    /**
     * Initializes the scene's base functionality.
     */
    initialize() {
        super.initialize();
    }

    /**
     * Prepares the scene with the provided goods and purchase options.
     * @param {Array} goods The list of goods to be sold in the shop.
     * @param {boolean} purchaseOnly Whether the shop is for purchasing only.
     */
    prepare(goods, purchaseOnly) {
        /** @type {Array} */
        this._goods = goods;
        /** @type {boolean} */
        this._purchaseOnly = purchaseOnly;
        /** @type {Object} */
        this._item = null;
    }

    /**
     * Creates the various windows and UI elements in the scene.
     */
    create() {
        super.create();
        this.createHelpWindow();
        this.createGoldWindow();
        this.createCommandWindow();
        this.createDummyWindow();
        this.createNumberWindow();
        this.createStatusWindow();
        this.createBuyWindow();
        this.createCategoryWindow();
        this.createSellWindow();
    }

    /**
     * Creates the gold window displaying the player's current amount of gold.
     */
    createGoldWindow() {
        this._goldWindow = new Window_Gold(0, this._helpWindow.height);
        this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
        this.addWindow(this._goldWindow);
    }

    /**
     * Creates the command window where the user can choose between buying, selling, or canceling.
     */
    createCommandWindow() {
        this._commandWindow = new Window_ShopCommand(this._goldWindow.x, this._purchaseOnly);
        this._commandWindow.y = this._helpWindow.height;
        this._commandWindow.setHandler('buy',    this.commandBuy.bind(this));
        this._commandWindow.setHandler('sell',   this.commandSell.bind(this));
        this._commandWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._commandWindow);
    }

    /**
     * Creates a dummy window used for layout purposes.
     */
    createDummyWindow() {
        var wy = this._commandWindow.y + this._commandWindow.height;
        var wh = Graphics.boxHeight - wy;
        this._dummyWindow = new Window_Base(0, wy, Graphics.boxWidth, wh);
        this.addWindow(this._dummyWindow);
    }

    /**
     * Creates the number input window for purchasing or selling items.
     */
    createNumberWindow() {
        var wy = this._dummyWindow.y;
        var wh = this._dummyWindow.height;
        this._numberWindow = new Window_ShopNumber(0, wy, wh);
        this._numberWindow.hide();
        this._numberWindow.setHandler('ok',     this.onNumberOk.bind(this));
        this._numberWindow.setHandler('cancel', this.onNumberCancel.bind(this));
        this.addWindow(this._numberWindow);
    }

    /**
     * Creates the status window to display information about the selected item.
     */
    createStatusWindow() {
        var wx = this._numberWindow.width;
        var wy = this._dummyWindow.y;
        var ww = Graphics.boxWidth - wx;
        var wh = this._dummyWindow.height;
        this._statusWindow = new Window_ShopStatus(wx, wy, ww, wh);
        this._statusWindow.hide();
        this.addWindow(this._statusWindow);
    }

    /**
     * Creates the buy window where the user can select which items to purchase.
     */
    createBuyWindow() {
        var wy = this._dummyWindow.y;
        var wh = this._dummyWindow.height;
        this._buyWindow = new Window_ShopBuy(0, wy, wh, this._goods);
        this._buyWindow.setHelpWindow(this._helpWindow);
        this._buyWindow.setStatusWindow(this._statusWindow);
        this._buyWindow.hide();
        this._buyWindow.setHandler('ok',     this.onBuyOk.bind(this));
        this._buyWindow.setHandler('cancel', this.onBuyCancel.bind(this));
        this.addWindow(this._buyWindow);
    }

    /**
     * Creates the category window for selecting different item categories.
     */
    createCategoryWindow() {
        this._categoryWindow = new Window_ItemCategory();
        this._categoryWindow.setHelpWindow(this._helpWindow);
        this._categoryWindow.y = this._dummyWindow.y;
        this._categoryWindow.hide();
        this._categoryWindow.deactivate();
        this._categoryWindow.setHandler('ok',     this.onCategoryOk.bind(this));
        this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
        this.addWindow(this._categoryWindow);
    }

    /**
     * Creates the sell window where the user can sell items to the shop.
     */
    createSellWindow() {
        var wy = this._categoryWindow.y + this._categoryWindow.height;
        var wh = Graphics.boxHeight - wy;
        this._sellWindow = new Window_ShopSell(0, wy, Graphics.boxWidth, wh);
        this._sellWindow.setHelpWindow(this._helpWindow);
        this._sellWindow.hide();
        this._sellWindow.setHandler('ok',     this.onSellOk.bind(this));
        this._sellWindow.setHandler('cancel', this.onSellCancel.bind(this));
        this._categoryWindow.setItemWindow(this._sellWindow);
        this.addWindow(this._sellWindow);
    }

    /**
     * Activates the buy window and prepares it for user input.
     */
    activateBuyWindow() {
        this._buyWindow.setMoney(this.money());
        this._buyWindow.show();
        this._buyWindow.activate();
        this._statusWindow.show();
    }

    /**
     * Activates the sell window and prepares it for user input.
     */
    activateSellWindow() {
        this._categoryWindow.show();
        this._sellWindow.refresh();
        this._sellWindow.show();
        this._sellWindow.activate();
        this._statusWindow.hide();
    }

    /**
     * Handles the buy command, displaying the buy window.
     */
    commandBuy() {
        this._dummyWindow.hide();
        this.activateBuyWindow();
    }

    /**
     * Handles the sell command, displaying the sell window.
     */
    commandSell() {
        this._dummyWindow.hide();
        this._categoryWindow.show();
        this._categoryWindow.activate();
        this._sellWindow.show();
        this._sellWindow.deselect();
        this._sellWindow.refresh();
    }

    /**
     * Handles the "OK" action after selecting an item to buy.
     */
    onBuyOk() {
        this._item = this._buyWindow.item();
        this._buyWindow.hide();
        this._numberWindow.setup(this._item, this.maxBuy(), this.buyingPrice());
        this._numberWindow.setCurrencyUnit(this.currencyUnit());
        this._numberWindow.show();
        this._numberWindow.activate();
    }

    /**
     * Handles the "Cancel" action while buying an item.
     */
    onBuyCancel() {
        this._commandWindow.activate();
        this._dummyWindow.show();
        this._buyWindow.hide();
        this._statusWindow.hide();
        this._statusWindow.setItem(null);
        this._helpWindow.clear();
    }

    /**
     * Handles the "OK" action after selecting an item category.
     */
    onCategoryOk() {
        this.activateSellWindow();
        this._sellWindow.select(0);
    }

    /**
     * Handles the "Cancel" action while selecting an item category.
     */
    onCategoryCancel() {
        this._commandWindow.activate();
        this._dummyWindow.show();
        this._categoryWindow.hide();
        this._sellWindow.hide();
    }

    /**
     * Handles the "OK" action after selecting an item to sell.
     */
    onSellOk() {
        this._item = this._sellWindow.item();
        this._categoryWindow.hide();
        this._sellWindow.hide();
        this._numberWindow.setup(this._item, this.maxSell(), this.sellingPrice());
        this._numberWindow.setCurrencyUnit(this.currencyUnit());
        this._numberWindow.show();
        this._numberWindow.activate();
        this._statusWindow.setItem(this._item);
        this._statusWindow.show();
    }

    /**
     * Handles the "Cancel" action while selling an item.
     */
    onSellCancel() {
        this._sellWindow.deselect();
        this._categoryWindow.activate();
        this._statusWindow.setItem(null);
        this._helpWindow.clear();
    }

    /**
     * Handles the number input "OK" action after entering a quantity.
     */
    onNumberOk() {
        SoundManager.playShop();
        switch (this._commandWindow.currentSymbol()) {
            case 'buy':
                this.doBuy(this._numberWindow.number());
                break;
            case 'sell':
                this.doSell(this._numberWindow.number());
                break;
        }
        this.endNumberInput();
        this._goldWindow.refresh();
        this._statusWindow.refresh();
    }

    /**
     * Handles the number input "Cancel" action.
     */
    onNumberCancel() {
        SoundManager.playCancel();
        this.endNumberInput();
    }

    /**
     * Performs the buying operation for the specified number of items.
     * @param {number} number The number of items to buy.
     */
    doBuy(number) {
        $gameParty.loseGold(number * this.buyingPrice());
        $gameParty.gainItem(this._item, number);
    }

    /**
     * Performs the selling operation for the specified number of items.
     * @param {number} number The number of items to sell.
     */
    doSell(number) {
        $gameParty.gainGold(number * this.sellingPrice());
        $gameParty.loseItem(this._item, number);
    }

    /**
     * Ends the number input and returns to the appropriate window.
     */
    endNumberInput() {
        this._numberWindow.hide();
        switch (this._commandWindow.currentSymbol()) {
            case 'buy':
                this.activateBuyWindow();
                break;
            case 'sell':
                this.activateSellWindow();
                break;
        }
    }

    /**
     * Returns the maximum number of items that can be bought based on the player's gold and item limit.
     * @returns {number} The maximum number of items that can be bought.
     */
    maxBuy() {
        var max = $gameParty.maxItems(this._item) - $gameParty.numItems(this._item);
        var price = this.buyingPrice();
        if (price > 0) {
            return Math.min(max, Math.floor(this.money() / price));
        } else {
            return max;
        }
    }

    /**
     * Returns the maximum number of items that can be sold.
     * @returns {number} The maximum number of items that can be sold.
     */
    maxSell() {
        return $gameParty.numItems(this._item);
    }

    /**
     * Returns the amount of gold the player currently has.
     * @returns {number} The current amount of gold.
     */
    money() {
        return this._goldWindow.value();
    }

    /**
     * Returns the currency unit for the shop (e.g., "Gold").
     * @returns {string} The currency unit.
     */
    currencyUnit() {
        return this._goldWindow.currencyUnit();
    }

    /**
     * Returns the price of the item in the buy window.
     * @returns {number} The buying price of the item.
     */
    buyingPrice() {
        return this._buyWindow.price(this._item);
    }

    /**
     * Returns the selling price of the item.
     * @returns {number} The selling price of the item.
     */
    sellingPrice() {
        return Math.floor(this._item.price / 2);
    }
}

export default Scene_Shop;
