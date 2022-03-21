//WHILE
/*
let index = 0;
let arreglo = [];

while (index < 10) {
    let numeroGenerado = Math.floor(Math.random()*100);
    arreglo.push(numeroGenerado);
    console.log("Iteraciones" + index  + "; Valor generado:" + numeroGenerado);
    index++;
}
console.log(arreglo);
*/

//Ejercico 4
/*
let arregloPalabras = [];
let inputUsuario

do {
    inputUsuario= prompt("Ingrese una palabra o letra");
    arregloPalabras.push(inputUsuario);
} while (inputUsuario !="");
//[1,2,3]---> longitud 3 arreglo[3] no encuentra nada
let stringFinal = "";
arregloPalabras.pop();
for(let i =0; i < arregloPalabras.length; i++)
{
    stringFinal = stringFinal + arregloPalabras[i] + " ";
}
console.log(arregloPalabras);
console.log(stringFinal);
/*
let stringFinal2 = arregloPalabras.join("*")
console.log(stringFinal2);
*/





