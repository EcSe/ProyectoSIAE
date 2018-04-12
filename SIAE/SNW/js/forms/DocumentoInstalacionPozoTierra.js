$(document).ready(function () {

    $.fn.validarDdlTipoFuente = function () {
        strValor = $("#cphContenido_ddlTipoFuente").val();
        console.log("$.fn.validarDdlTipoFuente 01 strValor = " + strValor);
        blnEquipamiento = $("#cphContenido_chkEquipamientos").prop("checked");
        if (strValor == "000001") {//CMM4
            $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_3").val("");
        }
        else {
            $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_4").val("");
        }
        if (!blnEquipamiento) {
            if (strValor == "000001") {//CMM4
                $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_3").prop('disabled', true);
                $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_4").prop('disabled', false);
            }
            else {
                $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_3").prop('disabled', false);
                $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_4").prop('disabled', true);
            }
        }
    };

    // #region POZO A TIERRA 5 Ohm

    // #region 1. Fotografía frontal de la IIBB

    // #region Frontal de la IIBB

    $('#cphContenido_chkPT5FrontalIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkPT5FrontalIIBB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5FrontalIIBB, "#divPT5FrontalIIBB");
        else
            habilitarRealUploader(true, divPT5FrontalIIBB, "#divPT5FrontalIIBB");
    });

    poPT5FrontalIIBBComentario = $("#spPT5FrontalIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5FrontalIIBBComentario').html();
        }
    });

    poPT5FrontalIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5FrontalIIBBComentario.on('shown.bs.popover', function () {
        $("#txtPT5FrontalIIBBComentario").val($("#cphContenido_hfPT5FrontalIIBBComentario").val());
        $("#txtPT5FrontalIIBBComentario").focus();
        $("#txtPT5FrontalIIBBComentario").keyup(function () {
            $("#cphContenido_hfPT5FrontalIIBBComentario").val($(this).val());
        });
    });

    var divPT5FrontalIIBB = new RealUploader("#divPT5FrontalIIBB", {
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
                $('#cphContenido_hfPT5FrontalIIBB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5FrontalIIBB').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5FrontalIIBB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5FrontalIIBB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5FrontalIIBB').val() != "") {
        divPT5FrontalIIBB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5FrontalIIBB').val(), $('#cphContenido_hfPT5FrontalIIBB').val());
    }

    $("#cphContenido_chkPT5FrontalIIBB").trigger("change");

    // #endregion

    // #endregion
    
    // #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

    // #region Ubicación del Pozo a Tierra Antes de ser Instalado

    $('#cphContenido_chkPT5UbicacionPTAntesInstalacion').change(function () {
        var blnActivo = $("#cphContenido_chkPT5UbicacionPTAntesInstalacion").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5UbicacionPTAntesInstalacion, "#divPT5UbicacionPTAntesInstalacion");
        else
            habilitarRealUploader(true, divPT5UbicacionPTAntesInstalacion, "#divPT5UbicacionPTAntesInstalacion");
    });

    poPT5UbicacionPTAntesInstalacionComentario = $("#spPT5UbicacionPTAntesInstalacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5UbicacionPTAntesInstalacionComentario').html();
        }
    });

    poPT5UbicacionPTAntesInstalacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5UbicacionPTAntesInstalacionComentario.on('shown.bs.popover', function () {
        $("#txtPT5UbicacionPTAntesInstalacionComentario").val($("#cphContenido_hfPT5UbicacionPTAntesInstalacionComentario").val());
        $("#txtPT5UbicacionPTAntesInstalacionComentario").focus();
        $("#txtPT5UbicacionPTAntesInstalacionComentario").keyup(function () {
            $("#cphContenido_hfPT5UbicacionPTAntesInstalacionComentario").val($(this).val());
        });
    });

    var divPT5UbicacionPTAntesInstalacion = new RealUploader("#divPT5UbicacionPTAntesInstalacion", {
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
                $('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val() != "") {
        divPT5UbicacionPTAntesInstalacion.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val(), $('#cphContenido_hfPT5UbicacionPTAntesInstalacion').val());
    }

    $("#cphContenido_chkPT5UbicacionPTAntesInstalacion").trigger("change");

    // #endregion

    // #endregion

    // #region 3. Fotografía de instalación de pozo a tierra

    // #region Panoramica de la zanja abierta

    $('#cphContenido_chkPT5InstalacionPTPanoramicaZanjaAbierta').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaZanjaAbierta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaZanjaAbierta, "#divPT5InstalacionPTPanoramicaZanjaAbierta");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaZanjaAbierta, "#divPT5InstalacionPTPanoramicaZanjaAbierta");
    });

    poPT5InstalacionPTPanoramicaZanjaAbiertaComentario = $("#spPT5InstalacionPTPanoramicaZanjaAbiertaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaZanjaAbiertaComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaZanjaAbiertaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaZanjaAbiertaComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaZanjaAbiertaComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbiertaComentario").val());
        $("#txtPT5InstalacionPTPanoramicaZanjaAbiertaComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaZanjaAbiertaComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbiertaComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaZanjaAbierta = new RealUploader("#divPT5InstalacionPTPanoramicaZanjaAbierta", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val() != "") {
        divPT5InstalacionPTPanoramicaZanjaAbierta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaZanjaAbierta').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaZanjaAbierta").trigger("change");

    // #endregion

    // #region Panorámica Vertido de Tierra Cultivo cernida en Zanja

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, "#divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, "#divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja");
    });

    poPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario = $("#spPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja").trigger("change");

    // #endregion

    // #region Panorámica del vertido de la sal granulada en la zanja

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja, "#divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja, "#divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja");
    });

    poPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario = $("#spPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja").trigger("change");

    // #endregion

    // #region Panorámica Vertido de la Disolución del Cemento Conductivo

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, "#divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, "#divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo");
    });

    poPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario = $("#spPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo").trigger("change");

    // #endregion

    // #region Panorámica de la Colocación del Fleje de Cobre 01

    $('#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaColocacionFlejeCobre01, "#divPT5InstalacionPTPanoramicaColocacionFlejeCobre01");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaColocacionFlejeCobre01, "#divPT5InstalacionPTPanoramicaColocacionFlejeCobre01");
    });

    poPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario = $("#spPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").val());
        $("#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").focus();
        $("#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaColocacionFlejeCobre01 = new RealUploader("#divPT5InstalacionPTPanoramicaColocacionFlejeCobre01", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val() != "") {
        divPT5InstalacionPTPanoramicaColocacionFlejeCobre01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01").trigger("change");

    // #endregion

    // #region Panorámica de la Colocación del Fleje de Cobre 02

    $('#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaColocacionFlejeCobre02, "#divPT5InstalacionPTPanoramicaColocacionFlejeCobre02");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaColocacionFlejeCobre02, "#divPT5InstalacionPTPanoramicaColocacionFlejeCobre02");
    });

    poPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario = $("#spPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").val());
        $("#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").focus();
        $("#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaColocacionFlejeCobre02 = new RealUploader("#divPT5InstalacionPTPanoramicaColocacionFlejeCobre02", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val() != "") {
        divPT5InstalacionPTPanoramicaColocacionFlejeCobre02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02").trigger("change");

    // #endregion

    // #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, "#divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, "#divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje");
    });

    poPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario = $("#spPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje").trigger("change");

    // #endregion

    // #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, "#divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, "#divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo");
    });

    poPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario = $("#spPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo").trigger("change");

    // #endregion

    // #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, "#divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, "#divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja");
    });

    poPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario = $("#spPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja").trigger("change");

    // #endregion

    // #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja

    $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, "#divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja");
        else
            habilitarRealUploader(true, divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, "#divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja");
    });

    poPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario = $("#spPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario').html();
        }
    });

    poPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").val($("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").val());
        $("#txtPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").focus();
        $("#txtPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").val($(this).val());
        });
    });

    var divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja = new RealUploader("#divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja", {
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
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val() != "") {
        divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(), $('#cphContenido_hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val());
    }

    $("#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja").trigger("change");

    // #endregion

    // #endregion

    // #region 4. Fotografía de medición del pozo a tierra

    // #region MEDICION 1:Foto panorámica de medición de pozo a tierra

    $('#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT01').change(function () {
        var blnActivo = $("#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5MedicionPTPanoramicaMedicionPT01, "#divPT5MedicionPTPanoramicaMedicionPT01");
        else
            habilitarRealUploader(true, divPT5MedicionPTPanoramicaMedicionPT01, "#divPT5MedicionPTPanoramicaMedicionPT01");
    });

    poPT5MedicionPTPanoramicaMedicionPT01Comentario = $("#spPT5MedicionPTPanoramicaMedicionPT01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5MedicionPTPanoramicaMedicionPT01Comentario').html();
        }
    });

    poPT5MedicionPTPanoramicaMedicionPT01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5MedicionPTPanoramicaMedicionPT01Comentario.on('shown.bs.popover', function () {
        $("#txtPT5MedicionPTPanoramicaMedicionPT01Comentario").val($("#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01Comentario").val());
        $("#txtPT5MedicionPTPanoramicaMedicionPT01Comentario").focus();
        $("#txtPT5MedicionPTPanoramicaMedicionPT01Comentario").keyup(function () {
            $("#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01Comentario").val($(this).val());
        });
    });

    var divPT5MedicionPTPanoramicaMedicionPT01 = new RealUploader("#divPT5MedicionPTPanoramicaMedicionPT01", {
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
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val() != "") {
        divPT5MedicionPTPanoramicaMedicionPT01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val(), $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT01').val());
    }

    $("#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT01").trigger("change");

    // #endregion

    // #region MEDICION 2:Foto panorámica de medición de pozo a tierra

    $('#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT02').change(function () {
        var blnActivo = $("#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5MedicionPTPanoramicaMedicionPT02, "#divPT5MedicionPTPanoramicaMedicionPT02");
        else
            habilitarRealUploader(true, divPT5MedicionPTPanoramicaMedicionPT02, "#divPT5MedicionPTPanoramicaMedicionPT02");
    });

    poPT5MedicionPTPanoramicaMedicionPT02Comentario = $("#spPT5MedicionPTPanoramicaMedicionPT02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5MedicionPTPanoramicaMedicionPT02Comentario').html();
        }
    });

    poPT5MedicionPTPanoramicaMedicionPT02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5MedicionPTPanoramicaMedicionPT02Comentario.on('shown.bs.popover', function () {
        $("#txtPT5MedicionPTPanoramicaMedicionPT02Comentario").val($("#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02Comentario").val());
        $("#txtPT5MedicionPTPanoramicaMedicionPT02Comentario").focus();
        $("#txtPT5MedicionPTPanoramicaMedicionPT02Comentario").keyup(function () {
            $("#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02Comentario").val($(this).val());
        });
    });

    var divPT5MedicionPTPanoramicaMedicionPT02 = new RealUploader("#divPT5MedicionPTPanoramicaMedicionPT02", {
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
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val() != "") {
        divPT5MedicionPTPanoramicaMedicionPT02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val(), $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT02').val());
    }

    $("#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT02").trigger("change");

    // #endregion

    // #region MEDICION 3:Foto panorámica de medición de pozo a tierra

    $('#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT03').change(function () {
        var blnActivo = $("#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT5MedicionPTPanoramicaMedicionPT03, "#divPT5MedicionPTPanoramicaMedicionPT03");
        else
            habilitarRealUploader(true, divPT5MedicionPTPanoramicaMedicionPT03, "#divPT5MedicionPTPanoramicaMedicionPT03");
    });

    poPT5MedicionPTPanoramicaMedicionPT03Comentario = $("#spPT5MedicionPTPanoramicaMedicionPT03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT5MedicionPTPanoramicaMedicionPT03Comentario').html();
        }
    });

    poPT5MedicionPTPanoramicaMedicionPT03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT5MedicionPTPanoramicaMedicionPT03Comentario.on('shown.bs.popover', function () {
        $("#txtPT5MedicionPTPanoramicaMedicionPT03Comentario").val($("#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03Comentario").val());
        $("#txtPT5MedicionPTPanoramicaMedicionPT03Comentario").focus();
        $("#txtPT5MedicionPTPanoramicaMedicionPT03Comentario").keyup(function () {
            $("#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03Comentario").val($(this).val());
        });
    });

    var divPT5MedicionPTPanoramicaMedicionPT03 = new RealUploader("#divPT5MedicionPTPanoramicaMedicionPT03", {
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
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val() != "") {
        divPT5MedicionPTPanoramicaMedicionPT03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val(), $('#cphContenido_hfPT5MedicionPTPanoramicaMedicionPT03').val());
    }

    $("#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT03").trigger("change");

    // #endregion

    // #endregion

    // #endregion

    // #region POZO A TIERRA 10 Ohm

    // #region 1. Fotografía frontal de la IIBB

    // #region Frontal de la IIBB

    $('#cphContenido_chkPT10FrontalIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkPT10FrontalIIBB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10FrontalIIBB, "#divPT10FrontalIIBB");
        else
            habilitarRealUploader(true, divPT10FrontalIIBB, "#divPT10FrontalIIBB");
    });

    poPT10FrontalIIBBComentario = $("#spPT10FrontalIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10FrontalIIBBComentario').html();
        }
    });

    poPT10FrontalIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10FrontalIIBBComentario.on('shown.bs.popover', function () {
        $("#txtPT10FrontalIIBBComentario").val($("#cphContenido_hfPT10FrontalIIBBComentario").val());
        $("#txtPT10FrontalIIBBComentario").focus();
        $("#txtPT10FrontalIIBBComentario").keyup(function () {
            $("#cphContenido_hfPT10FrontalIIBBComentario").val($(this).val());
        });
    });

    var divPT10FrontalIIBB = new RealUploader("#divPT10FrontalIIBB", {
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
                $('#cphContenido_hfPT10FrontalIIBB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10FrontalIIBB').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10FrontalIIBB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10FrontalIIBB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10FrontalIIBB').val() != "") {
        divPT10FrontalIIBB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10FrontalIIBB').val(), $('#cphContenido_hfPT10FrontalIIBB').val());
    }

    $("#cphContenido_chkPT10FrontalIIBB").trigger("change");

    // #endregion

    // #endregion

    // #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

    // #region Ubicación del Pozo a Tierra Antes de ser Instalado

    $('#cphContenido_chkPT10UbicacionPTAntesInstalacion').change(function () {
        var blnActivo = $("#cphContenido_chkPT10UbicacionPTAntesInstalacion").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10UbicacionPTAntesInstalacion, "#divPT10UbicacionPTAntesInstalacion");
        else
            habilitarRealUploader(true, divPT10UbicacionPTAntesInstalacion, "#divPT10UbicacionPTAntesInstalacion");
    });

    poPT10UbicacionPTAntesInstalacionComentario = $("#spPT10UbicacionPTAntesInstalacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10UbicacionPTAntesInstalacionComentario').html();
        }
    });

    poPT10UbicacionPTAntesInstalacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10UbicacionPTAntesInstalacionComentario.on('shown.bs.popover', function () {
        $("#txtPT10UbicacionPTAntesInstalacionComentario").val($("#cphContenido_hfPT10UbicacionPTAntesInstalacionComentario").val());
        $("#txtPT10UbicacionPTAntesInstalacionComentario").focus();
        $("#txtPT10UbicacionPTAntesInstalacionComentario").keyup(function () {
            $("#cphContenido_hfPT10UbicacionPTAntesInstalacionComentario").val($(this).val());
        });
    });

    var divPT10UbicacionPTAntesInstalacion = new RealUploader("#divPT10UbicacionPTAntesInstalacion", {
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
                $('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val() != "") {
        divPT10UbicacionPTAntesInstalacion.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val(), $('#cphContenido_hfPT10UbicacionPTAntesInstalacion').val());
    }

    $("#cphContenido_chkPT10UbicacionPTAntesInstalacion").trigger("change");

    // #endregion

    // #endregion

    // #region 3. Fotografía de instalación de pozo a tierra

    // #region Panoramica de la zanja abierta

    $('#cphContenido_chkPT10InstalacionPTPanoramicaZanjaAbierta').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaZanjaAbierta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaZanjaAbierta, "#divPT10InstalacionPTPanoramicaZanjaAbierta");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaZanjaAbierta, "#divPT10InstalacionPTPanoramicaZanjaAbierta");
    });

    poPT10InstalacionPTPanoramicaZanjaAbiertaComentario = $("#spPT10InstalacionPTPanoramicaZanjaAbiertaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaZanjaAbiertaComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaZanjaAbiertaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaZanjaAbiertaComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaZanjaAbiertaComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbiertaComentario").val());
        $("#txtPT10InstalacionPTPanoramicaZanjaAbiertaComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaZanjaAbiertaComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbiertaComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaZanjaAbierta = new RealUploader("#divPT10InstalacionPTPanoramicaZanjaAbierta", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val() != "") {
        divPT10InstalacionPTPanoramicaZanjaAbierta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaZanjaAbierta').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaZanjaAbierta").trigger("change");

    // #endregion

    // #region Panorámica Vertido de Tierra Cultivo cernida en Zanja

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, "#divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, "#divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja");
    });

    poPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario = $("#spPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja").trigger("change");

    // #endregion

    // #region Panorámica del vertido de la sal granulada en la zanja

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja, "#divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja, "#divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja");
    });

    poPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario = $("#spPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja").trigger("change");

    // #endregion

    // #region Panorámica Vertido de la Disolución del Cemento Conductivo

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, "#divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, "#divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo");
    });

    poPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario = $("#spPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo").trigger("change");

    // #endregion

    // #region Panorámica de la Colocación del Fleje de Cobre 01

    $('#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaColocacionFlejeCobre01, "#divPT10InstalacionPTPanoramicaColocacionFlejeCobre01");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaColocacionFlejeCobre01, "#divPT10InstalacionPTPanoramicaColocacionFlejeCobre01");
    });

    poPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario = $("#spPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").val());
        $("#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").focus();
        $("#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaColocacionFlejeCobre01 = new RealUploader("#divPT10InstalacionPTPanoramicaColocacionFlejeCobre01", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val() != "") {
        divPT10InstalacionPTPanoramicaColocacionFlejeCobre01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01").trigger("change");

    // #endregion

    // #region Panorámica de la Colocación del Fleje de Cobre 02

    $('#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaColocacionFlejeCobre02, "#divPT10InstalacionPTPanoramicaColocacionFlejeCobre02");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaColocacionFlejeCobre02, "#divPT10InstalacionPTPanoramicaColocacionFlejeCobre02");
    });

    poPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario = $("#spPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").val());
        $("#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").focus();
        $("#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaColocacionFlejeCobre02 = new RealUploader("#divPT10InstalacionPTPanoramicaColocacionFlejeCobre02", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val() != "") {
        divPT10InstalacionPTPanoramicaColocacionFlejeCobre02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02").trigger("change");

    // #endregion

    // #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, "#divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, "#divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje");
    });

    poPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario = $("#spPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje").trigger("change");

    // #endregion

    // #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, "#divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, "#divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo");
    });

    poPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario = $("#spPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo").trigger("change");

    // #endregion

    // #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, "#divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, "#divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja");
    });

    poPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario = $("#spPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja").trigger("change");

    // #endregion

    // #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja

    $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').change(function () {
        var blnActivo = $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, "#divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja");
        else
            habilitarRealUploader(true, divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, "#divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja");
    });

    poPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario = $("#spPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario').html();
        }
    });

    poPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario.on('shown.bs.popover', function () {
        $("#txtPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").val($("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").val());
        $("#txtPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").focus();
        $("#txtPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").keyup(function () {
            $("#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario").val($(this).val());
        });
    });

    var divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja = new RealUploader("#divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja", {
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
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val() != "") {
        divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val(), $('#cphContenido_hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').val());
    }

    $("#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja").trigger("change");

    // #endregion

    // #endregion

    // #region 4. Fotografía de medición del pozo a tierra

    // #region MEDICION 1:Foto panorámica de medición de pozo a tierra

    $('#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT01').change(function () {
        var blnActivo = $("#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10MedicionPTPanoramicaMedicionPT01, "#divPT10MedicionPTPanoramicaMedicionPT01");
        else
            habilitarRealUploader(true, divPT10MedicionPTPanoramicaMedicionPT01, "#divPT10MedicionPTPanoramicaMedicionPT01");
    });

    poPT10MedicionPTPanoramicaMedicionPT01Comentario = $("#spPT10MedicionPTPanoramicaMedicionPT01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10MedicionPTPanoramicaMedicionPT01Comentario').html();
        }
    });

    poPT10MedicionPTPanoramicaMedicionPT01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10MedicionPTPanoramicaMedicionPT01Comentario.on('shown.bs.popover', function () {
        $("#txtPT10MedicionPTPanoramicaMedicionPT01Comentario").val($("#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01Comentario").val());
        $("#txtPT10MedicionPTPanoramicaMedicionPT01Comentario").focus();
        $("#txtPT10MedicionPTPanoramicaMedicionPT01Comentario").keyup(function () {
            $("#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01Comentario").val($(this).val());
        });
    });

    var divPT10MedicionPTPanoramicaMedicionPT01 = new RealUploader("#divPT10MedicionPTPanoramicaMedicionPT01", {
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
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val() != "") {
        divPT10MedicionPTPanoramicaMedicionPT01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val(), $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT01').val());
    }

    $("#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT01").trigger("change");

    // #endregion

    // #region MEDICION 2:Foto panorámica de medición de pozo a tierra

    $('#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT02').change(function () {
        var blnActivo = $("#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10MedicionPTPanoramicaMedicionPT02, "#divPT10MedicionPTPanoramicaMedicionPT02");
        else
            habilitarRealUploader(true, divPT10MedicionPTPanoramicaMedicionPT02, "#divPT10MedicionPTPanoramicaMedicionPT02");
    });

    poPT10MedicionPTPanoramicaMedicionPT02Comentario = $("#spPT10MedicionPTPanoramicaMedicionPT02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10MedicionPTPanoramicaMedicionPT02Comentario').html();
        }
    });

    poPT10MedicionPTPanoramicaMedicionPT02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10MedicionPTPanoramicaMedicionPT02Comentario.on('shown.bs.popover', function () {
        $("#txtPT10MedicionPTPanoramicaMedicionPT02Comentario").val($("#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02Comentario").val());
        $("#txtPT10MedicionPTPanoramicaMedicionPT02Comentario").focus();
        $("#txtPT10MedicionPTPanoramicaMedicionPT02Comentario").keyup(function () {
            $("#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02Comentario").val($(this).val());
        });
    });

    var divPT10MedicionPTPanoramicaMedicionPT02 = new RealUploader("#divPT10MedicionPTPanoramicaMedicionPT02", {
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
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val() != "") {
        divPT10MedicionPTPanoramicaMedicionPT02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val(), $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT02').val());
    }

    $("#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT02").trigger("change");

    // #endregion

    // #region MEDICION 3:Foto panorámica de medición de pozo a tierra

    $('#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT03').change(function () {
        var blnActivo = $("#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPT10MedicionPTPanoramicaMedicionPT03, "#divPT10MedicionPTPanoramicaMedicionPT03");
        else
            habilitarRealUploader(true, divPT10MedicionPTPanoramicaMedicionPT03, "#divPT10MedicionPTPanoramicaMedicionPT03");
    });

    poPT10MedicionPTPanoramicaMedicionPT03Comentario = $("#spPT10MedicionPTPanoramicaMedicionPT03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPT10MedicionPTPanoramicaMedicionPT03Comentario').html();
        }
    });

    poPT10MedicionPTPanoramicaMedicionPT03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPT10MedicionPTPanoramicaMedicionPT03Comentario.on('shown.bs.popover', function () {
        $("#txtPT10MedicionPTPanoramicaMedicionPT03Comentario").val($("#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03Comentario").val());
        $("#txtPT10MedicionPTPanoramicaMedicionPT03Comentario").focus();
        $("#txtPT10MedicionPTPanoramicaMedicionPT03Comentario").keyup(function () {
            $("#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03Comentario").val($(this).val());
        });
    });

    var divPT10MedicionPTPanoramicaMedicionPT03 = new RealUploader("#divPT10MedicionPTPanoramicaMedicionPT03", {
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
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val() != "") {
        divPT10MedicionPTPanoramicaMedicionPT03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val(), $('#cphContenido_hfPT10MedicionPTPanoramicaMedicionPT03').val());
    }

    $("#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT03").trigger("change");

    // #endregion

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
        //#region POZO A TIERRA 5 OHM
        //Check aprobacion
        $('#cphContenido_chkPT5FrontalIIBB').prop('disabled', true);
        $('#cphContenido_chkPT5UbicacionPTAntesInstalacion').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaZanjaAbierta').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').prop('disabled', true);
        $('#cphContenido_chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').prop('disabled', true);
        $('#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT01').prop('disabled', true);
        $('#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT02').prop('disabled', true);
        $('#cphContenido_chkPT5MedicionPTPanoramicaMedicionPT03').prop('disabled', true);

        // #endregion

        //#region bloqueamos los comentarioss
        $('#txtPT5FrontalIIBBComentario').prop('disabled', true);
        $('#txtPT5UbicacionPTAntesInstalacionComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaZanjaAbiertaComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario').prop('disabled', true);
        $('#txtPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario').prop('disabled', true);
        $('#txtPT5MedicionPTPanoramicaMedicionPT01Comentario').prop('disabled', true);
        $('#txtPT5MedicionPTPanoramicaMedicionPT02Comentario').prop('disabled', true);
        $('#txtPT5MedicionPTPanoramicaMedicionPT03Comentario').prop('disabled', true);

        //#endregion
        //#endregion

        //#region POZO A TIERRA 10 OHM
        //Check aprobacion
        $('#cphContenido_chkPT10FrontalIIBB').prop('disabled', true);
        $('#cphContenido_chkPT10UbicacionPTAntesInstalacion').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaZanjaAbierta').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja').prop('disabled', true);
        $('#cphContenido_chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja').prop('disabled', true);
        $('#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT01').prop('disabled', true);
        $('#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT02').prop('disabled', true);
        $('#cphContenido_chkPT10MedicionPTPanoramicaMedicionPT03').prop('disabled', true);

        // #endregion

        //#region bloqueamos los comentarioss
        $('#txtPT10FrontalIIBBComentario').prop('disabled', true);
        $('#txtPT10UbicacionPTAntesInstalacionComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaZanjaAbiertaComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario').prop('disabled', true);
        $('#txtPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario').prop('disabled', true);
        $('#txtPT10MedicionPTPanoramicaMedicionPT01Comentario').prop('disabled', true);
        $('#txtPT10MedicionPTPanoramicaMedicionPT02Comentario').prop('disabled', true);
        $('#txtPT10MedicionPTPanoramicaMedicionPT03Comentario').prop('disabled', true);

        //#endregion
        //#endregion







    }

    // #endregion



});