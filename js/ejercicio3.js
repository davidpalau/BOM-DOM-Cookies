//Hasta que no este toda la pagina cargada no debe ejecutar inicio();
//window.addEventListener("load", inicio); Este metodo si funciona correctamente en Firefox, pero no me funciona en Chrome


   
//Pedir confirmación para ordenar 
    function preguntar(){
    let ordenar = window.confirm("Ordenar las palabras:");
    if (ordenar) {
        // En caso true ordenar y mostrar
        console.log("Ordenar y mostrar.")
        palabras.sort;
        document.write("<p>Palabras ordenadas: </p>");
        mostrar(palabras);
    }
    }

// Mostrar palabras de un array en HTML
function mostrar(palabras){
    palabras.forEach(indice = palabras => document.write("<p>", palabras, "</p>"));
}
const palabras = ["Mayonesa", "Manzana", "Banana", "Mañana", "Tarde", "Sacarina", "Index", "Desarrollador", "Clase", "Objeto"];
mostrar(palabras);

window.setTimeout('preguntar()', 3000);