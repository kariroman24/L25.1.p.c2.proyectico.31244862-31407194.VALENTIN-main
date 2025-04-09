import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mFruta from "./Cl_mFruta.js";
export default class Cl_mTienda {
    constructor(){
        this.acumCostoFlores = 0;
        this.acumCostoFruta = 0;
        this.contFloresNaturalesMediano = 0;
        this.contFloresNaturales = 0;
    }
    procesarRamo(ramo){
        if (ramo instanceof Cl_mFlores) {
            if (ramo.envase === "2" && ramo.tipo === "N") {
                this.contFloresNaturalesMediano++;
            }
            if (ramo.tipo === "N") {
                this.contFloresNaturales++;
            }
            this.acumCostoFlores += ramo.calcularCosto();
        }
        if (ramo instanceof Cl_mFruta) {
            this.acumCostoFruta += ramo.calcularCosto();
        }
}
    calcularTotal(){
        return this.acumCostoFlores + this.acumCostoFruta;
    }
    totalFloresNaturalesMediano(){
        return this.contFloresNaturalesMediano;
    }
    totalFloresNaturales(){
        return this.contFloresNaturales;
    }
    calcularPorcentajeFloresNaturalesMediano(){
        if (this.contFloresNaturales === 0) {
            return 0;
        }
        else {
            return (this.contFloresNaturalesMediano * 100) / this.contFloresNaturales;
        }
    }
    totalFlores(){
        return this.acumCostoFlores;
    }
    totalFrutas(){
        return this.acumCostoFruta;
    }
}