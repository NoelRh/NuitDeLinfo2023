import kaboom from "kaboom";

kaboom({
background:[132, 132, 132, 20,],}
)



loadSprite("bag", "/sprites/bag.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("steel", "/sprites/steel.png")
loadSprite("door", "/sprites/door.png")
loadSprite("key", "/sprites/key.png")
loadSprite("santa", "/sprites/santae.png")



loadSprite("wc", "/sprites/wc.png");
loadSprite("evier", "/sprites/evier.png");
loadSprite("gaz", "/sprites/gaz.png");



loadSprite("murHorizontal", "/sprites/murHorizontal.png");
loadSprite("murVertical", "/sprites/murVertical.png");


loadSprite("fenetre", "/sprites/fenetre.png");

loadSprite("interupt", "/sprites/interupt.png");

loadSprite("lumiereOff", "/sprites/lampe.png");
loadSprite("lumiereOn", "/sprites/lampeOn.png");


loadSprite("chemine1", "/sprites/chemine1.png");
loadSprite("chemine2", "/sprites/chemine2.png");
loadSprite("t", "/sprites/t.png");


loadSprite("table", "/sprites/table.png");

loadSprite("lit1", "/sprites/lit1.jpg");
loadSprite("lit2", "/sprites/lit2.jpg");
loadSprite("lit3", "/sprites/lit3.jpg");

loadSprite("canape1", "/sprites/cnape1.png");
loadSprite("canape2", "/sprites/cnape2.png");
loadSprite("canape3", "/sprites/cnape3.png");

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
   "        ====f===f====",
   "        +l%ù  +  hgh+",
   "        +4 @  +  3 h+",
   "        +ht   3  t e+",
   "        +======  t  +",
   "        +c])3      3+",
   "        +     3tt   +",
   "        +3t  =====  f",
   "        f        +  +",
   "        +4v,     +  +",
   "        +======= +  +",
   "        +w4      + 3|",
   "        =============",
	],
	[
   "        ===f=+===f==",
   "4       +h%l   + hgh+",
   "        +4 @   + 3 h+",
   "        +t e 3   t h+",
   "        +  t   =====+",
   "        +3c])3     3+",
   "        + 3tt      +",
   "        +f  ====  t +",
   "        +   +       f",
   "        +   +      4v+",
   "        +   + =======+",
   "        |4  +      4w+",
   "        ========= ===",
	],
	[
   "        ============",
   "      f +l%ù  +  hgh+",
   "        +4 @+  3  h+",
   "   3    +ht   3 t e+",
   "        +======  t  +",
   "   3    +c])3      3+",
   "        +     3tt   +",
   "   4    +3t =====  f",
   "        f        +  +",
   "   4    +4v,     +  +",
   "        +======= +  +",
   "        +w4      + 4|",
   "        === f===f====",
],
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
       "e": () => [
      sprite("evier"),
      area(),
      solid(),
      ], 
      "g": () => [
      sprite("gaz"),
      area(),
      solid(),
      ], 
      "h": () => [
      sprite("t"),
      area(),
      solid(),
      ], 
      "t": () => [
      sprite("table"),
      area(),
      solid(),
      ], 
         "w": () => [
      sprite("wc"),
      area(),
      solid(),
      ], 

       "v": () => [
      sprite("chemine1"),
      area(),
      solid(),
      ], 
      ",": () => [
      sprite("chemine2"),
      area(),
      solid(),
      ],
    "=": () => [
      sprite("murHorizontal"),
      area(),
      solid(),
      ],
          "f": () => [
      sprite("fenetre"),
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
      sprite("lumiereOff"),
      area(),
      "lumiereOff",
         {
      	isChanging: false, // Attribut booléen pour indiquer si la fenêtre est ouverte ou fermée
    	},
      ],
      
      "4": () => [
      sprite("lumiereOn"),
      area(),
      solid(),
      "lumiereOn",
               {
      	isChanging: false, // Attribut booléen pour indiquer si la fenêtre est ouverte ou fermée
    	},
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
  if (areAllLightsOff()) {
    if (levelIdx + 1 < levels.length) {
      go("main", levelIdx + 1);
    } else {
      go("win");
    }
  } else {
    dialog.text = "Eteint les lumieres mon gars!";
  }
});

/*
player.onCollide("steel", (obj) => {
  // Le joueur est à côté de la case "steel"
  dialog.text("Non ! Il fait jour, pourquoi ne pas ouvrir la fenêtre !");
});
*/

player.onCollide("lumiereOff", (lumiereOff) => {
  // Détectez la collision avec la lumièreOff
  var ps = lumiereOff.pos;
  destroy(lumiereOff); // Détruisez la lumièreOff
  console.log("destruct Off");

  // Ajoutez un délai avant de recréer lumiereOn
  if (!lumiereOff.isChanging) {
    lumiereOff.isChanging = true;
    wait(1, () => {
      add([
        sprite("lumiereOn"),
        area(),
        "lumiereOn",
        pos(ps),
      ]);
      console.log("create on");
      lumiereOff.isChanging = false; // Réinitialisez la propriété après le changement
    });
  }
});

player.onCollide("lumiereOn", (lumiereOn) => {
  // Détectez la collision avec la lumièreOn
  var pa = lumiereOn.pos;
  console.log("destruct On");
  destroy(lumiereOn); // Détruisez la lumièreOn

  // Ajoutez un délai avant de recréer lumiereOff
  if (!lumiereOn.isChanging) {
    lumiereOn.isChanging = true;
    wait(1, () => {
      add([
        sprite("lumiereOff"),
        area(),
        "lumiereOff",
        pos(pa),
      ]);
      console.log("create off");
      lumiereOn.isChanging = false; // Réinitialisez la propriété après le changement
    });
  }
});




function areAllLightsOff() {
  return get("lumiereOn").length < 1 ;
}







player.onCollide("interupt", () => 
	{
		dialog.text = "protege l'environnement !!";
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
