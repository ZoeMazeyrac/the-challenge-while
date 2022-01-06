let LichtAan = false
let Magnet = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Magnet = input.magneticForce(Dimension.Strength)
    LichtAan = Magnet > 55
    while (LichtAan == false) {
        basic.showIcon(IconNames.Sad)
        break;
    }
    while (LichtAan == true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
    }
})
