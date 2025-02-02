import * as PIXI from "pixi.js";
// import { Assets } from '@pixi/assets'

declare global {
  interface Window {
    PIXI: typeof PIXI;
  }

  interface PIXI {
    // Assets:typeof Assets
  }
}
export {};
