//Posición: En los temas
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