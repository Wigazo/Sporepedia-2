//Posición: En todas las páginas
$(document).ready(function () {
    if ($("#text_editor_textarea").length != 0) { 

        var botonSporedom = '<a id="botonSporedom" class="sceditor-font-option" onclick="insertarSporedom()"><img src="http://i.imgur.com/eej5l7v.png"></a>';

        $.sceditor.commands.font._dropDown = function (editor,caller,callback){var fonts=editor.opts.fonts.split(","),content=$('<div class="url" />'),clickFunc=function(){callback($(this).data('font'));editor.closeDropDown(true);return false};for(var i=0;i<fonts.length;i++)content.append($('<a class="sceditor-font-option" href="#" data-font="'+fonts[i]+'"><font face="'+fonts[i]+'">'+fonts[i]+'</font></a>').click(clickFunc));content.append(botonSporedom);editor.createDropDown(caller,"font-picker",content)};

    }
});

function insertarSporedom(){
    var i = $("textarea")[1];
    i.value = i.value.substring(0,i.selectionStart) + "<span class='Sporedom'>" +  i.value.substring(i.selectionStart,i.selectionEnd) + "</span>" + i.value.substring(i.selectionEnd,i.value.length);
   i.selectionEnd += 23;
   i.selectionStart = i.selectionEnd;
}