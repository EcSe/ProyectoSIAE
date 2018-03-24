﻿$(document).ready(function () {

    $('#cphContenido_chkSerieAntenaEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAntenaEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAntenaEstacionA, "#divSerieAntenaEstacionA");
        else
            habilitarRealUploader(true, divSerieAntenaEstacionA, "#divSerieAntenaEstacionA");
    });

    $('#cphContenido_chkSerieODUEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSerieODUEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieODUEstacionA, "#divSerieODUEstacionA");
        else
            habilitarRealUploader(true, divSerieODUEstacionA, "#divSerieODUEstacionA");
    });

    $('#cphContenido_chkSeriePOEEstacionA').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePOEEstacionA").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePOEEstacionA, "#divSeriePOEEstacionA");
        else
            habilitarRealUploader(true, divSeriePOEEstacionA, "#divSeriePOEEstacionA");
    });

    if ($('#cphContenido_hfCMM4A').val() != "0") {
        //console.log("cramos 02");
        $('#cphContenido_chkSerieCMM4EstacionA').change(function () {
            var blnActivo = $("#cphContenido_chkSerieCMM4EstacionA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieCMM4EstacionA, "#divSerieCMM4EstacionA");
            else
                habilitarRealUploader(true, divSerieCMM4EstacionA, "#divSerieCMM4EstacionA");
        });

        $('#cphContenido_chkSerieUGPSEstacionA').change(function () {
            var blnActivo = $("#cphContenido_chkSerieUGPSEstacionA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieUGPSEstacionA, "#divSerieUGPSEstacionA");
            else
                habilitarRealUploader(true, divSerieUGPSEstacionA, "#divSerieUGPSEstacionA");
        });

        $('#cphContenido_chkSerieConversorEstacionA').change(function () {
            var blnActivo = $("#cphContenido_chkSerieConversorEstacionA").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieConversorEstacionA, "#divSerieConversorEstacionA");
            else
                habilitarRealUploader(true, divSerieConversorEstacionA, "#divSerieConversorEstacionA");
        });
    }
    else {
        $("#rowSerieCMM4EstacionA").hide();
        $("#rowSerieUGPSEstacionA").hide();
        $("#rowSerieConversorEstacionA").hide();
    }

    $('#cphContenido_chkSerieAntenaEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSerieAntenaEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieAntenaEstacionB, "#divSerieAntenaEstacionB");
        else
            habilitarRealUploader(true, divSerieAntenaEstacionB, "#divSerieAntenaEstacionB");
    });

    $('#cphContenido_chkSerieODUEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSerieODUEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSerieODUEstacionB, "#divSerieODUEstacionB");
        else
            habilitarRealUploader(true, divSerieODUEstacionB, "#divSerieODUEstacionB");
    });

    $('#cphContenido_chkSeriePOEEstacionB').change(function () {
        var blnActivo = $("#cphContenido_chkSeriePOEEstacionB").prop("checked");
        if (blnActivo)
            habilitarRealUploader(false, divSeriePOEEstacionB, "#divSeriePOEEstacionB");
        else
            habilitarRealUploader(true, divSeriePOEEstacionB, "#divSeriePOEEstacionB");
    });

    //console.log("cramos 03");
    if ($('#cphContenido_hfCMM4B').val() != "0") {
        //console.log("cramos 04");
        $('#cphContenido_chkSerieCMM4EstacionB').change(function () {
            var blnActivo = $("#cphContenido_chkSerieCMM4EstacionB").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieCMM4EstacionB, "#divSerieCMM4EstacionB");
            else
                habilitarRealUploader(true, divSerieCMM4EstacionB, "#divSerieCMM4EstacionB");
        });

        $('#cphContenido_chkSerieUGPSEstacionB').change(function () {
            var blnActivo = $("#cphContenido_chkSerieUGPSEstacionB").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieUGPSEstacionB, "#divSerieUGPSEstacionB");
            else
                habilitarRealUploader(true, divSerieUGPSEstacionB, "#divSerieUGPSEstacionB");
        });

        $('#cphContenido_chkSerieConversorEstacionB').change(function () {
            var blnActivo = $("#cphContenido_chkSerieConversorEstacionB").prop("checked");
            if (blnActivo)
                habilitarRealUploader(false, divSerieConversorEstacionB, "#divSerieConversorEstacionB");
            else
                habilitarRealUploader(true, divSerieConversorEstacionB, "#divSerieConversorEstacionB");
        });
    }
    else {
        $("#rowSerieCMM4EstacionB").hide();
        $("#rowSerieUGPSEstacionB").hide();
        $("#rowSerieConversorEstacionB").hide();
    }


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

    if ($('#cphContenido_hfCMM4A').val() != "0") {

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

    }

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

    if ($('#cphContenido_hfCMM4B').val() != "0") {

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

    }


    var divSerieAntenaEstacionA = new RealUploader("#divSerieAntenaEstacionA", {
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

    var divSerieODUEstacionA = new RealUploader("#divSerieODUEstacionA", {
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

    var divSeriePOEEstacionA = new RealUploader("#divSeriePOEEstacionA", {
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

    if ($('#cphContenido_hfCMM4A').val() != "0") {
        var divSerieCMM4EstacionA = new RealUploader("#divSerieCMM4EstacionA", {
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

        var divSerieUGPSEstacionA = new RealUploader("#divSerieUGPSEstacionA", {
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

        var divSerieConversorEstacionA = new RealUploader("#divSerieConversorEstacionA", {
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
    }

    var divSerieAntenaEstacionB = new RealUploader("#divSerieAntenaEstacionB", {
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

    var divSerieODUEstacionB = new RealUploader("#divSerieODUEstacionB", {
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

    var divSeriePOEEstacionB = new RealUploader("#divSeriePOEEstacionB", {
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

    if ($('#cphContenido_hfCMM4B').val() != "0") {
        var divSerieCMM4EstacionB = new RealUploader("#divSerieCMM4EstacionB", {
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

        var divSerieUGPSEstacionB = new RealUploader("#divSerieUGPSEstacionB", {
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

        var divSerieConversorEstacionB = new RealUploader("#divSerieConversorEstacionB", {
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
    }

    
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