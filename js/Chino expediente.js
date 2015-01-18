//Posición: En todas las páginas
$(document).ready(function(){
	if(location.pathname.indexOf("/u") == 0 && document.title.indexOf("Perfil - ") == 0 && $("#profile_field_2_5").val().indexOf("http://www.sporepedia2.com/t") == 0 && _userdata.user_level == 1){
		$("#field_id5 dt").append("<a id='chino-expediente' href='javascript:expediente();'><img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/3234167965.png'></a>")
	}
});

function expediente(){
	$("#profile_field_2_5").mouseover();
	$(".ajax-profil_edit").click();
	var url = $("#profile_field_2_5").val().split("\n")[0];
	$("#profile_field_2_5").val($("#profile_field_2_5").val().replace(url, "[url=" + url + "][b]Expediente[/b][/url]"));
	$(".ajax-profil_valid").click();
	$("#chino-expediente").remove();
}