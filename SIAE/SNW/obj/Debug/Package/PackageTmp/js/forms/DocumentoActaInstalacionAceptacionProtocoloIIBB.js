$(document).ready(function () {

    // #region Carátula

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

    // #region 1 Acta de Instalación FITEL

    // #region 1. UBICACIÓN DEL NODO

    // #region Dirección Nodo

    $('#cphContenido_chkDireccionNodo').change(function () {
        var blnActivo = $("#cphContenido_chkDireccionNodo").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDireccionNodo").prop('disabled', true);
        else
            $('#cphContenido_txtDireccionNodo').prop('disabled', false);
    });

    poDireccionNodoComentario = $("#spDireccionNodoComentario").popover({
        html: true,
        content: function () {
            return $('#pocDireccionNodoComentario').html();
        }
    });

    poDireccionNodoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDireccionNodoComentario.on('shown.bs.popover', function () {
        $("#txtDireccionNodoComentario").val($("#cphContenido_hfDireccionNodoComentario").val());
        $("#txtDireccionNodoComentario").focus();
        $("#txtDireccionNodoComentario").keyup(function () {
            $("#cphContenido_hfDireccionNodoComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkDireccionNodo").trigger("change");

    // #endregion

    // #endregion

    // #region 2. INSTITUCIÓN BENEFICIARIA

    // #region 2.1. Ubicación

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

    $('#cphContenido_txtLatitud').number(true, 5);

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

    $('#cphContenido_txtLongitud').number(true, 5);

    $("#cphContenido_chkLongitud").trigger("change");

    // #endregion

    // #region Referencia Ubicación IIBB

    $('#cphContenido_chkReferenciaIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkReferenciaIIBB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtReferenciaIIBB").prop('disabled', true);
        else
            $('#cphContenido_txtReferenciaIIBB').prop('disabled', false);
    });

    poReferenciaIIBBComentario = $("#spReferenciaIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocReferenciaIIBBComentario').html();
        }
    });

    poReferenciaIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poReferenciaIIBBComentario.on('shown.bs.popover', function () {
        $("#txtReferenciaIIBBComentario").val($("#cphContenido_hfReferenciaIIBBComentario").val());
        $("#txtReferenciaIIBBComentario").focus();
        $("#txtReferenciaIIBBComentario").keyup(function () {
            $("#cphContenido_hfReferenciaIIBBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkReferenciaIIBB").trigger("change");

    // #endregion

    // #endregion
    
    // #region 2.2. Infraestructura

    // #region Tipo Mástil

    $('#cphContenido_chkTipoMastil').change(function () {
        var blnActivo = $("#cphContenido_chkTipoMastil").prop("checked");
        if (blnActivo) {
            $('#cphContenido_ddlTipoMastil').prop('disabled', true);
        }
        else {
            $('#cphContenido_ddlTipoMastil').prop('disabled', false);
        }
    });

    poTipoMastilComentario = $("#spTipoMastilComentario").popover({
        html: true,
        content: function () {
            return $('#pocTipoMastilComentario').html();
        }
    });

    poTipoMastilComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTipoMastilComentario.on('shown.bs.popover', function () {
        $("#txtTipoMastilComentario").val($("#cphContenido_hfTipoMastilComentario").val());
        $("#txtTipoMastilComentario").focus();
        $("#txtTipoMastilComentario").keyup(function () {
            $("#cphContenido_hfTipoMastilComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkTipoMastil").trigger("change");

    // #endregion

    // #region Altura Mástil (m)

    $('#cphContenido_chkAlturaMastil').change(function () {
        var blnActivo = $("#cphContenido_chkAlturaMastil").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAlturaMastil").prop('disabled', true);
        else
            $('#cphContenido_txtAlturaMastil').prop('disabled', false);
    });

    poAlturaMastilComentario = $("#spAlturaMastilComentario").popover({
        html: true,
        content: function () {
            return $('#pocAlturaMastilComentario').html();
        }
    });

    poAlturaMastilComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAlturaMastilComentario.on('shown.bs.popover', function () {
        $("#txtAlturaMastilComentario").val($("#cphContenido_hfAlturaMastilComentario").val());
        $("#txtAlturaMastilComentario").focus();
        $("#txtAlturaMastilComentario").keyup(function () {
            $("#cphContenido_hfAlturaMastilComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtAlturaMastil').number(true, 1);

    $("#cphContenido_chkAlturaMastil").trigger("change");

    // #endregion

    // #endregion

    // #region 2.4. Energía Eléctrica del Servicio Instalado

    // #region Disponibilidad Horas (H)

    $('#cphContenido_chkDisponibilidadHora').change(function () {
        var blnActivo = $("#cphContenido_chkDisponibilidadHora").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDisponibilidadHora").prop('disabled', true);
        else
            $('#cphContenido_txtDisponibilidadHora').prop('disabled', false);
    });

    poDisponibilidadHoraComentario = $("#spDisponibilidadHoraComentario").popover({
        html: true,
        content: function () {
            return $('#pocDisponibilidadHoraComentario').html();
        }
    });

    poDisponibilidadHoraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDisponibilidadHoraComentario.on('shown.bs.popover', function () {
        $("#txtDisponibilidadHoraComentario").val($("#cphContenido_hfDisponibilidadHoraComentario").val());
        $("#txtDisponibilidadHoraComentario").focus();
        $("#txtDisponibilidadHoraComentario").keyup(function () {
            $("#cphContenido_hfDisponibilidadHoraComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtDisponibilidadHora').number(true, 0);

    $("#cphContenido_chkDisponibilidadHora").trigger("change");

    // #endregion

    // #endregion

    // #region 2.5. Sistema de Puesta a Tierra instituciones

    // #region Valor Medio Medida 1

    $('#cphContenido_chkValorMedioMedida01').change(function () {
        var blnActivo = $("#cphContenido_chkValorMedioMedida01").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtValorMedioMedida01").prop('disabled', true);
        else
            $('#cphContenido_txtValorMedioMedida01').prop('disabled', false);
    });

    poValorMedioMedida01Comentario = $("#spValorMedioMedida01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocValorMedioMedida01Comentario').html();
        }
    });

    poValorMedioMedida01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poValorMedioMedida01Comentario.on('shown.bs.popover', function () {
        $("#txtValorMedioMedida01Comentario").val($("#cphContenido_hfValorMedioMedida01Comentario").val());
        $("#txtValorMedioMedida01Comentario").focus();
        $("#txtValorMedioMedida01Comentario").keyup(function () {
            $("#cphContenido_hfValorMedioMedida01Comentario").val($(this).val());
        });
    });

    $('#cphContenido_txtValorMedioMedida01').number(true, 1);

    $("#cphContenido_chkValorMedioMedida01").trigger("change");

    // #endregion

    // #region Valor Medio Medida 2

    $('#cphContenido_chkValorMedioMedida02').change(function () {
        var blnActivo = $("#cphContenido_chkValorMedioMedida02").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtValorMedioMedida02").prop('disabled', true);
        else
            $('#cphContenido_txtValorMedioMedida02').prop('disabled', false);
    });

    poValorMedioMedida02Comentario = $("#spValorMedioMedida02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocValorMedioMedida02Comentario').html();
        }
    });

    poValorMedioMedida02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poValorMedioMedida02Comentario.on('shown.bs.popover', function () {
        $("#txtValorMedioMedida02Comentario").val($("#cphContenido_hfValorMedioMedida02Comentario").val());
        $("#txtValorMedioMedida02Comentario").focus();
        $("#txtValorMedioMedida02Comentario").keyup(function () {
            $("#cphContenido_hfValorMedioMedida02Comentario").val($(this).val());
        });
    });

    $('#cphContenido_txtValorMedioMedida02').number(true, 1);

    $("#cphContenido_chkValorMedioMedida02").trigger("change");

    // #endregion

    // #region Valor Medio Medida 3

    $('#cphContenido_chkValorMedioMedida03').change(function () {
        var blnActivo = $("#cphContenido_chkValorMedioMedida03").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtValorMedioMedida03").prop('disabled', true);
        else
            $('#cphContenido_txtValorMedioMedida03').prop('disabled', false);
    });

    poValorMedioMedida03Comentario = $("#spValorMedioMedida03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocValorMedioMedida03Comentario').html();
        }
    });

    poValorMedioMedida03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poValorMedioMedida03Comentario.on('shown.bs.popover', function () {
        $("#txtValorMedioMedida03Comentario").val($("#cphContenido_hfValorMedioMedida03Comentario").val());
        $("#txtValorMedioMedida03Comentario").focus();
        $("#txtValorMedioMedida03Comentario").keyup(function () {
            $("#cphContenido_hfValorMedioMedida03Comentario").val($(this).val());
        });
    });

    $('#cphContenido_txtValorMedioMedida03').number(true, 1);

    $("#cphContenido_chkValorMedioMedida03").trigger("change");

    // #endregion

    // #endregion

    // #region 2.6. Característica de Propagación

    // #region Valor Potencia de transmisión (Watts ó dBm)

    $('#cphContenido_chkPotenciaTransmision').change(function () {
        var blnActivo = $("#cphContenido_chkPotenciaTransmision").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPotenciaTransmision").prop('disabled', true);
        else
            $('#cphContenido_txtPotenciaTransmision').prop('disabled', false);
    });

    poPotenciaTransmisionComentario = $("#spPotenciaTransmisionComentario").popover({
        html: true,
        content: function () {
            return $('#pocPotenciaTransmisionComentario').html();
        }
    });

    poPotenciaTransmisionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPotenciaTransmisionComentario.on('shown.bs.popover', function () {
        $("#txtPotenciaTransmisionComentario").val($("#cphContenido_hfPotenciaTransmisionComentario").val());
        $("#txtPotenciaTransmisionComentario").focus();
        $("#txtPotenciaTransmisionComentario").keyup(function () {
            $("#cphContenido_hfPotenciaTransmisionComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtPotenciaTransmision').number(true, 0);

    $("#cphContenido_chkPotenciaTransmision").trigger("change");

    // #endregion

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

    // #region Ancho de banda de canal (MHz)

    $('#cphContenido_chkAnchoBandaCanal').change(function () {
        var blnActivo = $("#cphContenido_chkAnchoBandaCanal").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAnchoBandaCanal").prop('disabled', true);
        else
            $('#cphContenido_txtAnchoBandaCanal').prop('disabled', false);
    });

    poAnchoBandaCanalComentario = $("#spAnchoBandaCanalComentario").popover({
        html: true,
        content: function () {
            return $('#pocAnchoBandaCanalComentario').html();
        }
    });

    poAnchoBandaCanalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAnchoBandaCanalComentario.on('shown.bs.popover', function () {
        $("#txtAnchoBandaCanalComentario").val($("#cphContenido_hfAnchoBandaCanalComentario").val());
        $("#txtAnchoBandaCanalComentario").focus();
        $("#txtAnchoBandaCanalComentario").keyup(function () {
            $("#cphContenido_hfAnchoBandaCanalComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtAnchoBandaCanal').number(true, 0);

    $("#cphContenido_chkAnchoBandaCanal").trigger("change");

    // #endregion

    // #region Azimuth (X°)

    $('#cphContenido_chkAzimuth').change(function () {
        var blnActivo = $("#cphContenido_chkAzimuth").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAzimuth").prop('disabled', true);
        else
            $('#cphContenido_txtAzimuth').prop('disabled', false);
    });

    poAzimuthComentario = $("#spAzimuthComentario").popover({
        html: true,
        content: function () {
            return $('#pocAzimuthComentario').html();
        }
    });

    poAzimuthComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAzimuthComentario.on('shown.bs.popover', function () {
        $("#txtAzimuthComentario").val($("#cphContenido_hfAzimuthComentario").val());
        $("#txtAzimuthComentario").focus();
        $("#txtAzimuthComentario").keyup(function () {
            $("#cphContenido_hfAzimuthComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtAzimuth').number(true, 2);

    $("#cphContenido_chkAzimuth").trigger("change");

    // #endregion

    // #region Elevación (Y°)

    $('#cphContenido_chkElevacion').change(function () {
        var blnActivo = $("#cphContenido_chkElevacion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtElevacion").prop('disabled', true);
        else
            $('#cphContenido_txtElevacion').prop('disabled', false);
    });

    poElevacionComentario = $("#spElevacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocElevacionComentario').html();
        }
    });

    poElevacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poElevacionComentario.on('shown.bs.popover', function () {
        $("#txtElevacionComentario").val($("#cphContenido_hfElevacionComentario").val());
        $("#txtElevacionComentario").focus();
        $("#txtElevacionComentario").keyup(function () {
            $("#cphContenido_hfElevacionComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtElevacion').number(true, 2);

    $("#cphContenido_chkElevacion").trigger("change");

    // #endregion

    // #endregion

    // #region 2.7. Mediciones de Enlaces

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

    // #region 2.8. Conectividad a la Red

    // #region Conectividad a Gilat

    $('#cphContenido_chkVerificacionConectividad').change(function () {
        var blnActivo = $("#cphContenido_chkVerificacionConectividad").prop("checked");
        if (blnActivo) {
            $('#cphContenido_ddlVerificacionConectividad').prop('disabled', true);
        }
        else {
            $('#cphContenido_ddlVerificacionConectividad').prop('disabled', false);
        }
    });

    poVerificacionConectividadComentario = $("#spVerificacionConectividadComentario").popover({
        html: true,
        content: function () {
            return $('#pocVerificacionConectividadComentario').html();
        }
    });

    poVerificacionConectividadComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poVerificacionConectividadComentario.on('shown.bs.popover', function () {
        $("#txtVerificacionConectividadComentario").val($("#cphContenido_hfVerificacionConectividadComentario").val());
        $("#txtVerificacionConectividadComentario").focus();
        $("#txtVerificacionConectividadComentario").keyup(function () {
            $("#cphContenido_hfVerificacionConectividadComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkVerificacionConectividad").trigger("change");

    // #endregion

    // #region Conectividad al nodo terminal (tiempo de ida y vuelta) [ms]

    $('#cphContenido_chkConectividadNodoTerminal').change(function () {
        var blnActivo = $("#cphContenido_chkConectividadNodoTerminal").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtConectividadNodoTerminal").prop('disabled', true);
        else
            $('#cphContenido_txtConectividadNodoTerminal').prop('disabled', false);
    });

    poConectividadNodoTerminalComentario = $("#spConectividadNodoTerminalComentario").popover({
        html: true,
        content: function () {
            return $('#pocConectividadNodoTerminalComentario').html();
        }
    });

    poConectividadNodoTerminalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConectividadNodoTerminalComentario.on('shown.bs.popover', function () {
        $("#txtConectividadNodoTerminalComentario").val($("#cphContenido_hfConectividadNodoTerminalComentario").val());
        $("#txtConectividadNodoTerminalComentario").focus();
        $("#txtConectividadNodoTerminalComentario").keyup(function () {
            $("#cphContenido_hfConectividadNodoTerminalComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtConectividadNodoTerminal').number(true, 0);

    $("#cphContenido_chkConectividadNodoTerminal").trigger("change");

    // #endregion

    // #region Conectividad al nodo distrital (tiempo de ida y vuelta) [ms]

    $('#cphContenido_chkConectividadNodoDistrital').change(function () {
        var blnActivo = $("#cphContenido_chkConectividadNodoDistrital").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtConectividadNodoDistrital").prop('disabled', true);
        else
            $('#cphContenido_txtConectividadNodoDistrital').prop('disabled', false);
    });

    poConectividadNodoDistritalComentario = $("#spConectividadNodoDistritalComentario").popover({
        html: true,
        content: function () {
            return $('#pocConectividadNodoDistritalComentario').html();
        }
    });

    poConectividadNodoDistritalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConectividadNodoDistritalComentario.on('shown.bs.popover', function () {
        $("#txtConectividadNodoDistritalComentario").val($("#cphContenido_hfConectividadNodoDistritalComentario").val());
        $("#txtConectividadNodoDistritalComentario").focus();
        $("#txtConectividadNodoDistritalComentario").keyup(function () {
            $("#cphContenido_hfConectividadNodoDistritalComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtConectividadNodoDistrital').number(true, 0);

    $("#cphContenido_chkConectividadNodoDistrital").trigger("change");

    // #endregion

    // #region Conectividad al NOC (tiempo de ida y vuelta) [ms]

    $('#cphContenido_chkConectividadNOC').change(function () {
        var blnActivo = $("#cphContenido_chkConectividadNOC").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtConectividadNOC").prop('disabled', true);
        else
            $('#cphContenido_txtConectividadNOC').prop('disabled', false);
    });

    poConectividadNOCComentario = $("#spConectividadNOCComentario").popover({
        html: true,
        content: function () {
            return $('#pocConectividadNOCComentario').html();
        }
    });

    poConectividadNOCComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConectividadNOCComentario.on('shown.bs.popover', function () {
        $("#txtConectividadNOCComentario").val($("#cphContenido_hfConectividadNOCComentario").val());
        $("#txtConectividadNOCComentario").focus();
        $("#txtConectividadNOCComentario").keyup(function () {
            $("#cphContenido_hfConectividadNOCComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtConectividadNOC').number(true, 0);

    $("#cphContenido_chkConectividadNOC").trigger("change");

    // #endregion

    // #endregion

    // #endregion

    // #region 4. DATOS DEL ENCARGADO

    // #region Nombres y Apellidos

    $('#cphContenido_chkNombreCompletoEncargado').change(function () {
        var blnActivo = $("#cphContenido_chkNombreCompletoEncargado").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNombreCompletoEncargado").prop('disabled', true);
        else
            $('#cphContenido_txtNombreCompletoEncargado').prop('disabled', false);
    });

    poNombreCompletoEncargadoComentario = $("#spNombreCompletoEncargadoComentario").popover({
        html: true,
        content: function () {
            return $('#pocNombreCompletoEncargadoComentario').html();
        }
    });

    poNombreCompletoEncargadoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNombreCompletoEncargadoComentario.on('shown.bs.popover', function () {
        $("#txtNombreCompletoEncargadoComentario").val($("#cphContenido_hfNombreCompletoEncargadoComentario").val());
        $("#txtNombreCompletoEncargadoComentario").focus();
        $("#txtNombreCompletoEncargadoComentario").keyup(function () {
            $("#cphContenido_hfNombreCompletoEncargadoComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNombreCompletoEncargado").trigger("change");

    // #endregion

    // #region DNI

    $('#cphContenido_chkDocumentoIdentidadEncargado').change(function () {
        var blnActivo = $("#cphContenido_chkDocumentoIdentidadEncargado").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDocumentoIdentidadEncargado").prop('disabled', true);
        else
            $('#cphContenido_txtDocumentoIdentidadEncargado').prop('disabled', false);
    });

    poDocumentoIdentidadEncargadoComentario = $("#spDocumentoIdentidadEncargadoComentario").popover({
        html: true,
        content: function () {
            return $('#pocDocumentoIdentidadEncargadoComentario').html();
        }
    });

    poDocumentoIdentidadEncargadoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDocumentoIdentidadEncargadoComentario.on('shown.bs.popover', function () {
        $("#txtDocumentoIdentidadEncargadoComentario").val($("#cphContenido_hfDocumentoIdentidadEncargadoComentario").val());
        $("#txtDocumentoIdentidadEncargadoComentario").focus();
        $("#txtDocumentoIdentidadEncargadoComentario").keyup(function () {
            $("#cphContenido_hfDocumentoIdentidadEncargadoComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkDocumentoIdentidadEncargado").trigger("change");

    // #endregion

    // #region Celular Contacto

    $('#cphContenido_chkCelularContactoEncargado').change(function () {
        var blnActivo = $("#cphContenido_chkCelularContactoEncargado").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCelularContactoEncargado").prop('disabled', true);
        else
            $('#cphContenido_txtCelularContactoEncargado').prop('disabled', false);
    });

    poCelularContactoEncargadoComentario = $("#spCelularContactoEncargadoComentario").popover({
        html: true,
        content: function () {
            return $('#pocCelularContactoEncargadoComentario').html();
        }
    });

    poCelularContactoEncargadoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCelularContactoEncargadoComentario.on('shown.bs.popover', function () {
        $("#txtCelularContactoEncargadoComentario").val($("#cphContenido_hfCelularContactoEncargadoComentario").val());
        $("#txtCelularContactoEncargadoComentario").focus();
        $("#txtCelularContactoEncargadoComentario").keyup(function () {
            $("#cphContenido_hfCelularContactoEncargadoComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCelularContactoEncargado").trigger("change");

    // #endregion

    // #region Email

    $('#cphContenido_chkEmailEncargado').change(function () {
        var blnActivo = $("#cphContenido_chkEmailEncargado").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtEmailEncargado").prop('disabled', true);
        else
            $('#cphContenido_txtEmailEncargado').prop('disabled', false);
    });

    poEmailEncargadoComentario = $("#spEmailEncargadoComentario").popover({
        html: true,
        content: function () {
            return $('#pocEmailEncargadoComentario').html();
        }
    });

    poEmailEncargadoComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEmailEncargadoComentario.on('shown.bs.popover', function () {
        $("#txtEmailEncargadoComentario").val($("#cphContenido_hfEmailEncargadoComentario").val());
        $("#txtEmailEncargadoComentario").focus();
        $("#txtEmailEncargadoComentario").keyup(function () {
            $("#cphContenido_hfEmailEncargadoComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkEmailEncargado").trigger("change");

    // #endregion

    // #endregion

    // #region 6. Firmas

    // #region 6.1. Representante de la institución Beneficiaria

    // #region Nombres y Apellidos

    $('#cphContenido_chkNombreCompletoRepresentanteIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkNombreCompletoRepresentanteIIBB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNombreCompletoRepresentanteIIBB").prop('disabled', true);
        else
            $('#cphContenido_txtNombreCompletoRepresentanteIIBB').prop('disabled', false);
    });

    poNombreCompletoRepresentanteIIBBComentario = $("#spNombreCompletoRepresentanteIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocNombreCompletoRepresentanteIIBBComentario').html();
        }
    });

    poNombreCompletoRepresentanteIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNombreCompletoRepresentanteIIBBComentario.on('shown.bs.popover', function () {
        $("#txtNombreCompletoRepresentanteIIBBComentario").val($("#cphContenido_hfNombreCompletoRepresentanteIIBBComentario").val());
        $("#txtNombreCompletoRepresentanteIIBBComentario").focus();
        $("#txtNombreCompletoRepresentanteIIBBComentario").keyup(function () {
            $("#cphContenido_hfNombreCompletoRepresentanteIIBBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNombreCompletoRepresentanteIIBB").trigger("change");

    // #endregion

    // #region DNI

    $('#cphContenido_chkDocumentoIdentidadRepresentanteIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkDocumentoIdentidadRepresentanteIIBB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtDocumentoIdentidadRepresentanteIIBB").prop('disabled', true);
        else
            $('#cphContenido_txtDocumentoIdentidadRepresentanteIIBB').prop('disabled', false);
    });

    poDocumentoIdentidadRepresentanteIIBBComentario = $("#spDocumentoIdentidadRepresentanteIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocDocumentoIdentidadRepresentanteIIBBComentario').html();
        }
    });

    poDocumentoIdentidadRepresentanteIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDocumentoIdentidadRepresentanteIIBBComentario.on('shown.bs.popover', function () {
        $("#txtDocumentoIdentidadRepresentanteIIBBComentario").val($("#cphContenido_hfDocumentoIdentidadRepresentanteIIBBComentario").val());
        $("#txtDocumentoIdentidadRepresentanteIIBBComentario").focus();
        $("#txtDocumentoIdentidadRepresentanteIIBBComentario").keyup(function () {
            $("#cphContenido_hfDocumentoIdentidadRepresentanteIIBBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkDocumentoIdentidadRepresentanteIIBB").trigger("change");

    // #endregion

    // #region Celular Contacto

    $('#cphContenido_chkCelularContactoRepresentanteIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkCelularContactoRepresentanteIIBB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCelularContactoRepresentanteIIBB").prop('disabled', true);
        else
            $('#cphContenido_txtCelularContactoRepresentanteIIBB').prop('disabled', false);
    });

    poCelularContactoRepresentanteIIBBComentario = $("#spCelularContactoRepresentanteIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocCelularContactoRepresentanteIIBBComentario').html();
        }
    });

    poCelularContactoRepresentanteIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCelularContactoRepresentanteIIBBComentario.on('shown.bs.popover', function () {
        $("#txtCelularContactoRepresentanteIIBBComentario").val($("#cphContenido_hfCelularContactoRepresentanteIIBBComentario").val());
        $("#txtCelularContactoRepresentanteIIBBComentario").focus();
        $("#txtCelularContactoRepresentanteIIBBComentario").keyup(function () {
            $("#cphContenido_hfCelularContactoRepresentanteIIBBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCelularContactoRepresentanteIIBB").trigger("change");

    // #endregion

    // #region Cargo

    $('#cphContenido_chkCargoRepresentanteIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkCargoRepresentanteIIBB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCargoRepresentanteIIBB").prop('disabled', true);
        else
            $('#cphContenido_txtCargoRepresentanteIIBB').prop('disabled', false);
    });

    poCargoRepresentanteIIBBComentario = $("#spCargoRepresentanteIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocCargoRepresentanteIIBBComentario').html();
        }
    });

    poCargoRepresentanteIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCargoRepresentanteIIBBComentario.on('shown.bs.popover', function () {
        $("#txtCargoRepresentanteIIBBComentario").val($("#cphContenido_hfCargoRepresentanteIIBBComentario").val());
        $("#txtCargoRepresentanteIIBBComentario").focus();
        $("#txtCargoRepresentanteIIBBComentario").keyup(function () {
            $("#cphContenido_hfCargoRepresentanteIIBBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCargoRepresentanteIIBB").trigger("change");

    // #endregion

    // #region Email

    $('#cphContenido_chkEmailRepresentanteIIBB').change(function () {
        var blnActivo = $("#cphContenido_chkEmailRepresentanteIIBB").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtEmailRepresentanteIIBB").prop('disabled', true);
        else
            $('#cphContenido_txtEmailRepresentanteIIBB').prop('disabled', false);
    });

    poEmailRepresentanteIIBBComentario = $("#spEmailRepresentanteIIBBComentario").popover({
        html: true,
        content: function () {
            return $('#pocEmailRepresentanteIIBBComentario').html();
        }
    });

    poEmailRepresentanteIIBBComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEmailRepresentanteIIBBComentario.on('shown.bs.popover', function () {
        $("#txtEmailRepresentanteIIBBComentario").val($("#cphContenido_hfEmailRepresentanteIIBBComentario").val());
        $("#txtEmailRepresentanteIIBBComentario").focus();
        $("#txtEmailRepresentanteIIBBComentario").keyup(function () {
            $("#cphContenido_hfEmailRepresentanteIIBBComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkEmailRepresentanteIIBB").trigger("change");

    // #endregion

    // #endregion


    //// #region 6.2. Representante del Operador

    //// #region Nombres y Apellidos

    //$('#cphContenido_chkNombreCompletoOperador').change(function () {
    //    var blnActivo = $("#cphContenido_chkNombreCompletoOperador").prop("checked");
    //    if (blnActivo)
    //        $("#cphContenido_txtNombreCompletoOperador").prop('disabled', true);
    //    else
    //        $('#cphContenido_txtNombreCompletoOperador').prop('disabled', false);
    //});

    //poNombreCompletoOperadorComentario = $("#spNombreCompletoOperadorComentario").popover({
    //    html: true,
    //    content: function () {
    //        return $('#pocNombreCompletoOperadorComentario').html();
    //    }
    //});

    //poNombreCompletoOperadorComentario.on('show.bs.popover', function () {
    //    //Devuelve el popover: $(this).data("bs.popover").tip()
    //    $(this).data("bs.popover").tip().addClass('info');
    //    $(this).data("bs.popover").tip().css("max-width", "600px");
    //});

    //poNombreCompletoOperadorComentario.on('shown.bs.popover', function () {
    //    $("#txtNombreCompletoOperadorComentario").val($("#cphContenido_hfNombreCompletoOperadorComentario").val());
    //    $("#txtNombreCompletoOperadorComentario").focus();
    //    $("#txtNombreCompletoOperadorComentario").keyup(function () {
    //        $("#cphContenido_hfNombreCompletoOperadorComentario").val($(this).val());
    //    });
    //});

    //$("#cphContenido_chkNombreCompletoOperador").trigger("change");

    //// #endregion

    //// #region DNI

    //$('#cphContenido_chkDocumentoIdentidadOperador').change(function () {
    //    var blnActivo = $("#cphContenido_chkDocumentoIdentidadOperador").prop("checked");
    //    if (blnActivo)
    //        $("#cphContenido_txtDocumentoIdentidadOperador").prop('disabled', true);
    //    else
    //        $('#cphContenido_txtDocumentoIdentidadOperador').prop('disabled', false);
    //});

    //poDocumentoIdentidadOperadorComentario = $("#spDocumentoIdentidadOperadorComentario").popover({
    //    html: true,
    //    content: function () {
    //        return $('#pocDocumentoIdentidadOperadorComentario').html();
    //    }
    //});

    //poDocumentoIdentidadOperadorComentario.on('show.bs.popover', function () {
    //    //Devuelve el popover: $(this).data("bs.popover").tip()
    //    $(this).data("bs.popover").tip().addClass('info');
    //    $(this).data("bs.popover").tip().css("max-width", "600px");
    //});

    //poDocumentoIdentidadOperadorComentario.on('shown.bs.popover', function () {
    //    $("#txtDocumentoIdentidadOperadorComentario").val($("#cphContenido_hfDocumentoIdentidadOperadorComentario").val());
    //    $("#txtDocumentoIdentidadOperadorComentario").focus();
    //    $("#txtDocumentoIdentidadOperadorComentario").keyup(function () {
    //        $("#cphContenido_hfDocumentoIdentidadOperadorComentario").val($(this).val());
    //    });
    //});

    //$("#cphContenido_chkDocumentoIdentidadOperador").trigger("change");

    //// #endregion

    //// #region Cargo

    //$('#cphContenido_chkCargoOperador').change(function () {
    //    var blnActivo = $("#cphContenido_chkCargoOperador").prop("checked");
    //    if (blnActivo)
    //        $("#cphContenido_txtCargoOperador").prop('disabled', true);
    //    else
    //        $('#cphContenido_txtCargoOperador').prop('disabled', false);
    //});

    //poCargoOperadorComentario = $("#spCargoOperadorComentario").popover({
    //    html: true,
    //    content: function () {
    //        return $('#pocCargoOperadorComentario').html();
    //    }
    //});

    //poCargoOperadorComentario.on('show.bs.popover', function () {
    //    //Devuelve el popover: $(this).data("bs.popover").tip()
    //    $(this).data("bs.popover").tip().addClass('info');
    //    $(this).data("bs.popover").tip().css("max-width", "600px");
    //});

    //poCargoOperadorComentario.on('shown.bs.popover', function () {
    //    $("#txtCargoOperadorComentario").val($("#cphContenido_hfCargoOperadorComentario").val());
    //    $("#txtCargoOperadorComentario").focus();
    //    $("#txtCargoOperadorComentario").keyup(function () {
    //        $("#cphContenido_hfCargoOperadorComentario").val($(this).val());
    //    });
    //});

    //$("#cphContenido_chkCargoOperador").trigger("change");

    //// #endregion

    //// #region Email

    //$('#cphContenido_chkEmailOperador').change(function () {
    //    var blnActivo = $("#cphContenido_chkEmailOperador").prop("checked");
    //    if (blnActivo)
    //        $("#cphContenido_txtEmailOperador").prop('disabled', true);
    //    else
    //        $('#cphContenido_txtEmailOperador').prop('disabled', false);
    //});

    //poEmailOperadorComentario = $("#spEmailOperadorComentario").popover({
    //    html: true,
    //    content: function () {
    //        return $('#pocEmailOperadorComentario').html();
    //    }
    //});

    //poEmailOperadorComentario.on('show.bs.popover', function () {
    //    //Devuelve el popover: $(this).data("bs.popover").tip()
    //    $(this).data("bs.popover").tip().addClass('info');
    //    $(this).data("bs.popover").tip().css("max-width", "600px");
    //});

    //poEmailOperadorComentario.on('shown.bs.popover', function () {
    //    $("#txtEmailOperadorComentario").val($("#cphContenido_hfEmailOperadorComentario").val());
    //    $("#txtEmailOperadorComentario").focus();
    //    $("#txtEmailOperadorComentario").keyup(function () {
    //        $("#cphContenido_hfEmailOperadorComentario").val($(this).val());
    //    });
    //});

    //$("#cphContenido_chkEmailOperador").trigger("change");

    //// #endregion

    //// #endregion

    // #endregion

    // #endregion

    // #region 2 Configuración y Pruebas

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

    $('#cphContenido_txtAltitud').number(true, 0);

    $("#cphContenido_chkAltitud").trigger("change");

    // #endregion

    // #endregion

    // #region 3 Pantallas de Configuración

    // #region Access Point

    $('#cphContenido_chkPantallaConfiguracionAccessPoint').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionAccessPoint").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionAccessPoint, "#divPantallaConfiguracionAccessPoint");
        else
            habilitarRealUploader(true, divPantallaConfiguracionAccessPoint, "#divPantallaConfiguracionAccessPoint");
    });

    poPantallaConfiguracionAccessPointComentario = $("#spPantallaConfiguracionAccessPointComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionAccessPointComentario').html();
        }
    });

    poPantallaConfiguracionAccessPointComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionAccessPointComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionAccessPointComentario").val($("#cphContenido_hfPantallaConfiguracionAccessPointComentario").val());
        $("#txtPantallaConfiguracionAccessPointComentario").focus();
        $("#txtPantallaConfiguracionAccessPointComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionAccessPointComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionAccessPoint = new RealUploader("#divPantallaConfiguracionAccessPoint", {
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
                $('#cphContenido_hfPantallaConfiguracionAccessPoint').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionAccessPoint').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionAccessPoint').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionAccessPoint').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionAccessPoint').val() != "") {
        divPantallaConfiguracionAccessPoint.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionAccessPoint').val(), $('#cphContenido_hfPantallaConfiguracionAccessPoint').val());
    }

    $("#cphContenido_chkPantallaConfiguracionAccessPoint").trigger("change");

    // #endregion

    // #region Router Mikrotik

    $('#cphContenido_chkPantallaConfiguracionRouterMikrotik').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionRouterMikrotik").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionRouterMikrotik, "#divPantallaConfiguracionRouterMikrotik");
        else
            habilitarRealUploader(true, divPantallaConfiguracionRouterMikrotik, "#divPantallaConfiguracionRouterMikrotik");
    });

    poPantallaConfiguracionRouterMikrotikComentario = $("#spPantallaConfiguracionRouterMikrotikComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionRouterMikrotikComentario').html();
        }
    });

    poPantallaConfiguracionRouterMikrotikComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionRouterMikrotikComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionRouterMikrotikComentario").val($("#cphContenido_hfPantallaConfiguracionRouterMikrotikComentario").val());
        $("#txtPantallaConfiguracionRouterMikrotikComentario").focus();
        $("#txtPantallaConfiguracionRouterMikrotikComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionRouterMikrotikComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionRouterMikrotik = new RealUploader("#divPantallaConfiguracionRouterMikrotik", {
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
                $('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val() != "") {
        divPantallaConfiguracionRouterMikrotik.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val(), $('#cphContenido_hfPantallaConfiguracionRouterMikrotik').val());
    }

    $("#cphContenido_chkPantallaConfiguracionRouterMikrotik").trigger("change");

    // #endregion

    // #region Switch Dlink 01

    $('#cphContenido_chkPantallaConfiguracionSwitchDlink01').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionSwitchDlink01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionSwitchDlink01, "#divPantallaConfiguracionSwitchDlink01");
        else
            habilitarRealUploader(true, divPantallaConfiguracionSwitchDlink01, "#divPantallaConfiguracionSwitchDlink01");
    });

    poPantallaConfiguracionSwitchDlink01Comentario = $("#spPantallaConfiguracionSwitchDlink01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionSwitchDlink01Comentario').html();
        }
    });

    poPantallaConfiguracionSwitchDlink01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionSwitchDlink01Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionSwitchDlink01Comentario").val($("#cphContenido_hfPantallaConfiguracionSwitchDlink01Comentario").val());
        $("#txtPantallaConfiguracionSwitchDlink01Comentario").focus();
        $("#txtPantallaConfiguracionSwitchDlink01Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionSwitchDlink01Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionSwitchDlink01 = new RealUploader("#divPantallaConfiguracionSwitchDlink01", {
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
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val() != "") {
        divPantallaConfiguracionSwitchDlink01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val(), $('#cphContenido_hfPantallaConfiguracionSwitchDlink01').val());
    }

    $("#cphContenido_chkPantallaConfiguracionSwitchDlink01").trigger("change");

    // #endregion

    // #region Switch Dlink 02

    $('#cphContenido_chkPantallaConfiguracionSwitchDlink02').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionSwitchDlink02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionSwitchDlink02, "#divPantallaConfiguracionSwitchDlink02");
        else
            habilitarRealUploader(true, divPantallaConfiguracionSwitchDlink02, "#divPantallaConfiguracionSwitchDlink02");
    });

    poPantallaConfiguracionSwitchDlink02Comentario = $("#spPantallaConfiguracionSwitchDlink02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionSwitchDlink02Comentario').html();
        }
    });

    poPantallaConfiguracionSwitchDlink02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionSwitchDlink02Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionSwitchDlink02Comentario").val($("#cphContenido_hfPantallaConfiguracionSwitchDlink02Comentario").val());
        $("#txtPantallaConfiguracionSwitchDlink02Comentario").focus();
        $("#txtPantallaConfiguracionSwitchDlink02Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionSwitchDlink02Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionSwitchDlink02 = new RealUploader("#divPantallaConfiguracionSwitchDlink02", {
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
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val() != "") {
        divPantallaConfiguracionSwitchDlink02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val(), $('#cphContenido_hfPantallaConfiguracionSwitchDlink02').val());
    }

    $("#cphContenido_chkPantallaConfiguracionSwitchDlink02").trigger("change");

    // #endregion

    // #region UPS

    $('#cphContenido_chkPantallaConfiguracionUPS').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionUPS").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionUPS, "#divPantallaConfiguracionUPS");
        else
            habilitarRealUploader(true, divPantallaConfiguracionUPS, "#divPantallaConfiguracionUPS");
    });

    poPantallaConfiguracionUPSComentario = $("#spPantallaConfiguracionUPSComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionUPSComentario').html();
        }
    });

    poPantallaConfiguracionUPSComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionUPSComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionUPSComentario").val($("#cphContenido_hfPantallaConfiguracionUPSComentario").val());
        $("#txtPantallaConfiguracionUPSComentario").focus();
        $("#txtPantallaConfiguracionUPSComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionUPSComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionUPS = new RealUploader("#divPantallaConfiguracionUPS", {
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
                $('#cphContenido_hfPantallaConfiguracionUPS').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionUPS').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionUPS').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionUPS').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionUPS').val() != "") {
        divPantallaConfiguracionUPS.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionUPS').val(), $('#cphContenido_hfPantallaConfiguracionUPS').val());
    }

    $("#cphContenido_chkPantallaConfiguracionUPS").trigger("change");

    // #endregion

    // #region All In One 01

    $('#cphContenido_chkPantallaConfiguracionAllInOne01').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionAllInOne01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionAllInOne01, "#divPantallaConfiguracionAllInOne01");
        else
            habilitarRealUploader(true, divPantallaConfiguracionAllInOne01, "#divPantallaConfiguracionAllInOne01");
    });

    poPantallaConfiguracionAllInOne01Comentario = $("#spPantallaConfiguracionAllInOne01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionAllInOne01Comentario').html();
        }
    });

    poPantallaConfiguracionAllInOne01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionAllInOne01Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionAllInOne01Comentario").val($("#cphContenido_hfPantallaConfiguracionAllInOne01Comentario").val());
        $("#txtPantallaConfiguracionAllInOne01Comentario").focus();
        $("#txtPantallaConfiguracionAllInOne01Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionAllInOne01Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionAllInOne01 = new RealUploader("#divPantallaConfiguracionAllInOne01", {
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
                $('#cphContenido_hfPantallaConfiguracionAllInOne01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionAllInOne01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionAllInOne01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionAllInOne01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionAllInOne01').val() != "") {
        divPantallaConfiguracionAllInOne01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionAllInOne01').val(), $('#cphContenido_hfPantallaConfiguracionAllInOne01').val());
    }

    $("#cphContenido_chkPantallaConfiguracionAllInOne01").trigger("change");

    // #endregion

    // #region All In One 02

    $('#cphContenido_chkPantallaConfiguracionAllInOne02').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionAllInOne02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionAllInOne02, "#divPantallaConfiguracionAllInOne02");
        else
            habilitarRealUploader(true, divPantallaConfiguracionAllInOne02, "#divPantallaConfiguracionAllInOne02");
    });

    poPantallaConfiguracionAllInOne02Comentario = $("#spPantallaConfiguracionAllInOne02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionAllInOne02Comentario').html();
        }
    });

    poPantallaConfiguracionAllInOne02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionAllInOne02Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionAllInOne02Comentario").val($("#cphContenido_hfPantallaConfiguracionAllInOne02Comentario").val());
        $("#txtPantallaConfiguracionAllInOne02Comentario").focus();
        $("#txtPantallaConfiguracionAllInOne02Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionAllInOne02Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionAllInOne02 = new RealUploader("#divPantallaConfiguracionAllInOne02", {
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
                $('#cphContenido_hfPantallaConfiguracionAllInOne02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionAllInOne02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionAllInOne02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionAllInOne02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionAllInOne02').val() != "") {
        divPantallaConfiguracionAllInOne02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionAllInOne02').val(), $('#cphContenido_hfPantallaConfiguracionAllInOne02').val());
    }

    $("#cphContenido_chkPantallaConfiguracionAllInOne02").trigger("change");

    // #endregion

    // #region Impresora

    $('#cphContenido_chkPantallaConfiguracionImpresora').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionImpresora").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionImpresora, "#divPantallaConfiguracionImpresora");
        else
            habilitarRealUploader(true, divPantallaConfiguracionImpresora, "#divPantallaConfiguracionImpresora");
    });

    poPantallaConfiguracionImpresoraComentario = $("#spPantallaConfiguracionImpresoraComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionImpresoraComentario').html();
        }
    });

    poPantallaConfiguracionImpresoraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionImpresoraComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionImpresoraComentario").val($("#cphContenido_hfPantallaConfiguracionImpresoraComentario").val());
        $("#txtPantallaConfiguracionImpresoraComentario").focus();
        $("#txtPantallaConfiguracionImpresoraComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionImpresoraComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionImpresora = new RealUploader("#divPantallaConfiguracionImpresora", {
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
                $('#cphContenido_hfPantallaConfiguracionImpresora').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionImpresora').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionImpresora').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionImpresora').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionImpresora').val() != "") {
        divPantallaConfiguracionImpresora.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionImpresora').val(), $('#cphContenido_hfPantallaConfiguracionImpresora').val());
    }

    $("#cphContenido_chkPantallaConfiguracionImpresora").trigger("change");

    // #endregion

    // #endregion

    // #region 4 Medición SPAT

    // #region Medición del Sistema de Puesta a tierra

    // #region Medida 1 Valor Medio

    $('#cphContenido_chkMedicionSistemaPuestaTierraMedida01ValorMedio').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionSistemaPuestaTierraMedida01ValorMedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtMedicionSistemaPuestaTierraMedida01ValorMedio").prop('disabled', true);
        else
            $('#cphContenido_txtMedicionSistemaPuestaTierraMedida01ValorMedio').prop('disabled', false);
    });

    poMedicionSistemaPuestaTierraMedida01ValorMedioComentario = $("#spMedicionSistemaPuestaTierraMedida01ValorMedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionSistemaPuestaTierraMedida01ValorMedioComentario').html();
        }
    });

    poMedicionSistemaPuestaTierraMedida01ValorMedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionSistemaPuestaTierraMedida01ValorMedioComentario.on('shown.bs.popover', function () {
        $("#txtMedicionSistemaPuestaTierraMedida01ValorMedioComentario").val($("#cphContenido_hfMedicionSistemaPuestaTierraMedida01ValorMedioComentario").val());
        $("#txtMedicionSistemaPuestaTierraMedida01ValorMedioComentario").focus();
        $("#txtMedicionSistemaPuestaTierraMedida01ValorMedioComentario").keyup(function () {
            $("#cphContenido_hfMedicionSistemaPuestaTierraMedida01ValorMedioComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtMedicionSistemaPuestaTierraMedida01ValorMedio').number(true, 1);

    $("#cphContenido_chkMedicionSistemaPuestaTierraMedida01ValorMedio").trigger("change");

    // #endregion

    // #region Medida 2 Valor Medio

    $('#cphContenido_chkMedicionSistemaPuestaTierraMedida02ValorMedio').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionSistemaPuestaTierraMedida02ValorMedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtMedicionSistemaPuestaTierraMedida02ValorMedio").prop('disabled', true);
        else
            $('#cphContenido_txtMedicionSistemaPuestaTierraMedida02ValorMedio').prop('disabled', false);
    });

    poMedicionSistemaPuestaTierraMedida02ValorMedioComentario = $("#spMedicionSistemaPuestaTierraMedida02ValorMedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionSistemaPuestaTierraMedida02ValorMedioComentario').html();
        }
    });

    poMedicionSistemaPuestaTierraMedida02ValorMedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionSistemaPuestaTierraMedida02ValorMedioComentario.on('shown.bs.popover', function () {
        $("#txtMedicionSistemaPuestaTierraMedida02ValorMedioComentario").val($("#cphContenido_hfMedicionSistemaPuestaTierraMedida02ValorMedioComentario").val());
        $("#txtMedicionSistemaPuestaTierraMedida02ValorMedioComentario").focus();
        $("#txtMedicionSistemaPuestaTierraMedida02ValorMedioComentario").keyup(function () {
            $("#cphContenido_hfMedicionSistemaPuestaTierraMedida02ValorMedioComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtMedicionSistemaPuestaTierraMedida02ValorMedio').number(true, 1);

    $("#cphContenido_chkMedicionSistemaPuestaTierraMedida02ValorMedio").trigger("change");

    // #endregion

    // #region Medida 3 Valor Medio

    $('#cphContenido_chkMedicionSistemaPuestaTierraMedida03ValorMedio').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionSistemaPuestaTierraMedida03ValorMedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtMedicionSistemaPuestaTierraMedida03ValorMedio").prop('disabled', true);
        else
            $('#cphContenido_txtMedicionSistemaPuestaTierraMedida03ValorMedio').prop('disabled', false);
    });

    poMedicionSistemaPuestaTierraMedida03ValorMedioComentario = $("#spMedicionSistemaPuestaTierraMedida03ValorMedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionSistemaPuestaTierraMedida03ValorMedioComentario').html();
        }
    });

    poMedicionSistemaPuestaTierraMedida03ValorMedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionSistemaPuestaTierraMedida03ValorMedioComentario.on('shown.bs.popover', function () {
        $("#txtMedicionSistemaPuestaTierraMedida03ValorMedioComentario").val($("#cphContenido_hfMedicionSistemaPuestaTierraMedida03ValorMedioComentario").val());
        $("#txtMedicionSistemaPuestaTierraMedida03ValorMedioComentario").focus();
        $("#txtMedicionSistemaPuestaTierraMedida03ValorMedioComentario").keyup(function () {
            $("#cphContenido_hfMedicionSistemaPuestaTierraMedida03ValorMedioComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtMedicionSistemaPuestaTierraMedida03ValorMedio').number(true, 1);

    $("#cphContenido_chkMedicionSistemaPuestaTierraMedida03ValorMedio").trigger("change");

    // #endregion

    // #endregion

    // #region Medición del Sistema de Puesta a tierra Pararrayos

    // #region Medida 1 Valor Medio

    $('#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio").prop('disabled', true);
        else
            $('#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio').prop('disabled', false);
    });

    poMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario = $("#spMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario').html();
        }
    });

    poMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario.on('shown.bs.popover', function () {
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario").val($("#cphContenido_hfMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario").val());
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario").focus();
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario").keyup(function () {
            $("#cphContenido_hfMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio').number(true, 1);

    $("#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio").trigger("change");

    // #endregion

    // #region Medida 2 Valor Medio

    $('#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio").prop('disabled', true);
        else
            $('#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio').prop('disabled', false);
    });

    poMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario = $("#spMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario').html();
        }
    });

    poMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario.on('shown.bs.popover', function () {
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario").val($("#cphContenido_hfMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario").val());
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario").focus();
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario").keyup(function () {
            $("#cphContenido_hfMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio').number(true, 1);

    $("#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio").trigger("change");

    // #endregion

    // #region Medida 3 Valor Medio

    $('#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio').change(function () {
        var blnActivo = $("#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio").prop('disabled', true);
        else
            $('#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio').prop('disabled', false);
    });

    poMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario = $("#spMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario").popover({
        html: true,
        content: function () {
            return $('#pocMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario').html();
        }
    });

    poMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario.on('shown.bs.popover', function () {
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario").val($("#cphContenido_hfMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario").val());
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario").focus();
        $("#txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario").keyup(function () {
            $("#cphContenido_hfMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario").val($(this).val());
        });
    });

    $('#cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio').number(true, 1);

    $("#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio").trigger("change");

    // #endregion

    // #endregion

    // #endregion

    // #region 6 Material IIBB CPE

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

    //$("#cphContenido_chkEquipamientos").trigger("change");

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

    // #region 7 Reporte Fotográfico IIBB CPE

    // #region Foto 01: Panorámica de la Localidad

    $('#cphContenido_chkPanoramicaLocalidad').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaLocalidad").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaLocalidad, "#divPanoramicaLocalidad");
        else
            habilitarRealUploader(true, divPanoramicaLocalidad, "#divPanoramicaLocalidad");
    });

    poPanoramicaLocalidadComentario = $("#spPanoramicaLocalidadComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaLocalidadComentario').html();
        }
    });

    poPanoramicaLocalidadComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaLocalidadComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaLocalidadComentario").val($("#cphContenido_hfPanoramicaLocalidadComentario").val());
        $("#txtPanoramicaLocalidadComentario").focus();
        $("#txtPanoramicaLocalidadComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaLocalidadComentario").val($(this).val());
        });
    });

    var divPanoramicaLocalidad = new RealUploader("#divPanoramicaLocalidad", {
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
                $('#cphContenido_hfPanoramicaLocalidad').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaLocalidad').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaLocalidad').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaLocalidad').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaLocalidad').val() != "") {
        divPanoramicaLocalidad.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaLocalidad').val(), $('#cphContenido_hfPanoramicaLocalidad').val());
    }

    $("#cphContenido_chkPanoramicaLocalidad").trigger("change");

    // #endregion

    // #region Foto 02: Fachada de la Institución

    $('#cphContenido_chkFachadaInstitucion').change(function () {
        var blnActivo = $("#cphContenido_chkFachadaInstitucion").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divFachadaInstitucion, "#divFachadaInstitucion");
        else
            habilitarRealUploader(true, divFachadaInstitucion, "#divFachadaInstitucion");
    });

    poFachadaInstitucionComentario = $("#spFachadaInstitucionComentario").popover({
        html: true,
        content: function () {
            return $('#pocFachadaInstitucionComentario').html();
        }
    });

    poFachadaInstitucionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poFachadaInstitucionComentario.on('shown.bs.popover', function () {
        $("#txtFachadaInstitucionComentario").val($("#cphContenido_hfFachadaInstitucionComentario").val());
        $("#txtFachadaInstitucionComentario").focus();
        $("#txtFachadaInstitucionComentario").keyup(function () {
            $("#cphContenido_hfFachadaInstitucionComentario").val($(this).val());
        });
    });

    var divFachadaInstitucion = new RealUploader("#divFachadaInstitucion", {
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
                $('#cphContenido_hfFachadaInstitucion').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfFachadaInstitucion').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfFachadaInstitucion').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfFachadaInstitucion').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfFachadaInstitucion').val() != "") {
        divFachadaInstitucion.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfFachadaInstitucion').val(), $('#cphContenido_hfFachadaInstitucion').val());
    }

    $("#cphContenido_chkFachadaInstitucion").trigger("change");

    // #endregion

    // #region Foto 03.01: Impresora

    $('#cphContenido_chkImpresora').change(function () {
        var blnActivo = $("#cphContenido_chkImpresora").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divImpresora, "#divImpresora");
        else
            habilitarRealUploader(true, divImpresora, "#divImpresora");
    });

    poImpresoraComentario = $("#spImpresoraComentario").popover({
        html: true,
        content: function () {
            return $('#pocImpresoraComentario').html();
        }
    });

    poImpresoraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poImpresoraComentario.on('shown.bs.popover', function () {
        $("#txtImpresoraComentario").val($("#cphContenido_hfImpresoraComentario").val());
        $("#txtImpresoraComentario").focus();
        $("#txtImpresoraComentario").keyup(function () {
            $("#cphContenido_hfImpresoraComentario").val($(this).val());
        });
    });

    var divImpresora = new RealUploader("#divImpresora", {
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
                $('#cphContenido_hfImpresora').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfImpresora').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfImpresora').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfImpresora').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfImpresora').val() != "") {
        divImpresora.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfImpresora').val(), $('#cphContenido_hfImpresora').val());
    }

    $("#cphContenido_chkImpresora").trigger("change");

    // #endregion

    // #region Foto 03.02: Switch

    $('#cphContenido_chkSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSwitch, "#divSwitch");
        else
            habilitarRealUploader(true, divSwitch, "#divSwitch");
    });

    poSwitchComentario = $("#spSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocSwitchComentario').html();
        }
    });

    poSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSwitchComentario.on('shown.bs.popover', function () {
        $("#txtSwitchComentario").val($("#cphContenido_hfSwitchComentario").val());
        $("#txtSwitchComentario").focus();
        $("#txtSwitchComentario").keyup(function () {
            $("#cphContenido_hfSwitchComentario").val($(this).val());
        });
    });

    var divSwitch = new RealUploader("#divSwitch", {
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
                $('#cphContenido_hfSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSwitch').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSwitch').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSwitch').val() != "") {
        divSwitch.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSwitch').val(), $('#cphContenido_hfSwitch').val());
    }

    $("#cphContenido_chkSwitch").trigger("change");

    // #endregion

    // #region Foto 03.03: Router

    $('#cphContenido_chkRouter').change(function () {
        var blnActivo = $("#cphContenido_chkRouter").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRouter, "#divRouter");
        else
            habilitarRealUploader(true, divRouter, "#divRouter");
    });

    poRouterComentario = $("#spRouterComentario").popover({
        html: true,
        content: function () {
            return $('#pocRouterComentario').html();
        }
    });

    poRouterComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRouterComentario.on('shown.bs.popover', function () {
        $("#txtRouterComentario").val($("#cphContenido_hfRouterComentario").val());
        $("#txtRouterComentario").focus();
        $("#txtRouterComentario").keyup(function () {
            $("#cphContenido_hfRouterComentario").val($(this).val());
        });
    });

    var divRouter = new RealUploader("#divRouter", {
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
                $('#cphContenido_hfRouter').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRouter').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfRouter').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRouter').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRouter').val() != "") {
        divRouter.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRouter').val(), $('#cphContenido_hfRouter').val());
    }

    $("#cphContenido_chkRouter").trigger("change");

    // #endregion

    // #region Foto 03.04: PCsEncendidas

    $('#cphContenido_chkPCsEncendidas').change(function () {
        var blnActivo = $("#cphContenido_chkPCsEncendidas").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPCsEncendidas, "#divPCsEncendidas");
        else
            habilitarRealUploader(true, divPCsEncendidas, "#divPCsEncendidas");
    });

    poPCsEncendidasComentario = $("#spPCsEncendidasComentario").popover({
        html: true,
        content: function () {
            return $('#pocPCsEncendidasComentario').html();
        }
    });

    poPCsEncendidasComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPCsEncendidasComentario.on('shown.bs.popover', function () {
        $("#txtPCsEncendidasComentario").val($("#cphContenido_hfPCsEncendidasComentario").val());
        $("#txtPCsEncendidasComentario").focus();
        $("#txtPCsEncendidasComentario").keyup(function () {
            $("#cphContenido_hfPCsEncendidasComentario").val($(this).val());
        });
    });

    var divPCsEncendidas = new RealUploader("#divPCsEncendidas", {
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
                $('#cphContenido_hfPCsEncendidas').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPCsEncendidas').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPCsEncendidas').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPCsEncendidas').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPCsEncendidas').val() != "") {
        divPCsEncendidas.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPCsEncendidas').val(), $('#cphContenido_hfPCsEncendidas').val());
    }

    $("#cphContenido_chkPCsEncendidas").trigger("change");

    // #endregion

    // #region Foto 03.05: UPS

    $('#cphContenido_chkUPS').change(function () {
        var blnActivo = $("#cphContenido_chkUPS").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divUPS, "#divUPS");
        else
            habilitarRealUploader(true, divUPS, "#divUPS");
    });

    poUPSComentario = $("#spUPSComentario").popover({
        html: true,
        content: function () {
            return $('#pocUPSComentario').html();
        }
    });

    poUPSComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poUPSComentario.on('shown.bs.popover', function () {
        $("#txtUPSComentario").val($("#cphContenido_hfUPSComentario").val());
        $("#txtUPSComentario").focus();
        $("#txtUPSComentario").keyup(function () {
            $("#cphContenido_hfUPSComentario").val($(this).val());
        });
    });

    var divUPS = new RealUploader("#divUPS", {
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
                $('#cphContenido_hfUPS').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfUPS').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfUPS').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfUPS').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfUPS').val() != "") {
        divUPS.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfUPS').val(), $('#cphContenido_hfUPS').val());
    }

    $("#cphContenido_chkUPS").trigger("change");

    // #endregion

    // #region Foto 03.06: Access Point

    $('#cphContenido_chkAccessPoint').change(function () {
        var blnActivo = $("#cphContenido_chkAccessPoint").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAccessPoint, "#divAccessPoint");
        else
            habilitarRealUploader(true, divAccessPoint, "#divAccessPoint");
    });

    poAccessPointComentario = $("#spAccessPointComentario").popover({
        html: true,
        content: function () {
            return $('#pocAccessPointComentario').html();
        }
    });

    poAccessPointComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAccessPointComentario.on('shown.bs.popover', function () {
        $("#txtAccessPointComentario").val($("#cphContenido_hfAccessPointComentario").val());
        $("#txtAccessPointComentario").focus();
        $("#txtAccessPointComentario").keyup(function () {
            $("#cphContenido_hfAccessPointComentario").val($(this).val());
        });
    });

    var divAccessPoint = new RealUploader("#divAccessPoint", {
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
                $('#cphContenido_hfAccessPoint').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAccessPoint').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfAccessPoint').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAccessPoint').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfAccessPoint').val() != "") {
        divAccessPoint.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfAccessPoint').val(), $('#cphContenido_hfAccessPoint').val());
    }

    $("#cphContenido_chkAccessPoint").trigger("change");

    // #endregion

    // #region Foto 04.01: ODU-CPE

    $('#cphContenido_chkODUCPE').change(function () {
        var blnActivo = $("#cphContenido_chkODUCPE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divODUCPE, "#divODUCPE");
        else
            habilitarRealUploader(true, divODUCPE, "#divODUCPE");
    });

    poODUCPEComentario = $("#spODUCPEComentario").popover({
        html: true,
        content: function () {
            return $('#pocODUCPEComentario').html();
        }
    });

    poODUCPEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poODUCPEComentario.on('shown.bs.popover', function () {
        $("#txtODUCPEComentario").val($("#cphContenido_hfODUCPEComentario").val());
        $("#txtODUCPEComentario").focus();
        $("#txtODUCPEComentario").keyup(function () {
            $("#cphContenido_hfODUCPEComentario").val($(this).val());
        });
    });

    var divODUCPE = new RealUploader("#divODUCPE", {
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
                $('#cphContenido_hfODUCPE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfODUCPE').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfODUCPE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfODUCPE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfODUCPE').val() != "") {
        divODUCPE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfODUCPE').val(), $('#cphContenido_hfODUCPE').val());
    }

    $("#cphContenido_chkODUCPE").trigger("change");

    // #endregion

    // #region Foto 04.02: Mástil

    $('#cphContenido_chkMastil').change(function () {
        var blnActivo = $("#cphContenido_chkMastil").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMastil, "#divMastil");
        else
            habilitarRealUploader(true, divMastil, "#divMastil");
    });

    poMastilComentario = $("#spMastilComentario").popover({
        html: true,
        content: function () {
            return $('#pocMastilComentario').html();
        }
    });

    poMastilComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMastilComentario.on('shown.bs.popover', function () {
        $("#txtMastilComentario").val($("#cphContenido_hfMastilComentario").val());
        $("#txtMastilComentario").focus();
        $("#txtMastilComentario").keyup(function () {
            $("#cphContenido_hfMastilComentario").val($(this).val());
        });
    });

    var divMastil = new RealUploader("#divMastil", {
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
                $('#cphContenido_hfMastil').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMastil').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMastil').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMastil').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMastil').val() != "") {
        divMastil.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMastil').val(), $('#cphContenido_hfMastil').val());
    }

    $("#cphContenido_chkMastil").trigger("change");

    // #endregion

    // #region Foto 04.03: Panorámica de Antena Instalada en Mástil

    $('#cphContenido_chkPanoramicaAntenaInstaladaMastil').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaAntenaInstaladaMastil").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaAntenaInstaladaMastil, "#divPanoramicaAntenaInstaladaMastil");
        else
            habilitarRealUploader(true, divPanoramicaAntenaInstaladaMastil, "#divPanoramicaAntenaInstaladaMastil");
    });

    poPanoramicaAntenaInstaladaMastilComentario = $("#spPanoramicaAntenaInstaladaMastilComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaAntenaInstaladaMastilComentario').html();
        }
    });

    poPanoramicaAntenaInstaladaMastilComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaAntenaInstaladaMastilComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaAntenaInstaladaMastilComentario").val($("#cphContenido_hfPanoramicaAntenaInstaladaMastilComentario").val());
        $("#txtPanoramicaAntenaInstaladaMastilComentario").focus();
        $("#txtPanoramicaAntenaInstaladaMastilComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaAntenaInstaladaMastilComentario").val($(this).val());
        });
    });

    var divPanoramicaAntenaInstaladaMastil = new RealUploader("#divPanoramicaAntenaInstaladaMastil", {
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
                $('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val() != "") {
        divPanoramicaAntenaInstaladaMastil.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val(), $('#cphContenido_hfPanoramicaAntenaInstaladaMastil').val());
    }

    $("#cphContenido_chkPanoramicaAntenaInstaladaMastil").trigger("change");

    // #endregion

    // #region Foto 04.04: Recorrido STFP Cat5e

    $('#cphContenido_chkRecorridoSFTPCat5e').change(function () {
        var blnActivo = $("#cphContenido_chkRecorridoSFTPCat5e").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRecorridoSFTPCat5e, "#divRecorridoSFTPCat5e");
        else
            habilitarRealUploader(true, divRecorridoSFTPCat5e, "#divRecorridoSFTPCat5e");
    });

    poRecorridoSFTPCat5eComentario = $("#spRecorridoSFTPCat5eComentario").popover({
        html: true,
        content: function () {
            return $('#pocRecorridoSFTPCat5eComentario').html();
        }
    });

    poRecorridoSFTPCat5eComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRecorridoSFTPCat5eComentario.on('shown.bs.popover', function () {
        $("#txtRecorridoSFTPCat5eComentario").val($("#cphContenido_hfRecorridoSFTPCat5eComentario").val());
        $("#txtRecorridoSFTPCat5eComentario").focus();
        $("#txtRecorridoSFTPCat5eComentario").keyup(function () {
            $("#cphContenido_hfRecorridoSFTPCat5eComentario").val($(this).val());
        });
    });

    var divRecorridoSFTPCat5e = new RealUploader("#divRecorridoSFTPCat5e", {
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
                $('#cphContenido_hfRecorridoSFTPCat5e').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoSFTPCat5e').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfRecorridoSFTPCat5e').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoSFTPCat5e').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRecorridoSFTPCat5e').val() != "") {
        divRecorridoSFTPCat5e.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRecorridoSFTPCat5e').val(), $('#cphContenido_hfRecorridoSFTPCat5e').val());
    }

    $("#cphContenido_chkRecorridoSFTPCat5e").trigger("change");

    // #endregion

    // #region Foto 04.05: Ingreso de SFTP

    $('#cphContenido_chkIngresoSFTP').change(function () {
        var blnActivo = $("#cphContenido_chkIngresoSFTP").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divIngresoSFTP, "#divIngresoSFTP");
        else
            habilitarRealUploader(true, divIngresoSFTP, "#divIngresoSFTP");
    });

    poIngresoSFTPComentario = $("#spIngresoSFTPComentario").popover({
        html: true,
        content: function () {
            return $('#pocIngresoSFTPComentario').html();
        }
    });

    poIngresoSFTPComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poIngresoSFTPComentario.on('shown.bs.popover', function () {
        $("#txtIngresoSFTPComentario").val($("#cphContenido_hfIngresoSFTPComentario").val());
        $("#txtIngresoSFTPComentario").focus();
        $("#txtIngresoSFTPComentario").keyup(function () {
            $("#cphContenido_hfIngresoSFTPComentario").val($(this).val());
        });
    });

    var divIngresoSFTP = new RealUploader("#divIngresoSFTP", {
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
                $('#cphContenido_hfIngresoSFTP').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfIngresoSFTP').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfIngresoSFTP').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfIngresoSFTP').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfIngresoSFTP').val() != "") {
        divIngresoSFTP.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfIngresoSFTP').val(), $('#cphContenido_hfIngresoSFTP').val());
    }

    $("#cphContenido_chkIngresoSFTP").trigger("change");

    // #endregion

    // #region Foto 04.06: Recorrido de SFTP por Canaleta

    $('#cphContenido_chkRecorridoSFTPCanaleta').change(function () {
        var blnActivo = $("#cphContenido_chkRecorridoSFTPCanaleta").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divRecorridoSFTPCanaleta, "#divRecorridoSFTPCanaleta");
        else
            habilitarRealUploader(true, divRecorridoSFTPCanaleta, "#divRecorridoSFTPCanaleta");
    });

    poRecorridoSFTPCanaletaComentario = $("#spRecorridoSFTPCanaletaComentario").popover({
        html: true,
        content: function () {
            return $('#pocRecorridoSFTPCanaletaComentario').html();
        }
    });

    poRecorridoSFTPCanaletaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRecorridoSFTPCanaletaComentario.on('shown.bs.popover', function () {
        $("#txtRecorridoSFTPCanaletaComentario").val($("#cphContenido_hfRecorridoSFTPCanaletaComentario").val());
        $("#txtRecorridoSFTPCanaletaComentario").focus();
        $("#txtRecorridoSFTPCanaletaComentario").keyup(function () {
            $("#cphContenido_hfRecorridoSFTPCanaletaComentario").val($(this).val());
        });
    });

    var divRecorridoSFTPCanaleta = new RealUploader("#divRecorridoSFTPCanaleta", {
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
                $('#cphContenido_hfRecorridoSFTPCanaleta').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoSFTPCanaleta').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfRecorridoSFTPCanaleta').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfRecorridoSFTPCanaleta').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfRecorridoSFTPCanaleta').val() != "") {
        divRecorridoSFTPCanaleta.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfRecorridoSFTPCanaleta').val(), $('#cphContenido_hfRecorridoSFTPCanaleta').val());
    }

    $("#cphContenido_chkRecorridoSFTPCanaleta").trigger("change");

    // #endregion

    // #region Foto 04.07: POE

    $('#cphContenido_chkPOE').change(function () {
        var blnActivo = $("#cphContenido_chkPOE").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPOE, "#divPOE");
        else
            habilitarRealUploader(true, divPOE, "#divPOE");
    });

    poPOEComentario = $("#spPOEComentario").popover({
        html: true,
        content: function () {
            return $('#pocPOEComentario').html();
        }
    });

    poPOEComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPOEComentario.on('shown.bs.popover', function () {
        $("#txtPOEComentario").val($("#cphContenido_hfPOEComentario").val());
        $("#txtPOEComentario").focus();
        $("#txtPOEComentario").keyup(function () {
            $("#cphContenido_hfPOEComentario").val($(this).val());
        });
    });

    var divPOE = new RealUploader("#divPOE", {
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
                $('#cphContenido_hfPOE').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPOE').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPOE').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPOE').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPOE').val() != "") {
        divPOE.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPOE').val(), $('#cphContenido_hfPOE').val());
    }

    $("#cphContenido_chkPOE").trigger("change");

    // #endregion

    // #region Foto 04.08: Patch cord POE / Router

    $('#cphContenido_chkPatchCordPOERouter').change(function () {
        var blnActivo = $("#cphContenido_chkPatchCordPOERouter").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPatchCordPOERouter, "#divPatchCordPOERouter");
        else
            habilitarRealUploader(true, divPatchCordPOERouter, "#divPatchCordPOERouter");
    });

    poPatchCordPOERouterComentario = $("#spPatchCordPOERouterComentario").popover({
        html: true,
        content: function () {
            return $('#pocPatchCordPOERouterComentario').html();
        }
    });

    poPatchCordPOERouterComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPatchCordPOERouterComentario.on('shown.bs.popover', function () {
        $("#txtPatchCordPOERouterComentario").val($("#cphContenido_hfPatchCordPOERouterComentario").val());
        $("#txtPatchCordPOERouterComentario").focus();
        $("#txtPatchCordPOERouterComentario").keyup(function () {
            $("#cphContenido_hfPatchCordPOERouterComentario").val($(this).val());
        });
    });

    var divPatchCordPOERouter = new RealUploader("#divPatchCordPOERouter", {
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
                $('#cphContenido_hfPatchCordPOERouter').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPatchCordPOERouter').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPatchCordPOERouter').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPatchCordPOERouter').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPatchCordPOERouter').val() != "") {
        divPatchCordPOERouter.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPatchCordPOERouter').val(), $('#cphContenido_hfPatchCordPOERouter').val());
    }

    $("#cphContenido_chkPatchCordPOERouter").trigger("change");

    // #endregion

    // #region Foto 05.01: Tablero General / Secundario

    $('#cphContenido_chkTableroGeneralSecundario').change(function () {
        var blnActivo = $("#cphContenido_chkTableroGeneralSecundario").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTableroGeneralSecundario, "#divTableroGeneralSecundario");
        else
            habilitarRealUploader(true, divTableroGeneralSecundario, "#divTableroGeneralSecundario");
    });

    poTableroGeneralSecundarioComentario = $("#spTableroGeneralSecundarioComentario").popover({
        html: true,
        content: function () {
            return $('#pocTableroGeneralSecundarioComentario').html();
        }
    });

    poTableroGeneralSecundarioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTableroGeneralSecundarioComentario.on('shown.bs.popover', function () {
        $("#txtTableroGeneralSecundarioComentario").val($("#cphContenido_hfTableroGeneralSecundarioComentario").val());
        $("#txtTableroGeneralSecundarioComentario").focus();
        $("#txtTableroGeneralSecundarioComentario").keyup(function () {
            $("#cphContenido_hfTableroGeneralSecundarioComentario").val($(this).val());
        });
    });

    var divTableroGeneralSecundario = new RealUploader("#divTableroGeneralSecundario", {
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
                $('#cphContenido_hfTableroGeneralSecundario').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTableroGeneralSecundario').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTableroGeneralSecundario').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTableroGeneralSecundario').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTableroGeneralSecundario').val() != "") {
        divTableroGeneralSecundario.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTableroGeneralSecundario').val(), $('#cphContenido_hfTableroGeneralSecundario').val());
    }

    $("#cphContenido_chkTableroGeneralSecundario").trigger("change");

    // #endregion

    // #region Foto 05.02: Instalación de Breaker

    $('#cphContenido_chkInstalacionBreaker').change(function () {
        var blnActivo = $("#cphContenido_chkInstalacionBreaker").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divInstalacionBreaker, "#divInstalacionBreaker");
        else
            habilitarRealUploader(true, divInstalacionBreaker, "#divInstalacionBreaker");
    });

    poInstalacionBreakerComentario = $("#spInstalacionBreakerComentario").popover({
        html: true,
        content: function () {
            return $('#pocInstalacionBreakerComentario').html();
        }
    });

    poInstalacionBreakerComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poInstalacionBreakerComentario.on('shown.bs.popover', function () {
        $("#txtInstalacionBreakerComentario").val($("#cphContenido_hfInstalacionBreakerComentario").val());
        $("#txtInstalacionBreakerComentario").focus();
        $("#txtInstalacionBreakerComentario").keyup(function () {
            $("#cphContenido_hfInstalacionBreakerComentario").val($(this).val());
        });
    });

    var divInstalacionBreaker = new RealUploader("#divInstalacionBreaker", {
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
                $('#cphContenido_hfInstalacionBreaker').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfInstalacionBreaker').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfInstalacionBreaker').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfInstalacionBreaker').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfInstalacionBreaker').val() != "") {
        divInstalacionBreaker.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfInstalacionBreaker').val(), $('#cphContenido_hfInstalacionBreaker').val());
    }

    $("#cphContenido_chkInstalacionBreaker").trigger("change");

    // #endregion

    // #region Foto 05.03: Cable Conexión Eléctrica

    $('#cphContenido_chkCableConexionElectrica').change(function () {
        var blnActivo = $("#cphContenido_chkCableConexionElectrica").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCableConexionElectrica, "#divCableConexionElectrica");
        else
            habilitarRealUploader(true, divCableConexionElectrica, "#divCableConexionElectrica");
    });

    poCableConexionElectricaComentario = $("#spCableConexionElectricaComentario").popover({
        html: true,
        content: function () {
            return $('#pocCableConexionElectricaComentario').html();
        }
    });

    poCableConexionElectricaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCableConexionElectricaComentario.on('shown.bs.popover', function () {
        $("#txtCableConexionElectricaComentario").val($("#cphContenido_hfCableConexionElectricaComentario").val());
        $("#txtCableConexionElectricaComentario").focus();
        $("#txtCableConexionElectricaComentario").keyup(function () {
            $("#cphContenido_hfCableConexionElectricaComentario").val($(this).val());
        });
    });

    var divCableConexionElectrica = new RealUploader("#divCableConexionElectrica", {
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
                $('#cphContenido_hfCableConexionElectrica').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCableConexionElectrica').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfCableConexionElectrica').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCableConexionElectrica').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCableConexionElectrica').val() != "") {
        divCableConexionElectrica.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCableConexionElectrica').val(), $('#cphContenido_hfCableConexionElectrica').val());
    }

    $("#cphContenido_chkCableConexionElectrica").trigger("change");

    // #endregion

    // #region Foto 05.04: Tomas de Energía

    $('#cphContenido_chkTomasEnergia').change(function () {
        var blnActivo = $("#cphContenido_chkTomasEnergia").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTomasEnergia, "#divTomasEnergia");
        else
            habilitarRealUploader(true, divTomasEnergia, "#divTomasEnergia");
    });

    poTomasEnergiaComentario = $("#spTomasEnergiaComentario").popover({
        html: true,
        content: function () {
            return $('#pocTomasEnergiaComentario').html();
        }
    });

    poTomasEnergiaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTomasEnergiaComentario.on('shown.bs.popover', function () {
        $("#txtTomasEnergiaComentario").val($("#cphContenido_hfTomasEnergiaComentario").val());
        $("#txtTomasEnergiaComentario").focus();
        $("#txtTomasEnergiaComentario").keyup(function () {
            $("#cphContenido_hfTomasEnergiaComentario").val($(this).val());
        });
    });

    var divTomasEnergia = new RealUploader("#divTomasEnergia", {
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
                $('#cphContenido_hfTomasEnergia').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTomasEnergia').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTomasEnergia').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTomasEnergia').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTomasEnergia').val() != "") {
        divTomasEnergia.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTomasEnergia').val(), $('#cphContenido_hfTomasEnergia').val());
    }

    $("#cphContenido_chkTomasEnergia").trigger("change");

    // #endregion

    // #region Foto 05.05: Foto Interna de Instalación de Breaker

    $('#cphContenido_chkFotoInternaInstalacionBreaker').change(function () {
        var blnActivo = $("#cphContenido_chkFotoInternaInstalacionBreaker").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divFotoInternaInstalacionBreaker, "#divFotoInternaInstalacionBreaker");
        else
            habilitarRealUploader(true, divFotoInternaInstalacionBreaker, "#divFotoInternaInstalacionBreaker");
    });

    poFotoInternaInstalacionBreakerComentario = $("#spFotoInternaInstalacionBreakerComentario").popover({
        html: true,
        content: function () {
            return $('#pocFotoInternaInstalacionBreakerComentario').html();
        }
    });

    poFotoInternaInstalacionBreakerComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poFotoInternaInstalacionBreakerComentario.on('shown.bs.popover', function () {
        $("#txtFotoInternaInstalacionBreakerComentario").val($("#cphContenido_hfFotoInternaInstalacionBreakerComentario").val());
        $("#txtFotoInternaInstalacionBreakerComentario").focus();
        $("#txtFotoInternaInstalacionBreakerComentario").keyup(function () {
            $("#cphContenido_hfFotoInternaInstalacionBreakerComentario").val($(this).val());
        });
    });

    var divFotoInternaInstalacionBreaker = new RealUploader("#divFotoInternaInstalacionBreaker", {
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
                $('#cphContenido_hfFotoInternaInstalacionBreaker').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfFotoInternaInstalacionBreaker').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfFotoInternaInstalacionBreaker').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfFotoInternaInstalacionBreaker').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfFotoInternaInstalacionBreaker').val() != "") {
        divFotoInternaInstalacionBreaker.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfFotoInternaInstalacionBreaker').val(), $('#cphContenido_hfFotoInternaInstalacionBreaker').val());
    }

    $("#cphContenido_chkFotoInternaInstalacionBreaker").trigger("change");

    // #endregion

    // #region Foto 06.01: DNI / DJ Representante / Abonado

    $('#cphContenido_chkDNIDJRepresentanteAbonado01').change(function () {
        var blnActivo = $("#cphContenido_chkDNIDJRepresentanteAbonado01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divDNIDJRepresentanteAbonado01, "#divDNIDJRepresentanteAbonado01");
        else
            habilitarRealUploader(true, divDNIDJRepresentanteAbonado01, "#divDNIDJRepresentanteAbonado01");
    });

    poDNIDJRepresentanteAbonado01Comentario = $("#spDNIDJRepresentanteAbonado01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocDNIDJRepresentanteAbonado01Comentario').html();
        }
    });

    poDNIDJRepresentanteAbonado01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDNIDJRepresentanteAbonado01Comentario.on('shown.bs.popover', function () {
        $("#txtDNIDJRepresentanteAbonado01Comentario").val($("#cphContenido_hfDNIDJRepresentanteAbonado01Comentario").val());
        $("#txtDNIDJRepresentanteAbonado01Comentario").focus();
        $("#txtDNIDJRepresentanteAbonado01Comentario").keyup(function () {
            $("#cphContenido_hfDNIDJRepresentanteAbonado01Comentario").val($(this).val());
        });
    });

    var divDNIDJRepresentanteAbonado01 = new RealUploader("#divDNIDJRepresentanteAbonado01", {
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
                $('#cphContenido_hfDNIDJRepresentanteAbonado01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfDNIDJRepresentanteAbonado01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfDNIDJRepresentanteAbonado01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfDNIDJRepresentanteAbonado01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfDNIDJRepresentanteAbonado01').val() != "") {
        divDNIDJRepresentanteAbonado01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfDNIDJRepresentanteAbonado01').val(), $('#cphContenido_hfDNIDJRepresentanteAbonado01').val());
    }

    $("#cphContenido_chkDNIDJRepresentanteAbonado01").trigger("change");

    // #endregion

    // #region Foto 06.02: DNI / DJ Representante / Abonado

    $('#cphContenido_chkDNIDJRepresentanteAbonado02').change(function () {
        var blnActivo = $("#cphContenido_chkDNIDJRepresentanteAbonado02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divDNIDJRepresentanteAbonado02, "#divDNIDJRepresentanteAbonado02");
        else
            habilitarRealUploader(true, divDNIDJRepresentanteAbonado02, "#divDNIDJRepresentanteAbonado02");
    });

    poDNIDJRepresentanteAbonado02Comentario = $("#spDNIDJRepresentanteAbonado02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocDNIDJRepresentanteAbonado02Comentario').html();
        }
    });

    poDNIDJRepresentanteAbonado02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poDNIDJRepresentanteAbonado02Comentario.on('shown.bs.popover', function () {
        $("#txtDNIDJRepresentanteAbonado02Comentario").val($("#cphContenido_hfDNIDJRepresentanteAbonado02Comentario").val());
        $("#txtDNIDJRepresentanteAbonado02Comentario").focus();
        $("#txtDNIDJRepresentanteAbonado02Comentario").keyup(function () {
            $("#cphContenido_hfDNIDJRepresentanteAbonado02Comentario").val($(this).val());
        });
    });

    var divDNIDJRepresentanteAbonado02 = new RealUploader("#divDNIDJRepresentanteAbonado02", {
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
                $('#cphContenido_hfDNIDJRepresentanteAbonado02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfDNIDJRepresentanteAbonado02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfDNIDJRepresentanteAbonado02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfDNIDJRepresentanteAbonado02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfDNIDJRepresentanteAbonado02').val() != "") {
        divDNIDJRepresentanteAbonado02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfDNIDJRepresentanteAbonado02').val(), $('#cphContenido_hfDNIDJRepresentanteAbonado02').val());
    }

    $("#cphContenido_chkDNIDJRepresentanteAbonado02").trigger("change");

    // #endregion

    // #region Foto 07.01: Switch

    $('#cphContenido_chkEquipoSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoSwitch, "#divEquipoSwitch");
        else
            habilitarRealUploader(true, divEquipoSwitch, "#divEquipoSwitch");
    });

    poEquipoSwitchComentario = $("#spEquipoSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoSwitchComentario').html();
        }
    });

    poEquipoSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoSwitchComentario.on('shown.bs.popover', function () {
        $("#txtEquipoSwitchComentario").val($("#cphContenido_hfEquipoSwitchComentario").val());
        $("#txtEquipoSwitchComentario").focus();
        $("#txtEquipoSwitchComentario").keyup(function () {
            $("#cphContenido_hfEquipoSwitchComentario").val($(this).val());
        });
    });

    var divEquipoSwitch = new RealUploader("#divEquipoSwitch", {
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
                $('#cphContenido_hfEquipoSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoSwitch').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoSwitch').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoSwitch').val() != "") {
        divEquipoSwitch.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoSwitch').val(), $('#cphContenido_hfEquipoSwitch').val());
    }

    $("#cphContenido_chkEquipoSwitch").trigger("change");

    // #endregion

    // #region Foto 07.02: Router

    $('#cphContenido_chkEquipoRouter').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoRouter").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoRouter, "#divEquipoRouter");
        else
            habilitarRealUploader(true, divEquipoRouter, "#divEquipoRouter");
    });

    poEquipoRouterComentario = $("#spEquipoRouterComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoRouterComentario').html();
        }
    });

    poEquipoRouterComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoRouterComentario.on('shown.bs.popover', function () {
        $("#txtEquipoRouterComentario").val($("#cphContenido_hfEquipoRouterComentario").val());
        $("#txtEquipoRouterComentario").focus();
        $("#txtEquipoRouterComentario").keyup(function () {
            $("#cphContenido_hfEquipoRouterComentario").val($(this).val());
        });
    });

    var divEquipoRouter = new RealUploader("#divEquipoRouter", {
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
                $('#cphContenido_hfEquipoRouter').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoRouter').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoRouter').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoRouter').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoRouter').val() != "") {
        divEquipoRouter.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoRouter').val(), $('#cphContenido_hfEquipoRouter').val());
    }

    $("#cphContenido_chkEquipoRouter").trigger("change");

    // #endregion

    // #region Foto 07.03: Regleta de Energía

    $('#cphContenido_chkEquipoRegletaEnergia').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoRegletaEnergia").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoRegletaEnergia, "#divEquipoRegletaEnergia");
        else
            habilitarRealUploader(true, divEquipoRegletaEnergia, "#divEquipoRegletaEnergia");
    });

    poEquipoRegletaEnergiaComentario = $("#spEquipoRegletaEnergiaComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoRegletaEnergiaComentario').html();
        }
    });

    poEquipoRegletaEnergiaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoRegletaEnergiaComentario.on('shown.bs.popover', function () {
        $("#txtEquipoRegletaEnergiaComentario").val($("#cphContenido_hfEquipoRegletaEnergiaComentario").val());
        $("#txtEquipoRegletaEnergiaComentario").focus();
        $("#txtEquipoRegletaEnergiaComentario").keyup(function () {
            $("#cphContenido_hfEquipoRegletaEnergiaComentario").val($(this).val());
        });
    });

    var divEquipoRegletaEnergia = new RealUploader("#divEquipoRegletaEnergia", {
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
                $('#cphContenido_hfEquipoRegletaEnergia').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoRegletaEnergia').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoRegletaEnergia').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoRegletaEnergia').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoRegletaEnergia').val() != "") {
        divEquipoRegletaEnergia.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoRegletaEnergia').val(), $('#cphContenido_hfEquipoRegletaEnergia').val());
    }

    $("#cphContenido_chkEquipoRegletaEnergia").trigger("change");

    // #endregion

    // #region Foto 07.04: UPS

    $('#cphContenido_chkEquipoUPS').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoUPS").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoUPS, "#divEquipoUPS");
        else
            habilitarRealUploader(true, divEquipoUPS, "#divEquipoUPS");
    });

    poEquipoUPSComentario = $("#spEquipoUPSComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoUPSComentario').html();
        }
    });

    poEquipoUPSComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoUPSComentario.on('shown.bs.popover', function () {
        $("#txtEquipoUPSComentario").val($("#cphContenido_hfEquipoUPSComentario").val());
        $("#txtEquipoUPSComentario").focus();
        $("#txtEquipoUPSComentario").keyup(function () {
            $("#cphContenido_hfEquipoUPSComentario").val($(this).val());
        });
    });

    var divEquipoUPS = new RealUploader("#divEquipoUPS", {
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
                $('#cphContenido_hfEquipoUPS').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoUPS').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoUPS').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoUPS').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoUPS').val() != "") {
        divEquipoUPS.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoUPS').val(), $('#cphContenido_hfEquipoUPS').val());
    }

    $("#cphContenido_chkEquipoUPS").trigger("change");

    // #endregion

    // #region Foto 07.05: Computador(as)

    $('#cphContenido_chkEquipoComputadoras').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoComputadoras").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoComputadoras, "#divEquipoComputadoras");
        else
            habilitarRealUploader(true, divEquipoComputadoras, "#divEquipoComputadoras");
    });

    poEquipoComputadorasComentario = $("#spEquipoComputadorasComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoComputadorasComentario').html();
        }
    });

    poEquipoComputadorasComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoComputadorasComentario.on('shown.bs.popover', function () {
        $("#txtEquipoComputadorasComentario").val($("#cphContenido_hfEquipoComputadorasComentario").val());
        $("#txtEquipoComputadorasComentario").focus();
        $("#txtEquipoComputadorasComentario").keyup(function () {
            $("#cphContenido_hfEquipoComputadorasComentario").val($(this).val());
        });
    });

    var divEquipoComputadoras = new RealUploader("#divEquipoComputadoras", {
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
                $('#cphContenido_hfEquipoComputadoras').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoComputadoras').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoComputadoras').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoComputadoras').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoComputadoras').val() != "") {
        divEquipoComputadoras.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoComputadoras').val(), $('#cphContenido_hfEquipoComputadoras').val());
    }

    $("#cphContenido_chkEquipoComputadoras").trigger("change");

    // #endregion

    // #region Foto 07.06: Access Point

    $('#cphContenido_chkEquipoAccessPoint').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoAccessPoint").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoAccessPoint, "#divEquipoAccessPoint");
        else
            habilitarRealUploader(true, divEquipoAccessPoint, "#divEquipoAccessPoint");
    });

    poEquipoAccessPointComentario = $("#spEquipoAccessPointComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoAccessPointComentario').html();
        }
    });

    poEquipoAccessPointComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoAccessPointComentario.on('shown.bs.popover', function () {
        $("#txtEquipoAccessPointComentario").val($("#cphContenido_hfEquipoAccessPointComentario").val());
        $("#txtEquipoAccessPointComentario").focus();
        $("#txtEquipoAccessPointComentario").keyup(function () {
            $("#cphContenido_hfEquipoAccessPointComentario").val($(this).val());
        });
    });

    var divEquipoAccessPoint = new RealUploader("#divEquipoAccessPoint", {
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
                $('#cphContenido_hfEquipoAccessPoint').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoAccessPoint').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoAccessPoint').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoAccessPoint').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoAccessPoint').val() != "") {
        divEquipoAccessPoint.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoAccessPoint').val(), $('#cphContenido_hfEquipoAccessPoint').val());
    }

    $("#cphContenido_chkEquipoAccessPoint").trigger("change");

    // #endregion

    // #region Foto 07.07: Impresora

    $('#cphContenido_chkEquipoImpresora').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoImpresora").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoImpresora, "#divEquipoImpresora");
        else
            habilitarRealUploader(true, divEquipoImpresora, "#divEquipoImpresora");
    });

    poEquipoImpresoraComentario = $("#spEquipoImpresoraComentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoImpresoraComentario').html();
        }
    });

    poEquipoImpresoraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoImpresoraComentario.on('shown.bs.popover', function () {
        $("#txtEquipoImpresoraComentario").val($("#cphContenido_hfEquipoImpresoraComentario").val());
        $("#txtEquipoImpresoraComentario").focus();
        $("#txtEquipoImpresoraComentario").keyup(function () {
            $("#cphContenido_hfEquipoImpresoraComentario").val($(this).val());
        });
    });

    var divEquipoImpresora = new RealUploader("#divEquipoImpresora", {
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
                $('#cphContenido_hfEquipoImpresora').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoImpresora').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoImpresora').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoImpresora').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoImpresora').val() != "") {
        divEquipoImpresora.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoImpresora').val(), $('#cphContenido_hfEquipoImpresora').val());
    }

    $("#cphContenido_chkEquipoImpresora").trigger("change");

    // #endregion

    // #region Foto 07.08: Panoramica de Sala de Equipos

    $('#cphContenido_chkPanoramicaSalaEquipos').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaSalaEquipos").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaSalaEquipos, "#divPanoramicaSalaEquipos");
        else
            habilitarRealUploader(true, divPanoramicaSalaEquipos, "#divPanoramicaSalaEquipos");
    });

    poPanoramicaSalaEquiposComentario = $("#spPanoramicaSalaEquiposComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaSalaEquiposComentario').html();
        }
    });

    poPanoramicaSalaEquiposComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaSalaEquiposComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaSalaEquiposComentario").val($("#cphContenido_hfPanoramicaSalaEquiposComentario").val());
        $("#txtPanoramicaSalaEquiposComentario").focus();
        $("#txtPanoramicaSalaEquiposComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaSalaEquiposComentario").val($(this).val());
        });
    });

    var divPanoramicaSalaEquipos = new RealUploader("#divPanoramicaSalaEquipos", {
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
                $('#cphContenido_hfPanoramicaSalaEquipos').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaSalaEquipos').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaSalaEquipos').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaSalaEquipos').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaSalaEquipos').val() != "") {
        divPanoramicaSalaEquipos.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaSalaEquipos').val(), $('#cphContenido_hfPanoramicaSalaEquipos').val());
    }

    $("#cphContenido_chkPanoramicaSalaEquipos").trigger("change");

    // #endregion

    // #region Foto 07.09: JACK RJ45

    $('#cphContenido_chkEquipoJACKRJ45').change(function () {
        var blnActivo = $("#cphContenido_chkEquipoJACKRJ45").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEquipoJACKRJ45, "#divEquipoJACKRJ45");
        else
            habilitarRealUploader(true, divEquipoJACKRJ45, "#divEquipoJACKRJ45");
    });

    poEquipoJACKRJ45Comentario = $("#spEquipoJACKRJ45Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEquipoJACKRJ45Comentario').html();
        }
    });

    poEquipoJACKRJ45Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEquipoJACKRJ45Comentario.on('shown.bs.popover', function () {
        $("#txtEquipoJACKRJ45Comentario").val($("#cphContenido_hfEquipoJACKRJ45Comentario").val());
        $("#txtEquipoJACKRJ45Comentario").focus();
        $("#txtEquipoJACKRJ45Comentario").keyup(function () {
            $("#cphContenido_hfEquipoJACKRJ45Comentario").val($(this).val());
        });
    });

    var divEquipoJACKRJ45 = new RealUploader("#divEquipoJACKRJ45", {
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
                $('#cphContenido_hfEquipoJACKRJ45').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEquipoJACKRJ45').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEquipoJACKRJ45').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEquipoJACKRJ45').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEquipoJACKRJ45').val() != "") {
        divEquipoJACKRJ45.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEquipoJACKRJ45').val(), $('#cphContenido_hfEquipoJACKRJ45').val());
    }

    $("#cphContenido_chkEquipoJACKRJ45").trigger("change");

    // #endregion

    // #region Foto 08.01: Instalación del Pozo a Tierra

    $('#cphContenido_chkPTInstalacionPozoTierra').change(function () {
        var blnActivo = $("#cphContenido_chkPTInstalacionPozoTierra").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTInstalacionPozoTierra, "#divPTInstalacionPozoTierra");
        else
            habilitarRealUploader(true, divPTInstalacionPozoTierra, "#divPTInstalacionPozoTierra");
    });

    poPTInstalacionPozoTierraComentario = $("#spPTInstalacionPozoTierraComentario").popover({
        html: true,
        content: function () {
            return $('#pocPTInstalacionPozoTierraComentario').html();
        }
    });

    poPTInstalacionPozoTierraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTInstalacionPozoTierraComentario.on('shown.bs.popover', function () {
        $("#txtPTInstalacionPozoTierraComentario").val($("#cphContenido_hfPTInstalacionPozoTierraComentario").val());
        $("#txtPTInstalacionPozoTierraComentario").focus();
        $("#txtPTInstalacionPozoTierraComentario").keyup(function () {
            $("#cphContenido_hfPTInstalacionPozoTierraComentario").val($(this).val());
        });
    });

    var divPTInstalacionPozoTierra = new RealUploader("#divPTInstalacionPozoTierra", {
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
                $('#cphContenido_hfPTInstalacionPozoTierra').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTInstalacionPozoTierra').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTInstalacionPozoTierra').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTInstalacionPozoTierra').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTInstalacionPozoTierra').val() != "") {
        divPTInstalacionPozoTierra.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTInstalacionPozoTierra').val(), $('#cphContenido_hfPTInstalacionPozoTierra').val());
    }

    $("#cphContenido_chkPTInstalacionPozoTierra").trigger("change");

    // #endregion

    // #region Foto 08.02: Conexiones en la Caja de Registro

    $('#cphContenido_chkPTConexionesCajaRegistro').change(function () {
        var blnActivo = $("#cphContenido_chkPTConexionesCajaRegistro").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTConexionesCajaRegistro, "#divPTConexionesCajaRegistro");
        else
            habilitarRealUploader(true, divPTConexionesCajaRegistro, "#divPTConexionesCajaRegistro");
    });

    poPTConexionesCajaRegistroComentario = $("#spPTConexionesCajaRegistroComentario").popover({
        html: true,
        content: function () {
            return $('#pocPTConexionesCajaRegistroComentario').html();
        }
    });

    poPTConexionesCajaRegistroComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTConexionesCajaRegistroComentario.on('shown.bs.popover', function () {
        $("#txtPTConexionesCajaRegistroComentario").val($("#cphContenido_hfPTConexionesCajaRegistroComentario").val());
        $("#txtPTConexionesCajaRegistroComentario").focus();
        $("#txtPTConexionesCajaRegistroComentario").keyup(function () {
            $("#cphContenido_hfPTConexionesCajaRegistroComentario").val($(this).val());
        });
    });

    var divPTConexionesCajaRegistro = new RealUploader("#divPTConexionesCajaRegistro", {
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
                $('#cphContenido_hfPTConexionesCajaRegistro').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTConexionesCajaRegistro').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTConexionesCajaRegistro').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTConexionesCajaRegistro').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTConexionesCajaRegistro').val() != "") {
        divPTConexionesCajaRegistro.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTConexionesCajaRegistro').val(), $('#cphContenido_hfPTConexionesCajaRegistro').val());
    }

    $("#cphContenido_chkPTConexionesCajaRegistro").trigger("change");

    // #endregion

    // #region Foto 08.03: Escala Utilizada y Resultado de Medición N° 1

    $('#cphContenido_chkPTEscalaUtilizadaResultadoMedicion01').change(function () {
        var blnActivo = $("#cphContenido_chkPTEscalaUtilizadaResultadoMedicion01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTEscalaUtilizadaResultadoMedicion01, "#divPTEscalaUtilizadaResultadoMedicion01");
        else
            habilitarRealUploader(true, divPTEscalaUtilizadaResultadoMedicion01, "#divPTEscalaUtilizadaResultadoMedicion01");
    });

    poPTEscalaUtilizadaResultadoMedicion01Comentario = $("#spPTEscalaUtilizadaResultadoMedicion01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTEscalaUtilizadaResultadoMedicion01Comentario').html();
        }
    });

    poPTEscalaUtilizadaResultadoMedicion01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTEscalaUtilizadaResultadoMedicion01Comentario.on('shown.bs.popover', function () {
        $("#txtPTEscalaUtilizadaResultadoMedicion01Comentario").val($("#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01Comentario").val());
        $("#txtPTEscalaUtilizadaResultadoMedicion01Comentario").focus();
        $("#txtPTEscalaUtilizadaResultadoMedicion01Comentario").keyup(function () {
            $("#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01Comentario").val($(this).val());
        });
    });

    var divPTEscalaUtilizadaResultadoMedicion01 = new RealUploader("#divPTEscalaUtilizadaResultadoMedicion01", {
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
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val() != "") {
        divPTEscalaUtilizadaResultadoMedicion01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val(), $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion01').val());
    }

    $("#cphContenido_chkPTEscalaUtilizadaResultadoMedicion01").trigger("change");

    // #endregion

    // #region Foto 08.04: Escala Utilizada y Resultado de Medición N° 2

    $('#cphContenido_chkPTEscalaUtilizadaResultadoMedicion02').change(function () {
        var blnActivo = $("#cphContenido_chkPTEscalaUtilizadaResultadoMedicion02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTEscalaUtilizadaResultadoMedicion02, "#divPTEscalaUtilizadaResultadoMedicion02");
        else
            habilitarRealUploader(true, divPTEscalaUtilizadaResultadoMedicion02, "#divPTEscalaUtilizadaResultadoMedicion02");
    });

    poPTEscalaUtilizadaResultadoMedicion02Comentario = $("#spPTEscalaUtilizadaResultadoMedicion02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTEscalaUtilizadaResultadoMedicion02Comentario').html();
        }
    });

    poPTEscalaUtilizadaResultadoMedicion02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTEscalaUtilizadaResultadoMedicion02Comentario.on('shown.bs.popover', function () {
        $("#txtPTEscalaUtilizadaResultadoMedicion02Comentario").val($("#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02Comentario").val());
        $("#txtPTEscalaUtilizadaResultadoMedicion02Comentario").focus();
        $("#txtPTEscalaUtilizadaResultadoMedicion02Comentario").keyup(function () {
            $("#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02Comentario").val($(this).val());
        });
    });

    var divPTEscalaUtilizadaResultadoMedicion02 = new RealUploader("#divPTEscalaUtilizadaResultadoMedicion02", {
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
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val() != "") {
        divPTEscalaUtilizadaResultadoMedicion02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val(), $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion02').val());
    }

    $("#cphContenido_chkPTEscalaUtilizadaResultadoMedicion02").trigger("change");

    // #endregion

    // #region Foto 08.05: Escala Utilizada y Resultado de Medición N° 3

    $('#cphContenido_chkPTEscalaUtilizadaResultadoMedicion03').change(function () {
        var blnActivo = $("#cphContenido_chkPTEscalaUtilizadaResultadoMedicion03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTEscalaUtilizadaResultadoMedicion03, "#divPTEscalaUtilizadaResultadoMedicion03");
        else
            habilitarRealUploader(true, divPTEscalaUtilizadaResultadoMedicion03, "#divPTEscalaUtilizadaResultadoMedicion03");
    });

    poPTEscalaUtilizadaResultadoMedicion03Comentario = $("#spPTEscalaUtilizadaResultadoMedicion03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTEscalaUtilizadaResultadoMedicion03Comentario').html();
        }
    });

    poPTEscalaUtilizadaResultadoMedicion03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTEscalaUtilizadaResultadoMedicion03Comentario.on('shown.bs.popover', function () {
        $("#txtPTEscalaUtilizadaResultadoMedicion03Comentario").val($("#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03Comentario").val());
        $("#txtPTEscalaUtilizadaResultadoMedicion03Comentario").focus();
        $("#txtPTEscalaUtilizadaResultadoMedicion03Comentario").keyup(function () {
            $("#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03Comentario").val($(this).val());
        });
    });

    var divPTEscalaUtilizadaResultadoMedicion03 = new RealUploader("#divPTEscalaUtilizadaResultadoMedicion03", {
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
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val() != "") {
        divPTEscalaUtilizadaResultadoMedicion03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val(), $('#cphContenido_hfPTEscalaUtilizadaResultadoMedicion03').val());
    }

    $("#cphContenido_chkPTEscalaUtilizadaResultadoMedicion03").trigger("change");

    // #endregion

    // #region Foto 09.01: Instalación del Pozo a Tierra N° 1

    $('#cphContenido_chkPTPInstalacionPozoTierra01').change(function () {
        var blnActivo = $("#cphContenido_chkPTPInstalacionPozoTierra01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTPInstalacionPozoTierra01, "#divPTPInstalacionPozoTierra01");
        else
            habilitarRealUploader(true, divPTPInstalacionPozoTierra01, "#divPTPInstalacionPozoTierra01");
    });

    poPTPInstalacionPozoTierra01Comentario = $("#spPTPInstalacionPozoTierra01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTPInstalacionPozoTierra01Comentario').html();
        }
    });

    poPTPInstalacionPozoTierra01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTPInstalacionPozoTierra01Comentario.on('shown.bs.popover', function () {
        $("#txtPTPInstalacionPozoTierra01Comentario").val($("#cphContenido_hfPTPInstalacionPozoTierra01Comentario").val());
        $("#txtPTPInstalacionPozoTierra01Comentario").focus();
        $("#txtPTPInstalacionPozoTierra01Comentario").keyup(function () {
            $("#cphContenido_hfPTPInstalacionPozoTierra01Comentario").val($(this).val());
        });
    });

    var divPTPInstalacionPozoTierra01 = new RealUploader("#divPTPInstalacionPozoTierra01", {
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
                $('#cphContenido_hfPTPInstalacionPozoTierra01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTPInstalacionPozoTierra01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTPInstalacionPozoTierra01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTPInstalacionPozoTierra01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTPInstalacionPozoTierra01').val() != "") {
        divPTPInstalacionPozoTierra01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTPInstalacionPozoTierra01').val(), $('#cphContenido_hfPTPInstalacionPozoTierra01').val());
    }

    $("#cphContenido_chkPTPInstalacionPozoTierra01").trigger("change");

    // #endregion

    // #region Foto 09.02: Instalación del Pozo a Tierra N° 2

    $('#cphContenido_chkPTPInstalacionPozoTierra02').change(function () {
        var blnActivo = $("#cphContenido_chkPTPInstalacionPozoTierra02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTPInstalacionPozoTierra02, "#divPTPInstalacionPozoTierra02");
        else
            habilitarRealUploader(true, divPTPInstalacionPozoTierra02, "#divPTPInstalacionPozoTierra02");
    });

    poPTPInstalacionPozoTierra02Comentario = $("#spPTPInstalacionPozoTierra02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTPInstalacionPozoTierra02Comentario').html();
        }
    });

    poPTPInstalacionPozoTierra02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTPInstalacionPozoTierra02Comentario.on('shown.bs.popover', function () {
        $("#txtPTPInstalacionPozoTierra02Comentario").val($("#cphContenido_hfPTPInstalacionPozoTierra02Comentario").val());
        $("#txtPTPInstalacionPozoTierra02Comentario").focus();
        $("#txtPTPInstalacionPozoTierra02Comentario").keyup(function () {
            $("#cphContenido_hfPTPInstalacionPozoTierra02Comentario").val($(this).val());
        });
    });

    var divPTPInstalacionPozoTierra02 = new RealUploader("#divPTPInstalacionPozoTierra02", {
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
                $('#cphContenido_hfPTPInstalacionPozoTierra02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTPInstalacionPozoTierra02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTPInstalacionPozoTierra02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTPInstalacionPozoTierra02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTPInstalacionPozoTierra02').val() != "") {
        divPTPInstalacionPozoTierra02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTPInstalacionPozoTierra02').val(), $('#cphContenido_hfPTPInstalacionPozoTierra02').val());
    }

    $("#cphContenido_chkPTPInstalacionPozoTierra02").trigger("change");

    // #endregion

    // #region Foto 09.03: Escala Utilizada y Resultado de Medición N° 1

    $('#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion01').change(function () {
        var blnActivo = $("#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTPEscalaUtilizadaResultadoMedicion01, "#divPTPEscalaUtilizadaResultadoMedicion01");
        else
            habilitarRealUploader(true, divPTPEscalaUtilizadaResultadoMedicion01, "#divPTPEscalaUtilizadaResultadoMedicion01");
    });

    poPTPEscalaUtilizadaResultadoMedicion01Comentario = $("#spPTPEscalaUtilizadaResultadoMedicion01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTPEscalaUtilizadaResultadoMedicion01Comentario').html();
        }
    });

    poPTPEscalaUtilizadaResultadoMedicion01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTPEscalaUtilizadaResultadoMedicion01Comentario.on('shown.bs.popover', function () {
        $("#txtPTPEscalaUtilizadaResultadoMedicion01Comentario").val($("#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01Comentario").val());
        $("#txtPTPEscalaUtilizadaResultadoMedicion01Comentario").focus();
        $("#txtPTPEscalaUtilizadaResultadoMedicion01Comentario").keyup(function () {
            $("#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01Comentario").val($(this).val());
        });
    });

    var divPTPEscalaUtilizadaResultadoMedicion01 = new RealUploader("#divPTPEscalaUtilizadaResultadoMedicion01", {
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
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val() != "") {
        divPTPEscalaUtilizadaResultadoMedicion01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val(), $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion01').val());
    }

    $("#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion01").trigger("change");

    // #endregion

    // #region Foto 09.04: Escala Utilizada y Resultado de Medición N° 2

    $('#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion02').change(function () {
        var blnActivo = $("#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTPEscalaUtilizadaResultadoMedicion02, "#divPTPEscalaUtilizadaResultadoMedicion02");
        else
            habilitarRealUploader(true, divPTPEscalaUtilizadaResultadoMedicion02, "#divPTPEscalaUtilizadaResultadoMedicion02");
    });

    poPTPEscalaUtilizadaResultadoMedicion02Comentario = $("#spPTPEscalaUtilizadaResultadoMedicion02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTPEscalaUtilizadaResultadoMedicion02Comentario').html();
        }
    });

    poPTPEscalaUtilizadaResultadoMedicion02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTPEscalaUtilizadaResultadoMedicion02Comentario.on('shown.bs.popover', function () {
        $("#txtPTPEscalaUtilizadaResultadoMedicion02Comentario").val($("#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02Comentario").val());
        $("#txtPTPEscalaUtilizadaResultadoMedicion02Comentario").focus();
        $("#txtPTPEscalaUtilizadaResultadoMedicion02Comentario").keyup(function () {
            $("#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02Comentario").val($(this).val());
        });
    });

    var divPTPEscalaUtilizadaResultadoMedicion02 = new RealUploader("#divPTPEscalaUtilizadaResultadoMedicion02", {
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
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val() != "") {
        divPTPEscalaUtilizadaResultadoMedicion02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val(), $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion02').val());
    }

    $("#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion02").trigger("change");

    // #endregion

    // #region Foto 09.05: Escala Utilizada y Resultado de Medición N° 3

    $('#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion03').change(function () {
        var blnActivo = $("#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPTPEscalaUtilizadaResultadoMedicion03, "#divPTPEscalaUtilizadaResultadoMedicion03");
        else
            habilitarRealUploader(true, divPTPEscalaUtilizadaResultadoMedicion03, "#divPTPEscalaUtilizadaResultadoMedicion03");
    });

    poPTPEscalaUtilizadaResultadoMedicion03Comentario = $("#spPTPEscalaUtilizadaResultadoMedicion03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPTPEscalaUtilizadaResultadoMedicion03Comentario').html();
        }
    });

    poPTPEscalaUtilizadaResultadoMedicion03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPTPEscalaUtilizadaResultadoMedicion03Comentario.on('shown.bs.popover', function () {
        $("#txtPTPEscalaUtilizadaResultadoMedicion03Comentario").val($("#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03Comentario").val());
        $("#txtPTPEscalaUtilizadaResultadoMedicion03Comentario").focus();
        $("#txtPTPEscalaUtilizadaResultadoMedicion03Comentario").keyup(function () {
            $("#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03Comentario").val($(this).val());
        });
    });

    var divPTPEscalaUtilizadaResultadoMedicion03 = new RealUploader("#divPTPEscalaUtilizadaResultadoMedicion03", {
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
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val() != "") {
        divPTPEscalaUtilizadaResultadoMedicion03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val(), $('#cphContenido_hfPTPEscalaUtilizadaResultadoMedicion03').val());
    }

    $("#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion03").trigger("change");

    // #endregion

    // #region Foto 10.01: Pantalla de configuración (home)

    $('#cphContenido_chkPantallaConfiguracionHome').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionHome").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionHome, "#divPantallaConfiguracionHome");
        else
            habilitarRealUploader(true, divPantallaConfiguracionHome, "#divPantallaConfiguracionHome");
    });

    poPantallaConfiguracionHomeComentario = $("#spPantallaConfiguracionHomeComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionHomeComentario').html();
        }
    });

    poPantallaConfiguracionHomeComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionHomeComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionHomeComentario").val($("#cphContenido_hfPantallaConfiguracionHomeComentario").val());
        $("#txtPantallaConfiguracionHomeComentario").focus();
        $("#txtPantallaConfiguracionHomeComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionHomeComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionHome = new RealUploader("#divPantallaConfiguracionHome", {
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
                $('#cphContenido_hfPantallaConfiguracionHome').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionHome').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionHome').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionHome').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionHome').val() != "") {
        divPantallaConfiguracionHome.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionHome').val(), $('#cphContenido_hfPantallaConfiguracionHome').val());
    }

    $("#cphContenido_chkPantallaConfiguracionHome").trigger("change");

    // #endregion

    // #region Foto 10.02: Pantalla de configuración (securiry)

    $('#cphContenido_chkPantallaConfiguracionSecurity').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionSecurity").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionSecurity, "#divPantallaConfiguracionSecurity");
        else
            habilitarRealUploader(true, divPantallaConfiguracionSecurity, "#divPantallaConfiguracionSecurity");
    });

    poPantallaConfiguracionSecurityComentario = $("#spPantallaConfiguracionSecurityComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionSecurityComentario').html();
        }
    });

    poPantallaConfiguracionSecurityComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionSecurityComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionSecurityComentario").val($("#cphContenido_hfPantallaConfiguracionSecurityComentario").val());
        $("#txtPantallaConfiguracionSecurityComentario").focus();
        $("#txtPantallaConfiguracionSecurityComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionSecurityComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionSecurity = new RealUploader("#divPantallaConfiguracionSecurity", {
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
                $('#cphContenido_hfPantallaConfiguracionSecurity').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionSecurity').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionSecurity').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionSecurity').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionSecurity').val() != "") {
        divPantallaConfiguracionSecurity.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionSecurity').val(), $('#cphContenido_hfPantallaConfiguracionSecurity').val());
    }

    $("#cphContenido_chkPantallaConfiguracionSecurity").trigger("change");

    // #endregion

    // #region Foto 10.03: Pantalla de configuración (radio parte 1)

    $('#cphContenido_chkPantallaConfiguracionRadio01').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionRadio01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionRadio01, "#divPantallaConfiguracionRadio01");
        else
            habilitarRealUploader(true, divPantallaConfiguracionRadio01, "#divPantallaConfiguracionRadio01");
    });

    poPantallaConfiguracionRadio01Comentario = $("#spPantallaConfiguracionRadio01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionRadio01Comentario').html();
        }
    });

    poPantallaConfiguracionRadio01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionRadio01Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionRadio01Comentario").val($("#cphContenido_hfPantallaConfiguracionRadio01Comentario").val());
        $("#txtPantallaConfiguracionRadio01Comentario").focus();
        $("#txtPantallaConfiguracionRadio01Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionRadio01Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionRadio01 = new RealUploader("#divPantallaConfiguracionRadio01", {
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
                $('#cphContenido_hfPantallaConfiguracionRadio01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionRadio01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionRadio01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionRadio01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionRadio01').val() != "") {
        divPantallaConfiguracionRadio01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionRadio01').val(), $('#cphContenido_hfPantallaConfiguracionRadio01').val());
    }

    $("#cphContenido_chkPantallaConfiguracionRadio01").trigger("change");

    // #endregion

    // #region Foto 10.04: Pantalla de configuración (radio parte 2)

    $('#cphContenido_chkPantallaConfiguracionRadio02').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionRadio02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionRadio02, "#divPantallaConfiguracionRadio02");
        else
            habilitarRealUploader(true, divPantallaConfiguracionRadio02, "#divPantallaConfiguracionRadio02");
    });

    poPantallaConfiguracionRadio02Comentario = $("#spPantallaConfiguracionRadio02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionRadio02Comentario').html();
        }
    });

    poPantallaConfiguracionRadio02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionRadio02Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionRadio02Comentario").val($("#cphContenido_hfPantallaConfiguracionRadio02Comentario").val());
        $("#txtPantallaConfiguracionRadio02Comentario").focus();
        $("#txtPantallaConfiguracionRadio02Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionRadio02Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionRadio02 = new RealUploader("#divPantallaConfiguracionRadio02", {
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
                $('#cphContenido_hfPantallaConfiguracionRadio02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionRadio02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionRadio02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionRadio02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionRadio02').val() != "") {
        divPantallaConfiguracionRadio02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionRadio02').val(), $('#cphContenido_hfPantallaConfiguracionRadio02').val());
    }

    $("#cphContenido_chkPantallaConfiguracionRadio02").trigger("change");

    // #endregion

    // #region Foto 10.05: Configuración del Sistema (System parte 1)

    $('#cphContenido_chkConfiguracionSistemaSystem01').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionSistemaSystem01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionSistemaSystem01, "#divConfiguracionSistemaSystem01");
        else
            habilitarRealUploader(true, divConfiguracionSistemaSystem01, "#divConfiguracionSistemaSystem01");
    });

    poConfiguracionSistemaSystem01Comentario = $("#spConfiguracionSistemaSystem01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionSistemaSystem01Comentario').html();
        }
    });

    poConfiguracionSistemaSystem01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionSistemaSystem01Comentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionSistemaSystem01Comentario").val($("#cphContenido_hfConfiguracionSistemaSystem01Comentario").val());
        $("#txtConfiguracionSistemaSystem01Comentario").focus();
        $("#txtConfiguracionSistemaSystem01Comentario").keyup(function () {
            $("#cphContenido_hfConfiguracionSistemaSystem01Comentario").val($(this).val());
        });
    });

    var divConfiguracionSistemaSystem01 = new RealUploader("#divConfiguracionSistemaSystem01", {
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
                $('#cphContenido_hfConfiguracionSistemaSystem01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionSistemaSystem01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionSistemaSystem01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionSistemaSystem01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionSistemaSystem01').val() != "") {
        divConfiguracionSistemaSystem01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionSistemaSystem01').val(), $('#cphContenido_hfConfiguracionSistemaSystem01').val());
    }

    $("#cphContenido_chkConfiguracionSistemaSystem01").trigger("change");

    // #endregion

    // #region Foto 10.06: Configuración del Sistema (System parte 2)

    $('#cphContenido_chkConfiguracionSistemaSystem02').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionSistemaSystem02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionSistemaSystem02, "#divConfiguracionSistemaSystem02");
        else
            habilitarRealUploader(true, divConfiguracionSistemaSystem02, "#divConfiguracionSistemaSystem02");
    });

    poConfiguracionSistemaSystem02Comentario = $("#spConfiguracionSistemaSystem02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionSistemaSystem02Comentario').html();
        }
    });

    poConfiguracionSistemaSystem02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionSistemaSystem02Comentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionSistemaSystem02Comentario").val($("#cphContenido_hfConfiguracionSistemaSystem02Comentario").val());
        $("#txtConfiguracionSistemaSystem02Comentario").focus();
        $("#txtConfiguracionSistemaSystem02Comentario").keyup(function () {
            $("#cphContenido_hfConfiguracionSistemaSystem02Comentario").val($(this).val());
        });
    });

    var divConfiguracionSistemaSystem02 = new RealUploader("#divConfiguracionSistemaSystem02", {
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
                $('#cphContenido_hfConfiguracionSistemaSystem02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionSistemaSystem02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionSistemaSystem02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionSistemaSystem02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionSistemaSystem02').val() != "") {
        divConfiguracionSistemaSystem02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionSistemaSystem02').val(), $('#cphContenido_hfConfiguracionSistemaSystem02').val());
    }

    $("#cphContenido_chkConfiguracionSistemaSystem02").trigger("change");

    // #endregion

    // #region Foto 10.07: Pantalla de Configuración (Network - parte 1)

    $('#cphContenido_chkPantallaConfiguracionNetwork01').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionNetwork01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionNetwork01, "#divPantallaConfiguracionNetwork01");
        else
            habilitarRealUploader(true, divPantallaConfiguracionNetwork01, "#divPantallaConfiguracionNetwork01");
    });

    poPantallaConfiguracionNetwork01Comentario = $("#spPantallaConfiguracionNetwork01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionNetwork01Comentario').html();
        }
    });

    poPantallaConfiguracionNetwork01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionNetwork01Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionNetwork01Comentario").val($("#cphContenido_hfPantallaConfiguracionNetwork01Comentario").val());
        $("#txtPantallaConfiguracionNetwork01Comentario").focus();
        $("#txtPantallaConfiguracionNetwork01Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionNetwork01Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionNetwork01 = new RealUploader("#divPantallaConfiguracionNetwork01", {
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
                $('#cphContenido_hfPantallaConfiguracionNetwork01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionNetwork01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionNetwork01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionNetwork01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionNetwork01').val() != "") {
        divPantallaConfiguracionNetwork01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionNetwork01').val(), $('#cphContenido_hfPantallaConfiguracionNetwork01').val());
    }

    $("#cphContenido_chkPantallaConfiguracionNetwork01").trigger("change");

    // #endregion

    // #region Foto 10.08: Pantalla de Configuración (Network - parte 2)

    $('#cphContenido_chkPantallaConfiguracionNetwork02').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionNetwork02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionNetwork02, "#divPantallaConfiguracionNetwork02");
        else
            habilitarRealUploader(true, divPantallaConfiguracionNetwork02, "#divPantallaConfiguracionNetwork02");
    });

    poPantallaConfiguracionNetwork02Comentario = $("#spPantallaConfiguracionNetwork02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionNetwork02Comentario').html();
        }
    });

    poPantallaConfiguracionNetwork02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionNetwork02Comentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionNetwork02Comentario").val($("#cphContenido_hfPantallaConfiguracionNetwork02Comentario").val());
        $("#txtPantallaConfiguracionNetwork02Comentario").focus();
        $("#txtPantallaConfiguracionNetwork02Comentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionNetwork02Comentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionNetwork02 = new RealUploader("#divPantallaConfiguracionNetwork02", {
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
                $('#cphContenido_hfPantallaConfiguracionNetwork02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionNetwork02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionNetwork02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionNetwork02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionNetwork02').val() != "") {
        divPantallaConfiguracionNetwork02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionNetwork02').val(), $('#cphContenido_hfPantallaConfiguracionNetwork02').val());
    }

    $("#cphContenido_chkPantallaConfiguracionNetwork02").trigger("change");

    // #endregion

    // #region Foto 10.09: Pantalla de Configuración (Monitor Wireless)

    $('#cphContenido_chkPantallaConfiguracionMonitorWireless').change(function () {
        var blnActivo = $("#cphContenido_chkPantallaConfiguracionMonitorWireless").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPantallaConfiguracionMonitorWireless, "#divPantallaConfiguracionMonitorWireless");
        else
            habilitarRealUploader(true, divPantallaConfiguracionMonitorWireless, "#divPantallaConfiguracionMonitorWireless");
    });

    poPantallaConfiguracionMonitorWirelessComentario = $("#spPantallaConfiguracionMonitorWirelessComentario").popover({
        html: true,
        content: function () {
            return $('#pocPantallaConfiguracionMonitorWirelessComentario').html();
        }
    });

    poPantallaConfiguracionMonitorWirelessComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPantallaConfiguracionMonitorWirelessComentario.on('shown.bs.popover', function () {
        $("#txtPantallaConfiguracionMonitorWirelessComentario").val($("#cphContenido_hfPantallaConfiguracionMonitorWirelessComentario").val());
        $("#txtPantallaConfiguracionMonitorWirelessComentario").focus();
        $("#txtPantallaConfiguracionMonitorWirelessComentario").keyup(function () {
            $("#cphContenido_hfPantallaConfiguracionMonitorWirelessComentario").val($(this).val());
        });
    });

    var divPantallaConfiguracionMonitorWireless = new RealUploader("#divPantallaConfiguracionMonitorWireless", {
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
                $('#cphContenido_hfPantallaConfiguracionMonitorWireless').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionMonitorWireless').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPantallaConfiguracionMonitorWireless').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPantallaConfiguracionMonitorWireless').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPantallaConfiguracionMonitorWireless').val() != "") {
        divPantallaConfiguracionMonitorWireless.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPantallaConfiguracionMonitorWireless').val(), $('#cphContenido_hfPantallaConfiguracionMonitorWireless').val());
    }

    $("#cphContenido_chkPantallaConfiguracionMonitorWireless").trigger("change");

    // #endregion

    // #region Foto 10.10: Configuración del Sistema (Tools Wireleess Linktest)

    $('#cphContenido_chkConfiguracionSistemaToolsWirelessLinktest').change(function () {
        var blnActivo = $("#cphContenido_chkConfiguracionSistemaToolsWirelessLinktest").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConfiguracionSistemaToolsWirelessLinktest, "#divConfiguracionSistemaToolsWirelessLinktest");
        else
            habilitarRealUploader(true, divConfiguracionSistemaToolsWirelessLinktest, "#divConfiguracionSistemaToolsWirelessLinktest");
    });

    poConfiguracionSistemaToolsWirelessLinktestComentario = $("#spConfiguracionSistemaToolsWirelessLinktestComentario").popover({
        html: true,
        content: function () {
            return $('#pocConfiguracionSistemaToolsWirelessLinktestComentario').html();
        }
    });

    poConfiguracionSistemaToolsWirelessLinktestComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConfiguracionSistemaToolsWirelessLinktestComentario.on('shown.bs.popover', function () {
        $("#txtConfiguracionSistemaToolsWirelessLinktestComentario").val($("#cphContenido_hfConfiguracionSistemaToolsWirelessLinktestComentario").val());
        $("#txtConfiguracionSistemaToolsWirelessLinktestComentario").focus();
        $("#txtConfiguracionSistemaToolsWirelessLinktestComentario").keyup(function () {
            $("#cphContenido_hfConfiguracionSistemaToolsWirelessLinktestComentario").val($(this).val());
        });
    });

    var divConfiguracionSistemaToolsWirelessLinktest = new RealUploader("#divConfiguracionSistemaToolsWirelessLinktest", {
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
                $('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val() != "") {
        divConfiguracionSistemaToolsWirelessLinktest.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val(), $('#cphContenido_hfConfiguracionSistemaToolsWirelessLinktest').val());
    }

    $("#cphContenido_chkConfiguracionSistemaToolsWirelessLinktest").trigger("change");

    // #endregion

    // #region Foto 11.01: Monitor Donde se Muestre la Conexión al Sitio Web

    $('#cphContenido_chkMonitorMuestraConexionSitioWeb').change(function () {
        var blnActivo = $("#cphContenido_chkMonitorMuestraConexionSitioWeb").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMonitorMuestraConexionSitioWeb, "#divMonitorMuestraConexionSitioWeb");
        else
            habilitarRealUploader(true, divMonitorMuestraConexionSitioWeb, "#divMonitorMuestraConexionSitioWeb");
    });

    poMonitorMuestraConexionSitioWebComentario = $("#spMonitorMuestraConexionSitioWebComentario").popover({
        html: true,
        content: function () {
            return $('#pocMonitorMuestraConexionSitioWebComentario').html();
        }
    });

    poMonitorMuestraConexionSitioWebComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMonitorMuestraConexionSitioWebComentario.on('shown.bs.popover', function () {
        $("#txtMonitorMuestraConexionSitioWebComentario").val($("#cphContenido_hfMonitorMuestraConexionSitioWebComentario").val());
        $("#txtMonitorMuestraConexionSitioWebComentario").focus();
        $("#txtMonitorMuestraConexionSitioWebComentario").keyup(function () {
            $("#cphContenido_hfMonitorMuestraConexionSitioWebComentario").val($(this).val());
        });
    });

    var divMonitorMuestraConexionSitioWeb = new RealUploader("#divMonitorMuestraConexionSitioWeb", {
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
                $('#cphContenido_hfMonitorMuestraConexionSitioWeb').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMonitorMuestraConexionSitioWeb').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMonitorMuestraConexionSitioWeb').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMonitorMuestraConexionSitioWeb').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMonitorMuestraConexionSitioWeb').val() != "") {
        divMonitorMuestraConexionSitioWeb.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMonitorMuestraConexionSitioWeb').val(), $('#cphContenido_hfMonitorMuestraConexionSitioWeb').val());
    }

    $("#cphContenido_chkMonitorMuestraConexionSitioWeb").trigger("change");

    // #endregion

    // #region Foto 11.02: Monitor Donde se Muestre Conectividad al Nodo Terminal

    $('#cphContenido_chkMonitorMuestraConectividadNodoTerminal').change(function () {
        var blnActivo = $("#cphContenido_chkMonitorMuestraConectividadNodoTerminal").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMonitorMuestraConectividadNodoTerminal, "#divMonitorMuestraConectividadNodoTerminal");
        else
            habilitarRealUploader(true, divMonitorMuestraConectividadNodoTerminal, "#divMonitorMuestraConectividadNodoTerminal");
    });

    poMonitorMuestraConectividadNodoTerminalComentario = $("#spMonitorMuestraConectividadNodoTerminalComentario").popover({
        html: true,
        content: function () {
            return $('#pocMonitorMuestraConectividadNodoTerminalComentario').html();
        }
    });

    poMonitorMuestraConectividadNodoTerminalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMonitorMuestraConectividadNodoTerminalComentario.on('shown.bs.popover', function () {
        $("#txtMonitorMuestraConectividadNodoTerminalComentario").val($("#cphContenido_hfMonitorMuestraConectividadNodoTerminalComentario").val());
        $("#txtMonitorMuestraConectividadNodoTerminalComentario").focus();
        $("#txtMonitorMuestraConectividadNodoTerminalComentario").keyup(function () {
            $("#cphContenido_hfMonitorMuestraConectividadNodoTerminalComentario").val($(this).val());
        });
    });

    var divMonitorMuestraConectividadNodoTerminal = new RealUploader("#divMonitorMuestraConectividadNodoTerminal", {
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
                $('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val() != "") {
        divMonitorMuestraConectividadNodoTerminal.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val(), $('#cphContenido_hfMonitorMuestraConectividadNodoTerminal').val());
    }

    $("#cphContenido_chkMonitorMuestraConectividadNodoTerminal").trigger("change");

    // #endregion

    // #region Foto 11.03: Monitor Donde se Muestre Conectividad al Nodo Distrital de Cabecera

    $('#cphContenido_chkMonitorMuestraConectividadNodoDistritalCabecera').change(function () {
        var blnActivo = $("#cphContenido_chkMonitorMuestraConectividadNodoDistritalCabecera").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divMonitorMuestraConectividadNodoDistritalCabecera, "#divMonitorMuestraConectividadNodoDistritalCabecera");
        else
            habilitarRealUploader(true, divMonitorMuestraConectividadNodoDistritalCabecera, "#divMonitorMuestraConectividadNodoDistritalCabecera");
    });

    poMonitorMuestraConectividadNodoDistritalCabeceraComentario = $("#spMonitorMuestraConectividadNodoDistritalCabeceraComentario").popover({
        html: true,
        content: function () {
            return $('#pocMonitorMuestraConectividadNodoDistritalCabeceraComentario').html();
        }
    });

    poMonitorMuestraConectividadNodoDistritalCabeceraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poMonitorMuestraConectividadNodoDistritalCabeceraComentario.on('shown.bs.popover', function () {
        $("#txtMonitorMuestraConectividadNodoDistritalCabeceraComentario").val($("#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabeceraComentario").val());
        $("#txtMonitorMuestraConectividadNodoDistritalCabeceraComentario").focus();
        $("#txtMonitorMuestraConectividadNodoDistritalCabeceraComentario").keyup(function () {
            $("#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabeceraComentario").val($(this).val());
        });
    });

    var divMonitorMuestraConectividadNodoDistritalCabecera = new RealUploader("#divMonitorMuestraConectividadNodoDistritalCabecera", {
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
                $('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val() != "") {
        divMonitorMuestraConectividadNodoDistritalCabecera.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val(), $('#cphContenido_hfMonitorMuestraConectividadNodoDistritalCabecera').val());
    }

    $("#cphContenido_chkMonitorMuestraConectividadNodoDistritalCabecera").trigger("change");

    // #endregion

    // #endregion

    // #region 8 Serie Equipos (fotos)

    // #region EPMP 1000 Force 180

    $('#cphContenido_chkEPMP1000Force180').change(function () {
        var blnActivo = $("#cphContenido_chkEPMP1000Force180").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divEPMP1000Force180, "#divEPMP1000Force180");
        else
            habilitarRealUploader(true, divEPMP1000Force180, "#divEPMP1000Force180");
    });

    poEPMP1000Force180Comentario = $("#spEPMP1000Force180Comentario").popover({
        html: true,
        content: function () {
            return $('#pocEPMP1000Force180Comentario').html();
        }
    });

    poEPMP1000Force180Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEPMP1000Force180Comentario.on('shown.bs.popover', function () {
        $("#txtEPMP1000Force180Comentario").val($("#cphContenido_hfEPMP1000Force180Comentario").val());
        $("#txtEPMP1000Force180Comentario").focus();
        $("#txtEPMP1000Force180Comentario").keyup(function () {
            $("#cphContenido_hfEPMP1000Force180Comentario").val($(this).val());
        });
    });

    var divEPMP1000Force180 = new RealUploader("#divEPMP1000Force180", {
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
                $('#cphContenido_hfEPMP1000Force180').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfEPMP1000Force180').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfEPMP1000Force180').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfEPMP1000Force180').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfEPMP1000Force180').val() != "") {
        divEPMP1000Force180.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfEPMP1000Force180').val(), $('#cphContenido_hfEPMP1000Force180').val());
    }

    $("#cphContenido_chkEPMP1000Force180").trigger("change");

    // #endregion

    // #region Foto 01: Access Point, incluir la serie y cartel IIBB

    $('#cphContenido_chkSerieAccessPoint').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAccessPoint").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAccessPoint, "#divSerieAccessPoint");
        else
            habilitarRealUploader(true, divSerieAccessPoint, "#divSerieAccessPoint");
    });

    poSerieAccessPointComentario = $("#spSerieAccessPointComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieAccessPointComentario').html();
        }
    });

    poSerieAccessPointComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieAccessPointComentario.on('shown.bs.popover', function () {
        $("#txtSerieAccessPointComentario").val($("#cphContenido_hfSerieAccessPointComentario").val());
        $("#txtSerieAccessPointComentario").focus();
        $("#txtSerieAccessPointComentario").keyup(function () {
            $("#cphContenido_hfSerieAccessPointComentario").val($(this).val());
        });
    });

    var divSerieAccessPoint = new RealUploader("#divSerieAccessPoint", {
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
                $('#cphContenido_hfSerieAccessPoint').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieAccessPoint').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieAccessPoint').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieAccessPoint').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieAccessPoint').val() != "") {
        divSerieAccessPoint.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieAccessPoint').val(), $('#cphContenido_hfSerieAccessPoint').val());
    }

    $("#cphContenido_chkSerieAccessPoint").trigger("change");

    // #endregion

    // #region Foto 02: Switch, incluir la serie y cartel IIBB

    $('#cphContenido_chkSerieSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkSerieSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieSwitch, "#divSerieSwitch");
        else
            habilitarRealUploader(true, divSerieSwitch, "#divSerieSwitch");
    });

    poSerieSwitchComentario = $("#spSerieSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieSwitchComentario').html();
        }
    });

    poSerieSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieSwitchComentario.on('shown.bs.popover', function () {
        $("#txtSerieSwitchComentario").val($("#cphContenido_hfSerieSwitchComentario").val());
        $("#txtSerieSwitchComentario").focus();
        $("#txtSerieSwitchComentario").keyup(function () {
            $("#cphContenido_hfSerieSwitchComentario").val($(this).val());
        });
    });

    var divSerieSwitch = new RealUploader("#divSerieSwitch", {
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
                $('#cphContenido_hfSerieSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieSwitch').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieSwitch').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieSwitch').val() != "") {
        divSerieSwitch.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieSwitch').val(), $('#cphContenido_hfSerieSwitch').val());
    }

    $("#cphContenido_chkSerieSwitch").trigger("change");

    // #endregion

    // #region Foto 03: Router, incluir la serie y cartel IIBB

    $('#cphContenido_chkSerieRouter').change(function () {
        var blnActivo = $("#cphContenido_chkSerieRouter").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieRouter, "#divSerieRouter");
        else
            habilitarRealUploader(true, divSerieRouter, "#divSerieRouter");
    });

    poSerieRouterComentario = $("#spSerieRouterComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieRouterComentario').html();
        }
    });

    poSerieRouterComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieRouterComentario.on('shown.bs.popover', function () {
        $("#txtSerieRouterComentario").val($("#cphContenido_hfSerieRouterComentario").val());
        $("#txtSerieRouterComentario").focus();
        $("#txtSerieRouterComentario").keyup(function () {
            $("#cphContenido_hfSerieRouterComentario").val($(this).val());
        });
    });

    var divSerieRouter = new RealUploader("#divSerieRouter", {
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
                $('#cphContenido_hfSerieRouter').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieRouter').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieRouter').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieRouter').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieRouter').val() != "") {
        divSerieRouter.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieRouter').val(), $('#cphContenido_hfSerieRouter').val());
    }

    $("#cphContenido_chkSerieRouter").trigger("change");

    // #endregion

    // #region Foto 04: Impresora, incluir la serie y cartel IIBB

    $('#cphContenido_chkSerieImpresora').change(function () {
        var blnActivo = $("#cphContenido_chkSerieImpresora").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieImpresora, "#divSerieImpresora");
        else
            habilitarRealUploader(true, divSerieImpresora, "#divSerieImpresora");
    });

    poSerieImpresoraComentario = $("#spSerieImpresoraComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieImpresoraComentario').html();
        }
    });

    poSerieImpresoraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieImpresoraComentario.on('shown.bs.popover', function () {
        $("#txtSerieImpresoraComentario").val($("#cphContenido_hfSerieImpresoraComentario").val());
        $("#txtSerieImpresoraComentario").focus();
        $("#txtSerieImpresoraComentario").keyup(function () {
            $("#cphContenido_hfSerieImpresoraComentario").val($(this).val());
        });
    });

    var divSerieImpresora = new RealUploader("#divSerieImpresora", {
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
                $('#cphContenido_hfSerieImpresora').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieImpresora').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieImpresora').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieImpresora').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieImpresora').val() != "") {
        divSerieImpresora.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieImpresora').val(), $('#cphContenido_hfSerieImpresora').val());
    }

    $("#cphContenido_chkSerieImpresora").trigger("change");

    // #endregion

    // #region Foto 05: UPS, incluir la serie y cartel IIBB

    $('#cphContenido_chkSerieUPS').change(function () {
        var blnActivo = $("#cphContenido_chkSerieUPS").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieUPS, "#divSerieUPS");
        else
            habilitarRealUploader(true, divSerieUPS, "#divSerieUPS");
    });

    poSerieUPSComentario = $("#spSerieUPSComentario").popover({
        html: true,
        content: function () {
            return $('#pocSerieUPSComentario').html();
        }
    });

    poSerieUPSComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSerieUPSComentario.on('shown.bs.popover', function () {
        $("#txtSerieUPSComentario").val($("#cphContenido_hfSerieUPSComentario").val());
        $("#txtSerieUPSComentario").focus();
        $("#txtSerieUPSComentario").keyup(function () {
            $("#cphContenido_hfSerieUPSComentario").val($(this).val());
        });
    });

    var divSerieUPS = new RealUploader("#divSerieUPS", {
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
                $('#cphContenido_hfSerieUPS').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSerieUPS').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSerieUPS').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSerieUPS').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSerieUPS').val() != "") {
        divSerieUPS.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSerieUPS').val(), $('#cphContenido_hfSerieUPS').val());
    }

    $("#cphContenido_chkSerieUPS").trigger("change");

    // #endregion

    // #region Foto 06: PC-01, incluir la serie y cartel IIBB

    $('#cphContenido_chkSeriePC01').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePC01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePC01, "#divSeriePC01");
        else
            habilitarRealUploader(true, divSeriePC01, "#divSeriePC01");
    });

    poSeriePC01Comentario = $("#spSeriePC01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePC01Comentario').html();
        }
    });

    poSeriePC01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePC01Comentario.on('shown.bs.popover', function () {
        $("#txtSeriePC01Comentario").val($("#cphContenido_hfSeriePC01Comentario").val());
        $("#txtSeriePC01Comentario").focus();
        $("#txtSeriePC01Comentario").keyup(function () {
            $("#cphContenido_hfSeriePC01Comentario").val($(this).val());
        });
    });

    var divSeriePC01 = new RealUploader("#divSeriePC01", {
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
                $('#cphContenido_hfSeriePC01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePC01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePC01').val() != "") {
        divSeriePC01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePC01').val(), $('#cphContenido_hfSeriePC01').val());
    }

    $("#cphContenido_chkSeriePC01").trigger("change");

    // #endregion

    // #region Foto 07: PC-02, incluir la serie y cartel IIBB

    $('#cphContenido_chkSeriePC02').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePC02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePC02, "#divSeriePC02");
        else
            habilitarRealUploader(true, divSeriePC02, "#divSeriePC02");
    });

    poSeriePC02Comentario = $("#spSeriePC02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePC02Comentario').html();
        }
    });

    poSeriePC02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePC02Comentario.on('shown.bs.popover', function () {
        $("#txtSeriePC02Comentario").val($("#cphContenido_hfSeriePC02Comentario").val());
        $("#txtSeriePC02Comentario").focus();
        $("#txtSeriePC02Comentario").keyup(function () {
            $("#cphContenido_hfSeriePC02Comentario").val($(this).val());
        });
    });

    var divSeriePC02 = new RealUploader("#divSeriePC02", {
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
                $('#cphContenido_hfSeriePC02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePC02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePC02').val() != "") {
        divSeriePC02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePC02').val(), $('#cphContenido_hfSeriePC02').val());
    }

    $("#cphContenido_chkSeriePC02").trigger("change");

    // #endregion

    // #region Foto 08: PC-03, incluir la serie y cartel IIBB

    $('#cphContenido_chkSeriePC03').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePC03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePC03, "#divSeriePC03");
        else
            habilitarRealUploader(true, divSeriePC03, "#divSeriePC03");
    });

    poSeriePC03Comentario = $("#spSeriePC03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePC03Comentario').html();
        }
    });

    poSeriePC03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePC03Comentario.on('shown.bs.popover', function () {
        $("#txtSeriePC03Comentario").val($("#cphContenido_hfSeriePC03Comentario").val());
        $("#txtSeriePC03Comentario").focus();
        $("#txtSeriePC03Comentario").keyup(function () {
            $("#cphContenido_hfSeriePC03Comentario").val($(this).val());
        });
    });

    var divSeriePC03 = new RealUploader("#divSeriePC03", {
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
                $('#cphContenido_hfSeriePC03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePC03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePC03').val() != "") {
        divSeriePC03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePC03').val(), $('#cphContenido_hfSeriePC03').val());
    }

    $("#cphContenido_chkSeriePC03").trigger("change");

    // #endregion

    // #region Foto 09: PC-04, incluir la serie y cartel IIBB

    $('#cphContenido_chkSeriePC04').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePC04").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePC04, "#divSeriePC04");
        else
            habilitarRealUploader(true, divSeriePC04, "#divSeriePC04");
    });

    poSeriePC04Comentario = $("#spSeriePC04Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePC04Comentario').html();
        }
    });

    poSeriePC04Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePC04Comentario.on('shown.bs.popover', function () {
        $("#txtSeriePC04Comentario").val($("#cphContenido_hfSeriePC04Comentario").val());
        $("#txtSeriePC04Comentario").focus();
        $("#txtSeriePC04Comentario").keyup(function () {
            $("#cphContenido_hfSeriePC04Comentario").val($(this).val());
        });
    });

    var divSeriePC04 = new RealUploader("#divSeriePC04", {
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
                $('#cphContenido_hfSeriePC04').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC04').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePC04').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC04').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePC04').val() != "") {
        divSeriePC04.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePC04').val(), $('#cphContenido_hfSeriePC04').val());
    }

    $("#cphContenido_chkSeriePC04").trigger("change");

    // #endregion

    // #region Foto 10: PC-05, incluir la serie y cartel IIBB

    $('#cphContenido_chkSeriePC05').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePC05").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePC05, "#divSeriePC05");
        else
            habilitarRealUploader(true, divSeriePC05, "#divSeriePC05");
    });

    poSeriePC05Comentario = $("#spSeriePC05Comentario").popover({
        html: true,
        content: function () {
            return $('#pocSeriePC05Comentario').html();
        }
    });

    poSeriePC05Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poSeriePC05Comentario.on('shown.bs.popover', function () {
        $("#txtSeriePC05Comentario").val($("#cphContenido_hfSeriePC05Comentario").val());
        $("#txtSeriePC05Comentario").focus();
        $("#txtSeriePC05Comentario").keyup(function () {
            $("#cphContenido_hfSeriePC05Comentario").val($(this).val());
        });
    });

    var divSeriePC05 = new RealUploader("#divSeriePC05", {
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
                $('#cphContenido_hfSeriePC05').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC05').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfSeriePC05').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfSeriePC05').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfSeriePC05').val() != "") {
        divSeriePC05.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfSeriePC05').val(), $('#cphContenido_hfSeriePC05').val());
    }

    $("#cphContenido_chkSeriePC05").trigger("change");

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
        // Bloqueamos Check Aprobacion
        $('#cphContenido_chkFecha').prop('disabled', true);
        $('#cphContenido_chkDireccionNodo').prop('disabled', true);
        $('#cphContenido_chkLatitud').prop('disabled', true);
        $('#cphContenido_chkLongitud').prop('disabled', true);
        $('#cphContenido_chkReferenciaIIBB').prop('disabled', true);
        $('#cphContenido_chkTipoMastil').prop('disabled', true);
        $('#cphContenido_chkAlturaMastil').prop('disabled', true);
        $('#cphContenido_chkDisponibilidadHora').prop('disabled', true);
        $('#cphContenido_chkValorMedioMedida01').prop('disabled', true);
        $('#cphContenido_chkValorMedioMedida02').prop('disabled', true);
        $('#cphContenido_chkValorMedioMedida03').prop('disabled', true);
        $('#cphContenido_chkPotenciaTransmision').prop('disabled', true);
        $('#cphContenido_chkFrecuencia').prop('disabled', true);
        $('#cphContenido_chkAnchoBandaCanal').prop('disabled', true);
        $('#cphContenido_chkAzimuth').prop('disabled', true);
        $('#cphContenido_chkElevacion').prop('disabled', true);
        $('#cphContenido_chkMedicionEnlacePropagacion').prop('disabled', true);
        $('#cphContenido_chkVerificacionConectividad').prop('disabled', true);
        $('#cphContenido_chkConectividadNodoTerminal').prop('disabled', true);
        $('#cphContenido_chkConectividadNodoDistrital').prop('disabled', true);
        $('#cphContenido_chkConectividadNOC').prop('disabled', true);
        $('#cphContenido_chkNombreCompletoEncargado').prop('disabled', true);
        $('#cphContenido_chkDocumentoIdentidadEncargado').prop('disabled', true);
        $('#cphContenido_chkCelularContactoEncargado').prop('disabled', true);
        $('#cphContenido_chkEmailEncargado').prop('disabled', true);
        $('#cphContenido_chkNombreCompletoRepresentanteIIBB').prop('disabled', true);
        $('#cphContenido_chkDocumentoIdentidadRepresentanteIIBB').prop('disabled', true);
        $('#cphContenido_chkCelularContactoRepresentanteIIBB').prop('disabled', true);
        $('#cphContenido_chkCargoRepresentanteIIBB').prop('disabled', true);
        $('#cphContenido_chkEmailRepresentanteIIBB').prop('disabled', true);
        //$('#cphContenido_chkNombreCompletoOperador').prop('disabled', true);
        //$('#cphContenido_chkDocumentoIdentidadOperador').prop('disabled', true);
        //$('#cphContenido_chkCargoOperador').prop('disabled', true);
        //$('#cphContenido_chkEmailOperador').prop('disabled', true);
        $('#cphContenido_chkAltitud').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionAccessPoint').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionRouterMikrotik').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionSwitchDlink01').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionSwitchDlink02').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionUPS').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionAllInOne01').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionAllInOne02').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionImpresora').prop('disabled', true);
        $('#cphContenido_chkMedicionSistemaPuestaTierraMedida01ValorMedio').prop('disabled', true);
        $('#cphContenido_chkMedicionSistemaPuestaTierraMedida02ValorMedio').prop('disabled', true);
        $('#cphContenido_chkMedicionSistemaPuestaTierraMedida03ValorMedio').prop('disabled', true);
        $('#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio').prop('disabled', true);
        $('#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio').prop('disabled', true);
        $('#cphContenido_chkMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio').prop('disabled', true);
        $('#cphContenido_chkEquipamientos').prop('disabled', true);
        $('#cphContenido_chkMateriales').prop('disabled', true);
        $('#cphContenido_chkPanoramicaLocalidad').prop('disabled', true);
        $('#cphContenido_chkFachadaInstitucion').prop('disabled', true);
        $('#cphContenido_chkImpresora').prop('disabled', true);
        $('#cphContenido_chkSwitch').prop('disabled', true);
        $('#cphContenido_chkRouter').prop('disabled', true);
        $('#cphContenido_chkPCsEncendidas').prop('disabled', true);
        $('#cphContenido_chkUPS').prop('disabled', true);
        $('#cphContenido_chkAccessPoint').prop('disabled', true);
        $('#cphContenido_chkODUCPE').prop('disabled', true);
        $('#cphContenido_chkMastil').prop('disabled', true);
        $('#cphContenido_chkPanoramicaAntenaInstaladaMastil').prop('disabled', true);
        $('#cphContenido_chkRecorridoSFTPCat5e').prop('disabled', true);
        $('#cphContenido_chkIngresoSFTP').prop('disabled', true);
        $('#cphContenido_chkRecorridoSFTPCanaleta').prop('disabled', true);
        $('#cphContenido_chkPOE').prop('disabled', true);
        $('#cphContenido_chkPatchCordPOERouter').prop('disabled', true);
        $('#cphContenido_chkTableroGeneralSecundario').prop('disabled', true);
        $('#cphContenido_chkInstalacionBreaker').prop('disabled', true);
        $('#cphContenido_chkCableConexionElectrica').prop('disabled', true);
        $('#cphContenido_chkTomasEnergia').prop('disabled', true);
        $('#cphContenido_chkFotoInternaInstalacionBreaker').prop('disabled', true);
        $('#cphContenido_chkDNIDJRepresentanteAbonado01').prop('disabled', true);
        $('#cphContenido_chkDNIDJRepresentanteAbonado02').prop('disabled', true);
        $('#cphContenido_chkEquipoSwitch').prop('disabled', true);
        $('#cphContenido_chkEquipoRouter').prop('disabled', true);
        $('#cphContenido_chkEquipoRegletaEnergia').prop('disabled', true);
        $('#cphContenido_chkEquipoUPS').prop('disabled', true);
        $('#cphContenido_chkEquipoComputadoras').prop('disabled', true);
        $('#cphContenido_chkEquipoAccessPoint').prop('disabled', true);
        $('#cphContenido_chkEquipoImpresora').prop('disabled', true);
        $('#cphContenido_chkPanoramicaSalaEquipos').prop('disabled', true);
        $('#cphContenido_chkEquipoJACKRJ45').prop('disabled', true);
        $('#cphContenido_chkPTInstalacionPozoTierra').prop('disabled', true);
        $('#cphContenido_chkPTConexionesCajaRegistro').prop('disabled', true);
        $('#cphContenido_chkPTEscalaUtilizadaResultadoMedicion01').prop('disabled', true);
        $('#cphContenido_chkPTEscalaUtilizadaResultadoMedicion02').prop('disabled', true);
        $('#cphContenido_chkPTEscalaUtilizadaResultadoMedicion03').prop('disabled', true);
        $('#cphContenido_chkPTPInstalacionPozoTierra01').prop('disabled', true);
        $('#cphContenido_chkPTPInstalacionPozoTierra02').prop('disabled', true);
        $('#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion01').prop('disabled', true);
        $('#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion02').prop('disabled', true);
        $('#cphContenido_chkPTPEscalaUtilizadaResultadoMedicion03').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionHome').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionSecurity').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionRadio01').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionRadio02').prop('disabled', true);
        $('#cphContenido_chkConfiguracionSistemaSystem01').prop('disabled', true);
        $('#cphContenido_chkConfiguracionSistemaSystem02').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionNetwork01').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionNetwork02').prop('disabled', true);
        $('#cphContenido_chkPantallaConfiguracionMonitorWireless').prop('disabled', true);
        $('#cphContenido_chkConfiguracionSistemaToolsWirelessLinktest').prop('disabled', true);
        $('#cphContenido_chkMonitorMuestraConexionSitioWeb').prop('disabled', true);
        $('#cphContenido_chkMonitorMuestraConectividadNodoTerminal').prop('disabled', true);
        $('#cphContenido_chkMonitorMuestraConectividadNodoDistritalCabecera').prop('disabled', true);
        $('#cphContenido_chkEPMP1000Force180').prop('disabled', true);
        $('#cphContenido_chkSerieAccessPoint').prop('disabled', true);
        $('#cphContenido_chkSerieSwitch').prop('disabled', true);
        $('#cphContenido_chkSerieRouter').prop('disabled', true);
        $('#cphContenido_chkSerieImpresora').prop('disabled', true);
        $('#cphContenido_chkSerieUPS').prop('disabled', true);
        $('#cphContenido_chkSeriePC01').prop('disabled', true);
        $('#cphContenido_chkSeriePC02').prop('disabled', true);
        $('#cphContenido_chkSeriePC03').prop('disabled', true);
        $('#cphContenido_chkSeriePC04').prop('disabled', true);
        $('#cphContenido_chkSeriePC05').prop('disabled', true);

        //bloqueamos  cccomentarios 
        $('#txtFechaComentario').prop('disabled', true);
        $('#txtDireccionNodoComentario').prop('disabled', true);
        $('#txtLatitudComentario').prop('disabled', true);
        $('#txtLongitudComentario').prop('disabled', true);
        $('#txtReferenciaIIBBComentario').prop('disabled', true);
        $('#txtTipoMastilComentario').prop('disabled', true);
        $('#txtAlturaMastilComentario').prop('disabled', true);
        $('#txtDisponibilidadHoraComentario').prop('disabled', true);
        $('#txtValorMedioMedida01Comentario').prop('disabled', true);
        $('#txtValorMedioMedida02Comentario').prop('disabled', true);
        $('#txtValorMedioMedida03Comentario').prop('disabled', true);
        $('#txtPotenciaTransmisionComentario').prop('disabled', true);
        $('#txtFrecuenciaComentario').prop('disabled', true);
        $('#txtAnchoBandaCanalComentario').prop('disabled', true);
        $('#txtAzimuthComentario').prop('disabled', true);
        $('#txtElevacionComentario').prop('disabled', true);
        $('#txtMedicionEnlacePropagacionComentario').prop('disabled', true);
        $('#txtVerificacionConectividadComentario').prop('disabled', true);
        $('#txtConectividadNodoTerminalComentario').prop('disabled', true);
        $('#txtConectividadNodoDistritalComentario').prop('disabled', true);
        $('#txtConectividadNOCComentario').prop('disabled', true);
        $('#txtNombreCompletoEncargadoComentario').prop('disabled', true);
        $('#txtDocumentoIdentidadEncargadoComentario').prop('disabled', true);
        $('#txtCelularContactoEncargadoComentario').prop('disabled', true);
        $('#txtEmailEncargadoComentario').prop('disabled', true);
        $('#txtNombreCompletoRepresentanteIIBBComentario').prop('disabled', true);
        $('#txtDocumentoIdentidadRepresentanteIIBBComentario').prop('disabled', true);
        $('#txtCelularContactoRepresentanteIIBBComentario').prop('disabled', true);
        $('##txtCargoRepresentanteIIBBComentario').prop('disabled', true);
        $('##txtEmailRepresentanteIIBBComentario').prop('disabled', true);
        //$('#txtNombreCompletoOperadorComentario').prop('disabled', true);
        //$('#txtDocumentoIdentidadOperadorComentario').prop('disabled', true);
        //$('#txtCargoOperadorComentario').prop('disabled', true);
        //$('#txtEmailOperadorComentario').prop('disabled', true);
        $('#txtAltitudComentario').prop('disabled', true);
        $('#txtPantallaConfiguracionAccessPointComentario').prop('disabled', true);
        $('#txtPantallaConfiguracionRouterMikrotikComentario').prop('disabled', true);
        $('#txtPantallaConfiguracionSwitchDlink01Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionSwitchDlink02Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionUPSComentario').prop('disabled', true);
        $('#txtPantallaConfiguracionAllInOne01Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionAllInOne02Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionImpresoraComentario').prop('disabled', true);
        $('#txtMedicionSistemaPuestaTierraMedida01ValorMedioComentario').prop('disabled', true);
        $('#txtMedicionSistemaPuestaTierraMedida02ValorMedioComentario').prop('disabled', true);
        $('#txtMedicionSistemaPuestaTierraMedida03ValorMedioComentario').prop('disabled', true);
        $('#txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario').prop('disabled', true);
        $('#txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario').prop('disabled', true);
        $('#txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario').prop('disabled', true);
        $('#txtEquipamientosComentario').prop('disabled', true);
        $('#txtMaterialesComentario').prop('disabled', true);
        $('#txtPanoramicaLocalidadComentario').prop('disabled', true);
        $('#txtFachadaInstitucionComentario').prop('disabled', true);
        $('#txtImpresoraComentario').prop('disabled', true);
        $('#txtSwitchComentario').prop('disabled', true);
        $('#txtRouterComentario').prop('disabled', true);
        $('#txtPCsEncendidasComentario').prop('disabled', true);
        $('#txtUPSComentario').prop('disabled', true);
        $('#txtAccessPointComentario').prop('disabled', true);
        $('#txtODUCPEComentario').prop('disabled', true);
        $('#txtMastilComentario').prop('disabled', true);
        $('#txtPanoramicaAntenaInstaladaMastilComentario').prop('disabled', true);
        $('#txtRecorridoSFTPCat5eComentario').prop('disabled', true);
        $('#txtIngresoSFTPComentario').prop('disabled', true);
        $('#txtRecorridoSFTPCanaletaComentario').prop('disabled', true);
        $('#txtPOEComentario').prop('disabled', true);
        $('#txtPatchCordPOERouterComentario').prop('disabled', true);
        $('#txtTableroGeneralSecundarioComentario').prop('disabled', true);
        $('#txtInstalacionBreakerComentario').prop('disabled', true);
        $('#txtCableConexionElectricaComentario').prop('disabled', true);
        $('#txtTomasEnergiaComentario').prop('disabled', true);
        $('#txtFotoInternaInstalacionBreakerComentario').prop('disabled', true);
        $('#txtDNIDJRepresentanteAbonado01Comentario').prop('disabled', true);
        $('#txtDNIDJRepresentanteAbonado02Comentario').prop('disabled', true);
        $('#txtEquipoSwitchComentario').prop('disabled', true);
        $('#txtEquipoRouterComentario').prop('disabled', true);
        $('#txtEquipoRegletaEnergiaComentario').prop('disabled', true);
        $('#txtEquipoUPSComentario').prop('disabled', true);
        $('#txtEquipoComputadorasComentario').prop('disabled', true);
        $('#txtEquipoAccessPointComentario').prop('disabled', true);
        $('#txtEquipoImpresoraComentario').prop('disabled', true);
        $('#txtPanoramicaSalaEquiposComentario').prop('disabled', true);
        $('#txtEquipoJACKRJ45Comentario').prop('disabled', true);
        $('#txtPTInstalacionPozoTierraComentario').prop('disabled', true);
        $('#txtPTConexionesCajaRegistroComentario').prop('disabled', true);
        $('#txtPTEscalaUtilizadaResultadoMedicion01Comentario').prop('disabled', true);
        $('#txtPTEscalaUtilizadaResultadoMedicion02Comentario').prop('disabled', true);
        $('#txtPTEscalaUtilizadaResultadoMedicion03Comentario').prop('disabled', true);
        $('#txtPTPInstalacionPozoTierra01Comentario').prop('disabled', true);
        $('#txtPTPInstalacionPozoTierra02Comentario').prop('disabled', true);
        $('#txtPTPEscalaUtilizadaResultadoMedicion01Comentario').prop('disabled', true);
        $('#txtPTPEscalaUtilizadaResultadoMedicion02Comentario').prop('disabled', true);
        $('#txtPTPEscalaUtilizadaResultadoMedicion03Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionHomeComentario').prop('disabled', true);
        $('#txtPantallaConfiguracionSecurityComentario').prop('disabled', true);
        $('#txtPantallaConfiguracionRadio01Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionRadio02Comentario').prop('disabled', true);
        $('#txtConfiguracionSistemaSystem01Comentario').prop('disabled', true);
        $('#txtConfiguracionSistemaSystem02Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionNetwork01Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionNetwork02Comentario').prop('disabled', true);
        $('#txtPantallaConfiguracionMonitorWirelessComentario').prop('disabled', true);
        $('#txtConfiguracionSistemaToolsWirelessLinktestComentario').prop('disabled', true);
        $('#txtMonitorMuestraConexionSitioWebComentario').prop('disabled', true);
        $('#txtMonitorMuestraConectividadNodoTerminalComentario').prop('disabled', true);
        $('#txtMonitorMuestraConectividadNodoDistritalCabeceraComentario').prop('disabled', true);
        $('#txtEPMP1000Force180Comentario').prop('disabled', true);
        $('#txtSerieAccessPointComentario').prop('disabled', true);
        $('#txtSerieSwitchComentario').prop('disabled', true);
        $('#txtSerieRouterComentario').prop('disabled', true);
        $('#txtSerieImpresoraComentario').prop('disabled', true);
        $('#txtSerieUPSComentario').prop('disabled', true);
        $('#txtSeriePC01Comentario').prop('disabled', true);
        $('#txtSeriePC02Comentario').prop('disabled', true);
        $('#txtSeriePC03Comentario').prop('disabled', true);
        $('#txtSeriePC04Comentario').prop('disabled', true);
        $('#txtSeriePC05Comentario').prop('disabled', true);


    }



    // #endregion



});