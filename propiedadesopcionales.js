function imprimir(computador) {
    console.log("sistema operativo: " + computador.os);
    console.log("memoria: " + computador.memoria);
    console.log("procesador: " + computador.procesador);
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});
