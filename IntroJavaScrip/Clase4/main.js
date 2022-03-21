//Arreglo


var alumnes= ["Alberto",
"Ana",
"José Luis",
"Valeria" ,
"Ángel", 
"Karina",
"Zuri"];
console.log("Arreglo original", alumnes);
console.log(alumnes[3]);

alumnes[2] ="Isaac";

console.log(alumnes);

console.log(alumnes.length);
//la última posicion siempre la longuitud -1

alumnes.push("Elias");
//console.log(alumnes);

alumnes.pop();
//console.log(alumnes);

alumnes.unshift("Elias");
//console.log("Elias");

alumnes.shift();
//console.log(alumnes);

alumnes.push("Elas");
alumnes.shift();
console.log(alumnes);

var animales = "rata pollo gato perro vaca pejelagarto caballo";

var arrayAnimales = animales.split(" ");
console.log(arrayAnimales);

//slice puedes dividir entre grupos 

var grupo1 = alumnes.slice(2);
console.log(grupo1);

var grupo2 = alumnes.slice(0,4);
console.log(grupo2);

//splice meter elementos en la lina de enmedio
//Primer parametro es el index donde agregamos
//Segundo parámetro son elementos eliminados 
//SPLICE es sobre el arreglo original
arrayAnimales.splice(4,0,"toro","leopardo", "lagartija");

console.log(arrayAnimales);




