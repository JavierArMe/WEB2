var caballo = /** @class */ (function () {
    function caballo(nombre) {
        this.nombre = nombre;
    }
    return caballo;
}());
var automovil = /** @class */ (function () {
    function automovil(nombre) {
        this.nombre = nombre;
    }
    return automovil;
}());
function construirtransporte(ctr, nombre) {
    return new ctr(nombre);
}
var micaballo = construirtransporte(caballo, "paso fino");
var miautomovil = construirtransporte(automovil, "toyota");
console.log("mi caballo se llama " + micaballo.nombre);
console.log("mi automovil es un " + miautomovil.nombre);
