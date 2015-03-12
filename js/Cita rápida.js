//Posición: En los temas
$(function() {
    if (typeof(document.post) != "undefined") {
        $(".i_icon_quote").attr("src", "http://i.imgur.com/xgilu4i.png");
        $(".i_icon_quote").after('<img src="http://i.imgur.com/lPorVBd.png" class="i_icon_quick_quote" alt="Cita rápida" title="Cita rápida">');

        //http://stackoverflow.com/a/5084044      
        function getHTMLOfSelection() {
            var range;
            if (document.selection && document.selection.createRange) {
                range = document.selection.createRange();
                return range.htmlText;
            } else if (window.getSelection) {
                var selection = window.getSelection();
                if (selection.rangeCount > 0) {
                    range = selection.getRangeAt(0);
                    var clonedSelection = range.cloneContents();
                    var div = document.createElement('div');
                    div.appendChild(clonedSelection);
                    return div.innerHTML;
                } else {
                    return '';
                }
            } else {
                return '';
            }
        }
        //http://stackoverflow.com/a/7215665
        function getSelectionParentElement() {
            var parentEl = null,
                sel;
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    parentEl = sel.getRangeAt(0).commonAncestorContainer;
                    if (parentEl.nodeType != 1) {
                        parentEl = parentEl.parentNode;
                    }
                }
            } else if ((sel = document.selection) && sel.type != "Control") {
                parentEl = sel.createRange().parentElement();
            }
            return parentEl;
        }

        $(".i_icon_quick_quote").click(function() {
            var auxThis = this;
            $(auxThis).attr("src", "http://i.imgur.com/udseDRD.gif");
            if (!$(".content.clearfix", $(auxThis).closest(".postbody")).has(getSelectionParentElement()).length) {

                //Citación rápida normal
                $.get(auxThis.parentNode.href, function(data) {
                    $('#text_editor_textarea').sceditor("instance").insertText($("#text_editor_textarea", $(data)).text() + "\n");
                    location.hash = "#";
                    location.hash = "#" + auxThis.parentNode.href.split("/post?p=")[1].split("&mode=quote")[0];
                    $(auxThis).attr("src", "http://i.imgur.com/lPorVBd.png");
                });

            } else {

                //Citación rápida fragmentada
                var contenido = getHTMLOfSelection();
                var padre = getSelectionParentElement();
                while (padre != $(".content.clearfix div", $(auxThis).closest(".postbody"))[0]) {
                    contenido = $(padre).clone().empty().html(contenido)[0].outerHTML;
                    padre = padre.parentNode;
                }
                var autor = $(".author a", $(auxThis).closest(".postbody")).text();
                $('#text_editor_textarea').sceditor("instance").insertText('[quote="' + autor + '"]' + contenido + '[/quote]\n');
                location.hash = "#";
                location.hash = "#" + auxThis.parentNode.href.split("/post?p=")[1].split("&mode=quote")[0];
                $(auxThis).attr("src", "http://i.imgur.com/lPorVBd.png");

            }
            return false;
        });
    }
});