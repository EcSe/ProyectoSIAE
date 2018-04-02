$(document).ready(function () {

    // #region Estudio de Campo

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

    // #region Hora Inicio

    $('#cphContenido_chkHoraInicio').change(function () {
        var blnActivo = $("#cphContenido_chkHoraInicio").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtHoraInicio").prop('disabled', true);
        else
            $('#cphContenido_txtHoraInicio').prop('disabled', false);
    });

    poHoraInicioComentario = $("#spHoraInicioComentario").popover({
        html: true,
        content: function () {
            return $('#pocHoraInicioComentario').html();
        }
    });

    poHoraInicioComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poHoraInicioComentario.on('shown.bs.popover', function () {
        $("#txtHoraInicioComentario").val($("#cphContenido_hfHoraInicioComentario").val());
        $("#txtHoraInicioComentario").focus();
        $("#txtHoraInicioComentario").keyup(function () {
            $("#cphContenido_hfHoraInicioComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkHoraInicio").trigger("change");

    // #endregion

    // #region Hora Fin

    $('#cphContenido_chkHoraFin').change(function () {
        var blnActivo = $("#cphContenido_chkHoraFin").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtHoraFin").prop('disabled', true);
        else
            $('#cphContenido_txtHoraFin').prop('disabled', false);
    });

    poHoraFinComentario = $("#spHoraFinComentario").popover({
        html: true,
        content: function () {
            return $('#pocHoraFinComentario').html();
        }
    });

    poHoraFinComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poHoraFinComentario.on('shown.bs.popover', function () {
        $("#txtHoraFinComentario").val($("#cphContenido_hfHoraFinComentario").val());
        $("#txtHoraFinComentario").focus();
        $("#txtHoraFinComentario").keyup(function () {
            $("#cphContenido_hfHoraFinComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkHoraFin").trigger("change");

    // #endregion

    // #region Long. Loc. Plaza Princ.

    $('#cphContenido_chkLongitudLocalidadDesdePlazaPrincipal').change(function () {
        var blnActivo = $("#cphContenido_chkLongitudLocalidadDesdePlazaPrincipal").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtLongitudLocalidadDesdePlazaPrincipal").prop('disabled', true);
        else
            $('#cphContenido_txtLongitudLocalidadDesdePlazaPrincipal').prop('disabled', false);
    });

    poLongitudLocalidadDesdePlazaPrincipalComentario = $("#spLongitudLocalidadDesdePlazaPrincipalComentario").popover({
        html: true,
        content: function () {
            return $('#pocLongitudLocalidadDesdePlazaPrincipalComentario').html();
        }
    });

    poLongitudLocalidadDesdePlazaPrincipalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poLongitudLocalidadDesdePlazaPrincipalComentario.on('shown.bs.popover', function () {
        $("#txtLongitudLocalidadDesdePlazaPrincipalComentario").val($("#cphContenido_hfLongitudLocalidadDesdePlazaPrincipalComentario").val());
        $("#txtLongitudLocalidadDesdePlazaPrincipalComentario").focus();
        $("#txtLongitudLocalidadDesdePlazaPrincipalComentario").keyup(function () {
            $("#cphContenido_hfLongitudLocalidadDesdePlazaPrincipalComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkLongitudLocalidadDesdePlazaPrincipal").trigger("change");

    // #endregion

    // #region Lat. Loc. Plaza Princ.

    $('#cphContenido_chkLatitudLocalidadDesdePlazaPrincipal').change(function () {
        var blnActivo = $("#cphContenido_chkLatitudLocalidadDesdePlazaPrincipal").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtLatitudLocalidadDesdePlazaPrincipal").prop('disabled', true);
        else
            $('#cphContenido_txtLatitudLocalidadDesdePlazaPrincipal').prop('disabled', false);
    });

    poLatitudLocalidadDesdePlazaPrincipalComentario = $("#spLatitudLocalidadDesdePlazaPrincipalComentario").popover({
        html: true,
        content: function () {
            return $('#pocLatitudLocalidadDesdePlazaPrincipalComentario').html();
        }
    });

    poLatitudLocalidadDesdePlazaPrincipalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poLatitudLocalidadDesdePlazaPrincipalComentario.on('shown.bs.popover', function () {
        $("#txtLatitudLocalidadDesdePlazaPrincipalComentario").val($("#cphContenido_hfLatitudLocalidadDesdePlazaPrincipalComentario").val());
        $("#txtLatitudLocalidadDesdePlazaPrincipalComentario").focus();
        $("#txtLatitudLocalidadDesdePlazaPrincipalComentario").keyup(function () {
            $("#cphContenido_hfLatitudLocalidadDesdePlazaPrincipalComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkLatitudLocalidadDesdePlazaPrincipal").trigger("change");

    // #endregion

    // #region Altura (m.s.n.m.)

    $('#cphContenido_chkAltura').change(function () {
        var blnActivo = $("#cphContenido_chkAltura").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAltura").prop('disabled', true);
        else
            $('#cphContenido_txtAltura').prop('disabled', false);
    });

    poAlturaComentario = $("#spAlturaComentario").popover({
        html: true,
        content: function () {
            return $('#pocAlturaComentario').html();
        }
    });

    poAlturaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAlturaComentario.on('shown.bs.popover', function () {
        $("#txtAlturaComentario").val($("#cphContenido_hfAlturaComentario").val());
        $("#txtAlturaComentario").focus();
        $("#txtAlturaComentario").keyup(function () {
            $("#cphContenido_hfAlturaComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkAltura").trigger("change");

    // #endregion

    // #region Área Natural Protegida

    $('#cphContenido_chkAreaNaturalProtegida').change(function () {
        var blnActivo = $("#cphContenido_chkAreaNaturalProtegida").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAreaNaturalProtegida").prop('disabled', true);
        else
            $('#cphContenido_txtAreaNaturalProtegida').prop('disabled', false);
    });

    poAreaNaturalProtegidaComentario = $("#spAreaNaturalProtegidaComentario").popover({
        html: true,
        content: function () {
            return $('#pocAreaNaturalProtegidaComentario').html();
        }
    });

    poAreaNaturalProtegidaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAreaNaturalProtegidaComentario.on('shown.bs.popover', function () {
        $("#txtAreaNaturalProtegidaComentario").val($("#cphContenido_hfAreaNaturalProtegidaComentario").val());
        $("#txtAreaNaturalProtegidaComentario").focus();
        $("#txtAreaNaturalProtegidaComentario").keyup(function () {
            $("#cphContenido_hfAreaNaturalProtegidaComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkAreaNaturalProtegida").trigger("change");

    // #endregion

    // #region Nombre Área Natural

    $('#cphContenido_chkNombreAreaNatural').change(function () {
        var blnActivo = $("#cphContenido_chkNombreAreaNatural").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNombreAreaNatural").prop('disabled', true);
        else
            $('#cphContenido_txtNombreAreaNatural').prop('disabled', false);
    });

    poNombreAreaNaturalComentario = $("#spNombreAreaNaturalComentario").popover({
        html: true,
        content: function () {
            return $('#pocNombreAreaNaturalComentario').html();
        }
    });

    poNombreAreaNaturalComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNombreAreaNaturalComentario.on('shown.bs.popover', function () {
        $("#txtNombreAreaNaturalComentario").val($("#cphContenido_hfNombreAreaNaturalComentario").val());
        $("#txtNombreAreaNaturalComentario").focus();
        $("#txtNombreAreaNaturalComentario").keyup(function () {
            $("#cphContenido_hfNombreAreaNaturalComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNombreAreaNatural").trigger("change");

    // #endregion

    // #region Restos Arquelógicos

    $('#cphContenido_chkRestosArqueologicos').change(function () {
        var blnActivo = $("#cphContenido_chkRestosArqueologicos").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtRestosArqueologicos").prop('disabled', true);
        else
            $('#cphContenido_txtRestosArqueologicos').prop('disabled', false);
    });

    poRestosArqueologicosComentario = $("#spRestosArqueologicosComentario").popover({
        html: true,
        content: function () {
            return $('#pocRestosArqueologicosComentario').html();
        }
    });

    poRestosArqueologicosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poRestosArqueologicosComentario.on('shown.bs.popover', function () {
        $("#txtRestosArqueologicosComentario").val($("#cphContenido_hfRestosArqueologicosComentario").val());
        $("#txtRestosArqueologicosComentario").focus();
        $("#txtRestosArqueologicosComentario").keyup(function () {
            $("#cphContenido_hfRestosArqueologicosComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkRestosArqueologicos").trigger("change");

    // #endregion

    // #region Tip. Restos Arquelógicos

    $('#cphContenido_chkTipoRestosArqueologicos').change(function () {
        var blnActivo = $("#cphContenido_chkTipoRestosArqueologicos").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtTipoRestosArqueologicos").prop('disabled', true);
        else
            $('#cphContenido_txtTipoRestosArqueologicos').prop('disabled', false);
    });

    poTipoRestosArqueologicosComentario = $("#spTipoRestosArqueologicosComentario").popover({
        html: true,
        content: function () {
            return $('#pocTipoRestosArqueologicosComentario').html();
        }
    });

    poTipoRestosArqueologicosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTipoRestosArqueologicosComentario.on('shown.bs.popover', function () {
        $("#txtTipoRestosArqueologicosComentario").val($("#cphContenido_hfTipoRestosArqueologicosComentario").val());
        $("#txtTipoRestosArqueologicosComentario").focus();
        $("#txtTipoRestosArqueologicosComentario").keyup(function () {
            $("#cphContenido_hfTipoRestosArqueologicosComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkTipoRestosArqueologicos").trigger("change");

    // #endregion

    // #region Banco de la Nación

    $('#cphContenido_chkBancoNacion').change(function () {
        var blnActivo = $("#cphContenido_chkBancoNacion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtBancoNacion").prop('disabled', true);
        else
            $('#cphContenido_txtBancoNacion').prop('disabled', false);
    });

    poBancoNacionComentario = $("#spBancoNacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocBancoNacionComentario').html();
        }
    });

    poBancoNacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poBancoNacionComentario.on('shown.bs.popover', function () {
        $("#txtBancoNacionComentario").val($("#cphContenido_hfBancoNacionComentario").val());
        $("#txtBancoNacionComentario").focus();
        $("#txtBancoNacionComentario").keyup(function () {
            $("#cphContenido_hfBancoNacionComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkBancoNacion").trigger("change");

    // #endregion

    // #region Agente Banco Nación

    $('#cphContenido_chkAgenteBancoNacion').change(function () {
        var blnActivo = $("#cphContenido_chkAgenteBancoNacion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtAgenteBancoNacion").prop('disabled', true);
        else
            $('#cphContenido_txtAgenteBancoNacion').prop('disabled', false);
    });

    poAgenteBancoNacionComentario = $("#spAgenteBancoNacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocAgenteBancoNacionComentario').html();
        }
    });

    poAgenteBancoNacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAgenteBancoNacionComentario.on('shown.bs.popover', function () {
        $("#txtAgenteBancoNacionComentario").val($("#cphContenido_hfAgenteBancoNacionComentario").val());
        $("#txtAgenteBancoNacionComentario").focus();
        $("#txtAgenteBancoNacionComentario").keyup(function () {
            $("#cphContenido_hfAgenteBancoNacionComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkAgenteBancoNacion").trigger("change");

    // #endregion

    // #region Cantidad

    $('#cphContenido_chkCantidad').change(function () {
        var blnActivo = $("#cphContenido_chkCantidad").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCantidad").prop('disabled', true);
        else
            $('#cphContenido_txtCantidad').prop('disabled', false);
    });

    poCantidadComentario = $("#spCantidadComentario").popover({
        html: true,
        content: function () {
            return $('#pocCantidadComentario').html();
        }
    });

    poCantidadComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCantidadComentario.on('shown.bs.popover', function () {
        $("#txtCantidadComentario").val($("#cphContenido_hfCantidadComentario").val());
        $("#txtCantidadComentario").focus();
        $("#txtCantidadComentario").keyup(function () {
            $("#cphContenido_hfCantidadComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCantidad").trigger("change");

    // #endregion

    // #region Otros Bancos

    $('#cphContenido_chkOtrosBancos').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosBancos").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtOtrosBancos").prop('disabled', true);
        else
            $('#cphContenido_txtOtrosBancos').prop('disabled', false);
    });

    poOtrosBancosComentario = $("#spOtrosBancosComentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosBancosComentario').html();
        }
    });

    poOtrosBancosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosBancosComentario.on('shown.bs.popover', function () {
        $("#txtOtrosBancosComentario").val($("#cphContenido_hfOtrosBancosComentario").val());
        $("#txtOtrosBancosComentario").focus();
        $("#txtOtrosBancosComentario").keyup(function () {
            $("#cphContenido_hfOtrosBancosComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkOtrosBancos").trigger("change");

    // #endregion

    // #region Cantidad Otros Bancos

    $('#cphContenido_chkCantidadOtrosBancos').change(function () {
        var blnActivo = $("#cphContenido_chkCantidadOtrosBancos").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCantidadOtrosBancos").prop('disabled', true);
        else
            $('#cphContenido_txtCantidadOtrosBancos').prop('disabled', false);
    });

    poCantidadOtrosBancosComentario = $("#spCantidadOtrosBancosComentario").popover({
        html: true,
        content: function () {
            return $('#pocCantidadOtrosBancosComentario').html();
        }
    });

    poCantidadOtrosBancosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCantidadOtrosBancosComentario.on('shown.bs.popover', function () {
        $("#txtCantidadOtrosBancosComentario").val($("#cphContenido_hfCantidadOtrosBancosComentario").val());
        $("#txtCantidadOtrosBancosComentario").focus();
        $("#txtCantidadOtrosBancosComentario").keyup(function () {
            $("#cphContenido_hfCantidadOtrosBancosComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCantidadOtrosBancos").trigger("change");

    // #endregion

    // #region Entidad Importante

    $('#cphContenido_chkEntidadImportante').change(function () {
        var blnActivo = $("#cphContenido_chkEntidadImportante").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtEntidadImportante").prop('disabled', true);
        else
            $('#cphContenido_txtEntidadImportante').prop('disabled', false);
    });

    poEntidadImportanteComentario = $("#spEntidadImportanteComentario").popover({
        html: true,
        content: function () {
            return $('#pocEntidadImportanteComentario').html();
        }
    });

    poEntidadImportanteComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poEntidadImportanteComentario.on('shown.bs.popover', function () {
        $("#txtEntidadImportanteComentario").val($("#cphContenido_hfEntidadImportanteComentario").val());
        $("#txtEntidadImportanteComentario").focus();
        $("#txtEntidadImportanteComentario").keyup(function () {
            $("#cphContenido_hfEntidadImportanteComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkEntidadImportante").trigger("change");

    // #endregion

    // #region Institución Educativa

    $('#cphContenido_chkInstitucionEducativa').change(function () {
        var blnActivo = $("#cphContenido_chkInstitucionEducativa").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtInstitucionEducativa").prop('disabled', true);
        else
            $('#cphContenido_txtInstitucionEducativa').prop('disabled', false);
    });

    poInstitucionEducativaComentario = $("#spInstitucionEducativaComentario").popover({
        html: true,
        content: function () {
            return $('#pocInstitucionEducativaComentario').html();
        }
    });

    poInstitucionEducativaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poInstitucionEducativaComentario.on('shown.bs.popover', function () {
        $("#txtInstitucionEducativaComentario").val($("#cphContenido_hfInstitucionEducativaComentario").val());
        $("#txtInstitucionEducativaComentario").focus();
        $("#txtInstitucionEducativaComentario").keyup(function () {
            $("#cphContenido_hfInstitucionEducativaComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkInstitucionEducativa").trigger("change");

    // #endregion

    // #region Cantidad IIEE

    $('#cphContenido_chkCantidadInstitucionEducativa').change(function () {
        var blnActivo = $("#cphContenido_chkCantidadInstitucionEducativa").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtCantidadInstitucionEducativa").prop('disabled', true);
        else
            $('#cphContenido_txtCantidadInstitucionEducativa').prop('disabled', false);
    });

    poCantidadInstitucionEducativaComentario = $("#spCantidadInstitucionEducativaComentario").popover({
        html: true,
        content: function () {
            return $('#pocCantidadInstitucionEducativaComentario').html();
        }
    });

    poCantidadInstitucionEducativaComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCantidadInstitucionEducativaComentario.on('shown.bs.popover', function () {
        $("#txtCantidadInstitucionEducativaComentario").val($("#cphContenido_hfCantidadInstitucionEducativaComentario").val());
        $("#txtCantidadInstitucionEducativaComentario").focus();
        $("#txtCantidadInstitucionEducativaComentario").keyup(function () {
            $("#cphContenido_hfCantidadInstitucionEducativaComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkCantidadInstitucionEducativa").trigger("change");

    // #endregion

    // #region Población

    $('#cphContenido_chkPoblacion').change(function () {
        var blnActivo = $("#cphContenido_chkPoblacion").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtPoblacion").prop('disabled', true);
        else
            $('#cphContenido_txtPoblacion').prop('disabled', false);
    });

    poPoblacionComentario = $("#spPoblacionComentario").popover({
        html: true,
        content: function () {
            return $('#pocPoblacionComentario').html();
        }
    });

    poPoblacionComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPoblacionComentario.on('shown.bs.popover', function () {
        $("#txtPoblacionComentario").val($("#cphContenido_hfPoblacionComentario").val());
        $("#txtPoblacionComentario").focus();
        $("#txtPoblacionComentario").keyup(function () {
            $("#cphContenido_hfPoblacionComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkPoblacion").trigger("change");

    // #endregion

    // #region N° de Mujeres

    $('#cphContenido_chkNumeroMujeres').change(function () {
        var blnActivo = $("#cphContenido_chkNumeroMujeres").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNumeroMujeres").prop('disabled', true);
        else
            $('#cphContenido_txtNumeroMujeres').prop('disabled', false);
    });

    poNumeroMujeresComentario = $("#spNumeroMujeresComentario").popover({
        html: true,
        content: function () {
            return $('#pocNumeroMujeresComentario').html();
        }
    });

    poNumeroMujeresComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNumeroMujeresComentario.on('shown.bs.popover', function () {
        $("#txtNumeroMujeresComentario").val($("#cphContenido_hfNumeroMujeresComentario").val());
        $("#txtNumeroMujeresComentario").focus();
        $("#txtNumeroMujeresComentario").keyup(function () {
            $("#cphContenido_hfNumeroMujeresComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNumeroMujeres").trigger("change");

    // #endregion

    // #region N° Jov. 15 y 24

    $('#cphContenido_chkNumeroJovenesEntre15y24Anios').change(function () {
        var blnActivo = $("#cphContenido_chkNumeroJovenesEntre15y24Anios").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNumeroJovenesEntre15y24Anios").prop('disabled', true);
        else
            $('#cphContenido_txtNumeroJovenesEntre15y24Anios').prop('disabled', false);
    });

    poNumeroJovenesEntre15y24AniosComentario = $("#spNumeroJovenesEntre15y24AniosComentario").popover({
        html: true,
        content: function () {
            return $('#pocNumeroJovenesEntre15y24AniosComentario').html();
        }
    });

    poNumeroJovenesEntre15y24AniosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNumeroJovenesEntre15y24AniosComentario.on('shown.bs.popover', function () {
        $("#txtNumeroJovenesEntre15y24AniosComentario").val($("#cphContenido_hfNumeroJovenesEntre15y24AniosComentario").val());
        $("#txtNumeroJovenesEntre15y24AniosComentario").focus();
        $("#txtNumeroJovenesEntre15y24AniosComentario").keyup(function () {
            $("#cphContenido_hfNumeroJovenesEntre15y24AniosComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNumeroJovenesEntre15y24Anios").trigger("change");

    // #endregion

    // #region N° Pers. Discapacidad

    $('#cphContenido_chkNumeroPersonasDiscapacidad').change(function () {
        var blnActivo = $("#cphContenido_chkNumeroPersonasDiscapacidad").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNumeroPersonasDiscapacidad").prop('disabled', true);
        else
            $('#cphContenido_txtNumeroPersonasDiscapacidad').prop('disabled', false);
    });

    poNumeroPersonasDiscapacidadComentario = $("#spNumeroPersonasDiscapacidadComentario").popover({
        html: true,
        content: function () {
            return $('#pocNumeroPersonasDiscapacidadComentario').html();
        }
    });

    poNumeroPersonasDiscapacidadComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNumeroPersonasDiscapacidadComentario.on('shown.bs.popover', function () {
        $("#txtNumeroPersonasDiscapacidadComentario").val($("#cphContenido_hfNumeroPersonasDiscapacidadComentario").val());
        $("#txtNumeroPersonasDiscapacidadComentario").focus();
        $("#txtNumeroPersonasDiscapacidadComentario").keyup(function () {
            $("#cphContenido_hfNumeroPersonasDiscapacidadComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNumeroPersonasDiscapacidad").trigger("change");

    // #endregion

    // #region N° Viviendas

    $('#cphContenido_chkNumeroViviendas').change(function () {
        var blnActivo = $("#cphContenido_chkNumeroViviendas").prop("checked");
        if (blnActivo)
            $("#cphContenido_txtNumeroViviendas").prop('disabled', true);
        else
            $('#cphContenido_txtNumeroViviendas').prop('disabled', false);
    });

    poNumeroViviendasComentario = $("#spNumeroViviendasComentario").popover({
        html: true,
        content: function () {
            return $('#pocNumeroViviendasComentario').html();
        }
    });

    poNumeroViviendasComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poNumeroViviendasComentario.on('shown.bs.popover', function () {
        $("#txtNumeroViviendasComentario").val($("#cphContenido_hfNumeroViviendasComentario").val());
        $("#txtNumeroViviendasComentario").focus();
        $("#txtNumeroViviendasComentario").keyup(function () {
            $("#cphContenido_hfNumeroViviendasComentario").val($(this).val());
        });
    });

    $("#cphContenido_chkNumeroViviendas").trigger("change");

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
        $('#cphContenido_chkHoraInicio').prop('disabled', true);
        $('#cphContenido_chkHoraFin').prop('disabled', true);
        $('#cphContenido_chkLongitudLocalidadDesdePlazaPrincipal').prop('disabled', true);
        $('#cphContenido_chkLatitudLocalidadDesdePlazaPrincipal').prop('disabled', true);
        $('#cphContenido_chkAltura').prop('disabled', true);
        $('#cphContenido_chkAreaNaturalProtegida').prop('disabled', true);
        $('#cphContenido_chkNombreAreaNatural').prop('disabled', true);
        $('#cphContenido_chkRestosArqueologicos').prop('disabled', true);
        $('#cphContenido_chkTipoRestosArqueologicos').prop('disabled', true);
        $('#cphContenido_chkBancoNacion').prop('disabled', true);
        $('#cphContenido_chkAgenteBancoNacion').prop('disabled', true);
        $('#cphContenido_chkCantidad').prop('disabled', true);
        $('#cphContenido_chkOtrosBancos').prop('disabled', true);
        $('#cphContenido_chkCantidadOtrosBancos').prop('disabled', true);
        $('#cphContenido_chkEntidadImportante').prop('disabled', true);
        $('#cphContenido_chkInstitucionEducativa').prop('disabled', true);
        $('#cphContenido_chkCantidadInstitucionEducativa').prop('disabled', true);
        $('#cphContenido_chkPoblacion').prop('disabled', true);
        $('#cphContenido_chkNumeroMujeres').prop('disabled', true);
        $('#cphContenido_chkNumeroJovenesEntre15y24Anios').prop('disabled', true);
        $('#cphContenido_chkNumeroPersonasDiscapacidad').prop('disabled', true);
        $('#cphContenido_chkNumeroViviendas').prop('disabled', true);

        //Comentarios
        $('#txtFechaComentario').prop('disabled', true);
        $('#txtHoraInicioComentario').prop('disabled', true);
        $('#txtHoraFinComentario').prop('disabled', true);
        $('#txtLongitudLocalidadDesdePlazaPrincipalComentario').prop('disabled', true);
        $('#txtLatitudLocalidadDesdePlazaPrincipalComentario').prop('disabled', true);
        $('#txtAlturaComentario').prop('disabled', true);
        $('#txtAreaNaturalProtegidaComentario').prop('disabled', true);
        $('#txtNombreAreaNaturalComentario').prop('disabled', true);
        $('#txtRestosArqueologicosComentario').prop('disabled', true);
        $('#txtTipoRestosArqueologicosComentario').prop('disabled', true);
        $('#txtBancoNacionComentario').prop('disabled', true);
        $('#txtAgenteBancoNacionComentario').prop('disabled', true);
        $('#txtCantidadComentario').prop('disabled', true);
        $('#txtOtrosBancosComentario').prop('disabled', true);
        $('#txtCantidadOtrosBancosComentario').prop('disabled', true);
        $('#txtEntidadImportanteComentario').prop('disabled', true);
        $('#txtInstitucionEducativaComentario').prop('disabled', true);
        $('#txtCantidadInstitucionEducativaComentario').prop('disabled', true);
        $('#txtPoblacionComentario').prop('disabled', true);
        $('#txtNumeroMujeresComentario').prop('disabled', true);
        $('#txtNumeroJovenesEntre15y24AniosComentario').prop('disabled', true);
        $('#txtNumeroPersonasDiscapacidadComentario').prop('disabled', true);
        $('#txtNumeroViviendasComentario').prop('disabled', true);

    }

    // #endregion


});