
var frase = "hola como estas? espero que bien";
console.log(convertirATitulo(frase));

function convertirATitulo(frase) { 
    let palabrasSeparadas = frase.split(" ");

    for(let i = 0; i < palabrasSeparadas.length; i++) {
        palabrasSeparadas[i] = convertirPrimeraLetraAMayuscula(palabrasSeparadas[i]);
    }
    return palabrasSeparadas.join(" ");
}

function convertirPrimeraLetraAMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}