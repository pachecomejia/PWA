let fechaActual = new Date();
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth() + 1;
let dia = fechaActual.getDate();

let fecha = `${dia}/${mes}/${anio}`;
document.getElementById("fecha-actual").innerHTML = fecha;
