class MensagemView extends View{

    // se o contrutor tiver uma quantidade diferente de parâmetros do pai é preciso invocar o super(parâmetros)

    template(model){
        // verifica se o texto está preenchido
        return model.texto ? `<p class= "alert alert-info">${model.texto}</p>`: `<p></p>`;
    }
}