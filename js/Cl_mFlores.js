import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_flores extends Cl_mRamo{
    constructor({codigo, envase, costoNeto, tipo, cantidad}){
        super(codigo, envase, costoNeto, cantidad);
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
            return this.totalCosto() * 0.10;
        }
        else {
            return 0;
        }
    }
    incremento(){
        if (this.tipo == "N") {
            return this.totalCosto() * 0.08;
        }
        else {
            return 0;
        }
    }
    calcularCosto(){
        if (this.tipo == "A") {
            return this.totalCosto() - this.descuento();
        }
        else if (this.tipo == "N") {
            return this.totalCosto() + this.incremento();
        }
    }
}