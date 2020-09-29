class DateHelper{
    
    constructor(){
        // classe com metodos estáticos não pode ser instanciada.
        throw new Error('Esta classe não pode ser instanciada');
    }


    static dataParaTexto(data){
        
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        
    }
   
    static textoParaData(texto){

        // expressão regular para validar o texto do parâmetro
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');

        // forma mais fácil de se converter uma string em date
        // let data = new Date(this._inputData.value.split('_'));    
        return new Date( ...texto.split('-').map((item, indice) => item - indice % 2)) // quando só tem uma linha pode ser feito dessa forma é como se tivesse um return item - indice % 2
    }

}    
    
   