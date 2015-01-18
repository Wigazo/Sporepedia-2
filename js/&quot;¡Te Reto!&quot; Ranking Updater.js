//Posición: En todas las páginas
if(document.URL == "http://www.sporepedia2.com/post?p=92061&mode=editpost"){


	var tabla;
	var postIni;
	var postFin;
	var cambios = new Array();

	$(document).ready(function () {
		$(".panel.row2").after("<div class='h3'>\"¡Te Reto!\" Ranking Updater</div><div class='panel row3' id='trru' />");
		$("#trru").append("<button id='cargar'>CARGAR TABLA</button>");
		$("#cargar")[0].addEventListener("click", cargarTabla, false);	
	});

	function cargarTabla(){
		$("#cargar").remove();
		cambios = new Array();

		//Cargar tabla
		postIni = $("textarea")[1].value.split("[table border=\"1\"][tr][td][b]Nº[/b][/td][td][b]Usuario[/b][/td][td][b]Puntaje[/b][/td][td][b][color=#00ff00]Ganados[/color][/b][/td][td][b][color=#ff0000]Perdidos[/color][/b][/td][/tr]");
		postFin = postIni[1].split("[/table]");
		tabla = postFin[0];
		postIni = postIni[0];
		postFin = postFin[1];
		while(tabla.indexOf("[/tr]")>-1){
			tabla = tabla.replace("[/tr]","");
		}
		while(tabla.indexOf("[/td]")>-1){
			tabla = tabla.replace("[/td]","");
		}
		tabla = tabla.split("[tr]");
		tabla.splice(0, 1);
		for(var i = 0; i < tabla.length; i++){
			tabla[i] = tabla[i].split("[td]");
			tabla[i].splice(0, 1);
		}
		
		//UI
		$("textarea")[1].setAttribute("disabled","true");
		$("textarea")[1].value = "ACTUALIZANDO RANKING";
		$(".panel.row2").hide();
		$("#trru").append("<label>Usuarios:</label>");
		$("#trru").append("<select id='user-list' />");
		$("#trru").append("<br>");
		$("#trru").append("<br id='brG'>");
		$("#trru").append("<button id='mas1G' style='background-color: #00ff00; border-color: #00ff00; width: 80px;'>+1 Ganado</button>");
		$("#mas1G")[0].addEventListener("click", mas1G, false);
		$("#trru").append("<button id='menos1G' style='background-color: #80ff80; border-color: #80ff80; width: 80px;'>-1 Ganado</button>");
		$("#menos1G")[0].addEventListener("click", menos1G, false);
		$("#trru").append("<br id='brP'>");
		$("#trru").append("<button id='mas1P' style='background-color: #ff0000; border-color: #ff0000; width: 80px;'>+1 Perdido</button>");
		$("#mas1P")[0].addEventListener("click", mas1P, false);
		$("#trru").append("<button id='menos1P' style='background-color: #ff8080; border-color: #ff8080; width: 80px;'>-1 Perdido</button>");
		$("#menos1P")[0].addEventListener("click", menos1P, false);
		$("#trru").append("<hr class='dashed'>");
		$("#trru").append("<input class='inputbox' type='text' id='user-id' placeholder='ID de usuario' style='width: 70px;' />");
		$("#trru").append("<button id='agregar'>Agregar usuario</button>");
		$("#agregar")[0].addEventListener("click", agregarUsuario, false);
		$("#trru").append("<hr class='dashed'>");
		$("#trru").append("<label>Cambios realizados:</label>");
		$("#trru").append("<br>");
		$("#trru").append("<textarea readonly class='inputbox' style='height: 120px; width: 220px; resize: none;' id='cambios'></textarea>");
		$("#trru").append("<hr class='dashed'>");
		$("#trru").append("<button id='aplicar'>Aplicar cambios</button>");
		$("#aplicar")[0].addEventListener("click", aplicarCambios, false);
		
		//Cargar usuarios en lista
		var usuario;
		for(var i = 0; i < tabla.length; i++){
			usuario = tabla[i][1].substr(tabla[i][1].indexOf(']')+1).split("[/url]")[0];
			$("#user-list").append("<option>" + usuario + "</option>");
			cambios.push([]);
		}
		
		/*REVISANDO NICKS (Consume mucho tiempo y tira el error "Request limit exceeded")
		var id;
		var usuario;
		for(var i = 0; i < tabla.length; i++){
			id = tabla[i][1].split("/u")[1].split("]")[0];
			usuario = nombre(id);
			tabla[i][1] = "[url=http://www.sporepedia2.com/u" + id + "]" + usuario + "[/url]";
			$("#user-list").append("<option>"  + usuario + "</option>");
		}*/
	}

	function agregarUsuario(){
		$("#agregar").remove();
		$("#user-id").after("<button id='agregar'>Agregar usuario</button>");
		$("#agregar")[0].addEventListener("click", agregarUsuario, false);
		
		var id = $("#user-id").val();
		var usuario = nombre(id);
		if(usuario != "Error23"){
			tabla.push(["0","[url=http://www.sporepedia2.com/u" + id + "]" + usuario + "[/url]","0","0","0"]);
			$("#user-list").append("<option>" + usuario + "</option>");
			$("#user-list")[0].selectedIndex = $("#user-list")[0].length - 1;
			cambios.push([]);
			cambios[$("#user-list")[0].selectedIndex][0] = true;
			actualizarCambios();
		}else{
			alert("Error: El ID ingresado (" + id + ") no es válido.");
		}
		$("#user-id").val("");
	}

	function nombre(id){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://www.sporepedia2.com/u"+id, false);
		xhr.send();
		if(xhr.response.indexOf("<title>Perfil - ") > -1){
			return(xhr.response.split("<title>Perfil - ")[1].split("</title>")[0]);
		}else{
			return("Error23");
		}
	}

	function mas1G(){
		$("#mas1G").remove();
		$("#brG").after("<button id='mas1G' style='background-color: #00ff00; border-color: #00ff00; width: 80px;'>+1 Ganado</button>");
		$("#mas1G")[0].addEventListener("click", mas1G, false);

		tabla[$("#user-list")[0].selectedIndex][3]++;
		if(cambios[$("#user-list")[0].selectedIndex][1]){
			cambios[$("#user-list")[0].selectedIndex][1]++;
			if(cambios[$("#user-list")[0].selectedIndex][1] == 0){
				cambios[$("#user-list")[0].selectedIndex][1] = undefined;
			}
		}else{
			cambios[$("#user-list")[0].selectedIndex][1] = 1;
		}
		actualizarCambios();
	}

	function menos1G(){
		$("#menos1G").remove();
		$("#mas1G").after("<button id='menos1G' style='background-color: #80ff80; border-color: #80ff80; width: 80px;'>-1 Ganado</button>");
		$("#menos1G")[0].addEventListener("click", menos1G, false);

		tabla[$("#user-list")[0].selectedIndex][3]--;
		if(cambios[$("#user-list")[0].selectedIndex][1]){
			cambios[$("#user-list")[0].selectedIndex][1]--;
			if(cambios[$("#user-list")[0].selectedIndex][1] == 0){
				cambios[$("#user-list")[0].selectedIndex][1] = undefined;
			}
		}else{
			cambios[$("#user-list")[0].selectedIndex][1] = -1;
		}
		actualizarCambios();
	}

	function mas1P(){
		$("#mas1P").remove();
		$("#brP").after("<button id='mas1P' style='background-color: #ff0000; border-color: #ff0000; width: 80px;'>+1 Perdido</button>");
		$("#mas1P")[0].addEventListener("click", mas1P, false);

		tabla[$("#user-list")[0].selectedIndex][4]++;
		if(cambios[$("#user-list")[0].selectedIndex][2]){
			cambios[$("#user-list")[0].selectedIndex][2]++;
			if(cambios[$("#user-list")[0].selectedIndex][2] == 0){
				cambios[$("#user-list")[0].selectedIndex][2] = undefined;
			}
		}else{
			cambios[$("#user-list")[0].selectedIndex][2] = 1;
		}
		actualizarCambios();
	}

	function menos1P(){
		$("#menos1P").remove();
		$("#mas1P").after("<button id='menos1P' style='background-color: #ff8080; border-color: #ff8080; width: 80px;'>-1 Perdido</button>");
		$("#menos1P")[0].addEventListener("click", menos1P, false);

		tabla[$("#user-list")[0].selectedIndex][4]--;
		if(cambios[$("#user-list")[0].selectedIndex][2]){
			cambios[$("#user-list")[0].selectedIndex][2]--;
			if(cambios[$("#user-list")[0].selectedIndex][2] == 0){
				cambios[$("#user-list")[0].selectedIndex][2] = undefined;
			}
		}else{
			cambios[$("#user-list")[0].selectedIndex][2] = -1;
		}
		actualizarCambios();
	}

	function actualizarCambios(){
		var seleccionado = $("#user-list")[0].selectedIndex;
		$("#cambios").val("");
		for(var i = 0; i < cambios.length; i++){
			$("#user-list")[0].selectedIndex = i;
			if(cambios[i][0]){
				$("#cambios").val($("#cambios").val() + "* " + $("#user-list option:selected").text() + " agregado.\n");
			}
			if(cambios[i][1]){
				$("#cambios").val($("#cambios").val() + "* " + $("#user-list option:selected").text() + " : " + cambios[i][1] + " ganados.\n");
			}
			if(cambios[i][2]){
				$("#cambios").val($("#cambios").val() + "* " + $("#user-list option:selected").text() + " : " + cambios[i][2] + " perdidos.\n");
			}
		}
		$("#user-list")[0].selectedIndex = seleccionado;
	}

	function aplicarCambios(){
		$("#aplicar").remove();
		
		if(confirm("¿Aplicar cambios?\n\n"+$("#cambios").val())){
			//Calcular puntajes
			for(var i = 0; i < tabla.length; i++){
				tabla[i][2] = tabla[i][3] * 3 - tabla[i][4];
			}
			
			//Ordenar
			var swap;
			var aux;
			do{
				swap = false;
				for(var i = 0; i < tabla.length-1; i++){
					if(tabla[i][2] < tabla[i+1][2]){
						aux = tabla[i];
						tabla[i] = tabla[i+1];
						tabla[i+1] = aux;
						swap = true;
					}
				}
			}while(swap);
			
			//Calcular posición
			var pos = 1;
			tabla[0][0] = pos;
			for(var i = 1; i < tabla.length; i++){
				if(tabla[i][2] < tabla[i-1][2]){
					pos++;
				}
				tabla[i][0] = pos;
			}
			
			//Generar código
			var tablaCode;
			tablaCode = "[table border=\"1\"][tr][td][b]Nº[/b][/td][td][b]Usuario[/b][/td][td][b]Puntaje[/b][/td][td][b][color=#00ff00]Ganados[/color][/b][/td][td][b][color=#ff0000]Perdidos[/color][/b][/td][/tr]";
			for(var i = 0; i < tabla.length; i++){
				tablaCode += "[tr]";
				for(var j = 0; j < tabla[i].length; j++){
					tablaCode += "[td]";
					tablaCode += tabla[i][j];
					tablaCode += "[/td]";
				}	
				tablaCode += "[/tr]";
			}
			tablaCode += "[/table]";
			
			//Aplicar
			$("textarea")[1].removeAttribute("disabled");
			$("textarea")[1].value = postIni + tablaCode + postFin;
			$(".panel.row2").show();
			$("#trru")[0].innerHTML = "<button id='cargar'>CARGAR TABLA</button>";
			$("#cargar")[0].addEventListener("click", cargarTabla, false);
		}else{
			//No aplicar
			$("#trru").append("<button id='aplicar'>Aplicar cambios</button>");
			$("#aplicar")[0].addEventListener("click", aplicarCambios, false);
		}
	}


}