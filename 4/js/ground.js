var makeGround = function () {
    return {
        draw: function () {
            context.save()
            context.fillStyle = "black"
            context.beginPath()
            context.moveTo(0, cy(880))
            context.bezierCurveTo(cx(30), cy(870),
                                  cx(80), cy(855),
                                  cx(250), cy(850))
            context.bezierCurveTo(cx(550), cy(850),
                                  cx(600), cy(950),
                                  cx(1000), cy(950))
            context.lineTo(cx(1000), cy(1000))
            context.lineTo(0, cy(1000))
            context.lineTo(0, cy(800))
            context.fill()
            context.closePath()
            context.restore()
        },
    }
}

