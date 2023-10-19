var map = L.map('mapa', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom:2
});
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('../img/Piso1.png', bounds).addTo(map);
map.fitBounds(bounds);

///////////////////////////////////////////////////////////
//añadiendo poligono//y ,x
var polygon = L.polygon([
  [489,74.5],
  [569, 74.5],
  [569, 240.5],
  [489,240.5]
]).addTo(map);
polygon.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
polygon.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
polygon.on('click', function (e) {
  var popupContent = "<center><h2>Auditorio</h2></center><p>El auditorio de la fisi, lugar donde se realizan todo tipo de eventos relacionados con la facultad</p><center><img src='https://raw.githubusercontent.com/sebauvv/WebMap-FISI/main/img/auditorio.png' width=300px height = 150px></center>";
  this.bindPopup(popupContent).openPopup();
});
polygon.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(polygon.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});

/*
var dga = L.polygon([
  [170,52],
  [246.5,52],
  [246.5,128],
  [170,128]
]).addTo(map);
dga.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
dga.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
dga.on('click', function (e) {
  var popupContent = "<h1>ESTE ES UN POLIGONO</h1>";
  this.bindPopup(popupContent).openPopup();
});
*/

var cerseu = L.polygon([
  [213,129],
  [170,129],
  [170,221],
  [213,221]
]).addTo(map);
cerseu.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
cerseu.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
cerseu.on('click', function (e) {
  var popupContent = "<center><h2>Cerseu</h2></center><p>El Centro de Responsabilidad Social y Extensión Universitaria CERSEU - FISI, es la unidad de gestión encargada de integrar a la FISI con la comunidad, a través de la organización de actividades académicas de apoyo, programas técnicos dirigidos a la comunidad y eventos de cultura general.</p><center><img src='https://raw.githubusercontent.com/sebauvv/WebMap-FISI/main/img/cerseu.png' width=150px height = 150px></center>";
  this.bindPopup(popupContent).openPopup();
});
cerseu.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(cerseu.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});


var direccion = L.polygon([
  [230,159],
  [282.5,159],
  [282.5,220],
  [230,220]
]).addTo(map);
direccion.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
direccion.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
direccion.on('click', function (e) {
  var popupContent = "<h1>Direccion de escuela</h1><p>Departamento encargado de dirigir y administrar la facultad.</p>";
  this.bindPopup(popupContent).openPopup();
});
direccion.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(direccion.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});




var usgom = L.polygon([
  [292,159],
  [323.5,159],
  [323.5,220],
  [292,220]
]).addTo(map);
usgom.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
usgom.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
usgom.on('click', function (e) {
  var popupContent = "<center><h1>USGOM</h1></center><p>La Unidad de Servicios Generales y Mantenimiento, se encargada de asegurar el desarrollo ordenado y coherente de los servicios del Área de su competencia, necesarios para el cumplimiento de las actividades académicas y administrativas.</p>";
  this.bindPopup(popupContent).openPopup();
});
usgom.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(usgom.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});



var economia = L.polygon([
  [169,52],
  [169,98],
  [146,98],
  [146,52]
]).addTo(map);
economia.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
economia.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
economia.on('click', function (e) {
  var popupContent = "<center><h1>Economia</h1></center><p>Unidad encargada del presupuesto tanto del personal como actividades de la facultad.</p>";
  this.bindPopup(popupContent).openPopup();
});
economia.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(economia.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});



var modulo_atencion = L.polygon([
  [92, 170],
  [127,170],
  [127,220],
  [92,220]
]).addTo(map);
modulo_atencion.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
modulo_atencion.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
modulo_atencion.on('click', function (e) {
  var popupContent = "<center><h2>Modulo de atencion al docente</h2></center><p>Su objetivo es mejorar la calidad de la enseñanza y el bienestar de los educadores al ofrecerles orientación pedagógica, herramientas de desarrollo profesional, asesoramiento en la gestión del aula y acceso a materiales didácticos actualizados.</p>";
  this.bindPopup(popupContent).openPopup();
});
modulo_atencion.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(modulo_atencion.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});



var losa = L.polygon([
  [442,636.5],
  [690,636.5],
  [690,874],
  [442,874]
]).addTo(map);
losa.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
losa.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
losa.on('click', function (e) {
  var popupContent = "<center><h1>Losa Deportiva</h1></center><p></p><center><img src='https://raw.githubusercontent.com/sebauvv/WebMap-FISI/main/img/cancha_fisi.png' width=300px height = 150px></center>";
  this.bindPopup(popupContent).openPopup();
});
losa.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(losa.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});


/*
var capilla = L.polygon([
  [323, 650.5],
  [380, 650.5],
  [380,704],
  [323,704]
]).addTo(map);
capilla.on('mouseover', function (e) {
  this.setStyle({ fillColor: 'red' });
});
capilla.on('mouseout', function (e) {
  this.setStyle({ fillColor: 'blue' });
});
capilla.on('click', function (e) {
  var popupContent = "<h1>ESTE ES UN POLIGONO</h1>";
  this.bindPopup(popupContent).openPopup();
});
capilla.on('click', function (e) {
  var zoomLevel = 1; // Establece el nivel de zoom deseado
  map.setView(capilla.getBounds().getCenter(), zoomLevel);
  //  map.fitBounds(capilla.getBounds());
});
*/

//para las coordenadas

//var popup = L.popup();

//function onMapClick(e) {
   // popup
      //  .setLatLng(e.latlng)
    //    .setContent("You clicked the map at " + e.latlng.toString())
  //      .openOn(map);
//}

//map.on('click', onMapClick);


//var sol = L.latLng([ 500, 500 ]);
//L.marker(sol).addTo(map);
//map.setView( [500, 500], 1);



//fly to para viajar
