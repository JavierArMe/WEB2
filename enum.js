var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 2] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
var MarcasDeAutos2;
(function (MarcasDeAutos2) {
    MarcasDeAutos2[MarcasDeAutos2["Toyota2"] = 100] = "Toyota2";
    MarcasDeAutos2[MarcasDeAutos2["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos2[MarcasDeAutos2["Ford"] = 102] = "Ford";
})(MarcasDeAutos2 || (MarcasDeAutos2 = {}));
var tacoma2 = MarcasDeAutos2.Toyota2;
console.log(tacoma2);
console.log(MarcasDeAutos2[0]);
var anenum;
(function (anenum) {
    anenum[anenum["one"] = 1] = "one";
    anenum[anenum["two"] = 2] = "two";
    anenum[anenum["ergke"] = 4] = "ergke";
})(anenum || (anenum = {}));
var stringone = anenum[1];
var stringtwo = anenum[anenum.two];
var id = anenum.ergke;
console.log(stringone);
console.log(stringtwo);
console.log(id);
