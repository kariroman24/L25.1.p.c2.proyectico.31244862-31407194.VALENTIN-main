/*  2. VALENTÍN 
La Tienda “Exprésalo con Amor” C.A, ofrece para el día de los enamorados, los más 
hermosos ramos de flores y frutas. Se conoce cada ramo: su código, envase (1 Pequeño, 2 
Mediano, 3 Grande) y costo neto. Además, se sabe que si el ramo es de flores tendrá un tipo 
(N- Natural o A-Artificial), teniendo en cuenta si artificial tendrá un descuento del 10% sobre el 
costo neto y si las flores son naturales tendrá un incremento del 8%. Por otro lado, si el ramo es 
de fruta se debe tomar en cuenta si el mismo lleva chocolate o botella de vino (cualquiera de los 
dos), de ser así este tendrá un descuento del 15% sobre el costo neto. La Tienda requiere 
determinar al final de su jornada laboral: el total vendido y el porcentaje de ramos de flores 
naturales con envase mediano vendidos. 
*/

import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_controlador from "./Cl_controlador.js";

export default class index {
    constructor() {
        let modelo = new Cl_mTienda;
        let vista = new Cl_vTienda;
        let controlador = new Cl_controlador(modelo, vista);
        
        vista.controlador = controlador;
    }
}