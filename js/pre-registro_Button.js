function mostrarPreRegistro() {
  var elemento = document.getElementById("formulario");

  if (elemento.style.display == "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }

}
