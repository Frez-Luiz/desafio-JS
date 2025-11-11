const lanterna = document.getElementById("lanterna");

function acender(){
    lanterna.src = "ligado.png";
    document.body.style.background = "#ffeb3b22"
}

function apagar(){
    lanterna.src = "desligado.png";
    document.body.style.background = "#222"
}
function automatico(){
    lanterna.src = "ligado.png";
    document.body.style.background = "#ffeb3b22"
}