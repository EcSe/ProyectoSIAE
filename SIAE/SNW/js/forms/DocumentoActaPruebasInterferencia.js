$(document).ready(function () {


    $('#cphContenido_chkCapturaPantallaRadio').change(function () {
        var blnActivo = $("#cphContenido_chkCapturaPantallaRadio").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCapturaPantallaRadio, "#divCapturaPantallaRadio");
        else
            habilitarRealUploader(true, divCapturaPantallaRadio, "#divCapturaPantallaRadio");
    });

    poCapturaPantallaRadioComentario = $("#spCapturaPantallaRadioComentario").popover({
        html: true,
        content: function () {
            return $('#pocCapturaPantallaRadioComentario').html();
        }
    });

    poCapturaPantallaRadioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCapturaPantallaRadioComentario.on('shown.bs.popover', function () {
        $("#txtCapturaPantallaRadioComentario").val($("#cphContenido_hfCapturaPantallaRadioComentario").val());
        $("#txtCapturaPantallaRadioComentario").focus();
        $("#txtCapturaPantallaRadioComentario").keyup(function () {
            $("#cphContenido_hfCapturaPantallaRadioComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    var divCapturaPantallaRadio = new RealUploader("#divCapturaPantallaRadio", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidtDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCapturaPantallaRadio').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCapturaPantallaRadio').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfCapturaPantallaRadio').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCapturaPantallaRadio').val(fileNamesUploaded);
            },
        }
    });

    
    if ($('#cphContenido_hfCapturaPantallaRadio').val() != "")
    {
        divCapturaPantallaRadio.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCapturaPantallaRadio').val(), $('#cphContenido_hfCapturaPantallaRadio').val());
    }

    //Ejecutamos el evento change del control
    $("#cphContenido_chkCapturaPantallaRadio").trigger("change");


    //Bloqueamos los check de aprobacion
    if (!($("#cphContenido_hfIdPerfil").val() == "000001")) {
        //Check aprobacion
        $('#cphContenido_chkCapturaPantallaRadio').prop('disabled', true);
        
        //Comentarios
        $('#txtCapturaPantallaRadioComentario').prop('disabled', true);

    }

    //Cerrar todos los popovers cuando se da click fuera de uno
    $("body").on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    //Al momento de llamar el metodo hide del popover no necesite un segundo clic para mostrarse nuevamente
    $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState.click = false;
    });

});