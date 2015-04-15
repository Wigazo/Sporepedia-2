//Posición: En todas las páginas
$(document).ready(function() { $(document).ready(function() {
    if ($('#text_editor_textarea + * textarea').length) {
        var dataImgs;
        var subidasImgs;
        var subirImagenes = function(e) {
            esconderDropZone();
            e.stopPropagation();
            e.preventDefault();
            if (e.dataTransfer.files) {
                dataImgs = new Array();
                for (var i = 0; i < e.dataTransfer.files.length; i++) {
                    if (e.dataTransfer.files[i].type.match("image.*")) {
                        dataImgs.push(e.dataTransfer.files[i]);
                    }
                }
                if (dataImgs.length) {
                    subidasImgs = 0;
                    dropZone.before('<div id="imgurPB" style="width: 200px; left: 50%; margin-left: -100px; top: 60%; position: absolute; background-color: #1F1F1F; border-radius: 10px;"></div>');
                    $("#imgurPB").append('<div id="imgurPB-hecho" style="position: absolute; background-color: #85BF25; height: 100%; width: 0%; border-radius: 10px; z-index: -1;"></div>');
                    $("#imgurPB").append('<div id="imgurPB-label" style="font-size: 25px; color: white; text-align:center;">...</div>');
                    $("#imgurPB-label").text(subidasImgs + "/" + dataImgs.length);
                    $("#imgurPB").append('<img src="http://i.imgur.com/LJ7Nuqs.gif" style="position: absolute;left: 6px; top: 1px;">');
                }
                for (var i = 0; i < dataImgs.length; i++) {
                    var reader = new FileReader();
                    reader.onload = function(evt) {
                        var data = new FormData();
                        data.append('image', evt.target.result.replace(/.*,/, ''));
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'https://api.imgur.com/3/upload', true);
                        xhr.setRequestHeader('Authorization', 'Client-ID 2800bab5227ab24');
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState == 4 && xhr.status == 200) {
                                $('#text_editor_textarea').sceditor("instance").insertText("[img]" + JSON.parse(xhr.responseText).data.link + "[/img]");
                                subidasImgs++;
                                if (subidasImgs < dataImgs.length) {
                                    $("#imgurPB-hecho").css("width", +subidasImgs / dataImgs.length * 100 + "%");
                                    $("#imgurPB-label").text(subidasImgs + "/" + dataImgs.length);
                                } else {
                                    $("#imgurPB").remove();
                                }
                            }
                        };
                        xhr.send(data);
                    };
                    reader.readAsDataURL(dataImgs[i]);
                }
            }
        };
        var resaltarDropZone = function(e) {
            e.stopPropagation();
            e.preventDefault();
            if (e.dataTransfer.types) {
                for (var i = 0; i < e.dataTransfer.types.length; i++) {
                    if (e.dataTransfer.types[i] == "Files") {
                        dropZone.addClass("dropZone");
                        break;
                    }
                }
            }
        };
        var esconderDropZone = function() {
            dropZone.removeClass("dropZone");
        };
        var dropZone = $('#text_editor_textarea + * textarea');
        document.styleSheets[document.styleSheets.length - 1].insertRule("#text_editor_textarea + * textarea.dropZone { border: 2px dashed gray !important; background-color: black !important }", document.styleSheets[document.styleSheets.length - 1].length);
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            dropZone[0].addEventListener('drop', subirImagenes, false);
            dropZone[0].addEventListener('dragenter', resaltarDropZone, false);
            dropZone[0].addEventListener('dragover', resaltarDropZone, false);
            dropZone[0].addEventListener('dragleave', esconderDropZone, false);
        }
    }
})});
