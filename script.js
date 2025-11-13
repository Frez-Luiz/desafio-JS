const lanterna = document.getElementById("lanterna");

function acender(){
    lanterna.src= "ligado.png";
    document.body.style.background = "#ffea3085"
}

function apagar(){
    lanterna.src = "desligado.png";
    document.body.style.background = "#303030ff"
}
function automatico(){
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0) acender();
        else if(estado === 1) apagar();
        estado = (estado + 1) % 2;
    }, 450)
}
function parar(){
    clearInterval(intervalo);
    limpar();
}

btnAcender.onclick = acender;
btnApagar.onclick = apagar;
btnAuto.onclick = automatico;
btnParar.onclick = parar;