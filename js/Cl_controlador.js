export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarFlores() {
        this.modelo.procesarRamo(this.vista.iniciarFlores(), this.vista.iniciarFruta());
        this.vista.reporteFlores(
            this.modelo.calcularTotal(),
            this.modelo.calcularPorcentajeFloresNaturalesMediano(), 
            this.modelo.totalFloresNaturalesMediano(), 
            this.modelo.totalFloresNaturales(),
            this.modelo.totalFlores(),
            this.modelo.cantidadRamos1(),
            this.modelo.porcentajeRamos1());
    }
    procesarFruta() {
        this.modelo.procesarRamo(this.vista.iniciarFruta(), this.vista.iniciarFlores());
        this.vista.reporteFruta(
            this.modelo.calcularTotal(),
            this.modelo.calcularPorcentajeFloresNaturalesMediano(), 
            this.modelo.totalFloresNaturalesMediano(), 
            this.modelo.totalFloresNaturales(),
            this.modelo.totalFruta(),
            this.modelo.cantidadRamos1(),
            this.modelo.porcentajeRamos1());
    }
}