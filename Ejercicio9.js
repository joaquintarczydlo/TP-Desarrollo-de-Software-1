
console.log(calcularImpuestos(50, 150000));

function calcularImpuestos(edad, ingresos) {
    let impuesto = 0;

    if(edad > 17 && edad <= 20) {
        impuesto = ingresos * 0.1;
    } else if(edad > 20 && edad <= 30){
        impuesto = ingresos * 0.15;
    } else if(edad > 30) {
        impuesto = ingresos * 0.4;
    }

    return impuesto
}