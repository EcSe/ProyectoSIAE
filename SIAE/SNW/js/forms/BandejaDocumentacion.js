$(document).ready(function () {
    var rutaVirtualEstandar = $("#hfRutaVirtualEstandar").val();

    $(function () {
        $("#cphContenido_txtContratista").typeahead({
            hint: true,
            highlight: true,
            minLength: 1,
            source: function (request, response) {
                //console.log("hola");
                $.ajax({
                    //url: 'Utilitario.aspx/GetEntidadesDetalle',
                    //url: 'http://localhost:1544/UTILITARIOS/forms/EntidadDetalle.aspx/GetEntidadesDetalle',
                    url: rutaVirtualEstandar + '/forms/EntidadDetalle.aspx/GetEntidadesDetalle',
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

    $("#cphContenido_txtIdNodoIIBB").keyup(function (event) {
        if (event.keyCode === 13) {
            //$("#cphContenido_btnIngresar").click();
            __doPostBack('ctl00$cphContenido$btnBuscar', '');
        }
    });

    $("#cphContenido_txtContratista").keyup(function (event) {
        //console.log("cramos01");
        if (event.keyCode === 13) {
            //$("#cphContenido_btnIngresar").click();
            __doPostBack('ctl00$cphContenido$btnBuscar', '');
        }
    });

});