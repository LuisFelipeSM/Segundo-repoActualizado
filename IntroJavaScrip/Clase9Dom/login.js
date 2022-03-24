let seccionPrinmcipal = document.getElementById("seccionPrincipal");

seccionPrincipal.hidden = true;

let usuarioActual = null;

function login(event)
{
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username,password);
    
    
    if(username === "felipe@gmail.com" && password === "123")
    {
        let btnLogin = document.getElementById("btnLogin");
        btnLogin.disable = true;
        mensaje.style.color = "green";
        alert("login Exitoso");
        seccionPrincipal.hidden = false;
        //window.location.href = "index.html";
        usuarioActual = username;
        if(usuarioActual != null){

        }

    }else
    {
        mensaje.style.color = "red";
        alert ("usuario y/o contraseña incorrecta");
    }
}

let btnIngresarDinero = document.getElementById ("ingresarDinero");

btnIngresarDinero.addEventListener("click", function(){
    alert("hola");
});
