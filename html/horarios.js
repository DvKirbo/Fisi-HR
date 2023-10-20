import { saveAs } from 'file-saver';

var horarios = {
    "8-10": [],
    "10-12": [],
    "2-4": [],
    "4-6": []
};

// Función para agregar una reserva a un horario
function agregarReserva(horario, reserva) {
    horarios[horario].push(reserva);

    // Crear un nuevo Blob con los datos de la reserva
    var blob = new Blob([JSON.stringify(reserva, null, 2)], {type : 'application/json'});

    // Crear un nombre para el archivo .txt
    var nombreArchivo = "Reserva_" + horario.replace("-", "a") + "_" + reserva.nombre + ".txt";

    // Guardar la reserva en un archivo .txt
    saveAs(blob, nombreArchivo);
}

// Función para obtener las reservas de un horario
function obtenerReservas(horario) {
    return horarios[horario];
}

// Exportar las funciones para que puedan ser utilizadas en otros archivos
export { agregarReserva, obtenerReservas };