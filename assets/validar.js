function validar(){

    //poner coma al declarar una variable evita poner var a cada una de ellas...
    var nombre, apellidos, correo, usuario, telefono, expresion;

    //asignando valor a las variables...
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    telefono = document.getElementById("telefono").value;
    contraseña = document.getElementById("pass").value;
    expresion = /\w+@\w+\.+[a-z]/; //para validar los caracteres del correo

    var saludo = "Bienvenido " + nombre + " " + apellidos + ". Tu usuario es: " + usuario + ". Tu contraseña es: " + contraseña;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length > 30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length > 80){
        alert("Los apellidos son muy largos");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }
    else if (correo.length > 100){
        alert("El correo electrónico es muy largo");
        return false;
    }
    else if (usuario.length > 20){
        alert("El usuario es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El teléfono no es un número");
        return false;
    }
    else if (telefono.length > 15){
        alert("El número de teléfono es muy largo");
        return false;
    }
    alert(saludo);
}


