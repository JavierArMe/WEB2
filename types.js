function saludar(persona) {
    return "hola " + persona.nombre;
}
console.log(saludar({ nombre: "luis", edad: 22 }));
function saludar2(persona) {
    return "hola " + persona.nombre;
}
console.log(saludar2({ nombre: "elena", edad: 25 }));
function saludar3(persona2) {
    return "hola " + persona2.nombre;
}
console.log(saludar3({ nombre: "anabel", edad: 30 }));
