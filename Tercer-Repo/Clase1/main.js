//Ejercico 1
function palindromeChecker(str){
    let string = str.replace(/[\W_]/g,'').toLowerCase();
    let revStr = string.split('').reverse().join('');
    return  string === revStr ? 'es palindromo' : 'no es palindromo'
    }
    console.log(palindromeChecker('anita lava la tina'))


  //Ejercico 2
let array = ["México","Panama","Guadalajara", "El Salvador", "Republica Dominicanadelcondo"];
function longestContry(array)
{

    for(i = -1;  i < 4 ;i++) {
    if(array[i].length > array[0].length)
    {
    console.log(array[i] + " tiene mayor numero de letras")
    }else
    {
    console.log( array[0] + " tiene mayor numero de letras")
    }
    if(array[i].length > array[1].length)
    {
    console.log(array[i] + " tiene mayor numero de letras")
    }else
    {
    console.log( array[2] + " tiene mayor numero de letras")
    }
    if(array[i].length > array[2].length)
    {
    console.log(array[i] + " tiene mayor numero de letras")
    }else
    {
    console.log( array[2] + " tiene mayor numero de letras")
    }
    if(array[i].length > array[3].length)
    {
    console.log(array[i] + " tiene mayor numero de letras")
    }else
    {
    console.log( array[3] + " tiene mayor numero de letras")
    }
    if(array[i].length > array[4].length)
    {
    console.log(array[i] + " tiene mayor numero de letras")
    }else
    {
    console.log( array[4] + " tiene mayor numero de letras")
    }
    }
}
longestContry(array);
//Ejercico 3
let cel = 28;
function farenheitToCelsius(cel){


    faren = (cel * 1,8) + 32
    
    console.log( cel + "°C" + " son " + faren + "°F" )
    
}

