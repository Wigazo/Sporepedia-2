//Posición: En todas las páginas
//########### ZONA EDITABLE ########### 
var mensajeAdvertencia = "El último mensaje del tema es tuyo, por lo que si publicás uno nuevo, cometerás doble post. Solo se permite hacer doble post si el último mensaje del tema fue hecho hace 24 horas o más.\n\n¿Estás seguro de hacer doble post?";
//########### FIN ZONA EDITABLE ###########

$(document).ready(function () {
 if((/^\/t(\d+)/.test(location.pathname) || (/^\/post/.test(location.pathname) && $(".page-title")[0].innerHTML == "Publicar una respuesta")) && $("[value='Enviar']").length != 0){
 $("[value='Enviar']").attr("onclick","return prevenirDP();");
 }
});

function prevenirDP(){
 var ultimoAutor;
 if(/^\/t(\d+)/.test(location.pathname)){
 //Respuesta rápida
 if($(".pagination")[1].getElementsByTagName("strong")[0].innerHTML != $(".pagination")[1].getElementsByTagName("strong")[1].innerHTML){
 var hrefLastPage = $(".pagination")[1].getElementsByTagName("a")[$(".pagination")[1].getElementsByTagName("a").length-2].href;
 var oculto = document.createElement('div');
 oculto.id = "oculto";
 document.body.appendChild(oculto);
 $("#oculto").load(hrefLastPage + " .author:last", function() {
 ultimoAutor = $(".author:last")[0].children[1];
 if(ultimoAutor.children.length == 1){
 ultimoAutor = ultimoAutor.children[0].children[0].innerHTML;
 }else{
 ultimoAutor = ultimoAutor.innerHTML;
 }
 if(ultimoAutor == _userdata["username"]){
 $("[value='Enviar']").attr("onclick","return(confirm(mensajeAdvertencia));");
 }else{
 $("[value='Enviar']").attr("onclick","return true;");
 }
 $("[value='Enviar']").click();
 });
 return false;
 }else{
 //Última página
 ultimoAutor = $(".author:last")[0].children[1];
 if(ultimoAutor.children.length == 1){
 ultimoAutor = ultimoAutor.children[0].children[0].innerHTML;
 }else{
 ultimoAutor = ultimoAutor.innerHTML;
 }
 }
 }else{
 ultimoAutor = $(".author")[0];
 if(ultimoAutor.children.length == 2){
 ultimoAutor = ultimoAutor.children[1].children[0].innerHTML;
 }else{
 ultimoAutor = ultimoAutor.innerHTML.split(" por ")[1];
 ultimoAutor = ultimoAutor.substr(0,ultimoAutor.lastIndexOf(" el "));
 }
 }
 if(ultimoAutor == _userdata["username"]){
 return(confirm(mensajeAdvertencia));
 }else{
 return true;
 }
}