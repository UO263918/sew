class CalculadoraRPN{
    constructor(){
        this.digito="";
        this.stack=new Stack();
    }

    actualizar(){
        
        var p1 = document.getElementById("pantalla2");
        p1.value = this.stack.peek();

        var p2 = document.getElementById("pantalla3");
        p2.value = this.stack.doblePeek();

        var p3 = document.getElementById("pantalla1");
        p3.value=this.digito;
    }
	
    anadirNumero(digito){
        this.digito=this.digito+digito;
        this.actualizar();
    }
    operar(operacion){
        var resultado;
        switch(operacion){
            case '+':          
            resultado=parseInt(this.stack.pop())+parseInt(this.stack.pop());
            this.stack.push(resultado);
            break;
            
            case '/':          
            resultado=this.stack.pop()/this.stack.pop();
            this.stack.push(resultado);
            break;
			
            case '*':          
            resultado=this.stack.pop()*this.stack.pop();
            this.stack.push(resultado);
            break;
			
			case '-':          
            resultado=this.stack.pop()-this.stack.pop();
            this.stack.push(resultado);
            break;
			
			case 'C':          
            this.stack=new Stack();
            break;
			
			case 'CE':          
            this.stack.pop();  
            break;
			
			case 'cos':          
            this.stack.push(Math.cos(this.stack.pop()));
            break;
            
            case 'sen':          
            this.stack.push(Math.sin(this.stack.pop()));
            break;
            
			case 'tan':          
            this.stack.push(Math.tan(this.stack.pop()));
			break;
			
			case 'raiz':          
            this.stack.push(Math.sqrt(this.stack.pop()));
            break;
            
			case 'add':
            if(this.digito===""){}else{
				this.stack.push(this.digito);
				this.digito="";
            }
            break;
			
            case 'exp':          
            this.stack.push(Math.exp(this.stack.pop()));
            break;
            
            case 'p2':
			this.stack.push(Math.pow(this.stack.pop(),2));
            break;        
            
            case 'log':          
            this.stack.push(Math.log(this.stack.pop()));
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

var calculadora=new CalculadoraRPN();