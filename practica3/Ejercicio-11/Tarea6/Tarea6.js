"use strict";

class Meteo {
    constructor(city) {
        this.apikey = "1938b20ea2ec8cf632b8ffa8260df2e0";
        this.ciudad = city;
        
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + ",ES&units=metric&lang=es&APPID=" + this.apikey;
        this.mapaDinamicoGoogle = new Object();
        this.cargarDatos();
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                var icon = datos.weather[0].icon;
                var urlIcon = "http://openweathermap.org/img/w/" + icon + ".png";
                var stringDatos = '<img src="' + urlIcon + '"/> '+datos.main.temp+" ºC Ciudad: " +datos.name
                var centro = {
                    lat: 43.3672702,
                    lng: -5.8502461
                };

                var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
                    zoom: 8,
                    center: centro,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var infoWindow = new google.maps.InfoWindow;
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        infoWindow.setPosition(pos);
                        infoWindow.setContent(stringDatos);
                        infoWindow.open(mapaGeoposicionado);
                        mapaGeoposicionado.setCenter(pos);
                    }, function () {
                        handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
                    });
                } else {
                    handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
                }
            },
            error: function () {
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }

}

var meteo = new Meteo("Gijon");
