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
var calculadora = new Calculadora();