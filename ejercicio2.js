const form = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellidos');
const edadInput = document.getElementById('edad');
const resultado = document.getElementById('resultado');
const closeButton = document.getElementById('btnCerrar');

function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    let esValido = true;

    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-apellidos').textContent = '';
    document.getElementById('error-edad').textContent = '';

    const nombre = nombreInput.value.trim();
    const apellidos = apellidosInput.value.trim();
    const edad = Number(edadInput.value); 

    // **Validar Nombre:** No debe estar vacío
    if (nombre === '') {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio y no puede estar vacío.';
        esValido = false;
    }

    // **Validar Apellidos:** No deben estar vacíos
    if (apellidos === '') {
        document.getElementById('error-apellidos').textContent = 'Los apellidos son obligatorios y no pueden estar vacíos.';
        esValido = false;
    }

    // **Validar Edad:** Debe ser un número positivo mayor a 0
    if (isNaN(edad) || edad <= 0) {
        document.getElementById('error-edad').textContent = 'La edad debe ser un número positivo (> 0).';
        esValido = false;
    }

    // Validación es exitosa
    if (esValido) {
        mostrarDatos(nombre, apellidos, edad);
    }
}

// Mostrar los datos
function mostrarDatos(nombre, apellidos, edad) {
    document.getElementById('mostrar-nombre').textContent = `${nombre} ${apellidos}`;
    document.getElementById('mostrar-edad').textContent = edad;
    resultado.style.display = 'block'; 
}

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', validarFormulario);
});