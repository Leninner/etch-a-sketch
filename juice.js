const contenedor = document.querySelector('#contenedor');
let div = document.createElement('div');

    crearCajas();

function crearCajas(){
    for(let i=0; i<256; i++){
    div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = "Red";
    div.style.float = "left";
    div.style.margin = "0px";
    div.style.border = "0.5px solid rgba(0, 0, 0, 0.8)";
    contenedor.appendChild(div);
    }
}

contenedor.addEventListener('mouseover', function (e){
    e.target.style.backgroundColor = "GREEN";
    // console.log(div);
    // console.log(e.target);
});

