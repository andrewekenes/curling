scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.vy = -10
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b b b b b b b . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.follow(mySprite, 75)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    b = 1
    doSomething()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
})
function Jump () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
}
function doSomething () {
	
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
        mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (b == 1) {
        mySprite2.destroy()
        if (controller.down.isPressed()) {
            item = 1
        } else {
            item = 2
        }
        A = randint(1, 2)
        if (item == A) {
            if (c == 1) {
                info.player1.changeScoreBy(2)
                game.showLongText("Player 1", DialogLayout.Bottom)
                game.over(true)
            } else {
                info.player2.changeScoreBy(2)
                game.showLongText("Player 2", DialogLayout.Bottom)
                game.over(true)
            }
        } else {
            if (c == 1) {
                info.player1.changeScoreBy(1)
                game.showLongText("Player 2 Go!", DialogLayout.Bottom)
                tiles.placeOnRandomTile(mySprite, sprites.builtin.crowd6)
                tiles.setCurrentTilemap(tilemap`level1`)
                c = 0
                item = 0
                list = 0
            } else {
                info.player2.changeScoreBy(1)
            }
        }
    }
})
let A = 0
let item = 0
let b = 0
let mySprite2: Sprite = null
let c = 0
let list = 0
let mySprite: Sprite = null
game.showLongText("Player 1 Go!", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . f f f f f . . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f . . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f . . . 
    . f f f e 4 4 4 4 f . . . 
    . . f e e e e e f f . . . 
    . . e 4 4 e 7 7 7 f e . . 
    . . e 4 d d d d d d e . . 
    . . f e e f 6 6 6 f e . . 
    . . . f f f f f f . . . . 
    . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.crowd6)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
list = 0
c = 1
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.vy = 0
    }
})
