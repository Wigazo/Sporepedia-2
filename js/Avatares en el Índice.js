//Posición: En el indice
$(function(){
 
    if(!window.localStorage) return;
 
    // Avatar por defecto
    var default_avatar= 'http://i350.photobucket.com/albums/q409/juaner92/Spore/Alexandria.png';
 
    // Tiempo de cache, aqui 24 h * 60 m * 60 s * 1000 ms entonces un día
    var caching_time= 24*60*60*1000;
 
    // Tiempo de cache de un error, ici 60 s * 1000 ms entonces un minuto
    var caching_error= 60*1000;
 
    var set_avatar= function(id) {
        $('.mini_ava.member'+id).html('<img src="'+get_avatar(id)+'" />');
    };
 
    var get_avatar= function(id) {
        if(localStorage.getItem('t_ava'+id) < +new Date - caching_time || (localStorage.getItem('d_ava'+id)==default_avatar && localStorage.getItem('t_ava'+id) < +new Date - caching_error))
        {
            localStorage.setItem('d_ava'+id, default_avatar);
            $.get('/u'+id, function (d){
                localStorage.setItem('t_ava'+id,+new Date);
                localStorage.setItem('d_ava'+id, $('#profile-advanced-right .module:first div img:first,.forumline td.row1.gensmall:first > img, .frm-set.profile-view.left dd img,dl.left-box.details:first dd img, .row1 b .gen:first img, .real_avatar img',d).first().attr('src')||default_avatar);
                set_avatar(id);
            });
        }
        return localStorage.getItem('d_ava'+id);
    };
 
    var to_replace= {};
 
    $('dd.lastpost strong a.gensmall, .ipbtable tr td:last-child span strong a.gensmall, .table td.tcr strong a.gensmall, .forumline .row3.over strong a.gensmall').each(function(){
        to_replace[$(this).attr('href').substr(2)]= 1;
        $(this).closest('td,dd').prepend('<div class="mini_ava member'+$(this).attr('href').substr(2)+'"></div>');
    });
 
    for(i in to_replace)
    {
        set_avatar(i);
    };
 
});