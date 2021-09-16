var Video = /** @class */ (function () {
    function Video(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return Video;
}());
var mivideo = new Video("vacaciones", 60, "mp4");
console.log("mi video de: " + mivideo.nombre);
console.log("tiene una duracion de: " + mivideo.duracion + " segundos");
console.log("y el formato es: " + mivideo.formato);
