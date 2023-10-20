var map = L.map('mapa', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom:2
});
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('../img/Piso2.png', bounds).addTo(map);
map.fitBounds(bounds);

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("mensajeResultado").textContent = "Esperando al ingreso de datos.";
  let today = new Date().toDateString(); // Obtiene la fecha actual
  let lastResetDate = localStorage.getItem("lastResetDate"); // Obtiene la fecha del último reinicio
   // Compara si la fecha actual es diferente a la fecha del último reinicio
   if (today !== lastResetDate) {
      // Si la fecha es diferente, reinicia el contador
      localStorage.setItem("lastResetDate", today); // Almacena la nueva fecha
      document.getElementById("contadorReservas").textContent = "0"; // Reinicia el contador
    }
  });
  let formularioEnviado = false;

  document.getElementById("generate").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    if (!formularioEnviado) {
      formularioEnviado = true;

      var contador = parseInt(document.getElementById("contadorReservas").textContent);

      if (contador < 30) {
        contador++;
        document.getElementById("contadorReservas").textContent = contador;
        document.getElementById("mensajeResultado").textContent = "Reserva exitosa. " + contador + " personas han reservado el laboratorio.";
      } else {
        document.getElementById("mensajeResultado").textContent = "Lo siento, no hay cupo disponible para reservas.";
      }
    } else {
      document.getElementById("mensajeResultado").textContent = "Ya has enviado el formulario.";
    }
  });

  // Obtiene el valor del menú desplegable del horario de reserva
  const horario = document.getElementById("horario").value;

  // Incluye el valor del horario en el mensaje personalizado
  const mensajePersonalizado = `Mediante este correo el presente alumno: ${nombre} con código: ${codigo}, solicita el uso del laboratorio para el horario: ${horario}`;
    
var decanato = L.polygon([
    [114, 127],
    [170, 127],
    [170, 249],
    [114,249]
  ]).addTo(map);
  decanato.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  decanato.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  decanato.on('click', function (e) {
    var popupContent = "<center><h2>Decanato</h2></center><p>El Decanato es un Órgano de Dirección y Gobierno, encargado de la Gestión Académica, Administrativa y Financiera de la Facultad. </p>";
    this.bindPopup(popupContent).openPopup();
  });
  decanato.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(decanato.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  
  var tercio = L.polygon([
    [314, 695],
    [406, 695],
    [406, 750],
    [314,750]
  ]).addTo(map);
  tercio.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  tercio.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  tercio.on('click', function (e) {
    var popupContent = "<center><h2>Tercio Estudiantil</h2></center><p>Conjunto de alumnos que velan por el bienestar de sus compañeros universitarios</p>";
    this.bindPopup(popupContent).openPopup();
  });
  tercio.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(tercio.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  


  
  var datacenter = L.polygon([
    [737, 622],
    [779, 622],
    [779, 714],
    [737,714]
  ]).addTo(map);
  datacenter.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  datacenter.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  datacenter.on('click', function (e) {
    var popupContent = "<center><h2>Micro Data Center</h2></center><p>Diseñado para proporcionar capacidades de procesamiento y almacenamiento en ubicaciones cercanas a donde se necesita, el micro data center es especialmente útil en entornos donde el espacio es limitado o donde se requiere una respuesta rápida y eficiente en términos de procesamiento de datos.</p>";
    this.bindPopup(popupContent).openPopup();
  });
  datacenter.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(datacenter.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  
/*
//para las coordenadas

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
*/

//var sol = L.latLng([ 500, 500 ]);
//L.marker(sol).addTo(map);
//map.setView( [500, 500], 1);



//fly to para viajar