//Posición: En todas las páginas
var metaTags = document.getElementsByTagName("meta");
var mobMeta = false;
for (var i = 0, j = metaTags.length; i < j; i++) {
    if (metaTags[i].getAttribute("name") == "viewport") {
        mobMeta = true;
        break;
    }
}
if (!mobMeta) {
//Solo se ejecuta en versión de escritorio

var bannerAleatorio = function() {
    if (localStorage.getItem("banners") !== null && new Date().getTime() - JSON.parse(localStorage.getItem("banners")).ultimaActualizacion < 1000 * 60 * 60 * 24 * 15) {
        var banners = JSON.parse(localStorage.getItem("banners")).lista;
        var banner = banners[Math.floor(Math.random() * banners.length)];
        $('#logo img').attr("src", banner.link);
        if (/^u\d+$/.test(banner.description)) {
            //Banner usuario
            $.get(banner.description, function(data) {
                tooltipBanner("<a href='" + this.url + "'>" + data.split("<title>Perfil - ")[1].split("</title>")[0] + "</a>");
            });
        } else {
            //Banner creación concurso
            tooltipBanner(banner.description);
        }
    } else {
        //Descargar lista banners si no está guardada o tiene más de 15 días
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.imgur.com/3/album/J29OG/images');
        xhr.setRequestHeader('Authorization', 'Client-ID 2800bab5227ab24');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var imgAlbum = JSON.parse(xhr.responseText).data;
                    var banners = {
                        "ultimaActualizacion": new Date().getTime(),
                        "lista": []
                    };
                    for (var i = 0; i < imgAlbum.length; i++) {
                        banners.lista.push({
                            link: imgAlbum[i].link,
                            description: imgAlbum[i].description
                        });
                    }
                    localStorage.setItem("banners", JSON.stringify(banners));
                    bannerAleatorio();
                }
            }
        };
        xhr.send();
    }
};

var tooltipBanner = function(tooltip) {
    if (tooltip !== null) {
        $('#logo img').attr("title", "Sporepedia2");
        $("#logo img").tooltip({
            content: tooltip,
            position: {
                my: "left bottom",
                at: "left bottom"
            },
            show: 1000,
            close: function(event, ui) {
                ui.tooltip.hover(
                    function() {
                        $(this).stop(true).fadeTo(500, 1);
                    },
                    function() {
                        $(this).remove();
                    }
                );
            }
        });
    }
};


$(function() {
    if (window.localStorage) {
        bannerAleatorio();
    }
});


}