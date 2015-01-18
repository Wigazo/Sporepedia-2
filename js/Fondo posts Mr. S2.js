//Posición: En todas las páginas
$(function(){
    $("p.author").filter(":contains('"+ "Mr. S2" + "')").closest(".post").addClass('pmrs2');
});