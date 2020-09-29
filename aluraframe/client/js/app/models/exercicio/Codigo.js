class Codigo{
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static validaCodigo(codigo){
        let expressao = /\D{3}-\D{2}-\d{2}$/;

        if (expressao.test(codigo)){
            alert('Código válido!');
        } else{
            alert('Código inválido');
        }
    }
}



