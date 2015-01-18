//Posición: En los temas
//BORRAR
var script = document.createElement('script');
script.src = 'http://code.jquery.com/ui/1.11.2/jquery-ui.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var link = document.createElement('link');
link.href = 'http://code.jquery.com/ui/1.10.2/themes/vader/jquery-ui.min.css';
link.rel = 'stylesheet';
link.id = 'ui-theme';
document.getElementsByTagName('head')[0].appendChild(link);
//

function citar(pid){
	var contenido = $("#p" + pid + " .content div").html();
	var autor = $("#p" + pid + " .author")[0].children[1];
	if (autor.children.length == 1) {
		autor = autor.children[0].children[0].innerHTML;
	} else {
		autor = autor.innerHTML;
	}
	var cita = '[quote="' + autor + '"]' + contenido + '[/quote]';
	$("<p title='Cita'><textarea class='quote" + pid + "' style='width:367px;height:88px;background-color:#364236;color: #bbbdbc;'></textarea></p>").dialog({width:400, height:150});
	$(".quote" + pid).text(cita);
	$(".quote" + pid).select();
}


$(document).ready(function () {
if(typeof(document.post) == "undefined"){
	
	$(".i_icon_quote").each(function(){
		this.parentNode.href = "javascript:citar(" + this.parentNode.href.split("?p=")[1].split("&mode=quote")[0] + ")";
	});
	
}
});