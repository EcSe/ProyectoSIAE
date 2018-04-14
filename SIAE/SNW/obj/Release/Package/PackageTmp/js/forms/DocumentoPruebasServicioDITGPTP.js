$(document).ready(function () {

    $('#cphContenido_chkTiempoPrueba').change(function () {
        var blnActivo = $("#cphContenido_chkTiempoPrueba").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtTiempoPrueba').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtTiempoPrueba').prop('disabled', false);
        }
    });

    $('#cphContenido_chkRetardoMinimo').change(function () {
        var blnActivo = $("#cphContenido_chkRetardoMinimo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRetardoMinimo").prop('disabled', true);
        else
            $('#cphContenido_txtRetardoMinimo').prop('disabled', false);
    });

    $('#cphContenido_chkRetardoMaximo').change(function () {
        var blnActivo = $("#cphContenido_chkRetardoMaximo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRetardoMaximo").prop('disabled', true);
        else
            $('#cphContenido_txtRetardoMaximo').prop('disabled', false);
    });

    $('#cphContenido_chkRetardoPromedio').change(function () {
        var blnActivo = $("#cphContenido_chkRetardoPromedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRetardoPromedio").prop('disabled', true);
        else
            $('#cphContenido_txtRetardoPromedio').prop('disabled', false);
    });

    $('#cphContenido_chkJitterPromedio').change(function () {
        var blnActivo = $("#cphContenido_chkJitterPromedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtJitterPromedio").prop('disabled', true);
        else
            $('#cphContenido_txtJitterPromedio').prop('disabled', false);
    });

    $('#cphContenido_chkDesviacionEstandarRetardo').change(function () {
        var blnActivo = $("#cphContenido_chkDesviacionEstandarRetardo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDesviacionEstandarRetardo").prop('disabled', true);
        else
            $('#cphContenido_txtDesviacionEstandarRetardo').prop('disabled', false);
    });

    $('#cphContenido_chkBytesRecibidos').change(function () {
        var blnActivo = $("#cphContenido_chkBytesRecibidos").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtBytesRecibidos").prop('disabled', true);
        else
            $('#cphContenido_txtBytesRecibidos').prop('disabled', false);
    });

    $('#cphContenido_chkThroughputPromedio').change(function () {
        var blnActivo = $("#cphContenido_chkThroughputPromedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtThroughputPromedio").prop('disabled', true);
        else
            $('#cphContenido_txtThroughputPromedio').prop('disabled', false);
    });

    $('#cphContenido_chkDescartePaquetes').change(function () {
        var blnActivo = $("#cphContenido_chkDescartePaquetes").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDescartePaquetes").prop('disabled', true);
        else
            $('#cphContenido_txtDescartePaquetes').prop('disabled', false);
    });

    $('#cphContenido_chkPantallaResultadoPruebaDITG').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaResultadoPruebaDITG").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaResultadoPruebaDITG, "#divPantallaResultadoPruebaDITG");
        else
            habilitarRealUploader(true, divPantallaResultadoPruebaDITG, "#divPantallaResultadoPruebaDITG");
    });

    $('#cphContenido_chkFechaHoraRouterDesdeNodoA').change(function () {
        var blnActivo = $("#cphContenido_chkFechaHoraRouterDesdeNodoA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divFechaHoraRouterDesdeNodoA, "#divFechaHoraRouterDesdeNodoA");
        else
            habilitarRealUploader(true, divFechaHoraRouterDesdeNodoA, "#divFechaHoraRouterDesdeNodoA");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda, "#divPingTodosUsuariosSoloMicroonda");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda, "#divPingTodosUsuariosSoloMicroonda");
    });

    $('#cphContenido_chkDireccionesMAC').change(function () {
        var blnActivo = $("#cphContenido_chkDireccionesMAC").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divDireccionesMAC, "#divDireccionesMAC");
        else
            habilitarRealUploader(true, divDireccionesMAC, "#divDireccionesMAC");
    });

    $('#cphContenido_chkResultadoPruebaDITG').change(function () {
        var blnActivo = $("#cphContenido_chkResultadoPruebaDITG").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divResultadoPruebaDITG, "#divResultadoPruebaDITG");
        else
            habilitarRealUploader(true, divResultadoPruebaDITG, "#divResultadoPruebaDITG");
    });

    poTiempoPruebaComentario = $("#spTiempoPruebaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTiempoPruebaComentario').html();
        }
    });

    poTiempoPruebaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTiempoPruebaComentario.on('shown.bs.popover', function () {
        $("#txtTiempoPruebaComentario").val($("#cphContenido_hfTiempoPruebaComentario").val());
        $("#txtTiempoPruebaComentario").focus();
        $("#txtTiempoPruebaComentario").keyup(function () {
            $("#cphContenido_hfTiempoPruebaComentario").val($(this).val());
        });
    });

    poRetardoMinimoComentario = $("#spRetardoMinimoComentario").popover({
        html: true,
        content: function () {
            return $('#pocRetardoMinimoComentario').html();
        }
    });

    poRetardoMinimoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRetardoMinimoComentario.on('shown.bs.popover', function () {
        $("#txtRetardoMinimoComentario").val($("#cphContenido_hfRetardoMinimoComentario").val());
        $("#txtRetardoMinimoComentario").focus();
        $("#txtRetardoMinimoComentario").keyup(function () {
            $("#cphContenido_hfRetardoMinimoComentario").val($(this).val());
        });
    });

    poRetardoMaximoComentario = $("#spRetardoMaximoComentario").popover({
        html: true,
        content: function () {
            return $('#pocRetardoMaximoComentario').html();
        }
    });

    poRetardoMaximoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRetardoMaximoComentario.on('shown.bs.popover', function () {
        $("#txtRetardoMaximoComentario").val($("#cphContenido_hfRetardoMaximoComentario").val());
        $("#txtRetardoMaximoComentario").focus();
        $("#txtRetardoMaximoComentario").keyup(function () {
            $("#cphContenido_hfRetardoMaximoComentario").val($(this).val());
        });
    });

    poRetardoPromedioComentario = $("#spRetardoPromedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocRetardoPromedioComentario').html();
        }
    });

    poRetardoPromedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRetardoPromedioComentario.on('shown.bs.popover', function () {
        $("#txtRetardoPromedioComentario").val($("#cphContenido_hfRetardoPromedioComentario").val());
        $("#txtRetardoPromedioComentario").focus();
        $("#txtRetardoPromedioComentario").keyup(function () {
            $("#cphContenido_hfRetardoPromedioComentario").val($(this).val());
        });
    });

    poJitterPromedioComentario = $("#spJitterPromedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocJitterPromedioComentario').html();
        }
    });

    poJitterPromedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poJitterPromedioComentario.on('shown.bs.popover', function () {
        $("#txtJitterPromedioComentario").val($("#cphContenido_hfJitterPromedioComentario").val());
        $("#txtJitterPromedioComentario").focus();
        $("#txtJitterPromedioComentario").keyup(function () {
            $("#cphContenido_hfJitterPromedioComentario").val($(this).val());
        });
    });

    poDesviacionEstandarRetardoComentario = $("#spDesviacionEstandarRetardoComentario").popover({
        html: true,
        content: function () {
            return $('#pocDesviacionEstandarRetardoComentario').html();
        }
    });

    poDesviacionEstandarRetardoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDesviacionEstandarRetardoComentario.on('shown.bs.popover', function () {
        $("#txtDesviacionEstandarRetardoComentario").val($("#cphContenido_hfDesviacionEstandarRetardoComentario").val());
        $("#txtDesviacionEstandarRetardoComentario").focus();
        $("#txtDesviacionEstandarRetardoComentario").keyup(function () {
            $("#cphContenido_hfDesviacionEstandarRetardoComentario").val($(this).val());
        });
    });

    poBytesRecibidosComentario = $("#spBytesRecibidosComentario").popover({
        html: true,
        content: function () {
            return $('#pocBytesRecibidosComentario').html();
        }
    });

    poBytesRecibidosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poBytesRecibidosComentario.on('shown.bs.popover', function () {
        $("#txtBytesRecibidosComentario").val($("#cphContenido_hfBytesRecibidosComentario").val());
        $("#txtBytesRecibidosComentario").focus();
        $("#txtBytesRecibidosComentario").keyup(function () {
            $("#cphContenido_hfBytesRecibidosComentario").val($(this).val());
        });
    });

    poThroughputPromedioComentario = $("#spThroughputPromedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocThroughputPromedioComentario').html();
        }
    });

    poThroughputPromedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poThroughputPromedioComentario.on('shown.bs.popover', function () {
        $("#txtThroughputPromedioComentario").val($("#cphContenido_hfThroughputPromedioComentario").val());
        $("#txtThroughputPromedioComentario").focus();
        $("#txtThroughputPromedioComentario").keyup(function () {
            $("#cphContenido_hfThroughputPromedioComentario").val($(this).val());
        });
    });

    poDescartePaquetesComentario = $("#spDescartePaquetesComentario").popover({
        html: true,
        content: function () {
            return $('#pocDescartePaquetesComentario').html();
        }
    });

    poDescartePaquetesComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDescartePaquetesComentario.on('shown.bs.popover', function () {
        $("#txtDescartePaquetesComentario").val($("#cphContenido_hfDescartePaquetesComentario").val());
        $("#txtDescartePaquetesComentario").focus();
        $("#txtDescartePaquetesComentario").keyup(function () {
            $("#cphContenido_hfDescartePaquetesComentario").val($(this).val());
        });
    });

    poPantallaResultadoPruebaDITGComentario = $("#spPantallaResultadoPruebaDITGComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaResultadoPruebaDITGComentario').html();
        }
    });

    poPantallaResultadoPruebaDITGComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaResultadoPruebaDITGComentario.on('shown.bs.popover', function () {
        $("#txtPantallaResultadoPruebaDITGComentario").val($("#cphContenido_hfPantallaResultadoPruebaDITGComentario").val());
        $("#txtPantallaResultadoPruebaDITGComentario").focus();
        $("#txtPantallaResultadoPruebaDITGComentario").keyup(function () {
            $("#cphContenido_hfPantallaResultadoPruebaDITGComentario").val($(this).val());
        });
    });

    poFechaHoraRouterDesdeNodoAComentario = $("#spFechaHoraRouterDesdeNodoAComentario").popover({
        html: true,
        content: function () {
            return $('#pocFechaHoraRouterDesdeNodoAComentario').html();
        }
    });

    poFechaHoraRouterDesdeNodoAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poFechaHoraRouterDesdeNodoAComentario.on('shown.bs.popover', function () {
        $("#txtFechaHoraRouterDesdeNodoAComentario").val($("#cphContenido_hfFechaHoraRouterDesdeNodoAComentario").val());
        $("#txtFechaHoraRouterDesdeNodoAComentario").focus();
        $("#txtFechaHoraRouterDesdeNodoAComentario").keyup(function () {
            $("#cphContenido_hfFechaHoraRouterDesdeNodoAComentario").val($(this).val());
        });
    });

    poPingTodosUsuariosSoloMicroondaComentario = $("#spPingTodosUsuariosSoloMicroondaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingTodosUsuariosSoloMicroondaComentario').html();
        }
    });

    poPingTodosUsuariosSoloMicroondaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingTodosUsuariosSoloMicroondaComentario.on('shown.bs.popover', function () {
        $("#txtPingTodosUsuariosSoloMicroondaComentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroondaComentario").val());
        $("#txtPingTodosUsuariosSoloMicroondaComentario").focus();
        $("#txtPingTodosUsuariosSoloMicroondaComentario").keyup(function () {
            $("#cphContenido_hfPingTodosUsuariosSoloMicroondaComentario").val($(this).val());
        });
    });

    poDireccionesMACComentario = $("#spDireccionesMACComentario").popover({
        html: true,
        content: function () {
            return $('#pocDireccionesMACComentario').html();
        }
    });

    poDireccionesMACComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDireccionesMACComentario.on('shown.bs.popover', function () {
        $("#txtDireccionesMACComentario").val($("#cphContenido_hfDireccionesMACComentario").val());
        $("#txtDireccionesMACComentario").focus();
        $("#txtDireccionesMACComentario").keyup(function () {
            $("#cphContenido_hfDireccionesMACComentario").val($(this).val());
        });
    });

    poResultadoPruebaDITGComentario = $("#spResultadoPruebaDITGComentario").popover({
        html: true,
        content: function () {
            return $('#pocResultadoPruebaDITGComentario').html();
        }
    });

    poResultadoPruebaDITGComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poResultadoPruebaDITGComentario.on('shown.bs.popover', function () {
        $("#txtResultadoPruebaDITGComentario").val($("#cphContenido_hfResultadoPruebaDITGComentario").val());
        $("#txtResultadoPruebaDITGComentario").focus();
        $("#txtResultadoPruebaDITGComentario").keyup(function () {
            $("#cphContenido_hfResultadoPruebaDITGComentario").val($(this).val());
        });
    });

    var divPantallaResultadoPruebaDITG = new RealUploader("#divPantallaResultadoPruebaDITG", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPantallaResultadoPruebaDITG').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaResultadoPruebaDITG').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaResultadoPruebaDITG').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaResultadoPruebaDITG').val(fileNamesUploaded);
            },
        }
    });

    var divFechaHoraRouterDesdeNodoA = new RealUploader("#divFechaHoraRouterDesdeNodoA", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfFechaHoraRouterDesdeNodoA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfFechaHoraRouterDesdeNodoA').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfFechaHoraRouterDesdeNodoA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfFechaHoraRouterDesdeNodoA').val(fileNamesUploaded);
            },
        }
    });

    var divPingTodosUsuariosSoloMicroonda = new RealUploader("#divPingTodosUsuariosSoloMicroonda", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val(fileNamesUploaded);
            },
        }
    });

    var divDireccionesMAC = new RealUploader("#divDireccionesMAC", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfDireccionesMAC').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfDireccionesMAC').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfDireccionesMAC').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfDireccionesMAC').val(fileNamesUploaded);
            },
        }
    });

    var divResultadoPruebaDITG = new RealUploader("#divResultadoPruebaDITG", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        isImage: true,
        listeners: {
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfResultadoPruebaDITG').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfResultadoPruebaDITG').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfResultadoPruebaDITG').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfResultadoPruebaDITG').val(fileNamesUploaded);
            },
        }
    });

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