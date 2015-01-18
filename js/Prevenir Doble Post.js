//Posici�n: En todas las p�ginas
//########### ZONA EDITABLE ########### 
var mensajeAdvertencia = "El �ltimo mensaje del tema es tuyo, por lo que si public�s uno nuevo, cometer�s doble post. Solo se permite hacer doble post si el �ltimo mensaje del tema fue hecho hace 24 horas o m�s.\n\n�Est�s seguro de hacer doble post?";
//########### FIN ZONA EDITABLE ###########

$(document).ready(function () {
 if((/^\/t(\d+)/.test(location.pathname) || (/^\/post/.test(location.pathname) && $(".page-title")[0].innerHTML == "Publicar una respuesta")) && $("[value='Enviar']").length != 0){
 $("[value='Enviar']").attr("onclick","return prevenirDP();");
 }
});

function prevenirDP(){
 var ultimoAutor;
 if(/^\/t(\d+)/.test(location.pathname)){
 //Respuesta r�pida
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
 //�ltima p�gina
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