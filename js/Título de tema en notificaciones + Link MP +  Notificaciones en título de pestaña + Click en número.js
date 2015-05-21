//Posición: En todas las páginas
$(function() {$(function() {

    if (typeof(compileNotif) != "function" || typeof(refresh) != "function") return;
    var cn = compileNotif;
    Toolbar.compileNotif = compileNotif = function(b) {
        var a = cn(b);
        //Título de tema
        if (b.text.type == FA.Notification.NOTIF_TOPIC_WATCH || b.text.type == FA.Notification.NOTIF_MENTION) {
            if (b.text.type == FA.Notification.NOTIF_TOPIC_WATCH) {
                var textoViejo = 'un tema que estas vigilando';
            } else {
                var textoViejo = 'un mensaje';
            }
            var titulo = $("#widget-ultimos-temas > .inner > #comments_scroll_div > a[href^='/t" + b.text.post.topic_id + "']").html();
            if (typeof(titulo) != "string") {
                titulo = b.text.post.topic_name.replace(/-/g, " ");
            }
            a = a.replace(textoViejo, titulo);
            //Corección menciones: "en" dentro del link
            a = a.replace("en " + titulo, titulo);
            a = a.replace(" te ha mencionado ", " te ha mencionado en ");
        }
        //Link al MP
        if (b.text.type == FA.Notification.NOTIF_PRIV_MSG) {
            a = a.replace('folder=inbox', 'mode=read&p=' + b.text.msg_id);
        }
        return a;
    };

    //Número de notificaciones en título de la pestaña
    var r = refresh;
    Toolbar.refresh = refresh = function(o) {
        r(o);
        if (o.unread) {
            document.title = '(' + o.unread + ') ' + $("meta[name='title']")[0].content;
        } else {
            document.title = $("meta[name='title']")[0].content;
        }
    };

    //Click en número de notificaciones
    $("#notif_unread").click(function() {
        $("#fa_notifications").click();
    });

})});
