function crearcuadrador(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearcuadrador({ ancho: 10 });
