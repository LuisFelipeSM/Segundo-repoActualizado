
let pagina = document.getElementById("titulo");

console.log(pagina);

let texto   = document.getElementsByClassName("texto");
console.log(texto);


function screenBlanco(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="white";
}
function screenAzul(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="blue";

}
function screenMagenta(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor="pink";


}


function suma(){
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;

    let resultado = parseInt(num1) + parseInt( num2);
    
    document.getElementById("c").value = resultado;
}