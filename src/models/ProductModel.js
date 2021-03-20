class ProductModel extends ServiceModel {

    constructor(data) {
        super(data);
        this._estoque = data.estoque;
    }

    get estoque() {
        return this._estoque;
    }
}
