//Solicitar al Usuario su edad y validar si es o no mayor de edad
//mayoria de edad es a los 18

/*
var edad = parseInt(prompt(" Ingresa tu edad "));
console.log(typeof edad);

if( edad >= 18 )//condicion 
{
    //Si es verdadero
    console.log("Tu edad es de "+edad + " eres Mayor de edad");
}else
{
    console.log("Tu edad es de " + edad +" eres  Menor de edad");
}

//18 es == 18: verdadero porque compara el valor de las variables 
if(edad == 18)
{
    console.log("Los Datos son iguales")
}
// 18 === 18: falso porque compara el valor y tipo de dato
if(edad   === 18)
{
    console.log("Los datos son identicos");

}

*/



//FALSY
//condiciones que retormara un resultado falso



/*
if(false) 
if(undefined)
if(null)
if(0)
if(NaN)
if("")
*/


//Truthy
//Siempre devolveran un resultado psitivo 

/*
if(true)
if({})
if(42)
if("0")
if("false")


var input = "false";

if(input)
{
    console.log("entro en el if");
}else
{
    console.log("entro al else");
}

*/
// && el operador AND necesita cumplir todas las operaciones para funcionar
// || el operador AND necesita cumplir solamente una para que funcione

var color = "roja";
var edad = 17;
var vivo = true;

if( color == "azul" || edad>= 18 && vivo == true)
{
    console.log("Pudedes entrar al club");
}
else
{
    console.log("No puedes entar al club");

}

