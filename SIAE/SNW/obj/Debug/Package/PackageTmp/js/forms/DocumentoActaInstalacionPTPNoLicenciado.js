﻿$(document).ready(function () {

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

    // #endregion  

    // #endregion

    // #region 1 Configuración y Mediciones

    // #region Dirección Estación A

    $('#cphContenido_chkDireccionEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkDireccionEstacionA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDireccionEstacionA").prop('disabled', true);
        else
            $('#cphContenido_txtDireccionEstacionA').prop('disabled', false);
    });

    poDireccionEstacionAComentario = $("#spDireccionEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocDireccionEstacionAComentario').html();
        }
    });

    poDireccionEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDireccionEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtDireccionEstacionAComentario").val($("#cphContenido_hfDireccionEstacionAComentario").val());
        $("#txtDireccionEstacionAComentario").focus();
        $("#txtDireccionEstacionAComentario").keyup(function () {
            $("#cphContenido_hfDireccionEstacionAComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Dirección Estación B

    $('#cphContenido_chkDireccionEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkDireccionEstacionB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDireccionEstacionB").prop('disabled', true);
        else
            $('#cphContenido_txtDireccionEstacionB').prop('disabled', false);
    });

    poDireccionEstacionBComentario = $("#spDireccionEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocDireccionEstacionBComentario').html();
        }
    });

    poDireccionEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDireccionEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtDireccionEstacionBComentario").val($("#cphContenido_hfDireccionEstacionBComentario").val());
        $("#txtDireccionEstacionBComentario").focus();
        $("#txtDireccionEstacionBComentario").keyup(function () {
            $("#cphContenido_hfDireccionEstacionBComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Referencia Ubicación Estación A

    $('#cphContenido_chkReferenciaEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkReferenciaEstacionA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtReferenciaEstacionA").prop('disabled', true);
        else
            $('#cphContenido_txtReferenciaEstacionA').prop('disabled', false);
    });

    poReferenciaEstacionAComentario = $("#spReferenciaEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocReferenciaEstacionAComentario').html();
        }
    });

    poReferenciaEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poReferenciaEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtReferenciaEstacionAComentario").val($("#cphContenido_hfReferenciaEstacionAComentario").val());
        $("#txtReferenciaEstacionAComentario").focus();
        $("#txtReferenciaEstacionAComentario").keyup(function () {
            $("#cphContenido_hfReferenciaEstacionAComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Referencia Ubicación Estación B

    $('#cphContenido_chkReferenciaEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkReferenciaEstacionB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtReferenciaEstacionB").prop('disabled', true);
        else
            $('#cphContenido_txtReferenciaEstacionB').prop('disabled', false);
    });

    poReferenciaEstacionBComentario = $("#spReferenciaEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocReferenciaEstacionBComentario').html();
        }
    });

    poReferenciaEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poReferenciaEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtReferenciaEstacionBComentario").val($("#cphContenido_hfReferenciaEstacionBComentario").val());
        $("#txtReferenciaEstacionBComentario").focus();
        $("#txtReferenciaEstacionBComentario").keyup(function () {
            $("#cphContenido_hfReferenciaEstacionBComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Nivel de Recepción de operación Radio A (dBm)

    $('#cphContenido_chkNivelRecepcionOperacionRadioA').change(function () {
        var blnActivo = $("#cphContenido_chkNivelRecepcionOperacionRadioA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNivelRecepcionOperacionRadioA").prop('disabled', true);
        else
            $('#cphContenido_txtNivelRecepcionOperacionRadioA').prop('disabled', false);
    });

    poNivelRecepcionOperacionRadioAComentario = $("#spNivelRecepcionOperacionRadioAComentario").popover({
        html: true,
        content: function () {
            return $('#pocNivelRecepcionOperacionRadioAComentario').html();
        }
    });

    poNivelRecepcionOperacionRadioAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNivelRecepcionOperacionRadioAComentario.on('shown.bs.popover', function () {
        $("#txtNivelRecepcionOperacionRadioAComentario").val($("#cphContenido_hfNivelRecepcionOperacionRadioAComentario").val());
        $("#txtNivelRecepcionOperacionRadioAComentario").focus();
        $("#txtNivelRecepcionOperacionRadioAComentario").keyup(function () {
            $("#cphContenido_hfNivelRecepcionOperacionRadioAComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Nivel de Recepción de operación Radio B (dBm)

    $('#cphContenido_chkNivelRecepcionOperacionRadioB').change(function () {
        var blnActivo = $("#cphContenido_chkNivelRecepcionOperacionRadioB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNivelRecepcionOperacionRadioB").prop('disabled', true);
        else
            $('#cphContenido_txtNivelRecepcionOperacionRadioB').prop('disabled', false);
    });

    poNivelRecepcionOperacionRadioBComentario = $("#spNivelRecepcionOperacionRadioBComentario").popover({
        html: true,
        content: function () {
            return $('#pocNivelRecepcionOperacionRadioBComentario').html();
        }
    });

    poNivelRecepcionOperacionRadioBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNivelRecepcionOperacionRadioBComentario.on('shown.bs.popover', function () {
        $("#txtNivelRecepcionOperacionRadioBComentario").val($("#cphContenido_hfNivelRecepcionOperacionRadioBComentario").val());
        $("#txtNivelRecepcionOperacionRadioBComentario").focus();
        $("#txtNivelRecepcionOperacionRadioBComentario").keyup(function () {
            $("#cphContenido_hfNivelRecepcionOperacionRadioBComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Ping PTP Radio A (ms)

    $('#cphContenido_chkPingPTPRadioA').change(function () {
        var blnActivo = $("#cphContenido_chkPingPTPRadioA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPingPTPRadioA").prop('disabled', true);
        else
            $('#cphContenido_txtPingPTPRadioA').prop('disabled', false);
    });

    poPingPTPRadioAComentario = $("#spPingPTPRadioAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingPTPRadioAComentario').html();
        }
    });

    poPingPTPRadioAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingPTPRadioAComentario.on('shown.bs.popover', function () {
        $("#txtPingPTPRadioAComentario").val($("#cphContenido_hfPingPTPRadioAComentario").val());
        $("#txtPingPTPRadioAComentario").focus();
        $("#txtPingPTPRadioAComentario").keyup(function () {
            $("#cphContenido_hfPingPTPRadioAComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Ping PTP Radio B (ms)

    $('#cphContenido_chkPingPTPRadioB').change(function () {
        var blnActivo = $("#cphContenido_chkPingPTPRadioB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPingPTPRadioB").prop('disabled', true);
        else
            $('#cphContenido_txtPingPTPRadioB').prop('disabled', false);

    });

    poPingPTPRadioBComentario = $("#spPingPTPRadioBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPingPTPRadioBComentario').html();
        }
    });

    poPingPTPRadioBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPingPTPRadioBComentario.on('shown.bs.popover', function () {
        $("#txtPingPTPRadioBComentario").val($("#cphContenido_hfPingPTPRadioBComentario").val());
        $("#txtPingPTPRadioBComentario").focus();
        $("#txtPingPTPRadioBComentario").keyup(function () {
            $("#cphContenido_hfPingPTPRadioBComentario").val($(this).val());
            //console.log($(this).val());
        });
    });

    // #endregion

    // #region Configuración General del Enlace Estación A

    $('#cphContenido_chkConfiguracionGeneralEnlaceEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionGeneralEnlaceEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionGeneralEnlaceEstacionA, "#divConfiguracionGeneralEnlaceEstacionA");
        else
            habilitarRealUploader(true, divConfiguracionGeneralEnlaceEstacionA, "#divConfiguracionGeneralEnlaceEstacionA");
    });

    poConfiguracionGeneralEnlaceEstacionAComentario = $("#spConfiguracionGeneralEnlaceEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionGeneralEnlaceEstacionAComentario').html();
        }
    });

    poConfiguracionGeneralEnlaceEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionGeneralEnlaceEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionGeneralEnlaceEstacionAComentario").val($("#cphContenido_hfConfiguracionGeneralEnlaceEstacionAComentario").val());
        $("#txtConfiguracionGeneralEnlaceEstacionAComentario").focus();
        $("#txtConfiguracionGeneralEnlaceEstacionAComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionGeneralEnlaceEstacionAComentario").val($(this).val());
        });
    });

    var divConfiguracionGeneralEnlaceEstacionA = new RealUploader("#divConfiguracionGeneralEnlaceEstacionA", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val() != "") {
        divConfiguracionGeneralEnlaceEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val(), $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionA').val());
    }

    $("#cphContenido_chkConfiguracionGeneralEnlaceEstacionA").trigger("change");

    // #endregion

    // #region Configuración General del Enlace Estación B

    $('#cphContenido_chkConfiguracionGeneralEnlaceEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionGeneralEnlaceEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionGeneralEnlaceEstacionB, "#divConfiguracionGeneralEnlaceEstacionB");
        else
            habilitarRealUploader(true, divConfiguracionGeneralEnlaceEstacionB, "#divConfiguracionGeneralEnlaceEstacionB");
    });

    poConfiguracionGeneralEnlaceEstacionBComentario = $("#spConfiguracionGeneralEnlaceEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionGeneralEnlaceEstacionBComentario').html();
        }
    });

    poConfiguracionGeneralEnlaceEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionGeneralEnlaceEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionGeneralEnlaceEstacionBComentario").val($("#cphContenido_hfConfiguracionGeneralEnlaceEstacionBComentario").val());
        $("#txtConfiguracionGeneralEnlaceEstacionBComentario").focus();
        $("#txtConfiguracionGeneralEnlaceEstacionBComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionGeneralEnlaceEstacionBComentario").val($(this).val());
        });
    });

    var divConfiguracionGeneralEnlaceEstacionB = new RealUploader("#divConfiguracionGeneralEnlaceEstacionB", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val() != "") {
        divConfiguracionGeneralEnlaceEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val(), $('#cphContenido_hfConfiguracionGeneralEnlaceEstacionB').val());
    }

    $("#cphContenido_chkConfiguracionGeneralEnlaceEstacionB").trigger("change");

    // #endregion

    // #region Configuración VLAN Estación A

    $('#cphContenido_chkConfiguracionVLANEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionVLANEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionVLANEstacionA, "#divConfiguracionVLANEstacionA");
        else
            habilitarRealUploader(true, divConfiguracionVLANEstacionA, "#divConfiguracionVLANEstacionA");
    });

    poConfiguracionVLANEstacionAComentario = $("#spConfiguracionVLANEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionVLANEstacionAComentario').html();
        }
    });

    poConfiguracionVLANEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionVLANEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionVLANEstacionAComentario").val($("#cphContenido_hfConfiguracionVLANEstacionAComentario").val());
        $("#txtConfiguracionVLANEstacionAComentario").focus();
        $("#txtConfiguracionVLANEstacionAComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionVLANEstacionAComentario").val($(this).val());
        });
    });

    var divConfiguracionVLANEstacionA = new RealUploader("#divConfiguracionVLANEstacionA", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionVLANEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionVLANEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionVLANEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionVLANEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionVLANEstacionA').val() != "") {
        divConfiguracionVLANEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionVLANEstacionA').val(), $('#cphContenido_hfConfiguracionVLANEstacionA').val());
    }

    $("#cphContenido_chkConfiguracionVLANEstacionA").trigger("change");

    // #endregion

    // #region Configuración VLAN Estación B

    $('#cphContenido_chkConfiguracionVLANEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionVLANEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionVLANEstacionB, "#divConfiguracionVLANEstacionB");
        else
            habilitarRealUploader(true, divConfiguracionVLANEstacionB, "#divConfiguracionVLANEstacionB");

    });

    poConfiguracionVLANEstacionBComentario = $("#spConfiguracionVLANEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionVLANEstacionBComentario').html();
        }
    });

    poConfiguracionVLANEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionVLANEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionVLANEstacionBComentario").val($("#cphContenido_hfConfiguracionVLANEstacionBComentario").val());
        $("#txtConfiguracionVLANEstacionBComentario").focus();
        $("#txtConfiguracionVLANEstacionBComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionVLANEstacionBComentario").val($(this).val());
        });
    });

    var divConfiguracionVLANEstacionB = new RealUploader("#divConfiguracionVLANEstacionB", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionVLANEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionVLANEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionVLANEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionVLANEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionVLANEstacionB').val() != "") {
        divConfiguracionVLANEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionVLANEstacionB').val(), $('#cphContenido_hfConfiguracionVLANEstacionB').val());
    }

    $("#cphContenido_chkConfiguracionVLANEstacionB").trigger("change");

    // #endregion

    // #region Configuración Radio Estación A 01

    $('#cphContenido_chkConfiguracionRadioEstacionA01').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionRadioEstacionA01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionRadioEstacionA01, "#divConfiguracionRadioEstacionA01");
        else
            habilitarRealUploader(true, divConfiguracionRadioEstacionA01, "#divConfiguracionRadioEstacionA01");
    });

    poConfiguracionRadioEstacionA01Comentario = $("#spConfiguracionRadioEstacionA01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionRadioEstacionA01Comentario').html();
        }
    });

    poConfiguracionRadioEstacionA01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionRadioEstacionA01Comentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionRadioEstacionA01Comentario").val($("#cphContenido_hfConfiguracionRadioEstacionA01Comentario").val());
        $("#txtConfiguracionRadioEstacionA01Comentario").focus();
        $("#txtConfiguracionRadioEstacionA01Comentario").keyup(function () {
            $("#cphContenido_hfConfiguracionRadioEstacionA01Comentario").val($(this).val());
        });
    });

    var divConfiguracionRadioEstacionA01 = new RealUploader("#divConfiguracionRadioEstacionA01", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionRadioEstacionA01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionRadioEstacionA01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionRadioEstacionA01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionRadioEstacionA01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionRadioEstacionA01').val() != "") {
        divConfiguracionRadioEstacionA01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionRadioEstacionA01').val(), $('#cphContenido_hfConfiguracionRadioEstacionA01').val());
    }

    $("#cphContenido_chkConfiguracionRadioEstacionA01").trigger("change");

    // #endregion

    // #region Configuración Radio Estación A 02

    $('#cphContenido_chkConfiguracionRadioEstacionA02').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionRadioEstacionA02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionRadioEstacionA02, "#divConfiguracionRadioEstacionA02");
        else
            habilitarRealUploader(true, divConfiguracionRadioEstacionA02, "#divConfiguracionRadioEstacionA02");
    });

    poConfiguracionRadioEstacionA02Comentario = $("#spConfiguracionRadioEstacionA02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionRadioEstacionA02Comentario').html();
        }
    });

    poConfiguracionRadioEstacionA02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionRadioEstacionA02Comentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionRadioEstacionA02Comentario").val($("#cphContenido_hfConfiguracionRadioEstacionA02Comentario").val());
        $("#txtConfiguracionRadioEstacionA02Comentario").focus();
        $("#txtConfiguracionRadioEstacionA02Comentario").keyup(function () {
            $("#cphContenido_hfConfiguracionRadioEstacionA02Comentario").val($(this).val());
        });
    });

    var divConfiguracionRadioEstacionA02 = new RealUploader("#divConfiguracionRadioEstacionA02", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionRadioEstacionA02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionRadioEstacionA02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionRadioEstacionA02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionRadioEstacionA02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionRadioEstacionA02').val() != "") {
        divConfiguracionRadioEstacionA02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionRadioEstacionA02').val(), $('#cphContenido_hfConfiguracionRadioEstacionA02').val());
    }

    $("#cphContenido_chkConfiguracionRadioEstacionA02").trigger("change");

    // #endregion

    // #region Configuración Radio Estación B

    $('#cphContenido_chkConfiguracionRadioEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionRadioEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionRadioEstacionB, "#divConfiguracionRadioEstacionB");
        else
            habilitarRealUploader(true, divConfiguracionRadioEstacionB, "#divConfiguracionRadioEstacionB");
    });

    poConfiguracionRadioEstacionBComentario = $("#spConfiguracionRadioEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionRadioEstacionBComentario').html();
        }
    });

    poConfiguracionRadioEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionRadioEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionRadioEstacionBComentario").val($("#cphContenido_hfConfiguracionRadioEstacionBComentario").val());
        $("#txtConfiguracionRadioEstacionBComentario").focus();
        $("#txtConfiguracionRadioEstacionBComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionRadioEstacionBComentario").val($(this).val());
        });
    });

    var divConfiguracionRadioEstacionB = new RealUploader("#divConfiguracionRadioEstacionB", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionRadioEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionRadioEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionRadioEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionRadioEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionRadioEstacionB').val() != "") {
        divConfiguracionRadioEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionRadioEstacionB').val(), $('#cphContenido_hfConfiguracionRadioEstacionB').val());
    }

    $("#cphContenido_chkConfiguracionRadioEstacionB").trigger("change");

    // #endregion

    // #region Configuración IP Estación A

    $('#cphContenido_chkConfiguracionIPEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionIPEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionIPEstacionA, "#divConfiguracionIPEstacionA");
        else
            habilitarRealUploader(true, divConfiguracionIPEstacionA, "#divConfiguracionIPEstacionA");
    });

    poConfiguracionIPEstacionAComentario = $("#spConfiguracionIPEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionIPEstacionAComentario').html();
        }
    });

    poConfiguracionIPEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionIPEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionIPEstacionAComentario").val($("#cphContenido_hfConfiguracionIPEstacionAComentario").val());
        $("#txtConfiguracionIPEstacionAComentario").focus();
        $("#txtConfiguracionIPEstacionAComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionIPEstacionAComentario").val($(this).val());
        });
    });

    var divConfiguracionIPEstacionA = new RealUploader("#divConfiguracionIPEstacionA", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionIPEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionIPEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionIPEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionIPEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionIPEstacionA').val() != "") {
        divConfiguracionIPEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionIPEstacionA').val(), $('#cphContenido_hfConfiguracionIPEstacionA').val());
    }

    $("#cphContenido_chkConfiguracionIPEstacionA").trigger("change");

    // #endregion

    // #region Configuración IP Estación B

    $('#cphContenido_chkConfiguracionIPEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionIPEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionIPEstacionB, "#divConfiguracionIPEstacionB");
        else
            habilitarRealUploader(true, divConfiguracionIPEstacionB, "#divConfiguracionIPEstacionB");
    });

    poConfiguracionIPEstacionBComentario = $("#spConfiguracionIPEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionIPEstacionBComentario').html();
        }
    });

    poConfiguracionIPEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionIPEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionIPEstacionBComentario").val($("#cphContenido_hfConfiguracionIPEstacionBComentario").val());
        $("#txtConfiguracionIPEstacionBComentario").focus();
        $("#txtConfiguracionIPEstacionBComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionIPEstacionBComentario").val($(this).val());
        });
    });

    var divConfiguracionIPEstacionB = new RealUploader("#divConfiguracionIPEstacionB", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfiguracionIPEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionIPEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionIPEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionIPEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionIPEstacionB').val() != "") {
        divConfiguracionIPEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionIPEstacionB').val(), $('#cphContenido_hfConfiguracionIPEstacionB').val());
    }

    $("#cphContenido_chkConfiguracionIPEstacionB").trigger("change");

    // #endregion

    // #region Resultados de Analisis Estación A 01

    $('#cphContenido_chkResultadosAnalisisEstacionA01').change(function () {
        var blnActivo = $("#cphContenido_chkResultadosAnalisisEstacionA01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divResultadosAnalisisEstacionA01, "#divResultadosAnalisisEstacionA01");
        else
            habilitarRealUploader(true, divResultadosAnalisisEstacionA01, "#divResultadosAnalisisEstacionA01");
    });

    poResultadosAnalisisEstacionA01Comentario = $("#spResultadosAnalisisEstacionA01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocResultadosAnalisisEstacionA01Comentario').html();
        }
    });

    poResultadosAnalisisEstacionA01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poResultadosAnalisisEstacionA01Comentario.on('shown.bs.popover', function () {
        $("#txtResultadosAnalisisEstacionA01Comentario").val($("#cphContenido_hfResultadosAnalisisEstacionA01Comentario").val());
        $("#txtResultadosAnalisisEstacionA01Comentario").focus();
        $("#txtResultadosAnalisisEstacionA01Comentario").keyup(function () {
            $("#cphContenido_hfResultadosAnalisisEstacionA01Comentario").val($(this).val());
        });
    });

    var divResultadosAnalisisEstacionA01 = new RealUploader("#divResultadosAnalisisEstacionA01", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfResultadosAnalisisEstacionA01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionA01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfResultadosAnalisisEstacionA01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionA01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfResultadosAnalisisEstacionA01').val() != "") {
        divResultadosAnalisisEstacionA01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfResultadosAnalisisEstacionA01').val(), $('#cphContenido_hfResultadosAnalisisEstacionA01').val());
    }

    $("#cphContenido_chkResultadosAnalisisEstacionA01").trigger("change");

    // #endregion

    // #region Resultados de Analisis Estación A 02

    $('#cphContenido_chkResultadosAnalisisEstacionA02').change(function () {
        var blnActivo = $("#cphContenido_chkResultadosAnalisisEstacionA02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divResultadosAnalisisEstacionA02, "#divResultadosAnalisisEstacionA02");
        else
            habilitarRealUploader(true, divResultadosAnalisisEstacionA02, "#divResultadosAnalisisEstacionA02");
    });

    poResultadosAnalisisEstacionA02Comentario = $("#spResultadosAnalisisEstacionA02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocResultadosAnalisisEstacionA02Comentario').html();
        }
    });

    poResultadosAnalisisEstacionA02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poResultadosAnalisisEstacionA02Comentario.on('shown.bs.popover', function () {
        $("#txtResultadosAnalisisEstacionA02Comentario").val($("#cphContenido_hfResultadosAnalisisEstacionA02Comentario").val());
        $("#txtResultadosAnalisisEstacionA02Comentario").focus();
        $("#txtResultadosAnalisisEstacionA02Comentario").keyup(function () {
            $("#cphContenido_hfResultadosAnalisisEstacionA02Comentario").val($(this).val());
        });
    });

    var divResultadosAnalisisEstacionA02 = new RealUploader("#divResultadosAnalisisEstacionA02", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfResultadosAnalisisEstacionA02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionA02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfResultadosAnalisisEstacionA02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionA02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfResultadosAnalisisEstacionA02').val() != "") {
        divResultadosAnalisisEstacionA02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfResultadosAnalisisEstacionA02').val(), $('#cphContenido_hfResultadosAnalisisEstacionA02').val());
    }

    $("#cphContenido_chkResultadosAnalisisEstacionA02").trigger("change");

    // #endregion

    // #region Resultados de Analisis Estación B 01

    $('#cphContenido_chkResultadosAnalisisEstacionB01').change(function () {
        var blnActivo = $("#cphContenido_chkResultadosAnalisisEstacionB01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divResultadosAnalisisEstacionB01, "#divResultadosAnalisisEstacionB01");
        else
            habilitarRealUploader(true, divResultadosAnalisisEstacionB01, "#divResultadosAnalisisEstacionB01");
    });

    poResultadosAnalisisEstacionB01Comentario = $("#spResultadosAnalisisEstacionB01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocResultadosAnalisisEstacionB01Comentario').html();
        }
    });

    poResultadosAnalisisEstacionB01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poResultadosAnalisisEstacionB01Comentario.on('shown.bs.popover', function () {
        $("#txtResultadosAnalisisEstacionB01Comentario").val($("#cphContenido_hfResultadosAnalisisEstacionB01Comentario").val());
        $("#txtResultadosAnalisisEstacionB01Comentario").focus();
        $("#txtResultadosAnalisisEstacionB01Comentario").keyup(function () {
            $("#cphContenido_hfResultadosAnalisisEstacionB01Comentario").val($(this).val());
        });
    });

    var divResultadosAnalisisEstacionB01 = new RealUploader("#divResultadosAnalisisEstacionB01", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfResultadosAnalisisEstacionB01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionB01').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfResultadosAnalisisEstacionB01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionB01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfResultadosAnalisisEstacionB01').val() != "") {
        divResultadosAnalisisEstacionB01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfResultadosAnalisisEstacionB01').val(), $('#cphContenido_hfResultadosAnalisisEstacionB01').val());
    }

    $("#cphContenido_chkResultadosAnalisisEstacionB01").trigger("change");

    // #endregion

    // #region Resultados de Analisis Estación B 02

    $('#cphContenido_chkResultadosAnalisisEstacionB02').change(function () {
        var blnActivo = $("#cphContenido_chkResultadosAnalisisEstacionB02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divResultadosAnalisisEstacionB02, "#divResultadosAnalisisEstacionB02");
        else
            habilitarRealUploader(true, divResultadosAnalisisEstacionB02, "#divResultadosAnalisisEstacionB02");
    });

    poResultadosAnalisisEstacionB02Comentario = $("#spResultadosAnalisisEstacionB02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocResultadosAnalisisEstacionB02Comentario').html();
        }
    });

    poResultadosAnalisisEstacionB02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poResultadosAnalisisEstacionB02Comentario.on('shown.bs.popover', function () {
        $("#txtResultadosAnalisisEstacionB02Comentario").val($("#cphContenido_hfResultadosAnalisisEstacionB02Comentario").val());
        $("#txtResultadosAnalisisEstacionB02Comentario").focus();
        $("#txtResultadosAnalisisEstacionB02Comentario").keyup(function () {
            $("#cphContenido_hfResultadosAnalisisEstacionB02Comentario").val($(this).val());
        });
    });

    var divResultadosAnalisisEstacionB02 = new RealUploader("#divResultadosAnalisisEstacionB02", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfResultadosAnalisisEstacionB02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionB02').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfResultadosAnalisisEstacionB02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfResultadosAnalisisEstacionB02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfResultadosAnalisisEstacionB02').val() != "") {
        divResultadosAnalisisEstacionB02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfResultadosAnalisisEstacionB02').val(), $('#cphContenido_hfResultadosAnalisisEstacionB02').val());
    }

    $("#cphContenido_chkResultadosAnalisisEstacionB02").trigger("change");

    // #endregion

    // #endregion

    // #region 2 Materiales A

    // #region Equipamientos

    //$('#cphContenido_chkEquipamientosA').change(function () {
    //    var blnActivo = $("#cphContenido_chkEquipamientosA").prop("checked");
    //    if (blnActivo) {
    //        $("#cphContenido_gvEquipamientosA input[id^=cphContenido_gvEquipamientosA_txtSerieEquipamientoA]").each(function () {
    //            $(this).prop('disabled', true);
    //        })
    //    }
    //    else {
    //        $("#cphContenido_gvEquipamientosA input[id^=cphContenido_gvEquipamientosA_txtSerieEquipamientoA]").each(function () {
    //            $(this).prop('disabled', false);
    //        })
    //    }
    //});

    poEquipamientosAComentario = $("#spEquipamientosAComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipamientosAComentario').html();
        }
    });

    poEquipamientosAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipamientosAComentario.on('shown.bs.popover', function () {
        $("#txtEquipamientosAComentario").val($("#cphContenido_hfEquipamientosAComentario").val());
        $("#txtEquipamientosAComentario").focus();
        $("#txtEquipamientosAComentario").keyup(function () {
            $("#cphContenido_hfEquipamientosAComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Materiales

    $('#cphContenido_chkMaterialesA').change(function () {
        var blnActivo = $("#cphContenido_chkMaterialesA").prop("checked");
        if (blnActivo) {
            $("#cphContenido_gvMaterialesA input[id^=cphContenido_gvMaterialesA_txtCantidadA]").each(function () {
                $(this).prop('disabled', true);
            })
        }
        else {
            $("#cphContenido_gvMaterialesA input[id^=cphContenido_gvMaterialesA_txtCantidadA]").each(function () {
                $(this).prop('disabled', false);
            })
        }
    });

    poMaterialesAComentario = $("#spMaterialesAComentario").popover({
        html: true,
        content: function () {
            return $('#pocMaterialesAComentario').html();
        }
    });

    poMaterialesAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMaterialesAComentario.on('shown.bs.popover', function () {
        $("#txtMaterialesAComentario").val($("#cphContenido_hfMaterialesAComentario").val());
        $("#txtMaterialesAComentario").focus();
        $("#txtMaterialesAComentario").keyup(function () {
            $("#cphContenido_hfMaterialesAComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    // #region 3 Materiales B

    // #region Equipamientos

    //$('#cphContenido_chkEquipamientosB').change(function () {
    //    var blnActivo = $("#cphContenido_chkEquipamientosB").prop("checked");
    //    if (blnActivo) {
    //        $("#cphContenido_gvEquipamientosB input[id^=cphContenido_gvEquipamientosB_txtSerieEquipamientoB]").each(function () {
    //            $(this).prop('disabled', true);
    //        })
    //    }
    //    else {
    //        $("#cphContenido_gvEquipamientosB input[id^=cphContenido_gvEquipamientosB_txtSerieEquipamientoB]").each(function () {
    //            $(this).prop('disabled', false);
    //        })
    //    }
    //});

    poEquipamientosBComentario = $("#spEquipamientosBComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipamientosBComentario').html();
        }
    });

    poEquipamientosBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipamientosBComentario.on('shown.bs.popover', function () {
        $("#txtEquipamientosBComentario").val($("#cphContenido_hfEquipamientosBComentario").val());
        $("#txtEquipamientosBComentario").focus();
        $("#txtEquipamientosBComentario").keyup(function () {
            $("#cphContenido_hfEquipamientosBComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Materiales

    $('#cphContenido_chkMaterialesB').change(function () {
        var blnActivo = $("#cphContenido_chkMaterialesB").prop("checked");
        if (blnActivo) {
            $("#cphContenido_gvMaterialesB input[id^=cphContenido_gvMaterialesB_txtCantidadB]").each(function () {
                $(this).prop('disabled', true);
            })
        }
        else {
            $("#cphContenido_gvMaterialesB input[id^=cphContenido_gvMaterialesB_txtCantidadB]").each(function () {
                $(this).prop('disabled', false);
            })
        }
    });

    poMaterialesBComentario = $("#spMaterialesBComentario").popover({
        html: true,
        content: function () {
            return $('#pocMaterialesBComentario').html();
        }
    });

    poMaterialesBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMaterialesBComentario.on('shown.bs.popover', function () {
        $("#txtMaterialesBComentario").val($("#cphContenido_hfMaterialesBComentario").val());
        $("#txtMaterialesBComentario").focus();
        $("#txtMaterialesBComentario").keyup(function () {
            $("#cphContenido_hfMaterialesBComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    /*
    // #region 4 Longitud SFTP

    // #region Estación A

    // #region Distancia B

    $('#cphContenido_chkB_A').change(function () {
        var blnActivo = $("#cphContenido_chkB_A").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtB_A").prop('disabled', true);
        else
            $('#cphContenido_txtB_A').prop('disabled', false);
    });

    poB_AComentario = $("#spB_AComentario").popover({
        html: true,
        content: function () {
            return $('#pocB_AComentario').html();
        }
    });

    poB_AComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poB_AComentario.on('shown.bs.popover', function () {
        $("#txtB_AComentario").val($("#cphContenido_hfB_AComentario").val());
        $("#txtB_AComentario").focus();
        $("#txtB_AComentario").keyup(function () {
            $("#cphContenido_hfB_AComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Distancia C

    $('#cphContenido_chkC_A').change(function () {
        var blnActivo = $("#cphContenido_chkC_A").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtC_A").prop('disabled', true);
        else
            $('#cphContenido_txtC_A').prop('disabled', false);
    });

    poC_AComentario = $("#spC_AComentario").popover({
        html: true,
        content: function () {
            return $('#pocC_AComentario').html();
        }
    });

    poC_AComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poC_AComentario.on('shown.bs.popover', function () {
        $("#txtC_AComentario").val($("#cphContenido_hfC_AComentario").val());
        $("#txtC_AComentario").focus();
        $("#txtC_AComentario").keyup(function () {
            $("#cphContenido_hfC_AComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Distancia D

    $('#cphContenido_chkD_A').change(function () {
        var blnActivo = $("#cphContenido_chkD_A").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtD_A").prop('disabled', true);
        else
            $('#cphContenido_txtD_A').prop('disabled', false);
    });

    poD_AComentario = $("#spD_AComentario").popover({
        html: true,
        content: function () {
            return $('#pocD_AComentario').html();
        }
    });

    poD_AComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poD_AComentario.on('shown.bs.popover', function () {
        $("#txtD_AComentario").val($("#cphContenido_hfD_AComentario").val());
        $("#txtD_AComentario").focus();
        $("#txtD_AComentario").keyup(function () {
            $("#cphContenido_hfD_AComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Distancia E

    $('#cphContenido_chkE_A').change(function () {
        var blnActivo = $("#cphContenido_chkE_A").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtE_A").prop('disabled', true);
        else
            $('#cphContenido_txtE_A').prop('disabled', false);
    });

    poE_AComentario = $("#spE_AComentario").popover({
        html: true,
        content: function () {
            return $('#pocE_AComentario').html();
        }
    });

    poE_AComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poE_AComentario.on('shown.bs.popover', function () {
        $("#txtE_AComentario").val($("#cphContenido_hfE_AComentario").val());
        $("#txtE_AComentario").focus();
        $("#txtE_AComentario").keyup(function () {
            $("#cphContenido_hfE_AComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    // #region Estación B

    // #region Distancia B

    $('#cphContenido_chkB_B').change(function () {
        var blnActivo = $("#cphContenido_chkB_B").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtB_B").prop('disabled', true);
        else
            $('#cphContenido_txtB_B').prop('disabled', false);
    });

    poB_BComentario = $("#spB_BComentario").popover({
        html: true,
        content: function () {
            return $('#pocB_BComentario').html();
        }
    });

    poB_BComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poB_BComentario.on('shown.bs.popover', function () {
        $("#txtB_BComentario").val($("#cphContenido_hfB_BComentario").val());
        $("#txtB_BComentario").focus();
        $("#txtB_BComentario").keyup(function () {
            $("#cphContenido_hfB_BComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Distancia C

    $('#cphContenido_chkC_B').change(function () {
        var blnActivo = $("#cphContenido_chkC_B").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtC_B").prop('disabled', true);
        else
            $('#cphContenido_txtC_B').prop('disabled', false);
    });

    poC_BComentario = $("#spC_BComentario").popover({
        html: true,
        content: function () {
            return $('#pocC_BComentario').html();
        }
    });

    poC_BComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poC_BComentario.on('shown.bs.popover', function () {
        $("#txtC_BComentario").val($("#cphContenido_hfC_BComentario").val());
        $("#txtC_BComentario").focus();
        $("#txtC_BComentario").keyup(function () {
            $("#cphContenido_hfC_BComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Distancia D

    $('#cphContenido_chkD_B').change(function () {
        var blnActivo = $("#cphContenido_chkD_B").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtD_B").prop('disabled', true);
        else
            $('#cphContenido_txtD_B').prop('disabled', false);
    });

    poD_BComentario = $("#spD_BComentario").popover({
        html: true,
        content: function () {
            return $('#pocD_BComentario').html();
        }
    });

    poD_BComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poD_BComentario.on('shown.bs.popover', function () {
        $("#txtD_BComentario").val($("#cphContenido_hfD_BComentario").val());
        $("#txtD_BComentario").focus();
        $("#txtD_BComentario").keyup(function () {
            $("#cphContenido_hfD_BComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Distancia E

    $('#cphContenido_chkE_B').change(function () {
        var blnActivo = $("#cphContenido_chkE_B").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtE_B").prop('disabled', true);
        else
            $('#cphContenido_txtE_B').prop('disabled', false);
    });

    poE_BComentario = $("#spE_BComentario").popover({
        html: true,
        content: function () {
            return $('#pocE_BComentario').html();
        }
    });

    poE_BComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poE_BComentario.on('shown.bs.popover', function () {
        $("#txtE_BComentario").val($("#cphContenido_hfE_BComentario").val());
        $("#txtE_BComentario").focus();
        $("#txtE_BComentario").keyup(function () {
            $("#cphContenido_hfE_BComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    // #endregion
     */
    
    // #region 5 Asignaciones y Observaciones

    // #region Estación A

    /*
    // #region Capacidad Breaker (A)

    $('#cphContenido_chkCapacidadBreakerEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkCapacidadBreakerEstacionA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCapacidadBreakerEstacionA").prop('disabled', true);
        else
            $('#cphContenido_txtCapacidadBreakerEstacionA').prop('disabled', false);
    });

    poCapacidadBreakerEstacionAComentario = $("#spCapacidadBreakerEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocCapacidadBreakerEstacionAComentario').html();
        }
    });

    poCapacidadBreakerEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCapacidadBreakerEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtCapacidadBreakerEstacionAComentario").val($("#cphContenido_hfCapacidadBreakerEstacionAComentario").val());
        $("#txtCapacidadBreakerEstacionAComentario").focus();
        $("#txtCapacidadBreakerEstacionAComentario").keyup(function () {
            $("#cphContenido_hfCapacidadBreakerEstacionAComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Voltaje CD Breaker (V)

    $('#cphContenido_chkVoltajeCDBreakerEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkVoltajeCDBreakerEstacionA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtVoltajeCDBreakerEstacionA").prop('disabled', true);
        else
            $('#cphContenido_txtVoltajeCDBreakerEstacionA').prop('disabled', false);
    });

    poVoltajeCDBreakerEstacionAComentario = $("#spVoltajeCDBreakerEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocVoltajeCDBreakerEstacionAComentario').html();
        }
    });

    poVoltajeCDBreakerEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poVoltajeCDBreakerEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtVoltajeCDBreakerEstacionAComentario").val($("#cphContenido_hfVoltajeCDBreakerEstacionAComentario").val());
        $("#txtVoltajeCDBreakerEstacionAComentario").focus();
        $("#txtVoltajeCDBreakerEstacionAComentario").keyup(function () {
            $("#cphContenido_hfVoltajeCDBreakerEstacionAComentario").val($(this).val());
        });
    });

    // #endregion
    */

    // #region Posición Breaker

    $('#cphContenido_chkPosicionBreakerEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionBreakerEstacionA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPosicionBreakerEstacionA").prop('disabled', true);
        else
            $('#cphContenido_txtPosicionBreakerEstacionA').prop('disabled', false);
    });

    poPosicionBreakerEstacionAComentario = $("#spPosicionBreakerEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionBreakerEstacionAComentario').html();
        }
    });

    poPosicionBreakerEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionBreakerEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPosicionBreakerEstacionAComentario").val($("#cphContenido_hfPosicionBreakerEstacionAComentario").val());
        $("#txtPosicionBreakerEstacionAComentario").focus();
        $("#txtPosicionBreakerEstacionAComentario").keyup(function () {
            $("#cphContenido_hfPosicionBreakerEstacionAComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Posi. Barra Aterramiento

    $('#cphContenido_chkPosicionBarraAterramientoEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionBarraAterramientoEstacionA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPosicionBarraAterramientoEstacionA").prop('disabled', true);
        else
            $('#cphContenido_txtPosicionBarraAterramientoEstacionA').prop('disabled', false);
    });

    poPosicionBarraAterramientoEstacionAComentario = $("#spPosicionBarraAterramientoEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionBarraAterramientoEstacionAComentario').html();
        }
    });

    poPosicionBarraAterramientoEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionBarraAterramientoEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPosicionBarraAterramientoEstacionAComentario").val($("#cphContenido_hfPosicionBarraAterramientoEstacionAComentario").val());
        $("#txtPosicionBarraAterramientoEstacionAComentario").focus();
        $("#txtPosicionBarraAterramientoEstacionAComentario").keyup(function () {
            $("#cphContenido_hfPosicionBarraAterramientoEstacionAComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    // #region Estación B

    /*
    // #region Capacidad Breaker (A)

    $('#cphContenido_chkCapacidadBreakerEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkCapacidadBreakerEstacionB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCapacidadBreakerEstacionB").prop('disabled', true);
        else
            $('#cphContenido_txtCapacidadBreakerEstacionB').prop('disabled', false);
    });

    poCapacidadBreakerEstacionBComentario = $("#spCapacidadBreakerEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocCapacidadBreakerEstacionBComentario').html();
        }
    });

    poCapacidadBreakerEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCapacidadBreakerEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtCapacidadBreakerEstacionBComentario").val($("#cphContenido_hfCapacidadBreakerEstacionBComentario").val());
        $("#txtCapacidadBreakerEstacionBComentario").focus();
        $("#txtCapacidadBreakerEstacionBComentario").keyup(function () {
            $("#cphContenido_hfCapacidadBreakerEstacionBComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Voltaje CD Breaker (V)

    $('#cphContenido_chkVoltajeCDBreakerEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkVoltajeCDBreakerEstacionB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtVoltajeCDBreakerEstacionB").prop('disabled', true);
        else
            $('#cphContenido_txtVoltajeCDBreakerEstacionB').prop('disabled', false);
    });

    poVoltajeCDBreakerEstacionBComentario = $("#spVoltajeCDBreakerEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocVoltajeCDBreakerEstacionBComentario').html();
        }
    });

    poVoltajeCDBreakerEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poVoltajeCDBreakerEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtVoltajeCDBreakerEstacionBComentario").val($("#cphContenido_hfVoltajeCDBreakerEstacionBComentario").val());
        $("#txtVoltajeCDBreakerEstacionBComentario").focus();
        $("#txtVoltajeCDBreakerEstacionBComentario").keyup(function () {
            $("#cphContenido_hfVoltajeCDBreakerEstacionBComentario").val($(this).val());
        });
    });

    // #endregion
    */

    // #region Posición Breaker

    $('#cphContenido_chkPosicionBreakerEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionBreakerEstacionB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPosicionBreakerEstacionB").prop('disabled', true);
        else
            $('#cphContenido_txtPosicionBreakerEstacionB').prop('disabled', false);
    });

    poPosicionBreakerEstacionBComentario = $("#spPosicionBreakerEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionBreakerEstacionBComentario').html();
        }
    });

    poPosicionBreakerEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionBreakerEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPosicionBreakerEstacionBComentario").val($("#cphContenido_hfPosicionBreakerEstacionBComentario").val());
        $("#txtPosicionBreakerEstacionBComentario").focus();
        $("#txtPosicionBreakerEstacionBComentario").keyup(function () {
            $("#cphContenido_hfPosicionBreakerEstacionBComentario").val($(this).val());
        });
    });

    // #endregion

    // #region Posi. Barra Aterramiento

    $('#cphContenido_chkPosicionBarraAterramientoEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionBarraAterramientoEstacionB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPosicionBarraAterramientoEstacionB").prop('disabled', true);
        else
            $('#cphContenido_txtPosicionBarraAterramientoEstacionB').prop('disabled', false);
    });

    poPosicionBarraAterramientoEstacionBComentario = $("#spPosicionBarraAterramientoEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionBarraAterramientoEstacionBComentario').html();
        }
    });

    poPosicionBarraAterramientoEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionBarraAterramientoEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPosicionBarraAterramientoEstacionBComentario").val($("#cphContenido_hfPosicionBarraAterramientoEstacionBComentario").val());
        $("#txtPosicionBarraAterramientoEstacionBComentario").focus();
        $("#txtPosicionBarraAterramientoEstacionBComentario").keyup(function () {
            $("#cphContenido_hfPosicionBarraAterramientoEstacionBComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    // #endregion

    // #region 6 Cálculo Propagacion

    // #region Ingeniería

    $('#cphContenido_chkIngenieria').change(function () {
        var blnActivo = $("#cphContenido_chkIngenieria").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divIngenieria, "#divIngenieria");
        else
            habilitarRealUploader(true, divIngenieria, "#divIngenieria");
    });

    poIngenieriaComentario = $("#spIngenieriaComentario").popover({
        html: true,
        content: function () {
            return $('#pocIngenieriaComentario').html();
        }
    });

    poIngenieriaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poIngenieriaComentario.on('shown.bs.popover', function () {
        $("#txtIngenieriaComentario").val($("#cphContenido_hfIngenieriaComentario").val());
        $("#txtIngenieriaComentario").focus();
        $("#txtIngenieriaComentario").keyup(function () {
            $("#cphContenido_hfIngenieriaComentario").val($(this).val());
        });
    });

    var divIngenieria = new RealUploader("#divIngenieria", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfIngenieria').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfIngenieria').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfIngenieria').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfIngenieria').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfIngenieria').val() != "") {
        divIngenieria.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfIngenieria').val(), $('#cphContenido_hfIngenieria').val());
    }

    $("#cphContenido_chkIngenieria").trigger("change");

    // #endregion

    // #region Perfil

    $('#cphContenido_chkPerfil').change(function () {
        var blnActivo = $("#cphContenido_chkPerfil").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPerfil, "#divPerfil");
        else
            habilitarRealUploader(true, divPerfil, "#divPerfil");
    });

    poPerfilComentario = $("#spPerfilComentario").popover({
        html: true,
        content: function () {
            return $('#pocPerfilComentario').html();
        }
    });

    poPerfilComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPerfilComentario.on('shown.bs.popover', function () {
        $("#txtPerfilComentario").val($("#cphContenido_hfPerfilComentario").val());
        $("#txtPerfilComentario").focus();
        $("#txtPerfilComentario").keyup(function () {
            $("#cphContenido_hfPerfilComentario").val($(this).val());
        });
    });

    var divPerfil = new RealUploader("#divPerfil", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPerfil').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPerfil').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPerfil').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPerfil').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPerfil').val() != "") {
        divPerfil.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPerfil').val(), $('#cphContenido_hfPerfil').val());
    }

    $("#cphContenido_chkPerfil").trigger("change");

    // #endregion

    // #endregion

    // #region 8 Pruebas de Interferencia

    // #region Pantalla RADIO Estación A

    $('#cphContenido_chkPantallaRadioEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaRadioEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaRadioEstacionA, "#divPantallaRadioEstacionA");
        else
            habilitarRealUploader(true, divPantallaRadioEstacionA, "#divPantallaRadioEstacionA");
    });

    poPantallaRadioEstacionAComentario = $("#spPantallaRadioEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaRadioEstacionAComentario').html();
        }
    });

    poPantallaRadioEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaRadioEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPantallaRadioEstacionAComentario").val($("#cphContenido_hfPantallaRadioEstacionAComentario").val());
        $("#txtPantallaRadioEstacionAComentario").focus();
        $("#txtPantallaRadioEstacionAComentario").keyup(function () {
            $("#cphContenido_hfPantallaRadioEstacionAComentario").val($(this).val());
        });
    });

    var divPantallaRadioEstacionA = new RealUploader("#divPantallaRadioEstacionA", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPantallaRadioEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaRadioEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaRadioEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaRadioEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaRadioEstacionA').val() != "") {
        divPantallaRadioEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaRadioEstacionA').val(), $('#cphContenido_hfPantallaRadioEstacionA').val());
    }

    $("#cphContenido_chkPantallaRadioEstacionA").trigger("change");

    // #endregion

    // #region Pantalla RADIO Estación B

    $('#cphContenido_chkPantallaRadioEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaRadioEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaRadioEstacionB, "#divPantallaRadioEstacionB");
        else
            habilitarRealUploader(true, divPantallaRadioEstacionB, "#divPantallaRadioEstacionB");
    });

    poPantallaRadioEstacionBComentario = $("#spPantallaRadioEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaRadioEstacionBComentario').html();
        }
    });

    poPantallaRadioEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaRadioEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPantallaRadioEstacionBComentario").val($("#cphContenido_hfPantallaRadioEstacionBComentario").val());
        $("#txtPantallaRadioEstacionBComentario").focus();
        $("#txtPantallaRadioEstacionBComentario").keyup(function () {
            $("#cphContenido_hfPantallaRadioEstacionBComentario").val($(this).val());
        });
    });

    var divPantallaRadioEstacionB = new RealUploader("#divPantallaRadioEstacionB", {
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
        minHeightDimension: 768,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPantallaRadioEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaRadioEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaRadioEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaRadioEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaRadioEstacionB').val() != "") {
        divPantallaRadioEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaRadioEstacionB').val(), $('#cphContenido_hfPantallaRadioEstacionB').val());
    }

    $("#cphContenido_chkPantallaRadioEstacionB").trigger("change");

    // #endregion

    // #endregion

    // #region 9 Serie Equipos (fotos)

    // #region Estación A

    // #region Serie Antena

    $('#cphContenido_chkSerieAntenaEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAntenaEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAntenaEstacionA, "#divSerieAntenaEstacionA");
        else
            habilitarRealUploader(true, divSerieAntenaEstacionA, "#divSerieAntenaEstacionA");
    });

    poSerieAntenaEstacionAComentario = $("#spSerieAntenaEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieAntenaEstacionAComentario').html();
        }
    });

    poSerieAntenaEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieAntenaEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtSerieAntenaEstacionAComentario").val($("#cphContenido_hfSerieAntenaEstacionAComentario").val());
        $("#txtSerieAntenaEstacionAComentario").focus();
        $("#txtSerieAntenaEstacionAComentario").keyup(function () {
            $("#cphContenido_hfSerieAntenaEstacionAComentario").val($(this).val());
        });
    });

    var divSerieAntenaEstacionA = new RealUploader("#divSerieAntenaEstacionA", {
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
                $('#cphContenido_hfSerieAntenaEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieAntenaEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieAntenaEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieAntenaEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieAntenaEstacionA').val() != "") {
        divSerieAntenaEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieAntenaEstacionA').val(), $('#cphContenido_hfSerieAntenaEstacionA').val());
    }

    $("#cphContenido_chkSerieAntenaEstacionA").trigger("change");

    // #endregion

    // #region Serie ODU

    $('#cphContenido_chkSerieODUEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSerieODUEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieODUEstacionA, "#divSerieODUEstacionA");
        else
            habilitarRealUploader(true, divSerieODUEstacionA, "#divSerieODUEstacionA");
    });

    poSerieODUEstacionAComentario = $("#spSerieODUEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieODUEstacionAComentario').html();
        }
    });

    poSerieODUEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieODUEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtSerieODUEstacionAComentario").val($("#cphContenido_hfSerieODUEstacionAComentario").val());
        $("#txtSerieODUEstacionAComentario").focus();
        $("#txtSerieODUEstacionAComentario").keyup(function () {
            $("#cphContenido_hfSerieODUEstacionAComentario").val($(this).val());
        });
    });

    var divSerieODUEstacionA = new RealUploader("#divSerieODUEstacionA", {
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
                $('#cphContenido_hfSerieODUEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieODUEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieODUEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieODUEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieODUEstacionA').val() != "") {
        divSerieODUEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieODUEstacionA').val(), $('#cphContenido_hfSerieODUEstacionA').val());
    }

    $("#cphContenido_chkSerieODUEstacionA").trigger("change");

    // #endregion

    // #region Serie POE

    $('#cphContenido_chkSeriePOEEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePOEEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePOEEstacionA, "#divSeriePOEEstacionA");
        else
            habilitarRealUploader(true, divSeriePOEEstacionA, "#divSeriePOEEstacionA");
    });

    poSeriePOEEstacionAComentario = $("#spSeriePOEEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePOEEstacionAComentario').html();
        }
    });

    poSeriePOEEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePOEEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtSeriePOEEstacionAComentario").val($("#cphContenido_hfSeriePOEEstacionAComentario").val());
        $("#txtSeriePOEEstacionAComentario").focus();
        $("#txtSeriePOEEstacionAComentario").keyup(function () {
            $("#cphContenido_hfSeriePOEEstacionAComentario").val($(this).val());
        });
    });

    var divSeriePOEEstacionA = new RealUploader("#divSeriePOEEstacionA", {
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
                $('#cphContenido_hfSeriePOEEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePOEEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePOEEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePOEEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePOEEstacionA').val() != "") {
        divSeriePOEEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePOEEstacionA').val(), $('#cphContenido_hfSeriePOEEstacionA').val());
    }

    $("#cphContenido_chkSeriePOEEstacionA").trigger("change");

    // #endregion

    if ($('#cphContenido_hfCMM4A').val() != "0") {

        // #region Serie CMM4

        $('#cphContenido_chkSerieCMM4EstacionA').change(function () {
            var blnActivo = $("#cphContenido_chkSerieCMM4EstacionA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieCMM4EstacionA, "#divSerieCMM4EstacionA");
            else
                habilitarRealUploader(true, divSerieCMM4EstacionA, "#divSerieCMM4EstacionA");
        });

        poSerieCMM4EstacionAComentario = $("#spSerieCMM4EstacionAComentario").popover({
            html: true,
            content: function () {
                return $('#pocSerieCMM4EstacionAComentario').html();
            }
        });

        poSerieCMM4EstacionAComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poSerieCMM4EstacionAComentario.on('shown.bs.popover', function () {
            $("#txtSerieCMM4EstacionAComentario").val($("#cphContenido_hfSerieCMM4EstacionAComentario").val());
            $("#txtSerieCMM4EstacionAComentario").focus();
            $("#txtSerieCMM4EstacionAComentario").keyup(function () {
                $("#cphContenido_hfSerieCMM4EstacionAComentario").val($(this).val());
            });
        });

        var divSerieCMM4EstacionA = new RealUploader("#divSerieCMM4EstacionA", {
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
                    $('#cphContenido_hfSerieCMM4EstacionA').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfSerieCMM4EstacionA').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfSerieCMM4EstacionA').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfSerieCMM4EstacionA').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfSerieCMM4EstacionA').val() != "") {
            divSerieCMM4EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieCMM4EstacionA').val(), $('#cphContenido_hfSerieCMM4EstacionA').val());
        }

        $("#cphContenido_chkSerieCMM4EstacionA").trigger("change");

        // #endregion

        // #region Serie UGPS

        $('#cphContenido_chkSerieUGPSEstacionA').change(function () {
            var blnActivo = $("#cphContenido_chkSerieUGPSEstacionA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieUGPSEstacionA, "#divSerieUGPSEstacionA");
            else
                habilitarRealUploader(true, divSerieUGPSEstacionA, "#divSerieUGPSEstacionA");
        });

        poSerieUGPSEstacionAComentario = $("#spSerieUGPSEstacionAComentario").popover({
            html: true,
            content: function () {
                return $('#pocSerieUGPSEstacionAComentario').html();
            }
        });

        poSerieUGPSEstacionAComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poSerieUGPSEstacionAComentario.on('shown.bs.popover', function () {
            $("#txtSerieUGPSEstacionAComentario").val($("#cphContenido_hfSerieUGPSEstacionAComentario").val());
            $("#txtSerieUGPSEstacionAComentario").focus();
            $("#txtSerieUGPSEstacionAComentario").keyup(function () {
                $("#cphContenido_hfSerieUGPSEstacionAComentario").val($(this).val());
            });
        });

        var divSerieUGPSEstacionA = new RealUploader("#divSerieUGPSEstacionA", {
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
                    $('#cphContenido_hfSerieUGPSEstacionA').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfSerieUGPSEstacionA').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfSerieUGPSEstacionA').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfSerieUGPSEstacionA').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfSerieUGPSEstacionA').val() != "") {
            divSerieUGPSEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieUGPSEstacionA').val(), $('#cphContenido_hfSerieUGPSEstacionA').val());
        }

        $("#cphContenido_chkSerieUGPSEstacionA").trigger("change");

        // #endregion

        // #region Serie Conversor

        $('#cphContenido_chkSerieConversorEstacionA').change(function () {
            var blnActivo = $("#cphContenido_chkSerieConversorEstacionA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieConversorEstacionA, "#divSerieConversorEstacionA");
            else
                habilitarRealUploader(true, divSerieConversorEstacionA, "#divSerieConversorEstacionA");
        });

        poSerieConversorEstacionAComentario = $("#spSerieConversorEstacionAComentario").popover({
            html: true,
            content: function () {
                return $('#pocSerieConversorEstacionAComentario').html();
            }
        });

        poSerieConversorEstacionAComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poSerieConversorEstacionAComentario.on('shown.bs.popover', function () {
            $("#txtSerieConversorEstacionAComentario").val($("#cphContenido_hfSerieConversorEstacionAComentario").val());
            $("#txtSerieConversorEstacionAComentario").focus();
            $("#txtSerieConversorEstacionAComentario").keyup(function () {
                $("#cphContenido_hfSerieConversorEstacionAComentario").val($(this).val());
            });
        });

        var divSerieConversorEstacionA = new RealUploader("#divSerieConversorEstacionA", {
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
                    $('#cphContenido_hfSerieConversorEstacionA').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfSerieConversorEstacionA').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfSerieConversorEstacionA').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfSerieConversorEstacionA').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfSerieConversorEstacionA').val() != "") {
            divSerieConversorEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieConversorEstacionA').val(), $('#cphContenido_hfSerieConversorEstacionA').val());
        }

        $("#cphContenido_chkSerieConversorEstacionA").trigger("change");

        // #endregion

    }
    else {
        $("#rowSerieCMM4EstacionA").hide();
        $("#rowSerieUGPSEstacionA").hide();
        $("#rowSerieConversorEstacionA").hide();
    }

    // #endregion

    // #region Estación B

    // #region Serie Antena

    $('#cphContenido_chkSerieAntenaEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAntenaEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAntenaEstacionB, "#divSerieAntenaEstacionB");
        else
            habilitarRealUploader(true, divSerieAntenaEstacionB, "#divSerieAntenaEstacionB");
    });

    poSerieAntenaEstacionBComentario = $("#spSerieAntenaEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieAntenaEstacionBComentario').html();
        }
    });

    poSerieAntenaEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieAntenaEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtSerieAntenaEstacionBComentario").val($("#cphContenido_hfSerieAntenaEstacionBComentario").val());
        $("#txtSerieAntenaEstacionBComentario").focus();
        $("#txtSerieAntenaEstacionBComentario").keyup(function () {
            $("#cphContenido_hfSerieAntenaEstacionBComentario").val($(this).val());
        });
    });

    var divSerieAntenaEstacionB = new RealUploader("#divSerieAntenaEstacionB", {
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
                $('#cphContenido_hfSerieAntenaEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieAntenaEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieAntenaEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieAntenaEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieAntenaEstacionB').val() != "") {
        divSerieAntenaEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieAntenaEstacionB').val(), $('#cphContenido_hfSerieAntenaEstacionB').val());
    }

    $("#cphContenido_chkSerieAntenaEstacionB").trigger("change");

    // #endregion

    // #region Serie ODU

    $('#cphContenido_chkSerieODUEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSerieODUEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieODUEstacionB, "#divSerieODUEstacionB");
        else
            habilitarRealUploader(true, divSerieODUEstacionB, "#divSerieODUEstacionB");
    });

    poSerieODUEstacionBComentario = $("#spSerieODUEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieODUEstacionBComentario').html();
        }
    });

    poSerieODUEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieODUEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtSerieODUEstacionBComentario").val($("#cphContenido_hfSerieODUEstacionBComentario").val());
        $("#txtSerieODUEstacionBComentario").focus();
        $("#txtSerieODUEstacionBComentario").keyup(function () {
            $("#cphContenido_hfSerieODUEstacionBComentario").val($(this).val());
        });
    });

    var divSerieODUEstacionB = new RealUploader("#divSerieODUEstacionB", {
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
                $('#cphContenido_hfSerieODUEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieODUEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieODUEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieODUEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieODUEstacionB').val() != "") {
        divSerieODUEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieODUEstacionB').val(), $('#cphContenido_hfSerieODUEstacionB').val());
    }

    $("#cphContenido_chkSerieODUEstacionB").trigger("change");

    // #endregion

    // #region Serie POE

    $('#cphContenido_chkSeriePOEEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePOEEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePOEEstacionB, "#divSeriePOEEstacionB");
        else
            habilitarRealUploader(true, divSeriePOEEstacionB, "#divSeriePOEEstacionB");
    });

    poSeriePOEEstacionBComentario = $("#spSeriePOEEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePOEEstacionBComentario').html();
        }
    });

    poSeriePOEEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePOEEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtSeriePOEEstacionBComentario").val($("#cphContenido_hfSeriePOEEstacionBComentario").val());
        $("#txtSeriePOEEstacionBComentario").focus();
        $("#txtSeriePOEEstacionBComentario").keyup(function () {
            $("#cphContenido_hfSeriePOEEstacionBComentario").val($(this).val());
        });
    });

    var divSeriePOEEstacionB = new RealUploader("#divSeriePOEEstacionB", {
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
                $('#cphContenido_hfSeriePOEEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePOEEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePOEEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePOEEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePOEEstacionB').val() != "") {
        divSeriePOEEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePOEEstacionB').val(), $('#cphContenido_hfSeriePOEEstacionB').val());
    }

    $("#cphContenido_chkSeriePOEEstacionB").trigger("change");

    // #endregion

    if ($('#cphContenido_hfCMM4B').val() != "0") {

        // #region Serie CMM4

        $('#cphContenido_chkSerieCMM4EstacionB').change(function () {
            var blnActivo = $("#cphContenido_chkSerieCMM4EstacionB").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieCMM4EstacionB, "#divSerieCMM4EstacionB");
            else
                habilitarRealUploader(true, divSerieCMM4EstacionB, "#divSerieCMM4EstacionB");
        });

        poSerieCMM4EstacionBComentario = $("#spSerieCMM4EstacionBComentario").popover({
            html: true,
            content: function () {
                return $('#pocSerieCMM4EstacionBComentario').html();
            }
        });

        poSerieCMM4EstacionBComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poSerieCMM4EstacionBComentario.on('shown.bs.popover', function () {
            $("#txtSerieCMM4EstacionBComentario").val($("#cphContenido_hfSerieCMM4EstacionBComentario").val());
            $("#txtSerieCMM4EstacionBComentario").focus();
            $("#txtSerieCMM4EstacionBComentario").keyup(function () {
                $("#cphContenido_hfSerieCMM4EstacionBComentario").val($(this).val());
            });
        });

        var divSerieCMM4EstacionB = new RealUploader("#divSerieCMM4EstacionB", {
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
                    $('#cphContenido_hfSerieCMM4EstacionB').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfSerieCMM4EstacionB').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfSerieCMM4EstacionB').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfSerieCMM4EstacionB').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfSerieCMM4EstacionB').val() != "") {
            divSerieCMM4EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieCMM4EstacionB').val(), $('#cphContenido_hfSerieCMM4EstacionB').val());
        }

        $("#cphContenido_chkSerieCMM4EstacionB").trigger("change");

        // #endregion

        // #region Serie UGPS

        $('#cphContenido_chkSerieUGPSEstacionB').change(function () {
            var blnActivo = $("#cphContenido_chkSerieUGPSEstacionB").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieUGPSEstacionB, "#divSerieUGPSEstacionB");
            else
                habilitarRealUploader(true, divSerieUGPSEstacionB, "#divSerieUGPSEstacionB");
        });

        poSerieUGPSEstacionBComentario = $("#spSerieUGPSEstacionBComentario").popover({
            html: true,
            content: function () {
                return $('#pocSerieUGPSEstacionBComentario').html();
            }
        });

        poSerieUGPSEstacionBComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poSerieUGPSEstacionBComentario.on('shown.bs.popover', function () {
            $("#txtSerieUGPSEstacionBComentario").val($("#cphContenido_hfSerieUGPSEstacionBComentario").val());
            $("#txtSerieUGPSEstacionBComentario").focus();
            $("#txtSerieUGPSEstacionBComentario").keyup(function () {
                $("#cphContenido_hfSerieUGPSEstacionBComentario").val($(this).val());
            });
        });

        var divSerieUGPSEstacionB = new RealUploader("#divSerieUGPSEstacionB", {
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
                    $('#cphContenido_hfSerieUGPSEstacionB').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfSerieUGPSEstacionB').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfSerieUGPSEstacionB').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfSerieUGPSEstacionB').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfSerieUGPSEstacionB').val() != "") {
            divSerieUGPSEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieUGPSEstacionB').val(), $('#cphContenido_hfSerieUGPSEstacionB').val());
        }

        $("#cphContenido_chkSerieUGPSEstacionB").trigger("change");

        // #endregion

        // #region Serie Conversor

        $('#cphContenido_chkSerieConversorEstacionB').change(function () {
            var blnActivo = $("#cphContenido_chkSerieConversorEstacionB").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieConversorEstacionB, "#divSerieConversorEstacionB");
            else
                habilitarRealUploader(true, divSerieConversorEstacionB, "#divSerieConversorEstacionB");
        });

        poSerieConversorEstacionBComentario = $("#spSerieConversorEstacionBComentario").popover({
            html: true,
            content: function () {
                return $('#pocSerieConversorEstacionBComentario').html();
            }
        });

        poSerieConversorEstacionBComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poSerieConversorEstacionBComentario.on('shown.bs.popover', function () {
            $("#txtSerieConversorEstacionBComentario").val($("#cphContenido_hfSerieConversorEstacionBComentario").val());
            $("#txtSerieConversorEstacionBComentario").focus();
            $("#txtSerieConversorEstacionBComentario").keyup(function () {
                $("#cphContenido_hfSerieConversorEstacionBComentario").val($(this).val());
            });
        });

        var divSerieConversorEstacionB = new RealUploader("#divSerieConversorEstacionB", {
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
                    $('#cphContenido_hfSerieConversorEstacionB').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfSerieConversorEstacionB').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfSerieConversorEstacionB').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfSerieConversorEstacionB').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfSerieConversorEstacionB').val() != "") {
            divSerieConversorEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieConversorEstacionB').val(), $('#cphContenido_hfSerieConversorEstacionB').val());
        }

        $("#cphContenido_chkSerieConversorEstacionB").trigger("change");

        // #endregion

    }
    else {
        $("#rowSerieCMM4EstacionB").hide();
        $("#rowSerieUGPSEstacionB").hide();
        $("#rowSerieConversorEstacionB").hide();
    }

    // #endregion

    // #endregion

    // #region 10 Reporte Fotográfico

    // #region Estación A

    // #region Foto 1: Panorámica de la Estación

    $('#cphContenido_chkPanoramicaEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaEstacionA, "#divPanoramicaEstacionA");
        else
            habilitarRealUploader(true, divPanoramicaEstacionA, "#divPanoramicaEstacionA");
    });

    poPanoramicaEstacionAComentario = $("#spPanoramicaEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaEstacionAComentario').html();
        }
    });

    poPanoramicaEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaEstacionAComentario").val($("#cphContenido_hfPanoramicaEstacionAComentario").val());
        $("#txtPanoramicaEstacionAComentario").focus();
        $("#txtPanoramicaEstacionAComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaEstacionAComentario").val($(this).val());
        });
    });

    var divPanoramicaEstacionA = new RealUploader("#divPanoramicaEstacionA", {
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
                $('#cphContenido_hfPanoramicaEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaEstacionA').val() != "") {
        divPanoramicaEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaEstacionA').val(), $('#cphContenido_hfPanoramicaEstacionA').val());
    }

    $("#cphContenido_chkPanoramicaEstacionA").trigger("change");

    // #endregion  

    // #region Foto 2: Posición e Identificación Antena Instalada en Torre

    $('#cphContenido_chkPosicionIdentificacionEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionIdentificacionEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPosicionIdentificacionEstacionA, "#divPosicionIdentificacionEstacionA");
        else
            habilitarRealUploader(true, divPosicionIdentificacionEstacionA, "#divPosicionIdentificacionEstacionA");
    });

    poPosicionIdentificacionEstacionAComentario = $("#spPosicionIdentificacionEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionIdentificacionEstacionAComentario').html();
        }
    });

    poPosicionIdentificacionEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionIdentificacionEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPosicionIdentificacionEstacionAComentario").val($("#cphContenido_hfPosicionIdentificacionEstacionAComentario").val());
        $("#txtPosicionIdentificacionEstacionAComentario").focus();
        $("#txtPosicionIdentificacionEstacionAComentario").keyup(function () {
            $("#cphContenido_hfPosicionIdentificacionEstacionAComentario").val($(this).val());
        });
    });

    var divPosicionIdentificacionEstacionA = new RealUploader("#divPosicionIdentificacionEstacionA", {
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
                $('#cphContenido_hfPosicionIdentificacionEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPosicionIdentificacionEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPosicionIdentificacionEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPosicionIdentificacionEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPosicionIdentificacionEstacionA').val() != "") {
        divPosicionIdentificacionEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPosicionIdentificacionEstacionA').val(), $('#cphContenido_hfPosicionIdentificacionEstacionA').val());
    }

    $("#cphContenido_chkPosicionIdentificacionEstacionA").trigger("change");

    // #endregion

    // #region Foto 3: Antena y PTP450i en Torre

    $('#cphContenido_chkAntenaPTP450iEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAntenaPTP450iEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAntenaPTP450iEstacionA, "#divAntenaPTP450iEstacionA");
        else
            habilitarRealUploader(true, divAntenaPTP450iEstacionA, "#divAntenaPTP450iEstacionA");
    });

    poAntenaPTP450iEstacionAComentario = $("#spAntenaPTP450iEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAntenaPTP450iEstacionAComentario').html();
        }
    });

    poAntenaPTP450iEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAntenaPTP450iEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAntenaPTP450iEstacionAComentario").val($("#cphContenido_hfAntenaPTP450iEstacionAComentario").val());
        $("#txtAntenaPTP450iEstacionAComentario").focus();
        $("#txtAntenaPTP450iEstacionAComentario").keyup(function () {
            $("#cphContenido_hfAntenaPTP450iEstacionAComentario").val($(this).val());
        });
    });

    var divAntenaPTP450iEstacionA = new RealUploader("#divAntenaPTP450iEstacionA", {
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
                $('#cphContenido_hfAntenaPTP450iEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAntenaPTP450iEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAntenaPTP450iEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAntenaPTP450iEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAntenaPTP450iEstacionA').val() != "") {
        divAntenaPTP450iEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAntenaPTP450iEstacionA').val(), $('#cphContenido_hfAntenaPTP450iEstacionA').val());
    }

    $("#cphContenido_chkAntenaPTP450iEstacionA").trigger("change");

    // #endregion

    // #region Foto 4: Etiquetado en Puerto de Antena

    $('#cphContenido_chkEtiquetadoPuertoAntenaEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoPuertoAntenaEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoPuertoAntenaEstacionA, "#divEtiquetadoPuertoAntenaEstacionA");
        else
            habilitarRealUploader(true, divEtiquetadoPuertoAntenaEstacionA, "#divEtiquetadoPuertoAntenaEstacionA");
    });

    poEtiquetadoPuertoAntenaEstacionAComentario = $("#spEtiquetadoPuertoAntenaEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoPuertoAntenaEstacionAComentario').html();
        }
    });

    poEtiquetadoPuertoAntenaEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoPuertoAntenaEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoPuertoAntenaEstacionAComentario").val($("#cphContenido_hfEtiquetadoPuertoAntenaEstacionAComentario").val());
        $("#txtEtiquetadoPuertoAntenaEstacionAComentario").focus();
        $("#txtEtiquetadoPuertoAntenaEstacionAComentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoPuertoAntenaEstacionAComentario").val($(this).val());
        });
    });

    var divEtiquetadoPuertoAntenaEstacionA = new RealUploader("#divEtiquetadoPuertoAntenaEstacionA", {
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
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val() != "") {
        divEtiquetadoPuertoAntenaEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val(), $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionA').val());
    }

    $("#cphContenido_chkEtiquetadoPuertoAntenaEstacionA").trigger("change");

    // #endregion

    // #region Foto 5: Engrasado de Pernos

    $('#cphContenido_chkEngrasadoPernosEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkEngrasadoPernosEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEngrasadoPernosEstacionA, "#divEngrasadoPernosEstacionA");
        else
            habilitarRealUploader(true, divEngrasadoPernosEstacionA, "#divEngrasadoPernosEstacionA");
    });

    poEngrasadoPernosEstacionAComentario = $("#spEngrasadoPernosEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocEngrasadoPernosEstacionAComentario').html();
        }
    });

    poEngrasadoPernosEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEngrasadoPernosEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtEngrasadoPernosEstacionAComentario").val($("#cphContenido_hfEngrasadoPernosEstacionAComentario").val());
        $("#txtEngrasadoPernosEstacionAComentario").focus();
        $("#txtEngrasadoPernosEstacionAComentario").keyup(function () {
            $("#cphContenido_hfEngrasadoPernosEstacionAComentario").val($(this).val());
        });
    });

    var divEngrasadoPernosEstacionA = new RealUploader("#divEngrasadoPernosEstacionA", {
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
                $('#cphContenido_hfEngrasadoPernosEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEngrasadoPernosEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEngrasadoPernosEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEngrasadoPernosEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEngrasadoPernosEstacionA').val() != "") {
        divEngrasadoPernosEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEngrasadoPernosEstacionA').val(), $('#cphContenido_hfEngrasadoPernosEstacionA').val());
    }

    $("#cphContenido_chkEngrasadoPernosEstacionA").trigger("change");

    // #endregion

    // #region Foto 6: Siliconeado del Conector

    $('#cphContenido_chkSiliconeadoConectorEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSiliconeadoConectorEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSiliconeadoConectorEstacionA, "#divSiliconeadoConectorEstacionA");
        else
            habilitarRealUploader(true, divSiliconeadoConectorEstacionA, "#divSiliconeadoConectorEstacionA");
    });

    poSiliconeadoConectorEstacionAComentario = $("#spSiliconeadoConectorEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocSiliconeadoConectorEstacionAComentario').html();
        }
    });

    poSiliconeadoConectorEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSiliconeadoConectorEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtSiliconeadoConectorEstacionAComentario").val($("#cphContenido_hfSiliconeadoConectorEstacionAComentario").val());
        $("#txtSiliconeadoConectorEstacionAComentario").focus();
        $("#txtSiliconeadoConectorEstacionAComentario").keyup(function () {
            $("#cphContenido_hfSiliconeadoConectorEstacionAComentario").val($(this).val());
        });
    });

    var divSiliconeadoConectorEstacionA = new RealUploader("#divSiliconeadoConectorEstacionA", {
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
                $('#cphContenido_hfSiliconeadoConectorEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSiliconeadoConectorEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSiliconeadoConectorEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSiliconeadoConectorEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSiliconeadoConectorEstacionA').val() != "") {
        divSiliconeadoConectorEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSiliconeadoConectorEstacionA').val(), $('#cphContenido_hfSiliconeadoConectorEstacionA').val());
    }

    $("#cphContenido_chkSiliconeadoConectorEstacionA").trigger("change");

    // #endregion

    // #region Foto 7: Aterramiento ODU en Torre

    $('#cphContenido_chkAterramientoODUEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoODUEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoODUEstacionA, "#divAterramientoODUEstacionA");
        else
            habilitarRealUploader(true, divAterramientoODUEstacionA, "#divAterramientoODUEstacionA");
    });

    poAterramientoODUEstacionAComentario = $("#spAterramientoODUEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoODUEstacionAComentario').html();
        }
    });

    poAterramientoODUEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoODUEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoODUEstacionAComentario").val($("#cphContenido_hfAterramientoODUEstacionAComentario").val());
        $("#txtAterramientoODUEstacionAComentario").focus();
        $("#txtAterramientoODUEstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoODUEstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoODUEstacionA = new RealUploader("#divAterramientoODUEstacionA", {
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
                $('#cphContenido_hfAterramientoODUEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoODUEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoODUEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoODUEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoODUEstacionA').val() != "") {
        divAterramientoODUEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoODUEstacionA').val(), $('#cphContenido_hfAterramientoODUEstacionA').val());
    }

    $("#cphContenido_chkAterramientoODUEstacionA").trigger("change");

    // #endregion

    // #region Foto 8: Recorrido Cable SFTP

    $('#cphContenido_chkRecorridoCableSFTPEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkRecorridoCableSFTPEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRecorridoCableSFTPEstacionA, "#divRecorridoCableSFTPEstacionA");
        else
            habilitarRealUploader(true, divRecorridoCableSFTPEstacionA, "#divRecorridoCableSFTPEstacionA");
    });

    poRecorridoCableSFTPEstacionAComentario = $("#spRecorridoCableSFTPEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocRecorridoCableSFTPEstacionAComentario').html();
        }
    });

    poRecorridoCableSFTPEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRecorridoCableSFTPEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtRecorridoCableSFTPEstacionAComentario").val($("#cphContenido_hfRecorridoCableSFTPEstacionAComentario").val());
        $("#txtRecorridoCableSFTPEstacionAComentario").focus();
        $("#txtRecorridoCableSFTPEstacionAComentario").keyup(function () {
            $("#cphContenido_hfRecorridoCableSFTPEstacionAComentario").val($(this).val());
        });
    });

    var divRecorridoCableSFTPEstacionA = new RealUploader("#divRecorridoCableSFTPEstacionA", {
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
                $('#cphContenido_hfRecorridoCableSFTPEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableSFTPEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfRecorridoCableSFTPEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableSFTPEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRecorridoCableSFTPEstacionA').val() != "") {
        divRecorridoCableSFTPEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRecorridoCableSFTPEstacionA').val(), $('#cphContenido_hfRecorridoCableSFTPEstacionA').val());
    }

    $("#cphContenido_chkRecorridoCableSFTPEstacionA").trigger("change");

    // #endregion

    // #region Foto 9.01: Aterramiento Cable SFTP

    $('#cphContenido_chkAterramientoCableSFTP01EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTP01EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTP01EstacionA, "#divAterramientoCableSFTP01EstacionA");
        else
            habilitarRealUploader(true, divAterramientoCableSFTP01EstacionA, "#divAterramientoCableSFTP01EstacionA");
    });


    poAterramientoCableSFTP01EstacionAComentario = $("#spAterramientoCableSFTP01EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTP01EstacionAComentario').html();
        }
    });

    poAterramientoCableSFTP01EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTP01EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTP01EstacionAComentario").val($("#cphContenido_hfAterramientoCableSFTP01EstacionAComentario").val());
        $("#txtAterramientoCableSFTP01EstacionAComentario").focus();
        $("#txtAterramientoCableSFTP01EstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTP01EstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTP01EstacionA = new RealUploader("#divAterramientoCableSFTP01EstacionA", {
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
                $('#cphContenido_hfAterramientoCableSFTP01EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP01EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTP01EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP01EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTP01EstacionA').val() != "") {
        divAterramientoCableSFTP01EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTP01EstacionA').val(), $('#cphContenido_hfAterramientoCableSFTP01EstacionA').val());
    }

    $("#cphContenido_chkAterramientoCableSFTP01EstacionA").trigger("change");

    // #endregion

    // #region Foto 9.02: Aterramiento Cable SFTP

    $('#cphContenido_chkAterramientoCableSFTP02EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTP02EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTP02EstacionA, "#divAterramientoCableSFTP02EstacionA");
        else
            habilitarRealUploader(true, divAterramientoCableSFTP02EstacionA, "#divAterramientoCableSFTP02EstacionA");
    });

    poAterramientoCableSFTP02EstacionAComentario = $("#spAterramientoCableSFTP02EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTP02EstacionAComentario').html();
        }
    });

    poAterramientoCableSFTP02EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTP02EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTP02EstacionAComentario").val($("#cphContenido_hfAterramientoCableSFTP02EstacionAComentario").val());
        $("#txtAterramientoCableSFTP02EstacionAComentario").focus();
        $("#txtAterramientoCableSFTP02EstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTP02EstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTP02EstacionA = new RealUploader("#divAterramientoCableSFTP02EstacionA", {
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
                $('#cphContenido_hfAterramientoCableSFTP02EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP02EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTP02EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP02EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTP02EstacionA').val() != "") {
        divAterramientoCableSFTP02EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTP02EstacionA').val(), $('#cphContenido_hfAterramientoCableSFTP02EstacionA').val());
    }

    $("#cphContenido_chkAterramientoCableSFTP02EstacionA").trigger("change");

    // #endregion

    // #region Foto 10: SA-LAN Ooutdoor con Etiquetado

    $('#cphContenido_chkSALANOutdoorEtiquetadoEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSALANOutdoorEtiquetadoEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSALANOutdoorEtiquetadoEstacionA, "#divSALANOutdoorEtiquetadoEstacionA");
        else
            habilitarRealUploader(true, divSALANOutdoorEtiquetadoEstacionA, "#divSALANOutdoorEtiquetadoEstacionA");
    });

    poSALANOutdoorEtiquetadoEstacionAComentario = $("#spSALANOutdoorEtiquetadoEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocSALANOutdoorEtiquetadoEstacionAComentario').html();
        }
    });

    poSALANOutdoorEtiquetadoEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSALANOutdoorEtiquetadoEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtSALANOutdoorEtiquetadoEstacionAComentario").val($("#cphContenido_hfSALANOutdoorEtiquetadoEstacionAComentario").val());
        $("#txtSALANOutdoorEtiquetadoEstacionAComentario").focus();
        $("#txtSALANOutdoorEtiquetadoEstacionAComentario").keyup(function () {
            $("#cphContenido_hfSALANOutdoorEtiquetadoEstacionAComentario").val($(this).val());
        });
    });

    var divSALANOutdoorEtiquetadoEstacionA = new RealUploader("#divSALANOutdoorEtiquetadoEstacionA", {
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
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val() != "") {
        divSALANOutdoorEtiquetadoEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val(), $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionA').val());
    }

    $("#cphContenido_chkSALANOutdoorEtiquetadoEstacionA").trigger("change");

    // #endregion

    // #region Foto 11: Aterramiento SA-LAN Outdoor

    $('#cphContenido_chkAterramientoSALANOutdoorEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoSALANOutdoorEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoSALANOutdoorEstacionA, "#divAterramientoSALANOutdoorEstacionA");
        else
            habilitarRealUploader(true, divAterramientoSALANOutdoorEstacionA, "#divAterramientoSALANOutdoorEstacionA");
    });

    poAterramientoSALANOutdoorEstacionAComentario = $("#spAterramientoSALANOutdoorEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoSALANOutdoorEstacionAComentario').html();
        }
    });

    poAterramientoSALANOutdoorEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoSALANOutdoorEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoSALANOutdoorEstacionAComentario").val($("#cphContenido_hfAterramientoSALANOutdoorEstacionAComentario").val());
        $("#txtAterramientoSALANOutdoorEstacionAComentario").focus();
        $("#txtAterramientoSALANOutdoorEstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoSALANOutdoorEstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoSALANOutdoorEstacionA = new RealUploader("#divAterramientoSALANOutdoorEstacionA", {
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
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val() != "") {
        divAterramientoSALANOutdoorEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val(), $('#cphContenido_hfAterramientoSALANOutdoorEstacionA').val());
    }

    $("#cphContenido_chkAterramientoSALANOutdoorEstacionA").trigger("change");

    // #endregion

    // #region Foto 14.01: Aterramiento Cable SFTP Indoor

    $('#cphContenido_chkAterramientoCableSFTPIndoor01EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTPIndoor01EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTPIndoor01EstacionA, "#divAterramientoCableSFTPIndoor01EstacionA");
        else
            habilitarRealUploader(true, divAterramientoCableSFTPIndoor01EstacionA, "#divAterramientoCableSFTPIndoor01EstacionA");
    });

    poAterramientoCableSFTPIndoor01EstacionAComentario = $("#spAterramientoCableSFTPIndoor01EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTPIndoor01EstacionAComentario').html();
        }
    });

    poAterramientoCableSFTPIndoor01EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTPIndoor01EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTPIndoor01EstacionAComentario").val($("#cphContenido_hfAterramientoCableSFTPIndoor01EstacionAComentario").val());
        $("#txtAterramientoCableSFTPIndoor01EstacionAComentario").focus();
        $("#txtAterramientoCableSFTPIndoor01EstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTPIndoor01EstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTPIndoor01EstacionA = new RealUploader("#divAterramientoCableSFTPIndoor01EstacionA", {
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
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val() != "") {
        divAterramientoCableSFTPIndoor01EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val(), $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionA').val());
    }

    $("#cphContenido_chkAterramientoCableSFTPIndoor01EstacionA").trigger("change");

    // #endregion

    // #region Foto 14.02: Aterramiento Cable SFTP Indoor

    $('#cphContenido_chkAterramientoCableSFTPIndoor02EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTPIndoor02EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTPIndoor02EstacionA, "#divAterramientoCableSFTPIndoor02EstacionA");
        else
            habilitarRealUploader(true, divAterramientoCableSFTPIndoor02EstacionA, "#divAterramientoCableSFTPIndoor02EstacionA");
    });

    poAterramientoCableSFTPIndoor02EstacionAComentario = $("#spAterramientoCableSFTPIndoor02EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTPIndoor02EstacionAComentario').html();
        }
    });

    poAterramientoCableSFTPIndoor02EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTPIndoor02EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTPIndoor02EstacionAComentario").val($("#cphContenido_hfAterramientoCableSFTPIndoor02EstacionAComentario").val());
        $("#txtAterramientoCableSFTPIndoor02EstacionAComentario").focus();
        $("#txtAterramientoCableSFTPIndoor02EstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTPIndoor02EstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTPIndoor02EstacionA = new RealUploader("#divAterramientoCableSFTPIndoor02EstacionA", {
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
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val() != "") {
        divAterramientoCableSFTPIndoor02EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val(), $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionA').val());
    }

    $("#cphContenido_chkAterramientoCableSFTPIndoor02EstacionA").trigger("change");

    // #endregion

    // #region Foto 17: Panorámica del Rack

    $('#cphContenido_chkPanoramicaRackEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaRackEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaRackEstacionA, "#divPanoramicaRackEstacionA");
        else
            habilitarRealUploader(true, divPanoramicaRackEstacionA, "#divPanoramicaRackEstacionA");
    });

    poPanoramicaRackEstacionAComentario = $("#spPanoramicaRackEstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaRackEstacionAComentario').html();
        }
    });

    poPanoramicaRackEstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaRackEstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaRackEstacionAComentario").val($("#cphContenido_hfPanoramicaRackEstacionAComentario").val());
        $("#txtPanoramicaRackEstacionAComentario").focus();
        $("#txtPanoramicaRackEstacionAComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaRackEstacionAComentario").val($(this).val());
        });
    });

    var divPanoramicaRackEstacionA = new RealUploader("#divPanoramicaRackEstacionA", {
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
                $('#cphContenido_hfPanoramicaRackEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRackEstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaRackEstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRackEstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaRackEstacionA').val() != "") {
        divPanoramicaRackEstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaRackEstacionA').val(), $('#cphContenido_hfPanoramicaRackEstacionA').val());
    }

    $("#cphContenido_chkPanoramicaRackEstacionA").trigger("change");

    // #endregion

    // #region Foto 18.01: Aterramiento POE (Inicio/Fin)

    $('#cphContenido_chkAterramientoPOE01EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoPOE01EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoPOE01EstacionA, "#divAterramientoPOE01EstacionA");
        else
            habilitarRealUploader(true, divAterramientoPOE01EstacionA, "#divAterramientoPOE01EstacionA");
    });

    poAterramientoPOE01EstacionAComentario = $("#spAterramientoPOE01EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoPOE01EstacionAComentario').html();
        }
    });

    poAterramientoPOE01EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoPOE01EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoPOE01EstacionAComentario").val($("#cphContenido_hfAterramientoPOE01EstacionAComentario").val());
        $("#txtAterramientoPOE01EstacionAComentario").focus();
        $("#txtAterramientoPOE01EstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoPOE01EstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoPOE01EstacionA = new RealUploader("#divAterramientoPOE01EstacionA", {
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
                $('#cphContenido_hfAterramientoPOE01EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE01EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoPOE01EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE01EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoPOE01EstacionA').val() != "") {
        divAterramientoPOE01EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoPOE01EstacionA').val(), $('#cphContenido_hfAterramientoPOE01EstacionA').val());
    }

    $("#cphContenido_chkAterramientoPOE01EstacionA").trigger("change");

    // #endregion

    // #region Foto 18.02: Aterramiento POE (Inicio/Fin)

    $('#cphContenido_chkAterramientoPOE02EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoPOE02EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoPOE02EstacionA, "#divAterramientoPOE02EstacionA");
        else
            habilitarRealUploader(true, divAterramientoPOE02EstacionA, "#divAterramientoPOE02EstacionA");
    });

    poAterramientoPOE02EstacionAComentario = $("#spAterramientoPOE02EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoPOE02EstacionAComentario').html();
        }
    });

    poAterramientoPOE02EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoPOE02EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoPOE02EstacionAComentario").val($("#cphContenido_hfAterramientoPOE02EstacionAComentario").val());
        $("#txtAterramientoPOE02EstacionAComentario").focus();
        $("#txtAterramientoPOE02EstacionAComentario").keyup(function () {
            $("#cphContenido_hfAterramientoPOE02EstacionAComentario").val($(this).val());
        });
    });

    var divAterramientoPOE02EstacionA = new RealUploader("#divAterramientoPOE02EstacionA", {
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
                $('#cphContenido_hfAterramientoPOE02EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE02EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoPOE02EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE02EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoPOE02EstacionA').val() != "") {
        divAterramientoPOE02EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoPOE02EstacionA').val(), $('#cphContenido_hfAterramientoPOE02EstacionA').val());
    }

    $("#cphContenido_chkAterramientoPOE02EstacionA").trigger("change");

    // #endregion

    // #region Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin)

    $('#cphContenido_chkEnergiaPOEEtiqueta01EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkEnergiaPOEEtiqueta01EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEnergiaPOEEtiqueta01EstacionA, "#divEnergiaPOEEtiqueta01EstacionA");
        else
            habilitarRealUploader(true, divEnergiaPOEEtiqueta01EstacionA, "#divEnergiaPOEEtiqueta01EstacionA");
    });

    poEnergiaPOEEtiqueta01EstacionAComentario = $("#spEnergiaPOEEtiqueta01EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocEnergiaPOEEtiqueta01EstacionAComentario').html();
        }
    });

    poEnergiaPOEEtiqueta01EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEnergiaPOEEtiqueta01EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtEnergiaPOEEtiqueta01EstacionAComentario").val($("#cphContenido_hfEnergiaPOEEtiqueta01EstacionAComentario").val());
        $("#txtEnergiaPOEEtiqueta01EstacionAComentario").focus();
        $("#txtEnergiaPOEEtiqueta01EstacionAComentario").keyup(function () {
            $("#cphContenido_hfEnergiaPOEEtiqueta01EstacionAComentario").val($(this).val());
        });
    });

    var divEnergiaPOEEtiqueta01EstacionA = new RealUploader("#divEnergiaPOEEtiqueta01EstacionA", {
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
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val() != "") {
        divEnergiaPOEEtiqueta01EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val(), $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionA').val());
    }

    $("#cphContenido_chkEnergiaPOEEtiqueta01EstacionA").trigger("change");

    // #endregion

    // #region Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin)

    $('#cphContenido_chkEnergiaPOEEtiqueta02EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkEnergiaPOEEtiqueta02EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEnergiaPOEEtiqueta02EstacionA, "#divEnergiaPOEEtiqueta02EstacionA");
        else
            habilitarRealUploader(true, divEnergiaPOEEtiqueta02EstacionA, "#divEnergiaPOEEtiqueta02EstacionA");
    });

    poEnergiaPOEEtiqueta02EstacionAComentario = $("#spEnergiaPOEEtiqueta02EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocEnergiaPOEEtiqueta02EstacionAComentario').html();
        }
    });

    poEnergiaPOEEtiqueta02EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEnergiaPOEEtiqueta02EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtEnergiaPOEEtiqueta02EstacionAComentario").val($("#cphContenido_hfEnergiaPOEEtiqueta02EstacionAComentario").val());
        $("#txtEnergiaPOEEtiqueta02EstacionAComentario").focus();
        $("#txtEnergiaPOEEtiqueta02EstacionAComentario").keyup(function () {
            $("#cphContenido_hfEnergiaPOEEtiqueta02EstacionAComentario").val($(this).val());
        });
    });

    var divEnergiaPOEEtiqueta02EstacionA = new RealUploader("#divEnergiaPOEEtiqueta02EstacionA", {
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
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val() != "") {
        divEnergiaPOEEtiqueta02EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val(), $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionA').val());
    }

    $("#cphContenido_chkEnergiaPOEEtiqueta02EstacionA").trigger("change");

    // #endregion

    // #region Foto 20.01: Patch Core del POE al Switch (Inicio/Fin)

    $('#cphContenido_chkPatchCorePOESwitch01EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCorePOESwitch01EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCorePOESwitch01EstacionA, "#divPatchCorePOESwitch01EstacionA");
        else
            habilitarRealUploader(true, divPatchCorePOESwitch01EstacionA, "#divPatchCorePOESwitch01EstacionA");
    });

    poPatchCorePOESwitch01EstacionAComentario = $("#spPatchCorePOESwitch01EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCorePOESwitch01EstacionAComentario').html();
        }
    });

    poPatchCorePOESwitch01EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCorePOESwitch01EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPatchCorePOESwitch01EstacionAComentario").val($("#cphContenido_hfPatchCorePOESwitch01EstacionAComentario").val());
        $("#txtPatchCorePOESwitch01EstacionAComentario").focus();
        $("#txtPatchCorePOESwitch01EstacionAComentario").keyup(function () {
            $("#cphContenido_hfPatchCorePOESwitch01EstacionAComentario").val($(this).val());
        });
    });

    var divPatchCorePOESwitch01EstacionA = new RealUploader("#divPatchCorePOESwitch01EstacionA", {
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
                $('#cphContenido_hfPatchCorePOESwitch01EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch01EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCorePOESwitch01EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch01EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCorePOESwitch01EstacionA').val() != "") {
        divPatchCorePOESwitch01EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCorePOESwitch01EstacionA').val(), $('#cphContenido_hfPatchCorePOESwitch01EstacionA').val());
    }

    $("#cphContenido_chkPatchCorePOESwitch01EstacionA").trigger("change");

    // #endregion

    // #region Foto 20.02: Patch Core del POE al Switch (Inicio/Fin)

    $('#cphContenido_chkPatchCorePOESwitch02EstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCorePOESwitch02EstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCorePOESwitch02EstacionA, "#divPatchCorePOESwitch02EstacionA");
        else
            habilitarRealUploader(true, divPatchCorePOESwitch02EstacionA, "#divPatchCorePOESwitch02EstacionA");
    });

    poPatchCorePOESwitch02EstacionAComentario = $("#spPatchCorePOESwitch02EstacionAComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCorePOESwitch02EstacionAComentario').html();
        }
    });

    poPatchCorePOESwitch02EstacionAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCorePOESwitch02EstacionAComentario.on('shown.bs.popover', function () {
        $("#txtPatchCorePOESwitch02EstacionAComentario").val($("#cphContenido_hfPatchCorePOESwitch02EstacionAComentario").val());
        $("#txtPatchCorePOESwitch02EstacionAComentario").focus();
        $("#txtPatchCorePOESwitch02EstacionAComentario").keyup(function () {
            $("#cphContenido_hfPatchCorePOESwitch02EstacionAComentario").val($(this).val());
        });
    });

    var divPatchCorePOESwitch02EstacionA = new RealUploader("#divPatchCorePOESwitch02EstacionA", {
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
                $('#cphContenido_hfPatchCorePOESwitch02EstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch02EstacionA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCorePOESwitch02EstacionA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch02EstacionA').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCorePOESwitch02EstacionA').val() != "") {
        divPatchCorePOESwitch02EstacionA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCorePOESwitch02EstacionA').val(), $('#cphContenido_hfPatchCorePOESwitch02EstacionA').val());
    }

    $("#cphContenido_chkPatchCorePOESwitch02EstacionA").trigger("change");

    // #endregion

    // #endregion

    // #region Estación B

    // #region Foto 1: Panorámica de la Estación

    $('#cphContenido_chkPanoramicaEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaEstacionB, "#divPanoramicaEstacionB");
        else
            habilitarRealUploader(true, divPanoramicaEstacionB, "#divPanoramicaEstacionB");
    });

    poPanoramicaEstacionBComentario = $("#spPanoramicaEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaEstacionBComentario').html();
        }
    });

    poPanoramicaEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaEstacionBComentario").val($("#cphContenido_hfPanoramicaEstacionBComentario").val());
        $("#txtPanoramicaEstacionBComentario").focus();
        $("#txtPanoramicaEstacionBComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaEstacionBComentario").val($(this).val());
        });
    });

    var divPanoramicaEstacionB = new RealUploader("#divPanoramicaEstacionB", {
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
                $('#cphContenido_hfPanoramicaEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaEstacionB').val() != "") {
        divPanoramicaEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaEstacionB').val(), $('#cphContenido_hfPanoramicaEstacionB').val());
    }

    $("#cphContenido_chkPanoramicaEstacionB").trigger("change");

    // #endregion  

    // #region Foto 2: Posición e Identificación Antena Instalada en Torre

    $('#cphContenido_chkPosicionIdentificacionEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionIdentificacionEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPosicionIdentificacionEstacionB, "#divPosicionIdentificacionEstacionB");
        else
            habilitarRealUploader(true, divPosicionIdentificacionEstacionB, "#divPosicionIdentificacionEstacionB");
    });

    poPosicionIdentificacionEstacionBComentario = $("#spPosicionIdentificacionEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionIdentificacionEstacionBComentario').html();
        }
    });

    poPosicionIdentificacionEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionIdentificacionEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPosicionIdentificacionEstacionBComentario").val($("#cphContenido_hfPosicionIdentificacionEstacionBComentario").val());
        $("#txtPosicionIdentificacionEstacionBComentario").focus();
        $("#txtPosicionIdentificacionEstacionBComentario").keyup(function () {
            $("#cphContenido_hfPosicionIdentificacionEstacionBComentario").val($(this).val());
        });
    });

    var divPosicionIdentificacionEstacionB = new RealUploader("#divPosicionIdentificacionEstacionB", {
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
                $('#cphContenido_hfPosicionIdentificacionEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPosicionIdentificacionEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPosicionIdentificacionEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPosicionIdentificacionEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPosicionIdentificacionEstacionB').val() != "") {
        divPosicionIdentificacionEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPosicionIdentificacionEstacionB').val(), $('#cphContenido_hfPosicionIdentificacionEstacionB').val());
    }

    $("#cphContenido_chkPosicionIdentificacionEstacionB").trigger("change");

    // #endregion

    // #region Foto 3: Antena y PTP450i en Torre

    $('#cphContenido_chkAntenaPTP450iEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAntenaPTP450iEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAntenaPTP450iEstacionB, "#divAntenaPTP450iEstacionB");
        else
            habilitarRealUploader(true, divAntenaPTP450iEstacionB, "#divAntenaPTP450iEstacionB");
    });

    poAntenaPTP450iEstacionBComentario = $("#spAntenaPTP450iEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAntenaPTP450iEstacionBComentario').html();
        }
    });

    poAntenaPTP450iEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAntenaPTP450iEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAntenaPTP450iEstacionBComentario").val($("#cphContenido_hfAntenaPTP450iEstacionBComentario").val());
        $("#txtAntenaPTP450iEstacionBComentario").focus();
        $("#txtAntenaPTP450iEstacionBComentario").keyup(function () {
            $("#cphContenido_hfAntenaPTP450iEstacionBComentario").val($(this).val());
        });
    });

    var divAntenaPTP450iEstacionB = new RealUploader("#divAntenaPTP450iEstacionB", {
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
                $('#cphContenido_hfAntenaPTP450iEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAntenaPTP450iEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAntenaPTP450iEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAntenaPTP450iEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAntenaPTP450iEstacionB').val() != "") {
        divAntenaPTP450iEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAntenaPTP450iEstacionB').val(), $('#cphContenido_hfAntenaPTP450iEstacionB').val());
    }

    $("#cphContenido_chkAntenaPTP450iEstacionB").trigger("change");

    // #endregion

    // #region Foto 4: Etiquetado en Puerto de Antena

    $('#cphContenido_chkEtiquetadoPuertoAntenaEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoPuertoAntenaEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoPuertoAntenaEstacionB, "#divEtiquetadoPuertoAntenaEstacionB");
        else
            habilitarRealUploader(true, divEtiquetadoPuertoAntenaEstacionB, "#divEtiquetadoPuertoAntenaEstacionB");
    });

    poEtiquetadoPuertoAntenaEstacionBComentario = $("#spEtiquetadoPuertoAntenaEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoPuertoAntenaEstacionBComentario').html();
        }
    });

    poEtiquetadoPuertoAntenaEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoPuertoAntenaEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoPuertoAntenaEstacionBComentario").val($("#cphContenido_hfEtiquetadoPuertoAntenaEstacionBComentario").val());
        $("#txtEtiquetadoPuertoAntenaEstacionBComentario").focus();
        $("#txtEtiquetadoPuertoAntenaEstacionBComentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoPuertoAntenaEstacionBComentario").val($(this).val());
        });
    });

    var divEtiquetadoPuertoAntenaEstacionB = new RealUploader("#divEtiquetadoPuertoAntenaEstacionB", {
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
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val() != "") {
        divEtiquetadoPuertoAntenaEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val(), $('#cphContenido_hfEtiquetadoPuertoAntenaEstacionB').val());
    }

    $("#cphContenido_chkEtiquetadoPuertoAntenaEstacionB").trigger("change");

    // #endregion

    // #region Foto 5: Engrasado de Pernos

    $('#cphContenido_chkEngrasadoPernosEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkEngrasadoPernosEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEngrasadoPernosEstacionB, "#divEngrasadoPernosEstacionB");
        else
            habilitarRealUploader(true, divEngrasadoPernosEstacionB, "#divEngrasadoPernosEstacionB");
    });

    poEngrasadoPernosEstacionBComentario = $("#spEngrasadoPernosEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocEngrasadoPernosEstacionBComentario').html();
        }
    });

    poEngrasadoPernosEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEngrasadoPernosEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtEngrasadoPernosEstacionBComentario").val($("#cphContenido_hfEngrasadoPernosEstacionBComentario").val());
        $("#txtEngrasadoPernosEstacionBComentario").focus();
        $("#txtEngrasadoPernosEstacionBComentario").keyup(function () {
            $("#cphContenido_hfEngrasadoPernosEstacionBComentario").val($(this).val());
        });
    });

    var divEngrasadoPernosEstacionB = new RealUploader("#divEngrasadoPernosEstacionB", {
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
                $('#cphContenido_hfEngrasadoPernosEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEngrasadoPernosEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEngrasadoPernosEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEngrasadoPernosEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEngrasadoPernosEstacionB').val() != "") {
        divEngrasadoPernosEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEngrasadoPernosEstacionB').val(), $('#cphContenido_hfEngrasadoPernosEstacionB').val());
    }

    $("#cphContenido_chkEngrasadoPernosEstacionB").trigger("change");

    // #endregion

    // #region Foto 6: Siliconeado del Conector

    $('#cphContenido_chkSiliconeadoConectorEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSiliconeadoConectorEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSiliconeadoConectorEstacionB, "#divSiliconeadoConectorEstacionB");
        else
            habilitarRealUploader(true, divSiliconeadoConectorEstacionB, "#divSiliconeadoConectorEstacionB");
    });

    poSiliconeadoConectorEstacionBComentario = $("#spSiliconeadoConectorEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocSiliconeadoConectorEstacionBComentario').html();
        }
    });

    poSiliconeadoConectorEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSiliconeadoConectorEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtSiliconeadoConectorEstacionBComentario").val($("#cphContenido_hfSiliconeadoConectorEstacionBComentario").val());
        $("#txtSiliconeadoConectorEstacionBComentario").focus();
        $("#txtSiliconeadoConectorEstacionBComentario").keyup(function () {
            $("#cphContenido_hfSiliconeadoConectorEstacionBComentario").val($(this).val());
        });
    });

    var divSiliconeadoConectorEstacionB = new RealUploader("#divSiliconeadoConectorEstacionB", {
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
                $('#cphContenido_hfSiliconeadoConectorEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSiliconeadoConectorEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSiliconeadoConectorEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSiliconeadoConectorEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSiliconeadoConectorEstacionB').val() != "") {
        divSiliconeadoConectorEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSiliconeadoConectorEstacionB').val(), $('#cphContenido_hfSiliconeadoConectorEstacionB').val());
    }

    $("#cphContenido_chkSiliconeadoConectorEstacionB").trigger("change");

    // #endregion

    // #region Foto 7: Aterramiento ODU en Torre

    $('#cphContenido_chkAterramientoODUEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoODUEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoODUEstacionB, "#divAterramientoODUEstacionB");
        else
            habilitarRealUploader(true, divAterramientoODUEstacionB, "#divAterramientoODUEstacionB");
    });

    poAterramientoODUEstacionBComentario = $("#spAterramientoODUEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoODUEstacionBComentario').html();
        }
    });

    poAterramientoODUEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoODUEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoODUEstacionBComentario").val($("#cphContenido_hfAterramientoODUEstacionBComentario").val());
        $("#txtAterramientoODUEstacionBComentario").focus();
        $("#txtAterramientoODUEstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoODUEstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoODUEstacionB = new RealUploader("#divAterramientoODUEstacionB", {
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
                $('#cphContenido_hfAterramientoODUEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoODUEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoODUEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoODUEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoODUEstacionB').val() != "") {
        divAterramientoODUEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoODUEstacionB').val(), $('#cphContenido_hfAterramientoODUEstacionB').val());
    }

    $("#cphContenido_chkAterramientoODUEstacionB").trigger("change");

    // #endregion

    // #region Foto 8: Recorrido Cable SFTP

    $('#cphContenido_chkRecorridoCableSFTPEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkRecorridoCableSFTPEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRecorridoCableSFTPEstacionB, "#divRecorridoCableSFTPEstacionB");
        else
            habilitarRealUploader(true, divRecorridoCableSFTPEstacionB, "#divRecorridoCableSFTPEstacionB");
    });

    poRecorridoCableSFTPEstacionBComentario = $("#spRecorridoCableSFTPEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocRecorridoCableSFTPEstacionBComentario').html();
        }
    });

    poRecorridoCableSFTPEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRecorridoCableSFTPEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtRecorridoCableSFTPEstacionBComentario").val($("#cphContenido_hfRecorridoCableSFTPEstacionBComentario").val());
        $("#txtRecorridoCableSFTPEstacionBComentario").focus();
        $("#txtRecorridoCableSFTPEstacionBComentario").keyup(function () {
            $("#cphContenido_hfRecorridoCableSFTPEstacionBComentario").val($(this).val());
        });
    });

    var divRecorridoCableSFTPEstacionB = new RealUploader("#divRecorridoCableSFTPEstacionB", {
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
                $('#cphContenido_hfRecorridoCableSFTPEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableSFTPEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfRecorridoCableSFTPEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableSFTPEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRecorridoCableSFTPEstacionB').val() != "") {
        divRecorridoCableSFTPEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRecorridoCableSFTPEstacionB').val(), $('#cphContenido_hfRecorridoCableSFTPEstacionB').val());
    }

    $("#cphContenido_chkRecorridoCableSFTPEstacionB").trigger("change");

    // #endregion

    // #region Foto 9.01: Aterramiento Cable SFTP

    $('#cphContenido_chkAterramientoCableSFTP01EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTP01EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTP01EstacionB, "#divAterramientoCableSFTP01EstacionB");
        else
            habilitarRealUploader(true, divAterramientoCableSFTP01EstacionB, "#divAterramientoCableSFTP01EstacionB");
    });


    poAterramientoCableSFTP01EstacionBComentario = $("#spAterramientoCableSFTP01EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTP01EstacionBComentario').html();
        }
    });

    poAterramientoCableSFTP01EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTP01EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTP01EstacionBComentario").val($("#cphContenido_hfAterramientoCableSFTP01EstacionBComentario").val());
        $("#txtAterramientoCableSFTP01EstacionBComentario").focus();
        $("#txtAterramientoCableSFTP01EstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTP01EstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTP01EstacionB = new RealUploader("#divAterramientoCableSFTP01EstacionB", {
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
                $('#cphContenido_hfAterramientoCableSFTP01EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP01EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTP01EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP01EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTP01EstacionB').val() != "") {
        divAterramientoCableSFTP01EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTP01EstacionB').val(), $('#cphContenido_hfAterramientoCableSFTP01EstacionB').val());
    }

    $("#cphContenido_chkAterramientoCableSFTP01EstacionB").trigger("change");

    // #endregion

    // #region Foto 9.02: Aterramiento Cable SFTP

    $('#cphContenido_chkAterramientoCableSFTP02EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTP02EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTP02EstacionB, "#divAterramientoCableSFTP02EstacionB");
        else
            habilitarRealUploader(true, divAterramientoCableSFTP02EstacionB, "#divAterramientoCableSFTP02EstacionB");
    });

    poAterramientoCableSFTP02EstacionBComentario = $("#spAterramientoCableSFTP02EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTP02EstacionBComentario').html();
        }
    });

    poAterramientoCableSFTP02EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTP02EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTP02EstacionBComentario").val($("#cphContenido_hfAterramientoCableSFTP02EstacionBComentario").val());
        $("#txtAterramientoCableSFTP02EstacionBComentario").focus();
        $("#txtAterramientoCableSFTP02EstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTP02EstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTP02EstacionB = new RealUploader("#divAterramientoCableSFTP02EstacionB", {
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
                $('#cphContenido_hfAterramientoCableSFTP02EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP02EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTP02EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTP02EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTP02EstacionB').val() != "") {
        divAterramientoCableSFTP02EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTP02EstacionB').val(), $('#cphContenido_hfAterramientoCableSFTP02EstacionB').val());
    }

    $("#cphContenido_chkAterramientoCableSFTP02EstacionB").trigger("change");

    // #endregion

    // #region Foto 10: SA-LAN Ooutdoor con Etiquetado

    $('#cphContenido_chkSALANOutdoorEtiquetadoEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSALANOutdoorEtiquetadoEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSALANOutdoorEtiquetadoEstacionB, "#divSALANOutdoorEtiquetadoEstacionB");
        else
            habilitarRealUploader(true, divSALANOutdoorEtiquetadoEstacionB, "#divSALANOutdoorEtiquetadoEstacionB");
    });

    poSALANOutdoorEtiquetadoEstacionBComentario = $("#spSALANOutdoorEtiquetadoEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocSALANOutdoorEtiquetadoEstacionBComentario').html();
        }
    });

    poSALANOutdoorEtiquetadoEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSALANOutdoorEtiquetadoEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtSALANOutdoorEtiquetadoEstacionBComentario").val($("#cphContenido_hfSALANOutdoorEtiquetadoEstacionBComentario").val());
        $("#txtSALANOutdoorEtiquetadoEstacionBComentario").focus();
        $("#txtSALANOutdoorEtiquetadoEstacionBComentario").keyup(function () {
            $("#cphContenido_hfSALANOutdoorEtiquetadoEstacionBComentario").val($(this).val());
        });
    });

    var divSALANOutdoorEtiquetadoEstacionB = new RealUploader("#divSALANOutdoorEtiquetadoEstacionB", {
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
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val() != "") {
        divSALANOutdoorEtiquetadoEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val(), $('#cphContenido_hfSALANOutdoorEtiquetadoEstacionB').val());
    }

    $("#cphContenido_chkSALANOutdoorEtiquetadoEstacionB").trigger("change");

    // #endregion

    // #region Foto 11: Aterramiento SA-LAN Outdoor

    $('#cphContenido_chkAterramientoSALANOutdoorEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoSALANOutdoorEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoSALANOutdoorEstacionB, "#divAterramientoSALANOutdoorEstacionB");
        else
            habilitarRealUploader(true, divAterramientoSALANOutdoorEstacionB, "#divAterramientoSALANOutdoorEstacionB");
    });

    poAterramientoSALANOutdoorEstacionBComentario = $("#spAterramientoSALANOutdoorEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoSALANOutdoorEstacionBComentario').html();
        }
    });

    poAterramientoSALANOutdoorEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoSALANOutdoorEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoSALANOutdoorEstacionBComentario").val($("#cphContenido_hfAterramientoSALANOutdoorEstacionBComentario").val());
        $("#txtAterramientoSALANOutdoorEstacionBComentario").focus();
        $("#txtAterramientoSALANOutdoorEstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoSALANOutdoorEstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoSALANOutdoorEstacionB = new RealUploader("#divAterramientoSALANOutdoorEstacionB", {
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
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val() != "") {
        divAterramientoSALANOutdoorEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val(), $('#cphContenido_hfAterramientoSALANOutdoorEstacionB').val());
    }

    $("#cphContenido_chkAterramientoSALANOutdoorEstacionB").trigger("change");

    // #endregion

    // #region Foto 14.01: Aterramiento Cable SFTP Indoor

    $('#cphContenido_chkAterramientoCableSFTPIndoor01EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTPIndoor01EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTPIndoor01EstacionB, "#divAterramientoCableSFTPIndoor01EstacionB");
        else
            habilitarRealUploader(true, divAterramientoCableSFTPIndoor01EstacionB, "#divAterramientoCableSFTPIndoor01EstacionB");
    });

    poAterramientoCableSFTPIndoor01EstacionBComentario = $("#spAterramientoCableSFTPIndoor01EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTPIndoor01EstacionBComentario').html();
        }
    });

    poAterramientoCableSFTPIndoor01EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTPIndoor01EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTPIndoor01EstacionBComentario").val($("#cphContenido_hfAterramientoCableSFTPIndoor01EstacionBComentario").val());
        $("#txtAterramientoCableSFTPIndoor01EstacionBComentario").focus();
        $("#txtAterramientoCableSFTPIndoor01EstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTPIndoor01EstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTPIndoor01EstacionB = new RealUploader("#divAterramientoCableSFTPIndoor01EstacionB", {
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
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val() != "") {
        divAterramientoCableSFTPIndoor01EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val(), $('#cphContenido_hfAterramientoCableSFTPIndoor01EstacionB').val());
    }

    $("#cphContenido_chkAterramientoCableSFTPIndoor01EstacionB").trigger("change");

    // #endregion

    // #region Foto 14.02: Aterramiento Cable SFTP Indoor

    $('#cphContenido_chkAterramientoCableSFTPIndoor02EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTPIndoor02EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTPIndoor02EstacionB, "#divAterramientoCableSFTPIndoor02EstacionB");
        else
            habilitarRealUploader(true, divAterramientoCableSFTPIndoor02EstacionB, "#divAterramientoCableSFTPIndoor02EstacionB");
    });

    poAterramientoCableSFTPIndoor02EstacionBComentario = $("#spAterramientoCableSFTPIndoor02EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTPIndoor02EstacionBComentario').html();
        }
    });

    poAterramientoCableSFTPIndoor02EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTPIndoor02EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTPIndoor02EstacionBComentario").val($("#cphContenido_hfAterramientoCableSFTPIndoor02EstacionBComentario").val());
        $("#txtAterramientoCableSFTPIndoor02EstacionBComentario").focus();
        $("#txtAterramientoCableSFTPIndoor02EstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTPIndoor02EstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTPIndoor02EstacionB = new RealUploader("#divAterramientoCableSFTPIndoor02EstacionB", {
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
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val() != "") {
        divAterramientoCableSFTPIndoor02EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val(), $('#cphContenido_hfAterramientoCableSFTPIndoor02EstacionB').val());
    }

    $("#cphContenido_chkAterramientoCableSFTPIndoor02EstacionB").trigger("change");

    // #endregion

    // #region Foto 17: Panorámica del Rack

    $('#cphContenido_chkPanoramicaRackEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaRackEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaRackEstacionB, "#divPanoramicaRackEstacionB");
        else
            habilitarRealUploader(true, divPanoramicaRackEstacionB, "#divPanoramicaRackEstacionB");
    });

    poPanoramicaRackEstacionBComentario = $("#spPanoramicaRackEstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaRackEstacionBComentario').html();
        }
    });

    poPanoramicaRackEstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaRackEstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaRackEstacionBComentario").val($("#cphContenido_hfPanoramicaRackEstacionBComentario").val());
        $("#txtPanoramicaRackEstacionBComentario").focus();
        $("#txtPanoramicaRackEstacionBComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaRackEstacionBComentario").val($(this).val());
        });
    });

    var divPanoramicaRackEstacionB = new RealUploader("#divPanoramicaRackEstacionB", {
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
                $('#cphContenido_hfPanoramicaRackEstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRackEstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaRackEstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRackEstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaRackEstacionB').val() != "") {
        divPanoramicaRackEstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaRackEstacionB').val(), $('#cphContenido_hfPanoramicaRackEstacionB').val());
    }

    $("#cphContenido_chkPanoramicaRackEstacionB").trigger("change");

    // #endregion

    // #region Foto 18.01: Aterramiento POE (Inicio/Fin)

    $('#cphContenido_chkAterramientoPOE01EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoPOE01EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoPOE01EstacionB, "#divAterramientoPOE01EstacionB");
        else
            habilitarRealUploader(true, divAterramientoPOE01EstacionB, "#divAterramientoPOE01EstacionB");
    });

    poAterramientoPOE01EstacionBComentario = $("#spAterramientoPOE01EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoPOE01EstacionBComentario').html();
        }
    });

    poAterramientoPOE01EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoPOE01EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoPOE01EstacionBComentario").val($("#cphContenido_hfAterramientoPOE01EstacionBComentario").val());
        $("#txtAterramientoPOE01EstacionBComentario").focus();
        $("#txtAterramientoPOE01EstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoPOE01EstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoPOE01EstacionB = new RealUploader("#divAterramientoPOE01EstacionB", {
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
                $('#cphContenido_hfAterramientoPOE01EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE01EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoPOE01EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE01EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoPOE01EstacionB').val() != "") {
        divAterramientoPOE01EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoPOE01EstacionB').val(), $('#cphContenido_hfAterramientoPOE01EstacionB').val());
    }

    $("#cphContenido_chkAterramientoPOE01EstacionB").trigger("change");

    // #endregion

    // #region Foto 18.02: Aterramiento POE (Inicio/Fin)

    $('#cphContenido_chkAterramientoPOE02EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoPOE02EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoPOE02EstacionB, "#divAterramientoPOE02EstacionB");
        else
            habilitarRealUploader(true, divAterramientoPOE02EstacionB, "#divAterramientoPOE02EstacionB");
    });

    poAterramientoPOE02EstacionBComentario = $("#spAterramientoPOE02EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoPOE02EstacionBComentario').html();
        }
    });

    poAterramientoPOE02EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoPOE02EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoPOE02EstacionBComentario").val($("#cphContenido_hfAterramientoPOE02EstacionBComentario").val());
        $("#txtAterramientoPOE02EstacionBComentario").focus();
        $("#txtAterramientoPOE02EstacionBComentario").keyup(function () {
            $("#cphContenido_hfAterramientoPOE02EstacionBComentario").val($(this).val());
        });
    });

    var divAterramientoPOE02EstacionB = new RealUploader("#divAterramientoPOE02EstacionB", {
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
                $('#cphContenido_hfAterramientoPOE02EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE02EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoPOE02EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE02EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoPOE02EstacionB').val() != "") {
        divAterramientoPOE02EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoPOE02EstacionB').val(), $('#cphContenido_hfAterramientoPOE02EstacionB').val());
    }

    $("#cphContenido_chkAterramientoPOE02EstacionB").trigger("change");

    // #endregion

    // #region Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin)

    $('#cphContenido_chkEnergiaPOEEtiqueta01EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkEnergiaPOEEtiqueta01EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEnergiaPOEEtiqueta01EstacionB, "#divEnergiaPOEEtiqueta01EstacionB");
        else
            habilitarRealUploader(true, divEnergiaPOEEtiqueta01EstacionB, "#divEnergiaPOEEtiqueta01EstacionB");
    });

    poEnergiaPOEEtiqueta01EstacionBComentario = $("#spEnergiaPOEEtiqueta01EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocEnergiaPOEEtiqueta01EstacionBComentario').html();
        }
    });

    poEnergiaPOEEtiqueta01EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEnergiaPOEEtiqueta01EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtEnergiaPOEEtiqueta01EstacionBComentario").val($("#cphContenido_hfEnergiaPOEEtiqueta01EstacionBComentario").val());
        $("#txtEnergiaPOEEtiqueta01EstacionBComentario").focus();
        $("#txtEnergiaPOEEtiqueta01EstacionBComentario").keyup(function () {
            $("#cphContenido_hfEnergiaPOEEtiqueta01EstacionBComentario").val($(this).val());
        });
    });

    var divEnergiaPOEEtiqueta01EstacionB = new RealUploader("#divEnergiaPOEEtiqueta01EstacionB", {
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
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val() != "") {
        divEnergiaPOEEtiqueta01EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val(), $('#cphContenido_hfEnergiaPOEEtiqueta01EstacionB').val());
    }

    $("#cphContenido_chkEnergiaPOEEtiqueta01EstacionB").trigger("change");

    // #endregion

    // #region Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin)

    $('#cphContenido_chkEnergiaPOEEtiqueta02EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkEnergiaPOEEtiqueta02EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEnergiaPOEEtiqueta02EstacionB, "#divEnergiaPOEEtiqueta02EstacionB");
        else
            habilitarRealUploader(true, divEnergiaPOEEtiqueta02EstacionB, "#divEnergiaPOEEtiqueta02EstacionB");
    });

    poEnergiaPOEEtiqueta02EstacionBComentario = $("#spEnergiaPOEEtiqueta02EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocEnergiaPOEEtiqueta02EstacionBComentario').html();
        }
    });

    poEnergiaPOEEtiqueta02EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEnergiaPOEEtiqueta02EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtEnergiaPOEEtiqueta02EstacionBComentario").val($("#cphContenido_hfEnergiaPOEEtiqueta02EstacionBComentario").val());
        $("#txtEnergiaPOEEtiqueta02EstacionBComentario").focus();
        $("#txtEnergiaPOEEtiqueta02EstacionBComentario").keyup(function () {
            $("#cphContenido_hfEnergiaPOEEtiqueta02EstacionBComentario").val($(this).val());
        });
    });

    var divEnergiaPOEEtiqueta02EstacionB = new RealUploader("#divEnergiaPOEEtiqueta02EstacionB", {
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
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val() != "") {
        divEnergiaPOEEtiqueta02EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val(), $('#cphContenido_hfEnergiaPOEEtiqueta02EstacionB').val());
    }

    $("#cphContenido_chkEnergiaPOEEtiqueta02EstacionB").trigger("change");

    // #endregion

    // #region Foto 20.01: Patch Core del POE al Switch (Inicio/Fin)

    $('#cphContenido_chkPatchCorePOESwitch01EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCorePOESwitch01EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCorePOESwitch01EstacionB, "#divPatchCorePOESwitch01EstacionB");
        else
            habilitarRealUploader(true, divPatchCorePOESwitch01EstacionB, "#divPatchCorePOESwitch01EstacionB");
    });

    poPatchCorePOESwitch01EstacionBComentario = $("#spPatchCorePOESwitch01EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCorePOESwitch01EstacionBComentario').html();
        }
    });

    poPatchCorePOESwitch01EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCorePOESwitch01EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPatchCorePOESwitch01EstacionBComentario").val($("#cphContenido_hfPatchCorePOESwitch01EstacionBComentario").val());
        $("#txtPatchCorePOESwitch01EstacionBComentario").focus();
        $("#txtPatchCorePOESwitch01EstacionBComentario").keyup(function () {
            $("#cphContenido_hfPatchCorePOESwitch01EstacionBComentario").val($(this).val());
        });
    });

    var divPatchCorePOESwitch01EstacionB = new RealUploader("#divPatchCorePOESwitch01EstacionB", {
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
                $('#cphContenido_hfPatchCorePOESwitch01EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch01EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCorePOESwitch01EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch01EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCorePOESwitch01EstacionB').val() != "") {
        divPatchCorePOESwitch01EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCorePOESwitch01EstacionB').val(), $('#cphContenido_hfPatchCorePOESwitch01EstacionB').val());
    }

    $("#cphContenido_chkPatchCorePOESwitch01EstacionB").trigger("change");

    // #endregion

    // #region Foto 20.02: Patch Core del POE al Switch (Inicio/Fin)

    $('#cphContenido_chkPatchCorePOESwitch02EstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCorePOESwitch02EstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCorePOESwitch02EstacionB, "#divPatchCorePOESwitch02EstacionB");
        else
            habilitarRealUploader(true, divPatchCorePOESwitch02EstacionB, "#divPatchCorePOESwitch02EstacionB");
    });

    poPatchCorePOESwitch02EstacionBComentario = $("#spPatchCorePOESwitch02EstacionBComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCorePOESwitch02EstacionBComentario').html();
        }
    });

    poPatchCorePOESwitch02EstacionBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCorePOESwitch02EstacionBComentario.on('shown.bs.popover', function () {
        $("#txtPatchCorePOESwitch02EstacionBComentario").val($("#cphContenido_hfPatchCorePOESwitch02EstacionBComentario").val());
        $("#txtPatchCorePOESwitch02EstacionBComentario").focus();
        $("#txtPatchCorePOESwitch02EstacionBComentario").keyup(function () {
            $("#cphContenido_hfPatchCorePOESwitch02EstacionBComentario").val($(this).val());
        });
    });

    var divPatchCorePOESwitch02EstacionB = new RealUploader("#divPatchCorePOESwitch02EstacionB", {
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
                $('#cphContenido_hfPatchCorePOESwitch02EstacionB').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch02EstacionB').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCorePOESwitch02EstacionB').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCorePOESwitch02EstacionB').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCorePOESwitch02EstacionB').val() != "") {
        divPatchCorePOESwitch02EstacionB.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCorePOESwitch02EstacionB').val(), $('#cphContenido_hfPatchCorePOESwitch02EstacionB').val());
    }

    $("#cphContenido_chkPatchCorePOESwitch02EstacionB").trigger("change");

    // #endregion

    // #endregion

    // #endregion

    // #region 11 DATOS GENERALES NODO A

    /*
    // #region # Serie PTP450i

    $('#cphContenido_chkSeriePTP450iNodoA').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePTP450iNodoA").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtSeriePTP450iNodoA").prop('disabled', true);
        else
            $('#cphContenido_txtSeriePTP450iNodoA').prop('disabled', false);
    });

    poSeriePTP450iNodoAComentario = $("#spSeriePTP450iNodoAComentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePTP450iNodoAComentario').html();
        }
    });

    poSeriePTP450iNodoAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePTP450iNodoAComentario.on('shown.bs.popover', function () {
        $("#txtSeriePTP450iNodoAComentario").val($("#cphContenido_hfSeriePTP450iNodoAComentario").val());
        $("#txtSeriePTP450iNodoAComentario").focus();
        $("#txtSeriePTP450iNodoAComentario").keyup(function () {
            $("#cphContenido_hfSeriePTP450iNodoAComentario").val($(this).val());
        });
    });

    // #endregion
    */

    // #region Mediciones de Enlaces de Propagación

    $('#cphContenido_chkMedicionEnlacePropagacionNodoA').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionEnlacePropagacionNodoA").prop("checked");
        if (blnActivo) {
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtRSSLocal]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtRSSRemoto]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtTiempoPromedio]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtCapacidadSubida]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtCapacidadBajada]").each(function () {
                $(this).prop('disabled', true);
            })
        }
        else {
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtRSSLocal]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtRSSRemoto]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtTiempoPromedio]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtCapacidadSubida]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtCapacidadBajada]").each(function () {
                $(this).prop('disabled', false);
            })
        }
    });

    poMedicionEnlacePropagacionNodoAComentario = $("#spMedicionEnlacePropagacionNodoAComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionEnlacePropagacionNodoAComentario').html();
        }
    });

    poMedicionEnlacePropagacionNodoAComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionEnlacePropagacionNodoAComentario.on('shown.bs.popover', function () {
        $("#txtMedicionEnlacePropagacionNodoAComentario").val($("#cphContenido_hfMedicionEnlacePropagacionNodoAComentario").val());
        $("#txtMedicionEnlacePropagacionNodoAComentario").focus();
        $("#txtMedicionEnlacePropagacionNodoAComentario").keyup(function () {
            $("#cphContenido_hfMedicionEnlacePropagacionNodoAComentario").val($(this).val());
        });
    });

    // #endregion

    // #endregion

    // #region 12 DATOS GENERALES NODO B

    /*
    // #region # Serie PTP450i

    $('#cphContenido_chkSeriePTP450iNodoB').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePTP450iNodoB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtSeriePTP450iNodoB").prop('disabled', true);
        else
            $('#cphContenido_txtSeriePTP450iNodoB').prop('disabled', false);
    });

    poSeriePTP450iNodoBComentario = $("#spSeriePTP450iNodoBComentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePTP450iNodoBComentario').html();
        }
    });

    poSeriePTP450iNodoBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePTP450iNodoBComentario.on('shown.bs.popover', function () {
        $("#txtSeriePTP450iNodoBComentario").val($("#cphContenido_hfSeriePTP450iNodoBComentario").val());
        $("#txtSeriePTP450iNodoBComentario").focus();
        $("#txtSeriePTP450iNodoBComentario").keyup(function () {
            $("#cphContenido_hfSeriePTP450iNodoBComentario").val($(this).val());
        });
    });

    // #endregion
    */

    // #region Mediciones de Enlaces de Propagación

    $('#cphContenido_chkMedicionEnlacePropagacionNodoB').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionEnlacePropagacionNodoB").prop("checked");
        if (blnActivo) {
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtRSSLocal]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtRSSRemoto]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtTiempoPromedio]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtCapacidadSubida]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtCapacidadBajada]").each(function () {
                $(this).prop('disabled', true);
            })
        }
        else {
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtRSSLocal]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtRSSRemoto]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtTiempoPromedio]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtCapacidadSubida]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtCapacidadBajada]").each(function () {
                $(this).prop('disabled', false);
            })
        }
    });

    poMedicionEnlacePropagacionNodoBComentario = $("#spMedicionEnlacePropagacionNodoBComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionEnlacePropagacionNodoBComentario').html();
        }
    });

    poMedicionEnlacePropagacionNodoBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionEnlacePropagacionNodoBComentario.on('shown.bs.popover', function () {
        $("#txtMedicionEnlacePropagacionNodoBComentario").val($("#cphContenido_hfMedicionEnlacePropagacionNodoBComentario").val());
        $("#txtMedicionEnlacePropagacionNodoBComentario").focus();
        $("#txtMedicionEnlacePropagacionNodoBComentario").keyup(function () {
            $("#cphContenido_hfMedicionEnlacePropagacionNodoBComentario").val($(this).val());
        });
    });

    // #endregion


    // #endregion

    $("#cphContenido_btnGuardar").click(function () {
        //Validamos los campos
        var hasErrors = false;
        var cantError = 0;
        
        $("#cphContenido_gvMedicionEnlacePropagacionNodoA input[id^=cphContenido_gvMedicionEnlacePropagacionNodoA_txtTiempoPromedio]").each(function () {
            hasErrors = $.fn.validarTxtTiempoPromedio($(this));
            if (hasErrors)
                cantError++;
        });

        $("#cphContenido_gvMedicionEnlacePropagacionNodoB input[id^=cphContenido_gvMedicionEnlacePropagacionNodoB_txtTiempoPromedio]").each(function () {
            hasErrors = $.fn.validarTxtTiempoPromedio($(this));
            if (hasErrors)
                cantError++;
        });

        if (cantError == 0)
            return true;
        else {
            openAlert('#divAlert', '#divAlertHeader', 'modal-header-danger', '#lblAlertTitle', 'Error', '#lblAlertBody', 'Algunos datos nos son válidos favor revisar antes de intentar guardar.', true, true);
            return false;
        }

    });

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

    if (!($("#cphContenido_hfIdPerfil").val() == "000001")) {

        //#region Check Aprobacion
        $('#cphContenido_chkFecha').prop('disabled', true);
        $('#cphContenido_chkDireccionEstacionA').prop('disabled', true);
        $('#cphContenido_chkDireccionEstacionB').prop('disabled', true);
        $('#cphContenido_chkReferenciaEstacionA').prop('disabled', true);
        $('#cphContenido_chkReferenciaEstacionB').prop('disabled', true);
        $('#cphContenido_chkNivelRecepcionOperacionRadioA').prop('disabled', true);
        $('#cphContenido_chkNivelRecepcionOperacionRadioB').prop('disabled', true);
        $('#cphContenido_chkPingPTPRadioA').prop('disabled', true);
        $('#cphContenido_chkPingPTPRadioB').prop('disabled', true);
        $('#cphContenido_chkConfiguracionGeneralEnlaceEstacionA').prop('disabled', true);
        $('#cphContenido_chkConfiguracionGeneralEnlaceEstacionB').prop('disabled', true);
        $('#cphContenido_chkConfiguracionVLANEstacionA').prop('disabled', true);
        $('#cphContenido_chkConfiguracionVLANEstacionB').prop('disabled', true);
        $('#cphContenido_chkConfiguracionRadioEstacionA01').prop('disabled', true);
        $('#cphContenido_chkConfiguracionRadioEstacionA02').prop('disabled', true);
        $('#cphContenido_chkConfiguracionRadioEstacionB').prop('disabled', true);
        $('#cphContenido_chkConfiguracionIPEstacionA').prop('disabled', true);
        $('#cphContenido_chkConfiguracionIPEstacionB').prop('disabled', true);

        $('#cphContenido_chkEquipamientosA').prop('disabled', true);
        $('#cphContenido_chkMaterialesA').prop('disabled', true);

        $('#cphContenido_chkEquipamientosB').prop('disabled', true);
        $('#cphContenido_chkMaterialesB').prop('disabled', true);

        $('#cphContenido_chkB_A').prop('disabled', true);
        $('#cphContenido_chkC_A').prop('disabled', true);
        $('#cphContenido_chkD_A').prop('disabled', true);
        $('#cphContenido_chkE_A').prop('disabled', true);
        $('#cphContenido_chkB_B').prop('disabled', true);
        $('#cphContenido_chkC_B').prop('disabled', true);
        $('#cphContenido_chkD_B').prop('disabled', true);
        $('#cphContenido_txtE_B').prop('disabled', true);
        $('#cphContenido_chkCapacidadBreakerEstacionA').prop('disabled', true);
        $('#cphContenido_chkVoltajeCDBreakerEstacionA').prop('disabled', true);
        $('#cphContenido_chkPosicionBreakerEstacionA').prop('disabled', true);
        $('#cphContenido_chkPosicionBarraAterramientoEstacionA').prop('disabled', true);
        $('#cphContenido_chkCapacidadBreakerEstacionB').prop('disabled', true);
        $('#cphContenido_chkVoltajeCDBreakerEstacionB').prop('disabled', true);
        $('#cphContenido_chkPosicionBreakerEstacionB').prop('disabled', true);
        $('#cphContenido_chkPosicionBarraAterramientoEstacionB').prop('disabled', true);
        $('#cphContenido_chkIngenieria').prop('disabled', true);
        $('#cphContenido_chkPerfil').prop('disabled', true);
        $('#cphContenido_chkPantallaRadioEstacionA').prop('disabled', true);
        $('#cphContenido_chkPantallaRadioEstacionB').prop('disabled', true);
        $('#cphContenido_chkSerieAntenaEstacionA').prop('disabled', true);
        $('#cphContenido_chkSerieODUEstacionA').prop('disabled', true);
        $('#cphContenido_chkSeriePOEEstacionA').prop('disabled', true);
        $('#cphContenido_chkSerieAntenaEstacionB').prop('disabled', true);
        $('#cphContenido_chkSerieODUEstacionB').prop('disabled', true);
        $('#cphContenido_chkSeriePOEEstacionB').prop('disabled', true);

        $('#cphContenido_chkPanoramicaEstacionA').prop('disabled', true);
        $('#cphContenido_chkPosicionIdentificacionEstacionA').prop('disabled', true);
        $('#cphContenido_chkAntenaPTP450iEstacionA').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoPuertoAntenaEstacionA').prop('disabled', true);
        $('#cphContenido_chkEngrasadoPernosEstacionA').prop('disabled', true);
        $('#cphContenido_chkSiliconeadoConectorEstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoODUEstacionA').prop('disabled', true);
        $('#cphContenido_chkRecorridoCableSFTPEstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTP01EstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTP02EstacionA').prop('disabled', true);
        $('#cphContenido_chkSALANOutdoorEtiquetadoEstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoSALANOutdoorEstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTPIndoor01EstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTPIndoor02EstacionA').prop('disabled', true);
        $('#cphContenido_chkPanoramicaRackEstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoPOE01EstacionA').prop('disabled', true);
        $('#cphContenido_chkAterramientoPOE02EstacionA').prop('disabled', true);
        $('#cphContenido_chkEnergiaPOEEtiqueta01EstacionA').prop('disabled', true);
        $('#cphContenido_chkEnergiaPOEEtiqueta02EstacionA').prop('disabled', true);
        $('#cphContenido_chkPatchCorePOESwitch01EstacionA').prop('disabled', true);
        $('#cphContenido_chkPatchCorePOESwitch02EstacionA').prop('disabled', true);

        $('#cphContenido_chkPanoramicaEstacionB').prop('disabled', true);
        $('#cphContenido_chkPosicionIdentificacionEstacionB').prop('disabled', true);
        $('#cphContenido_chkAntenaPTP450iEstacionB').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoPuertoAntenaEstacionB').prop('disabled', true);
        $('#cphContenido_chkEngrasadoPernosEstacionB').prop('disabled', true);
        $('#cphContenido_chkSiliconeadoConectorEstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoODUEstacionB').prop('disabled', true);
        $('#cphContenido_chkRecorridoCableSFTPEstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTP01EstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTP02EstacionB').prop('disabled', true);
        $('#cphContenido_chkSALANOutdoorEtiquetadoEstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoSALANOutdoorEstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTPIndoor01EstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTPIndoor02EstacionB').prop('disabled', true);
        $('#cphContenido_chkPanoramicaRackEstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoPOE01EstacionB').prop('disabled', true);
        $('#cphContenido_chkAterramientoPOE02EstacionB').prop('disabled', true);
        $('#cphContenido_chkEnergiaPOEEtiqueta01EstacionB').prop('disabled', true);
        $('#cphContenido_chkEnergiaPOEEtiqueta02EstacionB').prop('disabled', true);
        $('#cphContenido_chkPatchCorePOESwitch01EstacionB').prop('disabled', true);
        $('#cphContenido_chkPatchCorePOESwitch02EstacionB').prop('disabled', true);

        $('#cphContenido_chkSeriePTP450iNodoA').prop('disabled', true);
        $('#cphContenido_chkMedicionEnlacePropagacionNodoA').prop('disabled', true);
        $('#cphContenido_chkMedicionEnlacePropagacionNodoB').prop('disabled', true);

        //#endregion

        //#region bloqueamos los comentarios
        $('#txtFechaComentario').prop('disabled', true);
        $('#txtDireccionEstacionAComentario').prop('disabled', true);
        $('#txtDireccionEstacionBComentario').prop('disabled', true);
        $('#txtReferenciaEstacionAComentario').prop('disabled', true);
        $('#txtReferenciaEstacionBComentario').prop('disabled', true);
        $('#txtNivelRecepcionOperacionRadioAComentario').prop('disabled', true);

        $('#txtNivelRecepcionOperacionRadioBComentario').prop('disabled', true);
        $('#txtPingPTPRadioAComentario').prop('disabled', true);
        $('#txtPingPTPRadioBComentario').prop('disabled', true);
        $('#txtConfiguracionGeneralEnlaceEstacionAComentario').prop('disabled', true);
        $('#txtConfiguracionGeneralEnlaceEstacionBComentario').prop('disabled', true);
        $('##txtConfiguracionVLANEstacionAComentario').prop('disabled', true);
        $('#txtConfiguracionVLANEstacionBComentario').prop('disabled', true);
        $('#txtConfiguracionRadioEstacionA01Comentario').prop('disabled', true);
        $('#txtConfiguracionRadioEstacionA02Comentario').prop('disabled', true);
        $('#txtConfiguracionRadioEstacionBComentario').prop('disabled', true);
        $('#txtConfiguracionIPEstacionAComentario').prop('disabled', true);
        $('#txtConfiguracionIPEstacionBComentario').prop('disabled', true);

        $('#txtEquipamientosAComentario').prop('disabled', true);
        $('#txtMaterialesAComentario').prop('disabled', true);

        $('#txtEquipamientosBComentario').prop('disabled', true);
        $('#txtMaterialesBComentario').prop('disabled', true);

        $('#txtB_AComentario').prop('disabled', true);
        $('#txtC_AComentario').prop('disabled', true);
        $('#txtD_AComentario').prop('disabled', true);
        $('#txtE_AComentario').prop('disabled', true);
        $('#txtB_BComentario').prop('disabled', true);
        $('#txtC_BComentario').prop('disabled', true);
        $('#txtD_BComentario').prop('disabled', true);
        $('#txtE_BComentario').prop('disabled', true);
        $('#txtCapacidadBreakerEstacionAComentario').prop('disabled', true);
        $('#txtVoltajeCDBreakerEstacionAComentario').prop('disabled', true);
        $('#txtPosicionBreakerEstacionAComentario').prop('disabled', true);
        $('#txtPosicionBarraAterramientoEstacionAComentario').prop('disabled', true);
        $('#txtCapacidadBreakerEstacionBComentario').prop('disabled', true);
        $('#txtVoltajeCDBreakerEstacionBComentario').prop('disabled', true);
        $('#txtPosicionBreakerEstacionBComentario').prop('disabled', true);
        $('#txtPosicionBarraAterramientoEstacionBComentario').prop('disabled', true);
        $('#txtIngenieriaComentario').prop('disabled', true);
        $('#txtPerfilComentario').prop('disabled', true);
        $('#txtPantallaRadioEstacionAComentario').prop('disabled', true);
        $('#txtPantallaRadioEstacionBComentario').prop('disabled', true);
        $('#txtSerieAntenaEstacionAComentario').prop('disabled', true);
        $('#txtSerieODUEstacionAComentario').prop('disabled', true);
        $('#txtSeriePOEEstacionAComentario').prop('disabled', true);
        $('#txtSerieAntenaEstacionBComentario').prop('disabled', true);
        $('#txtSerieODUEstacionBComentario').prop('disabled', true);
        $('#txtSeriePOEEstacionBComentario').prop('disabled', true);

        $('#txtPanoramicaEstacionAComentario').prop('disabled', true);
        $('#txtPosicionIdentificacionEstacionAComentario').prop('disabled', true);
        $('#txtAntenaPTP450iEstacionAComentario').prop('disabled', true);
        $('#txtEtiquetadoPuertoAntenaEstacionAComentario').prop('disabled', true);
        $('#txtEngrasadoPernosEstacionAComentario').prop('disabled', true);
        $('#txtSiliconeadoConectorEstacionAComentario').prop('disabled', true);
        $('#txtAterramientoODUEstacionAComentario').prop('disabled', true);
        $('#txtRecorridoCableSFTPEstacionAComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTP01EstacionAComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTP02EstacionAComentario').prop('disabled', true);
        $('#txtSALANOutdoorEtiquetadoEstacionAComentario').prop('disabled', true);
        $('#txtAterramientoSALANOutdoorEstacionAComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTPIndoor01EstacionAComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTPIndoor02EstacionAComentario').prop('disabled', true);
        $('#txtPanoramicaRackEstacionAComentario').prop('disabled', true);
        $('#txtAterramientoPOE01EstacionAComentario').prop('disabled', true);
        $('#txtAterramientoPOE02EstacionAComentario').prop('disabled', true);
        $('#txtEnergiaPOEEtiqueta01EstacionAComentario').prop('disabled', true);
        $('#txtEnergiaPOEEtiqueta02EstacionAComentario').prop('disabled', true);
        $('#txtPatchCorePOESwitch01EstacionAComentario').prop('disabled', true);
        $('#txtPatchCorePOESwitch02EstacionAComentario').prop('disabled', true);

        $('#txtPanoramicaEstacionBComentario').prop('disabled', true);
        $('#txtPosicionIdentificacionEstacionBComentario').prop('disabled', true);
        $('#txtAntenaPTP450iEstacionBComentario').prop('disabled', true);
        $('#txtEtiquetadoPuertoAntenaEstacionBComentario').prop('disabled', true);
        $('#txtEngrasadoPernosEstacionBComentario').prop('disabled', true);
        $('#txtSiliconeadoConectorEstacionBComentario').prop('disabled', true);
        $('#txtAterramientoODUEstacionBComentario').prop('disabled', true);
        $('#txtRecorridoCableSFTPEstacionBComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTP01EstacionBComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTP02EstacionBComentario').prop('disabled', true);
        $('#txtSALANOutdoorEtiquetadoEstacionBComentario').prop('disabled', true);
        $('#txtAterramientoSALANOutdoorEstacionBComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTPIndoor01EstacionBComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTPIndoor02EstacionBComentario').prop('disabled', true);
        $('#txtPanoramicaRackEstacionBComentario').prop('disabled', true);
        $('#txtAterramientoPOE01EstacionBComentario').prop('disabled', true);
        $('#txtAterramientoPOE02EstacionBComentario').prop('disabled', true);
        $('#txtEnergiaPOEEtiqueta01EstacionBComentario').prop('disabled', true);
        $('#txtEnergiaPOEEtiqueta02EstacionBComentario').prop('disabled', true);
        $('#txtPatchCorePOESwitch01EstacionBComentario').prop('disabled', true);
        $('#txtPatchCorePOESwitch02EstacionBComentario').prop('disabled', true);

        //$('#txtSeriePTP450iNodoAComentario').prop('disabled', true);
        //$('#txtSeriePTP450iNodoBComentario').prop('disabled', true);
        $('#txtMedicionEnlacePropagacionNodoAComentario').prop('disabled', true);
        $('#txtMedicionEnlacePropagacionNodoBComentario').prop('disabled', true);
        //#endregion

    }


    // #endregion

    // #region Metodos

    $.fn.validarTxtTiempoPromedio = function (txtTiempoPromedio) {
        var hasErrors = false;
        var intTiempoPromedio = 0;
        var strTiempoPromedio = "0";

        if (!(txtTiempoPromedio.val() == "")) {
            strTiempoPromedio = txtTiempoPromedio.val().replace(",", "");
            intTiempoPromedio = parseInt(strTiempoPromedio);

            if (intTiempoPromedio < 6 || intTiempoPromedio > 10) {
                hasErrors = true;
                txtTiempoPromedio.addClass('invalid');
                txtTiempoPromedio.attr("title", "Error");
                txtTiempoPromedio.attr("data-content", "El número debe estar comprendido entre 6 y 10.");
                txtTiempoPromedio.popover('show');
                setTimeout(function () {
                    txtTiempoPromedio.popover('hide');
                }, 4000);
                txtTiempoPromedio.next().addClass('danger');
            }
            else {
                hasErrors = false;
                txtTiempoPromedio.removeClass('invalid');
                txtTiempoPromedio.popover('destroy');
            }
        }
        return hasErrors;
    }

    // #endregion
});