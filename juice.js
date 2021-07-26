const contenedor = document.querySelector('#contenedor'),
	btn = document.getElementById('btn'),
    rgb = document.querySelector('#RGB'),
    black = document.querySelector('#black');

let div = document.createElement('div'),
	objeto,
	cajitas,
	color,
	button = document.querySelector('#button');

rgb.addEventListener('click', function(e){
  colorHEX();
});

black.addEventListener('click', function(e){
  color = "black";
  return color;
});

button.addEventListener("click", function(e){
    let input = document.querySelector('#input');
    if(input.value >= 0 && input.value <= 100){
      cajitas = input.value;
      
      crearCajas();
      input.value = "";
    }
    else{
      input.value = "";
      alert('Ingresa un número entre 0 y 100');
    }
});



//Función para crear la cantidad de cajas que el usuario requiera

function crearCajas(){
    for(let i=0; i<(cajitas**2); i++){
    div = document.createElement('div');
    div.style.width = ((350/cajitas)-2)+"px";
    div.style.height = ((350/cajitas)-2)+"px";
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
    objeto.style.backgroundColor = color;
    objeto.setAttribute('class', 'vanilla');
});


//Botón de escucha para resetear los elementos

btn.addEventListener('click', function (e){
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


//Obtener un color RGB 

function generarLetra(){
	let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	let numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	color = "";
	for(let i=0;i<6;i++){
		color = color + generarLetra() ;
	}
  color = "#"+color;
	return color;
}

console.log(colorHEX());
