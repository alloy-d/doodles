var makeGalaxy = function () {
    var stars = []
    var arm = 0, star = 0, i = 0, d = 0

    var randomColor = function () {
        var c = wr(255)
        var color = "#", tmp = c.toString(16)
        color += ((tmp.length === 1)?"0":"") + tmp
        color += "80"
        tmp = (255-c).toString(16)
        color += ((tmp.length === 1)?"0":"") + tmp
        return color
    }

    var addStar = function (arm, x, y) {
        stars[arm][stars[arm].length] = {
            x: x,
            y: y,
            brightness: Math.random() * Math.random() * 2 + 1,
            color: randomColor(),
        }
    }

    var drawStar = function (star) {
        var x = cx(star.x)
        var y = cy(star.y)
        context.fillStyle = star.color
        context.beginPath()
        context.arc(x, y, ch(star.brightness), 0, 2*Math.PI, null)
        context.fill()
        context.closePath()
    }

    for (arm = 0; arm < 7; arm += 1) {
        stars[arm] = []
        for (d = 1; d < 1000; d += 1) {
            for (i = 0; i < 5000; i += 10 * d) {
                addStar(arm, d + rn(70), 100 * Math.log(d - 2) + rn(60))
            }
        }
    }

    return {
        draw: function () {
            var arm = 0
            context.save()
            context.translate(cw(700), ch(300))
            context.rotate(Math.PI / 7)
            for (arm = 0; arm < 7; arm += 1) {
                Array.each(stars[arm], drawStar)
                context.rotate(2 / 7 * Math.PI)
            }
            context.restore()
        },
        stars: stars,
    };
};

