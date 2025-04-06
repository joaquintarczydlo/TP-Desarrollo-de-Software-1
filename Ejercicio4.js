
var frase = "la ultima vez que la computadora funciono la estaba arreglando";
console.log(contarPalabraEnFrase(frase, "la"));

function contarPalabraEnFrase(frase, palabra) { 
    let palabrasSeparadas = frase.split(" ");
    let contPalabra = 0;

    for (let i = 0; i < palabrasSeparadas.length; i++) {
        if(palabrasSeparadas[i].toLowerCase() == palabra.toLowerCase()){
            contPalabra++;
        }
    }
    return contPalabra;
}