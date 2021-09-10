var x = {
    contenido: "holamundo"
};
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleLowerCase());
function setcontenido(caja, nuevocontenido) {
    caja.contenido = nuevocontenido;
}
