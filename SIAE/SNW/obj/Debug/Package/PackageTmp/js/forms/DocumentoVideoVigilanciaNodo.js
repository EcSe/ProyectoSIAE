$(document).ready(function () {

    // #region Videos

    // #region Video Cámara Indoor

    $('#cphContenido_chkVideoCamaraIndoor').change(function () {
        var blnActivo = $("#cphContenido_chkVideoCamaraIndoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divVideoCamaraIndoor, "#divVideoCamaraIndoor");
        else
            habilitarRealUploader(true, divVideoCamaraIndoor, "#divVideoCamaraIndoor");
    });

    poVideoCamaraIndoorComentario = $("#spVideoCamaraIndoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocVideoCamaraIndoorComentario').html();
        }
    });

    poVideoCamaraIndoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poVideoCamaraIndoorComentario.on('shown.bs.popover', function () {
        $("#txtVideoCamaraIndoorComentario").val($("#cphContenido_hfVideoCamaraIndoorComentario").val());
        $("#txtVideoCamaraIndoorComentario").focus();
        $("#txtVideoCamaraIndoorComentario").keyup(function () {
            $("#cphContenido_hfVideoCamaraIndoorComentario").val($(this).val());
        });
    });

    var divVideoCamaraIndoor = new RealUploader("#divVideoCamaraIndoor", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['mp4'],
        maxFileSize: '100M',
        fileType: 7,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfVideoCamaraIndoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfVideoCamaraIndoor').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfVideoCamaraIndoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfVideoCamaraIndoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfVideoCamaraIndoor').val() != "") {
        divVideoCamaraIndoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfVideoCamaraIndoor').val(), $('#cphContenido_hfVideoCamaraIndoor').val());
    }

    $("#cphContenido_chkVideoCamaraIndoor").trigger("change");

    // #endregion  

    // #region Video Cámara Outdoor

    $('#cphContenido_chkVideoCamaraOutdoor').change(function () {
        var blnActivo = $("#cphContenido_chkVideoCamaraOutdoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divVideoCamaraOutdoor, "#divVideoCamaraOutdoor");
        else
            habilitarRealUploader(true, divVideoCamaraOutdoor, "#divVideoCamaraOutdoor");
    });

    poVideoCamaraOutdoorComentario = $("#spVideoCamaraOutdoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocVideoCamaraOutdoorComentario').html();
        }
    });

    poVideoCamaraOutdoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poVideoCamaraOutdoorComentario.on('shown.bs.popover', function () {
        $("#txtVideoCamaraOutdoorComentario").val($("#cphContenido_hfVideoCamaraOutdoorComentario").val());
        $("#txtVideoCamaraOutdoorComentario").focus();
        $("#txtVideoCamaraOutdoorComentario").keyup(function () {
            $("#cphContenido_hfVideoCamaraOutdoorComentario").val($(this).val());
        });
    });

    var divVideoCamaraOutdoor = new RealUploader("#divVideoCamaraOutdoor", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['mp4'],
        maxFileSize: '100M',
        fileType: 7,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfVideoCamaraOutdoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfVideoCamaraOutdoor').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfVideoCamaraOutdoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfVideoCamaraOutdoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfVideoCamaraOutdoor').val() != "") {
        divVideoCamaraOutdoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfVideoCamaraOutdoor').val(), $('#cphContenido_hfVideoCamaraOutdoor').val());
    }

    $("#cphContenido_chkVideoCamaraOutdoor").trigger("change");

    // #endregion

    // #region Video Sirena

    $('#cphContenido_chkVideoSirena').change(function () {
        var blnActivo = $("#cphContenido_chkVideoSirena").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divVideoSirena, "#divVideoSirena");
        else
            habilitarRealUploader(true, divVideoSirena, "#divVideoSirena");
    });

    poVideoSirenaComentario = $("#spVideoSirenaComentario").popover({
        html: true,
        content: function () {
            return $('#pocVideoSirenaComentario').html();
        }
    });

    poVideoSirenaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poVideoSirenaComentario.on('shown.bs.popover', function () {
        $("#txtVideoSirenaComentario").val($("#cphContenido_hfVideoSirenaComentario").val());
        $("#txtVideoSirenaComentario").focus();
        $("#txtVideoSirenaComentario").keyup(function () {
            $("#cphContenido_hfVideoSirenaComentario").val($(this).val());
        });
    });

    var divVideoSirena = new RealUploader("#divVideoSirena", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['mp4'],
        maxFileSize: '100M',
        fileType: 7,
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfVideoSirena').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfVideoSirena').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfVideoSirena').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfVideoSirena').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfVideoSirena').val() != "") {
        divVideoSirena.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfVideoSirena').val(), $('#cphContenido_hfVideoSirena').val());
    }

    $("#cphContenido_chkVideoSirena").trigger("change");

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

    //if (!($("#cphContenido_hfIdPerfil").val() == "000001")) {

    //    //#region Check Aprobacion
    //    $('#cphContenido_chkFecha').prop('disabled', true);
    //    $('#cphContenido_chkDireccionEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkDireccionEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkReferenciaEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkReferenciaEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkNivelRecepcionOperacionRadioA').prop('disabled', true);
    //    $('#cphContenido_chkNivelRecepcionOperacionRadioB').prop('disabled', true);
    //    $('#cphContenido_chkPingPTPRadioA').prop('disabled', true);
    //    $('#cphContenido_chkPingPTPRadioB').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionGeneralEnlaceEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionGeneralEnlaceEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionVLANEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionVLANEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionRadioEstacionA01').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionRadioEstacionA02').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionRadioEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionIPEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkConfiguracionIPEstacionB').prop('disabled', true);

    //    $('#cphContenido_chkEquipamientosA').prop('disabled', true);
    //    $('#cphContenido_chkMaterialesA').prop('disabled', true);

    //    $('#cphContenido_chkEquipamientosB').prop('disabled', true);
    //    $('#cphContenido_chkMaterialesB').prop('disabled', true);

    //    $('#cphContenido_chkB_A').prop('disabled', true);
    //    $('#cphContenido_chkC_A').prop('disabled', true);
    //    $('#cphContenido_chkD_A').prop('disabled', true);
    //    $('#cphContenido_chkE_A').prop('disabled', true);
    //    $('#cphContenido_chkB_B').prop('disabled', true);
    //    $('#cphContenido_chkC_B').prop('disabled', true);
    //    $('#cphContenido_chkD_B').prop('disabled', true);
    //    $('#cphContenido_txtE_B').prop('disabled', true);
    //    $('#cphContenido_chkCapacidadBreakerEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkVoltajeCDBreakerEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPosicionBreakerEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPosicionBarraAterramientoEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkCapacidadBreakerEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkVoltajeCDBreakerEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkPosicionBreakerEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkPosicionBarraAterramientoEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkIngenieria').prop('disabled', true);
    //    $('#cphContenido_chkPerfil').prop('disabled', true);
    //    $('#cphContenido_chkPantallaRadioEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPantallaRadioEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkSerieAntenaEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkSerieODUEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkSeriePOEEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkSerieAntenaEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkSerieODUEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkSeriePOEEstacionB').prop('disabled', true);

    //    $('#cphContenido_chkPanoramicaEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPosicionIdentificacionEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAntenaPTP450iEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkEtiquetadoPuertoAntenaEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkEngrasadoPernosEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkSiliconeadoConectorEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoODUEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkRecorridoCableSFTPEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTP01EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTP02EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkSALANOutdoorEtiquetadoEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoSALANOutdoorEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTPIndoor01EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTPIndoor02EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPanoramicaRackEstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoPOE01EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoPOE02EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkEnergiaPOEEtiqueta01EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkEnergiaPOEEtiqueta02EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPatchCorePOESwitch01EstacionA').prop('disabled', true);
    //    $('#cphContenido_chkPatchCorePOESwitch02EstacionA').prop('disabled', true);

    //    $('#cphContenido_chkPanoramicaEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkPosicionIdentificacionEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAntenaPTP450iEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkEtiquetadoPuertoAntenaEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkEngrasadoPernosEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkSiliconeadoConectorEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoODUEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkRecorridoCableSFTPEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTP01EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTP02EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkSALANOutdoorEtiquetadoEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoSALANOutdoorEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTPIndoor01EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoCableSFTPIndoor02EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkPanoramicaRackEstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoPOE01EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkAterramientoPOE02EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkEnergiaPOEEtiqueta01EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkEnergiaPOEEtiqueta02EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkPatchCorePOESwitch01EstacionB').prop('disabled', true);
    //    $('#cphContenido_chkPatchCorePOESwitch02EstacionB').prop('disabled', true);

    //    $('#cphContenido_chkSeriePTP450iNodoA').prop('disabled', true);
    //    $('#cphContenido_chkMedicionEnlacePropagacionNodoA').prop('disabled', true);
    //    $('#cphContenido_chkMedicionEnlacePropagacionNodoB').prop('disabled', true);

    //    //#endregion

    //    //#region bloqueamos los comentarios
    //    $('#txtFechaComentario').prop('disabled', true);
    //    $('#txtDireccionEstacionAComentario').prop('disabled', true);
    //    $('#txtDireccionEstacionBComentario').prop('disabled', true);
    //    $('#txtReferenciaEstacionAComentario').prop('disabled', true);
    //    $('#txtReferenciaEstacionBComentario').prop('disabled', true);
    //    $('#txtNivelRecepcionOperacionRadioAComentario').prop('disabled', true);

    //    $('#txtNivelRecepcionOperacionRadioBComentario').prop('disabled', true);
    //    $('#txtPingPTPRadioAComentario').prop('disabled', true);
    //    $('#txtPingPTPRadioBComentario').prop('disabled', true);
    //    $('#txtConfiguracionGeneralEnlaceEstacionAComentario').prop('disabled', true);
    //    $('#txtConfiguracionGeneralEnlaceEstacionBComentario').prop('disabled', true);
    //    $('##txtConfiguracionVLANEstacionAComentario').prop('disabled', true);
    //    $('#txtConfiguracionVLANEstacionBComentario').prop('disabled', true);
    //    $('#txtConfiguracionRadioEstacionA01Comentario').prop('disabled', true);
    //    $('#txtConfiguracionRadioEstacionA02Comentario').prop('disabled', true);
    //    $('#txtConfiguracionRadioEstacionBComentario').prop('disabled', true);
    //    $('#txtConfiguracionIPEstacionAComentario').prop('disabled', true);
    //    $('#txtConfiguracionIPEstacionBComentario').prop('disabled', true);

    //    $('#txtEquipamientosAComentario').prop('disabled', true);
    //    $('#txtMaterialesAComentario').prop('disabled', true);

    //    $('#txtEquipamientosBComentario').prop('disabled', true);
    //    $('#txtMaterialesBComentario').prop('disabled', true);

    //    $('#txtB_AComentario').prop('disabled', true);
    //    $('#txtC_AComentario').prop('disabled', true);
    //    $('#txtD_AComentario').prop('disabled', true);
    //    $('#txtE_AComentario').prop('disabled', true);
    //    $('#txtB_BComentario').prop('disabled', true);
    //    $('#txtC_BComentario').prop('disabled', true);
    //    $('#txtD_BComentario').prop('disabled', true);
    //    $('#txtE_BComentario').prop('disabled', true);
    //    $('#txtCapacidadBreakerEstacionAComentario').prop('disabled', true);
    //    $('#txtVoltajeCDBreakerEstacionAComentario').prop('disabled', true);
    //    $('#txtPosicionBreakerEstacionAComentario').prop('disabled', true);
    //    $('#txtPosicionBarraAterramientoEstacionAComentario').prop('disabled', true);
    //    $('#txtCapacidadBreakerEstacionBComentario').prop('disabled', true);
    //    $('#txtVoltajeCDBreakerEstacionBComentario').prop('disabled', true);
    //    $('#txtPosicionBreakerEstacionBComentario').prop('disabled', true);
    //    $('#txtPosicionBarraAterramientoEstacionBComentario').prop('disabled', true);
    //    $('#txtIngenieriaComentario').prop('disabled', true);
    //    $('#txtPerfilComentario').prop('disabled', true);
    //    $('#txtPantallaRadioEstacionAComentario').prop('disabled', true);
    //    $('#txtPantallaRadioEstacionBComentario').prop('disabled', true);
    //    $('#txtSerieAntenaEstacionAComentario').prop('disabled', true);
    //    $('#txtSerieODUEstacionAComentario').prop('disabled', true);
    //    $('#txtSeriePOEEstacionAComentario').prop('disabled', true);
    //    $('#txtSerieAntenaEstacionBComentario').prop('disabled', true);
    //    $('#txtSerieODUEstacionBComentario').prop('disabled', true);
    //    $('#txtSeriePOEEstacionBComentario').prop('disabled', true);

    //    $('#txtPanoramicaEstacionAComentario').prop('disabled', true);
    //    $('#txtPosicionIdentificacionEstacionAComentario').prop('disabled', true);
    //    $('#txtAntenaPTP450iEstacionAComentario').prop('disabled', true);
    //    $('#txtEtiquetadoPuertoAntenaEstacionAComentario').prop('disabled', true);
    //    $('#txtEngrasadoPernosEstacionAComentario').prop('disabled', true);
    //    $('#txtSiliconeadoConectorEstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoODUEstacionAComentario').prop('disabled', true);
    //    $('#txtRecorridoCableSFTPEstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTP01EstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTP02EstacionAComentario').prop('disabled', true);
    //    $('#txtSALANOutdoorEtiquetadoEstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoSALANOutdoorEstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTPIndoor01EstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTPIndoor02EstacionAComentario').prop('disabled', true);
    //    $('#txtPanoramicaRackEstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoPOE01EstacionAComentario').prop('disabled', true);
    //    $('#txtAterramientoPOE02EstacionAComentario').prop('disabled', true);
    //    $('#txtEnergiaPOEEtiqueta01EstacionAComentario').prop('disabled', true);
    //    $('#txtEnergiaPOEEtiqueta02EstacionAComentario').prop('disabled', true);
    //    $('#txtPatchCorePOESwitch01EstacionAComentario').prop('disabled', true);
    //    $('#txtPatchCorePOESwitch02EstacionAComentario').prop('disabled', true);

    //    $('#txtPanoramicaEstacionBComentario').prop('disabled', true);
    //    $('#txtPosicionIdentificacionEstacionBComentario').prop('disabled', true);
    //    $('#txtAntenaPTP450iEstacionBComentario').prop('disabled', true);
    //    $('#txtEtiquetadoPuertoAntenaEstacionBComentario').prop('disabled', true);
    //    $('#txtEngrasadoPernosEstacionBComentario').prop('disabled', true);
    //    $('#txtSiliconeadoConectorEstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoODUEstacionBComentario').prop('disabled', true);
    //    $('#txtRecorridoCableSFTPEstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTP01EstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTP02EstacionBComentario').prop('disabled', true);
    //    $('#txtSALANOutdoorEtiquetadoEstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoSALANOutdoorEstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTPIndoor01EstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoCableSFTPIndoor02EstacionBComentario').prop('disabled', true);
    //    $('#txtPanoramicaRackEstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoPOE01EstacionBComentario').prop('disabled', true);
    //    $('#txtAterramientoPOE02EstacionBComentario').prop('disabled', true);
    //    $('#txtEnergiaPOEEtiqueta01EstacionBComentario').prop('disabled', true);
    //    $('#txtEnergiaPOEEtiqueta02EstacionBComentario').prop('disabled', true);
    //    $('#txtPatchCorePOESwitch01EstacionBComentario').prop('disabled', true);
    //    $('#txtPatchCorePOESwitch02EstacionBComentario').prop('disabled', true);

    //    $('#txtSeriePTP450iNodoAComentario').prop('disabled', true);
    //    $('#txtMedicionEnlacePropagacionNodoAComentario').prop('disabled', true);
    //    $('#txtMedicionEnlacePropagacionNodoBComentario').prop('disabled', true);
    //    //#endregion

    //}


    // #endregion

});