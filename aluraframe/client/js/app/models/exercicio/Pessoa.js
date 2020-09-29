class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obtemNomeCompleto(){
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
}