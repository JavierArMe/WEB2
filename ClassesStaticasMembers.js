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
var Miclase = /** @class */ (function () {
    function Miclase() {
    }
    Miclase.imprimirx = function () {
        console.log("el valor de x es: " + this.x);
    };
    Miclase.prototype.imprimirx = function () {
        console.log("el valor de x en una instancia es: " + Miclase.x);
    };
    Miclase.x = 10;
    return Miclase;
}());
Miclase.imprimirx();
console.log("el valor obtenido de x es: " + Miclase.x);
var miclase = new Miclase();
miclase.imprimirx();
var Miclase2 = /** @class */ (function () {
    function Miclase2() {
    }
    Miclase2.x = 10;
    return Miclase2;
}());
console.log(Miclase2.x);
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.saludar = function () {
        console.log("hola mundo");
    };
    return Base;
}());
var derivada = /** @class */ (function (_super) {
    __extends(derivada, _super);
    function derivada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return derivada;
}(Base));
derivada.saludar();
