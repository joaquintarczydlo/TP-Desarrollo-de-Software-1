
console.log(extraerDominio("correoejemplo@ahk.com.ar"));

function extraerDominio(correo) {
    let correoSeparado = correo.split("@");
    return correoSeparado[correoSeparado.length - 1];
}