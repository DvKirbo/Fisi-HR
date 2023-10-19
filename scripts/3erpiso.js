var map = L.map('mapa', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom:2
});
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('../img/Piso3.png', bounds).addTo(map);
map.fitBounds(bounds);


var marker = L.marker([500,500],{
  draggable: true,
  title:"text",
  autoPanOnFocus:true,
  riseOnHover:true

}).addTo(map).bindPopup("<h1>Hola</h1><p>Fisi</p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPPDdpG4dYyLigQiEx-jFrz2TkErFi4YBHDzbek9Xcw&s' height=50px >")
marker.on('click', function () {
  // Define el nivel de zoom que deseas aplicar al hacer clic en el marcador
  var zoomLevel =1 ;
  // Obtiene la posición del marcador
  var latLng = marker.getLatLng();
  // Hace zoom en el marcador
  map.setView(latLng, zoomLevel);
});



var entrada = L.marker([30,130],{
  text:"Entrada 1"
}).addTo(map)


///////////////////////////////////////////////////////////
//añadiendo poligono//y ,x
var matricula = L.polygon([
  [342,194],
  [368, 194],
  [368, 255],
  [342,255]
]).addTo(map);
matricula.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
matricula.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
matricula.on('click', function (e) {
  var popupContent = "<center><h2>Matricula</h2></center><p>Oficina encargada con las gestiones respecto a la matricula y rectificaciones de los alumnos de la facultad.</p>";
  this.bindPopup(popupContent).openPopup();
});
matricula.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(matricula.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});



var DIRsoft = L.polygon([
    [297,194],
    [341, 194],
    [341, 255],
    [297,255]
  ]).addTo(map);
  DIRsoft.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  DIRsoft.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  DIRsoft.on('click', function (e) {
    var popupContent = "<center><h3>Director de la escuela de software</h3></center><p></p>";
    this.bindPopup(popupContent).openPopup();
  });
  DIRsoft.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(DIRsoft.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  



  var DIRsist = L.polygon([
    [249,194],
    [296, 194],
    [296, 255],
    [249,255]
  ]).addTo(map);
  DIRsist.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  DIRsist.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  DIRsist.on('click', function (e) {
    var popupContent = "<center><h3>Director de la escuela de sistemas</h3></center><p></p>";
    this.bindPopup(popupContent).openPopup();
  });
  DIRsist.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(DIRsist.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  
  



  var unayoe = L.polygon([
    [115,86],
    [195, 86],
    [195, 255],
    [115,255]
  ]).addTo(map);
  unayoe.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  unayoe.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  unayoe.on('click', function (e) {
    var popupContent = "<center><h2>UNAYOE</h2></center><p>La Unidad de Asesoría y Orientación al Estudiante, es la unidad organica encargada de brindar asesoramiento y orientación a los estudiantes de la Facultad en las actividades académicas para el éxito de su formación profesional.</p>";
    this.bindPopup(popupContent).openPopup();
  });
  unayoe.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(unayoe.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  
  /*
  var musica = L.polygon([
    [815,190],
    [857, 190],
    [857, 255],
    [815,255]
  ]).addTo(map);
  musica.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  musica.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  musica.on('click', function (e) {
    var popupContent = "<center><h2>comedor</h2></center><p>El comedor de la fisi</p>";
    this.bindPopup(popupContent).openPopup();
  });
*/

  /*
  var publicidad = L.polygon([
    [314,424],
    [348, 424],
    [348, 491],
    [314,491]
  ]).addTo(map);
  publicidad.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  publicidad.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  publicidad.on('click', function (e) {
    var popupContent = "<center><h2>comedor</h2></center><p>El comedor de la fisi</p>";
    this.bindPopup(popupContent).openPopup();
  });
  
*/
  
  var soporte = L.polygon([
    [314,651],
    [348, 651],
    [348, 708],
    [314,708]
  ]).addTo(map);
  soporte.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  soporte.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  soporte.on('click', function (e) {
    var popupContent = "<center><h2>Soporte</h2></center><p>Oficina encargada del soporte y mantenimiento de los laboratorios , salones y multiple equipo de la facultad.</p>";
    this.bindPopup(popupContent).openPopup();
  });
  soporte.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(soporte.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  
  



  var dep_aca_sist = L.polygon([
    [314,709],
    [348, 709],
    [348, 781],
    [314,781]
  ]).addTo(map);
  dep_aca_sist.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  dep_aca_sist.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  dep_aca_sist.on('click', function (e) {
    var popupContent = "<center><h2>Departamento academico de Sistemas</h2></center><p></p>";
    this.bindPopup(popupContent).openPopup();
  });
  dep_aca_sist.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(dep_aca_sist.getBounds().getCenter(), zoomLevel);
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


//var sol = L.latLng([ 500, 500 ]);
//L.marker(sol).addTo(map);
//map.setView( [500, 500], 1);



//fly to para viajar
*/