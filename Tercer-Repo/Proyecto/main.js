const characters = JSON.parse(file);
const pokemon = JSON.parse(pokeFile);
console.log(JSON.parse(pokeFile));
console.log(JSON.parse(file));



function botonBuscar(){
    let personaje = buscarPersonaje();
    let card = document.getElementById("cardPersonaje");
    card.innerHTML =   `<br>
                        <p>Nombre:${personaje.name}</p>
                        <br>
                        <p>Año de nacimiento : ${personaje.birth_yeart}</p>
                        <img src ="${personaje.img}" />`
    console.log(personaje);
    
}



function buscarPersonaje(){
    let nombrePersonaje = document.getElementById("nombrePersonajes").value;
    for (let i = 0; i < characters.results.length; i++) {
        if(characters.results[i].name == nombrePersonaje){
                return characters.results[i];
        }
        
    }
}


function botonBuscarP(){
    let pokemon = buscarPokemones();
    let card = document.getElementById("cardPokemon");
    card.innerHTML =   `<br>
                        <p> Nombre:${pokemon.name}</p>
                        <br>
                        <p>Tipo: ${pokemon.type}</p>
                        <img src ="${pokemon.ThumbnailImage}" />`
    console.log(pokemon);
    
}



function buscarPokemones(){
    let nombrePokemon = document.getElementById("nombrePokemon").value;
    for (let i = 0; i < pokemon.result.length; i++) {
        if(pokemon.result[i].name == nombrePokemon){
                return pokemon.result[i];
        }
        
    }
}

function insertarImagenP(){
    let pokemon= buscarPokemones();
    let card = document.getElementById("imgPoke");
    

}