class Utils {
  static isNwjs() {
    return false;
  }
  static isMobileDevice() {
    return false;
  }

  static escapeHtml(str) {
    const entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
    };
    return String(str).replace(/[&<>"'/]/g, (s) => entityMap[s]);
  }
}

class Graphics {
  static _width = 0;
  static _height = 0;
  static _defaultScale = 1;
  static _realScale = 1;
  static _errorPrinter = null;
  static _tickHandler = null;
  static _canvas = null;
  static _fpsCounter = null;
  static _loadingSpinner = null;
  static _stretchEnabled = Graphics._defaultStretchMode();
  static _app = null;
  static _effekseer = null;
  static _wasLoading = false;

  static frameCount = 0;
  static boxWidth = Graphics._width;
  static boxHeight = Graphics._height;

  static async initialize() {
    this._updateRealScale();
    this._createAllElements();
    this._disableContextMenu();
    this._setupEventHandlers();
    await this._createPixiApp();
    this._createEffekseerContext();
    return !!this._app;
  }

  static get app() {
    return this._app;
  }

  static get effekseer() {
    return this._effekseer;
  }

  static setTickHandler(handler) {
    this._tickHandler = handler;
  }

  static startGameLoop() {
    if (this._app) {
      this._app.start();
    }
  }

  static stopGameLoop() {
    if (this._app) {
      this._app.stop();
    }
  }

  static setStage(stage) {
    if (this._app) {
      this._app.stage = stage;
    }
  }

  static startLoading() {
    if (!document.getElementById("loadingSpinner")) {
      document.body.appendChild(this._loadingSpinner);
    }
  }

  static endLoading() {
    if (document.getElementById("loadingSpinner")) {
      document.body.removeChild(this._loadingSpinner);
      return true;
    } else {
      return false;
    }
  }

  static printError(name, message, error = null) {
    if (!this._errorPrinter) {
      this._createErrorPrinter();
    }
    this._errorPrinter.innerHTML = this._makeErrorHtml(name, message, error);
    this._wasLoading = this.endLoading();
    this._applyCanvasFilter();
  }

  static showRetryButton(retry) {
    const button = document.createElement("button");
    button.id = "retryButton";
    button.innerHTML = "Retry";
    button.ontouchstart = (e) => e.stopPropagation();
    button.onclick = () => {
      Graphics.eraseError();
      retry();
    };
    this._errorPrinter.appendChild(button);
    button.focus();
  }

  static eraseError() {
    if (this._errorPrinter) {
      this._errorPrinter.innerHTML = this._makeErrorHtml();
      if (this._wasLoading) {
        this.startLoading();
      }
    }
    this._clearCanvasFilter();
  }

  static pageToCanvasX(x) {
    if (this._canvas) {
      const left = this._canvas.offsetLeft;
      return Math.round((x - left) / this._realScale);
    } else {
      return 0;
    }
  }

  static pageToCanvasY(y) {
    if (this._canvas) {
      const top = this._canvas.offsetTop;
      return Math.round((y - top) / this._realScale);
    } else {
      return 0;
    }
  }

  static isInsideCanvas(x, y) {
    return x >= 0 && x < this._width && y >= 0 && y < this._height;
  }

  static showScreen() {
    this._canvas.style.opacity = 1;
  }

  static hideScreen() {
    this._canvas.style.opacity = 0;
  }

  static resize(width, height) {
    this._width = width;
    this._height = height;
    this._app.renderer.resize(width, height);
    this._updateAllElements();
  }

  static get width() {
    return this._width;
  }

  static set width(value) {
    if (this._width !== value) {
      this._width = value;
      this._updateAllElements();
    }
  }

  static get height() {
    return this._height;
  }

  static set height(value) {
    if (this._height !== value) {
      this._height = value;
      this._updateAllElements();
    }
  }

  static get defaultScale() {
    return this._defaultScale;
  }

  static set defaultScale(value) {
    if (this._defaultScale !== value) {
      this._defaultScale = value;
      this._updateAllElements();
    }
  }

  static _createAllElements() {
    this._createErrorPrinter();
    this._createCanvas();
    this._createLoadingSpinner();
    this._createFPSCounter();
  }

  static _updateAllElements() {
    this._updateRealScale();
    this._updateErrorPrinter();
    this._updateCanvas();
    this._updateVideo();
  }

  static _onTick(deltaTime) {
    this._fpsCounter.startTick();
    if (this._tickHandler) {
      this._tickHandler(deltaTime);
    }
    if (this._canRender()) {
      this._app.render();
    }
    this._fpsCounter.endTick();
  }

  static _canRender() {
    return !!this._app.stage;
  }

  static _updateRealScale() {
    if (this._stretchEnabled && this._width > 0 && this._height > 0) {
      const h = this._stretchWidth() / this._width;
      const v = this._stretchHeight() / this._height;
      this._realScale = Math.min(h, v);
      window.scrollTo(0, 0);
    } else {
      this._realScale = this._defaultScale;
    }
  }

  static _stretchWidth() {
    return Utils.isMobileDevice()
      ? document.documentElement.clientWidth
      : window.innerWidth;
  }

  static _stretchHeight() {
    const rate = Utils.isLocal() ? 1.0 : 0.9;
    return Utils.isMobileDevice()
      ? document.documentElement.clientHeight * rate
      : window.innerHeight;
  }

  static _makeErrorHtml(name = "", message = "") {
    const nameDiv = document.createElement("div");
    const messageDiv = document.createElement("div");
    nameDiv.id = "errorName";
    messageDiv.id = "errorMessage";
    nameDiv.innerHTML = Utils.escapeHtml(name);
    messageDiv.innerHTML = Utils.escapeHtml(message);
    return nameDiv.outerHTML + messageDiv.outerHTML;
  }

  static _defaultStretchMode() {
    return Utils.isNwjs() || Utils.isMobileDevice();
  }

  static _createErrorPrinter() {
    this._errorPrinter = document.createElement("div");
    this._errorPrinter.id = "errorPrinter";
    this._errorPrinter.innerHTML = this._makeErrorHtml();
    document.body.appendChild(this._errorPrinter);
  }

  static _updateErrorPrinter() {
    const width = 640 * this._realScale;
    const height = 100 * this._realScale;
    this._errorPrinter.style.width = width + "px";
    this._errorPrinter.style.height = height + "px";
  }

  static _createCanvas() {
    this._canvas = document.createElement("canvas");
    this._canvas.id = "gameCanvas";
    this._updateCanvas();
    document.body.appendChild(this._canvas);
  }

  static _updateCanvas() {
    this._canvas.width = this._width;
    this._canvas.height = this._height;
    this._canvas.style.zIndex = 1;
    this._centerElement(this._canvas);
  }

  static _updateVideo() {
    const width = this._width * this._realScale;
    const height = this._height * this._realScale;
    Video.resize(width, height);
  }

  static _createLoadingSpinner() {
    const loadingSpinner = document.createElement("div");
    const loadingSpinnerImage = document.createElement("div");
    loadingSpinner.id = "loadingSpinner";
    loadingSpinnerImage.id = "loadingSpinnerImage";
    loadingSpinner.appendChild(loadingSpinnerImage);
    this._loadingSpinner = loadingSpinner;
  }

  static _createFPSCounter() {
    this._fpsCounter = new Graphics.FPSCounter();
  }

  static _centerElement(element) {
    const width = element.width * this._realScale;
    const height = element.height * this._realScale;
    element.style.position = "absolute";
    element.style.margin = "auto";
    element.style.top = 0;
    element.style.left = 0;
    element.style.right = 0;
    element.style.bottom = 0;
    element.style.width = width + "px";
    element.style.height = height + "px";
  }

  static _disableContextMenu() {
    const elements = document.body.getElementsByTagName("*");
    const oncontextmenu = () => false;
    for (const element of elements) {
      element.oncontextmenu = oncontextmenu;
    }
  }

  static _applyCanvasFilter() {
    if (this._canvas) {
      this._canvas.style.opacity = 0.5;
      this._canvas.style.filter = "blur(8px)";
      this._canvas.style.webkitFilter = "blur(8px)";
    }
  }

  static _clearCanvasFilter() {
    if (this._canvas) {
      this._canvas.style.opacity = 1;
      this._canvas.style.filter = "";
      this._canvas.style.webkitFilter = "";
    }
  }

  static _setupEventHandlers() {
    window.addEventListener("resize", this._onWindowResize.bind(this));
    document.addEventListener("keydown", this._onKeyDown.bind(this));
  }

  static _onWindowResize() {
    this._updateAllElements();
  }

  static _onKeyDown(event) {
    if (!event.ctrlKey && !event.altKey) {
      switch (event.keyCode) {
        case 113: // F2
          event.preventDefault();
          this._switchFPSCounter();
          break;
        case 114: // F3
          event.preventDefault();
          this._switchStretchMode();
          break;
        case 115: // F4
          event.preventDefault();
          this._switchFullScreen();
          break;
      }
    }
  }

  static _switchFPSCounter() {
    this._fpsCounter.switchMode();
  }

  static _switchStretchMode() {
    this._stretchEnabled = !this._stretchEnabled;
    this._updateAllElements();
  }

  static _switchFullScreen() {
    if (this._isFullScreen()) {
      this._cancelFullScreen();
    } else {
      this._requestFullScreen();
    }
  }

  static _isFullScreen() {
    return (
      document.fullScreenElement ||
      document.mozFullScreen ||
      document.webkitFullscreenElement
    );
  }

  static _requestFullScreen() {
    const element = document.body;
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }

  static _cancelFullScreen() {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }

  static async _createPixiApp() {
    try {
      this._setupPixi();
      this._app = new PIXI.Application();

      await this._app.init({
        view: this._canvas,
        autoStart: false,
        // added
        background: '#1099bb',
        resizeTo: window
      });

      this._app.ticker.remove(this._app.render, this._app);
      this._app.ticker.add((time) => {
        this._onTick(time.deltaTime)
      });
    } catch (e) {
      this._app = null;
    }
  }

  static _setupPixi() {
    // PIXI.utils.skipHello();
    PIXI.HelloSystem.defaultOptions.hello = true;
    // PIXI.settings.GC_MAX_IDLE = 600;
    PIXI.TextureGCSystem.defaultOptions.textureGCMaxIdle = 600;
  }

  static _createEffekseerContext() {
    if (this._app && window.effekseer) {
      try {
        this._effekseer = effekseer.createContext();
        if (this._effekseer) {
          this._effekseer.init(this._app.renderer.gl);
          this._effekseer.setRestorationOfStatesFlag(false);
        }
      } catch (e) {
        this._app = null;
      }
    }
  }
}

class FPSCounter {
  constructor() {
    this.initialize();
  }

  initialize() {
    this._tickCount = 0;
    this._frameTime = 100;
    this._frameStart = 0;
    this._lastLoop = performance.now() - 100;
    this._showFps = true;
    this.fps = 0;
    this.duration = 0;
    this._createElements();
    this._update();
  }

  startTick() {
    this._frameStart = performance.now();
  }

  endTick() {
    const time = performance.now();
    const thisFrameTime = time - this._lastLoop;
    this._frameTime += (thisFrameTime - this._frameTime) / 12;
    this.fps = 1000 / this._frameTime;
    this.duration = Math.max(0, time - this._frameStart);
    this._lastLoop = time;
    if (this._tickCount++ % 15 === 0) {
      this._update();
    }
  }

  switchMode() {
    if (this._boxDiv.style.display === "none") {
      this._boxDiv.style.display = "block";
      this._showFps = true;
    } else if (this._showFps) {
      this._showFps = false;
    } else {
      this._boxDiv.style.display = "none";
    }
    this._update();
  }

  _createElements() {
    this._boxDiv = document.createElement("div");
    this._labelDiv = document.createElement("div");
    this._numberDiv = document.createElement("div");
    this._boxDiv.id = "fpsCounterBox";
    this._labelDiv.id = "fpsCounterLabel";
    this._numberDiv.id = "fpsCounterNumber";
    this._boxDiv.style.display = "none";
    this._boxDiv.appendChild(this._labelDiv);
    this._boxDiv.appendChild(this._numberDiv);
    document.body.appendChild(this._boxDiv);
  }

  _update() {
    const count = this._showFps ? this.fps : this.duration;
    this._labelDiv.textContent = this._showFps ? "FPS" : "ms";
    this._numberDiv.textContent = count.toFixed(0);
  }
}

Graphics.FPSCounter = FPSCounter;

class SceneManager {
  static _scene = null;
  static _nextScene = null;
  static _stack = [];
  static _exiting = false;
  static _previousScene = null;
  static _previousClass = null;
  static _backgroundBitmap = null;
  static _smoothDeltaTime = 1;
  static _elapsedTime = 0;

  constructor() {
    throw new Error("This is a static class");
  }

  static run(sceneClass) {
    (async () => {
      try {
        await this.initialize();
        this.goto(sceneClass);
        Graphics.startGameLoop();
      } catch (e) {
        this.catchException(e);
      }
    })();
  }

  static async initialize() {
    // this.checkBrowser();
    // this.checkPluginErrors();
    await this.initGraphics();
    // this.initAudio();
    // this.initVideo();
    // this.initInput();
    // this.setupEventHandlers();
  }

  static checkBrowser() {
    if (!Utils.canUseWebGL())
      throw new Error("Your browser does not support WebGL.");
    if (!Utils.canUseWebAudioAPI())
      throw new Error("Your browser does not support Web Audio API.");
    if (!Utils.canUseCssFontLoading())
      throw new Error("Your browser does not support CSS Font Loading.");
    if (!Utils.canUseIndexedDB())
      throw new Error("Your browser does not support IndexedDB.");
  }

  static checkPluginErrors() {
    PluginManager.checkErrors();
  }

  static async initGraphics() {
    if (!(await Graphics.initialize())) {
      throw new Error("Failed to initialize graphics.");
    }
    Graphics.setTickHandler(this.update.bind(this));
  }

  static initAudio() {
    WebAudio.initialize();
  }

  static initVideo() {
    Video.initialize(Graphics.width, Graphics.height);
  }

  static initInput() {
    Input.initialize();
    TouchInput.initialize();
  }

  static setupEventHandlers() {
    window.addEventListener("error", this.onError.bind(this));
    window.addEventListener("unhandledrejection", this.onReject.bind(this));
    window.addEventListener("unload", this.onUnload.bind(this));
    document.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  static update(deltaTime) {
    try {
      const n = this.determineRepeatNumber(deltaTime);
      for (let i = 0; i < n; i++) {
        this.updateMain();
      }
    } catch (e) {
      this.catchException(e);
    }
  }

  static determineRepeatNumber(deltaTime) {
    this._smoothDeltaTime *= 0.8;
    this._smoothDeltaTime += Math.min(deltaTime, 2) * 0.2;

    if (this._smoothDeltaTime >= 0.9) {
      this._elapsedTime = 0;
      return Math.round(this._smoothDeltaTime);
    } else {
      this._elapsedTime += deltaTime;
      if (this._elapsedTime >= 1) {
        this._elapsedTime -= 1;
        return 1;
      }
      return 0;
    }
  }

  static terminate() {
    if (Utils.isNwjs()) {
      nw.App.quit();
    }
  }

  static onError(event) {
    console.error(event.message, event.filename, event.lineno);
    try {
      this.stop();
      Graphics.printError("Error", event.message, event);
      //   AudioManager.stopAll();
    } catch (e) {
      /* Silent Catch */
    }
  }

  static onReject(event) {
    event.message = event.reason;
    this.onError(event);
  }

  static onUnload() {
    ImageManager.clear();
    EffectManager.clear();
    // AudioManager.stopAll();
  }

  static onKeyDown(event) {
    if (!event.ctrlKey && !event.altKey) {
      switch (event.keyCode) {
        case 116: // F5
          this.reloadGame();
          break;
        case 119: // F8
          this.showDevTools();
          break;
      }
    }
  }

  static reloadGame() {
    if (Utils.isNwjs()) {
      chrome.runtime.reload();
    }
  }

  static showDevTools() {
    if (Utils.isNwjs() && Utils.isOptionValid("test")) {
      nw.Window.get().showDevTools();
    }
  }

  static catchException(e) {
    if (e instanceof Error) {
      this.catchNormalError(e);
    } else if (Array.isArray(e) && e[0] === "LoadError") {
      this.catchLoadError(e);
    } else {
      this.catchUnknownError(e);
    }
    this.stop();
  }

  static catchNormalError(e) {
    Graphics.printError(e.name, e.message, e);
    // AudioManager.stopAll();
    console.error(e.stack);
  }

  static catchLoadError(e) {
    const url = e[1];
    const retry = e[2];
    Graphics.printError("Failed to load", url);
    if (retry) {
      Graphics.showRetryButton(() => {
        retry();
        SceneManager.resume();
      });
    } else {
      //   AudioManager.stopAll();
    }
  }

  static catchUnknownError(e) {
    Graphics.printError("UnknownError", String(e));
    // AudioManager.stopAll();
  }

  static updateMain() {
    this.updateFrameCount();
    // this.updateInputData();
    this.updateEffekseer();
    this.changeScene();
    this.updateScene();
  }

  static updateFrameCount() {
    Graphics.frameCount++;
  }

  static updateInputData() {
    Input.update();
    TouchInput.update();
  }

  static updateEffekseer() {
    if (Graphics.effekseer && this.isGameActive()) {
      Graphics.effekseer.update();
    }
  }

  static changeScene() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
      if (this._scene) {
        this._scene.terminate();
        this.onSceneTerminate();
      }
      this._scene = this._nextScene;
      this._nextScene = null;
      if (this._scene) {
        this._scene.create();
        this.onSceneCreate();
      }
      if (this._exiting) {
        this.terminate();
      }
    }
  }

  static updateScene() {
    if (this._scene) {
      if (this._scene.isStarted()) {
        if (this.isGameActive()) {
          this._scene.update();
        }
      } else if (this._scene.isReady()) {
        this.onBeforeSceneStart();
        this._scene.start();
        this.onSceneStart();
      }
    }
  }

  static isGameActive() {
    try {
      return window.top.document.hasFocus();
    } catch (e) {
      return true;
    }
  }

  static onSceneTerminate() {
    this._previousScene = this._scene;
    this._previousClass = this._scene.constructor;
    Graphics.setStage(null);
  }

  static onSceneCreate() {
    Graphics.startLoading();
  }

  static onBeforeSceneStart() {
    if (this._previousScene) {
      this._previousScene.destroy();
      this._previousScene = null;
    }
    if (Graphics.effekseer) {
      Graphics.effekseer.stopAll();
    }
  }

  static onSceneStart() {
    Graphics.endLoading();
    Graphics.setStage(this._scene);
  }

  static isSceneChanging() {
    return this._exiting || !!this._nextScene;
  }

  static isCurrentSceneBusy() {
    return this._scene && this._scene.isBusy();
  }

  static isNextScene(sceneClass) {
    return this._nextScene && this._nextScene.constructor === sceneClass;
  }

  static isPreviousScene(sceneClass) {
    return this._previousClass === sceneClass;
  }

  static goto(sceneClass) {
    if (sceneClass) {
      this._nextScene = new sceneClass();
    }
    if (this._scene) {
      this._scene.stop();
    }
  }

  static push(sceneClass) {
    this._stack.push(this._scene.constructor);
    this.goto(sceneClass);
  }

  static pop() {
    if (this._stack.length > 0) {
      this.goto(this._stack.pop());
    } else {
      this.exit();
    }
  }

  static exit() {
    this.goto(null);
    this._exiting = true;
  }

  static clearStack() {
    this._stack = [];
  }

  static stop() {
    Graphics.stopGameLoop();
  }

  static prepareNextScene(...args) {
    this._nextScene.prepare(...args);
  }

  static snap() {
    return Bitmap.snap(this._scene);
  }

  static snapForBackground() {
    if (this._backgroundBitmap) {
      this._backgroundBitmap.destroy();
    }
    this._backgroundBitmap = this.snap();
  }

  static backgroundBitmap() {
    return this._backgroundBitmap;
  }

  static resume() {
    TouchInput.update();
    Graphics.startGameLoop();
  }
}

class Stage extends PIXI.Container {
  constructor() {
    super();
    this.initialize();
  }

  initialize() {
    // Initialization logic (if needed) can go here
  }

  destroy() {
    const options = { children: true, texture: true };
    super.destroy(options);
  }
}

class Scene_Base extends Stage {
  constructor() {
    super();
    this.initialize();
  }

  initialize() {
    super.initialize();
    this._started = false;
    this._active = false;
    this._fadeSign = 0;
    this._fadeDuration = 0;
    this._fadeWhite = 0;
    this._fadeOpacity = 0;
    this.createColorFilter();
  }

  create() {
    // To be overridden by subclasses if needed
  }

  isActive() {
    return this._active;
  }

  isReady() {
    return true;
    // return ImageManager.isReady() && EffectManager.isReady() && FontManager.isReady();
  }

  start() {
    this._started = true;
    this._active = true;
  }

  update() {
    this.updateFade();
    this.updateColorFilter();
    this.updateChildren();
    // AudioManager.checkErrors();
  }

  stop() {
    this._active = false;
  }

  isStarted() {
    return this._started;
  }

  isBusy() {
    return this.isFading();
  }

  isFading() {
    return this._fadeDuration > 0;
  }

  terminate() {
    // To be overridden if needed
  }

  createWindowLayer() {
    // this._windowLayer = new WindowLayer();
    // this._windowLayer.x = (Graphics.width - Graphics.boxWidth) / 2;
    // this._windowLayer.y = (Graphics.height - Graphics.boxHeight) / 2;
    // this.addChild(this._windowLayer);
  }

  addWindow(window) {
    // this._windowLayer.addChild(window);
  }

  startFadeIn(duration = 30, white) {
    this._fadeSign = 1;
    this._fadeDuration = duration;
    this._fadeWhite = white;
    this._fadeOpacity = 255;
    this.updateColorFilter();
  }

  startFadeOut(duration = 30, white) {
    this._fadeSign = -1;
    this._fadeDuration = duration;
    this._fadeWhite = white;
    this._fadeOpacity = 0;
    this.updateColorFilter();
  }

  createColorFilter() {
    // this._colorFilter = new ColorFilter();
    // this.filters = [this._colorFilter];
  }

  updateColorFilter() {
    const c = this._fadeWhite ? 255 : 0;
    const blendColor = [c, c, c, this._fadeOpacity];
    this._colorFilter.setBlendColor(blendColor);
  }

  updateFade() {
    if (this._fadeDuration > 0) {
      const d = this._fadeDuration;
      if (this._fadeSign > 0) {
        this._fadeOpacity -= this._fadeOpacity / d;
      } else {
        this._fadeOpacity += (255 - this._fadeOpacity) / d;
      }
      this._fadeDuration--;
    }
  }

  updateChildren() {
    for (const child of this.children) {
      if (child.update) {
        child.update();
      }
    }
  }

  popScene() {
    SceneManager.pop();
  }

  checkGameover() {
    if ($gameParty.isAllDead()) {
      SceneManager.goto(Scene_Gameover);
    }
  }

  fadeOutAll() {
    const time = this.slowFadeSpeed() / 60;
    // AudioManager.fadeOutBgm(time);
    // AudioManager.fadeOutBgs(time);
    // AudioManager.fadeOutMe(time);
    this.startFadeOut(this.slowFadeSpeed());
  }

  fadeSpeed() {
    return 24;
  }

  slowFadeSpeed() {
    return this.fadeSpeed() * 2;
  }

  scaleSprite(sprite) {
    const ratioX = Graphics.width / sprite.bitmap.width;
    const ratioY = Graphics.height / sprite.bitmap.height;
    const scale = Math.max(ratioX, ratioY, 1.0);
    sprite.scale.x = scale;
    sprite.scale.y = scale;
  }

  centerSprite(sprite) {
    sprite.x = Graphics.width / 2;
    sprite.y = Graphics.height / 2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
  }

  isBottomHelpMode() {
    return true;
  }

  isBottomButtonMode() {
    return false;
  }

  isRightInputMode() {
    return true;
  }

  mainCommandWidth() {
    return 240;
  }

  buttonAreaTop() {
    return this.isBottomButtonMode()
      ? Graphics.boxHeight - this.buttonAreaHeight()
      : 0;
  }

  buttonAreaBottom() {
    return this.buttonAreaTop() + this.buttonAreaHeight();
  }

  buttonAreaHeight() {
    return 52;
  }

  buttonY() {
    const offsetY = Math.floor((this.buttonAreaHeight() - 48) / 2);
    return this.buttonAreaTop() + offsetY;
  }

  calcWindowHeight(numLines, selectable) {
    // return selectable
    //   ? Window_Selectable.prototype.fittingHeight(numLines)
    //   : Window_Base.prototype.fittingHeight(numLines);
  }

  requestAutosave() {
    // if (this.isAutosaveEnabled()) {
    //   this.executeAutosave();
    // }
  }

  isAutosaveEnabled() {
    return false;
    // return (
    //   !DataManager.isBattleTest() &&
    //   !DataManager.isEventTest() &&
    //   $gameSystem.isAutosaveEnabled() &&
    //   $gameSystem.isSaveEnabled()
    // );
  }

  executeAutosave() {
    // $gameSystem.onBeforeSave();
    // DataManager.saveGame(0)
    //   .then(() => this.onAutosaveSuccess())
    //   .catch(() => this.onAutosaveFailure());
  }

  onAutosaveSuccess() {
    // Override if needed
  }

  onAutosaveFailure() {
    // Override if needed
  }
}

class Scene_Boot extends Scene_Base {
  constructor() {
    super();
    this._databaseLoaded = false;
  }

  create() {
    super.create();
    //   DataManager.loadDatabase();
    //   StorageManager.updateForageKeys();
  }

  isReady() {
    //   if (!this._databaseLoaded) {
    //     if (DataManager.isDatabaseLoaded() && StorageManager.forageKeysUpdated()) {
    //       this._databaseLoaded = true;
    //       this.onDatabaseLoaded();
    //     }
    //     return false;
    //   }
    return super.isReady() && this.isPlayerDataLoaded();
  }

  onDatabaseLoaded() {
    //   this.setEncryptionInfo();
    //   this.loadSystemImages();
    //   this.loadPlayerData();
    //   this.loadGameFonts();
  }

  setEncryptionInfo() {
    //   const { hasEncryptedImages: hasImages, hasEncryptedAudio: hasAudio, encryptionKey: key } = $dataSystem;
    //   Utils.setEncryptionInfo(hasImages, hasAudio, key);
  }

  loadSystemImages() {
    //   ColorManager.loadWindowskin();
    //   ImageManager.loadSystem("IconSet");
  }

  loadPlayerData() {
    //   DataManager.loadGlobalInfo();
    //   ConfigManager.load();
  }

  loadGameFonts() {
    //   const advanced = $dataSystem.advanced;
    //   FontManager.load("rmmz-mainfont", advanced.mainFontFilename);
    //   FontManager.load("rmmz-numberfont", advanced.numberFontFilename);
  }

  isPlayerDataLoaded() {
    return true;
    //   return DataManager.isGlobalInfoLoaded() && ConfigManager.isLoaded();
  }

  start() {
    super.start();
    //   SoundManager.preloadImportantSounds();
    //   if (DataManager.isBattleTest()) {
    //     DataManager.setupBattleTest();
    //     SceneManager.goto(Scene_Battle);
    //   } else if (DataManager.isEventTest()) {
    //     DataManager.setupEventTest();
    //     SceneManager.goto(Scene_Map);
    //   } else {
    this.startNormalGame();
    //   }
    this.resizeScreen();
    this.updateDocumentTitle();
  }

  startNormalGame() {
    this.checkPlayerLocation();
    //   DataManager.setupNewGame();
    console.log("SceneManager.goto(Scene_Title)");
    //   SceneManager.goto(Scene_Title);
    //   Window_TitleCommand.initCommandPosition();
  }

  resizeScreen() {
    //   const { screenWidth, screenHeight } = $dataSystem.advanced;
    //   Graphics.resize(screenWidth, screenHeight);
    //   this.adjustBoxSize();
    //   this.adjustWindow();
  }

  adjustBoxSize() {
    //   const { uiAreaWidth, uiAreaHeight } = $dataSystem.advanced;
    //   const boxMargin = 4;
    //   Graphics.boxWidth = uiAreaWidth - boxMargin * 2;
    //   Graphics.boxHeight = uiAreaHeight - boxMargin * 2;
  }

  adjustWindow() {
    if (Utils.isNwjs()) {
      const xDelta = Graphics.width - window.innerWidth;
      const yDelta = Graphics.height - window.innerHeight;
      window.moveBy(-xDelta / 2, -yDelta / 2);
      window.resizeBy(xDelta, yDelta);
    }
  }

  updateDocumentTitle() {
    document.title = "TODO"; // $dataSystem.gameTitle;
  }

  checkPlayerLocation() {
    //   if ($dataSystem.startMapId === 0) {
    //     throw new Error("Player's starting position is not set");
    //   }
  }
}
