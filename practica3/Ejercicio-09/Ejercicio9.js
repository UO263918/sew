"use strict";
class Meteo {
    constructor(ciudad){
        this.ciudad = ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad +"&mode=xml&units=metric&lang=es&APPID=1938b20ea2ec8cf632b8ffa8260df2e0";
    }
	
    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
                $("h5").text((new XMLSerializer()).serializeToString(datos));
                    var nombreCiudad= $('city',datos).attr("name");
                    var longitud= $('coord',datos).attr("lon");
                    var latitud= $('coord',datos).attr("lat");
                    var pais= $('country',datos).text();
                    var amanece= $('sun',datos).attr("rise");
                    var humedad= $('humidity',datos).attr("value");
                    var humedadUnit= $('humidity',datos).attr("unit");
                    var presion= $('pressure',datos).attr("value");
                    var presionUnit= $('pressure',datos).attr("unit");
                    var velocidadViento= $('speed',datos).attr("value");
                    var nombreViento= $('speed',datos).attr("name");
                    var direccionViento= $('direction',datos).attr("value");
                    var codigoViento= $('direction',datos).attr("code");
                    var nombreDireccionViento= $('direction',datos).attr("name");
					var sensacionTermica= $('feels_like',datos).attr("value");
                    var temperatura= $('temperature',datos).attr("value");
                    var temperaturaMin= $('temperature',datos).attr("min");
                    var temperaturaMax= $('temperature',datos).attr("max");
                    var temperaturaUnit= $('temperature',datos).attr("unit");
					var nubosidad= $('clouds',datos).attr("value");
                    var nombreNubosidad= $('clouds',datos).attr("name");
                    var visibilidad= $('visibility',datos).attr("value");
                    var precipitacionValue= $('precipitation',datos).attr("value");
                    var precipitacionMode= $('precipitation',datos).attr("mode");
                    var descripcion= $('weather',datos).attr("value");
                    var horaMedida= $('lastupdate',datos).attr("value");
					var minutosZonaHoraria= new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970= Date.parse(amanece)-(minutosZonaHoraria * 60 * 1000);
                    var amanecerLocal= (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970= Date.parse(oscurecer)-(minutosZonaHoraria * 60 * 1000);
                    var oscurecerLocal= (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var horaMedidaMiliSeg1970= Date.parse(horaMedida)-(minutosZonaHoraria * 60 * 1000);
                    var horaMedidaLocal= (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal= (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                    var icono= $('weather',datos).attr("icon");

                    var cadena = "<section><h2>Ciudad: " + nombreCiudad + " " + "<img src=http://openweathermap.org/img/w/"+icono+".png alt=\"Icono atmosferico\" ></h2>";
                        cadena += "<li>Descripcion: " + descripcion + "</li>";
						cadena += "<li>Longitud: " + longitud + " grados</li>";
                        cadena += "<li>Latitud: " + latitud + " grados</li>";
                        cadena += "<li>Pais: " + pais + "</li>";
                        cadena += "<li>Amanece a las: " + amanecerLocal + "</li>";
                        cadena += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
						
                        cadena += "<li>Temperatura: " + temperatura + " ºC</li>";
						cadena += "<li>Sensación térmica: " + sensacionTermica + " ºC</li>";
                        cadena += "<li>Temperatura minima: " + temperaturaMin + " ºC</li>";
                        cadena += "<li>Temperatura maxima: " + temperaturaMax + " ºC</li>";
                        
                        cadena += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                        cadena += "<li>Presion: " + presion + " " + presionUnit + "</li>";
                        cadena += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                        cadena += "<li>Nombre del viento: " + nombreViento + "</li>";
                        cadena += "<li>Direccion del viento: " + direccionViento + " grados</li>";
                        cadena += "<li>Codigo del viento: " + codigoViento + "</li>";
                        cadena += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                        cadena += "<li>Nubosidad: " + nubosidad + "</li>";
                        cadena += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                        cadena += "<li>Visibilidad: " + visibilidad + " metros</li>";
                        cadena += "<li>Precipitacion valor: " + precipitacionValue + "</li>";
                        cadena += "<li>Precipitacion modo: " + precipitacionMode + "</li>";
                        
                        cadena += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                        cadena += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                        cadena += "</section>";
                    
                    $("main").append(cadena);                  
                },
            error:function(){
                $("h3").html("No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("h5").remove();
                $("p").remove();
                }
        });
    }
	
    mostrarXML(){
	   var elemento = document.createElement("p"); 
       elemento.innerHTML = "";
       $("main").after(elemento);
       this.cargarDatos();
    }
	
}

var meteo1 = new Meteo("Gijon");
meteo1.mostrarXML();
var meteo2 = new Meteo("Sevilla");
meteo2.mostrarXML();
var meteo3 = new Meteo("Zamora");
meteo3.mostrarXML();
var meteo4 = new Meteo("Caceres");
meteo4.mostrarXML();
var meteo5 = new Meteo("Cangas de Onis");
meteo5.mostrarXML();