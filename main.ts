basic.forever(function () {
    basic.showString("Keep pressing A")
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Mum, I")
        basic.showIcon(IconNames.Heart)
        basic.showString("You")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
