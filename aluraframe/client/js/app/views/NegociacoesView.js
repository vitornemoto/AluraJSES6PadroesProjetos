class NegociacoesView extends View{

    // se o contrutor tiver uma quantidade diferente de parâmetros do pai é preciso invocar o super(parâmetros)
 
    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map((n) => {
                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
                <td colspan="3"></td>
                <td>${ 
                        model.volumeTotal
                     }</td>
            <tfoot>
            </tfoot>
            </table> `;
    }

}



