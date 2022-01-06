Magnet = 0

def on_forever():
    global Magnet
    Magnet = input.magnetic_force(Dimension.STRENGTH)
    if Magnet < 1000:
        basic.show_icon(IconNames.SAD)
    else:
        basic.show_icon(IconNames.HAPPY)
basic.forever(on_forever)
