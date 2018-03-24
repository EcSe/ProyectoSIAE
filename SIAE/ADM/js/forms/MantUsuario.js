//Aqui ponemos los controles cuyo evento click se peude disparar despues de un partial postback
function pageLoad(sender, e)
{
    
}


$(document).ready(function () {
    var rutaVirtualEstandar = $("#hfRutaVirtualEstandar").val();
    $(function () {
        $("#cphContenido_txtContratista").typeahead({
            hint: true,
            highlight: true,
            minLength: 1,
            source: function (request, response) {
                $.ajax({
                    url: rutaVirtualEstandar + '/forms/EntidadDetalle.aspx/GetEntidadesDetalle',
                    //data: "{ 'nombreCompleto': '" + request + "', 'atividadTercero':'000001'}",
                    data: "{ 'idEntidadPrimaria': 'CONT', 'valorCadena1':'" + request + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        var items = [];
                        map = {};
                        $.each(data.d, function (i, item) {
                            var id = item.split('-')[0];
                            var name = item.split('-')[1];
                            map[name] = { id: id, name: name };
                            items.push(name);
                        });
                        response(items);
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
            },
            updater: function (item) {
                $('#cphContenido_hfIdContratista').val(map[item].id);
                //$.fn.validarTxtContratista();
                return item;
            }
        });


    });

    //Asignar los metodos al abrir el popup
    $(document).on('show.bs.modal', '#divAlertUsuario', function () {

        var metodo = $("#cphContenido_hfMetodo").val();
        if (metodo == "I")
            $("#cphContenido_txtIdUsuarioU").removeAttr('disabled');
        else if (metodo == "U")
            $("#cphContenido_txtIdUsuarioU").attr('disabled', 'disabled');

        $("#cphContenido_txtContratistaU").typeahead({
            hint: true,
            highlight: true,
            minLength: 1,
            source: function (request, response) {
                $.ajax({
                    //url: 'Utilitario.aspx/GetTerceros',
                    url: rutaVirtualEstandar + '/forms/EntidadDetalle.aspx/GetEntidadesDetalle',
                    //data: "{ 'nombreCompleto': '" + request + "', 'atividadTercero':'000001'}",
                    data: "{ 'idEntidadPrimaria': 'CONT', 'valorCadena1':'" + request + "'}",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        var items = [];
                        map = {};
                        $.each(data.d, function (i, item) {
                            var id = item.split('-')[0];
                            var name = item.split('-')[1];
                            map[name] = { id: id, name: name };
                            items.push(name);
                        });
                        response(items);
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
            },
            updater: function (item) {
                $('#cphContenido_hfIdContratistaU').val(map[item].id);
                $.fn.validarTxtContratistaU();
                return item;
            }
        });

        $("#cphContenido_btnGuardar").click(function () {
            //Validamos los campos
            var hasErrors = false;
            var cantError = 0;
            var hasErrors = $.fn.validarTxtIdUsuarioU();
            if (hasErrors)
                cantError++;
            var hasErrors = $.fn.validarTxtNumeroDocumentoU();
            if (hasErrors)
                cantError++;
            var hasErrors = $.fn.validarTxtNombreRazonU();
            if (hasErrors)
                cantError++;
            var hasErrors = $.fn.validarTxtPasswordU();
            if (hasErrors)
                cantError++;
            var hasErrors = $.fn.validarTxtEmailU();
            if (hasErrors)
                cantError++;
            var hasErrors = $.fn.validarTxtContratistaU();
            if (hasErrors)
                cantError++;

            if (cantError == 0) {
                var metodo = $("#cphContenido_hfMetodo").val();
                var idPerfil = $("#cphContenido_ddlPerfilU").val();
                var idUsuario = idUsuario = $("#cphContenido_txtIdUsuarioU").val();
                var idTipoDocumento = $("#cphContenido_ddlTipoDocumentoU").val();
                var numeroDocumento = $("#cphContenido_txtNumeroDocumentoU").val();
                var nombreRazon = $("#cphContenido_txtNombreRazonU").val();
                var apellidoPaterno = $("#cphContenido_txtApellidoPaternoU").val();
                var apellidoMaterno = $("#cphContenido_txtApellidoMaternoU").val();
                var password = $("#cphContenido_txtPasswordU").val();
                var contratista = $("#cphContenido_txtContratistaU").val();
                var eMail = $("#cphContenido_txtEmailU").val();
                var idContratista;
                var idUsuarioCreMod = $("#lblIdUsuario").text();
                //var idTipoDocumentoContratista;
                //var numeroDocumentoContratista;
                //if (contratista == "") {
                //    idTipoDocumentoContratista = "";
                //    numeroDocumentoContratista = "";
                //}
                //else {
                //    idTipoDocumentoContratista = $("#cphContenido_hfIdContratistaU").val().substring(0, 6);
                //    numeroDocumentoContratista = $("#cphContenido_hfIdContratistaU").val().substring(6);
                //}
                if (contratista == "") {
                    idContratista = "";
                }
                else {
                    idContratista = $("#cphContenido_hfIdContratistaU").val();
                }

                var strData = "{metodo:'" + metodo + "'" +
                                ",idPerfil:'" + idPerfil + "'" +
                                ",idUsuario:'" + idUsuario + "'" +
                                ",idTipoDocumento:'" + idTipoDocumento + "'" +
                                ",numeroDocumento:'" + numeroDocumento + "'" +
                                ",nombreRazon:'" + nombreRazon + "'" +
                                ",apellidoPaterno:'" + apellidoPaterno + "'" +
                                ",apellidoMaterno:'" + apellidoMaterno + "'" +
                                ",password:'" + password + "'" +
                                ",eMail:'" + eMail + "'" +
                                //",idTipoDocumentoContratista:'" + idTipoDocumentoContratista + "'" +
                                //",numeroDocumentoContratista:'" + numeroDocumentoContratista + "'" +
                                ",idContratista:'" + idContratista + "'" +
                                ",idUsuarioCreMod:'" + idUsuarioCreMod + "'" +
                                "}";

                $.ajax({
                    //url: 'MantUsuario.aspx/GuardarUsuario',
                    url: rutaVirtualEstandar + '/forms/Usuario.aspx/GuardarUsuario',
                    data: strData,
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    async: false,//Se pone no asincrono para que espere a que se llene la variable 
                    success: function (data) {
                        if (data.d != "") {
                            openAlert('#divAlert', '#divAlertHeader', 'modal-header-danger', '#lblAlertTitle', 'Error',
                            '#lblAlertBody', data.d, true, true);
                            //console.log("01");
                            //console.log("cantError01=" + cantError);
                            cantError++;
                            //console.log("cantError02=" + cantError);
                        }
                        else {
                            $("#divAlertUsuario").modal("hide");
                            openAlert('#divAlert', '#divAlertHeader', 'modal-header-success', '#lblAlertTitle', 'Completado',
                            '#lblAlertBody', "Se guardó correctamente.", true, true);
                            //console.log("02");
                        }
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
            }
            //$("#divAlertUsuario").modal("hide");
            //openAlert('#divAlert', '#divAlertHeader', 'modal-header-success', '#lblAlertTitle', 'Completado', '#lblAlertBody', 'Se guardó correctamente.', true, true);
            console.log("cantError=" + cantError);
            if (cantError == 0)
                return true;
            else
                return false;

        });

        $("#cphContenido_ddlPerfilU").change(function () {
            var idPerfil = $("#cphContenido_ddlPerfilU").val();
            var metodo = $("#cphContenido_hfMetodo").val();
            if (idPerfil != "000001") {
                $("#lblContratistaU").text("Contratista*");
                //$("#cphContenido_txtIdUsuarioU").attr('disabled', 'disabled');
                //$("#cphContenido_txtIdUsuarioU").val("");
                //$.fn.validarTxtIdUsuarioU();
            }
            else {
                $("#lblContratistaU").text("Contratista");
                $("#cphContenido_txtContratistaU").removeClass('invalid');
                $("#spTxtContratistaU").removeClass('invalid');
                //$("#cphContenido_txtContratistaU").popover('hide');
                $("#cphContenido_txtContratistaU").popover('destroy');
                //$("#cphContenido_txtIdUsuarioU").removeAttr('disabled');
            }

        });

        $("#cphContenido_txtIdUsuarioU").keyup(function () {
            $.fn.validarTxtIdUsuarioU();
        });

        $("#cphContenido_txtIdUsuarioU").focus(function () {
            $.fn.validarTxtIdUsuarioU();
        });

        $("#cphContenido_txtNumeroDocumentoU").keyup(function () {
            $.fn.validarTxtNumeroDocumentoU();
        });

        $("#cphContenido_txtNumeroDocumentoU").focus(function () {
            $.fn.validarTxtNumeroDocumentoU();
        });

        $("#cphContenido_txtNombreRazonU").keyup(function () {
            $.fn.validarTxtNombreRazonU();
        });

        $("#cphContenido_txtNombreRazonU").focus(function () {
            $.fn.validarTxtNombreRazonU();
        });

        $("#cphContenido_txtPasswordU").keyup(function () {
            $.fn.validarTxtPasswordU();
        });

        $("#cphContenido_txtPasswordU").focus(function () {
            $.fn.validarTxtPasswordU();
        });

        $("#cphContenido_txtEmailU").keyup(function () {
            $.fn.validarTxtEmailU();
        });

        $("#cphContenido_txtContratistaU").focus(function () {
            $.fn.validarTxtContratistaU();
        });

        $.fn.validarTxtIdUsuarioU = function () {
            var hasErrors = false;

            //var idPerfil = $("#cphContenido_ddlPerfilU").val();

            //if ($("#cphContenido_txtIdUsuarioU").val() == "" && idPerfil == "000001") {
            if ($("#cphContenido_txtIdUsuarioU").val() == "") {
                hasErrors = true;
                $("#cphContenido_txtIdUsuarioU").addClass('invalid');
                $("#spTxtIdUsuarioU").addClass('invalid');
                $("#cphContenido_txtIdUsuarioU").attr("title", "Error");
                $("#cphContenido_txtIdUsuarioU").attr("data-content", "Debe ingresar un código de usuario.");
                $("#cphContenido_txtIdUsuarioU").popover('show');
                setTimeout(function () {
                    $("#cphContenido_txtIdUsuarioU").popover('hide');
                }, 4000);
                $("#cphContenido_txtIdUsuarioU").next().addClass('danger');
            }
            else {
                hasErrors = false;
                $("#cphContenido_txtIdUsuarioU").removeClass('invalid');
                $("#spTxtIdUsuarioU").removeClass('invalid');
                //$("#cphContenido_txtIdUsuarioU").popover('hide');
                $("#cphContenido_txtIdUsuarioU").popover('destroy');
            }

            return hasErrors;
        }

        $.fn.validarTxtNumeroDocumentoU = function () {
            var hasErrors = false;

            if ($("#cphContenido_txtNumeroDocumentoU").val() == "") {
                hasErrors = true;
                $("#cphContenido_txtNumeroDocumentoU").addClass('invalid');
                $("#cphContenido_txtNumeroDocumentoU").attr("title", "Error");
                $("#cphContenido_txtNumeroDocumentoU").attr("data-content", "Debe ingresar un número de documento.");
                $("#spTxtNumeroDocumentoU").addClass('invalid');
                $("#cphContenido_txtNumeroDocumentoU").popover('show');
                setTimeout(function () {
                    $("#cphContenido_txtNumeroDocumentoU").popover('hide');
                }, 4000);
                $("#cphContenido_txtNumeroDocumentoU").next().addClass('danger');
            }
            else {
                hasErrors = false;
                $("#cphContenido_txtNumeroDocumentoU").removeClass('invalid');
                $("#spTxtNumeroDocumentoU").removeClass('invalid');
                //$("#cphContenido_txtNumeroDocumentoU").popover('hide');
                $("#cphContenido_txtNumeroDocumentoU").popover('destroy');
            }

            return hasErrors;
        }

        $.fn.validarTxtNombreRazonU = function () {
            var hasErrors = false;

            if ($("#cphContenido_txtNombreRazonU").val() == "") {
                hasErrors = true;
                $("#cphContenido_txtNombreRazonU").addClass('invalid');
                $("#cphContenido_txtNombreRazonU").attr("title", "Error");
                $("#cphContenido_txtNombreRazonU").attr("data-content", "Debe ingresar un nombre o razón social.");
                $("#spTxtNombreRazonU").addClass('invalid');
                $("#cphContenido_txtNombreRazonU").popover('show');
                setTimeout(function () {
                    $("#cphContenido_txtNombreRazonU").popover('hide');
                }, 4000);
                $("#cphContenido_txtNombreRazonU").next().addClass('danger');
            }
            else {
                hasErrors = false;
                $("#cphContenido_txtNombreRazonU").removeClass('invalid');
                $("#spTxtNombreRazonU").removeClass('invalid');
                //$("#cphContenido_txtNombreRazonU").popover('hide');
                $("#cphContenido_txtNombreRazonU").popover('destroy');
            }

            return hasErrors;
        }

        $.fn.validarTxtPasswordU = function () {
            var hasErrors = false;

            if ($("#cphContenido_txtPasswordU").val() == "") {
                hasErrors = true;
                $("#cphContenido_txtPasswordU").addClass('invalid');
                $("#cphContenido_txtPasswordU").attr("title", "Error");
                $("#cphContenido_txtPasswordU").attr("data-content", "Debe ingresar un password.");
                $("#spTxtPasswordU").addClass('invalid');
                $("#cphContenido_txtPasswordU").popover('show');
                setTimeout(function () {
                    $("#cphContenido_txtPasswordU").popover('hide');
                }, 4000);
                $("#cphContenido_txtPasswordU").next().addClass('danger');
            }
            else {
                hasErrors = false;
                $("#cphContenido_txtPasswordU").removeClass('invalid');
                $("#spTxtPasswordU").removeClass('invalid');
                //$("#cphContenido_txtPasswordU").popover('hide');
                $("#cphContenido_txtPasswordU").popover('destroy');
            }

            return hasErrors;
        }

        $.fn.validarTxtEmailU = function () {
            var hasErrors = false;

            if ($("#cphContenido_txtEmailU").val() == "") {
                hasErrors = true;
                $("#cphContenido_txtEmailU").addClass('invalid');
                $("#cphContenido_txtEmailU").attr("title", "Error");
                $("#cphContenido_txtEmailU").attr("data-content", "Debe ingresar un correo electrónico.");
                $("#spTxtEmailU").addClass('invalid');
                $("#cphContenido_txtEmailU").popover('show');
                setTimeout(function () {
                    $("#cphContenido_txtEmailU").popover('hide');
                }, 4000);
                $("#cphContenido_txtEmailU").next().addClass('danger');
            }
            else {
                hasErrors = false;
                $("#cphContenido_txtEmailU").removeClass('invalid');
                $("#spTxtEmailU").removeClass('invalid');
                //$("#cphContenido_txtNombreRazonU").popover('hide');
                $("#cphContenido_txtEmailU").popover('destroy');
            }

            return hasErrors;
        }

        $.fn.validarTxtContratistaU = function () {
            var idPerfil = $("#cphContenido_ddlPerfilU").val();
            var hasErrors = false;
            if (idPerfil != "000001" && $("#cphContenido_txtContratistaU").val() == "") {
                hasErrors = true;
                $("#cphContenido_txtContratistaU").addClass('invalid');
                $("#cphContenido_txtContratistaU").attr("title", "Error");
                $("#cphContenido_txtContratistaU").attr("data-content", "Debe seleccionar un contratista.");
                $("#spTxtContratistaU").addClass('invalid');
                $("#cphContenido_txtContratistaU").popover('show');
                setTimeout(function () {
                    $("#cphContenido_txtContratistaU").popover('hide');
                }, 4000);
                //asigna el color del popover
                $("#cphContenido_txtContratistaU").next().addClass('danger');
            }
            else {
                hasErrors = false;
                $("#cphContenido_txtContratistaU").removeClass('invalid');
                $("#spTxtContratistaU").removeClass('invalid');
                //$("#cphContenido_txtContratistaU").popover('hide');
                $("#cphContenido_txtContratistaU").popover('destroy');
            }
            return hasErrors;
        }

        $("body").on('click', function (e) {
            $('[data-toggle=popover]').each(function () {
                // hide any open popovers when the anywhere else in the body is clicked
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });

    })

    //Asignar los metodos al abrir el popup
    $(document).on('show.bs.modal', '#divConfirm', function () {

        $("#cphContenido_btnAceptar").click(function () {
            //var metodo = $("#cphContenido_hfMetodo").val();
            var cantError = 0;
            var idUsuario = $("#cphContenido_txtIdUsuarioU").val();
            var idUsuarioModificacion = $("#lblIdUsuario").text();
            console.log("idUsuario=" + idUsuario);
            console.log("idUsuarioModificacion=" + idUsuarioModificacion);
            var strData = "{idUsuario:'" + idUsuario + "'" +
                            ",idUsuarioModificacion:'" + idUsuarioModificacion + "'" +
                            "}";

            $.ajax({
                //url: 'MantUsuario.aspx/EliminarUsuario',
                url: rutaVirtualEstandar + '/forms/Usuario.aspx/EliminarUsuario',
                data: strData,
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                async: false,//Se pone no asincrono para que espere a que se llene la variable 
                success: function (data) {
                    $("#divConfirm").modal("hide");
                    if (data.d != "") {
                        openAlert('#divAlert', '#divAlertHeader', 'modal-header-danger', '#lblAlertTitle', 'Error',
                        '#lblAlertBody', data.d, true, true);
                        cantError++;
                    }
                    else {
                        openAlert('#divAlert', '#divAlertHeader', 'modal-header-success', '#lblAlertTitle', 'Completado',
                        '#lblAlertBody', "Se eliminó correctamente.", true, true);
                    }
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
            //$("#divAlertUsuario").modal("hide");
            //openAlert('#divAlert', '#divAlertHeader', 'modal-header-success', '#lblAlertTitle', 'Completado', '#lblAlertBody', 'Se guardó correctamente.', true, true);
            //console.log("cantError=" + cantError);
            if (cantError == 0)
                return true;
            else
                return false;

        });

    })

    

});
