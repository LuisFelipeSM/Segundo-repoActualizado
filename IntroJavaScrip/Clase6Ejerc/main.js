// Ejercicio 1
//Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

/*
let nums= []
let inputNum = prompt("Ingresa numero")
for(let i =0; i<=inputNum; i++){
    if(i>0 && i%5 == 0){
    nums.push(i)
    }
}

console.log(nums)

*/
//Ejercicio 2
//Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
/*
let num1 = parseInt(prompt("Ingrese un número entre 1-50"))
    let num2 = parseInt(prompt("Ingrese un número entre 1-50"))
    let i = 1
    /*
    for( i = 1; i <= 50; i++){
        if(i == num1 || i == num2){
            console.log("Loteria")
        }else{
            console.log(i)
        }
    }

    while(i <=50){
        if(i == num1 || i == num2){
        console.log("Loteria")
        }else{
        console.log(i)
        }
        i++
    }

*/

//Ejercico 3
//Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
/*
let inputUsuario;
let arreglo= [];

do {
    inputUsuario = prompt("Ingrese un numero pero el numero final debe de ser 0");
    arreglo.push(inputUsuario);

} while (inputUsuario != 0);
    alert(arreglo);
*/


//Ejercico 4
//Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
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



//Ejercico 5
//Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
/*
do{
    diaDeLaSemana = prompt("Ingresa un dia de la semana");
    if(diaDeLaSemana == "Lunes")
    {
        alert("Es Lunes");
    }else if (diaDeLaSemana=="Martes") 
    {
        alert("Es Martes");
    }else if (diaDeLaSemana=="Miercoles")
    {
    alert("Es Miercoles");
    }else if (diaDeLaSemana=="Jueves")
    {
    alert("Es Jueves");
    }else if (diaDeLaSemana=="Viernes")
    {
        alert("Es Viernes");
    }else if(diaDeLaSemana=="Sabado")
    {
        alert("Es Sabado");
    }

} while (diaDeLaSemana != "Ve a descansar");

*/
//Ejercico 6
//Crea un programa que imprima en consola los números impares del 1 al 50.
/*
for(let i = 1; i<=50; i++){
    if(i % 2 !=0 ){
        console.log(i);
    }


}
*/


//Ejercico 7
//Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario


/*
let num = parseInt(prompt("Introduzca un número"))
    for(let i = 1; i <= num; i++){
        if( i % 5 == 0){
        console.log(pokemons[i])
        }
    }
*/
