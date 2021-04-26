const contenedor = document.querySelector('#contenedor');
let div = document.createElement('div');
const btn = document.getElementById('btn');
//Variable objeto para color de cada div al pasar el mouse
let objeto;
let cajitas;


//Código nuevo

let button = document.querySelector('#button');
button.addEventListener("click", function(e){
    let input = document.querySelector('#input');
    cajitas = input.value;
    crearCajas();
    input.value = "";
});



//Función para crear la cantidad de cajas que el usuario requiera

function crearCajas(){
    //Creamos la manera de hacer los cuadros que queramos
    //Ajustamos el tamaño del contenedor general y 
    //hacer operaciones simples para encontrar el nuevo
    //tamaño de los child divs.
    for(let i=0; i<(cajitas**2); i++){
    div = document.createElement('div');
    div.style.width = ((400/cajitas)-2)+"px";
    div.style.height = ((400/cajitas)-2)+"px";
    div.style.float = "left";
    div.style.margin = "0px";
    div.style.border = "0.5px solid rgba(0, 0, 0, 0.8)";
    div.setAttribute('class', 'first');
    contenedor.appendChild(div);
    }    
}


//Evento de escucha para pintar cada div

contenedor.addEventListener('mouseover', function (e){
    objeto = e.target;
    objeto.style.backgroundColor = "Yellow";
    //Añadimos la clase 'Vanilla' a cada div con nuevo color
    //para luego poder resetear y se actualice al color base
    objeto.setAttribute('class', 'vanilla');
});


//Botón de escucha para resetear los elementos

btn.addEventListener('click', function (e){
    //Código de Stackoverflow
    //TODO: Consultar los nuevos métodos o funciones aprendidas
    let cajas = document.getElementsByClassName("vanilla")
    let firstCajas = document.getElementsByClassName('first');
    Array.prototype.forEach.call(cajas, function(cajas) {
      cajas.style.backgroundColor = null;
      cajas.style.width = "";
      cajas.style.height = "";
      cajas.style.border = "";
    });
    Array.prototype.forEach.call(firstCajas, function(firstCajas) {
      firstCajas.style.border = "";
      firstCajas.style.width = "";
      firstCajas.style.height = "";
      firstCajas.style.border = "";
    });
});
