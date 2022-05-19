function persona (nombre){
    this.nombre = nombre
    this.saludar = function(){
        console.log("hola")
    }
}

let felipe = new persona("felipe");