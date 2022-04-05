var eye = document.getElementById('Eye');
var input = document.getElementById('Input');

eye.addEventListener("click",mostrarContraseña);

function mostrarContraseña(){
    if(input.type == "password"){
        input.type = "text";
        eye.style.opacity = 0.8
        eye.src = "images/icono_visual_open.ico";

    } else {
        input.type = 'password'
        eye.style.opacity = 0.3
        eye.src = "images/icono_visual_close.ico";
    }
}