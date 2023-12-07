import kaboom from "kaboom";

kaboom()

loadSprite("bag", "/sprites/bag.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("steel", "/sprites/steel.png")
loadSprite("door", "/sprites/door.png")
loadSprite("key", "/sprites/key.png")
loadSprite("bean", "/sprites/bean.png")

scene("main", (levelIdx) => {
  const levels = [
    [
      "=====|===",
      "= a     =",
      "=       =",
      "=       =",
      "=    $  =",
      "=       =",
      "=   @   =",
      "=========",
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
      sprite("bean"),
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

  })

  const player = get("player")[0]

  const dialog = add([
    text(""),
    ])

  let hasKey = false

  player.onCollide("key", (key) => {
    destroy(key)
    hasKey = true
  })

  player.onCollide("door", () => {
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
