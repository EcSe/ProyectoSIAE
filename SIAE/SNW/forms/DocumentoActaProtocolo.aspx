<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoActaProtocolo.aspx.cs" Inherits="SNW.forms.DocumentoActaProtocolo" %>

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
                        <li class="active"><a href="#tabTitulo" data-toggle="tab"><span class="fa fa-file-o"></span>&nbsp;Título</a></li>
                        <li><a href="#tabConfiguracion" data-toggle="tab"><span class="fa fa-cog"></span>&nbsp;1 Configuración y Pruebas</a></li>
                        <li><a href="#tabMateriales" data-toggle="tab"><span class="fa fa-list-ol"></span>&nbsp;2 Materiales AP</a></li>
                        <li><a href="#tabSFTP" data-toggle="tab"><span class="fa fa-wifi"></span>&nbsp;3 SFTP</a></li>
                        <li><a href="#tabReporteFotografico" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;7 Reporte Fotográfico</a></li>
                        <li><a href="#tabDatosGeneralesNodo" data-toggle="tab"><span class="fa fa-cubes"></span>&nbsp;8 Datos Generales del Nodo</a></li>
                        <li><a href="#tabFotosAdicionales" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;Fotos Adicionales</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabTitulo">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkFrecuencia" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spFrecuenciaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocFrecuenciaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtFrecuenciaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfFrecuenciaComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:DropDownList class="form-control" ID="ddlFrecuencia" runat="server">
                                            </asp:DropDownList>
                                            <label for="cphContenido_ddlFrecuencia">Frecuencia Mzh</label>
                                        </span>
                                    </div>
                                </div>
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
                                        <input type="hidden" id="hfFechaComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtFecha" class="form-control" placeholder="dd/mm/yyyy" runat="server" MaxLength="10"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtFecha">Fecha</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabConfiguracion">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDireccion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDireccionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDireccionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDireccionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDireccionComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtDireccion" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtDireccion">Dirección</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkLatitud" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spLatitudComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocLatitudComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtLatitudComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfLatitudComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtLatitud" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtLatitud">Latitud (S)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkLongitud" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spLongitudComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocLongitudComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtLongitudComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfLongitudComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtLongitud" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtLongitud">Longitud (W)</label>
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
                                                    <asp:CheckBox ID="chkAltitud" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAltitudComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAltitudComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAltitudComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAltitudComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtAltitud" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtAltitud">Altitud (msnm)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAzimut" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAzimutComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAzimutComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAzimutComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAzimutComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtAzimut" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtAzimut">Azimut (°)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkDownTilt" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDownTiltComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDownTiltComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDownTiltComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDownTiltComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtDownTilt" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtDownTilt">Down Tilt (°)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAlturaInstalada" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAlturaInstaladaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAlturaInstaladaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAlturaInstaladaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAlturaInstaladaComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtAlturaInstalada" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtAlturaInstalada">Altura Instalada (m)</label>
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
                                                    <asp:CheckBox ID="chkEficienciaEnlace" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEficienciaEnlaceComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEficienciaEnlaceComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEficienciaEnlaceComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEficienciaEnlaceComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtEficienciaEnlace" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtEficienciaEnlace">Eficiencia Enlace</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCapacidadEnlace" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCapacidadEnlaceComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCapacidadEnlaceComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCapacidadEnlaceComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCapacidadEnlaceComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtCapacidadEnlace" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtCapacidadEnlace">Capacidad Enlace</label>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfigurationRadioEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConfigurationRadioEjemplo" runat="server" alt="Configuration/Radio Ejemplo" style="width: 100%;" />
                                            </div>
                                            <label for="divConfigurationRadioEjemplo">Capt 1: Configuration/Radio (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfigurationRadio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfigurationRadioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfigurationRadioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfigurationRadioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfigurationRadioComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConfigurationRadio" class="">
                                            </div>
                                            <label for="divConfigurationRadio">Capt 1: Configuration/Radio</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfigurationRadio" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfigurationQoSEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConfigurationQoSEEjemplo" runat="server" alt="Configuration/QoS Ejemplo" style="width: 100%;" />
                                            </div>
                                            <label for="divConfigurationQoSEjemplo">Capt 2: Configuration/QoS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfigurationQoS" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfigurationQoSComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfigurationQoSComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfigurationQoSComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfigurationQoSComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConfigurationQoS" class="">
                                            </div>
                                            <label for="divConfigurationQoS">Capt 2: Configuration/QoS</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfigurationQoS" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfigurationSystem01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConfigurationSystem01Ejemplo" runat="server" alt="Capt 3.01: Configuration/System (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfigurationSystem01Ejemplo">Capt 3.01: Configuration/System (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfigurationSystem01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfigurationSystem01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfigurationSystem01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfigurationSystem01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfigurationSystem01Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConfigurationSystem01" class="">
                                            </div>
                                            <label for="divConfigurationSystem01">Capt 3.01: Configuration/System</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfigurationSystem01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfigurationSystem02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConfigurationSystem02Ejemplo" runat="server" alt="Capt 3.02: Configuration/System (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfigurationSystem02Ejemplo">Capt 3.02: Configuration/System (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConfigurationSystem02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfigurationSystem02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfigurationSystem02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfigurationSystem02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfigurationSystem02Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConfigurationSystem02" class="">
                                            </div>
                                            <label for="divConfigurationSystem02">Capt 3.02: Configuration/System</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConfigurationSystem02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMonitorSystemEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgMonitorSystemEjemplo" runat="server" alt="Capt 4: Monitor/System (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMonitorSystemEjemplo">Capt 4: Monitor/System (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMonitorSystem" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMonitorSystemComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMonitorSystemComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMonitorSystemComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMonitorSystemComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divMonitorSystem" class="">
                                            </div>
                                            <label for="divMonitorSystem">Capt 4: Monitor/System</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfMonitorSystem" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMonitorWireless01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgMonitorWireless01Ejemplo" runat="server" alt="Capt 5.01: Monitor/Wireless (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMonitorWireless01Ejemplo">Capt 5.01: Monitor/Wireless (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMonitorWireless01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMonitorWireless01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMonitorWireless01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMonitorWireless01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMonitorWireless01Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divMonitorWireless01" class="">
                                            </div>
                                            <label for="divMonitorWireless01">Capt 5.01: Monitor/Wireless</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfMonitorWireless01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMonitorWireless02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgMonitorWireless02Ejemplo" runat="server" alt="Capt 5.02: Monitor/Wireless (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMonitorWireless02Ejemplo">Capt 5.02: Monitor/Wireless (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMonitorWireless02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMonitorWireless02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMonitorWireless02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMonitorWireless02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMonitorWireless02Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divMonitorWireless02" class="">
                                            </div>
                                            <label for="divMonitorWireless02">Capt 5.02: Monitor/Wireless</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfMonitorWireless02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divToolsWirelessEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgToolsWirelessEjemplo" runat="server" alt="Capt 6: Tools/Wireless link test (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divToolsWirelessEjemplo">Capt 6: Tools/Wireless link test (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkToolsWireless" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spToolsWirelessComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocToolsWirelessComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtToolsWirelessComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfToolsWirelessComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divToolsWireless" class="">
                                            </div>
                                            <label for="divToolsWireless">Capt 6: Tools/Wireless link test</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfToolsWireless" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaHomeEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPantallaHomeEjemplo" runat="server" alt="Capt 7: Pantalla Home (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaHomeEjemplo">Capt 7: Pantalla Home (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPantallaHome" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaHomeComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaHomeComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaHomeComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaHomeComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPantallaHome" class="">
                                            </div>
                                            <label for="divPantallaHome">Capt 7: Pantalla Home</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPantallaHome" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMateriales">
                            <%--<div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTipoFuente" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTipoFuenteComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTipoFuenteComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTipoFuenteComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTipoFuenteComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:DropDownList class="form-control" ID="ddlTipoFuente" runat="server">
                                            </asp:DropDownList>
                                            <label for="cphContenido_ddlTipoFuente">Tipo Fuente</label>
                                        </span>
                                    </div>
                                </div>
                            </div>--%>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEquipamientos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipamientosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipamientosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipamientosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipamientosComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvEquipamientos" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Equipamiento_IdValor" OnRowDataBound="gvEquipamientos_RowDataBound">
                                                <Columns>
                                                    <asp:TemplateField HeaderText="Item">
                                                        <ItemTemplate>
                                                            <%# Container.DataItemIndex + 1 %>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena1" HeaderText="Descripción">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Equipamiento.ValorCadena2" HeaderText="Unidad">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="SerieEquipamiento" HeaderText="N° Serie">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <%--<asp:TemplateField HeaderText="N° Serie">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtSerieEquipamiento" runat="server" Style="max-width: 269px; width:100%;" Text='<%# Bind("SerieEquipamiento") %>' MaxLength="20"></asp:TextBox>
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
                                            <label for="cphContenido_gvEquipamientos">Equipamientos</label>
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
                                                    <asp:CheckBox ID="chkMateriales" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMaterialesComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMaterialesComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMaterialesComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMaterialesComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvMateriales" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Material_IdValor" OnRowDataBound="gvMateriales_RowDataBound">
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
                                                    <asp:BoundField DataField="Material.IdValor" HeaderText="Código">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Material.ValorCadena2" HeaderText="Unidad">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:TemplateField HeaderText="Cantidad">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtCantidad" runat="server" Style="width: 75px" Text='<%# Bind("Cantidad","{0:#,##0}") %>'></asp:TextBox>
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
                                            <label for="cphContenido_gvMateriales">Materiales</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabSFTP">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfBComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtB" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtB">b</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkC" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtC" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtC">c</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkD" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtD" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtD">d</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtE" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtE">e</label>
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
                        <div class="tab-pane fade" id="tabReporteFotografico">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaEstacionAEjemplo" runat="server" alt="Foto 1: Panorámica Estacion A (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaEstacionAEjemplo">Foto 1: Panorámica Estacion A (Ejemplo)</label>
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
                                        <input type="hidden" id="hfPanoramicaEstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEstacionA" class="">
                                            </div>
                                            <label for="divPanoramicaEstacionA">Foto 1: Panorámica Estacion A</label>
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
                                            <div id="divPosicionAntenaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPosicionAntenaEjemplo" runat="server" alt="Foto 2: Posición Antena Instalada (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPosicionAntenaEjemplo">Foto 2: Posición Antena Instalada (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPosicionAntena" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPosicionAntenaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPosicionAntenaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPosicionAntenaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPosicionAntenaComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPosicionAntena" class="">
                                            </div>
                                            <label for="divPosicionAntena">Foto 2: Posición Antena Instalada</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPosicionAntena" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAntenaODUEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAntenaODUEjemplo" runat="server" alt="Foto 3: Antena ODU Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAntenaODUEjemplo">Foto 3: Antena ODU Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAntenaODU" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAntenaODUComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAntenaODUComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAntenaODUComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAntenaODUComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAntenaODU" class="">
                                            </div>
                                            <label for="divAntenaODU">Foto 3: Antena ODU Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAntenaODU" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divUGPSEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgUGPSEjemplo" runat="server" alt="Foto 4: UGPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divUGPSEjemplo">Foto 4: UGPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkUGPS" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spUGPSComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocUGPSComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtUGPSComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfUGPSComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divUGPS" class="">
                                            </div>
                                            <label for="divUGPS">Foto 4: UGPS</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfUGPS" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEngrasadoPernoEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEngrasadoPernoEjemplo" runat="server" alt="Foto 5: Engrasado Perno (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEngrasadoPernoEjemplo">Foto 5: Engrasado Perno (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEngrasadoPerno" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEngrasadoPernoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEngrasadoPernoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEngrasadoPernoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEngrasadoPernoComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEngrasadoPerno" class="">
                                            </div>
                                            <label for="divEngrasadoPerno">Foto 5: Engrasado Perno</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEngrasadoPerno" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSiliconeadoEtiquetadoConectorEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSiliconeadoEtiquetadoConectorEjemplo" runat="server" alt="Foto 6: Siliconeado Etiquetado Conector (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSiliconeadoEtiquetadoConectorEjemplo">Foto 6: Siliconeado Etiquetado Conector (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSiliconeadoEtiquetadoConector" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSiliconeadoEtiquetadoConectorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSiliconeadoEtiquetadoConectorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSiliconeadoEtiquetadoConectorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSiliconeadoEtiquetadoConectorComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSiliconeadoEtiquetadoConector" class="">
                                            </div>
                                            <label for="divSiliconeadoEtiquetadoConector">Foto 6: Siliconeado Etiquetado Conector</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSiliconeadoEtiquetadoConector" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableSFTPEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgRecorridoCableSFTPEjemplo" runat="server" alt="Foto 8: Recorrido Cable SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRecorridoCableSFTPEjemplo">Foto 8: Recorrido Cable SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRecorridoCableSFTP" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRecorridoCableSFTPComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRecorridoCableSFTPComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRecorridoCableSFTPComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRecorridoCableSFTPComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableSFTP" class="">
                                            </div>
                                            <label for="divRecorridoCableSFTP">Foto 8: Recorrido Cable SFTP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfRecorridoCableSFTP" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPOutdoorEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoCableSFTPOutdoorEjemplo" runat="server" alt="Foto 9: Aterramiento Cable SFTP Outdoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTPOutdoorEjemplo">Foto 9: Aterramiento Cable SFTP Outdoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTPOutdoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTPOutdoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTPOutdoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTPOutdoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTPOutdoorComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPOutdoor" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTPOutdoor">Foto 9: Aterramiento Cable SFTP Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTPOutdoor" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoorEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoCableSFTPIndoorEjemplo" runat="server" alt="Foto 10: Aterramiento Cable SFTP Indoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoorEjemplo">Foto 10: Aterramiento Cable SFTP Indoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableSFTPIndoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableSFTPIndoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableSFTPIndoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableSFTPIndoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableSFTPIndoorComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableSFTPIndoor" class="">
                                            </div>
                                            <label for="divAterramientoCableSFTPIndoor">Foto 10: Aterramiento Cable SFTP Indoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableSFTPIndoor" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPOEEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEtiquetadoPOEEjemplo" runat="server" alt="Foto 11: Etiquetado POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoPOEEjemplo">Foto 11: Etiquetado POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoPOE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoPOEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoPOEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoPOEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoPOEComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPOE" class="">
                                            </div>
                                            <label for="divEtiquetadoPOE">Foto 11: Etiquetado POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoPOE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaRackEjemplo" runat="server" alt="Foto 12: Panorámica Rack (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaRackEjemplo">Foto 12: Panorámica Rack (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaRack" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaRackComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaRackComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaRackComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaRackComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRack" class="">
                                            </div>
                                            <label for="divPanoramicaRack">Foto 12: Panorámica Rack</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaRack" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOEEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoPOEEjemplo" runat="server" alt="Foto 13: Aterramiento POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoPOEEjemplo">Foto 13: Aterramiento POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoPOE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoPOEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoPOEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoPOEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoPOEComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoPOE" class="">
                                            </div>
                                            <label for="divAterramientoPOE">Foto 13: Aterramiento POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoPOE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEmergenciaPOEEtiqueta01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEmergenciaPOEEtiqueta01Ejemplo" runat="server" alt="Foto 14.01: Emergencia POE Etiqueta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEmergenciaPOEEtiqueta01Ejemplo">Foto 14.01: Emergencia POE Etiqueta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEmergenciaPOEEtiqueta01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEmergenciaPOEEtiqueta01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEmergenciaPOEEtiqueta01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEmergenciaPOEEtiqueta01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEmergenciaPOEEtiqueta01Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEmergenciaPOEEtiqueta01" class="">
                                            </div>
                                            <label for="divEmergenciaPOEEtiqueta01">Foto 14.01: Emergencia POE Etiqueta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEmergenciaPOEEtiqueta01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEmergenciaPOEEtiqueta02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEmergenciaPOEEtiqueta02Ejemplo" runat="server" alt="Foto 14.02: Emergencia POE Etiqueta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEmergenciaPOEEtiqueta02">Foto 14.02: Emergencia POE Etiqueta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEmergenciaPOEEtiqueta02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEmergenciaPOEEtiqueta02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEmergenciaPOEEtiqueta02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEmergenciaPOEEtiqueta02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEmergenciaPOEEtiqueta02Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEmergenciaPOEEtiqueta02" class="">
                                            </div>
                                            <label for="divEmergenciaPOEEtiqueta02">Foto 14.02: Emergencia POE Etiqueta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEmergenciaPOEEtiqueta02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreSalidaPOEEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPatchCoreSalidaPOEEjemplo" runat="server" alt="Foto 15: Patch Core Salida POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCoreSalidaPOEEjemplo">Foto 15: Patch Core Salida POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCoreSalidaPOE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCoreSalidaPOEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCoreSalidaPOEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCoreSalidaPOEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCoreSalidaPOEComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreSalidaPOE" class="">
                                            </div>
                                            <label for="divPatchCoreSalidaPOE">Foto 15: Patch Core Salida POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCoreSalidaPOE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreSalidaSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPatchCoreSalidaSwitchEjemplo" runat="server" alt="Foto 16: Patch Core Salida Switch (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCoreSalidaSwitchEjemplo">Foto 16: Patch Core Salida Switch (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCoreSalidaSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCoreSalidaSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCoreSalidaSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCoreSalidaSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCoreSalidaSwitchComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreSalidaSwitch" class="">
                                            </div>
                                            <label for="divPatchCoreSalidaSwitch">Foto 16: Patch Core Salida Switch</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCoreSalidaSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSeriePOEEjemplo" runat="server" alt="Foto 17: Serie POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePOEEjemplo">Foto 17: Serie POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePOE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePOEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePOEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePOEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePOEComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSeriePOE" class="">
                                            </div>
                                            <label for="divSeriePOE" id="lblSeriePOE" runat="server">Foto 17: Serie POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSeriePOE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAPEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieAPEjemplo" runat="server" alt="Foto 18: Serie AP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAPEjemplo">Foto 18: Serie AP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieAP" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAPComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAPComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAPComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAPComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieAP" class="">
                                            </div>
                                            <label for="divSerieAP" id="lblSerieAP" runat="server">Foto 18: Serie AP</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieAP" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieAntenaEjemplo" runat="server" alt="Foto 19: Serie Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAntenaEjemplo">Foto 19: Serie Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieAntena" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAntenaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAntenaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAntenaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAntenaComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieAntena" class="">
                                            </div>
                                            <label for="divSerieAntena" id="lblSerieAntena" runat="server">Foto 19: Serie Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieAntena" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabDatosGeneralesNodo">
                            <%--<div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieODU" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieODUComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieODUComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieODUComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieODUComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtSerieODU" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtSerieODU"># Serie ODU</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieNodoAntena" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieNodoAntenaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieNodoAntenaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieNodoAntenaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieNodoAntenaComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtSerieNodoAntena" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtSerieNodoAntena"># Serie Antena</label>
                                        </span>
                                    </div>
                                </div>
                            </div>--%>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkMedicionEnlacePropagacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionEnlacePropagacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionEnlacePropagacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionEnlacePropagacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionEnlacePropagacionComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvMedicionEnlacePropagacion" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" OnRowDataBound="gvMedicionEnlacePropagacion_RowDataBound" DataKeyNames="NodoA_IdNodo,NodoIIBBB_IdNodo">
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
                                            <label for="cphContenido_txt">Mediciones de Enlaces de Propagación</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabFotosAdicionales">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoSALANOutdoorEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoSALANOutdoorEjemplo" runat="server" alt="Aterramiento de SA-LAN Outdoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoSALANOutdoorEjemplo">Aterramiento de SA-LAN Outdoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoSALANOutdoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoSALANOutdoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoSALANOutdoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoSALANOutdoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoSALANOutdoorComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoSALANOutdoor" class="">
                                            </div>
                                            <label for="divAterramientoSALANOutdoor">Aterramiento de SA-LAN Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoSALANOutdoor" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSALANOutdoorEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSALANOutdoorEjemplo" runat="server" alt="SA-LAN Outdoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSALANOutdoorEjemplo">SA-LAN Outdoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSALANOutdoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSALANOutdoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSALANOutdoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSALANOutdoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSALANOutdoorComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSALANOutdoor" class="">
                                            </div>
                                            <label for="divSALANOutdoor">SA-LAN Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSALANOutdoor" runat="server" />
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
    <input type="hidden" id="hfIdPerfil" runat="server"/>
    <input type="hidden" id="hfRutaVirtualTemporal" runat="server"/>

    <%--Viene de https://bootsnipp.com/snippets/featured/panels-with-nav-tabs--%>
    <%--<div class="row">
        <div class="col-xs-12">
            <div class="panel with-nav-tabs panel-primary">
                <div class="panel-heading">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab1primary" data-toggle="tab"><span class="fa fa-wifi"></span> Título</a></li>
                        <li><a href="#tab2primary" data-toggle="tab">Primary 2</a></li>
                        <li><a href="#tab3primary" data-toggle="tab">Primary 3</a></li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#tab4primary" data-toggle="tab">Primary 4</a></li>
                                <li><a href="#tab5primary" data-toggle="tab">Primary 5</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tab1primary">Primary 1</div>
                        <div class="tab-pane fade" id="tab2primary">Primary 2</div>
                        <div class="tab-pane fade" id="tab3primary">Primary 3</div>
                        <div class="tab-pane fade" id="tab4primary">Primary 4</div>
                        <div class="tab-pane fade" id="tab5primary">Primary 5</div>
                    </div>
                </div>
            </div>
        </div>
    </div>--%>
    <%--Viene de https://bootsnipp.com/snippets/Wa3np--%>
    <%--<div class="row">
        <div class="col-md-4">
            <h3>Default Styling</h3>

            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Checkbox Block (Default Checked)</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch">
                            <label>
                                <input type="checkbox" name="" checked="checked" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Checkbox Inline (Default Unchecked)</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch">
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>

                    <small class="text-uppercase text-muted"><b>Checkbox Disabled (Default Checked)</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>

                    <small class="text-uppercase text-muted"><b>Checkbox Disabled (Default Unchecked)</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch">
                            <input type="checkbox" name="" disabled="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>


            <h3>Light Styling</h3>

            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Checkbox Block</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-light">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Checkbox Inline</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-light">
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>

                    <small class="text-uppercase text-muted"><b>Checkbox Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-light">
                            <input type="checkbox" name="" disabled="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>

            <h3>Success</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Default Checked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-success">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Unchecked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-success">
                            <label>
                                <input type="checkbox" name="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-success">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>


        </div>
        <div class="col-md-4">
            <h3>Primary</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Default Checked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-primary">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Unchecked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-primary">
                            <label>
                                <input type="checkbox" name="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-primary">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>

            <h3>Info</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Default Checked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-info">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Unchecked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-info">
                            <label>
                                <input type="checkbox" name="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-info">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>

            <h3>Warning</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Default Checked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-warning">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Unchecked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-warning">
                            <label>
                                <input type="checkbox" name="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-warning">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <h3>Danger</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Default Checked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-danger">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Unchecked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-danger">
                            <label>
                                <input type="checkbox" name="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-danger">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>


            <h3>Dark</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <small class="text-uppercase text-muted"><b>Default Checked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-dark">
                            <label>
                                <input type="checkbox" name="" checked="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Unchecked</b></small>
                    <div class="form-group">
                        <div class="checkbox checbox-switch switch-dark">
                            <label>
                                <input type="checkbox" name="" />
                                <span></span>
                                Checkbox Label
                                   
                            </label>
                        </div>
                    </div>

                    <small class="text-uppercase text-muted"><b>Default Disabled</b></small>
                    <div class="form-group">
                        <label class="checkbox-inline checbox-switch switch-dark">
                            <input type="checkbox" name="" disabled="" checked="" />
                            <span></span>
                            Checkbox Label
                               
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>--%>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoActaProtocolo.js"></script>
</asp:Content>
