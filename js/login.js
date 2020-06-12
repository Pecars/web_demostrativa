function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "usuario" && Contraseña == "1234") {
        location.href = "index.html";
        clear();
    } else {
        alert("Verifique sus credenciales, pruebe con usuario 1234");
        clear();
    }
}

function clear() {
    document.getElementById("usuario").innerHTML = "";
    document.getElementById("pass").innerHTML = "";
}