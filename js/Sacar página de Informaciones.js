//Posici�n: En todas las p�ginas
$("meta[http-equiv='refresh'][content]:first").each(function(){window.location.href=$(this).attr("content").replace(/^.*;url=/,"")});