function holaMundo(){
    return "Hola Mundo";
}
console.log(holaMundo()); 

let resultado = holaMundo();
console.log(holaMundo());


function saludo(){
    return "¿Cómo has estado?"
}
let saludoFinal = "Hola Felipe" + saludo();

console.log(saludoFinal);

function datosPersonales(nom,edad,ciudad){
    let datos= "hola, te llamas "+nom+ ", tienes  "+edad + " años. Vives en "+ ciudad;
    return datos;
}


let persona1 = datosPersonales("felipe", "23", "Monterrey");
console.log(persona1);

let persona2 = datosPersonales("Ahrim","23","Estado de México");
console.log(persona2);

let nomPrompt = prompt("Dame tu nombre");
let edadPrompt = prompt("Dame tu edad");
let ciudadPrompt = prompt("Dame tu ciudad");

let persona3 = datosPersonales(nomPrompt,edadPrompt,ciudadPrompt);

console.log(persona3);

let persona=
{
    nombre: "Elias",
    edad: 30,
    ciudad: "Gudadalajara",


}