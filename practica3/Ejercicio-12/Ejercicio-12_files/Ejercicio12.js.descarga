'use strict';
class CargarArchivos {
    constructor() {

        if (window.File && window.FileReader && window.FileList && window.Blob) {
            document.write("<p>Soporta el API File </p>");
        }
        else{
			document.write("<p>No soporta la API File</p>");
			alert("Este navegador no soprta Api FIle");
		}
    }

    calcularTamañoArchivos() {
        var nBytes = 0,
            archivos = document.getElementById("archivosSubidos").files,
            numeroArchivos = archivos.length,
            tipo = /text.*/;

        for (var i = 0; i < numeroArchivos; i++) {
            nBytes += archivos[i].size;
        }

        var nombresTiposTamaños = "";
        for (var i = 0; i < numeroArchivos; i++) {

             var contenido="" ;

            if (archivos[i].type.match(tipo) || archivos[i].type.match("application/json")) {
                var reader = new FileReader();
                reader.onload = function (evento) {
                    contenido+= reader.result;
                    alert(contenido);
                }
                reader.readAsText(archivos[i]);
            }
            else {
                contenido = ("Archivo no válido !!!");
            }

            nombresTiposTamaños += "<p>Archivo[" + archivos[i].name + "] = Numero de archivo " + i
                + ", Tamaño: " + archivos[i].size + " bytes "
                + ",Tipo: " + archivos[i].type
                + ", Ultima modificacion: " + archivos[i].lastModifiedDate +
                "</p>"
        }

        document.getElementById("numeroArchivos").innerHTML = numeroArchivos;
        document.getElementById("tamañoArchivos").innerHTML = nBytes + " bytes";
        document.getElementById("nombres").innerHTML = nombresTiposTamaños;

    }

 
}

let cargador = new CargarArchivos();