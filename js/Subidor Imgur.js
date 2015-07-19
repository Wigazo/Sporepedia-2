//Posición: En todas las páginas
$(document).ready(function() { $(document).ready(function() {
    if ($('#text_editor_textarea + * textarea').length) {
        
        window.subirImagenes = function(access_token) {
			var subidasImgs = function() {
				return parseInt($("#imgurPB-label").text().split("/")[0]);
			};
		
			dropZone.before('<div id="imgurPB" style="width: 200px; left: 50%; margin-left: -100px; top: 60%; position: absolute; background-color: #1F1F1F; border-radius: 10px;"></div>');
			$("#imgurPB").append('<div id="imgurPB-hecho" style="position: absolute; background-color: #85BF25; height: 100%; width: 0%; border-radius: 10px; z-index: -1;"></div>');
			$("#imgurPB").append('<div id="imgurPB-label" style="font-size: 25px; color: white; text-align:center;">...</div>');
			$("#imgurPB-label").text("0/" + dataImgs.length);
			$("#imgurPB").append('<img src="http://i.imgur.com/LJ7Nuqs.gif" style="position: absolute;left: 6px; top: 1px;">');
			
			for (var i = 0; i < dataImgs.length; i++) {
				var reader = new FileReader();
				reader.onload = function(evt) {
					var data = new FormData();
					data.append('image', evt.target.result.replace(/.*,/, ''));
					var xhr = new XMLHttpRequest();
					xhr.open('POST', 'https://api.imgur.com/3/upload', true);
					xhr.setRequestHeader('Authorization', typeof(access_token) != "undefined" ? 'Bearer ' + access_token : 'Client-ID 2800bab5227ab24'); 
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4 && xhr.status == 200) {
							if (!dataImgs.album) {
								$('#text_editor_textarea').sceditor("instance").insertText("[img]" + JSON.parse(xhr.responseText).data.link + "[/img]");
							} else {
								dataImgs.album += ","+JSON.parse(xhr.responseText).data.id;
							}
							if (subidasImgs()+1 < dataImgs.length) {
								$("#imgurPB-label").text(subidasImgs()+1 + "/" + dataImgs.length);
								$("#imgurPB-hecho").css("width", + subidasImgs() / dataImgs.length * 100 + "%");
							} else {
								if (!dataImgs.album) {
									$("#imgurPB").remove();
								} else {
									$("#imgurPB-label").text(subidasImgs()+1 + "/" + dataImgs.length);
									$("#imgurPB-hecho").css("width", + subidasImgs() / dataImgs.length * 100 + "%");
									var data2 = new FormData();
									data2.append('ids', dataImgs.album.split("true,")[1]);
									var xhr2 = new XMLHttpRequest();
									xhr2.open('POST', 'https://api.imgur.com/3/album');
									xhr2.setRequestHeader('Authorization', 'Client-ID 2800bab5227ab24');
									xhr2.onreadystatechange = function() {
										if (xhr2.readyState == 4 && xhr2.status == 200) {
											$('#text_editor_textarea').sceditor("instance").insertText('<iframe class="imgur-album" width="100%" height="550" frameborder="0" src="//imgur.com/a/' + JSON.parse(xhr2.responseText).data.id + '/embed"></iframe>');
											$("#imgurPB").remove();
										}
									};
									xhr2.send(data2);
								}
							}
						}
					};
					xhr.send(data);
				};
				reader.readAsDataURL(dataImgs[i]);
			}
        };
		
		//http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html
		var popupImgur = function() {
			var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
			var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
			width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
			height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
			var left = ((width / 2) - (850 / 2)) + dualScreenLeft;
			var top = ((height / 2) - (450 / 2)) + dualScreenTop;
			var newWindow = window.open('https://api.imgur.com/oauth2/authorize?response_type=token&client_id=2800bab5227ab24', 'oauth', 'scrollbars=yes, width=850, height=450, top=' + top + ', left=' + left);
			if (window.focus) {
				newWindow.focus();
			}
		};

		var procesarDrop = function(e) {
			esconderDropZone();
            e.stopPropagation();
            e.preventDefault();
            if (e.dataTransfer.files) {	
				window.dataImgs = new Array();
                for (var i = 0; i < e.dataTransfer.files.length; i++) {
                    if (e.dataTransfer.files[i].type.match("image.*")) {
                        dataImgs.push(e.dataTransfer.files[i]);
                    }
                }
				if (dataImgs.length) {
					if (e.shiftKey) {
						dataImgs.album = true;
					} else {
						dataImgs.album = false;
					}
					if (!localStorage.refresh_token) {
						if (!e.ctrlKey){
							subirImagenes();
						} else {
							popupImgur();
						}
					} else {
						var data = new FormData();
						data.append('refresh_token', localStorage.refresh_token);
						data.append('client_id', '2800bab5227ab24');
						data.append('client_secret', '4f6cffeb340ae578c7ab95301eca1976f4b96b08');
						data.append('grant_type', 'refresh_token');
						var xhr = new XMLHttpRequest();
						xhr.open('POST', 'https://api.imgur.com/oauth2/token', true);
						xhr.setRequestHeader('Authorization', 'Client-ID 2800bab5227ab24');
						xhr.onreadystatechange = function() {
							if (xhr.readyState == 4){
								if (xhr.status == 200) {
									localStorage.refresh_token = JSON.parse(xhr.responseText).refresh_token;
									subirImagenes(JSON.parse(xhr.responseText).access_token);
								} else {
									popupImgur();
								}
							}
						};
						xhr.send(data);
					}
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
						if (localStorage.refresh_token || e.ctrlKey) {
							dropZone.addClass("cuenta");
						} else {
							dropZone.removeClass("cuenta");
						}
						if (e.shiftKey) {
							dropZone.addClass("album");
						} else {
							dropZone.removeClass("album");
						}
                        break;
                    }
                }
            }
        };
		
        var esconderDropZone = function() {
            dropZone.removeClass("dropZone");
            dropZone.removeClass("cuenta");
            dropZone.removeClass("album");
        };
		
        var dropZone = $('#text_editor_textarea + * textarea');
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            dropZone[0].addEventListener('drop', procesarDrop, false);
            dropZone[0].addEventListener('dragover', resaltarDropZone, false);
            dropZone[0].addEventListener('dragleave', esconderDropZone, false);
        }
    }
})});
