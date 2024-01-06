function 音高い () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function 音低い () {
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
}
let P1 = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setAudioPin(AnalogPin.P0)
basic.forever(function () {
    P1 = pins.digitalReadPin(DigitalPin.P1)
    if (P1 < 1) {
        if (P1 < 1) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            音低い()
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
