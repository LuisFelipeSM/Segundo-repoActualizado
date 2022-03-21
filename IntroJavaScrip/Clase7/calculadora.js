function Suma(num1,num2){
    return num1 + num2;
}
function Resta(num1,num2){
    return num1 - num2;
}
function Multiplicacion(num1,num2){
    return num1 * num2;
}
function Divicion(num1,num2){
    return num1 / num2;
}
function Porcentaje(num1,num2){
    //num1 es a quien se le saca el procentaje
    //num2 es el procentaje a sacar
    return num1 * (num2/100);
}

function Calculadora()
{
    let operacion = prompt("¿Que operacion quieres realizar? +,-,*,/,%");
    let num1 = parseInt( prompt("Ingresa el primer número"));
    let num2 = parseInt( prompt("Ingresa el segundo número"))

    let resultado;
    switch(operacion)
    {
        case "+" :
            resultado = Suma(num1,num2);
            break;

        case "-":
            resultado = Resta(num1,num2);
            break;
        case "*":
            resultado =Multiplicacion(num1,num2);
            break;
        case "/":
            resultado = Divicion(num1,num2);
            break;
        case "%":
            resultado = Porcentaje(num1,num2);
            break;
        default:
            resultado = "Operacion no valida";
    }
    alert(resultado);
}

Calculadora();