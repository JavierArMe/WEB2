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
