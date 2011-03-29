var makeTree = function () {
    var drawTree = function () {
        context.save()
        context.fillStyle = "#000000"
        context.beginPath()

        // left side of trunk (starting from bottom)
        context.moveTo(cx(160), cy(870))
        context.quadraticCurveTo(cx(190), cy(800),
                                 cx(185), cy(500))

        // right side of trunk (starting from top)
        context.lineTo(cx(226), cy(490))
        context.bezierCurveTo(cx(240), cy(670),
                              cx(210), cy(830),
                              cx(260), cy(870))

        // leftmost branch
        context.moveTo(cx(190), cy(600))
        context.bezierCurveTo(cx(185), cy(470),
                              cx(20), cy(600),
                              cx(-40), cy(320))
        context.bezierCurveTo(cx(90), cy(500),
                              cx(150), cy(420),
                              cx(200), cy(500))

        context.fill()
        context.closePath()
        context.restore()
    }
    return {
        draw: drawTree,
    }
}
