basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(3000)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . #
        . . . . #
        # . . # .
        . # . # .
        . . # . .
        `)
    basic.pause(3000)
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
})
