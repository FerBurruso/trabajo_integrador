const valorTicket = 200;

const descuentoEstudiante = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;


var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");

var cantidad = document.getElementById("cantidad");
var categoria = document.getElementById("categoria");

var carta_celeste = document.getElementById("carta_celeste");
var carta_azul = document.getElementById("carta_azul");
var carta_amarilla = document.getElementById("carta_amarilla");

function limpiarValidaciones(){
    let arrayControles = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < arrayControles.length; i++){
        arrayControles[i].classList.remove('is-invalid');
    }
}

function limpiarBordes(){
    let arrayControles = document.querySelectorAll(".card");
    let i;
    for (i = 0; i < arrayControles.length; i++){
        arrayControles[i].classList.remove('borde_remarcado');
    }
}

function validarDatos(){

    limpiarValidaciones();
    let resultado = true;
    
    if (nombre.value === "") {
        alert("Por favor, escriba su nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        resultado = false;
    }

    if (apellido.value === "") {
        alert("Por favor, escriba su apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        resultado = false;
    }

    if (cantidad.value === "" || cantidad.value == 0 || isNaN(cantidad.value)  ) {
        alert("La cantidad no es válida.");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        resultado = false;
    }

    if (email.value === "") {
        alert("Por favor, escriba una dirección de correo electrónico.");
        email.classList.add("is-invalid");
        email.focus();
        resultado = false;
    }
    else
    {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)===false){    
           alert("Por favor, escriba una dirección de correo electrónico válida.");
            email.classList.add("is-invalid");
            email.focus();
            resultado = false;
        }
    }

    return resultado;
}

function calcularPrecio(){
    let precio = 0;
    let precio_final = 0;

    if (validarDatos() === false){
        return;
    }

    switch (categoria.value) {
        case "1": //estudiante
            precio = valorTicket * (100 - descuentoEstudiante) / 100;
             break;
        case "2"://trainee
            precio = valorTicket * (100 - descuentoTrainee) / 100;
            break;
        case "3"://Junior
            precio = valorTicket * (100 - descuentoJunior) / 100;
            break;
        case "4"://otros
            precio = valorTicket;
            break;
        default:
            break;
      }
      precio_final = precio * cantidad.value;
      span_precio.innerHTML = precio_final;

      return;
}

function remarcar_cuadro(){

    limpiarBordes();

    switch (categoria.value) {

        case "1": //estudiante
            carta_azul.classList.add("borde_remarcado");
            break;
        case "2"://trainee
            carta_celeste.classList.add("borde_remarcado");
            break;
        case "3"://Junior
            carta_amarilla.classList.add("borde_remarcado");
            break;
        case "4"://otros
            break;
        default:
            break;
      }
}

var resumen = document.getElementById("btn_resumen");
var span_precio = document.getElementById("span_precio");

resumen.addEventListener('click', calcularPrecio);
categoria.addEventListener('change', remarcar_cuadro);
