//Posici�n: En todas las p�ginas
$(function(){
    $("p.author").filter(":contains('"+ "Mr. S2" + "')").closest(".post").addClass('pmrs2');
});