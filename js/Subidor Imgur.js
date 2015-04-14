//Posición: En todas las páginas
$(document).ready(function() { $(document).ready(function() {
    if ($('#text_editor_textarea + * textarea').length) {
        var subirImagenes = function(e) {
            e.stopPropagation();
            e.preventDefault();
            if (e.dataTransfer.files) {
                cantidadImgs = e.dataTransfer.files.length;
                for (var i = 0; i < e.dataTransfer.files.length; i++) {
                    if (e.dataTransfer.files[i].type.match("image.*")) {
                        var reader = new FileReader();
                        reader.onload = function(evt) {
                            var data = new FormData();
                            data.append('image', evt.target.result.replace(/.*,/, ''));
                            var xhr = new XMLHttpRequest();
                            xhr.open('POST', 'https://api.imgur.com/3/upload', true);
                            xhr.setRequestHeader('Authorization', 'Client-ID 2800bab5227ab24');
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState == 4 && xhr.status == 200) {
                                    unaMenos();
                                    $('#text_editor_textarea').sceditor("instance").insertText("[img]" + JSON.parse(xhr.responseText).data.link + "[/img]");
                                }
                            };
                            xhr.send(data);
                        };
                        reader.readAsDataURL(e.dataTransfer.files[i]);
                    } else {
                        unaMenos();
                    }
                }
            } else {
                esconderDropZone();
            }
        };
        var cantidadImgs = 0;
        var unaMenos = function() {
            cantidadImgs--;
            if (cantidadImgs < 1) esconderDropZone();
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
