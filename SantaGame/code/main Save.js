import kaboom from "kaboom";

kaboom({
background:[0, 0, 25, 1,],}
)

loadSprite("bag", "/sprites/bag.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("steel", "/sprites/steel.png")
loadSprite("door", "/sprites/door.png")
loadSprite("key", "/sprites/key.png")
loadSprite("santa", "/sprites/santa.png")
loadSprite("lit", "/sprites/lit.png");
loadSprite("table", "/sprites/table.png");
loadSprite("tv", "/sprites/tv.png");
loadSprite("wc", "/sprites/wc.png");
loadSprite("evier", "/sprites/evier.png");
loadSprite("gaz", "/sprites/gaz.png");
loadSprite("porte", "/sprites/porte.png");
loadSprite("aroir", "/sprites/aroir.png");
loadSprite("sac", "/sprites/sac.png");
loadSprite("personne", "/sprites/personne.png");
loadSprite("bus", "/sprites/bus.png");
loadSprite("voiture", "/sprites/voiture.png");
loadSprite("meubleCuisine", "/sprites/meubleCuisine.png");
loadSprite("murHorizontal", "/sprites/murHorizontal.png");
loadSprite("murVertical", "/sprites/murVertical.png");
loadSprite("interrupteurGauche", "/sprites/interrupteurGauche.png");
loadSprite("interrupteurDroit", "/sprites/interrupteurDroit.png");
loadSprite("interrupteurHaut", "/sprites/interrupteurHaut.png");
loadSprite("interrupteurBas", "/sprites/interrupteurBas.png");
loadSprite("lumiereGauche", "/sprites/lumiereGauche.png");
loadSprite("lumiereDroit", "/sprites/lumiereDroit.png");
loadSprite("lumiereHaut", "/sprites/lumiereHaut.png");
loadSprite("lumiereBas", "/sprites/lumiereBas.png");
loadSprite("fenetreVertical", "/sprites/fenetreVertical.png");
loadSprite("fenetreHorizontal", "/sprites/fenetreHorizontal.png");
loadSprite("interupt", "/sprites/interupt.png");

loadSprite("lumiere", "/sprites/lampe.png");



loadSprite("lit1", "/sprites/lit1.jpg");
loadSprite("lit2", "/sprites/lit2.jpg");
loadSprite("lit3", "/sprites/lit3.jpg");

loadSprite("canape1", "/sprites/cnape1.png");
loadSprite("canape2", "/sprites/cnape2.png");
loadSprite("canape3", "/sprites/cnape3.png");

/*
loadSprite("interrupt", "/sprites/interrupt.png")*/

/*

l = lit
t = table
c = canape 
v = tv
w = wc
e = evier
g = gaz
| = porte
a = arooir
s = sac
j = personne
b = bus 
o = voiture
m = meuble cuisine
= = mur horizontal
+ = mur vertical
3 = lumiere 
7 = fenetre vertical
f = fenetre horizontal
*/


scene("main", (levelIdx) => {
  const levels = [

	[
   "====f===f====",
   "+l%ù  +  tgt+",
   "+     +  3 t+",
   "+tt 3    t e+",
   "+======  t  +",
   "+c])3      3+",
   "+     3tt   +",
   "+3t  ===6=  7",
   "7        +  +",
   "+3vv   @ +  +",
   "+======= +  +",
   "+w3      +3 |",
   "==========51=",
	],/*
    [
      "====f===f====",
      "= a    5gm+><=",
      "=     fte+ i=",
      "i c])  +     =",
      "=  é'(è< ]°=",
      "=   @ l  pw |",
      "=============",
      ],*/
    [
      "---------",
      "-       -",
      "-  $    -",
      "|       -",
      "-       -",
      "-     b -",
      "-   @   -",
      "---------",
      ],
    ]

  addLevel(levels[levelIdx], {
    width: 64,
    height: 64,
    pos: vec2(64, 64),
    

      
    "=": () => [
      sprite("murHorizontal"),
      area(),
      solid(),
      ],
          "+": () => [
      sprite("murVertical"),
      area(),
      solid(),
      ],
    "c": () => [
      sprite("canape1"),
      area(),
      solid(),
      ],
     "]": () => [
      sprite("canape2"),
      area(),
      solid(),
      ],
      
     "3": () => [
      sprite("lumiere"),
      area(),
      ],
      
        ")": () => [
      sprite("canape3"),
      area(),
      solid(),
      ],
    "-": () => [
      sprite("steel"),
      area(),
      solid(),
      ],
    "$": () => [
      sprite("key"),
      area(),
      "key",
      ],
    "@": () => [
      sprite("santa"),
      area(),
      solid(),
      "player",
      ],
    "|": () => [
      sprite("door"),
      area(),
      solid(),
      "door",
      ],
    "a": () => [
      sprite("bag"),
      area(),
      solid(),
      "character",
      { msg: "get out!" },
      ],
    "b": () => [
      sprite("ghosty"),
      area(),
      solid(),
      "character",
      { msg: "hi!" },
      ],
    "i": () => [
      sprite("interupt"),
      area(),
      solid(),
      "interupt",
      ],
      
     "l": () => [
      sprite("lit1"),
      area(),
      solid(),
      ],
           "%": () => [
      sprite("lit2"),
      area(),
      solid(),
      ],
           "ù": () => [
      sprite("lit3"),
      area(),
      solid(),
      ],
      
      
      "œ": () => [
      sprite("canape1"),
      area(),
      solid(),
      "canape1",
      ],
      
      "&": () => [
      sprite("canape2"),
      area(),
      solid(),
      "canape2",
      ],
      
      "é": () => [
      sprite("canape3"),
      area(),
      solid(),
      "canape3",
      ],
      
      

      })
      
      
      /*
      "=": () => [
    sprite("grass"),
    area(),
    solid(),
  ],
  "-": () => [
    sprite("steel"),
    area(),
    solid(),
  ],
  "$": () => [
    sprite("key"),
    area(),
    "key",
  ],
  "@": () => [
    sprite("santa"),
    area(),
    solid(),
    "player",
  ],
  "|": () => [
    sprite("door"),
    area(),
    solid(),
    "door",
  ],
  "bg": () => [
    sprite("bag"),
    area(),
    solid(),
    "character",
    { msg: "get out!" },
  ],
  "b2": () => [
    sprite("ghosty"),
    area(),
    solid(),
    "character",
    { msg: "hi!" },
  ],
  "l": () => [
    sprite("lit"),
    area(),
    solid(),
    "lit",
  ],
  "t": () => [
    sprite("table"),
    area(),
    solid(),
    "table",
  ],
  "c": () => [
    sprite("canape"),
    area(),
    solid(),
    "canape",
  ],
  "v": () => [
    sprite("tv"),
    area(),
    solid(),
    "tv",
  ],
  "w": () => [
    sprite("wc"),
    area(),
    solid(),
    "wc",
  ],
  "e": () => [
    sprite("evier"),
    area(),
    solid(),
    "evier",
  ],
  "g": () => [
    sprite("gaz"),
    area(),
    solid(),
    "gaz",
  ],
  "p": () => [
    sprite("porte"),
    area(),
    solid(),
    "porte",
  ],
  "a": () => [
    sprite("aroir"),
    area(),
    solid(),
    "aroir",
  ],
  "s": () => [
    sprite("sac"),
    area(),
    solid(),
    "sac",
  ],
  "j": () => [
    sprite("personne"),
    area(),
    solid(),
    "personne",
  ],
  "b": () => [
    sprite("bus"),
    area(),
    solid(),
    "bus",
  ],
  "o": () => [
    sprite("voiture"),
    area(),
    solid(),
    "voiture",
  ],
  "m": () => [
    sprite("meubleCuisine"),
    area(),
    solid(),
    "meubleCuisine",
  ],
  "=2": () => [
    sprite("murHorizontal"),
    area(),
    solid(),
    "murHorizontal",
  ],
  "+": () => [
    sprite("murVertical"),
    area(),
    solid(),
    "murVertical",
  ],
  "<": () => [
    sprite("interrupteurGauche"),
    area(),
    solid(),
    "interrupteurGauche",
  ],
  ">": () => [
    sprite("interrupteurDroit"),
    area(),
    solid(),
    "interrupteurDroit",
  ],
  "1": () => [
    sprite("interrupteurHaut"),
    area(),
    solid(),
    "interrupteurHaut",
  ],
  "2": () => [
    sprite("interrupteurBas"),
    area(),
    solid(),
    "interrupteurBas",
  ],
  "3": () => [
    sprite("lumiereGauche"),
    area(),
    solid(),
    "lumiereGauche",
  ],
  "4": () => [
    sprite("lumiereDroit"),
    area(),
    solid(),
    "lumiereDroit",
  ],
  "5": () => [
    sprite("lumiereHaut"),
    area(),
    solid(),
    "lumiereHaut",
  ],
  "6": () => [
    sprite("lumiereBas"),
    area(),
    solid(),
    "lumiereBas",
  ],
  "7": () => [
    sprite("fenetreVertical"),
    area(),
    solid(),
    "fenetreVertical",
  ],
  "f": () => [
    sprite("fenetreHorizontal"),
    area(),
    solid(),
    "fenetreHorizontal",
  ],
      
      	*/

  

  const player = get("player")[0]

  const dialog = add([
    text(""),
    ])

  let hasKey = false

  player.onCollide("key", (key) => {
    destroy(key)
    hasKey = true
  })
  
  
// Lit table interrupteur lumiere canape tv chiotte evier gaziniere porte fenetre

// arrosoir sac personne voiture bus 


 /* player.onCollide("door", () => {
    if (hasKey) {
      if (levelIdx + 1 < levels.length) {
          go("main", levelIdx + 1)
      } else {
          go("win")
      }
    } else {
      dialog.text = "you got no key!"
    }
  })
*/  
  
player.onCollide("door", () => {
  if (hasKey) {
    if (levelIdx + 1 < levels.length) {
      go("main", levelIdx + 1);
    } else {
      go("win");
    }
  } else {
    dialog.text = "you got no key!";
  }
});

/*
player.onCollide("steel", (obj) => {
  // Le joueur est à côté de la case "steel"
  dialog.text("Non ! Il fait jour, pourquoi ne pas ouvrir la fenêtre !");
});
*/


player.onCollide("interupt", () => 
	{
		dialog.text = "ntm";
	});

  player.onCollide("character", (ch) => {
    dialog.text = ch.msg
  })
  



  const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN,
  }


  for (const dir in dirs) {
    onKeyDown(dir, () => {
      dialog.text = ""
      player.move(dirs[dir].scale(320))
    })
  }
})




scene("win", () => {
  add([
    text("You Win!"),
    pos(width() / 2, height() / 2),
    origin("center"),
    ])
})

go("main", 0)
