interface perro{
    readonly raza:string;
}
const micachorro:perro={raza:"shitzu"};
console.log(`la raza de mi cahorro es:${micachorro.raza}`);


interface perro2{
    readonly raza2:string;
}
const micachorro2:perro2={raza2:"shitzu"};
console.log(`la raza de mi cahorro es:${micachorro2.raza2}`);
micachorro.raza2='pitbull';