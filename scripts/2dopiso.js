var map = L.map('mapa', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom:2
});
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('../img/Piso2.png', bounds).addTo(map);
map.fitBounds(bounds);

/*
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
*/

/*
var entrada = L.marker([30,130],{
  text:"Entrada 1"
}).addTo(map)

*/
///////////////////////////////////////////////////////////
//añadiendo poligono//y ,x
var comedor = L.polygon([
  [594,127],
  [594, 292],
  [514, 292],
  [514,127]
]).addTo(map);
comedor.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
comedor.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
comedor.on('click', function (e) {
  var popupContent = "<center><h2>Comedor</h2></center><p>Lugar donde los alumnos de la facultad pueden tener un espacio agradable para ingerir sus alimentos</p>";
  this.bindPopup(popupContent).openPopup();
});
comedor.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(comedor.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});



var catedraticos = L.polygon([
    [367, 292],
    [436, 292],
    [436, 346],
    [367,346]
  ]).addTo(map);
  catedraticos.on('mouseover', function (e) {
    this.setStyle({ fillColor: 'red' });
  });
  catedraticos.on('mouseout', function (e) {
    this.setStyle({ fillColor: 'blue' });
  });
  catedraticos.on('click', function (e) {
    var popupContent = "<center><h2>Sala de catedraticos</h2></center><p>Espacio reservado para profesores y académicos, diseñado para fomentar la colaboración, el intercambio de ideas y el desarrollo intelectual. Esta sala proporciona un ambiente propicio para la preparación de clases, la investigación y la interacción entre docentes de diferentes disciplinas.</p>";
    this.bindPopup(popupContent).openPopup();
  });
  catedraticos.on('click', function (e) {
    var zoomLevel = 1; // Establece el nivel de zoom deseado
    map.setView(catedraticos.getBounds().getCenter(), zoomLevel);
    //  map.fitBounds(capilla.getBounds());
  });
  



  
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