const voidFragmentShader = `
  precision mediump float;
  uniform sampler2D uSampler;
  varying vec2 vTextureCoord;

  void main(void)
  {
    gl_FragColor = texture2D(uSampler, vTextureCoord);  // Just return the original pixel
  }
`;

PIXI.filters.VoidFilter = class extends PIXI.Filter {
  constructor() {
    // Initialize the custom filter with the void fragment shader
    super(null, voidFragmentShader);
  }
};

/**
 * Usage
 * const voidFilter = new VoidFilter();
    // Apply the filter to a sprite
    const sprite = new PIXI.Sprite.from('image.png');
    sprite.filters = [voidFilter];
 */

PIXI.filters.ColorMatrixFilter = class extends PIXI.Filter {
  /**
   *
   * @param {number} _value
   * @param {boolean} _b
   */
  hue(_value, _b) {}

  /**
   *
   * @param {number} _value
   * @param {boolean} _b
   */
  saturate(_value, _b) {}

  reset() {}

  /**
   *
   * @param {number[]} _matrix
   * @param {boolean} _b
   */
  _loadMatrix(_matrix, _b) {}
};
