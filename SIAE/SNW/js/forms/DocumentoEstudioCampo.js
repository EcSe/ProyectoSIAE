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

    // #region Fotos Adicionales

    // #region Cartel con Nombre de Letrero

    $('#cphContenido_chkCartelNombreLetrero').change(function () {
        var blnActivo = $("#cphContenido_chkCartelNombreLetrero").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCartelNombreLetrero, "#divCartelNombreLetrero");
        else
            habilitarRealUploader(true, divCartelNombreLetrero, "#divCartelNombreLetrero");
    });

    poCartelNombreLetreroComentario = $("#spCartelNombreLetreroComentario").popover({
        html: true,
        content: function () {
            return $('#pocCartelNombreLetreroComentario').html();
        }
    });

    poCartelNombreLetreroComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCartelNombreLetreroComentario.on('shown.bs.popover', function () {
        $("#txtCartelNombreLetreroComentario").val($("#cphContenido_hfCartelNombreLetreroComentario").val());
        $("#txtCartelNombreLetreroComentario").focus();
        $("#txtCartelNombreLetreroComentario").keyup(function () {
            $("#cphContenido_hfCartelNombreLetreroComentario").val($(this).val());
        });
    });

    var divCartelNombreLetrero = new RealUploader("#divCartelNombreLetrero", {
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
                $('#cphContenido_hfCartelNombreLetrero').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCartelNombreLetrero').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfCartelNombreLetrero').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCartelNombreLetrero').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCartelNombreLetrero').val() != "") {
        divCartelNombreLetrero.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCartelNombreLetrero').val(), $('#cphContenido_hfCartelNombreLetrero').val());
    }

    $("#cphContenido_chkCartelNombreLetrero").trigger("change");

    // #endregion

    // #region Centro Comunal con Cartel

    $('#cphContenido_chkCentroComunalCartel').change(function () {
        var blnActivo = $("#cphContenido_chkCentroComunalCartel").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divCentroComunalCartel, "#divCentroComunalCartel");
        else
            habilitarRealUploader(true, divCentroComunalCartel, "#divCentroComunalCartel");
    });

    poCentroComunalCartelComentario = $("#spCentroComunalCartelComentario").popover({
        html: true,
        content: function () {
            return $('#pocCentroComunalCartelComentario').html();
        }
    });

    poCentroComunalCartelComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poCentroComunalCartelComentario.on('shown.bs.popover', function () {
        $("#txtCentroComunalCartelComentario").val($("#cphContenido_hfCentroComunalCartelComentario").val());
        $("#txtCentroComunalCartelComentario").focus();
        $("#txtCentroComunalCartelComentario").keyup(function () {
            $("#cphContenido_hfCentroComunalCartelComentario").val($(this).val());
        });
    });

    var divCentroComunalCartel = new RealUploader("#divCentroComunalCartel", {
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
                $('#cphContenido_hfCentroComunalCartel').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfCentroComunalCartel').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfCentroComunalCartel').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfCentroComunalCartel').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfCentroComunalCartel').val() != "") {
        divCentroComunalCartel.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfCentroComunalCartel').val(), $('#cphContenido_hfCentroComunalCartel').val());
    }

    $("#cphContenido_chkCentroComunalCartel").trigger("change");

    // #endregion

    // #region Terreno Instalación Caseta 01

    $('#cphContenido_chkTerrenoInstalacionCaseta01').change(function () {
        var blnActivo = $("#cphContenido_chkTerrenoInstalacionCaseta01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTerrenoInstalacionCaseta01, "#divTerrenoInstalacionCaseta01");
        else
            habilitarRealUploader(true, divTerrenoInstalacionCaseta01, "#divTerrenoInstalacionCaseta01");
    });

    poTerrenoInstalacionCaseta01Comentario = $("#spTerrenoInstalacionCaseta01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTerrenoInstalacionCaseta01Comentario').html();
        }
    });

    poTerrenoInstalacionCaseta01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTerrenoInstalacionCaseta01Comentario.on('shown.bs.popover', function () {
        $("#txtTerrenoInstalacionCaseta01Comentario").val($("#cphContenido_hfTerrenoInstalacionCaseta01Comentario").val());
        $("#txtTerrenoInstalacionCaseta01Comentario").focus();
        $("#txtTerrenoInstalacionCaseta01Comentario").keyup(function () {
            $("#cphContenido_hfTerrenoInstalacionCaseta01Comentario").val($(this).val());
        });
    });

    var divTerrenoInstalacionCaseta01 = new RealUploader("#divTerrenoInstalacionCaseta01", {
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
                $('#cphContenido_hfTerrenoInstalacionCaseta01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTerrenoInstalacionCaseta01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTerrenoInstalacionCaseta01').val() != "") {
        divTerrenoInstalacionCaseta01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTerrenoInstalacionCaseta01').val(), $('#cphContenido_hfTerrenoInstalacionCaseta01').val());
    }

    $("#cphContenido_chkTerrenoInstalacionCaseta01").trigger("change");

    // #endregion

    // #region Terreno Instalación Caseta 02

    $('#cphContenido_chkTerrenoInstalacionCaseta02').change(function () {
        var blnActivo = $("#cphContenido_chkTerrenoInstalacionCaseta02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTerrenoInstalacionCaseta02, "#divTerrenoInstalacionCaseta02");
        else
            habilitarRealUploader(true, divTerrenoInstalacionCaseta02, "#divTerrenoInstalacionCaseta02");
    });

    poTerrenoInstalacionCaseta02Comentario = $("#spTerrenoInstalacionCaseta02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTerrenoInstalacionCaseta02Comentario').html();
        }
    });

    poTerrenoInstalacionCaseta02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTerrenoInstalacionCaseta02Comentario.on('shown.bs.popover', function () {
        $("#txtTerrenoInstalacionCaseta02Comentario").val($("#cphContenido_hfTerrenoInstalacionCaseta02Comentario").val());
        $("#txtTerrenoInstalacionCaseta02Comentario").focus();
        $("#txtTerrenoInstalacionCaseta02Comentario").keyup(function () {
            $("#cphContenido_hfTerrenoInstalacionCaseta02Comentario").val($(this).val());
        });
    });

    var divTerrenoInstalacionCaseta02 = new RealUploader("#divTerrenoInstalacionCaseta02", {
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
                $('#cphContenido_hfTerrenoInstalacionCaseta02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTerrenoInstalacionCaseta02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTerrenoInstalacionCaseta02').val() != "") {
        divTerrenoInstalacionCaseta02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTerrenoInstalacionCaseta02').val(), $('#cphContenido_hfTerrenoInstalacionCaseta02').val());
    }

    $("#cphContenido_chkTerrenoInstalacionCaseta02").trigger("change");

    // #endregion

    // #region Terreno Instalación Caseta 03

    $('#cphContenido_chkTerrenoInstalacionCaseta03').change(function () {
        var blnActivo = $("#cphContenido_chkTerrenoInstalacionCaseta03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTerrenoInstalacionCaseta03, "#divTerrenoInstalacionCaseta03");
        else
            habilitarRealUploader(true, divTerrenoInstalacionCaseta03, "#divTerrenoInstalacionCaseta03");
    });

    poTerrenoInstalacionCaseta03Comentario = $("#spTerrenoInstalacionCaseta03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTerrenoInstalacionCaseta03Comentario').html();
        }
    });

    poTerrenoInstalacionCaseta03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTerrenoInstalacionCaseta03Comentario.on('shown.bs.popover', function () {
        $("#txtTerrenoInstalacionCaseta03Comentario").val($("#cphContenido_hfTerrenoInstalacionCaseta03Comentario").val());
        $("#txtTerrenoInstalacionCaseta03Comentario").focus();
        $("#txtTerrenoInstalacionCaseta03Comentario").keyup(function () {
            $("#cphContenido_hfTerrenoInstalacionCaseta03Comentario").val($(this).val());
        });
    });

    var divTerrenoInstalacionCaseta03 = new RealUploader("#divTerrenoInstalacionCaseta03", {
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
                $('#cphContenido_hfTerrenoInstalacionCaseta03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTerrenoInstalacionCaseta03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTerrenoInstalacionCaseta03').val() != "") {
        divTerrenoInstalacionCaseta03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTerrenoInstalacionCaseta03').val(), $('#cphContenido_hfTerrenoInstalacionCaseta03').val());
    }

    $("#cphContenido_chkTerrenoInstalacionCaseta03").trigger("change");

    // #endregion

    // #region Terreno Instalación Caseta 04

    $('#cphContenido_chkTerrenoInstalacionCaseta04').change(function () {
        var blnActivo = $("#cphContenido_chkTerrenoInstalacionCaseta04").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divTerrenoInstalacionCaseta04, "#divTerrenoInstalacionCaseta04");
        else
            habilitarRealUploader(true, divTerrenoInstalacionCaseta04, "#divTerrenoInstalacionCaseta04");
    });

    poTerrenoInstalacionCaseta04Comentario = $("#spTerrenoInstalacionCaseta04Comentario").popover({
        html: true,
        content: function () {
            return $('#pocTerrenoInstalacionCaseta04Comentario').html();
        }
    });

    poTerrenoInstalacionCaseta04Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poTerrenoInstalacionCaseta04Comentario.on('shown.bs.popover', function () {
        $("#txtTerrenoInstalacionCaseta04Comentario").val($("#cphContenido_hfTerrenoInstalacionCaseta04Comentario").val());
        $("#txtTerrenoInstalacionCaseta04Comentario").focus();
        $("#txtTerrenoInstalacionCaseta04Comentario").keyup(function () {
            $("#cphContenido_hfTerrenoInstalacionCaseta04Comentario").val($(this).val());
        });
    });

    var divTerrenoInstalacionCaseta04 = new RealUploader("#divTerrenoInstalacionCaseta04", {
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
                $('#cphContenido_hfTerrenoInstalacionCaseta04').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta04').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfTerrenoInstalacionCaseta04').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfTerrenoInstalacionCaseta04').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfTerrenoInstalacionCaseta04').val() != "") {
        divTerrenoInstalacionCaseta04.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfTerrenoInstalacionCaseta04').val(), $('#cphContenido_hfTerrenoInstalacionCaseta04').val());
    }

    $("#cphContenido_chkTerrenoInstalacionCaseta04").trigger("change");

    // #endregion

    // #region Plaza con Miras al Nodo con Cartel

    $('#cphContenido_chkPlazaMirasNodoCartel').change(function () {
        var blnActivo = $("#cphContenido_chkPlazaMirasNodoCartel").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPlazaMirasNodoCartel, "#divPlazaMirasNodoCartel");
        else
            habilitarRealUploader(true, divPlazaMirasNodoCartel, "#divPlazaMirasNodoCartel");
    });

    poPlazaMirasNodoCartelComentario = $("#spPlazaMirasNodoCartelComentario").popover({
        html: true,
        content: function () {
            return $('#pocPlazaMirasNodoCartelComentario').html();
        }
    });

    poPlazaMirasNodoCartelComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPlazaMirasNodoCartelComentario.on('shown.bs.popover', function () {
        $("#txtPlazaMirasNodoCartelComentario").val($("#cphContenido_hfPlazaMirasNodoCartelComentario").val());
        $("#txtPlazaMirasNodoCartelComentario").focus();
        $("#txtPlazaMirasNodoCartelComentario").keyup(function () {
            $("#cphContenido_hfPlazaMirasNodoCartelComentario").val($(this).val());
        });
    });

    var divPlazaMirasNodoCartel = new RealUploader("#divPlazaMirasNodoCartel", {
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
                $('#cphContenido_hfPlazaMirasNodoCartel').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPlazaMirasNodoCartel').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPlazaMirasNodoCartel').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPlazaMirasNodoCartel').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPlazaMirasNodoCartel').val() != "") {
        divPlazaMirasNodoCartel.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPlazaMirasNodoCartel').val(), $('#cphContenido_hfPlazaMirasNodoCartel').val());
    }

    $("#cphContenido_chkPlazaMirasNodoCartel").trigger("change");

    // #endregion

    // #region Panorámica Localidad con Cartel 01

    $('#cphContenido_chkPanoramicaLocalidadCartel01').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaLocalidadCartel01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaLocalidadCartel01, "#divPanoramicaLocalidadCartel01");
        else
            habilitarRealUploader(true, divPanoramicaLocalidadCartel01, "#divPanoramicaLocalidadCartel01");
    });

    poPanoramicaLocalidadCartel01Comentario = $("#spPanoramicaLocalidadCartel01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaLocalidadCartel01Comentario').html();
        }
    });

    poPanoramicaLocalidadCartel01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaLocalidadCartel01Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaLocalidadCartel01Comentario").val($("#cphContenido_hfPanoramicaLocalidadCartel01Comentario").val());
        $("#txtPanoramicaLocalidadCartel01Comentario").focus();
        $("#txtPanoramicaLocalidadCartel01Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaLocalidadCartel01Comentario").val($(this).val());
        });
    });

    var divPanoramicaLocalidadCartel01 = new RealUploader("#divPanoramicaLocalidadCartel01", {
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
                $('#cphContenido_hfPanoramicaLocalidadCartel01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaLocalidadCartel01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaLocalidadCartel01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaLocalidadCartel01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaLocalidadCartel01').val() != "") {
        divPanoramicaLocalidadCartel01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaLocalidadCartel01').val(), $('#cphContenido_hfPanoramicaLocalidadCartel01').val());
    }

    $("#cphContenido_chkPanoramicaLocalidadCartel01").trigger("change");

    // #endregion

    // #region Panorámica Localidad con Cartel 02

    $('#cphContenido_chkPanoramicaLocalidadCartel02').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaLocalidadCartel02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaLocalidadCartel02, "#divPanoramicaLocalidadCartel02");
        else
            habilitarRealUploader(true, divPanoramicaLocalidadCartel02, "#divPanoramicaLocalidadCartel02");
    });

    poPanoramicaLocalidadCartel02Comentario = $("#spPanoramicaLocalidadCartel02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaLocalidadCartel02Comentario').html();
        }
    });

    poPanoramicaLocalidadCartel02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaLocalidadCartel02Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaLocalidadCartel02Comentario").val($("#cphContenido_hfPanoramicaLocalidadCartel02Comentario").val());
        $("#txtPanoramicaLocalidadCartel02Comentario").focus();
        $("#txtPanoramicaLocalidadCartel02Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaLocalidadCartel02Comentario").val($(this).val());
        });
    });

    var divPanoramicaLocalidadCartel02 = new RealUploader("#divPanoramicaLocalidadCartel02", {
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
                $('#cphContenido_hfPanoramicaLocalidadCartel02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaLocalidadCartel02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaLocalidadCartel02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaLocalidadCartel02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaLocalidadCartel02').val() != "") {
        divPanoramicaLocalidadCartel02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaLocalidadCartel02').val(), $('#cphContenido_hfPanoramicaLocalidadCartel02').val());
    }

    $("#cphContenido_chkPanoramicaLocalidadCartel02").trigger("change");

    // #endregion

    // #region Panorámica Plaza Principal con Cartel

    $('#cphContenido_chkPanoramicaPlazaPrincipalCartel').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaPlazaPrincipalCartel").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaPlazaPrincipalCartel, "#divPanoramicaPlazaPrincipalCartel");
        else
            habilitarRealUploader(true, divPanoramicaPlazaPrincipalCartel, "#divPanoramicaPlazaPrincipalCartel");
    });

    poPanoramicaPlazaPrincipalCartelComentario = $("#spPanoramicaPlazaPrincipalCartelComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaPlazaPrincipalCartelComentario').html();
        }
    });

    poPanoramicaPlazaPrincipalCartelComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaPlazaPrincipalCartelComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaPlazaPrincipalCartelComentario").val($("#cphContenido_hfPanoramicaPlazaPrincipalCartelComentario").val());
        $("#txtPanoramicaPlazaPrincipalCartelComentario").focus();
        $("#txtPanoramicaPlazaPrincipalCartelComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaPlazaPrincipalCartelComentario").val($(this).val());
        });
    });

    var divPanoramicaPlazaPrincipalCartel = new RealUploader("#divPanoramicaPlazaPrincipalCartel", {
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
                $('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val() != "") {
        divPanoramicaPlazaPrincipalCartel.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val(), $('#cphContenido_hfPanoramicaPlazaPrincipalCartel').val());
    }

    $("#cphContenido_chkPanoramicaPlazaPrincipalCartel").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 01

    $('#cphContenido_chkPanoramicaDesdeNodo36001').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36001").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36001, "#divPanoramicaDesdeNodo36001");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36001, "#divPanoramicaDesdeNodo36001");
    });

    poPanoramicaDesdeNodo36001Comentario = $("#spPanoramicaDesdeNodo36001Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36001Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36001Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36001Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36001Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36001Comentario").val());
        $("#txtPanoramicaDesdeNodo36001Comentario").focus();
        $("#txtPanoramicaDesdeNodo36001Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36001Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36001 = new RealUploader("#divPanoramicaDesdeNodo36001", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36001').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36001').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36001').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36001').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36001').val() != "") {
        divPanoramicaDesdeNodo36001.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36001').val(), $('#cphContenido_hfPanoramicaDesdeNodo36001').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36001").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 02

    $('#cphContenido_chkPanoramicaDesdeNodo36002').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36002").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36002, "#divPanoramicaDesdeNodo36002");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36002, "#divPanoramicaDesdeNodo36002");
    });

    poPanoramicaDesdeNodo36002Comentario = $("#spPanoramicaDesdeNodo36002Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36002Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36002Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36002Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36002Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36002Comentario").val());
        $("#txtPanoramicaDesdeNodo36002Comentario").focus();
        $("#txtPanoramicaDesdeNodo36002Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36002Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36002 = new RealUploader("#divPanoramicaDesdeNodo36002", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36002').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36002').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36002').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36002').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36002').val() != "") {
        divPanoramicaDesdeNodo36002.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36002').val(), $('#cphContenido_hfPanoramicaDesdeNodo36002').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36002").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 03

    $('#cphContenido_chkPanoramicaDesdeNodo36003').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36003").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36003, "#divPanoramicaDesdeNodo36003");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36003, "#divPanoramicaDesdeNodo36003");
    });

    poPanoramicaDesdeNodo36003Comentario = $("#spPanoramicaDesdeNodo36003Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36003Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36003Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36003Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36003Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36003Comentario").val());
        $("#txtPanoramicaDesdeNodo36003Comentario").focus();
        $("#txtPanoramicaDesdeNodo36003Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36003Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36003 = new RealUploader("#divPanoramicaDesdeNodo36003", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36003').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36003').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36003').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36003').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36003').val() != "") {
        divPanoramicaDesdeNodo36003.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36003').val(), $('#cphContenido_hfPanoramicaDesdeNodo36003').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36003").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 04

    $('#cphContenido_chkPanoramicaDesdeNodo36004').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36004").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36004, "#divPanoramicaDesdeNodo36004");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36004, "#divPanoramicaDesdeNodo36004");
    });

    poPanoramicaDesdeNodo36004Comentario = $("#spPanoramicaDesdeNodo36004Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36004Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36004Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36004Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36004Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36004Comentario").val());
        $("#txtPanoramicaDesdeNodo36004Comentario").focus();
        $("#txtPanoramicaDesdeNodo36004Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36004Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36004 = new RealUploader("#divPanoramicaDesdeNodo36004", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36004').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36004').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36004').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36004').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36004').val() != "") {
        divPanoramicaDesdeNodo36004.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36004').val(), $('#cphContenido_hfPanoramicaDesdeNodo36004').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36004").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 05

    $('#cphContenido_chkPanoramicaDesdeNodo36005').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36005").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36005, "#divPanoramicaDesdeNodo36005");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36005, "#divPanoramicaDesdeNodo36005");
    });

    poPanoramicaDesdeNodo36005Comentario = $("#spPanoramicaDesdeNodo36005Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36005Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36005Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36005Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36005Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36005Comentario").val());
        $("#txtPanoramicaDesdeNodo36005Comentario").focus();
        $("#txtPanoramicaDesdeNodo36005Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36005Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36005 = new RealUploader("#divPanoramicaDesdeNodo36005", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36005').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36005').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36005').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36005').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36005').val() != "") {
        divPanoramicaDesdeNodo36005.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36005').val(), $('#cphContenido_hfPanoramicaDesdeNodo36005').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36005").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 06

    $('#cphContenido_chkPanoramicaDesdeNodo36006').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36006").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36006, "#divPanoramicaDesdeNodo36006");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36006, "#divPanoramicaDesdeNodo36006");
    });

    poPanoramicaDesdeNodo36006Comentario = $("#spPanoramicaDesdeNodo36006Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36006Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36006Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36006Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36006Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36006Comentario").val());
        $("#txtPanoramicaDesdeNodo36006Comentario").focus();
        $("#txtPanoramicaDesdeNodo36006Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36006Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36006 = new RealUploader("#divPanoramicaDesdeNodo36006", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36006').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36006').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36006').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36006').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36006').val() != "") {
        divPanoramicaDesdeNodo36006.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36006').val(), $('#cphContenido_hfPanoramicaDesdeNodo36006').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36006").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 07

    $('#cphContenido_chkPanoramicaDesdeNodo36007').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36007").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36007, "#divPanoramicaDesdeNodo36007");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36007, "#divPanoramicaDesdeNodo36007");
    });

    poPanoramicaDesdeNodo36007Comentario = $("#spPanoramicaDesdeNodo36007Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36007Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36007Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36007Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36007Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36007Comentario").val());
        $("#txtPanoramicaDesdeNodo36007Comentario").focus();
        $("#txtPanoramicaDesdeNodo36007Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36007Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36007 = new RealUploader("#divPanoramicaDesdeNodo36007", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36007').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36007').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36007').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36007').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36007').val() != "") {
        divPanoramicaDesdeNodo36007.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36007').val(), $('#cphContenido_hfPanoramicaDesdeNodo36007').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36007").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 08

    $('#cphContenido_chkPanoramicaDesdeNodo36008').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36008").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36008, "#divPanoramicaDesdeNodo36008");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36008, "#divPanoramicaDesdeNodo36008");
    });

    poPanoramicaDesdeNodo36008Comentario = $("#spPanoramicaDesdeNodo36008Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36008Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36008Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36008Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36008Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36008Comentario").val());
        $("#txtPanoramicaDesdeNodo36008Comentario").focus();
        $("#txtPanoramicaDesdeNodo36008Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36008Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36008 = new RealUploader("#divPanoramicaDesdeNodo36008", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36008').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36008').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36008').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36008').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36008').val() != "") {
        divPanoramicaDesdeNodo36008.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36008').val(), $('#cphContenido_hfPanoramicaDesdeNodo36008').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36008").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 09

    $('#cphContenido_chkPanoramicaDesdeNodo36009').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36009").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36009, "#divPanoramicaDesdeNodo36009");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36009, "#divPanoramicaDesdeNodo36009");
    });

    poPanoramicaDesdeNodo36009Comentario = $("#spPanoramicaDesdeNodo36009Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36009Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36009Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36009Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36009Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36009Comentario").val());
        $("#txtPanoramicaDesdeNodo36009Comentario").focus();
        $("#txtPanoramicaDesdeNodo36009Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36009Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36009 = new RealUploader("#divPanoramicaDesdeNodo36009", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36009').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36009').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36009').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36009').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36009').val() != "") {
        divPanoramicaDesdeNodo36009.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36009').val(), $('#cphContenido_hfPanoramicaDesdeNodo36009').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36009").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 10

    $('#cphContenido_chkPanoramicaDesdeNodo36010').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36010").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36010, "#divPanoramicaDesdeNodo36010");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36010, "#divPanoramicaDesdeNodo36010");
    });

    poPanoramicaDesdeNodo36010Comentario = $("#spPanoramicaDesdeNodo36010Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36010Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36010Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36010Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36010Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36010Comentario").val());
        $("#txtPanoramicaDesdeNodo36010Comentario").focus();
        $("#txtPanoramicaDesdeNodo36010Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36010Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36010 = new RealUploader("#divPanoramicaDesdeNodo36010", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36010').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36010').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36010').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36010').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36010').val() != "") {
        divPanoramicaDesdeNodo36010.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36010').val(), $('#cphContenido_hfPanoramicaDesdeNodo36010').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36010").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 11

    $('#cphContenido_chkPanoramicaDesdeNodo36011').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36011").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36011, "#divPanoramicaDesdeNodo36011");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36011, "#divPanoramicaDesdeNodo36011");
    });

    poPanoramicaDesdeNodo36011Comentario = $("#spPanoramicaDesdeNodo36011Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36011Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36011Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36011Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36011Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36011Comentario").val());
        $("#txtPanoramicaDesdeNodo36011Comentario").focus();
        $("#txtPanoramicaDesdeNodo36011Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36011Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36011 = new RealUploader("#divPanoramicaDesdeNodo36011", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36011').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36011').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36011').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36011').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36011').val() != "") {
        divPanoramicaDesdeNodo36011.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36011').val(), $('#cphContenido_hfPanoramicaDesdeNodo36011').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36011").trigger("change");

    // #endregion

    // #region Panorámica Desde Nodo (360°) 12

    $('#cphContenido_chkPanoramicaDesdeNodo36012').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaDesdeNodo36012").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaDesdeNodo36012, "#divPanoramicaDesdeNodo36012");
        else
            habilitarRealUploader(true, divPanoramicaDesdeNodo36012, "#divPanoramicaDesdeNodo36012");
    });

    poPanoramicaDesdeNodo36012Comentario = $("#spPanoramicaDesdeNodo36012Comentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaDesdeNodo36012Comentario').html();
        }
    });

    poPanoramicaDesdeNodo36012Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaDesdeNodo36012Comentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaDesdeNodo36012Comentario").val($("#cphContenido_hfPanoramicaDesdeNodo36012Comentario").val());
        $("#txtPanoramicaDesdeNodo36012Comentario").focus();
        $("#txtPanoramicaDesdeNodo36012Comentario").keyup(function () {
            $("#cphContenido_hfPanoramicaDesdeNodo36012Comentario").val($(this).val());
        });
    });

    var divPanoramicaDesdeNodo36012 = new RealUploader("#divPanoramicaDesdeNodo36012", {
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
                $('#cphContenido_hfPanoramicaDesdeNodo36012').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36012').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaDesdeNodo36012').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaDesdeNodo36012').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfPanoramicaDesdeNodo36012').val() != "") {
        divPanoramicaDesdeNodo36012.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfPanoramicaDesdeNodo36012').val(), $('#cphContenido_hfPanoramicaDesdeNodo36012').val());
    }

    $("#cphContenido_chkPanoramicaDesdeNodo36012").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 01

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel01').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel01").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel01, "#divOtrosLugaresPrincipalesCartel01");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel01, "#divOtrosLugaresPrincipalesCartel01");
    });

    poOtrosLugaresPrincipalesCartel01Comentario = $("#spOtrosLugaresPrincipalesCartel01Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel01Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel01Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel01Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel01Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel01Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel01Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel01Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel01Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel01 = new RealUploader("#divOtrosLugaresPrincipalesCartel01", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val() != "") {
        divOtrosLugaresPrincipalesCartel01.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel01').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel01").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 02

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel02').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel02").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel02, "#divOtrosLugaresPrincipalesCartel02");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel02, "#divOtrosLugaresPrincipalesCartel02");
    });

    poOtrosLugaresPrincipalesCartel02Comentario = $("#spOtrosLugaresPrincipalesCartel02Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel02Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel02Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel02Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel02Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel02Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel02Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel02Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel02Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel02 = new RealUploader("#divOtrosLugaresPrincipalesCartel02", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val() != "") {
        divOtrosLugaresPrincipalesCartel02.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel02').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel02").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 03

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel03').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel03").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel03, "#divOtrosLugaresPrincipalesCartel03");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel03, "#divOtrosLugaresPrincipalesCartel03");
    });

    poOtrosLugaresPrincipalesCartel03Comentario = $("#spOtrosLugaresPrincipalesCartel03Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel03Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel03Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel03Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel03Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel03Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel03Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel03Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel03Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel03 = new RealUploader("#divOtrosLugaresPrincipalesCartel03", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val() != "") {
        divOtrosLugaresPrincipalesCartel03.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel03').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel03").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 04

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel04').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel04").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel04, "#divOtrosLugaresPrincipalesCartel04");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel04, "#divOtrosLugaresPrincipalesCartel04");
    });

    poOtrosLugaresPrincipalesCartel04Comentario = $("#spOtrosLugaresPrincipalesCartel04Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel04Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel04Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel04Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel04Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel04Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel04Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel04Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel04Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel04 = new RealUploader("#divOtrosLugaresPrincipalesCartel04", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val() != "") {
        divOtrosLugaresPrincipalesCartel04.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel04').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel04").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 05

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel05').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel05").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel05, "#divOtrosLugaresPrincipalesCartel05");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel05, "#divOtrosLugaresPrincipalesCartel05");
    });

    poOtrosLugaresPrincipalesCartel05Comentario = $("#spOtrosLugaresPrincipalesCartel05Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel05Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel05Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel05Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel05Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel05Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel05Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel05Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel05Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel05 = new RealUploader("#divOtrosLugaresPrincipalesCartel05", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val() != "") {
        divOtrosLugaresPrincipalesCartel05.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel05').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel05").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 06

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel06').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel06").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel06, "#divOtrosLugaresPrincipalesCartel06");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel06, "#divOtrosLugaresPrincipalesCartel06");
    });

    poOtrosLugaresPrincipalesCartel06Comentario = $("#spOtrosLugaresPrincipalesCartel06Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel06Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel06Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel06Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel06Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel06Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel06Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel06Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel06Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel06 = new RealUploader("#divOtrosLugaresPrincipalesCartel06", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val() != "") {
        divOtrosLugaresPrincipalesCartel06.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel06').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel06").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 07

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel07').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel07").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel07, "#divOtrosLugaresPrincipalesCartel07");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel07, "#divOtrosLugaresPrincipalesCartel07");
    });

    poOtrosLugaresPrincipalesCartel07Comentario = $("#spOtrosLugaresPrincipalesCartel07Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel07Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel07Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel07Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel07Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel07Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel07Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel07Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel07Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel07 = new RealUploader("#divOtrosLugaresPrincipalesCartel07", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val() != "") {
        divOtrosLugaresPrincipalesCartel07.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel07').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel07").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 08

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel08').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel08").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel08, "#divOtrosLugaresPrincipalesCartel08");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel08, "#divOtrosLugaresPrincipalesCartel08");
    });

    poOtrosLugaresPrincipalesCartel08Comentario = $("#spOtrosLugaresPrincipalesCartel08Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel08Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel08Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel08Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel08Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel08Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel08Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel08Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel08Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel08 = new RealUploader("#divOtrosLugaresPrincipalesCartel08", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val() != "") {
        divOtrosLugaresPrincipalesCartel08.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel08').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel08").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 09

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel09').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel09").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel09, "#divOtrosLugaresPrincipalesCartel09");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel09, "#divOtrosLugaresPrincipalesCartel09");
    });

    poOtrosLugaresPrincipalesCartel09Comentario = $("#spOtrosLugaresPrincipalesCartel09Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel09Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel09Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel09Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel09Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel09Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel09Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel09Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel09Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel09 = new RealUploader("#divOtrosLugaresPrincipalesCartel09", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val() != "") {
        divOtrosLugaresPrincipalesCartel09.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel09').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel09").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 10

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel10').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel10").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel10, "#divOtrosLugaresPrincipalesCartel10");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel10, "#divOtrosLugaresPrincipalesCartel10");
    });

    poOtrosLugaresPrincipalesCartel10Comentario = $("#spOtrosLugaresPrincipalesCartel10Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel10Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel10Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel10Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel10Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel10Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel10Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel10Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel10Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel10 = new RealUploader("#divOtrosLugaresPrincipalesCartel10", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val() != "") {
        divOtrosLugaresPrincipalesCartel10.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel10').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel10").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 11

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel11').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel11").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel11, "#divOtrosLugaresPrincipalesCartel11");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel11, "#divOtrosLugaresPrincipalesCartel11");
    });

    poOtrosLugaresPrincipalesCartel11Comentario = $("#spOtrosLugaresPrincipalesCartel11Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel11Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel11Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel11Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel11Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel11Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel11Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel11Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel11Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel11 = new RealUploader("#divOtrosLugaresPrincipalesCartel11", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val() != "") {
        divOtrosLugaresPrincipalesCartel11.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel11').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel11").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 12

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel12').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel12").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel12, "#divOtrosLugaresPrincipalesCartel12");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel12, "#divOtrosLugaresPrincipalesCartel12");
    });

    poOtrosLugaresPrincipalesCartel12Comentario = $("#spOtrosLugaresPrincipalesCartel12Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel12Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel12Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel12Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel12Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel12Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel12Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel12Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel12Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel12 = new RealUploader("#divOtrosLugaresPrincipalesCartel12", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val() != "") {
        divOtrosLugaresPrincipalesCartel12.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel12').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel12").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 13

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel13').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel13").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel13, "#divOtrosLugaresPrincipalesCartel13");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel13, "#divOtrosLugaresPrincipalesCartel13");
    });

    poOtrosLugaresPrincipalesCartel13Comentario = $("#spOtrosLugaresPrincipalesCartel13Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel13Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel13Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel13Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel13Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel13Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel13Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel13Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel13Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel13 = new RealUploader("#divOtrosLugaresPrincipalesCartel13", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val() != "") {
        divOtrosLugaresPrincipalesCartel13.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel13').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel13").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 14

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel14').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel14").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel14, "#divOtrosLugaresPrincipalesCartel14");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel14, "#divOtrosLugaresPrincipalesCartel14");
    });

    poOtrosLugaresPrincipalesCartel14Comentario = $("#spOtrosLugaresPrincipalesCartel14Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel14Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel14Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel14Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel14Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel14Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel14Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel14Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel14Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel14 = new RealUploader("#divOtrosLugaresPrincipalesCartel14", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val() != "") {
        divOtrosLugaresPrincipalesCartel14.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel14').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel14").trigger("change");

    // #endregion

    // #region Otros Lugares Principales con Cartel 15

    $('#cphContenido_chkOtrosLugaresPrincipalesCartel15').change(function () {
        var blnActivo = $("#cphContenido_chkOtrosLugaresPrincipalesCartel15").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOtrosLugaresPrincipalesCartel15, "#divOtrosLugaresPrincipalesCartel15");
        else
            habilitarRealUploader(true, divOtrosLugaresPrincipalesCartel15, "#divOtrosLugaresPrincipalesCartel15");
    });

    poOtrosLugaresPrincipalesCartel15Comentario = $("#spOtrosLugaresPrincipalesCartel15Comentario").popover({
        html: true,
        content: function () {
            return $('#pocOtrosLugaresPrincipalesCartel15Comentario').html();
        }
    });

    poOtrosLugaresPrincipalesCartel15Comentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOtrosLugaresPrincipalesCartel15Comentario.on('shown.bs.popover', function () {
        $("#txtOtrosLugaresPrincipalesCartel15Comentario").val($("#cphContenido_hfOtrosLugaresPrincipalesCartel15Comentario").val());
        $("#txtOtrosLugaresPrincipalesCartel15Comentario").focus();
        $("#txtOtrosLugaresPrincipalesCartel15Comentario").keyup(function () {
            $("#cphContenido_hfOtrosLugaresPrincipalesCartel15Comentario").val($(this).val());
        });
    });

    var divOtrosLugaresPrincipalesCartel15 = new RealUploader("#divOtrosLugaresPrincipalesCartel15", {
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
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val(fileNamesUploaded);
            },
            select: function (fileList) { },
            removeAllFiles: function () {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val(fileNamesUploaded);
            },
        }
    });

    if ($('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val() != "") {
        divOtrosLugaresPrincipalesCartel15.addEmptyFile($('#cphContenido_hfRutaVirtualTemporal').val() + "/" + $('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val(), $('#cphContenido_hfOtrosLugaresPrincipalesCartel15').val());
    }

    $("#cphContenido_chkOtrosLugaresPrincipalesCartel15").trigger("change");

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

        $('#cphContenido_chkCartelNombreLetrero').prop('disabled', true);
        $('#cphContenido_chkCentroComunalCartel').prop('disabled', true);
        $('#cphContenido_chkTerrenoInstalacionCaseta01').prop('disabled', true);
        $('#cphContenido_chkTerrenoInstalacionCaseta02').prop('disabled', true);
        $('#cphContenido_chkTerrenoInstalacionCaseta03').prop('disabled', true);
        $('#cphContenido_chkTerrenoInstalacionCaseta04').prop('disabled', true);
        $('#cphContenido_chkPlazaMirasNodoCartel').prop('disabled', true);
        $('#cphContenido_chkPanoramicaLocalidadCartel01').prop('disabled', true);
        $('#cphContenido_chkPanoramicaLocalidadCartel02').prop('disabled', true);
        $('#cphContenido_chkPanoramicaPlazaPrincipalCartel').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36001').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36002').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36003').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36004').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36005').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36006').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36007').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36008').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36009').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36010').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36011').prop('disabled', true);
        $('#cphContenido_chkPanoramicaDesdeNodo36012').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel01').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel02').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel03').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel04').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel05').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel06').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel07').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel08').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel09').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel10').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel11').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel12').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel13').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel14').prop('disabled', true);
        $('#cphContenido_chkOtrosLugaresPrincipalesCartel15').prop('disabled', true);

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

        $('#txtCartelNombreLetreroComentario').prop('disabled', true);
        $('#txtCentroComunalCartelComentario').prop('disabled', true);
        $('#txtTerrenoInstalacionCaseta01Comentario').prop('disabled', true);
        $('#txtTerrenoInstalacionCaseta02Comentario').prop('disabled', true);
        $('#txtTerrenoInstalacionCaseta03Comentario').prop('disabled', true);
        $('#txtTerrenoInstalacionCaseta04Comentario').prop('disabled', true);
        $('#txtPlazaMirasNodoCartelComentario').prop('disabled', true);
        $('#txtPanoramicaLocalidadCartel01Comentario').prop('disabled', true);
        $('#txtPanoramicaLocalidadCartel02Comentario').prop('disabled', true);
        $('#txtPanoramicaPlazaPrincipalCartelComentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36001Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36002Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36003Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36004Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36005Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36006Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36007Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36008Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36009Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36010Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36011Comentario').prop('disabled', true);
        $('#txtPanoramicaDesdeNodo36012Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel01Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel02Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel03Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel04Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel05Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel06Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel07Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel08Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel09Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel10Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel11Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel12Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel13Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel14Comentario').prop('disabled', true);
        $('#txtOtrosLugaresPrincipalesCartel15Comentario').prop('disabled', true);

    }

    // #endregion


});