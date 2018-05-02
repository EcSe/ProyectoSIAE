$(document).ready(function () {

    $("#cphContenido_txtUsuario").keyup(function (event) {
        if (event.keyCode === 13) {
            //$("#cphContenido_btnIngresar").click();
            __doPostBack('ctl00$cphContenido$btnIngresar', '');
        }
    });

    $("#cphContenido_txtPassword").keyup(function (event) {
        //console.log("cramos01");
        if (event.keyCode === 13) {
            //$("#cphContenido_btnIngresar").click();
            __doPostBack('ctl00$cphContenido$btnIngresar', '');
        }
    });

});