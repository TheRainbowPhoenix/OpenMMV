import Window_Command from './window_command.js'

//
// The command window for the horizontal selection format.

Window_HorzCommand = function () {
    this.initialize.apply(this, arguments);
}

Window_HorzCommand.prototype = Object.create(Window_Command.prototype);
Window_HorzCommand.prototype.constructor = Window_HorzCommand;

Window_HorzCommand.prototype.initialize = function(x, y) {
    Window_Command.prototype.initialize.call(this, x, y);
};

Window_HorzCommand.prototype.numVisibleRows = function() {
    return 1;
};

Window_HorzCommand.prototype.maxCols = function() {
    return 4;
};

Window_HorzCommand.prototype.itemTextAlign = function() {
    return 'center';
};

export default Window_HorzCommand;