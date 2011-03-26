var makeGalaxy = function () {
    var i, d, theta;
    var center, displacement;
    var stars = [];

    var r = function (theta) {
        return theta;
    }

    var density = function (theta) {
        return 2 * Math.log(360-theta);
    }

    var thickness = function (theta) {
        return 90 - (theta / 5);
    }

    var randomColor = function () {
        var c = wr(255)
        var color = "#", tmp = c.toString(16)
        color += ((tmp.length === 1)?"0":"") + tmp
        color += "80"
        tmp = (255-c).toString(16)
        color += ((tmp.length === 1)?"0":"") + tmp
        return color
    }

    var addStar = function (x, y) {
        stars[stars.length] = {
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

    for (theta = 0; theta < 360; theta += 1) {
        Array.each([1, -1], function (dir) {
            center = rect(dir * r(theta), theta);
            displacement = rect(wr(thickness(theta)), wr(360));
            for (i = 0; i < density(theta); i += 1) {
                addStar(center.x + displacement.x,
                        center.y + displacement.y);
            }
        })
    }

    return {
        draw: function () {
            context.save()
            context.translate(cw(700), ch(300))
            Array.each(stars, drawStar)
            context.restore()
        },
        stars: stars,
    };
};

