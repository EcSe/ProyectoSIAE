$(document).ready(function () {

    //$.fn.validarDdlTipoFuente = function () {
    //    strValor = $("#cphContenido_ddlTipoFuente").val();
    //    console.log("$.fn.validarDdlTipoFuente 01 strValor = " + strValor);
    //    blnEquipamiento = $("#cphContenido_chkEquipamientos").prop("checked");
    //    if (strValor == "000001") {//CMM4
    //        $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_3").val("");
    //    }
    //    else {
    //        $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_4").val("");
    //    }
    //    if (!blnEquipamiento) {
    //        if (strValor == "000001") {//CMM4
    //            $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_3").prop('disabled', true);
    //            $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_4").prop('disabled', false);
    //        }
    //        else {
    //            $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_3").prop('disabled', false);
    //            $("#cphContenido_gvEquipamientos_txtSerieEquipamiento_4").prop('disabled', true);
    //        }
    //    }
    //};

    // #region Título

    // #region Frecuencia Mzh

    $('#cphContenido_chkFrecuencia').change(function () {
        var blnActivo = $("#cphContenido_chkFrecuencia").prop("checked");
        if (blnActivo) {
            $('#cphContenido_ddlFrecuencia').prop('disabled', true);
        }
        else {
            $('#cphContenido_ddlFrecuencia').prop('disabled', false);
        }
    });

    poFrecuenciaComentario = $("#spFrecuenciaComentario").popover({
        html: true,
        content: function () {
            return $('#pocFrecuenciaComentario').html();
        }
    });

    poFrecuenciaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poFrecuenciaComentario.on('shown.bs.popover', function () {
        $("#txtFrecuenciaComentario").val($("#cphContenido_hfFrecuenciaComentario").val());
        $("#txtFrecuenciaComentario").focus();
        $("#txtFrecuenciaComentario").keyup(function () {
            $("#cphContenido_hfFrecuenciaComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkFrecuencia").trigger("change");

    // #endregion

    // #region Fecha

    //No se debe poner el control readonly en el formulario, este metodo se encarga da hacerlo
    var pckFecha = $("#cphContenido_txtFecha").pickadate({
        firstDay: true,
        format: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        //Cuando se asigna el valor del control pickadate tambien se le debe asignar al control textbox
        //http://amsul.ca/pickadate.js/date/
        //http://amsul.ca/pickadate.js/api/
        //http://amsul.ca/pickadate.js/api/#method-get-value
        onSet: function (context) {
            //console.log('Just set stuff:', context)
            //console.log("fecha = " + this.get())
            //$("#cphContenido_txtFecha").val(this.get());
        }
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
        });
    });

    $("#cphContenido_chkFecha").trigger("change");

    // #endregion

    // #endregion
    
    // #region 1 Configuración y Pruebas

    // #region Dirección

    $('#cphContenido_chkDireccion').change(function () {
        var blnActivo = $("#cphContenido_chkDireccion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDireccion").prop('disabled', true);
        else
            $('#cphContenido_txtDireccion').prop('disabled', false);
    });

    poDireccionComentario = $("#spDireccionComentario").popover({
        html: true,
        content: function () {
            return $('#pocDireccionComentario').html();
        }
    });

    poDireccionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDireccionComentario.on('shown.bs.popover', function () {
        $("#txtDireccionComentario").val($("#cphContenido_hfDireccionComentario").val());
        $("#txtDireccionComentario").focus();
        $("#txtDireccionComentario").keyup(function () {
            $("#cphContenido_hfDireccionComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkDireccion").trigger("change");

    // #endregion

    // #region Latitud (S)

    $('#cphContenido_chkLatitud').change(function () {
        var blnActivo = $("#cphContenido_chkLatitud").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtLatitud").prop('disabled', true);
        else
            $('#cphContenido_txtLatitud').prop('disabled', false);
    });

    poLatitudComentario = $("#spLatitudComentario").popover({
        html: true,
        content: function () {
            return $('#pocLatitudComentario').html();
        }
    });

    poLatitudComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poLatitudComentario.on('shown.bs.popover', function () {
        $("#txtLatitudComentario").val($("#cphContenido_hfLatitudComentario").val());
        $("#txtLatitudComentario").focus();
        $("#txtLatitudComentario").keyup(function () {
            $("#cphContenido_hfLatitudComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkLatitud").trigger("change");

    // #endregion

    // #region Longitud (W)

    $('#cphContenido_chkLongitud').change(function () {
        var blnActivo = $("#cphContenido_chkLongitud").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtLongitud").prop('disabled', true);
        else
            $('#cphContenido_txtLongitud').prop('disabled', false);
    });

    poLongitudComentario = $("#spLongitudComentario").popover({
        html: true,
        content: function () {
            return $('#pocLongitudComentario').html();
        }
    });

    poLongitudComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poLongitudComentario.on('shown.bs.popover', function () {
        $("#txtLongitudComentario").val($("#cphContenido_hfLongitudComentario").val());
        $("#txtLongitudComentario").focus();
        $("#txtLongitudComentario").keyup(function () {
            $("#cphContenido_hfLongitudComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkLongitud").trigger("change");

    // #endregion

    // #region Altitud (msnm)

    $('#cphContenido_chkAltitud').change(function () {
        var blnActivo = $("#cphContenido_chkAltitud").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAltitud").prop('disabled', true);
        else
            $('#cphContenido_txtAltitud').prop('disabled', false);
    });

    poAltitudComentario = $("#spAltitudComentario").popover({
        html: true,
        content: function () {
            return $('#pocAltitudComentario').html();
        }
    });

    poAltitudComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAltitudComentario.on('shown.bs.popover', function () {
        $("#txtAltitudComentario").val($("#cphContenido_hfAltitudComentario").val());
        $("#txtAltitudComentario").focus();
        $("#txtAltitudComentario").keyup(function () {
            $("#cphContenido_hfAltitudComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkAltitud").trigger("change");

    // #endregion

    /*
    // #region Agregado Carlos Ramos 28/08/2018 Ocultar los controles al ser el documento "000001 - ACTA DE INSTALACION - ACEPTACION PROTOCOLO (SECTORIAL)"

    if (!($("#cphContenido_hfIdDocumento").val() == "000001")) {//ACTA DE INSTALACION - ACEPTACION PROTOCOLO (SECTORIAL)
        
        // #region Azimut (°)

        $('#cphContenido_chkAzimut').change(function () {
            var blnActivo = $("#cphContenido_chkAzimut").prop("checked");
            if (blnActivo)
                $("#cphContenido_txtAzimut").prop('disabled', true);
            else
                $('#cphContenido_txtAzimut').prop('disabled', false);
        });

        poAzimutComentario = $("#spAzimutComentario").popover({
            html: true,
            content: function () {
                return $('#pocAzimutComentario').html();
            }
        });

        poAzimutComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poAzimutComentario.on('shown.bs.popover', function () {
            $("#txtAzimutComentario").val($("#cphContenido_hfAzimutComentario").val());
            $("#txtAzimutComentario").focus();
            $("#txtAzimutComentario").keyup(function () {
                $("#cphContenido_hfAzimutComentario").val($(this).val());
            });
        });

        $("#cphContenido_chkAzimut").trigger("change");

        // #endregion

        // #region Down Tilt (°)

        $('#cphContenido_chkDownTilt').change(function () {
            var blnActivo = $("#cphContenido_chkDownTilt").prop("checked");
            if (blnActivo)
                $("#cphContenido_txtDownTilt").prop('disabled', true);
            else
                $('#cphContenido_txtDownTilt').prop('disabled', false);
        });

        poDownTiltComentario = $("#spDownTiltComentario").popover({
            html: true,
            content: function () {
                return $('#pocDownTiltComentario').html();
            }
        });

        poDownTiltComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poDownTiltComentario.on('shown.bs.popover', function () {
            $("#txtDownTiltComentario").val($("#cphContenido_hfDownTiltComentario").val());
            $("#txtDownTiltComentario").focus();
            $("#txtDownTiltComentario").keyup(function () {
                $("#cphContenido_hfDownTiltComentario").val($(this).val());
            });
        });

        $("#cphContenido_chkDownTilt").trigger("change");

        // #endregion

        // #region Altura Instalada (m)

        $('#cphContenido_chkAlturaInstalada').change(function () {
            var blnActivo = $("#cphContenido_chkAlturaInstalada").prop("checked");
            if (blnActivo)
                $("#cphContenido_txtAlturaInstalada").prop('disabled', true);
            else
                $('#cphContenido_txtAlturaInstalada').prop('disabled', false);
        });

        poAlturaInstaladaComentario = $("#spAlturaInstaladaComentario").popover({
            html: true,
            content: function () {
                return $('#pocAlturaInstaladaComentario').html();
            }
        });

        poAlturaInstaladaComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poAlturaInstaladaComentario.on('shown.bs.popover', function () {
            $("#txtAlturaInstaladaComentario").val($("#cphContenido_hfAlturaInstaladaComentario").val());
            $("#txtAlturaInstaladaComentario").focus();
            $("#txtAlturaInstaladaComentario").keyup(function () {
                $("#cphContenido_hfAlturaInstaladaComentario").val($(this).val());
            });
        });

        $("#cphContenido_chkAlturaInstalada").trigger("change");

        // #endregion

    }
    
    // #endregion
    */

    // #region Eficiencia Enlace

    $('#cphContenido_chkEficienciaEnlace').change(function () {
        var blnActivo = $("#cphContenido_chkEficienciaEnlace").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtEficienciaEnlace").prop('disabled', true);
        else
            $('#cphContenido_txtEficienciaEnlace').prop('disabled', false);
    });

    poEficienciaEnlaceComentario = $("#spEficienciaEnlaceComentario").popover({
        html: true,
        content: function () {
            return $('#pocEficienciaEnlaceComentario').html();
        }
    });

    poEficienciaEnlaceComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEficienciaEnlaceComentario.on('shown.bs.popover', function () {
        $("#txtEficienciaEnlaceComentario").val($("#cphContenido_hfEficienciaEnlaceComentario").val());
        $("#txtEficienciaEnlaceComentario").focus();
        $("#txtEficienciaEnlaceComentario").keyup(function () {
            $("#cphContenido_hfEficienciaEnlaceComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkEficienciaEnlace").trigger("change");

    // #endregion

    // #region Capacidad Enlace

    $('#cphContenido_chkCapacidadEnlace').change(function () {
        var blnActivo = $("#cphContenido_chkCapacidadEnlace").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCapacidadEnlace").prop('disabled', true);
        else
            $('#cphContenido_txtCapacidadEnlace').prop('disabled', false);
    });

    poCapacidadEnlaceComentario = $("#spCapacidadEnlaceComentario").popover({
        html: true,
        content: function () {
            return $('#pocCapacidadEnlaceComentario').html();
        }
    });

    poCapacidadEnlaceComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCapacidadEnlaceComentario.on('shown.bs.popover', function () {
        $("#txtCapacidadEnlaceComentario").val($("#cphContenido_hfCapacidadEnlaceComentario").val());
        $("#txtCapacidadEnlaceComentario").focus();
        $("#txtCapacidadEnlaceComentario").keyup(function () {
            $("#cphContenido_hfCapacidadEnlaceComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCapacidadEnlace").trigger("change");

    // #endregion

    // #region Capt 1: Configuration/Radio

    $('#cphContenido_chkConfigurationRadio').change(function () {
        var blnActivo = $("#cphContenido_chkConfigurationRadio").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfigurationRadio, "#divConfigurationRadio");
        else
            habilitarRealUploader(true, divConfigurationRadio, "#divConfigurationRadio");
    });

    poConfigurationRadioComentario = $("#spConfigurationRadioComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfigurationRadioComentario').html();
        }
    });

    poConfigurationRadioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfigurationRadioComentario.on('shown.bs.popover', function () {
        $("#txtConfigurationRadioComentario").val($("#cphContenido_hfConfigurationRadioComentario").val());
        $("#txtConfigurationRadioComentario").focus();
        $("#txtConfigurationRadioComentario").keyup(function () {
            $("#cphContenido_hfConfigurationRadioComentario").val($(this).val());
        });
    });

    var divConfigurationRadio = new RealUploader("#divConfigurationRadio", {
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
            start: function (filesPending) {
                //console.log("start inicio");
                //console.log("filesPending = " + filesPending);
                //cantArcActualDivArchivo = 0;
                //console.log("start fin");
            },
            startFile: function (fileObj) {
                //console.log("startFile");
                //console.log("fileObj: " + fileObj);
            },
            finish: function (fileNames, fileList) {
                //console.log("finish");
                //console.log("fileNames = " + fileNames);
                //console.log("fileList = " + fileList);
                //cantArcActualDivArchivo = 0;

                //for (var fileId in this.fileList) {
                //    if (this.fileList.hasOwnProperty(fileId)) {
                //        //console.log("finish 01 fileId = " + fileId);
                //        //console.log("finish 01 this.fileList[fileId].name = " + this.fileList[fileId].name);
                //        //console.log("finish 01 this.fileList[fileId].file = " + this.fileList[fileId].file);//Objeto file
                //        //console.log("finish 01 this.fileList[fileId].file.path = " + this.fileList[fileId].file.path);
                //        //console.log("finish 01 this.fileList[fileId].file.type = " + this.fileList[fileId].file.type);
                //        //console.log("finish 01 this.fileList[fileId].temp_name = " + this.fileList[fileId].temp_name);
                //        //console.log("finish 01 this.fileList[fileId].size = " + this.fileList[fileId].size);
                //        //console.log("finish 01 this.fileList[fileId].status = " + this.fileList[fileId].status);
                //        //console.log("finish 01 this.fileList[fileId].checkSum = " + this.fileList[fileId].checkSum);
                //        //console.log("finish 01 this.fileList[fileId].info = " + this.fileList[fileId].info);
                //        //console.log("finish 01 this.fileList[fileId].path = " + this.fileList[fileId].path);
                //        cantArcActualDivArchivo++;
                //    }
                //}

                $('#cphContenido_hfConfigurationRadio').val(fileNames);

                //$.fn.validarDivArchivo();
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                //console.log("finishFile");
                //console.log("file = " + file);
                //console.log("msg = " + msg);
                //console.log("fileNames = " + fileNames);
                //console.log("fileNamesUploaded = " + fileNamesUploaded);
                $('#cphContenido_hfConfigurationRadio').val(fileNamesUploaded);
            },
            select: function (fileList) {
                //console.log("select");
            },
            removeAllFiles: function () {
                //console.log("inicio removeAllFiles asp");
                //cantArcActualDivArchivo = 0;

                //$.fn.validarDivArchivo();
                $('#cphContenido_hfConfigurationRadio').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                //console.log("inicio removeFile asp");
                //console.log("fileNames = " + fileNames);
                //console.log("fileNamesUploaded = " + fileNamesUploaded);
                //cantArcActualDivArchivo = 0;
                //for (var fileId in this.fileList) {
                //    if (this.fileList.hasOwnProperty(fileId)) {
                //        console.log("removeFile 01 fileId = " + fileId);
                //        console.log("removeFile 01 this.fileList[fileId].name = " + this.fileList[fileId].name);
                //        console.log("removeFile 01 this.fileList[fileId].file = " + this.fileList[fileId].file);//Objeto file
                //        console.log("removeFile 01 this.fileList[fileId].file.path = " + this.fileList[fileId].file.path);
                //        console.log("removeFile 01 this.fileList[fileId].temp_name = " + this.fileList[fileId].temp_name);
                //        console.log("removeFile 01 this.fileList[fileId].size = " + this.fileList[fileId].size);
                //        console.log("removeFile 01 this.fileList[fileId].status = " + this.fileList[fileId].status);
                //        console.log("removeFile 01 this.fileList[fileId].checkSum = " + this.fileList[fileId].checkSum);
                //        console.log("removeFile 01 this.fileList[fileId].info = " + this.fileList[fileId].info);
                //        console.log("removeFile 01 this.fileList[fileId].path = " + this.fileList[fileId].path);
                //        //cantArcActualDivArchivo++;
                //    }
                //}
                //$.fn.validarDivArchivo();
                //console.log("inicio removeFile cantArcActualDivArchivo = " + cantArcActualDivArchivo);
                $('#cphContenido_hfConfigurationRadio').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfigurationRadio').val() != "") {
        divConfigurationRadio.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfigurationRadio').val(), $('#cphContenido_hfConfigurationRadio').val());
    }

    $("#cphContenido_chkConfigurationRadio").trigger("change");

    // #endregion

    // #region Capt 2: Configuration/QoS

    $('#cphContenido_chkConfigurationQoS').change(function () {
        var blnActivo = $("#cphContenido_chkConfigurationQoS").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfigurationQoS, "#divConfigurationQoS");
        else
            habilitarRealUploader(true, divConfigurationQoS, "#divConfigurationQoS");
    });

    poConfigurationQoSComentario = $("#spConfigurationQoSComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfigurationQoSComentario').html();
        }
    });

    poConfigurationQoSComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfigurationQoSComentario.on('shown.bs.popover', function () {
        $("#txtConfigurationQoSComentario").val($("#cphContenido_hfConfigurationQoSComentario").val());
        $("#txtConfigurationQoSComentario").focus();
        $("#txtConfigurationQoSComentario").keyup(function () {
            $("#cphContenido_hfConfigurationQoSComentario").val($(this).val());
        });
    });

    var divConfigurationQoS = new RealUploader("#divConfigurationQoS", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfigurationQoS').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfigurationQoS').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConfigurationQoS').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfigurationQoS').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfigurationQoS').val() != "") {
        divConfigurationQoS.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfigurationQoS').val(), $('#cphContenido_hfConfigurationQoS').val());
    }

    $("#cphContenido_chkConfigurationQoS").trigger("change");

    // #endregion

    // #region Capt 3.01: Configuration/System

    $('#cphContenido_chkConfigurationSystem01').change(function () {
        var blnActivo = $("#cphContenido_chkConfigurationSystem01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfigurationSystem01, "#divConfigurationSystem01");
        else
            habilitarRealUploader(true, divConfigurationSystem01, "#divConfigurationSystem01");
    });

    poConfigurationSystem01Comentario = $("#spConfigurationSystem01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConfigurationSystem01Comentario').html();
        }
    });

    poConfigurationSystem01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfigurationSystem01Comentario.on('shown.bs.popover', function () {
        $("#txtConfigurationSystem01Comentario").val($("#cphContenido_hfConfigurationSystem01Comentario").val());
        $("#txtConfigurationSystem01Comentario").focus();
        $("#txtConfigurationSystem01Comentario").keyup(function () {
            $("#cphContenido_hfConfigurationSystem01Comentario").val($(this).val());
        });
    });

    var divConfigurationSystem01 = new RealUploader("#divConfigurationSystem01", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfigurationSystem01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfigurationSystem01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConfigurationSystem01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfigurationSystem01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfigurationSystem01').val() != "") {
        divConfigurationSystem01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfigurationSystem01').val(), $('#cphContenido_hfConfigurationSystem01').val());
    }

    $("#cphContenido_chkConfigurationSystem01").trigger("change");

    // #endregion

    // #region Capt 3.02: Configuration/System

    $('#cphContenido_chkConfigurationSystem02').change(function () {
        var blnActivo = $("#cphContenido_chkConfigurationSystem02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfigurationSystem02, "#divConfigurationSystem02");
        else
            habilitarRealUploader(true, divConfigurationSystem02, "#divConfigurationSystem02");
    });

    poConfigurationSystem02Comentario = $("#spConfigurationSystem02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConfigurationSystem02Comentario').html();
        }
    });

    poConfigurationSystem02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfigurationSystem02Comentario.on('shown.bs.popover', function () {
        $("#txtConfigurationSystem02Comentario").val($("#cphContenido_hfConfigurationSystem02Comentario").val());
        $("#txtConfigurationSystem02Comentario").focus();
        $("#txtConfigurationSystem02Comentario").keyup(function () {
            $("#cphContenido_hfConfigurationSystem02Comentario").val($(this).val());
        });
    });

    var divConfigurationSystem02 = new RealUploader("#divConfigurationSystem02", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfConfigurationSystem02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfigurationSystem02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConfigurationSystem02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfigurationSystem02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfigurationSystem02').val() != "") {
        divConfigurationSystem02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfigurationSystem02').val(), $('#cphContenido_hfConfigurationSystem02').val());
    }

    $("#cphContenido_chkConfigurationSystem02").trigger("change");

    // #endregion

    // #region Capt 4: Monitor/System

    $('#cphContenido_chkMonitorSystem').change(function () {
        var blnActivo = $("#cphContenido_chkMonitorSystem").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMonitorSystem, "#divMonitorSystem");
        else
            habilitarRealUploader(true, divMonitorSystem, "#divMonitorSystem");
    });

    poMonitorSystemComentario = $("#spMonitorSystemComentario").popover({
        html: true,
        content: function () {
            return $('#pocMonitorSystemComentario').html();
        }
    });

    poMonitorSystemComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMonitorSystemComentario.on('shown.bs.popover', function () {
        $("#txtMonitorSystemComentario").val($("#cphContenido_hfMonitorSystemComentario").val());
        $("#txtMonitorSystemComentario").focus();
        $("#txtMonitorSystemComentario").keyup(function () {
            $("#cphContenido_hfMonitorSystemComentario").val($(this).val());
        });
    });

    var divMonitorSystem = new RealUploader("#divMonitorSystem", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfMonitorSystem').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMonitorSystem').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMonitorSystem').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMonitorSystem').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMonitorSystem').val() != "") {
        divMonitorSystem.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMonitorSystem').val(), $('#cphContenido_hfMonitorSystem').val());
    }

    $("#cphContenido_chkMonitorSystem").trigger("change");

    // #endregion

    // #region Capt 5.01: Monitor/Wireless

    $('#cphContenido_chkMonitorWireless01').change(function () {
        var blnActivo = $("#cphContenido_chkMonitorWireless01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMonitorWireless01, "#divMonitorWireless01");
        else
            habilitarRealUploader(true, divMonitorWireless01, "#divMonitorWireless01");
    });

    poMonitorWireless01Comentario = $("#spMonitorWireless01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocMonitorWireless01Comentario').html();
        }
    });

    poMonitorWireless01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMonitorWireless01Comentario.on('shown.bs.popover', function () {
        $("#txtMonitorWireless01Comentario").val($("#cphContenido_hfMonitorWireless01Comentario").val());
        $("#txtMonitorWireless01Comentario").focus();
        $("#txtMonitorWireless01Comentario").keyup(function () {
            $("#cphContenido_hfMonitorWireless01Comentario").val($(this).val());
        });
    });

    var divMonitorWireless01 = new RealUploader("#divMonitorWireless01", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfMonitorWireless01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMonitorWireless01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMonitorWireless01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMonitorWireless01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMonitorWireless01').val() != "") {
        divMonitorWireless01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMonitorWireless01').val(), $('#cphContenido_hfMonitorWireless01').val());
    }

    $("#cphContenido_chkMonitorWireless01").trigger("change");

    // #endregion

    // #region Capt 5.02: Monitor/Wireless

    $('#cphContenido_chkMonitorWireless02').change(function () {
        var blnActivo = $("#cphContenido_chkMonitorWireless02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMonitorWireless02, "#divMonitorWireless02");
        else
            habilitarRealUploader(true, divMonitorWireless02, "#divMonitorWireless02");
    });

    poMonitorWireless02Comentario = $("#spMonitorWireless02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocMonitorWireless02Comentario').html();
        }
    });

    poMonitorWireless02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMonitorWireless02Comentario.on('shown.bs.popover', function () {
        $("#txtMonitorWireless02Comentario").val($("#cphContenido_hfMonitorWireless02Comentario").val());
        $("#txtMonitorWireless02Comentario").focus();
        $("#txtMonitorWireless02Comentario").keyup(function () {
            $("#cphContenido_hfMonitorWireless02Comentario").val($(this).val());
        });
    });

    var divMonitorWireless02 = new RealUploader("#divMonitorWireless02", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfMonitorWireless02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMonitorWireless02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMonitorWireless02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMonitorWireless02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMonitorWireless02').val() != "") {
        divMonitorWireless02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMonitorWireless02').val(), $('#cphContenido_hfMonitorWireless02').val());
    }

    $("#cphContenido_chkMonitorWireless02").trigger("change");

    // #endregion

    // #region Capt 6: Tools/Wireless link test

    $('#cphContenido_chkToolsWireless').change(function () {
        var blnActivo = $("#cphContenido_chkToolsWireless").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divToolsWireless, "#divToolsWireless");
        else
            habilitarRealUploader(true, divToolsWireless, "#divToolsWireless");
    });

    poToolsWirelessComentario = $("#spToolsWirelessComentario").popover({
        html: true,
        content: function () {
            return $('#pocToolsWirelessComentario').html();
        }
    });

    poToolsWirelessComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poToolsWirelessComentario.on('shown.bs.popover', function () {
        $("#txtToolsWirelessComentario").val($("#cphContenido_hfToolsWirelessComentario").val());
        $("#txtToolsWirelessComentario").focus();
        $("#txtToolsWirelessComentario").keyup(function () {
            $("#cphContenido_hfToolsWirelessComentario").val($(this).val());
        });
    });

    var divToolsWireless = new RealUploader("#divToolsWireless", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfToolsWireless').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfToolsWireless').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfToolsWireless').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfToolsWireless').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfToolsWireless').val() != "") {
        divToolsWireless.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfToolsWireless').val(), $('#cphContenido_hfToolsWireless').val());
    }

    $("#cphContenido_chkToolsWireless").trigger("change");

    // #endregion

    // #region Capt 7: Pantalla Home

    $('#cphContenido_chkPantallaHome').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaHome").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaHome, "#divPantallaHome");
        else
            habilitarRealUploader(true, divPantallaHome, "#divPantallaHome");
    });

    poPantallaHomeComentario = $("#spPantallaHomeComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaHomeComentario').html();
        }
    });

    poPantallaHomeComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaHomeComentario.on('shown.bs.popover', function () {
        $("#txtPantallaHomeComentario").val($("#cphContenido_hfPantallaHomeComentario").val());
        $("#txtPantallaHomeComentario").focus();
        $("#txtPantallaHomeComentario").keyup(function () {
            $("#cphContenido_hfPantallaHomeComentario").val($(this).val());
        });
    });

    var divPantallaHome = new RealUploader("#divPantallaHome", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPantallaHome').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaHome').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaHome').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaHome').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaHome').val() != "") {
        divPantallaHome.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaHome').val(), $('#cphContenido_hfPantallaHome').val());
    }

    $("#cphContenido_chkPantallaHome").trigger("change");

    // #endregion

    // #endregion
    
    // #region 2 Materiales AP

    // #region Tipo Fuente

    //$('#cphContenido_chkTipoFuente').change(function () {
    //    var blnActivo = $("#cphContenido_chkTipoFuente").prop("checked");
    //    if (blnActivo) {
    //        $('#cphContenido_ddlTipoFuente').prop('disabled', true);
    //    }
    //    else {
    //        $('#cphContenido_ddlTipoFuente').prop('disabled', false);
    //    }
    //    $.fn.validarDdlTipoFuente();
    //});

    poTipoFuenteComentario = $("#spTipoFuenteComentario").popover({
        html: true,
        content: function () {
            return $('#pocTipoFuenteComentario').html();
        }
    });

    poTipoFuenteComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTipoFuenteComentario.on('shown.bs.popover', function () {
        $("#txtTipoFuenteComentario").val($("#cphContenido_hfTipoFuenteComentario").val());
        $("#txtTipoFuenteComentario").focus();
        $("#txtTipoFuenteComentario").keyup(function () {
            $("#cphContenido_hfTipoFuenteComentario").val($(this).val());
        });
    });

    //$('#cphContenido_ddlTipoFuente').change(function () {
    //    $.fn.validarDdlTipoFuente();
    //});

    $("#cphContenido_chkTipoFuente").trigger("change");

    // #endregion

    // #region Equipamientos

    //$('#cphContenido_chkEquipamientos').change(function () {
    //    var blnActivo = $("#cphContenido_chkEquipamientos").prop("checked");
    //    if (blnActivo) {
    //        $("#cphContenido_gvEquipamientos input[id^=cphContenido_gvEquipamientos_txtSerieEquipamiento]").each(function () {
    //            $(this).prop('disabled', true);
    //        })
    //    }
    //    else {
    //        $("#cphContenido_gvEquipamientos input[id^=cphContenido_gvEquipamientos_txtSerieEquipamiento]").each(function () {
    //            $(this).prop('disabled', false);
    //        })
    //    }
    //    $.fn.validarDdlTipoFuente();
    //});

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

    $("#cphContenido_chkEquipamientos").trigger("change");

    // #endregion

    // #region Materiales

    $('#cphContenido_chkMateriales').change(function () {
        var blnActivo = $("#cphContenido_chkMateriales").prop("checked");
        if (blnActivo) {
            $("#cphContenido_gvMateriales input[id^=cphContenido_gvMateriales_txtCantidad]").each(function () {
                $(this).prop('disabled', true);
            });
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
    
    /*
    // #region 3 SFTP

    // #region B

    $('#cphContenido_chkB').change(function () {
        var blnActivo = $("#cphContenido_chkB").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtB').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtB').prop('disabled', false);
        }
    });

    poBComentario = $("#spBComentario").popover({
        html: true,
        content: function () {
            return $('#pocBComentario').html();
        }
    });

    poBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poBComentario.on('shown.bs.popover', function () {
        $("#txtBComentario").val($("#cphContenido_hfBComentario").val());
        $("#txtBComentario").focus();
        $("#txtBComentario").keyup(function () {
            $("#cphContenido_hfBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkB").trigger("change");

    // #endregion

    // #region C

    $('#cphContenido_chkC').change(function () {
        var blnActivo = $("#cphContenido_chkC").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtC').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtC').prop('disabled', false);
        }
    });

    poCComentario = $("#spCComentario").popover({
        html: true,
        content: function () {
            return $('#pocCComentario').html();
        }
    });

    poCComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCComentario.on('shown.bs.popover', function () {
        $("#txtCComentario").val($("#cphContenido_hfCComentario").val());
        $("#txtCComentario").focus();
        $("#txtCComentario").keyup(function () {
            $("#cphContenido_hfCComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkC").trigger("change");

    // #endregion

    // #region D

    $('#cphContenido_chkD').change(function () {
        var blnActivo = $("#cphContenido_chkD").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtD').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtD').prop('disabled', false);
        }
    });

    poDComentario = $("#spDComentario").popover({
        html: true,
        content: function () {
            return $('#pocDComentario').html();
        }
    });

    poDComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDComentario.on('shown.bs.popover', function () {
        $("#txtDComentario").val($("#cphContenido_hfDComentario").val());
        $("#txtDComentario").focus();
        $("#txtDComentario").keyup(function () {
            $("#cphContenido_hfDComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkD").trigger("change");

    // #endregion

    // #region E

    $('#cphContenido_chkE').change(function () {
        var blnActivo = $("#cphContenido_chkE").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtE').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtE').prop('disabled', false);
        }
    });

    poEComentario = $("#spEComentario").popover({
        html: true,
        content: function () {
            return $('#pocEComentario').html();
        }
    });

    poEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEComentario.on('shown.bs.popover', function () {
        $("#txtEComentario").val($("#cphContenido_hfEComentario").val());
        $("#txtEComentario").focus();
        $("#txtEComentario").keyup(function () {
            $("#cphContenido_hfEComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkE").trigger("change");

    // #endregion

    // #endregion
     */

    // #region 7 Reporte Fotográfico

    // #region Foto 1: Panorámica Estacion A

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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPanoramicaEstacionA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaEstacionA').val(fileNamesUploaded);
            },
            select: function (fileList) { },
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

    // #region Foto 2: Posición Antena Instalada

    $('#cphContenido_chkPosicionAntena').change(function () {
        var blnActivo = $("#cphContenido_chkPosicionAntena").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPosicionAntena, "#divPosicionAntena");
        else
            habilitarRealUploader(true, divPosicionAntena, "#divPosicionAntena");
    });

    poPosicionAntenaComentario = $("#spPosicionAntenaComentario").popover({
        html: true,
        content: function () {
            return $('#pocPosicionAntenaComentario').html();
        }
    });

    poPosicionAntenaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPosicionAntenaComentario.on('shown.bs.popover', function () {
        $("#txtPosicionAntenaComentario").val($("#cphContenido_hfPosicionAntenaComentario").val());
        $("#txtPosicionAntenaComentario").focus();
        $("#txtPosicionAntenaComentario").keyup(function () {
            $("#cphContenido_hfPosicionAntenaComentario").val($(this).val());
        });
    });

    var divPosicionAntena = new RealUploader("#divPosicionAntena", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPosicionAntena').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPosicionAntena').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPosicionAntena').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPosicionAntena').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPosicionAntena').val() != "") {
        divPosicionAntena.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPosicionAntena').val(), $('#cphContenido_hfPosicionAntena').val());
    }

    $("#cphContenido_chkPosicionAntena").trigger("change");

    // #endregion

    // #region Foto 3: Antena ODU Torre

    $('#cphContenido_chkAntenaODU').change(function () {
        var blnActivo = $("#cphContenido_chkAntenaODU").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAntenaODU, "#divAntenaODU");
        else
            habilitarRealUploader(true, divAntenaODU, "#divAntenaODU");
    });

    poAntenaODUComentario = $("#spAntenaODUComentario").popover({
        html: true,
        content: function () {
            return $('#pocAntenaODUComentario').html();
        }
    });

    poAntenaODUComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAntenaODUComentario.on('shown.bs.popover', function () {
        $("#txtAntenaODUComentario").val($("#cphContenido_hfAntenaODUComentario").val());
        $("#txtAntenaODUComentario").focus();
        $("#txtAntenaODUComentario").keyup(function () {
            $("#cphContenido_hfAntenaODUComentario").val($(this).val());
        });
    });

    var divAntenaODU = new RealUploader("#divAntenaODU", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAntenaODU').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAntenaODU').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAntenaODU').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAntenaODU').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAntenaODU').val() != "") {
        divAntenaODU.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAntenaODU').val(), $('#cphContenido_hfAntenaODU').val());
    }

    $("#cphContenido_chkAntenaODU").trigger("change");

    // #endregion

    // #region Foto 4: UGPS

    $('#cphContenido_chkUGPS').change(function () {
        var blnActivo = $("#cphContenido_chkUGPS").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divUGPS, "#divUGPS");
        else
            habilitarRealUploader(true, divUGPS, "#divUGPS");
    });

    poUGPSComentario = $("#spUGPSComentario").popover({
        html: true,
        content: function () {
            return $('#pocUGPSComentario').html();
        }
    });

    poUGPSComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poUGPSComentario.on('shown.bs.popover', function () {
        $("#txtUGPSComentario").val($("#cphContenido_hfUGPSComentario").val());
        $("#txtUGPSComentario").focus();
        $("#txtUGPSComentario").keyup(function () {
            $("#cphContenido_hfUGPSComentario").val($(this).val());
        });
    });

    var divUGPS = new RealUploader("#divUGPS", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfUGPS').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfUGPS').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfUGPS').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfUGPS').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfUGPS').val() != "") {
        divUGPS.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfUGPS').val(), $('#cphContenido_hfUGPS').val());
    }

    $("#cphContenido_chkUGPS").trigger("change");

    // #endregion

    // #region Foto 5: Engrasado Perno

    $('#cphContenido_chkEngrasadoPerno').change(function () {
        var blnActivo = $("#cphContenido_chkEngrasadoPerno").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEngrasadoPerno, "#divEngrasadoPerno");
        else
            habilitarRealUploader(true, divEngrasadoPerno, "#divEngrasadoPerno");
    });

    poEngrasadoPernoComentario = $("#spEngrasadoPernoComentario").popover({
        html: true,
        content: function () {
            return $('#pocEngrasadoPernoComentario').html();
        }
    });

    poEngrasadoPernoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEngrasadoPernoComentario.on('shown.bs.popover', function () {
        $("#txtEngrasadoPernoComentario").val($("#cphContenido_hfEngrasadoPernoComentario").val());
        $("#txtEngrasadoPernoComentario").focus();
        $("#txtEngrasadoPernoComentario").keyup(function () {
            $("#cphContenido_hfEngrasadoPernoComentario").val($(this).val());
        });
    });

    var divEngrasadoPerno = new RealUploader("#divEngrasadoPerno", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEngrasadoPerno').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEngrasadoPerno').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEngrasadoPerno').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEngrasadoPerno').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEngrasadoPerno').val() != "") {
        divEngrasadoPerno.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEngrasadoPerno').val(), $('#cphContenido_hfEngrasadoPerno').val());
    }

    $("#cphContenido_chkEngrasadoPerno").trigger("change");

    // #endregion

    // #region Foto 6: Siliconeado Etiquetado Conector

    $('#cphContenido_chkSiliconeadoEtiquetadoConector').change(function () {
        var blnActivo = $("#cphContenido_chkSiliconeadoEtiquetadoConector").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSiliconeadoEtiquetadoConector, "#divSiliconeadoEtiquetadoConector");
        else
            habilitarRealUploader(true, divSiliconeadoEtiquetadoConector, "#divSiliconeadoEtiquetadoConector");
    });

    poSiliconeadoEtiquetadoConectorComentario = $("#spSiliconeadoEtiquetadoConectorComentario").popover({
        html: true,
        content: function () {
            return $('#pocSiliconeadoEtiquetadoConectorComentario').html();
        }
    });

    poSiliconeadoEtiquetadoConectorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSiliconeadoEtiquetadoConectorComentario.on('shown.bs.popover', function () {
        $("#txtSiliconeadoEtiquetadoConectorComentario").val($("#cphContenido_hfSiliconeadoEtiquetadoConectorComentario").val());
        $("#txtSiliconeadoEtiquetadoConectorComentario").focus();
        $("#txtSiliconeadoEtiquetadoConectorComentario").keyup(function () {
            $("#cphContenido_hfSiliconeadoEtiquetadoConectorComentario").val($(this).val());
        });
    });

    var divSiliconeadoEtiquetadoConector = new RealUploader("#divSiliconeadoEtiquetadoConector", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSiliconeadoEtiquetadoConector').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSiliconeadoEtiquetadoConector').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSiliconeadoEtiquetadoConector').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSiliconeadoEtiquetadoConector').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSiliconeadoEtiquetadoConector').val() != "") {
        divSiliconeadoEtiquetadoConector.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSiliconeadoEtiquetadoConector').val(), $('#cphContenido_hfSiliconeadoEtiquetadoConector').val());
    }

    $("#cphContenido_chkSiliconeadoEtiquetadoConector").trigger("change");

    // #endregion

    // #region Foto 8: Recorrido Cable SFTP

    $('#cphContenido_chkRecorridoCableSFTP').change(function () {
        var blnActivo = $("#cphContenido_chkRecorridoCableSFTP").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRecorridoCableSFTP, "#divRecorridoCableSFTP");
        else
            habilitarRealUploader(true, divRecorridoCableSFTP, "#divRecorridoCableSFTP");
    });

    poRecorridoCableSFTPComentario = $("#spRecorridoCableSFTPComentario").popover({
        html: true,
        content: function () {
            return $('#pocRecorridoCableSFTPComentario').html();
        }
    });

    poRecorridoCableSFTPComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRecorridoCableSFTPComentario.on('shown.bs.popover', function () {
        $("#txtRecorridoCableSFTPComentario").val($("#cphContenido_hfRecorridoCableSFTPComentario").val());
        $("#txtRecorridoCableSFTPComentario").focus();
        $("#txtRecorridoCableSFTPComentario").keyup(function () {
            $("#cphContenido_hfRecorridoCableSFTPComentario").val($(this).val());
        });
    });

    var divRecorridoCableSFTP = new RealUploader("#divRecorridoCableSFTP", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfRecorridoCableSFTP').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableSFTP').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfRecorridoCableSFTP').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoCableSFTP').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRecorridoCableSFTP').val() != "") {
        divRecorridoCableSFTP.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRecorridoCableSFTP').val(), $('#cphContenido_hfRecorridoCableSFTP').val());
    }

    $("#cphContenido_chkRecorridoCableSFTP").trigger("change");

    // #endregion

    // #region Foto 9: Aterramiento Cable SFTP Outdoor

    $('#cphContenido_chkAterramientoCableSFTPOutdoor').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTPOutdoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTPOutdoor, "#divAterramientoCableSFTPOutdoor");
        else
            habilitarRealUploader(true, divAterramientoCableSFTPOutdoor, "#divAterramientoCableSFTPOutdoor");
    });

    poAterramientoCableSFTPOutdoorComentario = $("#spAterramientoCableSFTPOutdoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTPOutdoorComentario').html();
        }
    });

    poAterramientoCableSFTPOutdoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTPOutdoorComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTPOutdoorComentario").val($("#cphContenido_hfAterramientoCableSFTPOutdoorComentario").val());
        $("#txtAterramientoCableSFTPOutdoorComentario").focus();
        $("#txtAterramientoCableSFTPOutdoorComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTPOutdoorComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTPOutdoor = new RealUploader("#divAterramientoCableSFTPOutdoor", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoCableSFTPOutdoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPOutdoor').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTPOutdoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPOutdoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTPOutdoor').val() != "") {
        divAterramientoCableSFTPOutdoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTPOutdoor').val(), $('#cphContenido_hfAterramientoCableSFTPOutdoor').val());
    }

    $("#cphContenido_chkAterramientoCableSFTPOutdoor").trigger("change");

    // #endregion

    // #region Foto 10: Aterramiento Cable SFTP Indoor

    $('#cphContenido_chkAterramientoCableSFTPIndoor').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoCableSFTPIndoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoCableSFTPIndoor, "#divAterramientoCableSFTPIndoor");
        else
            habilitarRealUploader(true, divAterramientoCableSFTPIndoor, "#divAterramientoCableSFTPIndoor");
    });

    poAterramientoCableSFTPIndoorComentario = $("#spAterramientoCableSFTPIndoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoCableSFTPIndoorComentario').html();
        }
    });

    poAterramientoCableSFTPIndoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoCableSFTPIndoorComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoCableSFTPIndoorComentario").val($("#cphContenido_hfAterramientoCableSFTPIndoorComentario").val());
        $("#txtAterramientoCableSFTPIndoorComentario").focus();
        $("#txtAterramientoCableSFTPIndoorComentario").keyup(function () {
            $("#cphContenido_hfAterramientoCableSFTPIndoorComentario").val($(this).val());
        });
    });

    var divAterramientoCableSFTPIndoor = new RealUploader("#divAterramientoCableSFTPIndoor", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoCableSFTPIndoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoCableSFTPIndoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoCableSFTPIndoor').val() != "") {
        divAterramientoCableSFTPIndoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoCableSFTPIndoor').val(), $('#cphContenido_hfAterramientoCableSFTPIndoor').val());
    }

    $("#cphContenido_chkAterramientoCableSFTPIndoor").trigger("change");

    // #endregion

    // #region Foto 11: Etiquetado POE

    $('#cphContenido_chkEtiquetadoPOE').change(function () {
        var blnActivo = $("#cphContenido_chkEtiquetadoPOE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEtiquetadoPOE, "#divEtiquetadoPOE");
        else
            habilitarRealUploader(true, divEtiquetadoPOE, "#divEtiquetadoPOE");
    });

    poEtiquetadoPOEComentario = $("#spEtiquetadoPOEComentario").popover({
        html: true,
        content: function () {
            return $('#pocEtiquetadoPOEComentario').html();
        }
    });

    poEtiquetadoPOEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEtiquetadoPOEComentario.on('shown.bs.popover', function () {
        $("#txtEtiquetadoPOEComentario").val($("#cphContenido_hfEtiquetadoPOEComentario").val());
        $("#txtEtiquetadoPOEComentario").focus();
        $("#txtEtiquetadoPOEComentario").keyup(function () {
            $("#cphContenido_hfEtiquetadoPOEComentario").val($(this).val());
        });
    });

    var divEtiquetadoPOE = new RealUploader("#divEtiquetadoPOE", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEtiquetadoPOE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPOE').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEtiquetadoPOE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEtiquetadoPOE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEtiquetadoPOE').val() != "") {
        divEtiquetadoPOE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEtiquetadoPOE').val(), $('#cphContenido_hfEtiquetadoPOE').val());
    }

    $("#cphContenido_chkEtiquetadoPOE").trigger("change");

    // #endregion

    // #region Foto 12: Panorámica Rack

    $('#cphContenido_chkPanoramicaRack').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaRack").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaRack, "#divPanoramicaRack");
        else
            habilitarRealUploader(true, divPanoramicaRack, "#divPanoramicaRack");
    });

    poPanoramicaRackComentario = $("#spPanoramicaRackComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaRackComentario').html();
        }
    });

    poPanoramicaRackComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaRackComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaRackComentario").val($("#cphContenido_hfPanoramicaRackComentario").val());
        $("#txtPanoramicaRackComentario").focus();
        $("#txtPanoramicaRackComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaRackComentario").val($(this).val());
        });
    });

    var divPanoramicaRack = new RealUploader("#divPanoramicaRack", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPanoramicaRack').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRack').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaRack').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRack').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaRack').val() != "") {
        divPanoramicaRack.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaRack').val(), $('#cphContenido_hfPanoramicaRack').val());
    }

    $("#cphContenido_chkPanoramicaRack").trigger("change");

    // #endregion

    // #region Foto 13: Aterramiento POE

    $('#cphContenido_chkAterramientoPOE').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoPOE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoPOE, "#divAterramientoPOE");
        else
            habilitarRealUploader(true, divAterramientoPOE, "#divAterramientoPOE");
    });

    poAterramientoPOEComentario = $("#spAterramientoPOEComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoPOEComentario').html();
        }
    });

    poAterramientoPOEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoPOEComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoPOEComentario").val($("#cphContenido_hfAterramientoPOEComentario").val());
        $("#txtAterramientoPOEComentario").focus();
        $("#txtAterramientoPOEComentario").keyup(function () {
            $("#cphContenido_hfAterramientoPOEComentario").val($(this).val());
        });
    });

    var divAterramientoPOE = new RealUploader("#divAterramientoPOE", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoPOE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoPOE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoPOE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoPOE').val() != "") {
        divAterramientoPOE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoPOE').val(), $('#cphContenido_hfAterramientoPOE').val());
    }

    $("#cphContenido_chkAterramientoPOE").trigger("change");

    // #endregion

    // #region Foto 14.01: Emergencia POE Etiqueta

    $('#cphContenido_chkEmergenciaPOEEtiqueta01').change(function () {
        var blnActivo = $("#cphContenido_chkEmergenciaPOEEtiqueta01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEmergenciaPOEEtiqueta01, "#divEmergenciaPOEEtiqueta01");
        else
            habilitarRealUploader(true, divEmergenciaPOEEtiqueta01, "#divEmergenciaPOEEtiqueta01");
    });

    poEmergenciaPOEEtiqueta01Comentario = $("#spEmergenciaPOEEtiqueta01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEmergenciaPOEEtiqueta01Comentario').html();
        }
    });

    poEmergenciaPOEEtiqueta01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEmergenciaPOEEtiqueta01Comentario.on('shown.bs.popover', function () {
        $("#txtEmergenciaPOEEtiqueta01Comentario").val($("#cphContenido_hfEmergenciaPOEEtiqueta01Comentario").val());
        $("#txtEmergenciaPOEEtiqueta01Comentario").focus();
        $("#txtEmergenciaPOEEtiqueta01Comentario").keyup(function () {
            $("#cphContenido_hfEmergenciaPOEEtiqueta01Comentario").val($(this).val());
        });
    });

    var divEmergenciaPOEEtiqueta01 = new RealUploader("#divEmergenciaPOEEtiqueta01", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEmergenciaPOEEtiqueta01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEmergenciaPOEEtiqueta01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEmergenciaPOEEtiqueta01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEmergenciaPOEEtiqueta01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEmergenciaPOEEtiqueta01').val() != "") {
        divEmergenciaPOEEtiqueta01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEmergenciaPOEEtiqueta01').val(), $('#cphContenido_hfEmergenciaPOEEtiqueta01').val());
    }

    $("#cphContenido_chkEmergenciaPOEEtiqueta01").trigger("change");

    // #endregion

    // #region Foto 14.02: Emergencia POE Etiqueta

    $('#cphContenido_chkEmergenciaPOEEtiqueta02').change(function () {
        var blnActivo = $("#cphContenido_chkEmergenciaPOEEtiqueta02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEmergenciaPOEEtiqueta02, "#divEmergenciaPOEEtiqueta02");
        else
            habilitarRealUploader(true, divEmergenciaPOEEtiqueta02, "#divEmergenciaPOEEtiqueta02");
    });

    poEmergenciaPOEEtiqueta02Comentario = $("#spEmergenciaPOEEtiqueta02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEmergenciaPOEEtiqueta02Comentario').html();
        }
    });

    poEmergenciaPOEEtiqueta02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEmergenciaPOEEtiqueta02Comentario.on('shown.bs.popover', function () {
        $("#txtEmergenciaPOEEtiqueta02Comentario").val($("#cphContenido_hfEmergenciaPOEEtiqueta02Comentario").val());
        $("#txtEmergenciaPOEEtiqueta02Comentario").focus();
        $("#txtEmergenciaPOEEtiqueta02Comentario").keyup(function () {
            $("#cphContenido_hfEmergenciaPOEEtiqueta02Comentario").val($(this).val());
        });
    });

    var divEmergenciaPOEEtiqueta02 = new RealUploader("#divEmergenciaPOEEtiqueta02", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfEmergenciaPOEEtiqueta02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEmergenciaPOEEtiqueta02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEmergenciaPOEEtiqueta02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEmergenciaPOEEtiqueta02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEmergenciaPOEEtiqueta02').val() != "") {
        divEmergenciaPOEEtiqueta02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEmergenciaPOEEtiqueta02').val(), $('#cphContenido_hfEmergenciaPOEEtiqueta02').val());
    }

    $("#cphContenido_chkEmergenciaPOEEtiqueta02").trigger("change");

    // #endregion

    // #region Foto 15: Patch Core Salida POE

    $('#cphContenido_chkPatchCoreSalidaPOE').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCoreSalidaPOE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCoreSalidaPOE, "#divPatchCoreSalidaPOE");
        else
            habilitarRealUploader(true, divPatchCoreSalidaPOE, "#divPatchCoreSalidaPOE");
    });

    poPatchCoreSalidaPOEComentario = $("#spPatchCoreSalidaPOEComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCoreSalidaPOEComentario').html();
        }
    });

    poPatchCoreSalidaPOEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCoreSalidaPOEComentario.on('shown.bs.popover', function () {
        $("#txtPatchCoreSalidaPOEComentario").val($("#cphContenido_hfPatchCoreSalidaPOEComentario").val());
        $("#txtPatchCoreSalidaPOEComentario").focus();
        $("#txtPatchCoreSalidaPOEComentario").keyup(function () {
            $("#cphContenido_hfPatchCoreSalidaPOEComentario").val($(this).val());
        });
    });

    var divPatchCoreSalidaPOE = new RealUploader("#divPatchCoreSalidaPOE", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPatchCoreSalidaPOE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreSalidaPOE').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCoreSalidaPOE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreSalidaPOE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCoreSalidaPOE').val() != "") {
        divPatchCoreSalidaPOE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCoreSalidaPOE').val(), $('#cphContenido_hfPatchCoreSalidaPOE').val());
    }

    $("#cphContenido_chkPatchCoreSalidaPOE").trigger("change");

    // #endregion

    // #region Foto 16: Patch Core Salida Switch

    $('#cphContenido_chkPatchCoreSalidaSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCoreSalidaSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCoreSalidaSwitch, "#divPatchCoreSalidaSwitch");
        else
            habilitarRealUploader(true, divPatchCoreSalidaSwitch, "#divPatchCoreSalidaSwitch");
    });

    poPatchCoreSalidaSwitchComentario = $("#spPatchCoreSalidaSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCoreSalidaSwitchComentario').html();
        }
    });

    poPatchCoreSalidaSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCoreSalidaSwitchComentario.on('shown.bs.popover', function () {
        $("#txtPatchCoreSalidaSwitchComentario").val($("#cphContenido_hfPatchCoreSalidaSwitchComentario").val());
        $("#txtPatchCoreSalidaSwitchComentario").focus();
        $("#txtPatchCoreSalidaSwitchComentario").keyup(function () {
            $("#cphContenido_hfPatchCoreSalidaSwitchComentario").val($(this).val());
        });
    });

    var divPatchCoreSalidaSwitch = new RealUploader("#divPatchCoreSalidaSwitch", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfPatchCoreSalidaSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreSalidaSwitch').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCoreSalidaSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCoreSalidaSwitch').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCoreSalidaSwitch').val() != "") {
        divPatchCoreSalidaSwitch.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCoreSalidaSwitch').val(), $('#cphContenido_hfPatchCoreSalidaSwitch').val());
    }

    $("#cphContenido_chkPatchCoreSalidaSwitch").trigger("change");

    // #endregion

    // #region Foto 17: Serie POE

    $('#cphContenido_chkSeriePOE').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePOE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePOE, "#divSeriePOE");
        else
            habilitarRealUploader(true, divSeriePOE, "#divSeriePOE");
    });

    poSeriePOEComentario = $("#spSeriePOEComentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePOEComentario').html();
        }
    });

    poSeriePOEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePOEComentario.on('shown.bs.popover', function () {
        $("#txtSeriePOEComentario").val($("#cphContenido_hfSeriePOEComentario").val());
        $("#txtSeriePOEComentario").focus();
        $("#txtSeriePOEComentario").keyup(function () {
            $("#cphContenido_hfSeriePOEComentario").val($(this).val());
        });
    });

    var divSeriePOE = new RealUploader("#divSeriePOE", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSeriePOE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePOE').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePOE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePOE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePOE').val() != "") {
        divSeriePOE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePOE').val(), $('#cphContenido_hfSeriePOE').val());
    }

    $("#cphContenido_chkSeriePOE").trigger("change");

    // #endregion

    // #region Foto 18: Serie AP

    $('#cphContenido_chkSerieAP').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAP").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAP, "#divSerieAP");
        else
            habilitarRealUploader(true, divSerieAP, "#divSerieAP");
    });

    poSerieAPComentario = $("#spSerieAPComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieAPComentario').html();
        }
    });

    poSerieAPComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieAPComentario.on('shown.bs.popover', function () {
        $("#txtSerieAPComentario").val($("#cphContenido_hfSerieAPComentario").val());
        $("#txtSerieAPComentario").focus();
        $("#txtSerieAPComentario").keyup(function () {
            $("#cphContenido_hfSerieAPComentario").val($(this).val());
        });
    });

    var divSerieAP = new RealUploader("#divSerieAP", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerieAP').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieAP').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieAP').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieAP').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieAP').val() != "") {
        divSerieAP.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieAP').val(), $('#cphContenido_hfSerieAP').val());
    }

    $("#cphContenido_chkSerieAP").trigger("change");

    // #endregion

    // #region Foto 19: Serie Antena

    $('#cphContenido_chkSerieAntena').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAntena").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAntena, "#divSerieAntena");
        else
            habilitarRealUploader(true, divSerieAntena, "#divSerieAntena");
    });

    poSerieAntenaComentario = $("#spSerieAntenaComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieAntenaComentario').html();
        }
    });

    poSerieAntenaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieAntenaComentario.on('shown.bs.popover', function () {
        $("#txtSerieAntenaComentario").val($("#cphContenido_hfSerieAntenaComentario").val());
        $("#txtSerieAntenaComentario").focus();
        $("#txtSerieAntenaComentario").keyup(function () {
            $("#cphContenido_hfSerieAntenaComentario").val($(this).val());
        });
    });

    var divSerieAntena = new RealUploader("#divSerieAntena", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSerieAntena').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieAntena').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieAntena').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieAntena').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieAntena').val() != "") {
        divSerieAntena.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieAntena').val(), $('#cphContenido_hfSerieAntena').val());
    }

    $("#cphContenido_chkSerieAntena").trigger("change");

    // #endregion

    // #endregion
    
    // #region 8 Datos Generales del Nodo

    //// #region # Serie ODU

    //$('#cphContenido_chkSerieODU').change(function () {
    //    var blnActivo = $("#cphContenido_chkSerieODU").prop("checked");
    //    if (blnActivo) {
    //        $('#cphContenido_txtSerieODU').prop('disabled', true);
    //    }
    //    else {
    //        $('#cphContenido_txtSerieODU').prop('disabled', false);
    //    }
    //});

    //poSerieODUComentario = $("#spSerieODUComentario").popover({
    //    html: true,
    //    content: function () {
    //        return $('#pocSerieODUComentario').html();
    //    }
    //});

    //poSerieODUComentario.on('show.bs.popover', function () {
    //    //Devuelve el popover: $(this).data("bs.popover").tip()
    //    $(this).data("bs.popover").tip().addClass('info');
    //    $(this).data("bs.popover").tip().css("max-width", "600px");
    //});

    //poSerieODUComentario.on('shown.bs.popover', function () {
    //    $("#txtSerieODUComentario").val($("#cphContenido_hfSerieODUComentario").val());
    //    $("#txtSerieODUComentario").focus();
    //    $("#txtSerieODUComentario").keyup(function () {
    //        $("#cphContenido_hfSerieODUComentario").val($(this).val());
    //    });
    //});

    //$("#cphContenido_chkSerieODU").trigger("change");

    //// #endregion

    //// #region # Serie Antena

    //$('#cphContenido_chkSerieNodoAntena').change(function () {
    //    var blnActivo = $("#cphContenido_chkSerieNodoAntena").prop("checked");
    //    if (blnActivo) {
    //        $('#cphContenido_txtSerieNodoAntena').prop('disabled', true);
    //    }
    //    else {
    //        $('#cphContenido_txtSerieNodoAntena').prop('disabled', false);
    //    }
    //});

    //poSerieNodoAntenaComentario = $("#spSerieNodoAntenaComentario").popover({
    //    html: true,
    //    content: function () {
    //        return $('#pocSerieNodoAntenaComentario').html();
    //    }
    //});

    //poSerieNodoAntenaComentario.on('show.bs.popover', function () {
    //    //Devuelve el popover: $(this).data("bs.popover").tip()
    //    $(this).data("bs.popover").tip().addClass('info');
    //    $(this).data("bs.popover").tip().css("max-width", "600px");
    //});

    //poSerieNodoAntenaComentario.on('shown.bs.popover', function () {
    //    $("#txtSerieNodoAntenaComentario").val($("#cphContenido_hfSerieNodoAntenaComentario").val());
    //    $("#txtSerieNodoAntenaComentario").focus();
    //    $("#txtSerieNodoAntenaComentario").keyup(function () {
    //        $("#cphContenido_hfSerieNodoAntenaComentario").val($(this).val());
    //    });
    //});

    //$("#cphContenido_chkSerieNodoAntena").trigger("change");

    //// #endregion

    // #region Mediciones de Enlaces de Propagación

    $('#cphContenido_chkMedicionEnlacePropagacion').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionEnlacePropagacion").prop("checked");
        if (blnActivo) {
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtRSSLocal]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtRSSRemoto]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtTiempoPromedio]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtCapacidadSubida]").each(function () {
                $(this).prop('disabled', true);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtCapacidadBajada]").each(function () {
                $(this).prop('disabled', true);
            })
        }
        else {
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtRSSLocal]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtRSSRemoto]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtTiempoPromedio]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtCapacidadSubida]").each(function () {
                $(this).prop('disabled', false);
            })
            $("input[id^=cphContenido_gvMedicionEnlacePropagacion_txtCapacidadBajada]").each(function () {
                $(this).prop('disabled', false);
            })
        }
    });

    poMedicionEnlacePropagacionComentario = $("#spMedicionEnlacePropagacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionEnlacePropagacionComentario').html();
        }
    });

    poMedicionEnlacePropagacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionEnlacePropagacionComentario.on('shown.bs.popover', function () {
        $("#txtMedicionEnlacePropagacionComentario").val($("#cphContenido_hfMedicionEnlacePropagacionComentario").val());
        $("#txtMedicionEnlacePropagacionComentario").focus();
        $("#txtMedicionEnlacePropagacionComentario").keyup(function () {
            $("#cphContenido_hfMedicionEnlacePropagacionComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkMedicionEnlacePropagacion").trigger("change");

    // #endregion

    // #endregion

    // #region Fotos Adicionales

    // #region Aterramiento de SA-LAN Outdoor

    $('#cphContenido_chkAterramientoSALANOutdoor').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoSALANOutdoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoSALANOutdoor, "#divAterramientoSALANOutdoor");
        else
            habilitarRealUploader(true, divAterramientoSALANOutdoor, "#divAterramientoSALANOutdoor");
    });

    poAterramientoSALANOutdoorComentario = $("#spAterramientoSALANOutdoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoSALANOutdoorComentario').html();
        }
    });

    poAterramientoSALANOutdoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoSALANOutdoorComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoSALANOutdoorComentario").val($("#cphContenido_hfAterramientoSALANOutdoorComentario").val());
        $("#txtAterramientoSALANOutdoorComentario").focus();
        $("#txtAterramientoSALANOutdoorComentario").keyup(function () {
            $("#cphContenido_hfAterramientoSALANOutdoorComentario").val($(this).val());
        });
    });

    var divAterramientoSALANOutdoor = new RealUploader("#divAterramientoSALANOutdoor", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfAterramientoSALANOutdoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSALANOutdoor').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoSALANOutdoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSALANOutdoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAterramientoSALANOutdoor').val() != "") {
        divAterramientoSALANOutdoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAterramientoSALANOutdoor').val(), $('#cphContenido_hfAterramientoSALANOutdoor').val());
    }

    $("#cphContenido_chkAterramientoSALANOutdoor").trigger("change");

    // #endregion

    // #region SA-LAN Outdoor

    $('#cphContenido_chkSALANOutdoor').change(function () {
        var blnActivo = $("#cphContenido_chkSALANOutdoor").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSALANOutdoor, "#divSALANOutdoor");
        else
            habilitarRealUploader(true, divSALANOutdoor, "#divSALANOutdoor");
    });

    poSALANOutdoorComentario = $("#spSALANOutdoorComentario").popover({
        html: true,
        content: function () {
            return $('#pocSALANOutdoorComentario').html();
        }
    });

    poSALANOutdoorComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSALANOutdoorComentario.on('shown.bs.popover', function () {
        $("#txtSALANOutdoorComentario").val($("#cphContenido_hfSALANOutdoorComentario").val());
        $("#txtSALANOutdoorComentario").focus();
        $("#txtSALANOutdoorComentario").keyup(function () {
            $("#cphContenido_hfSALANOutdoorComentario").val($(this).val());
        });
    });

    var divSALANOutdoor = new RealUploader("#divSALANOutdoor", {
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
            start: function (filesPending) { },
            startFile: function (fileObj) { },
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfSALANOutdoor').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSALANOutdoor').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSALANOutdoor').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSALANOutdoor').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSALANOutdoor').val() != "") {
        divSALANOutdoor.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSALANOutdoor').val(), $('#cphContenido_hfSALANOutdoor').val());
    }

    $("#cphContenido_chkSALANOutdoor").trigger("change");

    // #endregion

    // #endregion

    //$.fn.validarDdlTipoFuente();

    $("#cphContenido_btnGuardar").click(function () {
        //Validamos los campos
        var hasErrors = false;
        var cantError = 0;

        $("#cphContenido_gvMedicionEnlacePropagacion input[id^=cphContenido_gvMedicionEnlacePropagacion_txtRSSLocal]").each(function () {
            hasErrors = $.fn.validarTxtRSSLocal($(this));
            if (hasErrors)
                cantError++;
        });

        $("#cphContenido_gvMedicionEnlacePropagacion input[id^=cphContenido_gvMedicionEnlacePropagacion_txtRSSRemoto]").each(function () {
            hasErrors = $.fn.validarTxtRSSRemoto($(this));
            if (hasErrors)
                cantError++;
        });

        $("#cphContenido_gvMedicionEnlacePropagacion input[id^=cphContenido_gvMedicionEnlacePropagacion_txtTiempoPromedio]").each(function () {
            hasErrors = $.fn.validarTxtTiempoPromedio($(this));
            if (hasErrors)
                cantError++;
        });

        
        if (cantError == 0)
            return true;
        else
        {
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

    // #endregion
    
    // #region Bloqueamos los check de aprobacion

    if (!($("#cphContenido_hfIdPerfil").val() == "000001")) {
        //Check aprobacion
        $('#cphContenido_chkFrecuencia').prop('disabled', true);
        $('#cphContenido_chkFecha').prop('disabled', true);
        $('#cphContenido_chkDireccion').prop('disabled', true);
        $('#cphContenido_chkLatitud').prop('disabled', true);
        $('#cphContenido_chkLongitud').prop('disabled', true);
        $('#cphContenido_chkAltitud').prop('disabled', true);
        $('#cphContenido_chkAzimut').prop('disabled', true);
        $('#cphContenido_chkDownTilt').prop('disabled', true);
        $('#cphContenido_chkAlturaInstalada').prop('disabled', true);
        $('#cphContenido_chkCapacidadEnlace').prop('disabled', true);
        $('#cphContenido_chkEficienciaEnlace').prop('disabled', true);
        $('#cphContenido_chkConfigurationRadio').prop('disabled', true);
        $('#cphContenido_chkConfigurationQoS').prop('disabled', true);
        $('#cphContenido_chkConfigurationSystem01').prop('disabled', true);
        $('#cphContenido_chkConfigurationSystem02').prop('disabled', true);
        $('#cphContenido_chkMonitorSystem').prop('disabled', true);
        $('#cphContenido_chkMonitorWireless01').prop('disabled', true);
        $('#cphContenido_chkMonitorWireless02').prop('disabled', true);
        $('#cphContenido_chkToolsWireless').prop('disabled', true);
        $('#cphContenido_chkPantallaHome').prop('disabled', true);
        $('#cphContenido_chkTipoFuente').prop('disabled', true);
        $('#cphContenido_chkEquipamientos').prop('disabled', true);
        $('#cphContenido_chkMateriales').prop('disabled', true);
        $('#cphContenido_chkB').prop('disabled', true);
        $('#cphContenido_chkC').prop('disabled', true);
        $('#cphContenido_chkD').prop('disabled', true);
        $('#cphContenido_chkE').prop('disabled', true);
        $('#cphContenido_chkPanoramicaEstacionA').prop('disabled', true);
        $('#cphContenido_chkPosicionAntena').prop('disabled', true);
        $('#cphContenido_chkAntenaODU').prop('disabled', true);
        $('#cphContenido_chkUGPS').prop('disabled', true);
        $('#cphContenido_chkEngrasadoPerno').prop('disabled', true);
        $('#cphContenido_chkSiliconeadoEtiquetadoConector').prop('disabled', true);
        $('#cphContenido_chkRecorridoCableSFTP').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTPOutdoor').prop('disabled', true);
        $('#cphContenido_chkAterramientoCableSFTPIndoor').prop('disabled', true);
        $('#cphContenido_chkEtiquetadoPOE').prop('disabled', true);
        $('#cphContenido_chkPanoramicaRack').prop('disabled', true);
        $('#cphContenido_chkAterramientoPOE').prop('disabled', true);
        $('#cphContenido_chkEmergenciaPOEEtiqueta01').prop('disabled', true);
        $('#cphContenido_chkEmergenciaPOEEtiqueta02').prop('disabled', true);
        $('#cphContenido_chkPatchCoreSalidaPOE').prop('disabled', true);
        $('#cphContenido_chkPatchCoreSalidaSwitch').prop('disabled', true);
        $('#cphContenido_chkSeriePOE').prop('disabled', true);
        $('#cphContenido_chkSerieAP').prop('disabled', true);
        $('#cphContenido_chkSerieAntena').prop('disabled', true);
        //$('#cphContenido_chkSerieODU').prop('disabled', true);
        $('#cphContenido_chkSerieNodoAntena').prop('disabled', true);
        $('#cphContenido_chkMedicionEnlacePropagacion').prop('disabled', true);
        $('#cphContenido_chkMedicionEnlacePropagacion').prop('disabled', true);

        //Comentarios
        $('#txtFrecuenciaComentario').prop('disabled', true);
        $('#txtFechaComentario').prop('disabled', true);
        $('#txtDireccionComentario').prop('disabled', true);
        $('#txtLatitudComentario').prop('disabled', true);
        $('#txtLongitudComentario').prop('disabled', true);
        $('#txtAltitudComentario').prop('disabled', true);
        $('#txtAzimutComentario').prop('disabled', true);
        $('#txtDownTiltComentario').prop('disabled', true);
        $('#txtAlturaInstaladaComentario').prop('disabled', true);
        $('#txtCapacidadEnlaceComentario').prop('disabled', true);
        $('#txtEficienciaEnlaceComentario').prop('disabled', true);
        $('#txtConfigurationRadioComentario').prop('disabled', true);
        $('#txtConfigurationQoSComentario').prop('disabled', true);
        $('#txtConfigurationSystem01Comentario').prop('disabled', true);
        $('#txtConfigurationSystem02Comentario').prop('disabled', true);
        $('#txtMonitorSystemComentario').prop('disabled', true);
        $('#txtMonitorWireless01Comentario').prop('disabled', true);
        $('#txtMonitorWireless02Comentario').prop('disabled', true);
        $('#txtToolsWirelessComentario').prop('disabled', true);
        $('#txtPantallaHomeComentario').prop('disabled', true);
        $('#txtTipoFuenteComentario').prop('disabled', true);
        $('#txtEquipamientosComentario').prop('disabled', true);
        $('#txtMaterialesComentario').prop('disabled', true);
        $('#txtBComentario').prop('disabled', true);
        $('#txtCComentario').prop('disabled', true);
        $('#txtDComentario').prop('disabled', true);
        $('#txtEComentario').prop('disabled', true);
        $('#txtPanoramicaEstacionAComentario').prop('disabled', true);
        $('#txtPosicionAntenaComentario').prop('disabled', true);
        $('#txtAntenaODUComentario').prop('disabled', true);
        $('#txtUGPSComentario').prop('disabled', true);
        $('#txtEngrasadoPernoComentario').prop('disabled', true);
        $('#txtSiliconeadoEtiquetadoConectorComentario').prop('disabled', true);
        $('#txtRecorridoCableSFTPComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTPOutdoorComentario').prop('disabled', true);
        $('#txtAterramientoCableSFTPIndoorComentario').prop('disabled', true);
        $('#txtEtiquetadoPOEComentario').prop('disabled', true);
        $('#txtPanoramicaRackComentario').prop('disabled', true);
        $('#txtAterramientoPOEComentario').prop('disabled', true);
        $('#txtEmergenciaPOEEtiqueta01Comentario').prop('disabled', true);
        $('#txtEmergenciaPOEEtiqueta02Comentario').prop('disabled', true);
        $('#txtPatchCoreSalidaPOEComentario').prop('disabled', true);
        $('#txtPatchCoreSalidaSwitchComentario').prop('disabled', true);
        $('#txtSeriePOEComentario').prop('disabled', true);
        $('#txtSerieAPComentario').prop('disabled', true);
        $('#txtSerieAntenaComentario').prop('disabled', true);
        //$('#txtSerieODUComentario').prop('disabled', true);
        $('#txtSerieNodoAntenaComentario').prop('disabled', true);
        $('#txtMedicionEnlacePropagacionComentario').prop('disabled', true);
        $('#txtMedicionEnlacePropagacionComentario').prop('disabled', true);

    }

    // #endregion

    // #region Metodos

    $.fn.validarTxtRSSLocal = function (txtRSSLocal) {
        var hasErrors = false;
        var dblRSSLocal = 0;
        var strRSSLocal = "0";

        if (!(txtRSSLocal.val() == "")) {
            strRSSLocal = txtRSSLocal.val().replace(",", "");
            dblRSSLocal = parseFloat(strRSSLocal);
        }
        
        if (dblRSSLocal < -72.00) {
            hasErrors = true;
            txtRSSLocal.addClass('invalid');
            txtRSSLocal.attr("title", "Error");
            txtRSSLocal.attr("data-content", "El número no puede ser menor a -72.");
            txtRSSLocal.popover('show');
            setTimeout(function () {
                txtRSSLocal.popover('hide');
            }, 4000);
            txtRSSLocal.next().addClass('danger');
        }
        else {
            hasErrors = false;
            txtRSSLocal.removeClass('invalid');
            txtRSSLocal.popover('destroy');
        }

        return hasErrors;
    }

    $.fn.validarTxtRSSRemoto = function (txtRSSRemoto) {
        var hasErrors = false;
        var dblRSSRemoto = 0;
        var strRSSRemoto = "0";

        if (!(txtRSSRemoto.val() == "")) {
            strRSSRemoto = txtRSSRemoto.val().replace(",", "");
            dblRSSRemoto = parseFloat(strRSSRemoto);
        }

        if (dblRSSRemoto < -72.00) {
            hasErrors = true;
            txtRSSRemoto.addClass('invalid');
            txtRSSRemoto.attr("title", "Error");
            txtRSSRemoto.attr("data-content", "El número no puede ser menor a -72.");
            txtRSSRemoto.popover('show');
            setTimeout(function () {
                txtRSSRemoto.popover('hide');
            }, 4000);
            txtRSSRemoto.next().addClass('danger');
        }
        else {
            hasErrors = false;
            txtRSSRemoto.removeClass('invalid');
            txtRSSRemoto.popover('destroy');
        }

        return hasErrors;
    }

    $.fn.validarTxtTiempoPromedio = function (txtTiempoPromedio) {
        var hasErrors = false;
        var intTiempoPromedio = 0;
        var strTiempoPromedio = "0";

        if (!(txtTiempoPromedio.val() == "")) {
            strTiempoPromedio = txtTiempoPromedio.val().replace(",", "");
            intTiempoPromedio = parseInt(strTiempoPromedio);

            if (intTiempoPromedio>0 && intTiempoPromedio < 15 || intTiempoPromedio > 20) {
                hasErrors = true;
                txtTiempoPromedio.addClass('invalid');
                txtTiempoPromedio.attr("title", "Error");
                txtTiempoPromedio.attr("data-content", "El número debe estar comprendido entre 15 y 20.");
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

    // #region Agregado Carlos Ramos 28/08/2018 Ocultar los controles al ser el documento "000001 - ACTA DE INSTALACION - ACEPTACION PROTOCOLO (SECTORIAL)"

    if ($("#cphContenido_hfIdDocumento").val() == "000001") {//ACTA DE INSTALACION - ACEPTACION PROTOCOLO (SECTORIAL)
        $("#divAzimut").hide();
        $("#divDownTilt").hide();
        $("#divAlturaInstalada").hide();
    }

    // #endregion
});