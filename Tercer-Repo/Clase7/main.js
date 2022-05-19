/*
function Alumno(nombre, apellidoMat, apellidoPat, calificacion, inscrito, nacionalidad) {
        this.nombre = nombre;
        this.apellidoMat = apellidoMat;
        this.apellidoPat= apellidoPat;
        this.calificacion = calificacion;
        this.inscrito = inscrito;
        }
        Alumno.prototype.esta_inscrito = function() {
        if(this.inscrito) 
            return "El alumno está inscrito"
        else
            return "El alumno no está inscrito"    
    }
    Alumno.prototype.nombreCompleto = function() 
    {
    console.log (`${this.nombre} ${this.apellidoMat} ${this.apellidoPat}`);
    }
    Alumno.prototype.inicialesAlumno = function() {
    console.log(    this.nombre.substr(0,1) + this.apellidoMat.substr(0,1) + this.apellidoPat.substr(0,1) );
    }
    Alumno.prototype.aprobado = function() {
        if(this.calificacion >= 60) 
            return "El alumno está aprobado"
        else
            return "El alumno está reprobado"   
    }


    Alumno.prototype.agregarCalifacion = function(){
        let calificaciones = [];
        let preguntar = prompt("¿Quieren agregar una nueva  materia? (Y/N)");

        if(preguntar == "Y"||preguntar == "y"){
            calificaciones.push(prompt("¿Cual seria la materia?"))
            calificaciones.push(parseInt(prompt("¿Cuál es la calificacion?")))
            console.log(calificaciones);
            preguntar = prompt("¿Quieres agregar una nueva materia? (Y/N)")
        }
        let acumulador = 0;
        for (let i = 1; i < calificaciones.length; i+= 2) {
            acumulador = acumulador + calificaciones[i];
        }
        let promedio = acumulador/(calificaciones.length /2 )
        console.log("este es tu promedio " + promedio);
        if (promedio == 60)
        {
            console.log("Pansastes");
            
        }
        if (promedio>= 69) {
            console.log("Felicidades aprovastes");
            
        }
        if(promedio <= 59)
        {
            console.log("Chale hijo no paso");
        } 
        
    }
*/


class Stack {

    constructor(){
        this.item = [];

    }

    push(item){
        this.item.push(item);
    }

    pop(){
        return this.item.pop();

    }

    peek(){
        return this.item[this.item.length -1]
    }

    size(){
        return this.item.length


    }

    print(){
        console.log(this.item);
    }

}

//Ejercicio 1


let stack = new Stack(); 

stack.push('Manzana')
stack.push('Cebolla')
stack.push('Apio')
stack.push('Naranja')
stack.push('Papaya')
stack.push('Sandía')
stack.push('Melón')

function ret_elementos(stack,n) {
    
    let res = [];

    for (let i = 0; i < n; i++) {
        
        res.push(stack.pop())
    }

    return res;
}


//Ejercicio 2


//Ejercicio 3


//Ejercicio 4


//Ejercicio 5





