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
// Função para passar o slide para a direita
let currentSlide = 1;
const totalSlides = 4; // Número total de imagens

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  document.getElementById('carrossel-radio' + currentSlide).checked = true;
}

// Função para passar o slide para a esquerda
function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = totalSlides;
  }
  document.getElementById('carrossel-radio' + currentSlide).checked = true;
}
