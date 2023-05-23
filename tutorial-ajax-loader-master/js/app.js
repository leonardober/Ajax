/**
 * Creado para sergio Arboleda
 */
$(document).ready(function(){  /*define comportamiento de do rquest linea 8*/
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);

    $('.do-request').on('click', function(){
         $.get('http://jsonplaceholder.typicode.com/posts')
         /* $. Inicializa la funcion*/
             .done(function(result){
                 $('#results').text(JSON.stringify(result, null, 2)); /*stringify convierte los json en cadena de texto Api para visualizar*/

             })
             .fail(function(error){
                 console.error(error);
             })
    })
});

function configureLoadingScreen(screen){
    $(document)
        .ajaxStart(function () {
            screen.fadeIn();     /*inicia la solicitud al click*/
        })
        .ajaxStop(function () {
            screen.fadeOut();     /*finaliza la solicitud*/
        });
}