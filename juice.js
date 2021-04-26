const contenedor = document.querySelector('#contenedor');
let div = document.createElement('div');
const btn = document.getElementById('btn');
btn.style.backgroundColor  = "black";
btn.style.width = "150px";
btn.style.marginLeft = "600px";
btn.style.marginTop = "50px";

btn.addEventListener('click', function (e){
    console.log(e.target);
});

crearCajas();

function crearCajas(){
    //Creamos la manera de hacer los cuadros que queramos
    //Basta con ajustar el tamaño del contenedor general y 
    //hacer operaciones simples para encontrar el nuevo
    //tamaño de los child divs.
    for(let i=0; i<(16*16); i++){
    div = document.createElement('div');
    div.style.width = ((400/16)-2)+"px";
    div.style.height = ((400/16)-2)+"px";
    div.style.backgroundColor = "white";
    div.style.float = "left";
    div.style.margin = "0px";
    div.style.border = "0.5px solid rgba(0, 0, 0, 0.8)";
    contenedor.appendChild(div);
    }
}

contenedor.addEventListener('mouseover', function (e){
    e.target.style.backgroundColor = "Yellow";
    // console.log(div);
    // console.log(e.target);
});


