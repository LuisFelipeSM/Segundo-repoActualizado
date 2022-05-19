/*
class Alumno {
    constructor(nombre,apellidoPaterno,apellidoMAterno,calificacion,inscrito,nacionalidad){
        this.nombre= nombre
        this.apellidoPaterno = apellidoPaterno
        this.apellidoMaterno = apellidoMAterno        
        this.calificacion = calificacion
        this.inscrito=inscrito
        this.nacionalidad = nacionalidad
    }
    
    
    esta_inscrito(){
        if(this.i)
        return "El alumno esta inscrito"
        else 
        return "El alumno no esta inscrito"
    }

    imprimeNombreCompleto(){
    if (this.nacionalidad == "mexicano") {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`
        
    }else
    {
        return `${this.nombre} ${this.apellidoPaterno}`
    }

}
    darBienvenida(){
    console.log(`Bienvenido ${this.imprime_nombre_completo()}`)
}

    ObtenerInicialesDeAlumno(){

        let cadenaNombre =this.nombre;
        let inicialN =  cadenaNombre.charAt(0);
        let cadenaApPaterno =this.apellidoPaterno;
        let inicialAp =cadenaApPaterno.charAt(0);
        let cadenaApMaterno =this.apellidoMaterno;
        let inicialAm = cadenaApMaterno.charAt(0);

        console.log(`Tu nombre es  ${this.imprimeNombreCompleto()}`)
        return `las iniciales son: ${inicialN} ${inicialAp} ${inicialAm}`

        

}

    Aprobado(){
    if(this.calificacion <= 6 )
    {
        return "Chale mijo mejor suerte para la proxima, pongase las pilas "
    }else
    {
        return "Pasaste chavo ve a descansar "
    }
}

    agregarCalificacion(){
            let materia = prompt("Ingresa una materia ");
            let calificacion = prompt("Cual es el promedio ");

            console.log(materia,calificacion);
            let arrayMaterias=[];
            arrayMaterias.push(calificacion)

        }

}
let Felipe = new Alumno("Felipe", "Salinas","Martínez", 9, false, "mexicano")
*/

//Herencia

    class Animal{
        constructor(){
            this.brain= true;
            this.legs = 0;
        }
    }
    class Human extends Animal {
        constructor(){
            super().legs = 2
        }
    }
    class Pet extends Animal{
        constructor(){
            super().legs = 4
            this.pulgas = 0
        }
    }

class cat extends Animal {
    constructor(){
        super().fleas = 4
    }
}

class dog extends Animal {
    constructor(){
        super().fleas = 4
        
    }
}