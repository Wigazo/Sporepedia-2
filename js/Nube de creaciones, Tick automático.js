//Posici�n: En todas las p�ginas
//Para nubeCreaciones.user.js (y otros posibles usos)
$(document).ready(function () {
    if (location.href.match(/&tick=true/)) {
        document.forms['post'].post_icon_1.checked=true;
        $('.submit-buttons input[name="post"]').click()
    }
});




});