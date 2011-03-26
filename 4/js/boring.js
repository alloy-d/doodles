// permille to canvas width
var cw = function (w) { return w * WIDTH/1000 }
// permille to canvas height
var ch = function (h) { return h * HEIGHT/1000 }

// permille to canvas x
var cx = cw
// permille to canvas y
var cy = ch

// whole random number < n
var wr = function (n) { return Math.floor(Math.random() * n) }

// random noise with absolute value < n
var rn = function (n) { return n - wr(2*n) }

// Map polar coordinates to rectangular coordinates,
// optionally centered at (cx, cy).
var rect = function (r, theta, cx, cy) {
    if (typeof(cx) !== "number" || typeof(cy) !== "number") {
        cx = 0;
        cy = 0;
    }

    theta = (theta * Math.PI / 360);

    return {
        x: Math.cos(theta) * r + cx,
        y: Math.sin(theta) * r + cy,
    }
}
