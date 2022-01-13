let hraj = 0
input.onButtonPressed(Button.A, function () {
    hraj = 1
    while (hraj) {
        images.createImage(`
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
        images.createImage(`
            . . # # .
            . # . . .
            # . # . .
            # . . # .
            . . . . #
            `).showImage(0)
        images.createImage(`
            . # . . .
            # . . . .
            # # # # #
            # . . . .
            . # . . .
            `).showImage(0)
        images.createImage(`
            . . # . .
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            `).showImage(0)
        images.createImage(`
            . . . # .
            . . . . #
            # # # # #
            . . . . #
            . . . # .
            `).showImage(0)
        images.createImage(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `).showImage(0)
        images.createImage(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `).showImage(0)
        images.createImage(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `).showImage(0)
        images.createImage(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # # # # .
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `).showImage(0)
        images.createImage(`
            # # # # #
            # . . . #
            # # # # #
            # . # . .
            # . . # .
            `).showImage(0)
        images.createImage(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `).showImage(0)
        images.createImage(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # . . . .
            `).showImage(0)
        images.createImage(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
        zhasni()
    }
})
input.onButtonPressed(Button.B, function () {
    hraj = 0
})
input.onGesture(Gesture.Shake, function () {
    images.createImage(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `).showImage(0)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
})
function zhasni () {
    for (let i = 0; i <= 4; i++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(i, y)
        }
    }
}
basic.forever(function () {
	
})
