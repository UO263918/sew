class GeoLocalizacion{
	constructor(){
		navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
	}
	
	getPosition(posicion){
		this.longitud=posicion.coords.longitude
		this.latitud=posicion.coords.latitude
		this.precision=posicion.coords.accuracy
	}
	
	getLongitud(){
        return this.longitud;
    }
	
    getLatitud(){
        return this.latitud;
    }
	
	mostrar(sitio){
		var ubicacion=document.getElementById(sitio);
		var datos='<h2>Posicion:</h2>';
		datos+='<p>Latitud: '+this.latitud+' grados</p>'; 
		datos+='<p>Longitud: '+this.longitud+' grados</p>'; 
		datos+='<p>Precisión de la latitud y longitud: '+this.precision+' metros</p>';
		ubicacion.innerHTML=datos;
	}
}

var posicion=new GeoLocalizacion();
