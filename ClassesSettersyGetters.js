var desfile = /** @class */ (function () {
    function desfile() {
        this._participantes = 0;
    }
    Object.defineProperty(desfile.prototype, "participantes", {
        get: function () {
            return this._participantes;
        },
        set: function (v) {
            this._participantes = v;
        },
        enumerable: false,
        configurable: true
    });
    return desfile;
}());
var desfilehoy = new desfile();
desfilehoy.participantes = 100;
console.log(desfilehoy.participantes);
