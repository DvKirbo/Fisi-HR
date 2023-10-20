ciclos = [1,2,3,4,5,6,7,8,9,10]
dias = ['LUNES', 'MARTES', 'MIERCOLES', "JUEVES", 'VIERNES',"SABADO", 'DOMINGO']
horas = ["8:00-9:00",						
    "9:00-10:00",						
    "10:00-11:00",						
    "11:00-12:00",						
    "12:00-13:00",						
    "13:00-14:00",						
    "14:00-15:00",						
    "15:00-16:00",						
    "16:00-17:00",						
    "17:00-18:00",						
    "18:00-19:00",						
    "19:00-20:00",						
    "20:00-21:00",						
    "21:00-22:00"]
const SelectCiclos = document.querySelector('#ciclo');
const showDias = document.querySelector('#dias')
const showHoras=document.querySelector('#horas')

for (i in ciclos){
    let opcion = document.createElement('option')
    opcion.value=i*1+1;
    opcion.text=i*1+1
    console.log(opcion)
    SelectCiclos.append(opcion);
}



dias.forEach((element)=>{
    let dia = document.createElement('th');
    dia.classList.add('text-center');
    dia.textContent = element;
    showDias.append(dia);


}) 
let j=1;
horas.forEach((element)=>{
    
    let hora =document.createElement('tr');
    hora.classList.add('text-center');
    hora.innerText = element;
    hora.innerHTML=`<td class="text-center">${element}</td>`
    console.log(hora);

    for(let i =0;i<7;i++){
        let espacio = document.createElement('td');
        espacio.id=`${j}-${i*1+1}`
        espacio.classList.add('text-center');
        espacio.style='white-space: pre-wrap; word-wrap: break-word';
        hora.append(espacio);
    }


    showHoras.append(hora);
    j++;
}) 

/* horas.forEach((elemento, index)=>{
    let hora = document.createElement('tr');
    hora.classList.add('text-center');
    hora.innerText = elemento;
    hora.innerHTML=`<td class="text-center">${element}</td>`;

    showHoras.append(hora);
    for (let i=0; i<7;i++){
        let espacio =document.createElement('td');
        espacio.classList.add('text-center');
        espacio.style='white-space: pre-wrap; word-wrap: break-word';
        hora.append(espacio);
    }
}) */