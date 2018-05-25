$(document).ready(function () {

    // #region Reporte Fotográfico

    // #region Foto 1: Equipo GPS con Etiqueta Enrollada Visible

    $('#cphContenido_chkEquipoGPSEtiqueta').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoGPSEtiqueta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoGPSEtiqueta, "#divEquipoGPSEtiqueta");
        else
            habilitarRealUploader(true, divEquipoGPSEtiqueta, "#divEquipoGPSEtiqueta");
    });

    poEquipoGPSEtiquetaComentario = $("#spEquipoGPSEtiquetaComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoGPSEtiquetaComentario').html();
        }
    });

    poEquipoGPSEtiquetaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoGPSEtiquetaComentario.on('shown.bs.popover', function () {
        $("#txtEquipoGPSEtiquetaComentario").val($("#cphContenido_hfEquipoGPSEtiquetaComentario").val());
        $("#txtEquipoGPSEtiquetaComentario").focus();
        $("#txtEquipoGPSEtiquetaComentario").keyup(function () {
            $("#cphContenido_hfEquipoGPSEtiquetaComentario").val($(this).val());
        });
    });

    var divEquipoGPSEtiqueta = new RealUploader("#divEquipoGPSEtiqueta", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEquipoGPSEtiqueta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoGPSEtiqueta').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoGPSEtiqueta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoGPSEtiqueta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoGPSEtiqueta').val() != "") {
        divEquipoGPSEtiqueta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoGPSEtiqueta').val(), $('#cphContenido_hfEquipoGPSEtiqueta').val());
    }

    $("#cphContenido_chkEquipoGPSEtiqueta").trigger("change");

    // #endregion

    // #region Foto 2.01: Aterramiento GPS (CMM4)

    $('#cphContenido_chkAterramientoGPS01').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoGPS01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoGPS01, "#divAterramientoGPS01");
        else
            habilitarRealUploader(true, divAterramientoGPS01, "#divAterramientoGPS01");
    });

    poAterramientoGPS01Comentario = $("#spAterramientoGPS01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoGPS01Comentario').html();
        }
    });

    poAterramientoGPS01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoGPS01Comentario.on('shown.bs.popover', function () {
        $("#txtAterramientoGPS01Comentario").val($("#cphContenido_hfAterramientoGPS01Comentario").val());
        $("#txtAterramientoGPS01Comentario").focus();
        $("#txtAterramientoGPS01Comentario").keyup(function () {
            $("#cphContenido_hfAterramientoGPS01Comentario").val($(this).val());
        });
    });

    var divAterramientoGPS01 = new RealUploader("#divAterramientoGPS01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoGPS01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoGPS01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoGPS01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoGPS01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoGPS01').val() != "") {
        divAterramientoGPS01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoGPS01').val(), $('#cphContenido_hfAterramientoGPS01').val());
    }

    $("#cphContenido_chkAterramientoGPS01").trigger("change");

    // #endregion

    // #region Foto 2.02: Aterramiento GPS (CMM4)

    $('#cphContenido_chkAterramientoGPS02').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoGPS02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoGPS02, "#divAterramientoGPS02");
        else
            habilitarRealUploader(true, divAterramientoGPS02, "#divAterramientoGPS02");
    });

    poAterramientoGPS02Comentario = $("#spAterramientoGPS02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoGPS02Comentario').html();
        }
    });

    poAterramientoGPS02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoGPS02Comentario.on('shown.bs.popover', function () {
        $("#txtAterramientoGPS02Comentario").val($("#cphContenido_hfAterramientoGPS02Comentario").val());
        $("#txtAterramientoGPS02Comentario").focus();
        $("#txtAterramientoGPS02Comentario").keyup(function () {
            $("#cphContenido_hfAterramientoGPS02Comentario").val($(this).val());
        });
    });

    var divAterramientoGPS02 = new RealUploader("#divAterramientoGPS02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoGPS02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoGPS02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoGPS02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoGPS02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoGPS02').val() != "") {
        divAterramientoGPS02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoGPS02').val(), $('#cphContenido_hfAterramientoGPS02').val());
    }

    $("#cphContenido_chkAterramientoGPS02").trigger("change");

    // #endregion

    // #region Foto 3: Recorrido de Cable CNT300 por Torre

    $('#cphContenido_chkRecorridoCableCNT300').change(function () {
        var blnActivo = $("#cphContenido_chkRecorridoCableCNT300").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRecorridoCableCNT300, "#divRecorridoCableCNT300");
        else
            habilitarRealUploader(true, divRecorridoCableCNT300, "#divRecorridoCableCNT300");
    });

    poRecorridoCableCNT300Comentario = $("#spRecorridoCableCNT300Comentario").popover({
        html: true,
        content: function () {
            return $('#pocRecorridoCableCNT300Comentario').html();
        }
    });

    poRecorridoCableCNT300Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRecorridoCableCNT300Comentario.on('shown.bs.popover', function () {
        $("#txtRecorridoCableCNT300Comentario").val($("#cphContenido_hfRecorridoCableCNT300Comentario").val());
        $("#txtRecorridoCableCNT300Comentario").focus();
        $("#txtRecorridoCableCNT300Comentario").keyup(function () {
            $("#cphContenido_hfRecorridoCableCNT300Comentario").val($(this).val());
        });
    });

    var divRecorridoCableCNT300 = new RealUploader("#divRecorridoCableCNT300", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfRecorridoCableCNT300').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableCNT300').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfRecorridoCableCNT300').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableCNT300').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRecorridoCableCNT300').val() != "") {
        divRecorridoCableCNT300.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRecorridoCableCNT300').val(), $('#cphContenido_hfRecorridoCableCNT300').val());
    }

    $("#cphContenido_chkRecorridoCableCNT300").trigger("change");

    // #endregion

    // #region Foto 4.01: Aterramiento Cable CNT300 (Inicio/Fin)

    $('#cphContenido_chkAterramientoCableCNT30001').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableCNT30001").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableCNT30001, "#divAterramientoCableCNT30001");
        else
            habilitarRealUploader(true, divAterramientoCableCNT30001, "#divAterramientoCableCNT30001");
    });

    poAterramientoCableCNT30001Comentario = $("#spAterramientoCableCNT30001Comentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableCNT30001Comentario').html();
        }
    });

    poAterramientoCableCNT30001Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableCNT30001Comentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableCNT30001Comentario").val($("#cphContenido_hfAterramientoCableCNT30001Comentario").val());
        $("#txtAterramientoCableCNT30001Comentario").focus();
        $("#txtAterramientoCableCNT30001Comentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableCNT30001Comentario").val($(this).val());
        });
    });

    var divAterramientoCableCNT30001 = new RealUploader("#divAterramientoCableCNT30001", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoCableCNT30001').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableCNT30001').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableCNT30001').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableCNT30001').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableCNT30001').val() != "") {
        divAterramientoCableCNT30001.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableCNT30001').val(), $('#cphContenido_hfAterramientoCableCNT30001').val());
    }

    $("#cphContenido_chkAterramientoCableCNT30001").trigger("change");

    // #endregion

    // #region Foto 4.02: Aterramiento Cable CNT300 (Inicio/Fin)

    $('#cphContenido_chkAterramientoCableCNT30002').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableCNT30002").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableCNT30002, "#divAterramientoCableCNT30002");
        else
            habilitarRealUploader(true, divAterramientoCableCNT30002, "#divAterramientoCableCNT30002");
    });

    poAterramientoCableCNT30002Comentario = $("#spAterramientoCableCNT30002Comentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableCNT30002Comentario').html();
        }
    });

    poAterramientoCableCNT30002Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableCNT30002Comentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableCNT30002Comentario").val($("#cphContenido_hfAterramientoCableCNT30002Comentario").val());
        $("#txtAterramientoCableCNT30002Comentario").focus();
        $("#txtAterramientoCableCNT30002Comentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableCNT30002Comentario").val($(this).val());
        });
    });

    var divAterramientoCableCNT30002 = new RealUploader("#divAterramientoCableCNT30002", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoCableCNT30002').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableCNT30002').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableCNT30002').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableCNT30002').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableCNT30002').val() != "") {
        divAterramientoCableCNT30002.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableCNT30002').val(), $('#cphContenido_hfAterramientoCableCNT30002').val());
    }

    $("#cphContenido_chkAterramientoCableCNT30002").trigger("change");

    // #endregion

    // #region Foto 5.01: Etiquetado del POE/CMM4

    $('#cphContenido_chkEtiquetadoPOECMM401').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoPOECMM401").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoPOECMM401, "#divEtiquetadoPOECMM401");
        else
            habilitarRealUploader(true, divEtiquetadoPOECMM401, "#divEtiquetadoPOECMM401");
    });

    poEtiquetadoPOECMM401Comentario = $("#spEtiquetadoPOECMM401Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoPOECMM401Comentario').html();
        }
    });

    poEtiquetadoPOECMM401Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoPOECMM401Comentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoPOECMM401Comentario").val($("#cphContenido_hfEtiquetadoPOECMM401Comentario").val());
        $("#txtEtiquetadoPOECMM401Comentario").focus();
        $("#txtEtiquetadoPOECMM401Comentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoPOECMM401Comentario").val($(this).val());
        });
    });

    var divEtiquetadoPOECMM401 = new RealUploader("#divEtiquetadoPOECMM401", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEtiquetadoPOECMM401').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPOECMM401').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoPOECMM401').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPOECMM401').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoPOECMM401').val() != "") {
        divEtiquetadoPOECMM401.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoPOECMM401').val(), $('#cphContenido_hfEtiquetadoPOECMM401').val());
    }

    $("#cphContenido_chkEtiquetadoPOECMM401").trigger("change");

    // #endregion

    // #region Foto 5.02: Etiquetado del POE/CMM4

    $('#cphContenido_chkEtiquetadoPOECMM402').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoPOECMM402").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoPOECMM402, "#divEtiquetadoPOECMM402");
        else
            habilitarRealUploader(true, divEtiquetadoPOECMM402, "#divEtiquetadoPOECMM402");
    });

    poEtiquetadoPOECMM402Comentario = $("#spEtiquetadoPOECMM402Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoPOECMM402Comentario').html();
        }
    });

    poEtiquetadoPOECMM402Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoPOECMM402Comentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoPOECMM402Comentario").val($("#cphContenido_hfEtiquetadoPOECMM402Comentario").val());
        $("#txtEtiquetadoPOECMM402Comentario").focus();
        $("#txtEtiquetadoPOECMM402Comentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoPOECMM402Comentario").val($(this).val());
        });
    });

    var divEtiquetadoPOECMM402 = new RealUploader("#divEtiquetadoPOECMM402", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEtiquetadoPOECMM402').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPOECMM402').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoPOECMM402').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPOECMM402').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoPOECMM402').val() != "") {
        divEtiquetadoPOECMM402.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoPOECMM402').val(), $('#cphContenido_hfEtiquetadoPOECMM402').val());
    }

    $("#cphContenido_chkEtiquetadoPOECMM402").trigger("change");

    // #endregion

    // #region Foto 6.01: Patch Core del CMM4 al Switch/Router (Inicio/Fin)

    $('#cphContenido_chkPatchCoreCMM4Switch01').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCoreCMM4Switch01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCoreCMM4Switch01, "#divPatchCoreCMM4Switch01");
        else
            habilitarRealUploader(true, divPatchCoreCMM4Switch01, "#divPatchCoreCMM4Switch01");
    });

    poPatchCoreCMM4Switch01Comentario = $("#spPatchCoreCMM4Switch01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCoreCMM4Switch01Comentario').html();
        }
    });

    poPatchCoreCMM4Switch01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCoreCMM4Switch01Comentario.on('shown.bs.popover', function () {
        $("#txtPatchCoreCMM4Switch01Comentario").val($("#cphContenido_hfPatchCoreCMM4Switch01Comentario").val());
        $("#txtPatchCoreCMM4Switch01Comentario").focus();
        $("#txtPatchCoreCMM4Switch01Comentario").keyup(function () {
            $("#cphContenido_hfPatchCoreCMM4Switch01Comentario").val($(this).val());
        });
    });

    var divPatchCoreCMM4Switch01 = new RealUploader("#divPatchCoreCMM4Switch01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPatchCoreCMM4Switch01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreCMM4Switch01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCoreCMM4Switch01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreCMM4Switch01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCoreCMM4Switch01').val() != "") {
        divPatchCoreCMM4Switch01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCoreCMM4Switch01').val(), $('#cphContenido_hfPatchCoreCMM4Switch01').val());
    }

    $("#cphContenido_chkPatchCoreCMM4Switch01").trigger("change");

    // #endregion

    // #region Foto 6.02: Patch Core del CMM4 al Switch/Router (Inicio/Fin)

    $('#cphContenido_chkPatchCoreCMM4Switch02').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCoreCMM4Switch02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCoreCMM4Switch02, "#divPatchCoreCMM4Switch02");
        else
            habilitarRealUploader(true, divPatchCoreCMM4Switch02, "#divPatchCoreCMM4Switch02");
    });

    poPatchCoreCMM4Switch02Comentario = $("#spPatchCoreCMM4Switch02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCoreCMM4Switch02Comentario').html();
        }
    });

    poPatchCoreCMM4Switch02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCoreCMM4Switch02Comentario.on('shown.bs.popover', function () {
        $("#txtPatchCoreCMM4Switch02Comentario").val($("#cphContenido_hfPatchCoreCMM4Switch02Comentario").val());
        $("#txtPatchCoreCMM4Switch02Comentario").focus();
        $("#txtPatchCoreCMM4Switch02Comentario").keyup(function () {
            $("#cphContenido_hfPatchCoreCMM4Switch02Comentario").val($(this).val());
        });
    });

    var divPatchCoreCMM4Switch02 = new RealUploader("#divPatchCoreCMM4Switch02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPatchCoreCMM4Switch02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreCMM4Switch02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCoreCMM4Switch02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreCMM4Switch02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCoreCMM4Switch02').val() != "") {
        divPatchCoreCMM4Switch02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCoreCMM4Switch02').val(), $('#cphContenido_hfPatchCoreCMM4Switch02').val());
    }

    $("#cphContenido_chkPatchCoreCMM4Switch02").trigger("change");

    // #endregion

    // #region Foto 7.01: POE/CMM4

    $('#cphContenido_chkPOECMM401').change(function () {
        var blnActivo = $("#cphContenido_chkPOECMM401").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPOECMM401, "#divPOECMM401");
        else
            habilitarRealUploader(true, divPOECMM401, "#divPOECMM401");
    });

    poPOECMM401Comentario = $("#spPOECMM401Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPOECMM401Comentario').html();
        }
    });

    poPOECMM401Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPOECMM401Comentario.on('shown.bs.popover', function () {
        $("#txtPOECMM401Comentario").val($("#cphContenido_hfPOECMM401Comentario").val());
        $("#txtPOECMM401Comentario").focus();
        $("#txtPOECMM401Comentario").keyup(function () {
            $("#cphContenido_hfPOECMM401Comentario").val($(this).val());
        });
    });

    var divPOECMM401 = new RealUploader("#divPOECMM401", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPOECMM401').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPOECMM401').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPOECMM401').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPOECMM401').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPOECMM401').val() != "") {
        divPOECMM401.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPOECMM401').val(), $('#cphContenido_hfPOECMM401').val());
    }

    $("#cphContenido_chkPOECMM401").trigger("change");

    // #endregion

    // #region Foto 7.02: POE/CMM4

    $('#cphContenido_chkPOECMM402').change(function () {
        var blnActivo = $("#cphContenido_chkPOECMM402").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPOECMM402, "#divPOECMM402");
        else
            habilitarRealUploader(true, divPOECMM402, "#divPOECMM402");
    });

    poPOECMM402Comentario = $("#spPOECMM402Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPOECMM402Comentario').html();
        }
    });

    poPOECMM402Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPOECMM402Comentario.on('shown.bs.popover', function () {
        $("#txtPOECMM402Comentario").val($("#cphContenido_hfPOECMM402Comentario").val());
        $("#txtPOECMM402Comentario").focus();
        $("#txtPOECMM402Comentario").keyup(function () {
            $("#cphContenido_hfPOECMM402Comentario").val($(this).val());
        });
    });

    var divPOECMM402 = new RealUploader("#divPOECMM402", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPOECMM402').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPOECMM402').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPOECMM402').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPOECMM402').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPOECMM402').val() != "") {
        divPOECMM402.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPOECMM402').val(), $('#cphContenido_hfPOECMM402').val());
    }

    $("#cphContenido_chkPOECMM402").trigger("change");

    // #endregion

    // #region Foto 8: TDK Lambda

    $('#cphContenido_chkTDKLambda').change(function () {
        var blnActivo = $("#cphContenido_chkTDKLambda").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTDKLambda, "#divTDKLambda");
        else
            habilitarRealUploader(true, divTDKLambda, "#divTDKLambda");
    });

    poTDKLambdaComentario = $("#spTDKLambdaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTDKLambdaComentario').html();
        }
    });

    poTDKLambdaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTDKLambdaComentario.on('shown.bs.popover', function () {
        $("#txtTDKLambdaComentario").val($("#cphContenido_hfTDKLambdaComentario").val());
        $("#txtTDKLambdaComentario").focus();
        $("#txtTDKLambdaComentario").keyup(function () {
            $("#cphContenido_hfTDKLambdaComentario").val($(this).val());
        });
    });

    var divTDKLambda = new RealUploader("#divTDKLambda", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTDKLambda').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTDKLambda').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTDKLambda').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTDKLambda').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTDKLambda').val() != "") {
        divTDKLambda.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTDKLambda').val(), $('#cphContenido_hfTDKLambda').val());
    }

    $("#cphContenido_chkTDKLambda").trigger("change");

    // #endregion

    // #region Foto 9.01: Energía TDK-Lambda (Inicio/Fin)

    $('#cphContenido_chkEnergiaTDKLambda01').change(function () {
        var blnActivo = $("#cphContenido_chkEnergiaTDKLambda01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEnergiaTDKLambda01, "#divEnergiaTDKLambda01");
        else
            habilitarRealUploader(true, divEnergiaTDKLambda01, "#divEnergiaTDKLambda01");
    });

    poEnergiaTDKLambda01Comentario = $("#spEnergiaTDKLambda01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEnergiaTDKLambda01Comentario').html();
        }
    });

    poEnergiaTDKLambda01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEnergiaTDKLambda01Comentario.on('shown.bs.popover', function () {
        $("#txtEnergiaTDKLambda01Comentario").val($("#cphContenido_hfEnergiaTDKLambda01Comentario").val());
        $("#txtEnergiaTDKLambda01Comentario").focus();
        $("#txtEnergiaTDKLambda01Comentario").keyup(function () {
            $("#cphContenido_hfEnergiaTDKLambda01Comentario").val($(this).val());
        });
    });

    var divEnergiaTDKLambda01 = new RealUploader("#divEnergiaTDKLambda01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEnergiaTDKLambda01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaTDKLambda01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEnergiaTDKLambda01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaTDKLambda01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEnergiaTDKLambda01').val() != "") {
        divEnergiaTDKLambda01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEnergiaTDKLambda01').val(), $('#cphContenido_hfEnergiaTDKLambda01').val());
    }

    $("#cphContenido_chkEnergiaTDKLambda01").trigger("change");

    // #endregion

    // #region Foto 9.02: Energía TDK-Lambda (Inicio/Fin)

    $('#cphContenido_chkEnergiaTDKLambda02').change(function () {
        var blnActivo = $("#cphContenido_chkEnergiaTDKLambda02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEnergiaTDKLambda02, "#divEnergiaTDKLambda02");
        else
            habilitarRealUploader(true, divEnergiaTDKLambda02, "#divEnergiaTDKLambda02");
    });

    poEnergiaTDKLambda02Comentario = $("#spEnergiaTDKLambda02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEnergiaTDKLambda02Comentario').html();
        }
    });

    poEnergiaTDKLambda02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEnergiaTDKLambda02Comentario.on('shown.bs.popover', function () {
        $("#txtEnergiaTDKLambda02Comentario").val($("#cphContenido_hfEnergiaTDKLambda02Comentario").val());
        $("#txtEnergiaTDKLambda02Comentario").focus();
        $("#txtEnergiaTDKLambda02Comentario").keyup(function () {
            $("#cphContenido_hfEnergiaTDKLambda02Comentario").val($(this).val());
        });
    });

    var divEnergiaTDKLambda02 = new RealUploader("#divEnergiaTDKLambda02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEnergiaTDKLambda02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaTDKLambda02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEnergiaTDKLambda02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaTDKLambda02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEnergiaTDKLambda02').val() != "") {
        divEnergiaTDKLambda02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEnergiaTDKLambda02').val(), $('#cphContenido_hfEnergiaTDKLambda02').val());
    }

    $("#cphContenido_chkEnergiaTDKLambda02").trigger("change");

    // #endregion

    // #region Foto 10: Conexión TDK-Lambda a CMM4

    $('#cphContenido_chkConexionTDKLambdaCMM4').change(function () {
        var blnActivo = $("#cphContenido_chkConexionTDKLambdaCMM4").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConexionTDKLambdaCMM4, "#divConexionTDKLambdaCMM4");
        else
            habilitarRealUploader(true, divConexionTDKLambdaCMM4, "#divConexionTDKLambdaCMM4");
    });

    poConexionTDKLambdaCMM4Comentario = $("#spConexionTDKLambdaCMM4Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConexionTDKLambdaCMM4Comentario').html();
        }
    });

    poConexionTDKLambdaCMM4Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConexionTDKLambdaCMM4Comentario.on('shown.bs.popover', function () {
        $("#txtConexionTDKLambdaCMM4Comentario").val($("#cphContenido_hfConexionTDKLambdaCMM4Comentario").val());
        $("#txtConexionTDKLambdaCMM4Comentario").focus();
        $("#txtConexionTDKLambdaCMM4Comentario").keyup(function () {
            $("#cphContenido_hfConexionTDKLambdaCMM4Comentario").val($(this).val());
        });
    });

    var divConexionTDKLambdaCMM4 = new RealUploader("#divConexionTDKLambdaCMM4", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConexionTDKLambdaCMM4').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConexionTDKLambdaCMM4').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConexionTDKLambdaCMM4').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConexionTDKLambdaCMM4').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConexionTDKLambdaCMM4').val() != "") {
        divConexionTDKLambdaCMM4.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConexionTDKLambdaCMM4').val(), $('#cphContenido_hfConexionTDKLambdaCMM4').val());
    }

    $("#cphContenido_chkConexionTDKLambdaCMM4").trigger("change");

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
        $('#cphContenido_chkEquipoGPSEtiqueta').prop('disabled', true);
        $('#cphContenido_chkAterramientoGPS01').prop('disabled', true);
        $('#cphContenido_chkAterramientoGPS02').prop('disabled', true);
        $('#cphContenido_chkRecorridoCableCNT300').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableCNT30001').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableCNT30002').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoPOECMM401').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoPOECMM402').prop('disabled', true);
        $('#cphContenido_chkPatchCoreCMM4Switch01').prop('disabled', true);
        $('#cphContenido_chkPatchCoreCMM4Switch02').prop('disabled', true);
        $('#cphContenido_chkPOECMM401').prop('disabled', true);
        $('#cphContenido_chkPOECMM402').prop('disabled', true);
        $('#cphContenido_chkTDKLambda').prop('disabled', true);
        $('#cphContenido_chkEnergiaTDKLambda01').prop('disabled', true);
        $('#cphContenido_chkEnergiaTDKLambda02').prop('disabled', true);
        $('#cphContenido_chkConexionTDKLambdaCMM4').prop('disabled', true);

        //Comentarios
        $('#txtEquipoGPSEtiquetaComentario').prop('disabled', true);
        $('#txtAterramientoGPS01Comentario').prop('disabled', true);
        $('#txtAterramientoGPS02Comentario').prop('disabled', true);
        $('#txtRecorridoCableCNT300Comentario').prop('disabled', true);
        $('#txtAterramientoCableCNT30001Comentario').prop('disabled', true);
        $('#txtAterramientoCableCNT30002Comentario').prop('disabled', true);
        $('#txtEtiquetadoPOECMM401Comentario').prop('disabled', true);
        $('#txtEtiquetadoPOECMM402Comentario').prop('disabled', true);
        $('#txtPatchCoreCMM4Switch01Comentario').prop('disabled', true);
        $('#txtPatchCoreCMM4Switch02Comentario').prop('disabled', true);
        $('#txtPOECMM401Comentario').prop('disabled', true);
        $('#txtPOECMM402Comentario').prop('disabled', true);
        $('#txtTDKLambdaComentario').prop('disabled', true);
        $('#txtEnergiaTDKLambda01Comentario').prop('disabled', true);
        $('#txtEnergiaTDKLambda02Comentario').prop('disabled', true);
        $('#txtConexionTDKLambdaCMM4Comentario').prop('disabled', true);

    }

    // #endregion

});