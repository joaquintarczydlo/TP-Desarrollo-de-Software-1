
console.log(agruparCantLikes(3249746));

function agruparCantLikes(cantLikes) {
    let charUnidad = "";

    if(cantLikes >= 1000 && cantLikes < 1000000) {
        cantLikes /= 1000;
        charUnidad = "K";
    } else if(cantLikes > 1000000) {
        cantLikes /= 1000000;
        charUnidad = "M";
    }

    return "Cantidad de Likes: " + redondearDecimales(cantLikes, 1) + charUnidad; 
}

function redondearDecimales(numero, cantDecimales) {
    let numAux = Math.pow(10, cantDecimales);
    return Math.floor(numero * numAux) / numAux;
}