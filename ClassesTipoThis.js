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
var Caja2 = /** @class */ (function () {
    function Caja2() {
        this.contenido = "";
    }
    Caja2.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja2;
}());
var micaja2 = new Caja2();
var valorretornado = micaja2.set("joyas");
console.log(micaja2);
console.log(valorretornado);
var Caja3 = /** @class */ (function () {
    function Caja3(contenido2) {
        this.contenido2 = "";
        this.contenido2 = contenido2;
    }
    Caja3.prototype.igualque = function (otro) {
        return otro.contenido2 === this.contenido2;
    };
    return Caja3;
}());
var caja1 = new Caja3("joyas");
var caja2 = new Caja3("joyas");
var caja3 = new Caja3("maquillaje");
console.log(caja1.igualque(caja2));
console.log(caja1.igualque(caja3));
var Caja4 = /** @class */ (function () {
    function Caja4() {
        this.contenido3 = "";
    }
    Caja4.prototype.igualque = function (otro) {
        return this.contenido3 === otrainstancia.contenido3;
    };
    return Caja4;
}());
var cajaderivada = /** @class */ (function (_super) {
    __extends(cajaderivada, _super);
    function cajaderivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otrocontenido = "";
        return _this;
    }
    return cajaderivada;
}(Caja4));
var base = new Caja4();
var derivada = new cajaderivada();
derivada.igualque(base);
