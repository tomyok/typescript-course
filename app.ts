// Practica de String / cadena de caracteres
// let batman:string = "Batman";
// let linternaVerde:string = 'Linterna Verde';
// let volcanNegro:string = `Volcan Negro`;

// console.log(batman);
// console.log(linternaVerde);
// console.log(volcanNegro);

// let concatenar:string = `Los heroes son: ${ batman}, ${linternaVerde}, ${volcanNegro}`; 

// Practica Array

// let arreglo:number[] = [1,2,4,5,6,7];

// let villanos:string[] = ["Omega Rojo", "Dormammu", "Duende Verde"];

// console.log(villanos[0]?.charAt(0));

// Practica Objetos TS

// let flash = {
//     nombre: "Barry Allen",
//     edad: 24,
//     poderes: ["Puede correr", "Viajar en el tiempo"]
// };

// flash = {
//     nombre: "Clark Kent",
//     edad: 500,
//     poderes: ["volar"]
// };

// Practica para crear tipos especificos en TS

// let flash: {nombre:string, edad:number, poderes:any[], getNombre:()=>string} = {
//     nombre: "Barry Allen",
//     edad: 24,
//     poderes: ["Puede correr", "Viajar en el tiempo"],
//     getNombre(){
//         return this.nombre;
//     }
// };

// let superman: {nombre:string, edad:number, poderes:any[], getNombre:()=>string} = {
//     nombre: "Clark Kent",
//     edad: 500,
//     poderes: ["volar"],
//         getNombre(){
//         return this.nombre;
//     }
// };

// Practicando tipos personalizados en TS

type Heroe = {
    nombre:string,
    edad:number,
    poderes:any[],
    getNombre:()=>string
};

let flash: Heroe = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr", "Viajar en el tiempo"],
    getNombre(){
        return this.nombre;
    }
};

let superman: Heroe = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["volar"],
        getNombre(){
        return this.nombre;
    }
};