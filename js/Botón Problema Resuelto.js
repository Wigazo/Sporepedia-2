//Posición: (Ninguna)
//TODO encontrar error y arreglarlo
//TODO usar window.name y "tick=true"

$(document).ready(function () {

	var wCerrar,wMover, wTick;
	var tCerrar, tMover, tTick, tMain;
	
	if($(".pathname-box")[0].outerHTML == "<div class=\"pathname-box\"><p><a class=\"nav\" href=\"/\">Sporepedia 2</a><a class=\"nav\" href=\"\"></a>&nbsp;::&nbsp;<a href=\"/c3-soporte-y-sugerencias\" class=\"nav\">Soporte y Sugerencias</a>&nbsp;::&nbsp;<a href=\"/f9-problemas-ayuda-y-preguntas\" class=\"nav\">Problemas,  Ayuda y Preguntas</a></p></div>"){
		$(".right")[$(".right").length-1].innerHTML += "<a id='problema-resuelto'><img src='http://img171.imageshack.us/img171/4724/tickspore.png' alt='Enviar a la papelera' title='Problema resuelto'><a>";
		$("#problema-resuelto")[0].addEventListener('click', problemaResuelto, true);
	}	

	function problemaResuelto(){
		wCerrar = window.open($(".right")[$(".right").length-1].getElementsByTagName("a")[3].getAttribute("href"),'1',"width=100,height=100,top=1,left=1"); 
		tCerrar = setInterval(revisarCerrar,100);
		wMover = window.open($(".right")[$(".right").length-1].getElementsByTagName("a")[2].getAttribute("href"),'2',"width=100,height=100,top=1,left=1"); 
		wMover.addEventListener('load', mover, true);
		wTick = window.open($(".profile-icons")[0].getElementsByTagName("a")[1].getAttribute("href"),'3',"width=100,height=100,top=1,left=1"); 
		wTick.addEventListener('load', tick, true);
		tMain = setInterval(revisarFin,1000);
	}


	function mover(){
		wMover.$("select")[1].selectedIndex = 46;
		
		wMover.$(".button2")[2].click();
		tMover = setInterval(revisarMover,100);
	}
	
	function tick(){
		wTick.$("#post_icon_1")[0].click();
		wTick.$("input[name='post']").click();
		tTick = setInterval(revisarTick,100);
	}
		
	function revisarCerrar(){
		if(wCerrar.document.URL.indexOf("/t") > -1){
			wCerrar.close();
			clearInterval(tCerrar);
		}
	}
		
	function revisarMover(){
		if(wMover.document.URL.indexOf("mode=move") == -1){
			wMover.close();
			clearInterval(tMover);
		}
	}
		
	function revisarTick(){
		if(wTick.document.URL.indexOf("/t") > -1){
			wTick.close();
			clearInterval(tTick);
		}
	}
	 
	function revisarFin(){
		if(wCerrar.closed && wMover.closed && wTick.closed){
			clearInterval(tMain);
			$("textarea")[1].value += "\n[table style=\"moz-border-radius:15px;-webkit-border-radius:15px;background:url(http://bit.ly/acLmW9);border-radius:15px;border-style:solid;border-width:1px;font-weight:700;margin:10px auto auto;padding:5px;width:90% moz-box-shadow:1px 1px 10px #F60;-webkit-box-shadow:1px 1px 10px #1F6100;border-color:#1F6100;box-shadow:1px 1px 10px green;color:#4ccf60\"][tr][td][img]http://img16.imageshack.us/img16/2631/aceptadas.png[/img][/td][td][b][color=lime]Problema Resuelto[/color][/b] :cerrado:[/td][/tr][/table]\n\n";
			$("input[name='post']").click();
		}
	}
	
});