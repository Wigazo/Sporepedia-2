//Posición: En todas las páginas
$(function() {
	if (location.search == "?mode=editprofile&page_profil=preferences" && window.localStorage) {
		var preferencias = [{
			nombre: "cursor_spore",
			cartel: "Usar cursor de Spore",
			valor_defecto: 0
		}, {
			nombre: "fondo_alternativo",
			cartel: "Usar fondo alternativo",
			valor_defecto: 0
		}, {
			nombre: "sonido_notificacion",
			cartel: "Sonido de notificación",
			valor_defecto: 1
		}];
		
		for (var i = 0; i < preferencias.length; i++) {
			if (localStorage.getItem(preferencias[i].nombre) == null) {
				localStorage.setItem(preferencias[i].nombre, preferencias[i].valor_defecto);
			}
			$("form#ucp fieldset:first").prepend('<dl><dt><label>' + preferencias[i].cartel + ': </label></dt> <dd> <label> <input type="radio" name="' + preferencias[i].nombre + '" value="1">Sí</label> <label> <input type="radio" name="' + preferencias[i].nombre + '" value="0">No</label> <br><span class="italic">Esta opción no se guarda en tu perfil, sino en las cookies de tu navegador. Así que si las borrás o usás otro navegador, esta opción estará en su valor por defecto ("' + (preferencias[i].valor_defecto? 'Sí' : 'No') + '").</span> </dd></dl>');
			$("form#ucp input:radio[name ='" + preferencias[i].nombre + "'][value='" + localStorage.getItem(preferencias[i].nombre) + "']").attr("checked", "checked");	
		}
		$("form#ucp").submit(function() {
			for (var i = 0; i < preferencias.length; i++) {
				localStorage.setItem(preferencias[i].nombre, $("form#ucp input:radio[name ='" + preferencias[i].nombre + "']:checked").val());
			}
			return true;
		});
	}
});