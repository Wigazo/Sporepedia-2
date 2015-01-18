//Posición: En todas las páginas
$(function(){ 
   if ($("#text_editor_textarea").length != 0) { 
      $.sceditor.commands.servimg["exec"] = $.sceditor.commands.servimg["txtExec"] = function (caller) {
         var content =  '<p><iframe name="framePMP" \ 
src="http://photobucket.com/svc/jwidget.php?width=200&height=500&largeThumb=true&bg=%232C2C2C&linkType=img&border=false&textcolor=%23BBBDBC&linkcolor=%2303B2ED"
width="200"
height="500"
frameborder="0"
scrolling=no
allowtransparency="true"
bgcolor="%232C2C2C"
>
</iframe></p>';
         this.createDropDown(caller, 'servimg', content);
      } 
   }
});