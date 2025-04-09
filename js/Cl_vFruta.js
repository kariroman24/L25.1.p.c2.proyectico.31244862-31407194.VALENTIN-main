export default class Cl_vFruta {
    constructor() {
        this.inCodigo = document.getElementById("frutaForm_inCodigo");
        this.inEnvase = document.getElementById("frutaForm_inEnvase");
        this.inCostoNeto = document.getElementById("frutaForm_inCostoNeto");
        this.inAdicional = document.getElementById("frutaForm_inAdicional");
        this.btProcesar = document.getElementById("frutaForm_btProcesarFruta");
    }
    get codigo(){
        return this.inCodigo.value;
    }
    get envase(){
        return this.inEnvase.value;
    }
    get costoNeto(){
        return this.inCostoNeto.value;
    }
    get adicional(){
        return this.inAdicional.value;
    }
}