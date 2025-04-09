import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_flores extends Cl_mRamo{
    constructor({codigo, envase, costoNeto, tipo}){
        super(codigo, envase, costoNeto);
        this.tipo = tipo;
    }
    set tipo(tipo){
        this._tipo = tipo.toUpperCase();
    }
    get tipo(){
        return this._tipo;
    }
    descuento(){
        if (this.tipo == "A") {
            return this.costoNeto * 0.10;
        }
        else {
            return 0;
        }
    }
    incremento(){
        if (this.tipo == "N") {
            return this.costoNeto * 0.08;
        }
        else {
            return 0;
        }
    }
    calcularCosto(){
    if (this.tipo == "A") {
        return this.costoNeto - this.descuento();
    }
    else if (this.tipo == "N") {
        return this.costoNeto + this.incremento();
    }
    }
}