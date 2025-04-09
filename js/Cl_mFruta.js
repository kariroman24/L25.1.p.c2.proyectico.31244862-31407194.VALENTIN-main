import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_fruta extends Cl_mRamo {
    constructor({codigo, envase, costoNeto, adicional}) {
        super(codigo, envase, costoNeto);
        this.adicional = adicional;
    }   
    set adicional(adicional) {
        this._adicional = adicional.toUpperCase();
    }
    get adicional() {
        return this._adicional;
    }
    descuento(){
        if (this.adicional === "SI") {
            return this.costoNeto * 0.15;
        }
        else if(this._adicional === "NO") {
            return 0;
        }
    }
    calcularCosto(){
        return this.costoNeto - this.descuento();
    }
}
