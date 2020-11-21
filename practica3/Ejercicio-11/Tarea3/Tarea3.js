class MapaEstaticoGoogle {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.manejoDeErrores.bind(this));
    }
	
    getPosicion(posicion){
        this.mensaje = "";
        this.longitud = posicion.coords.longitude; 
        this.latitud = posicion.coords.latitude;  
        this.precision = posicion.coords.accuracy;
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
	
    verCoordenadas(objeto){
        var ubicacion=document.getElementById(objeto);
        var datos='<h2>Posicion:</h2>';
		if(this.mensaje != ""){
			datos+='<p>'+this.mensaje+'</p>';
		}
        datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
        datos+='<p>Latitud: '+this.latitud +' grados</p>';
        datos+='<p>Precisión de la longitud y latitud: '+ this.precision +' metros</p>';
        ubicacion.innerHTML = datos;
    }
	
    getMapaEstaticoGoogle(objeto){
        var ubicacion=document.getElementById(objeto);
        var apiKey = "&key=AIzaSyC5RkByR7x9Mu00U6a3TFc8hrEXUiR6ZlI";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom ="&zoom=15";
        var tamano= "&size=800x600";
        var marcador = "&markers=color:blue%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false"; 
        this.imagenMapa = url + centro + zoom + tamano + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='"+this.imagenMapa+"' alt='mapa'/>";
    }
}
var miMapa = new MapaEstaticoGoogle();