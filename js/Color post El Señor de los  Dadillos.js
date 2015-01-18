//Posición: En todas las páginas
$(function(){
    $("p.author").filter(":contains('"+ "El Señor de los Dadillos" + "')").closest(".post").addClass('cdadillos');
});