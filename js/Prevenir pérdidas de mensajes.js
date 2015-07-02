//Posición: En todas las páginas
$(document).ready(function() { $(document).ready(function() {
    if ($('#text_editor_textarea + * textarea').length) {
        window.onbeforeunload = function() {
            if ($('#text_editor_textarea').sceditor('instance').val().length) return 'Parece que estás escribiendo algo.';
        };
        $('input[type=\'Submit\']').click(function() {
            window.onbeforeunload = null
        });
    }
})});
