input.onButtonPressed(Button.A, function () {
    while (true) {
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
    }
})
input.onButtonPressed(Button.B, function () {
    zhasni()
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
