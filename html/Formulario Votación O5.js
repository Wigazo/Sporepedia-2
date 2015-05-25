<!--
    Título: Formulario Votación O4
    ¿Deseas utilizar la parte alta y la parte baja de la página de tu foro? No
    ¿Utilizar esta página como índice? No
-->
<html>
	<head>
        <meta charset='utf-8'> 
		<link rel="stylesheet" type="text/css" href="77-ltr.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script>
			var categorias =
			[{
				"categoria": "Criatura",
				"creaciones": [{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15211-risbon-o4"
				},
				{
					"nick": "julia911",
					"url": "http://www.sporepedia2.com/t15184-lertih-jut-subespecies-o4"
				},
				{
					"nick": "Rhinestone [JDF]",
					"url": "http://www.sporepedia2.com/t15065-espectro-grumoso-o4"
				},
				{
					"nick": "Miguelcho",
					"url": "http://www.sporepedia2.com/t15060-worker-o4"
				},
				{
					"nick": "Imaotaku",
					"url": "http://www.sporepedia2.com/t15084-yakutemo-o4"
				},
				{
					"nick": "bgc123",
					"url": "http://www.sporepedia2.com/t15363-hijo-de-la-anti-materia-febeo-o4"
				},
				{
					"nick": "Alegorn",
					"url": "http://www.sporepedia2.com/t15404-hunter-o4"
				},
				{
					"nick": "CefaloSapiens",
					"url": "http://www.sporepedia2.com/t15455-baobatl-o4"
				},
				{
					"nick": "carlosalianza",
					"url": "http://www.sporepedia2.com/t15456-balvenido-o4"
				}]
			},
			{
				"categoria": "Capitán",
				"creaciones": [{
					"nick": "CefaloSapiens",
					"url": "http://www.sporepedia2.com/t15144-shogun-ertaco-o4-c"
				},
				{
					"nick": "Miguelcho",
					"url": "http://www.sporepedia2.com/t15080-intimidatrox-o4-c"
				},
				{
					"nick": "Rhinestone [JDF]",
					"url": "http://www.sporepedia2.com/t15354-etear-o4c"
				},
				{
					"nick": "bgc123",
					"url": "http://www.sporepedia2.com/t15377-capitan-isca-o4c"
				},
				{
					"nick": "Alegorn",
					"url": "http://www.sporepedia2.com/t15418-psicomante-o4-c"
				},
				{
					"nick": "Imaotaku",
					"url": "http://www.sporepedia2.com/t15426-yakutemo-evolucionado-o4#299197"
				}]
			},
			{
				"categoria": "Vehículo Terrestre",
				"creaciones": [{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15373-derpy-hooveso4t"
				},
				{
					"nick": "bgc123",
					"url": "http://www.sporepedia2.com/t15386-mafia-galactica-o4t"
				},
				{
					"nick": "Liam Jane Holland",
					"url": "http://www.sporepedia2.com/t15462-derpy-golem-o4-t"
				},
				{
					"nick": "CefaloSapiens",
					"url": "http://www.sporepedia2.com/t15484-glaidik-o4-t"
				},
				{
					"nick": "Tomás Kapo Spore 2011",
					"url": "http://www.sporepedia2.com/t15486-soldifier-o4-t"
				}]
			},
			{
				"categoria": "Vehículo Marítimo",
				"creaciones": [{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15353-plastro-o4m"
				},
				{
					"nick": "CefaloSapiens",
					"url": "http://www.sporepedia2.com/t15485-jutjakers-o4-m"
				},
				{
					"nick": "Tomás Kapo Spore 2011",
					"url": "http://www.sporepedia2.com/t15488-bloaster-o4-m"
				}]
			},
			{
				"categoria": "Vehículo Aéreo",
				"creaciones": [{
					"nick": "Rhinestone [JDF]",
					"url": "http://www.sporepedia2.com/t15371-g-damm-a-o4"
				},
				{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15362-rainbow-dash-o4a"
				},
				{
					"nick": "Surcus [A]",
					"url": "http://www.sporepedia2.com/t15380-selk-de-batalla-o4a"
				},
				{
					"nick": "CefaloSapiens",
					"url": "http://www.sporepedia2.com/t15460-la-bishazka-04-a"
				}]
			},
			{
				"categoria": "Nave Espacial",
				"creaciones": [{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15301-sobrecargaoo4"
				},
				{
					"nick": "Marcob2 [DCF]",
					"url": "http://www.sporepedia2.com/t15414-pirana-estelar-o4"
				}]
			},
			{
				"categoria": "Edificio",
				"creaciones": [{
					"nick": "Liam Jane Holland",
					"url": "http://www.sporepedia2.com/t15229-torre-de-rapunzel-o4"
				},
				{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15402-scootalooo4http://www.sporepedia2.com/t15402-scootalooo4"
				},
				{
					"nick": "Alegorn",
					"url": "http://www.sporepedia2.com/t15394-estatua-enana-o4"
				},
				{
					"nick": "Giroth",
					"url": "http://www.sporepedia2.com/t15464-gragern-o4"
				}]
			},
			{
				"categoria": "Himno",
				"creaciones": [{
					"nick": "Imaotaku",
					"url": "http://www.sporepedia2.com/t15266-ost-de-ilua-o4"
				},
				{
					"nick": "dekarserverbot",
					"url": "http://www.sporepedia2.com/t15350-mario-painto4"
				},
				{
					"nick": "Surcus [A]",
					"url": "http://www.sporepedia2.com/t15401-dont-sleep-o4"
				}]
			},];
		
			$(document).ready(function(){
				for(var i = 0; i < categorias.length; i++){
							$("body")[0].innerHTML += '<div class="h3">' + categorias[i].categoria + '</div>';
					$("body")[0].innerHTML += '<input type="radio" name="' + categorias[i].categoria + '" value="<i>Ninguna</i>" checked><i> Ninguna</i></input>';
					for(var j = 0; j < categorias[i].creaciones.length; j++){
						$("body")[0].innerHTML += '<br><input type="radio" name="' + categorias[i].categoria + '" value="' + categorias[i].creaciones[j].nick + '"><a href="' + categorias[i].creaciones[j].url + '" target="_blank"> ' + categorias[i].creaciones[j].nick + '</a></input>';
					}
					$("body")[0].innerHTML += '<hr><b>Observaciones:</b>';
					$("body")[0].innerHTML += '<br><textarea name="' + categorias[i].categoria + '" class="inputbox" placeholder="Escriba la razón de su elección..."></textarea>';
				}
				$("body")[0].innerHTML += '<div class="h3"></div>';
				$("body")[0].innerHTML += '<button onclick="enviarVotacion()" style="background-color: #B3b3b3; border-color: #B3B3B3;">Enviar</button>';                    
			});
			
			function enviarVotacion(){
				$('textarea').filter(function(){return this.value!=''}).css("border", "");
				if($('textarea').filter(function(){return this.value==''}).length){
						$('textarea').filter(function(){return this.value==''}).css("border", "3px solid red");
						alert("Debés llenar todos los campos de observaciones, incluso en las categorías donde no votás por ninguna creación(debés explicar el por qué de esto)."); 
				} else {
						var texto = "<u>Mi votación</u>";
						for(var i = 0; i < categorias.length; i++){
								texto +=  "\n\n<b>" +  categorias[i].categoria + ":</b> ";
								texto += $('input[name="' + categorias[i].categoria + '"]:checked').val();
								texto += "\n<i>" + $('textarea[name="' +  categorias[i].categoria + '"]').val() + "</i>";
						}
						parent.$("textarea").val(texto);
						parent.$("[value='Enviar']").click();
				}
			}
		</script>
	</head>
	<body style="background-color: #3D3D3D; background-image: none; padding-left: 10px; padding-right: 10px;"></body>
</html>
