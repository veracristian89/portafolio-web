let btnEnviar = document.querySelector(".contacto__enviar");
let nombre = document.querySelector(".contacto__nombre");
let email = document.querySelector(".contacto__email");
let asunto = document.querySelector(".contacto__asunto");
let mensaje = document.querySelector(".contacto__mensaje");

btnEnviar.addEventListener("click", function(event){
    
    event.preventDefault();

    if (nombre.value == "" || email.value == "" || asunto.value == "" || mensaje.value == ""){
        alert("todos los campos deben estar completos")
    }else{
        alert("este es un form de prueba, si desea contactar conmigo puede hacerlo a veracristian89@gmail.com");
    }
    
});