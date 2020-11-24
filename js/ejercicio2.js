console.log(contarCookies);

if (contarCookies == undefined) {
  var contarCookies = 1;
} else if (dame.split('visitas=')) {
  contarCookies++;
}

let dame = (document.cookie = 'visitas=' + contarCookies);
console.log(dame);
console.log(dame.split('='));
