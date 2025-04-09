import Cl_mFlores from "./Cl_mFlores.js";
import Cl_vFlores from "./Cl_vFlores.js";
import Cl_mFruta from "./Cl_mFruta.js";
import Cl_vFruta from "./Cl_vFruta.js";

export default class Cl_vTienda{
    constructor(){
        this.controlador = null;
        this.vFlores = new Cl_vFlores();
        this.vFruta = new Cl_vFruta();
        this.salida = document.getElementById("salida");
        this.tablaFlores = document.getElementById("tablaFlores");
        this.tablaFruta = document.getElementById("tablaFruta");

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
    })
        return this.flores;
}
iniciarFruta() {
    this.fruta = new Cl_mFruta({
        codigo: this.vFruta.codigo,
        envase: this.vFruta.envase,
        costoNeto: this.vFruta.costoNeto,
        adicional: this.vFruta.adicional,
    })
        return this.fruta;
}
reporteFlores(
    calcularTotal, 
    calcularPorcentajeFloresNaturalesMediano, 
    totalFloresNaturalesMediano, 
    totalFloresNaturales, totalFlores) {

    this.tablaFlores.innerHTML += `
    <tr><td>${this.flores.codigo}</td>
        <td>${this.flores.envase}</td>
        <td>${this.flores.costoNeto.toFixed(2)}</td>
        <td>${this.flores.tipo}</td>
        <td>${this.flores.descuento().toFixed(2)}</td>
        <td>${this.flores.incremento().toFixed(2)}</td>
        <td>${this.flores.calcularCosto().toFixed(2)}</td>
    </tr> 
    `
    
    this.salida.innerHTML = `
    <br>El total de ramos vendidos es de: ${calcularTotal.toFixed(2)}
    <br>Cantidad flores naturales con envase mediano: ${totalFloresNaturalesMediano}
    <br>El total de ramos de flores naturales vendidos es de: ${totalFloresNaturales}
    <br>Porcentaje de ramos de flores naturales con envase mediano vendidos es de: ${calcularPorcentajeFloresNaturalesMediano}%<br>
    `
}
reporteFruta(
    calcularTotal, 
    calcularPorcentajeFloresNaturalesMediano, 
    totalFloresNaturalesMediano, 
    totalFloresNaturales) {
        
    this.tablaFruta.innerHTML += `
    <tr><td>${this.fruta.codigo}</td>
        <td>${this.fruta.envase}</td>
        <td>${this.fruta.costoNeto.toFixed(2)}</td>
        <td>${this.fruta.adicional}</td>
        <td>${this.fruta.descuento().toFixed(2)}</td>
        <td>${this.fruta.calcularCosto().toFixed(2)}</td>
    </tr>
     <th scope="row" colspan="2">Total frutas</th>
    <td colspan="7">${totalFrutas.toFixed(2)} </td>`

    this.salida.innerHTML = `
    <br>El total de ramos vendidos es de: ${calcularTotal.toFixed(2)}
    <br>Cantidad flores naturales con envase mediano: ${totalFloresNaturalesMediano}
    <br>El total de ramos de flores naturales vendidos es de: ${totalFloresNaturales}
    <br>Porcentaje de ramos de flores naturales con envase mediano vendidos es de: ${calcularPorcentajeFloresNaturalesMediano}%
    `
}
}