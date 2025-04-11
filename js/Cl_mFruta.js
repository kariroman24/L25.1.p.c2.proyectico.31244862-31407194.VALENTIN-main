import Cl_mRamo from "./Cl_mRamo.js";
export default class Cl_fruta extends Cl_mRamo {
    constructor({codigo, envase, costoNeto, adicional, cantidad}) {
        super(codigo, envase, costoNeto, cantidad);
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
            return this.totalCosto() * 0.15;
        }
        else if(this._adicional === "NO") {
            return 0;
        }
    }
    calcularCosto(){
        return this.totalCosto() - this.descuento();
    }
}
