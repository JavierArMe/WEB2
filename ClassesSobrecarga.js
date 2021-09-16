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
var padre = /** @class */ (function () {
    function padre() {
    }
    padre.prototype.saludar = function () {
        console.log("hola");
    };
    return padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (!!nombre) {
            console.log("hola " + nombre);
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(padre));
var hijo = new Hijo();
var h = new Hijo();
hijo.saludar();
hijo.saludar("luis");
