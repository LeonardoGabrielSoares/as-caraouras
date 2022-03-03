input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Fabulous)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        . . # # #
        # # . . .
        # # . . .
        `)
})
basic.showIcon(IconNames.Fabulous)
