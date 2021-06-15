import {Model} from "./Model";

export class ServiceModel extends Model {

    constructor(data) {
        super(data);
        this.nome = data.nome;
        this.slug = data.slug;
        this.descricao = data.descricao;
        this.valor = data.valor;
        this.servico_id = data.id;
        this.valor_adicional = data.valor_adicional
        this.data_entrega = data.data_entrega;
        this.hora_entrega = data.hora_entrega;
        this.observacao = data.observacao;
    
    }
}