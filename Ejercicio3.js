
var frase = "java es mejor lenguaje de programacion";
console.log(invertirFrase(frase));

function invertirFrase(frase) {
    let palabrasSeparadas = frase.split(" ");
    let fraseInvertida = [];

    for(let i = palabrasSeparadas.length - 1; i >= 0; i--) {
        fraseInvertida.push(palabrasSeparadas[i]);
    }

    return fraseInvertida.join(" ");
}