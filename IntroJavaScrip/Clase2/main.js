var nombre = "Felipe";// String
var numero = 20;//Number
var numeroDecimal = 3.14;//Number
var bandera = true;//Booleans
var bandera2=false;//Booleans
var nula = null;//null
var indefinida;//undefined
console.log("la variable " + nombre);
console.log("La varioable " + nombre + " y tiene el valor " + typeof nombre);

console.log("La varioable " + numeroDecimal + " y tiene el valor " + typeof numeroDecimal);

console.log("La varioable " + nula + "y tiene el valor " + typeof nula);

console.log("La varioable " + nombre + "y tiene el valor " + typeof nombre);
//console.log(x);// marca error porque la variable no existe 

//objetos de JS varables  no tiene comillas
var persona={
    nombre: "Felipe",
    edad: 23,
    nacionalidad: "Mexicana",
    viva : true,
}
//para accesar a cada variabariable se  usa "." por ejemplo
console.log(persona);
console.log("Hola " + persona.nombre +" tu tienes una edad de " +persona.edad + " tienes una nacionalidad " + persona.nacionalidad + " y estas " + persona.viva);

//Arreglos


var arreglo = [1,2,3,4,5,"hola"]; //Tenemos 6 elementos 

console.log(arreglo);
console.log(arreglo[0]);


var numero1 = 5;
var numero2 = 8;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multi = numero1 * numero2;
var divicion = numero1 / numero2;
var modulo = numero1 % numero2;
var exp = numero1 ** numero2;



console.log("La suma es ", suma, "de estos dos numeros ",  numero1, " y ", numero2 );


console.log("La resta es ", resta, "de estos dos numeros ",  numero1, " y ", numero2 );


console.log("La multi es ", multi, "de estos dos numeros ",  numero1, " y ", numero2 );

console.log("La divicion es ", divicion, "de estos dos numeros ",  numero1, " y ", numero2 );

console.log("La modulo es ", modulo, "de estos dos numeros ",  numero1, " y ", numero2 );

console.log("La exp es ", exp, "de estos dos numeros ",  numero1, " y ", numero2 );


var numero3 = prompt("Ingresa un número ");
var numero4 =prompt("Ingresa otro número");


console.log(parseFloat(numero3) + parseFloat(numero4));

/*

<   Mayor que 
>   Menor que 
<=  Mayor o igual 
>=  Menor o igual 
==  Igual
=== Identico en tipo de datos 
¡== Diferente tanto en valor y tipo de dato 
&&  And ver que se cumplan ambas condiciones 

*/ 