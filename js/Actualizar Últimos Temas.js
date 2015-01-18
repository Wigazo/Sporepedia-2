//Posición: En todas las páginas
function actualizarUT(){
    $("#soton")[0].outerHTML = '<img src="http://i.imgur.com/LJ7Nuqs.gif">';
    $("#widget-ultimos-temas").load(location.pathname + " #widget-ultimos-temas", function(){
        $("#widget-ultimos-temas").replaceWith($("#widget-ultimos-temas").html());
    })
}