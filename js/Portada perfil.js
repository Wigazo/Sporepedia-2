//Posición: (Ninguna)
if (window.location.pathname.indexOf('/u') == 0) {
	$(document).ready(function() {
		/*** INICIO ZONA EDITABLE ***/
		var fieldID = 'field_id11';
		var defaultBacground = "http://img09.deviantart.net/ac2e/i/2012/140/e/4/an_awesome_scene_in_spore_space_stage_by_pikumin-d50h7o0.png";
		var conectedIMG = 'http://i.imgur.com/QglVEGE.png';
		var showRankIMG = true; //true ó false -- Mostar imagen/icono de rango o no
		/**** FIN ZONA EDITABLE ***/
		var fbcapa = "";
		$.get("/u" + location.pathname.match(/\/?u(\d+)/)[1], function(m) {
			var backgroundField = $(m).find('#' + fieldID + ' .field_uneditable').text();
			fbcapa = defaultBacground;
			if (backgroundField.length > 4) {
				fbcapa = backgroundField;
			}
			// if (string.length > 0) {
				// fbcapa = backgroundField;
			// }
		}).done(function() {
			$('div#main-content h1.page-title').before('<div style="background: url(' + fbcapa + ') no-repeat center center scroll;" id="fbfundo"><div ><table id="fbperfil"><tr><td rowspan="3" id="fbavatar"></td><td id="fbnome"></td></tr><tr><td id="fbrank"></td></tr><tr><td id="fbgrupo"></td></tr></table></div></div>');
			var mmodule = $('div#main-content div.module:first div.inner img[alt=""]').closest('.module');
			$('div#main-content #profile-advanced-right div.module:first div.inner img[alt=""]').appendTo($('#fbavatar'));
			$('div#main-content #profile-advanced-right div.module:first .h3:first').appendTo($('#fbnome'));
			($('div#main-content #profile-advanced-right div.module:first b'))?$('div#main-content #profile-advanced-right div.module:first b').appendTo($('#fbrank')):$('#fbrank').append($('div#main-content #profile-advanced-right div.module:first').text().split(":")[1]);
			if (showRankIMG) $('div#main-content #profile-advanced-right div.module:first div.inner img:last').appendTo($('#fbgrupo'));
			mmodule.remove();
			$(function() {
				var fbavatarduplo = [],
					imagemdupla;
				$("#fbfundo img").filter(function() {
					imagemdupla = $(this).attr("src");
					if ($.inArray(imagemdupla, fbavatarduplo) < 0) {
						fbavatarduplo.push(imagemdupla);
						return false
					}
					return true
				}).remove()
			});
			$("table#fbperfil tbody tr td#fbnome div.h3").html(function(_, html) {
				if (conectedIMG) return html.replace("(en línea)", "<img alt=' (En línea)' title=' (En línea)' src=" + conectedIMG + " />")
			});
			$(function() {
				var tabfbperfil = function() {
					$('#tabs li').click(function(e) {
						e.preventDefault();
						var url = this.firstChild.href;
						if (url == '#') return;
						$('#profile-advanced-left').load(url + ' #profile-advanced-details,#new-message', tabfbperfil)
					})
				};
				tabfbperfil();
			})
		})
	})
};