$(document).ready(function () {

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

    $('#cphContenido_chkOmniswitch').change(function () {
        var blnActivo = $("#cphContenido_chkOmniswitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divOmniswitch, "#divOmniswitch");
        else
            habilitarRealUploader(true, divOmniswitch, "#divOmniswitch");
    });

    $('#cphContenido_chkPanoramicaRackSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkPanoramicaRackSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divPanoramicaRackSwitch, "#divPanoramicaRackSwitch");
        else
            habilitarRealUploader(true, divPanoramicaRackSwitch, "#divPanoramicaRackSwitch");
    });

    $('#cphContenido_chkConexionBreakersAsignados').change(function () {
        var blnActivo = $("#cphContenido_chkConexionBreakersAsignados").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConexionBreakersAsignados, "#divConexionBreakersAsignados");
        else
            habilitarRealUploader(true, divConexionBreakersAsignados, "#divConexionBreakersAsignados");
    });

    $('#cphContenido_chkConexionAlimentacionSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkConexionAlimentacionSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divConexionAlimentacionSwitch, "#divConexionAlimentacionSwitch");
        else
            habilitarRealUploader(true, divConexionAlimentacionSwitch, "#divConexionAlimentacionSwitch");
    });

    $('#cphContenido_chkAterramientoSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoSwitch").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoSwitch, "#divAterramientoSwitch");
        else
            habilitarRealUploader(true, divAterramientoSwitch, "#divAterramientoSwitch");
    });

    $('#cphContenido_chkAterramientoBarraTierra').change(function () {
        var blnActivo = $("#cphContenido_chkAterramientoBarraTierra").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divAterramientoBarraTierra, "#divAterramientoBarraTierra");
        else
            habilitarRealUploader(true, divAterramientoBarraTierra, "#divAterramientoBarraTierra");
    });

    $('#cphContenido_chkSerieSwitch').change(function () {
        var blnActivo = $("#cphContenido_chkSerieSwitch").prop("checked");
        if (blnActivo) {
            $('#cphContenido_txtSerieSwitch').prop('disabled', true);
        }
        else {
            $('#cphContenido_txtSerieSwitch').prop('disabled', false);
        }
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

    poOmniswitchComentario = $("#spOmniswitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocOmniswitchComentario').html();
        }
    });

    poOmniswitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poOmniswitchComentario.on('shown.bs.popover', function () {
        $("#txtOmniswitchComentario").val($("#cphContenido_hfOmniswitchComentario").val());
        $("#txtOmniswitchComentario").focus();
        $("#txtOmniswitchComentario").keyup(function () {
            $("#cphContenido_hfOmniswitchComentario").val($(this).val());
        });
    });

    poPanoramicaRackSwitchComentario = $("#spPanoramicaRackSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocPanoramicaRackSwitchComentario').html();
        }
    });

    poPanoramicaRackSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poPanoramicaRackSwitchComentario.on('shown.bs.popover', function () {
        $("#txtPanoramicaRackSwitchComentario").val($("#cphContenido_hfPanoramicaRackSwitchComentario").val());
        $("#txtPanoramicaRackSwitchComentario").focus();
        $("#txtPanoramicaRackSwitchComentario").keyup(function () {
            $("#cphContenido_hfPanoramicaRackSwitchComentario").val($(this).val());
        });
    });

    poConexionBreakersAsignadosComentario = $("#spConexionBreakersAsignadosComentario").popover({
        html: true,
        content: function () {
            return $('#pocConexionBreakersAsignadosComentario').html();
        }
    });

    poConexionBreakersAsignadosComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConexionBreakersAsignadosComentario.on('shown.bs.popover', function () {
        $("#txtConexionBreakersAsignadosComentario").val($("#cphContenido_hfConexionBreakersAsignadosComentario").val());
        $("#txtConexionBreakersAsignadosComentario").focus();
        $("#txtConexionBreakersAsignadosComentario").keyup(function () {
            $("#cphContenido_hfConexionBreakersAsignadosComentario").val($(this).val());
        });
    });

    poConexionAlimentacionSwitchComentario = $("#spConexionAlimentacionSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocConexionAlimentacionSwitchComentario').html();
        }
    });

    poConexionAlimentacionSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poConexionAlimentacionSwitchComentario.on('shown.bs.popover', function () {
        $("#txtConexionAlimentacionSwitchComentario").val($("#cphContenido_hfConexionAlimentacionSwitchComentario").val());
        $("#txtConexionAlimentacionSwitchComentario").focus();
        $("#txtConexionAlimentacionSwitchComentario").keyup(function () {
            $("#cphContenido_hfConexionAlimentacionSwitchComentario").val($(this).val());
        });
    });

    poAterramientoSwitchComentario = $("#spAterramientoSwitchComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoSwitchComentario').html();
        }
    });

    poAterramientoSwitchComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoSwitchComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoSwitchComentario").val($("#cphContenido_hfAterramientoSwitchComentario").val());
        $("#txtAterramientoSwitchComentario").focus();
        $("#txtAterramientoSwitchComentario").keyup(function () {
            $("#cphContenido_hfAterramientoSwitchComentario").val($(this).val());
        });
    });

    poAterramientoBarraTierraComentario = $("#spAterramientoBarraTierraComentario").popover({
        html: true,
        content: function () {
            return $('#pocAterramientoBarraTierraComentario').html();
        }
    });

    poAterramientoBarraTierraComentario.on('show.bs.popover', function () {
        //Devuelve el popover: $(this).data("bs.popover").tip()
        $(this).data("bs.popover").tip().addClass('info');
        $(this).data("bs.popover").tip().css("max-width", "600px");
    });

    poAterramientoBarraTierraComentario.on('shown.bs.popover', function () {
        $("#txtAterramientoBarraTierraComentario").val($("#cphContenido_hfAterramientoBarraTierraComentario").val());
        $("#txtAterramientoBarraTierraComentario").focus();
        $("#txtAterramientoBarraTierraComentario").keyup(function () {
            $("#cphContenido_hfAterramientoBarraTierraComentario").val($(this).val());
        });
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

    var divOmniswitch = new RealUploader("#divOmniswitch", {
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
                $('#cphContenido_hfOmniswitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfOmniswitch').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfOmniswitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfOmniswitch').val(fileNamesUploaded);
            },
        }
    });

    var divPanoramicaRackSwitch = new RealUploader("#divPanoramicaRackSwitch", {
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
                $('#cphContenido_hfPanoramicaRackSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRackSwitch').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfPanoramicaRackSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfPanoramicaRackSwitch').val(fileNamesUploaded);
            },
        }
    }); 

    var divConexionBreakersAsignados = new RealUploader("#divConexionBreakersAsignados", {
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
                $('#cphContenido_hfConexionBreakersAsignados').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConexionBreakersAsignados').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConexionBreakersAsignados').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConexionBreakersAsignados').val(fileNamesUploaded);
            },
        }
    });

    var divConexionAlimentacionSwitch = new RealUploader("#divConexionAlimentacionSwitch", {
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
                $('#cphContenido_hfConexionAlimentacionSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfConexionAlimentacionSwitch').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfConexionAlimentacionSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfConexionAlimentacionSwitch').val(fileNamesUploaded);
            },
        }
    });

    var divAterramientoSwitch = new RealUploader("#divAterramientoSwitch", {
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
                $('#cphContenido_hfAterramientoSwitch').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSwitch').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoSwitch').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoSwitch').val(fileNamesUploaded);
            },
        }
    });

    var divAterramientoBarraTierra = new RealUploader("#divAterramientoBarraTierra", {
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
                $('#cphContenido_hfAterramientoBarraTierra').val(fileNames);
            },
            finishFile: function (file, msg, fileNames, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoBarraTierra').val(fileNamesUploaded);
            },
            removeAllFiles: function () {
                $('#cphContenido_hfAterramientoBarraTierra').val("");
            },
            removeFile: function (fileNames, fileList, fileNamesUploaded) {
                $('#cphContenido_hfAterramientoBarraTierra').val(fileNamesUploaded);
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