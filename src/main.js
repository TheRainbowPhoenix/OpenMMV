import {
  JsExtensions,
  Utils,
  CacheEntry,
  Point,
  Rectangle,
  Bitmap,
  Graphics,
  Input,
  TouchInput,
  Sprite,
  Tilemap,
  TilingSprite,
  ScreenSprite,
  Window,
  WindowLayer,
  Weather,
  ToneFilter,
  ToneSprite,
  Stage,
  WebAudio,
  Html5Audio,
  JsonEx,
  ResourceHandler,
} from "./core/index"

import {
  DataManager,
  ConfigManager,
  StorageManager,
  ImageManager,
  AudioManager,
  SoundManager,
  TextManager,
  SceneManager,
  BattleManager,
  PluginManager
} from "./managers/index"

import {
  Game_Temp,
  Game_System,
  Game_Timer,
  Game_Message,
  Game_Switches,
  Game_Variables,
  Game_SelfSwitches,
  Game_Screen,
  Game_Picture,
  Game_Item,
  Game_Action,
  Game_ActionResult,
  Game_BattlerBase,
  Game_Battler,
  Game_Actor,
  Game_Enemy,
  Game_Actors,
  Game_Unit,
  Game_Party,
  Game_Troop,
  Game_Map,
  Game_CommonEvent,
  Game_CharacterBase,
  Game_Character,
  Game_Player,
  Game_Follower,
  Game_Followers,
  Game_Vehicle,
  Game_Event,
  Game_Interpreter,
} from "./objects/index"

import {
  Scene_Base,
  Scene_Boot,
  Scene_Title,
  Scene_Map,
  Scene_MenuBase,
  Scene_Menu,
  Scene_ItemBase,
  Scene_Item,
  Scene_Skill,
  Scene_Equip,
  Scene_Status,
  Scene_Options,
  Scene_File,
  Scene_Save,
  Scene_Load,
  Scene_GameEnd,
  Scene_Shop,
  Scene_Name,
  Scene_Debug,
  Scene_Battle,
  Scene_Gameover,
} from "./scenes/index"

import {
  Sprite_Base,
  Sprite_Button,
  Sprite_Character,
  Sprite_Battler,
  Sprite_Actor,
  Sprite_Enemy,
  Sprite_Animation,
  Sprite_Damage,
  Sprite_StateIcon,
  Sprite_StateOverlay,
  Sprite_Weapon,
  Sprite_Balloon,
  Sprite_Picture,
  Sprite_Timer,
  Sprite_Destination,
  Spriteset_Base,
  Spriteset_Map,
  Spriteset_Battle,
} from "./sprites/index"

import {
  Window_Base,
  Window_Selectable,
  Window_Command,
  Window_HorzCommand,
  Window_Help,
  Window_Gold,
  Window_MenuCommand,
  Window_MenuStatus,
  Window_MenuActor,
  Window_ItemCategory,
  Window_ItemList,
  Window_SkillType,
  Window_SkillStatus,
  Window_SkillList,
  Window_EquipStatus,
  Window_EquipCommand,
  Window_EquipSlot,
  Window_EquipItem,
  Window_Status,
  Window_Options,
  Window_SavefileList,
  Window_ShopCommand,
  Window_ShopBuy,
  Window_ShopSell,
  Window_ShopNumber,
  Window_ShopStatus,
  Window_NameEdit,
  Window_NameInput,
  Window_ChoiceList,
  Window_NumberInput,
  Window_EventItem,
  Window_Message,
  Window_ScrollText,
  Window_MapName,
  Window_BattleLog,
  Window_PartyCommand,
  Window_ActorCommand,
  Window_BattleStatus,
  Window_BattleActor,
  Window_BattleEnemy,
  Window_BattleSkill,
  Window_BattleItem,
  Window_TitleCommand,
  Window_GameEnd,
  Window_DebugRange,
  Window_DebugEdit,
} from "./windows/index"

/* Make Globals (Core) */
globalThis.JsExtensions = JsExtensions;
globalThis.Utils = Utils;
globalThis.CacheEntry = CacheEntry;
globalThis.Point = Point;
globalThis.Rectangle = Rectangle;
globalThis.Bitmap = Bitmap;
globalThis.Graphics = Graphics;
globalThis.Input = Input;
globalThis.TouchInput = TouchInput;
globalThis.Sprite = Sprite;
globalThis.Tilemap = Tilemap;
globalThis.TilingSprite = TilingSprite;
globalThis.ScreenSprite = ScreenSprite;
globalThis.Window = Window;
globalThis.WindowLayer = WindowLayer;
globalThis.Weather = Weather;
globalThis.ToneFilter = ToneFilter;
globalThis.ToneSprite = ToneSprite;
globalThis.Stage = Stage;
globalThis.WebAudio = WebAudio;
globalThis.Html5Audio = Html5Audio;
globalThis.JsonEx = JsonEx;
globalThis.ResourceHandler = ResourceHandler;

/* Make Globals (Managers) */
globalThis.DataManager = DataManager;
globalThis.ConfigManager = ConfigManager;
globalThis.StorageManager = StorageManager;
globalThis.ImageManager = ImageManager;
globalThis.AudioManager = AudioManager;
globalThis.SoundManager = SoundManager;
globalThis.TextManager = TextManager;
globalThis.SceneManager = SceneManager;
globalThis.BattleManager = BattleManager;
globalThis.PluginManager = PluginManager;

/* Make Globals (Objects) */
globalThis.Game_Temp = Game_Temp;
globalThis.Game_System = Game_System;
globalThis.Game_Timer = Game_Timer;
globalThis.Game_Message = Game_Message;
globalThis.Game_Switches = Game_Switches;
globalThis.Game_Variables = Game_Variables;
globalThis.Game_SelfSwitches = Game_SelfSwitches;
globalThis.Game_Screen = Game_Screen;
globalThis.Game_Picture = Game_Picture;
globalThis.Game_Item = Game_Item;
globalThis.Game_Action = Game_Action;
globalThis.Game_ActionResult = Game_ActionResult;
globalThis.Game_BattlerBase = Game_BattlerBase;
globalThis.Game_Battler = Game_Battler;
globalThis.Game_Actor = Game_Actor;
globalThis.Game_Enemy = Game_Enemy;
globalThis.Game_Actors = Game_Actors;
globalThis.Game_Unit = Game_Unit;
globalThis.Game_Party = Game_Party;
globalThis.Game_Troop = Game_Troop;
globalThis.Game_Map = Game_Map;
globalThis.Game_CommonEvent = Game_CommonEvent;
globalThis.Game_CharacterBase = Game_CharacterBase;
globalThis.Game_Character = Game_Character;
globalThis.Game_Player = Game_Player;
globalThis.Game_Follower = Game_Follower;
globalThis.Game_Followers = Game_Followers;
globalThis.Game_Vehicle = Game_Vehicle;
globalThis.Game_Event = Game_Event;
globalThis.Game_Interpreter = Game_Interpreter;

/* Make Globals (Scenes) */
globalThis.Scene_Base = Scene_Base;
globalThis.Scene_Boot = Scene_Boot;
globalThis.Scene_Title = Scene_Title;
globalThis.Scene_Map = Scene_Map;
globalThis.Scene_MenuBase = Scene_MenuBase;
globalThis.Scene_Menu = Scene_Menu;
globalThis.Scene_ItemBase = Scene_ItemBase;
globalThis.Scene_Item = Scene_Item;
globalThis.Scene_Skill = Scene_Skill;
globalThis.Scene_Equip = Scene_Equip;
globalThis.Scene_Status = Scene_Status;
globalThis.Scene_Options = Scene_Options;
globalThis.Scene_File = Scene_File;
globalThis.Scene_Save = Scene_Save;
globalThis.Scene_Load = Scene_Load;
globalThis.Scene_GameEnd = Scene_GameEnd;
globalThis.Scene_Shop = Scene_Shop;
globalThis.Scene_Name = Scene_Name;
globalThis.Scene_Debug = Scene_Debug;
globalThis.Scene_Battle = Scene_Battle;
globalThis.Scene_Gameover = Scene_Gameover;

/* Make Globals (Sprites) */
globalThis.Sprite_Base = Sprite_Base;
globalThis.Sprite_Button = Sprite_Button;
globalThis.Sprite_Character = Sprite_Character;
globalThis.Sprite_Battler = Sprite_Battler;
globalThis.Sprite_Actor = Sprite_Actor;
globalThis.Sprite_Enemy = Sprite_Enemy;
globalThis.Sprite_Animation = Sprite_Animation;
globalThis.Sprite_Damage = Sprite_Damage;
globalThis.Sprite_StateIcon = Sprite_StateIcon;
globalThis.Sprite_StateOverlay = Sprite_StateOverlay;
globalThis.Sprite_Weapon = Sprite_Weapon;
globalThis.Sprite_Balloon = Sprite_Balloon;
globalThis.Sprite_Picture = Sprite_Picture;
globalThis.Sprite_Timer = Sprite_Timer;
globalThis.Sprite_Destination = Sprite_Destination;
globalThis.Spriteset_Base = Spriteset_Base;
globalThis.Spriteset_Map = Spriteset_Map;
globalThis.Spriteset_Battle = Spriteset_Battle;

/* Make Globals (Window) */
globalThis.Window_Base = Window_Base;
globalThis.Window_Selectable = Window_Selectable;
globalThis.Window_Command = Window_Command;
globalThis.Window_HorzCommand = Window_HorzCommand;
globalThis.Window_Help = Window_Help;
globalThis.Window_Gold = Window_Gold;
globalThis.Window_MenuCommand = Window_MenuCommand;
globalThis.Window_MenuStatus = Window_MenuStatus;
globalThis.Window_MenuActor = Window_MenuActor;
globalThis.Window_ItemCategory = Window_ItemCategory;
globalThis.Window_ItemList = Window_ItemList;
globalThis.Window_SkillType = Window_SkillType;
globalThis.Window_SkillStatus = Window_SkillStatus;
globalThis.Window_SkillList = Window_SkillList;
globalThis.Window_EquipStatus = Window_EquipStatus;
globalThis.Window_EquipCommand = Window_EquipCommand;
globalThis.Window_EquipSlot = Window_EquipSlot;
globalThis.Window_EquipItem = Window_EquipItem;
globalThis.Window_Status = Window_Status;
globalThis.Window_Options = Window_Options;
globalThis.Window_SavefileList = Window_SavefileList;
globalThis.Window_ShopCommand = Window_ShopCommand;
globalThis.Window_ShopBuy = Window_ShopBuy;
globalThis.Window_ShopSell = Window_ShopSell;
globalThis.Window_ShopNumber = Window_ShopNumber;
globalThis.Window_ShopStatus = Window_ShopStatus;
globalThis.Window_NameEdit = Window_NameEdit;
globalThis.Window_NameInput = Window_NameInput;
globalThis.Window_ChoiceList = Window_ChoiceList;
globalThis.Window_NumberInput = Window_NumberInput;
globalThis.Window_EventItem = Window_EventItem;
globalThis.Window_Message = Window_Message;
globalThis.Window_ScrollText = Window_ScrollText;
globalThis.Window_MapName = Window_MapName;
globalThis.Window_BattleLog = Window_BattleLog;
globalThis.Window_PartyCommand = Window_PartyCommand;
globalThis.Window_ActorCommand = Window_ActorCommand;
globalThis.Window_BattleStatus = Window_BattleStatus;
globalThis.Window_BattleActor = Window_BattleActor;
globalThis.Window_BattleEnemy = Window_BattleEnemy;
globalThis.Window_BattleSkill = Window_BattleSkill;
globalThis.Window_BattleItem = Window_BattleItem;
globalThis.Window_TitleCommand = Window_TitleCommand;
globalThis.Window_GameEnd = Window_GameEnd;
globalThis.Window_DebugRange = Window_DebugRange;
globalThis.Window_DebugEdit = Window_DebugEdit;