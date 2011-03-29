var canvas = document.getElementById("pretty")
var context = canvas.getContext("2d")

var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight

var resizeCanvas = function () {
    canvas.width = WIDTH = window.innerWidth
    canvas.height = HEIGHT = window.innerHeight
}

var clearCanvas = function () {
    context.clearRect(0, 0, WIDTH, HEIGHT)
}

var horizon = (function () {
    var gradient
    return {
        resize: function () {
            gradient = context.createLinearGradient(0, 0, 0, HEIGHT)
            gradient.addColorStop(0.1, "#000000")
            gradient.addColorStop(0.4, "#000022")
            gradient.addColorStop(1.0, "#000044")
        },
        draw: function () {
            context.save()
            context.fillStyle = gradient
            context.fillRect(0, 0, WIDTH, HEIGHT)
            context.restore()
        },
    }
}())

var galaxy = makeGalaxy()
var ground = makeGround()
var tree = makeTree()

var drawCanvas = function () {
    clearCanvas()
    horizon.draw()
    galaxy.draw()
    ground.draw()
    tree.draw()
}

window.addEvent('load', function() {
    resizeCanvas()
    horizon.resize()
    drawCanvas()
})
window.addEvent('resize', function () {
    resizeCanvas()
    horizon.resize()
    drawCanvas()
})
