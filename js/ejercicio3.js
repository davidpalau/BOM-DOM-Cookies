const palabras = ["Mayonesa","Manzana", "Banana", "Mañana", "Tarde", "Sacarina", "Index", "Desarrollador", "Clase", "Objeto"];
palabras.forEach(palabras => document.write("<p>", palabras ,"</p>"));

var preguntar = function(){window.confirm("¿Quieres ordenar las palabras.?")};

var ordenar = window.setTimeout(preguntar, 3000);
console.log(ordenar);

if(ordenar){
// A continuación se ordenan las palabras
palabras.sort();
mostrarPantalla(palabras);

}

function mostrarPantalla(lista) {
    lista.forEach((elemento) => document.write(`<p>${elemento}</p>`));
   }
