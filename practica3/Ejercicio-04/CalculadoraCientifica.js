class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memoria= "";
        this.actualizar();
        this.operaciones = ['+', '-', '/', '*'];
        this.habilitadoPunto=true;
        this.habilitadoOperacion=true;
    }

    memoriaOperacion(operacion){
        try{
        this.memoria=eval(this.memoria+operacion+this.pantalla);
        }catch(e){
            alert("Error al añadir en memoria");
        }
    }
   
    mrc(){
       this.pantalla=this.memoria;
       this.memoria="";
       this.actualizar();
    }

    actualizar() {
        var pantalla = document.getElementById("pantalla");
        pantalla.value = this.pantalla;
    }
	
	 calcular() {
        if (this.pantalla == '.' || this.pantalla == "") {

        } else {
            this.pantalla = eval(this.pantalla);
            this.actualizar();
        }
    }
	
    anadirNumero(numero) {
        if(numero=='.'){
            if(this.pantalla[this.pantalla.length - 1] == '.'){

            }else if(this.habilitadoPunto==true){
               this.pantalla += numero;
               this.habilitadoPunto=false; 
            }
        }else if(this.contiene(numero)){
            if(this.contiene(this.pantalla[this.pantalla.length - 1])){
                
            }else if(this.habilitadoOperacion==true){
                this.pantalla += numero;
                this.habilitadoOperacion=false; 
            }
        }else{
            this.pantalla+=numero;
            this.habilitadoPunto=true;
            this.habilitadoOperacion=true;
        } 
        this.actualizar();
    }
   
    borrar() {
        this.pantalla = "";
        this.actualizar();
    }
	
	contiene(numero) {
        for(var i=0;i<this.operaciones.length;i++){
            if(this.operaciones[i]==numero){
                return true;
            }
        }
        return false;
    }
}

class CalculadoraCientifica extends Calculadora {
	
    constructor() {
        super();
    }

    cambiarSigno() {
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla = eval(this.pantalla * (-1));
			this.actualizar();
		}
    }

    factorial() {
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=this.factorialAux(parseFloat(this.pantalla));
			this.actualizar();
		}
    }
	
    factorialAux(num){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
        else if (num === 0) { 
            return 1; 
        }
        else { 
            return num * this.factorialAux(num - 1); 
        }
    }
	
    borrarUltimo(){
		if (this.pantalla == "") {

        }
		else{
			try{
			this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
			this.actualizar();
			}catch(exception){
				this.pantalla=this.pantalla+"";
				this.borrarUltimo();
			}
		}
    }
	
    exponenciar10(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.pow(10, eval(this.pantalla));
			this.actualizar();
		}
    }
	
    exponencial(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.exp(eval(this.pantalla));
			this.actualizar();
		}
    }
	
    raiz(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.sqrt(eval(this.pantalla));
			this.actualizar();
		}
    }
	
    cuadrado(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.pow(2,eval(this.pantalla));
			this.actualizar();
		}
    }
	
    logaritmo(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.log10(eval(this.pantalla));
			this.actualizar();
		}
    }
	
    inversa(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=eval(1/this.pantalla);
			this.actualizar();
		}
    }
	
    seno(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.sin(eval(this.pantalla));
			this.actualizar();
		}
    }
	
    coseno(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.cos(eval(this.pantalla));
			this.actualizar();
		}
    }
	
    tangente(){
		if (this.pantalla == '.' || this.pantalla == "") {

        }
		else{
			this.pantalla=Math.tan(eval(this.pantalla));
			this.actualizar();
		}
    }
}
var calculadora = new CalculadoraCientifica();