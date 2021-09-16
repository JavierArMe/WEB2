var a = /** @class */ (function () {
    function a() {
        this.x = 10;
    }
    a.prototype.imprimirx = function (otra) {
        console.log(otra.x);
    };
    return a;
}());
var b = new a();
b.imprimirx(new a());
