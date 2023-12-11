
var generarImagen = function() {
    console.log("se va a generar la imagen")
    html2canvas(document.querySelector("#list_container")).then(canvas => {
        document.getElementById("imagen_generada_container").innerHTML = "";
        document.getElementById("imagen_generada_container").appendChild(canvas)
    });
}

var generarLista = function() {
    
}