class GeoLocalizacion{
	constructor(){
		navigator.geolocation.getCurrentPosition(this.getPosition.bind(this),this.manejoDeErrores.bind(this));
	}
	getPosition(posicion){
		this.longitud=posicion.coords.longitude
		this.latitud=posicion.coords.latitude
		this.precision=posicion.coords.accuracy
		this.mensaje="";
	}
	
	manejoDeErrores(error){
		switch (error.code){
			case error.PERMISSION_DENIED:
				this.mensaje="El usuario no ha dado permiso";
				break;
			case error.POSITION_UNAVAILABLE:
				this.mensaje="La posicion no esta disponible";
				break;
			case error.TIMEOUT:
				this.mensaje="Tiempo de espera agotado";
				break;
			case error.UNKNOWN_ERROR:
				this.mensaje="Error desconocido";
				break;
		}
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
		if(this.mensaje != ""){
			datos+='<p>'+this.mensaje+'</p>';
		}
		datos+='<p>Latitud: '+this.latitud+' grados</p>'; 
		datos+='<p>Longitud: '+this.longitud+' grados</p>'; 
		datos+='<p>Precisión de la latitud y longitud: '+this.precision+' metros</p>';
		ubicacion.innerHTML=datos;
	}
}

var posicion=new GeoLocalizacion();
