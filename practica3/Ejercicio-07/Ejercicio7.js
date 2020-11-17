class FuncionalidadBotones{
	ocultarParrafos() {
        $(document).ready(function () {
            $("p").hide();
        });
    }
	
	mostrarMasInformacion(){
		$(document).ready(function(){
			$("section").show();
		});
	}
	
	modificarH2() {
        if (document.getElementById){
			var nombre = document.getElementById("titulo2");
			var contenido = document.getElementById("nombreH2").value;
			nombre.firstChild.nodeValue = contenido;
		}
    }
	
	anadirSection(){
		$(document).ready(function () {
            $("section").before("<section><h2>Nuevo h2 creado</h2><p>Nuevo parrafo creado</p></section>");
		});
	}
	
	eliminarH2() {
        $(document).ready(function () {
            $("h2").remove();
        });
    }
	
	recorrerTodos() {
        var text = "";
        $(document).ready(function () {

            $("*", document.html).each(function () {
                text += "Elemento:" + $(this).get(0).tagName + ", Padre:" + $(this).parent().get(0).tagName + "\n";
            });
        });
        $(document).ready(function () {
            $("header").after(text);
        });

    }
	
    sumarFilas() {

        $(document).ready(function () {

           
            var contador = 0;
            $("table tr ").each(function () {
                var resultado = 0;
                $(this).find("td").each(function () {
                    resultado ++;
                });
                contador++;

                $("table").before("<p>La suma de los elementos de la fila " + contador + " es: "+resultado+"</p>");

            });
			$("table").before("<p>El numero de filas son: " + contador +"</p>");

        });

    }
	
    sumarColumnas() {

        $(document).ready(function () {
            
            var i=0;
            $("table tr ").each(function () {
                var result=0;
            i++;
            $("table tr ").each(function () {
                $(this).find("td:nth-child("+i+")").each(function () {
                    result ++;
                });
            });
            $("table").before("<p>La suma de los elementos de la columna " + i + " es: " + result + "</p>");
            });
			
             $("table").before("<p>El numero de columnas son: " + i +"</p>");
        });
    }
}

var botones=new FuncionalidadBotones();