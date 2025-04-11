import Cl_mFlores from "./Cl_mFlores.js";
import Cl_mFruta from "./Cl_mFruta.js";
export default class Cl_mTienda {
    constructor(){
        this.acumCostoFlores = 0;
        this.acumCostoFruta = 0;
        this.contFloresNaturalesMediano = 0;
        this.contFloresNaturales = 0;
        this.contRamosFlores1 = 0;
        this.contRamosFrutas1 = 0;
        this.contRamosFlores = 0;
        this.contRamosFrutas = 0;
        this.contRamos1 =0;
    }
    procesarRamo(ramo){
        if (ramo.cantidad > 1) {
            this.contRamos1++;
        }
        if (ramo instanceof Cl_mFlores) {
            this.contRamosFlores++;
            if (ramo.cantidad > 1) {
                this.contRamosFlores1++;
            }
            if (ramo.envase === "2" && ramo.tipo === "N") {
                this.contFloresNaturalesMediano++;
            }
            if (ramo.tipo === "N") {
                this.contFloresNaturales++;
            }
            this.acumCostoFlores += ramo.calcularCosto();
        }
        if (ramo instanceof Cl_mFruta) {
            this.contRamosFrutas++;
            if (ramo.cantidad > 1) {
                this.contRamosFrutas1++;
            }
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
        return this.acumCostoFlores
    }
    totalFruta(){
        return this.acumCostoFruta
    }
    cantidadRamos1(){
        return this.contRamosFlores1 + this.contRamosFrutas1;
    }
    cantidadRamos(){
        return this.contRamosFlores + this.contRamosFrutas;
    }
    porcentajeRamos1(){
        return (this.contRamos1 * 100) / this.cantidadRamos();
    }
}