<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoActaInstalacionAceptacionProtocoloIIBB.aspx.cs" Inherits="SNW.forms.DocumentoActaInstalacionAceptacionProtocoloIIBB" %>

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
                        <li><a href="#tabActaInstalacionFitel" data-toggle="tab"><span class="fa fa-file-o"></span>&nbsp;1 Acta de Instalación FITEL</a></li>
                        <li><a href="#tabConfiguracion" data-toggle="tab"><span class="fa fa-cog"></span>&nbsp;2 Configuración y Pruebas</a></li>
                        <li><a href="#tabPantallasConfiguracion" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;3 Pantallas de Configuración</a></li>
                        <li><a href="#tabMedicionSPAT" data-toggle="tab"><span class="fa fa-signal"></span>&nbsp;4 Medición SPAT</a></li>
                        <li><a href="#tabMaterialIIBBCPE" data-toggle="tab"><span class="fa fa-list-ol"></span>&nbsp;6 Material IIBB CPE</a></li>
                        <li><a href="#tabReporteFotograficoIIBBCPE" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;7 Reporte Fotográfico IIBB CPE</a></li>
                        <li><a href="#tabSerieEquipos" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;8 Serie Equipos (fotos)</a></li>
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
                                                    <asp:checkbox id="chkFecha" runat="server" />
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
                                            <asp:textbox id="txtFecha" class="form-control" placeholder="dd/mm/yyyy" runat="server" maxlength="10"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtFecha">Fecha</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabActaInstalacionFitel">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">1. UBICACIÓN DEL NODO</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDireccionNodo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDireccionNodoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDireccionNodoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDireccionNodoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDireccionNodoComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtDireccionNodo" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtDireccionNodo">Dirección Nodo</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">2. INSTITUCIÓN BENEFICIARIA</h4>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.1. Ubicación</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkLatitud" runat="server" />
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
                                        <input type="hidden" id="hfLatitudComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtLatitud" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtLatitud">Latitud (S)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkLongitud" runat="server" />
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
                                        <input type="hidden" id="hfLongitudComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtLongitud" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtLongitud">Longitud (W)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkReferenciaIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spReferenciaIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocReferenciaIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtReferenciaIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfReferenciaIIBBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtReferenciaIIBB" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtReferenciaIIBB">Referencia Ubicación IIBB</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.2. Infraestructura</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkTipoMastil" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTipoMastilComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTipoMastilComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTipoMastilComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTipoMastilComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:dropdownlist class="form-control" id="ddlTipoMastil" runat="server">
                                            </asp:dropdownlist>
                                            <label for="cphContenido_ddlTipoMastil">Tipo Mástil</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkAlturaMastil" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAlturaMastilComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAlturaMastilComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAlturaMastilComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAlturaMastilComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAlturaMastil" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtAlturaMastil">Altura Mástil (m)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.4. Energía Eléctrica del Servicio Instalado</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDisponibilidadHora" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDisponibilidadHoraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDisponibilidadHoraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDisponibilidadHoraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDisponibilidadHoraComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtDisponibilidadHora" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtDisponibilidadHora">Disponibilidad Horas (H)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.5. Sistema de Puesta a Tierra instituciones</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkValorMedioMedida01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spValorMedioMedida01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocValorMedioMedida01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtValorMedioMedida01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfValorMedioMedida01Comentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtValorMedioMedida01" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtValorMedioMedida01">Valor Medio Medida 1</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkValorMedioMedida02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spValorMedioMedida02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocValorMedioMedida02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtValorMedioMedida02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfValorMedioMedida02Comentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtValorMedioMedida02" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtValorMedioMedida02">Valor Medio Medida 2</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkValorMedioMedida03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spValorMedioMedida03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocValorMedioMedida03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtValorMedioMedida03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfValorMedioMedida03Comentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtValorMedioMedida03" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtValorMedioMedida03">Valor Medio Medida 3</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.6. Característica de Propagación</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPotenciaTransmision" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPotenciaTransmisionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPotenciaTransmisionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPotenciaTransmisionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPotenciaTransmisionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtPotenciaTransmision" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtPotenciaTransmision">Pot. Trans. (W o dBm)</label>
                                        </span>
                                    </div>
                                </div>
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
                                                    <asp:checkbox id="chkAnchoBandaCanal" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAnchoBandaCanalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAnchoBandaCanalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAnchoBandaCanalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAnchoBandaCanalComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAnchoBandaCanal" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtAnchoBandaCanal">Ancho B. Canal (MHz)</label>
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
                                                    <asp:checkbox id="chkAzimuth" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAzimuthComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAzimuthComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAzimuthComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAzimuthComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAzimuth" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtAzimuth">Azimuth (X°)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkElevacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spElevacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocElevacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtElevacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfElevacionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtElevacion" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtElevacion">Elevación (Y°)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.7. Mediciones de Enlaces</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionEnlacePropagacion" runat="server" />
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
                                        <input type="hidden" id="hfMedicionEnlacePropagacionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:gridview id="gvMedicionEnlacePropagacion" runat="server" cssclass=" table-bordered table-striped table-condensed table-hover" autogeneratecolumns="False" width="100%" OnRowDataBound="gvMedicionEnlacePropagacion_RowDataBound" DataKeyNames="NodoA_IdNodo,NodoIIBBB_IdNodo">
                                                <Columns>
                                                    <asp:BoundField DataField="NodoIIBBB.IdNodo" HeaderText="CPE">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="NodoA.IdNodo" HeaderText="Estación Local">
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:BoundField>
                                                    <asp:TemplateField HeaderText="RSS CPE (dBm)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtRSSRemoto" runat="server" Text='<%# Bind("RSSRemoto","{0:#,##0.00}") %>' Style="width: 75px"></asp:TextBox>
                                                        </ItemTemplate>
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="RSS Local (dBm)">
                                                        <ItemTemplate>
                                                            <asp:TextBox ID="txtRSSLocal" runat="server" Text='<%# Bind("RSSLocal","{0:#,##0.00}") %>' Style="width: 75px"></asp:TextBox>
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
                                            </asp:gridview>
                                            <label for="cphContenido_txt">Mediciones de Enlaces de Propagación</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">2.8. Conectividad a la Red</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkVerificacionConectividad" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spVerificacionConectividadComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocVerificacionConectividadComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtVerificacionConectividadComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfVerificacionConectividadComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:dropdownlist class="form-control" id="ddlVerificacionConectividad" runat="server">
                                            </asp:dropdownlist>
                                            <label for="cphContenido_ddlVerificacionConectividad">Conectividad a Gilat</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkConectividadNodoTerminal" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConectividadNodoTerminalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConectividadNodoTerminalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConectividadNodoTerminalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConectividadNodoTerminalComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtConectividadNodoTerminal" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtConectividadNodoTerminal">Conec. Nodo Term. (ms)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkConectividadNodoDistrital" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConectividadNodoDistritalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConectividadNodoDistritalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConectividadNodoDistritalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConectividadNodoDistritalComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtConectividadNodoDistrital" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtConectividadNodoDistrital">Conec. Nodo Dist. (ms)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkConectividadNOC" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConectividadNOCComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConectividadNOCComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConectividadNOCComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConectividadNOCComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtConectividadNOC" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtConectividadNOC">Conec. NOC (ms)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">4. DATOS DEL ENCARGADO</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNombreCompletoEncargado" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNombreCompletoEncargadoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNombreCompletoEncargadoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNombreCompletoEncargadoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNombreCompletoEncargadoComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNombreCompletoEncargado" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtNombreCompletoEncargado">Nombres y Apellidos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDocumentoIdentidadEncargado" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDocumentoIdentidadEncargadoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDocumentoIdentidadEncargadoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDocumentoIdentidadEncargadoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDocumentoIdentidadEncargadoComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtDocumentoIdentidadEncargado" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtDocumentoIdentidadEncargado">DNI</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkCelularContactoEncargado" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCelularContactoEncargadoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCelularContactoEncargadoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCelularContactoEncargadoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCelularContactoEncargadoComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCelularContactoEncargado" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtCelularContactoEncargado">Celular Contacto</label>
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
                                                    <asp:checkbox id="chkEmailEncargado" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEmailEncargadoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEmailEncargadoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEmailEncargadoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEmailEncargadoComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtEmailEncargado" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtEmailEncargado">Email</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">6. Firmas</h4>
                            </div>
                            <div class="row">
                                <h5 class="color-primary" runat="server">6.1. Representante de la institución Beneficiaria</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNombreCompletoRepresentanteIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNombreCompletoRepresentanteIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNombreCompletoRepresentanteIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNombreCompletoRepresentanteIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNombreCompletoRepresentanteIIBBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNombreCompletoRepresentanteIIBB" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtNombreCompletoRepresentanteIIBB">Nombres y Apellidos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDocumentoIdentidadRepresentanteIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDocumentoIdentidadRepresentanteIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDocumentoIdentidadRepresentanteIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDocumentoIdentidadRepresentanteIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDocumentoIdentidadRepresentanteIIBBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtDocumentoIdentidadRepresentanteIIBB" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtDocumentoIdentidadRepresentanteIIBB">DNI</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkCelularContactoRepresentanteIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCelularContactoRepresentanteIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCelularContactoRepresentanteIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCelularContactoRepresentanteIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCelularContactoRepresentanteIIBBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCelularContactoRepresentanteIIBB" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtCelularContactoRepresentanteIIBB">Celular Contacto</label>
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
                                                    <asp:checkbox id="chkCargoRepresentanteIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCargoRepresentanteIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCargoRepresentanteIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCargoRepresentanteIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCargoRepresentanteIIBBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCargoRepresentanteIIBB" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtCargoRepresentanteIIBB">Cargo</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEmailRepresentanteIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEmailRepresentanteIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEmailRepresentanteIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEmailRepresentanteIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEmailRepresentanteIIBBComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtEmailRepresentanteIIBB" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtEmailRepresentanteIIBB">Email</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <%--<div class="row">
                                <h5 class="color-primary" runat="server">6.2. Representante del Operador</h5>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNombreCompletoOperador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNombreCompletoOperadorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNombreCompletoOperadorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNombreCompletoOperadorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNombreCompletoOperadorComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNombreCompletoOperador" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <label for="cphContenido_txtNombreCompletoOperador">Nombres y Apellidos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDocumentoIdentidadOperador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDocumentoIdentidadOperadorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDocumentoIdentidadOperadorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDocumentoIdentidadOperadorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDocumentoIdentidadOperadorComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtDocumentoIdentidadOperador" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtDocumentoIdentidadOperador">DNI</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkCargoOperador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCargoOperadorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCargoOperadorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCargoOperadorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCargoOperadorComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCargoOperador" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtCargoOperador">Cargo</label>
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
                                                    <asp:checkbox id="chkEmailOperador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEmailOperadorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEmailOperadorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEmailOperadorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEmailOperadorComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtEmailOperador" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <label for="cphContenido_txtEmailOperador">Email</label>
                                        </span>
                                    </div>
                                </div>
                            </div>--%>
                        </div>
                        <div class="tab-pane fade" id="tabConfiguracion">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkAltitud" runat="server" />
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
                                        <input type="hidden" id="hfAltitudComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAltitud" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtAltitud">Altitud (msnm)</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabPantallasConfiguracion">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionAccessPointEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionAccessPointEjemplo" runat="server" alt="Access Point (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionAccessPointEjemplo">Access Point (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionAccessPoint" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionAccessPointComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionAccessPointComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionAccessPointComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionAccessPointComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionAccessPoint" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionAccessPoint">Access Point</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionAccessPoint" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionRouterMikrotikEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionRouterMikrotikEjemplo" runat="server" alt="Router Mikrotik (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionRouterMikrotikEjemplo">Router Mikrotik (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionRouterMikrotik" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionRouterMikrotikComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionRouterMikrotikComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionRouterMikrotikComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionRouterMikrotikComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionRouterMikrotik" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionRouterMikrotik">Router Mikrotik</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionRouterMikrotik" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionSwitchDlink01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionSwitchDlink01Ejemplo" runat="server" alt="Switch Dlink 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionSwitchDlink01Ejemplo">Switch Dlink 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionSwitchDlink01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionSwitchDlink01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionSwitchDlink01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionSwitchDlink01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionSwitchDlink01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionSwitchDlink01" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionSwitchDlink01">Switch Dlink 01</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionSwitchDlink01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionSwitchDlink02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionSwitchDlink02Ejemplo" runat="server" alt="Switch Dlink 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionSwitchDlink02Ejemplo">Switch Dlink 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionSwitchDlink02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionSwitchDlink02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionSwitchDlink02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionSwitchDlink02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionSwitchDlink02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionSwitchDlink02" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionSwitchDlink02">Switch Dlink 02</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionSwitchDlink02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionUPSEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionUPSEjemplo" runat="server" alt="UPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionUPSEjemplo">UPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionUPS" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionUPSComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionUPSComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionUPSComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionUPSComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionUPS" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionUPS">UPS</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionUPS" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionAllInOne01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionAllInOne01Ejemplo" runat="server" alt="All In One 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionAllInOne01Ejemplo">All In One 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionAllInOne01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionAllInOne01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionAllInOne01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionAllInOne01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionAllInOne01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionAllInOne01" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionAllInOne01">All In One 01</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionAllInOne01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionAllInOne02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionAllInOne02Ejemplo" runat="server" alt="All In One 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionAllInOne02Ejemplo">All In One 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionAllInOne02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionAllInOne02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionAllInOne02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionAllInOne02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionAllInOne02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionAllInOne02" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionAllInOne02">All In One 02</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionAllInOne02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionImpresoraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionImpresoraEjemplo" runat="server" alt="Impresora (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionImpresoraEjemplo">Impresora (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionImpresora" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionImpresoraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionImpresoraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionImpresoraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionImpresoraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionImpresora" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionImpresora">Impresora</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionImpresora" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMedicionSPAT">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Medición del Sistema de Puesta a tierra</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionSistemaPuestaTierraMedida01ValorMedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionSistemaPuestaTierraMedida01ValorMedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionSistemaPuestaTierraMedida01ValorMedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionSistemaPuestaTierraMedida01ValorMedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionSistemaPuestaTierraMedida01ValorMedioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtMedicionSistemaPuestaTierraMedida01ValorMedio" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtMedicionSistemaPuestaTierraMedida01ValorMedio">Medida 1 Valor Medio</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionSistemaPuestaTierraMedida02ValorMedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionSistemaPuestaTierraMedida02ValorMedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionSistemaPuestaTierraMedida02ValorMedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionSistemaPuestaTierraMedida02ValorMedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionSistemaPuestaTierraMedida02ValorMedioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtMedicionSistemaPuestaTierraMedida02ValorMedio" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtMedicionSistemaPuestaTierraMedida02ValorMedio">Medida 2 Valor Medio</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionSistemaPuestaTierraMedida03ValorMedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionSistemaPuestaTierraMedida03ValorMedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionSistemaPuestaTierraMedida03ValorMedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionSistemaPuestaTierraMedida03ValorMedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionSistemaPuestaTierraMedida03ValorMedioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtMedicionSistemaPuestaTierraMedida03ValorMedio" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtMedicionSistemaPuestaTierraMedida03ValorMedio">Medida 3 Valor Medio</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Medición del Sistema de Puesta a tierra Pararrayos</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio">Medida 1 Valor Medio</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio">Medida 2 Valor Medio</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio" class="form-control" placeholder=" " runat="server" maxlength="20"></asp:textbox>
                                            <label for="cphContenido_txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio">Medida 3 Valor Medio</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMaterialIIBBCPE">
                            <div class="row">
                                <div class="col-xs-12 no-more-gridView">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipamientos" runat="server" />
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
                                        <input type="hidden" id="hfEquipamientosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:gridview id="gvEquipamientos" runat="server" cssclass=" table-bordered table-striped table-condensed table-hover" autogeneratecolumns="False" width="100%" datakeynames="Equipamiento_IdValor" OnRowDataBound="gvEquipamientos_RowDataBound">
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
                                            </asp:gridview>
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
                                                    <asp:checkbox id="chkMateriales" runat="server" />
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
                                        <input type="hidden" id="hfMaterialesComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:gridview id="gvMateriales" runat="server" cssclass=" table-bordered table-striped table-condensed table-hover" autogeneratecolumns="False" width="100%" datakeynames="Material_IdValor" OnRowDataBound="gvMateriales_RowDataBound">
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
                                            </asp:gridview>
                                            <label for="cphContenido_gvMateriales">Materiales</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabReporteFotograficoIIBBCPE">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaLocalidadEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaLocalidadEjemplo" runat="server" alt="Foto 01: Panorámica de la Localidad (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaLocalidadEjemplo">Foto 01: Panorámica de la Localidad (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPanoramicaLocalidad" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaLocalidadComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaLocalidadComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaLocalidadComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaLocalidadComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaLocalidad" class="">
                                            </div>
                                            <label for="divPanoramicaLocalidad">Foto 01: Panorámica de la Localidad</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPanoramicaLocalidad" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divFachadaInstitucionEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgFachadaInstitucionEjemplo" runat="server" alt="Foto 02: Fachada de la Institución (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divFachadaInstitucionEjemplo">Foto 02: Fachada de la Institución (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkFachadaInstitucion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spFachadaInstitucionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocFachadaInstitucionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtFachadaInstitucionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfFachadaInstitucionComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divFachadaInstitucion" class="">
                                            </div>
                                            <label for="divFachadaInstitucion">Foto 02: Fachada de la Institución</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfFachadaInstitucion" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divImpresoraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgImpresoraEjemplo" runat="server" alt="Foto 03.01: Impresora (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divImpresoraEjemplo">Foto 03.01: Impresora (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkImpresora" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spImpresoraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocImpresoraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtImpresoraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfImpresoraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divImpresora" class="">
                                            </div>
                                            <label for="divImpresora">Foto 03.01: Impresora</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfImpresora" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSwitchEjemplo" runat="server" alt="Foto 03.02: Switch (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSwitchEjemplo">Foto 03.02: Switch (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSwitchComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSwitch" class="">
                                            </div>
                                            <label for="divSwitch">Foto 03.02: Switch</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRouterEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgRouterEjemplo" runat="server" alt="Foto 03.03: Router (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRouterEjemplo">Foto 03.03: Router (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkRouter" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRouterComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRouterComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRouterComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRouterComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divRouter" class="">
                                            </div>
                                            <label for="divRouter">Foto 03.03: Router</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfRouter" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPCsEncendidasEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPCsEncendidasEjemplo" runat="server" alt="Foto 03.04: PCs Encendidas (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPCsEncendidasEjemplo">Foto 03.04: PCsEncendidas (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPCsEncendidas" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPCsEncendidasComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPCsEncendidasComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPCsEncendidasComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPCsEncendidasComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPCsEncendidas" class="">
                                            </div>
                                            <label for="divPCsEncendidas">Foto 03.04: PCsEncendidas</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPCsEncendidas" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divUPSEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgUPSEjemplo" runat="server" alt="Foto 03.05: UPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divUPSEjemplo">Foto 03.05: UPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkUPS" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spUPSComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocUPSComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtUPSComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfUPSComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divUPS" class="">
                                            </div>
                                            <label for="divUPS">Foto 03.05: UPS</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfUPS" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAccessPointEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAccessPointEjemplo" runat="server" alt="Foto 03.06: Access Point (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAccessPointEjemplo">Foto 03.06: Access Point (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkAccessPoint" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAccessPointComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAccessPointComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAccessPointComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAccessPointComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAccessPoint" class="">
                                            </div>
                                            <label for="divAccessPoint">Foto 03.06: Access Point</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfAccessPoint" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divODUCPEEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgODUCPEEjemplo" runat="server" alt="Foto 04.01: ODU-CPE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divODUCPEEjemplo">Foto 04.01: ODU-CPE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkODUCPE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spODUCPEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocODUCPEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtODUCPEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfODUCPEComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divODUCPE" class="">
                                            </div>
                                            <label for="divODUCPE">Foto 04.01: ODU-CPE</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfODUCPE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMastilEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgMastilEjemplo" runat="server" alt="Foto 04.02: Mástil (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMastilEjemplo">Foto 04.02: Mástil (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMastil" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMastilComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMastilComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMastilComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMastilComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divMastil" class="">
                                            </div>
                                            <label for="divMastil">Foto 04.02: Mástil</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfMastil" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaAntenaInstaladaMastilEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaAntenaInstaladaMastilEjemplo" runat="server" alt="Foto 04.03: Panorámica de Antena Instalada en Mástil (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaAntenaInstaladaMastilEjemplo">Foto 04.03: Panorámica de Antena Instalada en Mástil (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPanoramicaAntenaInstaladaMastil" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaAntenaInstaladaMastilComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaAntenaInstaladaMastilComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaAntenaInstaladaMastilComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaAntenaInstaladaMastilComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaAntenaInstaladaMastil" class="">
                                            </div>
                                            <label for="divPanoramicaAntenaInstaladaMastil">Foto 04.03: Panorámica de Antena Instalada en Mástil</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPanoramicaAntenaInstaladaMastil" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRecorridoSFTPCat5eEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgRecorridoSFTPCat5eEjemplo" runat="server" alt="Foto 04.04: Recorrido STFP Cat5e (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRecorridoSFTPCat5eEjemplo">Foto 04.04: Recorrido STFP Cat5e (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkRecorridoSFTPCat5e" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRecorridoSFTPCat5eComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRecorridoSFTPCat5eComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRecorridoSFTPCat5eComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRecorridoSFTPCat5eComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divRecorridoSFTPCat5e" class="">
                                            </div>
                                            <label for="divRecorridoSFTPCat5e">Foto 04.04: Recorrido STFP Cat5e</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfRecorridoSFTPCat5e" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divIngresoSFTPEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgIngresoSFTPEjemplo" runat="server" alt="Foto 04.05: Ingreso de SFTP (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divIngresoSFTPEjemplo">Foto 04.05: Ingreso de SFTP (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkIngresoSFTP" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spIngresoSFTPComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocIngresoSFTPComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtIngresoSFTPComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfIngresoSFTPComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divIngresoSFTP" class="">
                                            </div>
                                            <label for="divIngresoSFTP">Foto 04.05: Ingreso de SFTP</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfIngresoSFTP" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRecorridoSFTPCanaletaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgRecorridoSFTPCanaletaEjemplo" runat="server" alt="Foto 04.06: Recorrido de SFTP por Canaleta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRecorridoSFTPCanaletaEjemplo">Foto 04.06: Recorrido de SFTP por Canaleta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkRecorridoSFTPCanaleta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRecorridoSFTPCanaletaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRecorridoSFTPCanaletaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRecorridoSFTPCanaletaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRecorridoSFTPCanaletaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divRecorridoSFTPCanaleta" class="">
                                            </div>
                                            <label for="divRecorridoSFTPCanaleta">Foto 04.06: Recorrido de SFTP por Canaleta</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfRecorridoSFTPCanaleta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPOEEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPOEEjemplo" runat="server" alt="Foto 04.07: POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPOEEjemplo">Foto 04.07: POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPOE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPOEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPOEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPOEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPOEComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPOE" class="">
                                            </div>
                                            <label for="divPOE">Foto 04.07: POE</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPOE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCordPOERouterEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPatchCordPOERouterEjemplo" runat="server" alt="Foto 04.08: Patch cord POE / Router (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCordPOERouterEjemplo">Foto 04.08: Patch cord POE / Router (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPatchCordPOERouter" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCordPOERouterComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCordPOERouterComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCordPOERouterComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCordPOERouterComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPatchCordPOERouter" class="">
                                            </div>
                                            <label for="divPatchCordPOERouter">Foto 04.08: Patch cord POE / Router</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPatchCordPOERouter" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTableroGeneralSecundarioEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTableroGeneralSecundarioEjemplo" runat="server" alt="Foto 05.01: Tablero General / Secundario (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTableroGeneralSecundarioEjemplo">Foto 05.01: Tablero General / Secundario (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkTableroGeneralSecundario" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTableroGeneralSecundarioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTableroGeneralSecundarioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTableroGeneralSecundarioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTableroGeneralSecundarioComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTableroGeneralSecundario" class="">
                                            </div>
                                            <label for="divTableroGeneralSecundario">Foto 05.01: Tablero General / Secundario</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfTableroGeneralSecundario" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divInstalacionBreakerEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgInstalacionBreakerEjemplo" runat="server" alt="Foto 05.02: Instalación de Breaker (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divInstalacionBreakerEjemplo">Foto 05.02: Instalación de Breaker (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkInstalacionBreaker" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spInstalacionBreakerComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocInstalacionBreakerComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtInstalacionBreakerComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfInstalacionBreakerComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divInstalacionBreaker" class="">
                                            </div>
                                            <label for="divInstalacionBreaker">Foto 05.02: Instalación de Breaker</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfInstalacionBreaker" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCableConexionElectricaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCableConexionElectricaEjemplo" runat="server" alt="Foto 05.03: Cable Conexión Eléctrica (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCableConexionElectricaEjemplo">Foto 05.03: Cable Conexión Eléctrica (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkCableConexionElectrica" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCableConexionElectricaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCableConexionElectricaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCableConexionElectricaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCableConexionElectricaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCableConexionElectrica" class="">
                                            </div>
                                            <label for="divCableConexionElectrica">Foto 05.03: Cable Conexión Eléctrica</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfCableConexionElectrica" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTomasEnergiaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTomasEnergiaEjemplo" runat="server" alt="Foto 05.04: Tomas de Energía (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTomasEnergiaEjemplo">Foto 05.04: Tomas de Energía (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkTomasEnergia" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTomasEnergiaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTomasEnergiaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTomasEnergiaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTomasEnergiaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTomasEnergia" class="">
                                            </div>
                                            <label for="divTomasEnergia">Foto 05.04: Tomas de Energía</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfTomasEnergia" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divFotoInternaInstalacionBreakerEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgFotoInternaInstalacionBreakerEjemplo" runat="server" alt="Foto 05.05: Foto Interna de Instalación de Breaker (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divFotoInternaInstalacionBreakerEjemplo">Foto 05.05: Foto Interna de Instalación de Breaker (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkFotoInternaInstalacionBreaker" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spFotoInternaInstalacionBreakerComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocFotoInternaInstalacionBreakerComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtFotoInternaInstalacionBreakerComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfFotoInternaInstalacionBreakerComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divFotoInternaInstalacionBreaker" class="">
                                            </div>
                                            <label for="divFotoInternaInstalacionBreaker">Foto 05.05: Foto Interna de Instalación de Breaker</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfFotoInternaInstalacionBreaker" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divDNIDJRepresentanteAbonado01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgDNIDJRepresentanteAbonado01Ejemplo" runat="server" alt="Foto 06.01: DNI / DJ Representante / Abonado (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divDNIDJRepresentanteAbonado01Ejemplo">Foto 06.01: DNI / DJ Representante / Abonado (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDNIDJRepresentanteAbonado01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDNIDJRepresentanteAbonado01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDNIDJRepresentanteAbonado01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDNIDJRepresentanteAbonado01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDNIDJRepresentanteAbonado01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divDNIDJRepresentanteAbonado01" class="">
                                            </div>
                                            <label for="divDNIDJRepresentanteAbonado01">Foto 06.01: DNI / DJ Representante / Abonado</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfDNIDJRepresentanteAbonado01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divDNIDJRepresentanteAbonado02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgDNIDJRepresentanteAbonado02Ejemplo" runat="server" alt="Foto 06.02: DNI / DJ Representante / Abonado (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divDNIDJRepresentanteAbonado02Ejemplo">Foto 06.02: DNI / DJ Representante / Abonado (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkDNIDJRepresentanteAbonado02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spDNIDJRepresentanteAbonado02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocDNIDJRepresentanteAbonado02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtDNIDJRepresentanteAbonado02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfDNIDJRepresentanteAbonado02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divDNIDJRepresentanteAbonado02" class="">
                                            </div>
                                            <label for="divDNIDJRepresentanteAbonado02">Foto 06.02: DNI / DJ Representante / Abonado</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfDNIDJRepresentanteAbonado02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoSwitchEjemplo" runat="server" alt="Foto 07.01: Switch (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoSwitchEjemplo">Foto 07.01: Switch (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoSwitchComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoSwitch" class="">
                                            </div>
                                            <label for="divEquipoSwitch">Foto 07.01: Switch</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoRouterEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoRouterEjemplo" runat="server" alt="Foto 07.02: Router (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoRouterEjemplo">Foto 07.02: Router (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoRouter" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoRouterComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoRouterComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoRouterComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoRouterComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoRouter" class="">
                                            </div>
                                            <label for="divEquipoRouter">Foto 07.02: Router</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoRouter" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoRegletaEnergiaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoRegletaEnergiaEjemplo" runat="server" alt="Foto 07.03: Regleta de Energía (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoRegletaEnergiaEjemplo">Foto 07.03: Regleta de Energía (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoRegletaEnergia" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoRegletaEnergiaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoRegletaEnergiaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoRegletaEnergiaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoRegletaEnergiaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoRegletaEnergia" class="">
                                            </div>
                                            <label for="divEquipoRegletaEnergia">Foto 07.03: Regleta de Energía</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoRegletaEnergia" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoUPSEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoUPSEjemplo" runat="server" alt="Foto 07.04: UPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoUPSEjemplo">Foto 07.04: UPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoUPS" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoUPSComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoUPSComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoUPSComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoUPSComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoUPS" class="">
                                            </div>
                                            <label for="divEquipoUPS">Foto 07.04: UPS</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoUPS" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoComputadorasEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoComputadorasEjemplo" runat="server" alt="Foto 07.05: Computador(as) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoComputadorasEjemplo">Foto 07.05: Computador(as) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoComputadoras" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoComputadorasComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoComputadorasComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoComputadorasComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoComputadorasComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoComputadoras" class="">
                                            </div>
                                            <label for="divEquipoComputadoras">Foto 07.05: Computador(as)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoComputadoras" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoAccessPointEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoAccessPointEjemplo" runat="server" alt="Foto 07.06: Access Point (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoAccessPointEjemplo">Foto 07.06: Access Point (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoAccessPoint" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoAccessPointComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoAccessPointComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoAccessPointComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoAccessPointComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoAccessPoint" class="">
                                            </div>
                                            <label for="divEquipoAccessPoint">Foto 07.06: Access Point</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoAccessPoint" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoImpresoraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoImpresoraEjemplo" runat="server" alt="Foto 07.07: Impresora (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoImpresoraEjemplo">Foto 07.07: Impresora (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoImpresora" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoImpresoraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoImpresoraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoImpresoraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoImpresoraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoImpresora" class="">
                                            </div>
                                            <label for="divEquipoImpresora">Foto 07.07: Impresora</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoImpresora" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaSalaEquiposEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaSalaEquiposEjemplo" runat="server" alt="Foto 07.08: Panoramica de Sala de Equipos (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaSalaEquiposEjemplo">Foto 07.08: Panoramica de Sala de Equipos (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPanoramicaSalaEquipos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaSalaEquiposComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaSalaEquiposComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaSalaEquiposComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaSalaEquiposComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaSalaEquipos" class="">
                                            </div>
                                            <label for="divPanoramicaSalaEquipos">Foto 07.08: Panoramica de Sala de Equipos</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPanoramicaSalaEquipos" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoJACKRJ45Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEquipoJACKRJ45Ejemplo" runat="server" alt="Foto 07.09: JACK RJ45 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoJACKRJ45Ejemplo">Foto 07.09: JACK RJ45 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEquipoJACKRJ45" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoJACKRJ45Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoJACKRJ45Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoJACKRJ45Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoJACKRJ45Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEquipoJACKRJ45" class="">
                                            </div>
                                            <label for="divEquipoJACKRJ45">Foto 07.09: JACK RJ45</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEquipoJACKRJ45" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTInstalacionPozoTierraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTInstalacionPozoTierraEjemplo" runat="server" alt="Foto 08.01: Instalación del Pozo a Tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTInstalacionPozoTierraEjemplo">Foto 08.01: Instalación del Pozo a Tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTInstalacionPozoTierra" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTInstalacionPozoTierraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTInstalacionPozoTierraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTInstalacionPozoTierraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTInstalacionPozoTierraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTInstalacionPozoTierra" class="">
                                            </div>
                                            <label for="divPTInstalacionPozoTierra">Foto 08.01: Instalación del Pozo a Tierra</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTInstalacionPozoTierra" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTConexionesCajaRegistroEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTConexionesCajaRegistroEjemplo" runat="server" alt="Foto 08.02: Conexiones en la Caja de Registro (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTConexionesCajaRegistroEjemplo">Foto 08.02: Conexiones en la Caja de Registro (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTConexionesCajaRegistro" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTConexionesCajaRegistroComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTConexionesCajaRegistroComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTConexionesCajaRegistroComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTConexionesCajaRegistroComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTConexionesCajaRegistro" class="">
                                            </div>
                                            <label for="divPTConexionesCajaRegistro">Foto 08.02: Conexiones en la Caja de Registro</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTConexionesCajaRegistro" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTEscalaUtilizadaResultadoMedicion01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTEscalaUtilizadaResultadoMedicion01Ejemplo" runat="server" alt="Foto 08.03: Escala Utilizada y Resultado de Medición N° 1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTEscalaUtilizadaResultadoMedicion01Ejemplo">Foto 08.03: Escala Utilizada y Resultado de Medición N° 1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTEscalaUtilizadaResultadoMedicion01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTEscalaUtilizadaResultadoMedicion01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTEscalaUtilizadaResultadoMedicion01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTEscalaUtilizadaResultadoMedicion01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTEscalaUtilizadaResultadoMedicion01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTEscalaUtilizadaResultadoMedicion01" class="">
                                            </div>
                                            <label for="divPTEscalaUtilizadaResultadoMedicion01">Foto 08.03: Escala Utilizada y Resultado de Medición N° 1</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTEscalaUtilizadaResultadoMedicion01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTEscalaUtilizadaResultadoMedicion02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTEscalaUtilizadaResultadoMedicion02Ejemplo" runat="server" alt="Foto 08.04: Escala Utilizada y Resultado de Medición N° 2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTEscalaUtilizadaResultadoMedicion02Ejemplo">Foto 08.04: Escala Utilizada y Resultado de Medición N° 2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTEscalaUtilizadaResultadoMedicion02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTEscalaUtilizadaResultadoMedicion02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTEscalaUtilizadaResultadoMedicion02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTEscalaUtilizadaResultadoMedicion02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTEscalaUtilizadaResultadoMedicion02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTEscalaUtilizadaResultadoMedicion02" class="">
                                            </div>
                                            <label for="divPTEscalaUtilizadaResultadoMedicion02">Foto 08.04: Escala Utilizada y Resultado de Medición N° 2</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTEscalaUtilizadaResultadoMedicion02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTEscalaUtilizadaResultadoMedicion03Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTEscalaUtilizadaResultadoMedicion03Ejemplo" runat="server" alt="Foto 08.05: Escala Utilizada y Resultado de Medición N° 3 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTEscalaUtilizadaResultadoMedicion03Ejemplo">Foto 08.05: Escala Utilizada y Resultado de Medición N° 3 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTEscalaUtilizadaResultadoMedicion03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTEscalaUtilizadaResultadoMedicion03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTEscalaUtilizadaResultadoMedicion03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTEscalaUtilizadaResultadoMedicion03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTEscalaUtilizadaResultadoMedicion03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTEscalaUtilizadaResultadoMedicion03" class="">
                                            </div>
                                            <label for="divPTEscalaUtilizadaResultadoMedicion03">Foto 08.05: Escala Utilizada y Resultado de Medición N° 3</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTEscalaUtilizadaResultadoMedicion03" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTPInstalacionPozoTierra01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTPInstalacionPozoTierra01Ejemplo" runat="server" alt="Foto 09.01: Instalación del Pozo a Tierra N° 1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTPInstalacionPozoTierra01Ejemplo">Foto 09.01: Instalación del Pozo a Tierra N° 1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTPInstalacionPozoTierra01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTPInstalacionPozoTierra01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTPInstalacionPozoTierra01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTPInstalacionPozoTierra01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTPInstalacionPozoTierra01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTPInstalacionPozoTierra01" class="">
                                            </div>
                                            <label for="divPTPInstalacionPozoTierra01">Foto 09.01: Instalación del Pozo a Tierra N° 1</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTPInstalacionPozoTierra01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTPInstalacionPozoTierra02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTPInstalacionPozoTierra02Ejemplo" runat="server" alt="Foto 09.02: Instalación del Pozo a Tierra N° 2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTPInstalacionPozoTierra02Ejemplo">Foto 09.02: Instalación del Pozo a Tierra N° 2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTPInstalacionPozoTierra02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTPInstalacionPozoTierra02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTPInstalacionPozoTierra02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTPInstalacionPozoTierra02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTPInstalacionPozoTierra02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTPInstalacionPozoTierra02" class="">
                                            </div>
                                            <label for="divPTPInstalacionPozoTierra02">Foto 09.02: Instalación del Pozo a Tierra N° 2</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTPInstalacionPozoTierra02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTPEscalaUtilizadaResultadoMedicion01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTPEscalaUtilizadaResultadoMedicion01Ejemplo" runat="server" alt="Foto 09.03: Escala Utilizada y Resultado de Medición N° 1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTPEscalaUtilizadaResultadoMedicion01Ejemplo">Foto 09.03: Escala Utilizada y Resultado de Medición N° 1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTPEscalaUtilizadaResultadoMedicion01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTPEscalaUtilizadaResultadoMedicion01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTPEscalaUtilizadaResultadoMedicion01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTPEscalaUtilizadaResultadoMedicion01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTPEscalaUtilizadaResultadoMedicion01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTPEscalaUtilizadaResultadoMedicion01" class="">
                                            </div>
                                            <label for="divPTPEscalaUtilizadaResultadoMedicion01">Foto 09.03: Escala Utilizada y Resultado de Medición N° 1</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTPEscalaUtilizadaResultadoMedicion01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTPEscalaUtilizadaResultadoMedicion02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTPEscalaUtilizadaResultadoMedicion02Ejemplo" runat="server" alt="Foto 09.04: Escala Utilizada y Resultado de Medición N° 2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTPEscalaUtilizadaResultadoMedicion02Ejemplo">Foto 09.04: Escala Utilizada y Resultado de Medición N° 2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTPEscalaUtilizadaResultadoMedicion02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTPEscalaUtilizadaResultadoMedicion02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTPEscalaUtilizadaResultadoMedicion02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTPEscalaUtilizadaResultadoMedicion02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTPEscalaUtilizadaResultadoMedicion02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTPEscalaUtilizadaResultadoMedicion02" class="">
                                            </div>
                                            <label for="divPTPEscalaUtilizadaResultadoMedicion02">Foto 09.04: Escala Utilizada y Resultado de Medición N° 2</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTPEscalaUtilizadaResultadoMedicion02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPTPEscalaUtilizadaResultadoMedicion03Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPTPEscalaUtilizadaResultadoMedicion03Ejemplo" runat="server" alt="Foto 09.05: Escala Utilizada y Resultado de Medición N° 3 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPTPEscalaUtilizadaResultadoMedicion03Ejemplo">Foto 09.05: Escala Utilizada y Resultado de Medición N° 3 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPTPEscalaUtilizadaResultadoMedicion03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPTPEscalaUtilizadaResultadoMedicion03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPTPEscalaUtilizadaResultadoMedicion03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPTPEscalaUtilizadaResultadoMedicion03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPTPEscalaUtilizadaResultadoMedicion03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPTPEscalaUtilizadaResultadoMedicion03" class="">
                                            </div>
                                            <label for="divPTPEscalaUtilizadaResultadoMedicion03">Foto 09.05: Escala Utilizada y Resultado de Medición N° 3</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPTPEscalaUtilizadaResultadoMedicion03" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionHomeEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionHomeEjemplo" runat="server" alt="Foto 10.01: Pantalla de configuración (home) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionHomeEjemplo">Foto 10.01: Pantalla de configuración (home) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionHome" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionHomeComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionHomeComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionHomeComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionHomeComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionHome" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionHome">Foto 10.01: Pantalla de configuración (home)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionHome" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionSecurityEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionSecurityEjemplo" runat="server" alt="Foto 10.02: Pantalla de configuración (securiry) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionSecurityEjemplo">Foto 10.02: Pantalla de configuración (securiry) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionSecurity" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionSecurityComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionSecurityComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionSecurityComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionSecurityComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionSecurity" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionSecurity">Foto 10.02: Pantalla de configuración (securiry)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionSecurity" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionRadio01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionRadio01Ejemplo" runat="server" alt="Foto 10.03: Pantalla de configuración (radio parte 1) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionRadio01Ejemplo">Foto 10.03: Pantalla de configuración (radio parte 1) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionRadio01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionRadio01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionRadio01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionRadio01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionRadio01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionRadio01" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionRadio01">Foto 10.03: Pantalla de configuración (radio parte 1)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionRadio01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionRadio02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionRadio02Ejemplo" runat="server" alt="Foto 10.04: Pantalla de configuración (radio parte 2) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionRadio02Ejemplo">Foto 10.04: Pantalla de configuración (radio parte 2) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionRadio02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionRadio02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionRadio02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionRadio02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionRadio02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionRadio02" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionRadio02">Foto 10.04: Pantalla de configuración (radio parte 2)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionRadio02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionSistemaSystem01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionSistemaSystem01Ejemplo" runat="server" alt="Foto 10.05: Configuración del Sistema (System parte 1) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionSistemaSystem01Ejemplo">Foto 10.05: Configuración del Sistema (System parte 1) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkConfiguracionSistemaSystem01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionSistemaSystem01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionSistemaSystem01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionSistemaSystem01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionSistemaSystem01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionSistemaSystem01" class="">
                                            </div>
                                            <label for="divConfiguracionSistemaSystem01">Foto 10.05: Configuración del Sistema (System parte 1)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfConfiguracionSistemaSystem01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionSistemaSystem02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionSistemaSystem02Ejemplo" runat="server" alt="Foto 10.06: Configuración del Sistema (System parte 2) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionSistemaSystem02Ejemplo">Foto 10.06: Configuración del Sistema (System parte 2) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkConfiguracionSistemaSystem02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionSistemaSystem02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionSistemaSystem02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionSistemaSystem02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionSistemaSystem02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionSistemaSystem02" class="">
                                            </div>
                                            <label for="divConfiguracionSistemaSystem02">Foto 10.06: Configuración del Sistema (System parte 2)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfConfiguracionSistemaSystem02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionNetwork01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionNetwork01Ejemplo" runat="server" alt="Foto 10.07: Pantalla de Configuración (Network - parte 1) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionNetwork01Ejemplo">Foto 10.07: Pantalla de Configuración (Network - parte 1) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionNetwork01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionNetwork01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionNetwork01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionNetwork01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionNetwork01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionNetwork01" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionNetwork01">Foto 10.07: Pantalla de Configuración (Network - parte 1)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionNetwork01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionNetwork02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionNetwork02Ejemplo" runat="server" alt="Foto 10.08: Pantalla de Configuración (Network - parte 2) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionNetwork02Ejemplo">Foto 10.08: Pantalla de Configuración (Network - parte 2) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionNetwork02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionNetwork02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionNetwork02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionNetwork02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionNetwork02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionNetwork02" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionNetwork02">Foto 10.08: Pantalla de Configuración (Network - parte 2)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionNetwork02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionMonitorWirelessEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPantallaConfiguracionMonitorWirelessEjemplo" runat="server" alt="Foto 10.09: Pantalla de Configuración (Monitor Wireless) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPantallaConfiguracionMonitorWirelessEjemplo">Foto 10.09: Pantalla de Configuración (Monitor Wireless) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPantallaConfiguracionMonitorWireless" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPantallaConfiguracionMonitorWirelessComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPantallaConfiguracionMonitorWirelessComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPantallaConfiguracionMonitorWirelessComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPantallaConfiguracionMonitorWirelessComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPantallaConfiguracionMonitorWireless" class="">
                                            </div>
                                            <label for="divPantallaConfiguracionMonitorWireless">Foto 10.09: Pantalla de Configuración (Monitor Wireless)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfPantallaConfiguracionMonitorWireless" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConfiguracionSistemaToolsWirelessLinktestEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgConfiguracionSistemaToolsWirelessLinktestEjemplo" runat="server" alt="Foto 10.10: Configuración del Sistema (Tools Wireleess Linktest) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConfiguracionSistemaToolsWirelessLinktestEjemplo">Foto 10.10: Configuración del Sistema (Tools Wireleess Linktest) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkConfiguracionSistemaToolsWirelessLinktest" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConfiguracionSistemaToolsWirelessLinktestComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConfiguracionSistemaToolsWirelessLinktestComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConfiguracionSistemaToolsWirelessLinktestComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConfiguracionSistemaToolsWirelessLinktestComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divConfiguracionSistemaToolsWirelessLinktest" class="">
                                            </div>
                                            <label for="divConfiguracionSistemaToolsWirelessLinktest">Foto 10.10: Configuración del Sistema (Tools Wireleess Linktest)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfConfiguracionSistemaToolsWirelessLinktest" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMonitorMuestraConexionSitioWebEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgMonitorMuestraConexionSitioWebEjemplo" runat="server" alt="Foto 11.01: Monitor Donde se Muestre la Conexión al Sitio Web (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMonitorMuestraConexionSitioWebEjemplo">Foto 11.01: Monitor Donde se Muestre la Conexión al Sitio Web (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMonitorMuestraConexionSitioWeb" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMonitorMuestraConexionSitioWebComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMonitorMuestraConexionSitioWebComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMonitorMuestraConexionSitioWebComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMonitorMuestraConexionSitioWebComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divMonitorMuestraConexionSitioWeb" class="">
                                            </div>
                                            <label for="divMonitorMuestraConexionSitioWeb">Foto 11.01: Monitor Donde se Muestre la Conexión al Sitio Web</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfMonitorMuestraConexionSitioWeb" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMonitorMuestraConectividadNodoTerminalEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgMonitorMuestraConectividadNodoTerminalEjemplo" runat="server" alt="Foto 11.02: Monitor Donde se Muestre Conectividad al Nodo Terminal (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMonitorMuestraConectividadNodoTerminalEjemplo">Foto 11.02: Monitor Donde se Muestre Conectividad al Nodo Terminal (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMonitorMuestraConectividadNodoTerminal" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMonitorMuestraConectividadNodoTerminalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMonitorMuestraConectividadNodoTerminalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMonitorMuestraConectividadNodoTerminalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMonitorMuestraConectividadNodoTerminalComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divMonitorMuestraConectividadNodoTerminal" class="">
                                            </div>
                                            <label for="divMonitorMuestraConectividadNodoTerminal">Foto 11.02: Monitor Donde se Muestre Conectividad al Nodo Terminal</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfMonitorMuestraConectividadNodoTerminal" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divMonitorMuestraConectividadNodoDistritalCabeceraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgMonitorMuestraConectividadNodoDistritalCabeceraEjemplo" runat="server" alt="Foto 11.03: Monitor Donde se Muestre Conectividad al Nodo Distrital de Cabecera (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divMonitorMuestraConectividadNodoDistritalCabeceraEjemplo">Foto 11.03: Monitor Donde se Muestre Conectividad al Nodo Distrital de Cabecera (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMonitorMuestraConectividadNodoDistritalCabecera" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMonitorMuestraConectividadNodoDistritalCabeceraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMonitorMuestraConectividadNodoDistritalCabeceraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMonitorMuestraConectividadNodoDistritalCabeceraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMonitorMuestraConectividadNodoDistritalCabeceraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divMonitorMuestraConectividadNodoDistritalCabecera" class="">
                                            </div>
                                            <label for="divMonitorMuestraConectividadNodoDistritalCabecera">Foto 11.03: Monitor Donde se Muestre Conectividad al Nodo Distrital de Cabecera</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfMonitorMuestraConectividadNodoDistritalCabecera" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabSerieEquipos">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEPMP1000Force180Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEPMP1000Force180Ejemplo" runat="server" alt="EPMP 1000 Force 180 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEPMP1000Force180Ejemplo">EPMP 1000 Force 180 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEPMP1000Force180" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEPMP1000Force180Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEPMP1000Force180Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEPMP1000Force180Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEPMP1000Force180Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEPMP1000Force180" class="">
                                            </div>
                                            <label for="divEPMP1000Force180" id="lblEPMP1000Force180" runat="server">EPMP 1000 Force 180</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfEPMP1000Force180" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAccessPointEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerieAccessPointEjemplo" runat="server" alt="Foto 01: Access Point, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAccessPointEjemplo">Foto 01: Access Point, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSerieAccessPoint" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAccessPointComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAccessPointComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAccessPointComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAccessPointComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieAccessPoint" class="">
                                            </div>
                                            <label for="divSerieAccessPoint" id="lblSerieAccessPoint" runat="server">Foto 01: Access Point, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSerieAccessPoint" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerieSwitchEjemplo" runat="server" alt="Foto 02: Switch, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieSwitchEjemplo">Foto 02: Switch, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSerieSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieSwitchComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieSwitch" class="">
                                            </div>
                                            <label for="divSerieSwitch" id="lblSerieSwitch" runat="server">Foto 02: Switch, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSerieSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieRouterEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerieRouterEjemplo" runat="server" alt="Foto 03: Router, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieRouterEjemplo">Foto 03: Router, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSerieRouter" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieRouterComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieRouterComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieRouterComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieRouterComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieRouter" class="">
                                            </div>
                                            <label for="divSerieRouter" id="lblSerieRouter" runat="server">Foto 03: Router, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSerieRouter" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieImpresoraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerieImpresoraEjemplo" runat="server" alt="Foto 04: Impresora, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieImpresoraEjemplo">Foto 04: Impresora, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSerieImpresora" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieImpresoraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieImpresoraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieImpresoraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieImpresoraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieImpresora" class="">
                                            </div>
                                            <label for="divSerieImpresora" id="lblSerieImpresora" runat="server">Foto 04: Impresora, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSerieImpresora" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieUPSEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerieUPSEjemplo" runat="server" alt="Foto 05: UPS, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieUPSEjemplo">Foto 05: UPS, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSerieUPS" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieUPSComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieUPSComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieUPSComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieUPSComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerieUPS" class="">
                                            </div>
                                            <label for="divSerieUPS" id="lblSerieUPS" runat="server">Foto 05: UPS, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSerieUPS" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePC01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSeriePC01Ejemplo" runat="server" alt="Foto 06: PC-01, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePC01Ejemplo">Foto 06: PC-01, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSeriePC01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePC01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePC01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePC01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePC01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePC01" class="">
                                            </div>
                                            <label for="divSeriePC01" id="lblSeriePC01" runat="server">Foto 06: PC-01, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSeriePC01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePC02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSeriePC02Ejemplo" runat="server" alt="Foto 07: PC-02, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePC02Ejemplo">Foto 07: PC-02, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSeriePC02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePC02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePC02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePC02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePC02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePC02" class="">
                                            </div>
                                            <label for="divSeriePC02" id="lblSeriePC02" runat="server">Foto 07: PC-02, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSeriePC02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePC03Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSeriePC03Ejemplo" runat="server" alt="Foto 08: PC-03, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePC03Ejemplo">Foto 08: PC-03, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSeriePC03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePC03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePC03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePC03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePC03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePC03" class="">
                                            </div>
                                            <label for="divSeriePC03" id="lblSeriePC03" runat="server">Foto 08: PC-03, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSeriePC03" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePC04Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSeriePC04Ejemplo" runat="server" alt="Foto 09: PC-04, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePC04Ejemplo">Foto 09: PC-04, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSeriePC04" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePC04Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePC04Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePC04Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePC04Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePC04" class="">
                                            </div>
                                            <label for="divSeriePC04" id="lblSeriePC04" runat="server">Foto 09: PC-04, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSeriePC04" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePC05Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSeriePC05Ejemplo" runat="server" alt="Foto 10: PC-05, incluir la serie y cartel IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePC05Ejemplo">Foto 10: PC-05, incluir la serie y cartel IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkSeriePC05" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePC05Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePC05Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePC05Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePC05Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSeriePC05" class="">
                                            </div>
                                            <label for="divSeriePC05" id="lblSeriePC05" runat="server">Foto 10: PC-05, incluir la serie y cartel IIBB</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfSeriePC05" runat="server" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <asp:updatepanel id="upaGuardar" runat="server">
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
    </asp:updatepanel>
    <br />
    <br />
    <input type="hidden" id="hfIdPerfil" runat="server"/>
    <input type="hidden" id="hfRutaVirtualTemporal" runat="server"/>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoActaInstalacionAceptacionProtocoloIIBB.js"></script>
</asp:Content>
