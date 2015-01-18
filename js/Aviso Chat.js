//Posición: (Ninguna)
$(function() {
  setTimeout(function() {
    for(var c = 0, a = 0;a < window.frames.length;a++) {
      try {
        "/chatbox/index.forum" == eval("window.frames[a].location.pathname") && ++c && window.frames[a].eval('function ajax_refresh_chatbox(b,c){if(""==b||void 0==b)b="?achives=0";if(window.XMLHttpRequest)var a=new XMLHttpRequest;else window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP"));a.onreadystatechange=function(){if(4==a.readyState&&200==a.status&&(eval(a.responseText),chatbox_last_update>chatbox_updated||c))null!=document.getElementById("chatbox").innerHTML&&chatbox_messages_old!=chatbox_messages&&(my_setcookie("CNM",1,1,0),chatbox_messages_old=document.getElementById("chatbox").innerHTML=chatbox_messages,document.getElementById("chatbox").scrollTop=document.getElementById("chatbox").scrollHeight+document.getElementById("chatbox").offsetHeight,document.getElementById("chatbox").scrollTop=999999),null!=document.getElementById("chatbox_members").innerHTML&&(document.getElementById("chatbox_members").innerHTML=chatbox_memberlist),chatbox_updated=chatbox_last_update};a.open("GET","/chatbox/chatbox_actions.forum"+b+"&mode=refresh",!0);a.send(null)};$(window).focus(function(){my_setcookie("CHF",1,1,0);my_setcookie("CNM","",0,0)}).blur(function(){my_setcookie("CHF","",0,0);my_setcookie("CNM","",0,0)}).trigger("focus");')
      }catch(d) {
      }
    }
    0 < c && function() {
      $(window).focus(function() {
        my_setcookie("CHF", 1, 1, 0);
        my_setcookie("CNM", "", 0, 0)
      }).blur(function() {
        my_setcookie("CHF", "", 0, 0);
        my_setcookie("CNM", "", 0, 0)
      }).trigger("focus");
      var a = document.title, b = function() {
        !my_getcookie("CHF") && my_getcookie("CNM") ? (document.title = a == document.title ? "Nuevo mensaje en el chat." : a, setTimeout(b, 300)) : (document.title = a, setTimeout(b, 5E3))
      };
      b()
    }()
  }, 5E3)
});