export default class Cl_mRamo { 
    constructor(codigo, envase, costoNeto, cantidad) {
        this.codigo = codigo;
        this.envase = envase;
        this.costoNeto = costoNeto;
        this.cantidad = cantidad; 
    }
    set codigo(codigo) {
        this._codigo = +codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set envase(envase) {
        this._envase = envase;
    }
    get envase() {
        return this._envase;
    }
    set costoNeto(costoNeto) {
        this._costoNeto = +costoNeto;
    }
    get costoNeto() {
        return this._costoNeto;
    }
    set cantidad(cantidad){
        this._cantidad = +cantidad;
    }
    get cantidad(){
        return this._cantidad;
    }
    totalCosto(){
        this.costoNeto * this.cantidad;
    }
}