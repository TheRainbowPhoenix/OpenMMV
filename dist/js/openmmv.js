var $ = Object.defineProperty;
var R = (t, e, r) => e in t ? $(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var P = (t, e, r) => R(t, typeof e != "symbol" ? e + "" : e, r);
globalThis.$dataActors = null;
globalThis.$dataClasses = null;
globalThis.$dataSkills = null;
globalThis.$dataItems = null;
globalThis.$dataWeapons = null;
globalThis.$dataArmors = null;
globalThis.$dataEnemies = null;
globalThis.$dataTroops = null;
globalThis.$dataStates = null;
globalThis.$dataAnimations = null;
globalThis.$dataTilesets = null;
globalThis.$dataCommonEvents = null;
globalThis.$dataSystem = null;
globalThis.$dataMapInfos = null;
globalThis.$dataMap = null;
globalThis.$gameTemp = null;
globalThis.$gameSystem = null;
globalThis.$gameScreen = null;
globalThis.$gameTimer = null;
globalThis.$gameMessage = null;
globalThis.$gameSwitches = null;
globalThis.$gameVariables = null;
globalThis.$gameSelfSwitches = null;
globalThis.$gameActors = null;
globalThis.$gameParty = null;
globalThis.$gameTroop = null;
globalThis.$gameMap = null;
globalThis.$gamePlayer = null;
globalThis.$testEvent = null;
let JsExtensions$2, Utils$2, CacheEntry$2, CacheMap$1, ImageCache$1, RequestQueue$1, Decrypter$2, Point$2, Rectangle$2, Bitmap$2, Graphics$2, Input$2, TouchInput$2, Sprite$2, Tilemap$2, TilingSprite$2, ScreenSprite$2, ShaderTilemap$2, Window$2, WindowLayer$2, Weather$2, ToneFilter$2, ToneSprite$2, Stage$2, WebAudio$2, Html5Audio$2, JsonEx$2, ResourceHandler$2, DataManager$2, ConfigManager$2, StorageManager$2, ImageManager$2, AudioManager$2, SoundManager$2, TextManager$2, SceneManager$2, BattleManager$2, PluginManager$2, Game_Temp$2, Game_System$2, Game_Timer$2, Game_Message$2, Game_Switches$2, Game_Variables$2, Game_SelfSwitches$2, Game_Screen$2, Game_Picture$2, Game_Item$2, Game_Action$2, Game_ActionResult$2, Game_BattlerBase$2, Game_Battler$2, Game_Actor$2, Game_Enemy$2, Game_Actors$2, Game_Unit$2, Game_Party$2, Game_Troop$2, Game_Map$2, Game_CommonEvent$2, Game_CharacterBase$2, Game_Character$2, Game_Player$2, Game_Follower$2, Game_Followers$2, Game_Vehicle$2, Game_Event$2, Game_Interpreter$2, Scene_Base$2, Scene_Boot$2, Scene_Title$2, Scene_Map$2, Scene_MenuBase$2, Scene_Menu$2, Scene_ItemBase$2, Scene_Item$2, Scene_Skill$2, Scene_Equip$2, Scene_Status$2, Scene_Options$2, Scene_File$2, Scene_Save$2, Scene_Load$2, Scene_GameEnd$2, Scene_Shop$2, Scene_Name$2, Scene_Debug$2, Scene_Battle$2, Scene_Gameover$2, Sprite_Base$2, Sprite_Button$2, Sprite_Character$2, Sprite_Battler$2, Sprite_Actor$2, Sprite_Enemy$2, Sprite_Animation$2, Sprite_Damage$2, Sprite_StateIcon$2, Sprite_StateOverlay$2, Sprite_Weapon$2, Sprite_Balloon$2, Sprite_Picture$2, Sprite_Timer$2, Sprite_Destination$2, Spriteset_Base$2, Spriteset_Map$2, Spriteset_Battle$2, Window_Base$1, Window_Selectable$1, Window_Command$1, Window_HorzCommand$1, Window_Help$1, Window_Gold$1, Window_MenuCommand$1, Window_MenuStatus$1, Window_MenuActor$1, Window_ItemCategory$1, Window_ItemList$1, Window_SkillType$1, Window_SkillStatus$1, Window_SkillList$1, Window_EquipStatus$1, Window_EquipCommand$1, Window_EquipSlot$1, Window_EquipItem$1, Window_Status$1, Window_Options$1, Window_SavefileList$1, Window_ShopCommand$1, Window_ShopBuy$1, Window_ShopSell$1, Window_ShopNumber$1, Window_ShopStatus$1, Window_NameEdit$1, Window_NameInput$1, Window_ChoiceList$1, Window_NumberInput$1, Window_EventItem$1, Window_Message$1, Window_ScrollText$1, Window_MapName$1, Window_BattleLog$1, Window_PartyCommand$1, Window_ActorCommand$1, Window_BattleStatus$1, Window_BattleActor$1, Window_BattleEnemy$1, Window_BattleSkill$1, Window_BattleItem$1, Window_TitleCommand$1, Window_GameEnd$1, Window_DebugRange$1, Window_DebugEdit$1;
JsExtensions = function() {
  throw new Error("This is not a class");
};
Number.prototype.clamp = function(t, e) {
  return Math.min(Math.max(this, t), e);
};
Number.prototype.mod = function(t) {
  return (this % t + t) % t;
};
String.prototype.format = function() {
  var t = arguments;
  return this.replace(/%([0-9]+)/g, function(e, r) {
    return t[Number(r) - 1];
  });
};
String.prototype.padZero = function(t) {
  for (var e = this; e.length < t; )
    e = "0" + e;
  return e;
};
Number.prototype.padZero = function(t) {
  return String(this).padZero(t);
};
Object.defineProperties(Array.prototype, {
  /**
   * Checks whether the two arrays are same.
   *
   * @method Array.prototype.equals
   * @param {Array} array The array to compare to
   * @return {Boolean} True if the two arrays are same
   */
  equals: {
    enumerable: !1,
    value: function(t) {
      if (!t || this.length !== t.length)
        return !1;
      for (var e = 0; e < this.length; e++)
        if (this[e] instanceof Array && t[e] instanceof Array) {
          if (!this[e].equals(t[e]))
            return !1;
        } else if (this[e] !== t[e])
          return !1;
      return !0;
    }
  },
  /**
   * Makes a shallow copy of the array.
   *
   * @method Array.prototype.clone
   * @return {Array} A shallow copy of the array
   */
  clone: {
    enumerable: !1,
    value: function() {
      return this.slice(0);
    }
  },
  /**
   * Checks whether the array contains a given element.
   *
   * @method Array.prototype.contains
   * @param {Any} element The element to search for
   * @return {Boolean} True if the array contains a given element
   */
  contains: {
    enumerable: !1,
    value: function(t) {
      return this.indexOf(t) >= 0;
    }
  }
});
String.prototype.contains = function(t) {
  return this.indexOf(t) >= 0;
};
Math.randomInt = function(t) {
  return Math.floor(t * Math.random());
};
const JsExtensions$1 = JsExtensions;
Utils = function() {
  throw new Error("This is a static class");
};
Utils.RPGMAKER_NAME = "MV";
Utils.RPGMAKER_VERSION = "1.6.1";
Utils.isOptionValid = function(t) {
  return location.search.slice(1).split("&").contains(t) || typeof nw < "u" && nw.App.argv.length > 0 && nw.App.argv[0].split("&").contains(t) ? 1 : 0;
};
Utils.isNwjs = function() {
  return typeof require == "function" && typeof process == "object";
};
Utils.isMobileDevice = function() {
  var t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return !!navigator.userAgent.match(t);
};
Utils.isMobileSafari = function() {
  var t = navigator.userAgent;
  return !!(t.match(/iPhone|iPad|iPod/) && t.match(/AppleWebKit/) && !t.match("CriOS"));
};
Utils.isAndroidChrome = function() {
  var t = navigator.userAgent;
  return !!(t.match(/Android/) && t.match(/Chrome/));
};
Utils.canReadGameFiles = function() {
  var t = document.getElementsByTagName("script"), e = t[t.length - 1], r = new XMLHttpRequest();
  try {
    return r.open("GET", e.src), r.overrideMimeType("text/javascript"), r.send(), !0;
  } catch {
    return !1;
  }
};
Utils.rgbToCssColor = function(t, e, r) {
  return t = Math.round(t), e = Math.round(e), r = Math.round(r), "rgb(" + t + "," + e + "," + r + ")";
};
Utils._id = 1;
Utils.generateRuntimeId = function() {
  return Utils._id++;
};
Utils._supportPassiveEvent = null;
Utils.isSupportPassiveEvent = function() {
  if (typeof Utils._supportPassiveEvent == "boolean")
    return Utils._supportPassiveEvent;
  var t = !1, e = Object.defineProperty({}, "passive", {
    get: function() {
      t = !0;
    }
  });
  return window.addEventListener("test", null, e), Utils._supportPassiveEvent = t, t;
};
const Utils$1 = Utils;
CacheEntry = function(t, e, r) {
  this.cache = t, this.key = e, this.item = r, this.cached = !1, this.touchTicks = 0, this.touchSeconds = 0, this.ttlTicks = 0, this.ttlSeconds = 0, this.freedByTTL = !1;
};
CacheEntry.prototype.free = function(t) {
  this.freedByTTL = t || !1, this.cached && (this.cached = !1, delete this.cache._inner[this.key]);
};
CacheEntry.prototype.allocate = function() {
  return this.cached || (this.cache._inner[this.key] = this, this.cached = !0), this.touch(), this;
};
CacheEntry.prototype.setTimeToLive = function(t, e) {
  return this.ttlTicks = t || 0, this.ttlSeconds = e || 0, this;
};
CacheEntry.prototype.isStillAlive = function() {
  var t = this.cache;
  return (this.ttlTicks == 0 || this.touchTicks + this.ttlTicks < t.updateTicks) && (this.ttlSeconds == 0 || this.touchSeconds + this.ttlSeconds < t.updateSeconds);
};
CacheEntry.prototype.touch = function() {
  var t = this.cache;
  this.cached ? (this.touchTicks = t.updateTicks, this.touchSeconds = t.updateSeconds) : this.freedByTTL && (this.freedByTTL = !1, t._inner[this.key] || (t._inner[this.key] = this));
};
CacheMap = function(t) {
  this.manager = t, this._inner = {}, this._lastRemovedEntries = {}, this.updateTicks = 0, this.lastCheckTTL = 0, this.delayCheckTTL = 100, this.updateSeconds = Date.now();
};
CacheMap.prototype.checkTTL = function() {
  var t = this._inner, e = this._lastRemovedEntries;
  e || (e = [], this._lastRemovedEntries = e);
  for (var r in t) {
    var s = t[r];
    s.isStillAlive() || e.push(s);
  }
  for (var o = 0; o < e.length; o++)
    e[o].free(!0);
  e.length = 0;
};
CacheMap.prototype.getItem = function(t) {
  var e = this._inner[t];
  return e ? e.item : null;
};
CacheMap.prototype.clear = function() {
  for (var t = Object.keys(this._inner), e = 0; e < t.length; e++)
    this._inner[t[e]].free();
};
CacheMap.prototype.setItem = function(t, e) {
  return new CacheEntry(this, t, e).allocate();
};
CacheMap.prototype.update = function(t, e) {
  this.updateTicks += t, this.updateSeconds += e, this.updateSeconds >= this.delayCheckTTL + this.lastCheckTTL && (this.lastCheckTTL = this.updateSeconds, this.checkTTL());
};
ImageCache = function() {
  this.initialize.apply(this, arguments);
};
ImageCache.limit = 10 * 1e3 * 1e3;
ImageCache.prototype.initialize = function() {
  this._items = {};
};
ImageCache.prototype.add = function(t, e) {
  this._items[t] = {
    bitmap: e,
    touch: Date.now(),
    key: t
  }, this._truncateCache();
};
ImageCache.prototype.get = function(t) {
  if (this._items[t]) {
    var e = this._items[t];
    return e.touch = Date.now(), e.bitmap;
  }
  return null;
};
ImageCache.prototype.reserve = function(t, e, r) {
  this._items[t] || (this._items[t] = {
    bitmap: e,
    touch: Date.now(),
    key: t
  }), this._items[t].reservationId = r;
};
ImageCache.prototype.releaseReservation = function(t) {
  var e = this._items;
  Object.keys(e).map(function(r) {
    return e[r];
  }).forEach(function(r) {
    r.reservationId === t && delete r.reservationId;
  });
};
ImageCache.prototype._truncateCache = function() {
  var t = this._items, e = ImageCache.limit;
  Object.keys(t).map(function(r) {
    return t[r];
  }).sort(function(r, s) {
    return s.touch - r.touch;
  }).forEach((function(r) {
    if (e > 0 || this._mustBeHeld(r)) {
      var s = r.bitmap;
      e -= s.width * s.height;
    } else
      delete t[r.key];
  }).bind(this));
};
ImageCache.prototype._mustBeHeld = function(t) {
  return t.bitmap.isRequestOnly() ? !1 : !!(t.reservationId || !t.bitmap.isReady());
};
ImageCache.prototype.isReady = function() {
  var t = this._items;
  return !Object.keys(t).some(function(e) {
    return !t[e].bitmap.isRequestOnly() && !t[e].bitmap.isReady();
  });
};
ImageCache.prototype.getErrorBitmap = function() {
  var t = this._items, e = null;
  return Object.keys(t).some(function(r) {
    return t[r].bitmap.isError() ? (e = t[r].bitmap, !0) : !1;
  }) ? e : null;
};
RequestQueue = function() {
  this.initialize.apply(this, arguments);
};
RequestQueue.prototype.initialize = function() {
  this._queue = [];
};
RequestQueue.prototype.enqueue = function(t, e) {
  this._queue.push({
    key: t,
    value: e
  });
};
RequestQueue.prototype.update = function() {
  if (this._queue.length !== 0) {
    var t = this._queue[0];
    t.value.isRequestReady() ? (this._queue.shift(), this._queue.length !== 0 && this._queue[0].value.startRequest()) : t.value.startRequest();
  }
};
RequestQueue.prototype.raisePriority = function(t) {
  for (var e = 0; e < this._queue.length; e++) {
    var r = this._queue[e];
    if (r.key === t) {
      this._queue.splice(e, 1), this._queue.unshift(r);
      break;
    }
  }
};
RequestQueue.prototype.clear = function() {
  this._queue.splice(0);
};
const CacheEntry$1 = CacheEntry;
Point = function() {
  this.initialize.apply(this, arguments);
};
Point.prototype = Object.create(PIXI.Point.prototype);
Point.prototype.constructor = Point;
Point.prototype.initialize = function(t, e) {
  PIXI.Point.call(this, t, e);
};
const Point$1 = Point;
Rectangle = function() {
  this.initialize.apply(this, arguments);
};
Rectangle.prototype = Object.create(PIXI.Rectangle.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.initialize = function(t, e, r, s) {
  PIXI.Rectangle.call(this, t, e, r, s);
};
Rectangle.emptyRectangle = new Rectangle(0, 0, 0, 0);
const Rectangle$1 = Rectangle;
Bitmap = function() {
  this.initialize.apply(this, arguments);
};
Bitmap._reuseImages = [];
Bitmap.prototype._createCanvas = function(t, e) {
  if (this.__canvas = this.__canvas || document.createElement("canvas"), this.__context = this.__canvas.getContext("2d"), this.__canvas.width = Math.max(t || 0, 1), this.__canvas.height = Math.max(e || 0, 1), this._image) {
    var r = Math.max(this._image.width || 0, 1), s = Math.max(this._image.height || 0, 1);
    this.__canvas.width = r, this.__canvas.height = s, this._createBaseTexture(this._canvas), this.__context.drawImage(this._image, 0, 0);
  }
  this._setDirty();
};
Bitmap.prototype._createBaseTexture = function(t) {
  this.__baseTexture = new PIXI.BaseTexture(t), this.__baseTexture.mipmap = !1, this.__baseTexture.width = t.width, this.__baseTexture.height = t.height, this._smooth ? this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR : this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
};
Bitmap.prototype._clearImgInstance = function() {
  this._image.src = "", this._image.onload = null, this._image.onerror = null, this._errorListener = null, this._loadListener = null, Bitmap._reuseImages.push(this._image), this._image = null;
};
Object.defineProperties(Bitmap.prototype, {
  _canvas: {
    get: function() {
      return this.__canvas || this._createCanvas(), this.__canvas;
    }
  },
  _context: {
    get: function() {
      return this.__context || this._createCanvas(), this.__context;
    }
  },
  _baseTexture: {
    get: function() {
      return this.__baseTexture || this._createBaseTexture(this._image || this.__canvas), this.__baseTexture;
    }
  }
});
Bitmap.prototype._renewCanvas = function() {
  var t = this._image;
  t && this.__canvas && (this.__canvas.width < t.width || this.__canvas.height < t.height) && this._createCanvas();
};
Bitmap.prototype.initialize = function(t, e) {
  this._defer || this._createCanvas(t, e), this._image = null, this._url = "", this._paintOpacity = 255, this._smooth = !1, this._loadListeners = [], this._loadingState = "none", this._decodeAfterRequest = !1, this.cacheEntry = null, this.fontFace = "GameFont", this.fontSize = 28, this.fontItalic = !1, this.textColor = "#ffffff", this.outlineColor = "rgba(0, 0, 0, 0.5)", this.outlineWidth = 4;
};
Bitmap.load = function(t) {
  var e = Object.create(Bitmap.prototype);
  return e._defer = !0, e.initialize(), e._decodeAfterRequest = !0, e._requestImage(t), e;
};
Bitmap.snap = function(t) {
  var e = Graphics.width, r = Graphics.height, s = new Bitmap(e, r), o = s._context, h = PIXI.RenderTexture.create(e, r);
  if (t) {
    Graphics._renderer.render(t, h), t.worldTransform.identity();
    var p = null;
    Graphics.isWebGL() ? p = Graphics._renderer.extract.canvas(h) : p = h.baseTexture._canvasRenderTarget.canvas, o.drawImage(p, 0, 0);
  }
  return h.destroy({ destroyBase: !0 }), s._setDirty(), s;
};
Bitmap.prototype.isReady = function() {
  return this._loadingState === "loaded" || this._loadingState === "none";
};
Bitmap.prototype.isError = function() {
  return this._loadingState === "error";
};
Bitmap.prototype.touch = function() {
  this.cacheEntry && this.cacheEntry.touch();
};
Object.defineProperty(Bitmap.prototype, "url", {
  get: function() {
    return this._url;
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "baseTexture", {
  get: function() {
    return this._baseTexture;
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "canvas", {
  get: function() {
    return this._canvas;
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "context", {
  get: function() {
    return this._context;
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "width", {
  get: function() {
    return this.isReady() ? this._image ? this._image.width : this._canvas.width : 0;
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "height", {
  get: function() {
    return this.isReady() ? this._image ? this._image.height : this._canvas.height : 0;
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "rect", {
  get: function() {
    return new Rectangle(0, 0, this.width, this.height);
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "smooth", {
  get: function() {
    return this._smooth;
  },
  set: function(t) {
    this._smooth !== t && (this._smooth = t, this.__baseTexture && (this._smooth ? this._baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR : this._baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST));
  },
  configurable: !0
});
Object.defineProperty(Bitmap.prototype, "paintOpacity", {
  get: function() {
    return this._paintOpacity;
  },
  set: function(t) {
    this._paintOpacity !== t && (this._paintOpacity = t, this._context.globalAlpha = this._paintOpacity / 255);
  },
  configurable: !0
});
Bitmap.prototype.resize = function(t, e) {
  t = Math.max(t || 0, 1), e = Math.max(e || 0, 1), this._canvas.width = t, this._canvas.height = e, this._baseTexture.width = t, this._baseTexture.height = e;
};
Bitmap.prototype.blt = function(t, e, r, s, o, h, p, c, u) {
  c = c || s, u = u || o, e >= 0 && r >= 0 && s > 0 && o > 0 && c > 0 && u > 0 && e + s <= t.width && r + o <= t.height && (this._context.globalCompositeOperation = "source-over", this._context.drawImage(t._canvas, e, r, s, o, h, p, c, u), this._setDirty());
};
Bitmap.prototype.bltImage = function(t, e, r, s, o, h, p, c, u) {
  c = c || s, u = u || o, e >= 0 && r >= 0 && s > 0 && o > 0 && c > 0 && u > 0 && e + s <= t.width && r + o <= t.height && (this._context.globalCompositeOperation = "source-over", this._context.drawImage(t._image, e, r, s, o, h, p, c, u), this._setDirty());
};
Bitmap.prototype.getPixel = function(t, e) {
  for (var r = this._context.getImageData(t, e, 1, 1).data, s = "#", o = 0; o < 3; o++)
    s += r[o].toString(16).padZero(2);
  return s;
};
Bitmap.prototype.getAlphaPixel = function(t, e) {
  var r = this._context.getImageData(t, e, 1, 1).data;
  return r[3];
};
Bitmap.prototype.clearRect = function(t, e, r, s) {
  this._context.clearRect(t, e, r, s), this._setDirty();
};
Bitmap.prototype.clear = function() {
  this.clearRect(0, 0, this.width, this.height);
};
Bitmap.prototype.fillRect = function(t, e, r, s, o) {
  var h = this._context;
  h.save(), h.fillStyle = o, h.fillRect(t, e, r, s), h.restore(), this._setDirty();
};
Bitmap.prototype.fillAll = function(t) {
  this.fillRect(0, 0, this.width, this.height, t);
};
Bitmap.prototype.gradientFillRect = function(t, e, r, s, o, h, p) {
  var c = this._context, u;
  p ? u = c.createLinearGradient(t, e, t, e + s) : u = c.createLinearGradient(t, e, t + r, e), u.addColorStop(0, o), u.addColorStop(1, h), c.save(), c.fillStyle = u, c.fillRect(t, e, r, s), c.restore(), this._setDirty();
};
Bitmap.prototype.drawCircle = function(t, e, r, s) {
  var o = this._context;
  o.save(), o.fillStyle = s, o.beginPath(), o.arc(t, e, r, 0, Math.PI * 2, !1), o.fill(), o.restore(), this._setDirty();
};
Bitmap.prototype.drawText = function(t, e, r, s, o, h) {
  if (t !== void 0) {
    var p = e, c = r + o - (o - this.fontSize * 0.7) / 2, u = this._context, l = u.globalAlpha;
    s = s || 4294967295, h === "center" && (p += s / 2), h === "right" && (p += s), u.save(), u.font = this._makeFontNameText(), u.textAlign = h, u.textBaseline = "alphabetic", u.globalAlpha = 1, this._drawTextOutline(t, p, c, s), u.globalAlpha = l, this._drawTextBody(t, p, c, s), u.restore(), this._setDirty();
  }
};
Bitmap.prototype.measureTextWidth = function(t) {
  var e = this._context;
  e.save(), e.font = this._makeFontNameText();
  var r = e.measureText(t).width;
  return e.restore(), r;
};
Bitmap.prototype.adjustTone = function(t, e, r) {
  if ((t || e || r) && this.width > 0 && this.height > 0) {
    for (var s = this._context, o = s.getImageData(0, 0, this.width, this.height), h = o.data, p = 0; p < h.length; p += 4)
      h[p + 0] += t, h[p + 1] += e, h[p + 2] += r;
    s.putImageData(o, 0, 0), this._setDirty();
  }
};
Bitmap.prototype.rotateHue = function(t) {
  function e(_, w, m) {
    var g = Math.min(_, w, m), S = Math.max(_, w, m), y = 0, M = 0, W = (g + S) / 2, T = S - g;
    return T > 0 && (_ === S ? y = 60 * (((w - m) / T + 6) % 6) : w === S ? y = 60 * ((m - _) / T + 2) : y = 60 * ((_ - w) / T + 4), M = T / (255 - Math.abs(2 * W - 255))), [y, M, W];
  }
  function r(_, w, m) {
    var g = (255 - Math.abs(2 * m - 255)) * w, S = g * (1 - Math.abs(_ / 60 % 2 - 1)), y = m - g / 2, M = g + y, W = S + y;
    return _ < 60 ? [M, W, y] : _ < 120 ? [W, M, y] : _ < 180 ? [y, M, W] : _ < 240 ? [y, W, M] : _ < 300 ? [W, y, M] : [M, y, W];
  }
  if (t && this.width > 0 && this.height > 0) {
    t = (t % 360 + 360) % 360;
    for (var s = this._context, o = s.getImageData(0, 0, this.width, this.height), h = o.data, p = 0; p < h.length; p += 4) {
      var c = e(h[p + 0], h[p + 1], h[p + 2]), u = (c[0] + t) % 360, l = c[1], d = c[2], f = r(u, l, d);
      h[p + 0] = f[0], h[p + 1] = f[1], h[p + 2] = f[2];
    }
    s.putImageData(o, 0, 0), this._setDirty();
  }
};
Bitmap.prototype.blur = function() {
  for (var t = 0; t < 2; t++) {
    var e = this.width, r = this.height, s = this._canvas, o = this._context, h = document.createElement("canvas"), p = h.getContext("2d");
    h.width = e + 2, h.height = r + 2, p.drawImage(s, 0, 0, e, r, 1, 1, e, r), p.drawImage(s, 0, 0, e, 1, 1, 0, e, 1), p.drawImage(s, 0, 0, 1, r, 0, 1, 1, r), p.drawImage(s, 0, r - 1, e, 1, 1, r + 1, e, 1), p.drawImage(s, e - 1, 0, 1, r, e + 1, 1, 1, r), o.save(), o.fillStyle = "black", o.fillRect(0, 0, e, r), o.globalCompositeOperation = "lighter", o.globalAlpha = 1 / 9;
    for (var c = 0; c < 3; c++)
      for (var u = 0; u < 3; u++)
        o.drawImage(h, u, c, e, r, 0, 0, e, r);
    o.restore();
  }
  this._setDirty();
};
Bitmap.prototype.addLoadListener = function(t) {
  this.isReady() ? t(this) : this._loadListeners.push(t);
};
Bitmap.prototype._makeFontNameText = function() {
  return (this.fontItalic ? "Italic " : "") + this.fontSize + "px " + this.fontFace;
};
Bitmap.prototype._drawTextOutline = function(t, e, r, s) {
  var o = this._context;
  o.strokeStyle = this.outlineColor, o.lineWidth = this.outlineWidth, o.lineJoin = "round", o.strokeText(t, e, r, s);
};
Bitmap.prototype._drawTextBody = function(t, e, r, s) {
  var o = this._context;
  o.fillStyle = this.textColor, o.fillText(t, e, r, s);
};
Bitmap.prototype._onLoad = function() {
  switch (this._image.removeEventListener("load", this._loadListener), this._image.removeEventListener("error", this._errorListener), this._renewCanvas(), this._loadingState) {
    case "requesting":
      this._loadingState = "requestCompleted", this._decodeAfterRequest ? this.decode() : (this._loadingState = "purged", this._clearImgInstance());
      break;
    case "decrypting":
      window.URL.revokeObjectURL(this._image.src), this._loadingState = "decryptCompleted", this._decodeAfterRequest ? this.decode() : (this._loadingState = "purged", this._clearImgInstance());
      break;
  }
};
Bitmap.prototype.decode = function() {
  switch (this._loadingState) {
    case "requestCompleted":
    case "decryptCompleted":
      this._loadingState = "loaded", this.__canvas || this._createBaseTexture(this._image), this._setDirty(), this._callLoadListeners();
      break;
    case "requesting":
    case "decrypting":
      this._decodeAfterRequest = !0, this._loader || (this._loader = ResourceHandler.createLoader(this._url, this._requestImage.bind(this, this._url), this._onError.bind(this)), this._image.removeEventListener("error", this._errorListener), this._image.addEventListener("error", this._errorListener = this._loader));
      break;
    case "pending":
    case "purged":
    case "error":
      this._decodeAfterRequest = !0, this._requestImage(this._url);
      break;
  }
};
Bitmap.prototype._callLoadListeners = function() {
  for (; this._loadListeners.length > 0; ) {
    var t = this._loadListeners.shift();
    t(this);
  }
};
Bitmap.prototype._onError = function() {
  this._image.removeEventListener("load", this._loadListener), this._image.removeEventListener("error", this._errorListener), this._loadingState = "error";
};
Bitmap.prototype._setDirty = function() {
  this._dirty = !0;
};
Bitmap.prototype.checkDirty = function() {
  this._dirty && (this._baseTexture.update(), this._dirty = !1);
};
Bitmap.request = function(t) {
  var e = Object.create(Bitmap.prototype);
  return e._defer = !0, e.initialize(), e._url = t, e._loadingState = "pending", e;
};
Bitmap.prototype._requestImage = function(t) {
  Bitmap._reuseImages.length !== 0 ? this._image = Bitmap._reuseImages.pop() : this._image = new Image(), this._decodeAfterRequest && !this._loader && (this._loader = ResourceHandler.createLoader(t, this._requestImage.bind(this, t), this._onError.bind(this))), this._image = new Image(), this._url = t, this._loadingState = "requesting", !Decrypter.checkImgIgnore(t) && Decrypter.hasEncryptedImages ? (this._loadingState = "decrypting", Decrypter.decryptImg(t, this)) : (this._image.src = t, this._image.addEventListener("load", this._loadListener = Bitmap.prototype._onLoad.bind(this)), this._image.addEventListener("error", this._errorListener = this._loader || Bitmap.prototype._onError.bind(this)));
};
Bitmap.prototype.isRequestOnly = function() {
  return !(this._decodeAfterRequest || this.isReady());
};
Bitmap.prototype.isRequestReady = function() {
  return this._loadingState !== "pending" && this._loadingState !== "requesting" && this._loadingState !== "decrypting";
};
Bitmap.prototype.startRequest = function() {
  this._loadingState === "pending" && (this._decodeAfterRequest = !1, this._requestImage(this._url));
};
const Bitmap$1 = Bitmap;
Graphics = function() {
  throw new Error("This is a static class");
};
Graphics._cssFontLoading = document.fonts && document.fonts.ready;
Graphics._fontLoaded = null;
Graphics._videoVolume = 1;
Graphics.initialize = function(t, e, r) {
  this._width = t || 800, this._height = e || 600, this._rendererType = r || "auto", this._boxWidth = this._width, this._boxHeight = this._height, this._scale = 1, this._realScale = 1, this._errorShowed = !1, this._errorPrinter = null, this._canvas = null, this._video = null, this._videoUnlocked = !1, this._videoLoading = !1, this._upperCanvas = null, this._renderer = null, this._fpsMeter = null, this._modeBox = null, this._skipCount = 0, this._maxSkip = 3, this._rendered = !1, this._loadingImage = null, this._loadingCount = 0, this._fpsMeterToggled = !1, this._stretchEnabled = this._defaultStretchMode(), this._canUseDifferenceBlend = !1, this._canUseSaturationBlend = !1, this._hiddenCanvas = null, this._testCanvasBlendModes(), this._modifyExistingElements(), this._updateRealScale(), this._createAllElements(), this._disableTextSelection(), this._disableContextMenu(), this._setupEventHandlers(), this._setupCssFontLoading();
};
Graphics._setupCssFontLoading = function() {
  Graphics._cssFontLoading && document.fonts.ready.then(function(t) {
    Graphics._fontLoaded = t;
  }).catch(function(t) {
    SceneManager.onError(t);
  });
};
Graphics.canUseCssFontLoading = function() {
  return !!this._cssFontLoading;
};
Graphics.frameCount = 0;
Graphics.BLEND_NORMAL = 0;
Graphics.BLEND_ADD = 1;
Graphics.BLEND_MULTIPLY = 2;
Graphics.BLEND_SCREEN = 3;
Graphics.tickStart = function() {
  this._fpsMeter && this._fpsMeter.tickStart();
};
Graphics.tickEnd = function() {
  this._fpsMeter && this._rendered && this._fpsMeter.tick();
};
Graphics.render = function(t) {
  if (this._skipCount === 0) {
    var e = Date.now();
    t && (this._renderer.render(t), this._renderer.gl && this._renderer.gl.flush && this._renderer.gl.flush());
    var r = Date.now(), s = r - e;
    this._skipCount = Math.min(Math.floor(s / 15), this._maxSkip), this._rendered = !0;
  } else
    this._skipCount--, this._rendered = !1;
  this.frameCount++;
};
Graphics.isWebGL = function() {
  return this._renderer && this._renderer.type === PIXI.RENDERER_TYPE.WEBGL;
};
Graphics.hasWebGL = function() {
  try {
    var t = document.createElement("canvas");
    return !!(t.getContext("webgl") || t.getContext("experimental-webgl"));
  } catch {
    return !1;
  }
};
Graphics.canUseDifferenceBlend = function() {
  return this._canUseDifferenceBlend;
};
Graphics.canUseSaturationBlend = function() {
  return this._canUseSaturationBlend;
};
Graphics.setLoadingImage = function(t) {
  this._loadingImage = new Image(), this._loadingImage.src = t;
};
Graphics.startLoading = function() {
  this._loadingCount = 0;
};
Graphics.updateLoading = function() {
  this._loadingCount++, this._paintUpperCanvas(), this._upperCanvas.style.opacity = 1;
};
Graphics.endLoading = function() {
  this._clearUpperCanvas(), this._upperCanvas.style.opacity = 0;
};
Graphics.printLoadingError = function(t) {
  if (this._errorPrinter && !this._errorShowed) {
    this._errorPrinter.innerHTML = this._makeErrorHtml("Loading Error", "Failed to load: " + t);
    var e = document.createElement("button");
    e.innerHTML = "Retry", e.style.fontSize = "24px", e.style.color = "#ffffff", e.style.backgroundColor = "#000000", e.onmousedown = e.ontouchstart = function(r) {
      ResourceHandler.retry(), r.stopPropagation();
    }, this._errorPrinter.appendChild(e), this._loadingCount = -1 / 0;
  }
};
Graphics.eraseLoadingError = function() {
  this._errorPrinter && !this._errorShowed && (this._errorPrinter.innerHTML = "", this.startLoading());
};
Graphics.printError = function(t, e) {
  this._errorShowed = !0, this._errorPrinter && (this._errorPrinter.innerHTML = this._makeErrorHtml(t, e)), this._applyCanvasFilter(), this._clearUpperCanvas();
};
Graphics.showFps = function() {
  this._fpsMeter && (this._fpsMeter.show(), this._modeBox.style.opacity = 1);
};
Graphics.hideFps = function() {
  this._fpsMeter && (this._fpsMeter.hide(), this._modeBox.style.opacity = 0);
};
Graphics.loadFont = function(t, e) {
  var r = document.createElement("style"), s = document.getElementsByTagName("head"), o = '@font-face { font-family: "' + t + '"; src: url("' + e + '"); }';
  r.type = "text/css", s.item(0).appendChild(r), r.sheet.insertRule(o, 0), this._createFontLoader(t);
};
Graphics.isFontLoaded = function(t) {
  if (Graphics._cssFontLoading)
    return Graphics._fontLoaded ? Graphics._fontLoaded.check('10px "' + t + '"') : !1;
  this._hiddenCanvas || (this._hiddenCanvas = document.createElement("canvas"));
  var e = this._hiddenCanvas.getContext("2d"), r = "abcdefghijklmnopqrstuvwxyz", s, o;
  return e.font = "40px " + t + ", sans-serif", s = e.measureText(r).width, e.font = "40px sans-serif", o = e.measureText(r).width, s !== o;
};
Graphics.playVideo = function(t) {
  this._videoLoader = ResourceHandler.createLoader(null, this._playVideo.bind(this, t), this._onVideoError.bind(this)), this._playVideo(t);
};
Graphics._playVideo = function(t) {
  this._video.src = t, this._video.onloadeddata = this._onVideoLoad.bind(this), this._video.onerror = this._videoLoader, this._video.onended = this._onVideoEnd.bind(this), this._video.load(), this._videoLoading = !0;
};
Graphics.isVideoPlaying = function() {
  return this._videoLoading || this._isVideoVisible();
};
Graphics.canPlayVideoType = function(t) {
  return this._video && this._video.canPlayType(t);
};
Graphics.setVideoVolume = function(t) {
  this._videoVolume = t, this._video && (this._video.volume = this._videoVolume);
};
Graphics.pageToCanvasX = function(t) {
  if (this._canvas) {
    var e = this._canvas.offsetLeft;
    return Math.round((t - e) / this._realScale);
  } else
    return 0;
};
Graphics.pageToCanvasY = function(t) {
  if (this._canvas) {
    var e = this._canvas.offsetTop;
    return Math.round((t - e) / this._realScale);
  } else
    return 0;
};
Graphics.isInsideCanvas = function(t, e) {
  return t >= 0 && t < this._width && e >= 0 && e < this._height;
};
Graphics.callGC = function() {
  Graphics.isWebGL() && Graphics._renderer.textureGC.run();
};
Object.defineProperty(Graphics, "width", {
  get: function() {
    return this._width;
  },
  set: function(t) {
    this._width !== t && (this._width = t, this._updateAllElements());
  },
  configurable: !0
});
Object.defineProperty(Graphics, "height", {
  get: function() {
    return this._height;
  },
  set: function(t) {
    this._height !== t && (this._height = t, this._updateAllElements());
  },
  configurable: !0
});
Object.defineProperty(Graphics, "boxWidth", {
  get: function() {
    return this._boxWidth;
  },
  set: function(t) {
    this._boxWidth = t;
  },
  configurable: !0
});
Object.defineProperty(Graphics, "boxHeight", {
  get: function() {
    return this._boxHeight;
  },
  set: function(t) {
    this._boxHeight = t;
  },
  configurable: !0
});
Object.defineProperty(Graphics, "scale", {
  get: function() {
    return this._scale;
  },
  set: function(t) {
    this._scale !== t && (this._scale = t, this._updateAllElements());
  },
  configurable: !0
});
Graphics._createAllElements = function() {
  this._createErrorPrinter(), this._createCanvas(), this._createVideo(), this._createUpperCanvas(), this._createRenderer(), this._createFPSMeter(), this._createModeBox(), this._createGameFontLoader();
};
Graphics._updateAllElements = function() {
  this._updateRealScale(), this._updateErrorPrinter(), this._updateCanvas(), this._updateVideo(), this._updateUpperCanvas(), this._updateRenderer(), this._paintUpperCanvas();
};
Graphics._updateRealScale = function() {
  if (this._stretchEnabled) {
    var t = window.innerWidth / this._width, e = window.innerHeight / this._height;
    t >= 1 && t - 0.01 <= 1 && (t = 1), e >= 1 && e - 0.01 <= 1 && (e = 1), this._realScale = Math.min(t, e);
  } else
    this._realScale = this._scale;
};
Graphics._makeErrorHtml = function(t, e) {
  return '<font color="yellow"><b>' + t + '</b></font><br><font color="white">' + e + "</font><br>";
};
Graphics._defaultStretchMode = function() {
  return Utils.isNwjs() || Utils.isMobileDevice();
};
Graphics._testCanvasBlendModes = function() {
  var t, e, r, s;
  t = document.createElement("canvas"), t.width = 1, t.height = 1, e = t.getContext("2d"), e.globalCompositeOperation = "source-over", e.fillStyle = "white", e.fillRect(0, 0, 1, 1), e.globalCompositeOperation = "difference", e.fillStyle = "white", e.fillRect(0, 0, 1, 1), r = e.getImageData(0, 0, 1, 1), e.globalCompositeOperation = "source-over", e.fillStyle = "black", e.fillRect(0, 0, 1, 1), e.globalCompositeOperation = "saturation", e.fillStyle = "white", e.fillRect(0, 0, 1, 1), s = e.getImageData(0, 0, 1, 1), this._canUseDifferenceBlend = r.data[0] === 0, this._canUseSaturationBlend = s.data[0] === 0;
};
Graphics._modifyExistingElements = function() {
  for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++)
    t[e].style.zIndex > 0 && (t[e].style.zIndex = 0);
};
Graphics._createErrorPrinter = function() {
  this._errorPrinter = document.createElement("p"), this._errorPrinter.id = "ErrorPrinter", this._updateErrorPrinter(), document.body.appendChild(this._errorPrinter);
};
Graphics._updateErrorPrinter = function() {
  this._errorPrinter.width = this._width * 0.9, this._errorPrinter.height = 40, this._errorPrinter.style.textAlign = "center", this._errorPrinter.style.textShadow = "1px 1px 3px #000", this._errorPrinter.style.fontSize = "20px", this._errorPrinter.style.zIndex = 99, this._centerElement(this._errorPrinter);
};
Graphics._createCanvas = function() {
  this._canvas = document.createElement("canvas"), this._canvas.id = "GameCanvas", this._updateCanvas(), document.body.appendChild(this._canvas);
};
Graphics._updateCanvas = function() {
  this._canvas.width = this._width, this._canvas.height = this._height, this._canvas.style.zIndex = 1, this._centerElement(this._canvas);
};
Graphics._createVideo = function() {
  this._video = document.createElement("video"), this._video.id = "GameVideo", this._video.style.opacity = 0, this._video.setAttribute("playsinline", ""), this._video.volume = this._videoVolume, this._updateVideo(), makeVideoPlayableInline(this._video), document.body.appendChild(this._video);
};
Graphics._updateVideo = function() {
  this._video.width = this._width, this._video.height = this._height, this._video.style.zIndex = 2, this._centerElement(this._video);
};
Graphics._createUpperCanvas = function() {
  this._upperCanvas = document.createElement("canvas"), this._upperCanvas.id = "UpperCanvas", this._updateUpperCanvas(), document.body.appendChild(this._upperCanvas);
};
Graphics._updateUpperCanvas = function() {
  this._upperCanvas.width = this._width, this._upperCanvas.height = this._height, this._upperCanvas.style.zIndex = 3, this._centerElement(this._upperCanvas);
};
Graphics._clearUpperCanvas = function() {
  var t = this._upperCanvas.getContext("2d");
  t.clearRect(0, 0, this._width, this._height);
};
Graphics._paintUpperCanvas = function() {
  if (this._clearUpperCanvas(), this._loadingImage && this._loadingCount >= 20) {
    var t = this._upperCanvas.getContext("2d"), e = (this._width - this._loadingImage.width) / 2, r = (this._height - this._loadingImage.height) / 2, s = ((this._loadingCount - 20) / 30).clamp(0, 1);
    t.save(), t.globalAlpha = s, t.drawImage(this._loadingImage, e, r), t.restore();
  }
};
Graphics._createRenderer = function() {
  PIXI.dontSayHello = !0;
  var t = this._width, e = this._height, r = { view: this._canvas };
  try {
    switch (this._rendererType) {
      case "canvas":
        this._renderer = new PIXI.CanvasRenderer(t, e, r);
        break;
      case "webgl":
        this._renderer = new PIXI.WebGLRenderer(t, e, r);
        break;
      default:
        this._renderer = PIXI.autoDetectRenderer(t, e, r);
        break;
    }
    this._renderer && this._renderer.textureGC && (this._renderer.textureGC.maxIdle = 1);
  } catch {
    this._renderer = null;
  }
};
Graphics._updateRenderer = function() {
  this._renderer && this._renderer.resize(this._width, this._height);
};
Graphics._createFPSMeter = function() {
  var t = { graph: 1, decimals: 0, theme: "transparent", toggleOn: null };
  this._fpsMeter = new FPSMeter(t), this._fpsMeter.hide();
};
Graphics._createModeBox = function() {
  var t = document.createElement("div");
  t.id = "modeTextBack", t.style.position = "absolute", t.style.left = "5px", t.style.top = "5px", t.style.width = "119px", t.style.height = "58px", t.style.background = "rgba(0,0,0,0.2)", t.style.zIndex = 9, t.style.opacity = 0;
  var e = document.createElement("div");
  e.id = "modeText", e.style.position = "absolute", e.style.left = "0px", e.style.top = "41px", e.style.width = "119px", e.style.fontSize = "12px", e.style.fontFamily = "monospace", e.style.color = "white", e.style.textAlign = "center", e.style.textShadow = "1px 1px 0 rgba(0,0,0,0.5)", e.innerHTML = this.isWebGL() ? "WebGL mode" : "Canvas mode", document.body.appendChild(t), t.appendChild(e), this._modeBox = t;
};
Graphics._createGameFontLoader = function() {
  this._createFontLoader("GameFont");
};
Graphics._createFontLoader = function(t) {
  var e = document.createElement("div"), r = document.createTextNode(".");
  e.style.fontFamily = t, e.style.fontSize = "0px", e.style.color = "transparent", e.style.position = "absolute", e.style.margin = "auto", e.style.top = "0px", e.style.left = "0px", e.style.width = "1px", e.style.height = "1px", e.appendChild(r), document.body.appendChild(e);
};
Graphics._centerElement = function(t) {
  var e = t.width * this._realScale, r = t.height * this._realScale;
  t.style.position = "absolute", t.style.margin = "auto", t.style.top = 0, t.style.left = 0, t.style.right = 0, t.style.bottom = 0, t.style.width = e + "px", t.style.height = r + "px";
};
Graphics._disableTextSelection = function() {
  var t = document.body;
  t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.msUserSelect = "none", t.style.mozUserSelect = "none";
};
Graphics._disableContextMenu = function() {
  for (var t = document.body.getElementsByTagName("*"), e = function() {
    return !1;
  }, r = 0; r < t.length; r++)
    t[r].oncontextmenu = e;
};
Graphics._applyCanvasFilter = function() {
  this._canvas && (this._canvas.style.opacity = 0.5, this._canvas.style.filter = "blur(8px)", this._canvas.style.webkitFilter = "blur(8px)");
};
Graphics._onVideoLoad = function() {
  this._video.play(), this._updateVisibility(!0), this._videoLoading = !1;
};
Graphics._onVideoError = function() {
  this._updateVisibility(!1), this._videoLoading = !1;
};
Graphics._onVideoEnd = function() {
  this._updateVisibility(!1);
};
Graphics._updateVisibility = function(t) {
  this._video.style.opacity = t ? 1 : 0, this._canvas.style.opacity = t ? 0 : 1;
};
Graphics._isVideoVisible = function() {
  return this._video.style.opacity > 0;
};
Graphics._setupEventHandlers = function() {
  window.addEventListener("resize", this._onWindowResize.bind(this)), document.addEventListener("keydown", this._onKeyDown.bind(this)), document.addEventListener("keydown", this._onTouchEnd.bind(this)), document.addEventListener("mousedown", this._onTouchEnd.bind(this)), document.addEventListener("touchend", this._onTouchEnd.bind(this));
};
Graphics._onWindowResize = function() {
  this._updateAllElements();
};
Graphics._onKeyDown = function(t) {
  if (!t.ctrlKey && !t.altKey)
    switch (t.keyCode) {
      case 113:
        t.preventDefault(), this._switchFPSMeter();
        break;
      case 114:
        t.preventDefault(), this._switchStretchMode();
        break;
      case 115:
        t.preventDefault(), this._switchFullScreen();
        break;
    }
};
Graphics._onTouchEnd = function(t) {
  this._videoUnlocked || (this._video.play(), this._videoUnlocked = !0), this._isVideoVisible() && this._video.paused && this._video.play();
};
Graphics._switchFPSMeter = function() {
  this._fpsMeter.isPaused ? (this.showFps(), this._fpsMeter.showFps(), this._fpsMeterToggled = !1) : this._fpsMeterToggled ? this.hideFps() : (this._fpsMeter.showDuration(), this._fpsMeterToggled = !0);
};
Graphics._switchStretchMode = function() {
  this._stretchEnabled = !this._stretchEnabled, this._updateAllElements();
};
Graphics._switchFullScreen = function() {
  this._isFullScreen() ? this._requestFullScreen() : this._cancelFullScreen();
};
Graphics._isFullScreen = function() {
  return document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitFullscreenElement && !document.msFullscreenElement;
};
Graphics._requestFullScreen = function() {
  var t = document.body;
  t.requestFullScreen ? t.requestFullScreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : t.msRequestFullscreen && t.msRequestFullscreen();
};
Graphics._cancelFullScreen = function() {
  document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
};
const Graphics$1 = Graphics;
Input = function() {
  throw new Error("This is a static class");
};
Input.initialize = function() {
  this.clear(), this._wrapNwjsAlert(), this._setupEventHandlers();
};
Input.keyRepeatWait = 24;
Input.keyRepeatInterval = 6;
Input.keyMapper = {
  9: "tab",
  // tab
  13: "ok",
  // enter
  16: "shift",
  // shift
  17: "control",
  // control
  18: "control",
  // alt
  27: "escape",
  // escape
  32: "ok",
  // space
  33: "pageup",
  // pageup
  34: "pagedown",
  // pagedown
  37: "left",
  // left arrow
  38: "up",
  // up arrow
  39: "right",
  // right arrow
  40: "down",
  // down arrow
  45: "escape",
  // insert
  81: "pageup",
  // Q
  87: "pagedown",
  // W
  88: "escape",
  // X
  90: "ok",
  // Z
  96: "escape",
  // numpad 0
  98: "down",
  // numpad 2
  100: "left",
  // numpad 4
  102: "right",
  // numpad 6
  104: "up",
  // numpad 8
  120: "debug"
  // F9
};
Input.gamepadMapper = {
  0: "ok",
  // A
  1: "cancel",
  // B
  2: "shift",
  // X
  3: "menu",
  // Y
  4: "pageup",
  // LB
  5: "pagedown",
  // RB
  12: "up",
  // D-pad up
  13: "down",
  // D-pad down
  14: "left",
  // D-pad left
  15: "right"
  // D-pad right
};
Input.clear = function() {
  this._currentState = {}, this._previousState = {}, this._gamepadStates = [], this._latestButton = null, this._pressedTime = 0, this._dir4 = 0, this._dir8 = 0, this._preferredAxis = "", this._date = 0;
};
Input.update = function() {
  this._pollGamepads(), this._currentState[this._latestButton] ? this._pressedTime++ : this._latestButton = null;
  for (var t in this._currentState)
    this._currentState[t] && !this._previousState[t] && (this._latestButton = t, this._pressedTime = 0, this._date = Date.now()), this._previousState[t] = this._currentState[t];
  this._updateDirection();
};
Input.isPressed = function(t) {
  return this._isEscapeCompatible(t) && this.isPressed("escape") ? !0 : !!this._currentState[t];
};
Input.isTriggered = function(t) {
  return this._isEscapeCompatible(t) && this.isTriggered("escape") ? !0 : this._latestButton === t && this._pressedTime === 0;
};
Input.isRepeated = function(t) {
  return this._isEscapeCompatible(t) && this.isRepeated("escape") ? !0 : this._latestButton === t && (this._pressedTime === 0 || this._pressedTime >= this.keyRepeatWait && this._pressedTime % this.keyRepeatInterval === 0);
};
Input.isLongPressed = function(t) {
  return this._isEscapeCompatible(t) && this.isLongPressed("escape") ? !0 : this._latestButton === t && this._pressedTime >= this.keyRepeatWait;
};
Object.defineProperty(Input, "dir4", {
  get: function() {
    return this._dir4;
  },
  configurable: !0
});
Object.defineProperty(Input, "dir8", {
  get: function() {
    return this._dir8;
  },
  configurable: !0
});
Object.defineProperty(Input, "date", {
  get: function() {
    return this._date;
  },
  configurable: !0
});
Input._wrapNwjsAlert = function() {
  if (Utils.isNwjs()) {
    var t = window.alert;
    window.alert = function() {
      var e = require("nw.gui"), r = e.Window.get();
      t.apply(this, arguments), r.focus(), Input.clear();
    };
  }
};
Input._setupEventHandlers = function() {
  document.addEventListener("keydown", this._onKeyDown.bind(this)), document.addEventListener("keyup", this._onKeyUp.bind(this)), window.addEventListener("blur", this._onLostFocus.bind(this));
};
Input._onKeyDown = function(t) {
  this._shouldPreventDefault(t.keyCode) && t.preventDefault(), t.keyCode === 144 && this.clear();
  var e = this.keyMapper[t.keyCode];
  ResourceHandler.exists() && e === "ok" ? ResourceHandler.retry() : e && (this._currentState[e] = !0);
};
Input._shouldPreventDefault = function(t) {
  switch (t) {
    case 8:
    // backspace
    case 33:
    // pageup
    case 34:
    // pagedown
    case 37:
    // left arrow
    case 38:
    // up arrow
    case 39:
    // right arrow
    case 40:
      return !0;
  }
  return !1;
};
Input._onKeyUp = function(t) {
  var e = this.keyMapper[t.keyCode];
  e && (this._currentState[e] = !1), t.keyCode === 0 && this.clear();
};
Input._onLostFocus = function() {
  this.clear();
};
Input._pollGamepads = function() {
  if (navigator.getGamepads) {
    var t = navigator.getGamepads();
    if (t)
      for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r && r.connected && this._updateGamepadState(r);
      }
  }
};
Input._updateGamepadState = function(t) {
  var e = this._gamepadStates[t.index] || [], r = [], s = t.buttons, o = t.axes, h = 0.5;
  r[12] = !1, r[13] = !1, r[14] = !1, r[15] = !1;
  for (var p = 0; p < s.length; p++)
    r[p] = s[p].pressed;
  o[1] < -h ? r[12] = !0 : o[1] > h && (r[13] = !0), o[0] < -h ? r[14] = !0 : o[0] > h && (r[15] = !0);
  for (var c = 0; c < r.length; c++)
    if (r[c] !== e[c]) {
      var u = this.gamepadMapper[c];
      u && (this._currentState[u] = r[c]);
    }
  this._gamepadStates[t.index] = r;
};
Input._updateDirection = function() {
  var t = this._signX(), e = this._signY();
  this._dir8 = this._makeNumpadDirection(t, e), t !== 0 && e !== 0 ? this._preferredAxis === "x" ? e = 0 : t = 0 : t !== 0 ? this._preferredAxis = "y" : e !== 0 && (this._preferredAxis = "x"), this._dir4 = this._makeNumpadDirection(t, e);
};
Input._signX = function() {
  var t = 0;
  return this.isPressed("left") && t--, this.isPressed("right") && t++, t;
};
Input._signY = function() {
  var t = 0;
  return this.isPressed("up") && t--, this.isPressed("down") && t++, t;
};
Input._makeNumpadDirection = function(t, e) {
  return t !== 0 || e !== 0 ? 5 - e * 3 + t : 0;
};
Input._isEscapeCompatible = function(t) {
  return t === "cancel" || t === "menu";
};
const Input$1 = Input;
TouchInput = function() {
  throw new Error("This is a static class");
};
TouchInput.initialize = function() {
  this.clear(), this._setupEventHandlers();
};
TouchInput.keyRepeatWait = 24;
TouchInput.keyRepeatInterval = 6;
TouchInput.clear = function() {
  this._mousePressed = !1, this._screenPressed = !1, this._pressedTime = 0, this._events = {}, this._events.triggered = !1, this._events.cancelled = !1, this._events.moved = !1, this._events.released = !1, this._events.wheelX = 0, this._events.wheelY = 0, this._triggered = !1, this._cancelled = !1, this._moved = !1, this._released = !1, this._wheelX = 0, this._wheelY = 0, this._x = 0, this._y = 0, this._date = 0;
};
TouchInput.update = function() {
  this._triggered = this._events.triggered, this._cancelled = this._events.cancelled, this._moved = this._events.moved, this._released = this._events.released, this._wheelX = this._events.wheelX, this._wheelY = this._events.wheelY, this._events.triggered = !1, this._events.cancelled = !1, this._events.moved = !1, this._events.released = !1, this._events.wheelX = 0, this._events.wheelY = 0, this.isPressed() && this._pressedTime++;
};
TouchInput.isPressed = function() {
  return this._mousePressed || this._screenPressed;
};
TouchInput.isTriggered = function() {
  return this._triggered;
};
TouchInput.isRepeated = function() {
  return this.isPressed() && (this._triggered || this._pressedTime >= this.keyRepeatWait && this._pressedTime % this.keyRepeatInterval === 0);
};
TouchInput.isLongPressed = function() {
  return this.isPressed() && this._pressedTime >= this.keyRepeatWait;
};
TouchInput.isCancelled = function() {
  return this._cancelled;
};
TouchInput.isMoved = function() {
  return this._moved;
};
TouchInput.isReleased = function() {
  return this._released;
};
Object.defineProperty(TouchInput, "wheelX", {
  get: function() {
    return this._wheelX;
  },
  configurable: !0
});
Object.defineProperty(TouchInput, "wheelY", {
  get: function() {
    return this._wheelY;
  },
  configurable: !0
});
Object.defineProperty(TouchInput, "x", {
  get: function() {
    return this._x;
  },
  configurable: !0
});
Object.defineProperty(TouchInput, "y", {
  get: function() {
    return this._y;
  },
  configurable: !0
});
Object.defineProperty(TouchInput, "date", {
  get: function() {
    return this._date;
  },
  configurable: !0
});
TouchInput._setupEventHandlers = function() {
  var t = Utils.isSupportPassiveEvent();
  document.addEventListener("mousedown", this._onMouseDown.bind(this)), document.addEventListener("mousemove", this._onMouseMove.bind(this)), document.addEventListener("mouseup", this._onMouseUp.bind(this)), document.addEventListener("wheel", this._onWheel.bind(this)), document.addEventListener("touchstart", this._onTouchStart.bind(this), t ? { passive: !1 } : !1), document.addEventListener("touchmove", this._onTouchMove.bind(this), t ? { passive: !1 } : !1), document.addEventListener("touchend", this._onTouchEnd.bind(this)), document.addEventListener("touchcancel", this._onTouchCancel.bind(this)), document.addEventListener("pointerdown", this._onPointerDown.bind(this));
};
TouchInput._onMouseDown = function(t) {
  t.button === 0 ? this._onLeftButtonDown(t) : t.button === 1 ? this._onMiddleButtonDown(t) : t.button === 2 && this._onRightButtonDown(t);
};
TouchInput._onLeftButtonDown = function(t) {
  var e = Graphics.pageToCanvasX(t.pageX), r = Graphics.pageToCanvasY(t.pageY);
  Graphics.isInsideCanvas(e, r) && (this._mousePressed = !0, this._pressedTime = 0, this._onTrigger(e, r));
};
TouchInput._onMiddleButtonDown = function(t) {
};
TouchInput._onRightButtonDown = function(t) {
  var e = Graphics.pageToCanvasX(t.pageX), r = Graphics.pageToCanvasY(t.pageY);
  Graphics.isInsideCanvas(e, r) && this._onCancel(e, r);
};
TouchInput._onMouseMove = function(t) {
  if (this._mousePressed) {
    var e = Graphics.pageToCanvasX(t.pageX), r = Graphics.pageToCanvasY(t.pageY);
    this._onMove(e, r);
  }
};
TouchInput._onMouseUp = function(t) {
  if (t.button === 0) {
    var e = Graphics.pageToCanvasX(t.pageX), r = Graphics.pageToCanvasY(t.pageY);
    this._mousePressed = !1, this._onRelease(e, r);
  }
};
TouchInput._onWheel = function(t) {
  this._events.wheelX += t.deltaX, this._events.wheelY += t.deltaY, t.preventDefault();
};
TouchInput._onTouchStart = function(t) {
  for (var e = 0; e < t.changedTouches.length; e++) {
    var r = t.changedTouches[e], s = Graphics.pageToCanvasX(r.pageX), o = Graphics.pageToCanvasY(r.pageY);
    Graphics.isInsideCanvas(s, o) && (this._screenPressed = !0, this._pressedTime = 0, t.touches.length >= 2 ? this._onCancel(s, o) : this._onTrigger(s, o), t.preventDefault());
  }
  (window.cordova || window.navigator.standalone) && t.preventDefault();
};
TouchInput._onTouchMove = function(t) {
  for (var e = 0; e < t.changedTouches.length; e++) {
    var r = t.changedTouches[e], s = Graphics.pageToCanvasX(r.pageX), o = Graphics.pageToCanvasY(r.pageY);
    this._onMove(s, o);
  }
};
TouchInput._onTouchEnd = function(t) {
  for (var e = 0; e < t.changedTouches.length; e++) {
    var r = t.changedTouches[e], s = Graphics.pageToCanvasX(r.pageX), o = Graphics.pageToCanvasY(r.pageY);
    this._screenPressed = !1, this._onRelease(s, o);
  }
};
TouchInput._onTouchCancel = function(t) {
  this._screenPressed = !1;
};
TouchInput._onPointerDown = function(t) {
  if (t.pointerType === "touch" && !t.isPrimary) {
    var e = Graphics.pageToCanvasX(t.pageX), r = Graphics.pageToCanvasY(t.pageY);
    Graphics.isInsideCanvas(e, r) && (this._onCancel(e, r), t.preventDefault());
  }
};
TouchInput._onTrigger = function(t, e) {
  this._events.triggered = !0, this._x = t, this._y = e, this._date = Date.now();
};
TouchInput._onCancel = function(t, e) {
  this._events.cancelled = !0, this._x = t, this._y = e;
};
TouchInput._onMove = function(t, e) {
  this._events.moved = !0, this._x = t, this._y = e;
};
TouchInput._onRelease = function(t, e) {
  this._events.released = !0, this._x = t, this._y = e;
};
const TouchInput$1 = TouchInput;
Sprite = function() {
  this.initialize.apply(this, arguments);
};
Sprite.prototype = Object.create(PIXI.Sprite.prototype);
Sprite.prototype.constructor = Sprite;
Sprite.voidFilter = new PIXI.filters.VoidFilter();
Sprite.prototype.initialize = function(t) {
  var e = new PIXI.Texture(new PIXI.BaseTexture());
  PIXI.Sprite.call(this, e), this._bitmap = null, this._frame = new Rectangle(), this._realFrame = new Rectangle(), this._blendColor = [0, 0, 0, 0], this._colorTone = [0, 0, 0, 0], this._canvas = null, this._context = null, this._tintTexture = null, this._isPicture = !1, this.spriteId = Sprite._counter++, this.opaque = !1, this.bitmap = t;
};
Sprite._counter = 0;
Object.defineProperty(Sprite.prototype, "bitmap", {
  get: function() {
    return this._bitmap;
  },
  set: function(t) {
    this._bitmap !== t && (this._bitmap = t, t ? (this._refreshFrame = !0, t.addLoadListener(this._onBitmapLoad.bind(this))) : (this._refreshFrame = !1, this.texture.frame = Rectangle.emptyRectangle));
  },
  configurable: !0
});
Object.defineProperty(Sprite.prototype, "width", {
  get: function() {
    return this._frame.width;
  },
  set: function(t) {
    this._frame.width = t, this._refresh();
  },
  configurable: !0
});
Object.defineProperty(Sprite.prototype, "height", {
  get: function() {
    return this._frame.height;
  },
  set: function(t) {
    this._frame.height = t, this._refresh();
  },
  configurable: !0
});
Object.defineProperty(Sprite.prototype, "opacity", {
  get: function() {
    return this.alpha * 255;
  },
  set: function(t) {
    this.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
Sprite.prototype.update = function() {
  this.children.forEach(function(t) {
    t.update && t.update();
  });
};
Sprite.prototype.move = function(t, e) {
  this.x = t, this.y = e;
};
Sprite.prototype.setFrame = function(t, e, r, s) {
  this._refreshFrame = !1;
  var o = this._frame;
  (t !== o.x || e !== o.y || r !== o.width || s !== o.height) && (o.x = t, o.y = e, o.width = r, o.height = s, this._refresh());
};
Sprite.prototype.getBlendColor = function() {
  return this._blendColor.clone();
};
Sprite.prototype.setBlendColor = function(t) {
  if (!(t instanceof Array))
    throw new Error("Argument must be an array");
  this._blendColor.equals(t) || (this._blendColor = t.clone(), this._refresh());
};
Sprite.prototype.getColorTone = function() {
  return this._colorTone.clone();
};
Sprite.prototype.setColorTone = function(t) {
  if (!(t instanceof Array))
    throw new Error("Argument must be an array");
  this._colorTone.equals(t) || (this._colorTone = t.clone(), this._refresh());
};
Sprite.prototype._onBitmapLoad = function(t) {
  t === this._bitmap && this._refreshFrame && this._bitmap && (this._refreshFrame = !1, this._frame.width = this._bitmap.width, this._frame.height = this._bitmap.height), this._refresh();
};
Sprite.prototype._refresh = function() {
  var t = Math.floor(this._frame.x), e = Math.floor(this._frame.y), r = Math.floor(this._frame.width), s = Math.floor(this._frame.height), o = this._bitmap ? this._bitmap.width : 0, h = this._bitmap ? this._bitmap.height : 0, p = t.clamp(0, o), c = e.clamp(0, h), u = (r - p + t).clamp(0, o - p), l = (s - c + e).clamp(0, h - c);
  this._realFrame.x = p, this._realFrame.y = c, this._realFrame.width = u, this._realFrame.height = l, this.pivot.x = t - p, this.pivot.y = e - c, u > 0 && l > 0 ? this._needsTint() ? (this._createTinter(u, l), this._executeTint(p, c, u, l), this._tintTexture.update(), this.texture.baseTexture = this._tintTexture, this.texture.frame = new Rectangle(0, 0, u, l)) : (this._bitmap && (this.texture.baseTexture = this._bitmap.baseTexture), this.texture.frame = this._realFrame) : this._bitmap ? this.texture.frame = Rectangle.emptyRectangle : (this.texture.baseTexture.width = Math.max(this.texture.baseTexture.width, this._frame.x + this._frame.width), this.texture.baseTexture.height = Math.max(this.texture.baseTexture.height, this._frame.y + this._frame.height), this.texture.frame = this._frame), this.texture._updateID++;
};
Sprite.prototype._isInBitmapRect = function(t, e, r, s) {
  return this._bitmap && t + r > 0 && e + s > 0 && t < this._bitmap.width && e < this._bitmap.height;
};
Sprite.prototype._needsTint = function() {
  var t = this._colorTone;
  return t[0] || t[1] || t[2] || t[3] || this._blendColor[3] > 0;
};
Sprite.prototype._createTinter = function(t, e) {
  this._canvas || (this._canvas = document.createElement("canvas"), this._context = this._canvas.getContext("2d")), this._canvas.width = t, this._canvas.height = e, this._tintTexture || (this._tintTexture = new PIXI.BaseTexture(this._canvas)), this._tintTexture.width = t, this._tintTexture.height = e, this._tintTexture.scaleMode = this._bitmap.baseTexture.scaleMode;
};
Sprite.prototype._executeTint = function(t, e, r, s) {
  var o = this._context, h = this._colorTone, p = this._blendColor;
  if (o.globalCompositeOperation = "copy", o.drawImage(this._bitmap.canvas, t, e, r, s, 0, 0, r, s), Graphics.canUseSaturationBlend()) {
    var c = Math.max(0, h[3]);
    o.globalCompositeOperation = "saturation", o.fillStyle = "rgba(255,255,255," + c / 255 + ")", o.fillRect(0, 0, r, s);
  }
  var u = Math.max(0, h[0]), l = Math.max(0, h[1]), d = Math.max(0, h[2]);
  if (o.globalCompositeOperation = "lighter", o.fillStyle = Utils.rgbToCssColor(u, l, d), o.fillRect(0, 0, r, s), Graphics.canUseDifferenceBlend()) {
    o.globalCompositeOperation = "difference", o.fillStyle = "white", o.fillRect(0, 0, r, s);
    var f = Math.max(0, -h[0]), _ = Math.max(0, -h[1]), w = Math.max(0, -h[2]);
    o.globalCompositeOperation = "lighter", o.fillStyle = Utils.rgbToCssColor(f, _, w), o.fillRect(0, 0, r, s), o.globalCompositeOperation = "difference", o.fillStyle = "white", o.fillRect(0, 0, r, s);
  }
  var m = Math.max(0, p[0]), g = Math.max(0, p[1]), S = Math.max(0, p[2]), y = Math.max(0, p[3]);
  o.globalCompositeOperation = "source-atop", o.fillStyle = Utils.rgbToCssColor(m, g, S), o.globalAlpha = y / 255, o.fillRect(0, 0, r, s), o.globalCompositeOperation = "destination-in", o.globalAlpha = 1, o.drawImage(this._bitmap.canvas, t, e, r, s, 0, 0, r, s);
};
Sprite.prototype._renderCanvas_PIXI = PIXI.Sprite.prototype._renderCanvas;
Sprite.prototype._renderWebGL_PIXI = PIXI.Sprite.prototype._renderWebGL;
Sprite.prototype._renderCanvas = function(t) {
  this.bitmap && this.bitmap.touch(), !(this.bitmap && !this.bitmap.isReady()) && this.texture.frame.width > 0 && this.texture.frame.height > 0 && this._renderCanvas_PIXI(t);
};
Sprite.prototype._speedUpCustomBlendModes = function(t) {
  var e = t.plugins.picture, r = this.blendMode;
  if (t.renderingToScreen && t._activeRenderTarget.root && e.drawModes[r]) {
    var s = t._lastObjectRendered, o = s._filters;
    (!o || !o[0]) && setTimeout(function() {
      var h = s._filters;
      (!h || !h[0]) && (s.filters = [Sprite.voidFilter], s.filterArea = new PIXI.Rectangle(0, 0, Graphics.width, Graphics.height));
    }, 0);
  }
};
Sprite.prototype._renderWebGL = function(t) {
  this.bitmap && this.bitmap.touch(), !(this.bitmap && !this.bitmap.isReady()) && this.texture.frame.width > 0 && this.texture.frame.height > 0 && (this._bitmap && this._bitmap.checkDirty(), this.calculateVertices(), this.pluginName === "sprite" && this._isPicture ? (this._speedUpCustomBlendModes(t), t.setObjectRenderer(t.plugins.picture), t.plugins.picture.render(this)) : (t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)));
};
const Sprite$1 = Sprite;
Tilemap = function() {
  this.initialize.apply(this, arguments);
};
Tilemap.prototype = Object.create(PIXI.Container.prototype);
Tilemap.prototype.constructor = Tilemap;
Tilemap.prototype.initialize = function() {
  PIXI.Container.call(this), this._margin = 20, this._width = Graphics.width + this._margin * 2, this._height = Graphics.height + this._margin * 2, this._tileWidth = 48, this._tileHeight = 48, this._mapWidth = 0, this._mapHeight = 0, this._mapData = null, this._layerWidth = 0, this._layerHeight = 0, this._lastTiles = [], this.bitmaps = [], this.origin = new Point(), this.flags = [], this.animationCount = 0, this.horizontalWrap = !1, this.verticalWrap = !1, this._createLayers(), this.refresh();
};
Object.defineProperty(Tilemap.prototype, "width", {
  get: function() {
    return this._width;
  },
  set: function(t) {
    this._width !== t && (this._width = t, this._createLayers());
  }
});
Object.defineProperty(Tilemap.prototype, "height", {
  get: function() {
    return this._height;
  },
  set: function(t) {
    this._height !== t && (this._height = t, this._createLayers());
  }
});
Object.defineProperty(Tilemap.prototype, "tileWidth", {
  get: function() {
    return this._tileWidth;
  },
  set: function(t) {
    this._tileWidth !== t && (this._tileWidth = t, this._createLayers());
  }
});
Object.defineProperty(Tilemap.prototype, "tileHeight", {
  get: function() {
    return this._tileHeight;
  },
  set: function(t) {
    this._tileHeight !== t && (this._tileHeight = t, this._createLayers());
  }
});
Tilemap.prototype.setData = function(t, e, r) {
  this._mapWidth = t, this._mapHeight = e, this._mapData = r;
};
Tilemap.prototype.isReady = function() {
  for (var t = 0; t < this.bitmaps.length; t++)
    if (this.bitmaps[t] && !this.bitmaps[t].isReady())
      return !1;
  return !0;
};
Tilemap.prototype.update = function() {
  this.animationCount++, this.animationFrame = Math.floor(this.animationCount / 30), this.children.forEach(function(e) {
    e.update && e.update();
  });
  for (var t = 0; t < this.bitmaps.length; t++)
    this.bitmaps[t] && this.bitmaps[t].touch();
};
Tilemap.prototype.refresh = function() {
  this._lastTiles.length = 0;
};
Tilemap.prototype.refreshTileset = function() {
};
Tilemap.prototype.updateTransform = function() {
  var t = Math.floor(this.origin.x), e = Math.floor(this.origin.y), r = Math.floor((t - this._margin) / this._tileWidth), s = Math.floor((e - this._margin) / this._tileHeight);
  this._updateLayerPositions(r, s), (this._needsRepaint || this._lastAnimationFrame !== this.animationFrame || this._lastStartX !== r || this._lastStartY !== s) && (this._frameUpdated = this._lastAnimationFrame !== this.animationFrame, this._lastAnimationFrame = this.animationFrame, this._lastStartX = r, this._lastStartY = s, this._paintAllTiles(r, s), this._needsRepaint = !1), this._sortChildren(), PIXI.Container.prototype.updateTransform.call(this);
};
Tilemap.prototype._createLayers = function() {
  var t = this._width, e = this._height, r = this._margin, s = Math.ceil(t / this._tileWidth) + 1, o = Math.ceil(e / this._tileHeight) + 1, h = s * this._tileWidth, p = o * this._tileHeight;
  this._lowerBitmap = new Bitmap(h, p), this._upperBitmap = new Bitmap(h, p), this._layerWidth = h, this._layerHeight = p, this._lowerLayer = new Sprite(), this._lowerLayer.move(-r, -r, t, e), this._lowerLayer.z = 0, this._upperLayer = new Sprite(), this._upperLayer.move(-r, -r, t, e), this._upperLayer.z = 4;
  for (var c = 0; c < 4; c++)
    this._lowerLayer.addChild(new Sprite(this._lowerBitmap)), this._upperLayer.addChild(new Sprite(this._upperBitmap));
  this.addChild(this._lowerLayer), this.addChild(this._upperLayer);
};
Tilemap.prototype._updateLayerPositions = function(t, e) {
  for (var r = this._margin, s = Math.floor(this.origin.x), o = Math.floor(this.origin.y), h = (s - r).mod(this._layerWidth), p = (o - r).mod(this._layerHeight), c = this._layerWidth - h, u = this._layerHeight - p, l = this._width - c, d = this._height - u, f = 0; f < 2; f++) {
    var _;
    f === 0 ? _ = this._lowerLayer.children : _ = this._upperLayer.children, _[0].move(0, 0, c, u), _[0].setFrame(h, p, c, u), _[1].move(c, 0, l, u), _[1].setFrame(0, p, l, u), _[2].move(0, u, c, d), _[2].setFrame(h, 0, c, d), _[3].move(c, u, l, d), _[3].setFrame(0, 0, l, d);
  }
};
Tilemap.prototype._paintAllTiles = function(t, e) {
  for (var r = Math.ceil(this._width / this._tileWidth) + 1, s = Math.ceil(this._height / this._tileHeight) + 1, o = 0; o < s; o++)
    for (var h = 0; h < r; h++)
      this._paintTiles(t, e, h, o);
};
Tilemap.prototype._paintTiles = function(t, e, r, s) {
  var o = 1e4, h = t + r, p = e + s, c = (h * this._tileWidth).mod(this._layerWidth), u = (p * this._tileHeight).mod(this._layerHeight), l = c / this._tileWidth, d = u / this._tileHeight, f = this._readMapData(h, p, 0), _ = this._readMapData(h, p, 1), w = this._readMapData(h, p, 2), m = this._readMapData(h, p, 3), g = this._readMapData(h, p, 4), S = this._readMapData(h, p - 1, 1), y = [], M = [];
  this._isHigherTile(f) ? M.push(f) : y.push(f), this._isHigherTile(_) ? M.push(_) : y.push(_), y.push(-g), this._isTableTile(S) && !this._isTableTile(_) && (Tilemap.isShadowingTile(f) || y.push(o + S)), this._isOverpassPosition(h, p) ? (M.push(w), M.push(m)) : (this._isHigherTile(w) ? M.push(w) : y.push(w), this._isHigherTile(m) ? M.push(m) : y.push(m));
  var W = this._readLastTiles(0, l, d);
  if (!y.equals(W) || Tilemap.isTileA1(f) && this._frameUpdated) {
    this._lowerBitmap.clearRect(c, u, this._tileWidth, this._tileHeight);
    for (var T = 0; T < y.length; T++) {
      var G = y[T];
      G < 0 ? this._drawShadow(this._lowerBitmap, g, c, u) : G >= o ? this._drawTableEdge(this._lowerBitmap, S, c, u) : this._drawTile(this._lowerBitmap, G, c, u);
    }
    this._writeLastTiles(0, l, d, y);
  }
  var I = this._readLastTiles(1, l, d);
  if (!M.equals(I)) {
    this._upperBitmap.clearRect(c, u, this._tileWidth, this._tileHeight);
    for (var B = 0; B < M.length; B++)
      this._drawTile(this._upperBitmap, M[B], c, u);
    this._writeLastTiles(1, l, d, M);
  }
};
Tilemap.prototype._readLastTiles = function(t, e, r) {
  var s = this._lastTiles[t];
  if (s) {
    var o = s[r];
    if (o) {
      var h = o[e];
      if (h)
        return h;
    }
  }
  return [];
};
Tilemap.prototype._writeLastTiles = function(t, e, r, s) {
  var o = this._lastTiles[t];
  o || (o = this._lastTiles[t] = []);
  var h = o[r];
  h || (h = o[r] = []), h[e] = s;
};
Tilemap.prototype._drawTile = function(t, e, r, s) {
  Tilemap.isVisibleTile(e) && (Tilemap.isAutotile(e) ? this._drawAutotile(t, e, r, s) : this._drawNormalTile(t, e, r, s));
};
Tilemap.prototype._drawNormalTile = function(t, e, r, s) {
  var o = 0;
  Tilemap.isTileA5(e) ? o = 4 : o = 5 + Math.floor(e / 256);
  var h = this._tileWidth, p = this._tileHeight, c = (Math.floor(e / 128) % 2 * 8 + e % 8) * h, u = Math.floor(e % 256 / 8) % 16 * p, l = this.bitmaps[o];
  l && t.bltImage(l, c, u, h, p, r, s, h, p);
};
Tilemap.prototype._drawAutotile = function(t, e, r, s) {
  var o = Tilemap.FLOOR_AUTOTILE_TABLE, h = Tilemap.getAutotileKind(e), p = Tilemap.getAutotileShape(e), c = h % 8, u = Math.floor(h / 8), l = 0, d = 0, f = 0, _ = !1;
  if (Tilemap.isTileA1(e)) {
    var w = [0, 1, 2, 1][this.animationFrame % 4];
    f = 0, h === 0 ? (l = w * 2, d = 0) : h === 1 ? (l = w * 2, d = 3) : h === 2 ? (l = 6, d = 0) : h === 3 ? (l = 6, d = 3) : (l = Math.floor(c / 4) * 8, d = u * 6 + Math.floor(c / 2) % 2 * 3, h % 2 === 0 ? l += w * 2 : (l += 6, o = Tilemap.WATERFALL_AUTOTILE_TABLE, d += this.animationFrame % 3));
  } else Tilemap.isTileA2(e) ? (f = 1, l = c * 2, d = (u - 2) * 3, _ = this._isTableTile(e)) : Tilemap.isTileA3(e) ? (f = 2, l = c * 2, d = (u - 6) * 2, o = Tilemap.WALL_AUTOTILE_TABLE) : Tilemap.isTileA4(e) && (f = 3, l = c * 2, d = Math.floor((u - 10) * 2.5 + (u % 2 === 1 ? 0.5 : 0)), u % 2 === 1 && (o = Tilemap.WALL_AUTOTILE_TABLE));
  var m = o[p], g = this.bitmaps[f];
  if (m && g)
    for (var S = this._tileWidth / 2, y = this._tileHeight / 2, M = 0; M < 4; M++) {
      var W = m[M][0], T = m[M][1], G = (l * 2 + W) * S, I = (d * 2 + T) * y, B = r + M % 2 * S, C = s + Math.floor(M / 2) * y;
      if (_ && (T === 1 || T === 5)) {
        var A = W, E = 3;
        T === 1 && (A = [0, 3, 2, 1][W]);
        var k = (l * 2 + A) * S, x = (d * 2 + E) * y;
        t.bltImage(g, k, x, S, y, B, C, S, y), C += y / 2, t.bltImage(g, G, I, S, y / 2, B, C, S, y / 2);
      } else
        t.bltImage(g, G, I, S, y, B, C, S, y);
    }
};
Tilemap.prototype._drawTableEdge = function(t, e, r, s) {
  if (Tilemap.isTileA2(e)) {
    var o = Tilemap.FLOOR_AUTOTILE_TABLE, h = Tilemap.getAutotileKind(e), p = Tilemap.getAutotileShape(e), c = h % 8, u = Math.floor(h / 8), l = 1, d = c * 2, f = (u - 2) * 3, _ = o[p];
    if (_)
      for (var w = this.bitmaps[l], m = this._tileWidth / 2, g = this._tileHeight / 2, S = 0; S < 2; S++) {
        var y = _[2 + S][0], M = _[2 + S][1], W = (d * 2 + y) * m, T = (f * 2 + M) * g + g / 2, G = r + S % 2 * m, I = s + Math.floor(S / 2) * g;
        t.bltImage(w, W, T, m, g / 2, G, I, m, g / 2);
      }
  }
};
Tilemap.prototype._drawShadow = function(t, e, r, s) {
  if (e & 15) {
    for (var o = this._tileWidth / 2, h = this._tileHeight / 2, p = "rgba(0,0,0,0.5)", c = 0; c < 4; c++)
      if (e & 1 << c) {
        var u = r + c % 2 * o, l = s + Math.floor(c / 2) * h;
        t.fillRect(u, l, o, h, p);
      }
  }
};
Tilemap.prototype._readMapData = function(t, e, r) {
  if (this._mapData) {
    var s = this._mapWidth, o = this._mapHeight;
    return this.horizontalWrap && (t = t.mod(s)), this.verticalWrap && (e = e.mod(o)), t >= 0 && t < s && e >= 0 && e < o && this._mapData[(r * o + e) * s + t] || 0;
  } else
    return 0;
};
Tilemap.prototype._isHigherTile = function(t) {
  return this.flags[t] & 16;
};
Tilemap.prototype._isTableTile = function(t) {
  return Tilemap.isTileA2(t) && this.flags[t] & 128;
};
Tilemap.prototype._isOverpassPosition = function(t, e) {
  return !1;
};
Tilemap.prototype._sortChildren = function() {
  this.children.sort(this._compareChildOrder.bind(this));
};
Tilemap.prototype._compareChildOrder = function(t, e) {
  return t.z !== e.z ? t.z - e.z : t.y !== e.y ? t.y - e.y : t.spriteId - e.spriteId;
};
Tilemap.TILE_ID_B = 0;
Tilemap.TILE_ID_C = 256;
Tilemap.TILE_ID_D = 512;
Tilemap.TILE_ID_E = 768;
Tilemap.TILE_ID_A5 = 1536;
Tilemap.TILE_ID_A1 = 2048;
Tilemap.TILE_ID_A2 = 2816;
Tilemap.TILE_ID_A3 = 4352;
Tilemap.TILE_ID_A4 = 5888;
Tilemap.TILE_ID_MAX = 8192;
Tilemap.isVisibleTile = function(t) {
  return t > 0 && t < this.TILE_ID_MAX;
};
Tilemap.isAutotile = function(t) {
  return t >= this.TILE_ID_A1;
};
Tilemap.getAutotileKind = function(t) {
  return Math.floor((t - this.TILE_ID_A1) / 48);
};
Tilemap.getAutotileShape = function(t) {
  return (t - this.TILE_ID_A1) % 48;
};
Tilemap.makeAutotileId = function(t, e) {
  return this.TILE_ID_A1 + t * 48 + e;
};
Tilemap.isSameKindTile = function(t, e) {
  return this.isAutotile(t) && this.isAutotile(e) ? this.getAutotileKind(t) === this.getAutotileKind(e) : t === e;
};
Tilemap.isTileA1 = function(t) {
  return t >= this.TILE_ID_A1 && t < this.TILE_ID_A2;
};
Tilemap.isTileA2 = function(t) {
  return t >= this.TILE_ID_A2 && t < this.TILE_ID_A3;
};
Tilemap.isTileA3 = function(t) {
  return t >= this.TILE_ID_A3 && t < this.TILE_ID_A4;
};
Tilemap.isTileA4 = function(t) {
  return t >= this.TILE_ID_A4 && t < this.TILE_ID_MAX;
};
Tilemap.isTileA5 = function(t) {
  return t >= this.TILE_ID_A5 && t < this.TILE_ID_A1;
};
Tilemap.isWaterTile = function(t) {
  return this.isTileA1(t) ? !(t >= this.TILE_ID_A1 + 96 && t < this.TILE_ID_A1 + 192) : !1;
};
Tilemap.isWaterfallTile = function(t) {
  return t >= this.TILE_ID_A1 + 192 && t < this.TILE_ID_A2 ? this.getAutotileKind(t) % 2 === 1 : !1;
};
Tilemap.isGroundTile = function(t) {
  return this.isTileA1(t) || this.isTileA2(t) || this.isTileA5(t);
};
Tilemap.isShadowingTile = function(t) {
  return this.isTileA3(t) || this.isTileA4(t);
};
Tilemap.isRoofTile = function(t) {
  return this.isTileA3(t) && this.getAutotileKind(t) % 16 < 8;
};
Tilemap.isWallTopTile = function(t) {
  return this.isTileA4(t) && this.getAutotileKind(t) % 16 < 8;
};
Tilemap.isWallSideTile = function(t) {
  return (this.isTileA3(t) || this.isTileA4(t)) && this.getAutotileKind(t) % 16 >= 8;
};
Tilemap.isWallTile = function(t) {
  return this.isWallTopTile(t) || this.isWallSideTile(t);
};
Tilemap.isFloorTypeAutotile = function(t) {
  return this.isTileA1(t) && !this.isWaterfallTile(t) || this.isTileA2(t) || this.isWallTopTile(t);
};
Tilemap.isWallTypeAutotile = function(t) {
  return this.isRoofTile(t) || this.isWallSideTile(t);
};
Tilemap.isWaterfallTypeAutotile = function(t) {
  return this.isWaterfallTile(t);
};
Tilemap.FLOOR_AUTOTILE_TABLE = [
  [[2, 4], [1, 4], [2, 3], [1, 3]],
  [[2, 0], [1, 4], [2, 3], [1, 3]],
  [[2, 4], [3, 0], [2, 3], [1, 3]],
  [[2, 0], [3, 0], [2, 3], [1, 3]],
  [[2, 4], [1, 4], [2, 3], [3, 1]],
  [[2, 0], [1, 4], [2, 3], [3, 1]],
  [[2, 4], [3, 0], [2, 3], [3, 1]],
  [[2, 0], [3, 0], [2, 3], [3, 1]],
  [[2, 4], [1, 4], [2, 1], [1, 3]],
  [[2, 0], [1, 4], [2, 1], [1, 3]],
  [[2, 4], [3, 0], [2, 1], [1, 3]],
  [[2, 0], [3, 0], [2, 1], [1, 3]],
  [[2, 4], [1, 4], [2, 1], [3, 1]],
  [[2, 0], [1, 4], [2, 1], [3, 1]],
  [[2, 4], [3, 0], [2, 1], [3, 1]],
  [[2, 0], [3, 0], [2, 1], [3, 1]],
  [[0, 4], [1, 4], [0, 3], [1, 3]],
  [[0, 4], [3, 0], [0, 3], [1, 3]],
  [[0, 4], [1, 4], [0, 3], [3, 1]],
  [[0, 4], [3, 0], [0, 3], [3, 1]],
  [[2, 2], [1, 2], [2, 3], [1, 3]],
  [[2, 2], [1, 2], [2, 3], [3, 1]],
  [[2, 2], [1, 2], [2, 1], [1, 3]],
  [[2, 2], [1, 2], [2, 1], [3, 1]],
  [[2, 4], [3, 4], [2, 3], [3, 3]],
  [[2, 4], [3, 4], [2, 1], [3, 3]],
  [[2, 0], [3, 4], [2, 3], [3, 3]],
  [[2, 0], [3, 4], [2, 1], [3, 3]],
  [[2, 4], [1, 4], [2, 5], [1, 5]],
  [[2, 0], [1, 4], [2, 5], [1, 5]],
  [[2, 4], [3, 0], [2, 5], [1, 5]],
  [[2, 0], [3, 0], [2, 5], [1, 5]],
  [[0, 4], [3, 4], [0, 3], [3, 3]],
  [[2, 2], [1, 2], [2, 5], [1, 5]],
  [[0, 2], [1, 2], [0, 3], [1, 3]],
  [[0, 2], [1, 2], [0, 3], [3, 1]],
  [[2, 2], [3, 2], [2, 3], [3, 3]],
  [[2, 2], [3, 2], [2, 1], [3, 3]],
  [[2, 4], [3, 4], [2, 5], [3, 5]],
  [[2, 0], [3, 4], [2, 5], [3, 5]],
  [[0, 4], [1, 4], [0, 5], [1, 5]],
  [[0, 4], [3, 0], [0, 5], [1, 5]],
  [[0, 2], [3, 2], [0, 3], [3, 3]],
  [[0, 2], [1, 2], [0, 5], [1, 5]],
  [[0, 4], [3, 4], [0, 5], [3, 5]],
  [[2, 2], [3, 2], [2, 5], [3, 5]],
  [[0, 2], [3, 2], [0, 5], [3, 5]],
  [[0, 0], [1, 0], [0, 1], [1, 1]]
];
Tilemap.WALL_AUTOTILE_TABLE = [
  [[2, 2], [1, 2], [2, 1], [1, 1]],
  [[0, 2], [1, 2], [0, 1], [1, 1]],
  [[2, 0], [1, 0], [2, 1], [1, 1]],
  [[0, 0], [1, 0], [0, 1], [1, 1]],
  [[2, 2], [3, 2], [2, 1], [3, 1]],
  [[0, 2], [3, 2], [0, 1], [3, 1]],
  [[2, 0], [3, 0], [2, 1], [3, 1]],
  [[0, 0], [3, 0], [0, 1], [3, 1]],
  [[2, 2], [1, 2], [2, 3], [1, 3]],
  [[0, 2], [1, 2], [0, 3], [1, 3]],
  [[2, 0], [1, 0], [2, 3], [1, 3]],
  [[0, 0], [1, 0], [0, 3], [1, 3]],
  [[2, 2], [3, 2], [2, 3], [3, 3]],
  [[0, 2], [3, 2], [0, 3], [3, 3]],
  [[2, 0], [3, 0], [2, 3], [3, 3]],
  [[0, 0], [3, 0], [0, 3], [3, 3]]
];
Tilemap.WATERFALL_AUTOTILE_TABLE = [
  [[2, 0], [1, 0], [2, 1], [1, 1]],
  [[0, 0], [1, 0], [0, 1], [1, 1]],
  [[2, 0], [3, 0], [2, 1], [3, 1]],
  [[0, 0], [3, 0], [0, 1], [3, 1]]
];
const Tilemap$1 = Tilemap;
TilingSprite = function() {
  this.initialize.apply(this, arguments);
};
TilingSprite.prototype = Object.create(PIXI.extras.PictureTilingSprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;
TilingSprite.prototype.initialize = function(t) {
  var e = new PIXI.Texture(new PIXI.BaseTexture());
  PIXI.extras.PictureTilingSprite.call(this, e), this._bitmap = null, this._width = 0, this._height = 0, this._frame = new Rectangle(), this.spriteId = Sprite._counter++, this.origin = new Point(), this.bitmap = t;
};
TilingSprite.prototype._renderCanvas_PIXI = PIXI.extras.PictureTilingSprite.prototype._renderCanvas;
TilingSprite.prototype._renderWebGL_PIXI = PIXI.extras.PictureTilingSprite.prototype._renderWebGL;
TilingSprite.prototype._renderCanvas = function(t) {
  this._bitmap && this._bitmap.touch(), this.texture.frame.width > 0 && this.texture.frame.height > 0 && this._renderCanvas_PIXI(t);
};
TilingSprite.prototype._renderWebGL = function(t) {
  this._bitmap && this._bitmap.touch(), this.texture.frame.width > 0 && this.texture.frame.height > 0 && (this._bitmap && this._bitmap.checkDirty(), this._renderWebGL_PIXI(t));
};
Object.defineProperty(TilingSprite.prototype, "bitmap", {
  get: function() {
    return this._bitmap;
  },
  set: function(t) {
    this._bitmap !== t && (this._bitmap = t, this._bitmap ? this._bitmap.addLoadListener(this._onBitmapLoad.bind(this)) : this.texture.frame = Rectangle.emptyRectangle);
  },
  configurable: !0
});
Object.defineProperty(TilingSprite.prototype, "opacity", {
  get: function() {
    return this.alpha * 255;
  },
  set: function(t) {
    this.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
TilingSprite.prototype.update = function() {
  this.children.forEach(function(t) {
    t.update && t.update();
  });
};
TilingSprite.prototype.move = function(t, e, r, s) {
  this.x = t || 0, this.y = e || 0, this._width = r || 0, this._height = s || 0;
};
TilingSprite.prototype.setFrame = function(t, e, r, s) {
  this._frame.x = t, this._frame.y = e, this._frame.width = r, this._frame.height = s, this._refresh();
};
TilingSprite.prototype.updateTransform = function() {
  this.tilePosition.x = Math.round(-this.origin.x), this.tilePosition.y = Math.round(-this.origin.y), this.updateTransformTS();
};
TilingSprite.prototype.updateTransformTS = PIXI.extras.TilingSprite.prototype.updateTransform;
TilingSprite.prototype._onBitmapLoad = function() {
  this.texture.baseTexture = this._bitmap.baseTexture, this._refresh();
};
TilingSprite.prototype._refresh = function() {
  var t = this._frame.clone();
  t.width === 0 && t.height === 0 && this._bitmap && (t.width = this._bitmap.width, t.height = this._bitmap.height), this.texture.frame = t, this.texture._updateID++, this.tilingTexture = null;
};
TilingSprite.prototype._speedUpCustomBlendModes = Sprite.prototype._speedUpCustomBlendModes;
TilingSprite.prototype._renderWebGL = function(t) {
  this._bitmap && (this._bitmap.touch(), this._bitmap.checkDirty()), this._speedUpCustomBlendModes(t), this._renderWebGL_PIXI(t);
};
const TilingSprite$1 = TilingSprite;
ScreenSprite = function() {
  this.initialize.apply(this, arguments);
};
ScreenSprite.prototype = Object.create(PIXI.Container.prototype);
ScreenSprite.prototype.constructor = ScreenSprite;
ScreenSprite.prototype.initialize = function() {
  PIXI.Container.call(this), this._graphics = new PIXI.Graphics(), this.addChild(this._graphics), this.opacity = 0, this._red = -1, this._green = -1, this._blue = -1, this._colorText = "", this.setBlack();
};
Object.defineProperty(ScreenSprite.prototype, "opacity", {
  get: function() {
    return this.alpha * 255;
  },
  set: function(t) {
    this.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
ScreenSprite.YEPWarned = !1;
ScreenSprite.warnYep = function() {
  ScreenSprite.YEPWarned || (console.log("Deprecation warning. Please update YEP_CoreEngine. ScreenSprite is not a sprite, it has graphics inside."), ScreenSprite.YEPWarned = !0);
};
Object.defineProperty(ScreenSprite.prototype, "anchor", {
  get: function() {
    return ScreenSprite.warnYep(), this.scale.x = 1, this.scale.y = 1, { x: 0, y: 0 };
  },
  set: function(t) {
    this.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
Object.defineProperty(ScreenSprite.prototype, "blendMode", {
  get: function() {
    return this._graphics.blendMode;
  },
  set: function(t) {
    this._graphics.blendMode = t;
  },
  configurable: !0
});
ScreenSprite.prototype.setBlack = function() {
  this.setColor(0, 0, 0);
};
ScreenSprite.prototype.setWhite = function() {
  this.setColor(255, 255, 255);
};
ScreenSprite.prototype.setColor = function(t, e, r) {
  if (this._red !== t || this._green !== e || this._blue !== r) {
    t = Math.round(t || 0).clamp(0, 255), e = Math.round(e || 0).clamp(0, 255), r = Math.round(r || 0).clamp(0, 255), this._red = t, this._green = e, this._blue = r, this._colorText = Utils.rgbToCssColor(t, e, r);
    var s = this._graphics;
    s.clear();
    var o = t << 16 | e << 8 | r;
    s.beginFill(o, 1), s.drawRect(-Graphics.width * 5, -Graphics.height * 5, Graphics.width * 10, Graphics.height * 10);
  }
};
const ScreenSprite$1 = ScreenSprite;
ShaderTilemap = function() {
  Tilemap.apply(this, arguments), this.roundPixels = !0;
};
ShaderTilemap.prototype = Object.create(Tilemap.prototype);
ShaderTilemap.prototype.constructor = ShaderTilemap;
PIXI.glCore.VertexArrayObject.FORCE_NATIVE = !0;
PIXI.settings.GC_MODE = PIXI.GC_MODES.AUTO;
PIXI.tilemap.TileRenderer.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.tilemap.TileRenderer.DO_CLEAR = !0;
ShaderTilemap.prototype._hackRenderer = function(t) {
  var e = this.animationFrame % 4;
  return e == 3 && (e = 1), t.plugins.tilemap.tileAnim[0] = e * this._tileWidth, t.plugins.tilemap.tileAnim[1] = this.animationFrame % 3 * this._tileHeight, t;
};
ShaderTilemap.prototype.renderCanvas = function(t) {
  this._hackRenderer(t), PIXI.Container.prototype.renderCanvas.call(this, t);
};
ShaderTilemap.prototype.renderWebGL = function(t) {
  this._hackRenderer(t), PIXI.Container.prototype.renderWebGL.call(this, t);
};
ShaderTilemap.prototype.refresh = function() {
  this._lastBitmapLength !== this.bitmaps.length && (this._lastBitmapLength = this.bitmaps.length, this.refreshTileset()), this._needsRepaint = !0;
};
ShaderTilemap.prototype.refreshTileset = function() {
  var t = this.bitmaps.map(function(e) {
    return e._baseTexture ? new PIXI.Texture(e._baseTexture) : e;
  });
  this.lowerLayer.setBitmaps(t), this.upperLayer.setBitmaps(t);
};
ShaderTilemap.prototype.updateTransform = function() {
  if (this.roundPixels)
    var t = Math.floor(this.origin.x), e = Math.floor(this.origin.y);
  else
    t = this.origin.x, e = this.origin.y;
  var r = Math.floor((t - this._margin) / this._tileWidth), s = Math.floor((e - this._margin) / this._tileHeight);
  this._updateLayerPositions(r, s), (this._needsRepaint || this._lastStartX !== r || this._lastStartY !== s) && (this._lastStartX = r, this._lastStartY = s, this._paintAllTiles(r, s), this._needsRepaint = !1), this._sortChildren(), PIXI.Container.prototype.updateTransform.call(this);
};
ShaderTilemap.prototype._createLayers = function() {
  var t = this._width, e = this._height, r = this._margin, s = Math.ceil(t / this._tileWidth) + 1, o = Math.ceil(e / this._tileHeight) + 1, h = this._layerWidth = s * this._tileWidth, p = this._layerHeight = o * this._tileHeight;
  if (this._needsRepaint = !0, !this.lowerZLayer) {
    this.addChild(this.lowerZLayer = new PIXI.tilemap.ZLayer(this, 0)), this.addChild(this.upperZLayer = new PIXI.tilemap.ZLayer(this, 4));
    var c = PluginManager.parameters("ShaderTilemap"), u = Number(c.hasOwnProperty("squareShader") ? c.squareShader : 0);
    this.lowerZLayer.addChild(this.lowerLayer = new PIXI.tilemap.CompositeRectTileLayer(0, [], u)), this.lowerLayer.shadowColor = new Float32Array([0, 0, 0, 0.5]), this.upperZLayer.addChild(this.upperLayer = new PIXI.tilemap.CompositeRectTileLayer(4, [], u));
  }
};
ShaderTilemap.prototype._updateLayerPositions = function(t, e) {
  if (this.roundPixels)
    var r = Math.floor(this.origin.x), s = Math.floor(this.origin.y);
  else
    r = this.origin.x, s = this.origin.y;
  this.lowerZLayer.position.x = t * this._tileWidth - r, this.lowerZLayer.position.y = e * this._tileHeight - s, this.upperZLayer.position.x = t * this._tileWidth - r, this.upperZLayer.position.y = e * this._tileHeight - s;
};
ShaderTilemap.prototype._paintAllTiles = function(t, e) {
  this.lowerZLayer.clear(), this.upperZLayer.clear();
  for (var r = Math.ceil(this._width / this._tileWidth) + 1, s = Math.ceil(this._height / this._tileHeight) + 1, o = 0; o < s; o++)
    for (var h = 0; h < r; h++)
      this._paintTiles(t, e, h, o);
};
ShaderTilemap.prototype._paintTiles = function(t, e, r, s) {
  var o = t + r, h = e + s, p = r * this._tileWidth, c = s * this._tileHeight, u = this._readMapData(o, h, 0), l = this._readMapData(o, h, 1), d = this._readMapData(o, h, 2), f = this._readMapData(o, h, 3), _ = this._readMapData(o, h, 4), w = this._readMapData(o, h - 1, 1), m = this.lowerLayer.children[0], g = this.upperLayer.children[0];
  this._isHigherTile(u) ? this._drawTile(g, u, p, c) : this._drawTile(m, u, p, c), this._isHigherTile(l) ? this._drawTile(g, l, p, c) : this._drawTile(m, l, p, c), this._drawShadow(m, _, p, c), this._isTableTile(w) && !this._isTableTile(l) && (Tilemap.isShadowingTile(u) || this._drawTableEdge(m, w, p, c)), this._isOverpassPosition(o, h) ? (this._drawTile(g, d, p, c), this._drawTile(g, f, p, c)) : (this._isHigherTile(d) ? this._drawTile(g, d, p, c) : this._drawTile(m, d, p, c), this._isHigherTile(f) ? this._drawTile(g, f, p, c) : this._drawTile(m, f, p, c));
};
ShaderTilemap.prototype._drawTile = function(t, e, r, s) {
  Tilemap.isVisibleTile(e) && (Tilemap.isAutotile(e) ? this._drawAutotile(t, e, r, s) : this._drawNormalTile(t, e, r, s));
};
ShaderTilemap.prototype._drawNormalTile = function(t, e, r, s) {
  var o = 0;
  Tilemap.isTileA5(e) ? o = 4 : o = 5 + Math.floor(e / 256);
  var h = this._tileWidth, p = this._tileHeight, c = (Math.floor(e / 128) % 2 * 8 + e % 8) * h, u = Math.floor(e % 256 / 8) % 16 * p;
  t.addRect(o, c, u, r, s, h, p);
};
ShaderTilemap.prototype._drawAutotile = function(t, e, r, s) {
  var o = Tilemap.FLOOR_AUTOTILE_TABLE, h = Tilemap.getAutotileKind(e), p = Tilemap.getAutotileShape(e), c = h % 8, u = Math.floor(h / 8), l = 0, d = 0, f = 0, _ = !1, w = 0, m = 0;
  Tilemap.isTileA1(e) ? (f = 0, h === 0 ? (w = 2, d = 0) : h === 1 ? (w = 2, d = 3) : h === 2 ? (l = 6, d = 0) : h === 3 ? (l = 6, d = 3) : (l = Math.floor(c / 4) * 8, d = u * 6 + Math.floor(c / 2) % 2 * 3, h % 2 === 0 ? w = 2 : (l += 6, o = Tilemap.WATERFALL_AUTOTILE_TABLE, m = 1))) : Tilemap.isTileA2(e) ? (f = 1, l = c * 2, d = (u - 2) * 3, _ = this._isTableTile(e)) : Tilemap.isTileA3(e) ? (f = 2, l = c * 2, d = (u - 6) * 2, o = Tilemap.WALL_AUTOTILE_TABLE) : Tilemap.isTileA4(e) && (f = 3, l = c * 2, d = Math.floor((u - 10) * 2.5 + (u % 2 === 1 ? 0.5 : 0)), u % 2 === 1 && (o = Tilemap.WALL_AUTOTILE_TABLE));
  for (var g = o[p], S = this._tileWidth / 2, y = this._tileHeight / 2, M = 0; M < 4; M++) {
    var W = g[M][0], T = g[M][1], G = (l * 2 + W) * S, I = (d * 2 + T) * y, B = r + M % 2 * S, C = s + Math.floor(M / 2) * y;
    if (_ && (T === 1 || T === 5)) {
      var A = W, E = 3;
      T === 1 && (A = (4 - W) % 4);
      var k = (l * 2 + A) * S, x = (d * 2 + E) * y;
      t.addRect(f, k, x, B, C, S, y, w, m), t.addRect(f, G, I, B, C + y / 2, S, y / 2, w, m);
    } else
      t.addRect(f, G, I, B, C, S, y, w, m);
  }
};
ShaderTilemap.prototype._drawTableEdge = function(t, e, r, s) {
  if (Tilemap.isTileA2(e))
    for (var o = Tilemap.FLOOR_AUTOTILE_TABLE, h = Tilemap.getAutotileKind(e), p = Tilemap.getAutotileShape(e), c = h % 8, u = Math.floor(h / 8), l = 1, d = c * 2, f = (u - 2) * 3, _ = o[p], w = this._tileWidth / 2, m = this._tileHeight / 2, g = 0; g < 2; g++) {
      var S = _[2 + g][0], y = _[2 + g][1], M = (d * 2 + S) * w, W = (f * 2 + y) * m + m / 2, T = r + g % 2 * w, G = s + Math.floor(g / 2) * m;
      t.addRect(l, M, W, T, G, w, m / 2);
    }
};
ShaderTilemap.prototype._drawShadow = function(t, e, r, s) {
  if (e & 15) {
    for (var o = this._tileWidth / 2, h = this._tileHeight / 2, p = 0; p < 4; p++)
      if (e & 1 << p) {
        var c = r + p % 2 * o, u = s + Math.floor(p / 2) * h;
        t.addRect(-1, 0, 0, c, u, o, h);
      }
  }
};
const ShaderTilemap$1 = ShaderTilemap;
Window = function() {
  this.initialize.apply(this, arguments);
};
Window.prototype = Object.create(PIXI.Container.prototype);
Window.prototype.constructor = Window;
Window.prototype.initialize = function() {
  PIXI.Container.call(this), this._isWindow = !0, this._windowskin = null, this._width = 0, this._height = 0, this._cursorRect = new Rectangle(), this._openness = 255, this._animationCount = 0, this._padding = 18, this._margin = 4, this._colorTone = [0, 0, 0], this._windowSpriteContainer = null, this._windowBackSprite = null, this._windowCursorSprite = null, this._windowFrameSprite = null, this._windowContentsSprite = null, this._windowArrowSprites = [], this._windowPauseSignSprite = null, this._createAllParts(), this.origin = new Point(), this.active = !0, this.downArrowVisible = !1, this.upArrowVisible = !1, this.pause = !1;
};
Object.defineProperty(Window.prototype, "windowskin", {
  get: function() {
    return this._windowskin;
  },
  set: function(t) {
    this._windowskin !== t && (this._windowskin = t, this._windowskin.addLoadListener(this._onWindowskinLoad.bind(this)));
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "contents", {
  get: function() {
    return this._windowContentsSprite.bitmap;
  },
  set: function(t) {
    this._windowContentsSprite.bitmap = t;
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "width", {
  get: function() {
    return this._width;
  },
  set: function(t) {
    this._width = t, this._refreshAllParts();
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "height", {
  get: function() {
    return this._height;
  },
  set: function(t) {
    this._height = t, this._refreshAllParts();
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "padding", {
  get: function() {
    return this._padding;
  },
  set: function(t) {
    this._padding = t, this._refreshAllParts();
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "margin", {
  get: function() {
    return this._margin;
  },
  set: function(t) {
    this._margin = t, this._refreshAllParts();
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "opacity", {
  get: function() {
    return this._windowSpriteContainer.alpha * 255;
  },
  set: function(t) {
    this._windowSpriteContainer.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "backOpacity", {
  get: function() {
    return this._windowBackSprite.alpha * 255;
  },
  set: function(t) {
    this._windowBackSprite.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "contentsOpacity", {
  get: function() {
    return this._windowContentsSprite.alpha * 255;
  },
  set: function(t) {
    this._windowContentsSprite.alpha = t.clamp(0, 255) / 255;
  },
  configurable: !0
});
Object.defineProperty(Window.prototype, "openness", {
  get: function() {
    return this._openness;
  },
  set: function(t) {
    this._openness !== t && (this._openness = t.clamp(0, 255), this._windowSpriteContainer.scale.y = this._openness / 255, this._windowSpriteContainer.y = this.height / 2 * (1 - this._openness / 255));
  },
  configurable: !0
});
Window.prototype.update = function() {
  this.active && this._animationCount++, this.children.forEach(function(t) {
    t.update && t.update();
  });
};
Window.prototype.move = function(t, e, r, s) {
  this.x = t || 0, this.y = e || 0, (this._width !== r || this._height !== s) && (this._width = r || 0, this._height = s || 0, this._refreshAllParts());
};
Window.prototype.isOpen = function() {
  return this._openness >= 255;
};
Window.prototype.isClosed = function() {
  return this._openness <= 0;
};
Window.prototype.setCursorRect = function(t, e, r, s) {
  var o = Math.floor(t || 0), h = Math.floor(e || 0), p = Math.floor(r || 0), c = Math.floor(s || 0), u = this._cursorRect;
  (u.x !== o || u.y !== h || u.width !== p || u.height !== c) && (this._cursorRect.x = o, this._cursorRect.y = h, this._cursorRect.width = p, this._cursorRect.height = c, this._refreshCursor());
};
Window.prototype.setTone = function(t, e, r) {
  var s = this._colorTone;
  (t !== s[0] || e !== s[1] || r !== s[2]) && (this._colorTone = [t, e, r], this._refreshBack());
};
Window.prototype.addChildToBack = function(t) {
  var e = this.children.indexOf(this._windowSpriteContainer);
  return this.addChildAt(t, e + 1);
};
Window.prototype.updateTransform = function() {
  this._updateCursor(), this._updateArrows(), this._updatePauseSign(), this._updateContents(), PIXI.Container.prototype.updateTransform.call(this);
};
Window.prototype._createAllParts = function() {
  this._windowSpriteContainer = new PIXI.Container(), this._windowBackSprite = new Sprite(), this._windowCursorSprite = new Sprite(), this._windowFrameSprite = new Sprite(), this._windowContentsSprite = new Sprite(), this._downArrowSprite = new Sprite(), this._upArrowSprite = new Sprite(), this._windowPauseSignSprite = new Sprite(), this._windowBackSprite.bitmap = new Bitmap(1, 1), this._windowBackSprite.alpha = 192 / 255, this.addChild(this._windowSpriteContainer), this._windowSpriteContainer.addChild(this._windowBackSprite), this._windowSpriteContainer.addChild(this._windowFrameSprite), this.addChild(this._windowCursorSprite), this.addChild(this._windowContentsSprite), this.addChild(this._downArrowSprite), this.addChild(this._upArrowSprite), this.addChild(this._windowPauseSignSprite);
};
Window.prototype._onWindowskinLoad = function() {
  this._refreshAllParts();
};
Window.prototype._refreshAllParts = function() {
  this._refreshBack(), this._refreshFrame(), this._refreshCursor(), this._refreshContents(), this._refreshArrows(), this._refreshPauseSign();
};
Window.prototype._refreshBack = function() {
  var t = this._margin, e = this._width - t * 2, r = this._height - t * 2, s = new Bitmap(e, r);
  if (this._windowBackSprite.bitmap = s, this._windowBackSprite.setFrame(0, 0, e, r), this._windowBackSprite.move(t, t), e > 0 && r > 0 && this._windowskin) {
    var o = 96;
    s.blt(this._windowskin, 0, 0, o, o, 0, 0, e, r);
    for (var h = 0; h < r; h += o)
      for (var p = 0; p < e; p += o)
        s.blt(this._windowskin, 0, o, o, o, p, h, o, o);
    var c = this._colorTone;
    s.adjustTone(c[0], c[1], c[2]);
  }
};
Window.prototype._refreshFrame = function() {
  var t = this._width, e = this._height, r = 24, s = new Bitmap(t, e);
  if (this._windowFrameSprite.bitmap = s, this._windowFrameSprite.setFrame(0, 0, t, e), t > 0 && e > 0 && this._windowskin) {
    var o = this._windowskin, h = 96, p = 96;
    s.blt(o, h + r, 0, h - r * 2, r, r, 0, t - r * 2, r), s.blt(o, h + r, 0 + p - r, h - r * 2, r, r, e - r, t - r * 2, r), s.blt(o, h + 0, 0 + r, r, h - r * 2, 0, r, r, e - r * 2), s.blt(o, h + p - r, 0 + r, r, h - r * 2, t - r, r, r, e - r * 2), s.blt(o, h + 0, 0, r, r, 0, 0, r, r), s.blt(o, h + p - r, 0, r, r, t - r, 0, r, r), s.blt(o, h + 0, 0 + p - r, r, r, 0, e - r, r, r), s.blt(o, h + p - r, 0 + p - r, r, r, t - r, e - r, r, r);
  }
};
Window.prototype._refreshCursor = function() {
  var t = this._padding, e = this._cursorRect.x + t - this.origin.x, r = this._cursorRect.y + t - this.origin.y, s = this._cursorRect.width, o = this._cursorRect.height, h = 4, p = Math.max(e, t), c = Math.max(r, t), u = e - p, l = r - c, d = Math.min(s, this._width - t - p), f = Math.min(o, this._height - t - c), _ = new Bitmap(d, f);
  if (this._windowCursorSprite.bitmap = _, this._windowCursorSprite.setFrame(0, 0, d, f), this._windowCursorSprite.move(p, c), s > 0 && o > 0 && this._windowskin) {
    var w = this._windowskin, m = 96, g = 48;
    _.blt(w, m + h, m + h, g - h * 2, g - h * 2, u + h, l + h, s - h * 2, o - h * 2), _.blt(w, m + h, m + 0, g - h * 2, h, u + h, l + 0, s - h * 2, h), _.blt(w, m + h, m + g - h, g - h * 2, h, u + h, l + o - h, s - h * 2, h), _.blt(w, m + 0, m + h, h, g - h * 2, u + 0, l + h, h, o - h * 2), _.blt(w, m + g - h, m + h, h, g - h * 2, u + s - h, l + h, h, o - h * 2), _.blt(w, m + 0, m + 0, h, h, u + 0, l + 0, h, h), _.blt(w, m + g - h, m + 0, h, h, u + s - h, l + 0, h, h), _.blt(w, m + 0, m + g - h, h, h, u + 0, l + o - h, h, h), _.blt(w, m + g - h, m + g - h, h, h, u + s - h, l + o - h, h, h);
  }
};
Window.prototype._refreshContents = function() {
  this._windowContentsSprite.move(this.padding, this.padding);
};
Window.prototype._refreshArrows = function() {
  var t = this._width, e = this._height, r = 24, s = r / 2, o = 96 + r, h = 0 + r;
  this._downArrowSprite.bitmap = this._windowskin, this._downArrowSprite.anchor.x = 0.5, this._downArrowSprite.anchor.y = 0.5, this._downArrowSprite.setFrame(o + s, h + s + r, r, s), this._downArrowSprite.move(t / 2, e - s), this._upArrowSprite.bitmap = this._windowskin, this._upArrowSprite.anchor.x = 0.5, this._upArrowSprite.anchor.y = 0.5, this._upArrowSprite.setFrame(o + s, h, r, s), this._upArrowSprite.move(t / 2, s);
};
Window.prototype._refreshPauseSign = function() {
  var t = 144, e = 96, r = 24;
  this._windowPauseSignSprite.bitmap = this._windowskin, this._windowPauseSignSprite.anchor.x = 0.5, this._windowPauseSignSprite.anchor.y = 1, this._windowPauseSignSprite.move(this._width / 2, this._height), this._windowPauseSignSprite.setFrame(t, e, r, r), this._windowPauseSignSprite.alpha = 0;
};
Window.prototype._updateCursor = function() {
  var t = this._animationCount % 40, e = this.contentsOpacity;
  this.active && (t < 20 ? e -= t * 8 : e -= (40 - t) * 8), this._windowCursorSprite.alpha = e / 255, this._windowCursorSprite.visible = this.isOpen();
};
Window.prototype._updateContents = function() {
  var t = this._width - this._padding * 2, e = this._height - this._padding * 2;
  t > 0 && e > 0 ? (this._windowContentsSprite.setFrame(this.origin.x, this.origin.y, t, e), this._windowContentsSprite.visible = this.isOpen()) : this._windowContentsSprite.visible = !1;
};
Window.prototype._updateArrows = function() {
  this._downArrowSprite.visible = this.isOpen() && this.downArrowVisible, this._upArrowSprite.visible = this.isOpen() && this.upArrowVisible;
};
Window.prototype._updatePauseSign = function() {
  var t = this._windowPauseSignSprite, e = Math.floor(this._animationCount / 16) % 2, r = Math.floor(this._animationCount / 16 / 2) % 2, s = 144, o = 96, h = 24;
  this.pause ? t.alpha < 1 && (t.alpha = Math.min(t.alpha + 0.1, 1)) : t.alpha = 0, t.setFrame(s + e * h, o + r * h, h, h), t.visible = this.isOpen();
};
const Window$1 = Window;
WindowLayer = function() {
  this.initialize.apply(this, arguments);
};
WindowLayer.prototype = Object.create(PIXI.Container.prototype);
WindowLayer.prototype.constructor = WindowLayer;
WindowLayer.prototype.initialize = function() {
  PIXI.Container.call(this), this._width = 0, this._height = 0, this._tempCanvas = null, this._translationMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1], this._windowMask = new PIXI.Graphics(), this._windowMask.beginFill(16777215, 1), this._windowMask.drawRect(0, 0, 0, 0), this._windowMask.endFill(), this._windowRect = this._windowMask.graphicsData[0].shape, this._renderSprite = null, this.filterArea = new PIXI.Rectangle(), this.filters = [WindowLayer.voidFilter], this.on("removed", this.onRemoveAsAChild);
};
WindowLayer.prototype.onRemoveAsAChild = function() {
  this.removeChildren();
};
WindowLayer.voidFilter = new PIXI.filters.VoidFilter();
Object.defineProperty(WindowLayer.prototype, "width", {
  get: function() {
    return this._width;
  },
  set: function(t) {
    this._width = t;
  },
  configurable: !0
});
Object.defineProperty(WindowLayer.prototype, "height", {
  get: function() {
    return this._height;
  },
  set: function(t) {
    this._height = t;
  },
  configurable: !0
});
WindowLayer.prototype.move = function(t, e, r, s) {
  this.x = t, this.y = e, this.width = r, this.height = s;
};
WindowLayer.prototype.update = function() {
  this.children.forEach(function(t) {
    t.update && t.update();
  });
};
WindowLayer.prototype.renderCanvas = function(t) {
  if (!(!this.visible || !this.renderable)) {
    this._tempCanvas || (this._tempCanvas = document.createElement("canvas")), this._tempCanvas.width = Graphics.width, this._tempCanvas.height = Graphics.height;
    var e = t.context, r = this._tempCanvas.getContext("2d");
    r.save(), r.clearRect(0, 0, Graphics.width, Graphics.height), r.beginPath(), r.rect(this.x, this.y, this.width, this.height), r.closePath(), r.clip(), t.context = r;
    for (var s = 0; s < this.children.length; s++) {
      var o = this.children[s];
      o._isWindow && o.visible && o.openness > 0 && (this._canvasClearWindowRect(t, o), r.save(), o.renderCanvas(t), r.restore());
    }
    r.restore(), t.context = e, t.context.setTransform(1, 0, 0, 1, 0, 0), t.context.globalCompositeOperation = "source-over", t.context.globalAlpha = 1, t.context.drawImage(this._tempCanvas, 0, 0);
    for (var h = 0; h < this.children.length; h++)
      this.children[h]._isWindow || this.children[h].renderCanvas(t);
  }
};
WindowLayer.prototype._canvasClearWindowRect = function(t, e) {
  var r = this.x + e.x, s = this.y + e.y + e.height / 2 * (1 - e._openness / 255), o = e.width, h = e.height * e._openness / 255;
  t.context.clearRect(r, s, o, h);
};
WindowLayer.prototype.renderWebGL = function(t) {
  if (!(!this.visible || !this.renderable) && this.children.length != 0) {
    t.flush(), this.filterArea.copy(this), t.filterManager.pushFilter(this, this.filters), t.currentRenderer.start();
    var e = new PIXI.Point(), r = t._activeRenderTarget, s = r.projectionMatrix;
    e.x = Math.round((s.tx + 1) / 2 * r.sourceFrame.width), e.y = Math.round((s.ty + 1) / 2 * r.sourceFrame.height);
    for (var o = 0; o < this.children.length; o++) {
      var h = this.children[o];
      h._isWindow && h.visible && h.openness > 0 && (this._maskWindow(h, e), t.maskManager.pushScissorMask(this, this._windowMask), t.clear(), t.maskManager.popScissorMask(), t.currentRenderer.start(), h.renderWebGL(t), t.currentRenderer.flush());
    }
    t.flush(), t.filterManager.popFilter(), t.maskManager.popScissorMask();
    for (var p = 0; p < this.children.length; p++)
      this.children[p]._isWindow || this.children[p].renderWebGL(t);
  }
};
WindowLayer.prototype._maskWindow = function(t, e) {
  this._windowMask._currentBounds = null, this._windowMask.boundsDirty = !0;
  var r = this._windowRect;
  r.x = this.x + e.x + t.x, r.y = this.x + e.y + t.y + t.height / 2 * (1 - t._openness / 255), r.width = t.width, r.height = t.height * t._openness / 255;
};
const WindowLayer$1 = WindowLayer;
Weather = function() {
  this.initialize.apply(this, arguments);
};
Weather.prototype = Object.create(PIXI.Container.prototype);
Weather.prototype.constructor = Weather;
Weather.prototype.initialize = function() {
  PIXI.Container.call(this), this._width = Graphics.width, this._height = Graphics.height, this._sprites = [], this._createBitmaps(), this._createDimmer(), this.type = "none", this.power = 0, this.origin = new Point();
};
Weather.prototype.update = function() {
  this._updateDimmer(), this._updateAllSprites();
};
Weather.prototype._createBitmaps = function() {
  this._rainBitmap = new Bitmap(1, 60), this._rainBitmap.fillAll("white"), this._stormBitmap = new Bitmap(2, 100), this._stormBitmap.fillAll("white"), this._snowBitmap = new Bitmap(9, 9), this._snowBitmap.drawCircle(4, 4, 4, "white");
};
Weather.prototype._createDimmer = function() {
  this._dimmerSprite = new ScreenSprite(), this._dimmerSprite.setColor(80, 80, 80), this.addChild(this._dimmerSprite);
};
Weather.prototype._updateDimmer = function() {
  this._dimmerSprite.opacity = Math.floor(this.power * 6);
};
Weather.prototype._updateAllSprites = function() {
  for (var t = Math.floor(this.power * 10); this._sprites.length < t; )
    this._addSprite();
  for (; this._sprites.length > t; )
    this._removeSprite();
  this._sprites.forEach(function(e) {
    this._updateSprite(e), e.x = e.ax - this.origin.x, e.y = e.ay - this.origin.y;
  }, this);
};
Weather.prototype._addSprite = function() {
  var t = new Sprite(this.viewport);
  t.opacity = 0, this._sprites.push(t), this.addChild(t);
};
Weather.prototype._removeSprite = function() {
  this.removeChild(this._sprites.pop());
};
Weather.prototype._updateSprite = function(t) {
  switch (this.type) {
    case "rain":
      this._updateRainSprite(t);
      break;
    case "storm":
      this._updateStormSprite(t);
      break;
    case "snow":
      this._updateSnowSprite(t);
      break;
  }
  t.opacity < 40 && this._rebornSprite(t);
};
Weather.prototype._updateRainSprite = function(t) {
  t.bitmap = this._rainBitmap, t.rotation = Math.PI / 16, t.ax -= 6 * Math.sin(t.rotation), t.ay += 6 * Math.cos(t.rotation), t.opacity -= 6;
};
Weather.prototype._updateStormSprite = function(t) {
  t.bitmap = this._stormBitmap, t.rotation = Math.PI / 8, t.ax -= 8 * Math.sin(t.rotation), t.ay += 8 * Math.cos(t.rotation), t.opacity -= 8;
};
Weather.prototype._updateSnowSprite = function(t) {
  t.bitmap = this._snowBitmap, t.rotation = Math.PI / 16, t.ax -= 3 * Math.sin(t.rotation), t.ay += 3 * Math.cos(t.rotation), t.opacity -= 3;
};
Weather.prototype._rebornSprite = function(t) {
  t.ax = Math.randomInt(Graphics.width + 100) - 100 + this.origin.x, t.ay = Math.randomInt(Graphics.height + 200) - 200 + this.origin.y, t.opacity = 160 + Math.randomInt(60);
};
const Weather$1 = Weather;
ToneFilter = function() {
  PIXI.filters.ColorMatrixFilter.call(this);
};
ToneFilter.prototype = Object.create(PIXI.filters.ColorMatrixFilter.prototype);
ToneFilter.prototype.constructor = ToneFilter;
ToneFilter.prototype.adjustHue = function(t) {
  this.hue(t, !0);
};
ToneFilter.prototype.adjustSaturation = function(t) {
  t = (t || 0).clamp(-255, 255) / 255, this.saturate(t, !0);
};
ToneFilter.prototype.adjustTone = function(t, e, r) {
  if (t = (t || 0).clamp(-255, 255) / 255, e = (e || 0).clamp(-255, 255) / 255, r = (r || 0).clamp(-255, 255) / 255, t !== 0 || e !== 0 || r !== 0) {
    var s = [
      1,
      0,
      0,
      t,
      0,
      0,
      1,
      0,
      e,
      0,
      0,
      0,
      1,
      r,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(s, !0);
  }
};
const ToneFilter$1 = ToneFilter;
ToneSprite = function() {
  this.initialize.apply(this, arguments);
};
ToneSprite.prototype = Object.create(PIXI.Container.prototype);
ToneSprite.prototype.constructor = ToneSprite;
ToneSprite.prototype.initialize = function() {
  PIXI.Container.call(this), this.clear();
};
ToneSprite.prototype.clear = function() {
  this._red = 0, this._green = 0, this._blue = 0, this._gray = 0;
};
ToneSprite.prototype.setTone = function(t, e, r, s) {
  this._red = Math.round(t || 0).clamp(-255, 255), this._green = Math.round(e || 0).clamp(-255, 255), this._blue = Math.round(r || 0).clamp(-255, 255), this._gray = Math.round(s || 0).clamp(0, 255);
};
ToneSprite.prototype._renderCanvas = function(t) {
  if (this.visible) {
    var e = t.context, r = this.worldTransform, s = t.resolution, o = Graphics.width, h = Graphics.height;
    e.save(), e.setTransform(r.a, r.b, r.c, r.d, r.tx * s, r.ty * s), Graphics.canUseSaturationBlend() && this._gray > 0 && (e.globalCompositeOperation = "saturation", e.globalAlpha = this._gray / 255, e.fillStyle = "#ffffff", e.fillRect(0, 0, o, h)), e.globalAlpha = 1;
    var p = Math.max(0, this._red), c = Math.max(0, this._green), u = Math.max(0, this._blue);
    if ((p || c || u) && (e.globalCompositeOperation = "lighter", e.fillStyle = Utils.rgbToCssColor(p, c, u), e.fillRect(0, 0, o, h)), Graphics.canUseDifferenceBlend()) {
      var l = Math.max(0, -this._red), d = Math.max(0, -this._green), f = Math.max(0, -this._blue);
      (l || d || f) && (e.globalCompositeOperation = "difference", e.fillStyle = "#ffffff", e.fillRect(0, 0, o, h), e.globalCompositeOperation = "lighter", e.fillStyle = Utils.rgbToCssColor(l, d, f), e.fillRect(0, 0, o, h), e.globalCompositeOperation = "difference", e.fillStyle = "#ffffff", e.fillRect(0, 0, o, h));
    }
    e.restore();
  }
};
ToneSprite.prototype._renderWebGL = function(t) {
};
const ToneSprite$1 = ToneSprite;
Stage = class extends PIXI.Container {
  constructor(...t) {
    super(...t);
  }
  initialize() {
    console.log("Core:Stage::initialize"), this.interactive = !1;
  }
};
const Stage$1 = Stage;
WebAudio = function() {
  this.initialize.apply(this, arguments);
};
WebAudio._standAlone = function(t) {
  return !t.ResourceHandler;
}(globalThis);
WebAudio.prototype.initialize = function(t) {
  WebAudio._initialized || WebAudio.initialize(), this.clear(), WebAudio._standAlone || (this._loader = ResourceHandler.createLoader(t, this._load.bind(this, t), (function() {
    this._hasError = !0;
  }).bind(this))), this._load(t), this._url = t;
};
WebAudio._masterVolume = 1;
WebAudio._context = null;
WebAudio._masterGainNode = null;
WebAudio._initialized = !1;
WebAudio._unlocked = !1;
WebAudio.initialize = function(t) {
  return this._initialized || (t || (this._createContext(), this._detectCodecs(), this._createMasterGainNode(), this._setupEventHandlers()), this._initialized = !0), !!this._context;
};
WebAudio.canPlayOgg = function() {
  return this._initialized || this.initialize(), !!this._canPlayOgg;
};
WebAudio.canPlayM4a = function() {
  return this._initialized || this.initialize(), !!this._canPlayM4a;
};
WebAudio.setMasterVolume = function(t) {
  this._masterVolume = t, this._masterGainNode && this._masterGainNode.gain.setValueAtTime(this._masterVolume, this._context.currentTime);
};
WebAudio._createContext = function() {
  try {
    typeof AudioContext < "u" ? this._context = new AudioContext() : typeof webkitAudioContext < "u" && (this._context = new webkitAudioContext());
  } catch {
    this._context = null;
  }
};
WebAudio._detectCodecs = function() {
  var t = document.createElement("audio");
  t.canPlayType && (this._canPlayOgg = t.canPlayType("audio/ogg"), this._canPlayM4a = t.canPlayType("audio/mp4"));
};
WebAudio._createMasterGainNode = function() {
  var t = WebAudio._context;
  t && (this._masterGainNode = t.createGain(), this._masterGainNode.gain.setValueAtTime(this._masterVolume, t.currentTime), this._masterGainNode.connect(t.destination));
};
WebAudio._setupEventHandlers = function() {
  var t = function() {
    var e = WebAudio._context;
    e && e.state === "suspended" && typeof e.resume == "function" ? e.resume().then(function() {
      WebAudio._onTouchStart();
    }) : WebAudio._onTouchStart();
  };
  document.addEventListener("keydown", t), document.addEventListener("mousedown", t), document.addEventListener("touchend", t), document.addEventListener("touchstart", this._onTouchStart.bind(this)), document.addEventListener("visibilitychange", this._onVisibilityChange.bind(this));
};
WebAudio._onTouchStart = function() {
  var t = WebAudio._context;
  if (t && !this._unlocked) {
    var e = t.createBufferSource();
    e.start(0), this._unlocked = !0;
  }
};
WebAudio._onVisibilityChange = function() {
  document.visibilityState === "hidden" ? this._onHide() : this._onShow();
};
WebAudio._onHide = function() {
  this._shouldMuteOnHide() && this._fadeOut(1);
};
WebAudio._onShow = function() {
  this._shouldMuteOnHide() && this._fadeIn(0.5);
};
WebAudio._shouldMuteOnHide = function() {
  return Utils.isMobileDevice();
};
WebAudio._fadeIn = function(t) {
  if (this._masterGainNode) {
    var e = this._masterGainNode.gain, r = WebAudio._context.currentTime;
    e.setValueAtTime(0, r), e.linearRampToValueAtTime(this._masterVolume, r + t);
  }
};
WebAudio._fadeOut = function(t) {
  if (this._masterGainNode) {
    var e = this._masterGainNode.gain, r = WebAudio._context.currentTime;
    e.setValueAtTime(this._masterVolume, r), e.linearRampToValueAtTime(0, r + t);
  }
};
WebAudio.prototype.clear = function() {
  this.stop(), this._buffer = null, this._sourceNode = null, this._gainNode = null, this._pannerNode = null, this._totalTime = 0, this._sampleRate = 0, this._loopStart = 0, this._loopLength = 0, this._startTime = 0, this._volume = 1, this._pitch = 1, this._pan = 0, this._endTimer = null, this._loadListeners = [], this._stopListeners = [], this._hasError = !1, this._autoPlay = !1;
};
Object.defineProperty(WebAudio.prototype, "url", {
  get: function() {
    return this._url;
  },
  configurable: !0
});
Object.defineProperty(WebAudio.prototype, "volume", {
  get: function() {
    return this._volume;
  },
  set: function(t) {
    this._volume = t, this._gainNode && this._gainNode.gain.setValueAtTime(this._volume, WebAudio._context.currentTime);
  },
  configurable: !0
});
Object.defineProperty(WebAudio.prototype, "pitch", {
  get: function() {
    return this._pitch;
  },
  set: function(t) {
    this._pitch !== t && (this._pitch = t, this.isPlaying() && this.play(this._sourceNode.loop, 0));
  },
  configurable: !0
});
Object.defineProperty(WebAudio.prototype, "pan", {
  get: function() {
    return this._pan;
  },
  set: function(t) {
    this._pan = t, this._updatePanner();
  },
  configurable: !0
});
WebAudio.prototype.isReady = function() {
  return !!this._buffer;
};
WebAudio.prototype.isError = function() {
  return this._hasError;
};
WebAudio.prototype.isPlaying = function() {
  return !!this._sourceNode;
};
WebAudio.prototype.play = function(t, e) {
  this.isReady() ? (e = e || 0, this._startPlaying(t, e)) : WebAudio._context && (this._autoPlay = !0, this.addLoadListener((function() {
    this._autoPlay && this.play(t, e);
  }).bind(this)));
};
WebAudio.prototype.stop = function() {
  if (this._autoPlay = !1, this._removeEndTimer(), this._removeNodes(), this._stopListeners)
    for (; this._stopListeners.length > 0; ) {
      var t = this._stopListeners.shift();
      t();
    }
};
WebAudio.prototype.fadeIn = function(t) {
  if (this.isReady()) {
    if (this._gainNode) {
      var e = this._gainNode.gain, r = WebAudio._context.currentTime;
      e.setValueAtTime(0, r), e.linearRampToValueAtTime(this._volume, r + t);
    }
  } else this._autoPlay && this.addLoadListener((function() {
    this.fadeIn(t);
  }).bind(this));
};
WebAudio.prototype.fadeOut = function(t) {
  if (this._gainNode) {
    var e = this._gainNode.gain, r = WebAudio._context.currentTime;
    e.setValueAtTime(this._volume, r), e.linearRampToValueAtTime(0, r + t);
  }
  this._autoPlay = !1;
};
WebAudio.prototype.seek = function() {
  if (WebAudio._context) {
    var t = (WebAudio._context.currentTime - this._startTime) * this._pitch;
    if (this._loopLength > 0)
      for (; t >= this._loopStart + this._loopLength; )
        t -= this._loopLength;
    return t;
  } else
    return 0;
};
WebAudio.prototype.addLoadListener = function(t) {
  this._loadListeners.push(t);
};
WebAudio.prototype.addStopListener = function(t) {
  this._stopListeners.push(t);
};
WebAudio.prototype._load = function(t) {
  if (WebAudio._context) {
    var e = new XMLHttpRequest();
    Decrypter.hasEncryptedAudio && (t = Decrypter.extToEncryptExt(t)), e.open("GET", t), e.responseType = "arraybuffer", e.onload = (function() {
      e.status < 400 && this._onXhrLoad(e);
    }).bind(this), e.onerror = this._loader || (function() {
      this._hasError = !0;
    }).bind(this), e.send();
  }
};
WebAudio.prototype._onXhrLoad = function(t) {
  var e = t.response;
  Decrypter.hasEncryptedAudio && (e = Decrypter.decryptArrayBuffer(e)), this._readLoopComments(new Uint8Array(e)), WebAudio._context.decodeAudioData(e, (function(r) {
    this._buffer = r, this._totalTime = r.duration, this._loopLength > 0 && this._sampleRate > 0 ? (this._loopStart /= this._sampleRate, this._loopLength /= this._sampleRate) : (this._loopStart = 0, this._loopLength = this._totalTime), this._onLoad();
  }).bind(this));
};
WebAudio.prototype._startPlaying = function(t, e) {
  if (this._loopLength > 0)
    for (; e >= this._loopStart + this._loopLength; )
      e -= this._loopLength;
  this._removeEndTimer(), this._removeNodes(), this._createNodes(), this._connectNodes(), this._sourceNode.loop = t, this._sourceNode.start(0, e), this._startTime = WebAudio._context.currentTime - e / this._pitch, this._createEndTimer();
};
WebAudio.prototype._createNodes = function() {
  var t = WebAudio._context;
  this._sourceNode = t.createBufferSource(), this._sourceNode.buffer = this._buffer, this._sourceNode.loopStart = this._loopStart, this._sourceNode.loopEnd = this._loopStart + this._loopLength, this._sourceNode.playbackRate.setValueAtTime(this._pitch, t.currentTime), this._gainNode = t.createGain(), this._gainNode.gain.setValueAtTime(this._volume, t.currentTime), this._pannerNode = t.createPanner(), this._pannerNode.panningModel = "equalpower", this._updatePanner();
};
WebAudio.prototype._connectNodes = function() {
  this._sourceNode.connect(this._gainNode), this._gainNode.connect(this._pannerNode), this._pannerNode.connect(WebAudio._masterGainNode);
};
WebAudio.prototype._removeNodes = function() {
  this._sourceNode && (this._sourceNode.stop(0), this._sourceNode = null, this._gainNode = null, this._pannerNode = null);
};
WebAudio.prototype._createEndTimer = function() {
  if (this._sourceNode && !this._sourceNode.loop) {
    var t = this._startTime + this._totalTime / this._pitch, e = t - WebAudio._context.currentTime;
    this._endTimer = setTimeout((function() {
      this.stop();
    }).bind(this), e * 1e3);
  }
};
WebAudio.prototype._removeEndTimer = function() {
  this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null);
};
WebAudio.prototype._updatePanner = function() {
  if (this._pannerNode) {
    var t = this._pan, e = 1 - Math.abs(t);
    this._pannerNode.setPosition(t, 0, e);
  }
};
WebAudio.prototype._onLoad = function() {
  for (; this._loadListeners.length > 0; ) {
    var t = this._loadListeners.shift();
    t();
  }
};
WebAudio.prototype._readLoopComments = function(t) {
  this._readOgg(t), this._readMp4(t);
};
WebAudio.prototype._readOgg = function(t) {
  for (var e = 0; e < t.length && this._readFourCharacters(t, e) === "OggS"; ) {
    e += 26;
    for (var r = !1, s = t[e++], o = [], h = 0; h < s; h++)
      o.push(t[e++]);
    for (h = 0; h < s; h++) {
      if (this._readFourCharacters(t, e + 1) === "vorb") {
        var p = t[e];
        p === 1 ? this._sampleRate = this._readLittleEndian(t, e + 12) : p === 3 && this._readMetaData(t, e, o[h]), r = !0;
      }
      e += o[h];
    }
    if (!r)
      break;
  }
};
WebAudio.prototype._readMp4 = function(t) {
  if (this._readFourCharacters(t, 4) === "ftyp")
    for (var e = 0; e < t.length; ) {
      var r = this._readBigEndian(t, e), s = this._readFourCharacters(t, e + 4);
      if (s === "moov")
        e += 8;
      else if (s === "mvhd" && (this._sampleRate = this._readBigEndian(t, e + 20)), (s === "udta" || s === "meta") && this._readMetaData(t, e, r), e += r, r <= 1)
        break;
    }
};
WebAudio.prototype._readMetaData = function(t, e, r) {
  for (var s = e; s < e + r - 10; s++)
    if (this._readFourCharacters(t, s) === "LOOP") {
      for (var o = ""; t[s] > 0; )
        o += String.fromCharCode(t[s++]);
      if (o.match(/LOOPSTART=([0-9]+)/) && (this._loopStart = parseInt(RegExp.$1)), o.match(/LOOPLENGTH=([0-9]+)/) && (this._loopLength = parseInt(RegExp.$1)), o == "LOOPSTART" || o == "LOOPLENGTH") {
        var h = "";
        for (s += 16; t[s] > 0; )
          h += String.fromCharCode(t[s++]);
        o == "LOOPSTART" ? this._loopStart = parseInt(h) : this._loopLength = parseInt(h);
      }
    }
};
WebAudio.prototype._readLittleEndian = function(t, e) {
  return t[e + 3] * 16777216 + t[e + 2] * 65536 + t[e + 1] * 256 + t[e + 0];
};
WebAudio.prototype._readBigEndian = function(t, e) {
  return t[e + 0] * 16777216 + t[e + 1] * 65536 + t[e + 2] * 256 + t[e + 3];
};
WebAudio.prototype._readFourCharacters = function(t, e) {
  for (var r = "", s = 0; s < 4; s++)
    r += String.fromCharCode(t[e + s]);
  return r;
};
const WebAudio$1 = WebAudio;
Html5Audio = function() {
  throw new Error("This is a static class");
};
Html5Audio._initialized = !1;
Html5Audio._unlocked = !1;
Html5Audio._audioElement = null;
Html5Audio._gainTweenInterval = null;
Html5Audio._tweenGain = 0;
Html5Audio._tweenTargetGain = 0;
Html5Audio._tweenGainStep = 0;
Html5Audio._staticSePath = null;
Html5Audio.setup = function(t) {
  this._initialized || this.initialize(), this.clear(), Decrypter.hasEncryptedAudio && this._audioElement.src && window.URL.revokeObjectURL(this._audioElement.src), this._url = t;
};
Html5Audio.initialize = function() {
  if (!this._initialized) {
    if (!this._audioElement)
      try {
        this._audioElement = new Audio();
      } catch {
        this._audioElement = null;
      }
    this._audioElement && this._setupEventHandlers(), this._initialized = !0;
  }
  return !!this._audioElement;
};
Html5Audio._setupEventHandlers = function() {
  document.addEventListener("touchstart", this._onTouchStart.bind(this)), document.addEventListener("visibilitychange", this._onVisibilityChange.bind(this)), this._audioElement.addEventListener("loadeddata", this._onLoadedData.bind(this)), this._audioElement.addEventListener("error", this._onError.bind(this)), this._audioElement.addEventListener("ended", this._onEnded.bind(this));
};
Html5Audio._onTouchStart = function() {
  this._audioElement && !this._unlocked && (this._isLoading ? (this._load(this._url), this._unlocked = !0) : this._staticSePath && (this._audioElement.src = this._staticSePath, this._audioElement.volume = 0, this._audioElement.loop = !1, this._audioElement.play(), this._unlocked = !0));
};
Html5Audio._onVisibilityChange = function() {
  document.visibilityState === "hidden" ? this._onHide() : this._onShow();
};
Html5Audio._onLoadedData = function() {
  this._buffered = !0, this._unlocked && this._onLoad();
};
Html5Audio._onError = function() {
  this._hasError = !0;
};
Html5Audio._onEnded = function() {
  this._audioElement.loop || this.stop();
};
Html5Audio._onHide = function() {
  this._audioElement.volume = 0, this._tweenGain = 0;
};
Html5Audio._onShow = function() {
  this.fadeIn(0.5);
};
Html5Audio.clear = function() {
  this.stop(), this._volume = 1, this._loadListeners = [], this._hasError = !1, this._autoPlay = !1, this._isLoading = !1, this._buffered = !1;
};
Html5Audio.setStaticSe = function(t) {
  this._initialized || (this.initialize(), this.clear()), this._staticSePath = t;
};
Object.defineProperty(Html5Audio, "url", {
  get: function() {
    return Html5Audio._url;
  },
  configurable: !0
});
Object.defineProperty(Html5Audio, "volume", {
  get: (function() {
    return Html5Audio._volume;
  }).bind(globalThis),
  set: function(t) {
    Html5Audio._volume = t, Html5Audio._audioElement && (Html5Audio._audioElement.volume = this._volume);
  },
  configurable: !0
});
Html5Audio.isReady = function() {
  return this._buffered;
};
Html5Audio.isError = function() {
  return this._hasError;
};
Html5Audio.isPlaying = function() {
  return !this._audioElement.paused;
};
Html5Audio.play = function(t, e) {
  this.isReady() ? (e = e || 0, this._startPlaying(t, e)) : Html5Audio._audioElement && (this._autoPlay = !0, this.addLoadListener((function() {
    this._autoPlay && (this.play(t, e), this._gainTweenInterval && (clearInterval(this._gainTweenInterval), this._gainTweenInterval = null));
  }).bind(this)), this._isLoading || this._load(this._url));
};
Html5Audio.stop = function() {
  this._audioElement && this._audioElement.pause(), this._autoPlay = !1, this._tweenInterval && (clearInterval(this._tweenInterval), this._tweenInterval = null, this._audioElement.volume = 0);
};
Html5Audio.fadeIn = function(t) {
  this.isReady() ? this._audioElement && (this._tweenTargetGain = this._volume, this._tweenGain = 0, this._startGainTween(t)) : this._autoPlay && this.addLoadListener((function() {
    this.fadeIn(t);
  }).bind(this));
};
Html5Audio.fadeOut = function(t) {
  this._audioElement && (this._tweenTargetGain = 0, this._tweenGain = this._volume, this._startGainTween(t));
};
Html5Audio.seek = function() {
  return this._audioElement ? this._audioElement.currentTime : 0;
};
Html5Audio.addLoadListener = function(t) {
  this._loadListeners.push(t);
};
Html5Audio._load = function(t) {
  this._audioElement && (this._isLoading = !0, this._audioElement.src = t, this._audioElement.load());
};
Html5Audio._startPlaying = function(t, e) {
  this._audioElement.loop = t, this._gainTweenInterval && (clearInterval(this._gainTweenInterval), this._gainTweenInterval = null), this._audioElement && (this._audioElement.volume = this._volume, this._audioElement.currentTime = e, this._audioElement.play());
};
Html5Audio._onLoad = function() {
  for (this._isLoading = !1; this._loadListeners.length > 0; ) {
    var t = this._loadListeners.shift();
    t();
  }
};
Html5Audio._startGainTween = function(t) {
  this._audioElement.volume = this._tweenGain, this._gainTweenInterval && (clearInterval(this._gainTweenInterval), this._gainTweenInterval = null), this._tweenGainStep = (this._tweenTargetGain - this._tweenGain) / (60 * t), this._gainTweenInterval = setInterval(function() {
    Html5Audio._applyTweenValue(Html5Audio._tweenTargetGain);
  }, 1e3 / 60);
};
Html5Audio._applyTweenValue = function(t) {
  Html5Audio._tweenGain += Html5Audio._tweenGainStep, Html5Audio._tweenGain < 0 && Html5Audio._tweenGainStep < 0 ? Html5Audio._tweenGain = 0 : Html5Audio._tweenGain > t && Html5Audio._tweenGainStep > 0 && (Html5Audio._tweenGain = t), Math.abs(Html5Audio._tweenTargetGain - Html5Audio._tweenGain) < 0.01 && (Html5Audio._tweenGain = Html5Audio._tweenTargetGain, clearInterval(Html5Audio._gainTweenInterval), Html5Audio._gainTweenInterval = null), Html5Audio._audioElement.volume = Html5Audio._tweenGain;
};
const Html5Audio$1 = Html5Audio;
JsonEx = function() {
  throw new Error("This is a static class");
};
JsonEx.maxDepth = 100;
JsonEx._id = 1;
JsonEx._generateId = function() {
  return JsonEx._id++;
};
JsonEx.stringify = function(t) {
  var e = [];
  JsonEx._id = 1;
  var r = JSON.stringify(this._encode(t, e, 0));
  return this._cleanMetadata(t), this._restoreCircularReference(e), r;
};
JsonEx._restoreCircularReference = function(t) {
  t.forEach(function(e) {
    var r = e[0], s = e[1], o = e[2];
    s[r] = o;
  });
};
JsonEx.parse = function(t) {
  var e = [], r = {}, s = this._decode(JSON.parse(t), e, r);
  return this._cleanMetadata(s), this._linkCircularReference(s, e, r), s;
};
JsonEx._linkCircularReference = function(t, e, r) {
  e.forEach(function(s) {
    var o = s[0], h = s[1], p = s[2];
    h[o] = r[p];
  });
};
JsonEx._cleanMetadata = function(t) {
  t && (delete t["@"], delete t["@c"], typeof t == "object" && Object.keys(t).forEach(function(e) {
    var r = t[e];
    typeof r == "object" && JsonEx._cleanMetadata(r);
  }));
};
JsonEx.makeDeepCopy = function(t) {
  return this.parse(this.stringify(t));
};
JsonEx._encode = function(t, e, r) {
  if (r = r || 0, ++r >= this.maxDepth)
    throw new Error("Object too deep");
  var s = Object.prototype.toString.call(t);
  if (s === "[object Object]" || s === "[object Array]") {
    t["@c"] = JsonEx._generateId();
    var o = this._getConstructorName(t);
    o !== "Object" && o !== "Array" && (t["@"] = o);
    for (var h in t)
      t.hasOwnProperty(h) && !h.match(/^@./) && (t[h] && typeof t[h] == "object" ? t[h]["@c"] ? (e.push([h, t, t[h]]), t[h] = { "@r": t[h]["@c"] }) : (t[h] = this._encode(t[h], e, r + 1), t[h] instanceof Array && (e.push([h, t, t[h]]), t[h] = {
        "@c": t[h]["@c"],
        "@a": t[h]
      })) : t[h] = this._encode(t[h], e, r + 1));
  }
  return r--, t;
};
JsonEx._decode = function(t, e, r) {
  var s = Object.prototype.toString.call(t);
  if (s === "[object Object]" || s === "[object Array]") {
    if (r[t["@c"]] = t, t["@"]) {
      var o = window[t["@"]];
      o && (t = this._resetPrototype(t, o.prototype));
    }
    for (var h in t)
      if (t.hasOwnProperty(h)) {
        if (t[h] && t[h]["@a"]) {
          var p = t[h]["@a"];
          p["@c"] = t[h]["@c"], t[h] = p;
        }
        t[h] && t[h]["@r"] && e.push([h, t, t[h]["@r"]]), t[h] = this._decode(t[h], e, r);
      }
  }
  return t;
};
JsonEx._getConstructorName = function(t) {
  var e = t.constructor.name;
  if (e === void 0) {
    var r = /^\s*function\s*([A-Za-z0-9_$]*)/;
    e = r.exec(t.constructor)[1];
  }
  return e;
};
JsonEx._resetPrototype = function(t, e) {
  if (Object.setPrototypeOf !== void 0)
    Object.setPrototypeOf(t, e);
  else if ("__proto__" in t)
    t.__proto__ = e;
  else {
    var r = Object.create(e);
    for (var s in t)
      t.hasOwnProperty(s) && (r[s] = t[s]);
    t = r;
  }
  return t;
};
const JsonEx$1 = JsonEx;
ResourceHandler = function() {
  throw new Error("This is a static class");
};
ResourceHandler._reloaders = [];
ResourceHandler._defaultRetryInterval = [500, 1e3, 3e3];
ResourceHandler.createLoader = function(t, e, r, s) {
  s = s || this._defaultRetryInterval;
  var o = this._reloaders, h = 0;
  return function() {
    h < s.length ? (setTimeout(e, s[h]), h++) : (r && r(), t && (o.length === 0 && (Graphics.printLoadingError(t), SceneManager.stop()), o.push(function() {
      h = 0, e();
    })));
  };
};
ResourceHandler.exists = function() {
  return this._reloaders.length > 0;
};
ResourceHandler.retry = function() {
  this._reloaders.length > 0 && (Graphics.eraseLoadingError(), SceneManager.resume(), this._reloaders.forEach(function(t) {
    t();
  }), this._reloaders.length = 0);
};
const ResourceHandler$1 = ResourceHandler;
Decrypter = function() {
  throw new Error("This is a static class");
};
Decrypter.hasEncryptedImages = !1;
Decrypter.hasEncryptedAudio = !1;
Decrypter._requestImgFile = [];
Decrypter._headerlength = 16;
Decrypter._xhrOk = 400;
Decrypter._encryptionKey = "";
Decrypter._ignoreList = [
  "img/system/Window.png"
];
Decrypter.SIGNATURE = "5250474d56000000";
Decrypter.VER = "000301";
Decrypter.REMAIN = "0000000000";
Decrypter.checkImgIgnore = function(t) {
  for (var e = 0; e < this._ignoreList.length; e++)
    if (t === this._ignoreList[e]) return !0;
  return !1;
};
Decrypter.decryptImg = function(t, e) {
  t = this.extToEncryptExt(t);
  var r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "arraybuffer", r.send(), r.onload = function() {
    if (this.status < Decrypter._xhrOk) {
      var s = Decrypter.decryptArrayBuffer(r.response);
      e._image.src = Decrypter.createBlobUrl(s), e._image.addEventListener("load", e._loadListener = Bitmap.prototype._onLoad.bind(e)), e._image.addEventListener("error", e._errorListener = e._loader || Bitmap.prototype._onError.bind(e));
    }
  }, r.onerror = function() {
    e._loader ? e._loader() : e._onError();
  };
};
Decrypter.decryptHTML5Audio = function(t, e, r) {
  var s = new XMLHttpRequest();
  s.open("GET", t), s.responseType = "arraybuffer", s.send(), s.onload = function() {
    if (this.status < Decrypter._xhrOk) {
      var o = Decrypter.decryptArrayBuffer(s.response), h = Decrypter.createBlobUrl(o);
      AudioManager.createDecryptBuffer(h, e, r);
    }
  };
};
Decrypter.cutArrayHeader = function(t, e) {
  return t.slice(e);
};
Decrypter.decryptArrayBuffer = function(t) {
  if (!t) return null;
  var e = new Uint8Array(t, 0, this._headerlength), r, s = this.SIGNATURE + this.VER + this.REMAIN, o = new Uint8Array(16);
  for (r = 0; r < this._headerlength; r++)
    o[r] = parseInt("0x" + s.substr(r * 2, 2), 16);
  for (r = 0; r < this._headerlength; r++)
    if (e[r] !== o[r])
      throw new Error("Header is wrong");
  t = this.cutArrayHeader(t, Decrypter._headerlength);
  var h = new DataView(t);
  if (this.readEncryptionkey(), t) {
    var p = new Uint8Array(t);
    for (r = 0; r < this._headerlength; r++)
      p[r] = p[r] ^ parseInt(Decrypter._encryptionKey[r], 16), h.setUint8(r, p[r]);
  }
  return t;
};
Decrypter.createBlobUrl = function(t) {
  var e = new Blob([t]);
  return window.URL.createObjectURL(e);
};
Decrypter.extToEncryptExt = function(t) {
  var e = t.split(".").pop(), r = e;
  return e === "ogg" ? r = ".rpgmvo" : e === "m4a" ? r = ".rpgmvm" : e === "png" ? r = ".rpgmvp" : r = e, t.slice(0, t.lastIndexOf(e) - 1) + r;
};
Decrypter.readEncryptionkey = function() {
  this._encryptionKey = $dataSystem.encryptionKey.split(/(.{2})/).filter(Boolean);
};
const Decrypter$1 = Decrypter;
DataManager = function() {
  throw new Error("This is a static class");
};
DataManager._globalId = "RPGMV";
DataManager._lastAccessedId = 1;
DataManager._errorUrl = null;
DataManager._databaseFiles = [
  { name: "$dataActors", src: "Actors.json" },
  { name: "$dataClasses", src: "Classes.json" },
  { name: "$dataSkills", src: "Skills.json" },
  { name: "$dataItems", src: "Items.json" },
  { name: "$dataWeapons", src: "Weapons.json" },
  { name: "$dataArmors", src: "Armors.json" },
  { name: "$dataEnemies", src: "Enemies.json" },
  { name: "$dataTroops", src: "Troops.json" },
  { name: "$dataStates", src: "States.json" },
  { name: "$dataAnimations", src: "Animations.json" },
  { name: "$dataTilesets", src: "Tilesets.json" },
  { name: "$dataCommonEvents", src: "CommonEvents.json" },
  { name: "$dataSystem", src: "System.json" },
  { name: "$dataMapInfos", src: "MapInfos.json" }
];
DataManager.loadDatabase = function() {
  for (var t = this.isBattleTest() || this.isEventTest(), e = t ? "Test_" : "", r = 0; r < this._databaseFiles.length; r++) {
    var s = this._databaseFiles[r].name, o = this._databaseFiles[r].src;
    this.loadDataFile(s, e + o);
  }
  this.isEventTest() && this.loadDataFile("$testEvent", e + "Event.json");
};
DataManager.loadDataFile = function(t, e) {
  var r = new XMLHttpRequest(), s = "data/" + e;
  r.open("GET", s), r.overrideMimeType("application/json"), r.onload = function() {
    r.status < 400 && (window[t] = JSON.parse(r.responseText), DataManager.onLoad(window[t]));
  }, r.onerror = this._mapLoader || function() {
    DataManager._errorUrl = DataManager._errorUrl || s;
  }, window[t] = null, r.send();
};
DataManager.isDatabaseLoaded = function() {
  this.checkError();
  for (var t = 0; t < this._databaseFiles.length; t++)
    if (!window[this._databaseFiles[t].name])
      return !1;
  return !0;
};
DataManager.loadMapData = function(t) {
  if (t > 0) {
    var e = "Map%1.json".format(t.padZero(3));
    this._mapLoader = ResourceHandler.createLoader("data/" + e, this.loadDataFile.bind(this, "$dataMap", e)), this.loadDataFile("$dataMap", e);
  } else
    this.makeEmptyMap();
};
DataManager.makeEmptyMap = function() {
  $dataMap = {}, $dataMap.data = [], $dataMap.events = [], $dataMap.width = 100, $dataMap.height = 100, $dataMap.scrollType = 3;
};
DataManager.isMapLoaded = function() {
  return this.checkError(), !!$dataMap;
};
DataManager.onLoad = function(t) {
  var e;
  if (t === $dataMap ? (this.extractMetadata(t), e = t.events) : e = t, Array.isArray(e))
    for (var r = 0; r < e.length; r++) {
      var s = e[r];
      s && s.note !== void 0 && this.extractMetadata(s);
    }
  t === $dataSystem && (Decrypter.hasEncryptedImages = !!t.hasEncryptedImages, Decrypter.hasEncryptedAudio = !!t.hasEncryptedAudio, Scene_Boot.loadSystemImages());
};
DataManager.extractMetadata = function(t) {
  var e = /<([^<>:]+)(:?)([^>]*)>/g;
  for (t.meta = {}; ; ) {
    var r = e.exec(t.note);
    if (r)
      r[2] === ":" ? t.meta[r[1]] = r[3] : t.meta[r[1]] = !0;
    else
      break;
  }
};
DataManager.checkError = function() {
  if (DataManager._errorUrl)
    throw new Error("Failed to load: " + DataManager._errorUrl);
};
DataManager.isBattleTest = function() {
  return Utils.isOptionValid("btest");
};
DataManager.isEventTest = function() {
  return Utils.isOptionValid("etest");
};
DataManager.isSkill = function(t) {
  return t && $dataSkills.contains(t);
};
DataManager.isItem = function(t) {
  return t && $dataItems.contains(t);
};
DataManager.isWeapon = function(t) {
  return t && $dataWeapons.contains(t);
};
DataManager.isArmor = function(t) {
  return t && $dataArmors.contains(t);
};
DataManager.createGameObjects = function() {
  $gameTemp = new Game_Temp(), $gameSystem = new Game_System(), $gameScreen = new Game_Screen(), $gameTimer = new Game_Timer(), $gameMessage = new Game_Message(), $gameSwitches = new Game_Switches(), $gameVariables = new Game_Variables(), $gameSelfSwitches = new Game_SelfSwitches(), $gameActors = new Game_Actors(), $gameParty = new Game_Party(), $gameTroop = new Game_Troop(), $gameMap = new Game_Map(), $gamePlayer = new Game_Player();
};
DataManager.setupNewGame = function() {
  this.createGameObjects(), this.selectSavefileForNewGame(), $gameParty.setupStartingMembers(), $gamePlayer.reserveTransfer(
    $dataSystem.startMapId,
    $dataSystem.startX,
    $dataSystem.startY
  ), Graphics.frameCount = 0;
};
DataManager.setupBattleTest = function() {
  this.createGameObjects(), $gameParty.setupBattleTest(), BattleManager.setup($dataSystem.testTroopId, !0, !1), BattleManager.setBattleTest(!0), BattleManager.playBattleBgm();
};
DataManager.setupEventTest = function() {
  this.createGameObjects(), this.selectSavefileForNewGame(), $gameParty.setupStartingMembers(), $gamePlayer.reserveTransfer(-1, 8, 6), $gamePlayer.setTransparent(!1);
};
DataManager.loadGlobalInfo = function() {
  var t;
  try {
    t = StorageManager.load(0);
  } catch (s) {
    return console.error(s), [];
  }
  if (t) {
    for (var e = JSON.parse(t), r = 1; r <= this.maxSavefiles(); r++)
      StorageManager.exists(r) || delete e[r];
    return e;
  } else
    return [];
};
DataManager.saveGlobalInfo = function(t) {
  StorageManager.save(0, JSON.stringify(t));
};
DataManager.isThisGameFile = function(t) {
  var e = this.loadGlobalInfo();
  if (e && e[t]) {
    if (StorageManager.isLocalMode())
      return !0;
    var r = e[t];
    return r.globalId === this._globalId && r.title === $dataSystem.gameTitle;
  } else
    return !1;
};
DataManager.isAnySavefileExists = function() {
  var t = this.loadGlobalInfo();
  if (t) {
    for (var e = 1; e < t.length; e++)
      if (this.isThisGameFile(e))
        return !0;
  }
  return !1;
};
DataManager.latestSavefileId = function() {
  var t = this.loadGlobalInfo(), e = 1, r = 0;
  if (t)
    for (var s = 1; s < t.length; s++)
      this.isThisGameFile(s) && t[s].timestamp > r && (r = t[s].timestamp, e = s);
  return e;
};
DataManager.loadAllSavefileImages = function() {
  var t = this.loadGlobalInfo();
  if (t) {
    for (var e = 1; e < t.length; e++)
      if (this.isThisGameFile(e)) {
        var r = t[e];
        this.loadSavefileImages(r);
      }
  }
};
DataManager.loadSavefileImages = function(t) {
  if (t.characters)
    for (var e = 0; e < t.characters.length; e++)
      ImageManager.reserveCharacter(t.characters[e][0]);
  if (t.faces)
    for (var r = 0; r < t.faces.length; r++)
      ImageManager.reserveFace(t.faces[r][0]);
};
DataManager.maxSavefiles = function() {
  return 20;
};
DataManager.saveGame = function(t) {
  try {
    return StorageManager.backup(t), this.saveGameWithoutRescue(t);
  } catch (e) {
    console.error(e);
    try {
      StorageManager.remove(t), StorageManager.restoreBackup(t);
    } catch {
    }
    return !1;
  }
};
DataManager.loadGame = function(t) {
  try {
    return this.loadGameWithoutRescue(t);
  } catch (e) {
    return console.error(e), !1;
  }
};
DataManager.loadSavefileInfo = function(t) {
  var e = this.loadGlobalInfo();
  return e && e[t] ? e[t] : null;
};
DataManager.lastAccessedSavefileId = function() {
  return this._lastAccessedId;
};
DataManager.saveGameWithoutRescue = function(t) {
  var e = JsonEx.stringify(this.makeSaveContents());
  e.length >= 2e5 && console.warn("Save data too big!"), StorageManager.save(t, e), this._lastAccessedId = t;
  var r = this.loadGlobalInfo() || [];
  return r[t] = this.makeSavefileInfo(), this.saveGlobalInfo(r), !0;
};
DataManager.loadGameWithoutRescue = function(t) {
  var e = this.loadGlobalInfo();
  if (this.isThisGameFile(t)) {
    var r = StorageManager.load(t);
    return this.createGameObjects(), this.extractSaveContents(JsonEx.parse(r)), this._lastAccessedId = t, !0;
  } else
    return !1;
};
DataManager.selectSavefileForNewGame = function() {
  var t = this.loadGlobalInfo();
  if (this._lastAccessedId = 1, t) {
    var e = Math.max(0, t.length - 1);
    if (e < this.maxSavefiles())
      this._lastAccessedId = e + 1;
    else
      for (var r = Number.MAX_VALUE, s = 1; s < t.length; s++) {
        if (!t[s]) {
          this._lastAccessedId = s;
          break;
        }
        t[s].timestamp < r && (r = t[s].timestamp, this._lastAccessedId = s);
      }
  }
};
DataManager.makeSavefileInfo = function() {
  var t = {};
  return t.globalId = this._globalId, t.title = $dataSystem.gameTitle, t.characters = $gameParty.charactersForSavefile(), t.faces = $gameParty.facesForSavefile(), t.playtime = $gameSystem.playtimeText(), t.timestamp = Date.now(), t;
};
DataManager.makeSaveContents = function() {
  var t = {};
  return t.system = $gameSystem, t.screen = $gameScreen, t.timer = $gameTimer, t.switches = $gameSwitches, t.variables = $gameVariables, t.selfSwitches = $gameSelfSwitches, t.actors = $gameActors, t.party = $gameParty, t.map = $gameMap, t.player = $gamePlayer, t;
};
DataManager.extractSaveContents = function(t) {
  $gameSystem = t.system, $gameScreen = t.screen, $gameTimer = t.timer, $gameSwitches = t.switches, $gameVariables = t.variables, $gameSelfSwitches = t.selfSwitches, $gameActors = t.actors, $gameParty = t.party, $gameMap = t.map, $gamePlayer = t.player;
};
const DataManager$1 = DataManager;
ConfigManager = function() {
  throw new Error("This is a static class");
};
ConfigManager.alwaysDash = !1;
ConfigManager.commandRemember = !1;
Object.defineProperty(ConfigManager, "bgmVolume", {
  get: function() {
    return AudioManager._bgmVolume;
  },
  set: function(t) {
    AudioManager.bgmVolume = t;
  },
  configurable: !0
});
Object.defineProperty(ConfigManager, "bgsVolume", {
  get: function() {
    return AudioManager.bgsVolume;
  },
  set: function(t) {
    AudioManager.bgsVolume = t;
  },
  configurable: !0
});
Object.defineProperty(ConfigManager, "meVolume", {
  get: function() {
    return AudioManager.meVolume;
  },
  set: function(t) {
    AudioManager.meVolume = t;
  },
  configurable: !0
});
Object.defineProperty(ConfigManager, "seVolume", {
  get: function() {
    return AudioManager.seVolume;
  },
  set: function(t) {
    AudioManager.seVolume = t;
  },
  configurable: !0
});
ConfigManager.load = function() {
  var t, e = {};
  try {
    t = StorageManager.load(-1);
  } catch (r) {
    console.error(r);
  }
  t && (e = JSON.parse(t)), this.applyData(e);
};
ConfigManager.save = function() {
  StorageManager.save(-1, JSON.stringify(this.makeData()));
};
ConfigManager.makeData = function() {
  var t = {};
  return t.alwaysDash = this.alwaysDash, t.commandRemember = this.commandRemember, t.bgmVolume = this.bgmVolume, t.bgsVolume = this.bgsVolume, t.meVolume = this.meVolume, t.seVolume = this.seVolume, t;
};
ConfigManager.applyData = function(t) {
  this.alwaysDash = this.readFlag(t, "alwaysDash"), this.commandRemember = this.readFlag(t, "commandRemember"), this.bgmVolume = this.readVolume(t, "bgmVolume"), this.bgsVolume = this.readVolume(t, "bgsVolume"), this.meVolume = this.readVolume(t, "meVolume"), this.seVolume = this.readVolume(t, "seVolume");
};
ConfigManager.readFlag = function(t, e) {
  return !!t[e];
};
ConfigManager.readVolume = function(t, e) {
  var r = t[e];
  return r !== void 0 ? Number(r).clamp(0, 100) : 100;
};
const ConfigManager$1 = ConfigManager;
StorageManager = function() {
  throw new Error("This is a static class");
};
StorageManager.save = function(t, e) {
  this.isLocalMode() ? this.saveToLocalFile(t, e) : this.saveToWebStorage(t, e);
};
StorageManager.load = function(t) {
  return this.isLocalMode() ? this.loadFromLocalFile(t) : this.loadFromWebStorage(t);
};
StorageManager.exists = function(t) {
  return this.isLocalMode() ? this.localFileExists(t) : this.webStorageExists(t);
};
StorageManager.remove = function(t) {
  this.isLocalMode() ? this.removeLocalFile(t) : this.removeWebStorage(t);
};
StorageManager.backup = function(t) {
  if (this.exists(t))
    if (this.isLocalMode()) {
      var e = this.loadFromLocalFile(t), r = LZString.compressToBase64(e), s = require("fs"), o = this.localFileDirectoryPath(), h = this.localFilePath(t) + ".bak";
      s.existsSync(o) || s.mkdirSync(o), s.writeFileSync(h, r);
    } else {
      var e = this.loadFromWebStorage(t), r = LZString.compressToBase64(e), p = this.webStorageKey(t) + "bak";
      localStorage.setItem(p, r);
    }
};
StorageManager.backupExists = function(t) {
  return this.isLocalMode() ? this.localFileBackupExists(t) : this.webStorageBackupExists(t);
};
StorageManager.cleanBackup = function(t) {
  if (this.backupExists(t))
    if (this.isLocalMode()) {
      var e = require("fs"), r = this.localFileDirectoryPath(), s = this.localFilePath(t);
      e.unlinkSync(s + ".bak");
    } else {
      var o = this.webStorageKey(t);
      localStorage.removeItem(o + "bak");
    }
};
StorageManager.restoreBackup = function(t) {
  if (this.backupExists(t))
    if (this.isLocalMode()) {
      var e = this.loadFromLocalBackupFile(t), r = LZString.compressToBase64(e), s = require("fs"), o = this.localFileDirectoryPath(), h = this.localFilePath(t);
      s.existsSync(o) || s.mkdirSync(o), s.writeFileSync(h, r), s.unlinkSync(h + ".bak");
    } else {
      var e = this.loadFromWebStorageBackup(t), r = LZString.compressToBase64(e), p = this.webStorageKey(t);
      localStorage.setItem(p, r), localStorage.removeItem(p + "bak");
    }
};
StorageManager.isLocalMode = function() {
  return Utils.isNwjs();
};
StorageManager.saveToLocalFile = function(t, e) {
  var r = LZString.compressToBase64(e), s = require("fs"), o = this.localFileDirectoryPath(), h = this.localFilePath(t);
  s.existsSync(o) || s.mkdirSync(o), s.writeFileSync(h, r);
};
StorageManager.loadFromLocalFile = function(t) {
  var e = null, r = require("fs"), s = this.localFilePath(t);
  return r.existsSync(s) && (e = r.readFileSync(s, { encoding: "utf8" })), LZString.decompressFromBase64(e);
};
StorageManager.loadFromLocalBackupFile = function(t) {
  var e = null, r = require("fs"), s = this.localFilePath(t) + ".bak";
  return r.existsSync(s) && (e = r.readFileSync(s, { encoding: "utf8" })), LZString.decompressFromBase64(e);
};
StorageManager.localFileBackupExists = function(t) {
  var e = require("fs");
  return e.existsSync(this.localFilePath(t) + ".bak");
};
StorageManager.localFileExists = function(t) {
  var e = require("fs");
  return e.existsSync(this.localFilePath(t));
};
StorageManager.removeLocalFile = function(t) {
  var e = require("fs"), r = this.localFilePath(t);
  e.existsSync(r) && e.unlinkSync(r);
};
StorageManager.saveToWebStorage = function(t, e) {
  var r = this.webStorageKey(t), s = LZString.compressToBase64(e);
  localStorage.setItem(r, s);
};
StorageManager.loadFromWebStorage = function(t) {
  var e = this.webStorageKey(t), r = localStorage.getItem(e);
  return LZString.decompressFromBase64(r);
};
StorageManager.loadFromWebStorageBackup = function(t) {
  var e = this.webStorageKey(t) + "bak", r = localStorage.getItem(e);
  return LZString.decompressFromBase64(r);
};
StorageManager.webStorageBackupExists = function(t) {
  var e = this.webStorageKey(t) + "bak";
  return !!localStorage.getItem(e);
};
StorageManager.webStorageExists = function(t) {
  var e = this.webStorageKey(t);
  return !!localStorage.getItem(e);
};
StorageManager.removeWebStorage = function(t) {
  var e = this.webStorageKey(t);
  localStorage.removeItem(e);
};
StorageManager.localFileDirectoryPath = function() {
  var t = require("path"), e = t.dirname(process.mainModule.filename);
  return t.join(e, "save/");
};
StorageManager.localFilePath = function(t) {
  var e;
  return t < 0 ? e = "config.rpgsave" : t === 0 ? e = "global.rpgsave" : e = "file%1.rpgsave".format(t), this.localFileDirectoryPath() + e;
};
StorageManager.webStorageKey = function(t) {
  return t < 0 ? "RPG Config" : t === 0 ? "RPG Global" : "RPG File%1".format(t);
};
const StorageManager$1 = StorageManager;
ImageManager = function() {
  throw new Error("This is a static class");
};
ImageManager.cache = new CacheMap(ImageManager);
ImageManager._imageCache = new ImageCache();
ImageManager._requestQueue = new RequestQueue();
ImageManager._systemReservationId = Utils.generateRuntimeId();
ImageManager._generateCacheKey = function(t, e) {
  return t + ":" + e;
};
ImageManager.loadAnimation = function(t, e) {
  return this.loadBitmap("img/animations/", t, e, !0);
};
ImageManager.loadBattleback1 = function(t, e) {
  return this.loadBitmap("img/battlebacks1/", t, e, !0);
};
ImageManager.loadBattleback2 = function(t, e) {
  return this.loadBitmap("img/battlebacks2/", t, e, !0);
};
ImageManager.loadEnemy = function(t, e) {
  return this.loadBitmap("img/enemies/", t, e, !0);
};
ImageManager.loadCharacter = function(t, e) {
  return this.loadBitmap("img/characters/", t, e, !1);
};
ImageManager.loadFace = function(t, e) {
  return this.loadBitmap("img/faces/", t, e, !0);
};
ImageManager.loadParallax = function(t, e) {
  return this.loadBitmap("img/parallaxes/", t, e, !0);
};
ImageManager.loadPicture = function(t, e) {
  return this.loadBitmap("img/pictures/", t, e, !0);
};
ImageManager.loadSvActor = function(t, e) {
  return this.loadBitmap("img/sv_actors/", t, e, !1);
};
ImageManager.loadSvEnemy = function(t, e) {
  return this.loadBitmap("img/sv_enemies/", t, e, !0);
};
ImageManager.loadSystem = function(t, e) {
  return this.loadBitmap("img/system/", t, e, !1);
};
ImageManager.loadTileset = function(t, e) {
  return this.loadBitmap("img/tilesets/", t, e, !1);
};
ImageManager.loadTitle1 = function(t, e) {
  return this.loadBitmap("img/titles1/", t, e, !0);
};
ImageManager.loadTitle2 = function(t, e) {
  return this.loadBitmap("img/titles2/", t, e, !0);
};
ImageManager.loadBitmap = function(t, e, r, s) {
  if (e) {
    var o = t + encodeURIComponent(e) + ".png", h = this.loadNormalBitmap(o, r || 0);
    return h.smooth = s, h;
  } else
    return this.loadEmptyBitmap();
};
ImageManager.loadEmptyBitmap = function() {
  var t = this._imageCache.get("empty");
  return t || (t = new Bitmap(), this._imageCache.add("empty", t), this._imageCache.reserve("empty", t, this._systemReservationId)), t;
};
ImageManager.loadNormalBitmap = function(t, e) {
  var r = this._generateCacheKey(t, e), s = this._imageCache.get(r);
  return s ? s.isReady() || s.decode() : (s = Bitmap.load(decodeURIComponent(t)), s.addLoadListener(function() {
    s.rotateHue(e);
  }), this._imageCache.add(r, s)), s;
};
ImageManager.clear = function() {
  this._imageCache = new ImageCache();
};
ImageManager.isReady = function() {
  return this._imageCache.isReady();
};
ImageManager.isObjectCharacter = function(t) {
  var e = t.match(/^[\!\$]+/);
  return e && e[0].contains("!");
};
ImageManager.isBigCharacter = function(t) {
  var e = t.match(/^[\!\$]+/);
  return e && e[0].contains("$");
};
ImageManager.isZeroParallax = function(t) {
  return t.charAt(0) === "!";
};
ImageManager.reserveAnimation = function(t, e, r) {
  return this.reserveBitmap("img/animations/", t, e, !0, r);
};
ImageManager.reserveBattleback1 = function(t, e, r) {
  return this.reserveBitmap("img/battlebacks1/", t, e, !0, r);
};
ImageManager.reserveBattleback2 = function(t, e, r) {
  return this.reserveBitmap("img/battlebacks2/", t, e, !0, r);
};
ImageManager.reserveEnemy = function(t, e, r) {
  return this.reserveBitmap("img/enemies/", t, e, !0, r);
};
ImageManager.reserveCharacter = function(t, e, r) {
  return this.reserveBitmap("img/characters/", t, e, !1, r);
};
ImageManager.reserveFace = function(t, e, r) {
  return this.reserveBitmap("img/faces/", t, e, !0, r);
};
ImageManager.reserveParallax = function(t, e, r) {
  return this.reserveBitmap("img/parallaxes/", t, e, !0, r);
};
ImageManager.reservePicture = function(t, e, r) {
  return this.reserveBitmap("img/pictures/", t, e, !0, r);
};
ImageManager.reserveSvActor = function(t, e, r) {
  return this.reserveBitmap("img/sv_actors/", t, e, !1, r);
};
ImageManager.reserveSvEnemy = function(t, e, r) {
  return this.reserveBitmap("img/sv_enemies/", t, e, !0, r);
};
ImageManager.reserveSystem = function(t, e, r) {
  return this.reserveBitmap("img/system/", t, e, !1, r || this._systemReservationId);
};
ImageManager.reserveTileset = function(t, e, r) {
  return this.reserveBitmap("img/tilesets/", t, e, !1, r);
};
ImageManager.reserveTitle1 = function(t, e, r) {
  return this.reserveBitmap("img/titles1/", t, e, !0, r);
};
ImageManager.reserveTitle2 = function(t, e, r) {
  return this.reserveBitmap("img/titles2/", t, e, !0, r);
};
ImageManager.reserveBitmap = function(t, e, r, s, o) {
  if (e) {
    var h = t + encodeURIComponent(e) + ".png", p = this.reserveNormalBitmap(h, r || 0, o || this._defaultReservationId);
    return p.smooth = s, p;
  } else
    return this.loadEmptyBitmap();
};
ImageManager.reserveNormalBitmap = function(t, e, r) {
  var s = this.loadNormalBitmap(t, e);
  return this._imageCache.reserve(this._generateCacheKey(t, e), s, r), s;
};
ImageManager.releaseReservation = function(t) {
  this._imageCache.releaseReservation(t);
};
ImageManager.setDefaultReservationId = function(t) {
  this._defaultReservationId = t;
};
ImageManager.requestAnimation = function(t, e) {
  return this.requestBitmap("img/animations/", t, e, !0);
};
ImageManager.requestBattleback1 = function(t, e) {
  return this.requestBitmap("img/battlebacks1/", t, e, !0);
};
ImageManager.requestBattleback2 = function(t, e) {
  return this.requestBitmap("img/battlebacks2/", t, e, !0);
};
ImageManager.requestEnemy = function(t, e) {
  return this.requestBitmap("img/enemies/", t, e, !0);
};
ImageManager.requestCharacter = function(t, e) {
  return this.requestBitmap("img/characters/", t, e, !1);
};
ImageManager.requestFace = function(t, e) {
  return this.requestBitmap("img/faces/", t, e, !0);
};
ImageManager.requestParallax = function(t, e) {
  return this.requestBitmap("img/parallaxes/", t, e, !0);
};
ImageManager.requestPicture = function(t, e) {
  return this.requestBitmap("img/pictures/", t, e, !0);
};
ImageManager.requestSvActor = function(t, e) {
  return this.requestBitmap("img/sv_actors/", t, e, !1);
};
ImageManager.requestSvEnemy = function(t, e) {
  return this.requestBitmap("img/sv_enemies/", t, e, !0);
};
ImageManager.requestSystem = function(t, e) {
  return this.requestBitmap("img/system/", t, e, !1);
};
ImageManager.requestTileset = function(t, e) {
  return this.requestBitmap("img/tilesets/", t, e, !1);
};
ImageManager.requestTitle1 = function(t, e) {
  return this.requestBitmap("img/titles1/", t, e, !0);
};
ImageManager.requestTitle2 = function(t, e) {
  return this.requestBitmap("img/titles2/", t, e, !0);
};
ImageManager.requestBitmap = function(t, e, r, s) {
  if (e) {
    var o = t + encodeURIComponent(e) + ".png", h = this.requestNormalBitmap(o, r || 0);
    return h.smooth = s, h;
  } else
    return this.loadEmptyBitmap();
};
ImageManager.requestNormalBitmap = function(t, e) {
  var r = this._generateCacheKey(t, e), s = this._imageCache.get(r);
  return s ? this._requestQueue.raisePriority(r) : (s = Bitmap.request(t), s.addLoadListener(function() {
    s.rotateHue(e);
  }), this._imageCache.add(r, s), this._requestQueue.enqueue(r, s)), s;
};
ImageManager.update = function() {
  this._requestQueue.update();
};
ImageManager.clearRequest = function() {
  this._requestQueue.clear();
};
const ImageManager$1 = ImageManager;
AudioManager = function() {
  throw new Error("This is a static class");
};
AudioManager._masterVolume = 1;
AudioManager._bgmVolume = 100;
AudioManager._bgsVolume = 100;
AudioManager._meVolume = 100;
AudioManager._seVolume = 100;
AudioManager._currentBgm = null;
AudioManager._currentBgs = null;
AudioManager._bgmBuffer = null;
AudioManager._bgsBuffer = null;
AudioManager._meBuffer = null;
AudioManager._seBuffers = [];
AudioManager._staticBuffers = [];
AudioManager._replayFadeTime = 0.5;
AudioManager._path = "audio/";
AudioManager._blobUrl = null;
Object.defineProperty(AudioManager, "masterVolume", {
  get: function() {
    return this._masterVolume;
  },
  set: function(t) {
    this._masterVolume = t, WebAudio.setMasterVolume(this._masterVolume), Graphics.setVideoVolume(this._masterVolume);
  },
  configurable: !0
});
Object.defineProperty(AudioManager, "bgmVolume", {
  get: function() {
    return this._bgmVolume;
  },
  set: function(t) {
    this._bgmVolume = t, this.updateBgmParameters(this._currentBgm);
  },
  configurable: !0
});
Object.defineProperty(AudioManager, "bgsVolume", {
  get: function() {
    return this._bgsVolume;
  },
  set: function(t) {
    this._bgsVolume = t, this.updateBgsParameters(this._currentBgs);
  },
  configurable: !0
});
Object.defineProperty(AudioManager, "meVolume", {
  get: function() {
    return this._meVolume;
  },
  set: function(t) {
    this._meVolume = t, this.updateMeParameters(this._currentMe);
  },
  configurable: !0
});
Object.defineProperty(AudioManager, "seVolume", {
  get: function() {
    return this._seVolume;
  },
  set: function(t) {
    this._seVolume = t;
  },
  configurable: !0
});
AudioManager.playBgm = function(t, e) {
  this.isCurrentBgm(t) ? this.updateBgmParameters(t) : (this.stopBgm(), t.name && (Decrypter.hasEncryptedAudio && this.shouldUseHtml5Audio() ? this.playEncryptedBgm(t, e) : (this._bgmBuffer = this.createBuffer("bgm", t.name), this.updateBgmParameters(t), this._meBuffer || this._bgmBuffer.play(!0, e || 0)))), this.updateCurrentBgm(t, e);
};
AudioManager.playEncryptedBgm = function(t, e) {
  var r = this.audioFileExt(), s = this._path + "bgm/" + encodeURIComponent(t.name) + r;
  s = Decrypter.extToEncryptExt(s), Decrypter.decryptHTML5Audio(s, t, e);
};
AudioManager.createDecryptBuffer = function(t, e, r) {
  this._blobUrl = t, this._bgmBuffer = this.createBuffer("bgm", e.name), this.updateBgmParameters(e), this._meBuffer || this._bgmBuffer.play(!0, r || 0), this.updateCurrentBgm(e, r);
};
AudioManager.replayBgm = function(t) {
  this.isCurrentBgm(t) ? this.updateBgmParameters(t) : (this.playBgm(t, t.pos), this._bgmBuffer && this._bgmBuffer.fadeIn(this._replayFadeTime));
};
AudioManager.isCurrentBgm = function(t) {
  return this._currentBgm && this._bgmBuffer && this._currentBgm.name === t.name;
};
AudioManager.updateBgmParameters = function(t) {
  this.updateBufferParameters(this._bgmBuffer, this._bgmVolume, t);
};
AudioManager.updateCurrentBgm = function(t, e) {
  this._currentBgm = {
    name: t.name,
    volume: t.volume,
    pitch: t.pitch,
    pan: t.pan,
    pos: e
  };
};
AudioManager.stopBgm = function() {
  this._bgmBuffer && (this._bgmBuffer.stop(), this._bgmBuffer = null, this._currentBgm = null);
};
AudioManager.fadeOutBgm = function(t) {
  this._bgmBuffer && this._currentBgm && (this._bgmBuffer.fadeOut(t), this._currentBgm = null);
};
AudioManager.fadeInBgm = function(t) {
  this._bgmBuffer && this._currentBgm && this._bgmBuffer.fadeIn(t);
};
AudioManager.playBgs = function(t, e) {
  this.isCurrentBgs(t) ? this.updateBgsParameters(t) : (this.stopBgs(), t.name && (this._bgsBuffer = this.createBuffer("bgs", t.name), this.updateBgsParameters(t), this._bgsBuffer.play(!0, e || 0))), this.updateCurrentBgs(t, e);
};
AudioManager.replayBgs = function(t) {
  this.isCurrentBgs(t) ? this.updateBgsParameters(t) : (this.playBgs(t, t.pos), this._bgsBuffer && this._bgsBuffer.fadeIn(this._replayFadeTime));
};
AudioManager.isCurrentBgs = function(t) {
  return this._currentBgs && this._bgsBuffer && this._currentBgs.name === t.name;
};
AudioManager.updateBgsParameters = function(t) {
  this.updateBufferParameters(this._bgsBuffer, this._bgsVolume, t);
};
AudioManager.updateCurrentBgs = function(t, e) {
  this._currentBgs = {
    name: t.name,
    volume: t.volume,
    pitch: t.pitch,
    pan: t.pan,
    pos: e
  };
};
AudioManager.stopBgs = function() {
  this._bgsBuffer && (this._bgsBuffer.stop(), this._bgsBuffer = null, this._currentBgs = null);
};
AudioManager.fadeOutBgs = function(t) {
  this._bgsBuffer && this._currentBgs && (this._bgsBuffer.fadeOut(t), this._currentBgs = null);
};
AudioManager.fadeInBgs = function(t) {
  this._bgsBuffer && this._currentBgs && this._bgsBuffer.fadeIn(t);
};
AudioManager.playMe = function(t) {
  this.stopMe(), t.name && (this._bgmBuffer && this._currentBgm && (this._currentBgm.pos = this._bgmBuffer.seek(), this._bgmBuffer.stop()), this._meBuffer = this.createBuffer("me", t.name), this.updateMeParameters(t), this._meBuffer.play(!1), this._meBuffer.addStopListener(this.stopMe.bind(this)));
};
AudioManager.updateMeParameters = function(t) {
  this.updateBufferParameters(this._meBuffer, this._meVolume, t);
};
AudioManager.fadeOutMe = function(t) {
  this._meBuffer && this._meBuffer.fadeOut(t);
};
AudioManager.stopMe = function() {
  this._meBuffer && (this._meBuffer.stop(), this._meBuffer = null, this._bgmBuffer && this._currentBgm && !this._bgmBuffer.isPlaying() && (this._bgmBuffer.play(!0, this._currentBgm.pos), this._bgmBuffer.fadeIn(this._replayFadeTime)));
};
AudioManager.playSe = function(t) {
  if (t.name) {
    this._seBuffers = this._seBuffers.filter(function(r) {
      return r.isPlaying();
    });
    var e = this.createBuffer("se", t.name);
    this.updateSeParameters(e, t), e.play(!1), this._seBuffers.push(e);
  }
};
AudioManager.updateSeParameters = function(t, e) {
  this.updateBufferParameters(t, this._seVolume, e);
};
AudioManager.stopSe = function() {
  this._seBuffers.forEach(function(t) {
    t.stop();
  }), this._seBuffers = [];
};
AudioManager.playStaticSe = function(t) {
  if (t.name) {
    this.loadStaticSe(t);
    for (var e = 0; e < this._staticBuffers.length; e++) {
      var r = this._staticBuffers[e];
      if (r._reservedSeName === t.name) {
        r.stop(), this.updateSeParameters(r, t), r.play(!1);
        break;
      }
    }
  }
};
AudioManager.loadStaticSe = function(t) {
  if (t.name && !this.isStaticSe(t)) {
    var e = this.createBuffer("se", t.name);
    e._reservedSeName = t.name, this._staticBuffers.push(e), this.shouldUseHtml5Audio() && Html5Audio.setStaticSe(e._url);
  }
};
AudioManager.isStaticSe = function(t) {
  for (var e = 0; e < this._staticBuffers.length; e++) {
    var r = this._staticBuffers[e];
    if (r._reservedSeName === t.name)
      return !0;
  }
  return !1;
};
AudioManager.stopAll = function() {
  this.stopMe(), this.stopBgm(), this.stopBgs(), this.stopSe();
};
AudioManager.saveBgm = function() {
  if (this._currentBgm) {
    var t = this._currentBgm;
    return {
      name: t.name,
      volume: t.volume,
      pitch: t.pitch,
      pan: t.pan,
      pos: this._bgmBuffer ? this._bgmBuffer.seek() : 0
    };
  } else
    return this.makeEmptyAudioObject();
};
AudioManager.saveBgs = function() {
  if (this._currentBgs) {
    var t = this._currentBgs;
    return {
      name: t.name,
      volume: t.volume,
      pitch: t.pitch,
      pan: t.pan,
      pos: this._bgsBuffer ? this._bgsBuffer.seek() : 0
    };
  } else
    return this.makeEmptyAudioObject();
};
AudioManager.makeEmptyAudioObject = function() {
  return { name: "", volume: 0, pitch: 0 };
};
AudioManager.createBuffer = function(t, e) {
  var r = this.audioFileExt(), s = this._path + t + "/" + encodeURIComponent(e) + r;
  return this.shouldUseHtml5Audio() && t === "bgm" ? (this._blobUrl ? Html5Audio.setup(this._blobUrl) : Html5Audio.setup(s), Html5Audio) : new WebAudio(s);
};
AudioManager.updateBufferParameters = function(t, e, r) {
  t && r && (t.volume = e * (r.volume || 0) / 1e4, t.pitch = (r.pitch || 0) / 100, t.pan = (r.pan || 0) / 100);
};
AudioManager.audioFileExt = function() {
  return WebAudio.canPlayOgg() && !Utils.isMobileDevice() ? ".ogg" : ".m4a";
};
AudioManager.shouldUseHtml5Audio = function() {
  return !1;
};
AudioManager.checkErrors = function() {
  this.checkWebAudioError(this._bgmBuffer), this.checkWebAudioError(this._bgsBuffer), this.checkWebAudioError(this._meBuffer), this._seBuffers.forEach((function(t) {
    this.checkWebAudioError(t);
  }).bind(this)), this._staticBuffers.forEach((function(t) {
    this.checkWebAudioError(t);
  }).bind(this));
};
AudioManager.checkWebAudioError = function(t) {
  if (t && t.isError())
    throw new Error("Failed to load: " + t.url);
};
const AudioManager$1 = AudioManager;
SoundManager = function() {
  throw new Error("This is a static class");
};
SoundManager.preloadImportantSounds = function() {
  this.loadSystemSound(0), this.loadSystemSound(1), this.loadSystemSound(2), this.loadSystemSound(3);
};
SoundManager.loadSystemSound = function(t) {
  $dataSystem && AudioManager.loadStaticSe($dataSystem.sounds[t]);
};
SoundManager.playSystemSound = function(t) {
  $dataSystem && AudioManager.playStaticSe($dataSystem.sounds[t]);
};
SoundManager.playCursor = function() {
  this.playSystemSound(0);
};
SoundManager.playOk = function() {
  this.playSystemSound(1);
};
SoundManager.playCancel = function() {
  this.playSystemSound(2);
};
SoundManager.playBuzzer = function() {
  this.playSystemSound(3);
};
SoundManager.playEquip = function() {
  this.playSystemSound(4);
};
SoundManager.playSave = function() {
  this.playSystemSound(5);
};
SoundManager.playLoad = function() {
  this.playSystemSound(6);
};
SoundManager.playBattleStart = function() {
  this.playSystemSound(7);
};
SoundManager.playEscape = function() {
  this.playSystemSound(8);
};
SoundManager.playEnemyAttack = function() {
  this.playSystemSound(9);
};
SoundManager.playEnemyDamage = function() {
  this.playSystemSound(10);
};
SoundManager.playEnemyCollapse = function() {
  this.playSystemSound(11);
};
SoundManager.playBossCollapse1 = function() {
  this.playSystemSound(12);
};
SoundManager.playBossCollapse2 = function() {
  this.playSystemSound(13);
};
SoundManager.playActorDamage = function() {
  this.playSystemSound(14);
};
SoundManager.playActorCollapse = function() {
  this.playSystemSound(15);
};
SoundManager.playRecovery = function() {
  this.playSystemSound(16);
};
SoundManager.playMiss = function() {
  this.playSystemSound(17);
};
SoundManager.playEvasion = function() {
  this.playSystemSound(18);
};
SoundManager.playMagicEvasion = function() {
  this.playSystemSound(19);
};
SoundManager.playReflection = function() {
  this.playSystemSound(20);
};
SoundManager.playShop = function() {
  this.playSystemSound(21);
};
SoundManager.playUseItem = function() {
  this.playSystemSound(22);
};
SoundManager.playUseSkill = function() {
  this.playSystemSound(23);
};
const SoundManager$1 = SoundManager;
TextManager = function() {
  throw new Error("This is a static class");
};
TextManager.basic = function(t) {
  return $dataSystem.terms.basic[t] || "";
};
TextManager.param = function(t) {
  return $dataSystem.terms.params[t] || "";
};
TextManager.command = function(t) {
  return $dataSystem.terms.commands[t] || "";
};
TextManager.message = function(t) {
  return $dataSystem.terms.messages[t] || "";
};
TextManager.getter = function(t, e) {
  return {
    get: function() {
      return this[t](e);
    },
    configurable: !0
  };
};
Object.defineProperty(TextManager, "currencyUnit", {
  get: function() {
    return $dataSystem.currencyUnit;
  },
  configurable: !0
});
Object.defineProperties(TextManager, {
  level: TextManager.getter("basic", 0),
  levelA: TextManager.getter("basic", 1),
  hp: TextManager.getter("basic", 2),
  hpA: TextManager.getter("basic", 3),
  mp: TextManager.getter("basic", 4),
  mpA: TextManager.getter("basic", 5),
  tp: TextManager.getter("basic", 6),
  tpA: TextManager.getter("basic", 7),
  exp: TextManager.getter("basic", 8),
  expA: TextManager.getter("basic", 9),
  fight: TextManager.getter("command", 0),
  escape: TextManager.getter("command", 1),
  attack: TextManager.getter("command", 2),
  guard: TextManager.getter("command", 3),
  item: TextManager.getter("command", 4),
  skill: TextManager.getter("command", 5),
  equip: TextManager.getter("command", 6),
  status: TextManager.getter("command", 7),
  formation: TextManager.getter("command", 8),
  save: TextManager.getter("command", 9),
  gameEnd: TextManager.getter("command", 10),
  options: TextManager.getter("command", 11),
  weapon: TextManager.getter("command", 12),
  armor: TextManager.getter("command", 13),
  keyItem: TextManager.getter("command", 14),
  equip2: TextManager.getter("command", 15),
  optimize: TextManager.getter("command", 16),
  clear: TextManager.getter("command", 17),
  newGame: TextManager.getter("command", 18),
  continue_: TextManager.getter("command", 19),
  toTitle: TextManager.getter("command", 21),
  cancel: TextManager.getter("command", 22),
  buy: TextManager.getter("command", 24),
  sell: TextManager.getter("command", 25),
  alwaysDash: TextManager.getter("message", "alwaysDash"),
  commandRemember: TextManager.getter("message", "commandRemember"),
  bgmVolume: TextManager.getter("message", "bgmVolume"),
  bgsVolume: TextManager.getter("message", "bgsVolume"),
  meVolume: TextManager.getter("message", "meVolume"),
  seVolume: TextManager.getter("message", "seVolume"),
  possession: TextManager.getter("message", "possession"),
  expTotal: TextManager.getter("message", "expTotal"),
  expNext: TextManager.getter("message", "expNext"),
  saveMessage: TextManager.getter("message", "saveMessage"),
  loadMessage: TextManager.getter("message", "loadMessage"),
  file: TextManager.getter("message", "file"),
  partyName: TextManager.getter("message", "partyName"),
  emerge: TextManager.getter("message", "emerge"),
  preemptive: TextManager.getter("message", "preemptive"),
  surprise: TextManager.getter("message", "surprise"),
  escapeStart: TextManager.getter("message", "escapeStart"),
  escapeFailure: TextManager.getter("message", "escapeFailure"),
  victory: TextManager.getter("message", "victory"),
  defeat: TextManager.getter("message", "defeat"),
  obtainExp: TextManager.getter("message", "obtainExp"),
  obtainGold: TextManager.getter("message", "obtainGold"),
  obtainItem: TextManager.getter("message", "obtainItem"),
  levelUp: TextManager.getter("message", "levelUp"),
  obtainSkill: TextManager.getter("message", "obtainSkill"),
  useItem: TextManager.getter("message", "useItem"),
  criticalToEnemy: TextManager.getter("message", "criticalToEnemy"),
  criticalToActor: TextManager.getter("message", "criticalToActor"),
  actorDamage: TextManager.getter("message", "actorDamage"),
  actorRecovery: TextManager.getter("message", "actorRecovery"),
  actorGain: TextManager.getter("message", "actorGain"),
  actorLoss: TextManager.getter("message", "actorLoss"),
  actorDrain: TextManager.getter("message", "actorDrain"),
  actorNoDamage: TextManager.getter("message", "actorNoDamage"),
  actorNoHit: TextManager.getter("message", "actorNoHit"),
  enemyDamage: TextManager.getter("message", "enemyDamage"),
  enemyRecovery: TextManager.getter("message", "enemyRecovery"),
  enemyGain: TextManager.getter("message", "enemyGain"),
  enemyLoss: TextManager.getter("message", "enemyLoss"),
  enemyDrain: TextManager.getter("message", "enemyDrain"),
  enemyNoDamage: TextManager.getter("message", "enemyNoDamage"),
  enemyNoHit: TextManager.getter("message", "enemyNoHit"),
  evasion: TextManager.getter("message", "evasion"),
  magicEvasion: TextManager.getter("message", "magicEvasion"),
  magicReflection: TextManager.getter("message", "magicReflection"),
  counterAttack: TextManager.getter("message", "counterAttack"),
  substitute: TextManager.getter("message", "substitute"),
  buffAdd: TextManager.getter("message", "buffAdd"),
  debuffAdd: TextManager.getter("message", "debuffAdd"),
  buffRemove: TextManager.getter("message", "buffRemove"),
  actionFailure: TextManager.getter("message", "actionFailure")
});
const TextManager$1 = TextManager;
SceneManager = function() {
  throw new Error("This is a static class");
};
SceneManager._getTimeInMsWithoutMobileSafari = function() {
  return performance.now();
};
SceneManager._scene = null;
SceneManager._nextScene = null;
SceneManager._stack = [];
SceneManager._stopped = !1;
SceneManager._sceneStarted = !1;
SceneManager._exiting = !1;
SceneManager._previousClass = null;
SceneManager._backgroundBitmap = null;
SceneManager._screenWidth = 816;
SceneManager._screenHeight = 624;
SceneManager._boxWidth = 816;
SceneManager._boxHeight = 624;
SceneManager._deltaTime = 1 / 60;
Utils.isMobileSafari() || (SceneManager._currentTime = SceneManager._getTimeInMsWithoutMobileSafari());
SceneManager._accumulator = 0;
SceneManager.run = function(t) {
  try {
    this.initialize(), this.goto(t), this.requestUpdate();
  } catch (e) {
    this.catchException(e);
  }
};
SceneManager.initialize = function() {
  this.initGraphics(), this.checkFileAccess(), this.initAudio(), this.initInput(), this.initNwjs(), this.checkPluginErrors(), this.setupErrorHandlers();
};
SceneManager.initGraphics = function() {
  var t = this.preferableRendererType();
  Graphics.initialize(this._screenWidth, this._screenHeight, t), Graphics.boxWidth = this._boxWidth, Graphics.boxHeight = this._boxHeight, Graphics.setLoadingImage("img/system/Loading.png"), Utils.isOptionValid("showfps") && Graphics.showFps(), t === "webgl" && this.checkWebGL();
};
SceneManager.preferableRendererType = function() {
  return Utils.isOptionValid("canvas") ? "canvas" : Utils.isOptionValid("webgl") ? "webgl" : "auto";
};
SceneManager.shouldUseCanvasRenderer = function() {
  return Utils.isMobileDevice();
};
SceneManager.checkWebGL = function() {
  if (!Graphics.hasWebGL())
    throw new Error("Your browser does not support WebGL.");
};
SceneManager.checkFileAccess = function() {
  if (!Utils.canReadGameFiles())
    throw new Error("Your browser does not allow to read local files.");
};
SceneManager.initAudio = function() {
  var t = Utils.isOptionValid("noaudio");
  if (!WebAudio.initialize(t) && !t)
    throw new Error("Your browser does not support Web Audio API.");
};
SceneManager.initInput = function() {
  Input.initialize(), TouchInput.initialize();
};
SceneManager.initNwjs = function() {
  if (Utils.isNwjs()) {
    var t = require("nw.gui"), e = t.Window.get();
    if (process.platform === "darwin" && !e.menu) {
      var r = new t.Menu({ type: "menubar" }), s = { hideEdit: !0, hideWindow: !0 };
      r.createMacBuiltin("Game", s), e.menu = r;
    }
  }
};
SceneManager.checkPluginErrors = function() {
  PluginManager.checkErrors();
};
SceneManager.setupErrorHandlers = function() {
  window.addEventListener("error", this.onError.bind(this)), document.addEventListener("keydown", this.onKeyDown.bind(this));
};
SceneManager.requestUpdate = function() {
  this._stopped || requestAnimationFrame(this.update.bind(this));
};
SceneManager.update = function() {
  try {
    this.tickStart(), Utils.isMobileSafari() && this.updateInputData(), this.updateManagers(), this.updateMain(), this.tickEnd();
  } catch (t) {
    this.catchException(t);
  }
};
SceneManager.terminate = function() {
  window.close();
};
SceneManager.onError = function(t) {
  console.error(t.message), console.error(t.filename, t.lineno);
  try {
    this.stop(), Graphics.printError("Error", t.message), AudioManager.stopAll();
  } catch {
  }
};
SceneManager.onKeyDown = function(t) {
  if (!t.ctrlKey && !t.altKey)
    switch (t.keyCode) {
      case 116:
        Utils.isNwjs() && location.reload();
        break;
      case 119:
        Utils.isNwjs() && Utils.isOptionValid("test") && require("nw.gui").Window.get().showDevTools();
        break;
    }
};
SceneManager.catchException = function(t) {
  t instanceof Error ? (Graphics.printError(t.name, t.message), console.error(t.stack)) : Graphics.printError("UnknownError", t), AudioManager.stopAll(), this.stop();
};
SceneManager.tickStart = function() {
  Graphics.tickStart();
};
SceneManager.tickEnd = function() {
  Graphics.tickEnd();
};
SceneManager.updateInputData = function() {
  Input.update(), TouchInput.update();
};
SceneManager.updateMain = function() {
  if (Utils.isMobileSafari())
    this.changeScene(), this.updateScene();
  else {
    var t = this._getTimeInMsWithoutMobileSafari(), e = (t - this._currentTime) / 1e3;
    for (e > 0.25 && (e = 0.25), this._currentTime = t, this._accumulator += e; this._accumulator >= this._deltaTime; )
      this.updateInputData(), this.changeScene(), this.updateScene(), this._accumulator -= this._deltaTime;
  }
  this.renderScene(), this.requestUpdate();
};
SceneManager.updateManagers = function() {
  ImageManager.update();
};
SceneManager.changeScene = function() {
  this.isSceneChanging() && !this.isCurrentSceneBusy() && (this._scene && (this._scene.terminate(), this._scene.detachReservation(), this._previousClass = this._scene.constructor), this._scene = this._nextScene, this._scene && (this._scene.attachReservation(), this._scene.create(), this._nextScene = null, this._sceneStarted = !1, this.onSceneCreate()), this._exiting && this.terminate());
};
SceneManager.updateScene = function() {
  this._scene && (!this._sceneStarted && this._scene.isReady() && (this._scene.start(), this._sceneStarted = !0, this.onSceneStart()), this.isCurrentSceneStarted() && this._scene.update());
};
SceneManager.renderScene = function() {
  this.isCurrentSceneStarted() ? Graphics.render(this._scene) : this._scene && this.onSceneLoading();
};
SceneManager.onSceneCreate = function() {
  Graphics.startLoading();
};
SceneManager.onSceneStart = function() {
  Graphics.endLoading();
};
SceneManager.onSceneLoading = function() {
  Graphics.updateLoading();
};
SceneManager.isSceneChanging = function() {
  return this._exiting || !!this._nextScene;
};
SceneManager.isCurrentSceneBusy = function() {
  return this._scene && this._scene.isBusy();
};
SceneManager.isCurrentSceneStarted = function() {
  return this._scene && this._sceneStarted;
};
SceneManager.isNextScene = function(t) {
  return this._nextScene && this._nextScene.constructor === t;
};
SceneManager.isPreviousScene = function(t) {
  return this._previousClass === t;
};
SceneManager.goto = function(t) {
  t && (this._nextScene = new t()), this._scene && this._scene.stop();
};
SceneManager.push = function(t) {
  this._stack.push(this._scene.constructor), this.goto(t);
};
SceneManager.pop = function() {
  this._stack.length > 0 ? this.goto(this._stack.pop()) : this.exit();
};
SceneManager.exit = function() {
  this.goto(null), this._exiting = !0;
};
SceneManager.clearStack = function() {
  this._stack = [];
};
SceneManager.stop = function() {
  this._stopped = !0;
};
SceneManager.prepareNextScene = function() {
  this._nextScene.prepare.apply(this._nextScene, arguments);
};
SceneManager.snap = function() {
  return Bitmap.snap(this._scene);
};
SceneManager.snapForBackground = function() {
  this._backgroundBitmap = this.snap(), this._backgroundBitmap.blur();
};
SceneManager.backgroundBitmap = function() {
  return this._backgroundBitmap;
};
SceneManager.resume = function() {
  this._stopped = !1, this.requestUpdate(), Utils.isMobileSafari() || (this._currentTime = this._getTimeInMsWithoutMobileSafari(), this._accumulator = 0);
};
const SceneManager$1 = SceneManager;
BattleManager = function() {
  throw new Error("This is a static class");
};
BattleManager.setup = function(t, e, r) {
  this.initMembers(), this._canEscape = e, this._canLose = r, $gameTroop.setup(t), $gameScreen.onBattleStart(), this.makeEscapeRatio();
};
BattleManager.initMembers = function() {
  this._phase = "init", this._canEscape = !1, this._canLose = !1, this._battleTest = !1, this._eventCallback = null, this._preemptive = !1, this._surprise = !1, this._actorIndex = -1, this._actionForcedBattler = null, this._mapBgm = null, this._mapBgs = null, this._actionBattlers = [], this._subject = null, this._action = null, this._targets = [], this._logWindow = null, this._statusWindow = null, this._spriteset = null, this._escapeRatio = 0, this._escaped = !1, this._rewards = {}, this._turnForced = !1;
};
BattleManager.isBattleTest = function() {
  return this._battleTest;
};
BattleManager.setBattleTest = function(t) {
  this._battleTest = t;
};
BattleManager.setEventCallback = function(t) {
  this._eventCallback = t;
};
BattleManager.setLogWindow = function(t) {
  this._logWindow = t;
};
BattleManager.setStatusWindow = function(t) {
  this._statusWindow = t;
};
BattleManager.setSpriteset = function(t) {
  this._spriteset = t;
};
BattleManager.onEncounter = function() {
  this._preemptive = Math.random() < this.ratePreemptive(), this._surprise = Math.random() < this.rateSurprise() && !this._preemptive;
};
BattleManager.ratePreemptive = function() {
  return $gameParty.ratePreemptive($gameTroop.agility());
};
BattleManager.rateSurprise = function() {
  return $gameParty.rateSurprise($gameTroop.agility());
};
BattleManager.saveBgmAndBgs = function() {
  this._mapBgm = AudioManager$1.saveBgm(), this._mapBgs = AudioManager$1.saveBgs();
};
BattleManager.playBattleBgm = function() {
  AudioManager$1.playBgm($gameSystem.battleBgm()), AudioManager$1.stopBgs();
};
BattleManager.playVictoryMe = function() {
  AudioManager$1.playMe($gameSystem.victoryMe());
};
BattleManager.playDefeatMe = function() {
  AudioManager$1.playMe($gameSystem.defeatMe());
};
BattleManager.replayBgmAndBgs = function() {
  this._mapBgm ? AudioManager$1.replayBgm(this._mapBgm) : AudioManager$1.stopBgm(), this._mapBgs && AudioManager$1.replayBgs(this._mapBgs);
};
BattleManager.makeEscapeRatio = function() {
  this._escapeRatio = 0.5 * $gameParty.agility() / $gameTroop.agility();
};
BattleManager.update = function() {
  if (!this.isBusy() && !this.updateEvent())
    switch (this._phase) {
      case "start":
        this.startInput();
        break;
      case "turn":
        this.updateTurn();
        break;
      case "action":
        this.updateAction();
        break;
      case "turnEnd":
        this.updateTurnEnd();
        break;
      case "battleEnd":
        this.updateBattleEnd();
        break;
    }
};
BattleManager.updateEvent = function() {
  switch (this._phase) {
    case "start":
    case "turn":
    case "turnEnd":
      return this.isActionForced() ? (this.processForcedAction(), !0) : this.updateEventMain();
  }
  return this.checkAbort();
};
BattleManager.updateEventMain = function() {
  return $gameTroop.updateInterpreter(), $gameParty.requestMotionRefresh(), !!($gameTroop.isEventRunning() || this.checkBattleEnd() || ($gameTroop.setupBattleEvent(), $gameTroop.isEventRunning() || SceneManager$1.isSceneChanging()));
};
BattleManager.isBusy = function() {
  return $gameMessage.isBusy() || this._spriteset.isBusy() || this._logWindow.isBusy();
};
BattleManager.isInputting = function() {
  return this._phase === "input";
};
BattleManager.isInTurn = function() {
  return this._phase === "turn";
};
BattleManager.isTurnEnd = function() {
  return this._phase === "turnEnd";
};
BattleManager.isAborting = function() {
  return this._phase === "aborting";
};
BattleManager.isBattleEnd = function() {
  return this._phase === "battleEnd";
};
BattleManager.canEscape = function() {
  return this._canEscape;
};
BattleManager.canLose = function() {
  return this._canLose;
};
BattleManager.isEscaped = function() {
  return this._escaped;
};
BattleManager.actor = function() {
  return this._actorIndex >= 0 ? $gameParty.members()[this._actorIndex] : null;
};
BattleManager.clearActor = function() {
  this.changeActor(-1, "");
};
BattleManager.changeActor = function(t, e) {
  var r = this.actor();
  this._actorIndex = t;
  var s = this.actor();
  r && r.setActionState(e), s && s.setActionState("inputting");
};
BattleManager.startBattle = function() {
  this._phase = "start", $gameSystem.onBattleStart(), $gameParty.onBattleStart(), $gameTroop.onBattleStart(), this.displayStartMessages();
};
BattleManager.displayStartMessages = function() {
  $gameTroop.enemyNames().forEach(function(t) {
    $gameMessage.add(TextManager$1.emerge.format(t));
  }), this._preemptive ? $gameMessage.add(TextManager$1.preemptive.format($gameParty.name())) : this._surprise && $gameMessage.add(TextManager$1.surprise.format($gameParty.name()));
};
BattleManager.startInput = function() {
  this._phase = "input", $gameParty.makeActions(), $gameTroop.makeActions(), this.clearActor(), (this._surprise || !$gameParty.canInput()) && this.startTurn();
};
BattleManager.inputtingAction = function() {
  return this.actor() ? this.actor().inputtingAction() : null;
};
BattleManager.selectNextCommand = function() {
  do
    if ((!this.actor() || !this.actor().selectNextCommand()) && (this.changeActor(this._actorIndex + 1, "waiting"), this._actorIndex >= $gameParty.size())) {
      this.startTurn();
      break;
    }
  while (!this.actor().canInput());
};
BattleManager.selectPreviousCommand = function() {
  do
    if ((!this.actor() || !this.actor().selectPreviousCommand()) && (this.changeActor(this._actorIndex - 1, "undecided"), this._actorIndex < 0))
      return;
  while (!this.actor().canInput());
};
BattleManager.refreshStatus = function() {
  this._statusWindow.refresh();
};
BattleManager.startTurn = function() {
  this._phase = "turn", this.clearActor(), $gameTroop.increaseTurn(), this.makeActionOrders(), $gameParty.requestMotionRefresh(), this._logWindow.startTurn();
};
BattleManager.updateTurn = function() {
  $gameParty.requestMotionRefresh(), this._subject || (this._subject = this.getNextSubject()), this._subject ? this.processTurn() : this.endTurn();
};
BattleManager.processTurn = function() {
  var t = this._subject, e = t.currentAction();
  e ? (e.prepare(), e.isValid() && this.startAction(), t.removeCurrentAction()) : (t.onAllActionsEnd(), this.refreshStatus(), this._logWindow.displayAutoAffectedStatus(t), this._logWindow.displayCurrentState(t), this._logWindow.displayRegeneration(t), this._subject = this.getNextSubject());
};
BattleManager.endTurn = function() {
  this._phase = "turnEnd", this._preemptive = !1, this._surprise = !1, this.allBattleMembers().forEach(function(t) {
    t.onTurnEnd(), this.refreshStatus(), this._logWindow.displayAutoAffectedStatus(t), this._logWindow.displayRegeneration(t);
  }, this), this.isForcedTurn() && (this._turnForced = !1);
};
BattleManager.isForcedTurn = function() {
  return this._turnForced;
};
BattleManager.updateTurnEnd = function() {
  this.startInput();
};
BattleManager.getNextSubject = function() {
  for (; ; ) {
    var t = this._actionBattlers.shift();
    if (!t)
      return null;
    if (t.isBattleMember() && t.isAlive())
      return t;
  }
};
BattleManager.allBattleMembers = function() {
  return $gameParty.members().concat($gameTroop.members());
};
BattleManager.makeActionOrders = function() {
  var t = [];
  this._surprise || (t = t.concat($gameParty.members())), this._preemptive || (t = t.concat($gameTroop.members())), t.forEach(function(e) {
    e.makeSpeed();
  }), t.sort(function(e, r) {
    return r.speed() - e.speed();
  }), this._actionBattlers = t;
};
BattleManager.startAction = function() {
  var t = this._subject, e = t.currentAction(), r = e.makeTargets();
  this._phase = "action", this._action = e, this._targets = r, t.useItem(e.item()), this._action.applyGlobal(), this.refreshStatus(), this._logWindow.startAction(t, e, r);
};
BattleManager.updateAction = function() {
  var t = this._targets.shift();
  t ? this.invokeAction(this._subject, t) : this.endAction();
};
BattleManager.endAction = function() {
  this._logWindow.endAction(this._subject), this._phase = "turn";
};
BattleManager.invokeAction = function(t, e) {
  this._logWindow.push("pushBaseLine"), Math.random() < this._action.itemCnt(e) ? this.invokeCounterAttack(t, e) : Math.random() < this._action.itemMrf(e) ? this.invokeMagicReflection(t, e) : this.invokeNormalAction(t, e), t.setLastTarget(e), this._logWindow.push("popBaseLine"), this.refreshStatus();
};
BattleManager.invokeNormalAction = function(t, e) {
  var r = this.applySubstitute(e);
  this._action.apply(r), this._logWindow.displayActionResults(t, r);
};
BattleManager.invokeCounterAttack = function(t, e) {
  var r = new Game_Action(e);
  r.setAttack(), r.apply(t), this._logWindow.displayCounter(e), this._logWindow.displayActionResults(e, t);
};
BattleManager.invokeMagicReflection = function(t, e) {
  this._action._reflectionTarget = e, this._logWindow.displayReflection(e), this._action.apply(t), this._logWindow.displayActionResults(e, t);
};
BattleManager.applySubstitute = function(t) {
  if (this.checkSubstitute(t)) {
    var e = t.friendsUnit().substituteBattler();
    if (e && t !== e)
      return this._logWindow.displaySubstitute(e, t), e;
  }
  return t;
};
BattleManager.checkSubstitute = function(t) {
  return t.isDying() && !this._action.isCertainHit();
};
BattleManager.isActionForced = function() {
  return !!this._actionForcedBattler;
};
BattleManager.forceAction = function(t) {
  this._actionForcedBattler = t;
  var e = this._actionBattlers.indexOf(t);
  e >= 0 && this._actionBattlers.splice(e, 1);
};
BattleManager.processForcedAction = function() {
  this._actionForcedBattler && (this._turnForced = !0, this._subject = this._actionForcedBattler, this._actionForcedBattler = null, this.startAction(), this._subject.removeCurrentAction());
};
BattleManager.abort = function() {
  this._phase = "aborting";
};
BattleManager.checkBattleEnd = function() {
  if (this._phase) {
    if (this.checkAbort())
      return !0;
    if ($gameParty.isAllDead())
      return this.processDefeat(), !0;
    if ($gameTroop.isAllDead())
      return this.processVictory(), !0;
  }
  return !1;
};
BattleManager.checkAbort = function() {
  return ($gameParty.isEmpty() || this.isAborting()) && (SoundManager$1.playEscape(), this._escaped = !0, this.processAbort()), !1;
};
BattleManager.processVictory = function() {
  $gameParty.removeBattleStates(), $gameParty.performVictory(), this.playVictoryMe(), this.replayBgmAndBgs(), this.makeRewards(), this.displayVictoryMessage(), this.displayRewards(), this.gainRewards(), this.endBattle(0);
};
BattleManager.processEscape = function() {
  $gameParty.performEscape(), SoundManager$1.playEscape();
  var t = this._preemptive ? !0 : Math.random() < this._escapeRatio;
  return t ? (this.displayEscapeSuccessMessage(), this._escaped = !0, this.processAbort()) : (this.displayEscapeFailureMessage(), this._escapeRatio += 0.1, $gameParty.clearActions(), this.startTurn()), t;
};
BattleManager.processAbort = function() {
  $gameParty.removeBattleStates(), this.replayBgmAndBgs(), this.endBattle(1);
};
BattleManager.processDefeat = function() {
  this.displayDefeatMessage(), this.playDefeatMe(), this._canLose ? this.replayBgmAndBgs() : AudioManager$1.stopBgm(), this.endBattle(2);
};
BattleManager.endBattle = function(t) {
  this._phase = "battleEnd", this._eventCallback && this._eventCallback(t), t === 0 ? $gameSystem.onBattleWin() : this._escaped && $gameSystem.onBattleEscape();
};
BattleManager.updateBattleEnd = function() {
  this.isBattleTest() ? (AudioManager$1.stopBgm(), SceneManager$1.exit()) : !this._escaped && $gameParty.isAllDead() ? this._canLose ? ($gameParty.reviveBattleMembers(), SceneManager$1.pop()) : SceneManager$1.goto(Scene_Gameover) : SceneManager$1.pop(), this._phase = null;
};
BattleManager.makeRewards = function() {
  this._rewards = {}, this._rewards.gold = $gameTroop.goldTotal(), this._rewards.exp = $gameTroop.expTotal(), this._rewards.items = $gameTroop.makeDropItems();
};
BattleManager.displayVictoryMessage = function() {
  $gameMessage.add(TextManager$1.victory.format($gameParty.name()));
};
BattleManager.displayDefeatMessage = function() {
  $gameMessage.add(TextManager$1.defeat.format($gameParty.name()));
};
BattleManager.displayEscapeSuccessMessage = function() {
  $gameMessage.add(TextManager$1.escapeStart.format($gameParty.name()));
};
BattleManager.displayEscapeFailureMessage = function() {
  $gameMessage.add(TextManager$1.escapeStart.format($gameParty.name())), $gameMessage.add("\\." + TextManager$1.escapeFailure);
};
BattleManager.displayRewards = function() {
  this.displayExp(), this.displayGold(), this.displayDropItems();
};
BattleManager.displayExp = function() {
  var t = this._rewards.exp;
  if (t > 0) {
    var e = TextManager$1.obtainExp.format(t, TextManager$1.exp);
    $gameMessage.add("\\." + e);
  }
};
BattleManager.displayGold = function() {
  var t = this._rewards.gold;
  t > 0 && $gameMessage.add("\\." + TextManager$1.obtainGold.format(t));
};
BattleManager.displayDropItems = function() {
  var t = this._rewards.items;
  t.length > 0 && ($gameMessage.newPage(), t.forEach(function(e) {
    $gameMessage.add(TextManager$1.obtainItem.format(e.name));
  }));
};
BattleManager.gainRewards = function() {
  this.gainExp(), this.gainGold(), this.gainDropItems();
};
BattleManager.gainExp = function() {
  var t = this._rewards.exp;
  $gameParty.allMembers().forEach(function(e) {
    e.gainExp(t);
  });
};
BattleManager.gainGold = function() {
  $gameParty.gainGold(this._rewards.gold);
};
BattleManager.gainDropItems = function() {
  var t = this._rewards.items;
  t.forEach(function(e) {
    $gameParty.gainItem(e, 1);
  });
};
const BattleManager$1 = BattleManager;
PluginManager = function() {
  throw new Error("This is a static class");
};
PluginManager._path = "js/plugins/";
PluginManager._scripts = [];
PluginManager._errorUrls = [];
PluginManager._parameters = {};
PluginManager.setup = function(t) {
  t.forEach(function(e) {
    e.status && !this._scripts.contains(e.name) && (this.setParameters(e.name, e.parameters), this.loadScript(e.name + ".js"), this._scripts.push(e.name));
  }, this);
};
PluginManager.checkErrors = function() {
  var t = this._errorUrls.shift();
  if (t)
    throw new Error("Failed to load: " + t);
};
PluginManager.parameters = function(t) {
  return this._parameters[t.toLowerCase()] || {};
};
PluginManager.setParameters = function(t, e) {
  this._parameters[t.toLowerCase()] = e;
};
PluginManager.loadScript = function(t) {
  var e = this._path + t, r = document.createElement("script");
  r.type = "text/javascript", r.src = e, r.async = !1, r.onerror = this.onError.bind(this), r._url = e, document.body.appendChild(r);
};
PluginManager.onError = function(t) {
  this._errorUrls.push(t.target._url);
};
const PluginManager$1 = PluginManager;
Game_Temp = function() {
  this.initialize.apply(this, arguments);
};
Game_Temp.prototype.initialize = function() {
  this._isPlaytest = Utils.isOptionValid("test"), this._commonEventId = 0, this._destinationX = null, this._destinationY = null;
};
Game_Temp.prototype.isPlaytest = function() {
  return this._isPlaytest;
};
Game_Temp.prototype.reserveCommonEvent = function(t) {
  this._commonEventId = t;
};
Game_Temp.prototype.clearCommonEvent = function() {
  this._commonEventId = 0;
};
Game_Temp.prototype.isCommonEventReserved = function() {
  return this._commonEventId > 0;
};
Game_Temp.prototype.reservedCommonEvent = function() {
  return $dataCommonEvents[this._commonEventId];
};
Game_Temp.prototype.setDestination = function(t, e) {
  this._destinationX = t, this._destinationY = e;
};
Game_Temp.prototype.clearDestination = function() {
  this._destinationX = null, this._destinationY = null;
};
Game_Temp.prototype.isDestinationValid = function() {
  return this._destinationX !== null;
};
Game_Temp.prototype.destinationX = function() {
  return this._destinationX;
};
Game_Temp.prototype.destinationY = function() {
  return this._destinationY;
};
const Game_Temp$1 = Game_Temp;
Game_System = function() {
  this.initialize.apply(this, arguments);
};
Game_System.prototype.initialize = function() {
  this._saveEnabled = !0, this._menuEnabled = !0, this._encounterEnabled = !0, this._formationEnabled = !0, this._battleCount = 0, this._winCount = 0, this._escapeCount = 0, this._saveCount = 0, this._versionId = 0, this._framesOnSave = 0, this._bgmOnSave = null, this._bgsOnSave = null, this._windowTone = null, this._battleBgm = null, this._victoryMe = null, this._defeatMe = null, this._savedBgm = null, this._walkingBgm = null;
};
Game_System.prototype.isJapanese = function() {
  return $dataSystem.locale.match(/^ja/);
};
Game_System.prototype.isChinese = function() {
  return $dataSystem.locale.match(/^zh/);
};
Game_System.prototype.isKorean = function() {
  return $dataSystem.locale.match(/^ko/);
};
Game_System.prototype.isCJK = function() {
  return $dataSystem.locale.match(/^(ja|zh|ko)/);
};
Game_System.prototype.isRussian = function() {
  return $dataSystem.locale.match(/^ru/);
};
Game_System.prototype.isSideView = function() {
  return $dataSystem.optSideView;
};
Game_System.prototype.isSaveEnabled = function() {
  return this._saveEnabled;
};
Game_System.prototype.disableSave = function() {
  this._saveEnabled = !1;
};
Game_System.prototype.enableSave = function() {
  this._saveEnabled = !0;
};
Game_System.prototype.isMenuEnabled = function() {
  return this._menuEnabled;
};
Game_System.prototype.disableMenu = function() {
  this._menuEnabled = !1;
};
Game_System.prototype.enableMenu = function() {
  this._menuEnabled = !0;
};
Game_System.prototype.isEncounterEnabled = function() {
  return this._encounterEnabled;
};
Game_System.prototype.disableEncounter = function() {
  this._encounterEnabled = !1;
};
Game_System.prototype.enableEncounter = function() {
  this._encounterEnabled = !0;
};
Game_System.prototype.isFormationEnabled = function() {
  return this._formationEnabled;
};
Game_System.prototype.disableFormation = function() {
  this._formationEnabled = !1;
};
Game_System.prototype.enableFormation = function() {
  this._formationEnabled = !0;
};
Game_System.prototype.battleCount = function() {
  return this._battleCount;
};
Game_System.prototype.winCount = function() {
  return this._winCount;
};
Game_System.prototype.escapeCount = function() {
  return this._escapeCount;
};
Game_System.prototype.saveCount = function() {
  return this._saveCount;
};
Game_System.prototype.versionId = function() {
  return this._versionId;
};
Game_System.prototype.windowTone = function() {
  return this._windowTone || $dataSystem.windowTone;
};
Game_System.prototype.setWindowTone = function(t) {
  this._windowTone = t;
};
Game_System.prototype.battleBgm = function() {
  return this._battleBgm || $dataSystem.battleBgm;
};
Game_System.prototype.setBattleBgm = function(t) {
  this._battleBgm = t;
};
Game_System.prototype.victoryMe = function() {
  return this._victoryMe || $dataSystem.victoryMe;
};
Game_System.prototype.setVictoryMe = function(t) {
  this._victoryMe = t;
};
Game_System.prototype.defeatMe = function() {
  return this._defeatMe || $dataSystem.defeatMe;
};
Game_System.prototype.setDefeatMe = function(t) {
  this._defeatMe = t;
};
Game_System.prototype.onBattleStart = function() {
  this._battleCount++;
};
Game_System.prototype.onBattleWin = function() {
  this._winCount++;
};
Game_System.prototype.onBattleEscape = function() {
  this._escapeCount++;
};
Game_System.prototype.onBeforeSave = function() {
  this._saveCount++, this._versionId = $dataSystem.versionId, this._framesOnSave = Graphics.frameCount, this._bgmOnSave = AudioManager.saveBgm(), this._bgsOnSave = AudioManager.saveBgs();
};
Game_System.prototype.onAfterLoad = function() {
  Graphics.frameCount = this._framesOnSave, AudioManager.playBgm(this._bgmOnSave), AudioManager.playBgs(this._bgsOnSave);
};
Game_System.prototype.playtime = function() {
  return Math.floor(Graphics.frameCount / 60);
};
Game_System.prototype.playtimeText = function() {
  var t = Math.floor(this.playtime() / 60 / 60), e = Math.floor(this.playtime() / 60) % 60, r = this.playtime() % 60;
  return t.padZero(2) + ":" + e.padZero(2) + ":" + r.padZero(2);
};
Game_System.prototype.saveBgm = function() {
  this._savedBgm = AudioManager.saveBgm();
};
Game_System.prototype.replayBgm = function() {
  this._savedBgm && AudioManager.replayBgm(this._savedBgm);
};
Game_System.prototype.saveWalkingBgm = function() {
  this._walkingBgm = AudioManager.saveBgm();
};
Game_System.prototype.replayWalkingBgm = function() {
  this._walkingBgm && AudioManager.playBgm(this._walkingBgm);
};
Game_System.prototype.saveWalkingBgm2 = function() {
  this._walkingBgm = $dataMap.bgm;
};
const Game_System$1 = Game_System;
Game_Timer = function() {
  this.initialize.apply(this, arguments);
};
Game_Timer.prototype.initialize = function() {
  this._frames = 0, this._working = !1;
};
Game_Timer.prototype.update = function(t) {
  t && this._working && this._frames > 0 && (this._frames--, this._frames === 0 && this.onExpire());
};
Game_Timer.prototype.start = function(t) {
  this._frames = t, this._working = !0;
};
Game_Timer.prototype.stop = function() {
  this._working = !1;
};
Game_Timer.prototype.isWorking = function() {
  return this._working;
};
Game_Timer.prototype.seconds = function() {
  return Math.floor(this._frames / 60);
};
Game_Timer.prototype.onExpire = function() {
  BattleManager.abort();
};
const Game_Timer$1 = Game_Timer;
Game_Message = function() {
  this.initialize.apply(this, arguments);
};
Game_Message.prototype.initialize = function() {
  this.clear();
};
Game_Message.prototype.clear = function() {
  this._texts = [], this._choices = [], this._faceName = "", this._faceIndex = 0, this._background = 0, this._positionType = 2, this._choiceDefaultType = 0, this._choiceCancelType = 0, this._choiceBackground = 0, this._choicePositionType = 2, this._numInputVariableId = 0, this._numInputMaxDigits = 0, this._itemChoiceVariableId = 0, this._itemChoiceItypeId = 0, this._scrollMode = !1, this._scrollSpeed = 2, this._scrollNoFast = !1, this._choiceCallback = null;
};
Game_Message.prototype.choices = function() {
  return this._choices;
};
Game_Message.prototype.faceName = function() {
  return this._faceName;
};
Game_Message.prototype.faceIndex = function() {
  return this._faceIndex;
};
Game_Message.prototype.background = function() {
  return this._background;
};
Game_Message.prototype.positionType = function() {
  return this._positionType;
};
Game_Message.prototype.choiceDefaultType = function() {
  return this._choiceDefaultType;
};
Game_Message.prototype.choiceCancelType = function() {
  return this._choiceCancelType;
};
Game_Message.prototype.choiceBackground = function() {
  return this._choiceBackground;
};
Game_Message.prototype.choicePositionType = function() {
  return this._choicePositionType;
};
Game_Message.prototype.numInputVariableId = function() {
  return this._numInputVariableId;
};
Game_Message.prototype.numInputMaxDigits = function() {
  return this._numInputMaxDigits;
};
Game_Message.prototype.itemChoiceVariableId = function() {
  return this._itemChoiceVariableId;
};
Game_Message.prototype.itemChoiceItypeId = function() {
  return this._itemChoiceItypeId;
};
Game_Message.prototype.scrollMode = function() {
  return this._scrollMode;
};
Game_Message.prototype.scrollSpeed = function() {
  return this._scrollSpeed;
};
Game_Message.prototype.scrollNoFast = function() {
  return this._scrollNoFast;
};
Game_Message.prototype.add = function(t) {
  this._texts.push(t);
};
Game_Message.prototype.setFaceImage = function(t, e) {
  this._faceName = t, this._faceIndex = e;
};
Game_Message.prototype.setBackground = function(t) {
  this._background = t;
};
Game_Message.prototype.setPositionType = function(t) {
  this._positionType = t;
};
Game_Message.prototype.setChoices = function(t, e, r) {
  this._choices = t, this._choiceDefaultType = e, this._choiceCancelType = r;
};
Game_Message.prototype.setChoiceBackground = function(t) {
  this._choiceBackground = t;
};
Game_Message.prototype.setChoicePositionType = function(t) {
  this._choicePositionType = t;
};
Game_Message.prototype.setNumberInput = function(t, e) {
  this._numInputVariableId = t, this._numInputMaxDigits = e;
};
Game_Message.prototype.setItemChoice = function(t, e) {
  this._itemChoiceVariableId = t, this._itemChoiceItypeId = e;
};
Game_Message.prototype.setScroll = function(t, e) {
  this._scrollMode = !0, this._scrollSpeed = t, this._scrollNoFast = e;
};
Game_Message.prototype.setChoiceCallback = function(t) {
  this._choiceCallback = t;
};
Game_Message.prototype.onChoice = function(t) {
  this._choiceCallback && (this._choiceCallback(t), this._choiceCallback = null);
};
Game_Message.prototype.hasText = function() {
  return this._texts.length > 0;
};
Game_Message.prototype.isChoice = function() {
  return this._choices.length > 0;
};
Game_Message.prototype.isNumberInput = function() {
  return this._numInputVariableId > 0;
};
Game_Message.prototype.isItemChoice = function() {
  return this._itemChoiceVariableId > 0;
};
Game_Message.prototype.isBusy = function() {
  return this.hasText() || this.isChoice() || this.isNumberInput() || this.isItemChoice();
};
Game_Message.prototype.newPage = function() {
  this._texts.length > 0 && (this._texts[this._texts.length - 1] += "\f");
};
Game_Message.prototype.allText = function() {
  return this._texts.join(`
`);
};
const Game_Message$1 = Game_Message;
Game_Switches = function() {
  this.initialize.apply(this, arguments);
};
Game_Switches.prototype.initialize = function() {
  this.clear();
};
Game_Switches.prototype.clear = function() {
  this._data = [];
};
Game_Switches.prototype.value = function(t) {
  return !!this._data[t];
};
Game_Switches.prototype.setValue = function(t, e) {
  t > 0 && t < $dataSystem.switches.length && (this._data[t] = e, this.onChange());
};
Game_Switches.prototype.onChange = function() {
  $gameMap.requestRefresh();
};
const Game_Switches$1 = Game_Switches;
Game_Variables = function() {
  this.initialize.apply(this, arguments);
};
Game_Variables.prototype.initialize = function() {
  this.clear();
};
Game_Variables.prototype.clear = function() {
  this._data = [];
};
Game_Variables.prototype.value = function(t) {
  return this._data[t] || 0;
};
Game_Variables.prototype.setValue = function(t, e) {
  t > 0 && t < $dataSystem.variables.length && (typeof e == "number" && (e = Math.floor(e)), this._data[t] = e, this.onChange());
};
Game_Variables.prototype.onChange = function() {
  $gameMap.requestRefresh();
};
const Game_Variables$1 = Game_Variables;
Game_SelfSwitches = function() {
  this.initialize.apply(this, arguments);
};
Game_SelfSwitches.prototype.initialize = function() {
  this.clear();
};
Game_SelfSwitches.prototype.clear = function() {
  this._data = {};
};
Game_SelfSwitches.prototype.value = function(t) {
  return !!this._data[t];
};
Game_SelfSwitches.prototype.setValue = function(t, e) {
  e ? this._data[t] = !0 : delete this._data[t], this.onChange();
};
Game_SelfSwitches.prototype.onChange = function() {
  $gameMap.requestRefresh();
};
const Game_SelfSwitches$1 = Game_SelfSwitches;
Game_Screen = function() {
  this.initialize.apply(this, arguments);
};
Game_Screen.prototype.initialize = function() {
  this.clear();
};
Game_Screen.prototype.clear = function() {
  this.clearFade(), this.clearTone(), this.clearFlash(), this.clearShake(), this.clearZoom(), this.clearWeather(), this.clearPictures();
};
Game_Screen.prototype.onBattleStart = function() {
  this.clearFade(), this.clearFlash(), this.clearShake(), this.clearZoom(), this.eraseBattlePictures();
};
Game_Screen.prototype.brightness = function() {
  return this._brightness;
};
Game_Screen.prototype.tone = function() {
  return this._tone;
};
Game_Screen.prototype.flashColor = function() {
  return this._flashColor;
};
Game_Screen.prototype.shake = function() {
  return this._shake;
};
Game_Screen.prototype.zoomX = function() {
  return this._zoomX;
};
Game_Screen.prototype.zoomY = function() {
  return this._zoomY;
};
Game_Screen.prototype.zoomScale = function() {
  return this._zoomScale;
};
Game_Screen.prototype.weatherType = function() {
  return this._weatherType;
};
Game_Screen.prototype.weatherPower = function() {
  return this._weatherPower;
};
Game_Screen.prototype.picture = function(t) {
  var e = this.realPictureId(t);
  return this._pictures[e];
};
Game_Screen.prototype.realPictureId = function(t) {
  return $gameParty.inBattle() ? t + this.maxPictures() : t;
};
Game_Screen.prototype.clearFade = function() {
  this._brightness = 255, this._fadeOutDuration = 0, this._fadeInDuration = 0;
};
Game_Screen.prototype.clearTone = function() {
  this._tone = [0, 0, 0, 0], this._toneTarget = [0, 0, 0, 0], this._toneDuration = 0;
};
Game_Screen.prototype.clearFlash = function() {
  this._flashColor = [0, 0, 0, 0], this._flashDuration = 0;
};
Game_Screen.prototype.clearShake = function() {
  this._shakePower = 0, this._shakeSpeed = 0, this._shakeDuration = 0, this._shakeDirection = 1, this._shake = 0;
};
Game_Screen.prototype.clearZoom = function() {
  this._zoomX = 0, this._zoomY = 0, this._zoomScale = 1, this._zoomScaleTarget = 1, this._zoomDuration = 0;
};
Game_Screen.prototype.clearWeather = function() {
  this._weatherType = "none", this._weatherPower = 0, this._weatherPowerTarget = 0, this._weatherDuration = 0;
};
Game_Screen.prototype.clearPictures = function() {
  this._pictures = [];
};
Game_Screen.prototype.eraseBattlePictures = function() {
  this._pictures = this._pictures.slice(0, this.maxPictures() + 1);
};
Game_Screen.prototype.maxPictures = function() {
  return 100;
};
Game_Screen.prototype.startFadeOut = function(t) {
  this._fadeOutDuration = t, this._fadeInDuration = 0;
};
Game_Screen.prototype.startFadeIn = function(t) {
  this._fadeInDuration = t, this._fadeOutDuration = 0;
};
Game_Screen.prototype.startTint = function(t, e) {
  this._toneTarget = t.clone(), this._toneDuration = e, this._toneDuration === 0 && (this._tone = this._toneTarget.clone());
};
Game_Screen.prototype.startFlash = function(t, e) {
  this._flashColor = t.clone(), this._flashDuration = e;
};
Game_Screen.prototype.startShake = function(t, e, r) {
  this._shakePower = t, this._shakeSpeed = e, this._shakeDuration = r;
};
Game_Screen.prototype.startZoom = function(t, e, r, s) {
  this._zoomX = t, this._zoomY = e, this._zoomScaleTarget = r, this._zoomDuration = s;
};
Game_Screen.prototype.setZoom = function(t, e, r) {
  this._zoomX = t, this._zoomY = e, this._zoomScale = r;
};
Game_Screen.prototype.changeWeather = function(t, e, r) {
  (t !== "none" || r === 0) && (this._weatherType = t), this._weatherPowerTarget = t === "none" ? 0 : e, this._weatherDuration = r, r === 0 && (this._weatherPower = this._weatherPowerTarget);
};
Game_Screen.prototype.update = function() {
  this.updateFadeOut(), this.updateFadeIn(), this.updateTone(), this.updateFlash(), this.updateShake(), this.updateZoom(), this.updateWeather(), this.updatePictures();
};
Game_Screen.prototype.updateFadeOut = function() {
  if (this._fadeOutDuration > 0) {
    var t = this._fadeOutDuration;
    this._brightness = this._brightness * (t - 1) / t, this._fadeOutDuration--;
  }
};
Game_Screen.prototype.updateFadeIn = function() {
  if (this._fadeInDuration > 0) {
    var t = this._fadeInDuration;
    this._brightness = (this._brightness * (t - 1) + 255) / t, this._fadeInDuration--;
  }
};
Game_Screen.prototype.updateTone = function() {
  if (this._toneDuration > 0) {
    for (var t = this._toneDuration, e = 0; e < 4; e++)
      this._tone[e] = (this._tone[e] * (t - 1) + this._toneTarget[e]) / t;
    this._toneDuration--;
  }
};
Game_Screen.prototype.updateFlash = function() {
  if (this._flashDuration > 0) {
    var t = this._flashDuration;
    this._flashColor[3] *= (t - 1) / t, this._flashDuration--;
  }
};
Game_Screen.prototype.updateShake = function() {
  if (this._shakeDuration > 0 || this._shake !== 0) {
    var t = this._shakePower * this._shakeSpeed * this._shakeDirection / 10;
    this._shakeDuration <= 1 && this._shake * (this._shake + t) < 0 ? this._shake = 0 : this._shake += t, this._shake > this._shakePower * 2 && (this._shakeDirection = -1), this._shake < -this._shakePower * 2 && (this._shakeDirection = 1), this._shakeDuration--;
  }
};
Game_Screen.prototype.updateZoom = function() {
  if (this._zoomDuration > 0) {
    var t = this._zoomDuration, e = this._zoomScaleTarget;
    this._zoomScale = (this._zoomScale * (t - 1) + e) / t, this._zoomDuration--;
  }
};
Game_Screen.prototype.updateWeather = function() {
  if (this._weatherDuration > 0) {
    var t = this._weatherDuration, e = this._weatherPowerTarget;
    this._weatherPower = (this._weatherPower * (t - 1) + e) / t, this._weatherDuration--, this._weatherDuration === 0 && this._weatherPowerTarget === 0 && (this._weatherType = "none");
  }
};
Game_Screen.prototype.updatePictures = function() {
  this._pictures.forEach(function(t) {
    t && t.update();
  });
};
Game_Screen.prototype.startFlashForDamage = function() {
  this.startFlash([255, 0, 0, 128], 8);
};
Game_Screen.prototype.showPicture = function(t, e, r, s, o, h, p, c, u) {
  var l = this.realPictureId(t), d = new Game_Picture();
  d.show(e, r, s, o, h, p, c, u), this._pictures[l] = d;
};
Game_Screen.prototype.movePicture = function(t, e, r, s, o, h, p, c, u) {
  var l = this.picture(t);
  l && l.move(e, r, s, o, h, p, c, u);
};
Game_Screen.prototype.rotatePicture = function(t, e) {
  var r = this.picture(t);
  r && r.rotate(e);
};
Game_Screen.prototype.tintPicture = function(t, e, r) {
  var s = this.picture(t);
  s && s.tint(e, r);
};
Game_Screen.prototype.erasePicture = function(t) {
  var e = this.realPictureId(t);
  this._pictures[e] = null;
};
const Game_Screen$1 = Game_Screen;
Game_Picture = function() {
  this.initialize.apply(this, arguments);
};
Game_Picture.prototype.initialize = function() {
  this.initBasic(), this.initTarget(), this.initTone(), this.initRotation();
};
Game_Picture.prototype.name = function() {
  return this._name;
};
Game_Picture.prototype.origin = function() {
  return this._origin;
};
Game_Picture.prototype.x = function() {
  return this._x;
};
Game_Picture.prototype.y = function() {
  return this._y;
};
Game_Picture.prototype.scaleX = function() {
  return this._scaleX;
};
Game_Picture.prototype.scaleY = function() {
  return this._scaleY;
};
Game_Picture.prototype.opacity = function() {
  return this._opacity;
};
Game_Picture.prototype.blendMode = function() {
  return this._blendMode;
};
Game_Picture.prototype.tone = function() {
  return this._tone;
};
Game_Picture.prototype.angle = function() {
  return this._angle;
};
Game_Picture.prototype.initBasic = function() {
  this._name = "", this._origin = 0, this._x = 0, this._y = 0, this._scaleX = 100, this._scaleY = 100, this._opacity = 255, this._blendMode = 0;
};
Game_Picture.prototype.initTarget = function() {
  this._targetX = this._x, this._targetY = this._y, this._targetScaleX = this._scaleX, this._targetScaleY = this._scaleY, this._targetOpacity = this._opacity, this._duration = 0;
};
Game_Picture.prototype.initTone = function() {
  this._tone = null, this._toneTarget = null, this._toneDuration = 0;
};
Game_Picture.prototype.initRotation = function() {
  this._angle = 0, this._rotationSpeed = 0;
};
Game_Picture.prototype.show = function(t, e, r, s, o, h, p, c) {
  this._name = t, this._origin = e, this._x = r, this._y = s, this._scaleX = o, this._scaleY = h, this._opacity = p, this._blendMode = c, this.initTarget(), this.initTone(), this.initRotation();
};
Game_Picture.prototype.move = function(t, e, r, s, o, h, p, c) {
  this._origin = t, this._targetX = e, this._targetY = r, this._targetScaleX = s, this._targetScaleY = o, this._targetOpacity = h, this._blendMode = p, this._duration = c;
};
Game_Picture.prototype.rotate = function(t) {
  this._rotationSpeed = t;
};
Game_Picture.prototype.tint = function(t, e) {
  this._tone || (this._tone = [0, 0, 0, 0]), this._toneTarget = t.clone(), this._toneDuration = e, this._toneDuration === 0 && (this._tone = this._toneTarget.clone());
};
Game_Picture.prototype.erase = function() {
  this._name = "", this._origin = 0, this.initTarget(), this.initTone(), this.initRotation();
};
Game_Picture.prototype.update = function() {
  this.updateMove(), this.updateTone(), this.updateRotation();
};
Game_Picture.prototype.updateMove = function() {
  if (this._duration > 0) {
    var t = this._duration;
    this._x = (this._x * (t - 1) + this._targetX) / t, this._y = (this._y * (t - 1) + this._targetY) / t, this._scaleX = (this._scaleX * (t - 1) + this._targetScaleX) / t, this._scaleY = (this._scaleY * (t - 1) + this._targetScaleY) / t, this._opacity = (this._opacity * (t - 1) + this._targetOpacity) / t, this._duration--;
  }
};
Game_Picture.prototype.updateTone = function() {
  if (this._toneDuration > 0) {
    for (var t = this._toneDuration, e = 0; e < 4; e++)
      this._tone[e] = (this._tone[e] * (t - 1) + this._toneTarget[e]) / t;
    this._toneDuration--;
  }
};
Game_Picture.prototype.updateRotation = function() {
  this._rotationSpeed !== 0 && (this._angle += this._rotationSpeed / 2);
};
const Game_Picture$1 = Game_Picture;
Game_Item = function() {
  this.initialize.apply(this, arguments);
};
Game_Item.prototype.initialize = function(t) {
  this._dataClass = "", this._itemId = 0, t && this.setObject(t);
};
Game_Item.prototype.isSkill = function() {
  return this._dataClass === "skill";
};
Game_Item.prototype.isItem = function() {
  return this._dataClass === "item";
};
Game_Item.prototype.isUsableItem = function() {
  return this.isSkill() || this.isItem();
};
Game_Item.prototype.isWeapon = function() {
  return this._dataClass === "weapon";
};
Game_Item.prototype.isArmor = function() {
  return this._dataClass === "armor";
};
Game_Item.prototype.isEquipItem = function() {
  return this.isWeapon() || this.isArmor();
};
Game_Item.prototype.isNull = function() {
  return this._dataClass === "";
};
Game_Item.prototype.itemId = function() {
  return this._itemId;
};
Game_Item.prototype.object = function() {
  return this.isSkill() ? $dataSkills[this._itemId] : this.isItem() ? $dataItems[this._itemId] : this.isWeapon() ? $dataWeapons[this._itemId] : this.isArmor() ? $dataArmors[this._itemId] : null;
};
Game_Item.prototype.setObject = function(t) {
  DataManager.isSkill(t) ? this._dataClass = "skill" : DataManager.isItem(t) ? this._dataClass = "item" : DataManager.isWeapon(t) ? this._dataClass = "weapon" : DataManager.isArmor(t) ? this._dataClass = "armor" : this._dataClass = "", this._itemId = t ? t.id : 0;
};
Game_Item.prototype.setEquip = function(t, e) {
  this._dataClass = t ? "weapon" : "armor", this._itemId = e;
};
const Game_Item$1 = Game_Item;
Game_Action = function() {
  this.initialize.apply(this, arguments);
};
Game_Action.EFFECT_RECOVER_HP = 11;
Game_Action.EFFECT_RECOVER_MP = 12;
Game_Action.EFFECT_GAIN_TP = 13;
Game_Action.EFFECT_ADD_STATE = 21;
Game_Action.EFFECT_REMOVE_STATE = 22;
Game_Action.EFFECT_ADD_BUFF = 31;
Game_Action.EFFECT_ADD_DEBUFF = 32;
Game_Action.EFFECT_REMOVE_BUFF = 33;
Game_Action.EFFECT_REMOVE_DEBUFF = 34;
Game_Action.EFFECT_SPECIAL = 41;
Game_Action.EFFECT_GROW = 42;
Game_Action.EFFECT_LEARN_SKILL = 43;
Game_Action.EFFECT_COMMON_EVENT = 44;
Game_Action.SPECIAL_EFFECT_ESCAPE = 0;
Game_Action.HITTYPE_CERTAIN = 0;
Game_Action.HITTYPE_PHYSICAL = 1;
Game_Action.HITTYPE_MAGICAL = 2;
Game_Action.prototype.initialize = function(t, e) {
  this._subjectActorId = 0, this._subjectEnemyIndex = -1, this._forcing = e || !1, this.setSubject(t), this.clear();
};
Game_Action.prototype.clear = function() {
  this._item = new Game_Item(), this._targetIndex = -1;
};
Game_Action.prototype.setSubject = function(t) {
  t.isActor() ? (this._subjectActorId = t.actorId(), this._subjectEnemyIndex = -1) : (this._subjectEnemyIndex = t.index(), this._subjectActorId = 0);
};
Game_Action.prototype.subject = function() {
  return this._subjectActorId > 0 ? $gameActors.actor(this._subjectActorId) : $gameTroop.members()[this._subjectEnemyIndex];
};
Game_Action.prototype.friendsUnit = function() {
  return this.subject().friendsUnit();
};
Game_Action.prototype.opponentsUnit = function() {
  return this.subject().opponentsUnit();
};
Game_Action.prototype.setEnemyAction = function(t) {
  t ? this.setSkill(t.skillId) : this.clear();
};
Game_Action.prototype.setAttack = function() {
  this.setSkill(this.subject().attackSkillId());
};
Game_Action.prototype.setGuard = function() {
  this.setSkill(this.subject().guardSkillId());
};
Game_Action.prototype.setSkill = function(t) {
  this._item.setObject($dataSkills[t]);
};
Game_Action.prototype.setItem = function(t) {
  this._item.setObject($dataItems[t]);
};
Game_Action.prototype.setItemObject = function(t) {
  this._item.setObject(t);
};
Game_Action.prototype.setTarget = function(t) {
  this._targetIndex = t;
};
Game_Action.prototype.item = function() {
  return this._item.object();
};
Game_Action.prototype.isSkill = function() {
  return this._item.isSkill();
};
Game_Action.prototype.isItem = function() {
  return this._item.isItem();
};
Game_Action.prototype.numRepeats = function() {
  var t = this.item().repeats;
  return this.isAttack() && (t += this.subject().attackTimesAdd()), Math.floor(t);
};
Game_Action.prototype.checkItemScope = function(t) {
  return t.contains(this.item().scope);
};
Game_Action.prototype.isForOpponent = function() {
  return this.checkItemScope([1, 2, 3, 4, 5, 6]);
};
Game_Action.prototype.isForFriend = function() {
  return this.checkItemScope([7, 8, 9, 10, 11]);
};
Game_Action.prototype.isForDeadFriend = function() {
  return this.checkItemScope([9, 10]);
};
Game_Action.prototype.isForUser = function() {
  return this.checkItemScope([11]);
};
Game_Action.prototype.isForOne = function() {
  return this.checkItemScope([1, 3, 7, 9, 11]);
};
Game_Action.prototype.isForRandom = function() {
  return this.checkItemScope([3, 4, 5, 6]);
};
Game_Action.prototype.isForAll = function() {
  return this.checkItemScope([2, 8, 10]);
};
Game_Action.prototype.needsSelection = function() {
  return this.checkItemScope([1, 7, 9]);
};
Game_Action.prototype.numTargets = function() {
  return this.isForRandom() ? this.item().scope - 2 : 0;
};
Game_Action.prototype.checkDamageType = function(t) {
  return t.contains(this.item().damage.type);
};
Game_Action.prototype.isHpEffect = function() {
  return this.checkDamageType([1, 3, 5]);
};
Game_Action.prototype.isMpEffect = function() {
  return this.checkDamageType([2, 4, 6]);
};
Game_Action.prototype.isDamage = function() {
  return this.checkDamageType([1, 2]);
};
Game_Action.prototype.isRecover = function() {
  return this.checkDamageType([3, 4]);
};
Game_Action.prototype.isDrain = function() {
  return this.checkDamageType([5, 6]);
};
Game_Action.prototype.isHpRecover = function() {
  return this.checkDamageType([3]);
};
Game_Action.prototype.isMpRecover = function() {
  return this.checkDamageType([4]);
};
Game_Action.prototype.isCertainHit = function() {
  return this.item().hitType === Game_Action.HITTYPE_CERTAIN;
};
Game_Action.prototype.isPhysical = function() {
  return this.item().hitType === Game_Action.HITTYPE_PHYSICAL;
};
Game_Action.prototype.isMagical = function() {
  return this.item().hitType === Game_Action.HITTYPE_MAGICAL;
};
Game_Action.prototype.isAttack = function() {
  return this.item() === $dataSkills[this.subject().attackSkillId()];
};
Game_Action.prototype.isGuard = function() {
  return this.item() === $dataSkills[this.subject().guardSkillId()];
};
Game_Action.prototype.isMagicSkill = function() {
  return this.isSkill() ? $dataSystem.magicSkills.contains(this.item().stypeId) : !1;
};
Game_Action.prototype.decideRandomTarget = function() {
  var t;
  this.isForDeadFriend() ? t = this.friendsUnit().randomDeadTarget() : this.isForFriend() ? t = this.friendsUnit().randomTarget() : t = this.opponentsUnit().randomTarget(), t ? this._targetIndex = t.index() : this.clear();
};
Game_Action.prototype.setConfusion = function() {
  this.setAttack();
};
Game_Action.prototype.prepare = function() {
  this.subject().isConfused() && !this._forcing && this.setConfusion();
};
Game_Action.prototype.isValid = function() {
  return this._forcing && this.item() || this.subject().canUse(this.item());
};
Game_Action.prototype.speed = function() {
  var t = this.subject().agi, e = t + Math.randomInt(Math.floor(5 + t / 4));
  return this.item() && (e += this.item().speed), this.isAttack() && (e += this.subject().attackSpeed()), e;
};
Game_Action.prototype.makeTargets = function() {
  var t = [];
  return !this._forcing && this.subject().isConfused() ? t = [this.confusionTarget()] : this.isForOpponent() ? t = this.targetsForOpponents() : this.isForFriend() && (t = this.targetsForFriends()), this.repeatTargets(t);
};
Game_Action.prototype.repeatTargets = function(t) {
  for (var e = [], r = this.numRepeats(), s = 0; s < t.length; s++) {
    var o = t[s];
    if (o)
      for (var h = 0; h < r; h++)
        e.push(o);
  }
  return e;
};
Game_Action.prototype.confusionTarget = function() {
  switch (this.subject().confusionLevel()) {
    case 1:
      return this.opponentsUnit().randomTarget();
    case 2:
      return Math.randomInt(2) === 0 ? this.opponentsUnit().randomTarget() : this.friendsUnit().randomTarget();
    default:
      return this.friendsUnit().randomTarget();
  }
};
Game_Action.prototype.targetsForOpponents = function() {
  var t = [], e = this.opponentsUnit();
  if (this.isForRandom())
    for (var r = 0; r < this.numTargets(); r++)
      t.push(e.randomTarget());
  else this.isForOne() ? this._targetIndex < 0 ? t.push(e.randomTarget()) : t.push(e.smoothTarget(this._targetIndex)) : t = e.aliveMembers();
  return t;
};
Game_Action.prototype.targetsForFriends = function() {
  var t = [], e = this.friendsUnit();
  return this.isForUser() ? [this.subject()] : (this.isForDeadFriend() ? this.isForOne() ? t.push(e.smoothDeadTarget(this._targetIndex)) : t = e.deadMembers() : this.isForOne() ? this._targetIndex < 0 ? t.push(e.randomTarget()) : t.push(e.smoothTarget(this._targetIndex)) : t = e.aliveMembers(), t);
};
Game_Action.prototype.evaluate = function() {
  var t = 0;
  return this.itemTargetCandidates().forEach(function(e) {
    var r = this.evaluateWithTarget(e);
    this.isForAll() ? t += r : r > t && (t = r, this._targetIndex = e.index());
  }, this), t *= this.numRepeats(), t > 0 && (t += Math.random()), t;
};
Game_Action.prototype.itemTargetCandidates = function() {
  return this.isValid() ? this.isForOpponent() ? this.opponentsUnit().aliveMembers() : this.isForUser() ? [this.subject()] : this.isForDeadFriend() ? this.friendsUnit().deadMembers() : this.friendsUnit().aliveMembers() : [];
};
Game_Action.prototype.evaluateWithTarget = function(t) {
  if (this.isHpEffect()) {
    var e = this.makeDamageValue(t, !1);
    if (this.isForOpponent())
      return e / Math.max(t.hp, 1);
    var r = Math.min(-e, t.mhp - t.hp);
    return r / t.mhp;
  }
};
Game_Action.prototype.testApply = function(t) {
  return this.isForDeadFriend() === t.isDead() && ($gameParty.inBattle() || this.isForOpponent() || this.isHpRecover() && t.hp < t.mhp || this.isMpRecover() && t.mp < t.mmp || this.hasItemAnyValidEffects(t));
};
Game_Action.prototype.hasItemAnyValidEffects = function(t) {
  return this.item().effects.some(function(e) {
    return this.testItemEffect(t, e);
  }, this);
};
Game_Action.prototype.testItemEffect = function(t, e) {
  switch (e.code) {
    case Game_Action.EFFECT_RECOVER_HP:
      return t.hp < t.mhp || e.value1 < 0 || e.value2 < 0;
    case Game_Action.EFFECT_RECOVER_MP:
      return t.mp < t.mmp || e.value1 < 0 || e.value2 < 0;
    case Game_Action.EFFECT_ADD_STATE:
      return !t.isStateAffected(e.dataId);
    case Game_Action.EFFECT_REMOVE_STATE:
      return t.isStateAffected(e.dataId);
    case Game_Action.EFFECT_ADD_BUFF:
      return !t.isMaxBuffAffected(e.dataId);
    case Game_Action.EFFECT_ADD_DEBUFF:
      return !t.isMaxDebuffAffected(e.dataId);
    case Game_Action.EFFECT_REMOVE_BUFF:
      return t.isBuffAffected(e.dataId);
    case Game_Action.EFFECT_REMOVE_DEBUFF:
      return t.isDebuffAffected(e.dataId);
    case Game_Action.EFFECT_LEARN_SKILL:
      return t.isActor() && !t.isLearnedSkill(e.dataId);
    default:
      return !0;
  }
};
Game_Action.prototype.itemCnt = function(t) {
  return this.isPhysical() && t.canMove() ? t.cnt : 0;
};
Game_Action.prototype.itemMrf = function(t) {
  return this.isMagical() ? t.mrf : 0;
};
Game_Action.prototype.itemHit = function(t) {
  return this.isPhysical() ? this.item().successRate * 0.01 * this.subject().hit : this.item().successRate * 0.01;
};
Game_Action.prototype.itemEva = function(t) {
  return this.isPhysical() ? t.eva : this.isMagical() ? t.mev : 0;
};
Game_Action.prototype.itemCri = function(t) {
  return this.item().damage.critical ? this.subject().cri * (1 - t.cev) : 0;
};
Game_Action.prototype.apply = function(t) {
  var e = t.result();
  if (this.subject().clearResult(), e.clear(), e.used = this.testApply(t), e.missed = e.used && Math.random() >= this.itemHit(t), e.evaded = !e.missed && Math.random() < this.itemEva(t), e.physical = this.isPhysical(), e.drain = this.isDrain(), e.isHit()) {
    if (this.item().damage.type > 0) {
      e.critical = Math.random() < this.itemCri(t);
      var r = this.makeDamageValue(t, e.critical);
      this.executeDamage(t, r);
    }
    this.item().effects.forEach(function(s) {
      this.applyItemEffect(t, s);
    }, this), this.applyItemUserEffect(t);
  }
};
Game_Action.prototype.makeDamageValue = function(t, e) {
  var r = this.item(), s = this.evalDamageFormula(t), o = s * this.calcElementRate(t);
  return this.isPhysical() && (o *= t.pdr), this.isMagical() && (o *= t.mdr), s < 0 && (o *= t.rec), e && (o = this.applyCritical(o)), o = this.applyVariance(o, r.damage.variance), o = this.applyGuard(o, t), o = Math.round(o), o;
};
Game_Action.prototype.evalDamageFormula = function(target) {
  try {
    var item = this.item(), a = this.subject(), b = target, v = $gameVariables._data, sign = [3, 4].contains(item.damage.type) ? -1 : 1, value = Math.max(eval(item.damage.formula), 0) * sign;
    return isNaN(value) && (value = 0), value;
  } catch (t) {
    return 0;
  }
};
Game_Action.prototype.calcElementRate = function(t) {
  return this.item().damage.elementId < 0 ? this.elementsMaxRate(t, this.subject().attackElements()) : t.elementRate(this.item().damage.elementId);
};
Game_Action.prototype.elementsMaxRate = function(t, e) {
  return e.length > 0 ? Math.max.apply(null, e.map(function(r) {
    return t.elementRate(r);
  }, this)) : 1;
};
Game_Action.prototype.applyCritical = function(t) {
  return t * 3;
};
Game_Action.prototype.applyVariance = function(t, e) {
  var r = Math.floor(Math.max(Math.abs(t) * e / 100, 0)), s = Math.randomInt(r + 1) + Math.randomInt(r + 1) - r;
  return t >= 0 ? t + s : t - s;
};
Game_Action.prototype.applyGuard = function(t, e) {
  return t / (t > 0 && e.isGuard() ? 2 * e.grd : 1);
};
Game_Action.prototype.executeDamage = function(t, e) {
  var r = t.result();
  e === 0 && (r.critical = !1), this.isHpEffect() && this.executeHpDamage(t, e), this.isMpEffect() && this.executeMpDamage(t, e);
};
Game_Action.prototype.executeHpDamage = function(t, e) {
  this.isDrain() && (e = Math.min(t.hp, e)), this.makeSuccess(t), t.gainHp(-e), e > 0 && t.onDamage(e), this.gainDrainedHp(e);
};
Game_Action.prototype.executeMpDamage = function(t, e) {
  this.isMpRecover() || (e = Math.min(t.mp, e)), e !== 0 && this.makeSuccess(t), t.gainMp(-e), this.gainDrainedMp(e);
};
Game_Action.prototype.gainDrainedHp = function(t) {
  if (this.isDrain()) {
    var e = this.subject();
    this._reflectionTarget !== void 0 && (e = this._reflectionTarget), e.gainHp(t);
  }
};
Game_Action.prototype.gainDrainedMp = function(t) {
  if (this.isDrain()) {
    var e = this.subject();
    this._reflectionTarget !== void 0 && (e = this._reflectionTarget), e.gainMp(t);
  }
};
Game_Action.prototype.applyItemEffect = function(t, e) {
  switch (e.code) {
    case Game_Action.EFFECT_RECOVER_HP:
      this.itemEffectRecoverHp(t, e);
      break;
    case Game_Action.EFFECT_RECOVER_MP:
      this.itemEffectRecoverMp(t, e);
      break;
    case Game_Action.EFFECT_GAIN_TP:
      this.itemEffectGainTp(t, e);
      break;
    case Game_Action.EFFECT_ADD_STATE:
      this.itemEffectAddState(t, e);
      break;
    case Game_Action.EFFECT_REMOVE_STATE:
      this.itemEffectRemoveState(t, e);
      break;
    case Game_Action.EFFECT_ADD_BUFF:
      this.itemEffectAddBuff(t, e);
      break;
    case Game_Action.EFFECT_ADD_DEBUFF:
      this.itemEffectAddDebuff(t, e);
      break;
    case Game_Action.EFFECT_REMOVE_BUFF:
      this.itemEffectRemoveBuff(t, e);
      break;
    case Game_Action.EFFECT_REMOVE_DEBUFF:
      this.itemEffectRemoveDebuff(t, e);
      break;
    case Game_Action.EFFECT_SPECIAL:
      this.itemEffectSpecial(t, e);
      break;
    case Game_Action.EFFECT_GROW:
      this.itemEffectGrow(t, e);
      break;
    case Game_Action.EFFECT_LEARN_SKILL:
      this.itemEffectLearnSkill(t, e);
      break;
    case Game_Action.EFFECT_COMMON_EVENT:
      this.itemEffectCommonEvent(t, e);
      break;
  }
};
Game_Action.prototype.itemEffectRecoverHp = function(t, e) {
  var r = (t.mhp * e.value1 + e.value2) * t.rec;
  this.isItem() && (r *= this.subject().pha), r = Math.floor(r), r !== 0 && (t.gainHp(r), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectRecoverMp = function(t, e) {
  var r = (t.mmp * e.value1 + e.value2) * t.rec;
  this.isItem() && (r *= this.subject().pha), r = Math.floor(r), r !== 0 && (t.gainMp(r), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectGainTp = function(t, e) {
  var r = Math.floor(e.value1);
  r !== 0 && (t.gainTp(r), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectAddState = function(t, e) {
  e.dataId === 0 ? this.itemEffectAddAttackState(t, e) : this.itemEffectAddNormalState(t, e);
};
Game_Action.prototype.itemEffectAddAttackState = function(t, e) {
  this.subject().attackStates().forEach((function(r) {
    var s = e.value1;
    s *= t.stateRate(r), s *= this.subject().attackStatesRate(r), s *= this.lukEffectRate(t), Math.random() < s && (t.addState(r), this.makeSuccess(t));
  }).bind(this), t);
};
Game_Action.prototype.itemEffectAddNormalState = function(t, e) {
  var r = e.value1;
  this.isCertainHit() || (r *= t.stateRate(e.dataId), r *= this.lukEffectRate(t)), Math.random() < r && (t.addState(e.dataId), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectRemoveState = function(t, e) {
  var r = e.value1;
  Math.random() < r && (t.removeState(e.dataId), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectAddBuff = function(t, e) {
  t.addBuff(e.dataId, e.value1), this.makeSuccess(t);
};
Game_Action.prototype.itemEffectAddDebuff = function(t, e) {
  var r = t.debuffRate(e.dataId) * this.lukEffectRate(t);
  Math.random() < r && (t.addDebuff(e.dataId, e.value1), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectRemoveBuff = function(t, e) {
  t.isBuffAffected(e.dataId) && (t.removeBuff(e.dataId), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectRemoveDebuff = function(t, e) {
  t.isDebuffAffected(e.dataId) && (t.removeBuff(e.dataId), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectSpecial = function(t, e) {
  e.dataId === Game_Action.SPECIAL_EFFECT_ESCAPE && (t.escape(), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectGrow = function(t, e) {
  t.addParam(e.dataId, Math.floor(e.value1)), this.makeSuccess(t);
};
Game_Action.prototype.itemEffectLearnSkill = function(t, e) {
  t.isActor() && (t.learnSkill(e.dataId), this.makeSuccess(t));
};
Game_Action.prototype.itemEffectCommonEvent = function(t, e) {
};
Game_Action.prototype.makeSuccess = function(t) {
  t.result().success = !0;
};
Game_Action.prototype.applyItemUserEffect = function(t) {
  var e = Math.floor(this.item().tpGain * this.subject().tcr);
  this.subject().gainSilentTp(e);
};
Game_Action.prototype.lukEffectRate = function(t) {
  return Math.max(1 + (this.subject().luk - t.luk) * 1e-3, 0);
};
Game_Action.prototype.applyGlobal = function() {
  this.item().effects.forEach(function(t) {
    t.code === Game_Action.EFFECT_COMMON_EVENT && $gameTemp.reserveCommonEvent(t.dataId);
  }, this);
};
const Game_Action$1 = Game_Action;
Game_ActionResult = function() {
  this.initialize.apply(this, arguments);
};
Game_ActionResult.prototype.initialize = function() {
  this.clear();
};
Game_ActionResult.prototype.clear = function() {
  this.used = !1, this.missed = !1, this.evaded = !1, this.physical = !1, this.drain = !1, this.critical = !1, this.success = !1, this.hpAffected = !1, this.hpDamage = 0, this.mpDamage = 0, this.tpDamage = 0, this.addedStates = [], this.removedStates = [], this.addedBuffs = [], this.addedDebuffs = [], this.removedBuffs = [];
};
Game_ActionResult.prototype.addedStateObjects = function() {
  return this.addedStates.map(function(t) {
    return $dataStates[t];
  });
};
Game_ActionResult.prototype.removedStateObjects = function() {
  return this.removedStates.map(function(t) {
    return $dataStates[t];
  });
};
Game_ActionResult.prototype.isStatusAffected = function() {
  return this.addedStates.length > 0 || this.removedStates.length > 0 || this.addedBuffs.length > 0 || this.addedDebuffs.length > 0 || this.removedBuffs.length > 0;
};
Game_ActionResult.prototype.isHit = function() {
  return this.used && !this.missed && !this.evaded;
};
Game_ActionResult.prototype.isStateAdded = function(t) {
  return this.addedStates.contains(t);
};
Game_ActionResult.prototype.pushAddedState = function(t) {
  this.isStateAdded(t) || this.addedStates.push(t);
};
Game_ActionResult.prototype.isStateRemoved = function(t) {
  return this.removedStates.contains(t);
};
Game_ActionResult.prototype.pushRemovedState = function(t) {
  this.isStateRemoved(t) || this.removedStates.push(t);
};
Game_ActionResult.prototype.isBuffAdded = function(t) {
  return this.addedBuffs.contains(t);
};
Game_ActionResult.prototype.pushAddedBuff = function(t) {
  this.isBuffAdded(t) || this.addedBuffs.push(t);
};
Game_ActionResult.prototype.isDebuffAdded = function(t) {
  return this.addedDebuffs.contains(t);
};
Game_ActionResult.prototype.pushAddedDebuff = function(t) {
  this.isDebuffAdded(t) || this.addedDebuffs.push(t);
};
Game_ActionResult.prototype.isBuffRemoved = function(t) {
  return this.removedBuffs.contains(t);
};
Game_ActionResult.prototype.pushRemovedBuff = function(t) {
  this.isBuffRemoved(t) || this.removedBuffs.push(t);
};
const Game_ActionResult$1 = Game_ActionResult;
Game_BattlerBase = function() {
  this.initialize.apply(this, arguments);
};
Game_BattlerBase.TRAIT_ELEMENT_RATE = 11;
Game_BattlerBase.TRAIT_DEBUFF_RATE = 12;
Game_BattlerBase.TRAIT_STATE_RATE = 13;
Game_BattlerBase.TRAIT_STATE_RESIST = 14;
Game_BattlerBase.TRAIT_PARAM = 21;
Game_BattlerBase.TRAIT_XPARAM = 22;
Game_BattlerBase.TRAIT_SPARAM = 23;
Game_BattlerBase.TRAIT_ATTACK_ELEMENT = 31;
Game_BattlerBase.TRAIT_ATTACK_STATE = 32;
Game_BattlerBase.TRAIT_ATTACK_SPEED = 33;
Game_BattlerBase.TRAIT_ATTACK_TIMES = 34;
Game_BattlerBase.TRAIT_STYPE_ADD = 41;
Game_BattlerBase.TRAIT_STYPE_SEAL = 42;
Game_BattlerBase.TRAIT_SKILL_ADD = 43;
Game_BattlerBase.TRAIT_SKILL_SEAL = 44;
Game_BattlerBase.TRAIT_EQUIP_WTYPE = 51;
Game_BattlerBase.TRAIT_EQUIP_ATYPE = 52;
Game_BattlerBase.TRAIT_EQUIP_LOCK = 53;
Game_BattlerBase.TRAIT_EQUIP_SEAL = 54;
Game_BattlerBase.TRAIT_SLOT_TYPE = 55;
Game_BattlerBase.TRAIT_ACTION_PLUS = 61;
Game_BattlerBase.TRAIT_SPECIAL_FLAG = 62;
Game_BattlerBase.TRAIT_COLLAPSE_TYPE = 63;
Game_BattlerBase.TRAIT_PARTY_ABILITY = 64;
Game_BattlerBase.FLAG_ID_AUTO_BATTLE = 0;
Game_BattlerBase.FLAG_ID_GUARD = 1;
Game_BattlerBase.FLAG_ID_SUBSTITUTE = 2;
Game_BattlerBase.FLAG_ID_PRESERVE_TP = 3;
Game_BattlerBase.ICON_BUFF_START = 32;
Game_BattlerBase.ICON_DEBUFF_START = 48;
Object.defineProperties(Game_BattlerBase.prototype, {
  // Hit Points
  hp: { get: function() {
    return this._hp;
  }, configurable: !0 },
  // Magic Points
  mp: { get: function() {
    return this._mp;
  }, configurable: !0 },
  // Tactical Points
  tp: { get: function() {
    return this._tp;
  }, configurable: !0 },
  // Maximum Hit Points
  mhp: { get: function() {
    return this.param(0);
  }, configurable: !0 },
  // Maximum Magic Points
  mmp: { get: function() {
    return this.param(1);
  }, configurable: !0 },
  // ATtacK power
  atk: { get: function() {
    return this.param(2);
  }, configurable: !0 },
  // DEFense power
  def: { get: function() {
    return this.param(3);
  }, configurable: !0 },
  // Magic ATtack power
  mat: { get: function() {
    return this.param(4);
  }, configurable: !0 },
  // Magic DeFense power
  mdf: { get: function() {
    return this.param(5);
  }, configurable: !0 },
  // AGIlity
  agi: { get: function() {
    return this.param(6);
  }, configurable: !0 },
  // LUcK
  luk: { get: function() {
    return this.param(7);
  }, configurable: !0 },
  // HIT rate
  hit: { get: function() {
    return this.xparam(0);
  }, configurable: !0 },
  // EVAsion rate
  eva: { get: function() {
    return this.xparam(1);
  }, configurable: !0 },
  // CRItical rate
  cri: { get: function() {
    return this.xparam(2);
  }, configurable: !0 },
  // Critical EVasion rate
  cev: { get: function() {
    return this.xparam(3);
  }, configurable: !0 },
  // Magic EVasion rate
  mev: { get: function() {
    return this.xparam(4);
  }, configurable: !0 },
  // Magic ReFlection rate
  mrf: { get: function() {
    return this.xparam(5);
  }, configurable: !0 },
  // CouNTer attack rate
  cnt: { get: function() {
    return this.xparam(6);
  }, configurable: !0 },
  // Hp ReGeneration rate
  hrg: { get: function() {
    return this.xparam(7);
  }, configurable: !0 },
  // Mp ReGeneration rate
  mrg: { get: function() {
    return this.xparam(8);
  }, configurable: !0 },
  // Tp ReGeneration rate
  trg: { get: function() {
    return this.xparam(9);
  }, configurable: !0 },
  // TarGet Rate
  tgr: { get: function() {
    return this.sparam(0);
  }, configurable: !0 },
  // GuaRD effect rate
  grd: { get: function() {
    return this.sparam(1);
  }, configurable: !0 },
  // RECovery effect rate
  rec: { get: function() {
    return this.sparam(2);
  }, configurable: !0 },
  // PHArmacology
  pha: { get: function() {
    return this.sparam(3);
  }, configurable: !0 },
  // Mp Cost Rate
  mcr: { get: function() {
    return this.sparam(4);
  }, configurable: !0 },
  // Tp Charge Rate
  tcr: { get: function() {
    return this.sparam(5);
  }, configurable: !0 },
  // Physical Damage Rate
  pdr: { get: function() {
    return this.sparam(6);
  }, configurable: !0 },
  // Magical Damage Rate
  mdr: { get: function() {
    return this.sparam(7);
  }, configurable: !0 },
  // Floor Damage Rate
  fdr: { get: function() {
    return this.sparam(8);
  }, configurable: !0 },
  // EXperience Rate
  exr: { get: function() {
    return this.sparam(9);
  }, configurable: !0 }
});
Game_BattlerBase.prototype.initialize = function() {
  this.initMembers();
};
Game_BattlerBase.prototype.initMembers = function() {
  this._hp = 1, this._mp = 0, this._tp = 0, this._hidden = !1, this.clearParamPlus(), this.clearStates(), this.clearBuffs();
};
Game_BattlerBase.prototype.clearParamPlus = function() {
  this._paramPlus = [0, 0, 0, 0, 0, 0, 0, 0];
};
Game_BattlerBase.prototype.clearStates = function() {
  this._states = [], this._stateTurns = {};
};
Game_BattlerBase.prototype.eraseState = function(t) {
  var e = this._states.indexOf(t);
  e >= 0 && this._states.splice(e, 1), delete this._stateTurns[t];
};
Game_BattlerBase.prototype.isStateAffected = function(t) {
  return this._states.contains(t);
};
Game_BattlerBase.prototype.isDeathStateAffected = function() {
  return this.isStateAffected(this.deathStateId());
};
Game_BattlerBase.prototype.deathStateId = function() {
  return 1;
};
Game_BattlerBase.prototype.resetStateCounts = function(t) {
  var e = $dataStates[t], r = 1 + Math.max(e.maxTurns - e.minTurns, 0);
  this._stateTurns[t] = e.minTurns + Math.randomInt(r);
};
Game_BattlerBase.prototype.isStateExpired = function(t) {
  return this._stateTurns[t] === 0;
};
Game_BattlerBase.prototype.updateStateTurns = function() {
  this._states.forEach(function(t) {
    this._stateTurns[t] > 0 && this._stateTurns[t]--;
  }, this);
};
Game_BattlerBase.prototype.clearBuffs = function() {
  this._buffs = [0, 0, 0, 0, 0, 0, 0, 0], this._buffTurns = [0, 0, 0, 0, 0, 0, 0, 0];
};
Game_BattlerBase.prototype.eraseBuff = function(t) {
  this._buffs[t] = 0, this._buffTurns[t] = 0;
};
Game_BattlerBase.prototype.buffLength = function() {
  return this._buffs.length;
};
Game_BattlerBase.prototype.buff = function(t) {
  return this._buffs[t];
};
Game_BattlerBase.prototype.isBuffAffected = function(t) {
  return this._buffs[t] > 0;
};
Game_BattlerBase.prototype.isDebuffAffected = function(t) {
  return this._buffs[t] < 0;
};
Game_BattlerBase.prototype.isBuffOrDebuffAffected = function(t) {
  return this._buffs[t] !== 0;
};
Game_BattlerBase.prototype.isMaxBuffAffected = function(t) {
  return this._buffs[t] === 2;
};
Game_BattlerBase.prototype.isMaxDebuffAffected = function(t) {
  return this._buffs[t] === -2;
};
Game_BattlerBase.prototype.increaseBuff = function(t) {
  this.isMaxBuffAffected(t) || this._buffs[t]++;
};
Game_BattlerBase.prototype.decreaseBuff = function(t) {
  this.isMaxDebuffAffected(t) || this._buffs[t]--;
};
Game_BattlerBase.prototype.overwriteBuffTurns = function(t, e) {
  this._buffTurns[t] < e && (this._buffTurns[t] = e);
};
Game_BattlerBase.prototype.isBuffExpired = function(t) {
  return this._buffTurns[t] === 0;
};
Game_BattlerBase.prototype.updateBuffTurns = function() {
  for (var t = 0; t < this._buffTurns.length; t++)
    this._buffTurns[t] > 0 && this._buffTurns[t]--;
};
Game_BattlerBase.prototype.die = function() {
  this._hp = 0, this.clearStates(), this.clearBuffs();
};
Game_BattlerBase.prototype.revive = function() {
  this._hp === 0 && (this._hp = 1);
};
Game_BattlerBase.prototype.states = function() {
  return this._states.map(function(t) {
    return $dataStates[t];
  });
};
Game_BattlerBase.prototype.stateIcons = function() {
  return this.states().map(function(t) {
    return t.iconIndex;
  }).filter(function(t) {
    return t > 0;
  });
};
Game_BattlerBase.prototype.buffIcons = function() {
  for (var t = [], e = 0; e < this._buffs.length; e++)
    this._buffs[e] !== 0 && t.push(this.buffIconIndex(this._buffs[e], e));
  return t;
};
Game_BattlerBase.prototype.buffIconIndex = function(t, e) {
  return t > 0 ? Game_BattlerBase.ICON_BUFF_START + (t - 1) * 8 + e : t < 0 ? Game_BattlerBase.ICON_DEBUFF_START + (-t - 1) * 8 + e : 0;
};
Game_BattlerBase.prototype.allIcons = function() {
  return this.stateIcons().concat(this.buffIcons());
};
Game_BattlerBase.prototype.traitObjects = function() {
  return this.states();
};
Game_BattlerBase.prototype.allTraits = function() {
  return this.traitObjects().reduce(function(t, e) {
    return t.concat(e.traits);
  }, []);
};
Game_BattlerBase.prototype.traits = function(t) {
  return this.allTraits().filter(function(e) {
    return e.code === t;
  });
};
Game_BattlerBase.prototype.traitsWithId = function(t, e) {
  return this.allTraits().filter(function(r) {
    return r.code === t && r.dataId === e;
  });
};
Game_BattlerBase.prototype.traitsPi = function(t, e) {
  return this.traitsWithId(t, e).reduce(function(r, s) {
    return r * s.value;
  }, 1);
};
Game_BattlerBase.prototype.traitsSum = function(t, e) {
  return this.traitsWithId(t, e).reduce(function(r, s) {
    return r + s.value;
  }, 0);
};
Game_BattlerBase.prototype.traitsSumAll = function(t) {
  return this.traits(t).reduce(function(e, r) {
    return e + r.value;
  }, 0);
};
Game_BattlerBase.prototype.traitsSet = function(t) {
  return this.traits(t).reduce(function(e, r) {
    return e.concat(r.dataId);
  }, []);
};
Game_BattlerBase.prototype.paramBase = function(t) {
  return 0;
};
Game_BattlerBase.prototype.paramPlus = function(t) {
  return this._paramPlus[t];
};
Game_BattlerBase.prototype.paramMin = function(t) {
  return t === 1 ? 0 : 1;
};
Game_BattlerBase.prototype.paramMax = function(t) {
  return t === 0 ? 999999 : t === 1 ? 9999 : 999;
};
Game_BattlerBase.prototype.paramRate = function(t) {
  return this.traitsPi(Game_BattlerBase.TRAIT_PARAM, t);
};
Game_BattlerBase.prototype.paramBuffRate = function(t) {
  return this._buffs[t] * 0.25 + 1;
};
Game_BattlerBase.prototype.param = function(t) {
  var e = this.paramBase(t) + this.paramPlus(t);
  e *= this.paramRate(t) * this.paramBuffRate(t);
  var r = this.paramMax(t), s = this.paramMin(t);
  return Math.round(e.clamp(s, r));
};
Game_BattlerBase.prototype.xparam = function(t) {
  return this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, t);
};
Game_BattlerBase.prototype.sparam = function(t) {
  return this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, t);
};
Game_BattlerBase.prototype.elementRate = function(t) {
  return this.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, t);
};
Game_BattlerBase.prototype.debuffRate = function(t) {
  return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, t);
};
Game_BattlerBase.prototype.stateRate = function(t) {
  return this.traitsPi(Game_BattlerBase.TRAIT_STATE_RATE, t);
};
Game_BattlerBase.prototype.stateResistSet = function() {
  return this.traitsSet(Game_BattlerBase.TRAIT_STATE_RESIST);
};
Game_BattlerBase.prototype.isStateResist = function(t) {
  return this.stateResistSet().contains(t);
};
Game_BattlerBase.prototype.attackElements = function() {
  return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_ELEMENT);
};
Game_BattlerBase.prototype.attackStates = function() {
  return this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_STATE);
};
Game_BattlerBase.prototype.attackStatesRate = function(t) {
  return this.traitsSum(Game_BattlerBase.TRAIT_ATTACK_STATE, t);
};
Game_BattlerBase.prototype.attackSpeed = function() {
  return this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_SPEED);
};
Game_BattlerBase.prototype.attackTimesAdd = function() {
  return Math.max(this.traitsSumAll(Game_BattlerBase.TRAIT_ATTACK_TIMES), 0);
};
Game_BattlerBase.prototype.addedSkillTypes = function() {
  return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_ADD);
};
Game_BattlerBase.prototype.isSkillTypeSealed = function(t) {
  return this.traitsSet(Game_BattlerBase.TRAIT_STYPE_SEAL).contains(t);
};
Game_BattlerBase.prototype.addedSkills = function() {
  return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_ADD);
};
Game_BattlerBase.prototype.isSkillSealed = function(t) {
  return this.traitsSet(Game_BattlerBase.TRAIT_SKILL_SEAL).contains(t);
};
Game_BattlerBase.prototype.isEquipWtypeOk = function(t) {
  return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_WTYPE).contains(t);
};
Game_BattlerBase.prototype.isEquipAtypeOk = function(t) {
  return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_ATYPE).contains(t);
};
Game_BattlerBase.prototype.isEquipTypeLocked = function(t) {
  return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_LOCK).contains(t);
};
Game_BattlerBase.prototype.isEquipTypeSealed = function(t) {
  return this.traitsSet(Game_BattlerBase.TRAIT_EQUIP_SEAL).contains(t);
};
Game_BattlerBase.prototype.slotType = function() {
  var t = this.traitsSet(Game_BattlerBase.TRAIT_SLOT_TYPE);
  return t.length > 0 ? Math.max.apply(null, t) : 0;
};
Game_BattlerBase.prototype.isDualWield = function() {
  return this.slotType() === 1;
};
Game_BattlerBase.prototype.actionPlusSet = function() {
  return this.traits(Game_BattlerBase.TRAIT_ACTION_PLUS).map(function(t) {
    return t.value;
  });
};
Game_BattlerBase.prototype.specialFlag = function(t) {
  return this.traits(Game_BattlerBase.TRAIT_SPECIAL_FLAG).some(function(e) {
    return e.dataId === t;
  });
};
Game_BattlerBase.prototype.collapseType = function() {
  var t = this.traitsSet(Game_BattlerBase.TRAIT_COLLAPSE_TYPE);
  return t.length > 0 ? Math.max.apply(null, t) : 0;
};
Game_BattlerBase.prototype.partyAbility = function(t) {
  return this.traits(Game_BattlerBase.TRAIT_PARTY_ABILITY).some(function(e) {
    return e.dataId === t;
  });
};
Game_BattlerBase.prototype.isAutoBattle = function() {
  return this.specialFlag(Game_BattlerBase.FLAG_ID_AUTO_BATTLE);
};
Game_BattlerBase.prototype.isGuard = function() {
  return this.specialFlag(Game_BattlerBase.FLAG_ID_GUARD) && this.canMove();
};
Game_BattlerBase.prototype.isSubstitute = function() {
  return this.specialFlag(Game_BattlerBase.FLAG_ID_SUBSTITUTE) && this.canMove();
};
Game_BattlerBase.prototype.isPreserveTp = function() {
  return this.specialFlag(Game_BattlerBase.FLAG_ID_PRESERVE_TP);
};
Game_BattlerBase.prototype.addParam = function(t, e) {
  this._paramPlus[t] += e, this.refresh();
};
Game_BattlerBase.prototype.setHp = function(t) {
  this._hp = t, this.refresh();
};
Game_BattlerBase.prototype.setMp = function(t) {
  this._mp = t, this.refresh();
};
Game_BattlerBase.prototype.setTp = function(t) {
  this._tp = t, this.refresh();
};
Game_BattlerBase.prototype.maxTp = function() {
  return 100;
};
Game_BattlerBase.prototype.refresh = function() {
  this.stateResistSet().forEach(function(t) {
    this.eraseState(t);
  }, this), this._hp = this._hp.clamp(0, this.mhp), this._mp = this._mp.clamp(0, this.mmp), this._tp = this._tp.clamp(0, this.maxTp());
};
Game_BattlerBase.prototype.recoverAll = function() {
  this.clearStates(), this._hp = this.mhp, this._mp = this.mmp;
};
Game_BattlerBase.prototype.hpRate = function() {
  return this.hp / this.mhp;
};
Game_BattlerBase.prototype.mpRate = function() {
  return this.mmp > 0 ? this.mp / this.mmp : 0;
};
Game_BattlerBase.prototype.tpRate = function() {
  return this.tp / this.maxTp();
};
Game_BattlerBase.prototype.hide = function() {
  this._hidden = !0;
};
Game_BattlerBase.prototype.appear = function() {
  this._hidden = !1;
};
Game_BattlerBase.prototype.isHidden = function() {
  return this._hidden;
};
Game_BattlerBase.prototype.isAppeared = function() {
  return !this.isHidden();
};
Game_BattlerBase.prototype.isDead = function() {
  return this.isAppeared() && this.isDeathStateAffected();
};
Game_BattlerBase.prototype.isAlive = function() {
  return this.isAppeared() && !this.isDeathStateAffected();
};
Game_BattlerBase.prototype.isDying = function() {
  return this.isAlive() && this._hp < this.mhp / 4;
};
Game_BattlerBase.prototype.isRestricted = function() {
  return this.isAppeared() && this.restriction() > 0;
};
Game_BattlerBase.prototype.canInput = function() {
  return this.isAppeared() && !this.isRestricted() && !this.isAutoBattle();
};
Game_BattlerBase.prototype.canMove = function() {
  return this.isAppeared() && this.restriction() < 4;
};
Game_BattlerBase.prototype.isConfused = function() {
  return this.isAppeared() && this.restriction() >= 1 && this.restriction() <= 3;
};
Game_BattlerBase.prototype.confusionLevel = function() {
  return this.isConfused() ? this.restriction() : 0;
};
Game_BattlerBase.prototype.isActor = function() {
  return !1;
};
Game_BattlerBase.prototype.isEnemy = function() {
  return !1;
};
Game_BattlerBase.prototype.sortStates = function() {
  this._states.sort(function(t, e) {
    var r = $dataStates[t].priority, s = $dataStates[e].priority;
    return r !== s ? s - r : t - e;
  });
};
Game_BattlerBase.prototype.restriction = function() {
  return Math.max.apply(null, this.states().map(function(t) {
    return t.restriction;
  }).concat(0));
};
Game_BattlerBase.prototype.addNewState = function(t) {
  t === this.deathStateId() && this.die();
  var e = this.isRestricted();
  this._states.push(t), this.sortStates(), !e && this.isRestricted() && this.onRestrict();
};
Game_BattlerBase.prototype.onRestrict = function() {
};
Game_BattlerBase.prototype.mostImportantStateText = function() {
  for (var t = this.states(), e = 0; e < t.length; e++)
    if (t[e].message3)
      return t[e].message3;
  return "";
};
Game_BattlerBase.prototype.stateMotionIndex = function() {
  var t = this.states();
  return t.length > 0 ? t[0].motion : 0;
};
Game_BattlerBase.prototype.stateOverlayIndex = function() {
  var t = this.states();
  return t.length > 0 ? t[0].overlay : 0;
};
Game_BattlerBase.prototype.isSkillWtypeOk = function(t) {
  return !0;
};
Game_BattlerBase.prototype.skillMpCost = function(t) {
  return Math.floor(t.mpCost * this.mcr);
};
Game_BattlerBase.prototype.skillTpCost = function(t) {
  return t.tpCost;
};
Game_BattlerBase.prototype.canPaySkillCost = function(t) {
  return this._tp >= this.skillTpCost(t) && this._mp >= this.skillMpCost(t);
};
Game_BattlerBase.prototype.paySkillCost = function(t) {
  this._mp -= this.skillMpCost(t), this._tp -= this.skillTpCost(t);
};
Game_BattlerBase.prototype.isOccasionOk = function(t) {
  return $gameParty.inBattle() ? t.occasion === 0 || t.occasion === 1 : t.occasion === 0 || t.occasion === 2;
};
Game_BattlerBase.prototype.meetsUsableItemConditions = function(t) {
  return this.canMove() && this.isOccasionOk(t);
};
Game_BattlerBase.prototype.meetsSkillConditions = function(t) {
  return this.meetsUsableItemConditions(t) && this.isSkillWtypeOk(t) && this.canPaySkillCost(t) && !this.isSkillSealed(t.id) && !this.isSkillTypeSealed(t.stypeId);
};
Game_BattlerBase.prototype.meetsItemConditions = function(t) {
  return this.meetsUsableItemConditions(t) && $gameParty.hasItem(t);
};
Game_BattlerBase.prototype.canUse = function(t) {
  return t ? DataManager.isSkill(t) ? this.meetsSkillConditions(t) : DataManager.isItem(t) ? this.meetsItemConditions(t) : !1 : !1;
};
Game_BattlerBase.prototype.canEquip = function(t) {
  return t ? DataManager.isWeapon(t) ? this.canEquipWeapon(t) : DataManager.isArmor(t) ? this.canEquipArmor(t) : !1 : !1;
};
Game_BattlerBase.prototype.canEquipWeapon = function(t) {
  return this.isEquipWtypeOk(t.wtypeId) && !this.isEquipTypeSealed(t.etypeId);
};
Game_BattlerBase.prototype.canEquipArmor = function(t) {
  return this.isEquipAtypeOk(t.atypeId) && !this.isEquipTypeSealed(t.etypeId);
};
Game_BattlerBase.prototype.attackSkillId = function() {
  return 1;
};
Game_BattlerBase.prototype.guardSkillId = function() {
  return 2;
};
Game_BattlerBase.prototype.canAttack = function() {
  return this.canUse($dataSkills[this.attackSkillId()]);
};
Game_BattlerBase.prototype.canGuard = function() {
  return this.canUse($dataSkills[this.guardSkillId()]);
};
const Game_BattlerBase$1 = Game_BattlerBase;
Game_Battler = class extends Game_BattlerBase {
  constructor(...t) {
    super(...t), this.initialize(...t);
  }
  initialize() {
    super.initialize();
  }
};
Game_Battler.prototype.initMembers = function() {
  Game_BattlerBase.prototype.initMembers.call(this), this._actions = [], this._speed = 0, this._result = new Game_ActionResult(), this._actionState = "", this._lastTargetIndex = 0, this._animations = [], this._damagePopup = !1, this._effectType = null, this._motionType = null, this._weaponImageId = 0, this._motionRefresh = !1, this._selected = !1;
};
Game_Battler.prototype.clearAnimations = function() {
  this._animations = [];
};
Game_Battler.prototype.clearDamagePopup = function() {
  this._damagePopup = !1;
};
Game_Battler.prototype.clearWeaponAnimation = function() {
  this._weaponImageId = 0;
};
Game_Battler.prototype.clearEffect = function() {
  this._effectType = null;
};
Game_Battler.prototype.clearMotion = function() {
  this._motionType = null, this._motionRefresh = !1;
};
Game_Battler.prototype.requestEffect = function(t) {
  this._effectType = t;
};
Game_Battler.prototype.requestMotion = function(t) {
  this._motionType = t;
};
Game_Battler.prototype.requestMotionRefresh = function() {
  this._motionRefresh = !0;
};
Game_Battler.prototype.select = function() {
  this._selected = !0;
};
Game_Battler.prototype.deselect = function() {
  this._selected = !1;
};
Game_Battler.prototype.isAnimationRequested = function() {
  return this._animations.length > 0;
};
Game_Battler.prototype.isDamagePopupRequested = function() {
  return this._damagePopup;
};
Game_Battler.prototype.isEffectRequested = function() {
  return !!this._effectType;
};
Game_Battler.prototype.isMotionRequested = function() {
  return !!this._motionType;
};
Game_Battler.prototype.isWeaponAnimationRequested = function() {
  return this._weaponImageId > 0;
};
Game_Battler.prototype.isMotionRefreshRequested = function() {
  return this._motionRefresh;
};
Game_Battler.prototype.isSelected = function() {
  return this._selected;
};
Game_Battler.prototype.effectType = function() {
  return this._effectType;
};
Game_Battler.prototype.motionType = function() {
  return this._motionType;
};
Game_Battler.prototype.weaponImageId = function() {
  return this._weaponImageId;
};
Game_Battler.prototype.shiftAnimation = function() {
  return this._animations.shift();
};
Game_Battler.prototype.startAnimation = function(t, e, r) {
  var s = { animationId: t, mirror: e, delay: r };
  this._animations.push(s);
};
Game_Battler.prototype.startDamagePopup = function() {
  this._damagePopup = !0;
};
Game_Battler.prototype.startWeaponAnimation = function(t) {
  this._weaponImageId = t;
};
Game_Battler.prototype.action = function(t) {
  return this._actions[t];
};
Game_Battler.prototype.setAction = function(t, e) {
  this._actions[t] = e;
};
Game_Battler.prototype.numActions = function() {
  return this._actions.length;
};
Game_Battler.prototype.clearActions = function() {
  this._actions = [];
};
Game_Battler.prototype.result = function() {
  return this._result;
};
Game_Battler.prototype.clearResult = function() {
  this._result.clear();
};
Game_Battler.prototype.refresh = function() {
  Game_BattlerBase.prototype.refresh.call(this), this.hp === 0 ? this.addState(this.deathStateId()) : this.removeState(this.deathStateId());
};
Game_Battler.prototype.addState = function(t) {
  this.isStateAddable(t) && (this.isStateAffected(t) || (this.addNewState(t), this.refresh()), this.resetStateCounts(t), this._result.pushAddedState(t));
};
Game_Battler.prototype.isStateAddable = function(t) {
  return this.isAlive() && $dataStates[t] && !this.isStateResist(t) && !this._result.isStateRemoved(t) && !this.isStateRestrict(t);
};
Game_Battler.prototype.isStateRestrict = function(t) {
  return $dataStates[t].removeByRestriction && this.isRestricted();
};
Game_Battler.prototype.onRestrict = function() {
  Game_BattlerBase.prototype.onRestrict.call(this), this.clearActions(), this.states().forEach(function(t) {
    t.removeByRestriction && this.removeState(t.id);
  }, this);
};
Game_Battler.prototype.removeState = function(t) {
  this.isStateAffected(t) && (t === this.deathStateId() && this.revive(), this.eraseState(t), this.refresh(), this._result.pushRemovedState(t));
};
Game_Battler.prototype.escape = function() {
  $gameParty.inBattle() && this.hide(), this.clearActions(), this.clearStates(), SoundManager.playEscape();
};
Game_Battler.prototype.addBuff = function(t, e) {
  this.isAlive() && (this.increaseBuff(t), this.isBuffAffected(t) && this.overwriteBuffTurns(t, e), this._result.pushAddedBuff(t), this.refresh());
};
Game_Battler.prototype.addDebuff = function(t, e) {
  this.isAlive() && (this.decreaseBuff(t), this.isDebuffAffected(t) && this.overwriteBuffTurns(t, e), this._result.pushAddedDebuff(t), this.refresh());
};
Game_Battler.prototype.removeBuff = function(t) {
  this.isAlive() && this.isBuffOrDebuffAffected(t) && (this.eraseBuff(t), this._result.pushRemovedBuff(t), this.refresh());
};
Game_Battler.prototype.removeBattleStates = function() {
  this.states().forEach(function(t) {
    t.removeAtBattleEnd && this.removeState(t.id);
  }, this);
};
Game_Battler.prototype.removeAllBuffs = function() {
  for (var t = 0; t < this.buffLength(); t++)
    this.removeBuff(t);
};
Game_Battler.prototype.removeStatesAuto = function(t) {
  this.states().forEach(function(e) {
    this.isStateExpired(e.id) && e.autoRemovalTiming === t && this.removeState(e.id);
  }, this);
};
Game_Battler.prototype.removeBuffsAuto = function() {
  for (var t = 0; t < this.buffLength(); t++)
    this.isBuffExpired(t) && this.removeBuff(t);
};
Game_Battler.prototype.removeStatesByDamage = function() {
  this.states().forEach(function(t) {
    t.removeByDamage && Math.randomInt(100) < t.chanceByDamage && this.removeState(t.id);
  }, this);
};
Game_Battler.prototype.makeActionTimes = function() {
  return this.actionPlusSet().reduce(function(t, e) {
    return Math.random() < e ? t + 1 : t;
  }, 1);
};
Game_Battler.prototype.makeActions = function() {
  if (this.clearActions(), this.canMove()) {
    var t = this.makeActionTimes();
    this._actions = [];
    for (var e = 0; e < t; e++)
      this._actions.push(new Game_Action(this));
  }
};
Game_Battler.prototype.speed = function() {
  return this._speed;
};
Game_Battler.prototype.makeSpeed = function() {
  this._speed = Math.min.apply(
    null,
    this._actions.map(function(t) {
      return t.speed();
    })
  ) || 0;
};
Game_Battler.prototype.currentAction = function() {
  return this._actions[0];
};
Game_Battler.prototype.removeCurrentAction = function() {
  this._actions.shift();
};
Game_Battler.prototype.setLastTarget = function(t) {
  t ? this._lastTargetIndex = t.index() : this._lastTargetIndex = 0;
};
Game_Battler.prototype.forceAction = function(t, e) {
  this.clearActions();
  var r = new Game_Action(this, !0);
  r.setSkill(t), e === -2 ? r.setTarget(this._lastTargetIndex) : e === -1 ? r.decideRandomTarget() : r.setTarget(e), this._actions.push(r);
};
Game_Battler.prototype.useItem = function(t) {
  DataManager.isSkill(t) ? this.paySkillCost(t) : DataManager.isItem(t) && this.consumeItem(t);
};
Game_Battler.prototype.consumeItem = function(t) {
  $gameParty.consumeItem(t);
};
Game_Battler.prototype.gainHp = function(t) {
  this._result.hpDamage = -t, this._result.hpAffected = !0, this.setHp(this.hp + t);
};
Game_Battler.prototype.gainMp = function(t) {
  this._result.mpDamage = -t, this.setMp(this.mp + t);
};
Game_Battler.prototype.gainTp = function(t) {
  this._result.tpDamage = -t, this.setTp(this.tp + t);
};
Game_Battler.prototype.gainSilentTp = function(t) {
  this.setTp(this.tp + t);
};
Game_Battler.prototype.initTp = function() {
  this.setTp(Math.randomInt(25));
};
Game_Battler.prototype.clearTp = function() {
  this.setTp(0);
};
Game_Battler.prototype.chargeTpByDamage = function(t) {
  var e = Math.floor(50 * t * this.tcr);
  this.gainSilentTp(e);
};
Game_Battler.prototype.regenerateHp = function() {
  var t = Math.floor(this.mhp * this.hrg);
  t = Math.max(t, -this.maxSlipDamage()), t !== 0 && this.gainHp(t);
};
Game_Battler.prototype.maxSlipDamage = function() {
  return $dataSystem.optSlipDeath ? this.hp : Math.max(this.hp - 1, 0);
};
Game_Battler.prototype.regenerateMp = function() {
  var t = Math.floor(this.mmp * this.mrg);
  t !== 0 && this.gainMp(t);
};
Game_Battler.prototype.regenerateTp = function() {
  var t = Math.floor(100 * this.trg);
  this.gainSilentTp(t);
};
Game_Battler.prototype.regenerateAll = function() {
  this.isAlive() && (this.regenerateHp(), this.regenerateMp(), this.regenerateTp());
};
Game_Battler.prototype.onBattleStart = function() {
  this.setActionState("undecided"), this.clearMotion(), this.isPreserveTp() || this.initTp();
};
Game_Battler.prototype.onAllActionsEnd = function() {
  this.clearResult(), this.removeStatesAuto(1), this.removeBuffsAuto();
};
Game_Battler.prototype.onTurnEnd = function() {
  this.clearResult(), this.regenerateAll(), BattleManager.isForcedTurn() || (this.updateStateTurns(), this.updateBuffTurns()), this.removeStatesAuto(2);
};
Game_Battler.prototype.onBattleEnd = function() {
  this.clearResult(), this.removeBattleStates(), this.removeAllBuffs(), this.clearActions(), this.isPreserveTp() || this.clearTp(), this.appear();
};
Game_Battler.prototype.onDamage = function(t) {
  this.removeStatesByDamage(), this.chargeTpByDamage(t / this.mhp);
};
Game_Battler.prototype.setActionState = function(t) {
  this._actionState = t, this.requestMotionRefresh();
};
Game_Battler.prototype.isUndecided = function() {
  return this._actionState === "undecided";
};
Game_Battler.prototype.isInputting = function() {
  return this._actionState === "inputting";
};
Game_Battler.prototype.isWaiting = function() {
  return this._actionState === "waiting";
};
Game_Battler.prototype.isActing = function() {
  return this._actionState === "acting";
};
Game_Battler.prototype.isChanting = function() {
  return this.isWaiting() ? this._actions.some(function(t) {
    return t.isMagicSkill();
  }) : !1;
};
Game_Battler.prototype.isGuardWaiting = function() {
  return this.isWaiting() ? this._actions.some(function(t) {
    return t.isGuard();
  }) : !1;
};
Game_Battler.prototype.performActionStart = function(t) {
  t.isGuard() || this.setActionState("acting");
};
Game_Battler.prototype.performAction = function(t) {
};
Game_Battler.prototype.performActionEnd = function() {
  this.setActionState("done");
};
Game_Battler.prototype.performDamage = function() {
};
Game_Battler.prototype.performMiss = function() {
  SoundManager.playMiss();
};
Game_Battler.prototype.performRecovery = function() {
  SoundManager.playRecovery();
};
Game_Battler.prototype.performEvasion = function() {
  SoundManager.playEvasion();
};
Game_Battler.prototype.performMagicEvasion = function() {
  SoundManager.playMagicEvasion();
};
Game_Battler.prototype.performCounter = function() {
  SoundManager.playEvasion();
};
Game_Battler.prototype.performReflection = function() {
  SoundManager.playReflection();
};
Game_Battler.prototype.performSubstitute = function(t) {
};
Game_Battler.prototype.performCollapse = function() {
};
const Game_Battler$1 = Game_Battler;
Game_Actor = function() {
  this.initialize.apply(this, arguments);
};
Game_Actor.prototype = Object.create(Game_Battler.prototype);
Game_Actor.prototype.constructor = Game_Actor;
Object.defineProperty(Game_Actor.prototype, "level", {
  get: function() {
    return this._level;
  },
  configurable: !0
});
Game_Actor.prototype.initialize = function(t) {
  Game_Battler.prototype.initialize.call(this), this.setup(t);
};
Game_Actor.prototype.initMembers = function() {
  Game_Battler.prototype.initMembers.call(this), this._actorId = 0, this._name = "", this._nickname = "", this._classId = 0, this._level = 0, this._characterName = "", this._characterIndex = 0, this._faceName = "", this._faceIndex = 0, this._battlerName = "", this._exp = {}, this._skills = [], this._equips = [], this._actionInputIndex = 0, this._lastMenuSkill = new Game_Item(), this._lastBattleSkill = new Game_Item(), this._lastCommandSymbol = "";
};
Game_Actor.prototype.setup = function(t) {
  var e = $dataActors[t];
  this._actorId = t, this._name = e.name, this._nickname = e.nickname, this._profile = e.profile, this._classId = e.classId, this._level = e.initialLevel, this.initImages(), this.initExp(), this.initSkills(), this.initEquips(e.equips), this.clearParamPlus(), this.recoverAll();
};
Game_Actor.prototype.actorId = function() {
  return this._actorId;
};
Game_Actor.prototype.actor = function() {
  return $dataActors[this._actorId];
};
Game_Actor.prototype.name = function() {
  return this._name;
};
Game_Actor.prototype.setName = function(t) {
  this._name = t;
};
Game_Actor.prototype.nickname = function() {
  return this._nickname;
};
Game_Actor.prototype.setNickname = function(t) {
  this._nickname = t;
};
Game_Actor.prototype.profile = function() {
  return this._profile;
};
Game_Actor.prototype.setProfile = function(t) {
  this._profile = t;
};
Game_Actor.prototype.characterName = function() {
  return this._characterName;
};
Game_Actor.prototype.characterIndex = function() {
  return this._characterIndex;
};
Game_Actor.prototype.faceName = function() {
  return this._faceName;
};
Game_Actor.prototype.faceIndex = function() {
  return this._faceIndex;
};
Game_Actor.prototype.battlerName = function() {
  return this._battlerName;
};
Game_Actor.prototype.clearStates = function() {
  Game_Battler.prototype.clearStates.call(this), this._stateSteps = {};
};
Game_Actor.prototype.eraseState = function(t) {
  Game_Battler.prototype.eraseState.call(this, t), delete this._stateSteps[t];
};
Game_Actor.prototype.resetStateCounts = function(t) {
  Game_Battler.prototype.resetStateCounts.call(this, t), this._stateSteps[t] = $dataStates[t].stepsToRemove;
};
Game_Actor.prototype.initImages = function() {
  var t = this.actor();
  this._characterName = t.characterName, this._characterIndex = t.characterIndex, this._faceName = t.faceName, this._faceIndex = t.faceIndex, this._battlerName = t.battlerName;
};
Game_Actor.prototype.expForLevel = function(t) {
  var e = this.currentClass(), r = e.expParams[0], s = e.expParams[1], o = e.expParams[2], h = e.expParams[3];
  return Math.round(r * Math.pow(t - 1, 0.9 + o / 250) * t * (t + 1) / (6 + Math.pow(t, 2) / 50 / h) + (t - 1) * s);
};
Game_Actor.prototype.initExp = function() {
  this._exp[this._classId] = this.currentLevelExp();
};
Game_Actor.prototype.currentExp = function() {
  return this._exp[this._classId];
};
Game_Actor.prototype.currentLevelExp = function() {
  return this.expForLevel(this._level);
};
Game_Actor.prototype.nextLevelExp = function() {
  return this.expForLevel(this._level + 1);
};
Game_Actor.prototype.nextRequiredExp = function() {
  return this.nextLevelExp() - this.currentExp();
};
Game_Actor.prototype.maxLevel = function() {
  return this.actor().maxLevel;
};
Game_Actor.prototype.isMaxLevel = function() {
  return this._level >= this.maxLevel();
};
Game_Actor.prototype.initSkills = function() {
  this._skills = [], this.currentClass().learnings.forEach(function(t) {
    t.level <= this._level && this.learnSkill(t.skillId);
  }, this);
};
Game_Actor.prototype.initEquips = function(t) {
  var e = this.equipSlots(), r = e.length;
  this._equips = [];
  for (var s = 0; s < r; s++)
    this._equips[s] = new Game_Item();
  for (var o = 0; o < t.length; o++)
    o < r && this._equips[o].setEquip(e[o] === 1, t[o]);
  this.releaseUnequippableItems(!0), this.refresh();
};
Game_Actor.prototype.equipSlots = function() {
  for (var t = [], e = 1; e < $dataSystem.equipTypes.length; e++)
    t.push(e);
  return t.length >= 2 && this.isDualWield() && (t[1] = 1), t;
};
Game_Actor.prototype.equips = function() {
  return this._equips.map(function(t) {
    return t.object();
  });
};
Game_Actor.prototype.weapons = function() {
  return this.equips().filter(function(t) {
    return t && DataManager.isWeapon(t);
  });
};
Game_Actor.prototype.armors = function() {
  return this.equips().filter(function(t) {
    return t && DataManager.isArmor(t);
  });
};
Game_Actor.prototype.hasWeapon = function(t) {
  return this.weapons().contains(t);
};
Game_Actor.prototype.hasArmor = function(t) {
  return this.armors().contains(t);
};
Game_Actor.prototype.isEquipChangeOk = function(t) {
  return !this.isEquipTypeLocked(this.equipSlots()[t]) && !this.isEquipTypeSealed(this.equipSlots()[t]);
};
Game_Actor.prototype.changeEquip = function(t, e) {
  this.tradeItemWithParty(e, this.equips()[t]) && (!e || this.equipSlots()[t] === e.etypeId) && (this._equips[t].setObject(e), this.refresh());
};
Game_Actor.prototype.forceChangeEquip = function(t, e) {
  this._equips[t].setObject(e), this.releaseUnequippableItems(!0), this.refresh();
};
Game_Actor.prototype.tradeItemWithParty = function(t, e) {
  return t && !$gameParty.hasItem(t) ? !1 : ($gameParty.gainItem(e, 1), $gameParty.loseItem(t, 1), !0);
};
Game_Actor.prototype.changeEquipById = function(t, e) {
  var r = t - 1;
  this.equipSlots()[r] === 1 ? this.changeEquip(r, $dataWeapons[e]) : this.changeEquip(r, $dataArmors[e]);
};
Game_Actor.prototype.isEquipped = function(t) {
  return this.equips().contains(t);
};
Game_Actor.prototype.discardEquip = function(t) {
  var e = this.equips().indexOf(t);
  e >= 0 && this._equips[e].setObject(null);
};
Game_Actor.prototype.releaseUnequippableItems = function(t) {
  for (; ; ) {
    for (var e = this.equipSlots(), r = this.equips(), s = !1, o = 0; o < r.length; o++) {
      var h = r[o];
      h && (!this.canEquip(h) || h.etypeId !== e[o]) && (t || this.tradeItemWithParty(null, h), this._equips[o].setObject(null), s = !0);
    }
    if (!s)
      break;
  }
};
Game_Actor.prototype.clearEquipments = function() {
  for (var t = this.equipSlots().length, e = 0; e < t; e++)
    this.isEquipChangeOk(e) && this.changeEquip(e, null);
};
Game_Actor.prototype.optimizeEquipments = function() {
  var t = this.equipSlots().length;
  this.clearEquipments();
  for (var e = 0; e < t; e++)
    this.isEquipChangeOk(e) && this.changeEquip(e, this.bestEquipItem(e));
};
Game_Actor.prototype.bestEquipItem = function(t) {
  for (var e = this.equipSlots()[t], r = $gameParty.equipItems().filter(function(c) {
    return c.etypeId === e && this.canEquip(c);
  }, this), s = null, o = -1e3, h = 0; h < r.length; h++) {
    var p = this.calcEquipItemPerformance(r[h]);
    p > o && (o = p, s = r[h]);
  }
  return s;
};
Game_Actor.prototype.calcEquipItemPerformance = function(t) {
  return t.params.reduce(function(e, r) {
    return e + r;
  });
};
Game_Actor.prototype.isSkillWtypeOk = function(t) {
  var e = t.requiredWtypeId1, r = t.requiredWtypeId2;
  return !!(e === 0 && r === 0 || e > 0 && this.isWtypeEquipped(e) || r > 0 && this.isWtypeEquipped(r));
};
Game_Actor.prototype.isWtypeEquipped = function(t) {
  return this.weapons().some(function(e) {
    return e.wtypeId === t;
  });
};
Game_Actor.prototype.refresh = function() {
  this.releaseUnequippableItems(!1), Game_Battler.prototype.refresh.call(this);
};
Game_Actor.prototype.isActor = function() {
  return !0;
};
Game_Actor.prototype.friendsUnit = function() {
  return $gameParty;
};
Game_Actor.prototype.opponentsUnit = function() {
  return $gameTroop;
};
Game_Actor.prototype.index = function() {
  return $gameParty.members().indexOf(this);
};
Game_Actor.prototype.isBattleMember = function() {
  return $gameParty.battleMembers().contains(this);
};
Game_Actor.prototype.isFormationChangeOk = function() {
  return !0;
};
Game_Actor.prototype.currentClass = function() {
  return $dataClasses[this._classId];
};
Game_Actor.prototype.isClass = function(t) {
  return t && this._classId === t.id;
};
Game_Actor.prototype.skills = function() {
  var t = [];
  return this._skills.concat(this.addedSkills()).forEach(function(e) {
    t.contains($dataSkills[e]) || t.push($dataSkills[e]);
  }), t;
};
Game_Actor.prototype.usableSkills = function() {
  return this.skills().filter(function(t) {
    return this.canUse(t);
  }, this);
};
Game_Actor.prototype.traitObjects = function() {
  var t = Game_Battler.prototype.traitObjects.call(this);
  t = t.concat([this.actor(), this.currentClass()]);
  for (var e = this.equips(), r = 0; r < e.length; r++) {
    var s = e[r];
    s && t.push(s);
  }
  return t;
};
Game_Actor.prototype.attackElements = function() {
  var t = Game_Battler.prototype.attackElements.call(this);
  return this.hasNoWeapons() && !t.contains(this.bareHandsElementId()) && t.push(this.bareHandsElementId()), t;
};
Game_Actor.prototype.hasNoWeapons = function() {
  return this.weapons().length === 0;
};
Game_Actor.prototype.bareHandsElementId = function() {
  return 1;
};
Game_Actor.prototype.paramMax = function(t) {
  return t === 0 ? 9999 : Game_Battler.prototype.paramMax.call(this, t);
};
Game_Actor.prototype.paramBase = function(t) {
  return this.currentClass().params[t][this._level];
};
Game_Actor.prototype.paramPlus = function(t) {
  for (var e = Game_Battler.prototype.paramPlus.call(this, t), r = this.equips(), s = 0; s < r.length; s++) {
    var o = r[s];
    o && (e += o.params[t]);
  }
  return e;
};
Game_Actor.prototype.attackAnimationId1 = function() {
  if (this.hasNoWeapons())
    return this.bareHandsAnimationId();
  var t = this.weapons();
  return t[0] ? t[0].animationId : 0;
};
Game_Actor.prototype.attackAnimationId2 = function() {
  var t = this.weapons();
  return t[1] ? t[1].animationId : 0;
};
Game_Actor.prototype.bareHandsAnimationId = function() {
  return 1;
};
Game_Actor.prototype.changeExp = function(t, e) {
  this._exp[this._classId] = Math.max(t, 0);
  for (var r = this._level, s = this.skills(); !this.isMaxLevel() && this.currentExp() >= this.nextLevelExp(); )
    this.levelUp();
  for (; this.currentExp() < this.currentLevelExp(); )
    this.levelDown();
  e && this._level > r && this.displayLevelUp(this.findNewSkills(s)), this.refresh();
};
Game_Actor.prototype.levelUp = function() {
  this._level++, this.currentClass().learnings.forEach(function(t) {
    t.level === this._level && this.learnSkill(t.skillId);
  }, this);
};
Game_Actor.prototype.levelDown = function() {
  this._level--;
};
Game_Actor.prototype.findNewSkills = function(t) {
  for (var e = this.skills(), r = 0; r < t.length; r++) {
    var s = e.indexOf(t[r]);
    s >= 0 && e.splice(s, 1);
  }
  return e;
};
Game_Actor.prototype.displayLevelUp = function(t) {
  var e = TextManager.levelUp.format(this._name, TextManager.level, this._level);
  $gameMessage.newPage(), $gameMessage.add(e), t.forEach(function(r) {
    $gameMessage.add(TextManager.obtainSkill.format(r.name));
  });
};
Game_Actor.prototype.gainExp = function(t) {
  var e = this.currentExp() + Math.round(t * this.finalExpRate());
  this.changeExp(e, this.shouldDisplayLevelUp());
};
Game_Actor.prototype.finalExpRate = function() {
  return this.exr * (this.isBattleMember() ? 1 : this.benchMembersExpRate());
};
Game_Actor.prototype.benchMembersExpRate = function() {
  return $dataSystem.optExtraExp ? 1 : 0;
};
Game_Actor.prototype.shouldDisplayLevelUp = function() {
  return !0;
};
Game_Actor.prototype.changeLevel = function(t, e) {
  t = t.clamp(1, this.maxLevel()), this.changeExp(this.expForLevel(t), e);
};
Game_Actor.prototype.learnSkill = function(t) {
  this.isLearnedSkill(t) || (this._skills.push(t), this._skills.sort(function(e, r) {
    return e - r;
  }));
};
Game_Actor.prototype.forgetSkill = function(t) {
  var e = this._skills.indexOf(t);
  e >= 0 && this._skills.splice(e, 1);
};
Game_Actor.prototype.isLearnedSkill = function(t) {
  return this._skills.contains(t);
};
Game_Actor.prototype.hasSkill = function(t) {
  return this.skills().contains($dataSkills[t]);
};
Game_Actor.prototype.changeClass = function(t, e) {
  e && (this._exp[t] = this.currentExp()), this._classId = t, this.changeExp(this._exp[this._classId] || 0, !1), this.refresh();
};
Game_Actor.prototype.setCharacterImage = function(t, e) {
  this._characterName = t, this._characterIndex = e;
};
Game_Actor.prototype.setFaceImage = function(t, e) {
  this._faceName = t, this._faceIndex = e;
};
Game_Actor.prototype.setBattlerImage = function(t) {
  this._battlerName = t;
};
Game_Actor.prototype.isSpriteVisible = function() {
  return $gameSystem.isSideView();
};
Game_Actor.prototype.startAnimation = function(t, e, r) {
  e = !e, Game_Battler.prototype.startAnimation.call(this, t, e, r);
};
Game_Actor.prototype.performActionStart = function(t) {
  Game_Battler.prototype.performActionStart.call(this, t);
};
Game_Actor.prototype.performAction = function(t) {
  Game_Battler.prototype.performAction.call(this, t), t.isAttack() ? this.performAttack() : t.isGuard() ? this.requestMotion("guard") : t.isMagicSkill() ? this.requestMotion("spell") : t.isSkill() ? this.requestMotion("skill") : t.isItem() && this.requestMotion("item");
};
Game_Actor.prototype.performActionEnd = function() {
  Game_Battler.prototype.performActionEnd.call(this);
};
Game_Actor.prototype.performAttack = function() {
  var t = this.weapons(), e = t[0] ? t[0].wtypeId : 0, r = $dataSystem.attackMotions[e];
  r && (r.type === 0 ? this.requestMotion("thrust") : r.type === 1 ? this.requestMotion("swing") : r.type === 2 && this.requestMotion("missile"), this.startWeaponAnimation(r.weaponImageId));
};
Game_Actor.prototype.performDamage = function() {
  Game_Battler.prototype.performDamage.call(this), this.isSpriteVisible() ? this.requestMotion("damage") : $gameScreen.startShake(5, 5, 10), SoundManager.playActorDamage();
};
Game_Actor.prototype.performEvasion = function() {
  Game_Battler.prototype.performEvasion.call(this), this.requestMotion("evade");
};
Game_Actor.prototype.performMagicEvasion = function() {
  Game_Battler.prototype.performMagicEvasion.call(this), this.requestMotion("evade");
};
Game_Actor.prototype.performCounter = function() {
  Game_Battler.prototype.performCounter.call(this), this.performAttack();
};
Game_Actor.prototype.performCollapse = function() {
  Game_Battler.prototype.performCollapse.call(this), $gameParty.inBattle() && SoundManager.playActorCollapse();
};
Game_Actor.prototype.performVictory = function() {
  this.canMove() && this.requestMotion("victory");
};
Game_Actor.prototype.performEscape = function() {
  this.canMove() && this.requestMotion("escape");
};
Game_Actor.prototype.makeActionList = function() {
  var t = [], e = new Game_Action(this);
  return e.setAttack(), t.push(e), this.usableSkills().forEach(function(r) {
    e = new Game_Action(this), e.setSkill(r.id), t.push(e);
  }, this), t;
};
Game_Actor.prototype.makeAutoBattleActions = function() {
  for (var t = 0; t < this.numActions(); t++)
    for (var e = this.makeActionList(), r = Number.MIN_VALUE, s = 0; s < e.length; s++) {
      var o = e[s].evaluate();
      o > r && (r = o, this.setAction(t, e[s]));
    }
  this.setActionState("waiting");
};
Game_Actor.prototype.makeConfusionActions = function() {
  for (var t = 0; t < this.numActions(); t++)
    this.action(t).setConfusion();
  this.setActionState("waiting");
};
Game_Actor.prototype.makeActions = function() {
  Game_Battler.prototype.makeActions.call(this), this.numActions() > 0 ? this.setActionState("undecided") : this.setActionState("waiting"), this.isAutoBattle() ? this.makeAutoBattleActions() : this.isConfused() && this.makeConfusionActions();
};
Game_Actor.prototype.onPlayerWalk = function() {
  this.clearResult(), this.checkFloorEffect(), $gamePlayer.isNormal() && (this.turnEndOnMap(), this.states().forEach(function(t) {
    this.updateStateSteps(t);
  }, this), this.showAddedStates(), this.showRemovedStates());
};
Game_Actor.prototype.updateStateSteps = function(t) {
  t.removeByWalking && this._stateSteps[t.id] > 0 && --this._stateSteps[t.id] === 0 && this.removeState(t.id);
};
Game_Actor.prototype.showAddedStates = function() {
  this.result().addedStateObjects().forEach(function(t) {
    t.message1 && $gameMessage.add(this._name + t.message1);
  }, this);
};
Game_Actor.prototype.showRemovedStates = function() {
  this.result().removedStateObjects().forEach(function(t) {
    t.message4 && $gameMessage.add(this._name + t.message4);
  }, this);
};
Game_Actor.prototype.stepsForTurn = function() {
  return 20;
};
Game_Actor.prototype.turnEndOnMap = function() {
  $gameParty.steps() % this.stepsForTurn() === 0 && (this.onTurnEnd(), this.result().hpDamage > 0 && this.performMapDamage());
};
Game_Actor.prototype.checkFloorEffect = function() {
  $gamePlayer.isOnDamageFloor() && this.executeFloorDamage();
};
Game_Actor.prototype.executeFloorDamage = function() {
  var t = Math.floor(this.basicFloorDamage() * this.fdr);
  t = Math.min(t, this.maxFloorDamage()), this.gainHp(-t), t > 0 && this.performMapDamage();
};
Game_Actor.prototype.basicFloorDamage = function() {
  return 10;
};
Game_Actor.prototype.maxFloorDamage = function() {
  return $dataSystem.optFloorDeath ? this.hp : Math.max(this.hp - 1, 0);
};
Game_Actor.prototype.performMapDamage = function() {
  $gameParty.inBattle() || $gameScreen.startFlashForDamage();
};
Game_Actor.prototype.clearActions = function() {
  Game_Battler.prototype.clearActions.call(this), this._actionInputIndex = 0;
};
Game_Actor.prototype.inputtingAction = function() {
  return this.action(this._actionInputIndex);
};
Game_Actor.prototype.selectNextCommand = function() {
  return this._actionInputIndex < this.numActions() - 1 ? (this._actionInputIndex++, !0) : !1;
};
Game_Actor.prototype.selectPreviousCommand = function() {
  return this._actionInputIndex > 0 ? (this._actionInputIndex--, !0) : !1;
};
Game_Actor.prototype.lastMenuSkill = function() {
  return this._lastMenuSkill.object();
};
Game_Actor.prototype.setLastMenuSkill = function(t) {
  this._lastMenuSkill.setObject(t);
};
Game_Actor.prototype.lastBattleSkill = function() {
  return this._lastBattleSkill.object();
};
Game_Actor.prototype.setLastBattleSkill = function(t) {
  this._lastBattleSkill.setObject(t);
};
Game_Actor.prototype.lastCommandSymbol = function() {
  return this._lastCommandSymbol;
};
Game_Actor.prototype.setLastCommandSymbol = function(t) {
  this._lastCommandSymbol = t;
};
Game_Actor.prototype.testEscape = function(t) {
  return t.effects.some(function(e, r, s) {
    return e && e.code === Game_Action.EFFECT_SPECIAL;
  });
};
Game_Actor.prototype.meetsUsableItemConditions = function(t) {
  return $gameParty.inBattle() && !BattleManager.canEscape() && this.testEscape(t) ? !1 : Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, t);
};
const Game_Actor$1 = Game_Actor;
Game_Enemy = function() {
  this.initialize.apply(this, arguments);
};
Game_Enemy.prototype = Object.create(Game_Battler$1.prototype);
Game_Enemy.prototype.constructor = Game_Enemy;
Game_Enemy.prototype.initialize = function(t, e, r) {
  Game_Battler$1.prototype.initialize.call(this), this.setup(t, e, r);
};
Game_Enemy.prototype.initMembers = function() {
  Game_Battler$1.prototype.initMembers.call(this), this._enemyId = 0, this._letter = "", this._plural = !1, this._screenX = 0, this._screenY = 0;
};
Game_Enemy.prototype.setup = function(t, e, r) {
  this._enemyId = t, this._screenX = e, this._screenY = r, this.recoverAll();
};
Game_Enemy.prototype.isEnemy = function() {
  return !0;
};
Game_Enemy.prototype.friendsUnit = function() {
  return $gameTroop;
};
Game_Enemy.prototype.opponentsUnit = function() {
  return $gameParty;
};
Game_Enemy.prototype.index = function() {
  return $gameTroop.members().indexOf(this);
};
Game_Enemy.prototype.isBattleMember = function() {
  return this.index() >= 0;
};
Game_Enemy.prototype.enemyId = function() {
  return this._enemyId;
};
Game_Enemy.prototype.enemy = function() {
  return $dataEnemies[this._enemyId];
};
Game_Enemy.prototype.traitObjects = function() {
  return Game_Battler$1.prototype.traitObjects.call(this).concat(this.enemy());
};
Game_Enemy.prototype.paramBase = function(t) {
  return this.enemy().params[t];
};
Game_Enemy.prototype.exp = function() {
  return this.enemy().exp;
};
Game_Enemy.prototype.gold = function() {
  return this.enemy().gold;
};
Game_Enemy.prototype.makeDropItems = function() {
  return this.enemy().dropItems.reduce((function(t, e) {
    return e.kind > 0 && Math.random() * e.denominator < this.dropItemRate() ? t.concat(this.itemObject(e.kind, e.dataId)) : t;
  }).bind(this), []);
};
Game_Enemy.prototype.dropItemRate = function() {
  return $gameParty.hasDropItemDouble() ? 2 : 1;
};
Game_Enemy.prototype.itemObject = function(t, e) {
  return t === 1 ? $dataItems[e] : t === 2 ? $dataWeapons[e] : t === 3 ? $dataArmors[e] : null;
};
Game_Enemy.prototype.isSpriteVisible = function() {
  return !0;
};
Game_Enemy.prototype.screenX = function() {
  return this._screenX;
};
Game_Enemy.prototype.screenY = function() {
  return this._screenY;
};
Game_Enemy.prototype.battlerName = function() {
  return this.enemy().battlerName;
};
Game_Enemy.prototype.battlerHue = function() {
  return this.enemy().battlerHue;
};
Game_Enemy.prototype.originalName = function() {
  return this.enemy().name;
};
Game_Enemy.prototype.name = function() {
  return this.originalName() + (this._plural ? this._letter : "");
};
Game_Enemy.prototype.isLetterEmpty = function() {
  return this._letter === "";
};
Game_Enemy.prototype.setLetter = function(t) {
  this._letter = t;
};
Game_Enemy.prototype.setPlural = function(t) {
  this._plural = t;
};
Game_Enemy.prototype.performActionStart = function(t) {
  Game_Battler$1.prototype.performActionStart.call(this, t), this.requestEffect("whiten");
};
Game_Enemy.prototype.performAction = function(t) {
  Game_Battler$1.prototype.performAction.call(this, t);
};
Game_Enemy.prototype.performActionEnd = function() {
  Game_Battler$1.prototype.performActionEnd.call(this);
};
Game_Enemy.prototype.performDamage = function() {
  Game_Battler$1.prototype.performDamage.call(this), SoundManager.playEnemyDamage(), this.requestEffect("blink");
};
Game_Enemy.prototype.performCollapse = function() {
  switch (Game_Battler$1.prototype.performCollapse.call(this), this.collapseType()) {
    case 0:
      this.requestEffect("collapse"), SoundManager.playEnemyCollapse();
      break;
    case 1:
      this.requestEffect("bossCollapse"), SoundManager.playBossCollapse1();
      break;
    case 2:
      this.requestEffect("instantCollapse");
      break;
  }
};
Game_Enemy.prototype.transform = function(t) {
  var e = this.originalName();
  this._enemyId = t, this.originalName() !== e && (this._letter = "", this._plural = !1), this.refresh(), this.numActions() > 0 && this.makeActions();
};
Game_Enemy.prototype.meetsCondition = function(t) {
  var e = t.conditionParam1, r = t.conditionParam2;
  switch (t.conditionType) {
    case 1:
      return this.meetsTurnCondition(e, r);
    case 2:
      return this.meetsHpCondition(e, r);
    case 3:
      return this.meetsMpCondition(e, r);
    case 4:
      return this.meetsStateCondition(e);
    case 5:
      return this.meetsPartyLevelCondition(e);
    case 6:
      return this.meetsSwitchCondition(e);
    default:
      return !0;
  }
};
Game_Enemy.prototype.meetsTurnCondition = function(t, e) {
  var r = $gameTroop.turnCount();
  return e === 0 ? r === t : r > 0 && r >= t && r % e === t % e;
};
Game_Enemy.prototype.meetsHpCondition = function(t, e) {
  return this.hpRate() >= t && this.hpRate() <= e;
};
Game_Enemy.prototype.meetsMpCondition = function(t, e) {
  return this.mpRate() >= t && this.mpRate() <= e;
};
Game_Enemy.prototype.meetsStateCondition = function(t) {
  return this.isStateAffected(t);
};
Game_Enemy.prototype.meetsPartyLevelCondition = function(t) {
  return $gameParty.highestLevel() >= t;
};
Game_Enemy.prototype.meetsSwitchCondition = function(t) {
  return $gameSwitches.value(t);
};
Game_Enemy.prototype.isActionValid = function(t) {
  return this.meetsCondition(t) && this.canUse($dataSkills[t.skillId]);
};
Game_Enemy.prototype.selectAction = function(t, e) {
  var r = t.reduce(function(p, c) {
    return p + c.rating - e;
  }, 0);
  if (r > 0)
    for (var s = Math.randomInt(r), o = 0; o < t.length; o++) {
      var h = t[o];
      if (s -= h.rating - e, s < 0)
        return h;
    }
  else
    return null;
};
Game_Enemy.prototype.selectAllActions = function(t) {
  var e = Math.max.apply(null, t.map(function(o) {
    return o.rating;
  })), r = e - 3;
  t = t.filter(function(o) {
    return o.rating > r;
  });
  for (var s = 0; s < this.numActions(); s++)
    this.action(s).setEnemyAction(this.selectAction(t, r));
};
Game_Enemy.prototype.makeActions = function() {
  if (Game_Battler$1.prototype.makeActions.call(this), this.numActions() > 0) {
    var t = this.enemy().actions.filter(function(e) {
      return this.isActionValid(e);
    }, this);
    t.length > 0 && this.selectAllActions(t);
  }
  this.setActionState("waiting");
};
const Game_Enemy$1 = Game_Enemy;
Game_Actors = function() {
  this.initialize.apply(this, arguments);
};
Game_Actors.prototype.initialize = function() {
  this._data = [];
};
Game_Actors.prototype.actor = function(t) {
  return $dataActors[t] ? (this._data[t] || (this._data[t] = new Game_Actor(t)), this._data[t]) : null;
};
const Game_Actors$1 = Game_Actors;
Game_Unit = function() {
  this.initialize.apply(this, arguments);
};
Game_Unit.prototype.initialize = function() {
  this._inBattle = !1;
};
Game_Unit.prototype.inBattle = function() {
  return this._inBattle;
};
Game_Unit.prototype.members = function() {
  return [];
};
Game_Unit.prototype.aliveMembers = function() {
  return this.members().filter(function(t) {
    return t.isAlive();
  });
};
Game_Unit.prototype.deadMembers = function() {
  return this.members().filter(function(t) {
    return t.isDead();
  });
};
Game_Unit.prototype.movableMembers = function() {
  return this.members().filter(function(t) {
    return t.canMove();
  });
};
Game_Unit.prototype.clearActions = function() {
  return this.members().forEach(function(t) {
    return t.clearActions();
  });
};
Game_Unit.prototype.agility = function() {
  var t = this.members();
  if (t.length === 0)
    return 1;
  var e = t.reduce(function(r, s) {
    return r + s.agi;
  }, 0);
  return e / t.length;
};
Game_Unit.prototype.tgrSum = function() {
  return this.aliveMembers().reduce(function(t, e) {
    return t + e.tgr;
  }, 0);
};
Game_Unit.prototype.randomTarget = function() {
  var t = Math.random() * this.tgrSum(), e = null;
  return this.aliveMembers().forEach(function(r) {
    t -= r.tgr, t <= 0 && !e && (e = r);
  }), e;
};
Game_Unit.prototype.randomDeadTarget = function() {
  var t = this.deadMembers();
  return t.length === 0 ? null : t[Math.floor(Math.random() * t.length)];
};
Game_Unit.prototype.smoothTarget = function(t) {
  t < 0 && (t = 0);
  var e = this.members()[t];
  return e && e.isAlive() ? e : this.aliveMembers()[0];
};
Game_Unit.prototype.smoothDeadTarget = function(t) {
  t < 0 && (t = 0);
  var e = this.members()[t];
  return e && e.isDead() ? e : this.deadMembers()[0];
};
Game_Unit.prototype.clearResults = function() {
  this.members().forEach(function(t) {
    t.clearResult();
  });
};
Game_Unit.prototype.onBattleStart = function() {
  this.members().forEach(function(t) {
    t.onBattleStart();
  }), this._inBattle = !0;
};
Game_Unit.prototype.onBattleEnd = function() {
  this._inBattle = !1, this.members().forEach(function(t) {
    t.onBattleEnd();
  });
};
Game_Unit.prototype.makeActions = function() {
  this.members().forEach(function(t) {
    t.makeActions();
  });
};
Game_Unit.prototype.select = function(t) {
  this.members().forEach(function(e) {
    e === t ? e.select() : e.deselect();
  });
};
Game_Unit.prototype.isAllDead = function() {
  return this.aliveMembers().length === 0;
};
Game_Unit.prototype.substituteBattler = function() {
  for (var t = this.members(), e = 0; e < t.length; e++)
    if (t[e].isSubstitute())
      return t[e];
};
const Game_Unit$1 = Game_Unit;
Game_Party = function() {
  this.initialize.apply(this, arguments);
};
Game_Party.prototype = Object.create(Game_Unit$1.prototype);
Game_Party.prototype.constructor = Game_Party;
Game_Party.ABILITY_ENCOUNTER_HALF = 0;
Game_Party.ABILITY_ENCOUNTER_NONE = 1;
Game_Party.ABILITY_CANCEL_SURPRISE = 2;
Game_Party.ABILITY_RAISE_PREEMPTIVE = 3;
Game_Party.ABILITY_GOLD_DOUBLE = 4;
Game_Party.ABILITY_DROP_ITEM_DOUBLE = 5;
Game_Party.prototype.initialize = function() {
  Game_Unit$1.prototype.initialize.call(this), this._gold = 0, this._steps = 0, this._lastItem = new Game_Item(), this._menuActorId = 0, this._targetActorId = 0, this._actors = [], this.initAllItems();
};
Game_Party.prototype.initAllItems = function() {
  this._items = {}, this._weapons = {}, this._armors = {};
};
Game_Party.prototype.exists = function() {
  return this._actors.length > 0;
};
Game_Party.prototype.size = function() {
  return this.members().length;
};
Game_Party.prototype.isEmpty = function() {
  return this.size() === 0;
};
Game_Party.prototype.members = function() {
  return this.inBattle() ? this.battleMembers() : this.allMembers();
};
Game_Party.prototype.allMembers = function() {
  return this._actors.map(function(t) {
    return $gameActors.actor(t);
  });
};
Game_Party.prototype.battleMembers = function() {
  return this.allMembers().slice(0, this.maxBattleMembers()).filter(function(t) {
    return t.isAppeared();
  });
};
Game_Party.prototype.maxBattleMembers = function() {
  return 4;
};
Game_Party.prototype.leader = function() {
  return this.battleMembers()[0];
};
Game_Party.prototype.reviveBattleMembers = function() {
  this.battleMembers().forEach(function(t) {
    t.isDead() && t.setHp(1);
  });
};
Game_Party.prototype.items = function() {
  var t = [];
  for (var e in this._items)
    t.push($dataItems[e]);
  return t;
};
Game_Party.prototype.weapons = function() {
  var t = [];
  for (var e in this._weapons)
    t.push($dataWeapons[e]);
  return t;
};
Game_Party.prototype.armors = function() {
  var t = [];
  for (var e in this._armors)
    t.push($dataArmors[e]);
  return t;
};
Game_Party.prototype.equipItems = function() {
  return this.weapons().concat(this.armors());
};
Game_Party.prototype.allItems = function() {
  return this.items().concat(this.equipItems());
};
Game_Party.prototype.itemContainer = function(t) {
  return t ? DataManager.isItem(t) ? this._items : DataManager.isWeapon(t) ? this._weapons : DataManager.isArmor(t) ? this._armors : null : null;
};
Game_Party.prototype.setupStartingMembers = function() {
  this._actors = [], $dataSystem.partyMembers.forEach(function(t) {
    $gameActors.actor(t) && this._actors.push(t);
  }, this);
};
Game_Party.prototype.name = function() {
  var t = this.battleMembers().length;
  return t === 0 ? "" : t === 1 ? this.leader().name() : TextManager.partyName.format(this.leader().name());
};
Game_Party.prototype.setupBattleTest = function() {
  this.setupBattleTestMembers(), this.setupBattleTestItems();
};
Game_Party.prototype.setupBattleTestMembers = function() {
  $dataSystem.testBattlers.forEach(function(t) {
    var e = $gameActors.actor(t.actorId);
    e && (e.changeLevel(t.level, !1), e.initEquips(t.equips), e.recoverAll(), this.addActor(t.actorId));
  }, this);
};
Game_Party.prototype.setupBattleTestItems = function() {
  $dataItems.forEach(function(t) {
    t && t.name.length > 0 && this.gainItem(t, this.maxItems(t));
  }, this);
};
Game_Party.prototype.highestLevel = function() {
  return Math.max.apply(null, this.members().map(function(t) {
    return t.level;
  }));
};
Game_Party.prototype.addActor = function(t) {
  this._actors.contains(t) || (this._actors.push(t), $gamePlayer.refresh(), $gameMap.requestRefresh());
};
Game_Party.prototype.removeActor = function(t) {
  this._actors.contains(t) && (this._actors.splice(this._actors.indexOf(t), 1), $gamePlayer.refresh(), $gameMap.requestRefresh());
};
Game_Party.prototype.gold = function() {
  return this._gold;
};
Game_Party.prototype.gainGold = function(t) {
  this._gold = (this._gold + t).clamp(0, this.maxGold());
};
Game_Party.prototype.loseGold = function(t) {
  this.gainGold(-t);
};
Game_Party.prototype.maxGold = function() {
  return 99999999;
};
Game_Party.prototype.steps = function() {
  return this._steps;
};
Game_Party.prototype.increaseSteps = function() {
  this._steps++;
};
Game_Party.prototype.numItems = function(t) {
  var e = this.itemContainer(t);
  return e && e[t.id] || 0;
};
Game_Party.prototype.maxItems = function(t) {
  return 99;
};
Game_Party.prototype.hasMaxItems = function(t) {
  return this.numItems(t) >= this.maxItems(t);
};
Game_Party.prototype.hasItem = function(t, e) {
  return e === void 0 && (e = !1), this.numItems(t) > 0 ? !0 : !!(e && this.isAnyMemberEquipped(t));
};
Game_Party.prototype.isAnyMemberEquipped = function(t) {
  return this.members().some(function(e) {
    return e.equips().contains(t);
  });
};
Game_Party.prototype.gainItem = function(t, e, r) {
  var s = this.itemContainer(t);
  if (s) {
    var o = this.numItems(t), h = o + e;
    s[t.id] = h.clamp(0, this.maxItems(t)), s[t.id] === 0 && delete s[t.id], r && h < 0 && this.discardMembersEquip(t, -h), $gameMap.requestRefresh();
  }
};
Game_Party.prototype.discardMembersEquip = function(t, e) {
  var r = e;
  this.members().forEach(function(s) {
    for (; r > 0 && s.isEquipped(t); )
      s.discardEquip(t), r--;
  });
};
Game_Party.prototype.loseItem = function(t, e, r) {
  this.gainItem(t, -e, r);
};
Game_Party.prototype.consumeItem = function(t) {
  DataManager.isItem(t) && t.consumable && this.loseItem(t, 1);
};
Game_Party.prototype.canUse = function(t) {
  return this.members().some(function(e) {
    return e.canUse(t);
  });
};
Game_Party.prototype.canInput = function() {
  return this.members().some(function(t) {
    return t.canInput();
  });
};
Game_Party.prototype.isAllDead = function() {
  return Game_Unit$1.prototype.isAllDead.call(this) ? this.inBattle() || !this.isEmpty() : !1;
};
Game_Party.prototype.onPlayerWalk = function() {
  this.members().forEach(function(t) {
    return t.onPlayerWalk();
  });
};
Game_Party.prototype.menuActor = function() {
  var t = $gameActors.actor(this._menuActorId);
  return this.members().contains(t) || (t = this.members()[0]), t;
};
Game_Party.prototype.setMenuActor = function(t) {
  this._menuActorId = t.actorId();
};
Game_Party.prototype.makeMenuActorNext = function() {
  var t = this.members().indexOf(this.menuActor());
  t >= 0 ? (t = (t + 1) % this.members().length, this.setMenuActor(this.members()[t])) : this.setMenuActor(this.members()[0]);
};
Game_Party.prototype.makeMenuActorPrevious = function() {
  var t = this.members().indexOf(this.menuActor());
  t >= 0 ? (t = (t + this.members().length - 1) % this.members().length, this.setMenuActor(this.members()[t])) : this.setMenuActor(this.members()[0]);
};
Game_Party.prototype.targetActor = function() {
  var t = $gameActors.actor(this._targetActorId);
  return this.members().contains(t) || (t = this.members()[0]), t;
};
Game_Party.prototype.setTargetActor = function(t) {
  this._targetActorId = t.actorId();
};
Game_Party.prototype.lastItem = function() {
  return this._lastItem.object();
};
Game_Party.prototype.setLastItem = function(t) {
  this._lastItem.setObject(t);
};
Game_Party.prototype.swapOrder = function(t, e) {
  var r = this._actors[t];
  this._actors[t] = this._actors[e], this._actors[e] = r, $gamePlayer.refresh();
};
Game_Party.prototype.charactersForSavefile = function() {
  return this.battleMembers().map(function(t) {
    return [t.characterName(), t.characterIndex()];
  });
};
Game_Party.prototype.facesForSavefile = function() {
  return this.battleMembers().map(function(t) {
    return [t.faceName(), t.faceIndex()];
  });
};
Game_Party.prototype.partyAbility = function(t) {
  return this.battleMembers().some(function(e) {
    return e.partyAbility(t);
  });
};
Game_Party.prototype.hasEncounterHalf = function() {
  return this.partyAbility(Game_Party.ABILITY_ENCOUNTER_HALF);
};
Game_Party.prototype.hasEncounterNone = function() {
  return this.partyAbility(Game_Party.ABILITY_ENCOUNTER_NONE);
};
Game_Party.prototype.hasCancelSurprise = function() {
  return this.partyAbility(Game_Party.ABILITY_CANCEL_SURPRISE);
};
Game_Party.prototype.hasRaisePreemptive = function() {
  return this.partyAbility(Game_Party.ABILITY_RAISE_PREEMPTIVE);
};
Game_Party.prototype.hasGoldDouble = function() {
  return this.partyAbility(Game_Party.ABILITY_GOLD_DOUBLE);
};
Game_Party.prototype.hasDropItemDouble = function() {
  return this.partyAbility(Game_Party.ABILITY_DROP_ITEM_DOUBLE);
};
Game_Party.prototype.ratePreemptive = function(t) {
  var e = this.agility() >= t ? 0.05 : 0.03;
  return this.hasRaisePreemptive() && (e *= 4), e;
};
Game_Party.prototype.rateSurprise = function(t) {
  var e = this.agility() >= t ? 0.03 : 0.05;
  return this.hasCancelSurprise() && (e = 0), e;
};
Game_Party.prototype.performVictory = function() {
  this.members().forEach(function(t) {
    t.performVictory();
  });
};
Game_Party.prototype.performEscape = function() {
  this.members().forEach(function(t) {
    t.performEscape();
  });
};
Game_Party.prototype.removeBattleStates = function() {
  this.members().forEach(function(t) {
    t.removeBattleStates();
  });
};
Game_Party.prototype.requestMotionRefresh = function() {
  this.members().forEach(function(t) {
    t.requestMotionRefresh();
  });
};
const Game_Party$1 = Game_Party;
Game_Troop = function() {
  this.initialize.apply(this, arguments);
};
Game_Troop.prototype = Object.create(Game_Unit$1.prototype);
Game_Troop.prototype.constructor = Game_Troop;
Game_Troop.LETTER_TABLE_HALF = [
  " A",
  " B",
  " C",
  " D",
  " E",
  " F",
  " G",
  " H",
  " I",
  " J",
  " K",
  " L",
  " M",
  " N",
  " O",
  " P",
  " Q",
  " R",
  " S",
  " T",
  " U",
  " V",
  " W",
  " X",
  " Y",
  " Z"
];
Game_Troop.LETTER_TABLE_FULL = [
  "Ａ",
  "Ｂ",
  "Ｃ",
  "Ｄ",
  "Ｅ",
  "Ｆ",
  "Ｇ",
  "Ｈ",
  "Ｉ",
  "Ｊ",
  "Ｋ",
  "Ｌ",
  "Ｍ",
  "Ｎ",
  "Ｏ",
  "Ｐ",
  "Ｑ",
  "Ｒ",
  "Ｓ",
  "Ｔ",
  "Ｕ",
  "Ｖ",
  "Ｗ",
  "Ｘ",
  "Ｙ",
  "Ｚ"
];
Game_Troop.prototype.initialize = function() {
  Game_Unit$1.prototype.initialize.call(this), this._interpreter = new Game_Interpreter(), this.clear();
};
Game_Troop.prototype.isEventRunning = function() {
  return this._interpreter.isRunning();
};
Game_Troop.prototype.updateInterpreter = function() {
  this._interpreter.update();
};
Game_Troop.prototype.turnCount = function() {
  return this._turnCount;
};
Game_Troop.prototype.members = function() {
  return this._enemies;
};
Game_Troop.prototype.clear = function() {
  this._interpreter.clear(), this._troopId = 0, this._eventFlags = {}, this._enemies = [], this._turnCount = 0, this._namesCount = {};
};
Game_Troop.prototype.troop = function() {
  return $dataTroops[this._troopId];
};
Game_Troop.prototype.setup = function(t) {
  this.clear(), this._troopId = t, this._enemies = [], this.troop().members.forEach(function(e) {
    if ($dataEnemies[e.enemyId]) {
      var r = e.enemyId, s = e.x, o = e.y, h = new Game_Enemy(r, s, o);
      e.hidden && h.hide(), this._enemies.push(h);
    }
  }, this), this.makeUniqueNames();
};
Game_Troop.prototype.makeUniqueNames = function() {
  var t = this.letterTable();
  this.members().forEach(function(e) {
    if (e.isAlive() && e.isLetterEmpty()) {
      var r = e.originalName(), s = this._namesCount[r] || 0;
      e.setLetter(t[s % t.length]), this._namesCount[r] = s + 1;
    }
  }, this), this.members().forEach(function(e) {
    var r = e.originalName();
    this._namesCount[r] >= 2 && e.setPlural(!0);
  }, this);
};
Game_Troop.prototype.letterTable = function() {
  return $gameSystem.isCJK() ? Game_Troop.LETTER_TABLE_FULL : Game_Troop.LETTER_TABLE_HALF;
};
Game_Troop.prototype.enemyNames = function() {
  var t = [];
  return this.members().forEach(function(e) {
    var r = e.originalName();
    e.isAlive() && !t.contains(r) && t.push(r);
  }), t;
};
Game_Troop.prototype.meetsConditions = function(t) {
  var e = t.conditions;
  if (!e.turnEnding && !e.turnValid && !e.enemyValid && !e.actorValid && !e.switchValid || e.turnEnding && !BattleManager.isTurnEnd())
    return !1;
  if (e.turnValid) {
    var r = this._turnCount, s = e.turnA, o = e.turnB;
    if (o === 0 && r !== s || o > 0 && (r < 1 || r < s || r % o !== s % o))
      return !1;
  }
  if (e.enemyValid) {
    var h = $gameTroop.members()[e.enemyIndex];
    if (!h || h.hpRate() * 100 > e.enemyHp)
      return !1;
  }
  if (e.actorValid) {
    var p = $gameActors.actor(e.actorId);
    if (!p || p.hpRate() * 100 > e.actorHp)
      return !1;
  }
  return !(e.switchValid && !$gameSwitches.value(e.switchId));
};
Game_Troop.prototype.setupBattleEvent = function() {
  if (!this._interpreter.isRunning()) {
    if (this._interpreter.setupReservedCommonEvent())
      return;
    for (var t = this.troop().pages, e = 0; e < t.length; e++) {
      var r = t[e];
      if (this.meetsConditions(r) && !this._eventFlags[e]) {
        this._interpreter.setup(r.list), r.span <= 1 && (this._eventFlags[e] = !0);
        break;
      }
    }
  }
};
Game_Troop.prototype.increaseTurn = function() {
  for (var t = this.troop().pages, e = 0; e < t.length; e++) {
    var r = t[e];
    r.span === 1 && (this._eventFlags[e] = !1);
  }
  this._turnCount++;
};
Game_Troop.prototype.expTotal = function() {
  return this.deadMembers().reduce(function(t, e) {
    return t + e.exp();
  }, 0);
};
Game_Troop.prototype.goldTotal = function() {
  return this.deadMembers().reduce(function(t, e) {
    return t + e.gold();
  }, 0) * this.goldRate();
};
Game_Troop.prototype.goldRate = function() {
  return $gameParty.hasGoldDouble() ? 2 : 1;
};
Game_Troop.prototype.makeDropItems = function() {
  return this.deadMembers().reduce(function(t, e) {
    return t.concat(e.makeDropItems());
  }, []);
};
const Game_Troop$1 = Game_Troop;
Game_Map = function() {
  this.initialize.apply(this, arguments);
};
Game_Map.prototype.initialize = function() {
  this._interpreter = new Game_Interpreter(), this._mapId = 0, this._tilesetId = 0, this._events = [], this._commonEvents = [], this._vehicles = [], this._displayX = 0, this._displayY = 0, this._nameDisplay = !0, this._scrollDirection = 2, this._scrollRest = 0, this._scrollSpeed = 4, this._parallaxName = "", this._parallaxZero = !1, this._parallaxLoopX = !1, this._parallaxLoopY = !1, this._parallaxSx = 0, this._parallaxSy = 0, this._parallaxX = 0, this._parallaxY = 0, this._battleback1Name = null, this._battleback2Name = null, this.createVehicles();
};
Game_Map.prototype.setup = function(t) {
  if (!$dataMap)
    throw new Error("The map data is not available");
  this._mapId = t, this._tilesetId = $dataMap.tilesetId, this._displayX = 0, this._displayY = 0, this.refereshVehicles(), this.setupEvents(), this.setupScroll(), this.setupParallax(), this.setupBattleback(), this._needsRefresh = !1;
};
Game_Map.prototype.isEventRunning = function() {
  return this._interpreter.isRunning() || this.isAnyEventStarting();
};
Game_Map.prototype.tileWidth = function() {
  return 48;
};
Game_Map.prototype.tileHeight = function() {
  return 48;
};
Game_Map.prototype.mapId = function() {
  return this._mapId;
};
Game_Map.prototype.tilesetId = function() {
  return this._tilesetId;
};
Game_Map.prototype.displayX = function() {
  return this._displayX;
};
Game_Map.prototype.displayY = function() {
  return this._displayY;
};
Game_Map.prototype.parallaxName = function() {
  return this._parallaxName;
};
Game_Map.prototype.battleback1Name = function() {
  return this._battleback1Name;
};
Game_Map.prototype.battleback2Name = function() {
  return this._battleback2Name;
};
Game_Map.prototype.requestRefresh = function(t) {
  this._needsRefresh = !0;
};
Game_Map.prototype.isNameDisplayEnabled = function() {
  return this._nameDisplay;
};
Game_Map.prototype.disableNameDisplay = function() {
  this._nameDisplay = !1;
};
Game_Map.prototype.enableNameDisplay = function() {
  this._nameDisplay = !0;
};
Game_Map.prototype.createVehicles = function() {
  this._vehicles = [], this._vehicles[0] = new Game_Vehicle("boat"), this._vehicles[1] = new Game_Vehicle("ship"), this._vehicles[2] = new Game_Vehicle("airship");
};
Game_Map.prototype.refereshVehicles = function() {
  this._vehicles.forEach(function(t) {
    t.refresh();
  });
};
Game_Map.prototype.vehicles = function() {
  return this._vehicles;
};
Game_Map.prototype.vehicle = function(t) {
  return t === 0 || t === "boat" ? this.boat() : t === 1 || t === "ship" ? this.ship() : t === 2 || t === "airship" ? this.airship() : null;
};
Game_Map.prototype.boat = function() {
  return this._vehicles[0];
};
Game_Map.prototype.ship = function() {
  return this._vehicles[1];
};
Game_Map.prototype.airship = function() {
  return this._vehicles[2];
};
Game_Map.prototype.setupEvents = function() {
  this._events = [];
  for (var t = 0; t < $dataMap.events.length; t++)
    $dataMap.events[t] && (this._events[t] = new Game_Event(this._mapId, t));
  this._commonEvents = this.parallelCommonEvents().map(function(e) {
    return new Game_CommonEvent(e.id);
  }), this.refreshTileEvents();
};
Game_Map.prototype.events = function() {
  return this._events.filter(function(t) {
    return !!t;
  });
};
Game_Map.prototype.event = function(t) {
  return this._events[t];
};
Game_Map.prototype.eraseEvent = function(t) {
  this._events[t].erase();
};
Game_Map.prototype.parallelCommonEvents = function() {
  return $dataCommonEvents.filter(function(t) {
    return t && t.trigger === 2;
  });
};
Game_Map.prototype.setupScroll = function() {
  this._scrollDirection = 2, this._scrollRest = 0, this._scrollSpeed = 4;
};
Game_Map.prototype.setupParallax = function() {
  this._parallaxName = $dataMap.parallaxName || "", this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName), this._parallaxLoopX = $dataMap.parallaxLoopX, this._parallaxLoopY = $dataMap.parallaxLoopY, this._parallaxSx = $dataMap.parallaxSx, this._parallaxSy = $dataMap.parallaxSy, this._parallaxX = 0, this._parallaxY = 0;
};
Game_Map.prototype.setupBattleback = function() {
  $dataMap.specifyBattleback ? (this._battleback1Name = $dataMap.battleback1Name, this._battleback2Name = $dataMap.battleback2Name) : (this._battleback1Name = null, this._battleback2Name = null);
};
Game_Map.prototype.setDisplayPos = function(t, e) {
  if (this.isLoopHorizontal())
    this._displayX = t.mod(this.width()), this._parallaxX = t;
  else {
    var r = this.width() - this.screenTileX();
    this._displayX = r < 0 ? r / 2 : t.clamp(0, r), this._parallaxX = this._displayX;
  }
  if (this.isLoopVertical())
    this._displayY = e.mod(this.height()), this._parallaxY = e;
  else {
    var s = this.height() - this.screenTileY();
    this._displayY = s < 0 ? s / 2 : e.clamp(0, s), this._parallaxY = this._displayY;
  }
};
Game_Map.prototype.parallaxOx = function() {
  return this._parallaxZero ? this._parallaxX * this.tileWidth() : this._parallaxLoopX ? this._parallaxX * this.tileWidth() / 2 : 0;
};
Game_Map.prototype.parallaxOy = function() {
  return this._parallaxZero ? this._parallaxY * this.tileHeight() : this._parallaxLoopY ? this._parallaxY * this.tileHeight() / 2 : 0;
};
Game_Map.prototype.tileset = function() {
  return $dataTilesets[this._tilesetId];
};
Game_Map.prototype.tilesetFlags = function() {
  var t = this.tileset();
  return t ? t.flags : [];
};
Game_Map.prototype.displayName = function() {
  return $dataMap.displayName;
};
Game_Map.prototype.width = function() {
  return $dataMap.width;
};
Game_Map.prototype.height = function() {
  return $dataMap.height;
};
Game_Map.prototype.data = function() {
  return $dataMap.data;
};
Game_Map.prototype.isLoopHorizontal = function() {
  return $dataMap.scrollType === 2 || $dataMap.scrollType === 3;
};
Game_Map.prototype.isLoopVertical = function() {
  return $dataMap.scrollType === 1 || $dataMap.scrollType === 3;
};
Game_Map.prototype.isDashDisabled = function() {
  return $dataMap.disableDashing;
};
Game_Map.prototype.encounterList = function() {
  return $dataMap.encounterList;
};
Game_Map.prototype.encounterStep = function() {
  return $dataMap.encounterStep;
};
Game_Map.prototype.isOverworld = function() {
  return this.tileset() && this.tileset().mode === 0;
};
Game_Map.prototype.screenTileX = function() {
  return Graphics.width / this.tileWidth();
};
Game_Map.prototype.screenTileY = function() {
  return Graphics.height / this.tileHeight();
};
Game_Map.prototype.adjustX = function(t) {
  return this.isLoopHorizontal() && t < this._displayX - (this.width() - this.screenTileX()) / 2 ? t - this._displayX + $dataMap.width : t - this._displayX;
};
Game_Map.prototype.adjustY = function(t) {
  return this.isLoopVertical() && t < this._displayY - (this.height() - this.screenTileY()) / 2 ? t - this._displayY + $dataMap.height : t - this._displayY;
};
Game_Map.prototype.roundX = function(t) {
  return this.isLoopHorizontal() ? t.mod(this.width()) : t;
};
Game_Map.prototype.roundY = function(t) {
  return this.isLoopVertical() ? t.mod(this.height()) : t;
};
Game_Map.prototype.xWithDirection = function(t, e) {
  return t + (e === 6 ? 1 : e === 4 ? -1 : 0);
};
Game_Map.prototype.yWithDirection = function(t, e) {
  return t + (e === 2 ? 1 : e === 8 ? -1 : 0);
};
Game_Map.prototype.roundXWithDirection = function(t, e) {
  return this.roundX(t + (e === 6 ? 1 : e === 4 ? -1 : 0));
};
Game_Map.prototype.roundYWithDirection = function(t, e) {
  return this.roundY(t + (e === 2 ? 1 : e === 8 ? -1 : 0));
};
Game_Map.prototype.deltaX = function(t, e) {
  var r = t - e;
  return this.isLoopHorizontal() && Math.abs(r) > this.width() / 2 && (r < 0 ? r += this.width() : r -= this.width()), r;
};
Game_Map.prototype.deltaY = function(t, e) {
  var r = t - e;
  return this.isLoopVertical() && Math.abs(r) > this.height() / 2 && (r < 0 ? r += this.height() : r -= this.height()), r;
};
Game_Map.prototype.distance = function(t, e, r, s) {
  return Math.abs(this.deltaX(t, r)) + Math.abs(this.deltaY(e, s));
};
Game_Map.prototype.canvasToMapX = function(t) {
  var e = this.tileWidth(), r = this._displayX * e, s = Math.floor((r + t) / e);
  return this.roundX(s);
};
Game_Map.prototype.canvasToMapY = function(t) {
  var e = this.tileHeight(), r = this._displayY * e, s = Math.floor((r + t) / e);
  return this.roundY(s);
};
Game_Map.prototype.autoplay = function() {
  $dataMap.autoplayBgm && ($gamePlayer.isInVehicle() ? $gameSystem.saveWalkingBgm2() : AudioManager.playBgm($dataMap.bgm)), $dataMap.autoplayBgs && AudioManager.playBgs($dataMap.bgs);
};
Game_Map.prototype.refreshIfNeeded = function() {
  this._needsRefresh && this.refresh();
};
Game_Map.prototype.refresh = function() {
  this.events().forEach(function(t) {
    t.refresh();
  }), this._commonEvents.forEach(function(t) {
    t.refresh();
  }), this.refreshTileEvents(), this._needsRefresh = !1;
};
Game_Map.prototype.refreshTileEvents = function() {
  this.tileEvents = this.events().filter(function(t) {
    return t.isTile();
  });
};
Game_Map.prototype.eventsXy = function(t, e) {
  return this.events().filter(function(r) {
    return r.pos(t, e);
  });
};
Game_Map.prototype.eventsXyNt = function(t, e) {
  return this.events().filter(function(r) {
    return r.posNt(t, e);
  });
};
Game_Map.prototype.tileEventsXy = function(t, e) {
  return this.tileEvents.filter(function(r) {
    return r.posNt(t, e);
  });
};
Game_Map.prototype.eventIdXy = function(t, e) {
  var r = this.eventsXy(t, e);
  return r.length === 0 ? 0 : r[0].eventId();
};
Game_Map.prototype.scrollDown = function(t) {
  if (this.isLoopVertical())
    this._displayY += t, this._displayY %= $dataMap.height, this._parallaxLoopY && (this._parallaxY += t);
  else if (this.height() >= this.screenTileY()) {
    var e = this._displayY;
    this._displayY = Math.min(
      this._displayY + t,
      this.height() - this.screenTileY()
    ), this._parallaxY += this._displayY - e;
  }
};
Game_Map.prototype.scrollLeft = function(t) {
  if (this.isLoopHorizontal())
    this._displayX += $dataMap.width - t, this._displayX %= $dataMap.width, this._parallaxLoopX && (this._parallaxX -= t);
  else if (this.width() >= this.screenTileX()) {
    var e = this._displayX;
    this._displayX = Math.max(this._displayX - t, 0), this._parallaxX += this._displayX - e;
  }
};
Game_Map.prototype.scrollRight = function(t) {
  if (this.isLoopHorizontal())
    this._displayX += t, this._displayX %= $dataMap.width, this._parallaxLoopX && (this._parallaxX += t);
  else if (this.width() >= this.screenTileX()) {
    var e = this._displayX;
    this._displayX = Math.min(
      this._displayX + t,
      this.width() - this.screenTileX()
    ), this._parallaxX += this._displayX - e;
  }
};
Game_Map.prototype.scrollUp = function(t) {
  if (this.isLoopVertical())
    this._displayY += $dataMap.height - t, this._displayY %= $dataMap.height, this._parallaxLoopY && (this._parallaxY -= t);
  else if (this.height() >= this.screenTileY()) {
    var e = this._displayY;
    this._displayY = Math.max(this._displayY - t, 0), this._parallaxY += this._displayY - e;
  }
};
Game_Map.prototype.isValid = function(t, e) {
  return t >= 0 && t < this.width() && e >= 0 && e < this.height();
};
Game_Map.prototype.checkPassage = function(t, e, r) {
  for (var s = this.tilesetFlags(), o = this.allTiles(t, e), h = 0; h < o.length; h++) {
    var p = s[o[h]];
    if (!(p & 16)) {
      if (!(p & r))
        return !0;
      if ((p & r) === r)
        return !1;
    }
  }
  return !1;
};
Game_Map.prototype.tileId = function(t, e, r) {
  var s = $dataMap.width, o = $dataMap.height;
  return $dataMap.data[(r * o + e) * s + t] || 0;
};
Game_Map.prototype.layeredTiles = function(t, e) {
  for (var r = [], s = 0; s < 4; s++)
    r.push(this.tileId(t, e, 3 - s));
  return r;
};
Game_Map.prototype.allTiles = function(t, e) {
  var r = this.tileEventsXy(t, e).map(function(s) {
    return s.tileId();
  });
  return r.concat(this.layeredTiles(t, e));
};
Game_Map.prototype.autotileType = function(t, e, r) {
  var s = this.tileId(t, e, r);
  return s >= 2048 ? Math.floor((s - 2048) / 48) : -1;
};
Game_Map.prototype.isPassable = function(t, e, r) {
  return this.checkPassage(t, e, 1 << r / 2 - 1 & 15);
};
Game_Map.prototype.isBoatPassable = function(t, e) {
  return this.checkPassage(t, e, 512);
};
Game_Map.prototype.isShipPassable = function(t, e) {
  return this.checkPassage(t, e, 1024);
};
Game_Map.prototype.isAirshipLandOk = function(t, e) {
  return this.checkPassage(t, e, 2048) && this.checkPassage(t, e, 15);
};
Game_Map.prototype.checkLayeredTilesFlags = function(t, e, r) {
  var s = this.tilesetFlags();
  return this.layeredTiles(t, e).some(function(o) {
    return (s[o] & r) !== 0;
  });
};
Game_Map.prototype.isLadder = function(t, e) {
  return this.isValid(t, e) && this.checkLayeredTilesFlags(t, e, 32);
};
Game_Map.prototype.isBush = function(t, e) {
  return this.isValid(t, e) && this.checkLayeredTilesFlags(t, e, 64);
};
Game_Map.prototype.isCounter = function(t, e) {
  return this.isValid(t, e) && this.checkLayeredTilesFlags(t, e, 128);
};
Game_Map.prototype.isDamageFloor = function(t, e) {
  return this.isValid(t, e) && this.checkLayeredTilesFlags(t, e, 256);
};
Game_Map.prototype.terrainTag = function(t, e) {
  if (this.isValid(t, e))
    for (var r = this.tilesetFlags(), s = this.layeredTiles(t, e), o = 0; o < s.length; o++) {
      var h = r[s[o]] >> 12;
      if (h > 0)
        return h;
    }
  return 0;
};
Game_Map.prototype.regionId = function(t, e) {
  return this.isValid(t, e) ? this.tileId(t, e, 5) : 0;
};
Game_Map.prototype.startScroll = function(t, e, r) {
  this._scrollDirection = t, this._scrollRest = e, this._scrollSpeed = r;
};
Game_Map.prototype.isScrolling = function() {
  return this._scrollRest > 0;
};
Game_Map.prototype.update = function(t) {
  this.refreshIfNeeded(), t && this.updateInterpreter(), this.updateScroll(), this.updateEvents(), this.updateVehicles(), this.updateParallax();
};
Game_Map.prototype.updateScroll = function() {
  if (this.isScrolling()) {
    var t = this._displayX, e = this._displayY;
    this.doScroll(this._scrollDirection, this.scrollDistance()), this._displayX === t && this._displayY === e ? this._scrollRest = 0 : this._scrollRest -= this.scrollDistance();
  }
};
Game_Map.prototype.scrollDistance = function() {
  return Math.pow(2, this._scrollSpeed) / 256;
};
Game_Map.prototype.doScroll = function(t, e) {
  switch (t) {
    case 2:
      this.scrollDown(e);
      break;
    case 4:
      this.scrollLeft(e);
      break;
    case 6:
      this.scrollRight(e);
      break;
    case 8:
      this.scrollUp(e);
      break;
  }
};
Game_Map.prototype.updateEvents = function() {
  this.events().forEach(function(t) {
    t.update();
  }), this._commonEvents.forEach(function(t) {
    t.update();
  });
};
Game_Map.prototype.updateVehicles = function() {
  this._vehicles.forEach(function(t) {
    t.update();
  });
};
Game_Map.prototype.updateParallax = function() {
  this._parallaxLoopX && (this._parallaxX += this._parallaxSx / this.tileWidth() / 2), this._parallaxLoopY && (this._parallaxY += this._parallaxSy / this.tileHeight() / 2);
};
Game_Map.prototype.changeTileset = function(t) {
  this._tilesetId = t, this.refresh();
};
Game_Map.prototype.changeBattleback = function(t, e) {
  this._battleback1Name = t, this._battleback2Name = e;
};
Game_Map.prototype.changeParallax = function(t, e, r, s, o) {
  this._parallaxName = t, this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName), this._parallaxLoopX && !e && (this._parallaxX = 0), this._parallaxLoopY && !r && (this._parallaxY = 0), this._parallaxLoopX = e, this._parallaxLoopY = r, this._parallaxSx = s, this._parallaxSy = o;
};
Game_Map.prototype.updateInterpreter = function() {
  for (; ; )
    if (this._interpreter.update(), this._interpreter.isRunning() || (this._interpreter.eventId() > 0 && (this.unlockEvent(this._interpreter.eventId()), this._interpreter.clear()), !this.setupStartingEvent()))
      return;
};
Game_Map.prototype.unlockEvent = function(t) {
  this._events[t] && this._events[t].unlock();
};
Game_Map.prototype.setupStartingEvent = function() {
  return this.refreshIfNeeded(), !!(this._interpreter.setupReservedCommonEvent() || this.setupTestEvent() || this.setupStartingMapEvent() || this.setupAutorunCommonEvent());
};
Game_Map.prototype.setupTestEvent = function() {
  return $testEvent ? (this._interpreter.setup($testEvent, 0), $testEvent = null, !0) : !1;
};
Game_Map.prototype.setupStartingMapEvent = function() {
  for (var t = this.events(), e = 0; e < t.length; e++) {
    var r = t[e];
    if (r.isStarting())
      return r.clearStartingFlag(), this._interpreter.setup(r.list(), r.eventId()), !0;
  }
  return !1;
};
Game_Map.prototype.setupAutorunCommonEvent = function() {
  for (var t = 0; t < $dataCommonEvents.length; t++) {
    var e = $dataCommonEvents[t];
    if (e && e.trigger === 1 && $gameSwitches.value(e.switchId))
      return this._interpreter.setup(e.list), !0;
  }
  return !1;
};
Game_Map.prototype.isAnyEventStarting = function() {
  return this.events().some(function(t) {
    return t.isStarting();
  });
};
const Game_Map$1 = Game_Map;
Game_CommonEvent = function() {
  this.initialize.apply(this, arguments);
};
Game_CommonEvent.prototype.initialize = function(t) {
  this._commonEventId = t, this.refresh();
};
Game_CommonEvent.prototype.event = function() {
  return $dataCommonEvents[this._commonEventId];
};
Game_CommonEvent.prototype.list = function() {
  return this.event().list;
};
Game_CommonEvent.prototype.refresh = function() {
  this.isActive() ? this._interpreter || (this._interpreter = new Game_Interpreter()) : this._interpreter = null;
};
Game_CommonEvent.prototype.isActive = function() {
  var t = this.event();
  return t.trigger === 2 && $gameSwitches.value(t.switchId);
};
Game_CommonEvent.prototype.update = function() {
  this._interpreter && (this._interpreter.isRunning() || this._interpreter.setup(this.list()), this._interpreter.update());
};
const Game_CommonEvent$1 = Game_CommonEvent;
Game_CharacterBase = function() {
  this.initialize.apply(this, arguments);
};
Object.defineProperties(Game_CharacterBase.prototype, {
  x: { get: function() {
    return this._x;
  }, configurable: !0 },
  y: { get: function() {
    return this._y;
  }, configurable: !0 }
});
Game_CharacterBase.prototype.initialize = function() {
  this.initMembers();
};
Game_CharacterBase.prototype.initMembers = function() {
  this._x = 0, this._y = 0, this._realX = 0, this._realY = 0, this._moveSpeed = 4, this._moveFrequency = 6, this._opacity = 255, this._blendMode = 0, this._direction = 2, this._pattern = 1, this._priorityType = 1, this._tileId = 0, this._characterName = "", this._characterIndex = 0, this._isObjectCharacter = !1, this._walkAnime = !0, this._stepAnime = !1, this._directionFix = !1, this._through = !1, this._transparent = !1, this._bushDepth = 0, this._animationId = 0, this._balloonId = 0, this._animationPlaying = !1, this._balloonPlaying = !1, this._animationCount = 0, this._stopCount = 0, this._jumpCount = 0, this._jumpPeak = 0, this._movementSuccess = !0;
};
Game_CharacterBase.prototype.pos = function(t, e) {
  return this._x === t && this._y === e;
};
Game_CharacterBase.prototype.posNt = function(t, e) {
  return this.pos(t, e) && !this.isThrough();
};
Game_CharacterBase.prototype.moveSpeed = function() {
  return this._moveSpeed;
};
Game_CharacterBase.prototype.setMoveSpeed = function(t) {
  this._moveSpeed = t;
};
Game_CharacterBase.prototype.moveFrequency = function() {
  return this._moveFrequency;
};
Game_CharacterBase.prototype.setMoveFrequency = function(t) {
  this._moveFrequency = t;
};
Game_CharacterBase.prototype.opacity = function() {
  return this._opacity;
};
Game_CharacterBase.prototype.setOpacity = function(t) {
  this._opacity = t;
};
Game_CharacterBase.prototype.blendMode = function() {
  return this._blendMode;
};
Game_CharacterBase.prototype.setBlendMode = function(t) {
  this._blendMode = t;
};
Game_CharacterBase.prototype.isNormalPriority = function() {
  return this._priorityType === 1;
};
Game_CharacterBase.prototype.setPriorityType = function(t) {
  this._priorityType = t;
};
Game_CharacterBase.prototype.isMoving = function() {
  return this._realX !== this._x || this._realY !== this._y;
};
Game_CharacterBase.prototype.isJumping = function() {
  return this._jumpCount > 0;
};
Game_CharacterBase.prototype.jumpHeight = function() {
  return (this._jumpPeak * this._jumpPeak - Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 2;
};
Game_CharacterBase.prototype.isStopping = function() {
  return !this.isMoving() && !this.isJumping();
};
Game_CharacterBase.prototype.checkStop = function(t) {
  return this._stopCount > t;
};
Game_CharacterBase.prototype.resetStopCount = function() {
  this._stopCount = 0;
};
Game_CharacterBase.prototype.realMoveSpeed = function() {
  return this._moveSpeed + (this.isDashing() ? 1 : 0);
};
Game_CharacterBase.prototype.distancePerFrame = function() {
  return Math.pow(2, this.realMoveSpeed()) / 200;
};
Game_CharacterBase.prototype.isDashing = function() {
  return !1;
};
Game_CharacterBase.prototype.isDebugThrough = function() {
  return !1;
};
Game_CharacterBase.prototype.straighten = function() {
  (this.hasWalkAnime() || this.hasStepAnime()) && (this._pattern = 1), this._animationCount = 0;
};
Game_CharacterBase.prototype.reverseDir = function(t) {
  return 10 - t;
};
Game_CharacterBase.prototype.canPass = function(t, e, r) {
  var s = $gameMap.roundXWithDirection(t, r), o = $gameMap.roundYWithDirection(e, r);
  return $gameMap.isValid(s, o) ? this.isThrough() || this.isDebugThrough() ? !0 : !(!this.isMapPassable(t, e, r) || this.isCollidedWithCharacters(s, o)) : !1;
};
Game_CharacterBase.prototype.canPassDiagonally = function(t, e, r, s) {
  var o = $gameMap.roundXWithDirection(t, r), h = $gameMap.roundYWithDirection(e, s);
  return !!(this.canPass(t, e, s) && this.canPass(t, h, r) || this.canPass(t, e, r) && this.canPass(o, e, s));
};
Game_CharacterBase.prototype.isMapPassable = function(t, e, r) {
  var s = $gameMap.roundXWithDirection(t, r), o = $gameMap.roundYWithDirection(e, r), h = this.reverseDir(r);
  return $gameMap.isPassable(t, e, r) && $gameMap.isPassable(s, o, h);
};
Game_CharacterBase.prototype.isCollidedWithCharacters = function(t, e) {
  return this.isCollidedWithEvents(t, e) || this.isCollidedWithVehicles(t, e);
};
Game_CharacterBase.prototype.isCollidedWithEvents = function(t, e) {
  var r = $gameMap.eventsXyNt(t, e);
  return r.some(function(s) {
    return s.isNormalPriority();
  });
};
Game_CharacterBase.prototype.isCollidedWithVehicles = function(t, e) {
  return $gameMap.boat().posNt(t, e) || $gameMap.ship().posNt(t, e);
};
Game_CharacterBase.prototype.setPosition = function(t, e) {
  this._x = Math.round(t), this._y = Math.round(e), this._realX = t, this._realY = e;
};
Game_CharacterBase.prototype.copyPosition = function(t) {
  this._x = t._x, this._y = t._y, this._realX = t._realX, this._realY = t._realY, this._direction = t._direction;
};
Game_CharacterBase.prototype.locate = function(t, e) {
  this.setPosition(t, e), this.straighten(), this.refreshBushDepth();
};
Game_CharacterBase.prototype.direction = function() {
  return this._direction;
};
Game_CharacterBase.prototype.setDirection = function(t) {
  !this.isDirectionFixed() && t && (this._direction = t), this.resetStopCount();
};
Game_CharacterBase.prototype.isTile = function() {
  return this._tileId > 0 && this._priorityType === 0;
};
Game_CharacterBase.prototype.isObjectCharacter = function() {
  return this._isObjectCharacter;
};
Game_CharacterBase.prototype.shiftY = function() {
  return this.isObjectCharacter() ? 0 : 6;
};
Game_CharacterBase.prototype.scrolledX = function() {
  return $gameMap.adjustX(this._realX);
};
Game_CharacterBase.prototype.scrolledY = function() {
  return $gameMap.adjustY(this._realY);
};
Game_CharacterBase.prototype.screenX = function() {
  var t = $gameMap.tileWidth();
  return Math.round(this.scrolledX() * t + t / 2);
};
Game_CharacterBase.prototype.screenY = function() {
  var t = $gameMap.tileHeight();
  return Math.round(this.scrolledY() * t + t - this.shiftY() - this.jumpHeight());
};
Game_CharacterBase.prototype.screenZ = function() {
  return this._priorityType * 2 + 1;
};
Game_CharacterBase.prototype.isNearTheScreen = function() {
  var t = Graphics.width, e = Graphics.height, r = $gameMap.tileWidth(), s = $gameMap.tileHeight(), o = this.scrolledX() * r + r / 2 - t / 2, h = this.scrolledY() * s + s / 2 - e / 2;
  return o >= -t && o <= t && h >= -e && h <= e;
};
Game_CharacterBase.prototype.update = function() {
  this.isStopping() && this.updateStop(), this.isJumping() ? this.updateJump() : this.isMoving() && this.updateMove(), this.updateAnimation();
};
Game_CharacterBase.prototype.updateStop = function() {
  this._stopCount++;
};
Game_CharacterBase.prototype.updateJump = function() {
  this._jumpCount--, this._realX = (this._realX * this._jumpCount + this._x) / (this._jumpCount + 1), this._realY = (this._realY * this._jumpCount + this._y) / (this._jumpCount + 1), this.refreshBushDepth(), this._jumpCount === 0 && (this._realX = this._x = $gameMap.roundX(this._x), this._realY = this._y = $gameMap.roundY(this._y));
};
Game_CharacterBase.prototype.updateMove = function() {
  this._x < this._realX && (this._realX = Math.max(this._realX - this.distancePerFrame(), this._x)), this._x > this._realX && (this._realX = Math.min(this._realX + this.distancePerFrame(), this._x)), this._y < this._realY && (this._realY = Math.max(this._realY - this.distancePerFrame(), this._y)), this._y > this._realY && (this._realY = Math.min(this._realY + this.distancePerFrame(), this._y)), this.isMoving() || this.refreshBushDepth();
};
Game_CharacterBase.prototype.updateAnimation = function() {
  this.updateAnimationCount(), this._animationCount >= this.animationWait() && (this.updatePattern(), this._animationCount = 0);
};
Game_CharacterBase.prototype.animationWait = function() {
  return (9 - this.realMoveSpeed()) * 3;
};
Game_CharacterBase.prototype.updateAnimationCount = function() {
  this.isMoving() && this.hasWalkAnime() ? this._animationCount += 1.5 : (this.hasStepAnime() || !this.isOriginalPattern()) && this._animationCount++;
};
Game_CharacterBase.prototype.updatePattern = function() {
  !this.hasStepAnime() && this._stopCount > 0 ? this.resetPattern() : this._pattern = (this._pattern + 1) % this.maxPattern();
};
Game_CharacterBase.prototype.maxPattern = function() {
  return 4;
};
Game_CharacterBase.prototype.pattern = function() {
  return this._pattern < 3 ? this._pattern : 1;
};
Game_CharacterBase.prototype.setPattern = function(t) {
  this._pattern = t;
};
Game_CharacterBase.prototype.isOriginalPattern = function() {
  return this.pattern() === 1;
};
Game_CharacterBase.prototype.resetPattern = function() {
  this.setPattern(1);
};
Game_CharacterBase.prototype.refreshBushDepth = function() {
  this.isNormalPriority() && !this.isObjectCharacter() && this.isOnBush() && !this.isJumping() ? this.isMoving() || (this._bushDepth = 12) : this._bushDepth = 0;
};
Game_CharacterBase.prototype.isOnLadder = function() {
  return $gameMap.isLadder(this._x, this._y);
};
Game_CharacterBase.prototype.isOnBush = function() {
  return $gameMap.isBush(this._x, this._y);
};
Game_CharacterBase.prototype.terrainTag = function() {
  return $gameMap.terrainTag(this._x, this._y);
};
Game_CharacterBase.prototype.regionId = function() {
  return $gameMap.regionId(this._x, this._y);
};
Game_CharacterBase.prototype.increaseSteps = function() {
  this.isOnLadder() && this.setDirection(8), this.resetStopCount(), this.refreshBushDepth();
};
Game_CharacterBase.prototype.tileId = function() {
  return this._tileId;
};
Game_CharacterBase.prototype.characterName = function() {
  return this._characterName;
};
Game_CharacterBase.prototype.characterIndex = function() {
  return this._characterIndex;
};
Game_CharacterBase.prototype.setImage = function(t, e) {
  this._tileId = 0, this._characterName = t, this._characterIndex = e, this._isObjectCharacter = ImageManager.isObjectCharacter(t);
};
Game_CharacterBase.prototype.setTileImage = function(t) {
  this._tileId = t, this._characterName = "", this._characterIndex = 0, this._isObjectCharacter = !0;
};
Game_CharacterBase.prototype.checkEventTriggerTouchFront = function(t) {
  var e = $gameMap.roundXWithDirection(this._x, t), r = $gameMap.roundYWithDirection(this._y, t);
  this.checkEventTriggerTouch(e, r);
};
Game_CharacterBase.prototype.checkEventTriggerTouch = function(t, e) {
  return !1;
};
Game_CharacterBase.prototype.isMovementSucceeded = function(t, e) {
  return this._movementSuccess;
};
Game_CharacterBase.prototype.setMovementSuccess = function(t) {
  this._movementSuccess = t;
};
Game_CharacterBase.prototype.moveStraight = function(t) {
  this.setMovementSuccess(this.canPass(this._x, this._y, t)), this.isMovementSucceeded() ? (this.setDirection(t), this._x = $gameMap.roundXWithDirection(this._x, t), this._y = $gameMap.roundYWithDirection(this._y, t), this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(t)), this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(t)), this.increaseSteps()) : (this.setDirection(t), this.checkEventTriggerTouchFront(t));
};
Game_CharacterBase.prototype.moveDiagonally = function(t, e) {
  this.setMovementSuccess(this.canPassDiagonally(this._x, this._y, t, e)), this.isMovementSucceeded() && (this._x = $gameMap.roundXWithDirection(this._x, t), this._y = $gameMap.roundYWithDirection(this._y, e), this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(t)), this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(e)), this.increaseSteps()), this._direction === this.reverseDir(t) && this.setDirection(t), this._direction === this.reverseDir(e) && this.setDirection(e);
};
Game_CharacterBase.prototype.jump = function(t, e) {
  Math.abs(t) > Math.abs(e) ? t !== 0 && this.setDirection(t < 0 ? 4 : 6) : e !== 0 && this.setDirection(e < 0 ? 8 : 2), this._x += t, this._y += e;
  var r = Math.round(Math.sqrt(t * t + e * e));
  this._jumpPeak = 10 + r - this._moveSpeed, this._jumpCount = this._jumpPeak * 2, this.resetStopCount(), this.straighten();
};
Game_CharacterBase.prototype.hasWalkAnime = function() {
  return this._walkAnime;
};
Game_CharacterBase.prototype.setWalkAnime = function(t) {
  this._walkAnime = t;
};
Game_CharacterBase.prototype.hasStepAnime = function() {
  return this._stepAnime;
};
Game_CharacterBase.prototype.setStepAnime = function(t) {
  this._stepAnime = t;
};
Game_CharacterBase.prototype.isDirectionFixed = function() {
  return this._directionFix;
};
Game_CharacterBase.prototype.setDirectionFix = function(t) {
  this._directionFix = t;
};
Game_CharacterBase.prototype.isThrough = function() {
  return this._through;
};
Game_CharacterBase.prototype.setThrough = function(t) {
  this._through = t;
};
Game_CharacterBase.prototype.isTransparent = function() {
  return this._transparent;
};
Game_CharacterBase.prototype.bushDepth = function() {
  return this._bushDepth;
};
Game_CharacterBase.prototype.setTransparent = function(t) {
  this._transparent = t;
};
Game_CharacterBase.prototype.requestAnimation = function(t) {
  this._animationId = t;
};
Game_CharacterBase.prototype.requestBalloon = function(t) {
  this._balloonId = t;
};
Game_CharacterBase.prototype.animationId = function() {
  return this._animationId;
};
Game_CharacterBase.prototype.balloonId = function() {
  return this._balloonId;
};
Game_CharacterBase.prototype.startAnimation = function() {
  this._animationId = 0, this._animationPlaying = !0;
};
Game_CharacterBase.prototype.startBalloon = function() {
  this._balloonId = 0, this._balloonPlaying = !0;
};
Game_CharacterBase.prototype.isAnimationPlaying = function() {
  return this._animationId > 0 || this._animationPlaying;
};
Game_CharacterBase.prototype.isBalloonPlaying = function() {
  return this._balloonId > 0 || this._balloonPlaying;
};
Game_CharacterBase.prototype.endAnimation = function() {
  this._animationPlaying = !1;
};
Game_CharacterBase.prototype.endBalloon = function() {
  this._balloonPlaying = !1;
};
const Game_CharacterBase$1 = Game_CharacterBase;
Game_Character = function() {
  this.initialize.apply(this, arguments);
};
Game_Character.prototype = Object.create(Game_CharacterBase$1.prototype);
Game_Character.prototype.constructor = Game_Character;
Game_Character.ROUTE_END = 0;
Game_Character.ROUTE_MOVE_DOWN = 1;
Game_Character.ROUTE_MOVE_LEFT = 2;
Game_Character.ROUTE_MOVE_RIGHT = 3;
Game_Character.ROUTE_MOVE_UP = 4;
Game_Character.ROUTE_MOVE_LOWER_L = 5;
Game_Character.ROUTE_MOVE_LOWER_R = 6;
Game_Character.ROUTE_MOVE_UPPER_L = 7;
Game_Character.ROUTE_MOVE_UPPER_R = 8;
Game_Character.ROUTE_MOVE_RANDOM = 9;
Game_Character.ROUTE_MOVE_TOWARD = 10;
Game_Character.ROUTE_MOVE_AWAY = 11;
Game_Character.ROUTE_MOVE_FORWARD = 12;
Game_Character.ROUTE_MOVE_BACKWARD = 13;
Game_Character.ROUTE_JUMP = 14;
Game_Character.ROUTE_WAIT = 15;
Game_Character.ROUTE_TURN_DOWN = 16;
Game_Character.ROUTE_TURN_LEFT = 17;
Game_Character.ROUTE_TURN_RIGHT = 18;
Game_Character.ROUTE_TURN_UP = 19;
Game_Character.ROUTE_TURN_90D_R = 20;
Game_Character.ROUTE_TURN_90D_L = 21;
Game_Character.ROUTE_TURN_180D = 22;
Game_Character.ROUTE_TURN_90D_R_L = 23;
Game_Character.ROUTE_TURN_RANDOM = 24;
Game_Character.ROUTE_TURN_TOWARD = 25;
Game_Character.ROUTE_TURN_AWAY = 26;
Game_Character.ROUTE_SWITCH_ON = 27;
Game_Character.ROUTE_SWITCH_OFF = 28;
Game_Character.ROUTE_CHANGE_SPEED = 29;
Game_Character.ROUTE_CHANGE_FREQ = 30;
Game_Character.ROUTE_WALK_ANIME_ON = 31;
Game_Character.ROUTE_WALK_ANIME_OFF = 32;
Game_Character.ROUTE_STEP_ANIME_ON = 33;
Game_Character.ROUTE_STEP_ANIME_OFF = 34;
Game_Character.ROUTE_DIR_FIX_ON = 35;
Game_Character.ROUTE_DIR_FIX_OFF = 36;
Game_Character.ROUTE_THROUGH_ON = 37;
Game_Character.ROUTE_THROUGH_OFF = 38;
Game_Character.ROUTE_TRANSPARENT_ON = 39;
Game_Character.ROUTE_TRANSPARENT_OFF = 40;
Game_Character.ROUTE_CHANGE_IMAGE = 41;
Game_Character.ROUTE_CHANGE_OPACITY = 42;
Game_Character.ROUTE_CHANGE_BLEND_MODE = 43;
Game_Character.ROUTE_PLAY_SE = 44;
Game_Character.ROUTE_SCRIPT = 45;
Game_Character.prototype.initialize = function() {
  Game_CharacterBase$1.prototype.initialize.call(this);
};
Game_Character.prototype.initMembers = function() {
  Game_CharacterBase$1.prototype.initMembers.call(this), this._moveRouteForcing = !1, this._moveRoute = null, this._moveRouteIndex = 0, this._originalMoveRoute = null, this._originalMoveRouteIndex = 0, this._waitCount = 0;
};
Game_Character.prototype.memorizeMoveRoute = function() {
  this._originalMoveRoute = this._moveRoute, this._originalMoveRouteIndex = this._moveRouteIndex;
};
Game_Character.prototype.restoreMoveRoute = function() {
  this._moveRoute = this._originalMoveRoute, this._moveRouteIndex = this._originalMoveRouteIndex, this._originalMoveRoute = null;
};
Game_Character.prototype.isMoveRouteForcing = function() {
  return this._moveRouteForcing;
};
Game_Character.prototype.setMoveRoute = function(t) {
  this._moveRoute = t, this._moveRouteIndex = 0, this._moveRouteForcing = !1;
};
Game_Character.prototype.forceMoveRoute = function(t) {
  this._originalMoveRoute || this.memorizeMoveRoute(), this._moveRoute = t, this._moveRouteIndex = 0, this._moveRouteForcing = !0, this._waitCount = 0;
};
Game_Character.prototype.updateStop = function() {
  Game_CharacterBase$1.prototype.updateStop.call(this), this._moveRouteForcing && this.updateRoutineMove();
};
Game_Character.prototype.updateRoutineMove = function() {
  if (this._waitCount > 0)
    this._waitCount--;
  else {
    this.setMovementSuccess(!0);
    var t = this._moveRoute.list[this._moveRouteIndex];
    t && (this.processMoveCommand(t), this.advanceMoveRouteIndex());
  }
};
Game_Character.prototype.processMoveCommand = function(command) {
  var gc = Game_Character, params = command.parameters;
  switch (command.code) {
    case gc.ROUTE_END:
      this.processRouteEnd();
      break;
    case gc.ROUTE_MOVE_DOWN:
      this.moveStraight(2);
      break;
    case gc.ROUTE_MOVE_LEFT:
      this.moveStraight(4);
      break;
    case gc.ROUTE_MOVE_RIGHT:
      this.moveStraight(6);
      break;
    case gc.ROUTE_MOVE_UP:
      this.moveStraight(8);
      break;
    case gc.ROUTE_MOVE_LOWER_L:
      this.moveDiagonally(4, 2);
      break;
    case gc.ROUTE_MOVE_LOWER_R:
      this.moveDiagonally(6, 2);
      break;
    case gc.ROUTE_MOVE_UPPER_L:
      this.moveDiagonally(4, 8);
      break;
    case gc.ROUTE_MOVE_UPPER_R:
      this.moveDiagonally(6, 8);
      break;
    case gc.ROUTE_MOVE_RANDOM:
      this.moveRandom();
      break;
    case gc.ROUTE_MOVE_TOWARD:
      this.moveTowardPlayer();
      break;
    case gc.ROUTE_MOVE_AWAY:
      this.moveAwayFromPlayer();
      break;
    case gc.ROUTE_MOVE_FORWARD:
      this.moveForward();
      break;
    case gc.ROUTE_MOVE_BACKWARD:
      this.moveBackward();
      break;
    case gc.ROUTE_JUMP:
      this.jump(params[0], params[1]);
      break;
    case gc.ROUTE_WAIT:
      this._waitCount = params[0] - 1;
      break;
    case gc.ROUTE_TURN_DOWN:
      this.setDirection(2);
      break;
    case gc.ROUTE_TURN_LEFT:
      this.setDirection(4);
      break;
    case gc.ROUTE_TURN_RIGHT:
      this.setDirection(6);
      break;
    case gc.ROUTE_TURN_UP:
      this.setDirection(8);
      break;
    case gc.ROUTE_TURN_90D_R:
      this.turnRight90();
      break;
    case gc.ROUTE_TURN_90D_L:
      this.turnLeft90();
      break;
    case gc.ROUTE_TURN_180D:
      this.turn180();
      break;
    case gc.ROUTE_TURN_90D_R_L:
      this.turnRightOrLeft90();
      break;
    case gc.ROUTE_TURN_RANDOM:
      this.turnRandom();
      break;
    case gc.ROUTE_TURN_TOWARD:
      this.turnTowardPlayer();
      break;
    case gc.ROUTE_TURN_AWAY:
      this.turnAwayFromPlayer();
      break;
    case gc.ROUTE_SWITCH_ON:
      $gameSwitches.setValue(params[0], !0);
      break;
    case gc.ROUTE_SWITCH_OFF:
      $gameSwitches.setValue(params[0], !1);
      break;
    case gc.ROUTE_CHANGE_SPEED:
      this.setMoveSpeed(params[0]);
      break;
    case gc.ROUTE_CHANGE_FREQ:
      this.setMoveFrequency(params[0]);
      break;
    case gc.ROUTE_WALK_ANIME_ON:
      this.setWalkAnime(!0);
      break;
    case gc.ROUTE_WALK_ANIME_OFF:
      this.setWalkAnime(!1);
      break;
    case gc.ROUTE_STEP_ANIME_ON:
      this.setStepAnime(!0);
      break;
    case gc.ROUTE_STEP_ANIME_OFF:
      this.setStepAnime(!1);
      break;
    case gc.ROUTE_DIR_FIX_ON:
      this.setDirectionFix(!0);
      break;
    case gc.ROUTE_DIR_FIX_OFF:
      this.setDirectionFix(!1);
      break;
    case gc.ROUTE_THROUGH_ON:
      this.setThrough(!0);
      break;
    case gc.ROUTE_THROUGH_OFF:
      this.setThrough(!1);
      break;
    case gc.ROUTE_TRANSPARENT_ON:
      this.setTransparent(!0);
      break;
    case gc.ROUTE_TRANSPARENT_OFF:
      this.setTransparent(!1);
      break;
    case gc.ROUTE_CHANGE_IMAGE:
      this.setImage(params[0], params[1]);
      break;
    case gc.ROUTE_CHANGE_OPACITY:
      this.setOpacity(params[0]);
      break;
    case gc.ROUTE_CHANGE_BLEND_MODE:
      this.setBlendMode(params[0]);
      break;
    case gc.ROUTE_PLAY_SE:
      AudioManager.playSe(params[0]);
      break;
    case gc.ROUTE_SCRIPT:
      eval(params[0]);
      break;
  }
};
Game_Character.prototype.deltaXFrom = function(t) {
  return $gameMap.deltaX(this.x, t);
};
Game_Character.prototype.deltaYFrom = function(t) {
  return $gameMap.deltaY(this.y, t);
};
Game_Character.prototype.moveRandom = function() {
  var t = 2 + Math.randomInt(4) * 2;
  this.canPass(this.x, this.y, t) && this.moveStraight(t);
};
Game_Character.prototype.moveTowardCharacter = function(t) {
  var e = this.deltaXFrom(t.x), r = this.deltaYFrom(t.y);
  Math.abs(e) > Math.abs(r) ? (this.moveStraight(e > 0 ? 4 : 6), !this.isMovementSucceeded() && r !== 0 && this.moveStraight(r > 0 ? 8 : 2)) : r !== 0 && (this.moveStraight(r > 0 ? 8 : 2), !this.isMovementSucceeded() && e !== 0 && this.moveStraight(e > 0 ? 4 : 6));
};
Game_Character.prototype.moveAwayFromCharacter = function(t) {
  var e = this.deltaXFrom(t.x), r = this.deltaYFrom(t.y);
  Math.abs(e) > Math.abs(r) ? (this.moveStraight(e > 0 ? 6 : 4), !this.isMovementSucceeded() && r !== 0 && this.moveStraight(r > 0 ? 2 : 8)) : r !== 0 && (this.moveStraight(r > 0 ? 2 : 8), !this.isMovementSucceeded() && e !== 0 && this.moveStraight(e > 0 ? 6 : 4));
};
Game_Character.prototype.turnTowardCharacter = function(t) {
  var e = this.deltaXFrom(t.x), r = this.deltaYFrom(t.y);
  Math.abs(e) > Math.abs(r) ? this.setDirection(e > 0 ? 4 : 6) : r !== 0 && this.setDirection(r > 0 ? 8 : 2);
};
Game_Character.prototype.turnAwayFromCharacter = function(t) {
  var e = this.deltaXFrom(t.x), r = this.deltaYFrom(t.y);
  Math.abs(e) > Math.abs(r) ? this.setDirection(e > 0 ? 6 : 4) : r !== 0 && this.setDirection(r > 0 ? 2 : 8);
};
Game_Character.prototype.turnTowardPlayer = function() {
  this.turnTowardCharacter($gamePlayer);
};
Game_Character.prototype.turnAwayFromPlayer = function() {
  this.turnAwayFromCharacter($gamePlayer);
};
Game_Character.prototype.moveTowardPlayer = function() {
  this.moveTowardCharacter($gamePlayer);
};
Game_Character.prototype.moveAwayFromPlayer = function() {
  this.moveAwayFromCharacter($gamePlayer);
};
Game_Character.prototype.moveForward = function() {
  this.moveStraight(this.direction());
};
Game_Character.prototype.moveBackward = function() {
  var t = this.isDirectionFixed();
  this.setDirectionFix(!0), this.moveStraight(this.reverseDir(this.direction())), this.setDirectionFix(t);
};
Game_Character.prototype.processRouteEnd = function() {
  this._moveRoute.repeat ? this._moveRouteIndex = -1 : this._moveRouteForcing && (this._moveRouteForcing = !1, this.restoreMoveRoute());
};
Game_Character.prototype.advanceMoveRouteIndex = function() {
  var t = this._moveRoute;
  if (t && (this.isMovementSucceeded() || t.skippable)) {
    var e = t.list.length - 1;
    this._moveRouteIndex++, t.repeat && this._moveRouteIndex >= e && (this._moveRouteIndex = 0);
  }
};
Game_Character.prototype.turnRight90 = function() {
  switch (this.direction()) {
    case 2:
      this.setDirection(4);
      break;
    case 4:
      this.setDirection(8);
      break;
    case 6:
      this.setDirection(2);
      break;
    case 8:
      this.setDirection(6);
      break;
  }
};
Game_Character.prototype.turnLeft90 = function() {
  switch (this.direction()) {
    case 2:
      this.setDirection(6);
      break;
    case 4:
      this.setDirection(2);
      break;
    case 6:
      this.setDirection(8);
      break;
    case 8:
      this.setDirection(4);
      break;
  }
};
Game_Character.prototype.turn180 = function() {
  this.setDirection(this.reverseDir(this.direction()));
};
Game_Character.prototype.turnRightOrLeft90 = function() {
  switch (Math.randomInt(2)) {
    case 0:
      this.turnRight90();
      break;
    case 1:
      this.turnLeft90();
      break;
  }
};
Game_Character.prototype.turnRandom = function() {
  this.setDirection(2 + Math.randomInt(4) * 2);
};
Game_Character.prototype.swap = function(t) {
  var e = t.x, r = t.y;
  t.locate(this.x, this.y), this.locate(e, r);
};
Game_Character.prototype.findDirectionTo = function(t, e) {
  var r = this.searchLimit(), s = $gameMap.width(), o = [], h = [], p = [], c = {}, u = c;
  if (this.x === t && this.y === e)
    return 0;
  for (c.parent = null, c.x = this.x, c.y = this.y, c.g = 0, c.f = $gameMap.distance(c.x, c.y, t, e), o.push(c), h.push(c.y * s + c.x); o.length > 0; ) {
    for (var l = 0, d = 0; d < o.length; d++)
      o[d].f < o[l].f && (l = d);
    var f = o[l], _ = f.x, w = f.y, m = w * s + _, g = f.g;
    if (o.splice(l, 1), h.splice(h.indexOf(m), 1), p.push(m), f.x === t && f.y === e) {
      u = f;
      break;
    }
    if (!(g >= r))
      for (var S = 0; S < 4; S++) {
        var y = 2 + S * 2, M = $gameMap.roundXWithDirection(_, y), W = $gameMap.roundYWithDirection(w, y), T = W * s + M;
        if (!p.contains(T) && this.canPass(_, w, y)) {
          var G = g + 1, I = h.indexOf(T);
          if (I < 0 || G < o[I].g) {
            var B;
            I >= 0 ? B = o[I] : (B = {}, o.push(B), h.push(T)), B.parent = f, B.x = M, B.y = W, B.g = G, B.f = G + $gameMap.distance(M, W, t, e), (!u || B.f - B.g < u.f - u.g) && (u = B);
          }
        }
      }
  }
  for (var C = u; C.parent && C.parent !== c; )
    C = C.parent;
  var A = $gameMap.deltaX(C.x, c.x), E = $gameMap.deltaY(C.y, c.y);
  if (E > 0)
    return 2;
  if (A < 0)
    return 4;
  if (A > 0)
    return 6;
  if (E < 0)
    return 8;
  var k = this.deltaXFrom(t), x = this.deltaYFrom(e);
  return Math.abs(k) > Math.abs(x) ? k > 0 ? 4 : 6 : x !== 0 ? x > 0 ? 8 : 2 : 0;
};
Game_Character.prototype.searchLimit = function() {
  return 12;
};
const Game_Character$1 = Game_Character;
Game_Player = function() {
  this.initialize.apply(this, arguments);
};
Game_Player.prototype = Object.create(Game_Character$1.prototype);
Game_Player.prototype.constructor = Game_Player;
Game_Player.prototype.initialize = function() {
  Game_Character$1.prototype.initialize.call(this), this.setTransparent($dataSystem.optTransparent);
};
Game_Player.prototype.initMembers = function() {
  Game_Character$1.prototype.initMembers.call(this), this._vehicleType = "walk", this._vehicleGettingOn = !1, this._vehicleGettingOff = !1, this._dashing = !1, this._needsMapReload = !1, this._transferring = !1, this._newMapId = 0, this._newX = 0, this._newY = 0, this._newDirection = 0, this._fadeType = 0, this._followers = new Game_Followers(), this._encounterCount = 0;
};
Game_Player.prototype.clearTransferInfo = function() {
  this._transferring = !1, this._newMapId = 0, this._newX = 0, this._newY = 0, this._newDirection = 0;
};
Game_Player.prototype.followers = function() {
  return this._followers;
};
Game_Player.prototype.refresh = function() {
  var t = $gameParty.leader(), e = t ? t.characterName() : "", r = t ? t.characterIndex() : 0;
  this.setImage(e, r), this._followers.refresh();
};
Game_Player.prototype.isStopping = function() {
  return this._vehicleGettingOn || this._vehicleGettingOff ? !1 : Game_Character$1.prototype.isStopping.call(this);
};
Game_Player.prototype.reserveTransfer = function(t, e, r, s, o) {
  this._transferring = !0, this._newMapId = t, this._newX = e, this._newY = r, this._newDirection = s, this._fadeType = o;
};
Game_Player.prototype.requestMapReload = function() {
  this._needsMapReload = !0;
};
Game_Player.prototype.isTransferring = function() {
  return this._transferring;
};
Game_Player.prototype.newMapId = function() {
  return this._newMapId;
};
Game_Player.prototype.fadeType = function() {
  return this._fadeType;
};
Game_Player.prototype.performTransfer = function() {
  this.isTransferring() && (this.setDirection(this._newDirection), (this._newMapId !== $gameMap.mapId() || this._needsMapReload) && ($gameMap.setup(this._newMapId), this._needsMapReload = !1), this.locate(this._newX, this._newY), this.refresh(), this.clearTransferInfo());
};
Game_Player.prototype.isMapPassable = function(t, e, r) {
  var s = this.vehicle();
  return s ? s.isMapPassable(t, e, r) : Game_Character$1.prototype.isMapPassable.call(this, t, e, r);
};
Game_Player.prototype.vehicle = function() {
  return $gameMap.vehicle(this._vehicleType);
};
Game_Player.prototype.isInBoat = function() {
  return this._vehicleType === "boat";
};
Game_Player.prototype.isInShip = function() {
  return this._vehicleType === "ship";
};
Game_Player.prototype.isInAirship = function() {
  return this._vehicleType === "airship";
};
Game_Player.prototype.isInVehicle = function() {
  return this.isInBoat() || this.isInShip() || this.isInAirship();
};
Game_Player.prototype.isNormal = function() {
  return this._vehicleType === "walk" && !this.isMoveRouteForcing();
};
Game_Player.prototype.isDashing = function() {
  return this._dashing;
};
Game_Player.prototype.isDebugThrough = function() {
  return Input.isPressed("control") && $gameTemp.isPlaytest();
};
Game_Player.prototype.isCollided = function(t, e) {
  return this.isThrough() ? !1 : this.pos(t, e) || this._followers.isSomeoneCollided(t, e);
};
Game_Player.prototype.centerX = function() {
  return (Graphics.width / $gameMap.tileWidth() - 1) / 3;
};
Game_Player.prototype.centerY = function() {
  return (Graphics.height / $gameMap.tileHeight() - 1) / 2;
};
Game_Player.prototype.center = function(t, e) {
  return $gameMap.setDisplayPos(t - this.centerX(), e - this.centerY());
};
Game_Player.prototype.locate = function(t, e) {
  Game_Character$1.prototype.locate.call(this, t, e), this.center(t, e), this.makeEncounterCount(), this.isInVehicle() && this.vehicle().refresh(), this._followers.synchronize(t, e, this.direction());
};
Game_Player.prototype.increaseSteps = function() {
  Game_Character$1.prototype.increaseSteps.call(this), this.isNormal() && $gameParty.increaseSteps();
};
Game_Player.prototype.makeEncounterCount = function() {
  var t = $gameMap.encounterStep();
  this._encounterCount = Math.randomInt(t) + Math.randomInt(t) + 1;
};
Game_Player.prototype.makeEncounterTroopId = function() {
  var t = [], e = 0;
  if ($gameMap.encounterList().forEach(function(o) {
    this.meetsEncounterConditions(o) && (t.push(o), e += o.weight);
  }, this), e > 0) {
    for (var r = Math.randomInt(e), s = 0; s < t.length; s++)
      if (r -= t[s].weight, r < 0)
        return t[s].troopId;
  }
  return 0;
};
Game_Player.prototype.meetsEncounterConditions = function(t) {
  return t.regionSet.length === 0 || t.regionSet.contains(this.regionId());
};
Game_Player.prototype.executeEncounter = function() {
  if (!$gameMap.isEventRunning() && this._encounterCount <= 0) {
    this.makeEncounterCount();
    var t = this.makeEncounterTroopId();
    return $dataTroops[t] ? (BattleManager.setup(t, !0, !1), BattleManager.onEncounter(), !0) : !1;
  } else
    return !1;
};
Game_Player.prototype.startMapEvent = function(t, e, r, s) {
  $gameMap.isEventRunning() || $gameMap.eventsXy(t, e).forEach(function(o) {
    o.isTriggerIn(r) && o.isNormalPriority() === s && o.start();
  });
};
Game_Player.prototype.moveByInput = function() {
  if (!this.isMoving() && this.canMove()) {
    var t = this.getInputDirection();
    if (t > 0)
      $gameTemp.clearDestination();
    else if ($gameTemp.isDestinationValid()) {
      var e = $gameTemp.destinationX(), r = $gameTemp.destinationY();
      t = this.findDirectionTo(e, r);
    }
    t > 0 && this.executeMove(t);
  }
};
Game_Player.prototype.canMove = function() {
  return !($gameMap.isEventRunning() || $gameMessage.isBusy() || this.isMoveRouteForcing() || this.areFollowersGathering() || this._vehicleGettingOn || this._vehicleGettingOff || this.isInVehicle() && !this.vehicle().canMove());
};
Game_Player.prototype.getInputDirection = function() {
  return Input.dir4;
};
Game_Player.prototype.executeMove = function(t) {
  this.moveStraight(t);
};
Game_Player.prototype.update = function(t) {
  var e = this.scrolledX(), r = this.scrolledY(), s = this.isMoving();
  this.updateDashing(), t && this.moveByInput(), Game_Character$1.prototype.update.call(this), this.updateScroll(e, r), this.updateVehicle(), this.isMoving() || this.updateNonmoving(s), this._followers.update();
};
Game_Player.prototype.updateDashing = function() {
  this.isMoving() || (this.canMove() && !this.isInVehicle() && !$gameMap.isDashDisabled() ? this._dashing = this.isDashButtonPressed() || $gameTemp.isDestinationValid() : this._dashing = !1);
};
Game_Player.prototype.isDashButtonPressed = function() {
  var t = Input.isPressed("shift");
  return ConfigManager.alwaysDash ? !t : t;
};
Game_Player.prototype.updateScroll = function(t, e) {
  var r = t, s = e, o = this.scrolledX(), h = this.scrolledY();
  h > s && h > this.centerY() && $gameMap.scrollDown(h - s), o < r && o < this.centerX() && $gameMap.scrollLeft(r - o), o > r && o > this.centerX() && $gameMap.scrollRight(o - r), h < s && h < this.centerY() && $gameMap.scrollUp(s - h);
};
Game_Player.prototype.updateVehicle = function() {
  this.isInVehicle() && !this.areFollowersGathering() && (this._vehicleGettingOn ? this.updateVehicleGetOn() : this._vehicleGettingOff ? this.updateVehicleGetOff() : this.vehicle().syncWithPlayer());
};
Game_Player.prototype.updateVehicleGetOn = function() {
  !this.areFollowersGathering() && !this.isMoving() && (this.setDirection(this.vehicle().direction()), this.setMoveSpeed(this.vehicle().moveSpeed()), this._vehicleGettingOn = !1, this.setTransparent(!0), this.isInAirship() && this.setThrough(!0), this.vehicle().getOn());
};
Game_Player.prototype.updateVehicleGetOff = function() {
  !this.areFollowersGathering() && this.vehicle().isLowest() && (this._vehicleGettingOff = !1, this._vehicleType = "walk", this.setTransparent(!1));
};
Game_Player.prototype.updateNonmoving = function(t) {
  if (!$gameMap.isEventRunning()) {
    if (t && ($gameParty.onPlayerWalk(), this.checkEventTriggerHere([1, 2]), $gameMap.setupStartingEvent()) || this.triggerAction())
      return;
    t ? this.updateEncounterCount() : $gameTemp.clearDestination();
  }
};
Game_Player.prototype.triggerAction = function() {
  return !!(this.canMove() && (this.triggerButtonAction() || this.triggerTouchAction()));
};
Game_Player.prototype.triggerButtonAction = function() {
  return !!(Input.isTriggered("ok") && (this.getOnOffVehicle() || (this.checkEventTriggerHere([0]), $gameMap.setupStartingEvent()) || (this.checkEventTriggerThere([0, 1, 2]), $gameMap.setupStartingEvent())));
};
Game_Player.prototype.triggerTouchAction = function() {
  if ($gameTemp.isDestinationValid()) {
    var t = this.direction(), e = this.x, r = this.y, s = $gameMap.roundXWithDirection(e, t), o = $gameMap.roundYWithDirection(r, t), h = $gameMap.roundXWithDirection(s, t), p = $gameMap.roundYWithDirection(o, t), c = $gameTemp.destinationX(), u = $gameTemp.destinationY();
    if (c === e && u === r)
      return this.triggerTouchActionD1(e, r);
    if (c === s && u === o)
      return this.triggerTouchActionD2(s, o);
    if (c === h && u === p)
      return this.triggerTouchActionD3(s, o);
  }
  return !1;
};
Game_Player.prototype.triggerTouchActionD1 = function(t, e) {
  return $gameMap.airship().pos(t, e) && TouchInput.isTriggered() && this.getOnOffVehicle() ? !0 : (this.checkEventTriggerHere([0]), $gameMap.setupStartingEvent());
};
Game_Player.prototype.triggerTouchActionD2 = function(t, e) {
  return ($gameMap.boat().pos(t, e) || $gameMap.ship().pos(t, e)) && TouchInput.isTriggered() && this.getOnVehicle() || (this.isInBoat() || this.isInShip()) && TouchInput.isTriggered() && this.getOffVehicle() ? !0 : (this.checkEventTriggerThere([0, 1, 2]), $gameMap.setupStartingEvent());
};
Game_Player.prototype.triggerTouchActionD3 = function(t, e) {
  return $gameMap.isCounter(t, e) && this.checkEventTriggerThere([0, 1, 2]), $gameMap.setupStartingEvent();
};
Game_Player.prototype.updateEncounterCount = function() {
  this.canEncounter() && (this._encounterCount -= this.encounterProgressValue());
};
Game_Player.prototype.canEncounter = function() {
  return !$gameParty.hasEncounterNone() && $gameSystem.isEncounterEnabled() && !this.isInAirship() && !this.isMoveRouteForcing() && !this.isDebugThrough();
};
Game_Player.prototype.encounterProgressValue = function() {
  var t = $gameMap.isBush(this.x, this.y) ? 2 : 1;
  return $gameParty.hasEncounterHalf() && (t *= 0.5), this.isInShip() && (t *= 0.5), t;
};
Game_Player.prototype.checkEventTriggerHere = function(t) {
  this.canStartLocalEvents() && this.startMapEvent(this.x, this.y, t, !1);
};
Game_Player.prototype.checkEventTriggerThere = function(t) {
  if (this.canStartLocalEvents()) {
    var e = this.direction(), r = this.x, s = this.y, o = $gameMap.roundXWithDirection(r, e), h = $gameMap.roundYWithDirection(s, e);
    if (this.startMapEvent(o, h, t, !0), !$gameMap.isAnyEventStarting() && $gameMap.isCounter(o, h)) {
      var p = $gameMap.roundXWithDirection(o, e), c = $gameMap.roundYWithDirection(h, e);
      this.startMapEvent(p, c, t, !0);
    }
  }
};
Game_Player.prototype.checkEventTriggerTouch = function(t, e) {
  this.canStartLocalEvents() && this.startMapEvent(t, e, [1, 2], !0);
};
Game_Player.prototype.canStartLocalEvents = function() {
  return !this.isInAirship();
};
Game_Player.prototype.getOnOffVehicle = function() {
  return this.isInVehicle() ? this.getOffVehicle() : this.getOnVehicle();
};
Game_Player.prototype.getOnVehicle = function() {
  var t = this.direction(), e = this.x, r = this.y, s = $gameMap.roundXWithDirection(e, t), o = $gameMap.roundYWithDirection(r, t);
  return $gameMap.airship().pos(e, r) ? this._vehicleType = "airship" : $gameMap.ship().pos(s, o) ? this._vehicleType = "ship" : $gameMap.boat().pos(s, o) && (this._vehicleType = "boat"), this.isInVehicle() && (this._vehicleGettingOn = !0, this.isInAirship() || this.forceMoveForward(), this.gatherFollowers()), this._vehicleGettingOn;
};
Game_Player.prototype.getOffVehicle = function() {
  return this.vehicle().isLandOk(this.x, this.y, this.direction()) && (this.isInAirship() && this.setDirection(2), this._followers.synchronize(this.x, this.y, this.direction()), this.vehicle().getOff(), this.isInAirship() || (this.forceMoveForward(), this.setTransparent(!1)), this._vehicleGettingOff = !0, this.setMoveSpeed(4), this.setThrough(!1), this.makeEncounterCount(), this.gatherFollowers()), this._vehicleGettingOff;
};
Game_Player.prototype.forceMoveForward = function() {
  this.setThrough(!0), this.moveForward(), this.setThrough(!1);
};
Game_Player.prototype.isOnDamageFloor = function() {
  return $gameMap.isDamageFloor(this.x, this.y) && !this.isInAirship();
};
Game_Player.prototype.moveStraight = function(t) {
  this.canPass(this.x, this.y, t) && this._followers.updateMove(), Game_Character$1.prototype.moveStraight.call(this, t);
};
Game_Player.prototype.moveDiagonally = function(t, e) {
  this.canPassDiagonally(this.x, this.y, t, e) && this._followers.updateMove(), Game_Character$1.prototype.moveDiagonally.call(this, t, e);
};
Game_Player.prototype.jump = function(t, e) {
  Game_Character$1.prototype.jump.call(this, t, e), this._followers.jumpAll();
};
Game_Player.prototype.showFollowers = function() {
  this._followers.show();
};
Game_Player.prototype.hideFollowers = function() {
  this._followers.hide();
};
Game_Player.prototype.gatherFollowers = function() {
  this._followers.gather();
};
Game_Player.prototype.areFollowersGathering = function() {
  return this._followers.areGathering();
};
Game_Player.prototype.areFollowersGathered = function() {
  return this._followers.areGathered();
};
const Game_Player$1 = Game_Player;
Game_Follower = function() {
  this.initialize.apply(this, arguments);
};
Game_Follower.prototype = Object.create(Game_Character$1.prototype);
Game_Follower.prototype.constructor = Game_Follower;
Game_Follower.prototype.initialize = function(t) {
  Game_Character$1.prototype.initialize.call(this), this._memberIndex = t, this.setTransparent($dataSystem.optTransparent), this.setThrough(!0);
};
Game_Follower.prototype.refresh = function() {
  var t = this.isVisible() ? this.actor().characterName() : "", e = this.isVisible() ? this.actor().characterIndex() : 0;
  this.setImage(t, e);
};
Game_Follower.prototype.actor = function() {
  return $gameParty.battleMembers()[this._memberIndex];
};
Game_Follower.prototype.isVisible = function() {
  return this.actor() && $gamePlayer.followers().isVisible();
};
Game_Follower.prototype.update = function() {
  Game_Character$1.prototype.update.call(this), this.setMoveSpeed($gamePlayer.realMoveSpeed()), this.setOpacity($gamePlayer.opacity()), this.setBlendMode($gamePlayer.blendMode()), this.setWalkAnime($gamePlayer.hasWalkAnime()), this.setStepAnime($gamePlayer.hasStepAnime()), this.setDirectionFix($gamePlayer.isDirectionFixed()), this.setTransparent($gamePlayer.isTransparent());
};
Game_Follower.prototype.chaseCharacter = function(t) {
  var e = this.deltaXFrom(t.x), r = this.deltaYFrom(t.y);
  e !== 0 && r !== 0 ? this.moveDiagonally(e > 0 ? 4 : 6, r > 0 ? 8 : 2) : e !== 0 ? this.moveStraight(e > 0 ? 4 : 6) : r !== 0 && this.moveStraight(r > 0 ? 8 : 2), this.setMoveSpeed($gamePlayer.realMoveSpeed());
};
const Game_Follower$1 = Game_Follower;
Game_Followers = function() {
  this.initialize.apply(this, arguments);
};
Game_Followers.prototype.initialize = function() {
  this._visible = $dataSystem.optFollowers, this._gathering = !1, this._data = [];
  for (var t = 1; t < $gameParty.maxBattleMembers(); t++)
    this._data.push(new Game_Follower(t));
};
Game_Followers.prototype.isVisible = function() {
  return this._visible;
};
Game_Followers.prototype.show = function() {
  this._visible = !0;
};
Game_Followers.prototype.hide = function() {
  this._visible = !1;
};
Game_Followers.prototype.follower = function(t) {
  return this._data[t];
};
Game_Followers.prototype.forEach = function(t, e) {
  this._data.forEach(t, e);
};
Game_Followers.prototype.reverseEach = function(t, e) {
  this._data.reverse(), this._data.forEach(t, e), this._data.reverse();
};
Game_Followers.prototype.refresh = function() {
  this.forEach(function(t) {
    return t.refresh();
  }, this);
};
Game_Followers.prototype.update = function() {
  this.areGathering() && (this.areMoving() || this.updateMove(), this.areGathered() && (this._gathering = !1)), this.forEach(function(t) {
    t.update();
  }, this);
};
Game_Followers.prototype.updateMove = function() {
  for (var t = this._data.length - 1; t >= 0; t--) {
    var e = t > 0 ? this._data[t - 1] : $gamePlayer;
    this._data[t].chaseCharacter(e);
  }
};
Game_Followers.prototype.jumpAll = function() {
  if ($gamePlayer.isJumping())
    for (var t = 0; t < this._data.length; t++) {
      var e = this._data[t], r = $gamePlayer.deltaXFrom(e.x), s = $gamePlayer.deltaYFrom(e.y);
      e.jump(r, s);
    }
};
Game_Followers.prototype.synchronize = function(t, e, r) {
  this.forEach(function(s) {
    s.locate(t, e), s.setDirection(r);
  }, this);
};
Game_Followers.prototype.gather = function() {
  this._gathering = !0;
};
Game_Followers.prototype.areGathering = function() {
  return this._gathering;
};
Game_Followers.prototype.visibleFollowers = function() {
  return this._data.filter(function(t) {
    return t.isVisible();
  }, this);
};
Game_Followers.prototype.areMoving = function() {
  return this.visibleFollowers().some(function(t) {
    return t.isMoving();
  }, this);
};
Game_Followers.prototype.areGathered = function() {
  return this.visibleFollowers().every(function(t) {
    return !t.isMoving() && t.pos($gamePlayer.x, $gamePlayer.y);
  }, this);
};
Game_Followers.prototype.isSomeoneCollided = function(t, e) {
  return this.visibleFollowers().some(function(r) {
    return r.pos(t, e);
  }, this);
};
const Game_Followers$1 = Game_Followers;
Game_Vehicle = function() {
  this.initialize.apply(this, arguments);
};
Game_Vehicle.prototype = Object.create(Game_Character$1.prototype);
Game_Vehicle.prototype.constructor = Game_Vehicle;
Game_Vehicle.prototype.initialize = function(t) {
  Game_Character$1.prototype.initialize.call(this), this._type = t, this.resetDirection(), this.initMoveSpeed(), this.loadSystemSettings();
};
Game_Vehicle.prototype.initMembers = function() {
  Game_Character$1.prototype.initMembers.call(this), this._type = "", this._mapId = 0, this._altitude = 0, this._driving = !1, this._bgm = null;
};
Game_Vehicle.prototype.isBoat = function() {
  return this._type === "boat";
};
Game_Vehicle.prototype.isShip = function() {
  return this._type === "ship";
};
Game_Vehicle.prototype.isAirship = function() {
  return this._type === "airship";
};
Game_Vehicle.prototype.resetDirection = function() {
  this.setDirection(4);
};
Game_Vehicle.prototype.initMoveSpeed = function() {
  this.isBoat() ? this.setMoveSpeed(4) : this.isShip() ? this.setMoveSpeed(5) : this.isAirship() && this.setMoveSpeed(6);
};
Game_Vehicle.prototype.vehicle = function() {
  return this.isBoat() ? $dataSystem.boat : this.isShip() ? $dataSystem.ship : this.isAirship() ? $dataSystem.airship : null;
};
Game_Vehicle.prototype.loadSystemSettings = function() {
  var t = this.vehicle();
  this._mapId = t.startMapId, this.setPosition(t.startX, t.startY), this.setImage(t.characterName, t.characterIndex);
};
Game_Vehicle.prototype.refresh = function() {
  this._driving ? (this._mapId = $gameMap.mapId(), this.syncWithPlayer()) : this._mapId === $gameMap.mapId() && this.locate(this.x, this.y), this.isAirship() ? this.setPriorityType(this._driving ? 2 : 0) : this.setPriorityType(1), this.setWalkAnime(this._driving), this.setStepAnime(this._driving), this.setTransparent(this._mapId !== $gameMap.mapId());
};
Game_Vehicle.prototype.setLocation = function(t, e, r) {
  this._mapId = t, this.setPosition(e, r), this.refresh();
};
Game_Vehicle.prototype.pos = function(t, e) {
  return this._mapId === $gameMap.mapId() ? Game_Character$1.prototype.pos.call(this, t, e) : !1;
};
Game_Vehicle.prototype.isMapPassable = function(t, e, r) {
  var s = $gameMap.roundXWithDirection(t, r), o = $gameMap.roundYWithDirection(e, r);
  return this.isBoat() ? $gameMap.isBoatPassable(s, o) : this.isShip() ? $gameMap.isShipPassable(s, o) : !!this.isAirship();
};
Game_Vehicle.prototype.getOn = function() {
  this._driving = !0, this.setWalkAnime(!0), this.setStepAnime(!0), $gameSystem.saveWalkingBgm(), this.playBgm();
};
Game_Vehicle.prototype.getOff = function() {
  this._driving = !1, this.setWalkAnime(!1), this.setStepAnime(!1), this.resetDirection(), $gameSystem.replayWalkingBgm();
};
Game_Vehicle.prototype.setBgm = function(t) {
  this._bgm = t;
};
Game_Vehicle.prototype.playBgm = function() {
  AudioManager.playBgm(this._bgm || this.vehicle().bgm);
};
Game_Vehicle.prototype.syncWithPlayer = function() {
  this.copyPosition($gamePlayer), this.refreshBushDepth();
};
Game_Vehicle.prototype.screenY = function() {
  return Game_Character$1.prototype.screenY.call(this) - this._altitude;
};
Game_Vehicle.prototype.shadowX = function() {
  return this.screenX();
};
Game_Vehicle.prototype.shadowY = function() {
  return this.screenY() + this._altitude;
};
Game_Vehicle.prototype.shadowOpacity = function() {
  return 255 * this._altitude / this.maxAltitude();
};
Game_Vehicle.prototype.canMove = function() {
  return this.isAirship() ? this.isHighest() : !0;
};
Game_Vehicle.prototype.update = function() {
  Game_Character$1.prototype.update.call(this), this.isAirship() && this.updateAirship();
};
Game_Vehicle.prototype.updateAirship = function() {
  this.updateAirshipAltitude(), this.setStepAnime(this.isHighest()), this.setPriorityType(this.isLowest() ? 0 : 2);
};
Game_Vehicle.prototype.updateAirshipAltitude = function() {
  this._driving && !this.isHighest() && this._altitude++, !this._driving && !this.isLowest() && this._altitude--;
};
Game_Vehicle.prototype.maxAltitude = function() {
  return 48;
};
Game_Vehicle.prototype.isLowest = function() {
  return this._altitude <= 0;
};
Game_Vehicle.prototype.isHighest = function() {
  return this._altitude >= this.maxAltitude();
};
Game_Vehicle.prototype.isTakeoffOk = function() {
  return $gamePlayer.areFollowersGathered();
};
Game_Vehicle.prototype.isLandOk = function(t, e, r) {
  if (this.isAirship()) {
    if (!$gameMap.isAirshipLandOk(t, e) || $gameMap.eventsXy(t, e).length > 0)
      return !1;
  } else {
    var s = $gameMap.roundXWithDirection(t, r), o = $gameMap.roundYWithDirection(e, r);
    if (!$gameMap.isValid(s, o) || !$gameMap.isPassable(s, o, this.reverseDir(r)) || this.isCollidedWithCharacters(s, o))
      return !1;
  }
  return !0;
};
const Game_Vehicle$1 = Game_Vehicle;
Game_Event = function() {
  this.initialize.apply(this, arguments);
};
Game_Event.prototype = Object.create(Game_Character$1.prototype);
Game_Event.prototype.constructor = Game_Event;
Game_Event.prototype.initialize = function(t, e) {
  Game_Character$1.prototype.initialize.call(this), this._mapId = t, this._eventId = e, this.locate(this.event().x, this.event().y), this.refresh();
};
Game_Event.prototype.initMembers = function() {
  Game_Character$1.prototype.initMembers.call(this), this._moveType = 0, this._trigger = 0, this._starting = !1, this._erased = !1, this._pageIndex = -2, this._originalPattern = 1, this._originalDirection = 2, this._prelockDirection = 0, this._locked = !1;
};
Game_Event.prototype.eventId = function() {
  return this._eventId;
};
Game_Event.prototype.event = function() {
  return $dataMap.events[this._eventId];
};
Game_Event.prototype.page = function() {
  return this.event().pages[this._pageIndex];
};
Game_Event.prototype.list = function() {
  return this.page().list;
};
Game_Event.prototype.isCollidedWithCharacters = function(t, e) {
  return Game_Character$1.prototype.isCollidedWithCharacters.call(this, t, e) || this.isCollidedWithPlayerCharacters(t, e);
};
Game_Event.prototype.isCollidedWithEvents = function(t, e) {
  var r = $gameMap.eventsXyNt(t, e);
  return r.length > 0;
};
Game_Event.prototype.isCollidedWithPlayerCharacters = function(t, e) {
  return this.isNormalPriority() && $gamePlayer.isCollided(t, e);
};
Game_Event.prototype.lock = function() {
  this._locked || (this._prelockDirection = this.direction(), this.turnTowardPlayer(), this._locked = !0);
};
Game_Event.prototype.unlock = function() {
  this._locked && (this._locked = !1, this.setDirection(this._prelockDirection));
};
Game_Event.prototype.updateStop = function() {
  this._locked && this.resetStopCount(), Game_Character$1.prototype.updateStop.call(this), this.isMoveRouteForcing() || this.updateSelfMovement();
};
Game_Event.prototype.updateSelfMovement = function() {
  if (!this._locked && this.isNearTheScreen() && this.checkStop(this.stopCountThreshold()))
    switch (this._moveType) {
      case 1:
        this.moveTypeRandom();
        break;
      case 2:
        this.moveTypeTowardPlayer();
        break;
      case 3:
        this.moveTypeCustom();
        break;
    }
};
Game_Event.prototype.stopCountThreshold = function() {
  return 30 * (5 - this.moveFrequency());
};
Game_Event.prototype.moveTypeRandom = function() {
  switch (Math.randomInt(6)) {
    case 0:
    case 1:
      this.moveRandom();
      break;
    case 2:
    case 3:
    case 4:
      this.moveForward();
      break;
    case 5:
      this.resetStopCount();
      break;
  }
};
Game_Event.prototype.moveTypeTowardPlayer = function() {
  if (this.isNearThePlayer())
    switch (Math.randomInt(6)) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.moveTowardPlayer();
        break;
      case 4:
        this.moveRandom();
        break;
      case 5:
        this.moveForward();
        break;
    }
  else
    this.moveRandom();
};
Game_Event.prototype.isNearThePlayer = function() {
  var t = Math.abs(this.deltaXFrom($gamePlayer.x)), e = Math.abs(this.deltaYFrom($gamePlayer.y));
  return t + e < 20;
};
Game_Event.prototype.moveTypeCustom = function() {
  this.updateRoutineMove();
};
Game_Event.prototype.isStarting = function() {
  return this._starting;
};
Game_Event.prototype.clearStartingFlag = function() {
  this._starting = !1;
};
Game_Event.prototype.isTriggerIn = function(t) {
  return t.contains(this._trigger);
};
Game_Event.prototype.start = function() {
  var t = this.list();
  t && t.length > 1 && (this._starting = !0, this.isTriggerIn([0, 1, 2]) && this.lock());
};
Game_Event.prototype.erase = function() {
  this._erased = !0, this.refresh();
};
Game_Event.prototype.refresh = function() {
  var t = this._erased ? -1 : this.findProperPageIndex();
  this._pageIndex !== t && (this._pageIndex = t, this.setupPage());
};
Game_Event.prototype.findProperPageIndex = function() {
  for (var t = this.event().pages, e = t.length - 1; e >= 0; e--) {
    var r = t[e];
    if (this.meetsConditions(r))
      return e;
  }
  return -1;
};
Game_Event.prototype.meetsConditions = function(t) {
  var e = t.conditions;
  if (e.switch1Valid && !$gameSwitches.value(e.switch1Id) || e.switch2Valid && !$gameSwitches.value(e.switch2Id) || e.variableValid && $gameVariables.value(e.variableId) < e.variableValue)
    return !1;
  if (e.selfSwitchValid) {
    var r = [this._mapId, this._eventId, e.selfSwitchCh];
    if ($gameSelfSwitches.value(r) !== !0)
      return !1;
  }
  if (e.itemValid) {
    var s = $dataItems[e.itemId];
    if (!$gameParty.hasItem(s))
      return !1;
  }
  if (e.actorValid) {
    var o = $gameActors.actor(e.actorId);
    if (!$gameParty.members().contains(o))
      return !1;
  }
  return !0;
};
Game_Event.prototype.setupPage = function() {
  this._pageIndex >= 0 ? this.setupPageSettings() : this.clearPageSettings(), this.refreshBushDepth(), this.clearStartingFlag(), this.checkEventTriggerAuto();
};
Game_Event.prototype.clearPageSettings = function() {
  this.setImage("", 0), this._moveType = 0, this._trigger = null, this._interpreter = null, this.setThrough(!0);
};
Game_Event.prototype.setupPageSettings = function() {
  var t = this.page(), e = t.image;
  e.tileId > 0 ? this.setTileImage(e.tileId) : this.setImage(e.characterName, e.characterIndex), this._originalDirection !== e.direction && (this._originalDirection = e.direction, this._prelockDirection = 0, this.setDirectionFix(!1), this.setDirection(e.direction)), this._originalPattern !== e.pattern && (this._originalPattern = e.pattern, this.setPattern(e.pattern)), this.setMoveSpeed(t.moveSpeed), this.setMoveFrequency(t.moveFrequency), this.setPriorityType(t.priorityType), this.setWalkAnime(t.walkAnime), this.setStepAnime(t.stepAnime), this.setDirectionFix(t.directionFix), this.setThrough(t.through), this.setMoveRoute(t.moveRoute), this._moveType = t.moveType, this._trigger = t.trigger, this._trigger === 4 ? this._interpreter = new Game_Interpreter() : this._interpreter = null;
};
Game_Event.prototype.isOriginalPattern = function() {
  return this.pattern() === this._originalPattern;
};
Game_Event.prototype.resetPattern = function() {
  this.setPattern(this._originalPattern);
};
Game_Event.prototype.checkEventTriggerTouch = function(t, e) {
  $gameMap.isEventRunning() || this._trigger === 2 && $gamePlayer.pos(t, e) && !this.isJumping() && this.isNormalPriority() && this.start();
};
Game_Event.prototype.checkEventTriggerAuto = function() {
  this._trigger === 3 && this.start();
};
Game_Event.prototype.update = function() {
  Game_Character$1.prototype.update.call(this), this.checkEventTriggerAuto(), this.updateParallel();
};
Game_Event.prototype.updateParallel = function() {
  this._interpreter && (this._interpreter.isRunning() || this._interpreter.setup(this.list(), this._eventId), this._interpreter.update());
};
Game_Event.prototype.locate = function(t, e) {
  Game_Character$1.prototype.locate.call(this, t, e), this._prelockDirection = 0;
};
Game_Event.prototype.forceMoveRoute = function(t) {
  Game_Character$1.prototype.forceMoveRoute.call(this, t), this._prelockDirection = 0;
};
const Game_Event$1 = Game_Event;
function Window_Base() {
  this.initialize.apply(this, arguments);
}
Window_Base.prototype = Object.create(Window.prototype);
Window_Base.prototype.constructor = Window_Base;
Window_Base.prototype.initialize = function(t, e, r, s) {
  Window.prototype.initialize.call(this), this.loadWindowskin(), this.move(t, e, r, s), this.updatePadding(), this.updateBackOpacity(), this.updateTone(), this.createContents(), this._opening = !1, this._closing = !1, this._dimmerSprite = null;
};
Window_Base._iconWidth = 32;
Window_Base._iconHeight = 32;
Window_Base._faceWidth = 144;
Window_Base._faceHeight = 144;
Window_Base.prototype.lineHeight = function() {
  return 36;
};
Window_Base.prototype.standardFontFace = function() {
  return $gameSystem.isChinese() ? "SimHei, Heiti TC, sans-serif" : $gameSystem.isKorean() ? "Dotum, AppleGothic, sans-serif" : "GameFont";
};
Window_Base.prototype.standardFontSize = function() {
  return 28;
};
Window_Base.prototype.standardPadding = function() {
  return 18;
};
Window_Base.prototype.textPadding = function() {
  return 6;
};
Window_Base.prototype.standardBackOpacity = function() {
  return 192;
};
Window_Base.prototype.loadWindowskin = function() {
  this.windowskin = ImageManager.loadSystem("Window");
};
Window_Base.prototype.updatePadding = function() {
  this.padding = this.standardPadding();
};
Window_Base.prototype.updateBackOpacity = function() {
  this.backOpacity = this.standardBackOpacity();
};
Window_Base.prototype.contentsWidth = function() {
  return this.width - this.standardPadding() * 2;
};
Window_Base.prototype.contentsHeight = function() {
  return this.height - this.standardPadding() * 2;
};
Window_Base.prototype.fittingHeight = function(t) {
  return t * this.lineHeight() + this.standardPadding() * 2;
};
Window_Base.prototype.updateTone = function() {
  var t = $gameSystem.windowTone();
  this.setTone(t[0], t[1], t[2]);
};
Window_Base.prototype.createContents = function() {
  this.contents = new Bitmap(this.contentsWidth(), this.contentsHeight()), this.resetFontSettings();
};
Window_Base.prototype.resetFontSettings = function() {
  this.contents.fontFace = this.standardFontFace(), this.contents.fontSize = this.standardFontSize(), this.resetTextColor();
};
Window_Base.prototype.resetTextColor = function() {
  this.changeTextColor(this.normalColor());
};
Window_Base.prototype.update = function() {
  Window.prototype.update.call(this), this.updateTone(), this.updateOpen(), this.updateClose(), this.updateBackgroundDimmer();
};
Window_Base.prototype.updateOpen = function() {
  this._opening && (this.openness += 32, this.isOpen() && (this._opening = !1));
};
Window_Base.prototype.updateClose = function() {
  this._closing && (this.openness -= 32, this.isClosed() && (this._closing = !1));
};
Window_Base.prototype.open = function() {
  this.isOpen() || (this._opening = !0), this._closing = !1;
};
Window_Base.prototype.close = function() {
  this.isClosed() || (this._closing = !0), this._opening = !1;
};
Window_Base.prototype.isOpening = function() {
  return this._opening;
};
Window_Base.prototype.isClosing = function() {
  return this._closing;
};
Window_Base.prototype.show = function() {
  this.visible = !0;
};
Window_Base.prototype.hide = function() {
  this.visible = !1;
};
Window_Base.prototype.activate = function() {
  this.active = !0;
};
Window_Base.prototype.deactivate = function() {
  this.active = !1;
};
Window_Base.prototype.textColor = function(t) {
  var e = 96 + t % 8 * 12 + 6, r = 144 + Math.floor(t / 8) * 12 + 6;
  return this.windowskin.getPixel(e, r);
};
Window_Base.prototype.normalColor = function() {
  return this.textColor(0);
};
Window_Base.prototype.systemColor = function() {
  return this.textColor(16);
};
Window_Base.prototype.crisisColor = function() {
  return this.textColor(17);
};
Window_Base.prototype.deathColor = function() {
  return this.textColor(18);
};
Window_Base.prototype.gaugeBackColor = function() {
  return this.textColor(19);
};
Window_Base.prototype.hpGaugeColor1 = function() {
  return this.textColor(20);
};
Window_Base.prototype.hpGaugeColor2 = function() {
  return this.textColor(21);
};
Window_Base.prototype.mpGaugeColor1 = function() {
  return this.textColor(22);
};
Window_Base.prototype.mpGaugeColor2 = function() {
  return this.textColor(23);
};
Window_Base.prototype.mpCostColor = function() {
  return this.textColor(23);
};
Window_Base.prototype.powerUpColor = function() {
  return this.textColor(24);
};
Window_Base.prototype.powerDownColor = function() {
  return this.textColor(25);
};
Window_Base.prototype.tpGaugeColor1 = function() {
  return this.textColor(28);
};
Window_Base.prototype.tpGaugeColor2 = function() {
  return this.textColor(29);
};
Window_Base.prototype.tpCostColor = function() {
  return this.textColor(29);
};
Window_Base.prototype.pendingColor = function() {
  return this.windowskin.getPixel(120, 120);
};
Window_Base.prototype.translucentOpacity = function() {
  return 160;
};
Window_Base.prototype.changeTextColor = function(t) {
  this.contents.textColor = t;
};
Window_Base.prototype.changePaintOpacity = function(t) {
  this.contents.paintOpacity = t ? 255 : this.translucentOpacity();
};
Window_Base.prototype.drawText = function(t, e, r, s, o) {
  this.contents.drawText(t, e, r, s, this.lineHeight(), o);
};
Window_Base.prototype.textWidth = function(t) {
  return this.contents.measureTextWidth(t);
};
Window_Base.prototype.drawTextEx = function(t, e, r) {
  if (t) {
    var s = { index: 0, x: e, y: r, left: e };
    for (s.text = this.convertEscapeCharacters(t), s.height = this.calcTextHeight(s, !1), this.resetFontSettings(); s.index < s.text.length; )
      this.processCharacter(s);
    return s.x - e;
  } else
    return 0;
};
Window_Base.prototype.convertEscapeCharacters = function(t) {
  return t = t.replace(/\\/g, "\x1B"), t = t.replace(/\x1b\x1b/g, "\\"), t = t.replace(/\x1bV\[(\d+)\]/gi, (function() {
    return $gameVariables.value(parseInt(arguments[1]));
  }).bind(this)), t = t.replace(/\x1bV\[(\d+)\]/gi, (function() {
    return $gameVariables.value(parseInt(arguments[1]));
  }).bind(this)), t = t.replace(/\x1bN\[(\d+)\]/gi, (function() {
    return this.actorName(parseInt(arguments[1]));
  }).bind(this)), t = t.replace(/\x1bP\[(\d+)\]/gi, (function() {
    return this.partyMemberName(parseInt(arguments[1]));
  }).bind(this)), t = t.replace(/\x1bG/gi, TextManager.currencyUnit), t;
};
Window_Base.prototype.actorName = function(t) {
  var e = t >= 1 ? $gameActors.actor(t) : null;
  return e ? e.name() : "";
};
Window_Base.prototype.partyMemberName = function(t) {
  var e = t >= 1 ? $gameParty.members()[t - 1] : null;
  return e ? e.name() : "";
};
Window_Base.prototype.processCharacter = function(t) {
  switch (t.text[t.index]) {
    case `
`:
      this.processNewLine(t);
      break;
    case "\f":
      this.processNewPage(t);
      break;
    case "\x1B":
      this.processEscapeCharacter(this.obtainEscapeCode(t), t);
      break;
    default:
      this.processNormalCharacter(t);
      break;
  }
};
Window_Base.prototype.processNormalCharacter = function(t) {
  var e = t.text[t.index++], r = this.textWidth(e);
  this.contents.drawText(e, t.x, t.y, r * 2, t.height), t.x += r;
};
Window_Base.prototype.processNewLine = function(t) {
  t.x = t.left, t.y += t.height, t.height = this.calcTextHeight(t, !1), t.index++;
};
Window_Base.prototype.processNewPage = function(t) {
  t.index++;
};
Window_Base.prototype.obtainEscapeCode = function(t) {
  t.index++;
  var e = /^[\$\.\|\^!><\{\}\\]|^[A-Z]+/i, r = e.exec(t.text.slice(t.index));
  return r ? (t.index += r[0].length, r[0].toUpperCase()) : "";
};
Window_Base.prototype.obtainEscapeParam = function(t) {
  var e = /^\[\d+\]/.exec(t.text.slice(t.index));
  return e ? (t.index += e[0].length, parseInt(e[0].slice(1))) : "";
};
Window_Base.prototype.processEscapeCharacter = function(t, e) {
  switch (t) {
    case "C":
      this.changeTextColor(this.textColor(this.obtainEscapeParam(e)));
      break;
    case "I":
      this.processDrawIcon(this.obtainEscapeParam(e), e);
      break;
    case "{":
      this.makeFontBigger();
      break;
    case "}":
      this.makeFontSmaller();
      break;
  }
};
Window_Base.prototype.processDrawIcon = function(t, e) {
  this.drawIcon(t, e.x + 2, e.y + 2), e.x += Window_Base._iconWidth + 4;
};
Window_Base.prototype.makeFontBigger = function() {
  this.contents.fontSize <= 96 && (this.contents.fontSize += 12);
};
Window_Base.prototype.makeFontSmaller = function() {
  this.contents.fontSize >= 24 && (this.contents.fontSize -= 12);
};
Window_Base.prototype.calcTextHeight = function(t, e) {
  for (var r = this.contents.fontSize, s = 0, o = t.text.slice(t.index).split(`
`), h = e ? o.length : 1, p = 0; p < h; p++) {
    for (var c = this.contents.fontSize, u = /\x1b[\{\}]/g; ; ) {
      var l = u.exec(o[p]);
      if (l)
        l[0] === "\x1B{" && this.makeFontBigger(), l[0] === "\x1B}" && this.makeFontSmaller(), c < this.contents.fontSize && (c = this.contents.fontSize);
      else
        break;
    }
    s += c + 8;
  }
  return this.contents.fontSize = r, s;
};
Window_Base.prototype.drawIcon = function(t, e, r) {
  var s = ImageManager.loadSystem("IconSet"), o = Window_Base._iconWidth, h = Window_Base._iconHeight, p = t % 16 * o, c = Math.floor(t / 16) * h;
  this.contents.blt(s, p, c, o, h, e, r);
};
Window_Base.prototype.drawFace = function(t, e, r, s, o, h) {
  o = o || Window_Base._faceWidth, h = h || Window_Base._faceHeight;
  var p = ImageManager.loadFace(t), c = Window_Base._faceWidth, u = Window_Base._faceHeight, l = Math.min(o, c), d = Math.min(h, u), f = Math.floor(r + Math.max(o - c, 0) / 2), _ = Math.floor(s + Math.max(h - u, 0) / 2), w = e % 4 * c + (c - l) / 2, m = Math.floor(e / 4) * u + (u - d) / 2;
  this.contents.blt(p, w, m, l, d, f, _);
};
Window_Base.prototype.drawCharacter = function(t, e, r, s) {
  var o = ImageManager.loadCharacter(t), h = ImageManager.isBigCharacter(t), p = o.width / (h ? 3 : 12), c = o.height / (h ? 4 : 8), u = e, l = (u % 4 * 3 + 1) * p, d = Math.floor(u / 4) * 4 * c;
  this.contents.blt(o, l, d, p, c, r - p / 2, s - c);
};
Window_Base.prototype.drawGauge = function(t, e, r, s, o, h) {
  var p = Math.floor(r * s), c = e + this.lineHeight() - 8;
  this.contents.fillRect(t, c, r, 6, this.gaugeBackColor()), this.contents.gradientFillRect(t, c, p, 6, o, h);
};
Window_Base.prototype.hpColor = function(t) {
  return t.isDead() ? this.deathColor() : t.isDying() ? this.crisisColor() : this.normalColor();
};
Window_Base.prototype.mpColor = function(t) {
  return this.normalColor();
};
Window_Base.prototype.tpColor = function(t) {
  return this.normalColor();
};
Window_Base.prototype.drawActorCharacter = function(t, e, r) {
  this.drawCharacter(t.characterName(), t.characterIndex(), e, r);
};
Window_Base.prototype.drawActorFace = function(t, e, r, s, o) {
  this.drawFace(t.faceName(), t.faceIndex(), e, r, s, o);
};
Window_Base.prototype.drawActorName = function(t, e, r, s) {
  s = s || 168, this.changeTextColor(this.hpColor(t)), this.drawText(t.name(), e, r, s);
};
Window_Base.prototype.drawActorClass = function(t, e, r, s) {
  s = s || 168, this.resetTextColor(), this.drawText(t.currentClass().name, e, r, s);
};
Window_Base.prototype.drawActorNickname = function(t, e, r, s) {
  s = s || 270, this.resetTextColor(), this.drawText(t.nickname(), e, r, s);
};
Window_Base.prototype.drawActorLevel = function(t, e, r) {
  this.changeTextColor(this.systemColor()), this.drawText(TextManager.levelA, e, r, 48), this.resetTextColor(), this.drawText(t.level, e + 84, r, 36, "right");
};
Window_Base.prototype.drawActorIcons = function(t, e, r, s) {
  s = s || 144;
  for (var o = t.allIcons().slice(0, Math.floor(s / Window_Base._iconWidth)), h = 0; h < o.length; h++)
    this.drawIcon(o[h], e + Window_Base._iconWidth * h, r + 2);
};
Window_Base.prototype.drawCurrentAndMax = function(t, e, r, s, o, h, p) {
  var c = this.textWidth("HP"), u = this.textWidth("0000"), l = this.textWidth("/"), d = r + o - u, f = d - l, _ = f - u;
  _ >= r + c ? (this.changeTextColor(h), this.drawText(t, _, s, u, "right"), this.changeTextColor(p), this.drawText("/", f, s, l, "right"), this.drawText(e, d, s, u, "right")) : (this.changeTextColor(h), this.drawText(t, d, s, u, "right"));
};
Window_Base.prototype.drawActorHp = function(t, e, r, s) {
  s = s || 186;
  var o = this.hpGaugeColor1(), h = this.hpGaugeColor2();
  this.drawGauge(e, r, s, t.hpRate(), o, h), this.changeTextColor(this.systemColor()), this.drawText(TextManager.hpA, e, r, 44), this.drawCurrentAndMax(
    t.hp,
    t.mhp,
    e,
    r,
    s,
    this.hpColor(t),
    this.normalColor()
  );
};
Window_Base.prototype.drawActorMp = function(t, e, r, s) {
  s = s || 186;
  var o = this.mpGaugeColor1(), h = this.mpGaugeColor2();
  this.drawGauge(e, r, s, t.mpRate(), o, h), this.changeTextColor(this.systemColor()), this.drawText(TextManager.mpA, e, r, 44), this.drawCurrentAndMax(
    t.mp,
    t.mmp,
    e,
    r,
    s,
    this.mpColor(t),
    this.normalColor()
  );
};
Window_Base.prototype.drawActorTp = function(t, e, r, s) {
  s = s || 96;
  var o = this.tpGaugeColor1(), h = this.tpGaugeColor2();
  this.drawGauge(e, r, s, t.tpRate(), o, h), this.changeTextColor(this.systemColor()), this.drawText(TextManager.tpA, e, r, 44), this.changeTextColor(this.tpColor(t)), this.drawText(t.tp, e + s - 64, r, 64, "right");
};
Window_Base.prototype.drawActorSimpleStatus = function(t, e, r, s) {
  var o = this.lineHeight(), h = e + 180, p = Math.min(200, s - 180 - this.textPadding());
  this.drawActorName(t, e, r), this.drawActorLevel(t, e, r + o * 1), this.drawActorIcons(t, e, r + o * 2), this.drawActorClass(t, h, r), this.drawActorHp(t, h, r + o * 1, p), this.drawActorMp(t, h, r + o * 2, p);
};
Window_Base.prototype.drawItemName = function(t, e, r, s) {
  if (s = s || 312, t) {
    var o = Window_Base._iconWidth + 4;
    this.resetTextColor(), this.drawIcon(t.iconIndex, e + 2, r + 2), this.drawText(t.name, e + o, r, s - o);
  }
};
Window_Base.prototype.drawCurrencyValue = function(t, e, r, s, o) {
  var h = Math.min(80, this.textWidth(e));
  this.resetTextColor(), this.drawText(t, r, s, o - h - 6, "right"), this.changeTextColor(this.systemColor()), this.drawText(e, r + o - h, s, h, "right");
};
Window_Base.prototype.paramchangeTextColor = function(t) {
  return t > 0 ? this.powerUpColor() : t < 0 ? this.powerDownColor() : this.normalColor();
};
Window_Base.prototype.setBackgroundType = function(t) {
  t === 0 ? this.opacity = 255 : this.opacity = 0, t === 1 ? this.showBackgroundDimmer() : this.hideBackgroundDimmer();
};
Window_Base.prototype.showBackgroundDimmer = function() {
  this._dimmerSprite || (this._dimmerSprite = new Sprite(), this._dimmerSprite.bitmap = new Bitmap(0, 0), this.addChildToBack(this._dimmerSprite));
  var t = this._dimmerSprite.bitmap;
  (t.width !== this.width || t.height !== this.height) && this.refreshDimmerBitmap(), this._dimmerSprite.visible = !0, this.updateBackgroundDimmer();
};
Window_Base.prototype.hideBackgroundDimmer = function() {
  this._dimmerSprite && (this._dimmerSprite.visible = !1);
};
Window_Base.prototype.updateBackgroundDimmer = function() {
  this._dimmerSprite && (this._dimmerSprite.opacity = this.openness);
};
Window_Base.prototype.refreshDimmerBitmap = function() {
  if (this._dimmerSprite) {
    var t = this._dimmerSprite.bitmap, e = this.width, r = this.height, s = this.padding, o = this.dimColor1(), h = this.dimColor2();
    t.resize(e, r), t.gradientFillRect(0, 0, e, s, h, o, !0), t.fillRect(0, s, e, r - s * 2, o), t.gradientFillRect(0, r - s, e, s, o, h, !0), this._dimmerSprite.setFrame(0, 0, e, r);
  }
};
Window_Base.prototype.dimColor1 = function() {
  return "rgba(0, 0, 0, 0.6)";
};
Window_Base.prototype.dimColor2 = function() {
  return "rgba(0, 0, 0, 0.5)";
};
Window_Base.prototype.canvasToLocalX = function(t) {
  for (var e = this; e; )
    t -= e.x, e = e.parent;
  return t;
};
Window_Base.prototype.canvasToLocalY = function(t) {
  for (var e = this; e; )
    t -= e.y, e = e.parent;
  return t;
};
Window_Base.prototype.reserveFaceImages = function() {
  $gameParty.members().forEach(function(t) {
    ImageManager.reserveFace(t.faceName());
  }, this);
};
function Window_Selectable() {
  this.initialize.apply(this, arguments);
}
Window_Selectable.prototype = Object.create(Window_Base.prototype);
Window_Selectable.prototype.constructor = Window_Selectable;
Window_Selectable.prototype.initialize = function(t, e, r, s) {
  Window_Base.prototype.initialize.call(this, t, e, r, s), this._index = -1, this._cursorFixed = !1, this._cursorAll = !1, this._stayCount = 0, this._helpWindow = null, this._handlers = {}, this._touching = !1, this._scrollX = 0, this._scrollY = 0, this.deactivate();
};
Window_Selectable.prototype.index = function() {
  return this._index;
};
Window_Selectable.prototype.cursorFixed = function() {
  return this._cursorFixed;
};
Window_Selectable.prototype.setCursorFixed = function(t) {
  this._cursorFixed = t;
};
Window_Selectable.prototype.cursorAll = function() {
  return this._cursorAll;
};
Window_Selectable.prototype.setCursorAll = function(t) {
  this._cursorAll = t;
};
Window_Selectable.prototype.maxCols = function() {
  return 1;
};
Window_Selectable.prototype.maxItems = function() {
  return 0;
};
Window_Selectable.prototype.spacing = function() {
  return 12;
};
Window_Selectable.prototype.itemWidth = function() {
  return Math.floor((this.width - this.padding * 2 + this.spacing()) / this.maxCols() - this.spacing());
};
Window_Selectable.prototype.itemHeight = function() {
  return this.lineHeight();
};
Window_Selectable.prototype.maxRows = function() {
  return Math.max(Math.ceil(this.maxItems() / this.maxCols()), 1);
};
Window_Selectable.prototype.activate = function() {
  Window_Base.prototype.activate.call(this), this.reselect();
};
Window_Selectable.prototype.deactivate = function() {
  Window_Base.prototype.deactivate.call(this), this.reselect();
};
Window_Selectable.prototype.select = function(t) {
  this._index = t, this._stayCount = 0, this.ensureCursorVisible(), this.updateCursor(), this.callUpdateHelp();
};
Window_Selectable.prototype.deselect = function() {
  this.select(-1);
};
Window_Selectable.prototype.reselect = function() {
  this.select(this._index);
};
Window_Selectable.prototype.row = function() {
  return Math.floor(this.index() / this.maxCols());
};
Window_Selectable.prototype.topRow = function() {
  return Math.floor(this._scrollY / this.itemHeight());
};
Window_Selectable.prototype.maxTopRow = function() {
  return Math.max(0, this.maxRows() - this.maxPageRows());
};
Window_Selectable.prototype.setTopRow = function(t) {
  var e = t.clamp(0, this.maxTopRow()) * this.itemHeight();
  this._scrollY !== e && (this._scrollY = e, this.refresh(), this.updateCursor());
};
Window_Selectable.prototype.resetScroll = function() {
  this.setTopRow(0);
};
Window_Selectable.prototype.maxPageRows = function() {
  var t = this.height - this.padding * 2;
  return Math.floor(t / this.itemHeight());
};
Window_Selectable.prototype.maxPageItems = function() {
  return this.maxPageRows() * this.maxCols();
};
Window_Selectable.prototype.isHorizontal = function() {
  return this.maxPageRows() === 1;
};
Window_Selectable.prototype.bottomRow = function() {
  return Math.max(0, this.topRow() + this.maxPageRows() - 1);
};
Window_Selectable.prototype.setBottomRow = function(t) {
  this.setTopRow(t - (this.maxPageRows() - 1));
};
Window_Selectable.prototype.topIndex = function() {
  return this.topRow() * this.maxCols();
};
Window_Selectable.prototype.itemRect = function(t) {
  var e = new Rectangle(), r = this.maxCols();
  return e.width = this.itemWidth(), e.height = this.itemHeight(), e.x = t % r * (e.width + this.spacing()) - this._scrollX, e.y = Math.floor(t / r) * e.height - this._scrollY, e;
};
Window_Selectable.prototype.itemRectForText = function(t) {
  var e = this.itemRect(t);
  return e.x += this.textPadding(), e.width -= this.textPadding() * 2, e;
};
Window_Selectable.prototype.setHelpWindow = function(t) {
  this._helpWindow = t, this.callUpdateHelp();
};
Window_Selectable.prototype.showHelpWindow = function() {
  this._helpWindow && this._helpWindow.show();
};
Window_Selectable.prototype.hideHelpWindow = function() {
  this._helpWindow && this._helpWindow.hide();
};
Window_Selectable.prototype.setHandler = function(t, e) {
  this._handlers[t] = e;
};
Window_Selectable.prototype.isHandled = function(t) {
  return !!this._handlers[t];
};
Window_Selectable.prototype.callHandler = function(t) {
  this.isHandled(t) && this._handlers[t]();
};
Window_Selectable.prototype.isOpenAndActive = function() {
  return this.isOpen() && this.active;
};
Window_Selectable.prototype.isCursorMovable = function() {
  return this.isOpenAndActive() && !this._cursorFixed && !this._cursorAll && this.maxItems() > 0;
};
Window_Selectable.prototype.cursorDown = function(t) {
  var e = this.index(), r = this.maxItems(), s = this.maxCols();
  (e < r - s || t && s === 1) && this.select((e + s) % r);
};
Window_Selectable.prototype.cursorUp = function(t) {
  var e = this.index(), r = this.maxItems(), s = this.maxCols();
  (e >= s || t && s === 1) && this.select((e - s + r) % r);
};
Window_Selectable.prototype.cursorRight = function(t) {
  var e = this.index(), r = this.maxItems(), s = this.maxCols();
  s >= 2 && (e < r - 1 || t && this.isHorizontal()) && this.select((e + 1) % r);
};
Window_Selectable.prototype.cursorLeft = function(t) {
  var e = this.index(), r = this.maxItems(), s = this.maxCols();
  s >= 2 && (e > 0 || t && this.isHorizontal()) && this.select((e - 1 + r) % r);
};
Window_Selectable.prototype.cursorPagedown = function() {
  var t = this.index(), e = this.maxItems();
  this.topRow() + this.maxPageRows() < this.maxRows() && (this.setTopRow(this.topRow() + this.maxPageRows()), this.select(Math.min(t + this.maxPageItems(), e - 1)));
};
Window_Selectable.prototype.cursorPageup = function() {
  var t = this.index();
  this.topRow() > 0 && (this.setTopRow(this.topRow() - this.maxPageRows()), this.select(Math.max(t - this.maxPageItems(), 0)));
};
Window_Selectable.prototype.scrollDown = function() {
  this.topRow() + 1 < this.maxRows() && this.setTopRow(this.topRow() + 1);
};
Window_Selectable.prototype.scrollUp = function() {
  this.topRow() > 0 && this.setTopRow(this.topRow() - 1);
};
Window_Selectable.prototype.update = function() {
  Window_Base.prototype.update.call(this), this.updateArrows(), this.processCursorMove(), this.processHandling(), this.processWheel(), this.processTouch(), this._stayCount++;
};
Window_Selectable.prototype.updateArrows = function() {
  var t = this.topRow(), e = this.maxTopRow();
  this.downArrowVisible = e > 0 && t < e, this.upArrowVisible = t > 0;
};
Window_Selectable.prototype.processCursorMove = function() {
  if (this.isCursorMovable()) {
    var t = this.index();
    Input.isRepeated("down") && this.cursorDown(Input.isTriggered("down")), Input.isRepeated("up") && this.cursorUp(Input.isTriggered("up")), Input.isRepeated("right") && this.cursorRight(Input.isTriggered("right")), Input.isRepeated("left") && this.cursorLeft(Input.isTriggered("left")), !this.isHandled("pagedown") && Input.isTriggered("pagedown") && this.cursorPagedown(), !this.isHandled("pageup") && Input.isTriggered("pageup") && this.cursorPageup(), this.index() !== t && SoundManager.playCursor();
  }
};
Window_Selectable.prototype.processHandling = function() {
  this.isOpenAndActive() && (this.isOkEnabled() && this.isOkTriggered() ? this.processOk() : this.isCancelEnabled() && this.isCancelTriggered() ? this.processCancel() : this.isHandled("pagedown") && Input.isTriggered("pagedown") ? this.processPagedown() : this.isHandled("pageup") && Input.isTriggered("pageup") && this.processPageup());
};
Window_Selectable.prototype.processWheel = function() {
  if (this.isOpenAndActive()) {
    var t = 20;
    TouchInput.wheelY >= t && this.scrollDown(), TouchInput.wheelY <= -t && this.scrollUp();
  }
};
Window_Selectable.prototype.processTouch = function() {
  this.isOpenAndActive() ? (TouchInput.isTriggered() && this.isTouchedInsideFrame() ? (this._touching = !0, this.onTouch(!0)) : TouchInput.isCancelled() && this.isCancelEnabled() && this.processCancel(), this._touching && (TouchInput.isPressed() ? this.onTouch(!1) : this._touching = !1)) : this._touching = !1;
};
Window_Selectable.prototype.isTouchedInsideFrame = function() {
  var t = this.canvasToLocalX(TouchInput.x), e = this.canvasToLocalY(TouchInput.y);
  return t >= 0 && e >= 0 && t < this.width && e < this.height;
};
Window_Selectable.prototype.onTouch = function(t) {
  var e = this.index(), r = this.canvasToLocalX(TouchInput.x), s = this.canvasToLocalY(TouchInput.y), o = this.hitTest(r, s);
  o >= 0 ? o === this.index() ? t && this.isTouchOkEnabled() && this.processOk() : this.isCursorMovable() && this.select(o) : this._stayCount >= 10 && (s < this.padding ? this.cursorUp() : s >= this.height - this.padding && this.cursorDown()), this.index() !== e && SoundManager.playCursor();
};
Window_Selectable.prototype.hitTest = function(t, e) {
  if (this.isContentsArea(t, e))
    for (var r = t - this.padding, s = e - this.padding, o = this.topIndex(), h = 0; h < this.maxPageItems(); h++) {
      var p = o + h;
      if (p < this.maxItems()) {
        var c = this.itemRect(p), u = c.x + c.width, l = c.y + c.height;
        if (r >= c.x && s >= c.y && r < u && s < l)
          return p;
      }
    }
  return -1;
};
Window_Selectable.prototype.isContentsArea = function(t, e) {
  var r = this.padding, s = this.padding, o = this.width - this.padding, h = this.height - this.padding;
  return t >= r && e >= s && t < o && e < h;
};
Window_Selectable.prototype.isTouchOkEnabled = function() {
  return this.isOkEnabled();
};
Window_Selectable.prototype.isOkEnabled = function() {
  return this.isHandled("ok");
};
Window_Selectable.prototype.isCancelEnabled = function() {
  return this.isHandled("cancel");
};
Window_Selectable.prototype.isOkTriggered = function() {
  return Input.isRepeated("ok");
};
Window_Selectable.prototype.isCancelTriggered = function() {
  return Input.isRepeated("cancel");
};
Window_Selectable.prototype.processOk = function() {
  this.isCurrentItemEnabled() ? (this.playOkSound(), this.updateInputData(), this.deactivate(), this.callOkHandler()) : this.playBuzzerSound();
};
Window_Selectable.prototype.playOkSound = function() {
  SoundManager.playOk();
};
Window_Selectable.prototype.playBuzzerSound = function() {
  SoundManager.playBuzzer();
};
Window_Selectable.prototype.callOkHandler = function() {
  this.callHandler("ok");
};
Window_Selectable.prototype.processCancel = function() {
  SoundManager.playCancel(), this.updateInputData(), this.deactivate(), this.callCancelHandler();
};
Window_Selectable.prototype.callCancelHandler = function() {
  this.callHandler("cancel");
};
Window_Selectable.prototype.processPageup = function() {
  SoundManager.playCursor(), this.updateInputData(), this.deactivate(), this.callHandler("pageup");
};
Window_Selectable.prototype.processPagedown = function() {
  SoundManager.playCursor(), this.updateInputData(), this.deactivate(), this.callHandler("pagedown");
};
Window_Selectable.prototype.updateInputData = function() {
  Input.update(), TouchInput.update();
};
Window_Selectable.prototype.updateCursor = function() {
  if (this._cursorAll) {
    var t = this.maxRows() * this.itemHeight();
    this.setCursorRect(0, 0, this.contents.width, t), this.setTopRow(0);
  } else if (this.isCursorVisible()) {
    var e = this.itemRect(this.index());
    this.setCursorRect(e.x, e.y, e.width, e.height);
  } else
    this.setCursorRect(0, 0, 0, 0);
};
Window_Selectable.prototype.isCursorVisible = function() {
  var t = this.row();
  return t >= this.topRow() && t <= this.bottomRow();
};
Window_Selectable.prototype.ensureCursorVisible = function() {
  var t = this.row();
  t < this.topRow() ? this.setTopRow(t) : t > this.bottomRow() && this.setBottomRow(t);
};
Window_Selectable.prototype.callUpdateHelp = function() {
  this.active && this._helpWindow && this.updateHelp();
};
Window_Selectable.prototype.updateHelp = function() {
  this._helpWindow.clear();
};
Window_Selectable.prototype.setHelpWindowItem = function(t) {
  this._helpWindow && this._helpWindow.setItem(t);
};
Window_Selectable.prototype.isCurrentItemEnabled = function() {
  return !0;
};
Window_Selectable.prototype.drawAllItems = function() {
  for (var t = this.topIndex(), e = 0; e < this.maxPageItems(); e++) {
    var r = t + e;
    r < this.maxItems() && this.drawItem(r);
  }
};
Window_Selectable.prototype.drawItem = function(t) {
};
Window_Selectable.prototype.clearItem = function(t) {
  var e = this.itemRect(t);
  this.contents.clearRect(e.x, e.y, e.width, e.height);
};
Window_Selectable.prototype.redrawItem = function(t) {
  t >= 0 && (this.clearItem(t), this.drawItem(t));
};
Window_Selectable.prototype.redrawCurrentItem = function() {
  this.redrawItem(this.index());
};
Window_Selectable.prototype.refresh = function() {
  this.contents && (this.contents.clear(), this.drawAllItems());
};
function Window_Command() {
  this.initialize.apply(this, arguments);
}
Window_Command.prototype = Object.create(Window_Selectable.prototype);
Window_Command.prototype.constructor = Window_Command;
Window_Command.prototype.initialize = function(t, e) {
  this.clearCommandList(), this.makeCommandList();
  var r = this.windowWidth(), s = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this.refresh(), this.select(0), this.activate();
};
Window_Command.prototype.windowWidth = function() {
  return 240;
};
Window_Command.prototype.windowHeight = function() {
  return this.fittingHeight(this.numVisibleRows());
};
Window_Command.prototype.numVisibleRows = function() {
  return Math.ceil(this.maxItems() / this.maxCols());
};
Window_Command.prototype.maxItems = function() {
  return this._list.length;
};
Window_Command.prototype.clearCommandList = function() {
  this._list = [];
};
Window_Command.prototype.makeCommandList = function() {
};
Window_Command.prototype.addCommand = function(t, e, r, s) {
  r === void 0 && (r = !0), s === void 0 && (s = null), this._list.push({ name: t, symbol: e, enabled: r, ext: s });
};
Window_Command.prototype.commandName = function(t) {
  return this._list[t].name;
};
Window_Command.prototype.commandSymbol = function(t) {
  return this._list[t].symbol;
};
Window_Command.prototype.isCommandEnabled = function(t) {
  return this._list[t].enabled;
};
Window_Command.prototype.currentData = function() {
  return this.index() >= 0 ? this._list[this.index()] : null;
};
Window_Command.prototype.isCurrentItemEnabled = function() {
  return this.currentData() ? this.currentData().enabled : !1;
};
Window_Command.prototype.currentSymbol = function() {
  return this.currentData() ? this.currentData().symbol : null;
};
Window_Command.prototype.currentExt = function() {
  return this.currentData() ? this.currentData().ext : null;
};
Window_Command.prototype.findSymbol = function(t) {
  for (var e = 0; e < this._list.length; e++)
    if (this._list[e].symbol === t)
      return e;
  return -1;
};
Window_Command.prototype.selectSymbol = function(t) {
  var e = this.findSymbol(t);
  e >= 0 ? this.select(e) : this.select(0);
};
Window_Command.prototype.findExt = function(t) {
  for (var e = 0; e < this._list.length; e++)
    if (this._list[e].ext === t)
      return e;
  return -1;
};
Window_Command.prototype.selectExt = function(t) {
  var e = this.findExt(t);
  e >= 0 ? this.select(e) : this.select(0);
};
Window_Command.prototype.drawItem = function(t) {
  var e = this.itemRectForText(t), r = this.itemTextAlign();
  this.resetTextColor(), this.changePaintOpacity(this.isCommandEnabled(t)), this.drawText(this.commandName(t), e.x, e.y, e.width, r);
};
Window_Command.prototype.itemTextAlign = function() {
  return "left";
};
Window_Command.prototype.isOkEnabled = function() {
  return !0;
};
Window_Command.prototype.callOkHandler = function() {
  var t = this.currentSymbol();
  this.isHandled(t) ? this.callHandler(t) : this.isHandled("ok") ? Window_Selectable.prototype.callOkHandler.call(this) : this.activate();
};
Window_Command.prototype.refresh = function() {
  this.clearCommandList(), this.makeCommandList(), this.createContents(), Window_Selectable.prototype.refresh.call(this);
};
function Window_HorzCommand() {
  this.initialize.apply(this, arguments);
}
Window_HorzCommand.prototype = Object.create(Window_Command.prototype);
Window_HorzCommand.prototype.constructor = Window_HorzCommand;
Window_HorzCommand.prototype.initialize = function(t, e) {
  Window_Command.prototype.initialize.call(this, t, e);
};
Window_HorzCommand.prototype.numVisibleRows = function() {
  return 1;
};
Window_HorzCommand.prototype.maxCols = function() {
  return 4;
};
Window_HorzCommand.prototype.itemTextAlign = function() {
  return "center";
};
function Window_Help() {
  this.initialize.apply(this, arguments);
}
Window_Help.prototype = Object.create(Window_Base.prototype);
Window_Help.prototype.constructor = Window_Help;
Window_Help.prototype.initialize = function(t) {
  var e = Graphics.boxWidth, r = this.fittingHeight(t || 2);
  Window_Base.prototype.initialize.call(this, 0, 0, e, r), this._text = "";
};
Window_Help.prototype.setText = function(t) {
  this._text !== t && (this._text = t, this.refresh());
};
Window_Help.prototype.clear = function() {
  this.setText("");
};
Window_Help.prototype.setItem = function(t) {
  this.setText(t ? t.description : "");
};
Window_Help.prototype.refresh = function() {
  this.contents.clear(), this.drawTextEx(this._text, this.textPadding(), 0);
};
function Window_Gold() {
  this.initialize.apply(this, arguments);
}
Window_Gold.prototype = Object.create(Window_Base.prototype);
Window_Gold.prototype.constructor = Window_Gold;
Window_Gold.prototype.initialize = function(t, e) {
  var r = this.windowWidth(), s = this.windowHeight();
  Window_Base.prototype.initialize.call(this, t, e, r, s), this.refresh();
};
Window_Gold.prototype.windowWidth = function() {
  return 240;
};
Window_Gold.prototype.windowHeight = function() {
  return this.fittingHeight(1);
};
Window_Gold.prototype.refresh = function() {
  var t = this.textPadding(), e = this.contents.width - this.textPadding() * 2;
  this.contents.clear(), this.drawCurrencyValue(this.value(), this.currencyUnit(), t, 0, e);
};
Window_Gold.prototype.value = function() {
  return $gameParty.gold();
};
Window_Gold.prototype.currencyUnit = function() {
  return TextManager.currencyUnit;
};
Window_Gold.prototype.open = function() {
  this.refresh(), Window_Base.prototype.open.call(this);
};
function Window_MenuCommand() {
  this.initialize.apply(this, arguments);
}
Window_MenuCommand.prototype = Object.create(Window_Command.prototype);
Window_MenuCommand.prototype.constructor = Window_MenuCommand;
Window_MenuCommand.prototype.initialize = function(t, e) {
  Window_Command.prototype.initialize.call(this, t, e), this.selectLast();
};
Window_MenuCommand._lastCommandSymbol = null;
Window_MenuCommand.initCommandPosition = function() {
  this._lastCommandSymbol = null;
};
Window_MenuCommand.prototype.windowWidth = function() {
  return 240;
};
Window_MenuCommand.prototype.numVisibleRows = function() {
  return this.maxItems();
};
Window_MenuCommand.prototype.makeCommandList = function() {
  this.addMainCommands(), this.addFormationCommand(), this.addOriginalCommands(), this.addOptionsCommand(), this.addSaveCommand();
};
Window_MenuCommand.prototype.addMainCommands = function() {
  var t = this.areMainCommandsEnabled();
  this.needsCommand("item") && this.addCommand(TextManager.item, "item", t), this.needsCommand("skill") && this.addCommand(TextManager.skill, "skill", t), this.needsCommand("equip") && this.addCommand(TextManager.equip, "equip", t), this.needsCommand("status") && this.addCommand(TextManager.status, "status", t);
};
Window_MenuCommand.prototype.addFormationCommand = function() {
  if (this.needsCommand("formation")) {
    var t = this.isFormationEnabled();
    this.addCommand(TextManager.formation, "formation", t);
  }
};
Window_MenuCommand.prototype.addOriginalCommands = function() {
};
Window_MenuCommand.prototype.addOptionsCommand = function() {
  if (this.needsCommand("options")) {
    var t = this.isOptionsEnabled();
    this.addCommand(TextManager.options, "options", t);
  }
};
Window_MenuCommand.prototype.addSaveCommand = function() {
  if (this.needsCommand("save")) {
    var t = this.isSaveEnabled();
    this.addCommand(TextManager.save, "save", t);
  }
};
Window_MenuCommand.prototype.addGameEndCommand = function() {
  var t = this.isGameEndEnabled();
  this.addCommand(TextManager.gameEnd, "gameEnd", t);
};
Window_MenuCommand.prototype.needsCommand = function(t) {
  var e = $dataSystem.menuCommands;
  if (e)
    switch (t) {
      case "item":
        return e[0];
      case "skill":
        return e[1];
      case "equip":
        return e[2];
      case "status":
        return e[3];
      case "formation":
        return e[4];
      case "save":
        return e[5];
    }
  return !0;
};
Window_MenuCommand.prototype.areMainCommandsEnabled = function() {
  return $gameParty.exists();
};
Window_MenuCommand.prototype.isFormationEnabled = function() {
  return $gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
};
Window_MenuCommand.prototype.isOptionsEnabled = function() {
  return !0;
};
Window_MenuCommand.prototype.isSaveEnabled = function() {
  return !DataManager.isEventTest() && $gameSystem.isSaveEnabled();
};
Window_MenuCommand.prototype.isGameEndEnabled = function() {
  return !0;
};
Window_MenuCommand.prototype.processOk = function() {
  Window_MenuCommand._lastCommandSymbol = this.currentSymbol(), Window_Command.prototype.processOk.call(this);
};
Window_MenuCommand.prototype.selectLast = function() {
  this.selectSymbol(Window_MenuCommand._lastCommandSymbol);
};
function Window_MenuStatus() {
  this.initialize.apply(this, arguments);
}
Window_MenuStatus.prototype = Object.create(Window_Selectable.prototype);
Window_MenuStatus.prototype.constructor = Window_MenuStatus;
Window_MenuStatus.prototype.initialize = function(t, e) {
  var r = this.windowWidth(), s = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this._formationMode = !1, this._pendingIndex = -1, this.refresh();
};
Window_MenuStatus.prototype.windowWidth = function() {
  return Graphics.boxWidth - 240;
};
Window_MenuStatus.prototype.windowHeight = function() {
  return Graphics.boxHeight;
};
Window_MenuStatus.prototype.maxItems = function() {
  return $gameParty.size();
};
Window_MenuStatus.prototype.itemHeight = function() {
  var t = this.height - this.padding * 2;
  return Math.floor(t / this.numVisibleRows());
};
Window_MenuStatus.prototype.numVisibleRows = function() {
  return 4;
};
Window_MenuStatus.prototype.loadImages = function() {
  $gameParty.members().forEach(function(t) {
    ImageManager.reserveFace(t.faceName());
  }, this);
};
Window_MenuStatus.prototype.drawItem = function(t) {
  this.drawItemBackground(t), this.drawItemImage(t), this.drawItemStatus(t);
};
Window_MenuStatus.prototype.drawItemBackground = function(t) {
  if (t === this._pendingIndex) {
    var e = this.itemRect(t), r = this.pendingColor();
    this.changePaintOpacity(!1), this.contents.fillRect(e.x, e.y, e.width, e.height, r), this.changePaintOpacity(!0);
  }
};
Window_MenuStatus.prototype.drawItemImage = function(t) {
  var e = $gameParty.members()[t], r = this.itemRect(t);
  this.changePaintOpacity(e.isBattleMember()), this.drawActorFace(e, r.x + 1, r.y + 1, Window_Base._faceWidth, Window_Base._faceHeight), this.changePaintOpacity(!0);
};
Window_MenuStatus.prototype.drawItemStatus = function(t) {
  var e = $gameParty.members()[t], r = this.itemRect(t), s = r.x + 162, o = r.y + r.height / 2 - this.lineHeight() * 1.5, h = r.width - s - this.textPadding();
  this.drawActorSimpleStatus(e, s, o, h);
};
Window_MenuStatus.prototype.processOk = function() {
  Window_Selectable.prototype.processOk.call(this), $gameParty.setMenuActor($gameParty.members()[this.index()]);
};
Window_MenuStatus.prototype.isCurrentItemEnabled = function() {
  if (this._formationMode) {
    var t = $gameParty.members()[this.index()];
    return t && t.isFormationChangeOk();
  } else
    return !0;
};
Window_MenuStatus.prototype.selectLast = function() {
  this.select($gameParty.menuActor().index() || 0);
};
Window_MenuStatus.prototype.formationMode = function() {
  return this._formationMode;
};
Window_MenuStatus.prototype.setFormationMode = function(t) {
  this._formationMode = t;
};
Window_MenuStatus.prototype.pendingIndex = function() {
  return this._pendingIndex;
};
Window_MenuStatus.prototype.setPendingIndex = function(t) {
  var e = this._pendingIndex;
  this._pendingIndex = t, this.redrawItem(this._pendingIndex), this.redrawItem(e);
};
function Window_MenuActor() {
  this.initialize.apply(this, arguments);
}
Window_MenuActor.prototype = Object.create(Window_MenuStatus.prototype);
Window_MenuActor.prototype.constructor = Window_MenuActor;
Window_MenuActor.prototype.initialize = function() {
  Window_MenuStatus.prototype.initialize.call(this, 0, 0), this.hide();
};
Window_MenuActor.prototype.processOk = function() {
  this.cursorAll() || $gameParty.setTargetActor($gameParty.members()[this.index()]), this.callOkHandler();
};
Window_MenuActor.prototype.selectLast = function() {
  this.select($gameParty.targetActor().index() || 0);
};
Window_MenuActor.prototype.selectForItem = function(t) {
  var e = $gameParty.menuActor(), r = new Game_Action(e);
  r.setItemObject(t), this.setCursorFixed(!1), this.setCursorAll(!1), r.isForUser() ? DataManager.isSkill(t) ? (this.setCursorFixed(!0), this.select(e.index())) : this.selectLast() : r.isForAll() ? (this.setCursorAll(!0), this.select(0)) : this.selectLast();
};
function Window_ItemCategory() {
  this.initialize.apply(this, arguments);
}
Window_ItemCategory.prototype = Object.create(Window_HorzCommand.prototype);
Window_ItemCategory.prototype.constructor = Window_ItemCategory;
Window_ItemCategory.prototype.initialize = function() {
  Window_HorzCommand.prototype.initialize.call(this, 0, 0);
};
Window_ItemCategory.prototype.windowWidth = function() {
  return Graphics.boxWidth;
};
Window_ItemCategory.prototype.maxCols = function() {
  return 4;
};
Window_ItemCategory.prototype.update = function() {
  Window_HorzCommand.prototype.update.call(this), this._itemWindow && this._itemWindow.setCategory(this.currentSymbol());
};
Window_ItemCategory.prototype.makeCommandList = function() {
  this.addCommand(TextManager.item, "item"), this.addCommand(TextManager.weapon, "weapon"), this.addCommand(TextManager.armor, "armor"), this.addCommand(TextManager.keyItem, "keyItem");
};
Window_ItemCategory.prototype.setItemWindow = function(t) {
  this._itemWindow = t;
};
function Window_ItemList() {
  this.initialize.apply(this, arguments);
}
Window_ItemList.prototype = Object.create(Window_Selectable.prototype);
Window_ItemList.prototype.constructor = Window_ItemList;
Window_ItemList.prototype.initialize = function(t, e, r, s) {
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this._category = "none", this._data = [];
};
Window_ItemList.prototype.setCategory = function(t) {
  this._category !== t && (this._category = t, this.refresh(), this.resetScroll());
};
Window_ItemList.prototype.maxCols = function() {
  return 2;
};
Window_ItemList.prototype.spacing = function() {
  return 48;
};
Window_ItemList.prototype.maxItems = function() {
  return this._data ? this._data.length : 1;
};
Window_ItemList.prototype.item = function() {
  var t = this.index();
  return this._data && t >= 0 ? this._data[t] : null;
};
Window_ItemList.prototype.isCurrentItemEnabled = function() {
  return this.isEnabled(this.item());
};
Window_ItemList.prototype.includes = function(t) {
  switch (this._category) {
    case "item":
      return DataManager.isItem(t) && t.itypeId === 1;
    case "weapon":
      return DataManager.isWeapon(t);
    case "armor":
      return DataManager.isArmor(t);
    case "keyItem":
      return DataManager.isItem(t) && t.itypeId === 2;
    default:
      return !1;
  }
};
Window_ItemList.prototype.needsNumber = function() {
  return !0;
};
Window_ItemList.prototype.isEnabled = function(t) {
  return $gameParty.canUse(t);
};
Window_ItemList.prototype.makeItemList = function() {
  this._data = $gameParty.allItems().filter(function(t) {
    return this.includes(t);
  }, this), this.includes(null) && this._data.push(null);
};
Window_ItemList.prototype.selectLast = function() {
  var t = this._data.indexOf($gameParty.lastItem());
  this.select(t >= 0 ? t : 0);
};
Window_ItemList.prototype.drawItem = function(t) {
  var e = this._data[t];
  if (e) {
    var r = this.numberWidth(), s = this.itemRect(t);
    s.width -= this.textPadding(), this.changePaintOpacity(this.isEnabled(e)), this.drawItemName(e, s.x, s.y, s.width - r), this.drawItemNumber(e, s.x, s.y, s.width), this.changePaintOpacity(1);
  }
};
Window_ItemList.prototype.numberWidth = function() {
  return this.textWidth("000");
};
Window_ItemList.prototype.drawItemNumber = function(t, e, r, s) {
  this.needsNumber() && (this.drawText(":", e, r, s - this.textWidth("00"), "right"), this.drawText($gameParty.numItems(t), e, r, s, "right"));
};
Window_ItemList.prototype.updateHelp = function() {
  this.setHelpWindowItem(this.item());
};
Window_ItemList.prototype.refresh = function() {
  this.makeItemList(), this.createContents(), this.drawAllItems();
};
function Window_SkillType() {
  this.initialize.apply(this, arguments);
}
Window_SkillType.prototype = Object.create(Window_Command.prototype);
Window_SkillType.prototype.constructor = Window_SkillType;
Window_SkillType.prototype.initialize = function(t, e) {
  Window_Command.prototype.initialize.call(this, t, e), this._actor = null;
};
Window_SkillType.prototype.windowWidth = function() {
  return 240;
};
Window_SkillType.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh(), this.selectLast());
};
Window_SkillType.prototype.numVisibleRows = function() {
  return 4;
};
Window_SkillType.prototype.makeCommandList = function() {
  if (this._actor) {
    var t = this._actor.addedSkillTypes();
    t.sort(function(e, r) {
      return e - r;
    }), t.forEach(function(e) {
      var r = $dataSystem.skillTypes[e];
      this.addCommand(r, "skill", !0, e);
    }, this);
  }
};
Window_SkillType.prototype.update = function() {
  Window_Command.prototype.update.call(this), this._skillWindow && this._skillWindow.setStypeId(this.currentExt());
};
Window_SkillType.prototype.setSkillWindow = function(t) {
  this._skillWindow = t;
};
Window_SkillType.prototype.selectLast = function() {
  var t = this._actor.lastMenuSkill();
  t ? this.selectExt(t.stypeId) : this.select(0);
};
function Window_SkillStatus() {
  this.initialize.apply(this, arguments);
}
Window_SkillStatus.prototype = Object.create(Window_Base.prototype);
Window_SkillStatus.prototype.constructor = Window_SkillStatus;
Window_SkillStatus.prototype.initialize = function(t, e, r, s) {
  Window_Base.prototype.initialize.call(this, t, e, r, s), this._actor = null;
};
Window_SkillStatus.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh());
};
Window_SkillStatus.prototype.refresh = function() {
  if (this.contents.clear(), this._actor) {
    var t = this.width - this.padding * 2, e = this.height - this.padding * 2, r = e / 2 - this.lineHeight() * 1.5, s = t - 162 - this.textPadding();
    this.drawActorFace(this._actor, 0, 0, 144, e), this.drawActorSimpleStatus(this._actor, 162, r, s);
  }
};
function Window_SkillList() {
  this.initialize.apply(this, arguments);
}
Window_SkillList.prototype = Object.create(Window_Selectable.prototype);
Window_SkillList.prototype.constructor = Window_SkillList;
Window_SkillList.prototype.initialize = function(t, e, r, s) {
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this._actor = null, this._stypeId = 0, this._data = [];
};
Window_SkillList.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh(), this.resetScroll());
};
Window_SkillList.prototype.setStypeId = function(t) {
  this._stypeId !== t && (this._stypeId = t, this.refresh(), this.resetScroll());
};
Window_SkillList.prototype.maxCols = function() {
  return 2;
};
Window_SkillList.prototype.spacing = function() {
  return 48;
};
Window_SkillList.prototype.maxItems = function() {
  return this._data ? this._data.length : 1;
};
Window_SkillList.prototype.item = function() {
  return this._data && this.index() >= 0 ? this._data[this.index()] : null;
};
Window_SkillList.prototype.isCurrentItemEnabled = function() {
  return this.isEnabled(this._data[this.index()]);
};
Window_SkillList.prototype.includes = function(t) {
  return t && t.stypeId === this._stypeId;
};
Window_SkillList.prototype.isEnabled = function(t) {
  return this._actor && this._actor.canUse(t);
};
Window_SkillList.prototype.makeItemList = function() {
  this._actor ? this._data = this._actor.skills().filter(function(t) {
    return this.includes(t);
  }, this) : this._data = [];
};
Window_SkillList.prototype.selectLast = function() {
  var t;
  $gameParty.inBattle() ? t = this._actor.lastBattleSkill() : t = this._actor.lastMenuSkill();
  var e = this._data.indexOf(t);
  this.select(e >= 0 ? e : 0);
};
Window_SkillList.prototype.drawItem = function(t) {
  var e = this._data[t];
  if (e) {
    var r = this.costWidth(), s = this.itemRect(t);
    s.width -= this.textPadding(), this.changePaintOpacity(this.isEnabled(e)), this.drawItemName(e, s.x, s.y, s.width - r), this.drawSkillCost(e, s.x, s.y, s.width), this.changePaintOpacity(1);
  }
};
Window_SkillList.prototype.costWidth = function() {
  return this.textWidth("000");
};
Window_SkillList.prototype.drawSkillCost = function(t, e, r, s) {
  this._actor.skillTpCost(t) > 0 ? (this.changeTextColor(this.tpCostColor()), this.drawText(this._actor.skillTpCost(t), e, r, s, "right")) : this._actor.skillMpCost(t) > 0 && (this.changeTextColor(this.mpCostColor()), this.drawText(this._actor.skillMpCost(t), e, r, s, "right"));
};
Window_SkillList.prototype.updateHelp = function() {
  this.setHelpWindowItem(this.item());
};
Window_SkillList.prototype.refresh = function() {
  this.makeItemList(), this.createContents(), this.drawAllItems();
};
function Window_EquipStatus() {
  this.initialize.apply(this, arguments);
}
Window_EquipStatus.prototype = Object.create(Window_Base.prototype);
Window_EquipStatus.prototype.constructor = Window_EquipStatus;
Window_EquipStatus.prototype.initialize = function(t, e) {
  var r = this.windowWidth(), s = this.windowHeight();
  Window_Base.prototype.initialize.call(this, t, e, r, s), this._actor = null, this._tempActor = null, this.refresh();
};
Window_EquipStatus.prototype.windowWidth = function() {
  return 312;
};
Window_EquipStatus.prototype.windowHeight = function() {
  return this.fittingHeight(this.numVisibleRows());
};
Window_EquipStatus.prototype.numVisibleRows = function() {
  return 7;
};
Window_EquipStatus.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh());
};
Window_EquipStatus.prototype.refresh = function() {
  if (this.contents.clear(), this._actor) {
    this.drawActorName(this._actor, this.textPadding(), 0);
    for (var t = 0; t < 6; t++)
      this.drawItem(0, this.lineHeight() * (1 + t), 2 + t);
  }
};
Window_EquipStatus.prototype.setTempActor = function(t) {
  this._tempActor !== t && (this._tempActor = t, this.refresh());
};
Window_EquipStatus.prototype.drawItem = function(t, e, r) {
  this.drawParamName(t + this.textPadding(), e, r), this._actor && this.drawCurrentParam(t + 140, e, r), this.drawRightArrow(t + 188, e), this._tempActor && this.drawNewParam(t + 222, e, r);
};
Window_EquipStatus.prototype.drawParamName = function(t, e, r) {
  this.changeTextColor(this.systemColor()), this.drawText(TextManager.param(r), t, e, 120);
};
Window_EquipStatus.prototype.drawCurrentParam = function(t, e, r) {
  this.resetTextColor(), this.drawText(this._actor.param(r), t, e, 48, "right");
};
Window_EquipStatus.prototype.drawRightArrow = function(t, e) {
  this.changeTextColor(this.systemColor()), this.drawText("→", t, e, 32, "center");
};
Window_EquipStatus.prototype.drawNewParam = function(t, e, r) {
  var s = this._tempActor.param(r), o = s - this._actor.param(r);
  this.changeTextColor(this.paramchangeTextColor(o)), this.drawText(s, t, e, 48, "right");
};
function Window_EquipCommand() {
  this.initialize.apply(this, arguments);
}
Window_EquipCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_EquipCommand.prototype.constructor = Window_EquipCommand;
Window_EquipCommand.prototype.initialize = function(t, e, r) {
  this._windowWidth = r, Window_HorzCommand.prototype.initialize.call(this, t, e);
};
Window_EquipCommand.prototype.windowWidth = function() {
  return this._windowWidth;
};
Window_EquipCommand.prototype.maxCols = function() {
  return 3;
};
Window_EquipCommand.prototype.makeCommandList = function() {
  this.addCommand(TextManager.equip2, "equip"), this.addCommand(TextManager.optimize, "optimize"), this.addCommand(TextManager.clear, "clear");
};
function Window_EquipSlot() {
  this.initialize.apply(this, arguments);
}
Window_EquipSlot.prototype = Object.create(Window_Selectable.prototype);
Window_EquipSlot.prototype.constructor = Window_EquipSlot;
Window_EquipSlot.prototype.initialize = function(t, e, r, s) {
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this._actor = null, this.refresh();
};
Window_EquipSlot.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh());
};
Window_EquipSlot.prototype.update = function() {
  Window_Selectable.prototype.update.call(this), this._itemWindow && this._itemWindow.setSlotId(this.index());
};
Window_EquipSlot.prototype.maxItems = function() {
  return this._actor ? this._actor.equipSlots().length : 0;
};
Window_EquipSlot.prototype.item = function() {
  return this._actor ? this._actor.equips()[this.index()] : null;
};
Window_EquipSlot.prototype.drawItem = function(t) {
  if (this._actor) {
    var e = this.itemRectForText(t);
    this.changeTextColor(this.systemColor()), this.changePaintOpacity(this.isEnabled(t)), this.drawText(this.slotName(t), e.x, e.y, 138, this.lineHeight()), this.drawItemName(this._actor.equips()[t], e.x + 138, e.y), this.changePaintOpacity(!0);
  }
};
Window_EquipSlot.prototype.slotName = function(t) {
  var e = this._actor.equipSlots();
  return this._actor ? $dataSystem.equipTypes[e[t]] : "";
};
Window_EquipSlot.prototype.isEnabled = function(t) {
  return this._actor ? this._actor.isEquipChangeOk(t) : !1;
};
Window_EquipSlot.prototype.isCurrentItemEnabled = function() {
  return this.isEnabled(this.index());
};
Window_EquipSlot.prototype.setStatusWindow = function(t) {
  this._statusWindow = t, this.callUpdateHelp();
};
Window_EquipSlot.prototype.setItemWindow = function(t) {
  this._itemWindow = t;
};
Window_EquipSlot.prototype.updateHelp = function() {
  Window_Selectable.prototype.updateHelp.call(this), this.setHelpWindowItem(this.item()), this._statusWindow && this._statusWindow.setTempActor(null);
};
function Window_EquipItem() {
  this.initialize.apply(this, arguments);
}
Window_EquipItem.prototype = Object.create(Window_ItemList.prototype);
Window_EquipItem.prototype.constructor = Window_EquipItem;
Window_EquipItem.prototype.initialize = function(t, e, r, s) {
  Window_ItemList.prototype.initialize.call(this, t, e, r, s), this._actor = null, this._slotId = 0;
};
Window_EquipItem.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh(), this.resetScroll());
};
Window_EquipItem.prototype.setSlotId = function(t) {
  this._slotId !== t && (this._slotId = t, this.refresh(), this.resetScroll());
};
Window_EquipItem.prototype.includes = function(t) {
  return t === null ? !0 : this._slotId < 0 || t.etypeId !== this._actor.equipSlots()[this._slotId] ? !1 : this._actor.canEquip(t);
};
Window_EquipItem.prototype.isEnabled = function(t) {
  return !0;
};
Window_EquipItem.prototype.selectLast = function() {
};
Window_EquipItem.prototype.setStatusWindow = function(t) {
  this._statusWindow = t, this.callUpdateHelp();
};
Window_EquipItem.prototype.updateHelp = function() {
  if (Window_ItemList.prototype.updateHelp.call(this), this._actor && this._statusWindow) {
    var t = JsonEx.makeDeepCopy(this._actor);
    t.forceChangeEquip(this._slotId, this.item()), this._statusWindow.setTempActor(t);
  }
};
Window_EquipItem.prototype.playOkSound = function() {
};
function Window_Status() {
  this.initialize.apply(this, arguments);
}
Window_Status.prototype = Object.create(Window_Selectable.prototype);
Window_Status.prototype.constructor = Window_Status;
Window_Status.prototype.initialize = function() {
  var t = Graphics.boxWidth, e = Graphics.boxHeight;
  Window_Selectable.prototype.initialize.call(this, 0, 0, t, e), this._actor = null, this.refresh(), this.activate();
};
Window_Status.prototype.setActor = function(t) {
  this._actor !== t && (this._actor = t, this.refresh());
};
Window_Status.prototype.refresh = function() {
  if (this.contents.clear(), this._actor) {
    var t = this.lineHeight();
    this.drawBlock1(t * 0), this.drawHorzLine(t * 1), this.drawBlock2(t * 2), this.drawHorzLine(t * 6), this.drawBlock3(t * 7), this.drawHorzLine(t * 13), this.drawBlock4(t * 14);
  }
};
Window_Status.prototype.drawBlock1 = function(t) {
  this.drawActorName(this._actor, 6, t), this.drawActorClass(this._actor, 192, t), this.drawActorNickname(this._actor, 432, t);
};
Window_Status.prototype.drawBlock2 = function(t) {
  this.drawActorFace(this._actor, 12, t), this.drawBasicInfo(204, t), this.drawExpInfo(456, t);
};
Window_Status.prototype.drawBlock3 = function(t) {
  this.drawParameters(48, t);
};
Window_Status.prototype.drawBlock4 = function(t) {
  this.drawProfile(6, t);
};
Window_Status.prototype.drawHorzLine = function(t) {
  var e = t + this.lineHeight() / 2 - 1;
  this.contents.paintOpacity = 48, this.contents.fillRect(0, e, this.contentsWidth(), 2, this.lineColor()), this.contents.paintOpacity = 255;
};
Window_Status.prototype.lineColor = function() {
  return this.normalColor();
};
Window_Status.prototype.drawBasicInfo = function(t, e) {
  var r = this.lineHeight();
  this.drawActorLevel(this._actor, t, e + r * 0), this.drawActorIcons(this._actor, t, e + r * 1), this.drawActorHp(this._actor, t, e + r * 2), this.drawActorMp(this._actor, t, e + r * 3);
};
Window_Status.prototype.drawParameters = function(t, e) {
  for (var r = this.lineHeight(), s = 0; s < 6; s++) {
    var o = s + 2, h = e + r * s;
    this.changeTextColor(this.systemColor()), this.drawText(TextManager.param(o), t, h, 160), this.resetTextColor(), this.drawText(this._actor.param(o), t + 160, h, 60, "right");
  }
};
Window_Status.prototype.drawExpInfo = function(t, e) {
  var r = this.lineHeight(), s = TextManager.expTotal.format(TextManager.exp), o = TextManager.expNext.format(TextManager.level), h = this._actor.currentExp(), p = this._actor.nextRequiredExp();
  this._actor.isMaxLevel() && (h = "-------", p = "-------"), this.changeTextColor(this.systemColor()), this.drawText(s, t, e + r * 0, 270), this.drawText(o, t, e + r * 2, 270), this.resetTextColor(), this.drawText(h, t, e + r * 1, 270, "right"), this.drawText(p, t, e + r * 3, 270, "right");
};
Window_Status.prototype.drawEquipments = function(t, e) {
  for (var r = this._actor.equips(), s = Math.min(r.length, this.maxEquipmentLines()), o = 0; o < s; o++)
    this.drawItemName(r[o], t, e + this.lineHeight() * o);
};
Window_Status.prototype.drawProfile = function(t, e) {
  this.drawTextEx(this._actor.profile(), t, e);
};
Window_Status.prototype.maxEquipmentLines = function() {
  return 6;
};
function Window_Options() {
  this.initialize.apply(this, arguments);
}
Window_Options.prototype = Object.create(Window_Command.prototype);
Window_Options.prototype.constructor = Window_Options;
Window_Options.prototype.initialize = function() {
  Window_Command.prototype.initialize.call(this, 0, 0), this.updatePlacement();
};
Window_Options.prototype.windowWidth = function() {
  return 400;
};
Window_Options.prototype.windowHeight = function() {
  return this.fittingHeight(Math.min(this.numVisibleRows(), 12));
};
Window_Options.prototype.updatePlacement = function() {
  this.x = (Graphics.boxWidth - this.width) / 2, this.y = (Graphics.boxHeight - this.height) / 2;
};
Window_Options.prototype.makeCommandList = function() {
  this.addGeneralOptions(), this.addVolumeOptions();
};
Window_Options.prototype.addGeneralOptions = function() {
  this.addCommand(TextManager.alwaysDash, "alwaysDash"), this.addCommand(TextManager.commandRemember, "commandRemember");
};
Window_Options.prototype.addVolumeOptions = function() {
  this.addCommand(TextManager.bgmVolume, "bgmVolume"), this.addCommand(TextManager.bgsVolume, "bgsVolume"), this.addCommand(TextManager.meVolume, "meVolume"), this.addCommand(TextManager.seVolume, "seVolume");
};
Window_Options.prototype.drawItem = function(t) {
  var e = this.itemRectForText(t), r = this.statusWidth(), s = e.width - r;
  this.resetTextColor(), this.changePaintOpacity(this.isCommandEnabled(t)), this.drawText(this.commandName(t), e.x, e.y, s, "left"), this.drawText(this.statusText(t), s, e.y, r, "right");
};
Window_Options.prototype.statusWidth = function() {
  return 120;
};
Window_Options.prototype.statusText = function(t) {
  var e = this.commandSymbol(t), r = this.getConfigValue(e);
  return this.isVolumeSymbol(e) ? this.volumeStatusText(r) : this.booleanStatusText(r);
};
Window_Options.prototype.isVolumeSymbol = function(t) {
  return t.contains("Volume");
};
Window_Options.prototype.booleanStatusText = function(t) {
  return t ? "ON" : "OFF";
};
Window_Options.prototype.volumeStatusText = function(t) {
  return t + "%";
};
Window_Options.prototype.processOk = function() {
  var t = this.index(), e = this.commandSymbol(t), r = this.getConfigValue(e);
  this.isVolumeSymbol(e) ? (r += this.volumeOffset(), r > 100 && (r = 0), r = r.clamp(0, 100), this.changeValue(e, r)) : this.changeValue(e, !r);
};
Window_Options.prototype.cursorRight = function(t) {
  var e = this.index(), r = this.commandSymbol(e), s = this.getConfigValue(r);
  this.isVolumeSymbol(r) ? (s += this.volumeOffset(), s = s.clamp(0, 100), this.changeValue(r, s)) : this.changeValue(r, !0);
};
Window_Options.prototype.cursorLeft = function(t) {
  var e = this.index(), r = this.commandSymbol(e), s = this.getConfigValue(r);
  this.isVolumeSymbol(r) ? (s -= this.volumeOffset(), s = s.clamp(0, 100), this.changeValue(r, s)) : this.changeValue(r, !1);
};
Window_Options.prototype.volumeOffset = function() {
  return 20;
};
Window_Options.prototype.changeValue = function(t, e) {
  var r = this.getConfigValue(t);
  r !== e && (this.setConfigValue(t, e), this.redrawItem(this.findSymbol(t)), SoundManager.playCursor());
};
Window_Options.prototype.getConfigValue = function(t) {
  return ConfigManager[t];
};
Window_Options.prototype.setConfigValue = function(t, e) {
  ConfigManager[t] = e;
};
function Window_SavefileList() {
  this.initialize.apply(this, arguments);
}
Window_SavefileList.prototype = Object.create(Window_Selectable.prototype);
Window_SavefileList.prototype.constructor = Window_SavefileList;
Window_SavefileList.prototype.initialize = function(t, e, r, s) {
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this.activate(), this._mode = null;
};
Window_SavefileList.prototype.setMode = function(t) {
  this._mode = t;
};
Window_SavefileList.prototype.maxItems = function() {
  return DataManager.maxSavefiles();
};
Window_SavefileList.prototype.maxVisibleItems = function() {
  return 5;
};
Window_SavefileList.prototype.itemHeight = function() {
  var t = this.height - this.padding * 2;
  return Math.floor(t / this.maxVisibleItems());
};
Window_SavefileList.prototype.drawItem = function(t) {
  var e = t + 1, r = DataManager.isThisGameFile(e), s = DataManager.loadSavefileInfo(e), o = this.itemRectForText(t);
  this.resetTextColor(), this._mode === "load" && this.changePaintOpacity(r), this.drawFileId(e, o.x, o.y), s && (this.changePaintOpacity(r), this.drawContents(s, o, r), this.changePaintOpacity(!0));
};
Window_SavefileList.prototype.drawFileId = function(t, e, r) {
  this.drawText(TextManager.file + " " + t, e, r, 180);
};
Window_SavefileList.prototype.drawContents = function(t, e, r) {
  var s = e.y + e.height;
  e.width >= 420 && (this.drawGameTitle(t, e.x + 192, e.y, e.width - 192), r && this.drawPartyCharacters(t, e.x + 220, s - 4));
  var o = this.lineHeight(), h = s - o;
  h >= o && this.drawPlaytime(t, e.x, h, e.width);
};
Window_SavefileList.prototype.drawGameTitle = function(t, e, r, s) {
  t.title && this.drawText(t.title, e, r, s);
};
Window_SavefileList.prototype.drawPartyCharacters = function(t, e, r) {
  if (t.characters)
    for (var s = 0; s < t.characters.length; s++) {
      var o = t.characters[s];
      this.drawCharacter(o[0], o[1], e + s * 48, r);
    }
};
Window_SavefileList.prototype.drawPlaytime = function(t, e, r, s) {
  t.playtime && this.drawText(t.playtime, e, r, s, "right");
};
Window_SavefileList.prototype.playOkSound = function() {
};
function Window_ShopCommand() {
  this.initialize.apply(this, arguments);
}
Window_ShopCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_ShopCommand.prototype.constructor = Window_ShopCommand;
Window_ShopCommand.prototype.initialize = function(t, e) {
  this._windowWidth = t, this._purchaseOnly = e, Window_HorzCommand.prototype.initialize.call(this, 0, 0);
};
Window_ShopCommand.prototype.windowWidth = function() {
  return this._windowWidth;
};
Window_ShopCommand.prototype.maxCols = function() {
  return 3;
};
Window_ShopCommand.prototype.makeCommandList = function() {
  this.addCommand(TextManager.buy, "buy"), this.addCommand(TextManager.sell, "sell", !this._purchaseOnly), this.addCommand(TextManager.cancel, "cancel");
};
function Window_ShopBuy() {
  this.initialize.apply(this, arguments);
}
Window_ShopBuy.prototype = Object.create(Window_Selectable.prototype);
Window_ShopBuy.prototype.constructor = Window_ShopBuy;
Window_ShopBuy.prototype.initialize = function(t, e, r, s) {
  var o = this.windowWidth();
  Window_Selectable.prototype.initialize.call(this, t, e, o, r), this._shopGoods = s, this._money = 0, this.refresh(), this.select(0);
};
Window_ShopBuy.prototype.windowWidth = function() {
  return 456;
};
Window_ShopBuy.prototype.maxItems = function() {
  return this._data ? this._data.length : 1;
};
Window_ShopBuy.prototype.item = function() {
  return this._data[this.index()];
};
Window_ShopBuy.prototype.setMoney = function(t) {
  this._money = t, this.refresh();
};
Window_ShopBuy.prototype.isCurrentItemEnabled = function() {
  return this.isEnabled(this._data[this.index()]);
};
Window_ShopBuy.prototype.price = function(t) {
  return this._price[this._data.indexOf(t)] || 0;
};
Window_ShopBuy.prototype.isEnabled = function(t) {
  return t && this.price(t) <= this._money && !$gameParty.hasMaxItems(t);
};
Window_ShopBuy.prototype.refresh = function() {
  this.makeItemList(), this.createContents(), this.drawAllItems();
};
Window_ShopBuy.prototype.makeItemList = function() {
  this._data = [], this._price = [], this._shopGoods.forEach(function(t) {
    var e = null;
    switch (t[0]) {
      case 0:
        e = $dataItems[t[1]];
        break;
      case 1:
        e = $dataWeapons[t[1]];
        break;
      case 2:
        e = $dataArmors[t[1]];
        break;
    }
    e && (this._data.push(e), this._price.push(t[2] === 0 ? e.price : t[3]));
  }, this);
};
Window_ShopBuy.prototype.drawItem = function(t) {
  var e = this._data[t], r = this.itemRect(t), s = 96;
  r.width -= this.textPadding(), this.changePaintOpacity(this.isEnabled(e)), this.drawItemName(e, r.x, r.y, r.width - s), this.drawText(
    this.price(e),
    r.x + r.width - s,
    r.y,
    s,
    "right"
  ), this.changePaintOpacity(!0);
};
Window_ShopBuy.prototype.setStatusWindow = function(t) {
  this._statusWindow = t, this.callUpdateHelp();
};
Window_ShopBuy.prototype.updateHelp = function() {
  this.setHelpWindowItem(this.item()), this._statusWindow && this._statusWindow.setItem(this.item());
};
function Window_ShopSell() {
  this.initialize.apply(this, arguments);
}
Window_ShopSell.prototype = Object.create(Window_ItemList.prototype);
Window_ShopSell.prototype.constructor = Window_ShopSell;
Window_ShopSell.prototype.initialize = function(t, e, r, s) {
  Window_ItemList.prototype.initialize.call(this, t, e, r, s);
};
Window_ShopSell.prototype.isEnabled = function(t) {
  return t && t.price > 0;
};
function Window_ShopNumber() {
  this.initialize.apply(this, arguments);
}
Window_ShopNumber.prototype = Object.create(Window_Selectable.prototype);
Window_ShopNumber.prototype.constructor = Window_ShopNumber;
Window_ShopNumber.prototype.initialize = function(t, e, r) {
  var s = this.windowWidth();
  Window_Selectable.prototype.initialize.call(this, t, e, s, r), this._item = null, this._max = 1, this._price = 0, this._number = 1, this._currencyUnit = TextManager.currencyUnit, this.createButtons();
};
Window_ShopNumber.prototype.windowWidth = function() {
  return 456;
};
Window_ShopNumber.prototype.number = function() {
  return this._number;
};
Window_ShopNumber.prototype.setup = function(t, e, r) {
  this._item = t, this._max = Math.floor(e), this._price = r, this._number = 1, this.placeButtons(), this.updateButtonsVisiblity(), this.refresh();
};
Window_ShopNumber.prototype.setCurrencyUnit = function(t) {
  this._currencyUnit = t, this.refresh();
};
Window_ShopNumber.prototype.createButtons = function() {
  var t = ImageManager.loadSystem("ButtonSet"), e = 48, r = 48;
  this._buttons = [];
  for (var s = 0; s < 5; s++) {
    var o = new Sprite_Button(), h = e * s, p = e * (s === 4 ? 2 : 1);
    o.bitmap = t, o.setColdFrame(h, 0, p, r), o.setHotFrame(h, r, p, r), o.visible = !1, this._buttons.push(o), this.addChild(o);
  }
  this._buttons[0].setClickHandler(this.onButtonDown2.bind(this)), this._buttons[1].setClickHandler(this.onButtonDown.bind(this)), this._buttons[2].setClickHandler(this.onButtonUp.bind(this)), this._buttons[3].setClickHandler(this.onButtonUp2.bind(this)), this._buttons[4].setClickHandler(this.onButtonOk.bind(this));
};
Window_ShopNumber.prototype.placeButtons = function() {
  for (var t = this._buttons.length, e = 16, r = -e, s = 0; s < t; s++)
    r += this._buttons[s].width + e;
  for (var o = (this.width - r) / 2, h = 0; h < t; h++) {
    var p = this._buttons[h];
    p.x = o, p.y = this.buttonY(), o += p.width + e;
  }
};
Window_ShopNumber.prototype.updateButtonsVisiblity = function() {
  TouchInput.date > Input.date ? this.showButtons() : this.hideButtons();
};
Window_ShopNumber.prototype.showButtons = function() {
  for (var t = 0; t < this._buttons.length; t++)
    this._buttons[t].visible = !0;
};
Window_ShopNumber.prototype.hideButtons = function() {
  for (var t = 0; t < this._buttons.length; t++)
    this._buttons[t].visible = !1;
};
Window_ShopNumber.prototype.refresh = function() {
  this.contents.clear(), this.drawItemName(this._item, 0, this.itemY()), this.drawMultiplicationSign(), this.drawNumber(), this.drawTotalPrice();
};
Window_ShopNumber.prototype.drawMultiplicationSign = function() {
  var t = "×", e = this.textWidth(t), r = this.cursorX() - e * 2, s = this.itemY();
  this.resetTextColor(), this.drawText(t, r, s, e);
};
Window_ShopNumber.prototype.drawNumber = function() {
  var t = this.cursorX(), e = this.itemY(), r = this.cursorWidth() - this.textPadding();
  this.resetTextColor(), this.drawText(this._number, t, e, r, "right");
};
Window_ShopNumber.prototype.drawTotalPrice = function() {
  var t = this._price * this._number, e = this.contentsWidth() - this.textPadding();
  this.drawCurrencyValue(t, this._currencyUnit, 0, this.priceY(), e);
};
Window_ShopNumber.prototype.itemY = function() {
  return Math.round(this.contentsHeight() / 2 - this.lineHeight() * 1.5);
};
Window_ShopNumber.prototype.priceY = function() {
  return Math.round(this.contentsHeight() / 2 + this.lineHeight() / 2);
};
Window_ShopNumber.prototype.buttonY = function() {
  return Math.round(this.priceY() + this.lineHeight() * 2.5);
};
Window_ShopNumber.prototype.cursorWidth = function() {
  var t = this.textWidth("0");
  return this.maxDigits() * t + this.textPadding() * 2;
};
Window_ShopNumber.prototype.cursorX = function() {
  return this.contentsWidth() - this.cursorWidth() - this.textPadding();
};
Window_ShopNumber.prototype.maxDigits = function() {
  return 2;
};
Window_ShopNumber.prototype.update = function() {
  Window_Selectable.prototype.update.call(this), this.processNumberChange();
};
Window_ShopNumber.prototype.isOkTriggered = function() {
  return Input.isTriggered("ok");
};
Window_ShopNumber.prototype.playOkSound = function() {
};
Window_ShopNumber.prototype.processNumberChange = function() {
  this.isOpenAndActive() && (Input.isRepeated("right") && this.changeNumber(1), Input.isRepeated("left") && this.changeNumber(-1), Input.isRepeated("up") && this.changeNumber(10), Input.isRepeated("down") && this.changeNumber(-10));
};
Window_ShopNumber.prototype.changeNumber = function(t) {
  var e = this._number;
  this._number = (this._number + t).clamp(1, this._max), this._number !== e && (SoundManager.playCursor(), this.refresh());
};
Window_ShopNumber.prototype.updateCursor = function() {
  this.setCursorRect(
    this.cursorX(),
    this.itemY(),
    this.cursorWidth(),
    this.lineHeight()
  );
};
Window_ShopNumber.prototype.onButtonUp = function() {
  this.changeNumber(1);
};
Window_ShopNumber.prototype.onButtonUp2 = function() {
  this.changeNumber(10);
};
Window_ShopNumber.prototype.onButtonDown = function() {
  this.changeNumber(-1);
};
Window_ShopNumber.prototype.onButtonDown2 = function() {
  this.changeNumber(-10);
};
Window_ShopNumber.prototype.onButtonOk = function() {
  this.processOk();
};
function Window_ShopStatus() {
  this.initialize.apply(this, arguments);
}
Window_ShopStatus.prototype = Object.create(Window_Base.prototype);
Window_ShopStatus.prototype.constructor = Window_ShopStatus;
Window_ShopStatus.prototype.initialize = function(t, e, r, s) {
  Window_Base.prototype.initialize.call(this, t, e, r, s), this._item = null, this._pageIndex = 0, this.refresh();
};
Window_ShopStatus.prototype.refresh = function() {
  if (this.contents.clear(), this._item) {
    var t = this.textPadding();
    this.drawPossession(t, 0), this.isEquipItem() && this.drawEquipInfo(t, this.lineHeight() * 2);
  }
};
Window_ShopStatus.prototype.setItem = function(t) {
  this._item = t, this.refresh();
};
Window_ShopStatus.prototype.isEquipItem = function() {
  return DataManager.isWeapon(this._item) || DataManager.isArmor(this._item);
};
Window_ShopStatus.prototype.drawPossession = function(t, e) {
  var r = this.contents.width - this.textPadding() - t, s = this.textWidth("0000");
  this.changeTextColor(this.systemColor()), this.drawText(TextManager.possession, t, e, r - s), this.resetTextColor(), this.drawText($gameParty.numItems(this._item), t, e, r, "right");
};
Window_ShopStatus.prototype.drawEquipInfo = function(t, e) {
  for (var r = this.statusMembers(), s = 0; s < r.length; s++)
    this.drawActorEquipInfo(t, e + this.lineHeight() * (s * 2.4), r[s]);
};
Window_ShopStatus.prototype.statusMembers = function() {
  var t = this._pageIndex * this.pageSize(), e = t + this.pageSize();
  return $gameParty.members().slice(t, e);
};
Window_ShopStatus.prototype.pageSize = function() {
  return 4;
};
Window_ShopStatus.prototype.maxPages = function() {
  return Math.floor(($gameParty.size() + this.pageSize() - 1) / this.pageSize());
};
Window_ShopStatus.prototype.drawActorEquipInfo = function(t, e, r) {
  var s = r.canEquip(this._item);
  this.changePaintOpacity(s), this.resetTextColor(), this.drawText(r.name(), t, e, 168);
  var o = this.currentEquippedItem(r, this._item.etypeId);
  s && this.drawActorParamChange(t, e, r, o), this.drawItemName(o, t, e + this.lineHeight()), this.changePaintOpacity(!0);
};
Window_ShopStatus.prototype.drawActorParamChange = function(t, e, r, s) {
  var o = this.contents.width - this.textPadding() - t, h = this.paramId(), p = this._item.params[h] - (s ? s.params[h] : 0);
  this.changeTextColor(this.paramchangeTextColor(p)), this.drawText((p > 0 ? "+" : "") + p, t, e, o, "right");
};
Window_ShopStatus.prototype.paramId = function() {
  return DataManager.isWeapon(this._item) ? 2 : 3;
};
Window_ShopStatus.prototype.currentEquippedItem = function(t, e) {
  for (var r = [], s = t.equips(), o = t.equipSlots(), h = 0; h < o.length; h++)
    o[h] === e && r.push(s[h]);
  for (var p = this.paramId(), c = Number.MAX_VALUE, u = null, l = 0; l < r.length; l++)
    r[l] && r[l].params[p] < c && (c = r[l].params[p], u = r[l]);
  return u;
};
Window_ShopStatus.prototype.update = function() {
  Window_Base.prototype.update.call(this), this.updatePage();
};
Window_ShopStatus.prototype.updatePage = function() {
  this.isPageChangeEnabled() && this.isPageChangeRequested() && this.changePage();
};
Window_ShopStatus.prototype.isPageChangeEnabled = function() {
  return this.visible && this.maxPages() >= 2;
};
Window_ShopStatus.prototype.isPageChangeRequested = function() {
  return !!(Input.isTriggered("shift") || TouchInput.isTriggered() && this.isTouchedInsideFrame());
};
Window_ShopStatus.prototype.isTouchedInsideFrame = function() {
  var t = this.canvasToLocalX(TouchInput.x), e = this.canvasToLocalY(TouchInput.y);
  return t >= 0 && e >= 0 && t < this.width && e < this.height;
};
Window_ShopStatus.prototype.changePage = function() {
  this._pageIndex = (this._pageIndex + 1) % this.maxPages(), this.refresh(), SoundManager.playCursor();
};
function Window_NameEdit() {
  this.initialize.apply(this, arguments);
}
Window_NameEdit.prototype = Object.create(Window_Base.prototype);
Window_NameEdit.prototype.constructor = Window_NameEdit;
Window_NameEdit.prototype.initialize = function(t, e) {
  var r = this.windowWidth(), s = this.windowHeight(), o = (Graphics.boxWidth - r) / 2, h = (Graphics.boxHeight - (s + this.fittingHeight(9) + 8)) / 2;
  Window_Base.prototype.initialize.call(this, o, h, r, s), this._actor = t, this._name = t.name().slice(0, this._maxLength), this._index = this._name.length, this._maxLength = e, this._defaultName = this._name, this.deactivate(), this.refresh(), ImageManager.reserveFace(t.faceName());
};
Window_NameEdit.prototype.windowWidth = function() {
  return 480;
};
Window_NameEdit.prototype.windowHeight = function() {
  return this.fittingHeight(4);
};
Window_NameEdit.prototype.name = function() {
  return this._name;
};
Window_NameEdit.prototype.restoreDefault = function() {
  return this._name = this._defaultName, this._index = this._name.length, this.refresh(), this._name.length > 0;
};
Window_NameEdit.prototype.add = function(t) {
  return this._index < this._maxLength ? (this._name += t, this._index++, this.refresh(), !0) : !1;
};
Window_NameEdit.prototype.back = function() {
  return this._index > 0 ? (this._index--, this._name = this._name.slice(0, this._index), this.refresh(), !0) : !1;
};
Window_NameEdit.prototype.faceWidth = function() {
  return 144;
};
Window_NameEdit.prototype.charWidth = function() {
  var t = $gameSystem.isJapanese() ? "Ａ" : "A";
  return this.textWidth(t);
};
Window_NameEdit.prototype.left = function() {
  var t = (this.contentsWidth() + this.faceWidth()) / 2, e = (this._maxLength + 1) * this.charWidth();
  return Math.min(t - e / 2, this.contentsWidth() - e);
};
Window_NameEdit.prototype.itemRect = function(t) {
  return {
    x: this.left() + t * this.charWidth(),
    y: 54,
    width: this.charWidth(),
    height: this.lineHeight()
  };
};
Window_NameEdit.prototype.underlineRect = function(t) {
  var e = this.itemRect(t);
  return e.x++, e.y += e.height - 4, e.width -= 2, e.height = 2, e;
};
Window_NameEdit.prototype.underlineColor = function() {
  return this.normalColor();
};
Window_NameEdit.prototype.drawUnderline = function(t) {
  var e = this.underlineRect(t), r = this.underlineColor();
  this.contents.paintOpacity = 48, this.contents.fillRect(e.x, e.y, e.width, e.height, r), this.contents.paintOpacity = 255;
};
Window_NameEdit.prototype.drawChar = function(t) {
  var e = this.itemRect(t);
  this.resetTextColor(), this.drawText(this._name[t] || "", e.x, e.y);
};
Window_NameEdit.prototype.refresh = function() {
  this.contents.clear(), this.drawActorFace(this._actor, 0, 0);
  for (var t = 0; t < this._maxLength; t++)
    this.drawUnderline(t);
  for (var e = 0; e < this._name.length; e++)
    this.drawChar(e);
  var r = this.itemRect(this._index);
  this.setCursorRect(r.x, r.y, r.width, r.height);
};
function Window_NameInput() {
  this.initialize.apply(this, arguments);
}
Window_NameInput.prototype = Object.create(Window_Selectable.prototype);
Window_NameInput.prototype.constructor = Window_NameInput;
Window_NameInput.LATIN1 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "a",
  "b",
  "c",
  "d",
  "e",
  "F",
  "G",
  "H",
  "I",
  "J",
  "f",
  "g",
  "h",
  "i",
  "j",
  "K",
  "L",
  "M",
  "N",
  "O",
  "k",
  "l",
  "m",
  "n",
  "o",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "p",
  "q",
  "r",
  "s",
  "t",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "u",
  "v",
  "w",
  "x",
  "y",
  "Z",
  "[",
  "]",
  "^",
  "_",
  "z",
  "{",
  "}",
  "|",
  "~",
  "0",
  "1",
  "2",
  "3",
  "4",
  "!",
  "#",
  "$",
  "%",
  "&",
  "5",
  "6",
  "7",
  "8",
  "9",
  "(",
  ")",
  "*",
  "+",
  "-",
  "/",
  "=",
  "@",
  "<",
  ">",
  ":",
  ";",
  " ",
  "Page",
  "OK"
];
Window_NameInput.LATIN2 = [
  "Á",
  "É",
  "Í",
  "Ó",
  "Ú",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "À",
  "È",
  "Ì",
  "Ò",
  "Ù",
  "à",
  "è",
  "ì",
  "ò",
  "ù",
  "Â",
  "Ê",
  "Î",
  "Ô",
  "Û",
  "â",
  "ê",
  "î",
  "ô",
  "û",
  "Ä",
  "Ë",
  "Ï",
  "Ö",
  "Ü",
  "ä",
  "ë",
  "ï",
  "ö",
  "ü",
  "Ā",
  "Ē",
  "Ī",
  "Ō",
  "Ū",
  "ā",
  "ē",
  "ī",
  "ō",
  "ū",
  "Ã",
  "Å",
  "Æ",
  "Ç",
  "Ð",
  "ã",
  "å",
  "æ",
  "ç",
  "ð",
  "Ñ",
  "Õ",
  "Ø",
  "Š",
  "Ŵ",
  "ñ",
  "õ",
  "ø",
  "š",
  "ŵ",
  "Ý",
  "Ŷ",
  "Ÿ",
  "Ž",
  "Þ",
  "ý",
  "ÿ",
  "ŷ",
  "ž",
  "þ",
  "Ĳ",
  "Œ",
  "ĳ",
  "œ",
  "ß",
  "«",
  "»",
  " ",
  "Page",
  "OK"
];
Window_NameInput.RUSSIA = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "а",
  "б",
  "в",
  "г",
  "д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "й",
  "к",
  "л",
  "м",
  "н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "о",
  "п",
  "р",
  "с",
  "т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "Э",
  "Ю",
  "Я",
  "^",
  "_",
  "э",
  "ю",
  "я",
  "%",
  "&",
  "0",
  "1",
  "2",
  "3",
  "4",
  "(",
  ")",
  "*",
  "+",
  "-",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  " ",
  "",
  "OK"
];
Window_NameInput.JAPAN1 = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "が",
  "ぎ",
  "ぐ",
  "げ",
  "ご",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "ざ",
  "じ",
  "ず",
  "ぜ",
  "ぞ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "だ",
  "ぢ",
  "づ",
  "で",
  "ど",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "ば",
  "び",
  "ぶ",
  "べ",
  "ぼ",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "ぱ",
  "ぴ",
  "ぷ",
  "ぺ",
  "ぽ",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ぁ",
  "ぃ",
  "ぅ",
  "ぇ",
  "ぉ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "っ",
  "ゃ",
  "ゅ",
  "ょ",
  "ゎ",
  "や",
  "ゆ",
  "よ",
  "わ",
  "ん",
  "ー",
  "～",
  "・",
  "＝",
  "☆",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "ゔ",
  "を",
  "　",
  "カナ",
  "決定"
];
Window_NameInput.JAPAN2 = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "ァ",
  "ィ",
  "ゥ",
  "ェ",
  "ォ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ッ",
  "ャ",
  "ュ",
  "ョ",
  "ヮ",
  "ヤ",
  "ユ",
  "ヨ",
  "ワ",
  "ン",
  "ー",
  "～",
  "・",
  "＝",
  "☆",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ヴ",
  "ヲ",
  "　",
  "英数",
  "決定"
];
Window_NameInput.JAPAN3 = [
  "Ａ",
  "Ｂ",
  "Ｃ",
  "Ｄ",
  "Ｅ",
  "ａ",
  "ｂ",
  "ｃ",
  "ｄ",
  "ｅ",
  "Ｆ",
  "Ｇ",
  "Ｈ",
  "Ｉ",
  "Ｊ",
  "ｆ",
  "ｇ",
  "ｈ",
  "ｉ",
  "ｊ",
  "Ｋ",
  "Ｌ",
  "Ｍ",
  "Ｎ",
  "Ｏ",
  "ｋ",
  "ｌ",
  "ｍ",
  "ｎ",
  "ｏ",
  "Ｐ",
  "Ｑ",
  "Ｒ",
  "Ｓ",
  "Ｔ",
  "ｐ",
  "ｑ",
  "ｒ",
  "ｓ",
  "ｔ",
  "Ｕ",
  "Ｖ",
  "Ｗ",
  "Ｘ",
  "Ｙ",
  "ｕ",
  "ｖ",
  "ｗ",
  "ｘ",
  "ｙ",
  "Ｚ",
  "［",
  "］",
  "＾",
  "＿",
  "ｚ",
  "｛",
  "｝",
  "｜",
  "～",
  "０",
  "１",
  "２",
  "３",
  "４",
  "！",
  "＃",
  "＄",
  "％",
  "＆",
  "５",
  "６",
  "７",
  "８",
  "９",
  "（",
  "）",
  "＊",
  "＋",
  "－",
  "／",
  "＝",
  "＠",
  "＜",
  "＞",
  "：",
  "；",
  "　",
  "かな",
  "決定"
];
Window_NameInput.prototype.initialize = function(t) {
  var e = t.x, r = t.y + t.height + 8, s = t.width, o = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, e, r, s, o), this._editWindow = t, this._page = 0, this._index = 0, this.refresh(), this.updateCursor(), this.activate();
};
Window_NameInput.prototype.windowHeight = function() {
  return this.fittingHeight(9);
};
Window_NameInput.prototype.table = function() {
  return $gameSystem.isJapanese() ? [
    Window_NameInput.JAPAN1,
    Window_NameInput.JAPAN2,
    Window_NameInput.JAPAN3
  ] : $gameSystem.isRussian() ? [Window_NameInput.RUSSIA] : [
    Window_NameInput.LATIN1,
    Window_NameInput.LATIN2
  ];
};
Window_NameInput.prototype.maxCols = function() {
  return 10;
};
Window_NameInput.prototype.maxItems = function() {
  return 90;
};
Window_NameInput.prototype.character = function() {
  return this._index < 88 ? this.table()[this._page][this._index] : "";
};
Window_NameInput.prototype.isPageChange = function() {
  return this._index === 88;
};
Window_NameInput.prototype.isOk = function() {
  return this._index === 89;
};
Window_NameInput.prototype.itemRect = function(t) {
  return {
    x: t % 10 * 42 + Math.floor(t % 10 / 5) * 24,
    y: Math.floor(t / 10) * this.lineHeight(),
    width: 42,
    height: this.lineHeight()
  };
};
Window_NameInput.prototype.refresh = function() {
  var t = this.table();
  this.contents.clear(), this.resetTextColor();
  for (var e = 0; e < 90; e++) {
    var r = this.itemRect(e);
    r.x += 3, r.width -= 6, this.drawText(t[this._page][e], r.x, r.y, r.width, "center");
  }
};
Window_NameInput.prototype.updateCursor = function() {
  var t = this.itemRect(this._index);
  this.setCursorRect(t.x, t.y, t.width, t.height);
};
Window_NameInput.prototype.isCursorMovable = function() {
  return this.active;
};
Window_NameInput.prototype.cursorDown = function(t) {
  (this._index < 80 || t) && (this._index = (this._index + 10) % 90);
};
Window_NameInput.prototype.cursorUp = function(t) {
  (this._index >= 10 || t) && (this._index = (this._index + 80) % 90);
};
Window_NameInput.prototype.cursorRight = function(t) {
  this._index % 10 < 9 ? this._index++ : t && (this._index -= 9);
};
Window_NameInput.prototype.cursorLeft = function(t) {
  this._index % 10 > 0 ? this._index-- : t && (this._index += 9);
};
Window_NameInput.prototype.cursorPagedown = function() {
  this._page = (this._page + 1) % this.table().length, this.refresh();
};
Window_NameInput.prototype.cursorPageup = function() {
  this._page = (this._page + this.table().length - 1) % this.table().length, this.refresh();
};
Window_NameInput.prototype.processCursorMove = function() {
  var t = this._page;
  Window_Selectable.prototype.processCursorMove.call(this), this.updateCursor(), this._page !== t && SoundManager.playCursor();
};
Window_NameInput.prototype.processHandling = function() {
  this.isOpen() && this.active && (Input.isTriggered("shift") && this.processJump(), Input.isRepeated("cancel") && this.processBack(), Input.isRepeated("ok") && this.processOk());
};
Window_NameInput.prototype.isCancelEnabled = function() {
  return !0;
};
Window_NameInput.prototype.processCancel = function() {
  this.processBack();
};
Window_NameInput.prototype.processJump = function() {
  this._index !== 89 && (this._index = 89, SoundManager.playCursor());
};
Window_NameInput.prototype.processBack = function() {
  this._editWindow.back() && SoundManager.playCancel();
};
Window_NameInput.prototype.processOk = function() {
  this.character() ? this.onNameAdd() : this.isPageChange() ? (SoundManager.playOk(), this.cursorPagedown()) : this.isOk() && this.onNameOk();
};
Window_NameInput.prototype.onNameAdd = function() {
  this._editWindow.add(this.character()) ? SoundManager.playOk() : SoundManager.playBuzzer();
};
Window_NameInput.prototype.onNameOk = function() {
  this._editWindow.name() === "" ? this._editWindow.restoreDefault() ? SoundManager.playOk() : SoundManager.playBuzzer() : (SoundManager.playOk(), this.callOkHandler());
};
function Window_ChoiceList() {
  this.initialize.apply(this, arguments);
}
Window_ChoiceList.prototype = Object.create(Window_Command.prototype);
Window_ChoiceList.prototype.constructor = Window_ChoiceList;
Window_ChoiceList.prototype.initialize = function(t) {
  this._messageWindow = t, Window_Command.prototype.initialize.call(this, 0, 0), this.openness = 0, this.deactivate(), this._background = 0;
};
Window_ChoiceList.prototype.start = function() {
  this.updatePlacement(), this.updateBackground(), this.refresh(), this.selectDefault(), this.open(), this.activate();
};
Window_ChoiceList.prototype.selectDefault = function() {
  this.select($gameMessage.choiceDefaultType());
};
Window_ChoiceList.prototype.updatePlacement = function() {
  var t = $gameMessage.choicePositionType(), e = this._messageWindow.y;
  switch (this.width = this.windowWidth(), this.height = this.windowHeight(), t) {
    case 0:
      this.x = 0;
      break;
    case 1:
      this.x = (Graphics.boxWidth - this.width) / 2;
      break;
    case 2:
      this.x = Graphics.boxWidth - this.width;
      break;
  }
  e >= Graphics.boxHeight / 2 ? this.y = e - this.height : this.y = e + this._messageWindow.height;
};
Window_ChoiceList.prototype.updateBackground = function() {
  this._background = $gameMessage.choiceBackground(), this.setBackgroundType(this._background);
};
Window_ChoiceList.prototype.windowWidth = function() {
  var t = this.maxChoiceWidth() + this.padding * 2;
  return Math.min(t, Graphics.boxWidth);
};
Window_ChoiceList.prototype.numVisibleRows = function() {
  var t = this._messageWindow.y, e = this._messageWindow.height, r = Graphics.boxHeight / 2, s = $gameMessage.choices(), o = s.length, h = 8;
  return t < r && t + e > r && (h = 4), o > h && (o = h), o;
};
Window_ChoiceList.prototype.maxChoiceWidth = function() {
  for (var t = 96, e = $gameMessage.choices(), r = 0; r < e.length; r++) {
    var s = this.textWidthEx(e[r]) + this.textPadding() * 2;
    t < s && (t = s);
  }
  return t;
};
Window_ChoiceList.prototype.textWidthEx = function(t) {
  return this.drawTextEx(t, 0, this.contents.height);
};
Window_ChoiceList.prototype.contentsHeight = function() {
  return this.maxItems() * this.itemHeight();
};
Window_ChoiceList.prototype.makeCommandList = function() {
  for (var t = $gameMessage.choices(), e = 0; e < t.length; e++)
    this.addCommand(t[e], "choice");
};
Window_ChoiceList.prototype.drawItem = function(t) {
  var e = this.itemRectForText(t);
  this.drawTextEx(this.commandName(t), e.x, e.y);
};
Window_ChoiceList.prototype.isCancelEnabled = function() {
  return $gameMessage.choiceCancelType() !== -1;
};
Window_ChoiceList.prototype.isOkTriggered = function() {
  return Input.isTriggered("ok");
};
Window_ChoiceList.prototype.callOkHandler = function() {
  $gameMessage.onChoice(this.index()), this._messageWindow.terminateMessage(), this.close();
};
Window_ChoiceList.prototype.callCancelHandler = function() {
  $gameMessage.onChoice($gameMessage.choiceCancelType()), this._messageWindow.terminateMessage(), this.close();
};
function Window_NumberInput() {
  this.initialize.apply(this, arguments);
}
Window_NumberInput.prototype = Object.create(Window_Selectable.prototype);
Window_NumberInput.prototype.constructor = Window_NumberInput;
Window_NumberInput.prototype.initialize = function(t) {
  this._messageWindow = t, Window_Selectable.prototype.initialize.call(this, 0, 0, 0, 0), this._number = 0, this._maxDigits = 1, this.openness = 0, this.createButtons(), this.deactivate();
};
Window_NumberInput.prototype.start = function() {
  this._maxDigits = $gameMessage.numInputMaxDigits(), this._number = $gameVariables.value($gameMessage.numInputVariableId()), this._number = this._number.clamp(0, Math.pow(10, this._maxDigits) - 1), this.updatePlacement(), this.placeButtons(), this.updateButtonsVisiblity(), this.createContents(), this.refresh(), this.open(), this.activate(), this.select(0);
};
Window_NumberInput.prototype.updatePlacement = function() {
  var t = this._messageWindow.y, e = 8;
  this.width = this.windowWidth(), this.height = this.windowHeight(), this.x = (Graphics.boxWidth - this.width) / 2, t >= Graphics.boxHeight / 2 ? this.y = t - this.height - e : this.y = t + this._messageWindow.height + e;
};
Window_NumberInput.prototype.windowWidth = function() {
  return this.maxCols() * this.itemWidth() + this.padding * 2;
};
Window_NumberInput.prototype.windowHeight = function() {
  return this.fittingHeight(1);
};
Window_NumberInput.prototype.maxCols = function() {
  return this._maxDigits;
};
Window_NumberInput.prototype.maxItems = function() {
  return this._maxDigits;
};
Window_NumberInput.prototype.spacing = function() {
  return 0;
};
Window_NumberInput.prototype.itemWidth = function() {
  return 32;
};
Window_NumberInput.prototype.createButtons = function() {
  var t = ImageManager.loadSystem("ButtonSet"), e = 48, r = 48;
  this._buttons = [];
  for (var s = 0; s < 3; s++) {
    var o = new Sprite_Button(), h = e * [1, 2, 4][s], p = e * (s === 2 ? 2 : 1);
    o.bitmap = t, o.setColdFrame(h, 0, p, r), o.setHotFrame(h, r, p, r), o.visible = !1, this._buttons.push(o), this.addChild(o);
  }
  this._buttons[0].setClickHandler(this.onButtonDown.bind(this)), this._buttons[1].setClickHandler(this.onButtonUp.bind(this)), this._buttons[2].setClickHandler(this.onButtonOk.bind(this));
};
Window_NumberInput.prototype.placeButtons = function() {
  for (var t = this._buttons.length, e = 16, r = -e, s = 0; s < t; s++)
    r += this._buttons[s].width + e;
  for (var o = (this.width - r) / 2, h = 0; h < t; h++) {
    var p = this._buttons[h];
    p.x = o, p.y = this.buttonY(), o += p.width + e;
  }
};
Window_NumberInput.prototype.updateButtonsVisiblity = function() {
  TouchInput.date > Input.date ? this.showButtons() : this.hideButtons();
};
Window_NumberInput.prototype.showButtons = function() {
  for (var t = 0; t < this._buttons.length; t++)
    this._buttons[t].visible = !0;
};
Window_NumberInput.prototype.hideButtons = function() {
  for (var t = 0; t < this._buttons.length; t++)
    this._buttons[t].visible = !1;
};
Window_NumberInput.prototype.buttonY = function() {
  var t = 8;
  return this._messageWindow.y >= Graphics.boxHeight / 2 ? 0 - this._buttons[0].height - t : this.height + t;
};
Window_NumberInput.prototype.update = function() {
  Window_Selectable.prototype.update.call(this), this.processDigitChange();
};
Window_NumberInput.prototype.processDigitChange = function() {
  this.isOpenAndActive() && (Input.isRepeated("up") ? this.changeDigit(!0) : Input.isRepeated("down") && this.changeDigit(!1));
};
Window_NumberInput.prototype.changeDigit = function(t) {
  var e = this.index(), r = Math.pow(10, this._maxDigits - 1 - e), s = Math.floor(this._number / r) % 10;
  this._number -= s * r, t ? s = (s + 1) % 10 : s = (s + 9) % 10, this._number += s * r, this.refresh(), SoundManager.playCursor();
};
Window_NumberInput.prototype.isTouchOkEnabled = function() {
  return !1;
};
Window_NumberInput.prototype.isOkEnabled = function() {
  return !0;
};
Window_NumberInput.prototype.isCancelEnabled = function() {
  return !1;
};
Window_NumberInput.prototype.isOkTriggered = function() {
  return Input.isTriggered("ok");
};
Window_NumberInput.prototype.processOk = function() {
  SoundManager.playOk(), $gameVariables.setValue($gameMessage.numInputVariableId(), this._number), this._messageWindow.terminateMessage(), this.updateInputData(), this.deactivate(), this.close();
};
Window_NumberInput.prototype.drawItem = function(t) {
  var e = this.itemRect(t), r = "center", s = this._number.padZero(this._maxDigits), o = s.slice(t, t + 1);
  this.resetTextColor(), this.drawText(o, e.x, e.y, e.width, r);
};
Window_NumberInput.prototype.onButtonUp = function() {
  this.changeDigit(!0);
};
Window_NumberInput.prototype.onButtonDown = function() {
  this.changeDigit(!1);
};
Window_NumberInput.prototype.onButtonOk = function() {
  this.processOk(), this.hideButtons();
};
function Window_EventItem() {
  this.initialize.apply(this, arguments);
}
Window_EventItem.prototype = Object.create(Window_ItemList.prototype);
Window_EventItem.prototype.constructor = Window_EventItem;
Window_EventItem.prototype.initialize = function(t) {
  this._messageWindow = t;
  var e = Graphics.boxWidth, r = this.windowHeight();
  Window_ItemList.prototype.initialize.call(this, 0, 0, e, r), this.openness = 0, this.deactivate(), this.setHandler("ok", this.onOk.bind(this)), this.setHandler("cancel", this.onCancel.bind(this));
};
Window_EventItem.prototype.windowHeight = function() {
  return this.fittingHeight(this.numVisibleRows());
};
Window_EventItem.prototype.numVisibleRows = function() {
  return 4;
};
Window_EventItem.prototype.start = function() {
  this.refresh(), this.updatePlacement(), this.select(0), this.open(), this.activate();
};
Window_EventItem.prototype.updatePlacement = function() {
  this._messageWindow.y >= Graphics.boxHeight / 2 ? this.y = 0 : this.y = Graphics.boxHeight - this.height;
};
Window_EventItem.prototype.includes = function(t) {
  var e = $gameMessage.itemChoiceItypeId();
  return DataManager.isItem(t) && t.itypeId === e;
};
Window_EventItem.prototype.isEnabled = function(t) {
  return !0;
};
Window_EventItem.prototype.onOk = function() {
  var t = this.item(), e = t ? t.id : 0;
  $gameVariables.setValue($gameMessage.itemChoiceVariableId(), e), this._messageWindow.terminateMessage(), this.close();
};
Window_EventItem.prototype.onCancel = function() {
  $gameVariables.setValue($gameMessage.itemChoiceVariableId(), 0), this._messageWindow.terminateMessage(), this.close();
};
function Window_Message() {
  this.initialize.apply(this, arguments);
}
Window_Message.prototype = Object.create(Window_Base.prototype);
Window_Message.prototype.constructor = Window_Message;
Window_Message.prototype.initialize = function() {
  var t = this.windowWidth(), e = this.windowHeight(), r = (Graphics.boxWidth - t) / 2;
  Window_Base.prototype.initialize.call(this, r, 0, t, e), this.openness = 0, this.initMembers(), this.createSubWindows(), this.updatePlacement();
};
Window_Message.prototype.initMembers = function() {
  this._imageReservationId = Utils.generateRuntimeId(), this._background = 0, this._positionType = 2, this._waitCount = 0, this._faceBitmap = null, this._textState = null, this.clearFlags();
};
Window_Message.prototype.subWindows = function() {
  return [
    this._goldWindow,
    this._choiceWindow,
    this._numberWindow,
    this._itemWindow
  ];
};
Window_Message.prototype.createSubWindows = function() {
  this._goldWindow = new Window_Gold(0, 0), this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width, this._goldWindow.openness = 0, this._choiceWindow = new Window_ChoiceList(this), this._numberWindow = new Window_NumberInput(this), this._itemWindow = new Window_EventItem(this);
};
Window_Message.prototype.windowWidth = function() {
  return Graphics.boxWidth;
};
Window_Message.prototype.windowHeight = function() {
  return this.fittingHeight(this.numVisibleRows());
};
Window_Message.prototype.clearFlags = function() {
  this._showFast = !1, this._lineShowFast = !1, this._pauseSkip = !1;
};
Window_Message.prototype.numVisibleRows = function() {
  return 4;
};
Window_Message.prototype.update = function() {
  for (this.checkToNotClose(), Window_Base.prototype.update.call(this); !this.isOpening() && !this.isClosing(); ) {
    if (this.updateWait())
      return;
    if (this.updateLoading())
      return;
    if (this.updateInput())
      return;
    if (this.updateMessage())
      return;
    if (this.canStart())
      this.startMessage();
    else {
      this.startInput();
      return;
    }
  }
};
Window_Message.prototype.checkToNotClose = function() {
  this.isClosing() && this.isOpen() && this.doesContinue() && this.open();
};
Window_Message.prototype.canStart = function() {
  return $gameMessage.hasText() && !$gameMessage.scrollMode();
};
Window_Message.prototype.startMessage = function() {
  this._textState = {}, this._textState.index = 0, this._textState.text = this.convertEscapeCharacters($gameMessage.allText()), this.newPage(this._textState), this.updatePlacement(), this.updateBackground(), this.open();
};
Window_Message.prototype.updatePlacement = function() {
  this._positionType = $gameMessage.positionType(), this.y = this._positionType * (Graphics.boxHeight - this.height) / 2, this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
};
Window_Message.prototype.updateBackground = function() {
  this._background = $gameMessage.background(), this.setBackgroundType(this._background);
};
Window_Message.prototype.terminateMessage = function() {
  this.close(), this._goldWindow.close(), $gameMessage.clear();
};
Window_Message.prototype.updateWait = function() {
  return this._waitCount > 0 ? (this._waitCount--, !0) : !1;
};
Window_Message.prototype.updateLoading = function() {
  return this._faceBitmap ? this._faceBitmap.isReady() ? (this.drawMessageFace(), this._faceBitmap = null, !1) : !0 : !1;
};
Window_Message.prototype.updateInput = function() {
  return this.isAnySubWindowActive() ? !0 : this.pause ? (this.isTriggered() && (Input.update(), this.pause = !1, this._textState || this.terminateMessage()), !0) : !1;
};
Window_Message.prototype.isAnySubWindowActive = function() {
  return this._choiceWindow.active || this._numberWindow.active || this._itemWindow.active;
};
Window_Message.prototype.updateMessage = function() {
  if (this._textState) {
    for (; !this.isEndOfText(this._textState) && (this.needsNewPage(this._textState) && this.newPage(this._textState), this.updateShowFast(), this.processCharacter(this._textState), !(!this._showFast && !this._lineShowFast || this.pause || this._waitCount > 0)); )
      ;
    return this.isEndOfText(this._textState) && this.onEndOfText(), !0;
  } else
    return !1;
};
Window_Message.prototype.onEndOfText = function() {
  this.startInput() || (this._pauseSkip ? this.terminateMessage() : this.startPause()), this._textState = null;
};
Window_Message.prototype.startInput = function() {
  return $gameMessage.isChoice() ? (this._choiceWindow.start(), !0) : $gameMessage.isNumberInput() ? (this._numberWindow.start(), !0) : $gameMessage.isItemChoice() ? (this._itemWindow.start(), !0) : !1;
};
Window_Message.prototype.isTriggered = function() {
  return Input.isRepeated("ok") || Input.isRepeated("cancel") || TouchInput.isRepeated();
};
Window_Message.prototype.doesContinue = function() {
  return $gameMessage.hasText() && !$gameMessage.scrollMode() && !this.areSettingsChanged();
};
Window_Message.prototype.areSettingsChanged = function() {
  return this._background !== $gameMessage.background() || this._positionType !== $gameMessage.positionType();
};
Window_Message.prototype.updateShowFast = function() {
  this.isTriggered() && (this._showFast = !0);
};
Window_Message.prototype.newPage = function(t) {
  this.contents.clear(), this.resetFontSettings(), this.clearFlags(), this.loadMessageFace(), t.x = this.newLineX(), t.y = 0, t.left = this.newLineX(), t.height = this.calcTextHeight(t, !1);
};
Window_Message.prototype.loadMessageFace = function() {
  this._faceBitmap = ImageManager.reserveFace($gameMessage.faceName(), 0, this._imageReservationId);
};
Window_Message.prototype.drawMessageFace = function() {
  this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), 0, 0), ImageManager.releaseReservation(this._imageReservationId);
};
Window_Message.prototype.newLineX = function() {
  return $gameMessage.faceName() === "" ? 0 : 168;
};
Window_Message.prototype.processNewLine = function(t) {
  this._lineShowFast = !1, Window_Base.prototype.processNewLine.call(this, t), this.needsNewPage(t) && this.startPause();
};
Window_Message.prototype.processNewPage = function(t) {
  Window_Base.prototype.processNewPage.call(this, t), t.text[t.index] === `
` && t.index++, t.y = this.contents.height, this.startPause();
};
Window_Message.prototype.isEndOfText = function(t) {
  return t.index >= t.text.length;
};
Window_Message.prototype.needsNewPage = function(t) {
  return !this.isEndOfText(t) && t.y + t.height > this.contents.height;
};
Window_Message.prototype.processEscapeCharacter = function(t, e) {
  switch (t) {
    case "$":
      this._goldWindow.open();
      break;
    case ".":
      this.startWait(15);
      break;
    case "|":
      this.startWait(60);
      break;
    case "!":
      this.startPause();
      break;
    case ">":
      this._lineShowFast = !0;
      break;
    case "<":
      this._lineShowFast = !1;
      break;
    case "^":
      this._pauseSkip = !0;
      break;
    default:
      Window_Base.prototype.processEscapeCharacter.call(this, t, e);
      break;
  }
};
Window_Message.prototype.startWait = function(t) {
  this._waitCount = t;
};
Window_Message.prototype.startPause = function() {
  this.startWait(10), this.pause = !0;
};
function Window_ScrollText() {
  this.initialize.apply(this, arguments);
}
Window_ScrollText.prototype = Object.create(Window_Base.prototype);
Window_ScrollText.prototype.constructor = Window_ScrollText;
Window_ScrollText.prototype.initialize = function() {
  var t = Graphics.boxWidth, e = Graphics.boxHeight;
  Window_Base.prototype.initialize.call(this, 0, 0, t, e), this.opacity = 0, this.hide(), this._text = "", this._allTextHeight = 0;
};
Window_ScrollText.prototype.update = function() {
  Window_Base.prototype.update.call(this), $gameMessage.scrollMode() && (this._text && this.updateMessage(), !this._text && $gameMessage.hasText() && this.startMessage());
};
Window_ScrollText.prototype.startMessage = function() {
  this._text = $gameMessage.allText(), this.refresh(), this.show();
};
Window_ScrollText.prototype.refresh = function() {
  var t = { index: 0 };
  t.text = this.convertEscapeCharacters(this._text), this.resetFontSettings(), this._allTextHeight = this.calcTextHeight(t, !0), this.createContents(), this.origin.y = -this.height, this.drawTextEx(this._text, this.textPadding(), 1);
};
Window_ScrollText.prototype.contentsHeight = function() {
  return Math.max(this._allTextHeight, 1);
};
Window_ScrollText.prototype.updateMessage = function() {
  this.origin.y += this.scrollSpeed(), this.origin.y >= this.contents.height && this.terminateMessage();
};
Window_ScrollText.prototype.scrollSpeed = function() {
  var t = $gameMessage.scrollSpeed() / 2;
  return this.isFastForward() && (t *= this.fastForwardRate()), t;
};
Window_ScrollText.prototype.isFastForward = function() {
  return $gameMessage.scrollNoFast() ? !1 : Input.isPressed("ok") || Input.isPressed("shift") || TouchInput.isPressed();
};
Window_ScrollText.prototype.fastForwardRate = function() {
  return 3;
};
Window_ScrollText.prototype.terminateMessage = function() {
  this._text = null, $gameMessage.clear(), this.hide();
};
function Window_MapName() {
  this.initialize.apply(this, arguments);
}
Window_MapName.prototype = Object.create(Window_Base.prototype);
Window_MapName.prototype.constructor = Window_MapName;
Window_MapName.prototype.initialize = function() {
  var t = this.windowWidth(), e = this.windowHeight();
  Window_Base.prototype.initialize.call(this, 0, 0, t, e), this.opacity = 0, this.contentsOpacity = 0, this._showCount = 0, this.refresh();
};
Window_MapName.prototype.windowWidth = function() {
  return 360;
};
Window_MapName.prototype.windowHeight = function() {
  return this.fittingHeight(1);
};
Window_MapName.prototype.update = function() {
  Window_Base.prototype.update.call(this), this._showCount > 0 && $gameMap.isNameDisplayEnabled() ? (this.updateFadeIn(), this._showCount--) : this.updateFadeOut();
};
Window_MapName.prototype.updateFadeIn = function() {
  this.contentsOpacity += 16;
};
Window_MapName.prototype.updateFadeOut = function() {
  this.contentsOpacity -= 16;
};
Window_MapName.prototype.open = function() {
  this.refresh(), this._showCount = 150;
};
Window_MapName.prototype.close = function() {
  this._showCount = 0;
};
Window_MapName.prototype.refresh = function() {
  if (this.contents.clear(), $gameMap.displayName()) {
    var t = this.contentsWidth();
    this.drawBackground(0, 0, t, this.lineHeight()), this.drawText($gameMap.displayName(), 0, 0, t, "center");
  }
};
Window_MapName.prototype.drawBackground = function(t, e, r, s) {
  var o = this.dimColor1(), h = this.dimColor2();
  this.contents.gradientFillRect(t, e, r / 2, s, h, o), this.contents.gradientFillRect(t + r / 2, e, r / 2, s, o, h);
};
function Window_BattleLog() {
  this.initialize.apply(this, arguments);
}
Window_BattleLog.prototype = Object.create(Window_Selectable.prototype);
Window_BattleLog.prototype.constructor = Window_BattleLog;
Window_BattleLog.prototype.initialize = function() {
  var t = this.windowWidth(), e = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, 500, 538, t, e), this.opacity = 0, this._lines = [], this._methods = [], this._waitCount = 0, this._waitMode = "", this._baseLineStack = [], this._spriteset = null, this.createBackBitmap(), this.createBackSprite(), this.refresh();
};
Window_BattleLog.prototype.setSpriteset = function(t) {
  this._spriteset = t;
};
Window_BattleLog.prototype.windowWidth = function() {
  return Graphics.boxWidth;
};
Window_BattleLog.prototype.windowHeight = function() {
  return this.fittingHeight(this.maxLines());
};
Window_BattleLog.prototype.maxLines = function() {
  return 10;
};
Window_BattleLog.prototype.createBackBitmap = function() {
  this._backBitmap = new Bitmap(this.width, this.height);
};
Window_BattleLog.prototype.createBackSprite = function() {
  this._backSprite = new Sprite(), this._backSprite.bitmap = this._backBitmap, this._backSprite.y = this.y, this.addChildToBack(this._backSprite);
};
Window_BattleLog.prototype.numLines = function() {
  return this._lines.length;
};
Window_BattleLog.prototype.messageSpeed = function() {
  return 16;
};
Window_BattleLog.prototype.isBusy = function() {
  return this._waitCount > 0 || this._waitMode || this._methods.length > 0;
};
Window_BattleLog.prototype.update = function() {
  this.updateWait() || this.callNextMethod();
};
Window_BattleLog.prototype.updateWait = function() {
  return this.updateWaitCount() || this.updateWaitMode();
};
Window_BattleLog.prototype.updateWaitCount = function() {
  return this._waitCount > 0 ? (this._waitCount -= this.isFastForward() ? 3 : 1, this._waitCount < 0 && (this._waitCount = 0), !0) : !1;
};
Window_BattleLog.prototype.updateWaitMode = function() {
  var t = !1;
  switch (this._waitMode) {
    case "effect":
      t = this._spriteset.isEffecting();
      break;
    case "movement":
      t = this._spriteset.isAnyoneMoving();
      break;
  }
  return t || (this._waitMode = ""), t;
};
Window_BattleLog.prototype.setWaitMode = function(t) {
  this._waitMode = t;
};
Window_BattleLog.prototype.callNextMethod = function() {
  if (this._methods.length > 0) {
    var t = this._methods.shift();
    if (t.name && this[t.name])
      this[t.name].apply(this, t.params);
    else
      throw new Error("Method not found: " + t.name);
  }
};
Window_BattleLog.prototype.isFastForward = function() {
  return Input.isLongPressed("ok") || Input.isPressed("shift") || TouchInput.isLongPressed();
};
Window_BattleLog.prototype.push = function(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  this._methods.push({ name: t, params: e });
};
Window_BattleLog.prototype.clear = function() {
  this._lines = [], this._baseLineStack = [], this.refresh();
};
Window_BattleLog.prototype.wait = function() {
  this._waitCount = this.messageSpeed();
};
Window_BattleLog.prototype.waitForEffect = function() {
  this.setWaitMode("effect");
};
Window_BattleLog.prototype.waitForMovement = function() {
  this.setWaitMode("movement");
};
Window_BattleLog.prototype.addText = function(t) {
  this._lines.push(t), this.refresh(), this.wait();
};
Window_BattleLog.prototype.pushBaseLine = function() {
  this._baseLineStack.push(this._lines.length);
};
Window_BattleLog.prototype.popBaseLine = function() {
  for (var t = this._baseLineStack.pop(); this._lines.length > t; )
    this._lines.pop();
};
Window_BattleLog.prototype.waitForNewLine = function() {
  var t = 0;
  this._baseLineStack.length > 0 && (t = this._baseLineStack[this._baseLineStack.length - 1]), this._lines.length > t && this.wait();
};
Window_BattleLog.prototype.popupDamage = function(t) {
  t.startDamagePopup();
};
Window_BattleLog.prototype.performActionStart = function(t, e) {
  t.performActionStart(e);
};
Window_BattleLog.prototype.performAction = function(t, e) {
  t.performAction(e);
};
Window_BattleLog.prototype.performActionEnd = function(t) {
  t.performActionEnd();
};
Window_BattleLog.prototype.performDamage = function(t) {
  t.performDamage();
};
Window_BattleLog.prototype.performMiss = function(t) {
  t.performMiss();
};
Window_BattleLog.prototype.performRecovery = function(t) {
  t.performRecovery();
};
Window_BattleLog.prototype.performEvasion = function(t) {
  t.performEvasion();
};
Window_BattleLog.prototype.performMagicEvasion = function(t) {
  t.performMagicEvasion();
};
Window_BattleLog.prototype.performCounter = function(t) {
  t.performCounter();
};
Window_BattleLog.prototype.performReflection = function(t) {
  t.performReflection();
};
Window_BattleLog.prototype.performSubstitute = function(t, e) {
  t.performSubstitute(e);
};
Window_BattleLog.prototype.performCollapse = function(t) {
  t.performCollapse();
};
Window_BattleLog.prototype.showAnimation = function(t, e, r) {
  r < 0 ? this.showAttackAnimation(t, e) : this.showNormalAnimation(e, r);
};
Window_BattleLog.prototype.showAttackAnimation = function(t, e) {
  t.isActor() ? this.showActorAttackAnimation(t, e) : this.showEnemyAttackAnimation(t, e);
};
Window_BattleLog.prototype.showActorAttackAnimation = function(t, e) {
  this.showNormalAnimation(e, t.attackAnimationId1(), !1), this.showNormalAnimation(e, t.attackAnimationId2(), !0);
};
Window_BattleLog.prototype.showEnemyAttackAnimation = function(t, e) {
  SoundManager.playEnemyAttack();
};
Window_BattleLog.prototype.showNormalAnimation = function(t, e, r) {
  var s = $dataAnimations[e];
  if (s) {
    var o = this.animationBaseDelay(), h = this.animationNextDelay();
    t.forEach(function(p) {
      p.startAnimation(e, r, o), o += h;
    });
  }
};
Window_BattleLog.prototype.animationBaseDelay = function() {
  return 8;
};
Window_BattleLog.prototype.animationNextDelay = function() {
  return 12;
};
Window_BattleLog.prototype.refresh = function() {
  this.drawBackground(), this.contents.clear();
  for (var t = 0; t < this._lines.length; t++)
    this.drawLineText(t);
};
Window_BattleLog.prototype.drawBackground = function() {
  var t = this.backRect(), e = this.backColor();
  this._backBitmap.clear(), this._backBitmap.paintOpacity = this.backPaintOpacity(), this._backBitmap.fillRect(t.x, t.y, t.width, t.height, e), this._backBitmap.paintOpacity = 255;
};
Window_BattleLog.prototype.backRect = function() {
  return {
    x: 0,
    y: this.padding,
    width: this.width,
    height: this.numLines() * this.lineHeight()
  };
};
Window_BattleLog.prototype.backColor = function() {
  return "#000000";
};
Window_BattleLog.prototype.backPaintOpacity = function() {
  return 64;
};
Window_BattleLog.prototype.drawLineText = function(t) {
  var e = this.itemRectForText(t);
  this.contents.clearRect(e.x, e.y, e.width, e.height), this.drawTextEx(this._lines[t], e.x, e.y, e.width);
};
Window_BattleLog.prototype.startTurn = function() {
  this.push("wait");
};
Window_BattleLog.prototype.startAction = function(t, e, r) {
  var s = e.item();
  this.push("performActionStart", t, e), this.push("waitForMovement"), this.push("performAction", t, e), this.push("showAnimation", t, r.clone(), s.animationId), this.displayAction(t, s);
};
Window_BattleLog.prototype.endAction = function(t) {
  this.push("waitForNewLine"), this.push("clear"), this.push("performActionEnd", t);
};
Window_BattleLog.prototype.displayCurrentState = function(t) {
  var e = t.mostImportantStateText();
  e && (this.push("addText", t.name() + e), this.push("wait"), this.push("clear"));
};
Window_BattleLog.prototype.displayRegeneration = function(t) {
  this.push("popupDamage", t);
};
Window_BattleLog.prototype.displayAction = function(t, e) {
  var r = this._methods.length;
  DataManager.isSkill(e) ? (e.message1 && this.push("addText", t.name() + e.message1.format(e.name)), e.message2 && this.push("addText", e.message2.format(e.name))) : this.push("addText", TextManager.useItem.format(t.name(), e.name)), this._methods.length === r && this.push("wait");
};
Window_BattleLog.prototype.displayCounter = function(t) {
  this.push("performCounter", t), this.push("addText", TextManager.counterAttack.format(t.name()));
};
Window_BattleLog.prototype.displayReflection = function(t) {
  this.push("performReflection", t), this.push("addText", TextManager.magicReflection.format(t.name()));
};
Window_BattleLog.prototype.displaySubstitute = function(t, e) {
  var r = t.name();
  this.push("performSubstitute", t, e), this.push("addText", TextManager.substitute.format(r, e.name()));
};
Window_BattleLog.prototype.displayActionResults = function(t, e) {
  e.result().used && (this.push("pushBaseLine"), this.displayCritical(e), this.push("popupDamage", e), this.push("popupDamage", t), this.displayDamage(e), this.displayAffectedStatus(e), this.displayFailure(e), this.push("waitForNewLine"), this.push("popBaseLine"));
};
Window_BattleLog.prototype.displayFailure = function(t) {
  t.result().isHit() && !t.result().success && this.push("addText", TextManager.actionFailure.format(t.name()));
};
Window_BattleLog.prototype.displayCritical = function(t) {
  t.result().critical && (t.isActor() ? this.push("addText", TextManager.criticalToActor) : this.push("addText", TextManager.criticalToEnemy));
};
Window_BattleLog.prototype.displayDamage = function(t) {
  t.result().missed ? this.displayMiss(t) : t.result().evaded ? this.displayEvasion(t) : (this.displayHpDamage(t), this.displayMpDamage(t), this.displayTpDamage(t));
};
Window_BattleLog.prototype.displayMiss = function(t) {
  var e;
  t.result().physical ? (e = t.isActor() ? TextManager.actorNoHit : TextManager.enemyNoHit, this.push("performMiss", t)) : e = TextManager.actionFailure, this.push("addText", e.format(t.name()));
};
Window_BattleLog.prototype.displayEvasion = function(t) {
  var e;
  t.result().physical ? (e = TextManager.evasion, this.push("performEvasion", t)) : (e = TextManager.magicEvasion, this.push("performMagicEvasion", t)), this.push("addText", e.format(t.name()));
};
Window_BattleLog.prototype.displayHpDamage = function(t) {
  t.result().hpAffected && (t.result().hpDamage > 0 && !t.result().drain && this.push("performDamage", t), t.result().hpDamage < 0 && this.push("performRecovery", t), this.push("addText", this.makeHpDamageText(t)));
};
Window_BattleLog.prototype.displayMpDamage = function(t) {
  t.isAlive() && t.result().mpDamage !== 0 && (t.result().mpDamage < 0 && this.push("performRecovery", t), this.push("addText", this.makeMpDamageText(t)));
};
Window_BattleLog.prototype.displayTpDamage = function(t) {
  t.isAlive() && t.result().tpDamage !== 0 && (t.result().tpDamage < 0 && this.push("performDamage", t), t.result().tpDamage > 0 && this.push("performRecovery", t), this.push("addText", this.makeTpDamageText(t)));
};
Window_BattleLog.prototype.displayAffectedStatus = function(t) {
  t.result().isStatusAffected() && (this.push("pushBaseLine"), this.displayChangedStates(t), this.displayChangedBuffs(t), this.push("waitForNewLine"), this.push("popBaseLine"));
};
Window_BattleLog.prototype.displayAutoAffectedStatus = function(t) {
  t.result().isStatusAffected() && (this.displayAffectedStatus(t, null), this.push("clear"));
};
Window_BattleLog.prototype.displayChangedStates = function(t) {
  this.displayAddedStates(t), this.displayRemovedStates(t);
};
Window_BattleLog.prototype.displayAddedStates = function(t) {
  t.result().addedStateObjects().forEach(function(e) {
    var r = t.isActor() ? e.message1 : e.message2;
    e.id === t.deathStateId() && this.push("performCollapse", t), r && (this.push("popBaseLine"), this.push("pushBaseLine"), this.push("addText", t.name() + r), this.push("waitForEffect"));
  }, this);
};
Window_BattleLog.prototype.displayRemovedStates = function(t) {
  t.result().removedStateObjects().forEach(function(e) {
    e.message4 && (this.push("popBaseLine"), this.push("pushBaseLine"), this.push("addText", t.name() + e.message4));
  }, this);
};
Window_BattleLog.prototype.displayChangedBuffs = function(t) {
  var e = t.result();
  this.displayBuffs(t, e.addedBuffs, TextManager.buffAdd), this.displayBuffs(t, e.addedDebuffs, TextManager.debuffAdd), this.displayBuffs(t, e.removedBuffs, TextManager.buffRemove);
};
Window_BattleLog.prototype.displayBuffs = function(t, e, r) {
  e.forEach(function(s) {
    this.push("popBaseLine"), this.push("pushBaseLine"), this.push("addText", r.format(t.name(), TextManager.param(s)));
  }, this);
};
Window_BattleLog.prototype.makeHpDamageText = function(t) {
  var e = t.result(), r = e.hpDamage, s = t.isActor(), o;
  return r > 0 && e.drain ? (o = s ? TextManager.actorDrain : TextManager.enemyDrain, o.format(t.name(), TextManager.hp, r)) : r > 0 ? (o = s ? TextManager.actorDamage : TextManager.enemyDamage, o.format(t.name(), r)) : r < 0 ? (o = s ? TextManager.actorRecovery : TextManager.enemyRecovery, o.format(t.name(), TextManager.hp, -r)) : (o = s ? TextManager.actorNoDamage : TextManager.enemyNoDamage, o.format(t.name()));
};
Window_BattleLog.prototype.makeMpDamageText = function(t) {
  var e = t.result(), r = e.mpDamage, s = t.isActor(), o;
  return r > 0 && e.drain ? (o = s ? TextManager.actorDrain : TextManager.enemyDrain, o.format(t.name(), TextManager.mp, r)) : r > 0 ? (o = s ? TextManager.actorLoss : TextManager.enemyLoss, o.format(t.name(), TextManager.mp, r)) : r < 0 ? (o = s ? TextManager.actorRecovery : TextManager.enemyRecovery, o.format(t.name(), TextManager.mp, -r)) : "";
};
Window_BattleLog.prototype.makeTpDamageText = function(t) {
  var e = t.result(), r = e.tpDamage, s = t.isActor(), o;
  return r > 0 ? (o = s ? TextManager.actorLoss : TextManager.enemyLoss, o.format(t.name(), TextManager.tp, r)) : r < 0 ? (o = s ? TextManager.actorGain : TextManager.enemyGain, o.format(t.name(), TextManager.tp, -r)) : "";
};
function Window_PartyCommand() {
  this.initialize.apply(this, arguments);
}
Window_PartyCommand.prototype = Object.create(Window_Command.prototype);
Window_PartyCommand.prototype.constructor = Window_PartyCommand;
Window_PartyCommand.prototype.initialize = function() {
  var t = Graphics.boxHeight - this.windowHeight();
  Window_Command.prototype.initialize.call(this, 0, t), this.openness = 0, this.deactivate();
};
Window_PartyCommand.prototype.windowWidth = function() {
  return 192;
};
Window_PartyCommand.prototype.numVisibleRows = function() {
  return 4;
};
Window_PartyCommand.prototype.makeCommandList = function() {
  this.addCommand(TextManager.fight, "fight"), this.addCommand(TextManager.escape, "escape", BattleManager.canEscape());
};
Window_PartyCommand.prototype.setup = function() {
  this.clearCommandList(), this.makeCommandList(), this.refresh(), this.select(0), this.activate(), this.open();
};
function Window_ActorCommand() {
  this.initialize.apply(this, arguments);
}
Window_ActorCommand.prototype = Object.create(Window_Command.prototype);
Window_ActorCommand.prototype.constructor = Window_ActorCommand;
Window_ActorCommand.prototype.initialize = function() {
  var t = Graphics.boxHeight - this.windowHeight();
  Window_Command.prototype.initialize.call(this, 0, t), this.openness = 0, this.deactivate(), this._actor = null;
};
Window_ActorCommand.prototype.windowWidth = function() {
  return 192;
};
Window_ActorCommand.prototype.numVisibleRows = function() {
  return 4;
};
Window_ActorCommand.prototype.makeCommandList = function() {
  this._actor && (this.addAttackCommand(), this.addSkillCommands(), this.addGuardCommand(), this.addItemCommand());
};
Window_ActorCommand.prototype.addAttackCommand = function() {
  this.addCommand(TextManager.attack, "attack", this._actor.canAttack());
};
Window_ActorCommand.prototype.addSkillCommands = function() {
  var t = this._actor.addedSkillTypes();
  t.sort(function(e, r) {
    return e - r;
  }), t.forEach(function(e) {
    var r = $dataSystem.skillTypes[e];
    this.addCommand(r, "skill", !0, e);
  }, this);
};
Window_ActorCommand.prototype.addGuardCommand = function() {
  this.addCommand(TextManager.guard, "guard", this._actor.canGuard());
};
Window_ActorCommand.prototype.addItemCommand = function() {
  this.addCommand(TextManager.item, "item");
};
Window_ActorCommand.prototype.setup = function(t) {
  this._actor = t, this.clearCommandList(), this.makeCommandList(), this.refresh(), this.selectLast(), this.activate(), this.open();
};
Window_ActorCommand.prototype.processOk = function() {
  this._actor && (ConfigManager.commandRemember ? this._actor.setLastCommandSymbol(this.currentSymbol()) : this._actor.setLastCommandSymbol("")), Window_Command.prototype.processOk.call(this);
};
Window_ActorCommand.prototype.selectLast = function() {
  if (this.select(0), this._actor && ConfigManager.commandRemember) {
    var t = this._actor.lastCommandSymbol();
    if (this.selectSymbol(t), t === "skill") {
      var e = this._actor.lastBattleSkill();
      e && this.selectExt(e.stypeId);
    }
  }
};
function Window_BattleStatus() {
  this.initialize.apply(this, arguments);
}
Window_BattleStatus.prototype = Object.create(Window_Selectable.prototype);
Window_BattleStatus.prototype.constructor = Window_BattleStatus;
Window_BattleStatus.prototype.initialize = function() {
  var t = this.windowWidth(), e = this.windowHeight(), r = Graphics.boxWidth - t, s = Graphics.boxHeight - e;
  Window_Selectable.prototype.initialize.call(this, r, s, t, e), this.refresh(), this.openness = 0;
};
Window_BattleStatus.prototype.windowWidth = function() {
  return Graphics.boxWidth - 192;
};
Window_BattleStatus.prototype.windowHeight = function() {
  return this.fittingHeight(this.numVisibleRows());
};
Window_BattleStatus.prototype.numVisibleRows = function() {
  return 4;
};
Window_BattleStatus.prototype.maxItems = function() {
  return $gameParty.battleMembers().length;
};
Window_BattleStatus.prototype.refresh = function() {
  this.contents.clear(), this.drawAllItems();
};
Window_BattleStatus.prototype.drawItem = function(t) {
  var e = $gameParty.battleMembers()[t];
  this.drawBasicArea(this.basicAreaRect(t), e), this.drawGaugeArea(this.gaugeAreaRect(t), e);
};
Window_BattleStatus.prototype.basicAreaRect = function(t) {
  var e = this.itemRectForText(t);
  return e.width -= this.gaugeAreaWidth() + 15, e;
};
Window_BattleStatus.prototype.gaugeAreaRect = function(t) {
  var e = this.itemRectForText(t);
  return e.x += e.width - this.gaugeAreaWidth(), e.width = this.gaugeAreaWidth(), e;
};
Window_BattleStatus.prototype.gaugeAreaWidth = function() {
  return 330;
};
Window_BattleStatus.prototype.drawBasicArea = function(t, e) {
  this.drawActorName(e, t.x + 0, t.y, 150), this.drawActorIcons(e, t.x + 156, t.y, t.width - 156);
};
Window_BattleStatus.prototype.drawGaugeArea = function(t, e) {
  $dataSystem.optDisplayTp ? this.drawGaugeAreaWithTp(t, e) : this.drawGaugeAreaWithoutTp(t, e);
};
Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(t, e) {
  this.drawActorHp(e, t.x + 0, t.y, 108), this.drawActorMp(e, t.x + 123, t.y, 96), this.drawActorTp(e, t.x + 234, t.y, 96);
};
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(t, e) {
  this.drawActorHp(e, t.x + 0, t.y, 201), this.drawActorMp(e, t.x + 216, t.y, 114);
};
function Window_BattleActor() {
  this.initialize.apply(this, arguments);
}
Window_BattleActor.prototype = Object.create(Window_BattleStatus.prototype);
Window_BattleActor.prototype.constructor = Window_BattleActor;
Window_BattleActor.prototype.initialize = function(t, e) {
  Window_BattleStatus.prototype.initialize.call(this), this.x = t, this.y = e, this.openness = 255, this.hide();
};
Window_BattleActor.prototype.show = function() {
  this.select(0), Window_BattleStatus.prototype.show.call(this);
};
Window_BattleActor.prototype.hide = function() {
  Window_BattleStatus.prototype.hide.call(this), $gameParty.select(null);
};
Window_BattleActor.prototype.select = function(t) {
  Window_BattleStatus.prototype.select.call(this, t), $gameParty.select(this.actor());
};
Window_BattleActor.prototype.actor = function() {
  return $gameParty.members()[this.index()];
};
function Window_BattleEnemy() {
  this.initialize.apply(this, arguments);
}
Window_BattleEnemy.prototype = Object.create(Window_Selectable.prototype);
Window_BattleEnemy.prototype.constructor = Window_BattleEnemy;
Window_BattleEnemy.prototype.initialize = function(t, e) {
  this._enemies = [];
  var r = this.windowWidth(), s = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this.refresh(), this.hide();
};
Window_BattleEnemy.prototype.windowWidth = function() {
  return Graphics.boxWidth - 192;
};
Window_BattleEnemy.prototype.windowHeight = function() {
  return this.fittingHeight(this.numVisibleRows());
};
Window_BattleEnemy.prototype.numVisibleRows = function() {
  return 4;
};
Window_BattleEnemy.prototype.maxCols = function() {
  return 2;
};
Window_BattleEnemy.prototype.maxItems = function() {
  return this._enemies.length;
};
Window_BattleEnemy.prototype.enemy = function() {
  return this._enemies[this.index()];
};
Window_BattleEnemy.prototype.enemyIndex = function() {
  var t = this.enemy();
  return t ? t.index() : -1;
};
Window_BattleEnemy.prototype.drawItem = function(t) {
  this.resetTextColor();
  var e = this._enemies[t].name(), r = this.itemRectForText(t);
  this.drawText(e, r.x, r.y, r.width);
};
Window_BattleEnemy.prototype.show = function() {
  this.refresh(), this.select(0), Window_Selectable.prototype.show.call(this);
};
Window_BattleEnemy.prototype.hide = function() {
  Window_Selectable.prototype.hide.call(this), $gameTroop.select(null);
};
Window_BattleEnemy.prototype.refresh = function() {
  this._enemies = $gameTroop.aliveMembers(), Window_Selectable.prototype.refresh.call(this);
};
Window_BattleEnemy.prototype.select = function(t) {
  Window_Selectable.prototype.select.call(this, t), $gameTroop.select(this.enemy());
};
function Window_BattleSkill() {
  this.initialize.apply(this, arguments);
}
Window_BattleSkill.prototype = Object.create(Window_SkillList.prototype);
Window_BattleSkill.prototype.constructor = Window_BattleSkill;
Window_BattleSkill.prototype.initialize = function(t, e, r, s) {
  Window_SkillList.prototype.initialize.call(this, t, e, r, s), this.hide();
};
Window_BattleSkill.prototype.show = function() {
  this.selectLast(), this.showHelpWindow(), Window_SkillList.prototype.show.call(this);
};
Window_BattleSkill.prototype.hide = function() {
  this.hideHelpWindow(), Window_SkillList.prototype.hide.call(this);
};
function Window_BattleItem() {
  this.initialize.apply(this, arguments);
}
Window_BattleItem.prototype = Object.create(Window_ItemList.prototype);
Window_BattleItem.prototype.constructor = Window_BattleItem;
Window_BattleItem.prototype.initialize = function(t, e, r, s) {
  Window_ItemList.prototype.initialize.call(this, t, e, r, s), this.hide();
};
Window_BattleItem.prototype.includes = function(t) {
  return $gameParty.canUse(t);
};
Window_BattleItem.prototype.show = function() {
  this.selectLast(), this.showHelpWindow(), Window_ItemList.prototype.show.call(this);
};
Window_BattleItem.prototype.hide = function() {
  this.hideHelpWindow(), Window_ItemList.prototype.hide.call(this);
};
function Window_TitleCommand() {
  this.initialize.apply(this, arguments);
}
Window_TitleCommand.prototype = Object.create(Window_Command.prototype);
Window_TitleCommand.prototype.constructor = Window_TitleCommand;
Window_TitleCommand.prototype.initialize = function() {
  Window_Command.prototype.initialize.call(this, 0, 0), this.updatePlacement(), this.openness = 0, this.selectLast();
};
Window_TitleCommand._lastCommandSymbol = null;
Window_TitleCommand.initCommandPosition = function() {
  this._lastCommandSymbol = null;
};
Window_TitleCommand.prototype.windowWidth = function() {
  return 240;
};
Window_TitleCommand.prototype.updatePlacement = function() {
  this.x = (Graphics.boxWidth - this.width) / 2, this.y = Graphics.boxHeight - this.height - 96;
};
Window_TitleCommand.prototype.makeCommandList = function() {
  this.addCommand(TextManager.newGame, "newGame"), this.addCommand(TextManager.continue_, "continue", this.isContinueEnabled()), this.addCommand(TextManager.options, "options");
};
Window_TitleCommand.prototype.isContinueEnabled = function() {
  return DataManager.isAnySavefileExists();
};
Window_TitleCommand.prototype.processOk = function() {
  Window_TitleCommand._lastCommandSymbol = this.currentSymbol(), Window_Command.prototype.processOk.call(this);
};
Window_TitleCommand.prototype.selectLast = function() {
  Window_TitleCommand._lastCommandSymbol ? this.selectSymbol(Window_TitleCommand._lastCommandSymbol) : this.isContinueEnabled() && this.selectSymbol("continue");
};
function Window_GameEnd() {
  this.initialize.apply(this, arguments);
}
Window_GameEnd.prototype = Object.create(Window_Command.prototype);
Window_GameEnd.prototype.constructor = Window_GameEnd;
Window_GameEnd.prototype.initialize = function() {
  Window_Command.prototype.initialize.call(this, 0, 0), this.updatePlacement(), this.openness = 0, this.open();
};
Window_GameEnd.prototype.windowWidth = function() {
  return 240;
};
Window_GameEnd.prototype.updatePlacement = function() {
  this.x = (Graphics.boxWidth - this.width) / 2, this.y = (Graphics.boxHeight - this.height) / 2;
};
Window_GameEnd.prototype.makeCommandList = function() {
  this.addCommand(TextManager.toTitle, "toTitle"), this.addCommand(TextManager.cancel, "cancel");
};
function Window_DebugRange() {
  this.initialize.apply(this, arguments);
}
Window_DebugRange.prototype = Object.create(Window_Selectable.prototype);
Window_DebugRange.prototype.constructor = Window_DebugRange;
Window_DebugRange.lastTopRow = 0;
Window_DebugRange.lastIndex = 0;
Window_DebugRange.prototype.initialize = function(t, e) {
  this._maxSwitches = Math.ceil(($dataSystem.switches.length - 1) / 10), this._maxVariables = Math.ceil(($dataSystem.variables.length - 1) / 10);
  var r = this.windowWidth(), s = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this.refresh(), this.setTopRow(Window_DebugRange.lastTopRow), this.select(Window_DebugRange.lastIndex), this.activate();
};
Window_DebugRange.prototype.windowWidth = function() {
  return 246;
};
Window_DebugRange.prototype.windowHeight = function() {
  return Graphics.boxHeight;
};
Window_DebugRange.prototype.maxItems = function() {
  return this._maxSwitches + this._maxVariables;
};
Window_DebugRange.prototype.update = function() {
  Window_Selectable.prototype.update.call(this), this._editWindow && (this._editWindow.setMode(this.mode()), this._editWindow.setTopId(this.topId()));
};
Window_DebugRange.prototype.mode = function() {
  return this.index() < this._maxSwitches ? "switch" : "variable";
};
Window_DebugRange.prototype.topId = function() {
  var t = this.index();
  return t < this._maxSwitches ? t * 10 + 1 : (t - this._maxSwitches) * 10 + 1;
};
Window_DebugRange.prototype.refresh = function() {
  this.createContents(), this.drawAllItems();
};
Window_DebugRange.prototype.drawItem = function(t) {
  var e = this.itemRectForText(t), r, s;
  t < this._maxSwitches ? (r = t * 10 + 1, s = "S") : (r = (t - this._maxSwitches) * 10 + 1, s = "V");
  var o = r + 9;
  s += " [" + r.padZero(4) + "-" + o.padZero(4) + "]", this.drawText(s, e.x, e.y, e.width);
};
Window_DebugRange.prototype.isCancelTriggered = function() {
  return Window_Selectable.prototype.isCancelTriggered() || Input.isTriggered("debug");
};
Window_DebugRange.prototype.processCancel = function() {
  Window_Selectable.prototype.processCancel.call(this), Window_DebugRange.lastTopRow = this.topRow(), Window_DebugRange.lastIndex = this.index();
};
Window_DebugRange.prototype.setEditWindow = function(t) {
  this._editWindow = t;
};
function Window_DebugEdit() {
  this.initialize.apply(this, arguments);
}
Window_DebugEdit.prototype = Object.create(Window_Selectable.prototype);
Window_DebugEdit.prototype.constructor = Window_DebugEdit;
Window_DebugEdit.prototype.initialize = function(t, e, r) {
  var s = this.fittingHeight(10);
  Window_Selectable.prototype.initialize.call(this, t, e, r, s), this._mode = "switch", this._topId = 1, this.refresh();
};
Window_DebugEdit.prototype.maxItems = function() {
  return 10;
};
Window_DebugEdit.prototype.refresh = function() {
  this.contents.clear(), this.drawAllItems();
};
Window_DebugEdit.prototype.drawItem = function(t) {
  var e = this._topId + t, r = e.padZero(4) + ":", s = this.textWidth(r), o = this.textWidth("-00000000"), h = this.itemName(e), p = this.itemStatus(e), c = this.itemRectForText(t);
  this.resetTextColor(), this.drawText(r, c.x, c.y, c.width), c.x += s, c.width -= s + o, this.drawText(h, c.x, c.y, c.width), this.drawText(p, c.x + c.width, c.y, o, "right");
};
Window_DebugEdit.prototype.itemName = function(t) {
  return this._mode === "switch" ? $dataSystem.switches[t] : $dataSystem.variables[t];
};
Window_DebugEdit.prototype.itemStatus = function(t) {
  return this._mode === "switch" ? $gameSwitches.value(t) ? "[ON]" : "[OFF]" : String($gameVariables.value(t));
};
Window_DebugEdit.prototype.setMode = function(t) {
  this._mode !== t && (this._mode = t, this.refresh());
};
Window_DebugEdit.prototype.setTopId = function(t) {
  this._topId !== t && (this._topId = t, this.refresh());
};
Window_DebugEdit.prototype.currentId = function() {
  return this._topId + this.index();
};
Window_DebugEdit.prototype.update = function() {
  Window_Selectable.prototype.update.call(this), this.active && (this._mode === "switch" ? this.updateSwitch() : this.updateVariable());
};
Window_DebugEdit.prototype.updateSwitch = function() {
  if (Input.isRepeated("ok")) {
    var t = this.currentId();
    SoundManager.playCursor(), $gameSwitches.setValue(t, !$gameSwitches.value(t)), this.redrawCurrentItem();
  }
};
Window_DebugEdit.prototype.updateVariable = function() {
  var t = this.currentId(), e = $gameVariables.value(t);
  typeof e == "number" && (Input.isRepeated("right") && e++, Input.isRepeated("left") && e--, Input.isRepeated("pagedown") && (e += 10), Input.isRepeated("pageup") && (e -= 10), $gameVariables.value(t) !== e && ($gameVariables.setValue(t, e), SoundManager.playCursor(), this.redrawCurrentItem()));
};
Game_Interpreter = function() {
  this.initialize.apply(this, arguments);
};
Game_Interpreter.prototype.initialize = function(t) {
  this._depth = t || 0, this.checkOverflow(), this.clear(), this._branch = {}, this._params = [], this._indent = 0, this._frameCount = 0, this._freezeChecker = 0;
};
Game_Interpreter.prototype.checkOverflow = function() {
  if (this._depth >= 100)
    throw new Error("Common event calls exceeded the limit");
};
Game_Interpreter.prototype.clear = function() {
  this._mapId = 0, this._eventId = 0, this._list = null, this._index = 0, this._waitCount = 0, this._waitMode = "", this._comments = "", this._character = null, this._childInterpreter = null;
};
Game_Interpreter.prototype.setup = function(t, e) {
  this.clear(), this._mapId = $gameMap.mapId(), this._eventId = e || 0, this._list = t, Game_Interpreter.requestImages(t);
};
Game_Interpreter.prototype.eventId = function() {
  return this._eventId;
};
Game_Interpreter.prototype.isOnCurrentMap = function() {
  return this._mapId === $gameMap.mapId();
};
Game_Interpreter.prototype.setupReservedCommonEvent = function() {
  return $gameTemp.isCommonEventReserved() ? (this.setup($gameTemp.reservedCommonEvent().list), $gameTemp.clearCommonEvent(), !0) : !1;
};
Game_Interpreter.prototype.isRunning = function() {
  return !!this._list;
};
Game_Interpreter.prototype.update = function() {
  for (; this.isRunning() && !(this.updateChild() || this.updateWait() || SceneManager.isSceneChanging() || !this.executeCommand() || this.checkFreeze()); )
    ;
};
Game_Interpreter.prototype.updateChild = function() {
  if (this._childInterpreter) {
    if (this._childInterpreter.update(), this._childInterpreter.isRunning())
      return !0;
    this._childInterpreter = null;
  }
  return !1;
};
Game_Interpreter.prototype.updateWait = function() {
  return this.updateWaitCount() || this.updateWaitMode();
};
Game_Interpreter.prototype.updateWaitCount = function() {
  return this._waitCount > 0 ? (this._waitCount--, !0) : !1;
};
Game_Interpreter.prototype.updateWaitMode = function() {
  var t = !1;
  switch (this._waitMode) {
    case "message":
      t = $gameMessage.isBusy();
      break;
    case "transfer":
      t = $gamePlayer.isTransferring();
      break;
    case "scroll":
      t = $gameMap.isScrolling();
      break;
    case "route":
      t = this._character.isMoveRouteForcing();
      break;
    case "animation":
      t = this._character.isAnimationPlaying();
      break;
    case "balloon":
      t = this._character.isBalloonPlaying();
      break;
    case "gather":
      t = $gamePlayer.areFollowersGathering();
      break;
    case "action":
      t = BattleManager.isActionForced();
      break;
    case "video":
      t = Graphics.isVideoPlaying();
      break;
    case "image":
      t = !ImageManager.isReady();
      break;
  }
  return t || (this._waitMode = ""), t;
};
Game_Interpreter.prototype.setWaitMode = function(t) {
  this._waitMode = t;
};
Game_Interpreter.prototype.wait = function(t) {
  this._waitCount = t;
};
Game_Interpreter.prototype.fadeSpeed = function() {
  return 24;
};
Game_Interpreter.prototype.executeCommand = function() {
  var t = this.currentCommand();
  if (t) {
    this._params = t.parameters, this._indent = t.indent;
    var e = "command" + t.code;
    if (typeof this[e] == "function" && !this[e]())
      return !1;
    this._index++;
  } else
    this.terminate();
  return !0;
};
Game_Interpreter.prototype.checkFreeze = function() {
  return this._frameCount !== Graphics.frameCount && (this._frameCount = Graphics.frameCount, this._freezeChecker = 0), this._freezeChecker++ >= 1e5;
};
Game_Interpreter.prototype.terminate = function() {
  this._list = null, this._comments = "";
};
Game_Interpreter.prototype.skipBranch = function() {
  for (; this._list[this._index + 1].indent > this._indent; )
    this._index++;
};
Game_Interpreter.prototype.currentCommand = function() {
  return this._list[this._index];
};
Game_Interpreter.prototype.nextEventCode = function() {
  var t = this._list[this._index + 1];
  return t ? t.code : 0;
};
Game_Interpreter.prototype.iterateActorId = function(t, e) {
  if (t === 0)
    $gameParty.members().forEach(e);
  else {
    var r = $gameActors.actor(t);
    r && e(r);
  }
};
Game_Interpreter.prototype.iterateActorEx = function(t, e, r) {
  t === 0 ? this.iterateActorId(e, r) : this.iterateActorId($gameVariables.value(e), r);
};
Game_Interpreter.prototype.iterateActorIndex = function(t, e) {
  if (t < 0)
    $gameParty.members().forEach(e);
  else {
    var r = $gameParty.members()[t];
    r && e(r);
  }
};
Game_Interpreter.prototype.iterateEnemyIndex = function(t, e) {
  if (t < 0)
    $gameTroop.members().forEach(e);
  else {
    var r = $gameTroop.members()[t];
    r && e(r);
  }
};
Game_Interpreter.prototype.iterateBattler = function(t, e, r) {
  $gameParty.inBattle() && (t === 0 ? this.iterateEnemyIndex(e, r) : this.iterateActorId(e, r));
};
Game_Interpreter.prototype.character = function(t) {
  return $gameParty.inBattle() ? null : t < 0 ? $gamePlayer : this.isOnCurrentMap() ? $gameMap.event(t > 0 ? t : this._eventId) : null;
};
Game_Interpreter.prototype.operateValue = function(t, e, r) {
  var s = e === 0 ? r : $gameVariables.value(r);
  return t === 0 ? s : -s;
};
Game_Interpreter.prototype.changeHp = function(t, e, r) {
  t.isAlive() && (!r && t.hp <= -e && (e = 1 - t.hp), t.gainHp(e), t.isDead() && t.performCollapse());
};
Game_Interpreter.prototype.command101 = function() {
  if (!$gameMessage.isBusy()) {
    for ($gameMessage.setFaceImage(this._params[0], this._params[1]), $gameMessage.setBackground(this._params[2]), $gameMessage.setPositionType(this._params[3]); this.nextEventCode() === 401; )
      this._index++, $gameMessage.add(this.currentCommand().parameters[0]), console.debug(this.currentCommand().parameters[0]);
    switch (this.nextEventCode()) {
      case 102:
        this._index++, this.setupChoices(this.currentCommand().parameters), console.debug(this.currentCommand().parameters);
        break;
      case 103:
        this._index++, this.setupNumInput(this.currentCommand().parameters);
        break;
      case 104:
        this._index++, this.setupItemChoice(this.currentCommand().parameters);
        break;
    }
    this._index++, this.setWaitMode("message");
  }
  return !1;
};
Game_Interpreter.prototype.command102 = function() {
  return $gameMessage.isBusy() || (this.setupChoices(this._params), this._index++, this.setWaitMode("message")), !1;
};
Game_Interpreter.prototype.setupChoices = function(t) {
  var e = t[0].clone(), r = t[1], s = t.length > 2 ? t[2] : 0, o = t.length > 3 ? t[3] : 2, h = t.length > 4 ? t[4] : 0;
  r >= e.length && (r = -2), $gameMessage.setChoices(e, s, r), $gameMessage.setChoiceBackground(h), $gameMessage.setChoicePositionType(o), $gameMessage.setChoiceCallback((function(p) {
    this._branch[this._indent] = p;
  }).bind(this));
};
Game_Interpreter.prototype.command402 = function() {
  return this._branch[this._indent] !== this._params[0] && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command403 = function() {
  return this._branch[this._indent] >= 0 && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command103 = function() {
  return $gameMessage.isBusy() || (this.setupNumInput(this._params), this._index++, this.setWaitMode("message")), !1;
};
Game_Interpreter.prototype.setupNumInput = function(t) {
  $gameMessage.setNumberInput(t[0], t[1]);
};
Game_Interpreter.prototype.command104 = function() {
  return $gameMessage.isBusy() || (this.setupItemChoice(this._params), this._index++, this.setWaitMode("message")), !1;
};
Game_Interpreter.prototype.setupItemChoice = function(t) {
  $gameMessage.setItemChoice(t[0], t[1] || 2);
};
Game_Interpreter.prototype.command105 = function() {
  if (!$gameMessage.isBusy()) {
    for ($gameMessage.setScroll(this._params[0], this._params[1]); this.nextEventCode() === 405; )
      this._index++, $gameMessage.add(this.currentCommand().parameters[0]);
    this._index++, this.setWaitMode("message");
  }
  return !1;
};
Game_Interpreter.prototype.command108 = function() {
  for (this._comments = [this._params[0]]; this.nextEventCode() === 408; )
    this._index++, this._comments.push(this.currentCommand().parameters[0]);
  return !0;
};
Game_Interpreter.prototype.command111 = function() {
  var result = !1;
  switch (this._params[0]) {
    case 0:
      result = $gameSwitches.value(this._params[1]) === (this._params[2] === 0);
      break;
    case 1:
      var value1 = $gameVariables.value(this._params[1]), value2;
      switch (this._params[2] === 0 ? value2 = this._params[3] : value2 = $gameVariables.value(this._params[3]), this._params[4]) {
        case 0:
          result = value1 === value2;
          break;
        case 1:
          result = value1 >= value2;
          break;
        case 2:
          result = value1 <= value2;
          break;
        case 3:
          result = value1 > value2;
          break;
        case 4:
          result = value1 < value2;
          break;
        case 5:
          result = value1 !== value2;
          break;
      }
      break;
    case 2:
      if (this._eventId > 0) {
        var key = [this._mapId, this._eventId, this._params[1]];
        result = $gameSelfSwitches.value(key) === (this._params[2] === 0);
      }
      break;
    case 3:
      $gameTimer.isWorking() && (this._params[2] === 0 ? result = $gameTimer.seconds() >= this._params[1] : result = $gameTimer.seconds() <= this._params[1]);
      break;
    case 4:
      var actor = $gameActors.actor(this._params[1]);
      if (actor) {
        var n = this._params[3];
        switch (this._params[2]) {
          case 0:
            result = $gameParty.members().contains(actor);
            break;
          case 1:
            result = actor.name() === n;
            break;
          case 2:
            result = actor.isClass($dataClasses[n]);
            break;
          case 3:
            result = actor.hasSkill(n);
            break;
          case 4:
            result = actor.hasWeapon($dataWeapons[n]);
            break;
          case 5:
            result = actor.hasArmor($dataArmors[n]);
            break;
          case 6:
            result = actor.isStateAffected(n);
            break;
        }
      }
      break;
    case 5:
      var enemy = $gameTroop.members()[this._params[1]];
      if (enemy)
        switch (this._params[2]) {
          case 0:
            result = enemy.isAlive();
            break;
          case 1:
            result = enemy.isStateAffected(this._params[3]);
            break;
        }
      break;
    case 6:
      var character = this.character(this._params[1]);
      character && (result = character.direction() === this._params[2]);
      break;
    case 7:
      switch (this._params[2]) {
        case 0:
          result = $gameParty.gold() >= this._params[1];
          break;
        case 1:
          result = $gameParty.gold() <= this._params[1];
          break;
        case 2:
          result = $gameParty.gold() < this._params[1];
          break;
      }
      break;
    case 8:
      result = $gameParty.hasItem($dataItems[this._params[1]]);
      break;
    case 9:
      result = $gameParty.hasItem($dataWeapons[this._params[1]], this._params[2]);
      break;
    case 10:
      result = $gameParty.hasItem($dataArmors[this._params[1]], this._params[2]);
      break;
    case 11:
      result = Input.isPressed(this._params[1]);
      break;
    case 12:
      result = !!eval(this._params[1]);
      break;
    case 13:
      result = $gamePlayer.vehicle() === $gameMap.vehicle(this._params[1]);
      break;
  }
  return this._branch[this._indent] = result, this._branch[this._indent] === !1 && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command411 = function() {
  return this._branch[this._indent] !== !1 && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command112 = function() {
  return !0;
};
Game_Interpreter.prototype.command413 = function() {
  do
    this._index--;
  while (this.currentCommand().indent !== this._indent);
  return !0;
};
Game_Interpreter.prototype.command113 = function() {
  for (var t = 0; this._index < this._list.length - 1; ) {
    this._index++;
    var e = this.currentCommand();
    if (e.code === 112 && t++, e.code === 413)
      if (t > 0)
        t--;
      else
        break;
  }
  return !0;
};
Game_Interpreter.prototype.command115 = function() {
  return this._index = this._list.length, !0;
};
Game_Interpreter.prototype.command117 = function() {
  var t = $dataCommonEvents[this._params[0]];
  if (t) {
    var e = this.isOnCurrentMap() ? this._eventId : 0;
    this.setupChild(t.list, e);
  }
  return !0;
};
Game_Interpreter.prototype.setupChild = function(t, e) {
  this._childInterpreter = new Game_Interpreter(this._depth + 1), this._childInterpreter.setup(t, e);
};
Game_Interpreter.prototype.command118 = function() {
  return !0;
};
Game_Interpreter.prototype.command119 = function() {
  for (var t = this._params[0], e = 0; e < this._list.length; e++) {
    var r = this._list[e];
    if (r.code === 118 && r.parameters[0] === t) {
      this.jumpTo(e);
      return;
    }
  }
  return !0;
};
Game_Interpreter.prototype.jumpTo = function(t) {
  for (var e = this._index, r = Math.min(t, e), s = Math.max(t, e), o = this._indent, h = r; h <= s; h++) {
    var p = this._list[h].indent;
    p !== o && (this._branch[o] = null, o = p);
  }
  this._index = t;
};
Game_Interpreter.prototype.command121 = function() {
  for (var t = this._params[0]; t <= this._params[1]; t++)
    $gameSwitches.setValue(t, this._params[2] === 0);
  return !0;
};
Game_Interpreter.prototype.command122 = function() {
  var value = 0;
  switch (this._params[3]) {
    // Operand
    case 0:
      value = this._params[4];
      break;
    case 1:
      value = $gameVariables.value(this._params[4]);
      break;
    case 2:
      value = this._params[5] - this._params[4] + 1;
      for (var i = this._params[0]; i <= this._params[1]; i++)
        this.operateVariable(i, this._params[2], this._params[4] + Math.randomInt(value));
      return !0;
    case 3:
      value = this.gameDataOperand(this._params[4], this._params[5], this._params[6]);
      break;
    case 4:
      value = eval(this._params[4]);
      break;
  }
  for (var i = this._params[0]; i <= this._params[1]; i++)
    this.operateVariable(i, this._params[2], value);
  return !0;
};
Game_Interpreter.prototype.gameDataOperand = function(t, e, r) {
  switch (t) {
    case 0:
      return $gameParty.numItems($dataItems[e]);
    case 1:
      return $gameParty.numItems($dataWeapons[e]);
    case 2:
      return $gameParty.numItems($dataArmors[e]);
    case 3:
      var s = $gameActors.actor(e);
      if (s)
        switch (r) {
          case 0:
            return s.level;
          case 1:
            return s.currentExp();
          case 2:
            return s.hp;
          case 3:
            return s.mp;
          default:
            if (r >= 4 && r <= 11)
              return s.param(r - 4);
        }
      break;
    case 4:
      var o = $gameTroop.members()[e];
      if (o)
        switch (r) {
          case 0:
            return o.hp;
          case 1:
            return o.mp;
          default:
            if (r >= 2 && r <= 9)
              return o.param(r - 2);
        }
      break;
    case 5:
      var h = this.character(e);
      if (h)
        switch (r) {
          case 0:
            return h.x;
          case 1:
            return h.y;
          case 2:
            return h.direction();
          case 3:
            return h.screenX();
          case 4:
            return h.screenY();
        }
      break;
    case 6:
      return s = $gameParty.members()[e], s ? s.actorId() : 0;
    case 7:
      switch (e) {
        case 0:
          return $gameMap.mapId();
        case 1:
          return $gameParty.size();
        case 2:
          return $gameParty.gold();
        case 3:
          return $gameParty.steps();
        case 4:
          return $gameSystem.playtime();
        case 5:
          return $gameTimer.seconds();
        case 6:
          return $gameSystem.saveCount();
        case 7:
          return $gameSystem.battleCount();
        case 8:
          return $gameSystem.winCount();
        case 9:
          return $gameSystem.escapeCount();
      }
      break;
  }
  return 0;
};
Game_Interpreter.prototype.operateVariable = function(t, e, r) {
  try {
    var s = $gameVariables.value(t);
    switch (e) {
      case 0:
        $gameVariables.setValue(t, s = r);
        break;
      case 1:
        $gameVariables.setValue(t, s + r);
        break;
      case 2:
        $gameVariables.setValue(t, s - r);
        break;
      case 3:
        $gameVariables.setValue(t, s * r);
        break;
      case 4:
        $gameVariables.setValue(t, s / r);
        break;
      case 5:
        $gameVariables.setValue(t, s % r);
        break;
    }
  } catch {
    $gameVariables.setValue(t, 0);
  }
};
Game_Interpreter.prototype.command123 = function() {
  if (this._eventId > 0) {
    var t = [this._mapId, this._eventId, this._params[0]];
    $gameSelfSwitches.setValue(t, this._params[1] === 0);
  }
  return !0;
};
Game_Interpreter.prototype.command124 = function() {
  return this._params[0] === 0 ? $gameTimer.start(this._params[1] * 60) : $gameTimer.stop(), !0;
};
Game_Interpreter.prototype.command125 = function() {
  var t = this.operateValue(this._params[0], this._params[1], this._params[2]);
  return $gameParty.gainGold(t), !0;
};
Game_Interpreter.prototype.command126 = function() {
  var t = this.operateValue(this._params[1], this._params[2], this._params[3]);
  return $gameParty.gainItem($dataItems[this._params[0]], t), !0;
};
Game_Interpreter.prototype.command127 = function() {
  var t = this.operateValue(this._params[1], this._params[2], this._params[3]);
  return $gameParty.gainItem($dataWeapons[this._params[0]], t, this._params[4]), !0;
};
Game_Interpreter.prototype.command128 = function() {
  var t = this.operateValue(this._params[1], this._params[2], this._params[3]);
  return $gameParty.gainItem($dataArmors[this._params[0]], t, this._params[4]), !0;
};
Game_Interpreter.prototype.command129 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && (this._params[1] === 0 ? (this._params[2] && $gameActors.actor(this._params[0]).setup(this._params[0]), $gameParty.addActor(this._params[0])) : $gameParty.removeActor(this._params[0])), !0;
};
Game_Interpreter.prototype.command132 = function() {
  return $gameSystem.setBattleBgm(this._params[0]), !0;
};
Game_Interpreter.prototype.command133 = function() {
  return $gameSystem.setVictoryMe(this._params[0]), !0;
};
Game_Interpreter.prototype.command134 = function() {
  return this._params[0] === 0 ? $gameSystem.disableSave() : $gameSystem.enableSave(), !0;
};
Game_Interpreter.prototype.command135 = function() {
  return this._params[0] === 0 ? $gameSystem.disableMenu() : $gameSystem.enableMenu(), !0;
};
Game_Interpreter.prototype.command136 = function() {
  return this._params[0] === 0 ? $gameSystem.disableEncounter() : $gameSystem.enableEncounter(), $gamePlayer.makeEncounterCount(), !0;
};
Game_Interpreter.prototype.command137 = function() {
  return this._params[0] === 0 ? $gameSystem.disableFormation() : $gameSystem.enableFormation(), !0;
};
Game_Interpreter.prototype.command138 = function() {
  return $gameSystem.setWindowTone(this._params[0]), !0;
};
Game_Interpreter.prototype.command139 = function() {
  return $gameSystem.setDefeatMe(this._params[0]), !0;
};
Game_Interpreter.prototype.command140 = function() {
  var t = $gameMap.vehicle(this._params[0]);
  return t && t.setBgm(this._params[1]), !0;
};
Game_Interpreter.prototype.command201 = function() {
  if (!$gameParty.inBattle() && !$gameMessage.isBusy()) {
    var t, e, r;
    this._params[0] === 0 ? (t = this._params[1], e = this._params[2], r = this._params[3]) : (t = $gameVariables.value(this._params[1]), e = $gameVariables.value(this._params[2]), r = $gameVariables.value(this._params[3])), $gamePlayer.reserveTransfer(t, e, r, this._params[4], this._params[5]), this.setWaitMode("transfer"), this._index++;
  }
  return !1;
};
Game_Interpreter.prototype.command202 = function() {
  var t, e, r;
  this._params[1] === 0 ? (t = this._params[2], e = this._params[3], r = this._params[4]) : (t = $gameVariables.value(this._params[2]), e = $gameVariables.value(this._params[3]), r = $gameVariables.value(this._params[4]));
  var s = $gameMap.vehicle(this._params[0]);
  return s && s.setLocation(t, e, r), !0;
};
Game_Interpreter.prototype.command203 = function() {
  var t = this.character(this._params[0]);
  if (t) {
    if (this._params[1] === 0)
      t.locate(this._params[2], this._params[3]);
    else if (this._params[1] === 1) {
      var e = $gameVariables.value(this._params[2]), r = $gameVariables.value(this._params[3]);
      t.locate(e, r);
    } else {
      var s = this.character(this._params[2]);
      s && t.swap(s);
    }
    this._params[4] > 0 && t.setDirection(this._params[4]);
  }
  return !0;
};
Game_Interpreter.prototype.command204 = function() {
  if (!$gameParty.inBattle()) {
    if ($gameMap.isScrolling())
      return this.setWaitMode("scroll"), !1;
    $gameMap.startScroll(this._params[0], this._params[1], this._params[2]);
  }
  return !0;
};
Game_Interpreter.prototype.command205 = function() {
  return $gameMap.refreshIfNeeded(), this._character = this.character(this._params[0]), this._character && (this._character.forceMoveRoute(this._params[1]), this._params[1].wait && this.setWaitMode("route")), !0;
};
Game_Interpreter.prototype.command206 = function() {
  return $gamePlayer.getOnOffVehicle(), !0;
};
Game_Interpreter.prototype.command211 = function() {
  return $gamePlayer.setTransparent(this._params[0] === 0), !0;
};
Game_Interpreter.prototype.command212 = function() {
  return this._character = this.character(this._params[0]), this._character && (this._character.requestAnimation(this._params[1]), this._params[2] && this.setWaitMode("animation")), !0;
};
Game_Interpreter.prototype.command213 = function() {
  return this._character = this.character(this._params[0]), this._character && (this._character.requestBalloon(this._params[1]), this._params[2] && this.setWaitMode("balloon")), !0;
};
Game_Interpreter.prototype.command214 = function() {
  return this.isOnCurrentMap() && this._eventId > 0 && $gameMap.eraseEvent(this._eventId), !0;
};
Game_Interpreter.prototype.command216 = function() {
  return this._params[0] === 0 ? $gamePlayer.showFollowers() : $gamePlayer.hideFollowers(), $gamePlayer.refresh(), !0;
};
Game_Interpreter.prototype.command217 = function() {
  return $gameParty.inBattle() || ($gamePlayer.gatherFollowers(), this.setWaitMode("gather")), !0;
};
Game_Interpreter.prototype.command221 = function() {
  return $gameMessage.isBusy() || ($gameScreen.startFadeOut(this.fadeSpeed()), this.wait(this.fadeSpeed()), this._index++), !1;
};
Game_Interpreter.prototype.command222 = function() {
  return $gameMessage.isBusy() || ($gameScreen.startFadeIn(this.fadeSpeed()), this.wait(this.fadeSpeed()), this._index++), !1;
};
Game_Interpreter.prototype.command223 = function() {
  return $gameScreen.startTint(this._params[0], this._params[1]), this._params[2] && this.wait(this._params[1]), !0;
};
Game_Interpreter.prototype.command224 = function() {
  return $gameScreen.startFlash(this._params[0], this._params[1]), this._params[2] && this.wait(this._params[1]), !0;
};
Game_Interpreter.prototype.command225 = function() {
  return $gameScreen.startShake(this._params[0], this._params[1], this._params[2]), this._params[3] && this.wait(this._params[2]), !0;
};
Game_Interpreter.prototype.command230 = function() {
  return this.wait(this._params[0]), !0;
};
Game_Interpreter.prototype.command231 = function() {
  var t, e;
  return this._params[3] === 0 ? (t = this._params[4], e = this._params[5]) : (t = $gameVariables.value(this._params[4]), e = $gameVariables.value(this._params[5])), $gameScreen.showPicture(
    this._params[0],
    this._params[1],
    this._params[2],
    t,
    e,
    this._params[6],
    this._params[7],
    this._params[8],
    this._params[9]
  ), !0;
};
Game_Interpreter.prototype.command232 = function() {
  var t, e;
  return this._params[3] === 0 ? (t = this._params[4], e = this._params[5]) : (t = $gameVariables.value(this._params[4]), e = $gameVariables.value(this._params[5])), $gameScreen.movePicture(
    this._params[0],
    this._params[2],
    t,
    e,
    this._params[6],
    this._params[7],
    this._params[8],
    this._params[9],
    this._params[10]
  ), this._params[11] && this.wait(this._params[10]), !0;
};
Game_Interpreter.prototype.command233 = function() {
  return $gameScreen.rotatePicture(this._params[0], this._params[1]), !0;
};
Game_Interpreter.prototype.command234 = function() {
  return $gameScreen.tintPicture(this._params[0], this._params[1], this._params[2]), this._params[3] && this.wait(this._params[2]), !0;
};
Game_Interpreter.prototype.command235 = function() {
  return $gameScreen.erasePicture(this._params[0]), !0;
};
Game_Interpreter.prototype.command236 = function() {
  return $gameParty.inBattle() || ($gameScreen.changeWeather(this._params[0], this._params[1], this._params[2]), this._params[3] && this.wait(this._params[2])), !0;
};
Game_Interpreter.prototype.command241 = function() {
  return AudioManager.playBgm(this._params[0]), !0;
};
Game_Interpreter.prototype.command242 = function() {
  return AudioManager.fadeOutBgm(this._params[0]), !0;
};
Game_Interpreter.prototype.command243 = function() {
  return $gameSystem.saveBgm(), !0;
};
Game_Interpreter.prototype.command244 = function() {
  return $gameSystem.replayBgm(), !0;
};
Game_Interpreter.prototype.command245 = function() {
  return AudioManager.playBgs(this._params[0]), !0;
};
Game_Interpreter.prototype.command246 = function() {
  return AudioManager.fadeOutBgs(this._params[0]), !0;
};
Game_Interpreter.prototype.command249 = function() {
  return AudioManager.playMe(this._params[0]), !0;
};
Game_Interpreter.prototype.command250 = function() {
  return AudioManager.playSe(this._params[0]), !0;
};
Game_Interpreter.prototype.command251 = function() {
  return AudioManager.stopSe(), !0;
};
Game_Interpreter.prototype.command261 = function() {
  if (!$gameMessage.isBusy()) {
    var t = this._params[0];
    if (t.length > 0) {
      var e = this.videoFileExt();
      Graphics.playVideo("movies/" + t + e), this.setWaitMode("video");
    }
    this._index++;
  }
  return !1;
};
Game_Interpreter.prototype.videoFileExt = function() {
  return Graphics.canPlayVideoType("video/webm") && !Utils.isMobileDevice() ? ".webm" : ".mp4";
};
Game_Interpreter.prototype.command281 = function() {
  return this._params[0] === 0 ? $gameMap.enableNameDisplay() : $gameMap.disableNameDisplay(), !0;
};
Game_Interpreter.prototype.command282 = function() {
  var t = $dataTilesets[this._params[0]];
  this._imageReservationId || (this._imageReservationId = Utils.generateRuntimeId());
  var e = t.tilesetNames.map(function(r) {
    return ImageManager.reserveTileset(r, 0, this._imageReservationId);
  }, this).every(function(r) {
    return r.isReady();
  });
  return e ? ($gameMap.changeTileset(this._params[0]), ImageManager.releaseReservation(this._imageReservationId), this._imageReservationId = null, !0) : !1;
};
Game_Interpreter.prototype.command283 = function() {
  return $gameMap.changeBattleback(this._params[0], this._params[1]), !0;
};
Game_Interpreter.prototype.command284 = function() {
  return $gameMap.changeParallax(
    this._params[0],
    this._params[1],
    this._params[2],
    this._params[3],
    this._params[4]
  ), !0;
};
Game_Interpreter.prototype.command285 = function() {
  var t, e, r;
  switch (this._params[2] === 0 ? (t = this._params[3], e = this._params[4]) : (t = $gameVariables.value(this._params[3]), e = $gameVariables.value(this._params[4])), this._params[1]) {
    case 0:
      r = $gameMap.terrainTag(t, e);
      break;
    case 1:
      r = $gameMap.eventIdXy(t, e);
      break;
    case 2:
    // Tile ID (Layer 1)
    case 3:
    // Tile ID (Layer 2)
    case 4:
    // Tile ID (Layer 3)
    case 5:
      r = $gameMap.tileId(t, e, this._params[1] - 2);
      break;
    default:
      r = $gameMap.regionId(t, e);
      break;
  }
  return $gameVariables.setValue(this._params[0], r), !0;
};
Game_Interpreter.prototype.command301 = function() {
  if (!$gameParty.inBattle()) {
    var t;
    this._params[0] === 0 ? t = this._params[1] : this._params[0] === 1 ? t = $gameVariables.value(this._params[1]) : t = $gamePlayer.makeEncounterTroopId(), $dataTroops[t] && (BattleManager.setup(t, this._params[2], this._params[3]), BattleManager.setEventCallback((function(e) {
      this._branch[this._indent] = e;
    }).bind(this)), $gamePlayer.makeEncounterCount(), SceneManager.push(Scene_Battle));
  }
  return !0;
};
Game_Interpreter.prototype.command601 = function() {
  return this._branch[this._indent] !== 0 && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command602 = function() {
  return this._branch[this._indent] !== 1 && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command603 = function() {
  return this._branch[this._indent] !== 2 && this.skipBranch(), !0;
};
Game_Interpreter.prototype.command302 = function() {
  if (!$gameParty.inBattle()) {
    for (var t = [this._params]; this.nextEventCode() === 605; )
      this._index++, t.push(this.currentCommand().parameters);
    SceneManager.push(Scene_Shop), SceneManager.prepareNextScene(t, this._params[4]);
  }
  return !0;
};
Game_Interpreter.prototype.command303 = function() {
  return $gameParty.inBattle() || $dataActors[this._params[0]] && (SceneManager.push(Scene_Name), SceneManager.prepareNextScene(this._params[0], this._params[1])), !0;
};
Game_Interpreter.prototype.command311 = function() {
  var t = this.operateValue(this._params[2], this._params[3], this._params[4]);
  return this.iterateActorEx(this._params[0], this._params[1], (function(e) {
    this.changeHp(e, t, this._params[5]);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command312 = function() {
  var t = this.operateValue(this._params[2], this._params[3], this._params[4]);
  return this.iterateActorEx(this._params[0], this._params[1], (function(e) {
    e.gainMp(t);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command326 = function() {
  var t = this.operateValue(this._params[2], this._params[3], this._params[4]);
  return this.iterateActorEx(this._params[0], this._params[1], (function(e) {
    e.gainTp(t);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command313 = function() {
  return this.iterateActorEx(this._params[0], this._params[1], (function(t) {
    var e = t.isDead();
    this._params[2] === 0 ? t.addState(this._params[3]) : t.removeState(this._params[3]), t.isDead() && !e && t.performCollapse(), t.clearResult();
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command314 = function() {
  return this.iterateActorEx(this._params[0], this._params[1], (function(t) {
    t.recoverAll();
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command315 = function() {
  var t = this.operateValue(this._params[2], this._params[3], this._params[4]);
  return this.iterateActorEx(this._params[0], this._params[1], (function(e) {
    e.changeExp(e.currentExp() + t, this._params[5]);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command316 = function() {
  var t = this.operateValue(this._params[2], this._params[3], this._params[4]);
  return this.iterateActorEx(this._params[0], this._params[1], (function(e) {
    e.changeLevel(e.level + t, this._params[5]);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command317 = function() {
  var t = this.operateValue(this._params[3], this._params[4], this._params[5]);
  return this.iterateActorEx(this._params[0], this._params[1], (function(e) {
    e.addParam(this._params[2], t);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command318 = function() {
  return this.iterateActorEx(this._params[0], this._params[1], (function(t) {
    this._params[2] === 0 ? t.learnSkill(this._params[3]) : t.forgetSkill(this._params[3]);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command319 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && t.changeEquipById(this._params[1], this._params[2]), !0;
};
Game_Interpreter.prototype.command320 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && t.setName(this._params[1]), !0;
};
Game_Interpreter.prototype.command321 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && $dataClasses[this._params[1]] && t.changeClass(this._params[1], this._params[2]), !0;
};
Game_Interpreter.prototype.command322 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && (t.setCharacterImage(this._params[1], this._params[2]), t.setFaceImage(this._params[3], this._params[4]), t.setBattlerImage(this._params[5])), $gamePlayer.refresh(), !0;
};
Game_Interpreter.prototype.command323 = function() {
  var t = $gameMap.vehicle(this._params[0]);
  return t && t.setImage(this._params[1], this._params[2]), !0;
};
Game_Interpreter.prototype.command324 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && t.setNickname(this._params[1]), !0;
};
Game_Interpreter.prototype.command325 = function() {
  var t = $gameActors.actor(this._params[0]);
  return t && t.setProfile(this._params[1]), !0;
};
Game_Interpreter.prototype.command331 = function() {
  var t = this.operateValue(this._params[1], this._params[2], this._params[3]);
  return this.iterateEnemyIndex(this._params[0], (function(e) {
    this.changeHp(e, t, this._params[4]);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command332 = function() {
  var t = this.operateValue(this._params[1], this._params[2], this._params[3]);
  return this.iterateEnemyIndex(this._params[0], (function(e) {
    e.gainMp(t);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command342 = function() {
  var t = this.operateValue(this._params[1], this._params[2], this._params[3]);
  return this.iterateEnemyIndex(this._params[0], (function(e) {
    e.gainTp(t);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command333 = function() {
  return this.iterateEnemyIndex(this._params[0], (function(t) {
    var e = t.isDead();
    this._params[1] === 0 ? t.addState(this._params[2]) : t.removeState(this._params[2]), t.isDead() && !e && t.performCollapse(), t.clearResult();
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command334 = function() {
  return this.iterateEnemyIndex(this._params[0], (function(t) {
    t.recoverAll();
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command335 = function() {
  return this.iterateEnemyIndex(this._params[0], (function(t) {
    t.appear(), $gameTroop.makeUniqueNames();
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command336 = function() {
  return this.iterateEnemyIndex(this._params[0], (function(t) {
    t.transform(this._params[1]), $gameTroop.makeUniqueNames();
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command337 = function() {
  return this._params[2] == !0 ? this.iterateEnemyIndex(-1, (function(t) {
    t.isAlive() && t.startAnimation(this._params[1], !1, 0);
  }).bind(this)) : this.iterateEnemyIndex(this._params[0], (function(t) {
    t.isAlive() && t.startAnimation(this._params[1], !1, 0);
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command339 = function() {
  return this.iterateBattler(this._params[0], this._params[1], (function(t) {
    t.isDeathStateAffected() || (t.forceAction(this._params[2], this._params[3]), BattleManager.forceAction(t), this.setWaitMode("action"));
  }).bind(this)), !0;
};
Game_Interpreter.prototype.command340 = function() {
  return BattleManager.abort(), !0;
};
Game_Interpreter.prototype.command351 = function() {
  return $gameParty.inBattle() || (SceneManager.push(Scene_Menu), Window_MenuCommand.initCommandPosition()), !0;
};
Game_Interpreter.prototype.command352 = function() {
  return $gameParty.inBattle() || SceneManager.push(Scene_Save), !0;
};
Game_Interpreter.prototype.command353 = function() {
  return SceneManager.goto(Scene_Gameover), !0;
};
Game_Interpreter.prototype.command354 = function() {
  return SceneManager.goto(Scene_Title), !0;
};
Game_Interpreter.prototype.command355 = function() {
  for (var script = this.currentCommand().parameters[0] + `
`; this.nextEventCode() === 655; )
    this._index++, script += this.currentCommand().parameters[0] + `
`;
  return eval(script), !0;
};
Game_Interpreter.prototype.command356 = function() {
  var t = this._params[0].split(" "), e = t.shift();
  return this.pluginCommand(e, t), !0;
};
Game_Interpreter.prototype.pluginCommand = function(t, e) {
};
Game_Interpreter.requestImages = function(t, e) {
  t && t.forEach(function(r) {
    var s = r.parameters;
    switch (r.code) {
      // Show Text
      case 101:
        ImageManager.requestFace(s[0]);
        break;
      // Common Event
      case 117:
        var o = $dataCommonEvents[s[0]];
        o && (e || (e = []), e.contains(s[0]) || (e.push(s[0]), Game_Interpreter.requestImages(o.list, e)));
        break;
      // Change Party Member
      case 129:
        var h = $gameActors.actor(s[0]);
        if (h && s[1] === 0) {
          var m = h.characterName();
          ImageManager.requestCharacter(m);
        }
        break;
      // Set Movement Route
      case 205:
        s[1] && s[1].list.forEach(function(S) {
          var y = S.parameters;
          S.code === Game_Character.ROUTE_CHANGE_IMAGE && ImageManager.requestCharacter(y[0]);
        });
        break;
      // Show Animation, Show Battle Animation
      case 212:
      case 337:
        if (s[1]) {
          var p = $dataAnimations[s[1]], c = p.animation1Name, u = p.animation2Name, l = p.animation1Hue, d = p.animation2Hue;
          ImageManager.requestAnimation(c, l), ImageManager.requestAnimation(u, d);
        }
        break;
      // Change Player Followers
      case 216:
        s[0] === 0 && $gamePlayer.followers().forEach(function(S) {
          var y = S.characterName();
          ImageManager.requestCharacter(y);
        });
        break;
      // Show Picture
      case 231:
        ImageManager.requestPicture(s[1]);
        break;
      // Change Tileset
      case 282:
        var f = $dataTilesets[s[0]];
        f.tilesetNames.forEach(function(S) {
          ImageManager.requestTileset(S);
        });
        break;
      // Change Battle Back
      case 283:
        $gameParty.inBattle() && (ImageManager.requestBattleback1(s[0]), ImageManager.requestBattleback2(s[1]));
        break;
      // Change Parallax
      case 284:
        $gameParty.inBattle() || ImageManager.requestParallax(s[0]);
        break;
      // Change Actor Images
      case 322:
        ImageManager.requestCharacter(s[1]), ImageManager.requestFace(s[3]), ImageManager.requestSvActor(s[5]);
        break;
      // Change Vehicle Image
      case 323:
        var _ = $gameMap.vehicle(s[0]);
        _ && ImageManager.requestCharacter(s[1]);
        break;
      // Enemy Transform
      case 336:
        var w = $dataEnemies[s[1]], m = w.battlerName, g = w.battlerHue;
        $gameSystem.isSideView() ? ImageManager.requestSvEnemy(m, g) : ImageManager.requestEnemy(m, g);
        break;
    }
  });
};
const Game_Interpreter$1 = Game_Interpreter;
Scene_Base = class extends Stage {
  constructor(...t) {
    super(...t), this.initialize(...t);
  }
  /**
   * Initialize Scene_Base properties.
   * Can be called via `Scene_Base.prototype.initialize.call(this)` for compatibility.
   */
  initialize() {
    super.initialize(), this._active = !1, this._fadeSign = 0, this._fadeDuration = 0, this._fadeSprite = null, this._imageReservationId = Utils.generateRuntimeId();
  }
  /**
   * Start the scene processing.
   *
   * @method start
   * @instance
   * @memberof Scene_Base
   */
  start() {
    this._active = !0;
  }
  /**
   * Create the components and add them to the rendering process.
   *
   * @method create
   * @instance
   * @memberof Scene_Base
   */
  create() {
  }
  /**
   * Update the scene processing each new frame.
   *
   * @method update
   * @instance
   * @memberof Scene_Base
   */
  update() {
    this.updateFade(), this.updateChildren();
  }
  /**
   * Attach a reservation to the reserve queue.
   *
   * @method attachReservation
   * @instance
   * @memberof Scene_Base
   */
  attachReservation() {
    ImageManager.setDefaultReservationId(this._imageReservationId);
  }
  /**
   * Remove the reservation from the Reserve queue.
   *
   * @method detachReservation
   * @instance
   * @memberof Scene_Base
   */
  detachReservation() {
    ImageManager.releaseReservation(this._imageReservationId);
  }
  /**
   * Returns whether the scene is active or not.
   *
   * @method isActive
   * @instance
   * @memberof Scene_Base
   * @return {Boolean} return true if the scene is active
   */
  isActive() {
    return this._active;
  }
  /**
   * Return whether the scene is ready to start or not.
   *
   * @method isReady
   * @instance
   * @memberof Scene_Base
   * @return {Boolean} Return true if the scene is ready to start
   */
  isReady() {
    return ImageManager.isReady();
  }
  /**
   * Stop the scene processing.
   *
   * @method stop
   * @instance
   * @memberof Scene_Base
   */
  stop() {
    this._active = !1;
  }
  /**
   * Return whether the scene is busy or not.
   *
   * @method isBusy
   * @instance
   * @memberof Scene_Base
   * @return {Boolean} Return true if the scene is currently busy
   */
  isBusy() {
    return this._fadeDuration > 0;
  }
  /**
   * Terminate the scene before switching to another scene.
   *
   * @method terminate
   * @instance
   * @memberof Scene_Base
   */
  terminate() {
  }
  /**
   * Create the layer for the windows children
   * and add it to the rendering process.
   *
   * @method createWindowLayer
   * @instance
   * @memberof Scene_Base
   */
  createWindowLayer() {
    const t = Graphics.boxWidth, e = Graphics.boxHeight, r = (Graphics.width - t) / 2, s = (Graphics.height - e) / 2;
    this._windowLayer = new WindowLayer(), this._windowLayer.move(r, s, t, e), this.addChild(this._windowLayer);
  }
  /**
   * Add the children window to the windowLayer processing.
   *
   * @method addWindow
   * @instance
   * @memberof Scene_Base
   */
  addWindow(t) {
    this._windowLayer.addChild(t);
  }
  /**
   * Request a fadeIn screen process.
   *
   * @method startFadeIn
   * @param {Number} [duration=30] The time the process will take for fadeIn the screen
   * @param {Boolean} [white=false] If true the fadein will be processed with a white color, else it'll be black
   * @instance
   * @memberof Scene_Base
   */
  startFadeIn(t = 30, e = !1) {
    this.createFadeSprite(e), this._fadeSign = 1, this._fadeDuration = t, this._fadeSprite.opacity = 255;
  }
  /**
   * Request a fadeOut screen process.
   *
   * @method startFadeOut
   * @param {Number} [duration=30] The time the process will take for fadeOut the screen
   * @param {Boolean} [white=false] If true the fadeOut will be processed with a white color, else it'll be black
   * @instance
   * @memberof Scene_Base
   */
  startFadeOut(t = 30, e = !1) {
    this.createFadeSprite(e), this._fadeSign = -1, this._fadeDuration = t, this._fadeSprite.opacity = 0;
  }
  /**
   * Create a Screen sprite for the fadein and fadeOut purposes and
   * add it to the rendering process.
   *
   * @method createFadeSprite
   * @instance
   * @memberof Scene_Base
   */
  createFadeSprite(t) {
    this._fadeSprite || (this._fadeSprite = new ScreenSprite(), this.addChild(this._fadeSprite)), t ? this._fadeSprite.setWhite() : this._fadeSprite.setBlack();
  }
  /**
   * Update the screen fade processing.
   *
   * @method updateFade
   * @instance
   * @memberof Scene_Base
   */
  updateFade() {
    if (this._fadeDuration > 0) {
      const t = this._fadeDuration;
      this._fadeSign > 0 ? this._fadeSprite.opacity -= this._fadeSprite.opacity / t : this._fadeSprite.opacity += (255 - this._fadeSprite.opacity) / t, this._fadeDuration--;
    }
  }
  /**
   * Update the children of the scene EACH frame.
   *
   * @method updateChildren
   * @instance
   * @memberof Scene_Base
   */
  updateChildren() {
    this.children.forEach((t) => {
      t.update && t.update();
    });
  }
  /**
   * Pop the scene from the stack array and switch to the
   * previous scene.
   *
   * @method popScene
   * @instance
   * @memberof Scene_Base
   */
  popScene() {
    SceneManager.pop();
  }
  /**
   * Check whether the game should be triggering a gameover.
   *
   * @method checkGameover
   * @instance
   * @memberof Scene_Base
   */
  checkGameover() {
    $gameParty.isAllDead() && SceneManager.goto(Scene_Gameover);
  }
  /**
   * Slowly fade out all the visual and audio of the scene.
   *
   * @method fadeOutAll
   * @instance
   * @memberof Scene_Base
   */
  fadeOutAll() {
    const t = this.slowFadeSpeed() / 60;
    AudioManager.fadeOutBgm(t), AudioManager.fadeOutBgs(t), AudioManager.fadeOutMe(t), this.startFadeOut(this.slowFadeSpeed());
  }
  /**
   * Return the screen fade speed value.
   *
   * @method fadeSpeed
   * @instance
   * @memberof Scene_Base
   * @return {Number} Return the fade speed
   */
  fadeSpeed() {
    return 24;
  }
  /**
   * Return a slow screen fade speed value.
   *
   * @method slowFadeSpeed
   * @instance
   * @memberof Scene_Base
   * @return {Number} Return the fade speed
   */
  slowFadeSpeed() {
    return this.fadeSpeed() * 2;
  }
};
const Scene_Base$1 = Scene_Base;
Scene_Boot = class extends Scene_Base {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize(), this._startDate = Date.now();
  }
  /**
   * Create the components needed for the boot scene.
   */
  create() {
    super.create(), DataManager.loadDatabase(), ConfigManager.load(), this.loadSystemWindowImage();
  }
  /**
   * Load the system window image.
   */
  loadSystemWindowImage() {
    ImageManager.reserveSystem("Window");
  }
  /**
   * Load all system images.
   */
  static loadSystemImages() {
    ImageManager.reserveSystem("IconSet"), ImageManager.reserveSystem("Balloon"), ImageManager.reserveSystem("Shadow1"), ImageManager.reserveSystem("Shadow2"), ImageManager.reserveSystem("Damage"), ImageManager.reserveSystem("States"), ImageManager.reserveSystem("Weapons1"), ImageManager.reserveSystem("Weapons2"), ImageManager.reserveSystem("Weapons3"), ImageManager.reserveSystem("ButtonSet");
  }
  /**
   * Check if the scene is ready to start.
   * 
   * @return {boolean} True if ready, false otherwise
   */
  isReady() {
    return super.isReady() ? DataManager.isDatabaseLoaded() && this.isGameFontLoaded() : !1;
  }
  /**
   * Check if the game font is loaded.
   * 
   * @return {boolean} True if the font is loaded, false otherwise
   */
  isGameFontLoaded() {
    if (Graphics.isFontLoaded("GameFont"))
      return !0;
    if (!Graphics.canUseCssFontLoading() && Date.now() - this._startDate >= 6e4)
      throw new Error("Failed to load GameFont");
    return !1;
  }
  /**
   * Start the scene by setting up resources and moving to the appropriate scene.
   */
  start() {
    super.start(), SoundManager.preloadImportantSounds(), DataManager.isBattleTest() ? (DataManager.setupBattleTest(), SceneManager.goto(Scene_Battle)) : DataManager.isEventTest() ? (DataManager.setupEventTest(), SceneManager.goto(Scene_Map)) : (this.checkPlayerLocation(), DataManager.setupNewGame(), SceneManager.goto(Scene_Title), Window_TitleCommand.initCommandPosition()), this.updateDocumentTitle();
  }
  /**
   * Update the document's title with the game title.
   */
  updateDocumentTitle() {
    document.title = $dataSystem.gameTitle;
  }
  /**
   * Check if the player's starting location is valid.
   */
  checkPlayerLocation() {
    if ($dataSystem.startMapId === 0)
      throw new Error("Player's starting position is not set");
  }
};
const Scene_Boot$1 = Scene_Boot;
Scene_Title = class extends Scene_Base {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initializes the title scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Creates the title scene's elements.
   */
  create() {
    super.create(), this.createBackground(), this.createForeground(), this.createWindowLayer(), this.createCommandWindow();
  }
  /**
   * Starts the title scene by playing the title music and fading in.
   */
  start() {
    super.start(), SceneManager.clearStack(), this.centerSprite(this._backSprite1), this.centerSprite(this._backSprite2), this.playTitleMusic(), this.startFadeIn(this.fadeSpeed(), !1);
  }
  /**
   * Updates the title scene.
   */
  update() {
    this.isBusy() || this._commandWindow.open(), super.update();
  }
  /**
   * Checks if the title scene is busy.
   * @returns {boolean} True if the scene is busy, otherwise false.
   */
  isBusy() {
    return this._commandWindow.isClosing() || super.isBusy();
  }
  /**
   * Terminates the title scene.
   */
  terminate() {
    super.terminate(), SceneManager.snapForBackground();
  }
  /**
   * Creates the background elements for the title screen.
   */
  createBackground() {
    this._backSprite1 = new Sprite(ImageManager.loadTitle1($dataSystem.title1Name)), this._backSprite2 = new Sprite(ImageManager.loadTitle2($dataSystem.title2Name)), this.addChild(this._backSprite1), this.addChild(this._backSprite2);
  }
  /**
   * Creates the foreground elements for the title screen.
   */
  createForeground() {
    this._gameTitleSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height)), this.addChild(this._gameTitleSprite), $dataSystem.optDrawTitle && this.drawGameTitle();
  }
  /**
   * Draws the game title on the title screen.
   */
  drawGameTitle() {
    const e = Graphics.height / 4, r = Graphics.width - 20 * 2, s = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = "black", this._gameTitleSprite.bitmap.outlineWidth = 8, this._gameTitleSprite.bitmap.fontSize = 72, this._gameTitleSprite.bitmap.drawText(s, 20, e, r, 48, "center");
  }
  /**
   * Centers a sprite on the screen.
   * @param {Sprite} sprite - The sprite to center.
   */
  centerSprite(t) {
    t.x = Graphics.width / 2, t.y = Graphics.height / 2, t.anchor.x = 0.5, t.anchor.y = 0.5;
  }
  /**
   * Creates the command window for the title screen.
   */
  createCommandWindow() {
    this._commandWindow = new Window_TitleCommand(), this._commandWindow.setHandler("newGame", this.commandNewGame.bind(this)), this._commandWindow.setHandler("continue", this.commandContinue.bind(this)), this._commandWindow.setHandler("options", this.commandOptions.bind(this)), this.addWindow(this._commandWindow);
  }
  /**
   * Starts a new game.
   */
  commandNewGame() {
    DataManager.setupNewGame(), this._commandWindow.close(), this.fadeOutAll(), SceneManager.goto(Scene_Map);
  }
  /**
   * Continues the game from the save file.
   */
  commandContinue() {
    this._commandWindow.close(), SceneManager.push(Scene_Load);
  }
  /**
   * Opens the options menu.
   */
  commandOptions() {
    this._commandWindow.close(), SceneManager.push(Scene_Options);
  }
  /**
   * Plays the title music.
   */
  playTitleMusic() {
    AudioManager.playBgm($dataSystem.titleBgm), AudioManager.stopBgs(), AudioManager.stopMe();
  }
};
const Scene_Title$1 = Scene_Title;
Scene_Map = class extends Scene_Base {
  constructor(...e) {
    super(...e);
    /** @type {number} */
    P(this, "_waitCount", 0);
    /** @type {number} */
    P(this, "_encounterEffectDuration", 0);
    /** @type {boolean} */
    P(this, "_mapLoaded", !1);
    /** @type {number} */
    P(this, "_touchCount", 0);
  }
  /**
   * Initializes the scene.
   */
  initialize() {
    super.initialize(), this._waitCount = 0, this._encounterEffectDuration = 0, this._mapLoaded = !1, this._touchCount = 0;
  }
  /**
   * Creates the scene objects.
   */
  create() {
    super.create(), this._transfer = $gamePlayer.isTransferring();
    const e = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
    DataManager.loadMapData(e);
  }
  /**
   * Checks if the scene is ready.
   * @returns {boolean} Whether the scene is ready.
   */
  isReady() {
    return !this._mapLoaded && DataManager.isMapLoaded() && (this.onMapLoaded(), this._mapLoaded = !0), this._mapLoaded && super.isReady();
  }
  /**
   * Called when the map is loaded.
   */
  onMapLoaded() {
    this._transfer && $gamePlayer.performTransfer(), this.createDisplayObjects();
  }
  /**
   * Starts the scene.
   */
  start() {
    super.start(), SceneManager.clearStack(), this._transfer ? (this.fadeInForTransfer(), this._mapNameWindow.open(), $gameMap.autoplay()) : this.needsFadeIn() && this.startFadeIn(this.fadeSpeed(), !1), this.menuCalling = !1;
  }
  /**
   * Updates the scene.
   */
  update() {
    this.updateDestination(), this.updateMainMultiply(), this.isSceneChangeOk() ? this.updateScene() : SceneManager.isNextScene(Scene_Battle) && this.updateEncounterEffect(), this.updateWaitCount(), super.update();
  }
  /**
   * Updates the main scene while accounting for fast-forward input.
   */
  updateMainMultiply() {
    this.updateMain(), this.isFastForward() && this.updateMain();
  }
  /**
   * Updates the main components of the scene.
   */
  updateMain() {
    const e = this.isActive();
    $gameMap.update(e), $gamePlayer.update(e), $gameTimer.update(e), $gameScreen.update();
  }
  /**
   * Checks if fast-forward is enabled.
   * @returns {boolean} Whether fast-forward is enabled.
   */
  isFastForward() {
    return $gameMap.isEventRunning() && !SceneManager.isSceneChanging() && (Input.isLongPressed("ok") || TouchInput.isLongPressed());
  }
  /**
   * Stops the scene.
   */
  stop() {
    super.stop(), $gamePlayer.straighten(), this._mapNameWindow.close(), this.needsSlowFadeOut() ? this.startFadeOut(this.slowFadeSpeed(), !1) : SceneManager.isNextScene(Scene_Map) ? this.fadeOutForTransfer() : SceneManager.isNextScene(Scene_Battle) && this.launchBattle();
  }
  /**
   * Checks if the scene is busy.
   * @returns {boolean} Whether the scene is busy.
   */
  isBusy() {
    return this._messageWindow && this._messageWindow.isClosing() || this._waitCount > 0 || this._encounterEffectDuration > 0 || super.isBusy();
  }
  /**
   * Terminates the scene.
   */
  terminate() {
    super.terminate(), SceneManager.isNextScene(Scene_Battle) ? ImageManager.clearRequest() : (this._spriteset.update(), this._mapNameWindow.hide(), SceneManager.snapForBackground()), SceneManager.isNextScene(Scene_Map) && ImageManager.clearRequest(), $gameScreen.clearZoom(), this.removeChild(this._fadeSprite), this.removeChild(this._mapNameWindow), this.removeChild(this._windowLayer), this.removeChild(this._spriteset);
  }
  /**
   * Checks if the scene needs fade-in.
   * @returns {boolean} Whether the scene needs fade-in.
   */
  needsFadeIn() {
    return SceneManager.isPreviousScene(Scene_Battle) || SceneManager.isPreviousScene(Scene_Load);
  }
  /**
   * Checks if the scene needs slow fade-out.
   * @returns {boolean} Whether the scene needs slow fade-out.
   */
  needsSlowFadeOut() {
    return SceneManager.isNextScene(Scene_Title) || SceneManager.isNextScene(Scene_Gameover);
  }
  /**
   * Updates the wait count for the scene.
   * @returns {boolean} Whether the wait count is greater than 0.
   */
  updateWaitCount() {
    return this._waitCount > 0 ? (this._waitCount--, !0) : !1;
  }
  /**
   * Updates the destination for the player.
   */
  updateDestination() {
    this.isMapTouchOk() ? this.processMapTouch() : ($gameTemp.clearDestination(), this._touchCount = 0);
  }
  /**
   * Checks if map touch is valid.
   * @returns {boolean} Whether map touch is valid.
   */
  isMapTouchOk() {
    return this.isActive() && $gamePlayer.canMove();
  }
  /**
   * Processes the map touch input.
   */
  processMapTouch() {
    if (TouchInput.isTriggered() || this._touchCount > 0)
      if (TouchInput.isPressed()) {
        if (this._touchCount === 0 || this._touchCount >= 15) {
          const e = $gameMap.canvasToMapX(TouchInput.x), r = $gameMap.canvasToMapY(TouchInput.y);
          $gameTemp.setDestination(e, r);
        }
        this._touchCount++;
      } else
        this._touchCount = 0;
  }
  /**
   * Checks if scene change is allowed.
   * @returns {boolean} Whether scene change is allowed.
   */
  isSceneChangeOk() {
    return this.isActive() && !$gameMessage.isBusy();
  }
  /**
   * Updates the scene components, including game-over and transfer checks.
   */
  updateScene() {
    this.checkGameover(), SceneManager.isSceneChanging() || this.updateTransferPlayer(), SceneManager.isSceneChanging() || this.updateEncounter(), SceneManager.isSceneChanging() || this.updateCallMenu(), SceneManager.isSceneChanging() || this.updateCallDebug();
  }
  /**
   * Creates the display objects for the scene.
   */
  createDisplayObjects() {
    this.createSpriteset(), this.createMapNameWindow(), this.createWindowLayer(), this.createAllWindows();
  }
  /**
   * Creates the spriteset for the scene.
   */
  createSpriteset() {
    this._spriteset = new Spriteset_Map(), this.addChild(this._spriteset);
  }
  /**
   * Creates all windows for the scene.
   */
  createAllWindows() {
    this.createMessageWindow(), this.createScrollTextWindow();
  }
  /**
   * Creates the map name window.
   */
  createMapNameWindow() {
    this._mapNameWindow = new Window_MapName(), this.addChild(this._mapNameWindow);
  }
  /**
   * Creates the message window.
   */
  createMessageWindow() {
    this._messageWindow = new Window_Message(), this.addWindow(this._messageWindow), this._messageWindow.subWindows().forEach((e) => {
      this.addWindow(e);
    });
  }
  /**
   * Creates the scroll text window.
   */
  createScrollTextWindow() {
    this._scrollTextWindow = new Window_ScrollText(), this.addWindow(this._scrollTextWindow);
  }
  /**
   * Updates the transfer of the player.
   */
  updateTransferPlayer() {
    $gamePlayer.isTransferring() && SceneManager.goto(Scene_Map);
  }
  /**
   * Updates the encounter state.
   */
  updateEncounter() {
    $gamePlayer.executeEncounter() && SceneManager.push(Scene_Battle);
  }
  /**
   * Updates the menu call state.
   */
  updateCallMenu() {
    this.isMenuEnabled() ? (this.isMenuCalled() && (this.menuCalling = !0), this.menuCalling && !$gamePlayer.isMoving() && this.callMenu()) : this.menuCalling = !1;
  }
  /**
   * Checks if the menu is enabled.
   * @returns {boolean} Whether the menu is enabled.
   */
  isMenuEnabled() {
    return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning();
  }
  /**
   * Checks if the menu is called.
   * @returns {boolean} Whether the menu is called.
   */
  isMenuCalled() {
    return Input.isTriggered("menu") || TouchInput.isCancelled();
  }
  /**
   * Calls the menu scene.
   */
  callMenu() {
    SoundManager.playOk(), SceneManager.push(Scene_Menu), Window_MenuCommand.initCommandPosition(), $gameTemp.clearDestination(), this._mapNameWindow.hide(), this._waitCount = 2;
  }
  /**
   * Updates the debug call state.
   */
  updateCallDebug() {
    this.isDebugCalled() && SceneManager.push(Scene_Debug);
  }
  /**
   * Checks if debug is called.
   * @returns {boolean} Whether debug is called.
   */
  isDebugCalled() {
    return Input.isTriggered("debug") && $gameTemp.isPlaytest();
  }
  /**
   * Starts the fade-in effect for player transfer.
   */
  fadeInForTransfer() {
    const e = $gamePlayer.fadeType();
    switch (e) {
      case 0:
      case 1:
        this.startFadeIn(this.fadeSpeed(), e === 1);
        break;
    }
  }
  /**
   * Starts the fade-out effect for player transfer.
   */
  fadeOutForTransfer() {
    const e = $gamePlayer.fadeType();
    switch (e) {
      case 0:
      case 1:
        this.startFadeOut(this.fadeSpeed(), e === 1);
        break;
    }
  }
  /**
   * Launches the battle.
   */
  launchBattle() {
    BattleManager.saveBgmAndBgs(), this.stopAudioOnBattleStart(), SoundManager.playBattleStart(), this.startEncounterEffect(), this._mapNameWindow.hide();
  }
  /**
   * Stops audio on battle start.
   */
  stopAudioOnBattleStart() {
    AudioManager.isCurrentBgm($gameSystem.battleBgm()) || AudioManager.stopBgm(), AudioManager.stopBgs(), AudioManager.stopMe(), AudioManager.stopSe();
  }
  /**
   * Starts the encounter effect.
   */
  startEncounterEffect() {
    this._spriteset.hideCharacters(), this._encounterEffectDuration = this.encounterEffectSpeed();
  }
  /**
   * Updates the encounter effect.
   */
  updateEncounterEffect() {
    if (this._encounterEffectDuration > 0) {
      this._encounterEffectDuration--;
      const e = this.encounterEffectSpeed(), r = e - this._encounterEffectDuration, s = r / e, o = ((s - 1) * 20 * s + 5) * s + 1, h = $gamePlayer.screenX(), p = $gamePlayer.screenY() - 24;
      r === 2 && ($gameScreen.setZoom(h, p, 1), this.snapForBattleBackground(), this.startFlashForEncounter(e / 2)), $gameScreen.setZoom(h, p, o), r === Math.floor(e / 6) && this.startFlashForEncounter(e / 2), r === Math.floor(e / 2) && (BattleManager.playBattleBgm(), this.startFadeOut(this.fadeSpeed()));
    }
  }
  /**
   * Snaps the background for the battle.
   */
  snapForBattleBackground() {
    this._windowLayer.visible = !1, SceneManager.snapForBackground(), this._windowLayer.visible = !0;
  }
  /**
   * Starts the flash effect for encounter.
   * @param {number} duration The duration of the flash.
   */
  startFlashForEncounter(e) {
    const r = [255, 255, 255, 255];
    $gameScreen.startFlash(r, e);
  }
  /**
   * Gets the speed of the encounter effect.
   * @returns {number} The encounter effect speed.
   */
  encounterEffectSpeed() {
    return 60;
  }
};
const Scene_Map$1 = Scene_Map;
Scene_MenuBase = class extends Scene_Base {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the menu scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the components for the menu scene.
   */
  create() {
    super.create(), this.createBackground(), this.updateActor(), this.createWindowLayer();
  }
  /**
   * Get the current actor in the menu.
   * 
   * @return {Game_Actor} The current actor
   */
  actor() {
    return this._actor;
  }
  /**
   * Update the current actor.
   */
  updateActor() {
    this._actor = $gameParty.menuActor();
  }
  /**
   * Create the background for the menu scene.
   */
  createBackground() {
    this._backgroundSprite = new Sprite(), this._backgroundSprite.bitmap = SceneManager.backgroundBitmap(), this.addChild(this._backgroundSprite);
  }
  /**
   * Set the background opacity.
   * 
   * @param {Number} opacity The opacity to set (0 to 255)
   */
  setBackgroundOpacity(t) {
    this._backgroundSprite.opacity = t;
  }
  /**
   * Create the help window.
   */
  createHelpWindow() {
    this._helpWindow = new Window_Help(), this.addWindow(this._helpWindow);
  }
  /**
   * Switch to the next actor in the menu.
   */
  nextActor() {
    $gameParty.makeMenuActorNext(), this.updateActor(), this.onActorChange();
  }
  /**
   * Switch to the previous actor in the menu.
   */
  previousActor() {
    $gameParty.makeMenuActorPrevious(), this.updateActor(), this.onActorChange();
  }
  /**
   * Handle the event when the actor changes.
   */
  onActorChange() {
  }
};
const Scene_MenuBase$1 = Scene_MenuBase;
Scene_Menu = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  initialize() {
    super.initialize();
  }
  create() {
    super.create(), this.createCommandWindow(), this.createGoldWindow(), this.createStatusWindow();
  }
  start() {
    super.start(), this._statusWindow.refresh();
  }
  createCommandWindow() {
    this._commandWindow = new Window_MenuCommand(0, 0), this._commandWindow.setHandler("item", this.commandItem.bind(this)), this._commandWindow.setHandler("skill", this.commandPersonal.bind(this)), this._commandWindow.setHandler("equip", this.commandPersonal.bind(this)), this._commandWindow.setHandler("status", this.commandPersonal.bind(this)), this._commandWindow.setHandler("formation", this.commandFormation.bind(this)), this._commandWindow.setHandler("options", this.commandOptions.bind(this)), this._commandWindow.setHandler("save", this.commandSave.bind(this)), this._commandWindow.setHandler("gameEnd", this.commandGameEnd.bind(this)), this._commandWindow.setHandler("cancel", this.popScene.bind(this)), this.addWindow(this._commandWindow);
  }
  createGoldWindow() {
    this._goldWindow = new Window_Gold(0, 0), this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height, this.addWindow(this._goldWindow);
  }
  createStatusWindow() {
    this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0), this._statusWindow.reserveFaceImages(), this.addWindow(this._statusWindow);
  }
  commandItem() {
    SceneManager.push(Scene_Item);
  }
  commandPersonal() {
    this._statusWindow.setFormationMode(!1), this._statusWindow.selectLast(), this._statusWindow.activate(), this._statusWindow.setHandler("ok", this.onPersonalOk.bind(this)), this._statusWindow.setHandler("cancel", this.onPersonalCancel.bind(this));
  }
  commandFormation() {
    this._statusWindow.setFormationMode(!0), this._statusWindow.selectLast(), this._statusWindow.activate(), this._statusWindow.setHandler("ok", this.onFormationOk.bind(this)), this._statusWindow.setHandler("cancel", this.onFormationCancel.bind(this));
  }
  commandOptions() {
    SceneManager.push(Scene_Options);
  }
  commandSave() {
    SceneManager.push(Scene_Save);
  }
  commandGameEnd() {
    SceneManager.push(Scene_GameEnd);
  }
  onPersonalOk() {
    switch (this._commandWindow.currentSymbol()) {
      case "skill":
        SceneManager.push(Scene_Skill);
        break;
      case "equip":
        SceneManager.push(Scene_Equip);
        break;
      case "status":
        SceneManager.push(Scene_Status);
        break;
    }
  }
  onPersonalCancel() {
    this._statusWindow.deselect(), this._commandWindow.activate();
  }
  onFormationOk() {
    var t = this._statusWindow.index(), e = $gameParty.members()[t], r = this._statusWindow.pendingIndex();
    r >= 0 ? ($gameParty.swapOrder(t, r), this._statusWindow.setPendingIndex(-1), this._statusWindow.redrawItem(t)) : this._statusWindow.setPendingIndex(t), this._statusWindow.activate();
  }
  onFormationCancel() {
    this._statusWindow.pendingIndex() >= 0 ? (this._statusWindow.setPendingIndex(-1), this._statusWindow.activate()) : (this._statusWindow.deselect(), this._commandWindow.activate());
  }
};
const Scene_Menu$1 = Scene_Menu;
Scene_ItemBase = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the components needed for the item menu.
   */
  create() {
    super.create();
  }
  /**
   * Create the actor window for selecting which actor will use an item.
   */
  createActorWindow() {
    this._actorWindow = new Window_MenuActor(), this._actorWindow.setHandler("ok", this.onActorOk.bind(this)), this._actorWindow.setHandler("cancel", this.onActorCancel.bind(this)), this.addWindow(this._actorWindow);
  }
  /**
   * Get the currently selected item.
   * @returns {object} The selected item.
   */
  item() {
    return this._itemWindow.item();
  }
  /**
   * Get the user (typically the actor) that will use the item.
   * @returns {object|null} The user of the item, or null.
   */
  user() {
    return null;
  }
  /**
   * Check if the cursor is on the left side.
   * @returns {boolean} True if the cursor is on the left side.
   */
  isCursorLeft() {
    return this._itemWindow.index() % 2 === 0;
  }
  /**
   * Show a sub-window, either on the left or right based on cursor position.
   * @param {object} window The window to show.
   */
  showSubWindow(t) {
    t.x = this.isCursorLeft() ? Graphics.boxWidth - t.width : 0, t.show(), t.activate();
  }
  /**
   * Hide a sub-window and reactivate the item window.
   * @param {object} window The window to hide.
   */
  hideSubWindow(t) {
    t.hide(), t.deactivate(), this.activateItemWindow();
  }
  /**
   * Handle selecting an actor and using the item.
   */
  onActorOk() {
    this.canUse() ? this.useItem() : SoundManager.playBuzzer();
  }
  /**
   * Handle canceling item use selection for the actor.
   */
  onActorCancel() {
    this.hideSubWindow(this._actorWindow);
  }
  /**
   * Decide what happens when an item is determined for use.
   */
  determineItem() {
    const t = new Game_Action(this.user()), e = this.item();
    t.setItemObject(e), t.isForFriend() ? (this.showSubWindow(this._actorWindow), this._actorWindow.selectForItem(this.item())) : (this.useItem(), this.activateItemWindow());
  }
  /**
   * Use the selected item and apply its effects.
   */
  useItem() {
    this.playSeForItem(), this.user().useItem(this.item()), this.applyItem(), this.checkCommonEvent(), this.checkGameover(), this._actorWindow.refresh();
  }
  /**
   * Reactivate the item window.
   */
  activateItemWindow() {
    this._itemWindow.refresh(), this._itemWindow.activate();
  }
  /**
   * Get the actors targeted by the item based on its effects.
   * @returns {Array} A list of targeted actors.
   */
  itemTargetActors() {
    const t = new Game_Action(this.user());
    return t.setItemObject(this.item()), t.isForFriend() ? t.isForAll() ? $gameParty.members() : [$gameParty.members()[this._actorWindow.index()]] : [];
  }
  /**
   * Check if the item can be used by the user.
   * @returns {boolean} True if the item can be used.
   */
  canUse() {
    return this.user().canUse(this.item()) && this.isItemEffectsValid();
  }
  /**
   * Validate the effects of the item on its target actors.
   * @returns {boolean} True if the item can have valid effects on at least one target.
   */
  isItemEffectsValid() {
    const t = new Game_Action(this.user());
    return t.setItemObject(this.item()), this.itemTargetActors().some((e) => t.testApply(e));
  }
  /**
   * Apply the item effects to the target actors.
   */
  applyItem() {
    const t = new Game_Action(this.user());
    t.setItemObject(this.item()), this.itemTargetActors().forEach((e) => {
      for (let r = 0; r < t.numRepeats(); r++)
        t.apply(e);
    }), t.applyGlobal();
  }
  /**
   * Check if there is a common event to trigger after using the item.
   */
  checkCommonEvent() {
    $gameTemp.isCommonEventReserved() && SceneManager.goto(Scene_Map);
  }
};
const Scene_ItemBase$1 = Scene_ItemBase;
Scene_Item = class extends Scene_ItemBase {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the components of the item scene.
   */
  create() {
    super.create(), this.createHelpWindow(), this.createCategoryWindow(), this.createItemWindow(), this.createActorWindow();
  }
  /**
   * Create the category window for the item scene.
   */
  createCategoryWindow() {
    this._categoryWindow = new Window_ItemCategory(), this._categoryWindow.setHelpWindow(this._helpWindow), this._categoryWindow.y = this._helpWindow.height, this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this)), this._categoryWindow.setHandler("cancel", this.popScene.bind(this)), this.addWindow(this._categoryWindow);
  }
  /**
   * Create the item window for the item scene.
   */
  createItemWindow() {
    const t = this._categoryWindow.y + this._categoryWindow.height, e = Graphics.boxHeight - t;
    this._itemWindow = new Window_ItemList(0, t, Graphics.boxWidth, e), this._itemWindow.setHelpWindow(this._helpWindow), this._itemWindow.setHandler("ok", this.onItemOk.bind(this)), this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this)), this.addWindow(this._itemWindow), this._categoryWindow.setItemWindow(this._itemWindow);
  }
  /**
   * Get the best actor to use the item.
   * 
   * @return {Game_Actor} The best actor
   */
  user() {
    const t = $gameParty.movableMembers();
    let e = t[0], r = 0;
    for (let s = 0; s < t.length; s++)
      t[s].pha > r && (r = t[s].pha, e = t[s]);
    return e;
  }
  /**
   * Handle the category selection confirmation.
   */
  onCategoryOk() {
    this._itemWindow.activate(), this._itemWindow.selectLast();
  }
  /**
   * Handle the item selection confirmation.
   */
  onItemOk() {
    $gameParty.setLastItem(this.item()), this.determineItem();
  }
  /**
   * Handle the item cancel action.
   */
  onItemCancel() {
    this._itemWindow.deselect(), this._categoryWindow.activate();
  }
  /**
   * Play the sound effect for using an item.
   */
  playSeForItem() {
    SoundManager.playUseItem();
  }
  /**
   * Use the item and update the window.
   */
  useItem() {
    super.useItem(), this._itemWindow.redrawCurrentItem();
  }
};
const Scene_Item$1 = Scene_Item;
Scene_Skill = class extends Scene_ItemBase$1 {
  constructor(...t) {
    super(...t);
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
    super.create(), this.createHelpWindow(), this.createSkillTypeWindow(), this.createStatusWindow(), this.createItemWindow(), this.createActorWindow();
  }
  /**
   * Start the scene and refresh the actor.
   */
  start() {
    super.start(), this.refreshActor();
  }
  /**
   * Create the skill type window for the skill scene.
   */
  createSkillTypeWindow() {
    const t = this._helpWindow.height;
    this._skillTypeWindow = new Window_SkillType(0, t), this._skillTypeWindow.setHelpWindow(this._helpWindow), this._skillTypeWindow.setHandler("skill", this.commandSkill.bind(this)), this._skillTypeWindow.setHandler("cancel", this.popScene.bind(this)), this._skillTypeWindow.setHandler("pagedown", this.nextActor.bind(this)), this._skillTypeWindow.setHandler("pageup", this.previousActor.bind(this)), this.addWindow(this._skillTypeWindow);
  }
  /**
   * Create the status window for the skill scene.
   */
  createStatusWindow() {
    const t = this._skillTypeWindow.width, e = this._helpWindow.height, r = Graphics.boxWidth - t, s = this._skillTypeWindow.height;
    this._statusWindow = new Window_SkillStatus(t, e, r, s), this._statusWindow.reserveFaceImages(), this.addWindow(this._statusWindow);
  }
  /**
   * Create the item window for the skill scene.
   */
  createItemWindow() {
    const e = this._statusWindow.y + this._statusWindow.height, r = Graphics.boxWidth, s = Graphics.boxHeight - e;
    this._itemWindow = new Window_SkillList(0, e, r, s), this._itemWindow.setHelpWindow(this._helpWindow), this._itemWindow.setHandler("ok", this.onItemOk.bind(this)), this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this)), this._skillTypeWindow.setSkillWindow(this._itemWindow), this.addWindow(this._itemWindow);
  }
  /**
   * Refresh the actor's information in the windows.
   */
  refreshActor() {
    const t = this.actor();
    this._skillTypeWindow.setActor(t), this._statusWindow.setActor(t), this._itemWindow.setActor(t);
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
    this._itemWindow.activate(), this._itemWindow.selectLast();
  }
  /**
   * Handle the item selection confirmation.
   */
  onItemOk() {
    this.actor().setLastMenuSkill(this.item()), this.determineItem();
  }
  /**
   * Handle the item cancel action.
   */
  onItemCancel() {
    this._itemWindow.deselect(), this._skillTypeWindow.activate();
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
    super.useItem(), this._statusWindow.refresh(), this._itemWindow.refresh();
  }
  /**
   * Handle the actor change event.
   */
  onActorChange() {
    this.refreshActor(), this._skillTypeWindow.activate();
  }
};
const Scene_Skill$1 = Scene_Skill;
Scene_Equip = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
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
    super.create(), this.createHelpWindow(), this.createStatusWindow(), this.createCommandWindow(), this.createSlotWindow(), this.createItemWindow(), this.refreshActor();
  }
  /**
   * Create the status window for the character.
   */
  createStatusWindow() {
    this._statusWindow = new Window_EquipStatus(0, this._helpWindow.height), this.addWindow(this._statusWindow);
  }
  /**
   * Create the command window for equipment actions.
   */
  createCommandWindow() {
    const t = this._statusWindow.width, e = this._helpWindow.height, r = Graphics.boxWidth - this._statusWindow.width;
    this._commandWindow = new Window_EquipCommand(t, e, r), this._commandWindow.setHelpWindow(this._helpWindow), this._commandWindow.setHandler("equip", this.commandEquip.bind(this)), this._commandWindow.setHandler("optimize", this.commandOptimize.bind(this)), this._commandWindow.setHandler("clear", this.commandClear.bind(this)), this._commandWindow.setHandler("cancel", this.popScene.bind(this)), this._commandWindow.setHandler("pagedown", this.nextActor.bind(this)), this._commandWindow.setHandler("pageup", this.previousActor.bind(this)), this.addWindow(this._commandWindow);
  }
  /**
   * Create the slot window for selecting equipment slots.
   */
  createSlotWindow() {
    const t = this._statusWindow.width, e = this._commandWindow.y + this._commandWindow.height, r = Graphics.boxWidth - this._statusWindow.width, s = this._statusWindow.height - this._commandWindow.height;
    this._slotWindow = new Window_EquipSlot(t, e, r, s), this._slotWindow.setHelpWindow(this._helpWindow), this._slotWindow.setStatusWindow(this._statusWindow), this._slotWindow.setHandler("ok", this.onSlotOk.bind(this)), this._slotWindow.setHandler("cancel", this.onSlotCancel.bind(this)), this.addWindow(this._slotWindow);
  }
  /**
   * Create the item window for selecting items to equip.
   */
  createItemWindow() {
    const e = this._statusWindow.y + this._statusWindow.height, r = Graphics.boxWidth, s = Graphics.boxHeight - e;
    this._itemWindow = new Window_EquipItem(0, e, r, s), this._itemWindow.setHelpWindow(this._helpWindow), this._itemWindow.setStatusWindow(this._statusWindow), this._itemWindow.setHandler("ok", this.onItemOk.bind(this)), this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this)), this._slotWindow.setItemWindow(this._itemWindow), this.addWindow(this._itemWindow);
  }
  /**
   * Refresh the actor's equipment windows.
   */
  refreshActor() {
    const t = this.actor();
    this._statusWindow.setActor(t), this._slotWindow.setActor(t), this._itemWindow.setActor(t);
  }
  /**
   * Handle the equip command selection.
   */
  commandEquip() {
    this._slotWindow.activate(), this._slotWindow.select(0);
  }
  /**
   * Handle the optimize command selection.
   */
  commandOptimize() {
    SoundManager.playEquip(), this.actor().optimizeEquipments(), this._statusWindow.refresh(), this._slotWindow.refresh(), this._commandWindow.activate();
  }
  /**
   * Handle the clear command selection.
   */
  commandClear() {
    SoundManager.playEquip(), this.actor().clearEquipments(), this._statusWindow.refresh(), this._slotWindow.refresh(), this._commandWindow.activate();
  }
  /**
   * Handle the slot selection.
   */
  onSlotOk() {
    this._itemWindow.activate(), this._itemWindow.select(0);
  }
  /**
   * Handle the slot cancel action.
   */
  onSlotCancel() {
    this._slotWindow.deselect(), this._commandWindow.activate();
  }
  /**
   * Handle the item selection for equipping.
   */
  onItemOk() {
    SoundManager.playEquip(), this.actor().changeEquip(this._slotWindow.index(), this._itemWindow.item()), this._slotWindow.activate(), this._slotWindow.refresh(), this._itemWindow.deselect(), this._itemWindow.refresh(), this._statusWindow.refresh();
  }
  /**
   * Handle the item cancel action.
   */
  onItemCancel() {
    this._slotWindow.activate(), this._itemWindow.deselect();
  }
  /**
   * Handle the actor change event.
   */
  onActorChange() {
    this.refreshActor(), this._commandWindow.activate();
  }
};
const Scene_Equip$1 = Scene_Equip;
Scene_Status = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initializes the status scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Creates the status scene's elements.
   */
  create() {
    super.create(), this._statusWindow = new Window_Status(), this._statusWindow.setHandler("cancel", this.popScene.bind(this)), this._statusWindow.setHandler("pagedown", this.nextActor.bind(this)), this._statusWindow.setHandler("pageup", this.previousActor.bind(this)), this._statusWindow.reserveFaceImages(), this.addWindow(this._statusWindow);
  }
  /**
   * Starts the status scene by refreshing the actor's information.
   */
  start() {
    super.start(), this.refreshActor();
  }
  /**
   * Refreshes the actor's information in the status window.
   */
  refreshActor() {
    const t = this.actor();
    this._statusWindow.setActor(t);
  }
  /**
   * Handles actor change and refreshes the status window.
   */
  onActorChange() {
    this.refreshActor(), this._statusWindow.activate();
  }
};
const Scene_Status$1 = Scene_Status;
Scene_Options = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  initialize() {
    super.initialize();
  }
  create() {
    super.create(), this.createOptionsWindow();
  }
  terminate() {
    super.terminate(), ConfigManager.save();
  }
  createOptionsWindow() {
    this._optionsWindow = new Window_Options(), this._optionsWindow.setHandler("cancel", this.popScene.bind(this)), this.addWindow(this._optionsWindow);
  }
};
const Scene_Options$1 = Scene_Options;
Scene_File = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the necessary components for the file scene.
   */
  create() {
    super.create(), DataManager.loadAllSavefileImages(), this.createHelpWindow(), this.createListWindow();
  }
  /**
   * Start the scene and refresh the savefile list.
   */
  start() {
    super.start(), this._listWindow.refresh();
  }
  /**
   * Get the savefile ID for the selected index.
   * 
   * @returns {number} The savefile ID.
   */
  savefileId() {
    return this._listWindow.index() + 1;
  }
  /**
   * Create the help window for displaying context or instructions.
   */
  createHelpWindow() {
    this._helpWindow = new Window_Help(1), this._helpWindow.setText(this.helpWindowText()), this.addWindow(this._helpWindow);
  }
  /**
   * Create the list window displaying the savefiles.
   */
  createListWindow() {
    const e = this._helpWindow.height, r = Graphics.boxWidth, s = Graphics.boxHeight - e;
    this._listWindow = new Window_SavefileList(0, e, r, s), this._listWindow.setHandler("ok", this.onSavefileOk.bind(this)), this._listWindow.setHandler("cancel", this.popScene.bind(this)), this._listWindow.select(this.firstSavefileIndex()), this._listWindow.setTopRow(this.firstSavefileIndex() - 2), this._listWindow.setMode(this.mode()), this._listWindow.refresh(), this.addWindow(this._listWindow);
  }
  /**
   * Get the mode for the scene (null for now, can be overridden in subclasses).
   * 
   * @returns {null} Currently returns null, can be modified in subclasses.
   */
  mode() {
    return null;
  }
  /**
   * Activate the list window to allow selection.
   */
  activateListWindow() {
    this._listWindow.activate();
  }
  /**
   * Get the text to be displayed in the help window.
   * 
   * @returns {string} The help text.
   */
  helpWindowText() {
    return "";
  }
  /**
   * Get the index of the first savefile in the list.
   * 
   * @returns {number} The first savefile index.
   */
  firstSavefileIndex() {
    return 0;
  }
  /**
   * Placeholder method to be overridden in subclasses for savefile selection.
   */
  onSavefileOk() {
  }
};
const Scene_File$1 = Scene_File;
Scene_Save = class extends Scene_File {
  constructor(...t) {
    super(...t);
  }
  initialize() {
    super.initialize();
  }
  mode() {
    return "save";
  }
  helpWindowText() {
    return TextManager.saveMessage;
  }
  firstSavefileIndex() {
    return DataManager.lastAccessedSavefileId() - 1;
  }
  onSavefileOk() {
    super.onSavefileOk(), $gameSystem.onBeforeSave(), DataManager.saveGame(this.savefileId()) ? this.onSaveSuccess() : this.onSaveFailure();
  }
  onSaveSuccess() {
    SoundManager.playSave(), StorageManager.cleanBackup(this.savefileId()), this.popScene();
  }
  onSaveFailure() {
    SoundManager.playBuzzer(), this.activateListWindow();
  }
};
const Scene_Save$1 = Scene_Save;
Scene_Load = class extends Scene_File {
  constructor(...t) {
    super(...t), this._loadSuccess = !1;
  }
  /**
   * Terminate the scene.
   * If the load was successful, perform post-load actions.
   */
  terminate() {
    super.terminate(), this._loadSuccess && $gameSystem.onAfterLoad();
  }
  /**
   * Define the mode of the scene as 'load'.
   */
  mode() {
    return "load";
  }
  /**
   * Provide the help text displayed on the load screen.
   */
  helpWindowText() {
    return TextManager.loadMessage;
  }
  /**
   * Return the first save file index based on the most recent savefile ID.
   */
  firstSavefileIndex() {
    return DataManager.latestSavefileId() - 1;
  }
  /**
   * Handle the selection of a save file.
   * Attempts to load the selected game file and handle success/failure.
   */
  onSavefileOk() {
    super.onSavefileOk();
    const t = this.savefileId();
    DataManager.loadGame(t) ? this.onLoadSuccess() : this.onLoadFailure();
  }
  /**
   * Handle successful game load.
   * Plays load sound, fades out the scene, reloads the map if necessary, 
   * and transitions to the game map.
   */
  onLoadSuccess() {
    SoundManager.playLoad(), this.fadeOutAll(), this.reloadMapIfUpdated(), SceneManager.goto(Scene_Map), this._loadSuccess = !0;
  }
  /**
   * Handle failed load attempt.
   * Plays an error sound and reactivates the list window for file selection.
   */
  onLoadFailure() {
    SoundManager.playBuzzer(), this.activateListWindow();
  }
  /**
   * Reload the map if the game version has changed.
   */
  reloadMapIfUpdated() {
    $gameSystem.versionId() !== $dataSystem.versionId && ($gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y), $gamePlayer.requestMapReload());
  }
};
const Scene_Load$1 = Scene_Load;
Scene_GameEnd = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the necessary components for the game end screen.
   */
  create() {
    super.create(), this.createCommandWindow();
  }
  /**
   * Stop the scene, closing the command window.
   */
  stop() {
    super.stop(), this._commandWindow.close();
  }
  /**
   * Create the background for the game end screen with reduced opacity.
   */
  createBackground() {
    super.createBackground(), this.setBackgroundOpacity(128);
  }
  /**
   * Create the command window for the game end screen with options.
   */
  createCommandWindow() {
    this._commandWindow = new Window_GameEnd(), this._commandWindow.setHandler("toTitle", this.commandToTitle.bind(this)), this._commandWindow.setHandler("cancel", this.popScene.bind(this)), this.addWindow(this._commandWindow);
  }
  /**
   * Command to return to the title screen when selected.
   */
  commandToTitle() {
    this.fadeOutAll(), SceneManager.goto(Scene_Title);
  }
};
const Scene_GameEnd$1 = Scene_GameEnd;
Scene_Shop = class extends Scene_MenuBase {
  /**
   * Initializes the scene.
   * @param {...*} args The arguments passed to the constructor.
   */
  constructor(...t) {
    super(...t);
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
  prepare(t, e) {
    this._goods = t, this._purchaseOnly = e, this._item = null;
  }
  /**
   * Creates the various windows and UI elements in the scene.
   */
  create() {
    super.create(), this.createHelpWindow(), this.createGoldWindow(), this.createCommandWindow(), this.createDummyWindow(), this.createNumberWindow(), this.createStatusWindow(), this.createBuyWindow(), this.createCategoryWindow(), this.createSellWindow();
  }
  /**
   * Creates the gold window displaying the player's current amount of gold.
   */
  createGoldWindow() {
    this._goldWindow = new Window_Gold(0, this._helpWindow.height), this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width, this.addWindow(this._goldWindow);
  }
  /**
   * Creates the command window where the user can choose between buying, selling, or canceling.
   */
  createCommandWindow() {
    this._commandWindow = new Window_ShopCommand(this._goldWindow.x, this._purchaseOnly), this._commandWindow.y = this._helpWindow.height, this._commandWindow.setHandler("buy", this.commandBuy.bind(this)), this._commandWindow.setHandler("sell", this.commandSell.bind(this)), this._commandWindow.setHandler("cancel", this.popScene.bind(this)), this.addWindow(this._commandWindow);
  }
  /**
   * Creates a dummy window used for layout purposes.
   */
  createDummyWindow() {
    var t = this._commandWindow.y + this._commandWindow.height, e = Graphics.boxHeight - t;
    this._dummyWindow = new Window_Base(0, t, Graphics.boxWidth, e), this.addWindow(this._dummyWindow);
  }
  /**
   * Creates the number input window for purchasing or selling items.
   */
  createNumberWindow() {
    var t = this._dummyWindow.y, e = this._dummyWindow.height;
    this._numberWindow = new Window_ShopNumber(0, t, e), this._numberWindow.hide(), this._numberWindow.setHandler("ok", this.onNumberOk.bind(this)), this._numberWindow.setHandler("cancel", this.onNumberCancel.bind(this)), this.addWindow(this._numberWindow);
  }
  /**
   * Creates the status window to display information about the selected item.
   */
  createStatusWindow() {
    var t = this._numberWindow.width, e = this._dummyWindow.y, r = Graphics.boxWidth - t, s = this._dummyWindow.height;
    this._statusWindow = new Window_ShopStatus(t, e, r, s), this._statusWindow.hide(), this.addWindow(this._statusWindow);
  }
  /**
   * Creates the buy window where the user can select which items to purchase.
   */
  createBuyWindow() {
    var t = this._dummyWindow.y, e = this._dummyWindow.height;
    this._buyWindow = new Window_ShopBuy(0, t, e, this._goods), this._buyWindow.setHelpWindow(this._helpWindow), this._buyWindow.setStatusWindow(this._statusWindow), this._buyWindow.hide(), this._buyWindow.setHandler("ok", this.onBuyOk.bind(this)), this._buyWindow.setHandler("cancel", this.onBuyCancel.bind(this)), this.addWindow(this._buyWindow);
  }
  /**
   * Creates the category window for selecting different item categories.
   */
  createCategoryWindow() {
    this._categoryWindow = new Window_ItemCategory(), this._categoryWindow.setHelpWindow(this._helpWindow), this._categoryWindow.y = this._dummyWindow.y, this._categoryWindow.hide(), this._categoryWindow.deactivate(), this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this)), this._categoryWindow.setHandler("cancel", this.onCategoryCancel.bind(this)), this.addWindow(this._categoryWindow);
  }
  /**
   * Creates the sell window where the user can sell items to the shop.
   */
  createSellWindow() {
    var t = this._categoryWindow.y + this._categoryWindow.height, e = Graphics.boxHeight - t;
    this._sellWindow = new Window_ShopSell(0, t, Graphics.boxWidth, e), this._sellWindow.setHelpWindow(this._helpWindow), this._sellWindow.hide(), this._sellWindow.setHandler("ok", this.onSellOk.bind(this)), this._sellWindow.setHandler("cancel", this.onSellCancel.bind(this)), this._categoryWindow.setItemWindow(this._sellWindow), this.addWindow(this._sellWindow);
  }
  /**
   * Activates the buy window and prepares it for user input.
   */
  activateBuyWindow() {
    this._buyWindow.setMoney(this.money()), this._buyWindow.show(), this._buyWindow.activate(), this._statusWindow.show();
  }
  /**
   * Activates the sell window and prepares it for user input.
   */
  activateSellWindow() {
    this._categoryWindow.show(), this._sellWindow.refresh(), this._sellWindow.show(), this._sellWindow.activate(), this._statusWindow.hide();
  }
  /**
   * Handles the buy command, displaying the buy window.
   */
  commandBuy() {
    this._dummyWindow.hide(), this.activateBuyWindow();
  }
  /**
   * Handles the sell command, displaying the sell window.
   */
  commandSell() {
    this._dummyWindow.hide(), this._categoryWindow.show(), this._categoryWindow.activate(), this._sellWindow.show(), this._sellWindow.deselect(), this._sellWindow.refresh();
  }
  /**
   * Handles the "OK" action after selecting an item to buy.
   */
  onBuyOk() {
    this._item = this._buyWindow.item(), this._buyWindow.hide(), this._numberWindow.setup(this._item, this.maxBuy(), this.buyingPrice()), this._numberWindow.setCurrencyUnit(this.currencyUnit()), this._numberWindow.show(), this._numberWindow.activate();
  }
  /**
   * Handles the "Cancel" action while buying an item.
   */
  onBuyCancel() {
    this._commandWindow.activate(), this._dummyWindow.show(), this._buyWindow.hide(), this._statusWindow.hide(), this._statusWindow.setItem(null), this._helpWindow.clear();
  }
  /**
   * Handles the "OK" action after selecting an item category.
   */
  onCategoryOk() {
    this.activateSellWindow(), this._sellWindow.select(0);
  }
  /**
   * Handles the "Cancel" action while selecting an item category.
   */
  onCategoryCancel() {
    this._commandWindow.activate(), this._dummyWindow.show(), this._categoryWindow.hide(), this._sellWindow.hide();
  }
  /**
   * Handles the "OK" action after selecting an item to sell.
   */
  onSellOk() {
    this._item = this._sellWindow.item(), this._categoryWindow.hide(), this._sellWindow.hide(), this._numberWindow.setup(this._item, this.maxSell(), this.sellingPrice()), this._numberWindow.setCurrencyUnit(this.currencyUnit()), this._numberWindow.show(), this._numberWindow.activate(), this._statusWindow.setItem(this._item), this._statusWindow.show();
  }
  /**
   * Handles the "Cancel" action while selling an item.
   */
  onSellCancel() {
    this._sellWindow.deselect(), this._categoryWindow.activate(), this._statusWindow.setItem(null), this._helpWindow.clear();
  }
  /**
   * Handles the number input "OK" action after entering a quantity.
   */
  onNumberOk() {
    switch (SoundManager.playShop(), this._commandWindow.currentSymbol()) {
      case "buy":
        this.doBuy(this._numberWindow.number());
        break;
      case "sell":
        this.doSell(this._numberWindow.number());
        break;
    }
    this.endNumberInput(), this._goldWindow.refresh(), this._statusWindow.refresh();
  }
  /**
   * Handles the number input "Cancel" action.
   */
  onNumberCancel() {
    SoundManager.playCancel(), this.endNumberInput();
  }
  /**
   * Performs the buying operation for the specified number of items.
   * @param {number} number The number of items to buy.
   */
  doBuy(t) {
    $gameParty.loseGold(t * this.buyingPrice()), $gameParty.gainItem(this._item, t);
  }
  /**
   * Performs the selling operation for the specified number of items.
   * @param {number} number The number of items to sell.
   */
  doSell(t) {
    $gameParty.gainGold(t * this.sellingPrice()), $gameParty.loseItem(this._item, t);
  }
  /**
   * Ends the number input and returns to the appropriate window.
   */
  endNumberInput() {
    switch (this._numberWindow.hide(), this._commandWindow.currentSymbol()) {
      case "buy":
        this.activateBuyWindow();
        break;
      case "sell":
        this.activateSellWindow();
        break;
    }
  }
  /**
   * Returns the maximum number of items that can be bought based on the player's gold and item limit.
   * @returns {number} The maximum number of items that can be bought.
   */
  maxBuy() {
    var t = $gameParty.maxItems(this._item) - $gameParty.numItems(this._item), e = this.buyingPrice();
    return e > 0 ? Math.min(t, Math.floor(this.money() / e)) : t;
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
};
const Scene_Shop$1 = Scene_Shop;
Scene_Name = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  initialize() {
    super.initialize();
  }
  prepare(t, e) {
    this._actorId = t, this._maxLength = e;
  }
  create() {
    super.create(), this._actor = $gameActors.actor(this._actorId), this.createEditWindow(), this.createInputWindow();
  }
  start() {
    super.start(), this._editWindow.refresh();
  }
  createEditWindow() {
    this._editWindow = new Window_NameEdit(this._actor, this._maxLength), this.addWindow(this._editWindow);
  }
  createInputWindow() {
    this._inputWindow = new Window_NameInput(this._editWindow), this._inputWindow.setHandler("ok", this.onInputOk.bind(this)), this.addWindow(this._inputWindow);
  }
  onInputOk() {
    this._actor.setName(this._editWindow.name()), this.popScene();
  }
};
const Scene_Name$1 = Scene_Name;
Scene_Debug = class extends Scene_MenuBase {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the components for the debug screen.
   */
  create() {
    super.create(), this.createRangeWindow(), this.createEditWindow(), this.createDebugHelpWindow();
  }
  /**
   * Create the range selection window.
   */
  createRangeWindow() {
    this._rangeWindow = new Window_DebugRange(0, 0), this._rangeWindow.setHandler("ok", this.onRangeOk.bind(this)), this._rangeWindow.setHandler("cancel", this.popScene.bind(this)), this.addWindow(this._rangeWindow);
  }
  /**
   * Create the edit window for modifying values.
   */
  createEditWindow() {
    const t = this._rangeWindow.width, e = Graphics.boxWidth - t;
    this._editWindow = new Window_DebugEdit(t, 0, e), this._editWindow.setHandler("cancel", this.onEditCancel.bind(this)), this._rangeWindow.setEditWindow(this._editWindow), this.addWindow(this._editWindow);
  }
  /**
   * Create the debug help window.
   */
  createDebugHelpWindow() {
    const t = this._editWindow.x, e = this._editWindow.height, r = this._editWindow.width, s = Graphics.boxHeight - e;
    this._debugHelpWindow = new Window_Base(t, e, r, s), this.addWindow(this._debugHelpWindow);
  }
  /**
   * Handle the OK action for the range window.
   */
  onRangeOk() {
    this._editWindow.activate(), this._editWindow.select(0), this.refreshHelpWindow();
  }
  /**
   * Handle the cancel action for the edit window.
   */
  onEditCancel() {
    this._rangeWindow.activate(), this._editWindow.deselect(), this.refreshHelpWindow();
  }
  /**
   * Refresh the help window contents based on the current state.
   */
  refreshHelpWindow() {
    this._debugHelpWindow.contents.clear(), this._editWindow.active && this._debugHelpWindow.drawTextEx(this.helpText(), 4, 0);
  }
  /**
   * Get the help text to display in the help window.
   * 
   * @return {string} The help text for the current mode.
   */
  helpText() {
    return this._rangeWindow.mode() === "switch" ? "Enter : ON / OFF" : `Left     :  -1
Right    :  +1
Pageup   : -10
Pagedown : +10`;
  }
};
const Scene_Debug$1 = Scene_Debug;
Scene_Battle = class extends Scene_Base {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize Scene_Battle properties.
   * Can be called via `Scene_Battle.prototype.initialize.call(this)` for compatibility.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Creates the display objects for the battle scene.
   */
  create() {
    super.create(), this.createDisplayObjects();
  }
  /**
   * Starts the battle scene.
   */
  start() {
    super.start(), this.startFadeIn(this.fadeSpeed(), !1), BattleManager.playBattleBgm(), BattleManager.startBattle();
  }
  /**
   * Updates the battle scene.
   */
  update() {
    const t = this.isActive();
    $gameTimer.update(t), $gameScreen.update(), this.updateStatusWindow(), this.updateWindowPositions(), t && !this.isBusy() && this.updateBattleProcess(), super.update();
  }
  /**
   * Updates the battle process.
   */
  updateBattleProcess() {
    (!this.isAnyInputWindowActive() || BattleManager.isAborting() || BattleManager.isBattleEnd()) && (BattleManager.update(), this.changeInputWindow());
  }
  /**
   * Checks if any input window is active.
   * @returns {boolean} True if any input window is active, otherwise false.
   */
  isAnyInputWindowActive() {
    return this._partyCommandWindow.active || this._actorCommandWindow.active || this._skillWindow.active || this._itemWindow.active || this._actorWindow.active || this._enemyWindow.active;
  }
  /**
   * Changes the input window based on the current state.
   */
  changeInputWindow() {
    BattleManager.isInputting() ? BattleManager.actor() ? this.startActorCommandSelection() : this.startPartyCommandSelection() : this.endCommandSelection();
  }
  /**
   * Stops the battle scene.
   */
  stop() {
    super.stop(), this.needsSlowFadeOut() ? this.startFadeOut(this.slowFadeSpeed(), !1) : this.startFadeOut(this.fadeSpeed(), !1), this._statusWindow.close(), this._partyCommandWindow.close(), this._actorCommandWindow.close();
  }
  /**
   * Terminates the battle scene.
   */
  terminate() {
    super.terminate(), $gameParty.onBattleEnd(), $gameTroop.onBattleEnd(), AudioManager.stopMe(), ImageManager.clearRequest();
  }
  /**
   * Checks if the battle scene needs a slow fade out.
   * @returns {boolean} True if the next scene requires a slow fade out, otherwise false.
   */
  needsSlowFadeOut() {
    return SceneManager.isNextScene(Scene_Title) || SceneManager.isNextScene(Scene_Gameover);
  }
  /**
   * Updates the status window based on the battle scene's state.
   */
  updateStatusWindow() {
    $gameMessage.isBusy() ? (this._statusWindow.close(), this._partyCommandWindow.close(), this._actorCommandWindow.close()) : this.isActive() && !this._messageWindow.isClosing() && this._statusWindow.open();
  }
  /**
   * Updates the positions of the windows.
   */
  updateWindowPositions() {
    let t = 0;
    BattleManager.isInputting() ? t = this._partyCommandWindow.width : t = this._partyCommandWindow.width / 2, this._statusWindow.x < t && (this._statusWindow.x += 16, this._statusWindow.x > t && (this._statusWindow.x = t)), this._statusWindow.x > t && (this._statusWindow.x -= 16, this._statusWindow.x < t && (this._statusWindow.x = t));
  }
  /**
   * Creates all the display objects for the battle scene.
   */
  createDisplayObjects() {
    this.createSpriteset(), this.createWindowLayer(), this.createAllWindows(), BattleManager.setLogWindow(this._logWindow), BattleManager.setStatusWindow(this._statusWindow), BattleManager.setSpriteset(this._spriteset), this._logWindow.setSpriteset(this._spriteset);
  }
  /**
   * Creates the spriteset for the battle scene.
   */
  createSpriteset() {
    this._spriteset = new Spriteset_Battle(), this.addChild(this._spriteset);
  }
  /**
   * Creates all the windows for the battle scene.
   */
  createAllWindows() {
    this.createLogWindow(), this.createStatusWindow(), this.createPartyCommandWindow(), this.createActorCommandWindow(), this.createHelpWindow(), this.createSkillWindow(), this.createItemWindow(), this.createActorWindow(), this.createEnemyWindow(), this.createMessageWindow(), this.createScrollTextWindow();
  }
  /**
   * Creates the log window.
   */
  createLogWindow() {
    this._logWindow = new Window_BattleLog(), this.addWindow(this._logWindow);
  }
  /**
   * Creates the status window.
   */
  createStatusWindow() {
    this._statusWindow = new Window_BattleStatus(), this.addWindow(this._statusWindow);
  }
  /**
   * Creates the party command window.
   */
  createPartyCommandWindow() {
    this._partyCommandWindow = new Window_PartyCommand(), this._partyCommandWindow.setHandler("fight", this.commandFight.bind(this)), this._partyCommandWindow.setHandler("escape", this.commandEscape.bind(this)), this._partyCommandWindow.deselect(), this.addWindow(this._partyCommandWindow);
  }
  /**
   * Creates the actor command window.
   */
  createActorCommandWindow() {
    this._actorCommandWindow = new Window_ActorCommand(), this._actorCommandWindow.setHandler("attack", this.commandAttack.bind(this)), this._actorCommandWindow.setHandler("skill", this.commandSkill.bind(this)), this._actorCommandWindow.setHandler("guard", this.commandGuard.bind(this)), this._actorCommandWindow.setHandler("item", this.commandItem.bind(this)), this._actorCommandWindow.setHandler("cancel", this.selectPreviousCommand.bind(this)), this.addWindow(this._actorCommandWindow);
  }
  /**
   * Creates the help window.
   */
  createHelpWindow() {
    this._helpWindow = new Window_Help(), this._helpWindow.visible = !1, this.addWindow(this._helpWindow);
  }
  /**
   * Creates the skill window.
   */
  createSkillWindow() {
    const t = this._helpWindow.y + this._helpWindow.height, e = this._statusWindow.y - t;
    this._skillWindow = new Window_BattleSkill(0, t, Graphics.boxWidth, e), this._skillWindow.setHelpWindow(this._helpWindow), this._skillWindow.setHandler("ok", this.onSkillOk.bind(this)), this._skillWindow.setHandler("cancel", this.onSkillCancel.bind(this)), this.addWindow(this._skillWindow);
  }
  /**
   * Creates the item window.
   */
  createItemWindow() {
    const t = this._helpWindow.y + this._helpWindow.height, e = this._statusWindow.y - t;
    this._itemWindow = new Window_BattleItem(0, t, Graphics.boxWidth, e), this._itemWindow.setHelpWindow(this._helpWindow), this._itemWindow.setHandler("ok", this.onItemOk.bind(this)), this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this)), this.addWindow(this._itemWindow);
  }
  /**
   * Creates the actor window.
   */
  createActorWindow() {
    this._actorWindow = new Window_BattleActor(0, this._statusWindow.y), this._actorWindow.setHandler("ok", this.onActorOk.bind(this)), this._actorWindow.setHandler("cancel", this.onActorCancel.bind(this)), this.addWindow(this._actorWindow);
  }
  /**
   * Creates the enemy window.
   */
  createEnemyWindow() {
    this._enemyWindow = new Window_BattleEnemy(0, this._statusWindow.y), this._enemyWindow.x = Graphics.boxWidth - this._enemyWindow.width, this._enemyWindow.setHandler("ok", this.onEnemyOk.bind(this)), this._enemyWindow.setHandler("cancel", this.onEnemyCancel.bind(this)), this.addWindow(this._enemyWindow);
  }
  /**
   * Creates the message window.
   */
  createMessageWindow() {
    this._messageWindow = new Window_Message(), this.addWindow(this._messageWindow), this._messageWindow.subWindows().forEach((t) => {
      this.addWindow(t);
    });
  }
  /**
   * Creates the scroll text window.
   */
  createScrollTextWindow() {
    this._scrollTextWindow = new Window_ScrollText(), this.addWindow(this._scrollTextWindow);
  }
  /**
   * Refreshes the status window.
   */
  refreshStatus() {
    this._statusWindow.refresh();
  }
  /**
   * Starts the party command selection.
   */
  startPartyCommandSelection() {
    this.refreshStatus(), this._statusWindow.deselect(), this._statusWindow.open(), this._actorCommandWindow.close(), this._partyCommandWindow.setup();
  }
  /**
   * Selects the next command.
   */
  selectNextCommand() {
    this._partyCommandWindow.active && this._partyCommandWindow.selectNextCommand();
  }
  commandFight() {
    this.selectNextCommand();
  }
  commandEscape() {
    BattleManager.processEscape(), this.changeInputWindow();
  }
  startActorCommandSelection() {
    this._statusWindow.select(BattleManager.actor().index()), this._partyCommandWindow.close(), this._actorCommandWindow.setup(BattleManager.actor());
  }
  commandAttack() {
    BattleManager.inputtingAction().setAttack(), this.selectEnemySelection();
  }
  commandSkill() {
    this._skillWindow.setActor(BattleManager.actor()), this._skillWindow.setStypeId(this._actorCommandWindow.currentExt()), this._skillWindow.refresh(), this._skillWindow.show(), this._skillWindow.activate();
  }
  commandGuard() {
    BattleManager.inputtingAction().setGuard(), this.selectNextCommand();
  }
  commandItem() {
    this._itemWindow.refresh(), this._itemWindow.show(), this._itemWindow.activate();
  }
  selectNextCommand() {
    BattleManager.selectNextCommand(), this.changeInputWindow();
  }
  selectPreviousCommand() {
    BattleManager.selectPreviousCommand(), this.changeInputWindow();
  }
  selectActorSelection() {
    this._actorWindow.refresh(), this._actorWindow.show(), this._actorWindow.activate();
  }
  onActorOk() {
    var t = BattleManager.inputtingAction();
    t.setTarget(this._actorWindow.index()), this._actorWindow.hide(), this._skillWindow.hide(), this._itemWindow.hide(), this.selectNextCommand();
  }
  onActorCancel() {
    switch (this._actorWindow.hide(), this._actorCommandWindow.currentSymbol()) {
      case "skill":
        this._skillWindow.show(), this._skillWindow.activate();
        break;
      case "item":
        this._itemWindow.show(), this._itemWindow.activate();
        break;
    }
  }
  selectEnemySelection() {
    this._enemyWindow.refresh(), this._enemyWindow.show(), this._enemyWindow.select(0), this._enemyWindow.activate();
  }
  onEnemyOk() {
    var t = BattleManager.inputtingAction();
    t.setTarget(this._enemyWindow.enemyIndex()), this._enemyWindow.hide(), this._skillWindow.hide(), this._itemWindow.hide(), this.selectNextCommand();
  }
  onEnemyCancel() {
    switch (this._enemyWindow.hide(), this._actorCommandWindow.currentSymbol()) {
      case "attack":
        this._actorCommandWindow.activate();
        break;
      case "skill":
        this._skillWindow.show(), this._skillWindow.activate();
        break;
      case "item":
        this._itemWindow.show(), this._itemWindow.activate();
        break;
    }
  }
  onSkillOk() {
    var t = this._skillWindow.item(), e = BattleManager.inputtingAction();
    e.setSkill(t.id), BattleManager.actor().setLastBattleSkill(t), this.onSelectAction();
  }
  onSkillCancel() {
    this._skillWindow.hide(), this._actorCommandWindow.activate();
  }
  onItemOk() {
    var t = this._itemWindow.item(), e = BattleManager.inputtingAction();
    e.setItem(t.id), $gameParty.setLastItem(t), this.onSelectAction();
  }
  onItemCancel() {
    this._itemWindow.hide(), this._actorCommandWindow.activate();
  }
  onSelectAction() {
    var t = BattleManager.inputtingAction();
    this._skillWindow.hide(), this._itemWindow.hide(), t.needsSelection() ? t.isForOpponent() ? this.selectEnemySelection() : this.selectActorSelection() : this.selectNextCommand();
  }
  endCommandSelection() {
    this._partyCommandWindow.close(), this._actorCommandWindow.close(), this._statusWindow.deselect();
  }
};
const Scene_Battle$1 = Scene_Battle;
Scene_Gameover = class extends Scene_Base {
  constructor(...t) {
    super(...t);
  }
  /**
   * Initialize the scene.
   */
  initialize() {
    super.initialize();
  }
  /**
   * Create the components for the game over scene.
   */
  create() {
    super.create(), this.playGameoverMusic(), this.createBackground();
  }
  /**
   * Start the game over scene.
   */
  start() {
    super.start(), this.startFadeIn(this.slowFadeSpeed(), !1);
  }
  /**
   * Update the game over scene.
   */
  update() {
    this.isActive() && !this.isBusy() && this.isTriggered() && this.gotoTitle(), super.update();
  }
  /**
   * Stop the game over scene.
   */
  stop() {
    super.stop(), this.fadeOutAll();
  }
  /**
   * Terminate the game over scene.
   */
  terminate() {
    super.terminate(), AudioManager.stopAll();
  }
  /**
   * Play the game over music.
   */
  playGameoverMusic() {
    AudioManager.stopBgm(), AudioManager.stopBgs(), AudioManager.playMe($dataSystem.gameoverMe);
  }
  /**
   * Create the background for the game over scene.
   */
  createBackground() {
    this._backSprite = new Sprite(), this._backSprite.bitmap = ImageManager.loadSystem("GameOver"), this.addChild(this._backSprite);
  }
  /**
   * Check if the 'ok' button or touch input is triggered.
   * 
   * @return {Boolean} True if triggered, else false
   */
  isTriggered() {
    return Input.isTriggered("ok") || TouchInput.isTriggered();
  }
  /**
   * Switch to the title scene.
   */
  gotoTitle() {
    SceneManager.goto(Scene_Title);
  }
};
const Scene_Gameover$1 = Scene_Gameover;
Sprite_Base = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Base.prototype = Object.create(Sprite$1.prototype);
Sprite_Base.prototype.constructor = Sprite_Base;
Sprite_Base.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this._animationSprites = [], this._effectTarget = this, this._hiding = !1;
};
Sprite_Base.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this.updateVisibility(), this.updateAnimationSprites();
};
Sprite_Base.prototype.hide = function() {
  this._hiding = !0, this.updateVisibility();
};
Sprite_Base.prototype.show = function() {
  this._hiding = !1, this.updateVisibility();
};
Sprite_Base.prototype.updateVisibility = function() {
  this.visible = !this._hiding;
};
Sprite_Base.prototype.updateAnimationSprites = function() {
  if (this._animationSprites.length > 0) {
    var t = this._animationSprites.clone();
    this._animationSprites = [];
    for (var e = 0; e < t.length; e++) {
      var r = t[e];
      r.isPlaying() ? this._animationSprites.push(r) : r.remove();
    }
  }
};
Sprite_Base.prototype.startAnimation = function(t, e, r) {
  var s = new Sprite_Animation();
  s.setup(this._effectTarget, t, e, r), this.parent.addChild(s), this._animationSprites.push(s);
};
Sprite_Base.prototype.isAnimationPlaying = function() {
  return this._animationSprites.length > 0;
};
const Sprite_Base$1 = Sprite_Base;
Sprite_Button = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Button.prototype = Object.create(Sprite$1.prototype);
Sprite_Button.prototype.constructor = Sprite_Button;
Sprite_Button.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this._touching = !1, this._coldFrame = null, this._hotFrame = null, this._clickHandler = null;
};
Sprite_Button.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this.updateFrame(), this.processTouch();
};
Sprite_Button.prototype.updateFrame = function() {
  var t;
  this._touching ? t = this._hotFrame : t = this._coldFrame, t && this.setFrame(t.x, t.y, t.width, t.height);
};
Sprite_Button.prototype.setColdFrame = function(t, e, r, s) {
  this._coldFrame = new Rectangle(t, e, r, s);
};
Sprite_Button.prototype.setHotFrame = function(t, e, r, s) {
  this._hotFrame = new Rectangle(t, e, r, s);
};
Sprite_Button.prototype.setClickHandler = function(t) {
  this._clickHandler = t;
};
Sprite_Button.prototype.callClickHandler = function() {
  this._clickHandler && this._clickHandler();
};
Sprite_Button.prototype.processTouch = function() {
  this.isActive() ? (TouchInput.isTriggered() && this.isButtonTouched() && (this._touching = !0), this._touching && (TouchInput.isReleased() || !this.isButtonTouched()) && (this._touching = !1, TouchInput.isReleased() && this.callClickHandler())) : this._touching = !1;
};
Sprite_Button.prototype.isActive = function() {
  for (var t = this; t; ) {
    if (!t.visible)
      return !1;
    t = t.parent;
  }
  return !0;
};
Sprite_Button.prototype.isButtonTouched = function() {
  var t = this.canvasToLocalX(TouchInput.x), e = this.canvasToLocalY(TouchInput.y);
  return t >= 0 && e >= 0 && t < this.width && e < this.height;
};
Sprite_Button.prototype.canvasToLocalX = function(t) {
  for (var e = this; e; )
    t -= e.x, e = e.parent;
  return t;
};
Sprite_Button.prototype.canvasToLocalY = function(t) {
  for (var e = this; e; )
    t -= e.y, e = e.parent;
  return t;
};
const Sprite_Button$1 = Sprite_Button;
Sprite_Character = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Character.prototype = Object.create(Sprite_Base.prototype);
Sprite_Character.prototype.constructor = Sprite_Character;
Sprite_Character.prototype.initialize = function(t) {
  Sprite_Base.prototype.initialize.call(this), this.initMembers(), this.setCharacter(t);
};
Sprite_Character.prototype.initMembers = function() {
  this.anchor.x = 0.5, this.anchor.y = 1, this._character = null, this._balloonDuration = 0, this._tilesetId = 0, this._upperBody = null, this._lowerBody = null;
};
Sprite_Character.prototype.setCharacter = function(t) {
  this._character = t;
};
Sprite_Character.prototype.update = function() {
  Sprite_Base.prototype.update.call(this), this.updateBitmap(), this.updateFrame(), this.updatePosition(), this.updateAnimation(), this.updateBalloon(), this.updateOther();
};
Sprite_Character.prototype.updateVisibility = function() {
  Sprite_Base.prototype.updateVisibility.call(this), this._character.isTransparent() && (this.visible = !1);
};
Sprite_Character.prototype.isTile = function() {
  return this._character.tileId > 0;
};
Sprite_Character.prototype.tilesetBitmap = function(t) {
  var e = $gameMap.tileset(), r = 5 + Math.floor(t / 256);
  return ImageManager.loadTileset(e.tilesetNames[r]);
};
Sprite_Character.prototype.updateBitmap = function() {
  this.isImageChanged() && (this._tilesetId = $gameMap.tilesetId(), this._tileId = this._character.tileId(), this._characterName = this._character.characterName(), this._characterIndex = this._character.characterIndex(), this._tileId > 0 ? this.setTileBitmap() : this.setCharacterBitmap());
};
Sprite_Character.prototype.isImageChanged = function() {
  return this._tilesetId !== $gameMap.tilesetId() || this._tileId !== this._character.tileId() || this._characterName !== this._character.characterName() || this._characterIndex !== this._character.characterIndex();
};
Sprite_Character.prototype.setTileBitmap = function() {
  this.bitmap = this.tilesetBitmap(this._tileId);
};
Sprite_Character.prototype.setCharacterBitmap = function() {
  this.bitmap = ImageManager.loadCharacter(this._characterName), this._isBigCharacter = ImageManager.isBigCharacter(this._characterName);
};
Sprite_Character.prototype.updateFrame = function() {
  this._tileId > 0 ? this.updateTileFrame() : this.updateCharacterFrame();
};
Sprite_Character.prototype.updateTileFrame = function() {
  var t = this.patternWidth(), e = this.patternHeight(), r = (Math.floor(this._tileId / 128) % 2 * 8 + this._tileId % 8) * t, s = Math.floor(this._tileId % 256 / 8) % 16 * e;
  this.setFrame(r, s, t, e);
};
Sprite_Character.prototype.updateCharacterFrame = function() {
  var t = this.patternWidth(), e = this.patternHeight(), r = (this.characterBlockX() + this.characterPatternX()) * t, s = (this.characterBlockY() + this.characterPatternY()) * e;
  if (this.updateHalfBodySprites(), this._bushDepth > 0) {
    var o = this._bushDepth;
    this._upperBody.setFrame(r, s, t, e - o), this._lowerBody.setFrame(r, s + e - o, t, o), this.setFrame(r, s, 0, e);
  } else
    this.setFrame(r, s, t, e);
};
Sprite_Character.prototype.characterBlockX = function() {
  if (this._isBigCharacter)
    return 0;
  var t = this._character.characterIndex();
  return t % 4 * 3;
};
Sprite_Character.prototype.characterBlockY = function() {
  if (this._isBigCharacter)
    return 0;
  var t = this._character.characterIndex();
  return Math.floor(t / 4) * 4;
};
Sprite_Character.prototype.characterPatternX = function() {
  return this._character.pattern();
};
Sprite_Character.prototype.characterPatternY = function() {
  return (this._character.direction() - 2) / 2;
};
Sprite_Character.prototype.patternWidth = function() {
  return this._tileId > 0 ? $gameMap.tileWidth() : this._isBigCharacter ? this.bitmap.width / 3 : this.bitmap.width / 12;
};
Sprite_Character.prototype.patternHeight = function() {
  return this._tileId > 0 ? $gameMap.tileHeight() : this._isBigCharacter ? this.bitmap.height / 4 : this.bitmap.height / 8;
};
Sprite_Character.prototype.updateHalfBodySprites = function() {
  this._bushDepth > 0 ? (this.createHalfBodySprites(), this._upperBody.bitmap = this.bitmap, this._upperBody.visible = !0, this._upperBody.y = -this._bushDepth, this._lowerBody.bitmap = this.bitmap, this._lowerBody.visible = !0, this._upperBody.setBlendColor(this.getBlendColor()), this._lowerBody.setBlendColor(this.getBlendColor()), this._upperBody.setColorTone(this.getColorTone()), this._lowerBody.setColorTone(this.getColorTone())) : this._upperBody && (this._upperBody.visible = !1, this._lowerBody.visible = !1);
};
Sprite_Character.prototype.createHalfBodySprites = function() {
  this._upperBody || (this._upperBody = new Sprite(), this._upperBody.anchor.x = 0.5, this._upperBody.anchor.y = 1, this.addChild(this._upperBody)), this._lowerBody || (this._lowerBody = new Sprite(), this._lowerBody.anchor.x = 0.5, this._lowerBody.anchor.y = 1, this._lowerBody.opacity = 128, this.addChild(this._lowerBody));
};
Sprite_Character.prototype.updatePosition = function() {
  this.x = this._character.screenX(), this.y = this._character.screenY(), this.z = this._character.screenZ();
};
Sprite_Character.prototype.updateAnimation = function() {
  this.setupAnimation(), this.isAnimationPlaying() || this._character.endAnimation(), this.isBalloonPlaying() || this._character.endBalloon();
};
Sprite_Character.prototype.updateOther = function() {
  this.opacity = this._character.opacity(), this.blendMode = this._character.blendMode(), this._bushDepth = this._character.bushDepth();
};
Sprite_Character.prototype.setupAnimation = function() {
  if (this._character.animationId() > 0) {
    var t = $dataAnimations[this._character.animationId()];
    this.startAnimation(t, !1, 0), this._character.startAnimation();
  }
};
Sprite_Character.prototype.setupBalloon = function() {
  this._character.balloonId() > 0 && (this.startBalloon(), this._character.startBalloon());
};
Sprite_Character.prototype.startBalloon = function() {
  this._balloonSprite || (this._balloonSprite = new Sprite_Balloon()), this._balloonSprite.setup(this._character.balloonId()), this.parent.addChild(this._balloonSprite);
};
Sprite_Character.prototype.updateBalloon = function() {
  this.setupBalloon(), this._balloonSprite && (this._balloonSprite.x = this.x, this._balloonSprite.y = this.y - this.height, this._balloonSprite.isPlaying() || this.endBalloon());
};
Sprite_Character.prototype.endBalloon = function() {
  this._balloonSprite && (this.parent.removeChild(this._balloonSprite), this._balloonSprite = null);
};
Sprite_Character.prototype.isBalloonPlaying = function() {
  return !!this._balloonSprite;
};
const Sprite_Character$1 = Sprite_Character;
Sprite_Battler = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Battler.prototype = Object.create(Sprite_Base.prototype);
Sprite_Battler.prototype.constructor = Sprite_Battler;
Sprite_Battler.prototype.initialize = function(t) {
  Sprite_Base.prototype.initialize.call(this), this.initMembers(), this.setBattler(t);
};
Sprite_Battler.prototype.initMembers = function() {
  this.anchor.x = 0.5, this.anchor.y = 1, this._battler = null, this._damages = [], this._homeX = 0, this._homeY = 0, this._offsetX = 0, this._offsetY = 0, this._targetOffsetX = NaN, this._targetOffsetY = NaN, this._movementDuration = 0, this._selectionEffectCount = 0;
};
Sprite_Battler.prototype.setBattler = function(t) {
  this._battler = t;
};
Sprite_Battler.prototype.setHome = function(t, e) {
  this._homeX = t, this._homeY = e, this.updatePosition();
};
Sprite_Battler.prototype.update = function() {
  Sprite_Base.prototype.update.call(this), this._battler ? (this.updateMain(), this.updateAnimation(), this.updateDamagePopup(), this.updateSelectionEffect()) : this.bitmap = null;
};
Sprite_Battler.prototype.updateVisibility = function() {
  Sprite_Base.prototype.updateVisibility.call(this), (!this._battler || !this._battler.isSpriteVisible()) && (this.visible = !1);
};
Sprite_Battler.prototype.updateMain = function() {
  this._battler.isSpriteVisible() && (this.updateBitmap(), this.updateFrame()), this.updateMove(), this.updatePosition();
};
Sprite_Battler.prototype.updateBitmap = function() {
};
Sprite_Battler.prototype.updateFrame = function() {
};
Sprite_Battler.prototype.updateMove = function() {
  if (this._movementDuration > 0) {
    var t = this._movementDuration;
    this._offsetX = (this._offsetX * (t - 1) + this._targetOffsetX) / t, this._offsetY = (this._offsetY * (t - 1) + this._targetOffsetY) / t, this._movementDuration--, this._movementDuration === 0 && this.onMoveEnd();
  }
};
Sprite_Battler.prototype.updatePosition = function() {
  this.x = this._homeX + this._offsetX, this.y = this._homeY + this._offsetY;
};
Sprite_Battler.prototype.updateAnimation = function() {
  this.setupAnimation();
};
Sprite_Battler.prototype.updateDamagePopup = function() {
  if (this.setupDamagePopup(), this._damages.length > 0) {
    for (var t = 0; t < this._damages.length; t++)
      this._damages[t].update();
    this._damages[0].isPlaying() || (this.parent.removeChild(this._damages[0]), this._damages.shift());
  }
};
Sprite_Battler.prototype.updateSelectionEffect = function() {
  var t = this._effectTarget;
  this._battler.isSelected() ? (this._selectionEffectCount++, this._selectionEffectCount % 30 < 15 ? t.setBlendColor([255, 255, 255, 64]) : t.setBlendColor([0, 0, 0, 0])) : this._selectionEffectCount > 0 && (this._selectionEffectCount = 0, t.setBlendColor([0, 0, 0, 0]));
};
Sprite_Battler.prototype.setupAnimation = function() {
  for (; this._battler.isAnimationRequested(); ) {
    var t = this._battler.shiftAnimation(), e = $dataAnimations[t.animationId], r = t.mirror, s = e.position === 3 ? 0 : t.delay;
    this.startAnimation(e, r, s);
    for (var o = 0; o < this._animationSprites.length; o++) {
      var h = this._animationSprites[o];
      h.visible = this._battler.isSpriteVisible();
    }
  }
};
Sprite_Battler.prototype.setupDamagePopup = function() {
  if (this._battler.isDamagePopupRequested()) {
    if (this._battler.isSpriteVisible()) {
      var t = new Sprite_Damage();
      t.x = this.x + this.damageOffsetX(), t.y = this.y + this.damageOffsetY(), t.setup(this._battler), this._damages.push(t), this.parent.addChild(t);
    }
    this._battler.clearDamagePopup(), this._battler.clearResult();
  }
};
Sprite_Battler.prototype.damageOffsetX = function() {
  return 0;
};
Sprite_Battler.prototype.damageOffsetY = function() {
  return 0;
};
Sprite_Battler.prototype.startMove = function(t, e, r) {
  (this._targetOffsetX !== t || this._targetOffsetY !== e) && (this._targetOffsetX = t, this._targetOffsetY = e, this._movementDuration = r, r === 0 && (this._offsetX = t, this._offsetY = e));
};
Sprite_Battler.prototype.onMoveEnd = function() {
};
Sprite_Battler.prototype.isEffecting = function() {
  return !1;
};
Sprite_Battler.prototype.isMoving = function() {
  return this._movementDuration > 0;
};
Sprite_Battler.prototype.inHomePosition = function() {
  return this._offsetX === 0 && this._offsetY === 0;
};
const Sprite_Battler$1 = Sprite_Battler;
Sprite_Actor = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Actor.prototype = Object.create(Sprite_Battler$1.prototype);
Sprite_Actor.prototype.constructor = Sprite_Actor;
Sprite_Actor.MOTIONS = {
  walk: { index: 0, loop: !0 },
  wait: { index: 1, loop: !0 },
  chant: { index: 2, loop: !0 },
  guard: { index: 3, loop: !0 },
  damage: { index: 4, loop: !1 },
  evade: { index: 5, loop: !1 },
  thrust: { index: 6, loop: !1 },
  swing: { index: 7, loop: !1 },
  missile: { index: 8, loop: !1 },
  skill: { index: 9, loop: !1 },
  spell: { index: 10, loop: !1 },
  item: { index: 11, loop: !1 },
  escape: { index: 12, loop: !0 },
  victory: { index: 13, loop: !0 },
  dying: { index: 14, loop: !0 },
  abnormal: { index: 15, loop: !0 },
  sleep: { index: 16, loop: !0 },
  dead: { index: 17, loop: !0 }
};
Sprite_Actor.prototype.initialize = function(t) {
  Sprite_Battler$1.prototype.initialize.call(this, t), this.moveToStartPosition();
};
Sprite_Actor.prototype.initMembers = function() {
  Sprite_Battler$1.prototype.initMembers.call(this), this._battlerName = "", this._motion = null, this._motionCount = 0, this._pattern = 0, this.createShadowSprite(), this.createWeaponSprite(), this.createMainSprite(), this.createStateSprite();
};
Sprite_Actor.prototype.createMainSprite = function() {
  this._mainSprite = new Sprite_Base(), this._mainSprite.anchor.x = 0.5, this._mainSprite.anchor.y = 1, this.addChild(this._mainSprite), this._effectTarget = this._mainSprite;
};
Sprite_Actor.prototype.createShadowSprite = function() {
  this._shadowSprite = new Sprite(), this._shadowSprite.bitmap = ImageManager.loadSystem("Shadow2"), this._shadowSprite.anchor.x = 0.5, this._shadowSprite.anchor.y = 0.5, this._shadowSprite.y = -2, this.addChild(this._shadowSprite);
};
Sprite_Actor.prototype.createWeaponSprite = function() {
  this._weaponSprite = new Sprite_Weapon(), this.addChild(this._weaponSprite);
};
Sprite_Actor.prototype.createStateSprite = function() {
  this._stateSprite = new Sprite_StateOverlay(), this.addChild(this._stateSprite);
};
Sprite_Actor.prototype.setBattler = function(t) {
  Sprite_Battler$1.prototype.setBattler.call(this, t);
  var e = t !== this._actor;
  e && (this._actor = t, t && this.setActorHome(t.index()), this.startEntryMotion(), this._stateSprite.setup(t));
};
Sprite_Actor.prototype.moveToStartPosition = function() {
  this.startMove(300, 0, 0);
};
Sprite_Actor.prototype.setActorHome = function(t) {
  this.setHome(600 + t * 32, 280 + t * 48);
};
Sprite_Actor.prototype.update = function() {
  Sprite_Battler$1.prototype.update.call(this), this.updateShadow(), this._actor && this.updateMotion();
};
Sprite_Actor.prototype.updateShadow = function() {
  this._shadowSprite.visible = !!this._actor;
};
Sprite_Actor.prototype.updateMain = function() {
  Sprite_Battler$1.prototype.updateMain.call(this), this._actor.isSpriteVisible() && !this.isMoving() && this.updateTargetPosition();
};
Sprite_Actor.prototype.setupMotion = function() {
  this._actor.isMotionRequested() && (this.startMotion(this._actor.motionType()), this._actor.clearMotion());
};
Sprite_Actor.prototype.setupWeaponAnimation = function() {
  this._actor.isWeaponAnimationRequested() && (this._weaponSprite.setup(this._actor.weaponImageId()), this._actor.clearWeaponAnimation());
};
Sprite_Actor.prototype.startMotion = function(t) {
  var e = Sprite_Actor.MOTIONS[t];
  this._motion !== e && (this._motion = e, this._motionCount = 0, this._pattern = 0);
};
Sprite_Actor.prototype.updateTargetPosition = function() {
  this._actor.isInputting() || this._actor.isActing() ? this.stepForward() : this._actor.canMove() && BattleManager.isEscaped() ? this.retreat() : this.inHomePosition() || this.stepBack();
};
Sprite_Actor.prototype.updateBitmap = function() {
  Sprite_Battler$1.prototype.updateBitmap.call(this);
  var t = this._actor.battlerName();
  this._battlerName !== t && (this._battlerName = t, this._mainSprite.bitmap = ImageManager.loadSvActor(t));
};
Sprite_Actor.prototype.updateFrame = function() {
  Sprite_Battler$1.prototype.updateFrame.call(this);
  var t = this._mainSprite.bitmap;
  if (t) {
    var e = this._motion ? this._motion.index : 0, r = this._pattern < 3 ? this._pattern : 1, s = t.width / 9, o = t.height / 6, h = Math.floor(e / 6) * 3 + r, p = e % 6;
    this._mainSprite.setFrame(h * s, p * o, s, o);
  }
};
Sprite_Actor.prototype.updateMove = function() {
  var t = this._mainSprite.bitmap;
  (!t || t.isReady()) && Sprite_Battler$1.prototype.updateMove.call(this);
};
Sprite_Actor.prototype.updateMotion = function() {
  this.setupMotion(), this.setupWeaponAnimation(), this._actor.isMotionRefreshRequested() && (this.refreshMotion(), this._actor.clearMotion()), this.updateMotionCount();
};
Sprite_Actor.prototype.updateMotionCount = function() {
  this._motion && ++this._motionCount >= this.motionSpeed() && (this._motion.loop ? this._pattern = (this._pattern + 1) % 4 : this._pattern < 2 ? this._pattern++ : this.refreshMotion(), this._motionCount = 0);
};
Sprite_Actor.prototype.motionSpeed = function() {
  return 12;
};
Sprite_Actor.prototype.refreshMotion = function() {
  var t = this._actor, e = Sprite_Actor.MOTIONS.guard;
  if (t) {
    if (this._motion === e && !BattleManager.isInputting())
      return;
    var r = t.stateMotionIndex();
    t.isInputting() || t.isActing() ? this.startMotion("walk") : r === 3 ? this.startMotion("dead") : r === 2 ? this.startMotion("sleep") : t.isChanting() ? this.startMotion("chant") : t.isGuard() || t.isGuardWaiting() ? this.startMotion("guard") : r === 1 ? this.startMotion("abnormal") : t.isDying() ? this.startMotion("dying") : t.isUndecided() ? this.startMotion("walk") : this.startMotion("wait");
  }
};
Sprite_Actor.prototype.startEntryMotion = function() {
  this._actor && this._actor.canMove() ? (this.startMotion("walk"), this.startMove(0, 0, 30)) : this.isMoving() || (this.refreshMotion(), this.startMove(0, 0, 0));
};
Sprite_Actor.prototype.stepForward = function() {
  this.startMove(-48, 0, 12);
};
Sprite_Actor.prototype.stepBack = function() {
  this.startMove(0, 0, 12);
};
Sprite_Actor.prototype.retreat = function() {
  this.startMove(300, 0, 30);
};
Sprite_Actor.prototype.onMoveEnd = function() {
  Sprite_Battler$1.prototype.onMoveEnd.call(this), BattleManager.isBattleEnd() || this.refreshMotion();
};
Sprite_Actor.prototype.damageOffsetX = function() {
  return -32;
};
Sprite_Actor.prototype.damageOffsetY = function() {
  return 0;
};
const Sprite_Actor$1 = Sprite_Actor;
Sprite_Enemy = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Enemy.prototype = Object.create(Sprite_Battler.prototype);
Sprite_Enemy.prototype.constructor = Sprite_Enemy;
Sprite_Enemy.prototype.initialize = function(t) {
  Sprite_Battler.prototype.initialize.call(this, t);
};
Sprite_Enemy.prototype.initMembers = function() {
  Sprite_Battler.prototype.initMembers.call(this), this._enemy = null, this._appeared = !1, this._battlerName = "", this._battlerHue = 0, this._effectType = null, this._effectDuration = 0, this._shake = 0, this.createStateIconSprite();
};
Sprite_Enemy.prototype.createStateIconSprite = function() {
  this._stateIconSprite = new Sprite_StateIcon(), this.addChild(this._stateIconSprite);
};
Sprite_Enemy.prototype.setBattler = function(t) {
  Sprite_Battler.prototype.setBattler.call(this, t), this._enemy = t, this.setHome(t.screenX(), t.screenY()), this._stateIconSprite.setup(t);
};
Sprite_Enemy.prototype.update = function() {
  Sprite_Battler.prototype.update.call(this), this._enemy && (this.updateEffect(), this.updateStateSprite());
};
Sprite_Enemy.prototype.updateBitmap = function() {
  Sprite_Battler.prototype.updateBitmap.call(this);
  var t = this._enemy.battlerName(), e = this._enemy.battlerHue();
  (this._battlerName !== t || this._battlerHue !== e) && (this._battlerName = t, this._battlerHue = e, this.loadBitmap(t, e), this.initVisibility());
};
Sprite_Enemy.prototype.loadBitmap = function(t, e) {
  $gameSystem.isSideView() ? this.bitmap = ImageManager.loadSvEnemy(t, e) : this.bitmap = ImageManager.loadEnemy(t, e);
};
Sprite_Enemy.prototype.updateFrame = function() {
  Sprite_Battler.prototype.updateFrame.call(this);
  var t = this.bitmap.height;
  this._effectType === "bossCollapse" && (t = this._effectDuration), this.setFrame(0, 0, this.bitmap.width, t);
};
Sprite_Enemy.prototype.updatePosition = function() {
  Sprite_Battler.prototype.updatePosition.call(this), this.x += this._shake;
};
Sprite_Enemy.prototype.updateStateSprite = function() {
  this._stateIconSprite.y = -Math.round((this.bitmap.height + 40) * 0.9), this._stateIconSprite.y < 20 - this.y && (this._stateIconSprite.y = 20 - this.y);
};
Sprite_Enemy.prototype.initVisibility = function() {
  this._appeared = this._enemy.isAlive(), this._appeared || (this.opacity = 0);
};
Sprite_Enemy.prototype.setupEffect = function() {
  this._appeared && this._enemy.isEffectRequested() && (this.startEffect(this._enemy.effectType()), this._enemy.clearEffect()), !this._appeared && this._enemy.isAlive() ? this.startEffect("appear") : this._appeared && this._enemy.isHidden() && this.startEffect("disappear");
};
Sprite_Enemy.prototype.startEffect = function(t) {
  switch (this._effectType = t, this._effectType) {
    case "appear":
      this.startAppear();
      break;
    case "disappear":
      this.startDisappear();
      break;
    case "whiten":
      this.startWhiten();
      break;
    case "blink":
      this.startBlink();
      break;
    case "collapse":
      this.startCollapse();
      break;
    case "bossCollapse":
      this.startBossCollapse();
      break;
    case "instantCollapse":
      this.startInstantCollapse();
      break;
  }
  this.revertToNormal();
};
Sprite_Enemy.prototype.startAppear = function() {
  this._effectDuration = 16, this._appeared = !0;
};
Sprite_Enemy.prototype.startDisappear = function() {
  this._effectDuration = 32, this._appeared = !1;
};
Sprite_Enemy.prototype.startWhiten = function() {
  this._effectDuration = 16;
};
Sprite_Enemy.prototype.startBlink = function() {
  this._effectDuration = 20;
};
Sprite_Enemy.prototype.startCollapse = function() {
  this._effectDuration = 32, this._appeared = !1;
};
Sprite_Enemy.prototype.startBossCollapse = function() {
  this._effectDuration = this.bitmap.height, this._appeared = !1;
};
Sprite_Enemy.prototype.startInstantCollapse = function() {
  this._effectDuration = 16, this._appeared = !1;
};
Sprite_Enemy.prototype.updateEffect = function() {
  if (this.setupEffect(), this._effectDuration > 0) {
    switch (this._effectDuration--, this._effectType) {
      case "whiten":
        this.updateWhiten();
        break;
      case "blink":
        this.updateBlink();
        break;
      case "appear":
        this.updateAppear();
        break;
      case "disappear":
        this.updateDisappear();
        break;
      case "collapse":
        this.updateCollapse();
        break;
      case "bossCollapse":
        this.updateBossCollapse();
        break;
      case "instantCollapse":
        this.updateInstantCollapse();
        break;
    }
    this._effectDuration === 0 && (this._effectType = null);
  }
};
Sprite_Enemy.prototype.isEffecting = function() {
  return this._effectType !== null;
};
Sprite_Enemy.prototype.revertToNormal = function() {
  this._shake = 0, this.blendMode = 0, this.opacity = 255, this.setBlendColor([0, 0, 0, 0]);
};
Sprite_Enemy.prototype.updateWhiten = function() {
  var t = 128 - (16 - this._effectDuration) * 10;
  this.setBlendColor([255, 255, 255, t]);
};
Sprite_Enemy.prototype.updateBlink = function() {
  this.opacity = this._effectDuration % 10 < 5 ? 255 : 0;
};
Sprite_Enemy.prototype.updateAppear = function() {
  this.opacity = (16 - this._effectDuration) * 16;
};
Sprite_Enemy.prototype.updateDisappear = function() {
  this.opacity = 256 - (32 - this._effectDuration) * 10;
};
Sprite_Enemy.prototype.updateCollapse = function() {
  this.blendMode = Graphics.BLEND_ADD, this.setBlendColor([255, 128, 128, 128]), this.opacity *= this._effectDuration / (this._effectDuration + 1);
};
Sprite_Enemy.prototype.updateBossCollapse = function() {
  this._shake = this._effectDuration % 2 * 4 - 2, this.blendMode = Graphics.BLEND_ADD, this.opacity *= this._effectDuration / (this._effectDuration + 1), this.setBlendColor([255, 255, 255, 255 - this.opacity]), this._effectDuration % 20 === 19 && SoundManager.playBossCollapse2();
};
Sprite_Enemy.prototype.updateInstantCollapse = function() {
  this.opacity = 0;
};
Sprite_Enemy.prototype.damageOffsetX = function() {
  return 0;
};
Sprite_Enemy.prototype.damageOffsetY = function() {
  return -8;
};
const Sprite_Enemy$1 = Sprite_Enemy;
Sprite_Animation = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Animation.prototype = Object.create(Sprite$1.prototype);
Sprite_Animation.prototype.constructor = Sprite_Animation;
Sprite_Animation._checker1 = {};
Sprite_Animation._checker2 = {};
Sprite_Animation.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this._reduceArtifacts = !0, this.initMembers();
};
Sprite_Animation.prototype.initMembers = function() {
  this._target = null, this._animation = null, this._mirror = !1, this._delay = 0, this._rate = 4, this._duration = 0, this._flashColor = [0, 0, 0, 0], this._flashDuration = 0, this._screenFlashDuration = 0, this._hidingDuration = 0, this._bitmap1 = null, this._bitmap2 = null, this._cellSprites = [], this._screenFlashSprite = null, this._duplicated = !1, this.z = 8;
};
Sprite_Animation.prototype.setup = function(t, e, r, s) {
  this._target = t, this._animation = e, this._mirror = r, this._delay = s, this._animation && (this.remove(), this.setupRate(), this.setupDuration(), this.loadBitmaps(), this.createSprites());
};
Sprite_Animation.prototype.remove = function() {
  this.parent && this.parent.removeChild(this) && (this._target.setBlendColor([0, 0, 0, 0]), this._target.show());
};
Sprite_Animation.prototype.setupRate = function() {
  this._rate = 4;
};
Sprite_Animation.prototype.setupDuration = function() {
  this._duration = this._animation.frames.length * this._rate + 1;
};
Sprite_Animation.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this.updateMain(), this.updateFlash(), this.updateScreenFlash(), this.updateHiding(), Sprite_Animation._checker1 = {}, Sprite_Animation._checker2 = {};
};
Sprite_Animation.prototype.updateFlash = function() {
  if (this._flashDuration > 0) {
    var t = this._flashDuration--;
    this._flashColor[3] *= (t - 1) / t, this._target.setBlendColor(this._flashColor);
  }
};
Sprite_Animation.prototype.updateScreenFlash = function() {
  if (this._screenFlashDuration > 0) {
    var t = this._screenFlashDuration--;
    this._screenFlashSprite && (this._screenFlashSprite.x = -this.absoluteX(), this._screenFlashSprite.y = -this.absoluteY(), this._screenFlashSprite.opacity *= (t - 1) / t, this._screenFlashSprite.visible = this._screenFlashDuration > 0);
  }
};
Sprite_Animation.prototype.absoluteX = function() {
  for (var t = 0, e = this; e; )
    t += e.x, e = e.parent;
  return t;
};
Sprite_Animation.prototype.absoluteY = function() {
  for (var t = 0, e = this; e; )
    t += e.y, e = e.parent;
  return t;
};
Sprite_Animation.prototype.updateHiding = function() {
  this._hidingDuration > 0 && (this._hidingDuration--, this._hidingDuration === 0 && this._target.show());
};
Sprite_Animation.prototype.isPlaying = function() {
  return this._duration > 0;
};
Sprite_Animation.prototype.loadBitmaps = function() {
  var t = this._animation.animation1Name, e = this._animation.animation2Name, r = this._animation.animation1Hue, s = this._animation.animation2Hue;
  this._bitmap1 = ImageManager.loadAnimation(t, r), this._bitmap2 = ImageManager.loadAnimation(e, s);
};
Sprite_Animation.prototype.isReady = function() {
  return this._bitmap1 && this._bitmap1.isReady() && this._bitmap2 && this._bitmap2.isReady();
};
Sprite_Animation.prototype.createSprites = function() {
  Sprite_Animation._checker2[this._animation] || (this.createCellSprites(), this._animation.position === 3 && (Sprite_Animation._checker2[this._animation] = !0), this.createScreenFlashSprite()), Sprite_Animation._checker1[this._animation] ? this._duplicated = !0 : (this._duplicated = !1, this._animation.position === 3 && (Sprite_Animation._checker1[this._animation] = !0));
};
Sprite_Animation.prototype.createCellSprites = function() {
  this._cellSprites = [];
  for (var t = 0; t < 16; t++) {
    var e = new Sprite$1();
    e.anchor.x = 0.5, e.anchor.y = 0.5, this._cellSprites.push(e), this.addChild(e);
  }
};
Sprite_Animation.prototype.createScreenFlashSprite = function() {
  this._screenFlashSprite = new ScreenSprite(), this.addChild(this._screenFlashSprite);
};
Sprite_Animation.prototype.updateMain = function() {
  this.isPlaying() && this.isReady() && (this._delay > 0 ? this._delay-- : (this._duration--, this.updatePosition(), this._duration % this._rate === 0 && this.updateFrame()));
};
Sprite_Animation.prototype.updatePosition = function() {
  if (this._animation.position === 3)
    this.x = this.parent.width / 2, this.y = this.parent.height / 2;
  else {
    var t = this._target.parent, e = t ? t.parent : null;
    this.x = this._target.x, this.y = this._target.y, this.parent === e && (this.x += t.x, this.y += t.y), this._animation.position === 0 ? this.y -= this._target.height : this._animation.position === 1 && (this.y -= this._target.height / 2);
  }
};
Sprite_Animation.prototype.updateFrame = function() {
  if (this._duration > 0) {
    var t = this.currentFrameIndex();
    this.updateAllCellSprites(this._animation.frames[t]), this._animation.timings.forEach(function(e) {
      e.frame === t && this.processTimingData(e);
    }, this);
  }
};
Sprite_Animation.prototype.currentFrameIndex = function() {
  return this._animation.frames.length - Math.floor((this._duration + this._rate - 1) / this._rate);
};
Sprite_Animation.prototype.updateAllCellSprites = function(t) {
  for (var e = 0; e < this._cellSprites.length; e++) {
    var r = this._cellSprites[e];
    e < t.length ? this.updateCellSprite(r, t[e]) : r.visible = !1;
  }
};
Sprite_Animation.prototype.updateCellSprite = function(t, e) {
  var r = e[0];
  if (r >= 0) {
    var s = r % 5 * 192, o = Math.floor(r % 100 / 5) * 192, h = this._mirror;
    t.bitmap = r < 100 ? this._bitmap1 : this._bitmap2, t.setFrame(s, o, 192, 192), t.x = e[1], t.y = e[2], t.rotation = e[4] * Math.PI / 180, t.scale.x = e[3] / 100, e[5] && (t.scale.x *= -1), h && (t.x *= -1, t.rotation *= -1, t.scale.x *= -1), t.scale.y = e[3] / 100, t.opacity = e[6], t.blendMode = e[7], t.visible = !0;
  } else
    t.visible = !1;
};
Sprite_Animation.prototype.processTimingData = function(t) {
  var e = t.flashDuration * this._rate;
  switch (t.flashScope) {
    case 1:
      this.startFlash(t.flashColor, e);
      break;
    case 2:
      this.startScreenFlash(t.flashColor, e);
      break;
    case 3:
      this.startHiding(e);
      break;
  }
  !this._duplicated && t.se && AudioManager.playSe(t.se);
};
Sprite_Animation.prototype.startFlash = function(t, e) {
  this._flashColor = t.clone(), this._flashDuration = e;
};
Sprite_Animation.prototype.startScreenFlash = function(t, e) {
  this._screenFlashDuration = e, this._screenFlashSprite && (this._screenFlashSprite.setColor(t[0], t[1], t[2]), this._screenFlashSprite.opacity = t[3]);
};
Sprite_Animation.prototype.startHiding = function(t) {
  this._hidingDuration = t, this._target.hide();
};
const Sprite_Animation$1 = Sprite_Animation;
Sprite_Damage = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Damage.prototype = Object.create(Sprite$1.prototype);
Sprite_Damage.prototype.constructor = Sprite_Damage;
Sprite_Damage.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this._duration = 90, this._flashColor = [0, 0, 0, 0], this._flashDuration = 0, this._damageBitmap = ImageManager.loadSystem("Damage");
};
Sprite_Damage.prototype.setup = function(t) {
  var e = t.result();
  e.missed || e.evaded ? this.createMiss() : e.hpAffected ? this.createDigits(0, e.hpDamage) : t.isAlive() && e.mpDamage !== 0 && this.createDigits(2, e.mpDamage), e.critical && this.setupCriticalEffect();
};
Sprite_Damage.prototype.setupCriticalEffect = function() {
  this._flashColor = [255, 0, 0, 160], this._flashDuration = 60;
};
Sprite_Damage.prototype.digitWidth = function() {
  return this._damageBitmap ? this._damageBitmap.width / 10 : 0;
};
Sprite_Damage.prototype.digitHeight = function() {
  return this._damageBitmap ? this._damageBitmap.height / 5 : 0;
};
Sprite_Damage.prototype.createMiss = function() {
  var t = this.digitWidth(), e = this.digitHeight(), r = this.createChildSprite();
  r.setFrame(0, 4 * e, 4 * t, e), r.dy = 0;
};
Sprite_Damage.prototype.createDigits = function(t, e) {
  for (var r = Math.abs(e).toString(), s = t + (e < 0 ? 1 : 0), o = this.digitWidth(), h = this.digitHeight(), p = 0; p < r.length; p++) {
    var c = this.createChildSprite(), u = Number(r[p]);
    c.setFrame(u * o, s * h, o, h), c.x = (p - (r.length - 1) / 2) * o, c.dy = -p;
  }
};
Sprite_Damage.prototype.createChildSprite = function() {
  var t = new Sprite$1();
  return t.bitmap = this._damageBitmap, t.anchor.x = 0.5, t.anchor.y = 1, t.y = -40, t.ry = t.y, this.addChild(t), t;
};
Sprite_Damage.prototype.update = function() {
  if (Sprite$1.prototype.update.call(this), this._duration > 0) {
    this._duration--;
    for (var t = 0; t < this.children.length; t++)
      this.updateChild(this.children[t]);
  }
  this.updateFlash(), this.updateOpacity();
};
Sprite_Damage.prototype.updateChild = function(t) {
  t.dy += 0.5, t.ry += t.dy, t.ry >= 0 && (t.ry = 0, t.dy *= -0.6), t.y = Math.round(t.ry), t.setBlendColor(this._flashColor);
};
Sprite_Damage.prototype.updateFlash = function() {
  if (this._flashDuration > 0) {
    var t = this._flashDuration--;
    this._flashColor[3] *= (t - 1) / t;
  }
};
Sprite_Damage.prototype.updateOpacity = function() {
  this._duration < 10 && (this.opacity = 255 * this._duration / 10);
};
Sprite_Damage.prototype.isPlaying = function() {
  return this._duration > 0;
};
const Sprite_Damage$1 = Sprite_Damage;
Sprite_StateIcon = function() {
  this.initialize.apply(this, arguments);
};
Sprite_StateIcon.prototype = Object.create(Sprite$1.prototype);
Sprite_StateIcon.prototype.constructor = Sprite_StateIcon;
Sprite_StateIcon.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this.initMembers(), this.loadBitmap();
};
Sprite_StateIcon._iconWidth = 32;
Sprite_StateIcon._iconHeight = 32;
Sprite_StateIcon.prototype.initMembers = function() {
  this._battler = null, this._iconIndex = 0, this._animationCount = 0, this._animationIndex = 0, this.anchor.x = 0.5, this.anchor.y = 0.5;
};
Sprite_StateIcon.prototype.loadBitmap = function() {
  this.bitmap = ImageManager.loadSystem("IconSet"), this.setFrame(0, 0, 0, 0);
};
Sprite_StateIcon.prototype.setup = function(t) {
  this._battler = t;
};
Sprite_StateIcon.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this._animationCount++, this._animationCount >= this.animationWait() && (this.updateIcon(), this.updateFrame(), this._animationCount = 0);
};
Sprite_StateIcon.prototype.animationWait = function() {
  return 40;
};
Sprite_StateIcon.prototype.updateIcon = function() {
  var t = [];
  this._battler && this._battler.isAlive() && (t = this._battler.allIcons()), t.length > 0 ? (this._animationIndex++, this._animationIndex >= t.length && (this._animationIndex = 0), this._iconIndex = t[this._animationIndex]) : (this._animationIndex = 0, this._iconIndex = 0);
};
Sprite_StateIcon.prototype.updateFrame = function() {
  var t = Sprite_StateIcon._iconWidth, e = Sprite_StateIcon._iconHeight, r = this._iconIndex % 16 * t, s = Math.floor(this._iconIndex / 16) * e;
  this.setFrame(r, s, t, e);
};
const Sprite_StateIcon$1 = Sprite_StateIcon;
Sprite_StateOverlay = function() {
  this.initialize.apply(this, arguments);
};
Sprite_StateOverlay.prototype = Object.create(Sprite_Base.prototype);
Sprite_StateOverlay.prototype.constructor = Sprite_StateOverlay;
Sprite_StateOverlay.prototype.initialize = function() {
  Sprite_Base.prototype.initialize.call(this), this.initMembers(), this.loadBitmap();
};
Sprite_StateOverlay.prototype.initMembers = function() {
  this._battler = null, this._overlayIndex = 0, this._animationCount = 0, this._pattern = 0, this.anchor.x = 0.5, this.anchor.y = 1;
};
Sprite_StateOverlay.prototype.loadBitmap = function() {
  this.bitmap = ImageManager.loadSystem("States"), this.setFrame(0, 0, 0, 0);
};
Sprite_StateOverlay.prototype.setup = function(t) {
  this._battler = t;
};
Sprite_StateOverlay.prototype.update = function() {
  Sprite_Base.prototype.update.call(this), this._animationCount++, this._animationCount >= this.animationWait() && (this.updatePattern(), this.updateFrame(), this._animationCount = 0);
};
Sprite_StateOverlay.prototype.animationWait = function() {
  return 8;
};
Sprite_StateOverlay.prototype.updatePattern = function() {
  this._pattern++, this._pattern %= 8, this._battler && (this._overlayIndex = this._battler.stateOverlayIndex());
};
Sprite_StateOverlay.prototype.updateFrame = function() {
  if (this._overlayIndex > 0) {
    var t = 96, e = 96, r = this._pattern * t, s = (this._overlayIndex - 1) * e;
    this.setFrame(r, s, t, e);
  } else
    this.setFrame(0, 0, 0, 0);
};
const Sprite_StateOverlay$1 = Sprite_StateOverlay;
Sprite_Weapon = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Weapon.prototype = Object.create(Sprite_Base.prototype);
Sprite_Weapon.prototype.constructor = Sprite_Weapon;
Sprite_Weapon.prototype.initialize = function() {
  Sprite_Base.prototype.initialize.call(this), this.initMembers();
};
Sprite_Weapon.prototype.initMembers = function() {
  this._weaponImageId = 0, this._animationCount = 0, this._pattern = 0, this.anchor.x = 0.5, this.anchor.y = 1, this.x = -16;
};
Sprite_Weapon.prototype.setup = function(t) {
  this._weaponImageId = t, this._animationCount = 0, this._pattern = 0, this.loadBitmap(), this.updateFrame();
};
Sprite_Weapon.prototype.update = function() {
  Sprite_Base.prototype.update.call(this), this._animationCount++, this._animationCount >= this.animationWait() && (this.updatePattern(), this.updateFrame(), this._animationCount = 0);
};
Sprite_Weapon.prototype.animationWait = function() {
  return 12;
};
Sprite_Weapon.prototype.updatePattern = function() {
  this._pattern++, this._pattern >= 3 && (this._weaponImageId = 0);
};
Sprite_Weapon.prototype.loadBitmap = function() {
  var t = Math.floor((this._weaponImageId - 1) / 12) + 1;
  t >= 1 ? this.bitmap = ImageManager.loadSystem("Weapons" + t) : this.bitmap = ImageManager.loadSystem("");
};
Sprite_Weapon.prototype.updateFrame = function() {
  if (this._weaponImageId > 0) {
    var t = (this._weaponImageId - 1) % 12, e = 96, r = 64, s = (Math.floor(t / 6) * 3 + this._pattern) * e, o = Math.floor(t % 6) * r;
    this.setFrame(s, o, e, r);
  } else
    this.setFrame(0, 0, 0, 0);
};
Sprite_Weapon.prototype.isPlaying = function() {
  return this._weaponImageId > 0;
};
const Sprite_Weapon$1 = Sprite_Weapon;
Sprite_Balloon = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Balloon.prototype = Object.create(Sprite_Base.prototype);
Sprite_Balloon.prototype.constructor = Sprite_Balloon;
Sprite_Balloon.prototype.initialize = function() {
  Sprite_Base.prototype.initialize.call(this), this.initMembers(), this.loadBitmap();
};
Sprite_Balloon.prototype.initMembers = function() {
  this._balloonId = 0, this._duration = 0, this.anchor.x = 0.5, this.anchor.y = 1, this.z = 7;
};
Sprite_Balloon.prototype.loadBitmap = function() {
  this.bitmap = ImageManager.loadSystem("Balloon"), this.setFrame(0, 0, 0, 0);
};
Sprite_Balloon.prototype.setup = function(t) {
  this._balloonId = t, this._duration = 8 * this.speed() + this.waitTime();
};
Sprite_Balloon.prototype.update = function() {
  Sprite_Base.prototype.update.call(this), this._duration > 0 && (this._duration--, this._duration > 0 && this.updateFrame());
};
Sprite_Balloon.prototype.updateFrame = function() {
  var t = 48, e = 48, r = this.frameIndex() * t, s = (this._balloonId - 1) * e;
  this.setFrame(r, s, t, e);
};
Sprite_Balloon.prototype.speed = function() {
  return 8;
};
Sprite_Balloon.prototype.waitTime = function() {
  return 12;
};
Sprite_Balloon.prototype.frameIndex = function() {
  var t = (this._duration - this.waitTime()) / this.speed();
  return 7 - Math.max(Math.floor(t), 0);
};
Sprite_Balloon.prototype.isPlaying = function() {
  return this._duration > 0;
};
const Sprite_Balloon$1 = Sprite_Balloon;
Sprite_Picture = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Picture.prototype = Object.create(Sprite$1.prototype);
Sprite_Picture.prototype.constructor = Sprite_Picture;
Sprite_Picture.prototype.initialize = function(t) {
  Sprite$1.prototype.initialize.call(this), this._pictureId = t, this._pictureName = "", this._isPicture = !0, this.update();
};
Sprite_Picture.prototype.picture = function() {
  return $gameScreen.picture(this._pictureId);
};
Sprite_Picture.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this.updateBitmap(), this.visible && (this.updateOrigin(), this.updatePosition(), this.updateScale(), this.updateTone(), this.updateOther());
};
Sprite_Picture.prototype.updateBitmap = function() {
  var t = this.picture();
  if (t) {
    var e = t.name();
    this._pictureName !== e && (this._pictureName = e, this.loadBitmap()), this.visible = !0;
  } else
    this._pictureName = "", this.bitmap = null, this.visible = !1;
};
Sprite_Picture.prototype.updateOrigin = function() {
  var t = this.picture();
  t.origin() === 0 ? (this.anchor.x = 0, this.anchor.y = 0) : (this.anchor.x = 0.5, this.anchor.y = 0.5);
};
Sprite_Picture.prototype.updatePosition = function() {
  var t = this.picture();
  this.x = Math.floor(t.x()), this.y = Math.floor(t.y());
};
Sprite_Picture.prototype.updateScale = function() {
  var t = this.picture();
  this.scale.x = t.scaleX() / 100, this.scale.y = t.scaleY() / 100;
};
Sprite_Picture.prototype.updateTone = function() {
  var t = this.picture();
  t.tone() ? this.setColorTone(t.tone()) : this.setColorTone([0, 0, 0, 0]);
};
Sprite_Picture.prototype.updateOther = function() {
  var t = this.picture();
  this.opacity = t.opacity(), this.blendMode = t.blendMode(), this.rotation = t.angle() * Math.PI / 180;
};
Sprite_Picture.prototype.loadBitmap = function() {
  this.bitmap = ImageManager.loadPicture(this._pictureName);
};
const Sprite_Picture$1 = Sprite_Picture;
Sprite_Timer = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Timer.prototype = Object.create(Sprite$1.prototype);
Sprite_Timer.prototype.constructor = Sprite_Timer;
Sprite_Timer.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this._seconds = 0, this.createBitmap(), this.update();
};
Sprite_Timer.prototype.createBitmap = function() {
  this.bitmap = new Bitmap(96, 48), this.bitmap.fontSize = 32;
};
Sprite_Timer.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this.updateBitmap(), this.updatePosition(), this.updateVisibility();
};
Sprite_Timer.prototype.updateBitmap = function() {
  this._seconds !== $gameTimer.seconds() && (this._seconds = $gameTimer.seconds(), this.redraw());
};
Sprite_Timer.prototype.redraw = function() {
  var t = this.timerText(), e = this.bitmap.width, r = this.bitmap.height;
  this.bitmap.clear(), this.bitmap.drawText(t, 0, 0, e, r, "center");
};
Sprite_Timer.prototype.timerText = function() {
  var t = Math.floor(this._seconds / 60) % 60, e = this._seconds % 60;
  return t.padZero(2) + ":" + e.padZero(2);
};
Sprite_Timer.prototype.updatePosition = function() {
  this.x = Graphics.width - this.bitmap.width, this.y = 0;
};
Sprite_Timer.prototype.updateVisibility = function() {
  this.visible = $gameTimer.isWorking();
};
const Sprite_Timer$1 = Sprite_Timer;
Sprite_Destination = function() {
  this.initialize.apply(this, arguments);
};
Sprite_Destination.prototype = Object.create(Sprite$1.prototype);
Sprite_Destination.prototype.constructor = Sprite_Destination;
Sprite_Destination.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this.createBitmap(), this._frameCount = 0;
};
Sprite_Destination.prototype.update = function() {
  Sprite$1.prototype.update.call(this), $gameTemp.isDestinationValid() ? (this.updatePosition(), this.updateAnimation(), this.visible = !0) : (this._frameCount = 0, this.visible = !1);
};
Sprite_Destination.prototype.createBitmap = function() {
  var t = $gameMap.tileWidth(), e = $gameMap.tileHeight();
  this.bitmap = new Bitmap(t, e), this.bitmap.fillAll("white"), this.anchor.x = 0.5, this.anchor.y = 0.5, this.blendMode = Graphics.BLEND_ADD;
};
Sprite_Destination.prototype.updatePosition = function() {
  var t = $gameMap.tileWidth(), e = $gameMap.tileHeight(), r = $gameTemp.destinationX(), s = $gameTemp.destinationY();
  this.x = ($gameMap.adjustX(r) + 0.5) * t, this.y = ($gameMap.adjustY(s) + 0.5) * e;
};
Sprite_Destination.prototype.updateAnimation = function() {
  this._frameCount++, this._frameCount %= 20, this.opacity = (20 - this._frameCount) * 6, this.scale.x = 1 + this._frameCount / 20, this.scale.y = this.scale.x;
};
const Sprite_Destination$1 = Sprite_Destination;
Spriteset_Base = function() {
  this.initialize.apply(this, arguments);
};
Spriteset_Base.prototype = Object.create(Sprite$1.prototype);
Spriteset_Base.prototype.constructor = Spriteset_Base;
Spriteset_Base.prototype.initialize = function() {
  Sprite$1.prototype.initialize.call(this), this.setFrame(0, 0, Graphics.width, Graphics.height), this._tone = [0, 0, 0, 0], this.opaque = !0, this.createLowerLayer(), this.createToneChanger(), this.createUpperLayer(), this.update();
};
Spriteset_Base.prototype.createLowerLayer = function() {
  this.createBaseSprite();
};
Spriteset_Base.prototype.createUpperLayer = function() {
  this.createPictures(), this.createTimer(), this.createScreenSprites();
};
Spriteset_Base.prototype.update = function() {
  Sprite$1.prototype.update.call(this), this.updateScreenSprites(), this.updateToneChanger(), this.updatePosition();
};
Spriteset_Base.prototype.createBaseSprite = function() {
  this._baseSprite = new Sprite$1(), this._baseSprite.setFrame(0, 0, this.width, this.height), this._blackScreen = new ScreenSprite(), this._blackScreen.opacity = 255, this.addChild(this._baseSprite), this._baseSprite.addChild(this._blackScreen);
};
Spriteset_Base.prototype.createToneChanger = function() {
  Graphics.isWebGL() ? this.createWebGLToneChanger() : this.createCanvasToneChanger();
};
Spriteset_Base.prototype.createWebGLToneChanger = function() {
  var t = 48, e = Graphics.width + t * 2, r = Graphics.height + t * 2;
  this._toneFilter = new ToneFilter(), this._baseSprite.filters = [this._toneFilter], this._baseSprite.filterArea = new Rectangle(-t, -t, e, r);
};
Spriteset_Base.prototype.createCanvasToneChanger = function() {
  this._toneSprite = new ToneSprite(), this.addChild(this._toneSprite);
};
Spriteset_Base.prototype.createPictures = function() {
  var t = Graphics.boxWidth, e = Graphics.boxHeight, r = (Graphics.width - t) / 2, s = (Graphics.height - e) / 2;
  this._pictureContainer = new Sprite$1(), this._pictureContainer.setFrame(r, s, t, e);
  for (var o = 1; o <= $gameScreen.maxPictures(); o++)
    this._pictureContainer.addChild(new Sprite_Picture(o));
  this.addChild(this._pictureContainer);
};
Spriteset_Base.prototype.createTimer = function() {
  this._timerSprite = new Sprite_Timer(), this.addChild(this._timerSprite);
};
Spriteset_Base.prototype.createScreenSprites = function() {
  this._flashSprite = new ScreenSprite(), this._fadeSprite = new ScreenSprite(), this.addChild(this._flashSprite), this.addChild(this._fadeSprite);
};
Spriteset_Base.prototype.updateScreenSprites = function() {
  var t = $gameScreen.flashColor();
  this._flashSprite.setColor(t[0], t[1], t[2]), this._flashSprite.opacity = t[3], this._fadeSprite.opacity = 255 - $gameScreen.brightness();
};
Spriteset_Base.prototype.updateToneChanger = function() {
  var t = $gameScreen.tone();
  this._tone.equals(t) || (this._tone = t.clone(), Graphics.isWebGL() ? this.updateWebGLToneChanger() : this.updateCanvasToneChanger());
};
Spriteset_Base.prototype.updateWebGLToneChanger = function() {
  var t = this._tone;
  this._toneFilter.reset(), this._toneFilter.adjustTone(t[0], t[1], t[2]), this._toneFilter.adjustSaturation(-t[3]);
};
Spriteset_Base.prototype.updateCanvasToneChanger = function() {
  var t = this._tone;
  this._toneSprite.setTone(t[0], t[1], t[2], t[3]);
};
Spriteset_Base.prototype.updatePosition = function() {
  var t = $gameScreen, e = t.zoomScale();
  this.scale.x = e, this.scale.y = e, this.x = Math.round(-t.zoomX() * (e - 1)), this.y = Math.round(-t.zoomY() * (e - 1)), this.x += Math.round(t.shake());
};
const Spriteset_Base$1 = Spriteset_Base;
Spriteset_Map = function() {
  this.initialize.apply(this, arguments);
};
Spriteset_Map.prototype = Object.create(Spriteset_Base.prototype);
Spriteset_Map.prototype.constructor = Spriteset_Map;
Spriteset_Map.prototype.initialize = function() {
  Spriteset_Base.prototype.initialize.call(this);
};
Spriteset_Map.prototype.createLowerLayer = function() {
  Spriteset_Base.prototype.createLowerLayer.call(this), this.createParallax(), this.createTilemap(), this.createCharacters(), this.createShadow(), this.createDestination(), this.createWeather();
};
Spriteset_Map.prototype.update = function() {
  Spriteset_Base.prototype.update.call(this), this.updateTileset(), this.updateParallax(), this.updateTilemap(), this.updateShadow(), this.updateWeather();
};
Spriteset_Map.prototype.hideCharacters = function() {
  for (var t = 0; t < this._characterSprites.length; t++) {
    var e = this._characterSprites[t];
    e.isTile() || e.hide();
  }
};
Spriteset_Map.prototype.createParallax = function() {
  this._parallax = new TilingSprite(), this._parallax.move(0, 0, Graphics.width, Graphics.height), this._baseSprite.addChild(this._parallax);
};
Spriteset_Map.prototype.createTilemap = function() {
  Graphics.isWebGL() ? this._tilemap = new ShaderTilemap() : this._tilemap = new Tilemap(), this._tilemap.tileWidth = $gameMap.tileWidth(), this._tilemap.tileHeight = $gameMap.tileHeight(), this._tilemap.setData($gameMap.width(), $gameMap.height(), $gameMap.data()), this._tilemap.horizontalWrap = $gameMap.isLoopHorizontal(), this._tilemap.verticalWrap = $gameMap.isLoopVertical(), this.loadTileset(), this._baseSprite.addChild(this._tilemap);
};
Spriteset_Map.prototype.loadTileset = function() {
  if (this._tileset = $gameMap.tileset(), this._tileset) {
    for (var t = this._tileset.tilesetNames, e = 0; e < t.length; e++)
      this._tilemap.bitmaps[e] = ImageManager.loadTileset(t[e]);
    var r = $gameMap.tilesetFlags();
    this._tilemap.refreshTileset(), this._tilemap.flags.equals(r) || this._tilemap.refresh(), this._tilemap.flags = r;
  }
};
Spriteset_Map.prototype.createCharacters = function() {
  this._characterSprites = [], $gameMap.events().forEach(function(e) {
    this._characterSprites.push(new Sprite_Character(e));
  }, this), $gameMap.vehicles().forEach(function(e) {
    this._characterSprites.push(new Sprite_Character(e));
  }, this), $gamePlayer.followers().reverseEach(function(e) {
    this._characterSprites.push(new Sprite_Character(e));
  }, this), this._characterSprites.push(new Sprite_Character($gamePlayer));
  for (var t = 0; t < this._characterSprites.length; t++)
    this._tilemap.addChild(this._characterSprites[t]);
};
Spriteset_Map.prototype.createShadow = function() {
  this._shadowSprite = new Sprite(), this._shadowSprite.bitmap = ImageManager.loadSystem("Shadow1"), this._shadowSprite.anchor.x = 0.5, this._shadowSprite.anchor.y = 1, this._shadowSprite.z = 6, this._tilemap.addChild(this._shadowSprite);
};
Spriteset_Map.prototype.createDestination = function() {
  this._destinationSprite = new Sprite_Destination(), this._destinationSprite.z = 9, this._tilemap.addChild(this._destinationSprite);
};
Spriteset_Map.prototype.createWeather = function() {
  this._weather = new Weather(), this.addChild(this._weather);
};
Spriteset_Map.prototype.updateTileset = function() {
  this._tileset !== $gameMap.tileset() && this.loadTileset();
};
Spriteset_Map.prototype._canvasReAddParallax = function() {
  var t = this._baseSprite.children.indexOf(this._parallax);
  this._baseSprite.removeChild(this._parallax), this._parallax = new TilingSprite(), this._parallax.move(0, 0, Graphics.width, Graphics.height), this._parallax.bitmap = ImageManager.loadParallax(this._parallaxName), this._baseSprite.addChildAt(this._parallax, t);
};
Spriteset_Map.prototype.updateParallax = function() {
  this._parallaxName !== $gameMap.parallaxName() && (this._parallaxName = $gameMap.parallaxName(), this._parallax.bitmap && Graphics.isWebGL() != !0 ? this._canvasReAddParallax() : this._parallax.bitmap = ImageManager.loadParallax(this._parallaxName)), this._parallax.bitmap && (this._parallax.origin.x = $gameMap.parallaxOx(), this._parallax.origin.y = $gameMap.parallaxOy());
};
Spriteset_Map.prototype.updateTilemap = function() {
  this._tilemap.origin.x = $gameMap.displayX() * $gameMap.tileWidth(), this._tilemap.origin.y = $gameMap.displayY() * $gameMap.tileHeight();
};
Spriteset_Map.prototype.updateShadow = function() {
  var t = $gameMap.airship();
  this._shadowSprite.x = t.shadowX(), this._shadowSprite.y = t.shadowY(), this._shadowSprite.opacity = t.shadowOpacity();
};
Spriteset_Map.prototype.updateWeather = function() {
  this._weather.type = $gameScreen.weatherType(), this._weather.power = $gameScreen.weatherPower(), this._weather.origin.x = $gameMap.displayX() * $gameMap.tileWidth(), this._weather.origin.y = $gameMap.displayY() * $gameMap.tileHeight();
};
const Spriteset_Map$1 = Spriteset_Map;
Spriteset_Battle = function() {
  this.initialize.apply(this, arguments);
};
Spriteset_Battle.prototype = Object.create(Spriteset_Base.prototype);
Spriteset_Battle.prototype.constructor = Spriteset_Battle;
Spriteset_Battle.prototype.initialize = function() {
  Spriteset_Base.prototype.initialize.call(this), this._battlebackLocated = !1;
};
Spriteset_Battle.prototype.createLowerLayer = function() {
  Spriteset_Base.prototype.createLowerLayer.call(this), this.createBackground(), this.createBattleField(), this.createBattleback(), this.createEnemies(), this.createActors();
};
Spriteset_Battle.prototype.createBackground = function() {
  this._backgroundSprite = new Sprite(), this._backgroundSprite.bitmap = SceneManager.backgroundBitmap(), this._baseSprite.addChild(this._backgroundSprite);
};
Spriteset_Battle.prototype.update = function() {
  Spriteset_Base.prototype.update.call(this), this.updateActors(), this.updateBattleback();
};
Spriteset_Battle.prototype.createBattleField = function() {
  var t = Graphics.boxWidth, e = Graphics.boxHeight, r = (Graphics.width - t) / 2, s = (Graphics.height - e) / 2;
  this._battleField = new Sprite(), this._battleField.setFrame(r, s, t, e), this._battleField.x = r, this._battleField.y = s, this._baseSprite.addChild(this._battleField);
};
Spriteset_Battle.prototype.createBattleback = function() {
  var t = 32, e = -this._battleField.x - t, r = -this._battleField.y - t, s = Graphics.width + t * 2, o = Graphics.height + t * 2;
  this._back1Sprite = new TilingSprite(), this._back2Sprite = new TilingSprite(), this._back1Sprite.bitmap = this.battleback1Bitmap(), this._back2Sprite.bitmap = this.battleback2Bitmap(), this._back1Sprite.move(e, r, s, o), this._back2Sprite.move(e, r, s, o), this._battleField.addChild(this._back1Sprite), this._battleField.addChild(this._back2Sprite);
};
Spriteset_Battle.prototype.updateBattleback = function() {
  this._battlebackLocated || (this.locateBattleback(), this._battlebackLocated = !0);
};
Spriteset_Battle.prototype.locateBattleback = function() {
  var t = this._battleField.width, e = this._battleField.height, r = this._back1Sprite, s = this._back2Sprite;
  r.origin.x = r.x + (r.bitmap.width - t) / 2, s.origin.x = r.y + (s.bitmap.width - t) / 2, $gameSystem.isSideView() && (r.origin.y = r.x + r.bitmap.height - e, s.origin.y = r.y + s.bitmap.height - e);
};
Spriteset_Battle.prototype.battleback1Bitmap = function() {
  return ImageManager.loadBattleback1(this.battleback1Name());
};
Spriteset_Battle.prototype.battleback2Bitmap = function() {
  return ImageManager.loadBattleback2(this.battleback2Name());
};
Spriteset_Battle.prototype.battleback1Name = function() {
  return BattleManager.isBattleTest() ? $dataSystem.battleback1Name : $gameMap.battleback1Name() ? $gameMap.battleback1Name() : $gameMap.isOverworld() ? this.overworldBattleback1Name() : "";
};
Spriteset_Battle.prototype.battleback2Name = function() {
  return BattleManager.isBattleTest() ? $dataSystem.battleback2Name : $gameMap.battleback2Name() ? $gameMap.battleback2Name() : $gameMap.isOverworld() ? this.overworldBattleback2Name() : "";
};
Spriteset_Battle.prototype.overworldBattleback1Name = function() {
  return $gameMap.battleback1Name() === "" ? "" : $gamePlayer.isInVehicle() ? this.shipBattleback1Name() : this.normalBattleback1Name();
};
Spriteset_Battle.prototype.overworldBattleback2Name = function() {
  return $gameMap.battleback2Name() === "" ? "" : $gamePlayer.isInVehicle() ? this.shipBattleback2Name() : this.normalBattleback2Name();
};
Spriteset_Battle.prototype.normalBattleback1Name = function() {
  return this.terrainBattleback1Name(this.autotileType(1)) || this.terrainBattleback1Name(this.autotileType(0)) || this.defaultBattleback1Name();
};
Spriteset_Battle.prototype.normalBattleback2Name = function() {
  return this.terrainBattleback2Name(this.autotileType(1)) || this.terrainBattleback2Name(this.autotileType(0)) || this.defaultBattleback2Name();
};
Spriteset_Battle.prototype.terrainBattleback1Name = function(t) {
  switch (t) {
    case 24:
    case 25:
      return "Wasteland";
    case 26:
    case 27:
      return "DirtField";
    case 32:
    case 33:
      return "Desert";
    case 34:
      return "Lava1";
    case 35:
      return "Lava2";
    case 40:
    case 41:
      return "Snowfield";
    case 42:
      return "Clouds";
    case 4:
    case 5:
      return "PoisonSwamp";
    default:
      return null;
  }
};
Spriteset_Battle.prototype.terrainBattleback2Name = function(t) {
  switch (t) {
    case 20:
    case 21:
      return "Forest";
    case 22:
    case 30:
    case 38:
      return "Cliff";
    case 24:
    case 25:
    case 26:
    case 27:
      return "Wasteland";
    case 32:
    case 33:
      return "Desert";
    case 34:
    case 35:
      return "Lava";
    case 40:
    case 41:
      return "Snowfield";
    case 42:
      return "Clouds";
    case 4:
    case 5:
      return "PoisonSwamp";
  }
};
Spriteset_Battle.prototype.defaultBattleback1Name = function() {
  return "Grassland";
};
Spriteset_Battle.prototype.defaultBattleback2Name = function() {
  return "Grassland";
};
Spriteset_Battle.prototype.shipBattleback1Name = function() {
  return "Ship";
};
Spriteset_Battle.prototype.shipBattleback2Name = function() {
  return "Ship";
};
Spriteset_Battle.prototype.autotileType = function(t) {
  return $gameMap.autotileType($gamePlayer.x, $gamePlayer.y, t);
};
Spriteset_Battle.prototype.createEnemies = function() {
  for (var t = $gameTroop.members(), e = [], r = 0; r < t.length; r++)
    e[r] = new Sprite_Enemy(t[r]);
  e.sort(this.compareEnemySprite.bind(this));
  for (var s = 0; s < e.length; s++)
    this._battleField.addChild(e[s]);
  this._enemySprites = e;
};
Spriteset_Battle.prototype.compareEnemySprite = function(t, e) {
  return t.y !== e.y ? t.y - e.y : e.spriteId - t.spriteId;
};
Spriteset_Battle.prototype.createActors = function() {
  this._actorSprites = [];
  for (var t = 0; t < $gameParty.maxBattleMembers(); t++)
    this._actorSprites[t] = new Sprite_Actor(), this._battleField.addChild(this._actorSprites[t]);
};
Spriteset_Battle.prototype.updateActors = function() {
  for (var t = $gameParty.battleMembers(), e = 0; e < this._actorSprites.length; e++)
    this._actorSprites[e].setBattler(t[e]);
};
Spriteset_Battle.prototype.battlerSprites = function() {
  return this._enemySprites.concat(this._actorSprites);
};
Spriteset_Battle.prototype.isAnimationPlaying = function() {
  return this.battlerSprites().some(function(t) {
    return t.isAnimationPlaying();
  });
};
Spriteset_Battle.prototype.isEffecting = function() {
  return this.battlerSprites().some(function(t) {
    return t.isEffecting();
  });
};
Spriteset_Battle.prototype.isAnyoneMoving = function() {
  return this.battlerSprites().some(function(t) {
    return t.isMoving();
  });
};
Spriteset_Battle.prototype.isBusy = function() {
  return this.isAnimationPlaying() || this.isAnyoneMoving();
};
const Spriteset_Battle$1 = Spriteset_Battle;
