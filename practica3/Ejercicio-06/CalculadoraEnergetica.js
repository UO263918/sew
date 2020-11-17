class CalculadoraEnergetica{
    constructor(){
        this.digito="";
        this.stack=new Stack();
    }

    actualizar(){
        var p1 = document.getElementById("pantalla1");
		if(this.stack.peek() == 0){
			p1.value = 0 + " KW al año";
		}
		else{
			p1.value = this.stack.peek() + " KW al año";
		}

        var p2 = document.getElementById("pantalla2");
        p2.value = this.digito;
    }
	
    anadirElectrodomestico(digito){
        this.digito=this.digito+digito;
        this.actualizar();
    }
	
    operar(operacion){
        var resultado;
        switch(operacion){			
			case 'C':          
            this.stack=new Stack();
            break;
            
			case 'add':
            if(this.digito==""){
				
			}
			else{
				this.stack.push(this.digito);
				resultado=parseInt(this.stack.pop())+parseInt(this.stack.pop());
				this.stack.push(resultado);
				this.digito="";
            }
            break;
        }
        this.actualizar();
    }
} 

// Stack class 
class Stack { 

	constructor() 
	{ 
		this.elementos = []; 
	} 

	
push(element) 
{ 
	
	this.elementos.push(element); 
} 

pop() 
{ 
	
	if (this.elementos.length == 0) 
		return 0; 
	return this.elementos.pop(); 
} 

peek() 
{ 
    if(this.elementos.length>=1)
    return this.elementos[this.elementos.length - 1]; 
    else return "-"; 
} 
doblePeek() 
{ 
    if(this.elementos.length>=2)
    return this.elementos[this.elementos.length - 2];
    else return "-"; 
} 
 
isEmpty()
{
	if(this.elementos.length==0)
		return true;
	else
		return false;
}

} 

var calculadora=new CalculadoraEnergetica();