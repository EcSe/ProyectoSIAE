﻿$(document).ready(function () {

    // #region 11 Serie logística

    // #region Antena s/n

    $('#cphContenido_chkAntenaSN').change(function () {
        var blnActivo = $("#cphContenido_chkAntenaSN").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAntenaSN, "#divAntenaSN");
        else
            habilitarRealUploader(true, divAntenaSN, "#divAntenaSN");
    });

    poAntenaSNComentario = $("#spAntenaSNComentario").popover({
        html: true,
        content: function () {
            return $('#pocAntenaSNComentario').html();
        }
    });

    poAntenaSNComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAntenaSNComentario.on('shown.bs.popover', function () {
        $("#txtAntenaSNComentario").val($("#cphContenido_hfAntenaSNComentario").val());
        $("#txtAntenaSNComentario").focus();
        $("#txtAntenaSNComentario").keyup(function () {
            $("#cphContenido_hfAntenaSNComentario").val($(this).val());
        });
    });

    var divAntenaSN = new RealUploader("#divAntenaSN", {
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
                $('#cphContenido_hfAntenaSN').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAntenaSN').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAntenaSN').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAntenaSN').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAntenaSN').val() != "") {
        divAntenaSN.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAntenaSN').val(), $('#cphContenido_hfAntenaSN').val());
    }

    $("#cphContenido_chkAntenaSN").trigger("change");

    // #endregion  

    // #region Arrestor LAN s/n

    $('#cphContenido_chkArrestorLANSN').change(function () {
        var blnActivo = $("#cphContenido_chkArrestorLANSN").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divArrestorLANSN, "#divArrestorLANSN");
        else
            habilitarRealUploader(true, divArrestorLANSN, "#divArrestorLANSN");
    });

    poArrestorLANSNComentario = $("#spArrestorLANSNComentario").popover({
        html: true,
        content: function () {
            return $('#pocArrestorLANSNComentario').html();
        }
    });

    poArrestorLANSNComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poArrestorLANSNComentario.on('shown.bs.popover', function () {
        $("#txtArrestorLANSNComentario").val($("#cphContenido_hfArrestorLANSNComentario").val());
        $("#txtArrestorLANSNComentario").focus();
        $("#txtArrestorLANSNComentario").keyup(function () {
            $("#cphContenido_hfArrestorLANSNComentario").val($(this).val());
        });
    });

    var divArrestorLANSN = new RealUploader("#divArrestorLANSN", {
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
                $('#cphContenido_hfArrestorLANSN').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfArrestorLANSN').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfArrestorLANSN').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfArrestorLANSN').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfArrestorLANSN').val() != "") {
        divArrestorLANSN.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfArrestorLANSN').val(), $('#cphContenido_hfArrestorLANSN').val());
    }

    $("#cphContenido_chkArrestorLANSN").trigger("change");

    // #endregion

    // #region ODUs s/n

    $('#cphContenido_chkODUsSN').change(function () {
        var blnActivo = $("#cphContenido_chkODUsSN").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divODUsSN, "#divODUsSN");
        else
            habilitarRealUploader(true, divODUsSN, "#divODUsSN");
    });

    poODUsSNComentario = $("#spODUsSNComentario").popover({
        html: true,
        content: function () {
            return $('#pocODUsSNComentario').html();
        }
    });

    poODUsSNComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poODUsSNComentario.on('shown.bs.popover', function () {
        $("#txtODUsSNComentario").val($("#cphContenido_hfODUsSNComentario").val());
        $("#txtODUsSNComentario").focus();
        $("#txtODUsSNComentario").keyup(function () {
            $("#cphContenido_hfODUsSNComentario").val($(this).val());
        });
    });

    var divODUsSN = new RealUploader("#divODUsSN", {
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
                $('#cphContenido_hfODUsSN').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfODUsSN').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfODUsSN').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfODUsSN').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfODUsSN').val() != "") {
        divODUsSN.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfODUsSN').val(), $('#cphContenido_hfODUsSN').val());
    }

    $("#cphContenido_chkODUsSN").trigger("change");

    // #endregion

    // #region POE s/n

    $('#cphContenido_chkPOESN').change(function () {
        var blnActivo = $("#cphContenido_chkPOESN").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPOESN, "#divPOESN");
        else
            habilitarRealUploader(true, divPOESN, "#divPOESN");
    });

    poPOESNComentario = $("#spPOESNComentario").popover({
        html: true,
        content: function () {
            return $('#pocPOESNComentario').html();
        }
    });

    poPOESNComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPOESNComentario.on('shown.bs.popover', function () {
        $("#txtPOESNComentario").val($("#cphContenido_hfPOESNComentario").val());
        $("#txtPOESNComentario").focus();
        $("#txtPOESNComentario").keyup(function () {
            $("#cphContenido_hfPOESNComentario").val($(this).val());
        });
    });

    var divPOESN = new RealUploader("#divPOESN", {
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
                $('#cphContenido_hfPOESN').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPOESN').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPOESN').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPOESN').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPOESN').val() != "") {
        divPOESN.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPOESN').val(), $('#cphContenido_hfPOESN').val());
    }

    $("#cphContenido_chkPOESN").trigger("change");

    // #endregion

    // #endregion

    // #region Cerrar todos los popovers cuando se da click fuera de uno

    $("body").on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    // #endregion

    // #region Al momento de llamar el metodo hide del popover no necesite un segundo clic para mostrarse nuevamente

    $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState.click = false;
    });

    // #endregion

    // #region Bloqueamos los check de aprobacion

    if (!($("#cphContenido_hfIdPerfil").val() == "000001")) {
        //Check aprobacion
        $('#cphContenido_chkAntenaSN').prop('disabled', true);
        $('#cphContenido_chkArrestorLANSN').prop('disabled', true);
        $('#cphContenido_chkODUsSN').prop('disabled', true);
        $('#cphContenido_chkPOESN').prop('disabled', true);

        //Comentarios
        $('#txtAntenaSNComentario').prop('disabled', true);
        $('#txtArrestorLANSNComentario').prop('disabled', true);
        $('#txtODUsSNComentario').prop('disabled', true);
        $('#txtPOESNComentario').prop('disabled', true);

    }

    // #endregion

});