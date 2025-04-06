
var frase = "a mi parecer entendible";
console.log(comprobarTerminacionConSufijo(frase, "er"));

function comprobarTerminacionConSufijo(cadena, sufijo) {
    let contLetrasIguales = 0;

    let indice = cadena.length - 1;
    let indiceSufijo = sufijo.length - 1;

    while(indiceSufijo >= 0) {
        if(cadena[indice] == sufijo[indiceSufijo]) {
            contLetrasIguales++;
        }
        indice--;
        indiceSufijo--;
    }
    return contLetrasIguales == sufijo.length;
}