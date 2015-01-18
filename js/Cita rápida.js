//Posición: En todas las páginas
$(function() {
    if (typeof(document.post) != "undefined") {
        $(".i_icon_quote").attr("src", "http://i.imgur.com/xgilu4i.png"); //X
        $(".i_icon_quote").after('<img src="http://i.imgur.com/lPorVBd.png" class="i_icon_quick_quote" alt="Cita rápida" title="Cita rápida">');

        $(".i_icon_quick_quote").click(function() {
            var auxThis = this;
            $(auxThis).attr("src", "http://i.imgur.com/udseDRD.gif");
            $.get(auxThis.parentNode.href, function(data) {
                $('#text_editor_textarea').sceditor("instance").insertText($("#text_editor_textarea", $(data)).text() + "\n");
                location.hash = "#";
                location.hash = "#" + auxThis.parentNode.href.split("/post?p=")[1].split("&mode=quote")[0];
                $(auxThis).attr("src", "http://i.imgur.com/lPorVBd.png");
            });
            return false;
        });
    }
});