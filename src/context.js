
/* 
 * Core
 */
/** @type {typeof import('./core/index').JsExtensions} */
let JsExtensions;
/** @type {typeof import('./core/index').Utils} */
let Utils;
/** @type {typeof import('./core/index').CacheEntry} */
let CacheEntry;
/** @type {typeof import('./core/index').CacheMap} */
let CacheMap;
/** @type {typeof import('./core/index').ImageCache} */
let ImageCache;
/** @type {typeof import('./core/index').RequestQueue} */
let RequestQueue;
/** @type {typeof import('./core/index').Decrypter} */
let Decrypter;
/** @type {typeof import('./core/index').Point} */
let Point;
/** @type {typeof import('./core/index').Rectangle} */
let Rectangle;
/** @type {typeof import('./core/index').Bitmap} */
let Bitmap;
/** @type {typeof import('./core/index').Graphics} */
let Graphics;
/** @type {typeof import('./core/index').Input} */
let Input;
/** @type {typeof import('./core/index').TouchInput} */
let TouchInput;
/** @type {typeof import('./core/index').Sprite} */
let Sprite;
/** @type {typeof import('./core/index').Tilemap} */
let Tilemap;
/** @type {typeof import('./core/index').TilingSprite} */
let TilingSprite;
/** @type {typeof import('./core/index').ScreenSprite} */
let ScreenSprite;
/** @type {typeof import('./core/index').ShaderTilemap} */
let ShaderTilemap;
/** @type {typeof import('./core/index').Window} */
let Window;
/** @type {typeof import('./core/index').WindowLayer} */
let WindowLayer;
/** @type {typeof import('./core/index').Weather} */
let Weather;
/** @type {typeof import('./core/index').ToneFilter} */
let ToneFilter;
/** @type {typeof import('./core/index').ToneSprite} */
let ToneSprite;
/** @type {typeof import('./core/index').Stage} */
let Stage;
/** @type {typeof import('./core/index').WebAudio} */
let WebAudio;
/** @type {typeof import('./core/index').Html5Audio} */
let Html5Audio;
/** @type {typeof import('./core/index').JsonEx} */
let JsonEx;
/** @type {typeof import('./core/index').ResourceHandler} */
let ResourceHandler;

/*
 * Managers
 */

/** @type {typeof import('./managers/index').DataManager} */
let DataManager;
/** @type {typeof import('./managers/index').ConfigManager} */
let ConfigManager;
/** @type {typeof import('./managers/index').StorageManager} */
let StorageManager;
/** @type {typeof import('./managers/index').ImageManager} */
let ImageManager;
/** @type {typeof import('./managers/index').AudioManager} */
let AudioManager;
/** @type {typeof import('./managers/index').SoundManager} */
let SoundManager;
/** @type {typeof import('./managers/index').TextManager} */
let TextManager;
/** @type {typeof import('./managers/index').SceneManager} */
let SceneManager;
/** @type {typeof import('./managers/index').BattleManager} */
let BattleManager;
/** @type {typeof import('./managers/index').PluginManager} */
let PluginManager;

/*
 * Objects
 */

/** @type {typeof import('./objects/index').Game_Temp} */
let Game_Temp;
/** @type {typeof import('./objects/index').Game_System} */
let Game_System;
/** @type {typeof import('./objects/index').Game_Timer} */
let Game_Timer;
/** @type {typeof import('./objects/index').Game_Message} */
let Game_Message;
/** @type {typeof import('./objects/index').Game_Switches} */
let Game_Switches;
/** @type {typeof import('./objects/index').Game_Variables} */
let Game_Variables;
/** @type {typeof import('./objects/index').Game_SelfSwitches} */
let Game_SelfSwitches;
/** @type {typeof import('./objects/index').Game_Screen} */
let Game_Screen;
/** @type {typeof import('./objects/index').Game_Picture} */
let Game_Picture;
/** @type {typeof import('./objects/index').Game_Item} */
let Game_Item;
/** @type {typeof import('./objects/index').Game_Action} */
let Game_Action;
/** @type {typeof import('./objects/index').Game_ActionResult} */
let Game_ActionResult;
/** @type {typeof import('./objects/index').Game_BattlerBase} */
let Game_BattlerBase;
/** @type {typeof import('./objects/index').Game_Battler} */
let Game_Battler;
/** @type {typeof import('./objects/index').Game_Actor} */
let Game_Actor;
/** @type {typeof import('./objects/index').Game_Enemy} */
let Game_Enemy;
/** @type {typeof import('./objects/index').Game_Actors} */
let Game_Actors;
/** @type {typeof import('./objects/index').Game_Unit} */
let Game_Unit;
/** @type {typeof import('./objects/index').Game_Party} */
let Game_Party;
/** @type {typeof import('./objects/index').Game_Troop} */
let Game_Troop;
/** @type {typeof import('./objects/index').Game_Map} */
let Game_Map;
/** @type {typeof import('./objects/index').Game_CommonEvent} */
let Game_CommonEvent;
/** @type {typeof import('./objects/index').Game_CharacterBase} */
let Game_CharacterBase;
/** @type {typeof import('./objects/index').Game_Character} */
let Game_Character;
/** @type {typeof import('./objects/index').Game_Player} */
let Game_Player;
/** @type {typeof import('./objects/index').Game_Follower} */
let Game_Follower;
/** @type {typeof import('./objects/index').Game_Followers} */
let Game_Followers;
/** @type {typeof import('./objects/index').Game_Vehicle} */
let Game_Vehicle;
/** @type {typeof import('./objects/index').Game_Event} */
let Game_Event;
/** @type {typeof import('./objects/index').Game_Interpreter} */
let Game_Interpreter;


/*
 * Scenes
 */
/** @type {typeof import('./scenes/index').Scene_Base} */
let Scene_Base;
/** @type {typeof import('./scenes/index').Scene_Boot} */
let Scene_Boot;
/** @type {typeof import('./scenes/index').Scene_Title} */
let Scene_Title;
/** @type {typeof import('./scenes/index').Scene_Map} */
let Scene_Map;
/** @type {typeof import('./scenes/index').Scene_MenuBase} */
let Scene_MenuBase;
/** @type {typeof import('./scenes/index').Scene_Menu} */
let Scene_Menu;
/** @type {typeof import('./scenes/index').Scene_ItemBase} */
let Scene_ItemBase;
/** @type {typeof import('./scenes/index').Scene_Item} */
let Scene_Item;
/** @type {typeof import('./scenes/index').Scene_Skill} */
let Scene_Skill;
/** @type {typeof import('./scenes/index').Scene_Equip} */
let Scene_Equip;
/** @type {typeof import('./scenes/index').Scene_Status} */
let Scene_Status;
/** @type {typeof import('./scenes/index').Scene_Options} */
let Scene_Options;
/** @type {typeof import('./scenes/index').Scene_File} */
let Scene_File;
/** @type {typeof import('./scenes/index').Scene_Save} */
let Scene_Save;
/** @type {typeof import('./scenes/index').Scene_Load} */
let Scene_Load;
/** @type {typeof import('./scenes/index').Scene_GameEnd} */
let Scene_GameEnd;
/** @type {typeof import('./scenes/index').Scene_Shop} */
let Scene_Shop;
/** @type {typeof import('./scenes/index').Scene_Name} */
let Scene_Name;
/** @type {typeof import('./scenes/index').Scene_Debug} */
let Scene_Debug;
/** @type {typeof import('./scenes/index').Scene_Battle} */
let Scene_Battle;
/** @type {typeof import('./scenes/index').Scene_Gameover} */
let Scene_Gameover;

/*
 * Sprites
 */
/** @type {typeof import('./sprites/index').Sprite_Base} */
let Sprite_Base;
/** @type {typeof import('./sprites/index').Sprite_Button} */
let Sprite_Button;
/** @type {typeof import('./sprites/index').Sprite_Character} */
let Sprite_Character;
/** @type {typeof import('./sprites/index').Sprite_Battler} */
let Sprite_Battler;
/** @type {typeof import('./sprites/index').Sprite_Actor} */
let Sprite_Actor;
/** @type {typeof import('./sprites/index').Sprite_Enemy} */
let Sprite_Enemy;
/** @type {typeof import('./sprites/index').Sprite_Animation} */
let Sprite_Animation;
/** @type {typeof import('./sprites/index').Sprite_Damage} */
let Sprite_Damage;
/** @type {typeof import('./sprites/index').Sprite_StateIcon} */
let Sprite_StateIcon;
/** @type {typeof import('./sprites/index').Sprite_StateOverlay} */
let Sprite_StateOverlay;
/** @type {typeof import('./sprites/index').Sprite_Weapon} */
let Sprite_Weapon;
/** @type {typeof import('./sprites/index').Sprite_Balloon} */
let Sprite_Balloon;
/** @type {typeof import('./sprites/index').Sprite_Picture} */
let Sprite_Picture;
/** @type {typeof import('./sprites/index').Sprite_Timer} */
let Sprite_Timer;
/** @type {typeof import('./sprites/index').Sprite_Destination} */
let Sprite_Destination;
/** @type {typeof import('./sprites/index').Spriteset_Base} */
let Spriteset_Base;
/** @type {typeof import('./sprites/index').Spriteset_Map} */
let Spriteset_Map;
/** @type {typeof import('./sprites/index').Spriteset_Battle} */
let Spriteset_Battle;

/*
 * Windows
 */
/** @type {typeof import('./windows/index').Window_Base} */
let Window_Base;
/** @type {typeof import('./windows/index').Window_Selectable} */
let Window_Selectable;
/** @type {typeof import('./windows/index').Window_Command} */
let Window_Command;
/** @type {typeof import('./windows/index').Window_HorzCommand} */
let Window_HorzCommand;
/** @type {typeof import('./windows/index').Window_Help} */
let Window_Help;
/** @type {typeof import('./windows/index').Window_Gold} */
let Window_Gold;
/** @type {typeof import('./windows/index').Window_MenuCommand} */
let Window_MenuCommand;
/** @type {typeof import('./windows/index').Window_MenuStatus} */
let Window_MenuStatus;
/** @type {typeof import('./windows/index').Window_MenuActor} */
let Window_MenuActor;
/** @type {typeof import('./windows/index').Window_ItemCategory} */
let Window_ItemCategory;
/** @type {typeof import('./windows/index').Window_ItemList} */
let Window_ItemList;
/** @type {typeof import('./windows/index').Window_SkillType} */
let Window_SkillType;
/** @type {typeof import('./windows/index').Window_SkillStatus} */
let Window_SkillStatus;
/** @type {typeof import('./windows/index').Window_SkillList} */
let Window_SkillList;
/** @type {typeof import('./windows/index').Window_EquipStatus} */
let Window_EquipStatus;
/** @type {typeof import('./windows/index').Window_EquipCommand} */
let Window_EquipCommand;
/** @type {typeof import('./windows/index').Window_EquipSlot} */
let Window_EquipSlot;
/** @type {typeof import('./windows/index').Window_EquipItem} */
let Window_EquipItem;
/** @type {typeof import('./windows/index').Window_Status} */
let Window_Status;
/** @type {typeof import('./windows/index').Window_Options} */
let Window_Options;
/** @type {typeof import('./windows/index').Window_SavefileList} */
let Window_SavefileList;
/** @type {typeof import('./windows/index').Window_ShopCommand} */
let Window_ShopCommand;
/** @type {typeof import('./windows/index').Window_ShopBuy} */
let Window_ShopBuy;
/** @type {typeof import('./windows/index').Window_ShopSell} */
let Window_ShopSell;
/** @type {typeof import('./windows/index').Window_ShopNumber} */
let Window_ShopNumber;
/** @type {typeof import('./windows/index').Window_ShopStatus} */
let Window_ShopStatus;
/** @type {typeof import('./windows/index').Window_NameEdit} */
let Window_NameEdit;
/** @type {typeof import('./windows/index').Window_NameInput} */
let Window_NameInput;
/** @type {typeof import('./windows/index').Window_ChoiceList} */
let Window_ChoiceList;
/** @type {typeof import('./windows/index').Window_NumberInput} */
let Window_NumberInput;
/** @type {typeof import('./windows/index').Window_EventItem} */
let Window_EventItem;
/** @type {typeof import('./windows/index').Window_Message} */
let Window_Message;
/** @type {typeof import('./windows/index').Window_ScrollText} */
let Window_ScrollText;
/** @type {typeof import('./windows/index').Window_MapName} */
let Window_MapName;
/** @type {typeof import('./windows/index').Window_BattleLog} */
let Window_BattleLog;
/** @type {typeof import('./windows/index').Window_PartyCommand} */
let Window_PartyCommand;
/** @type {typeof import('./windows/index').Window_ActorCommand} */
let Window_ActorCommand;
/** @type {typeof import('./windows/index').Window_BattleStatus} */
let Window_BattleStatus;
/** @type {typeof import('./windows/index').Window_BattleActor} */
let Window_BattleActor;
/** @type {typeof import('./windows/index').Window_BattleEnemy} */
let Window_BattleEnemy;
/** @type {typeof import('./windows/index').Window_BattleSkill} */
let Window_BattleSkill;
/** @type {typeof import('./windows/index').Window_BattleItem} */
let Window_BattleItem;
/** @type {typeof import('./windows/index').Window_TitleCommand} */
let Window_TitleCommand;
/** @type {typeof import('./windows/index').Window_GameEnd} */
let Window_GameEnd;
/** @type {typeof import('./windows/index').Window_DebugRange} */
let Window_DebugRange;
/** @type {typeof import('./windows/index').Window_DebugEdit} */
let Window_DebugEdit;