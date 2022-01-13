def on_button_pressed_a():
    while True:
        images.create_image("""
            . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
                        . . # . .
        """).show_image(0)
        images.create_image("""
            . . # # .
                        . # . . .
                        # . # . .
                        # . . # .
                        . . . . #
        """).show_image(0)
        images.create_image("""
            . # . . .
                        # . . . .
                        # # # # #
                        # . . . .
                        . # . . .
        """).show_image(0)
        images.create_image("""
            . . # . .
                        . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
        """).show_image(0)
        images.create_image("""
            . . . # .
                        . . . . #
                        # # # # #
                        . . . . #
                        . . . # .
        """).show_image(0)
        images.create_image("""
            # . . . #
                        # # . # #
                        # . # . #
                        # . . . #
                        # . . . #
        """).show_image(0)
        images.create_image("""
            . # # # .
                        . . # . .
                        . . # . .
                        . . # . .
                        . # # # .
        """).show_image(0)
        images.create_image("""
            # . . . #
                        # # . . #
                        # . # . #
                        # . . # #
                        # . . . #
        """).show_image(0)
        images.create_image("""
            # # # # .
                        # . . . .
                        # # # # .
                        # . . . .
                        # # # # .
        """).show_image(0)
        images.create_image("""
            . # # # .
                        # . . . .
                        # . . . .
                        # . . . .
                        . # # # .
        """).show_image(0)
        images.create_image("""
            # # # # #
                        # . . . #
                        # # # # #
                        # . # . .
                        # . . # .
        """).show_image(0)
        images.create_image("""
            . . # . .
                        . # . # .
                        # . . . #
                        # # # # #
                        # . . . #
        """).show_image(0)
        images.create_image("""
            # # # # .
                        # . . . .
                        # # # # .
                        # . . . .
                        # . . . .
        """).show_image(0)
        images.create_image("""
            # # # # #
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """).show_image(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    zhasni()
input.on_button_pressed(Button.B, on_button_pressed_b)

def zhasni():
    for i in range(5):
        for y in range(5):
            led.unplot(i, y)

def on_forever():
    pass
basic.forever(on_forever)
