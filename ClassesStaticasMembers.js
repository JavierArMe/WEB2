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
