var WIDTH, HEIGHT;
var canvas = document.getElementById("snow");
var context = canvas.getContext("2d");
var gradient;
var r = Math.random;
var rn = function (n) { return r() * n }
var wr = function (n) { return Math.floor(rn(n)) }
var ri = function ()  { return Math.random() * (wr(3) - 1) }

var cw = function (w) { return w * WIDTH/1000 }
var ch = function (h) { return h * HEIGHT/1000 }
var clearCanvas = function () {
    context.clearRect(0, 0, WIDTH, HEIGHT);
}
var resizeCanvas = function () {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    gradient = context.createRadialGradient(cw(850), ch(150), 0,
                                            cw(850), ch(150), ch(1100));
    gradient.addColorStop(0.0, "#ffffff");
    gradient.addColorStop(0.1, "#cccccc");
    gradient.addColorStop(0.9, "#111111");
    gradient.addColorStop(1.0, "#000000");
}
var flakes = (function (n) {
    var i, c, list = [];
    for (i = 0; i < n; i += 1) {
        c = r();
        list[list.length] = {
            x: rn(1000),
            y: rn(1000),
            c: c,
            dx: -rn(0.5),
            dy: c + 1,
        }
    }
    return list;
}(2000));

var drawCanvas = function () {
    context.save();
    context.fillStyle = gradient;
    context.globalAlpha = 0.1;
    context.fillRect(0, 0, WIDTH, HEIGHT);

    context.shadowColor = "#aaaaaa";
    context.shadowBlur = 15;
    context.globalAlpha = 0.5;
    context.beginPath();
    //context.arc(cw(850), ch(100), ch(50), -0.6, Math.PI+0.6, false);
    context.moveTo(cw(825), ch(115));
    context.lineTo(cw(830), ch(195));
    context.lineTo(cw(870), ch(195));
    context.lineTo(cw(875), ch(115));
    context.fill();
    context.closePath();
    context.restore();

    context.save();
    context.fillStyle = "#000000";
    context.beginPath();
    context.moveTo(cw(822), ch(115));
    context.bezierCurveTo(cw(818), ch(80),
                          cw(882), ch(80),
                          cw(878), ch(115));
    context.lineTo(cw(822), ch(115));
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(cw(828), ch(195));
    context.bezierCurveTo(cw(828), ch(230),
                          cw(872), ch(230),
                          cw(872), ch(195));
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(cw(843), ch(195));
    context.lineTo(cw(857), ch(195));
    context.lineTo(cw(857), ch(1000));
    context.lineTo(cw(843), ch(1000));
    context.lineTo(cw(843), ch(195));
    context.fill();
    context.closePath();

    context.restore();

    context.save();
    context.fillStyle = gradient;
    flakes.each(function (flake) {
        context.globalAlpha = flake.c;
        /*
        context.beginPath();
        context.arc(cw(flake.x), ch(flake.y), 1, 0, 2*Math.PI, false);
        context.fill();
        context.closePath();
        */
        context.fillRect(cw(flake.x), ch(flake.y), 2, 2);
        
        flake.x += flake.dx;
        flake.y += flake.dy;
        if (flake.y >= 1000) flake.y = 0;
        if (flake.x <= 0) flake.x = 1000;
    });
    context.restore();
}

document.addEvent('domready', resizeCanvas);
window.addEvent('resize', resizeCanvas);
setInterval(function(){clearCanvas();drawCanvas()}, 30);
