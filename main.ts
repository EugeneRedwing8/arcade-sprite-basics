let CanBeCaught = false
let myEnemy: Sprite = null
let mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 
    1 2 2 2 2 2 2 2 1 
    1 2 1 2 2 2 1 2 1 
    1 2 f 2 2 2 f 2 1 
    1 2 f 2 2 2 f 2 1 
    1 2 2 2 2 2 2 2 1 
    1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
mySprite.setPosition(80, 141)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
timer.after(1000, function () {
    basics.add_gravity_to(mySprite)
    basics.make_sprite_jump(mySprite)
    myEnemy = sprites.create(img`
        1 1 1 1 1 1 1 1 1 
        1 a a a a a a a 1 
        1 a 1 a a a 1 a 1 
        1 a 2 a a a 2 a 1 
        1 a 2 a a a 2 a 1 
        1 a a a a a a a 1 
        1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    timer.after(1500, function () {
        basics.sprite_move_direction(
        mySprite,
        500,
        100,
        Direction.Left
        )
        timer.after(700, function () {
            basics.sprite_move_direction(
            mySprite,
            500,
            100,
            Direction.Right
            )
            timer.after(1000, function () {
                basics.show_sight(
                mySprite,
                false,
                30,
                9,
                Direction.Left
                )
                timer.after(1000, function () {
                    basics.show_sight(
                    mySprite,
                    false,
                    30,
                    9,
                    Direction.Right
                    )
                    timer.after(1000, function () {
                        basics.show_sight(
                        mySprite,
                        false,
                        30,
                        9,
                        Direction.Up
                        )
                        timer.after(1000, function () {
                            basics.show_sight(
                            mySprite,
                            false,
                            30,
                            9,
                            Direction.Down
                            )
                            timer.after(1000, function () {
                                basics.show_sight(
                                mySprite,
                                true,
                                30,
                                9,
                                Direction.Up
                                )
                                timer.after(1000, function () {
                                    basics.sprite_move_direction(
                                    myEnemy,
                                    500,
                                    100,
                                    Direction.Left
                                    )
                                    basics.add_gravity_to(myEnemy)
                                    timer.after(1500, function () {
                                        basics.sprite_move_direction(
                                        myEnemy,
                                        200,
                                        100,
                                        Direction.Right
                                        )
                                        CanBeCaught = true
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
game.onUpdate(function () {
    if (CanBeCaught) {
        if (basics.get_proximity(
        mySprite,
        myEnemy,
        30,
        Way.Both
        )) {
            basics.make_sprite_jump(myEnemy)
            basics.sprite_move_through_wall(myEnemy, Bool.Can)
            CanBeCaught = false
        }
    }
})
