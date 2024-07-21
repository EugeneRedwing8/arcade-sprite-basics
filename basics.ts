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
    //% blockID=add_gravity_ex
    //% block="add gravity to $sprite=variables_get(mysprite)"
    export function gravity(sprite: Sprite) {
        sprite.ay = 500
    }

    //% group="typical"
    //% blockID=jump_ex
    //% block="make $sprite=variables_get(mysprite) jump||, height $x pixels"
    //% x.defl=250
    export function jump(sprite: Sprite, x?: number) {
        sprite.vy = -x
    }

    //% group="movement"
    //% block="set $sprite=variables_get(mysprite) $booln move"
    export function moveable(sprite: Sprite, booln: bool) {
        if (booln == 0) {
            controller.moveSprite(sprite)
        }
        if (booln == 1) {
            controller.moveSprite(sprite, 0, 0)
        }
    }

    //% group="movement"
    //% blockID=walk_ms_ex
    //% block="make $sprite=variables_get(mysprite) walk $dir at speed $amp for $ms ms"
    //% ms.shadow=timePicker
    export function righttime(sprite: Sprite, ms: number, amp: number, dir: direction,) {
        if (dir == 0) {
            sprite.vx = amp - amp * 2
            timer.after(ms, function () {
                sprite.vx = 0
            })
        }
        if (dir == 1) {
            sprite.vx = amp
            timer.after(ms, function () {
                sprite.vx = 0
            })
        }
        if (dir == 2) {
            sprite.vy = amp - amp * 2
            timer.after(ms, function () {
                sprite.vy = 0
            })

        }
        if (dir == 3) {
            sprite.vy = amp
            timer.after(ms, function () {
                sprite.vy = 0
            })
        }
    }

    //% group="movement"
    //% block="set $sprite=variables_get(mysprite) movement $lrorud at speed $x"
    export function updownleftright(sprite: Sprite, lrorud: dir, x: number) {
        if (lrorud == 0) {
            controller.moveSprite(sprite, x, 0)
        }
        if (lrorud == 1) {
            controller.moveSprite(sprite, 0, x)
        }
    }

    //% group="tiles"
    //% block="set $sprite=variables_get(mysprite) $ca go through walls"
    export function canwall(sprite: Sprite, ca: bool) {
        if (ca == 0) {
            sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            sprite.data["movethruwall"] = true
        }
        if (ca == 1) {
            sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
            sprite.data["movethruwall"] = false
        }
    }

    //% group="tiles"
    //% block="$sprite=variables_get(mysprite) can go through walls?"
    //% blockID="can_move_through_walls_ex"
    export function canwallboo(sprite: Sprite): boolean {
        if (sprite.data["movethruwall"] == true) {
            return true
        }
        else {
            return false
        }
    }
}