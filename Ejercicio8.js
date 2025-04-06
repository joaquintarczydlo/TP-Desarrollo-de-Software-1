
var elementos1 = [1, 2, 3, 6, 7, 8, 9, 10, 11];
var elementos2 = ["a", "b", "c", "d", "e"];

unirArraysAlternando(elementos1, elementos2);

function unirArraysAlternando(elementos1, elementos2) {
    elementosUnidos = [];
    indice = 0;

    while(indice < elementos1.length + elementos2.length) {
        if(indice < elementos1.length) {
            elementosUnidos.push(elementos1[indice]);
        }
        if(indice < elementos2.length) {
            elementosUnidos.push(elementos2[indice]);
        }
        indice++;
    }
    console.log(elementosUnidos);
}