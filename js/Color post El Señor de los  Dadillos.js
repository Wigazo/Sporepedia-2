//Posici�n: En todas las p�ginas
$(function(){
    $("p.author").filter(":contains('"+ "El Se�or de los Dadillos" + "')").closest(".post").addClass('cdadillos');
});