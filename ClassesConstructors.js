var punto = /** @class */ (function () {
    function punto(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return punto;
}());
var mipunto = new punto();
console.log(mipunto.x);
console.log(mipunto.y);
