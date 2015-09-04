//Posición: En todas las páginas
if (window.localStorage && localStorage.getItem('fondo_alternativo') == 1) {
	$("body")[0].style.backgroundImage = "url(http://i.imgur.com/YRaS7Hh.jpg)";
}