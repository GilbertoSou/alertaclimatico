/* Altera contraste*/
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleContrast");
    let isBlackAndWhite = false;
  
    toggleButton.addEventListener("click", function() {
        isBlackAndWhite = !isBlackAndWhite;
  
        if (isBlackAndWhite) {
            document.body.style.filter = "grayscale(100%)";
        } else {
            document.body.style.filter = "none";
        }
    });
  });

  /* Aumentar Texto*/
var botao3 = document.getElementById("botao3");
botao3.addEventListener("click", aumentarTexto);
var tamanho = 16;

function aumentarTexto() {
  tamanho += 2;
  document.querySelectorAll("p").forEach(function(elemento) {
      elemento.style.fontSize = tamanho + "px";
  });
}