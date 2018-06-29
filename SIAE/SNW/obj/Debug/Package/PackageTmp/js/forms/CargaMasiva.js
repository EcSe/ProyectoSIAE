//Aqui ponemos los controles cuyo evento click se peude disparar despues de un partial postback
function pageLoad(sender, e) {

    $("#cphContenido_btnProcesar").click(function () {
        //console.log("divArchivo.filesPending = " + divArchivo.filesPending);
        var hasErrors = false;
        var cantError = 0;

        //console.log("divArchivo.maxFiles = " + divArchivo.maxFiles);
        var hasErrors = $.fn.validarDivArchivo();
        //console.log("hasErrors = " + hasErrors);
        
        if (hasErrors)
            cantError++;

        if (cantError == 0)
            return true;
        else
            return false;
    });

}

$(document).ready(function () {
    //$("#cphContenido_fuArchivo").change(function () {
    //    //alert("A file has been selected.");
    //    //var reader = new FileReader();
    //    if (this.files.length == 1) {
    //        $("#cphContenido_txtArchivo").val(this.files[0].name);
    //    }
    //    else if (this.files.length == 0) {
    //        $("#cphContenido_txtArchivo").val("");
    //    }
    //    else {
    //        $("#cphContenido_txtArchivo").val(this.files.length + " archivos");
    //    }

    //    //$("#cphContenido_txtArchivo").popover('show');

    //    for (var i = 0; i < this.files.length; i++) {
    //        var file = this.files[i];
    //        var formData = new FormData();
    //        formData.append("file", file);
    //        var xhr = new XMLHttpRequest();
    //        //xhr.upload.addEventListener("progress", uploadProgress, false);
    //        xhr.upload.addEventListener('progress', function (evt) {
    //            if (evt.lengthComputable) {
    //                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
    //                //document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
    //                console.log(percentComplete.toString() + "%2");
    //            }
    //            else {
    //                //document.getElementById('progressNumber').innerHTML = 'unable to compute';
    //                console.log("unable to compute2");
    //            }
    //        }, false);

    //        xhr.open("POST", "Upload.aspx", true);
    //        xhr.send(formData);
    //    }
        
    //    function uploadProgress(evt) {
    //        if (evt.lengthComputable) {
    //            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
    //            //document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
    //            console.log(percentComplete.toString() + "%");
    //        }
    //        else {
    //            //document.getElementById('progressNumber').innerHTML = 'unable to compute';
    //            console.log("unable to compute");
    //        }
    //    }

    //});
    var cantArcReqDivArchivo = 1;
    var cantArcActualDivArchivo = 0;

    var divArchivo = new RealUploader("#divArchivo", {
        language: 'es_ES',//idioma
        url: 'Upload.aspx',//pagina que carga los archivos
        overrideFile: true,//sobreescribir
        allowDelete: false,//permitir borrar despues de cargar al servidor
        exifRead: true, //Leer los datos de un jpeg
        maxFiles: 1,
        autoStart: true,
        allowedExtensions: ['xls', 'xlsx'],
        listeners: {
            start: function (filesPending) {
                //console.log("start inicio");
                //console.log("filesPending = " + filesPending);
                cantArcActualDivArchivo = 0;
                //console.log("start fin");
            },
            //startFile: function (fileObj) {
            //    console.log("startFile");
            //    console.log("fileObj: " + fileObj);
            //},
            finish: function (fileNames, fileList) {
                //console.log("finish");
                //console.log("fileNames = " + fileNames);
                //console.log("fileList = " + fileList);
                cantArcActualDivArchivo = 0;

                for (var fileId in this.fileList) {
                    if (this.fileList.hasOwnProperty(fileId)) {
                        //console.log("finish 01 fileId = " + fileId);
                        //console.log("finish 01 this.fileList[fileId].name = " + this.fileList[fileId].name);
                        //console.log("finish 01 this.fileList[fileId].file = " + this.fileList[fileId].file);//Objeto file
                        //console.log("finish 01 this.fileList[fileId].file.path = " + this.fileList[fileId].file.path);
                        //console.log("finish 01 this.fileList[fileId].file.type = " + this.fileList[fileId].file.type);
                        //console.log("finish 01 this.fileList[fileId].temp_name = " + this.fileList[fileId].temp_name);
                        //console.log("finish 01 this.fileList[fileId].size = " + this.fileList[fileId].size);
                        //console.log("finish 01 this.fileList[fileId].status = " + this.fileList[fileId].status);
                        //console.log("finish 01 this.fileList[fileId].checkSum = " + this.fileList[fileId].checkSum);
                        //console.log("finish 01 this.fileList[fileId].info = " + this.fileList[fileId].info);
                        //console.log("finish 01 this.fileList[fileId].path = " + this.fileList[fileId].path);
                        cantArcActualDivArchivo++;
                    }
                }

                $('#cphContenido_hfArchivo').val(fileNames);

                $.fn.validarDivArchivo();
            },
            finishFile: function (file, msg) {
                //console.log("finishFile");
                //console.log("file = " + file);
                //console.log("msg = " + msg);
            },
            select: function (fileList) {
                //console.log("select");
            },
            removeAllFiles: function () {
                //console.log("inicio removeAllFiles asp");
                cantArcActualDivArchivo = 0;

                $.fn.validarDivArchivo();
            },
            removeFile: function (fileNames, fileList) {
                //console.log("inicio removeFile asp");
                cantArcActualDivArchivo = 0;
                for (var fileId in this.fileList) {
                    if (this.fileList.hasOwnProperty(fileId)) {
                        //console.log("removeFile 01 fileId = " + fileId);
                        //console.log("removeFile 01 this.fileList[fileId].name = " + this.fileList[fileId].name);
                        //console.log("removeFile 01 this.fileList[fileId].file = " + this.fileList[fileId].file);//Objeto file
                        //console.log("removeFile 01 this.fileList[fileId].file.path = " + this.fileList[fileId].file.path);
                        //console.log("removeFile 01 this.fileList[fileId].temp_name = " + this.fileList[fileId].temp_name);
                        //console.log("removeFile 01 this.fileList[fileId].size = " + this.fileList[fileId].size);
                        //console.log("removeFile 01 this.fileList[fileId].status = " + this.fileList[fileId].status);
                        //console.log("removeFile 01 this.fileList[fileId].checkSum = " + this.fileList[fileId].checkSum);
                        //console.log("removeFile 01 this.fileList[fileId].info = " + this.fileList[fileId].info);
                        //console.log("removeFile 01 this.fileList[fileId].path = " + this.fileList[fileId].path);
                        cantArcActualDivArchivo++;
                    }
                }
                $.fn.validarDivArchivo();
                //console.log("inicio removeFile cantArcActualDivArchivo = " + cantArcActualDivArchivo);

            },
        }
    });
    
    

    $.fn.validarDivArchivo = function () {
        var hasErrors = false;
        if (cantArcReqDivArchivo != cantArcActualDivArchivo) {
            hasErrors = true;
            $("#divArchivo .ax-main-container").addClass('invalid');
            $("#spDivArchivo").addClass('invalid');
            $("#divArchivo").attr("title", "Error");
            $("#divArchivo").attr("data-content", "Debe cargar " + cantArcReqDivArchivo + " archivo(s).");
            $("#divArchivo").popover('show');
            //Despues de mostrar el error ocultamos despues de 4 segundos
            setTimeout(function () {
                    $("#divArchivo").popover('hide');
                  }, 4000);
            $("#divArchivo").popover();
            $("#divArchivo").next().addClass('danger');
        }
        else {
            hasErrors = false;
            $("#divArchivo .ax-main-container").removeClass('invalid');
            $("#spDivArchivo").removeClass('invalid');
            $("#divArchivo").popover('destroy');
        }

        return hasErrors;
    };

    //$("body").on('click', function (e) {
    //    $('[data-toggle=popover]').each(function () {
    //        // hide any open popovers when the anywhere else in the body is clicked
    //        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
    //            $(this).popover('hide');
    //        }
    //    });
    //});

});