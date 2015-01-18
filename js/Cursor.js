//Posición: En todas las páginas
$(document).ready(function() {

    if(!window.localStorage) return;

    if (localStorage.getItem('cursor_spore') == 1) {
        $("body").append("<style>.ajax-profil_edit,.ajax-profil_valid,.friend-block .avatar,.postbody ul.profile-icons img,[onclick],a,input:not(.inputbox),select{cursor:url(http://i.imgur.com/nKKxXP9.png),auto!important}.resizebox,body,label{cursor:url(http://i.imgur.com/xSrZm5i.png),auto!important}</style>");
    }

    if (location.search == "?mode=editprofile&page_profil=preferences") {
        $("form#ucp fieldset:first").prepend('<dl><dt><label>Usar cursor de Spore : </label></dt> <dd> <label> <input type="radio" name="cursor_spore" value="1">Sí</label> <label> <input type="radio" name="cursor_spore" value="0">No</label> <br><span class="italic">Esta opción no se guarda en tu perfil, sino en las cookies de tu navegador. Así que si las borrás o usás otro navegador, esta opción estará en su valor por defecto ("No").</span> </dd></dl>');
        if (localStorage.getItem('cursor_spore') == 1) {
            $("form#ucp input:radio[name ='cursor_spore'][value='1']").attr("checked", "checked");
        } else {
            $("form#ucp input:radio[name ='cursor_spore'][value='0']").attr("checked", "checked");
        }
        $("form#ucp").submit(function() {
            localStorage.setItem('cursor_spore', $("form#ucp input:radio[name ='cursor_spore']:checked").val());
            return true;
        });
    }

});