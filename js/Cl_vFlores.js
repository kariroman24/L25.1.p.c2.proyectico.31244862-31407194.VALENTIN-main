export default class Cl_vFlores {
    constructor() {
        this.inCodigo = document.getElementById("floresForm_inCodigo");
        this.inEnvase = document.getElementById("floresForm_inEnvase");
        this.inCostoNeto = document.getElementById("floresForm_inCostoNeto");
        this.inTipo = document.getElementById("floresForm_inTipo");
        this.btProcesar = document.getElementById("floresForm_btProcesarFlores");
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
    get tipo(){
        return this.inTipo.value;
    }
}