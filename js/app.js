
$(document).ready(function(){

    var controller = new slidebars();

    controller.init();

    var contador =0;
    $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1' );

        contador++;
        if(contador % 2 != 0){

            document.getElementById('tabla_wrapper').className = 'contenedor-tabla-post';

        }else{

        $('#tabla_wrapper').removeClass("contenedor-tabla-post");

        }

    } );




    $( "#tabs" ).tabs();

    var espaniol = {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
    }



    $('#tabla').DataTable( {
        "language": espaniol
        }
    );

});

