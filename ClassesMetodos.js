var video = /** @class */ (function () {
    function video(titulo) {
        this.titulo = titulo;
    }
    video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta reproduciendo");
    };
    return video;
}());
var mivideo = new video("ano nuevo");
mivideo.reproducir();
var titulo2 = "mi graduacion";
var video2 = /** @class */ (function () {
    function video2() {
    }
    video2.prototype.asignartitulo = function (nuevotitulo) {
        titulo2 = nuevotitulo;
        this.titulo2 = nuevotitulo;
    };
    return video2;
}());
