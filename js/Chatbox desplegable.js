//Posición: En todas las páginas
var imagen_chatbox_desplegable = "http://i.imgur.com/F93dS4D.png";

document.write("<div id=\"chatbox_ret_cont\" class=\"chatbox_derecha\">");
document.write("    <div onclick=\"
(document.getElementById('chatbox_ret').style.display=='block')?my_setcookie('chatbox_ret','0',0,0):my_setcookie('chatbox_ret','1',1,0); ; jQuery('#chatbox_ret').toggle('normal');\" >");
document.write("        <span id=\"chatbox_ret_online\">");
document.write("            <img title=\"Abrir/Cerrar el Chat\" src=\"" + imagen_chatbox_desplegable + "\">");
document.write("        <\/span>");
document.write("        <span id=\"chatbox_ret_offline\"><\/span>");
document.write("    <\/div>");
document.write("    <iframe src=\"\/chatbox\" id=\"chatbox_ret\" name=\"chatbox_ret\" ");
document.write("       scrolling=\"no\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"1px\"");
document.write("       onload=\"if(cb_new){cb_start();cb_new=0;}\">");
document.write("    <\/iframe>");
document.write("<\/div>");