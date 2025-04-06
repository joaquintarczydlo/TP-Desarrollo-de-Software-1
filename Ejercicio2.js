
palabras = ["hola", "buenas", "aguante", "javascript"];

console.log(unirPalabras(palabras, "/"));

function unirPalabras(palabras, separador) {
    return palabras.join(separador);
}