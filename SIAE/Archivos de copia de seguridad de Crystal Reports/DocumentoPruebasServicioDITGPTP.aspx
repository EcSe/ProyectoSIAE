<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoPruebasServicioDITGPTP.aspx.cs" Inherits="SNW.forms.DocumentoPruebasServicioDITGPTP" %>
<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center" id="h2Titulo" runat="server"></h2>
        <%--</div>--%>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <div class="panel with-nav-tabs panel-primary">
                <div class="panel-heading">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tabPruebasServicios" data-toggle="tab"><span class="fa fa-file-o"></span>&nbsp;Pruebas de Servicios</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabPruebasServicios">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTiempoPrueba" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTiempoPruebaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTiempoPruebaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTiempoPruebaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTiempoPruebaComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtTiempoPrueba" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtTiempoPrueba">Tiempo Prueba (s)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRetardoMinimo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRetardoMinimoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRetardoMinimoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRetardoMinimoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRetardoMinimoComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtRetardoMinimo" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtRetardoMinimo">Retardo Mín. (RTT) (s)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRetardoMaximo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRetardoMaximoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRetardoMaximoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRetardoMaximoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRetardoMaximoComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtRetardoMaximo" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtRetardoMaximo">Retardo Máx. (RTT) (s)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRetardoPromedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRetardoPromedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRetardoPromedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRetardoPromedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRetardoPromedioComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtRetardoPromedio" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtRetardoPromedio">Retardo Prom. (RTT) (s)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkJitterPromedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spJitterPromedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocJitterPromedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtJitterPromedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfJitterPromedioComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtJitterPromedio" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtJitterPromedio">Jitter Promedio (s)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDesviacionEstandarRetardo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDesviacionEstandarRetardoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDesviacionEstandarRetardoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDesviacionEstandarRetardoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDesviacionEstandarRetardoComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtDesviacionEstandarRetardo" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtDesviacionEstandarRetardo">Desv. Estan. Retardo (s)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkBytesRecibidos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spBytesRecibidosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocBytesRecibidosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtBytesRecibidosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfBytesRecibidosComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtBytesRecibidos" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtBytesRecibidos">Bytes Recibidos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkThroughputPromedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spThroughputPromedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocThroughputPromedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtThroughputPromedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfThroughputPromedioComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtThroughputPromedio" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtThroughputPromedio">Throughput Prom. (Kbps)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDescartePaquetes" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDescartePaquetesComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDescartePaquetesComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDescartePaquetesComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDescartePaquetesComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtDescartePaquetes" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtDescartePaquetes">Descarte Paquetes</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaResultadoPruebaDITGEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaResultadoPruebaDITGEjemplo" runat="server" alt="Pantalla Resultado Prueba DITG (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaResultadoPruebaDITGEjemplo">Pantalla Resultado Prueba DITG (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPantallaResultadoPruebaDITG" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaResultadoPruebaDITGComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaResultadoPruebaDITGComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaResultadoPruebaDITGComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaResultadoPruebaDITGComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPantallaResultadoPruebaDITG" class="">
                                            </div>
                                            <label for="divPantallaResultadoPruebaDITG">Pantalla Resultado Prueba DITG</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPantallaResultadoPruebaDITG" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divFechaHoraRouterDesdeNodoAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgFechaHoraRouterDesdeNodoAEjemplo" runat="server" alt="Fecha Hora Router Distrital Desde Nodo A (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divFechaHoraRouterDesdeNodoAEjemplo">Fecha Hora Router Distrital Desde Nodo A (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkFechaHoraRouterDesdeNodoA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spFechaHoraRouterDesdeNodoAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocFechaHoraRouterDesdeNodoAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtFechaHoraRouterDesdeNodoAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfFechaHoraRouterDesdeNodoAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divFechaHoraRouterDesdeNodoA" class="">
                                            </div>
                                            <label for="divFechaHoraRouterDesdeNodoA">Fecha Hora Router Distrital Desde Nodo A</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfFechaHoraRouterDesdeNodoA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingTodosUsuariosSoloMicroondaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingTodosUsuariosSoloMicroondaEjemplo" runat="server" alt="Ping Todos Usuarios Sólo Microonda (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingTodosUsuariosSoloMicroondajemplo">Ping Todos Usuarios Sólo Microonda (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingTodosUsuariosSoloMicroonda" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingTodosUsuariosSoloMicroondaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingTodosUsuariosSoloMicroondaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingTodosUsuariosSoloMicroondaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingTodosUsuariosSoloMicroondaComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPingTodosUsuariosSoloMicroonda" class="">
                                            </div>
                                            <label for="divPingTodosUsuariosSoloMicroonda">Ping Todos Usuarios Sólo Microonda</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingTodosUsuariosSoloMicroonda" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divDireccionesMACEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgDireccionesMACEjemplo" runat="server" alt="Direcciones MAC (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divDireccionesMACEjemplo">Direcciones MAC (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDireccionesMAC" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDireccionesMACComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDireccionesMACComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDireccionesMACComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDireccionesMACComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divDireccionesMAC" class="">
                                            </div>
                                            <label for="divDireccionesMAC">Direcciones MAC</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfDireccionesMAC" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divResultadoPruebaDITGEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgResultadoPruebaDITGEjemplo" runat="server" alt="Resultado Prueba DITG (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divResultadoPruebaDITGEjemplo">Resultado Prueba DITG (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkResultadoPruebaDITG" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spResultadoPruebaDITGComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocResultadoPruebaDITGComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtResultadoPruebaDITGComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfResultadoPruebaDITGComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divResultadoPruebaDITG" class="">
                                            </div>
                                            <label for="divResultadoPruebaDITG">Resultado Prueba DITG</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfResultadoPruebaDITG" runat="server" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <asp:UpdatePanel ID="upaGuardar" runat="server">
        <ContentTemplate>
            <div class="row">
                <div class="col-xs-12 col-sm-3 col-sm-offset-3">
                    <asp:LinkButton ID="btnGuardar" runat="server" CssClass="btn btn-block btn-success" Text="" OnClick="btnGuardar_Click"><span class="fa fa-floppy-o"></span> Guardar</asp:LinkButton>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <asp:LinkButton ID="btnCancelar" runat="server" CssClass="btn btn-block btn-danger" Text=""><span class="fa fa-times"></span> Cancelar</asp:LinkButton>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <br />
    <br />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoPruebasServicioDITGPTP.js"></script>
</asp:Content>
