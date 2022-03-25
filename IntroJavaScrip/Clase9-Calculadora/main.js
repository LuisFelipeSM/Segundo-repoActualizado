let num = document.getElementsByTagName("button");
let h1 = document.getElementsByTagName("h1");
let random = document.getElementById("btn-random");
//let num2 = document.getElementsByClassName("btn");
console.log(num);
console.log(num[0].value);
console.log(h1);



//console.log(num2);
//Obtener el valor "value ="1" " del elemento




for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click",function(){
        console.log(num[i].value);
    });
    
}