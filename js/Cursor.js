//Posición: En todas las páginas
$(document).ready(function() {
    if (window.localStorage && localStorage.getItem('cursor_spore') == 1) {
        $("body").append("<style>.ajax-profil_edit,.ajax-profil_valid,.friend-block .avatar,.postbody ul.profile-icons img,[onclick],a,input:not(.inputbox),select{cursor:url(http://i.imgur.com/nKKxXP9.png),auto!important}.resizebox,body,label{cursor:url(http://i.imgur.com/xSrZm5i.png),auto!important}</style>");
    }
});