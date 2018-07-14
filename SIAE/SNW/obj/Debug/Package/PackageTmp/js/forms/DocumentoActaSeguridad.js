$(document).ready(function () {

    // #region Carátula

    // #region Fecha

    //No se debe poner el control readonly en el formulario, este metodo se encarga da hacerlo
    var pckFecha = $("#cphContenido_txtFecha").pickadate({
        firstDay: true,
        format: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true
    });

    $('#cphContenido_chkFecha').change(function () {
        var blnActivo = $("#cphContenido_chkFecha").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtFecha").prop('disabled', true);
        else
            $('#cphContenido_txtFecha').prop('disabled', false);
    });

    poFechaComentario = $("#spFechaComentario").popover({
        html: true,
        content: function () {
            return $('#pocFechaComentario').html();
        }
    });

    poFechaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poFechaComentario.on('shown.bs.popover', function () {
        $("#txtFechaComentario").val($("#cphContenido_hfFechaComentario").val());
        $("#txtFechaComentario").focus();
        $("#txtFechaComentario").keyup(function () {
            $("#cphContenido_hfFechaComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    $("#cphContenido_chkFecha").trigger("change");

    // #endregion

    // #endregion

    // #region Reporte fotográfico

    // #region 01.- REPORTE FOTOGRÁFICO

    // #region Foto 1: Fachada del Nodo

    $('#cphContenido_chkFachadaNodo').change(function () {
        var blnActivo = $("#cphContenido_chkFachadaNodo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divFachadaNodo, "#divFachadaNodo");
        else
            habilitarRealUploader(true, divFachadaNodo, "#divFachadaNodo");
    });

    poFachadaNodoComentario = $("#spFachadaNodoComentario").popover({
        html: true,
        content: function () {
            return $('#pocFachadaNodoComentario').html();
        }
    });

    poFachadaNodoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poFachadaNodoComentario.on('shown.bs.popover', function () {
        $("#txtFachadaNodoComentario").val($("#cphContenido_hfFachadaNodoComentario").val());
        $("#txtFachadaNodoComentario").focus();
        $("#txtFachadaNodoComentario").keyup(function () {
            $("#cphContenido_hfFachadaNodoComentario").val($(this).val());
        });
    });

    var divFachadaNodo = new RealUploader("#divFachadaNodo", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfFachadaNodo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfFachadaNodo').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfFachadaNodo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfFachadaNodo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfFachadaNodo').val() != "") {
        divFachadaNodo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfFachadaNodo').val(), $('#cphContenido_hfFachadaNodo').val());
    }

    $("#cphContenido_chkFachadaNodo").trigger("change");

    // #endregion      

    // #region Foto 2: Sala Equipos Panorámica Rack

    $('#cphContenido_chkSalaEquiposPanoramicaRack').change(function () {
        var blnActivo = $("#cphContenido_chkSalaEquiposPanoramicaRack").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSalaEquiposPanoramicaRack, "#divSalaEquiposPanoramicaRack");
        else
            habilitarRealUploader(true, divSalaEquiposPanoramicaRack, "#divSalaEquiposPanoramicaRack");
    });

    poSalaEquiposPanoramicaRackComentario = $("#spSalaEquiposPanoramicaRackComentario").popover({
        html: true,
        content: function () {
            return $('#pocSalaEquiposPanoramicaRackComentario').html();
        }
    });

    poSalaEquiposPanoramicaRackComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSalaEquiposPanoramicaRackComentario.on('shown.bs.popover', function () {
        $("#txtSalaEquiposPanoramicaRackComentario").val($("#cphContenido_hfSalaEquiposPanoramicaRackComentario").val());
        $("#txtSalaEquiposPanoramicaRackComentario").focus();
        $("#txtSalaEquiposPanoramicaRackComentario").keyup(function () {
            $("#cphContenido_hfSalaEquiposPanoramicaRackComentario").val($(this).val());
        });
    });

    var divSalaEquiposPanoramicaRack = new RealUploader("#divSalaEquiposPanoramicaRack", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSalaEquiposPanoramicaRack').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSalaEquiposPanoramicaRack').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSalaEquiposPanoramicaRack').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSalaEquiposPanoramicaRack').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSalaEquiposPanoramicaRack').val() != "") {
        divSalaEquiposPanoramicaRack.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSalaEquiposPanoramicaRack').val(), $('#cphContenido_hfSalaEquiposPanoramicaRack').val());
    }

    $("#cphContenido_chkSalaEquiposPanoramicaRack").trigger("change");

    // #endregion

    // #region Foto 3: Panorámica Interior 01

    $('#cphContenido_chkPanoramicaInterior01').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaInterior01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaInterior01, "#divPanoramicaInterior01");
        else
            habilitarRealUploader(true, divPanoramicaInterior01, "#divPanoramicaInterior01");
    });

    poPanoramicaInterior01Comentario = $("#spPanoramicaInterior01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaInterior01Comentario').html();
        }
    });

    poPanoramicaInterior01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaInterior01Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaInterior01Comentario").val($("#cphContenido_hfPanoramicaInterior01Comentario").val());
        $("#txtPanoramicaInterior01Comentario").focus();
        $("#txtPanoramicaInterior01Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaInterior01Comentario").val($(this).val());
        });
    });

    var divPanoramicaInterior01 = new RealUploader("#divPanoramicaInterior01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPanoramicaInterior01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaInterior01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaInterior01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaInterior01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaInterior01').val() != "") {
        divPanoramicaInterior01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaInterior01').val(), $('#cphContenido_hfPanoramicaInterior01').val());
    }

    $("#cphContenido_chkPanoramicaInterior01").trigger("change");

    // #endregion

    // #region Foto 4: Panorámica Interior 02

    $('#cphContenido_chkPanoramicaInterior02').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaInterior02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaInterior02, "#divPanoramicaInterior02");
        else
            habilitarRealUploader(true, divPanoramicaInterior02, "#divPanoramicaInterior02");
    });

    poPanoramicaInterior02Comentario = $("#spPanoramicaInterior02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaInterior02Comentario').html();
        }
    });

    poPanoramicaInterior02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaInterior02Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaInterior02Comentario").val($("#cphContenido_hfPanoramicaInterior02Comentario").val());
        $("#txtPanoramicaInterior02Comentario").focus();
        $("#txtPanoramicaInterior02Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaInterior02Comentario").val($(this).val());
        });
    });

    var divPanoramicaInterior02 = new RealUploader("#divPanoramicaInterior02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPanoramicaInterior02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaInterior02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaInterior02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaInterior02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaInterior02').val() != "") {
        divPanoramicaInterior02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaInterior02').val(), $('#cphContenido_hfPanoramicaInterior02').val());
    }

    $("#cphContenido_chkPanoramicaInterior02").trigger("change");

    // #endregion

    // #region Foto 5: Panorámica de Equipos en Patio

    $('#cphContenido_chkPanoramicaEquiposPatio').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaEquiposPatio").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaEquiposPatio, "#divPanoramicaEquiposPatio");
        else
            habilitarRealUploader(true, divPanoramicaEquiposPatio, "#divPanoramicaEquiposPatio");
    });

    poPanoramicaEquiposPatioComentario = $("#spPanoramicaEquiposPatioComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaEquiposPatioComentario').html();
        }
    });

    poPanoramicaEquiposPatioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaEquiposPatioComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaEquiposPatioComentario").val($("#cphContenido_hfPanoramicaEquiposPatioComentario").val());
        $("#txtPanoramicaEquiposPatioComentario").focus();
        $("#txtPanoramicaEquiposPatioComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaEquiposPatioComentario").val($(this).val());
        });
    });

    var divPanoramicaEquiposPatio = new RealUploader("#divPanoramicaEquiposPatio", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPanoramicaEquiposPatio').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEquiposPatio').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaEquiposPatio').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEquiposPatio').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaEquiposPatio').val() != "") {
        divPanoramicaEquiposPatio.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaEquiposPatio').val(), $('#cphContenido_hfPanoramicaEquiposPatio').val());
    }

    $("#cphContenido_chkPanoramicaEquiposPatio").trigger("change");

    // #endregion

    // #region Foto 6: Breaker Asignado para Seguridad

    $('#cphContenido_chkBreakerAsignadoSeguridad').change(function () {
        var blnActivo = $("#cphContenido_chkBreakerAsignadoSeguridad").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divBreakerAsignadoSeguridad, "#divBreakerAsignadoSeguridad");
        else
            habilitarRealUploader(true, divBreakerAsignadoSeguridad, "#divBreakerAsignadoSeguridad");
    });

    poBreakerAsignadoSeguridadComentario = $("#spBreakerAsignadoSeguridadComentario").popover({
        html: true,
        content: function () {
            return $('#pocBreakerAsignadoSeguridadComentario').html();
        }
    });

    poBreakerAsignadoSeguridadComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poBreakerAsignadoSeguridadComentario.on('shown.bs.popover', function () {
        $("#txtBreakerAsignadoSeguridadComentario").val($("#cphContenido_hfBreakerAsignadoSeguridadComentario").val());
        $("#txtBreakerAsignadoSeguridadComentario").focus();
        $("#txtBreakerAsignadoSeguridadComentario").keyup(function () {
            $("#cphContenido_hfBreakerAsignadoSeguridadComentario").val($(this).val());
        });
    });

    var divBreakerAsignadoSeguridad = new RealUploader("#divBreakerAsignadoSeguridad", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfBreakerAsignadoSeguridad').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfBreakerAsignadoSeguridad').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfBreakerAsignadoSeguridad').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfBreakerAsignadoSeguridad').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfBreakerAsignadoSeguridad').val() != "") {
        divBreakerAsignadoSeguridad.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfBreakerAsignadoSeguridad').val(), $('#cphContenido_hfBreakerAsignadoSeguridad').val());
    }

    $("#cphContenido_chkBreakerAsignadoSeguridad").trigger("change");

    // #endregion

    // #region Foto 7.01: Cerradura Electromagnética Externa

    $('#cphContenido_chkCerraduraElectromagneticaExterna01').change(function () {
        var blnActivo = $("#cphContenido_chkCerraduraElectromagneticaExterna01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCerraduraElectromagneticaExterna01, "#divCerraduraElectromagneticaExterna01");
        else
            habilitarRealUploader(true, divCerraduraElectromagneticaExterna01, "#divCerraduraElectromagneticaExterna01");
    });

    poCerraduraElectromagneticaExterna01Comentario = $("#spCerraduraElectromagneticaExterna01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocCerraduraElectromagneticaExterna01Comentario').html();
        }
    });

    poCerraduraElectromagneticaExterna01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCerraduraElectromagneticaExterna01Comentario.on('shown.bs.popover', function () {
        $("#txtCerraduraElectromagneticaExterna01Comentario").val($("#cphContenido_hfCerraduraElectromagneticaExterna01Comentario").val());
        $("#txtCerraduraElectromagneticaExterna01Comentario").focus();
        $("#txtCerraduraElectromagneticaExterna01Comentario").keyup(function () {
            $("#cphContenido_hfCerraduraElectromagneticaExterna01Comentario").val($(this).val());
        });
    });

    var divCerraduraElectromagneticaExterna01 = new RealUploader("#divCerraduraElectromagneticaExterna01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCerraduraElectromagneticaExterna01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCerraduraElectromagneticaExterna01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCerraduraElectromagneticaExterna01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCerraduraElectromagneticaExterna01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCerraduraElectromagneticaExterna01').val() != "") {
        divCerraduraElectromagneticaExterna01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCerraduraElectromagneticaExterna01').val(), $('#cphContenido_hfCerraduraElectromagneticaExterna01').val());
    }

    $("#cphContenido_chkCerraduraElectromagneticaExterna01").trigger("change");

    // #endregion

    // #region Foto 7.02: Cerradura Electromagnética Externa

    $('#cphContenido_chkCerraduraElectromagneticaExterna02').change(function () {
        var blnActivo = $("#cphContenido_chkCerraduraElectromagneticaExterna02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCerraduraElectromagneticaExterna02, "#divCerraduraElectromagneticaExterna02");
        else
            habilitarRealUploader(true, divCerraduraElectromagneticaExterna02, "#divCerraduraElectromagneticaExterna02");
    });

    poCerraduraElectromagneticaExterna02Comentario = $("#spCerraduraElectromagneticaExterna02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocCerraduraElectromagneticaExterna02Comentario').html();
        }
    });

    poCerraduraElectromagneticaExterna02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCerraduraElectromagneticaExterna02Comentario.on('shown.bs.popover', function () {
        $("#txtCerraduraElectromagneticaExterna02Comentario").val($("#cphContenido_hfCerraduraElectromagneticaExterna02Comentario").val());
        $("#txtCerraduraElectromagneticaExterna02Comentario").focus();
        $("#txtCerraduraElectromagneticaExterna02Comentario").keyup(function () {
            $("#cphContenido_hfCerraduraElectromagneticaExterna02Comentario").val($(this).val());
        });
    });

    var divCerraduraElectromagneticaExterna02 = new RealUploader("#divCerraduraElectromagneticaExterna02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCerraduraElectromagneticaExterna02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCerraduraElectromagneticaExterna02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCerraduraElectromagneticaExterna02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCerraduraElectromagneticaExterna02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCerraduraElectromagneticaExterna02').val() != "") {
        divCerraduraElectromagneticaExterna02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCerraduraElectromagneticaExterna02').val(), $('#cphContenido_hfCerraduraElectromagneticaExterna02').val());
    }

    $("#cphContenido_chkCerraduraElectromagneticaExterna02").trigger("change");

    // #endregion

    // #region Foto 8.01: Sensor Magnético Externo

    $('#cphContenido_chkSensorMagneticoExterno01').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMagneticoExterno01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMagneticoExterno01, "#divSensorMagneticoExterno01");
        else
            habilitarRealUploader(true, divSensorMagneticoExterno01, "#divSensorMagneticoExterno01");
    });

    poSensorMagneticoExterno01Comentario = $("#spSensorMagneticoExterno01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMagneticoExterno01Comentario').html();
        }
    });

    poSensorMagneticoExterno01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMagneticoExterno01Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMagneticoExterno01Comentario").val($("#cphContenido_hfSensorMagneticoExterno01Comentario").val());
        $("#txtSensorMagneticoExterno01Comentario").focus();
        $("#txtSensorMagneticoExterno01Comentario").keyup(function () {
            $("#cphContenido_hfSensorMagneticoExterno01Comentario").val($(this).val());
        });
    });

    var divSensorMagneticoExterno01 = new RealUploader("#divSensorMagneticoExterno01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMagneticoExterno01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoExterno01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMagneticoExterno01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoExterno01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMagneticoExterno01').val() != "") {
        divSensorMagneticoExterno01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMagneticoExterno01').val(), $('#cphContenido_hfSensorMagneticoExterno01').val());
    }

    $("#cphContenido_chkSensorMagneticoExterno01").trigger("change");

    // #endregion

    // #region Foto 8.02: Sensor Magnético Externo

    $('#cphContenido_chkSensorMagneticoExterno02').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMagneticoExterno02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMagneticoExterno02, "#divSensorMagneticoExterno02");
        else
            habilitarRealUploader(true, divSensorMagneticoExterno02, "#divSensorMagneticoExterno02");
    });

    poSensorMagneticoExterno02Comentario = $("#spSensorMagneticoExterno02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMagneticoExterno02Comentario').html();
        }
    });

    poSensorMagneticoExterno02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMagneticoExterno02Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMagneticoExterno02Comentario").val($("#cphContenido_hfSensorMagneticoExterno02Comentario").val());
        $("#txtSensorMagneticoExterno02Comentario").focus();
        $("#txtSensorMagneticoExterno02Comentario").keyup(function () {
            $("#cphContenido_hfSensorMagneticoExterno02Comentario").val($(this).val());
        });
    });

    var divSensorMagneticoExterno02 = new RealUploader("#divSensorMagneticoExterno02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMagneticoExterno02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoExterno02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMagneticoExterno02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoExterno02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMagneticoExterno02').val() != "") {
        divSensorMagneticoExterno02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMagneticoExterno02').val(), $('#cphContenido_hfSensorMagneticoExterno02').val());
    }

    $("#cphContenido_chkSensorMagneticoExterno02").trigger("change");

    // #endregion

    // #region Foto 9: Cerradura Eléctrica Externa

    $('#cphContenido_chkCerraduraElectricaExterna').change(function () {
        var blnActivo = $("#cphContenido_chkCerraduraElectricaExterna").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCerraduraElectricaExterna, "#divCerraduraElectricaExterna");
        else
            habilitarRealUploader(true, divCerraduraElectricaExterna, "#divCerraduraElectricaExterna");
    });

    poCerraduraElectricaExternaComentario = $("#spCerraduraElectricaExternaComentario").popover({
        html: true,
        content: function () {
            return $('#pocCerraduraElectricaExternaComentario').html();
        }
    });

    poCerraduraElectricaExternaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCerraduraElectricaExternaComentario.on('shown.bs.popover', function () {
        $("#txtCerraduraElectricaExternaComentario").val($("#cphContenido_hfCerraduraElectricaExternaComentario").val());
        $("#txtCerraduraElectricaExternaComentario").focus();
        $("#txtCerraduraElectricaExternaComentario").keyup(function () {
            $("#cphContenido_hfCerraduraElectricaExternaComentario").val($(this).val());
        });
    });

    var divCerraduraElectricaExterna = new RealUploader("#divCerraduraElectricaExterna", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCerraduraElectricaExterna').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCerraduraElectricaExterna').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCerraduraElectricaExterna').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCerraduraElectricaExterna').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCerraduraElectricaExterna').val() != "") {
        divCerraduraElectricaExterna.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCerraduraElectricaExterna').val(), $('#cphContenido_hfCerraduraElectricaExterna').val());
    }

    $("#cphContenido_chkCerraduraElectricaExterna").trigger("change");

    // #endregion

    // #region Foto 10: Sensor Movimiento 90° Externo N°1

    $('#cphContenido_chkSensorMovimiento90Externo01').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMovimiento90Externo01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMovimiento90Externo01, "#divSensorMovimiento90Externo01");
        else
            habilitarRealUploader(true, divSensorMovimiento90Externo01, "#divSensorMovimiento90Externo01");
    });

    poSensorMovimiento90Externo01Comentario = $("#spSensorMovimiento90Externo01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMovimiento90Externo01Comentario').html();
        }
    });

    poSensorMovimiento90Externo01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMovimiento90Externo01Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMovimiento90Externo01Comentario").val($("#cphContenido_hfSensorMovimiento90Externo01Comentario").val());
        $("#txtSensorMovimiento90Externo01Comentario").focus();
        $("#txtSensorMovimiento90Externo01Comentario").keyup(function () {
            $("#cphContenido_hfSensorMovimiento90Externo01Comentario").val($(this).val());
        });
    });

    var divSensorMovimiento90Externo01 = new RealUploader("#divSensorMovimiento90Externo01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMovimiento90Externo01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMovimiento90Externo01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMovimiento90Externo01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMovimiento90Externo01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMovimiento90Externo01').val() != "") {
        divSensorMovimiento90Externo01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMovimiento90Externo01').val(), $('#cphContenido_hfSensorMovimiento90Externo01').val());
    }

    $("#cphContenido_chkSensorMovimiento90Externo01").trigger("change");

    // #endregion

    // #region Foto 11: Sensor Movimiento 90° Externo N°2

    $('#cphContenido_chkSensorMovimiento90Externo02').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMovimiento90Externo02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMovimiento90Externo02, "#divSensorMovimiento90Externo02");
        else
            habilitarRealUploader(true, divSensorMovimiento90Externo02, "#divSensorMovimiento90Externo02");
    });

    poSensorMovimiento90Externo02Comentario = $("#spSensorMovimiento90Externo02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMovimiento90Externo02Comentario').html();
        }
    });

    poSensorMovimiento90Externo02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMovimiento90Externo02Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMovimiento90Externo02Comentario").val($("#cphContenido_hfSensorMovimiento90Externo02Comentario").val());
        $("#txtSensorMovimiento90Externo02Comentario").focus();
        $("#txtSensorMovimiento90Externo02Comentario").keyup(function () {
            $("#cphContenido_hfSensorMovimiento90Externo02Comentario").val($(this).val());
        });
    });

    var divSensorMovimiento90Externo02 = new RealUploader("#divSensorMovimiento90Externo02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMovimiento90Externo02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMovimiento90Externo02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMovimiento90Externo02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMovimiento90Externo02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMovimiento90Externo02').val() != "") {
        divSensorMovimiento90Externo02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMovimiento90Externo02').val(), $('#cphContenido_hfSensorMovimiento90Externo02').val());
    }

    $("#cphContenido_chkSensorMovimiento90Externo02").trigger("change");

    // #endregion

    // #region Foto 12: Sirena Estroboscópica

    $('#cphContenido_chkSirenaEstroboscopica').change(function () {
        var blnActivo = $("#cphContenido_chkSirenaEstroboscopica").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSirenaEstroboscopica, "#divSirenaEstroboscopica");
        else
            habilitarRealUploader(true, divSirenaEstroboscopica, "#divSirenaEstroboscopica");
    });

    poSirenaEstroboscopicaComentario = $("#spSirenaEstroboscopicaComentario").popover({
        html: true,
        content: function () {
            return $('#pocSirenaEstroboscopicaComentario').html();
        }
    });

    poSirenaEstroboscopicaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSirenaEstroboscopicaComentario.on('shown.bs.popover', function () {
        $("#txtSirenaEstroboscopicaComentario").val($("#cphContenido_hfSirenaEstroboscopicaComentario").val());
        $("#txtSirenaEstroboscopicaComentario").focus();
        $("#txtSirenaEstroboscopicaComentario").keyup(function () {
            $("#cphContenido_hfSirenaEstroboscopicaComentario").val($(this).val());
        });
    });

    var divSirenaEstroboscopica = new RealUploader("#divSirenaEstroboscopica", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSirenaEstroboscopica').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSirenaEstroboscopica').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSirenaEstroboscopica').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSirenaEstroboscopica').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSirenaEstroboscopica').val() != "") {
        divSirenaEstroboscopica.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSirenaEstroboscopica').val(), $('#cphContenido_hfSirenaEstroboscopica').val());
    }

    $("#cphContenido_chkSirenaEstroboscopica").trigger("change");

    // #endregion

    // #region Foto 13: Lector Biométrico

    $('#cphContenido_chkLectorBiometrico').change(function () {
        var blnActivo = $("#cphContenido_chkLectorBiometrico").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divLectorBiometrico, "#divLectorBiometrico");
        else
            habilitarRealUploader(true, divLectorBiometrico, "#divLectorBiometrico");
    });

    poLectorBiometricoComentario = $("#spLectorBiometricoComentario").popover({
        html: true,
        content: function () {
            return $('#pocLectorBiometricoComentario').html();
        }
    });

    poLectorBiometricoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poLectorBiometricoComentario.on('shown.bs.popover', function () {
        $("#txtLectorBiometricoComentario").val($("#cphContenido_hfLectorBiometricoComentario").val());
        $("#txtLectorBiometricoComentario").focus();
        $("#txtLectorBiometricoComentario").keyup(function () {
            $("#cphContenido_hfLectorBiometricoComentario").val($(this).val());
        });
    });

    var divLectorBiometrico = new RealUploader("#divLectorBiometrico", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfLectorBiometrico').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfLectorBiometrico').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfLectorBiometrico').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfLectorBiometrico').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfLectorBiometrico').val() != "") {
        divLectorBiometrico.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfLectorBiometrico').val(), $('#cphContenido_hfLectorBiometrico').val());
    }

    $("#cphContenido_chkLectorBiometrico").trigger("change");

    // #endregion

    // #region Foto 14: Lector Tarjeta

    $('#cphContenido_chkLectorTarjeta').change(function () {
        var blnActivo = $("#cphContenido_chkLectorTarjeta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divLectorTarjeta, "#divLectorTarjeta");
        else
            habilitarRealUploader(true, divLectorTarjeta, "#divLectorTarjeta");
    });

    poLectorTarjetaComentario = $("#spLectorTarjetaComentario").popover({
        html: true,
        content: function () {
            return $('#pocLectorTarjetaComentario').html();
        }
    });

    poLectorTarjetaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poLectorTarjetaComentario.on('shown.bs.popover', function () {
        $("#txtLectorTarjetaComentario").val($("#cphContenido_hfLectorTarjetaComentario").val());
        $("#txtLectorTarjetaComentario").focus();
        $("#txtLectorTarjetaComentario").keyup(function () {
            $("#cphContenido_hfLectorTarjetaComentario").val($(this).val());
        });
    });

    var divLectorTarjeta = new RealUploader("#divLectorTarjeta", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfLectorTarjeta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfLectorTarjeta').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfLectorTarjeta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfLectorTarjeta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfLectorTarjeta').val() != "") {
        divLectorTarjeta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfLectorTarjeta').val(), $('#cphContenido_hfLectorTarjeta').val());
    }

    $("#cphContenido_chkLectorTarjeta").trigger("change");

    // #endregion

    // #region Foto 15: Cámara Exterior PTZ

    $('#cphContenido_chkCamaraExteriorPTZ').change(function () {
        var blnActivo = $("#cphContenido_chkCamaraExteriorPTZ").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCamaraExteriorPTZ, "#divCamaraExteriorPTZ");
        else
            habilitarRealUploader(true, divCamaraExteriorPTZ, "#divCamaraExteriorPTZ");
    });

    poCamaraExteriorPTZComentario = $("#spCamaraExteriorPTZComentario").popover({
        html: true,
        content: function () {
            return $('#pocCamaraExteriorPTZComentario').html();
        }
    });

    poCamaraExteriorPTZComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCamaraExteriorPTZComentario.on('shown.bs.popover', function () {
        $("#txtCamaraExteriorPTZComentario").val($("#cphContenido_hfCamaraExteriorPTZComentario").val());
        $("#txtCamaraExteriorPTZComentario").focus();
        $("#txtCamaraExteriorPTZComentario").keyup(function () {
            $("#cphContenido_hfCamaraExteriorPTZComentario").val($(this).val());
        });
    });

    var divCamaraExteriorPTZ = new RealUploader("#divCamaraExteriorPTZ", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCamaraExteriorPTZ').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCamaraExteriorPTZ').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCamaraExteriorPTZ').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCamaraExteriorPTZ').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCamaraExteriorPTZ').val() != "") {
        divCamaraExteriorPTZ.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCamaraExteriorPTZ').val(), $('#cphContenido_hfCamaraExteriorPTZ').val());
    }

    $("#cphContenido_chkCamaraExteriorPTZ").trigger("change");

    // #endregion

    // #region Foto 16: Extintor Exterior

    $('#cphContenido_chkExtintorExterior').change(function () {
        var blnActivo = $("#cphContenido_chkExtintorExterior").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divExtintorExterior, "#divExtintorExterior");
        else
            habilitarRealUploader(true, divExtintorExterior, "#divExtintorExterior");
    });

    poExtintorExteriorComentario = $("#spExtintorExteriorComentario").popover({
        html: true,
        content: function () {
            return $('#pocExtintorExteriorComentario').html();
        }
    });

    poExtintorExteriorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poExtintorExteriorComentario.on('shown.bs.popover', function () {
        $("#txtExtintorExteriorComentario").val($("#cphContenido_hfExtintorExteriorComentario").val());
        $("#txtExtintorExteriorComentario").focus();
        $("#txtExtintorExteriorComentario").keyup(function () {
            $("#cphContenido_hfExtintorExteriorComentario").val($(this).val());
        });
    });

    var divExtintorExterior = new RealUploader("#divExtintorExterior", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfExtintorExterior').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfExtintorExterior').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfExtintorExterior').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfExtintorExterior').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfExtintorExterior').val() != "") {
        divExtintorExterior.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfExtintorExterior').val(), $('#cphContenido_hfExtintorExterior').val());
    }

    $("#cphContenido_chkExtintorExterior").trigger("change");

    // #endregion

    // #region Foto 17.01: Sensor Magnético Interno

    $('#cphContenido_chkSensorMagneticoInterno01').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMagneticoInterno01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMagneticoInterno01, "#divSensorMagneticoInterno01");
        else
            habilitarRealUploader(true, divSensorMagneticoInterno01, "#divSensorMagneticoInterno01");
    });

    poSensorMagneticoInterno01Comentario = $("#spSensorMagneticoInterno01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMagneticoInterno01Comentario').html();
        }
    });

    poSensorMagneticoInterno01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMagneticoInterno01Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMagneticoInterno01Comentario").val($("#cphContenido_hfSensorMagneticoInterno01Comentario").val());
        $("#txtSensorMagneticoInterno01Comentario").focus();
        $("#txtSensorMagneticoInterno01Comentario").keyup(function () {
            $("#cphContenido_hfSensorMagneticoInterno01Comentario").val($(this).val());
        });
    });

    var divSensorMagneticoInterno01 = new RealUploader("#divSensorMagneticoInterno01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMagneticoInterno01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoInterno01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMagneticoInterno01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoInterno01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMagneticoInterno01').val() != "") {
        divSensorMagneticoInterno01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMagneticoInterno01').val(), $('#cphContenido_hfSensorMagneticoInterno01').val());
    }

    $("#cphContenido_chkSensorMagneticoInterno01").trigger("change");

    // #endregion

    // #region Foto 17.02: Sensor Magnético Interno

    $('#cphContenido_chkSensorMagneticoInterno02').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMagneticoInterno02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMagneticoInterno02, "#divSensorMagneticoInterno02");
        else
            habilitarRealUploader(true, divSensorMagneticoInterno02, "#divSensorMagneticoInterno02");
    });

    poSensorMagneticoInterno02Comentario = $("#spSensorMagneticoInterno02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMagneticoInterno02Comentario').html();
        }
    });

    poSensorMagneticoInterno02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMagneticoInterno02Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMagneticoInterno02Comentario").val($("#cphContenido_hfSensorMagneticoInterno02Comentario").val());
        $("#txtSensorMagneticoInterno02Comentario").focus();
        $("#txtSensorMagneticoInterno02Comentario").keyup(function () {
            $("#cphContenido_hfSensorMagneticoInterno02Comentario").val($(this).val());
        });
    });

    var divSensorMagneticoInterno02 = new RealUploader("#divSensorMagneticoInterno02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMagneticoInterno02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoInterno02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMagneticoInterno02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMagneticoInterno02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMagneticoInterno02').val() != "") {
        divSensorMagneticoInterno02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMagneticoInterno02').val(), $('#cphContenido_hfSensorMagneticoInterno02').val());
    }

    $("#cphContenido_chkSensorMagneticoInterno02").trigger("change");

    // #endregion

    // #region Foto 18: Sensor Ocupacional

    $('#cphContenido_chkSensorOcupacional').change(function () {
        var blnActivo = $("#cphContenido_chkSensorOcupacional").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorOcupacional, "#divSensorOcupacional");
        else
            habilitarRealUploader(true, divSensorOcupacional, "#divSensorOcupacional");
    });

    poSensorOcupacionalComentario = $("#spSensorOcupacionalComentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorOcupacionalComentario').html();
        }
    });

    poSensorOcupacionalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorOcupacionalComentario.on('shown.bs.popover', function () {
        $("#txtSensorOcupacionalComentario").val($("#cphContenido_hfSensorOcupacionalComentario").val());
        $("#txtSensorOcupacionalComentario").focus();
        $("#txtSensorOcupacionalComentario").keyup(function () {
            $("#cphContenido_hfSensorOcupacionalComentario").val($(this).val());
        });
    });

    var divSensorOcupacional = new RealUploader("#divSensorOcupacional", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorOcupacional').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorOcupacional').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorOcupacional').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorOcupacional').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorOcupacional').val() != "") {
        divSensorOcupacional.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorOcupacional').val(), $('#cphContenido_hfSensorOcupacional').val());
    }

    $("#cphContenido_chkSensorOcupacional").trigger("change");

    // #endregion

    // #region Foto 19: Sensor de Humo

    $('#cphContenido_chkSensorHumo').change(function () {
        var blnActivo = $("#cphContenido_chkSensorHumo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorHumo, "#divSensorHumo");
        else
            habilitarRealUploader(true, divSensorHumo, "#divSensorHumo");
    });

    poSensorHumoComentario = $("#spSensorHumoComentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorHumoComentario').html();
        }
    });

    poSensorHumoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorHumoComentario.on('shown.bs.popover', function () {
        $("#txtSensorHumoComentario").val($("#cphContenido_hfSensorHumoComentario").val());
        $("#txtSensorHumoComentario").focus();
        $("#txtSensorHumoComentario").keyup(function () {
            $("#cphContenido_hfSensorHumoComentario").val($(this).val());
        });
    });

    var divSensorHumo = new RealUploader("#divSensorHumo", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorHumo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorHumo').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorHumo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorHumo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorHumo').val() != "") {
        divSensorHumo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorHumo').val(), $('#cphContenido_hfSensorHumo').val());
    }

    $("#cphContenido_chkSensorHumo").trigger("change");

    // #endregion

    // #region Foto 20: Sensor Movimiento 360

    $('#cphContenido_chkSensorMovimiento360').change(function () {
        var blnActivo = $("#cphContenido_chkSensorMovimiento360").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorMovimiento360, "#divSensorMovimiento360");
        else
            habilitarRealUploader(true, divSensorMovimiento360, "#divSensorMovimiento360");
    });

    poSensorMovimiento360Comentario = $("#spSensorMovimiento360Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorMovimiento360Comentario').html();
        }
    });

    poSensorMovimiento360Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorMovimiento360Comentario.on('shown.bs.popover', function () {
        $("#txtSensorMovimiento360Comentario").val($("#cphContenido_hfSensorMovimiento360Comentario").val());
        $("#txtSensorMovimiento360Comentario").focus();
        $("#txtSensorMovimiento360Comentario").keyup(function () {
            $("#cphContenido_hfSensorMovimiento360Comentario").val($(this).val());
        });
    });

    var divSensorMovimiento360 = new RealUploader("#divSensorMovimiento360", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorMovimiento360').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorMovimiento360').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorMovimiento360').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorMovimiento360').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorMovimiento360').val() != "") {
        divSensorMovimiento360.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorMovimiento360').val(), $('#cphContenido_hfSensorMovimiento360').val());
    }

    $("#cphContenido_chkSensorMovimiento360").trigger("change");

    // #endregion

    // #region Foto 21: Sensor de Inundación

    $('#cphContenido_chkSensorInundacion').change(function () {
        var blnActivo = $("#cphContenido_chkSensorInundacion").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSensorInundacion, "#divSensorInundacion");
        else
            habilitarRealUploader(true, divSensorInundacion, "#divSensorInundacion");
    });

    poSensorInundacionComentario = $("#spSensorInundacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocSensorInundacionComentario').html();
        }
    });

    poSensorInundacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSensorInundacionComentario.on('shown.bs.popover', function () {
        $("#txtSensorInundacionComentario").val($("#cphContenido_hfSensorInundacionComentario").val());
        $("#txtSensorInundacionComentario").focus();
        $("#txtSensorInundacionComentario").keyup(function () {
            $("#cphContenido_hfSensorInundacionComentario").val($(this).val());
        });
    });

    var divSensorInundacion = new RealUploader("#divSensorInundacion", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSensorInundacion').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSensorInundacion').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSensorInundacion').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSensorInundacion').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSensorInundacion').val() != "") {
        divSensorInundacion.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSensorInundacion').val(), $('#cphContenido_hfSensorInundacion').val());
    }

    $("#cphContenido_chkSensorInundacion").trigger("change");

    // #endregion

    // #region Foto 22: Cámara PTZ Interior

    $('#cphContenido_chkCamaraPTZInterior').change(function () {
        var blnActivo = $("#cphContenido_chkCamaraPTZInterior").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCamaraPTZInterior, "#divCamaraPTZInterior");
        else
            habilitarRealUploader(true, divCamaraPTZInterior, "#divCamaraPTZInterior");
    });

    poCamaraPTZInteriorComentario = $("#spCamaraPTZInteriorComentario").popover({
        html: true,
        content: function () {
            return $('#pocCamaraPTZInteriorComentario').html();
        }
    });

    poCamaraPTZInteriorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCamaraPTZInteriorComentario.on('shown.bs.popover', function () {
        $("#txtCamaraPTZInteriorComentario").val($("#cphContenido_hfCamaraPTZInteriorComentario").val());
        $("#txtCamaraPTZInteriorComentario").focus();
        $("#txtCamaraPTZInteriorComentario").keyup(function () {
            $("#cphContenido_hfCamaraPTZInteriorComentario").val($(this).val());
        });
    });

    var divCamaraPTZInterior = new RealUploader("#divCamaraPTZInterior", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCamaraPTZInterior').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCamaraPTZInterior').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCamaraPTZInterior').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCamaraPTZInterior').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCamaraPTZInterior').val() != "") {
        divCamaraPTZInterior.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCamaraPTZInterior').val(), $('#cphContenido_hfCamaraPTZInterior').val());
    }

    $("#cphContenido_chkCamaraPTZInterior").trigger("change");

    // #endregion

    // #region Foto 23: Extintor Interior

    $('#cphContenido_chkExtintorInterior').change(function () {
        var blnActivo = $("#cphContenido_chkExtintorInterior").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divExtintorInterior, "#divExtintorInterior");
        else
            habilitarRealUploader(true, divExtintorInterior, "#divExtintorInterior");
    });

    poExtintorInteriorComentario = $("#spExtintorInteriorComentario").popover({
        html: true,
        content: function () {
            return $('#pocExtintorInteriorComentario').html();
        }
    });

    poExtintorInteriorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poExtintorInteriorComentario.on('shown.bs.popover', function () {
        $("#txtExtintorInteriorComentario").val($("#cphContenido_hfExtintorInteriorComentario").val());
        $("#txtExtintorInteriorComentario").focus();
        $("#txtExtintorInteriorComentario").keyup(function () {
            $("#cphContenido_hfExtintorInteriorComentario").val($(this).val());
        });
    });

    var divExtintorInterior = new RealUploader("#divExtintorInterior", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfExtintorInterior').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfExtintorInterior').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfExtintorInterior').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfExtintorInterior').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfExtintorInterior').val() != "") {
        divExtintorInterior.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfExtintorInterior').val(), $('#cphContenido_hfExtintorInterior').val());
    }

    $("#cphContenido_chkExtintorInterior").trigger("change");

    // #endregion

    // #region Foto 24: Rele (Equipo Interno)

    $('#cphContenido_chkReleEquipoInterno').change(function () {
        var blnActivo = $("#cphContenido_chkReleEquipoInterno").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divReleEquipoInterno, "#divReleEquipoInterno");
        else
            habilitarRealUploader(true, divReleEquipoInterno, "#divReleEquipoInterno");
    });

    poReleEquipoInternoComentario = $("#spReleEquipoInternoComentario").popover({
        html: true,
        content: function () {
            return $('#pocReleEquipoInternoComentario').html();
        }
    });

    poReleEquipoInternoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poReleEquipoInternoComentario.on('shown.bs.popover', function () {
        $("#txtReleEquipoInternoComentario").val($("#cphContenido_hfReleEquipoInternoComentario").val());
        $("#txtReleEquipoInternoComentario").focus();
        $("#txtReleEquipoInternoComentario").keyup(function () {
            $("#cphContenido_hfReleEquipoInternoComentario").val($(this).val());
        });
    });

    var divReleEquipoInterno = new RealUploader("#divReleEquipoInterno", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfReleEquipoInterno').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfReleEquipoInterno').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfReleEquipoInterno').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfReleEquipoInterno').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfReleEquipoInterno').val() != "") {
        divReleEquipoInterno.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfReleEquipoInterno').val(), $('#cphContenido_hfReleEquipoInterno').val());
    }

    $("#cphContenido_chkReleEquipoInterno").trigger("change");

    // #endregion

    // #region Foto 25: Controlador, NVR y Switch POE

    $('#cphContenido_chkControladorNVRSwitchPOE').change(function () {
        var blnActivo = $("#cphContenido_chkControladorNVRSwitchPOE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divControladorNVRSwitchPOE, "#divControladorNVRSwitchPOE");
        else
            habilitarRealUploader(true, divControladorNVRSwitchPOE, "#divControladorNVRSwitchPOE");
    });

    poControladorNVRSwitchPOEComentario = $("#spControladorNVRSwitchPOEComentario").popover({
        html: true,
        content: function () {
            return $('#pocControladorNVRSwitchPOEComentario').html();
        }
    });

    poControladorNVRSwitchPOEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poControladorNVRSwitchPOEComentario.on('shown.bs.popover', function () {
        $("#txtControladorNVRSwitchPOEComentario").val($("#cphContenido_hfControladorNVRSwitchPOEComentario").val());
        $("#txtControladorNVRSwitchPOEComentario").focus();
        $("#txtControladorNVRSwitchPOEComentario").keyup(function () {
            $("#cphContenido_hfControladorNVRSwitchPOEComentario").val($(this).val());
        });
    });

    var divControladorNVRSwitchPOE = new RealUploader("#divControladorNVRSwitchPOE", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfControladorNVRSwitchPOE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfControladorNVRSwitchPOE').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfControladorNVRSwitchPOE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfControladorNVRSwitchPOE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfControladorNVRSwitchPOE').val() != "") {
        divControladorNVRSwitchPOE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfControladorNVRSwitchPOE').val(), $('#cphContenido_hfControladorNVRSwitchPOE').val());
    }

    $("#cphContenido_chkControladorNVRSwitchPOE").trigger("change");

    // #endregion

    // #endregion

    // #region 02.- ATERRAMIENTO

    // #region Foto 26: Aterramiento Controlador

    $('#cphContenido_chkAterramientoControlador').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoControlador").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoControlador, "#divAterramientoControlador");
        else
            habilitarRealUploader(true, divAterramientoControlador, "#divAterramientoControlador");
    });

    poAterramientoControladorComentario = $("#spAterramientoControladorComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoControladorComentario').html();
        }
    });

    poAterramientoControladorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoControladorComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoControladorComentario").val($("#cphContenido_hfAterramientoControladorComentario").val());
        $("#txtAterramientoControladorComentario").focus();
        $("#txtAterramientoControladorComentario").keyup(function () {
            $("#cphContenido_hfAterramientoControladorComentario").val($(this).val());
        });
    });

    var divAterramientoControlador = new RealUploader("#divAterramientoControlador", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoControlador').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoControlador').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoControlador').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoControlador').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoControlador').val() != "") {
        divAterramientoControlador.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoControlador').val(), $('#cphContenido_hfAterramientoControlador').val());
    }

    $("#cphContenido_chkAterramientoControlador").trigger("change");

    // #endregion

    // #region Foto 27.01: Aterramiento NVR y POE

    $('#cphContenido_chkAterramientoNVRPOE01').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoNVRPOE01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoNVRPOE01, "#divAterramientoNVRPOE01");
        else
            habilitarRealUploader(true, divAterramientoNVRPOE01, "#divAterramientoNVRPOE01");
    });

    poAterramientoNVRPOE01Comentario = $("#spAterramientoNVRPOE01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoNVRPOE01Comentario').html();
        }
    });

    poAterramientoNVRPOE01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoNVRPOE01Comentario.on('shown.bs.popover', function () {
        $("#txtAterramientoNVRPOE01Comentario").val($("#cphContenido_hfAterramientoNVRPOE01Comentario").val());
        $("#txtAterramientoNVRPOE01Comentario").focus();
        $("#txtAterramientoNVRPOE01Comentario").keyup(function () {
            $("#cphContenido_hfAterramientoNVRPOE01Comentario").val($(this).val());
        });
    });

    var divAterramientoNVRPOE01 = new RealUploader("#divAterramientoNVRPOE01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoNVRPOE01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoNVRPOE01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoNVRPOE01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoNVRPOE01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoNVRPOE01').val() != "") {
        divAterramientoNVRPOE01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoNVRPOE01').val(), $('#cphContenido_hfAterramientoNVRPOE01').val());
    }

    $("#cphContenido_chkAterramientoNVRPOE01").trigger("change");

    // #endregion

    // #region Foto 27.02: Aterramiento NVR y POE

    $('#cphContenido_chkAterramientoNVRPOE02').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoNVRPOE02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoNVRPOE02, "#divAterramientoNVRPOE02");
        else
            habilitarRealUploader(true, divAterramientoNVRPOE02, "#divAterramientoNVRPOE02");
    });

    poAterramientoNVRPOE02Comentario = $("#spAterramientoNVRPOE02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoNVRPOE02Comentario').html();
        }
    });

    poAterramientoNVRPOE02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoNVRPOE02Comentario.on('shown.bs.popover', function () {
        $("#txtAterramientoNVRPOE02Comentario").val($("#cphContenido_hfAterramientoNVRPOE02Comentario").val());
        $("#txtAterramientoNVRPOE02Comentario").focus();
        $("#txtAterramientoNVRPOE02Comentario").keyup(function () {
            $("#cphContenido_hfAterramientoNVRPOE02Comentario").val($(this).val());
        });
    });

    var divAterramientoNVRPOE02 = new RealUploader("#divAterramientoNVRPOE02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoNVRPOE02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoNVRPOE02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoNVRPOE02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoNVRPOE02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoNVRPOE02').val() != "") {
        divAterramientoNVRPOE02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoNVRPOE02').val(), $('#cphContenido_hfAterramientoNVRPOE02').val());
    }

    $("#cphContenido_chkAterramientoNVRPOE02").trigger("change");

    // #endregion

    // #region Foto 28: Aterramiento a Barra

    $('#cphContenido_chkAterramientoBarra').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoBarra").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoBarra, "#divAterramientoBarra");
        else
            habilitarRealUploader(true, divAterramientoBarra, "#divAterramientoBarra");
    });

    poAterramientoBarraComentario = $("#spAterramientoBarraComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoBarraComentario').html();
        }
    });

    poAterramientoBarraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoBarraComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoBarraComentario").val($("#cphContenido_hfAterramientoBarraComentario").val());
        $("#txtAterramientoBarraComentario").focus();
        $("#txtAterramientoBarraComentario").keyup(function () {
            $("#cphContenido_hfAterramientoBarraComentario").val($(this).val());
        });
    });

    var divAterramientoBarra = new RealUploader("#divAterramientoBarra", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoBarra').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoBarra').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoBarra').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoBarra').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoBarra').val() != "") {
        divAterramientoBarra.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoBarra').val(), $('#cphContenido_hfAterramientoBarra').val());
    }

    $("#cphContenido_chkAterramientoBarra").trigger("change");

    // #endregion

    // #endregion

    // #region 03.- SERIE DE EQUIPOS

    // #region Foto 29: Serial Number Sensor Movimiento 90° N° 1

    $('#cphContenido_chkSerialNumberSensorMovimiento9001').change(function () {
        var blnActivo = $("#cphContenido_chkSerialNumberSensorMovimiento9001").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerialNumberSensorMovimiento9001, "#divSerialNumberSensorMovimiento9001");
        else
            habilitarRealUploader(true, divSerialNumberSensorMovimiento9001, "#divSerialNumberSensorMovimiento9001");
    });

    poSerialNumberSensorMovimiento9001Comentario = $("#spSerialNumberSensorMovimiento9001Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSerialNumberSensorMovimiento9001Comentario').html();
        }
    });

    poSerialNumberSensorMovimiento9001Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerialNumberSensorMovimiento9001Comentario.on('shown.bs.popover', function () {
        $("#txtSerialNumberSensorMovimiento9001Comentario").val($("#cphContenido_hfSerialNumberSensorMovimiento9001Comentario").val());
        $("#txtSerialNumberSensorMovimiento9001Comentario").focus();
        $("#txtSerialNumberSensorMovimiento9001Comentario").keyup(function () {
            $("#cphContenido_hfSerialNumberSensorMovimiento9001Comentario").val($(this).val());
        });
    });

    var divSerialNumberSensorMovimiento9001 = new RealUploader("#divSerialNumberSensorMovimiento9001", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerialNumberSensorMovimiento9001').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSensorMovimiento9001').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerialNumberSensorMovimiento9001').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSensorMovimiento9001').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerialNumberSensorMovimiento9001').val() != "") {
        divSerialNumberSensorMovimiento9001.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerialNumberSensorMovimiento9001').val(), $('#cphContenido_hfSerialNumberSensorMovimiento9001').val());
    }

    $("#cphContenido_chkSerialNumberSensorMovimiento9001").trigger("change");

    // #endregion

    // #region Foto 30: Serial Number Sensor Movimiento 90° N° 2

    $('#cphContenido_chkSerialNumberSensorMovimiento9002').change(function () {
        var blnActivo = $("#cphContenido_chkSerialNumberSensorMovimiento9002").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerialNumberSensorMovimiento9002, "#divSerialNumberSensorMovimiento9002");
        else
            habilitarRealUploader(true, divSerialNumberSensorMovimiento9002, "#divSerialNumberSensorMovimiento9002");
    });

    poSerialNumberSensorMovimiento9002Comentario = $("#spSerialNumberSensorMovimiento9002Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSerialNumberSensorMovimiento9002Comentario').html();
        }
    });

    poSerialNumberSensorMovimiento9002Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerialNumberSensorMovimiento9002Comentario.on('shown.bs.popover', function () {
        $("#txtSerialNumberSensorMovimiento9002Comentario").val($("#cphContenido_hfSerialNumberSensorMovimiento9002Comentario").val());
        $("#txtSerialNumberSensorMovimiento9002Comentario").focus();
        $("#txtSerialNumberSensorMovimiento9002Comentario").keyup(function () {
            $("#cphContenido_hfSerialNumberSensorMovimiento9002Comentario").val($(this).val());
        });
    });

    var divSerialNumberSensorMovimiento9002 = new RealUploader("#divSerialNumberSensorMovimiento9002", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerialNumberSensorMovimiento9002').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSensorMovimiento9002').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerialNumberSensorMovimiento9002').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSensorMovimiento9002').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerialNumberSensorMovimiento9002').val() != "") {
        divSerialNumberSensorMovimiento9002.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerialNumberSensorMovimiento9002').val(), $('#cphContenido_hfSerialNumberSensorMovimiento9002').val());
    }

    $("#cphContenido_chkSerialNumberSensorMovimiento9002").trigger("change");

    // #endregion

    // #region Foto 31.01: Serial Number Switch POE y NVR

    $('#cphContenido_chkSerialNumberSwitchPOENVR01').change(function () {
        var blnActivo = $("#cphContenido_chkSerialNumberSwitchPOENVR01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerialNumberSwitchPOENVR01, "#divSerialNumberSwitchPOENVR01");
        else
            habilitarRealUploader(true, divSerialNumberSwitchPOENVR01, "#divSerialNumberSwitchPOENVR01");
    });

    poSerialNumberSwitchPOENVR01Comentario = $("#spSerialNumberSwitchPOENVR01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSerialNumberSwitchPOENVR01Comentario').html();
        }
    });

    poSerialNumberSwitchPOENVR01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerialNumberSwitchPOENVR01Comentario.on('shown.bs.popover', function () {
        $("#txtSerialNumberSwitchPOENVR01Comentario").val($("#cphContenido_hfSerialNumberSwitchPOENVR01Comentario").val());
        $("#txtSerialNumberSwitchPOENVR01Comentario").focus();
        $("#txtSerialNumberSwitchPOENVR01Comentario").keyup(function () {
            $("#cphContenido_hfSerialNumberSwitchPOENVR01Comentario").val($(this).val());
        });
    });

    var divSerialNumberSwitchPOENVR01 = new RealUploader("#divSerialNumberSwitchPOENVR01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerialNumberSwitchPOENVR01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSwitchPOENVR01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerialNumberSwitchPOENVR01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSwitchPOENVR01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerialNumberSwitchPOENVR01').val() != "") {
        divSerialNumberSwitchPOENVR01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerialNumberSwitchPOENVR01').val(), $('#cphContenido_hfSerialNumberSwitchPOENVR01').val());
    }

    $("#cphContenido_chkSerialNumberSwitchPOENVR01").trigger("change");

    // #endregion

    // #region Foto 31.02: Serial Number Switch POE y NVR

    $('#cphContenido_chkSerialNumberSwitchPOENVR02').change(function () {
        var blnActivo = $("#cphContenido_chkSerialNumberSwitchPOENVR02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerialNumberSwitchPOENVR02, "#divSerialNumberSwitchPOENVR02");
        else
            habilitarRealUploader(true, divSerialNumberSwitchPOENVR02, "#divSerialNumberSwitchPOENVR02");
    });

    poSerialNumberSwitchPOENVR02Comentario = $("#spSerialNumberSwitchPOENVR02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSerialNumberSwitchPOENVR02Comentario').html();
        }
    });

    poSerialNumberSwitchPOENVR02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerialNumberSwitchPOENVR02Comentario.on('shown.bs.popover', function () {
        $("#txtSerialNumberSwitchPOENVR02Comentario").val($("#cphContenido_hfSerialNumberSwitchPOENVR02Comentario").val());
        $("#txtSerialNumberSwitchPOENVR02Comentario").focus();
        $("#txtSerialNumberSwitchPOENVR02Comentario").keyup(function () {
            $("#cphContenido_hfSerialNumberSwitchPOENVR02Comentario").val($(this).val());
        });
    });

    var divSerialNumberSwitchPOENVR02 = new RealUploader("#divSerialNumberSwitchPOENVR02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerialNumberSwitchPOENVR02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSwitchPOENVR02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerialNumberSwitchPOENVR02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberSwitchPOENVR02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerialNumberSwitchPOENVR02').val() != "") {
        divSerialNumberSwitchPOENVR02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerialNumberSwitchPOENVR02').val(), $('#cphContenido_hfSerialNumberSwitchPOENVR02').val());
    }

    $("#cphContenido_chkSerialNumberSwitchPOENVR02").trigger("change");

    // #endregion

    // #region Foto 32: Serial Number Controlador

    $('#cphContenido_chkSerialNumberControlador').change(function () {
        var blnActivo = $("#cphContenido_chkSerialNumberControlador").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerialNumberControlador, "#divSerialNumberControlador");
        else
            habilitarRealUploader(true, divSerialNumberControlador, "#divSerialNumberControlador");
    });

    poSerialNumberControladorComentario = $("#spSerialNumberControladorComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerialNumberControladorComentario').html();
        }
    });

    poSerialNumberControladorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerialNumberControladorComentario.on('shown.bs.popover', function () {
        $("#txtSerialNumberControladorComentario").val($("#cphContenido_hfSerialNumberControladorComentario").val());
        $("#txtSerialNumberControladorComentario").focus();
        $("#txtSerialNumberControladorComentario").keyup(function () {
            $("#cphContenido_hfSerialNumberControladorComentario").val($(this).val());
        });
    });

    var divSerialNumberControlador = new RealUploader("#divSerialNumberControlador", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerialNumberControlador').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberControlador').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerialNumberControlador').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerialNumberControlador').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerialNumberControlador').val() != "") {
        divSerialNumberControlador.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerialNumberControlador').val(), $('#cphContenido_hfSerialNumberControlador').val());
    }

    $("#cphContenido_chkSerialNumberControlador").trigger("change");

    // #endregion

    // #endregion

    // #region 04.- ETIQUETADO

    // #region Foto 33: Etiquetado de Equipos en Controlador

    $('#cphContenido_chkEtiquetadoEquiposControlador').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoEquiposControlador").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoEquiposControlador, "#divEtiquetadoEquiposControlador");
        else
            habilitarRealUploader(true, divEtiquetadoEquiposControlador, "#divEtiquetadoEquiposControlador");
    });

    poEtiquetadoEquiposControladorComentario = $("#spEtiquetadoEquiposControladorComentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoEquiposControladorComentario').html();
        }
    });

    poEtiquetadoEquiposControladorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoEquiposControladorComentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoEquiposControladorComentario").val($("#cphContenido_hfEtiquetadoEquiposControladorComentario").val());
        $("#txtEtiquetadoEquiposControladorComentario").focus();
        $("#txtEtiquetadoEquiposControladorComentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoEquiposControladorComentario").val($(this).val());
        });
    });

    var divEtiquetadoEquiposControlador = new RealUploader("#divEtiquetadoEquiposControlador", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEtiquetadoEquiposControlador').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoEquiposControlador').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoEquiposControlador').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoEquiposControlador').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoEquiposControlador').val() != "") {
        divEtiquetadoEquiposControlador.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoEquiposControlador').val(), $('#cphContenido_hfEtiquetadoEquiposControlador').val());
    }

    $("#cphContenido_chkEtiquetadoEquiposControlador").trigger("change");

    // #endregion

    // #region Foto 34: Etiquetado de Equipos en NVR

    $('#cphContenido_chkEtiquetadoEquiposNVR').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoEquiposNVR").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoEquiposNVR, "#divEtiquetadoEquiposNVR");
        else
            habilitarRealUploader(true, divEtiquetadoEquiposNVR, "#divEtiquetadoEquiposNVR");
    });

    poEtiquetadoEquiposNVRComentario = $("#spEtiquetadoEquiposNVRComentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoEquiposNVRComentario').html();
        }
    });

    poEtiquetadoEquiposNVRComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoEquiposNVRComentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoEquiposNVRComentario").val($("#cphContenido_hfEtiquetadoEquiposNVRComentario").val());
        $("#txtEtiquetadoEquiposNVRComentario").focus();
        $("#txtEtiquetadoEquiposNVRComentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoEquiposNVRComentario").val($(this).val());
        });
    });

    var divEtiquetadoEquiposNVR = new RealUploader("#divEtiquetadoEquiposNVR", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEtiquetadoEquiposNVR').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoEquiposNVR').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoEquiposNVR').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoEquiposNVR').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoEquiposNVR').val() != "") {
        divEtiquetadoEquiposNVR.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoEquiposNVR').val(), $('#cphContenido_hfEtiquetadoEquiposNVR').val());
    }

    $("#cphContenido_chkEtiquetadoEquiposNVR").trigger("change");

    // #endregion

    // #endregion

    // #region 05.- CHECKLIST

    // #region Foto: Checklist

    $('#cphContenido_chkChecklist').change(function () {
        var blnActivo = $("#cphContenido_chkChecklist").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divChecklist, "#divChecklist");
        else
            habilitarRealUploader(true, divChecklist, "#divChecklist");
    });

    poChecklistComentario = $("#spChecklistComentario").popover({
        html: true,
        content: function () {
            return $('#pocChecklistComentario').html();
        }
    });

    poChecklistComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poChecklistComentario.on('shown.bs.popover', function () {
        $("#txtChecklistComentario").val($("#cphContenido_hfChecklistComentario").val());
        $("#txtChecklistComentario").focus();
        $("#txtChecklistComentario").keyup(function () {
            $("#cphContenido_hfChecklistComentario").val($(this).val());
        });
    });

    var divChecklist = new RealUploader("#divChecklist", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 2560,
        minHeightDimension: 1920,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfChecklist').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfChecklist').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfChecklist').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfChecklist').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfChecklist').val() != "") {
        divChecklist.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfChecklist').val(), $('#cphContenido_hfChecklist').val());
    }

    $("#cphContenido_chkChecklist").trigger("change");

    // #endregion

    // #endregion

    // #region 06.- CAPTURAS DE PANTALLA

    // #region Foto 35: Cámara Exterior Modo Normal Posición 1

    $('#cphContenido_chkCamaraExteriorModoNormalPosicion01').change(function () {
        var blnActivo = $("#cphContenido_chkCamaraExteriorModoNormalPosicion01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCamaraExteriorModoNormalPosicion01, "#divCamaraExteriorModoNormalPosicion01");
        else
            habilitarRealUploader(true, divCamaraExteriorModoNormalPosicion01, "#divCamaraExteriorModoNormalPosicion01");
    });

    poCamaraExteriorModoNormalPosicion01Comentario = $("#spCamaraExteriorModoNormalPosicion01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocCamaraExteriorModoNormalPosicion01Comentario').html();
        }
    });

    poCamaraExteriorModoNormalPosicion01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCamaraExteriorModoNormalPosicion01Comentario.on('shown.bs.popover', function () {
        $("#txtCamaraExteriorModoNormalPosicion01Comentario").val($("#cphContenido_hfCamaraExteriorModoNormalPosicion01Comentario").val());
        $("#txtCamaraExteriorModoNormalPosicion01Comentario").focus();
        $("#txtCamaraExteriorModoNormalPosicion01Comentario").keyup(function () {
            $("#cphContenido_hfCamaraExteriorModoNormalPosicion01Comentario").val($(this).val());
        });
    });

    var divCamaraExteriorModoNormalPosicion01 = new RealUploader("#divCamaraExteriorModoNormalPosicion01", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val() != "") {
        divCamaraExteriorModoNormalPosicion01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val(), $('#cphContenido_hfCamaraExteriorModoNormalPosicion01').val());
    }

    $("#cphContenido_chkCamaraExteriorModoNormalPosicion01").trigger("change");

    // #endregion

    // #region Foto 36: Cámara Exterior Modo Normal Posición 2

    $('#cphContenido_chkCamaraExteriorModoNormalPosicion02').change(function () {
        var blnActivo = $("#cphContenido_chkCamaraExteriorModoNormalPosicion02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCamaraExteriorModoNormalPosicion02, "#divCamaraExteriorModoNormalPosicion02");
        else
            habilitarRealUploader(true, divCamaraExteriorModoNormalPosicion02, "#divCamaraExteriorModoNormalPosicion02");
    });

    poCamaraExteriorModoNormalPosicion02Comentario = $("#spCamaraExteriorModoNormalPosicion02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocCamaraExteriorModoNormalPosicion02Comentario').html();
        }
    });

    poCamaraExteriorModoNormalPosicion02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCamaraExteriorModoNormalPosicion02Comentario.on('shown.bs.popover', function () {
        $("#txtCamaraExteriorModoNormalPosicion02Comentario").val($("#cphContenido_hfCamaraExteriorModoNormalPosicion02Comentario").val());
        $("#txtCamaraExteriorModoNormalPosicion02Comentario").focus();
        $("#txtCamaraExteriorModoNormalPosicion02Comentario").keyup(function () {
            $("#cphContenido_hfCamaraExteriorModoNormalPosicion02Comentario").val($(this).val());
        });
    });

    var divCamaraExteriorModoNormalPosicion02 = new RealUploader("#divCamaraExteriorModoNormalPosicion02", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val() != "") {
        divCamaraExteriorModoNormalPosicion02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val(), $('#cphContenido_hfCamaraExteriorModoNormalPosicion02').val());
    }

    $("#cphContenido_chkCamaraExteriorModoNormalPosicion02").trigger("change");

    // #endregion

    // #region Foto 37: Cámara Interior Modo Normal

    $('#cphContenido_chkCamaraInteriorModoNormal').change(function () {
        var blnActivo = $("#cphContenido_chkCamaraInteriorModoNormal").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCamaraInteriorModoNormal, "#divCamaraInteriorModoNormal");
        else
            habilitarRealUploader(true, divCamaraInteriorModoNormal, "#divCamaraInteriorModoNormal");
    });

    poCamaraInteriorModoNormalComentario = $("#spCamaraInteriorModoNormalComentario").popover({
        html: true,
        content: function () {
            return $('#pocCamaraInteriorModoNormalComentario').html();
        }
    });

    poCamaraInteriorModoNormalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCamaraInteriorModoNormalComentario.on('shown.bs.popover', function () {
        $("#txtCamaraInteriorModoNormalComentario").val($("#cphContenido_hfCamaraInteriorModoNormalComentario").val());
        $("#txtCamaraInteriorModoNormalComentario").focus();
        $("#txtCamaraInteriorModoNormalComentario").keyup(function () {
            $("#cphContenido_hfCamaraInteriorModoNormalComentario").val($(this).val());
        });
    });

    var divCamaraInteriorModoNormal = new RealUploader("#divCamaraInteriorModoNormal", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCamaraInteriorModoNormal').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCamaraInteriorModoNormal').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCamaraInteriorModoNormal').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCamaraInteriorModoNormal').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCamaraInteriorModoNormal').val() != "") {
        divCamaraInteriorModoNormal.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCamaraInteriorModoNormal').val(), $('#cphContenido_hfCamaraInteriorModoNormal').val());
    }

    $("#cphContenido_chkCamaraInteriorModoNormal").trigger("change");

    // #endregion

    // #region Foto 38: Cámara Interior Modo Infrarojo

    $('#cphContenido_chkCamaraInteriorModoInfrarojo').change(function () {
        var blnActivo = $("#cphContenido_chkCamaraInteriorModoInfrarojo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCamaraInteriorModoInfrarojo, "#divCamaraInteriorModoInfrarojo");
        else
            habilitarRealUploader(true, divCamaraInteriorModoInfrarojo, "#divCamaraInteriorModoInfrarojo");
    });

    poCamaraInteriorModoInfrarojoComentario = $("#spCamaraInteriorModoInfrarojoComentario").popover({
        html: true,
        content: function () {
            return $('#pocCamaraInteriorModoInfrarojoComentario').html();
        }
    });

    poCamaraInteriorModoInfrarojoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCamaraInteriorModoInfrarojoComentario.on('shown.bs.popover', function () {
        $("#txtCamaraInteriorModoInfrarojoComentario").val($("#cphContenido_hfCamaraInteriorModoInfrarojoComentario").val());
        $("#txtCamaraInteriorModoInfrarojoComentario").focus();
        $("#txtCamaraInteriorModoInfrarojoComentario").keyup(function () {
            $("#cphContenido_hfCamaraInteriorModoInfrarojoComentario").val($(this).val());
        });
    });

    var divCamaraInteriorModoInfrarojo = new RealUploader("#divCamaraInteriorModoInfrarojo", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfCamaraInteriorModoInfrarojo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCamaraInteriorModoInfrarojo').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfCamaraInteriorModoInfrarojo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCamaraInteriorModoInfrarojo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCamaraInteriorModoInfrarojo').val() != "") {
        divCamaraInteriorModoInfrarojo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCamaraInteriorModoInfrarojo').val(), $('#cphContenido_hfCamaraInteriorModoInfrarojo').val());
    }

    $("#cphContenido_chkCamaraInteriorModoInfrarojo").trigger("change");

    // #endregion

    // #endregion

    // #region 07.- CAPTURAS DE PANTALLA TECHNICIAN GUI

    // #region Foto 39: Technician Program Alarma Puerta Principal Abierta

    $('#cphContenido_chkTechnicianProgramAlarmaPuertaPrincipalAbierta').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaPuertaPrincipalAbierta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaPuertaPrincipalAbierta, "#divTechnicianProgramAlarmaPuertaPrincipalAbierta");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaPuertaPrincipalAbierta, "#divTechnicianProgramAlarmaPuertaPrincipalAbierta");
    });

    poTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario = $("#spTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario').html();
        }
    });

    poTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario").val($("#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario").val());
        $("#txtTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario").focus();
        $("#txtTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaPuertaPrincipalAbierta = new RealUploader("#divTechnicianProgramAlarmaPuertaPrincipalAbierta", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val() != "") {
        divTechnicianProgramAlarmaPuertaPrincipalAbierta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val(), $('#cphContenido_hfTechnicianProgramAlarmaPuertaPrincipalAbierta').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaPuertaPrincipalAbierta").trigger("change");

    // #endregion

    // #region Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta

    $('#cphContenido_chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaPuertaSalaEquiposAbierta, "#divTechnicianProgramAlarmaPuertaSalaEquiposAbierta");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaPuertaSalaEquiposAbierta, "#divTechnicianProgramAlarmaPuertaSalaEquiposAbierta");
    });

    poTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario = $("#spTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario').html();
        }
    });

    poTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario").val($("#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario").val());
        $("#txtTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario").focus();
        $("#txtTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaPuertaSalaEquiposAbierta = new RealUploader("#divTechnicianProgramAlarmaPuertaSalaEquiposAbierta", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val() != "") {
        divTechnicianProgramAlarmaPuertaSalaEquiposAbierta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val(), $('#cphContenido_hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta").trigger("change");

    // #endregion

    // #region Foto 41: Technician Program Alarma de Cámara Interna

    $('#cphContenido_chkTechnicianProgramAlarmaCamaraInterna').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaCamaraInterna").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaCamaraInterna, "#divTechnicianProgramAlarmaCamaraInterna");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaCamaraInterna, "#divTechnicianProgramAlarmaCamaraInterna");
    });

    poTechnicianProgramAlarmaCamaraInternaComentario = $("#spTechnicianProgramAlarmaCamaraInternaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaCamaraInternaComentario').html();
        }
    });

    poTechnicianProgramAlarmaCamaraInternaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaCamaraInternaComentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaCamaraInternaComentario").val($("#cphContenido_hfTechnicianProgramAlarmaCamaraInternaComentario").val());
        $("#txtTechnicianProgramAlarmaCamaraInternaComentario").focus();
        $("#txtTechnicianProgramAlarmaCamaraInternaComentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaCamaraInternaComentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaCamaraInterna = new RealUploader("#divTechnicianProgramAlarmaCamaraInterna", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val() != "") {
        divTechnicianProgramAlarmaCamaraInterna.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val(), $('#cphContenido_hfTechnicianProgramAlarmaCamaraInterna').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaCamaraInterna").trigger("change");

    // #endregion

    // #region Foto 42: Technician Program Alarma de Cámara Externa

    $('#cphContenido_chkTechnicianProgramAlarmaCamaraExterna').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaCamaraExterna").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaCamaraExterna, "#divTechnicianProgramAlarmaCamaraExterna");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaCamaraExterna, "#divTechnicianProgramAlarmaCamaraExterna");
    });

    poTechnicianProgramAlarmaCamaraExternaComentario = $("#spTechnicianProgramAlarmaCamaraExternaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaCamaraExternaComentario').html();
        }
    });

    poTechnicianProgramAlarmaCamaraExternaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaCamaraExternaComentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaCamaraExternaComentario").val($("#cphContenido_hfTechnicianProgramAlarmaCamaraExternaComentario").val());
        $("#txtTechnicianProgramAlarmaCamaraExternaComentario").focus();
        $("#txtTechnicianProgramAlarmaCamaraExternaComentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaCamaraExternaComentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaCamaraExterna = new RealUploader("#divTechnicianProgramAlarmaCamaraExterna", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val() != "") {
        divTechnicianProgramAlarmaCamaraExterna.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val(), $('#cphContenido_hfTechnicianProgramAlarmaCamaraExterna').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaCamaraExterna").trigger("change");

    // #endregion

    // #region Foto 43: Technician Program Alarma de Sensor de Aniego

    $('#cphContenido_chkTechnicianProgramAlarmaSensorAniego').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaSensorAniego").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaSensorAniego, "#divTechnicianProgramAlarmaSensorAniego");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaSensorAniego, "#divTechnicianProgramAlarmaSensorAniego");
    });

    poTechnicianProgramAlarmaSensorAniegoComentario = $("#spTechnicianProgramAlarmaSensorAniegoComentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaSensorAniegoComentario').html();
        }
    });

    poTechnicianProgramAlarmaSensorAniegoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaSensorAniegoComentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaSensorAniegoComentario").val($("#cphContenido_hfTechnicianProgramAlarmaSensorAniegoComentario").val());
        $("#txtTechnicianProgramAlarmaSensorAniegoComentario").focus();
        $("#txtTechnicianProgramAlarmaSensorAniegoComentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaSensorAniegoComentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaSensorAniego = new RealUploader("#divTechnicianProgramAlarmaSensorAniego", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val() != "") {
        divTechnicianProgramAlarmaSensorAniego.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val(), $('#cphContenido_hfTechnicianProgramAlarmaSensorAniego').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaSensorAniego").trigger("change");

    // #endregion

    // #region Foto 44: Technician Program Alarma de Sensor de Humo

    $('#cphContenido_chkTechnicianProgramAlarmaSensorHumo').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaSensorHumo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaSensorHumo, "#divTechnicianProgramAlarmaSensorHumo");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaSensorHumo, "#divTechnicianProgramAlarmaSensorHumo");
    });

    poTechnicianProgramAlarmaSensorHumoComentario = $("#spTechnicianProgramAlarmaSensorHumoComentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaSensorHumoComentario').html();
        }
    });

    poTechnicianProgramAlarmaSensorHumoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaSensorHumoComentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaSensorHumoComentario").val($("#cphContenido_hfTechnicianProgramAlarmaSensorHumoComentario").val());
        $("#txtTechnicianProgramAlarmaSensorHumoComentario").focus();
        $("#txtTechnicianProgramAlarmaSensorHumoComentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaSensorHumoComentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaSensorHumo = new RealUploader("#divTechnicianProgramAlarmaSensorHumo", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val() != "") {
        divTechnicianProgramAlarmaSensorHumo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val(), $('#cphContenido_hfTechnicianProgramAlarmaSensorHumo').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaSensorHumo").trigger("change");

    // #endregion

    // #region Foto 45: Technician Program Alarma Tamper Sensor de 90°-1

    $('#cphContenido_chkTechnicianProgramAlarmaTamperSensor9001').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaTamperSensor9001").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaTamperSensor9001, "#divTechnicianProgramAlarmaTamperSensor9001");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaTamperSensor9001, "#divTechnicianProgramAlarmaTamperSensor9001");
    });

    poTechnicianProgramAlarmaTamperSensor9001Comentario = $("#spTechnicianProgramAlarmaTamperSensor9001Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaTamperSensor9001Comentario').html();
        }
    });

    poTechnicianProgramAlarmaTamperSensor9001Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaTamperSensor9001Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaTamperSensor9001Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001Comentario").val());
        $("#txtTechnicianProgramAlarmaTamperSensor9001Comentario").focus();
        $("#txtTechnicianProgramAlarmaTamperSensor9001Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaTamperSensor9001 = new RealUploader("#divTechnicianProgramAlarmaTamperSensor9001", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val() != "") {
        divTechnicianProgramAlarmaTamperSensor9001.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val(), $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9001').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaTamperSensor9001").trigger("change");

    // #endregion

    // #region Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1

    $('#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9001').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9001").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaMovimientoSensor9001, "#divTechnicianProgramAlarmaMovimientoSensor9001");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaMovimientoSensor9001, "#divTechnicianProgramAlarmaMovimientoSensor9001");
    });

    poTechnicianProgramAlarmaMovimientoSensor9001Comentario = $("#spTechnicianProgramAlarmaMovimientoSensor9001Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaMovimientoSensor9001Comentario').html();
        }
    });

    poTechnicianProgramAlarmaMovimientoSensor9001Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaMovimientoSensor9001Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaMovimientoSensor9001Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001Comentario").val());
        $("#txtTechnicianProgramAlarmaMovimientoSensor9001Comentario").focus();
        $("#txtTechnicianProgramAlarmaMovimientoSensor9001Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaMovimientoSensor9001 = new RealUploader("#divTechnicianProgramAlarmaMovimientoSensor9001", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val() != "") {
        divTechnicianProgramAlarmaMovimientoSensor9001.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val(), $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9001').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9001").trigger("change");

    // #endregion

    // #region Foto 47: Technician Program Alarma Masking Sensor de 90°-1

    $('#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9001').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9001").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaMaskingSensor9001, "#divTechnicianProgramAlarmaMaskingSensor9001");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaMaskingSensor9001, "#divTechnicianProgramAlarmaMaskingSensor9001");
    });

    poTechnicianProgramAlarmaMaskingSensor9001Comentario = $("#spTechnicianProgramAlarmaMaskingSensor9001Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaMaskingSensor9001Comentario').html();
        }
    });

    poTechnicianProgramAlarmaMaskingSensor9001Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaMaskingSensor9001Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaMaskingSensor9001Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001Comentario").val());
        $("#txtTechnicianProgramAlarmaMaskingSensor9001Comentario").focus();
        $("#txtTechnicianProgramAlarmaMaskingSensor9001Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaMaskingSensor9001 = new RealUploader("#divTechnicianProgramAlarmaMaskingSensor9001", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val() != "") {
        divTechnicianProgramAlarmaMaskingSensor9001.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val(), $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9001').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9001").trigger("change");

    // #endregion

    // #region Foto 48: Technician Program Alarma Tamper Sensor de 90°-2

    $('#cphContenido_chkTechnicianProgramAlarmaTamperSensor9002').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaTamperSensor9002").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaTamperSensor9002, "#divTechnicianProgramAlarmaTamperSensor9002");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaTamperSensor9002, "#divTechnicianProgramAlarmaTamperSensor9002");
    });

    poTechnicianProgramAlarmaTamperSensor9002Comentario = $("#spTechnicianProgramAlarmaTamperSensor9002Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaTamperSensor9002Comentario').html();
        }
    });

    poTechnicianProgramAlarmaTamperSensor9002Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaTamperSensor9002Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaTamperSensor9002Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002Comentario").val());
        $("#txtTechnicianProgramAlarmaTamperSensor9002Comentario").focus();
        $("#txtTechnicianProgramAlarmaTamperSensor9002Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaTamperSensor9002 = new RealUploader("#divTechnicianProgramAlarmaTamperSensor9002", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val() != "") {
        divTechnicianProgramAlarmaTamperSensor9002.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val(), $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor9002').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaTamperSensor9002").trigger("change");

    // #endregion

    // #region Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2

    $('#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9002').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9002").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaMovimientoSensor9002, "#divTechnicianProgramAlarmaMovimientoSensor9002");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaMovimientoSensor9002, "#divTechnicianProgramAlarmaMovimientoSensor9002");
    });

    poTechnicianProgramAlarmaMovimientoSensor9002Comentario = $("#spTechnicianProgramAlarmaMovimientoSensor9002Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaMovimientoSensor9002Comentario').html();
        }
    });

    poTechnicianProgramAlarmaMovimientoSensor9002Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaMovimientoSensor9002Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaMovimientoSensor9002Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002Comentario").val());
        $("#txtTechnicianProgramAlarmaMovimientoSensor9002Comentario").focus();
        $("#txtTechnicianProgramAlarmaMovimientoSensor9002Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaMovimientoSensor9002 = new RealUploader("#divTechnicianProgramAlarmaMovimientoSensor9002", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val() != "") {
        divTechnicianProgramAlarmaMovimientoSensor9002.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val(), $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor9002').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9002").trigger("change");

    // #endregion

    // #region Foto 50: Technician Program Alarma Masking Sensor de 90°-2

    $('#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9002').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9002").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaMaskingSensor9002, "#divTechnicianProgramAlarmaMaskingSensor9002");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaMaskingSensor9002, "#divTechnicianProgramAlarmaMaskingSensor9002");
    });

    poTechnicianProgramAlarmaMaskingSensor9002Comentario = $("#spTechnicianProgramAlarmaMaskingSensor9002Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaMaskingSensor9002Comentario').html();
        }
    });

    poTechnicianProgramAlarmaMaskingSensor9002Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaMaskingSensor9002Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaMaskingSensor9002Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002Comentario").val());
        $("#txtTechnicianProgramAlarmaMaskingSensor9002Comentario").focus();
        $("#txtTechnicianProgramAlarmaMaskingSensor9002Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaMaskingSensor9002 = new RealUploader("#divTechnicianProgramAlarmaMaskingSensor9002", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val() != "") {
        divTechnicianProgramAlarmaMaskingSensor9002.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val(), $('#cphContenido_hfTechnicianProgramAlarmaMaskingSensor9002').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9002").trigger("change");

    // #endregion

    // #region Foto 51: Technician Program Alarma Tamper Sensor de 360°

    $('#cphContenido_chkTechnicianProgramAlarmaTamperSensor360').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaTamperSensor360").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaTamperSensor360, "#divTechnicianProgramAlarmaTamperSensor360");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaTamperSensor360, "#divTechnicianProgramAlarmaTamperSensor360");
    });

    poTechnicianProgramAlarmaTamperSensor360Comentario = $("#spTechnicianProgramAlarmaTamperSensor360Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaTamperSensor360Comentario').html();
        }
    });

    poTechnicianProgramAlarmaTamperSensor360Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaTamperSensor360Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaTamperSensor360Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaTamperSensor360Comentario").val());
        $("#txtTechnicianProgramAlarmaTamperSensor360Comentario").focus();
        $("#txtTechnicianProgramAlarmaTamperSensor360Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaTamperSensor360Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaTamperSensor360 = new RealUploader("#divTechnicianProgramAlarmaTamperSensor360", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val() != "") {
        divTechnicianProgramAlarmaTamperSensor360.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val(), $('#cphContenido_hfTechnicianProgramAlarmaTamperSensor360').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaTamperSensor360").trigger("change");

    // #endregion

    // #region Foto 52: Technician Program Alarma Movimiento Sensor de 360°

    $('#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor360').change(function () {
        var blnActivo = $("#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor360").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTechnicianProgramAlarmaMovimientoSensor360, "#divTechnicianProgramAlarmaMovimientoSensor360");
        else
            habilitarRealUploader(true, divTechnicianProgramAlarmaMovimientoSensor360, "#divTechnicianProgramAlarmaMovimientoSensor360");
    });

    poTechnicianProgramAlarmaMovimientoSensor360Comentario = $("#spTechnicianProgramAlarmaMovimientoSensor360Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTechnicianProgramAlarmaMovimientoSensor360Comentario').html();
        }
    });

    poTechnicianProgramAlarmaMovimientoSensor360Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTechnicianProgramAlarmaMovimientoSensor360Comentario.on('shown.bs.popover', function () {
        $("#txtTechnicianProgramAlarmaMovimientoSensor360Comentario").val($("#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360Comentario").val());
        $("#txtTechnicianProgramAlarmaMovimientoSensor360Comentario").focus();
        $("#txtTechnicianProgramAlarmaMovimientoSensor360Comentario").keyup(function () {
            $("#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360Comentario").val($(this).val());
        });
    });

    var divTechnicianProgramAlarmaMovimientoSensor360 = new RealUploader("#divTechnicianProgramAlarmaMovimientoSensor360", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val() != "") {
        divTechnicianProgramAlarmaMovimientoSensor360.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val(), $('#cphContenido_hfTechnicianProgramAlarmaMovimientoSensor360').val());
    }

    $("#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor360").trigger("change");

    // #endregion

    // #endregion

    // #region 08.- CAPTURAS DE PING

    // #region Foto 53: Ping a la Cámara 1 - Indoor

    $('#cphContenido_chkPingCamara01Indoor').change(function () {
        var blnActivo = $("#cphContenido_chkPingCamara01Indoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingCamara01Indoor, "#divPingCamara01Indoor");
        else
            habilitarRealUploader(true, divPingCamara01Indoor, "#divPingCamara01Indoor");
    });

    poPingCamara01IndoorComentario = $("#spPingCamara01IndoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingCamara01IndoorComentario').html();
        }
    });

    poPingCamara01IndoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingCamara01IndoorComentario.on('shown.bs.popover', function () {
        $("#txtPingCamara01IndoorComentario").val($("#cphContenido_hfPingCamara01IndoorComentario").val());
        $("#txtPingCamara01IndoorComentario").focus();
        $("#txtPingCamara01IndoorComentario").keyup(function () {
            $("#cphContenido_hfPingCamara01IndoorComentario").val($(this).val());
        });
    });

    var divPingCamara01Indoor = new RealUploader("#divPingCamara01Indoor", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingCamara01Indoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingCamara01Indoor').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPingCamara01Indoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingCamara01Indoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPingCamara01Indoor').val() != "") {
        divPingCamara01Indoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingCamara01Indoor').val(), $('#cphContenido_hfPingCamara01Indoor').val());
    }

    $("#cphContenido_chkPingCamara01Indoor").trigger("change");

    // #endregion

    // #region Foto 54: Ping a la Cámara 2 - Outdoor

    $('#cphContenido_chkPingCamara02Outdoor').change(function () {
        var blnActivo = $("#cphContenido_chkPingCamara02Outdoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingCamara02Outdoor, "#divPingCamara02Outdoor");
        else
            habilitarRealUploader(true, divPingCamara02Outdoor, "#divPingCamara02Outdoor");
    });

    poPingCamara02OutdoorComentario = $("#spPingCamara02OutdoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingCamara02OutdoorComentario').html();
        }
    });

    poPingCamara02OutdoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingCamara02OutdoorComentario.on('shown.bs.popover', function () {
        $("#txtPingCamara02OutdoorComentario").val($("#cphContenido_hfPingCamara02OutdoorComentario").val());
        $("#txtPingCamara02OutdoorComentario").focus();
        $("#txtPingCamara02OutdoorComentario").keyup(function () {
            $("#cphContenido_hfPingCamara02OutdoorComentario").val($(this).val());
        });
    });

    var divPingCamara02Outdoor = new RealUploader("#divPingCamara02Outdoor", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingCamara02Outdoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingCamara02Outdoor').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPingCamara02Outdoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingCamara02Outdoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPingCamara02Outdoor').val() != "") {
        divPingCamara02Outdoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingCamara02Outdoor').val(), $('#cphContenido_hfPingCamara02Outdoor').val());
    }

    $("#cphContenido_chkPingCamara02Outdoor").trigger("change");

    // #endregion

    // #region Foto 55: Ping al Controlador

    $('#cphContenido_chkPingControlador').change(function () {
        var blnActivo = $("#cphContenido_chkPingControlador").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingControlador, "#divPingControlador");
        else
            habilitarRealUploader(true, divPingControlador, "#divPingControlador");
    });

    poPingControladorComentario = $("#spPingControladorComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingControladorComentario').html();
        }
    });

    poPingControladorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingControladorComentario.on('shown.bs.popover', function () {
        $("#txtPingControladorComentario").val($("#cphContenido_hfPingControladorComentario").val());
        $("#txtPingControladorComentario").focus();
        $("#txtPingControladorComentario").keyup(function () {
            $("#cphContenido_hfPingControladorComentario").val($(this).val());
        });
    });

    var divPingControlador = new RealUploader("#divPingControlador", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingControlador').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingControlador').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPingControlador').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingControlador').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPingControlador').val() != "") {
        divPingControlador.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingControlador').val(), $('#cphContenido_hfPingControlador').val());
    }

    $("#cphContenido_chkPingControlador").trigger("change");

    // #endregion

    // #region Foto 56: Ping al Gateway

    $('#cphContenido_chkPingGateway').change(function () {
        var blnActivo = $("#cphContenido_chkPingGateway").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingGateway, "#divPingGateway");
        else
            habilitarRealUploader(true, divPingGateway, "#divPingGateway");
    });

    poPingGatewayComentario = $("#spPingGatewayComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingGatewayComentario').html();
        }
    });

    poPingGatewayComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingGatewayComentario.on('shown.bs.popover', function () {
        $("#txtPingGatewayComentario").val($("#cphContenido_hfPingGatewayComentario").val());
        $("#txtPingGatewayComentario").focus();
        $("#txtPingGatewayComentario").keyup(function () {
            $("#cphContenido_hfPingGatewayComentario").val($(this).val());
        });
    });

    var divPingGateway = new RealUploader("#divPingGateway", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingGateway').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingGateway').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPingGateway').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingGateway').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPingGateway').val() != "") {
        divPingGateway.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingGateway').val(), $('#cphContenido_hfPingGateway').val());
    }

    $("#cphContenido_chkPingGateway").trigger("change");

    // #endregion

    // #region Foto 57: Ping al NVR

    $('#cphContenido_chkPingNVR').change(function () {
        var blnActivo = $("#cphContenido_chkPingNVR").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingNVR, "#divPingNVR");
        else
            habilitarRealUploader(true, divPingNVR, "#divPingNVR");
    });

    poPingNVRComentario = $("#spPingNVRComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingNVRComentario').html();
        }
    });

    poPingNVRComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingNVRComentario.on('shown.bs.popover', function () {
        $("#txtPingNVRComentario").val($("#cphContenido_hfPingNVRComentario").val());
        $("#txtPingNVRComentario").focus();
        $("#txtPingNVRComentario").keyup(function () {
            $("#cphContenido_hfPingNVRComentario").val($(this).val());
        });
    });

    var divPingNVR = new RealUploader("#divPingNVR", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingNVR').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingNVR').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPingNVR').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingNVR').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPingNVR').val() != "") {
        divPingNVR.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingNVR').val(), $('#cphContenido_hfPingNVR').val());
    }

    $("#cphContenido_chkPingNVR").trigger("change");

    // #endregion

    // #region Foto 58: Ping al Biométrico

    $('#cphContenido_chkPingBiometrico').change(function () {
        var blnActivo = $("#cphContenido_chkPingBiometrico").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingBiometrico, "#divPingBiometrico");
        else
            habilitarRealUploader(true, divPingBiometrico, "#divPingBiometrico");
    });

    poPingBiometricoComentario = $("#spPingBiometricoComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingBiometricoComentario').html();
        }
    });

    poPingBiometricoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingBiometricoComentario.on('shown.bs.popover', function () {
        $("#txtPingBiometricoComentario").val($("#cphContenido_hfPingBiometricoComentario").val());
        $("#txtPingBiometricoComentario").focus();
        $("#txtPingBiometricoComentario").keyup(function () {
            $("#cphContenido_hfPingBiometricoComentario").val($(this).val());
        });
    });

    var divPingBiometrico = new RealUploader("#divPingBiometrico", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['png', 'jpg'],
        fileType: 6,
        minWidthDimension: 1366,
        minHeightDimension: 760,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPingBiometrico').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPingBiometrico').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPingBiometrico').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPingBiometrico').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPingBiometrico').val() != "") {
        divPingBiometrico.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingBiometrico').val(), $('#cphContenido_hfPingBiometrico').val());
    }

    $("#cphContenido_chkPingBiometrico").trigger("change");

    // #endregion

    // #endregion

    // #endregion
    
    // #region Materiales

    // #region Equipamientos

    poEquipamientosComentario = $("#spEquipamientosComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipamientosComentario').html();
        }
    });

    poEquipamientosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipamientosComentario.on('shown.bs.popover', function () {
        $("#txtEquipamientosComentario").val($("#cphContenido_hfEquipamientosComentario").val());
        $("#txtEquipamientosComentario").focus();
        $("#txtEquipamientosComentario").keyup(function () {
            $("#cphContenido_hfEquipamientosComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Materiales

    $('#cphContenido_chkMateriales').change(function () {
        var blnActivo = $("#cphContenido_chkMateriales").prop("checked");
        if (blnActivo) {
            $("#cphContenido_gvMateriales input[id^=cphContenido_gvMateriales_txtCantidad]").each(function () {
                $(this).prop('disabled', true);
            })
        }
        else {
            $("#cphContenido_gvMateriales input[id^=cphContenido_gvMateriales_txtCantidad]").each(function () {
                $(this).prop('disabled', false);
            })
        }
    });

    poMaterialesComentario = $("#spMaterialesComentario").popover({
        html: true,
        content: function () {
            return $('#pocMaterialesComentario').html();
        }
    });

    poMaterialesComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMaterialesComentario.on('shown.bs.popover', function () {
        $("#txtMaterialesComentario").val($("#cphContenido_hfMaterialesComentario").val());
        $("#txtMaterialesComentario").focus();
        $("#txtMaterialesComentario").keyup(function () {
            $("#cphContenido_hfMaterialesComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkMateriales").trigger("change");

    // #endregion

    // #endregion

    // #region ATP

    // #region E. E. Fecha Expiración

    var pckExtinguidorExternoFechaExpiracion = $("#cphContenido_txtExtinguidorExternoFechaExpiracion").pickadate({
        firstDay: true,
        format: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true
    });

    $('#cphContenido_chkExtinguidorExternoFechaExpiracion').change(function () {
        var blnActivo = $("#cphContenido_chkExtinguidorExternoFechaExpiracion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtExtinguidorExternoFechaExpiracion").prop('disabled', true);
        else
            $('#cphContenido_txtExtinguidorExternoFechaExpiracion').prop('disabled', false);
    });

    poExtinguidorExternoFechaExpiracionComentario = $("#spExtinguidorExternoFechaExpiracionComentario").popover({
        html: true,
        content: function () {
            return $('#pocExtinguidorExternoFechaExpiracionComentario').html();
        }
    });

    poExtinguidorExternoFechaExpiracionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poExtinguidorExternoFechaExpiracionComentario.on('shown.bs.popover', function () {
        $("#txtExtinguidorExternoFechaExpiracionComentario").val($("#cphContenido_hfExtinguidorExternoFechaExpiracionComentario").val());
        $("#txtExtinguidorExternoFechaExpiracionComentario").focus();
        $("#txtExtinguidorExternoFechaExpiracionComentario").keyup(function () {
            $("#cphContenido_hfExtinguidorExternoFechaExpiracionComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    $("#cphContenido_chkExtinguidorExternoFechaExpiracion").trigger("change");

    // #endregion  

    // #region E. I. Fecha Expiración

    var pckExtinguidorInternoFechaExpiracion = $("#cphContenido_txtExtinguidorInternoFechaExpiracion").pickadate({
        firstDay: true,
        format: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true
    });

    $('#cphContenido_chkExtinguidorInternoFechaExpiracion').change(function () {
        var blnActivo = $("#cphContenido_chkExtinguidorInternoFechaExpiracion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtExtinguidorInternoFechaExpiracion").prop('disabled', true);
        else
            $('#cphContenido_txtExtinguidorInternoFechaExpiracion').prop('disabled', false);
    });

    poExtinguidorInternoFechaExpiracionComentario = $("#spExtinguidorInternoFechaExpiracionComentario").popover({
        html: true,
        content: function () {
            return $('#pocExtinguidorInternoFechaExpiracionComentario').html();
        }
    });

    poExtinguidorInternoFechaExpiracionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poExtinguidorInternoFechaExpiracionComentario.on('shown.bs.popover', function () {
        $("#txtExtinguidorInternoFechaExpiracionComentario").val($("#cphContenido_hfExtinguidorInternoFechaExpiracionComentario").val());
        $("#txtExtinguidorInternoFechaExpiracionComentario").focus();
        $("#txtExtinguidorInternoFechaExpiracionComentario").keyup(function () {
            $("#cphContenido_hfExtinguidorInternoFechaExpiracionComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    $("#cphContenido_chkExtinguidorInternoFechaExpiracion").trigger("change");

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
        $('#cphContenido_chkFecha').prop('disabled', true);
        $('#cphContenido_chkFachadaNodo').prop('disabled', true);
        $('#cphContenido_chkSalaEquiposPanoramicaRack').prop('disabled', true);
        $('#cphContenido_chkPanoramicaInterior01').prop('disabled', true);
        $('#cphContenido_chkPanoramicaInterior02').prop('disabled', true);
        $('#cphContenido_chkPanoramicaEquiposPatio').prop('disabled', true);
        $('#cphContenido_chkBreakerAsignadoSeguridad').prop('disabled', true);
        $('#cphContenido_chkCerraduraElectromagneticaExterna01').prop('disabled', true);
        $('#cphContenido_chkCerraduraElectromagneticaExterna02').prop('disabled', true);
        $('#cphContenido_chkSensorMagneticoExterno01').prop('disabled', true);
        $('#cphContenido_chkSensorMagneticoExterno02').prop('disabled', true);
        $('#cphContenido_chkCerraduraElectricaExterna').prop('disabled', true);
        $('#cphContenido_chkSensorMovimiento90Externo01').prop('disabled', true);
        $('#cphContenido_chkSensorMovimiento90Externo02').prop('disabled', true);
        $('#cphContenido_chkSirenaEstroboscopica').prop('disabled', true);
        $('#cphContenido_chkLectorBiometrico').prop('disabled', true);
        $('#cphContenido_chkLectorTarjeta').prop('disabled', true);
        $('#cphContenido_chkCamaraExteriorPTZ').prop('disabled', true);
        $('#cphContenido_chkExtintorExterior').prop('disabled', true);
        $('#cphContenido_chkSensorMagneticoInterno01').prop('disabled', true);
        $('#cphContenido_chkSensorMagneticoInterno02').prop('disabled', true);
        $('#cphContenido_chkSensorOcupacional').prop('disabled', true);
        $('#cphContenido_chkSensorHumo').prop('disabled', true);
        $('#cphContenido_chkSensorMovimiento360').prop('disabled', true);
        $('#cphContenido_chkSensorInundacion').prop('disabled', true);
        $('#cphContenido_chkCamaraPTZInterior').prop('disabled', true);
        $('#cphContenido_chkExtintorInterior').prop('disabled', true);
        $('#cphContenido_chkReleEquipoInterno').prop('disabled', true);
        $('#cphContenido_chkControladorNVRSwitchPOE').prop('disabled', true);
        $('#cphContenido_chkAterramientoControlador').prop('disabled', true);
        $('#cphContenido_chkAterramientoNVRPOE01').prop('disabled', true);
        $('#cphContenido_chkAterramientoNVRPOE02').prop('disabled', true);
        $('#cphContenido_chkAterramientoBarra').prop('disabled', true);
        $('#cphContenido_chkSerialNumberSensorMovimiento9001').prop('disabled', true);
        $('#cphContenido_chkSerialNumberSensorMovimiento9002').prop('disabled', true);
        $('#cphContenido_chkSerialNumberSwitchPOENVR01').prop('disabled', true);
        $('#cphContenido_chkSerialNumberSwitchPOENVR02').prop('disabled', true);
        $('#cphContenido_chkSerialNumberControlador').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoEquiposControlador').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoEquiposNVR').prop('disabled', true);
        $('#cphContenido_chkChecklist').prop('disabled', true);
        $('#cphContenido_chkCamaraExteriorModoNormalPosicion01').prop('disabled', true);
        $('#cphContenido_chkCamaraExteriorModoNormalPosicion02').prop('disabled', true);
        $('#cphContenido_chkCamaraInteriorModoNormal').prop('disabled', true);
        $('#cphContenido_chkCamaraInteriorModoInfrarojo').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaPuertaPrincipalAbierta').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaCamaraInterna').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaCamaraExterna').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaSensorAniego').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaSensorHumo').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaTamperSensor9001').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9001').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9001').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaTamperSensor9002').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor9002').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaMaskingSensor9002').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaTamperSensor360').prop('disabled', true);
        $('#cphContenido_chkTechnicianProgramAlarmaMovimientoSensor360').prop('disabled', true);
        $('#cphContenido_chkPingCamara01Indoor').prop('disabled', true);
        $('#cphContenido_chkPingCamara02Outdoor').prop('disabled', true);
        $('#cphContenido_chkPingControlador').prop('disabled', true);
        $('#cphContenido_chkPingGateway').prop('disabled', true);
        $('#cphContenido_chkPingNVR').prop('disabled', true);
        $('#cphContenido_chkchkPingBiometrico').prop('disabled', true);
        $('#cphContenido_chkEquipamientos').prop('disabled', true);
        $('#cphContenido_chkMateriales').prop('disabled', true);
        $('#cphContenido_chkExtinguidorExternoFechaExpiracion').prop('disabled', true);
        $('#cphContenido_chkExtinguidorInternoFechaExpiracion').prop('disabled', true);

        //Comentarios
        $('#txtFechaComentario').prop('disabled', true);
        $('#txtFachadaNodoComentario').prop('disabled', true);
        $('#txtSalaEquiposPanoramicaRackComentario').prop('disabled', true);
        $('#txtPanoramicaInterior01Comentario').prop('disabled', true);
        $('#txtPanoramicaInterior02Comentario').prop('disabled', true);
        $('#txtPanoramicaEquiposPatioComentario').prop('disabled', true);
        $('#txtBreakerAsignadoSeguridadComentario').prop('disabled', true);
        $('#txtCerraduraElectromagneticaExterna01Comentario').prop('disabled', true);
        $('#txtCerraduraElectromagneticaExterna02Comentario').prop('disabled', true);
        $('#txtSensorMagneticoExterno01Comentario').prop('disabled', true);
        $('#txtSensorMagneticoExterno02Comentario').prop('disabled', true);
        $('#txtCerraduraElectricaExternaComentario').prop('disabled', true);
        $('#txtSensorMovimiento90Externo01Comentario').prop('disabled', true);
        $('#txtSensorMovimiento90Externo02Comentario').prop('disabled', true);
        $('#txtSirenaEstroboscopicaComentario').prop('disabled', true);
        $('#txtLectorBiometricoComentario').prop('disabled', true);
        $('#txtLectorTarjetaComentario').prop('disabled', true);
        $('#txtCamaraExteriorPTZComentario').prop('disabled', true);
        $('#txtExtintorExteriorComentario').prop('disabled', true);
        $('#txtSensorMagneticoInterno01Comentario').prop('disabled', true);
        $('#txtSensorMagneticoInterno02Comentario').prop('disabled', true);
        $('#txtSensorOcupacionalComentario').prop('disabled', true);
        $('#txtSensorHumoComentario').prop('disabled', true);
        $('#txtSensorMovimiento360Comentario').prop('disabled', true);
        $('#txtSensorInundacionComentario').prop('disabled', true);
        $('#txtCamaraPTZInteriorComentario').prop('disabled', true);
        $('#txtExtintorInteriorComentario').prop('disabled', true);
        $('#txtReleEquipoInternoComentario').prop('disabled', true);
        $('#txtControladorNVRSwitchPOEComentario').prop('disabled', true);
        $('#txtAterramientoControladorComentario').prop('disabled', true);
        $('#txtAterramientoNVRPOE01Comentario').prop('disabled', true);
        $('#txtAterramientoNVRPOE02Comentario').prop('disabled', true);
        $('#txtAterramientoBarraComentario').prop('disabled', true);
        $('#txtSerialNumberSensorMovimiento9001Comentario').prop('disabled', true);
        $('#txtSerialNumberSensorMovimiento9002Comentario').prop('disabled', true);
        $('#txtSerialNumberSwitchPOENVR01Comentario').prop('disabled', true);
        $('#txtSerialNumberSwitchPOENVR02Comentario').prop('disabled', true);
        $('#txtSerialNumberControladorComentario').prop('disabled', true);
        $('#txtEtiquetadoEquiposControladorComentario').prop('disabled', true);
        $('#txtEtiquetadoEquiposNVRComentario').prop('disabled', true);
        $('#txtChecklistComentario').prop('disabled', true);
        $('#txtCamaraExteriorModoNormalPosicion01Comentario').prop('disabled', true);
        $('#txtCamaraExteriorModoNormalPosicion02Comentario').prop('disabled', true);
        $('#txtCamaraInteriorModoNormalComentario').prop('disabled', true);
        $('#txtCamaraInteriorModoInfrarojoComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaCamaraInternaComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaCamaraExternaComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaSensorAniegoComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaSensorHumoComentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaTamperSensor9001Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaMovimientoSensor9001Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaMaskingSensor9001Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaTamperSensor9002Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaMovimientoSensor9002Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaMaskingSensor9002Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaTamperSensor360Comentario').prop('disabled', true);
        $('#txtTechnicianProgramAlarmaMovimientoSensor360Comentario').prop('disabled', true);
        $('#txtPingCamara01IndoorComentario').prop('disabled', true);
        $('#txtPingCamara02OutdoorComentario').prop('disabled', true);
        $('#txtPingControladorComentario').prop('disabled', true);
        $('#txtPingGatewayComentario').prop('disabled', true);
        $('#txtPingNVRComentario').prop('disabled', true);
        $('#txtchkPingBiometricoComentario').prop('disabled', true);
        $('#txtEquipamientosComentario').prop('disabled', true);
        $('#txtMaterialesComentario').prop('disabled', true);
        $('#txtExtinguidorExternoFechaExpiracionComentario').prop('disabled', true);
        $('#txtExtinguidorInternoFechaExpiracionComentario').prop('disabled', true);

    }

    // #endregion

});