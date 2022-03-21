//Ejercicio 1
/*var belleza = prompt("¿Te consideras bella?")
if (belleza == "si" || belleza == "Si") {
    console.log("Ciertamente");
} else {
    console.log("No te creo");
} */


//Ejercicio 2
/*var numero = parseFloat(prompt('Elige un numero'))
if (numero % 2 == 0) {
    alert(numero + ' Es divisible entre 2');
} else {
    alert(numero + ' No es divisible entre 2');
}*/


//Ejercicio 3
/*var numero = parseFloat(prompt('Elige un numero'))
if (numero % 2 == 0) {
    alert(numero + ' Es par');
} else {
    alert(numero + ' no es par');
}*/


//Ejercicio 4
/*var numero = parseInt(prompt('Escribe un numero'))
if (numero == 1000) {
    console.log('Ganaste un prmeio');
} else {
    console.log('Sigue participando');
}*/


//Ejercicio 5
/*var numero1 = parseFloat(prompt('Ingresa el primer numero'));
var numero2 = parseFloat(prompt('Ingresa el segundo numero'));
if (numero1 > numero2) {
    alert(numero2 + ' Es menor que ' + numero1)
} else {
    alert(numero1 + ' Es menor que ' + numero2)
}*/


//Ejercicio 6
/*var numero1 = parseFloat(prompt('Ingrese el primer valor'))
var numero2 = parseFloat(prompt('Ingrese el segundo valor'))
var numero3 = parseFloat(prompt('Ingrese el tercer valor'))
if (numero1 > numero2 && numero1 > numero3) {
    alert(numero1 + ' Es el valor mayor')
} if (numero2 > numero1 && numero2 > numero3) {
    alert(numero2 + ' Es el valor mayor')
} if (numero3 > numero1 && numero3 > numero2) {
    alert(numero3 + ' Es el valor mayor')
} if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
    alert('Hay dos numeros iguales')
}*/




//Ejercicio 7
/*var dia = prompt('Escribe un dia')
if (dia == 'lunes') {
    alert('Hoy es lunes')
} if (dia == 'martes' || dia == 'miercoles' || dia == 'jueves') {
    alert('Hola' + dia)
} if (dia == 'viernes') {
    alert('Toca peda')
} if (dia == 'sabado' || dia == 'domingo') {
    alert('¿Le seguimos o k?')
};*/


//Ejercicio 8
/*var calificacion = parseInt(prompt('Ingrese una calificacion entre 1 y 10'))
if (calificacion >= 6 && calificacion <= 8) {
    alert('Regular')
} if (calificacion < 6 && calificacion >= 1) {
    alert('Reprobado')
} if (calificacion == 9) {
    alert('Bien')
} if (calificacion == 10) {
    alert('Excelente')
} else {
    alert('Ingresa un numero valido')
}*/



//Ejercicio 9

var helado = prompt("Bienvenido que desea ordenar 1.El helado sin topping cuesta 50 MXN 2.El topping de oreo cuesta 10 MXN 3.El topping de KitKat cuesta 15 MXN 4.El topping de brownie cuesta 20 MXN");

if (helado == 1 || helado == "sin topping") {
    alert(helado +" es un total cuenta 50MXN")
    
} else if (helado == 2 || helado == "De oreo") {
    alert(helado +" es un total cuenta 10");
}else if (helado == 3 || helado == "De KitKat") {
    alert(helado +" es un total cuenta 15");
}else if (helado == 4 || helado == "De brownie") {
    alert(helado +" es un total cuenta 20");
}else if(helado >=5){
    alert("no tenemos este topping, lo sentimos el helado sin topping cuesta 50MXN");
}


//Ejercico 10
/*
var bienvenida = prompt("Bien bienvenido quieres aprender a desarrollar aplicaciones ");
    if(bienvenida == "si"){
        var curso = parseInt(prompt("Que cursos quieres, 1 curso de Course,2 Carrera ,3 Master"));
        if(curso == 1){
            var a = 4999;
        }if (curso == 2) {
            var a = 3999;
        }if (curso == 3) {
            var a =2999
            
        }
        var beca = parseInt(prompt("Que clase de beca tienes 1 por párte de facebook,2 por parte de Google ,3 por parte de Jesua"));
        if(beca == 1){
            var b = .8;
        }if (beca == 2) {
            var b = .85;
        }if (beca == 3) {
            var b =.5;
            
        }
        var precio = (a*b);
        if(curso == 1){
            alert("el precio total es un valor de " + (precio *2) + "MXN por 2 meses" );
        }if(curso == 2){
            alert("el precio total es un valor de " + (precio *6) + "MXN por 6 meses" );
        }if(curso == 3){
                alert("el precio total es un valor de " + (precio *12) + "MXN por 12 meses" );
    }
    }else{
        alert("Sigue participando UwU y despertar a carlos ");
    }
    
*/


//Ejercicio 11