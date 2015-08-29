//Posición: En todas las páginas
$(document).ready(function() {

    if(!window.localStorage) return;

    if (localStorage.getItem('fondo_alternativo') == 1) {
        $("body")[0].style.backgroundImage = "url(http://i.imgur.com/YRaS7Hh.jpg)";
    }

    if (location.search == "?mode=editprofile&page_profil=preferences") {
        $("form#ucp fieldset:first").prepend('<dl><dt><label>Usar fondo alternativo: </label></dt> <dd> <label> <input type="radio" name="fondo_alternativo" value="1">Sí</label> <label> <input type="radio" name="fondo_alternativo" value="0">No</label> <br><span class="italic">Esta opción no se guarda en tu perfil, sino en las cookies de tu navegador. Así que si las borrás o usás otro navegador, esta opción estará en su valor por defecto ("No").</span> </dd></dl>');
        if (localStorage.getItem('fondo_alternativo') == 1) {
            $("form#ucp input:radio[name ='fondo_alternativo'][value='1']").attr("checked", "checked");
        } else {
            $("form#ucp input:radio[name ='fondo_alternativo'][value='0']").attr("checked", "checked");
        }
        $("form#ucp").submit(function() {
            localStorage.setItem('fondo_alternativo', $("form#ucp input:radio[name ='fondo_alternativo']:checked").val());
            return true;
        });
    }

});
