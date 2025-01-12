input.onButtonPressed(Button.A, function () {
    defender.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(defender.get(LedSpriteProperty.X), defender.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    defender.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let defender: game.LedSprite = null
game.setScore(0)
defender = game.createSprite(2, 4)
let enemy = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(1000)
    enemy.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (bullet) {
        if (bullet.isTouching(enemy)) {
            game.addScore(1)
            enemy.set(LedSpriteProperty.X, randint(0, 4))
            enemy.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
