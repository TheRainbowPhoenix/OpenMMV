import * as PIXI_T from "pixi.js";
// import { Assets } from '@pixi/assets'

declare global {
  interface Window {
    PIXI: typeof PIXI_T;
  }

  var PIXI: typeof PIXI_T
}
export {};
