import {ServiceModel} from "./ServiceModel";

export class ProductModel extends ServiceModel {
    constructor(data) {
        super(data);
        this._estoque = data.estoque;
        this._disabled = false;
        this._quantidade = data.quantidade;
    }

    get estoque() {
        return this._estoque;
    }

    get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        this._disabled = value;
    }

    get quantidade() {
        return this._quantidade;
    }

    set quantidade(value) {
        this._quantidade = value;
    }
}

