// dias 28, horas 24, minutos 60, segundos 60 y milisegundos 1000, tiempo de caducidad.
let finalCookie = 28 * 24 * 60 * 60 * 1000;

let fechaActual = new Date;

    fechaActual.setTime(fechaActual.getTime()+finalCookie);
var contador=getCookie( "contador" );
++contador;

if(contador==11){
 eliminarCookies("contador", contador);
 document.writeln("Reiniciamos las visitas");
}else{
    setCookie( "contador", contador);
    document.writeln( "Ha visitado usted esta pagina "+contador+" veces.");
}


console.log(document.cookie);
function getCookie(name){
    var cname = name + "=";               
    var dc = document.cookie;             
    if (dc.length > 0) {              
      begin = dc.indexOf(cname);       
      if (begin != -1) {           
        begin += cname.length;       
        end = dc.indexOf(";", begin);
        if (end == -1) end = dc.length;
          return unescape(dc.substring(begin, end));
      } 
    }
    return null;
  }

  function setCookie(name, value, expires) {
    document.cookie = name + "=" + value + 
    ((expires == null) ? "" : "; expires=" + expires.toGMTString());
  }

  function eliminarCookies(nombre, valor){
      for(i = valor; i > 0; i--){
        document.cookie = nombre + "=" + i+ "; expires=Thu, 01 Jan 1970 00:00:00 UTC";;
      }
}
  
