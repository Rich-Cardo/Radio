//Codigo para la validación de los inputs

//Cedula, telefono: solo numeros
//Nombre, Apellido: solo letras      
// Obtener los elementos de los inputs
var nombreInput = document.getElementById('txtNombre');
var apellidoInput = document.getElementById('txtApellido');
var correoInput = document.getElementById('txtCorreo');
var direccionInput = document.getElementById('txtDireccion');
var cedulaInput = document.getElementById('txtCedula');
var telefonoInput = document.getElementById('txtTelefono');

// Agregar un evento de escucha para el evento keypress en cada input
nombreInput.addEventListener('keypress', function(event) {
    // Obtener el código de la tecla presionada
    var keyCode = event.keyCode || event.which;
    
    // Verificar si el código corresponde a una letra o espacio y cancelar el evento si no es así
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122) && keyCode !== 32) {
        event.preventDefault();
    }
});
    

apellidoInput.addEventListener('keypress', function(event) {
var keyCode = event.keyCode || event.which;
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122) && keyCode !== 32) {
        event.preventDefault();
    }
});

cedulaInput.addEventListener('keypress', function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
}
});

telefonoInput.addEventListener('keypress', function(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
    }
});

// Funcion para retroceder

function goBack() {
    window.history.back();
}

