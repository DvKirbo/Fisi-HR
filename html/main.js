import { agregarReserva } from './horarios.js';

document.getElementById("solicitudForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Recolecta la información del formulario
    const nombre = document.getElementById("nombre").value;
    const codigo = document.getElementById("codigo").value;
    const email = document.getElementById("email").value;
    const horario = document.getElementById("horario").value;

    // Genera el contenido del archivo .txt
    const contenido = `Nombre: ${nombre}\nCódigo: ${codigo}\nEmail: ${email}\nHorario: ${horario}`;

    // Crea un blob con el contenido del archivo
    const blob = new Blob([contenido], {type: "text/plain;charset=utf-8"});

    // Utiliza FileSaver.js para guardar el archivo .txt
    saveAs(blob, "reserva.txt");
});