/**
 * The rectangle class.
 *
 * @class Rectangle
 * @extends PIXI.Rectangle
 */
class Rectangle extends PIXI.Rectangle {
    /**
     * Creates a new Rectangle instance.
     *
     * @param {number} x - The x coordinate for the upper-left corner
     * @param {number} y - The y coordinate for the upper-left corner
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     */
    constructor(x = 0, y = 0, width = 0, height = 0) {
      super(x, y, width, height);
    }
  
    /**
     * Initializes the Rectangle instance with the given parameters.
     *
     * @param {number} x - The x coordinate for the upper-left corner
     * @param {number} y - The y coordinate for the upper-left corner
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @returns {PIXI.Rectangle} - The new instance of PIXI.Rectangle
     */
    initialize(x, y, width, height) {
      return new PIXI.Rectangle(x, y, width, height);
    }
  
    /**
     * A static property representing an empty rectangle.
     *
     * @static
     * @type {Rectangle}
     * @private
     */
    static emptyRectangle = new Rectangle(0, 0, 0, 0);
}

Rectangle.prototype.initialize = function(x, y, width, height) {
    return new  PIXI.Rectangle.call(this, x, y, width, height);
};

export default Rectangle;