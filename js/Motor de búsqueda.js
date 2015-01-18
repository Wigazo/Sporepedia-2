//Posición: En todas las páginas
$(function () {

 var cx = '015531333442914439997:s3nqjr9qptg';
 

$("div#search-box").html("<div id='my_gs'><gcse:search></gcse:search></div>");
 
var gcse = document.createElement('script');
 gcse.type = 'text/javascript';
 gcse.async = true;
 gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
 '//www.google.com/cse/cse.js?cx=' + cx;
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(gcse, s);
});