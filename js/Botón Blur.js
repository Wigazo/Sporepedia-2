//Posición: En todas las páginas
$(window).load(function (){
    var blurInterval = setInterval(function (){
       if(document.getElementsByClassName("sceditor-button-paletaavanzada").length){
            clearInterval(blurInterval);
            $(".sceditor-button-strike").parent().append('<a onclick="blurSelected()" id="sceditor-button-blur" class="sceditor-button" style="background-image:url(http://i.imgur.com/tZKLF6a.png);"></a>');
        }
    }, 100);
});

function blurSelected(){
	var i = $("textarea")[1];
	i.value = i.value.substring(0,i.selectionStart) + "[blur]" +  i.value.substring(i.selectionStart,i.selectionEnd) + "[/blur]" + i.value.substring(i.selectionEnd,i.value.length);
	i.selectionEnd += 6;
	i.selectionStart = i.selectionEnd;
}