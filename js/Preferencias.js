//Posici�n: En todas las p�ginas
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
			cartel: "Sonido de notificaci�n",
			valor_defecto: 1
		}];
		
		for (var i = 0; i < preferencias.length; i++) {
			if (localStorage.getItem(preferencias[i].nombre) == null) {
				localStorage.setItem(preferencias[i].nombre, preferencias[i].valor_defecto);
			}
			$("form#ucp fieldset:first").prepend('<dl><dt><label>' + preferencias[i].cartel + ': </label></dt> <dd> <label> <input type="radio" name="' + preferencias[i].nombre + '" value="1">S�</label> <label> <input type="radio" name="' + preferencias[i].nombre + '" value="0">No</label> <br><span class="italic">Esta opci�n no se guarda en tu perfil, sino en las cookies de tu navegador. As� que si las borr�s o us�s otro navegador, esta opci�n estar� en su valor por defecto ("' + (preferencias[i].valor_defecto? 'S�' : 'No') + '").</span> </dd></dl>');
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