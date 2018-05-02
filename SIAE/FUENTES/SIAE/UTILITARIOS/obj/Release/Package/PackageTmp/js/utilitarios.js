function openAlert(controlAlert,divHeader, estiloHeader,controlHeader, header,controlBody, body, pbackdrop,pkeyboard) {
	$(divHeader).removeClass("modal-header-default modal-header-primary modal-header-success modal-header-info modal-header-warning modal-header-danger");
	$(divHeader).addClass(estiloHeader);
    $(controlHeader).text(header);
	if(!controlBody=="")
	{
		$(controlBody).text(body);	
	}
    $(controlAlert).modal({
            backdrop: pbackdrop,//true - dark overlay;false - no overlay (transparent);static - it is not possible to close the modal when clicking outside of it
			keyboard:pkeyboard,//true - the modal can be closed with Esc; false - the modal cannot be closed with Esc
			show: true
        });
}

function habilitarRealUploader(habilitado, controlRealUploader, divRealUploader)
{
    controlRealUploader.enable(habilitado);
    $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-browse-c>.ax-browse").prop('disabled', !habilitado);

    if (habilitado) {
        //No es suficiente deshabilitar el control, tambien directamente el input upload y los controles
        $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-browse-c").removeClass("ax-disabled");
        $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-upload-all").removeClass("ax-disabled");
        $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-clear").removeClass("ax-disabled");
        $(divRealUploader).parent().removeClass("disabled");
    }
    else {
        //No es suficiente deshabilitar el control, tambien directamente el input upload y los controles
        $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-browse-c").addClass("ax-disabled");
        $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-upload-all").addClass("ax-disabled");
        $(divRealUploader + ">.ax-main-container>.ax-main-buttons>.ax-clear").addClass("ax-disabled");
        $(divRealUploader).parent().addClass("disabled");
    }
    
}

function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}
