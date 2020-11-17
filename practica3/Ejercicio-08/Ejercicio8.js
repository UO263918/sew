"use strict";
class Tiempo {
    constructor(ciudad,pais){
        this.ciudad = ciudad;
        this.codigoPais = pais;
        this.unidad = "&units=metric";
        this.idioma = "&lang=es";
		this.apikey = "1938b20ea2ec8cf632b8ffa8260df2e0";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidad + this.idioma + "&APPID=" + this.apikey;
        }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    var urlInicio="http://openweathermap.org/img/w/";
                    var cadena = "<section><h3>Ciudad: " + datos.name + " <img src="+urlInicio+datos.weather[0].icon+".png border=\"1\" alt=\"Icono atmosferico\" ></h3><ul>";
						cadena += "<li>País: " + datos.sys.country + "</li>";
						cadena += "<li>Descripción del tiempo: " + datos.weather[0].description + "</li>";	
                        cadena += "<li>Temperatura: " + datos.main.temp + " ºC</li>";
						cadena += "<li>Sensación Térmica: " + datos.main.feels_like + " ºC</li>";
                        cadena += "<li>Temperatura máxima: " + datos.main.temp_max + " ºC</li>";
                        cadena += "<li>Temperatura mínima: " + datos.main.temp_min + " ºC</li>";
                        cadena += "<li>Presión atmosférica: " + datos.main.pressure + " mbar</li>";
                        cadena += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        cadena += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        cadena += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        cadena += "<li>Dirección del viento: " + datos.wind.deg + " º</li>";
                        cadena += "<li>Velocidad del viento: " + datos.wind.speed + " m/s</li>";
                        cadena += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        cadena += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
						cadena += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        cadena += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li></ul>";
                        cadena += "</section>";
                    
                    $("main").append(cadena);
                },
            error:function(){
                $("h3").html("Problemas con la pagina <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }
   
    mostrarJSON(){
        this.cargarDatos();
    }
}
var ciudad1 = new Tiempo("Gijon","ES");
ciudad1.mostrarJSON();
var ciudad2 = new Tiempo("Sevilla","ES");
ciudad2.mostrarJSON();
var ciudad3 = new Tiempo("Zamora","ES");
ciudad3.mostrarJSON();
