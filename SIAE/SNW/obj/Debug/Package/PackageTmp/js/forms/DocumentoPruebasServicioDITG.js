$(document).ready(function () {

    // #region Pruebas de Servicios

    // #region Tiempo Prueba (s)

    $('#cphContenido_chkTiempoPrueba').change(function () {
        var blnActivo = $("#cphContenido_chkTiempoPrueba").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtTiempoPrueba').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtTiempoPrueba').prop('disabled', false);
        }
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

    $("#cphContenido_chkTiempoPrueba").trigger("change");

    // #endregion

    // #region Retardo Mín. (RTT) (s)

    $('#cphContenido_chkRetardoMinimo').change(function () {
        var blnActivo = $("#cphContenido_chkRetardoMinimo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRetardoMinimo").prop('disabled', true);
        else
            $('#cphContenido_txtRetardoMinimo').prop('disabled', false);
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

    $("#cphContenido_chkRetardoMinimo").trigger("change");

    // #endregion

    // #region Retardo Máx. (RTT) (s)

    $('#cphContenido_chkRetardoMaximo').change(function () {
        var blnActivo = $("#cphContenido_chkRetardoMaximo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRetardoMaximo").prop('disabled', true);
        else
            $('#cphContenido_txtRetardoMaximo').prop('disabled', false);
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

    $("#cphContenido_chkRetardoMaximo").trigger("change");

    // #endregion
    
    // #region Retardo Prom. (RTT) (s)

    $('#cphContenido_chkRetardoPromedio').change(function () {
        var blnActivo = $("#cphContenido_chkRetardoPromedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRetardoPromedio").prop('disabled', true);
        else
            $('#cphContenido_txtRetardoPromedio').prop('disabled', false);
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

    $("#cphContenido_chkRetardoPromedio").trigger("change");

    // #endregion

    // #region Jitter Promedio (s)

    $('#cphContenido_chkJitterPromedio').change(function () {
        var blnActivo = $("#cphContenido_chkJitterPromedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtJitterPromedio").prop('disabled', true);
        else
            $('#cphContenido_txtJitterPromedio').prop('disabled', false);
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

    $("#cphContenido_chkJitterPromedio").trigger("change");

    // #endregion

    // #region Desv. Estan. Retardo (s)

    $('#cphContenido_chkDesviacionEstandarRetardo').change(function () {
        var blnActivo = $("#cphContenido_chkDesviacionEstandarRetardo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDesviacionEstandarRetardo").prop('disabled', true);
        else
            $('#cphContenido_txtDesviacionEstandarRetardo').prop('disabled', false);
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

    $("#cphContenido_chkDesviacionEstandarRetardo").trigger("change");

    // #endregion

    // #region Bytes Recibidos

    $('#cphContenido_chkBytesRecibidos').change(function () {
        var blnActivo = $("#cphContenido_chkBytesRecibidos").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtBytesRecibidos").prop('disabled', true);
        else
            $('#cphContenido_txtBytesRecibidos').prop('disabled', false);
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

    $("#cphContenido_chkBytesRecibidos").trigger("change");

    // #endregion

    // #region Throughput Prom. (Kbps)

    $('#cphContenido_chkThroughputPromedio').change(function () {
        var blnActivo = $("#cphContenido_chkThroughputPromedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtThroughputPromedio").prop('disabled', true);
        else
            $('#cphContenido_txtThroughputPromedio').prop('disabled', false);
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

    $("#cphContenido_chkThroughputPromedio").trigger("change");

    // #endregion

    // #region Descarte Paquetes

    $('#cphContenido_chkDescartePaquetes').change(function () {
        var blnActivo = $("#cphContenido_chkDescartePaquetes").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDescartePaquetes").prop('disabled', true);
        else
            $('#cphContenido_txtDescartePaquetes').prop('disabled', false);
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

    $("#cphContenido_chkDescartePaquetes").trigger("change");

    // #endregion

    if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP

        // #region Pantalla Resultado Prueba DITG

        $('#cphContenido_chkPantallaResultadoPruebaDITG').change(function () {
            var blnActivo = $("#cphContenido_chkPantallaResultadoPruebaDITG").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPantallaResultadoPruebaDITG, "#divPantallaResultadoPruebaDITG");
            else
                habilitarRealUploader(true, divPantallaResultadoPruebaDITG, "#divPantallaResultadoPruebaDITG");
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
            minWidthDimension: 1366,
            minHeightDimension: 768,
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

        if ($('#cphContenido_hfPantallaResultadoPruebaDITG').val() != "") {
            divPantallaResultadoPruebaDITG.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaResultadoPruebaDITG').val(), $('#cphContenido_hfPantallaResultadoPruebaDITG').val());
        }

        $("#cphContenido_chkPantallaResultadoPruebaDITG").trigger("change");

        // #endregion
    }
    else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP

        // #region Ping hacia CPE Desde Nodo A

        $('#cphContenido_chkPingHaciaCPEDesdeNodoA').change(function () {
            var blnActivo = $("#cphContenido_chkPingHaciaCPEDesdeNodoA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingHaciaCPEDesdeNodoA, "#divPingHaciaCPEDesdeNodoA");
            else
                habilitarRealUploader(true, divPingHaciaCPEDesdeNodoA, "#divPingHaciaCPEDesdeNodoA");
        });

        poPingHaciaCPEDesdeNodoAComentario = $("#spPingHaciaCPEDesdeNodoAComentario").popover({
            html: true,
            content: function () {
                return $('#pocPingHaciaCPEDesdeNodoAComentario').html();
            }
        });

        poPingHaciaCPEDesdeNodoAComentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingHaciaCPEDesdeNodoAComentario.on('shown.bs.popover', function () {
            $("#txtPingHaciaCPEDesdeNodoAComentario").val($("#cphContenido_hfPingHaciaCPEDesdeNodoAComentario").val());
            $("#txtPingHaciaCPEDesdeNodoAComentario").focus();
            $("#txtPingHaciaCPEDesdeNodoAComentario").keyup(function () {
                $("#cphContenido_hfPingHaciaCPEDesdeNodoAComentario").val($(this).val());
            });
        });

        var divPingHaciaCPEDesdeNodoA = new RealUploader("#divPingHaciaCPEDesdeNodoA", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingHaciaCPEDesdeNodoA').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingHaciaCPEDesdeNodoA').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingHaciaCPEDesdeNodoA').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingHaciaCPEDesdeNodoA').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingHaciaCPEDesdeNodoA').val() != "") {
            divPingHaciaCPEDesdeNodoA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingHaciaCPEDesdeNodoA').val(), $('#cphContenido_hfPingHaciaCPEDesdeNodoA').val());
        }

        $("#cphContenido_chkPingHaciaCPEDesdeNodoA").trigger("change");

        // #endregion

    }

    // #region Fecha Hora Router Distrital Desde Nodo A

    $('#cphContenido_chkFechaHoraRouterDesdeNodoA').change(function () {
        var blnActivo = $("#cphContenido_chkFechaHoraRouterDesdeNodoA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divFechaHoraRouterDesdeNodoA, "#divFechaHoraRouterDesdeNodoA");
        else
            habilitarRealUploader(true, divFechaHoraRouterDesdeNodoA, "#divFechaHoraRouterDesdeNodoA");
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
        minWidthDimension: 1366,
        minHeightDimension: 768,
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

    if ($('#cphContenido_hfFechaHoraRouterDesdeNodoA').val() != "") {
        divFechaHoraRouterDesdeNodoA.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfFechaHoraRouterDesdeNodoA').val(), $('#cphContenido_hfFechaHoraRouterDesdeNodoA').val());
    }

    $("#cphContenido_chkFechaHoraRouterDesdeNodoA").trigger("change");

    // #endregion

    if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP

        // #region Ping Todos Usuarios Sólo Microonda

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda, "#divPingTodosUsuariosSoloMicroonda");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda, "#divPingTodosUsuariosSoloMicroonda");
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
            minWidthDimension: 1366,
            minHeightDimension: 768,
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

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val() != "") {
            divPingTodosUsuariosSoloMicroonda.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda").trigger("change");

        // #endregion

    }
    else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP

        // #region Ping Todos Usuarios Sólo Microonda 01

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda01').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda01").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda01, "#divPingTodosUsuariosSoloMicroonda01");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda01, "#divPingTodosUsuariosSoloMicroonda01");
        });

        poPingTodosUsuariosSoloMicroonda01Comentario = $("#spPingTodosUsuariosSoloMicroonda01Comentario").popover({
            html: true,
            content: function () {
                return $('#pocPingTodosUsuariosSoloMicroonda01Comentario').html();
            }
        });

        poPingTodosUsuariosSoloMicroonda01Comentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingTodosUsuariosSoloMicroonda01Comentario.on('shown.bs.popover', function () {
            $("#txtPingTodosUsuariosSoloMicroonda01Comentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroonda01Comentario").val());
            $("#txtPingTodosUsuariosSoloMicroonda01Comentario").focus();
            $("#txtPingTodosUsuariosSoloMicroonda01Comentario").keyup(function () {
                $("#cphContenido_hfPingTodosUsuariosSoloMicroonda01Comentario").val($(this).val());
            });
        });

        var divPingTodosUsuariosSoloMicroonda01 = new RealUploader("#divPingTodosUsuariosSoloMicroonda01", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val() != "") {
            divPingTodosUsuariosSoloMicroonda01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda01').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda01").trigger("change");

        // #endregion

        // #region Ping Todos Usuarios Sólo Microonda 02

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda02').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda02").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda02, "#divPingTodosUsuariosSoloMicroonda02");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda02, "#divPingTodosUsuariosSoloMicroonda02");
        });

        poPingTodosUsuariosSoloMicroonda02Comentario = $("#spPingTodosUsuariosSoloMicroonda02Comentario").popover({
            html: true,
            content: function () {
                return $('#pocPingTodosUsuariosSoloMicroonda02Comentario').html();
            }
        });

        poPingTodosUsuariosSoloMicroonda02Comentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingTodosUsuariosSoloMicroonda02Comentario.on('shown.bs.popover', function () {
            $("#txtPingTodosUsuariosSoloMicroonda02Comentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroonda02Comentario").val());
            $("#txtPingTodosUsuariosSoloMicroonda02Comentario").focus();
            $("#txtPingTodosUsuariosSoloMicroonda02Comentario").keyup(function () {
                $("#cphContenido_hfPingTodosUsuariosSoloMicroonda02Comentario").val($(this).val());
            });
        });

        var divPingTodosUsuariosSoloMicroonda02 = new RealUploader("#divPingTodosUsuariosSoloMicroonda02", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val() != "") {
            divPingTodosUsuariosSoloMicroonda02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda02').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda02").trigger("change");

        // #endregion

        // #region Ping Todos Usuarios Sólo Microonda 03

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda03').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda03").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda03, "#divPingTodosUsuariosSoloMicroonda03");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda03, "#divPingTodosUsuariosSoloMicroonda03");
        });

        poPingTodosUsuariosSoloMicroonda03Comentario = $("#spPingTodosUsuariosSoloMicroonda03Comentario").popover({
            html: true,
            content: function () {
                return $('#pocPingTodosUsuariosSoloMicroonda03Comentario').html();
            }
        });

        poPingTodosUsuariosSoloMicroonda03Comentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingTodosUsuariosSoloMicroonda03Comentario.on('shown.bs.popover', function () {
            $("#txtPingTodosUsuariosSoloMicroonda03Comentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroonda03Comentario").val());
            $("#txtPingTodosUsuariosSoloMicroonda03Comentario").focus();
            $("#txtPingTodosUsuariosSoloMicroonda03Comentario").keyup(function () {
                $("#cphContenido_hfPingTodosUsuariosSoloMicroonda03Comentario").val($(this).val());
            });
        });

        var divPingTodosUsuariosSoloMicroonda03 = new RealUploader("#divPingTodosUsuariosSoloMicroonda03", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val() != "") {
            divPingTodosUsuariosSoloMicroonda03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda03').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda03").trigger("change");

        // #endregion

        // #region Ping Todos Usuarios Sólo Microonda 04

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda04').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda04").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda04, "#divPingTodosUsuariosSoloMicroonda04");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda04, "#divPingTodosUsuariosSoloMicroonda04");
        });

        poPingTodosUsuariosSoloMicroonda04Comentario = $("#spPingTodosUsuariosSoloMicroonda04Comentario").popover({
            html: true,
            content: function () {
                return $('#pocPingTodosUsuariosSoloMicroonda04Comentario').html();
            }
        });

        poPingTodosUsuariosSoloMicroonda04Comentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingTodosUsuariosSoloMicroonda04Comentario.on('shown.bs.popover', function () {
            $("#txtPingTodosUsuariosSoloMicroonda04Comentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroonda04Comentario").val());
            $("#txtPingTodosUsuariosSoloMicroonda04Comentario").focus();
            $("#txtPingTodosUsuariosSoloMicroonda04Comentario").keyup(function () {
                $("#cphContenido_hfPingTodosUsuariosSoloMicroonda04Comentario").val($(this).val());
            });
        });

        var divPingTodosUsuariosSoloMicroonda04 = new RealUploader("#divPingTodosUsuariosSoloMicroonda04", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val() != "") {
            divPingTodosUsuariosSoloMicroonda04.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda04').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda04").trigger("change");

        // #endregion

        // #region Ping Todos Usuarios Sólo Microonda 05

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda05').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda05").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda05, "#divPingTodosUsuariosSoloMicroonda05");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda05, "#divPingTodosUsuariosSoloMicroonda05");
        });

        poPingTodosUsuariosSoloMicroonda05Comentario = $("#spPingTodosUsuariosSoloMicroonda05Comentario").popover({
            html: true,
            content: function () {
                return $('#pocPingTodosUsuariosSoloMicroonda05Comentario').html();
            }
        });

        poPingTodosUsuariosSoloMicroonda05Comentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingTodosUsuariosSoloMicroonda05Comentario.on('shown.bs.popover', function () {
            $("#txtPingTodosUsuariosSoloMicroonda05Comentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroonda05Comentario").val());
            $("#txtPingTodosUsuariosSoloMicroonda05Comentario").focus();
            $("#txtPingTodosUsuariosSoloMicroonda05Comentario").keyup(function () {
                $("#cphContenido_hfPingTodosUsuariosSoloMicroonda05Comentario").val($(this).val());
            });
        });

        var divPingTodosUsuariosSoloMicroonda05 = new RealUploader("#divPingTodosUsuariosSoloMicroonda05", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val() != "") {
            divPingTodosUsuariosSoloMicroonda05.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda05').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda05").trigger("change");

        // #endregion

        // #region Ping Todos Usuarios Sólo Microonda 06

        $('#cphContenido_chkPingTodosUsuariosSoloMicroonda06').change(function () {
            var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda06").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda06, "#divPingTodosUsuariosSoloMicroonda06");
            else
                habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda06, "#divPingTodosUsuariosSoloMicroonda06");
        });

        poPingTodosUsuariosSoloMicroonda06Comentario = $("#spPingTodosUsuariosSoloMicroonda06Comentario").popover({
            html: true,
            content: function () {
                return $('#pocPingTodosUsuariosSoloMicroonda06Comentario').html();
            }
        });

        poPingTodosUsuariosSoloMicroonda06Comentario.on('show.bs.popover', function () {
            //Devuelve el popover: $(this).data("bs.popover").tip()
            $(this).data("bs.popover").tip().addClass('info');
            $(this).data("bs.popover").tip().css("max-width", "600px");
        });

        poPingTodosUsuariosSoloMicroonda06Comentario.on('shown.bs.popover', function () {
            $("#txtPingTodosUsuariosSoloMicroonda06Comentario").val($("#cphContenido_hfPingTodosUsuariosSoloMicroonda06Comentario").val());
            $("#txtPingTodosUsuariosSoloMicroonda06Comentario").focus();
            $("#txtPingTodosUsuariosSoloMicroonda06Comentario").keyup(function () {
                $("#cphContenido_hfPingTodosUsuariosSoloMicroonda06Comentario").val($(this).val());
            });
        });

        var divPingTodosUsuariosSoloMicroonda06 = new RealUploader("#divPingTodosUsuariosSoloMicroonda06", {
            language: 'es_ES',//idioma
            url: 'Upload.aspx',//pagina que carga los archivos
            overrideFile: true,//sobreescribir
            allowDelete: false,//permitir borrar despues de cargar al servidor
            exifRead: true, //Leer los datos de un jpeg
            maxFiles: 1,
            autoStart: true,
            allowedExtensions: ['png', 'jpg'],
            isImage: true,
            minWidthDimension: 1366,
            minHeightDimension: 768,
            listeners: {
                finish: function (fileNames, fileList) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val(fileNames);
                },
                finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val(fileNamesUploaded);
                },
                removeAllFiles: function () {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val("");
                },
                removeFile: function (fileNames, fileList, fileNamesUploaded) {
                    $('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val(fileNamesUploaded);
                },
            }
        });

        if ($('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val() != "") {
            divPingTodosUsuariosSoloMicroonda06.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val(), $('#cphContenido_hfPingTodosUsuariosSoloMicroonda06').val());
        }

        $("#cphContenido_chkPingTodosUsuariosSoloMicroonda06").trigger("change");

        // #endregion

    }

    // #region Direcciones MAC

    $('#cphContenido_chkDireccionesMAC').change(function () {
        var blnActivo = $("#cphContenido_chkDireccionesMAC").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divDireccionesMAC, "#divDireccionesMAC");
        else
            habilitarRealUploader(true, divDireccionesMAC, "#divDireccionesMAC");
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
        minWidthDimension: 1366,
        minHeightDimension: 768,
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

    if ($('#cphContenido_hfDireccionesMAC').val() != "") {
        divDireccionesMAC.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfDireccionesMAC').val(), $('#cphContenido_hfDireccionesMAC').val());
    }

    $("#cphContenido_chkDireccionesMAC").trigger("change");

    // #endregion
    
    // #region Resultado Prueba DITG

    $('#cphContenido_chkResultadoPruebaDITG').change(function () {
        var blnActivo = $("#cphContenido_chkResultadoPruebaDITG").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divResultadoPruebaDITG, "#divResultadoPruebaDITG");
        else
            habilitarRealUploader(true, divResultadoPruebaDITG, "#divResultadoPruebaDITG");
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
        minWidthDimension: 1366,
        minHeightDimension: 768,
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

    if ($('#cphContenido_hfResultadoPruebaDITG').val() != "") {
        divResultadoPruebaDITG.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfResultadoPruebaDITG').val(), $('#cphContenido_hfResultadoPruebaDITG').val());
    }

    $("#cphContenido_chkResultadoPruebaDITG").trigger("change");

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

    // #region Ocultamos y mostramos los controles segun el Id del documento
    if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
        $("#rowPingHaciaCPEDesdeNodoA").hide();
        $("#rowPingTodosUsuariosSoloMicroonda01").hide();
        $("#rowPingTodosUsuariosSoloMicroonda02").hide();
        $("#rowPingTodosUsuariosSoloMicroonda03").hide();
        $("#rowPingTodosUsuariosSoloMicroonda04").hide();
        $("#rowPingTodosUsuariosSoloMicroonda05").hide();
        $("#rowPingTodosUsuariosSoloMicroonda06").hide();
    }
    else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
        $("#rowPantallaResultadoPruebaDITG").hide();
        $("#rowPingTodosUsuariosSoloMicroonda").hide();

    }
    // #endregion

    // #region Bloqueamos los check de aprobacion

    if (!($("#cphContenido_hfIdPerfil").val() == "000001")) {
        //Check aprobacion
        $('#cphContenido_chkTiempoPrueba').prop('disabled', true);
        $('#cphContenido_chkRetardoMinimo').prop('disabled', true);
        $('#cphContenido_chkRetardoMaximo').prop('disabled', true);
        $('#cphContenido_chkRetardoPromedio').prop('disabled', true);
        $('#cphContenido_chkJitterPromedio').prop('disabled', true);
        $('#cphContenido_chkDesviacionEstandarRetardo').prop('disabled', true);
        $('#cphContenido_chkBytesRecibidos').prop('disabled', true);
        $('#cphContenido_chkThroughputPromedio').prop('disabled', true);
        $('#cphContenido_chkDescartePaquetes').prop('disabled', true);
        if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
            $('#cphContenido_chkPantallaResultadoPruebaDITG').prop('disabled', true);
        }
        else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
            $('#cphContenido_chkPingHaciaCPEDesdeNodoA').prop('disabled', true);
        }
        $('#cphContenido_chkFechaHoraRouterDesdeNodoA').prop('disabled', true);
        if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda').prop('disabled', true);
        }
        else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda01').prop('disabled', true);
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda02').prop('disabled', true);
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda03').prop('disabled', true);
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda04').prop('disabled', true);
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda05').prop('disabled', true);
            $('#cphContenido_chkPingTodosUsuariosSoloMicroonda06').prop('disabled', true);
        }
        $('#cphContenido_chkDireccionesMAC').prop('disabled', true);
        $('#cphContenido_chkResultadoPruebaDITG').prop('disabled', true);

        //Comentarios
        $('#txtTiempoPruebaComentario').prop('disabled', true);
        $('#txtRetardoMinimoComentario').prop('disabled', true);
        $('#txtRetardoMaximoComentario').prop('disabled', true);
        $('#txtRetardoPromedioComentario').prop('disabled', true);
        $('#txtJitterPromedioComentario').prop('disabled', true);
        $('#txtDesviacionEstandarRetardoComentario').prop('disabled', true);
        $('#txtBytesRecibidosComentario').prop('disabled', true);
        $('#txtThroughputPromedioComentario').prop('disabled', true);
        $('#txtDescartePaquetesComentario').prop('disabled', true);
        if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
            $('#txtPantallaResultadoPruebaDITGComentario').prop('disabled', true);
        }
        else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
            $('#txtPingHaciaCPEDesdeNodoAComentario').prop('disabled', true);
        }
        $('#txtFechaHoraRouterDesdeNodoAComentario').prop('disabled', true);
        if (($("#cphContenido_hfIdDocumento").val() == "000010")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
            $('#txtPingTodosUsuariosSoloMicroondaComentario').prop('disabled', true);
        }
        else if (($("#cphContenido_hfIdDocumento").val() == "000011")) {//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
            $('#txtPingTodosUsuariosSoloMicroonda01Comentario').prop('disabled', true);
            $('#txtPingTodosUsuariosSoloMicroonda02Comentario').prop('disabled', true);
            $('#txtPingTodosUsuariosSoloMicroonda03Comentario').prop('disabled', true);
            $('#txtPingTodosUsuariosSoloMicroonda04Comentario').prop('disabled', true);
            $('#txtPingTodosUsuariosSoloMicroonda05Comentario').prop('disabled', true);
            $('#txtPingTodosUsuariosSoloMicroonda06Comentario').prop('disabled', true);
        }
        $('#txtDireccionesMACComentario').prop('disabled', true);
        $('#txtResultadoPruebaDITGComentario').prop('disabled', true);

    }

    // #endregion

});