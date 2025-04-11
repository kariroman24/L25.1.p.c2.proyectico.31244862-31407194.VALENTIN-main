import Cl_mFlores from "./Cl_mFlores.js";
import Cl_vFlores from "./Cl_vFlores.js";
import Cl_mFruta from "./Cl_mFruta.js";
import Cl_vFruta from "./Cl_vFruta.js";

export default class Cl_vTienda {
    constructor() {
        this.controlador = null;
        this.vFlores = new Cl_vFlores();
        this.vFruta = new Cl_vFruta();
        this.salida = document.getElementById("salida");
        this.tablaFlores = document.getElementById("tablaFlores");
        this.tablaFruta = document.getElementById("tablaFruta");
        this.tablaSubFlores = document.getElementById("tablaSubFlores");
        this.tablaSubFruta = document.getElementById("tablaSubFruta");

        this.vFlores.btProcesar.onclick = () => {
            this.controlador.procesarFlores();
        }
        this.vFruta.btProcesar.onclick = () => {
            this.controlador.procesarFruta();
        }
    }
    iniciarFlores() {
        this.flores = new Cl_mFlores({
            codigo: this.vFlores.codigo,
            envase: this.vFlores.envase,
            costoNeto: this.vFlores.costoNeto,
            tipo: this.vFlores.tipo,
            cantidad: this.vFlores.cantidad
        })
        return this.flores;
    }
    iniciarFruta() {
        this.fruta = new Cl_mFruta({
            codigo: this.vFruta.codigo,
            envase: this.vFruta.envase,
            costoNeto: this.vFruta.costoNeto,
            adicional: this.vFruta.adicional,
            cantidad: this.vFruta.cantidad
        })
        return this.fruta;
    }
    reporteFlores(
        calcularTotal,
        calcularPorcentajeFloresNaturalesMediano,
        totalFloresNaturalesMediano,
        totalFloresNaturales, totalFlores, cantidadRamos1, porcentajeRamos1) {

        this.tablaFlores.innerHTML += `
    <tr><td>${this.flores.codigo}</td>
        <td>${this.flores.envase}</td>
        <td>${this.flores.costoNeto.toFixed(2)}</td>
        <td>${this.flores.tipo}</td>
        <td>${this.flores.descuento().toFixed(2)}</td>
        <td>${this.flores.incremento().toFixed(2)}</td>
        <td>${this.flores.calcularCosto().toFixed(2)}</td>
    </tr>`

        this.tablaSubFlores.innerHTML = `
    <tr> 
        <th> Total Ramo de Flores </th>
        <td>${totalFlores.toFixed(2)}</td>
    </tr>`

        this.salida.innerHTML = `
    <br>El total de ramos vendidos es de: ${calcularTotal.toFixed(2)}
    <br>Cantidad flores naturales con envase mediano: ${totalFloresNaturalesMediano}
    <br>Cantidad de flores naturales: ${totalFloresNaturales}
    <br>Porcentaje de ramos de flores naturales con envase mediano vendidos es de: ${calcularPorcentajeFloresNaturalesMediano}%
    <br>Cantidad de ramos con mas de 1 : ${cantidadRamos1}<br>
    <br>Porcentaje de ramos con mas de 1 : ${porcentajeRamos1}%
    `
    }
    reporteFruta(
        calcularTotal,
        calcularPorcentajeFloresNaturalesMediano,
        totalFloresNaturalesMediano,
        totalFloresNaturales, totalFruta, cantidadRamos1, porcentajeRamos1) {

        this.tablaFruta.innerHTML += `
    <tr><td>${this.fruta.codigo}</td>
        <td>${this.fruta.envase}</td>
        <td>${this.fruta.costoNeto.toFixed(2)}</td>
        <td>${this.fruta.adicional}</td>
        <td>${this.fruta.descuento().toFixed(2)}</td>
        <td>${this.fruta.calcularCosto().toFixed(2)}</td>
    </tr>`

        this.tablaSubFruta.innerHTML = `
    <tr> 
        <th> Total Ramo de Fruta </th>
        <td>${totalFruta.toFixed(2)}</td>
    </tr>`

        this.salida.innerHTML = `
    <br>El total de ramos vendidos es de: ${calcularTotal.toFixed(2)}
    <br>Cantidad flores naturales con envase mediano: ${totalFloresNaturalesMediano}
    <br>Cantidad de flores naturales: ${totalFloresNaturales}
    <br>Porcentaje de ramos de flores naturales con envase mediano vendidos es de: ${calcularPorcentajeFloresNaturalesMediano}%
     <br>Cantidad de ramos con mas de 1 : ${cantidadRamos1}<br>
    <br>Porcentaje de ramos con mas de 1 : ${porcentajeRamos1}%
    `
    }
}