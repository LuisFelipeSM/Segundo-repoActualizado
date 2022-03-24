function login()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username,password);


    if(username === "felipe@gmail.com" && password === "123")
    {
        alert("login Exitoso");
        window.location.href = "index.html";

    }else
    {
        alert ("usuario y/o contraseña incorrecta");
    }
}