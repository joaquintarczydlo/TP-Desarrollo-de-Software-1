
console.log(eliminarEspaciosEnBlanco(" hola como estas todo bien "));

function eliminarEspaciosEnBlanco(cadena) {
    let cadenaDividida = cadena.split(" ");
    let palabrasSinEspacios = [];

    for(let i = 0; i < cadenaDividida.length; i++) {
        if(cadenaDividida[i] != "") {
            palabrasSinEspacios.push(cadenaDividida[i]);
        }
    }
    return unirPalabras(palabrasSinEspacios, " ");
}

function unirPalabras(palabras, separador) {
    return palabras.join(separador);
}