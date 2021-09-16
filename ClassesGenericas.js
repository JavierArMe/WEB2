var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
var misjuguetes = [];
misjuguetes.push({ nombre: "pelota" });
misjuguetes.push({ nombre: "consola" });
var micajadejueguetes = new Caja(misjuguetes);
var mimaquillaje = [];
mimaquillaje.push({ nombre: "sombras" });
mimaquillaje.push({ nombre: "labial" });
var micajademaquillaje = new Caja(mimaquillaje);
