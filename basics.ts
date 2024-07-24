enum direction {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}

enum dir {
    //% block="side to side only"
    Sideways,
    //% block="up and down only"
    Vertical
}

enum bool {
    //% block="can"
    Can,
    //% block="cannot"
    Cannot
}

//% color="#09BFD7"
//% icon="\u21ba"
namespace basics {

    //% group="typical"
    //% block="add gravity to $sprite=variables_get(mysprite)"
    export function add_gravity_to(sprite: Sprite) {
        sprite.ay = 500
    }

    //% group="typical"
    //% block="make $sprite=variables_get(mysprite) jump||, height $pixels pixels"
    //% x.defl=250
    export function make_sprite_jump(sprite: Sprite, pixels?: number) {
        sprite.vy = -pixels
    }

    //% group="movement"
    //% block="set $sprite=variables_get(mysprite) $option move"
    export function set_sprite_moveable(sprite: Sprite, option: bool) {
        if (option == 0) {
            controller.moveSprite(sprite)
        }
        if (option == 1) {
            controller.moveSprite(sprite, 0, 0)
        }
    }

    //% group="movement"
    //% block="make $sprite=variables_get(mysprite) walk $direction at speed $speed for $ms ms"
    //% ms.shadow=timePicker
    export function sprite_move_direction(sprite: Sprite, ms: number, speed: number, direction: direction,) {
        if (direction == 0) {
            sprite.vx = -speed
            timer.after(ms, function () {
                sprite.vx = 0
            })
        }
        if (direction == 1) {
            sprite.vx = speed
            timer.after(ms, function () {
                sprite.vx = 0
            })
        }
        if (direction == 2) {
            sprite.vy = -speed
            timer.after(ms, function () {
                sprite.vy = 0
            })

        }
        if (direction == 3) {
            sprite.vy = speed
            timer.after(ms, function() {
                sprite.vy = 0
            })
        }
    }

    //% group="movement"
    //% block="set $sprite=variables_get(mysprite) movement $direction at speed $speed"
    export function sprite_move(sprite: Sprite, direction: dir, speed: number) {
        if (direction == 0) {
            controller.moveSprite(sprite, speed, 0)
        }
        if (direction == 1) {
            controller.moveSprite(sprite, 0, speed)
        }
    }

    //% group="tiles"
    //% block="set $sprite=variables_get(mysprite) $option go through walls"
    export function sprite_move_through_wall(sprite: Sprite, option: bool) {
        if (option == 0) {
            sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            sprite.data["movethruwall"] = true
        }
        if (option == 1) {
            sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
            sprite.data["movethruwall"] = false
        }
    }

    //% group="tiles"
    //% block="$sprite=variables_get(mysprite) can go through walls?"
    export function can_sprite_move_through_wall(sprite: Sprite): boolean {
        if (sprite.data["movethruwall"] == true) {
            return true
        }
        else {
            return false
        }
    }
}