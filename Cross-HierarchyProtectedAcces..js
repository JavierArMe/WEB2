var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var base = /** @class */ (function () {
    function base() {
        this.x = 1;
    }
    return base;
}());
var derivada1 = /** @class */ (function (_super) {
    __extends(derivada1, _super);
    function derivada1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return derivada1;
}(base));
var derivada2 = /** @class */ (function (_super) {
    __extends(derivada2, _super);
    function derivada2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    derivada2.prototype.imprimirX = function (c1) {
        console.log(c1.x);
    };
    return derivada2;
}(base));
