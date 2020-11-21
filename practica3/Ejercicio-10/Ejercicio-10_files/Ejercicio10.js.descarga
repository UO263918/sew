class Cambio{
	constructor(){
		this.url="http://api.currencylayer.com/live?access_key=f6e899c2f6c0d01aec0ce2b272790f51";
	}
	cargarDatos(){
		$.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
			success: function(datos){  
                    var euro= datos.quotes.USDEUR;                
                    var cadena = "<section><h2>Monedas: </h2><ul>";
						cadena += "<li>Dolar Australiano (AUD): 1€ = " + (euro*datos.quotes.USDAUD) + " AUD </li>";
						cadena += "<li>Yuan Chino (CNY): 1€ = " + (euro*datos.quotes.USDCNY) + " CNY </li>";
						cadena += "<li>Kuna Croata (HRK): 1€ = " + (euro*datos.quotes.USDHRK) + " HRK </li>";
						cadena += "<li>Yen Japonés (JPY): 1€ = " + (euro*datos.quotes.USDJPY) + " JPY </li>";
						cadena += "<li>Peso Mexicano (MXN): 1€ = " + (euro*datos.quotes.USDMXN) + " MXN </li>";
                        cadena += "<li>Moneda Afganí (AFN): 1€ = " + (euro*datos.quotes.USDAFN) + " AFN </li>";                     
                        cadena += "<li>Lek Albanés (ALL): 1€ = " + (euro*datos.quotes.USDALL) + " ALL </li>";
                        cadena += "<li>Peso Dominicano (DOP): 1€ = " + (euro*datos.quotes.USDDOP) + " DOP </li>";                       
                        cadena += "<li>Rial Yemení (YER): 1€ = " + (euro*datos.quotes.USDYER) + " YER </li>";
                        cadena += "<li>Libra Libanesa (LBP): 1€ = " + (euro*datos.quotes.USDLBP) + " LBP </li>";
                        cadena += "</ul></section>";
                    $("main").append(cadena);
                }
				});
	}
	
	verDatos(){
		this.cargarDatos();
	}
	
}

var cambio=new Cambio();
cambio.verDatos();
	