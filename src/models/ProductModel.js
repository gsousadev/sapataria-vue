import {ServiceModel} from "./ServiceModel";

export class ProductModel extends ServiceModel {
    constructor(data) {
        super(data);
        this.estoque = data.estoque;
        this.produto_id = data.id;
        this.quantidade = data.quantidade;
    }
}

