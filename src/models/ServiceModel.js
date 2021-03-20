class ServiceModel extends Model {

    constructor(data) {
        super(data);
        this._nome = data.nome;
        this._slug = data.slug;
        this._descricao = data.descricao;
        this._valor = data.valor;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get slug() {
        return this._slug;
    }

    set slug(value) {
        this._slug = value;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(value) {
        this._descricao = value;
    }

    get valor() {
        return this._valor;
    }

    set valor(value) {
        this._valor = value;
    }
}