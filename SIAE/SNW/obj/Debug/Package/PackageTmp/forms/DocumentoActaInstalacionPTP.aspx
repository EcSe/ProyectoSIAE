<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoActaInstalacionPTP.aspx.cs" Inherits="SNW.forms.DocumentoActaInstalacionPTP" %>

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
                        <li class="active"><a href="#tabCaratula" data-toggle="tab"><span class="fa fa-file-o"></span>&nbsp;Carátula</a></li>
                        <li><a href="#tabConfiguracionMediciones" data-toggle="tab"><span class="fa fa-cog"></span>&nbsp;1 Configuración y Mediciones</a></li>
                        <li><a href="#tabMaterialesEstacionA" data-toggle="tab"><span class="fa fa-list-ol"></span>&nbsp;2 Materiales A</a></li>
                        <li><a href="#tabMaterialesEstacionB" data-toggle="tab"><span class="fa fa-list-ol"></span>&nbsp;3 Materiales B</a></li>
                        <li><a href="#tabLongitudSFTP" data-toggle="tab"><span class="fa fa-wifi"></span>&nbsp;4 Longitud SFTP</a></li>
                        <li><a href="#tabAsignacionesObservaciones" data-toggle="tab"><span class="fa fa-search"></span>&nbsp;5 Asignaciones y Observaciones</a></li>
                        <li><a href="#tabCalculoPropagacion" data-toggle="tab"><span class="fa fa-line-chart"></span>&nbsp;6 Cálculo Propagacion</a></li>
                        <li><a href="#tabPruebasInterferencia" data-toggle="tab"><span class="fa fa-wifi"></span>&nbsp;8 Pruebas de Interferencia</a></li>
                        <li><a href="#tabSerieEquipos" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;9 Serie Equipos (fotos)</a></li>
                        <li><a href="#tabReporteFotografico" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;10 Reporte Fotográfico</a></li>
                        <li><a href="#tabDatosGeneralesNodoA" data-toggle="tab"><span class="fa fa-cubes"></span>&nbsp;11 DATOS GENERALES NODO A</a></li>
                        <li><a href="#tabDatosGeneralesNodoB" data-toggle="tab"><span class="fa fa-cubes"></span>&nbsp;12 DATOS GENERALES NODO B</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabCaratula">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkFecha" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spFechaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocFechaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtFechaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfFechaComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtFecha" class="form-control" placeholder="dd/mm/yyyy" runat="server" MaxLength="10"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtFecha">Fecha</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabConfiguracionMediciones">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDireccionEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDireccionEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDireccionEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDireccionEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDireccionEstacionAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtDireccionEstacionA" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtDireccionEstacionA">Dirección Estación A</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDireccionEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDireccionEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDireccionEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDireccionEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDireccionEstacionBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtDireccionEstacionB" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtDireccionEstacionB">Dirección Estación B</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkReferenciaEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spReferenciaEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocReferenciaEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtReferenciaEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfReferenciaEstacionAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtReferenciaEstacionA" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtReferenciaEstacionA">Referencia Ubicación Estación A</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkReferenciaEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spReferenciaEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocReferenciaEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtReferenciaEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfReferenciaEstacionBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtReferenciaEstacionB" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtReferenciaEstacionB">Referencia Ubicación Estación B</label>
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
                                                    <asp:CheckBox ID="chkNivelRecepcionOperacionRadioA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNivelRecepcionOperacionRadioAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNivelRecepcionOperacionRadioAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNivelRecepcionOperacionRadioAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNivelRecepcionOperacionRadioAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtNivelRecepcionOperacionRadioA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtNivelRecepcionOperacionRadioA">Niv. Rec. Radio A (dBm)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkNivelRecepcionOperacionRadioB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNivelRecepcionOperacionRadioBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNivelRecepcionOperacionRadioBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNivelRecepcionOperacionRadioBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNivelRecepcionOperacionRadioBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtNivelRecepcionOperacionRadioB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtNivelRecepcionOperacionRadioB">Niv. Rec. Radio B (dBm)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingPTPRadioA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingPTPRadioAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingPTPRadioAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingPTPRadioAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingPTPRadioAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPingPTPRadioA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtPingPTPRadioA">Ping PTP Radio A (ms)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingPTPRadioB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingPTPRadioBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingPTPRadioBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingPTPRadioBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingPTPRadioBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPingPTPRadioB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtPingPTPRadioB">Ping PTP Radio B (ms)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionGeneralEnlaceEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionGeneralEnlaceEstacionAEjemplo" runat="server" alt="Configuración General del Enlace Estación A (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionGeneralEnlaceEstacionAEjemplo">Configuración General del Enlace Estación A (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionGeneralEnlaceEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionGeneralEnlaceEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionGeneralEnlaceEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionGeneralEnlaceEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionGeneralEnlaceEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionGeneralEnlaceEstacionA" class="">
                                            </div>
                                            <label for="divConfiguracionGeneralEnlaceEstacionA">Configuración General del Enlace Estación A</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionGeneralEnlaceEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionGeneralEnlaceEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionGeneralEnlaceEstacionBEjemplo" runat="server" alt="Configuración General del Enlace Estación B (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionGeneralEnlaceEstacionBEjemplo">Configuración General del Enlace Estación B (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionGeneralEnlaceEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionGeneralEnlaceEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionGeneralEnlaceEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionGeneralEnlaceEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionGeneralEnlaceEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionGeneralEnlaceEstacionB" class="">
                                            </div>
                                            <label for="divConfiguracionGeneralEnlaceEstacionB">Configuración General del Enlace Estación B</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionGeneralEnlaceEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionVLANEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionVLANEstacionAEjemplo" runat="server" alt="Configuración VLAN Estación A (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionVLANEstacionAjemplo">Configuración VLAN Estación A (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionVLANEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionVLANEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionVLANEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionVLANEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionVLANEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionVLANEstacionA" class="">
                                            </div>
                                            <label for="divConfiguracionVLANEstacionA">Configuración VLAN Estación A</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionVLANEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionVLANEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionVLANEstacionBEjemplo" runat="server" alt="Configuración VLAN Estación B (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionVLANEstacionBjemplo">Configuración VLAN Estación B (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionVLANEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionVLANEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionVLANEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionVLANEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionVLANEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionVLANEstacionB" class="">
                                            </div>
                                            <label for="divConfiguracionVLANEstacionB">Configuración VLAN Estación B</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionVLANEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionRadioEstacionA01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionRadioEstacionA01Ejemplo" runat="server" alt="Configuración Radio Estación A 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionRadioEstacionA01Ejemplo">Configuración Radio Estación A 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionRadioEstacionA01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionRadioEstacionA01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionRadioEstacionA01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionRadioEstacionA01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionRadioEstacionA01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionRadioEstacionA01" class="">
                                            </div>
                                            <label for="divConfiguracionRadioEstacionA01">Configuración Radio Estación A 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionRadioEstacionA01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionRadioEstacionA02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionRadioEstacionA02Ejemplo" runat="server" alt="Configuración Radio Estación A 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionRadioEstacionA02Ejemplo">Configuración Radio Estación A 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionRadioEstacionA02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionRadioEstacionA02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionRadioEstacionA02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionRadioEstacionA02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionRadioEstacionA02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionRadioEstacionA02" class="">
                                            </div>
                                            <label for="divConfiguracionRadioEstacionA02">Configuración Radio Estación A 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionRadioEstacionA02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionRadioEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionRadioEstacionBEjemplo" runat="server" alt="Configuración Redio Estacion B (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionRadioEstacionBEjemplo">Configuración Redio Estacion B (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionRadioEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionRadioEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionRadioEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionRadioEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionRadioEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionRadioEstacionB" class="">
                                            </div>
                                            <label for="divConfiguracionRadioEstacionB">Configuración Redio Estacion B</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionRadioEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionIPEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionIPEstacionAEjemplo" runat="server" alt="Configuración IP Estación A (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionIPEstacionAEjemplo">Configuración IP Estación A (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionIPEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionIPEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionIPEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionIPEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionIPEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionIPEstacionA" class="">
                                            </div>
                                            <label for="divConfiguracionIPEstacionA">Configuración IP Estación A</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionIPEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionIPEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionIPEstacionBEjemplo" runat="server" alt="Configuración IP Estación B (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionIPEstacionBEjemplo">Configuración IP Estación B (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfiguracionIPEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionIPEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionIPEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionIPEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionIPEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionIPEstacionB" class="">
                                            </div>
                                            <label for="divConfiguracionIPEstacionB">Configuración IP Estación B</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfiguracionIPEstacionB" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMaterialesEstacionA">
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEquipamientosA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipamientosAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipamientosAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipamientosAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipamientosAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvEquipamientosA" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Equipamiento_IdValor" OnRowDataBound="gvEquipamientosA_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderText="Item">
                                                        <ItemTemplate>
                                                            <%# Container.DataItemIndex + 1 %>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena1" HeaderText="Equipos">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena3" HeaderText="Marca">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena4" HeaderText="Modelo">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="SerieEquipamiento" HeaderText="N° Serie">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <%--<asp:TemplateField HeaderText="N° Serie">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtSerieEquipamientoA" runat="server" Style="max-width: 269px; width: 100%;" Text='<%# Bind("SerieEquipamiento") %>' MaxLength="20"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Acciones">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="btnEliminar" runat="server" CssClass="btn btn-danger" ToolTip="Eliminar"><span class="fa fa-trash"></span></asp:LinkButton>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>--%>
                                                </Columns>
                                            </asp:GridView>
                                            <label for="cphContenido_gvEquipamientosA">Equipamientos</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMaterialesA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMaterialesAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMaterialesAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMaterialesAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMaterialesAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvMaterialesA" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Material_IdValor" OnRowDataBound="gvMaterialesA_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderText="Item">
                                                        <ItemTemplate>
                                                            <%# Container.DataItemIndex + 1 %>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="Material.ValorCadena1" HeaderText="Descripción">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Material.ValorCadena2" HeaderText="Unidad">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:TemplateField HeaderText="Cantidad">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCantidadA" runat="server" Style="width: 75px" Text='<%# Bind("Cantidad","{0:#,##0}") %>'></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <%--<asp:TemplateField HeaderText="Acciones">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="btnEliminar" runat="server" CssClass="btn btn-danger" ToolTip="Eliminar"><span class="fa fa-trash"></span></asp:LinkButton>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>--%>
                                                </Columns>
                                            </asp:GridView>
                                            <label for="cphContenido_gvMaterialesA">Materiales</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMaterialesEstacionB">
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEquipamientosB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipamientosBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipamientosBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipamientosBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipamientosBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvEquipamientosB" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Equipamiento_IdValor" OnRowDataBound="gvEquipamientosB_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderText="Item">
                                                        <ItemTemplate>
                                                            <%# Container.DataItemIndex + 1 %>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena1" HeaderText="Equipos">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena3" HeaderText="Marca">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena4" HeaderText="Modelo">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="SerieEquipamiento" HeaderText="N° Serie">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <%--<asp:TemplateField HeaderText="N° Serie">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtSerieEquipamientoB" runat="server" Style="max-width: 269px; width: 100%;" Text='<%# Bind("SerieEquipamiento") %>' MaxLength="20"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Acciones">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="btnEliminar" runat="server" CssClass="btn btn-danger" ToolTip="Eliminar"><span class="fa fa-trash"></span></asp:LinkButton>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>--%>
                                                </Columns>
                                            </asp:GridView>
                                            <label for="cphContenido_gvEquipamientosB">Equipamientos</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMaterialesB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMaterialesBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMaterialesBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMaterialesBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMaterialesBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvMaterialesB" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Material_IdValor" OnRowDataBound="gvMaterialesB_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderText="Item">
                                                        <ItemTemplate>
                                                            <%# Container.DataItemIndex + 1 %>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="Material.ValorCadena1" HeaderText="Descripción">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Material.ValorCadena2" HeaderText="Unidad">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:TemplateField HeaderText="Cantidad">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCantidadB" runat="server" Style="width: 75px" Text='<%# Bind("Cantidad","{0:#,##0}") %>'></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <%--<asp:TemplateField HeaderText="Acciones">
                                                        <ItemTemplate>
                                                            <asp:LinkButton ID="btnEliminar" runat="server" CssClass="btn btn-danger" ToolTip="Eliminar"><span class="fa fa-trash"></span></asp:LinkButton>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>--%>
                                                </Columns>
                                            </asp:GridView>
                                            <label for="cphContenido_gvMaterialesB">Materiales</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabLongitudSFTP">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación A</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkB_A" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spB_AComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocB_AComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtB_AComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfB_AComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtB_A" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtB_A">b</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkC_A" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spC_AComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocC_AComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtC_AComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfC_AComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtC_A" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtC_A">c</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkD_A" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spD_AComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocD_AComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtD_AComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfD_AComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtD_A" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtD_A">d</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkE_A" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spE_AComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocE_AComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtE_AComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfE_AComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtE_A" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtE_A">e</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación B</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkB_B" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spB_BComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocB_BComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtB_BComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfB_BComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtB_B" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtB_B">b</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkC_B" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spC_BComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocC_BComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtC_BComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfC_BComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtC_B" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtC_B">c</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkD_B" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spD_BComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocD_BComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtD_BComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfD_BComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtD_B" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtD_B">d</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkE_B" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spE_BComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocE_BComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtE_BComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfE_BComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtE_B" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtE_B">e</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group-base input-group">
                                        <div class="has-float-label">
                                            <div id="divSFTP" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSFTPEjemplo" runat="server" alt="SFTP" style="width: 40%; margin-left: auto; margin-right: auto; display: block; min-width: 362px;" />
                                            </div>
                                            <label for="divSFTP">SFTP (Gráfico)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabAsignacionesObservaciones">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación A</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCapacidadBreakerEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCapacidadBreakerEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCapacidadBreakerEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCapacidadBreakerEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCapacidadBreakerEstacionAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtCapacidadBreakerEstacionA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtCapacidadBreakerEstacionA">Capacidad Breaker (A)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkVoltajeCDBreakerEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spVoltajeCDBreakerEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocVoltajeCDBreakerEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtVoltajeCDBreakerEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfVoltajeCDBreakerEstacionAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtVoltajeCDBreakerEstacionA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtVoltajeCDBreakerEstacionA">Voltaje CD Breaker (V)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionBreakerEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionBreakerEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionBreakerEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionBreakerEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionBreakerEstacionAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPosicionBreakerEstacionA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtPosicionBreakerEstacionA">Posición Breaker</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionBarraAterramientoEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionBarraAterramientoEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionBarraAterramientoEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionBarraAterramientoEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionBarraAterramientoEstacionAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPosicionBarraAterramientoEstacionA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtPosicionBarraAterramientoEstacionA">Posi. Barra Aterramiento</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación B</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCapacidadBreakerEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCapacidadBreakerEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCapacidadBreakerEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCapacidadBreakerEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCapacidadBreakerEstacionBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtCapacidadBreakerEstacionB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtCapacidadBreakerEstacionB">Capacidad Breaker (A)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkVoltajeCDBreakerEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spVoltajeCDBreakerEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocVoltajeCDBreakerEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtVoltajeCDBreakerEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfVoltajeCDBreakerEstacionBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtVoltajeCDBreakerEstacionB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtVoltajeCDBreakerEstacionB">Voltaje CD Breaker (V)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionBreakerEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionBreakerEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionBreakerEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionBreakerEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionBreakerEstacionBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPosicionBreakerEstacionB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtPosicionBreakerEstacionB">Posición Breaker</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionBarraAterramientoEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionBarraAterramientoEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionBarraAterramientoEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionBarraAterramientoEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionBarraAterramientoEstacionBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPosicionBarraAterramientoEstacionB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtPosicionBarraAterramientoEstacionB">Posi. Barra Aterramiento</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabCalculoPropagacion">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divIngenieriaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgIngenieriaEjemplo" runat="server" alt="Ingeniería (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divIngenieriaEjemplo">Ingeniería (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkIngenieria" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spIngenieriaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocIngenieriaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtIngenieriaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfIngenieriaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divIngenieria" class="">
                                            </div>
                                            <label for="divIngenieria">Ingeniería</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfIngenieria" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPerfilEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPerfilEjemplo" runat="server" alt="Perfil (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPerfilEjemplo">Perfil (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPerfil" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPerfilComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPerfilComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPerfilComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPerfilComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPerfil" class="">
                                            </div>
                                            <label for="divPerfil">Perfil</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPerfil" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabPruebasInterferencia">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaRadioEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPantallaRadioEstacionAEjemplo" runat="server" alt="Pantalla RADIO Estación A (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaRadioEstacionAEjemplo">Pantalla RADIO Estación A (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPantallaRadioEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaRadioEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaRadioEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaRadioEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaRadioEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaRadioEstacionA" class="">
                                            </div>
                                            <label for="divPantallaRadioEstacionA">Pantalla RADIO Estación A</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPantallaRadioEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaRadioEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPantallaRadioEstacionBEjemplo" runat="server" alt="Pantalla RADIO Estación B (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaRadioEstacionBEjemplo">Pantalla RADIO Estación B (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPantallaRadioEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaRadioEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaRadioEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaRadioEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaRadioEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaRadioEstacionB" class="">
                                            </div>
                                            <label for="divPantallaRadioEstacionB">Pantalla RADIO Estación B</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPantallaRadioEstacionB" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabSerieEquipos">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación A</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieAntenaEstacionAEjemplo" runat="server" alt="Serie Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAntenaEstacionAEjemplo">Serie Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieAntenaEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAntenaEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAntenaEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAntenaEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAntenaEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionA" class="">
                                            </div>
                                            <label for="divSerieAntenaEstacionA" id="lblSerieAntenaEstacionA" runat="server">Serie Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieAntenaEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieODUEstacionAEjemplo" runat="server" alt="Serie ODU (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieODUEstacionAEjemplo">Serie ODU (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieODUEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieODUEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieODUEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieODUEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieODUEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionA" class="">
                                            </div>
                                            <label for="divSerieODUEstacionA" id="lblSerieODUEstacionA" runat="server">Serie ODU</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieODUEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSeriePOEEstacionAEjemplo" runat="server" alt="Serie POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePOEEstacionAEjemplo">Serie POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePOEEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePOEEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePOEEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePOEEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePOEEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionA" class="">
                                            </div>
                                            <label for="divSeriePOEEstacionA" id="lblSeriePOEEstacionA" runat="server">Serie POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSeriePOEEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieCMM4EstacionA">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieCMM4EstacionAEjemplo" runat="server" alt="Serie CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieCMM4EstacionAEjemplo">Serie CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieCMM4EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieCMM4EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieCMM4EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieCMM4EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieCMM4EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionA" class="">
                                            </div>
                                            <label for="divSerieCMM4EstacionA" id="lblSerieCMM4EstacionA" runat="server">Serie CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieCMM4EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieUGPSEstacionA">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieUGPSEstacionAEjemplo" runat="server" alt="Serie UGPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieUGPSEstacionAEjemplo">Serie UGPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieUGPSEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieUGPSEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieUGPSEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieUGPSEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieUGPSEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionA" class="">
                                            </div>
                                            <label for="divSerieUGPSEstacionA">Serie UGPS</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieUGPSEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieConversorEstacionA">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieConversorEstacionAEjemplo" runat="server" alt="Serie Conversor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieConversorEstacionAEjemplo">Serie Conversor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieConversorEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieConversorEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieConversorEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieConversorEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieConversorEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionA" class="">
                                            </div>
                                            <label for="divSerieConversorEstacionA" id="lblSerieConversorEstacionA" runat="server">Serie Conversor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieConversorEstacionA" runat="server" />
                                </div>
                            </div>
                            <asp:HiddenField ID="hfCMM4A" runat="server" />
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación B</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieAntenaEstacionBEjemplo" runat="server" alt="Serie Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAntenaEstacionBEjemplo">Serie Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieAntenaEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAntenaEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAntenaEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAntenaEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAntenaEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionB" class="">
                                            </div>
                                            <label for="divSerieAntenaEstacionB"  id="lblSerieAntenaEstacionB" runat="server">Serie Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieAntenaEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieODUEstacionBEjemplo" runat="server" alt="Serie ODU (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieODUEstacionBEjemplo">Serie ODU (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieODUEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieODUEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieODUEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieODUEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieODUEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionB" class="">
                                            </div>
                                            <label for="divSerieODUEstacionB" id="lblSerieODUEstacionB" runat="server">Serie ODU</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieODUEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSeriePOEEstacionBEjemplo" runat="server" alt="Serie POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePOEEstacionBEjemplo">Serie POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePOEEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePOEEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePOEEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePOEEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePOEEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionB" class="">
                                            </div>
                                            <label for="divSeriePOEEstacionB" id="lblSeriePOEEstacionB" runat="server">Serie POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSeriePOEEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieCMM4EstacionB">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieCMM4EstacionBEjemplo" runat="server" alt="Serie CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieCMM4EstacionBEjemplo">Serie CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieCMM4EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieCMM4EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieCMM4EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieCMM4EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieCMM4EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionB" class="">
                                            </div>
                                            <label for="divSerieCMM4EstacionB" id="lblSerieCMM4EstacionB" runat="server">Serie CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieCMM4EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieUGPSEstacionB">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieUGPSEstacionBEjemplo" runat="server" alt="Serie UGPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieUGPSEstacionBEjemplo">Serie UGPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieUGPSEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieUGPSEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieUGPSEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieUGPSEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieUGPSEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionB" class="">
                                            </div>
                                            <label for="divSerieUGPSEstacionB">Serie UGPS</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieUGPSEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieConversorEstacionB">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieConversorEstacionBEjemplo" runat="server" alt="Serie Conversor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieConversorEstacionBEjemplo">Serie Conversor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieConversorEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieConversorEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieConversorEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieConversorEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieConversorEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionB" class="">
                                            </div>
                                            <label for="divSerieConversorEstacionB" id="lblSerieConversorEstacionB" runat="server">Serie Conversor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieConversorEstacionB" runat="server" />
                                </div>
                            </div>
                            <asp:HiddenField ID="hfCMM4B" runat="server" />
                        </div>
                        <div class="tab-pane fade" id="tabReporteFotografico">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación A</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaEstacionAEjemplo" runat="server" alt="Foto 1: Panorámica de la Estación (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaEstacionAEjemplo">Foto 1: Panorámica de la Estación (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEstacionA" class="">
                                            </div>
                                            <label for="divPanoramicaEstacionA">Foto 1: Panorámica de la Estación</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPosicionIdentificacionEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPosicionIdentificacionEstacionAEjemplo" runat="server" alt="Foto 2: Posición e Identificación Antena Instalada en Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPosicionIdentificacionEstacionAEjemplo">Foto 2: Posición e Identificación Antena Instalada en Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionIdentificacionEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionIdentificacionEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionIdentificacionEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionIdentificacionEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionIdentificacionEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPosicionIdentificacionEstacionA" class="">
                                            </div>
                                            <label for="divPosicionIdentificacionEstacionA">Foto 2: Posición e Identificación Antena Instalada en Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPosicionIdentificacionEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAntenaPTP450iEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAntenaPTP450iEstacionAEjemplo" runat="server" alt="Foto 3: Antena y PTP450i en Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAntenaPTP450iEstacionAEjemplo">Foto 3: Antena y PTP450i en Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAntenaPTP450iEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAntenaPTP450iEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAntenaPTP450iEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAntenaPTP450iEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAntenaPTP450iEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAntenaPTP450iEstacionA" class="">
                                            </div>
                                            <label for="divAntenaPTP450iEstacionA">Foto 3: Antena y PTP450i en Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAntenaPTP450iEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPuertoAntenaEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEtiquetadoPuertoAntenaEstacionAEjemplo" runat="server" alt="Foto 4: Etiquetado en Puerto de Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoPuertoAntenaEstacionAEjemplo">Foto 4: Etiquetado en Puerto de Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoPuertoAntenaEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoPuertoAntenaEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoPuertoAntenaEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoPuertoAntenaEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoPuertoAntenaEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPuertoAntenaEstacionA" class="">
                                            </div>
                                            <label for="divEtiquetadoPuertoAntenaEstacionA">Foto 4: Etiquetado en Puerto de Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoPuertoAntenaEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEngrasadoPernosEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEngrasadoPernosEstacionAEjemplo" runat="server" alt="Foto 5: Engrasado de Pernos (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEngrasadoPernosEstacionAEjemplo">Foto 5: Engrasado de Pernos (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEngrasadoPernosEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEngrasadoPernosEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEngrasadoPernosEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEngrasadoPernosEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEngrasadoPernosEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEngrasadoPernosEstacionA" class="">
                                            </div>
                                            <label for="divEngrasadoPernosEstacionA">Foto 5: Engrasado de Pernos</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEngrasadoPernosEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSiliconeadoConectorEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSiliconeadoConectorEstacionAEjemplo" runat="server" alt="Foto 6: Siliconeado del Conector (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSiliconeadoConectorEstacionAEjemplo">Foto 6: Siliconeado del Conector (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSiliconeadoConectorEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSiliconeadoConectorEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSiliconeadoConectorEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSiliconeadoConectorEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSiliconeadoConectorEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSiliconeadoConectorEstacionA" class="">
                                            </div>
                                            <label for="divSiliconeadoConectorEstacionA">Foto 6: Siliconeado del Conector</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSiliconeadoConectorEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoODUEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoODUEstacionAEjemplo" runat="server" alt="Foto 7: Aterramiento ODU en Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoODUEstacionAEjemplo">Foto 7: Aterramiento ODU en Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoODUEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoODUEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoODUEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoODUEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoODUEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoODUEstacionA" class="">
                                            </div>
                                            <label for="divAterramientoODUEstacionA">Foto 7: Aterramiento ODU en Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoODUEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableSFTPEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgRecorridoCableSFTPEstacionAEjemplo" runat="server" alt="Foto 8: Recorrido Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRecorridoCableSFTPEstacionAEjemplo">Foto 8: Recorrido Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRecorridoCableSFTPEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRecorridoCableSFTPEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRecorridoCableSFTPEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRecorridoCableSFTPEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRecorridoCableSFTPEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableSFTPEstacionA" class="">
                                            </div>
                                            <label for="divRecorridoCableSFTPEstacionA">Foto 8: Recorrido Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfRecorridoCableSFTPEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP01EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTP01EstacionAEjemplo" runat="server" alt="Foto 9.01: Aterramiento Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTP01EstacionAEjemplo">Foto 9.01: Aterramiento Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTP01EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTP01EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTP01EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTP01EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTP01EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP01EstacionA" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTP01EstacionA">Foto 9.01: Aterramiento Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTP01EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP02EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTP02EstacionAEjemplo" runat="server" alt="Foto 9.02: Aterramiento Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTP02EstacionAEjemplo">Foto 9.02: Aterramiento Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTP02EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTP02EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTP02EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTP02EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTP02EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP02EstacionA" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTP02EstacionA">Foto 9.02: Aterramiento Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTP02EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSALANOutdoorEtiquetadoEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSALANOutdoorEtiquetadoEstacionAEjemplo" runat="server" alt="Foto 10: SA-LAN Ooutdoor con Etiquetado (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSALANOutdoorEtiquetadoEstacionAEjemplo">Foto 10: SA-LAN Ooutdoor con Etiquetado (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSALANOutdoorEtiquetadoEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSALANOutdoorEtiquetadoEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSALANOutdoorEtiquetadoEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSALANOutdoorEtiquetadoEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSALANOutdoorEtiquetadoEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSALANOutdoorEtiquetadoEstacionA" class="">
                                            </div>
                                            <label for="divSALANOutdoorEtiquetadoEstacionA">Foto 10: SA-LAN Ooutdoor con Etiquetado</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSALANOutdoorEtiquetadoEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoSALANOutdoorEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoSALANOutdoorEstacionAEjemplo" runat="server" alt="Foto 11: Aterramiento SA-LAN Outdoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoSALANOutdoorEstacionAEjemplo">Foto 11: Aterramiento SA-LAN Outdoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoSALANOutdoorEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoSALANOutdoorEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoSALANOutdoorEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoSALANOutdoorEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoSALANOutdoorEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoSALANOutdoorEstacionA" class="">
                                            </div>
                                            <label for="divAterramientoSALANOutdoorEstacionA">Foto 11: Aterramiento SA-LAN Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoSALANOutdoorEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor01EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTPIndoor01EstacionAEjemplo" runat="server" alt="Foto 14.01: Aterramiento Cable SFTP Indoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor01EstacionAEjemplo">Foto 14.01: Aterramiento Cable SFTP Indoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTPIndoor01EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTPIndoor01EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTPIndoor01EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTPIndoor01EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTPIndoor01EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor01EstacionA" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor01EstacionA">Foto 14.01: Aterramiento Cable SFTP Indoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTPIndoor01EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor02EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTPIndoor02EstacionAEjemplo" runat="server" alt="Foto 14.02: Aterramiento Cable SFTP Indoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor02EstacionAEjemplo">Foto 14.02: Aterramiento Cable SFTP Indoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTPIndoor02EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTPIndoor02EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTPIndoor02EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTPIndoor02EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTPIndoor02EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor02EstacionA" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor02EstacionA">Foto 14.02: Aterramiento Cable SFTP Indoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTPIndoor02EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaRackEstacionAEjemplo" runat="server" alt="Foto 17: Panorámica del Rack (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaRackEstacionAEjemplo">Foto 17: Panorámica del Rack (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaRackEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaRackEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaRackEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaRackEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaRackEstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackEstacionA" class="">
                                            </div>
                                            <label for="divPanoramicaRackEstacionA">Foto 17: Panorámica del Rack</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaRackEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE01EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoPOE01EstacionAEjemplo" runat="server" alt="Foto 18.01: Aterramiento POE (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoPOE01EstacionAEjemplo">Foto 18.01: Aterramiento POE (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoPOE01EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoPOE01EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoPOE01EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoPOE01EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoPOE01EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE01EstacionA" class="">
                                            </div>
                                            <label for="divAterramientoPOE01EstacionA">Foto 18.01: Aterramiento POE (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoPOE01EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE02EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoPOE02EstacionAEjemplo" runat="server" alt="Foto 18.02: Aterramiento POE (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoPOE02EstacionAEjemplo">Foto 18.02: Aterramiento POE (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoPOE02EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoPOE02EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoPOE02EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoPOE02EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoPOE02EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE02EstacionA" class="">
                                            </div>
                                            <label for="divAterramientoPOE02EstacionA">Foto 18.02: Aterramiento POE (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoPOE02EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta01EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEnergiaPOEEtiqueta01EstacionAEjemplo" runat="server" alt="Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta01EstacionAEjemplo">Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEnergiaPOEEtiqueta01EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEnergiaPOEEtiqueta01EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEnergiaPOEEtiqueta01EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEnergiaPOEEtiqueta01EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEnergiaPOEEtiqueta01EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta01EstacionA" class="">
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta01EstacionA">Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEnergiaPOEEtiqueta01EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta02EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEnergiaPOEEtiqueta02EstacionAEjemplo" runat="server" alt="Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta02EstacionAEjemplo">Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEnergiaPOEEtiqueta02EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEnergiaPOEEtiqueta02EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEnergiaPOEEtiqueta02EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEnergiaPOEEtiqueta02EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEnergiaPOEEtiqueta02EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta02EstacionA" class="">
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta02EstacionA">Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEnergiaPOEEtiqueta02EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch01EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPatchCorePOESwitch01EstacionAEjemplo" runat="server" alt="Foto 20.01: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCorePOESwitch01EstacionAEjemplo">Foto 20.01: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCorePOESwitch01EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCorePOESwitch01EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCorePOESwitch01EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCorePOESwitch01EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCorePOESwitch01EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch01EstacionA" class="">
                                            </div>
                                            <label for="divPatchCorePOESwitch01EstacionA">Foto 20.01: Patch Core del POE al Switch (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCorePOESwitch01EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch02EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPatchCorePOESwitch02EstacionAEjemplo" runat="server" alt="Foto 20.02: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCorePOESwitch02EstacionAEjemplo">Foto 20.02: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCorePOESwitch02EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCorePOESwitch02EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCorePOESwitch02EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCorePOESwitch02EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCorePOESwitch02EstacionAComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch02EstacionA" class="">
                                            </div>
                                            <label for="divPatchCorePOESwitch02EstacionA">Foto 20.02: Patch Core del POE al Switch (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCorePOESwitch02EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación B</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaEstacionBEjemplo" runat="server" alt="Foto 1: Panorámica de la Estación (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaEstacionBEjemplo">Foto 1: Panorámica de la Estación (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEstacionB" class="">
                                            </div>
                                            <label for="divPanoramicaEstacionB">Foto 1: Panorámica de la Estación</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPosicionIdentificacionEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPosicionIdentificacionEstacionBEjemplo" runat="server" alt="Foto 2: Posición e Identificación Antena Instalada en Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPosicionIdentificacionEstacionBEjemplo">Foto 2: Posición e Identificación Antena Instalada en Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionIdentificacionEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionIdentificacionEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionIdentificacionEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionIdentificacionEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionIdentificacionEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPosicionIdentificacionEstacionB" class="">
                                            </div>
                                            <label for="divPosicionIdentificacionEstacionB">Foto 2: Posición e Identificación Antena Instalada en Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPosicionIdentificacionEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAntenaPTP450iEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAntenaPTP450iEstacionBEjemplo" runat="server" alt="Foto 3: Antena y PTP450i en Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAntenaPTP450iEstacionBEjemplo">Foto 3: Antena y PTP450i en Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAntenaPTP450iEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAntenaPTP450iEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAntenaPTP450iEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAntenaPTP450iEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAntenaPTP450iEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAntenaPTP450iEstacionB" class="">
                                            </div>
                                            <label for="divAntenaPTP450iEstacionB">Foto 3: Antena y PTP450i en Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAntenaPTP450iEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPuertoAntenaEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEtiquetadoPuertoAntenaEstacionBEjemplo" runat="server" alt="Foto 4: Etiquetado en Puerto de Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoPuertoAntenaEstacionBEjemplo">Foto 4: Etiquetado en Puerto de Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoPuertoAntenaEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoPuertoAntenaEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoPuertoAntenaEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoPuertoAntenaEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoPuertoAntenaEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPuertoAntenaEstacionB" class="">
                                            </div>
                                            <label for="divEtiquetadoPuertoAntenaEstacionB">Foto 4: Etiquetado en Puerto de Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoPuertoAntenaEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEngrasadoPernosEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEngrasadoPernosEstacionBEjemplo" runat="server" alt="Foto 5: Engrasado de Pernos (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEngrasadoPernosEstacionBEjemplo">Foto 5: Engrasado de Pernos (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEngrasadoPernosEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEngrasadoPernosEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEngrasadoPernosEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEngrasadoPernosEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEngrasadoPernosEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEngrasadoPernosEstacionB" class="">
                                            </div>
                                            <label for="divEngrasadoPernosEstacionB">Foto 5: Engrasado de Pernos</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEngrasadoPernosEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSiliconeadoConectorEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSiliconeadoConectorEstacionBEjemplo" runat="server" alt="Foto 6: Siliconeado del Conector (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSiliconeadoConectorEstacionBEjemplo">Foto 6: Siliconeado del Conector (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSiliconeadoConectorEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSiliconeadoConectorEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSiliconeadoConectorEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSiliconeadoConectorEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSiliconeadoConectorEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSiliconeadoConectorEstacionB" class="">
                                            </div>
                                            <label for="divSiliconeadoConectorEstacionB">Foto 6: Siliconeado del Conector</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSiliconeadoConectorEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoODUEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoODUEstacionBEjemplo" runat="server" alt="Foto 7: Aterramiento ODU en Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoODUEstacionBEjemplo">Foto 7: Aterramiento ODU en Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoODUEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoODUEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoODUEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoODUEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoODUEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoODUEstacionB" class="">
                                            </div>
                                            <label for="divAterramientoODUEstacionB">Foto 7: Aterramiento ODU en Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoODUEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableSFTPEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgRecorridoCableSFTPEstacionBEjemplo" runat="server" alt="Foto 8: Recorrido Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRecorridoCableSFTPEstacionBEjemplo">Foto 8: Recorrido Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRecorridoCableSFTPEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRecorridoCableSFTPEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRecorridoCableSFTPEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRecorridoCableSFTPEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRecorridoCableSFTPEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableSFTPEstacionB" class="">
                                            </div>
                                            <label for="divRecorridoCableSFTPEstacionB">Foto 8: Recorrido Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfRecorridoCableSFTPEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP01EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTP01EstacionBEjemplo" runat="server" alt="Foto 9.01: Aterramiento Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTP01EstacionBEjemplo">Foto 9.01: Aterramiento Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTP01EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTP01EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTP01EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTP01EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTP01EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP01EstacionB" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTP01EstacionB">Foto 9.01: Aterramiento Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTP01EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP02EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTP02EstacionBEjemplo" runat="server" alt="Foto 9.02: Aterramiento Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTP02EstacionBEjemplo">Foto 9.02: Aterramiento Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTP02EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTP02EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTP02EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTP02EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTP02EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTP02EstacionB" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTP02EstacionB">Foto 9.02: Aterramiento Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTP02EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSALANOutdoorEtiquetadoEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSALANOutdoorEtiquetadoEstacionBEjemplo" runat="server" alt="Foto 10: SA-LAN Ooutdoor con Etiquetado (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSALANOutdoorEtiquetadoEstacionBEjemplo">Foto 10: SA-LAN Ooutdoor con Etiquetado (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSALANOutdoorEtiquetadoEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSALANOutdoorEtiquetadoEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSALANOutdoorEtiquetadoEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSALANOutdoorEtiquetadoEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSALANOutdoorEtiquetadoEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSALANOutdoorEtiquetadoEstacionB" class="">
                                            </div>
                                            <label for="divSALANOutdoorEtiquetadoEstacionB">Foto 10: SA-LAN Ooutdoor con Etiquetado</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSALANOutdoorEtiquetadoEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoSALANOutdoorEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoSALANOutdoorEstacionBEjemplo" runat="server" alt="Foto 11: Aterramiento SA-LAN Outdoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoSALANOutdoorEstacionBEjemplo">Foto 11: Aterramiento SA-LAN Outdoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoSALANOutdoorEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoSALANOutdoorEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoSALANOutdoorEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoSALANOutdoorEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoSALANOutdoorEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoSALANOutdoorEstacionB" class="">
                                            </div>
                                            <label for="divAterramientoSALANOutdoorEstacionB">Foto 11: Aterramiento SA-LAN Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoSALANOutdoorEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor01EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTPIndoor01EstacionBEjemplo" runat="server" alt="Foto 14.01: Aterramiento Cable SFTP Indoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor01EstacionBEjemplo">Foto 14.01: Aterramiento Cable SFTP Indoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTPIndoor01EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTPIndoor01EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTPIndoor01EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTPIndoor01EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTPIndoor01EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor01EstacionB" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor01EstacionB">Foto 14.01: Aterramiento Cable SFTP Indoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTPIndoor01EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor02EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoCableSFTPIndoor02EstacionBEjemplo" runat="server" alt="Foto 14.02: Aterramiento Cable SFTP Indoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor02EstacionBEjemplo">Foto 14.02: Aterramiento Cable SFTP Indoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTPIndoor02EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTPIndoor02EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTPIndoor02EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTPIndoor02EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTPIndoor02EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor02EstacionB" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor02EstacionB">Foto 14.02: Aterramiento Cable SFTP Indoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTPIndoor02EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaRackEstacionBEjemplo" runat="server" alt="Foto 17: Panorámica del Rack (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaRackEstacionBEjemplo">Foto 17: Panorámica del Rack (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaRackEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaRackEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaRackEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaRackEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaRackEstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackEstacionB" class="">
                                            </div>
                                            <label for="divPanoramicaRackEstacionB">Foto 17: Panorámica del Rack</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaRackEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE01EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoPOE01EstacionBEjemplo" runat="server" alt="Foto 18.01: Aterramiento POE (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoPOE01EstacionBEjemplo">Foto 18.01: Aterramiento POE (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoPOE01EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoPOE01EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoPOE01EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoPOE01EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoPOE01EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE01EstacionB" class="">
                                            </div>
                                            <label for="divAterramientoPOE01EstacionB">Foto 18.01: Aterramiento POE (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoPOE01EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE02EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoPOE02EstacionBEjemplo" runat="server" alt="Foto 18.02: Aterramiento POE (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoPOE02EstacionBEjemplo">Foto 18.02: Aterramiento POE (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoPOE02EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoPOE02EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoPOE02EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoPOE02EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoPOE02EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE02EstacionB" class="">
                                            </div>
                                            <label for="divAterramientoPOE02EstacionB">Foto 18.02: Aterramiento POE (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoPOE02EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta01EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEnergiaPOEEtiqueta01EstacionBEjemplo" runat="server" alt="Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta01EstacionBEjemplo">Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEnergiaPOEEtiqueta01EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEnergiaPOEEtiqueta01EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEnergiaPOEEtiqueta01EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEnergiaPOEEtiqueta01EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEnergiaPOEEtiqueta01EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta01EstacionB" class="">
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta01EstacionB">Foto 19.01: Energía de POE con Etiqueta (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEnergiaPOEEtiqueta01EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta02EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEnergiaPOEEtiqueta02EstacionBEjemplo" runat="server" alt="Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta02EstacionBEjemplo">Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEnergiaPOEEtiqueta02EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEnergiaPOEEtiqueta02EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEnergiaPOEEtiqueta02EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEnergiaPOEEtiqueta02EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEnergiaPOEEtiqueta02EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEnergiaPOEEtiqueta02EstacionB" class="">
                                            </div>
                                            <label for="divEnergiaPOEEtiqueta02EstacionB">Foto 19.02: Energía de POE con Etiqueta (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEnergiaPOEEtiqueta02EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch01EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPatchCorePOESwitch01EstacionBEjemplo" runat="server" alt="Foto 20.01: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCorePOESwitch01EstacionBEjemplo">Foto 20.01: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCorePOESwitch01EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCorePOESwitch01EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCorePOESwitch01EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCorePOESwitch01EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCorePOESwitch01EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch01EstacionB" class="">
                                            </div>
                                            <label for="divPatchCorePOESwitch01EstacionB">Foto 20.01: Patch Core del POE al Switch (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCorePOESwitch01EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch02EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPatchCorePOESwitch02EstacionBEjemplo" runat="server" alt="Foto 20.02: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCorePOESwitch02EstacionBEjemplo">Foto 20.02: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCorePOESwitch02EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCorePOESwitch02EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCorePOESwitch02EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCorePOESwitch02EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCorePOESwitch02EstacionBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPatchCorePOESwitch02EstacionB" class="">
                                            </div>
                                            <label for="divPatchCorePOESwitch02EstacionB">Foto 20.02: Patch Core del POE al Switch (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCorePOESwitch02EstacionB" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabDatosGeneralesNodoA">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePTP450iNodoA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePTP450iNodoAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePTP450iNodoAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePTP450iNodoAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePTP450iNodoAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtSeriePTP450iNodoA" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtSeriePTP450iNodoA"># Serie PTP450i</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMedicionEnlacePropagacionNodoA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionEnlacePropagacionNodoAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionEnlacePropagacionNodoAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionEnlacePropagacionNodoAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionEnlacePropagacionNodoAComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvMedicionEnlacePropagacionNodoA" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%">
                                                <Columns>
                                                    <asp:BoundField DataField="NodoA.IdNodo" HeaderText="Local">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="NodoIIBBB.IdNodo" HeaderText="Remoto">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:TemplateField HeaderText="RSS Local (dBm)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtRSSLocal" runat="server" Text='<%# Bind("RSSLocal","{0:#,##0.00}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="RSS Remoto (dBm)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtRSSRemoto" runat="server" Text='<%# Bind("RSSRemoto","{0:#,##0.00}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Tiempo Promedio (ms)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtTiempoPromedio" runat="server" Text='<%# Bind("TiempoPromedio","{0:#,##0}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Capacidad Subida (Mbps)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCapacidadSubida" runat="server" Text='<%# Bind("CapidadSubida","{0:#,##0.000}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Capacidad Bajada (Mbps)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCapacidadBajada" runat="server" Text='<%# Bind("CapidadBajada","{0:#,##0.000}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                </Columns>
                                            </asp:GridView>
                                            <label for="cphContenido_gvMedicionEnlacePropagacionNodoA">Mediciones de Enlaces de Propagación</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabDatosGeneralesNodoB">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePTP450iNodoB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePTP450iNodoBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePTP450iNodoBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePTP450iNodoBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePTP450iNodoBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtSeriePTP450iNodoB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtSeriePTP450iNodoB"># Serie PTP450i</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMedicionEnlacePropagacionNodoB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionEnlacePropagacionNodoBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionEnlacePropagacionNodoBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionEnlacePropagacionNodoBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionEnlacePropagacionNodoBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvMedicionEnlacePropagacionNodoB" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%">
                                                <Columns>
                                                    <asp:BoundField DataField="NodoA.IdNodo" HeaderText="Local">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="NodoIIBBB.IdNodo" HeaderText="Remoto">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:TemplateField HeaderText="RSS Local (dBm)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtRSSLocal" runat="server" Text='<%# Bind("RSSLocal","{0:#,##0.00}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="RSS Remoto (dBm)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtRSSRemoto" runat="server" Text='<%# Bind("RSSRemoto","{0:#,##0.00}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Tiempo Promedio (ms)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtTiempoPromedio" runat="server" Text='<%# Bind("TiempoPromedio","{0:#,##0}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Capacidad Subida (Mbps)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCapacidadSubida" runat="server" Text='<%# Bind("CapidadSubida","{0:#,##0.000}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Capacidad Bajada (Mbps)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCapacidadBajada" runat="server" Text='<%# Bind("CapidadBajada","{0:#,##0.000}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                </Columns>
                                            </asp:GridView>
                                            <label for="cphContenido_gvMedicionEnlacePropagacionNodoB">Mediciones de Enlaces de Propagación</label>
                                        </span>
                                    </div>
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
     <input type="hidden" id="hfIdPerfil" runat="server" />
    <input type="hidden" id="hfRutaVirtualTemporal" runat="server" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoActaInstalacionPTP.js"></script>
</asp:Content>
