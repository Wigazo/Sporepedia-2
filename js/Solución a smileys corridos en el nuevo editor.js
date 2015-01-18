//Posición: En todas las páginas
$(function() {
  var a = $("#text_editor_textarea");
  a.length && ((t = a.val()) && $(function() {
    a.sceditor && a.sceditor("instance") && a.sceditor("instance").val(t)
  }), $(function(){ a.closest("form").submit(function() {
    t = a.val();
    (t.indexOf("[/qu"+"ote]") + 1 || t.indexOf("[/c"+"ode]") + 1) && a.val(t.replace(/\[\/(quote|code)\]/g, "[/$1]\n"))
  })}))
});