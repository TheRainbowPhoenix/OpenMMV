import '../stores';
import '../context';

// Game_Actors
//
// The wrapper class for an actor array.

Game_Actors = function () {
    this.initialize.apply(this, arguments);
}

Game_Actors.prototype.initialize = function() {
    this._data = [];
};

Game_Actors.prototype.actor = function(actorId) {
    if ($dataActors[actorId]) {
        if (!this._data[actorId]) {
            this._data[actorId] = new Game_Actor(actorId);
        }
        return this._data[actorId];
    }
    return null;
};

export default Game_Actors;