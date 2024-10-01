// Inicializando variável com o valor 1
let count = 1;
// Pegando o radio1 recebendo o valor true
document.getElementById("carrossel-radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

// Função para incrementar e verificar a condição das imagens
function nextImage(){
    count ++;
    if(count > 4) {
        count=1;
    }
    document.getElementById("carrossel-radio"+count).checked = true;
}