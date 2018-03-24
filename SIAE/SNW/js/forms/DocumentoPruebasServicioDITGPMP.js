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

    $('#cphContenido_chkPingHaciaCPEDesdeNodoA').change(function () {
        var blnActivo = $("#cphContenido_chkPingHaciaCPEDesdeNodoA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingHaciaCPEDesdeNodoA, "#divPingHaciaCPEDesdeNodoA");
        else
            habilitarRealUploader(true, divPingHaciaCPEDesdeNodoA, "#divPingHaciaCPEDesdeNodoA");
    });

    $('#cphContenido_chkFechaHoraRouterDesdeNodoA').change(function () {
        var blnActivo = $("#cphContenido_chkFechaHoraRouterDesdeNodoA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divFechaHoraRouterDesdeNodoA, "#divFechaHoraRouterDesdeNodoA");
        else
            habilitarRealUploader(true, divFechaHoraRouterDesdeNodoA, "#divFechaHoraRouterDesdeNodoA");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda01').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda01, "#divPingTodosUsuariosSoloMicroonda01");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda01, "#divPingTodosUsuariosSoloMicroonda01");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda02').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda02, "#divPingTodosUsuariosSoloMicroonda02");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda02, "#divPingTodosUsuariosSoloMicroonda02");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda03').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda03, "#divPingTodosUsuariosSoloMicroonda03");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda03, "#divPingTodosUsuariosSoloMicroonda03");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda04').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda04").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda04, "#divPingTodosUsuariosSoloMicroonda04");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda04, "#divPingTodosUsuariosSoloMicroonda04");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda05').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda05").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda05, "#divPingTodosUsuariosSoloMicroonda05");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda05, "#divPingTodosUsuariosSoloMicroonda05");
    });

    $('#cphContenido_chkPingTodosUsuariosSoloMicroonda06').change(function () {
        var blnActivo = $("#cphContenido_chkPingTodosUsuariosSoloMicroonda06").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPingTodosUsuariosSoloMicroonda06, "#divPingTodosUsuariosSoloMicroonda06");
        else
            habilitarRealUploader(true, divPingTodosUsuariosSoloMicroonda06, "#divPingTodosUsuariosSoloMicroonda06");
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
        listeners: {
            finish: function (fileNames, fileList) {
                $('#cphContenido_hfdivPingHaciaCPEDesdeNodoA').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfdivPingHaciaCPEDesdeNodoA').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfdivPingHaciaCPEDesdeNodoA').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfdivPingHaciaCPEDesdeNodoA').val(fileNamesUploaded);
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