<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoActaSeguridad.aspx.cs" Inherits="SNW.forms.DocumentoActaSeguridadAcceso" %>

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
                        <li><a href="#tabReporteFotografico" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;Reporte fotográfico</a></li>
                        <li><a href="#tabMateriales" data-toggle="tab"><span class="fa fa-list-ol"></span>&nbsp;Materiales</a></li>
                        <li><a href="#tabATP" data-toggle="tab"><span class="fa fa-list-ol"></span>&nbsp;ATP</a></li>
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
                        <div class="tab-pane fade" id="tabReporteFotografico">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">01.- REPORTE FOTOGRÁFICO</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divFachadaNodoEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgFachadaNodoEjemplo" runat="server" alt="Foto 1: Fachada del Nodo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divFachadaNodoEjemplo">Foto 1: Fachada del Nodo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkFachadaNodo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spFachadaNodoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocFachadaNodoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtFachadaNodoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfFachadaNodoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divFachadaNodo" class="">
                                            </div>
                                            <label for="divFachadaNodo">Foto 1: Fachada del Nodo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfFachadaNodo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSalaEquiposPanoramicaRackEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSalaEquiposPanoramicaRackEjemplo" runat="server" alt="Foto 2: Sala Equipos Panorámica Rack (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSalaEquiposPanoramicaRackEjemplo">Foto 2: Sala Equipos Panorámica Rack (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSalaEquiposPanoramicaRack" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSalaEquiposPanoramicaRackComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSalaEquiposPanoramicaRackComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSalaEquiposPanoramicaRackComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSalaEquiposPanoramicaRackComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSalaEquiposPanoramicaRack" class="">
                                            </div>
                                            <label for="divSalaEquiposPanoramicaRack">Foto 2: Sala Equipos Panorámica Rack</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSalaEquiposPanoramicaRack" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaInterior01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaInterior01Ejemplo" runat="server" alt="Foto 3: Panorámica Interior 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaInterior01Ejemplo">Foto 3: Panorámica Interior 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaInterior01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaInterior01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaInterior01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaInterior01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaInterior01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaInterior01" class="">
                                            </div>
                                            <label for="divPanoramicaInterior01">Foto 3: Panorámica Interior 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaInterior01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaInterior02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaInterior02Ejemplo" runat="server" alt="Foto 4: Panorámica Interior 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaInterior02Ejemplo">Foto 4: Panorámica Interior 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaInterior02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaInterior02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaInterior02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaInterior02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaInterior02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaInterior02" class="">
                                            </div>
                                            <label for="divPanoramicaInterior02">Foto 4: Panorámica Interior 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaInterior02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEquiposPatioEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPanoramicaEquiposPatioEjemplo" runat="server" alt="Foto 5: Panorámica de Equipos en Patio (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaEquiposPatioEjemplo">Foto 5: Panorámica de Equipos en Patio (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaEquiposPatio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaEquiposPatioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaEquiposPatioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaEquiposPatioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaEquiposPatioComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaEquiposPatio" class="">
                                            </div>
                                            <label for="divPanoramicaEquiposPatio">Foto 5: Panorámica de Equipos en Patio</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaEquiposPatio" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divBreakerAsignadoSeguridadEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgBreakerAsignadoSeguridadEjemplo" runat="server" alt="Foto 6: Breaker Asignado para Seguridad (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divBreakerAsignadoSeguridadEjemplo">Foto 6: Breaker Asignado para Seguridad (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkBreakerAsignadoSeguridad" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spBreakerAsignadoSeguridadComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocBreakerAsignadoSeguridadComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtBreakerAsignadoSeguridadComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfBreakerAsignadoSeguridadComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divBreakerAsignadoSeguridad" class="">
                                            </div>
                                            <label for="divBreakerAsignadoSeguridad">Foto 6: Breaker Asignado para Seguridad</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfBreakerAsignadoSeguridad" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCerraduraElectromagneticaExterna01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCerraduraElectromagneticaExterna01Ejemplo" runat="server" alt="Foto 7.01: Cerradura Electromagnética Externa (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCerraduraElectromagneticaExterna01Ejemplo">Foto 7.01: Cerradura Electromagnética Externa (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCerraduraElectromagneticaExterna01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCerraduraElectromagneticaExterna01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCerraduraElectromagneticaExterna01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCerraduraElectromagneticaExterna01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCerraduraElectromagneticaExterna01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCerraduraElectromagneticaExterna01" class="">
                                            </div>
                                            <label for="divCerraduraElectromagneticaExterna01">Foto 7.01: Cerradura Electromagnética Externa</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCerraduraElectromagneticaExterna01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCerraduraElectromagneticaExterna02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCerraduraElectromagneticaExterna02Ejemplo" runat="server" alt="Foto 7.02: Cerradura Electromagnética Externa (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCerraduraElectromagneticaExterna02Ejemplo">Foto 7.02: Cerradura Electromagnética Externa (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCerraduraElectromagneticaExterna02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCerraduraElectromagneticaExterna02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCerraduraElectromagneticaExterna02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCerraduraElectromagneticaExterna02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCerraduraElectromagneticaExterna02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCerraduraElectromagneticaExterna02" class="">
                                            </div>
                                            <label for="divCerraduraElectromagneticaExterna02">Foto 7.02: Cerradura Electromagnética Externa</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCerraduraElectromagneticaExterna02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoExterno01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMagneticoExterno01Ejemplo" runat="server" alt="Foto 8.01: Sensor Magnético Externo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMagneticoExterno01Ejemplo">Foto 8.01: Sensor Magnético Externo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMagneticoExterno01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMagneticoExterno01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMagneticoExterno01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMagneticoExterno01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMagneticoExterno01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoExterno01" class="">
                                            </div>
                                            <label for="divSensorMagneticoExterno01">Foto 8.01: Sensor Magnético Externo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMagneticoExterno01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoExterno02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMagneticoExterno02Ejemplo" runat="server" alt="Foto 8.02: Sensor Magnético Externo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMagneticoExterno02Ejemplo">Foto 8.02: Sensor Magnético Externo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMagneticoExterno02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMagneticoExterno02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMagneticoExterno02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMagneticoExterno02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMagneticoExterno02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoExterno02" class="">
                                            </div>
                                            <label for="divSensorMagneticoExterno02">Foto 8.02: Sensor Magnético Externo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMagneticoExterno02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCerraduraElectricaExternaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCerraduraElectricaExternaEjemplo" runat="server" alt="Foto 9: Cerradura Eléctrica Externa (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCerraduraElectricaExternaEjemplo">Foto 9: Cerradura Eléctrica Externa (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCerraduraElectricaExterna" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCerraduraElectricaExternaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCerraduraElectricaExternaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCerraduraElectricaExternaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCerraduraElectricaExternaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCerraduraElectricaExterna" class="">
                                            </div>
                                            <label for="divCerraduraElectricaExterna">Foto 9: Cerradura Eléctrica Externa</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCerraduraElectricaExterna" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMovimiento90Externo01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMovimiento90Externo01Ejemplo" runat="server" alt="Foto 10: Sensor Movimiento 90° Externo N°1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMovimiento90Externo01Ejemplo">Foto 10: Sensor Movimiento 90° Externo N°1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMovimiento90Externo01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMovimiento90Externo01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMovimiento90Externo01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMovimiento90Externo01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMovimiento90Externo01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMovimiento90Externo01" class="">
                                            </div>
                                            <label for="divSensorMovimiento90Externo01">Foto 10: Sensor Movimiento 90° Externo N°1</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMovimiento90Externo01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMovimiento90Externo02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMovimiento90Externo02Ejemplo" runat="server" alt="Foto 11: Sensor Movimiento 90° Externo N°2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMovimiento90Externo02Ejemplo">Foto 11: Sensor Movimiento 90° Externo N°2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMovimiento90Externo02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMovimiento90Externo02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMovimiento90Externo02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMovimiento90Externo02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMovimiento90Externo02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMovimiento90Externo02" class="">
                                            </div>
                                            <label for="divSensorMovimiento90Externo02">Foto 11: Sensor Movimiento 90° Externo N°2</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMovimiento90Externo02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSirenaEstroboscopicaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSirenaEstroboscopicaEjemplo" runat="server" alt="Foto 12: Sirena Estroboscópica (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSirenaEstroboscopicaEjemplo">Foto 12: Sirena Estroboscópica (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSirenaEstroboscopica" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSirenaEstroboscopicaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSirenaEstroboscopicaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSirenaEstroboscopicaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSirenaEstroboscopicaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSirenaEstroboscopica" class="">
                                            </div>
                                            <label for="divSirenaEstroboscopica">Foto 12: Sirena Estroboscópica</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSirenaEstroboscopica" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divLectorBiometricoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgLectorBiometricoEjemplo" runat="server" alt="Foto 13: Lector Biométrico (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divLectorBiometricoEjemplo">Foto 13: Lector Biométrico (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkLectorBiometrico" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spLectorBiometricoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocLectorBiometricoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtLectorBiometricoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfLectorBiometricoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divLectorBiometrico" class="">
                                            </div>
                                            <label for="divLectorBiometrico">Foto 13: Lector Biométrico</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfLectorBiometrico" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divLectorTarjetaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgLectorTarjetaEjemplo" runat="server" alt="Foto 14: Lector Tarjeta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divLectorTarjetaEjemplo">Foto 14: Lector Tarjeta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkLectorTarjeta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spLectorTarjetaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocLectorTarjetaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtLectorTarjetaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfLectorTarjetaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divLectorTarjeta" class="">
                                            </div>
                                            <label for="divLectorTarjeta">Foto 14: Lector Tarjeta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfLectorTarjeta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCamaraExteriorPTZEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCamaraExteriorPTZEjemplo" runat="server" alt="Foto 15: Cámara Exterior PTZ (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCamaraExteriorPTZEjemplo">Foto 15: Cámara Exterior PTZ (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCamaraExteriorPTZ" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCamaraExteriorPTZComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCamaraExteriorPTZComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCamaraExteriorPTZComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCamaraExteriorPTZComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCamaraExteriorPTZ" class="">
                                            </div>
                                            <label for="divCamaraExteriorPTZ">Foto 15: Cámara Exterior PTZ</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCamaraExteriorPTZ" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divExtintorExteriorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgExtintorExteriorEjemplo" runat="server" alt="Foto 16: Extintor Exterior (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divExtintorExteriorEjemplo">Foto 16: Extintor Exterior (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkExtintorExterior" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spExtintorExteriorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocExtintorExteriorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtExtintorExteriorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfExtintorExteriorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divExtintorExterior" class="">
                                            </div>
                                            <label for="divExtintorExterior">Foto 16: Extintor Exterior</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfExtintorExterior" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoInterno01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMagneticoInterno01Ejemplo" runat="server" alt="Foto 17.01: Sensor Magnético Interno (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMagneticoInterno01Ejemplo">Foto 17.01: Sensor Magnético Interno (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMagneticoInterno01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMagneticoInterno01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMagneticoInterno01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMagneticoInterno01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMagneticoInterno01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoInterno01" class="">
                                            </div>
                                            <label for="divSensorMagneticoInterno01">Foto 17.01: Sensor Magnético Interno</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMagneticoInterno01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoInterno02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMagneticoInterno02Ejemplo" runat="server" alt="Foto 17.02: Sensor Magnético Interno (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMagneticoInterno02Ejemplo">Foto 17.02: Sensor Magnético Interno (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMagneticoInterno02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMagneticoInterno02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMagneticoInterno02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMagneticoInterno02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMagneticoInterno02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMagneticoInterno02" class="">
                                            </div>
                                            <label for="divSensorMagneticoInterno02">Foto 17.02: Sensor Magnético Interno</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMagneticoInterno02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorOcupacionalEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorOcupacionalEjemplo" runat="server" alt="Foto 18: Sensor Ocupacional (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorOcupacionalEjemplo">Foto 18: Sensor Ocupacional (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorOcupacional" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorOcupacionalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorOcupacionalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorOcupacionalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorOcupacionalComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorOcupacional" class="">
                                            </div>
                                            <label for="divSensorOcupacional">Foto 18: Sensor Ocupacional</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorOcupacional" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorHumoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorHumoEjemplo" runat="server" alt="Foto 19: Sensor de Humo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorHumoEjemplo">Foto 19: Sensor de Humo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorHumo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorHumoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorHumoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorHumoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorHumoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorHumo" class="">
                                            </div>
                                            <label for="divSensorHumo">Foto 19: Sensor de Humo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorHumo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorMovimiento360Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorMovimiento360Ejemplo" runat="server" alt="Foto 20: Sensor Movimiento 360 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorMovimiento360Ejemplo">Foto 20: Sensor Movimiento 360 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorMovimiento360" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorMovimiento360Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorMovimiento360Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorMovimiento360Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorMovimiento360Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorMovimiento360" class="">
                                            </div>
                                            <label for="divSensorMovimiento360">Foto 20: Sensor Movimiento 360</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorMovimiento360" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSensorInundacionEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSensorInundacionEjemplo" runat="server" alt="Foto 21: Sensor de Inundación (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSensorInundacionEjemplo">Foto 21: Sensor de Inundación (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSensorInundacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSensorInundacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSensorInundacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSensorInundacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSensorInundacionComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSensorInundacion" class="">
                                            </div>
                                            <label for="divSensorInundacion">Foto 21: Sensor de Inundación</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSensorInundacion" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCamaraPTZInteriorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCamaraPTZInteriorEjemplo" runat="server" alt="Foto 22: Cámara PTZ Interior (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCamaraPTZInteriorEjemplo">Foto 22: Cámara PTZ Interior (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCamaraPTZInterior" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCamaraPTZInteriorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCamaraPTZInteriorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCamaraPTZInteriorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCamaraPTZInteriorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCamaraPTZInterior" class="">
                                            </div>
                                            <label for="divCamaraPTZInterior">Foto 22: Cámara PTZ Interior</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCamaraPTZInterior" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divExtintorInteriorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgExtintorInteriorEjemplo" runat="server" alt="Foto 23: Extintor Interior (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divExtintorInteriorEjemplo">Foto 23: Extintor Interior (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkExtintorInterior" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spExtintorInteriorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocExtintorInteriorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtExtintorInteriorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfExtintorInteriorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divExtintorInterior" class="">
                                            </div>
                                            <label for="divExtintorInterior">Foto 23: Extintor Interior</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfExtintorInterior" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divReleEquipoInternoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgReleEquipoInternoEjemplo" runat="server" alt="Foto 24: Rele (Equipo Interno) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divReleEquipoInternoEjemplo">Foto 24: Rele (Equipo Interno) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkReleEquipoInterno" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spReleEquipoInternoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocReleEquipoInternoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtReleEquipoInternoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfReleEquipoInternoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divReleEquipoInterno" class="">
                                            </div>
                                            <label for="divReleEquipoInterno">Foto 24: Rele (Equipo Interno)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfReleEquipoInterno" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divControladorNVRSwitchPOEEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgControladorNVRSwitchPOEEjemplo" runat="server" alt="Foto 25: Controlador, NVR y Switch POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divControladorNVRSwitchPOEEjemplo">Foto 25: Controlador, NVR y Switch POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkControladorNVRSwitchPOE" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spControladorNVRSwitchPOEComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocControladorNVRSwitchPOEComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtControladorNVRSwitchPOEComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfControladorNVRSwitchPOEComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divControladorNVRSwitchPOE" class="">
                                            </div>
                                            <label for="divControladorNVRSwitchPOE">Foto 25: Controlador, NVR y Switch POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfControladorNVRSwitchPOE" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">02.- ATERRAMIENTO</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoControladorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoControladorEjemplo" runat="server" alt="Foto 26: Aterramiento Controlador (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoControladorEjemplo">Foto 26: Aterramiento Controlador (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoControlador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoControladorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoControladorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoControladorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoControladorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoControlador" class="">
                                            </div>
                                            <label for="divAterramientoControlador">Foto 26: Aterramiento Controlador</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoControlador" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoNVRPOE01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoNVRPOE01Ejemplo" runat="server" alt="Foto 27.01: Aterramiento NVR y POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoNVRPOE01Ejemplo">Foto 27.01: Aterramiento NVR y POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoNVRPOE01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoNVRPOE01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoNVRPOE01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoNVRPOE01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoNVRPOE01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoNVRPOE01" class="">
                                            </div>
                                            <label for="divAterramientoNVRPOE01">Foto 27.01: Aterramiento NVR y POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoNVRPOE01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoNVRPOE02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoNVRPOE02Ejemplo" runat="server" alt="Foto 27.02: Aterramiento NVR y POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoNVRPOE02Ejemplo">Foto 27.02: Aterramiento NVR y POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoNVRPOE02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoNVRPOE02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoNVRPOE02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoNVRPOE02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoNVRPOE02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoNVRPOE02" class="">
                                            </div>
                                            <label for="divAterramientoNVRPOE02">Foto 27.02: Aterramiento NVR y POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoNVRPOE02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoBarraEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgAterramientoBarraEjemplo" runat="server" alt="Foto 28: Aterramiento a Barra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoBarraEjemplo">Foto 28: Aterramiento a Barra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoBarra" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoBarraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoBarraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoBarraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoBarraComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divAterramientoBarra" class="">
                                            </div>
                                            <label for="divAterramientoBarra">Foto 28: Aterramiento a Barra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoBarra" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">03.- SERIE DE EQUIPOS</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSensorMovimiento9001Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerialNumberSensorMovimiento9001Ejemplo" runat="server" alt="Foto 29: Serial Number Sensor Movimiento 90° N° 1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerialNumberSensorMovimiento9001Ejemplo">Foto 29: Serial Number Sensor Movimiento 90° N° 1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerialNumberSensorMovimiento9001" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerialNumberSensorMovimiento9001Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerialNumberSensorMovimiento9001Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerialNumberSensorMovimiento9001Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerialNumberSensorMovimiento9001Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSensorMovimiento9001" class="">
                                            </div>
                                            <label for="divSerialNumberSensorMovimiento9001" id="lblSerialNumberSensorMovimiento9001" runat="server">Foto 29: S/N Sensor Movimiento 90° N° 1</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerialNumberSensorMovimiento9001" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSensorMovimiento9002Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerialNumberSensorMovimiento9002Ejemplo" runat="server" alt="Foto 30: Serial Number Sensor Movimiento 90° N° 2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerialNumberSensorMovimiento9002Ejemplo">Foto 30: Serial Number Sensor Movimiento 90° N° 2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerialNumberSensorMovimiento9002" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerialNumberSensorMovimiento9002Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerialNumberSensorMovimiento9002Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerialNumberSensorMovimiento9002Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerialNumberSensorMovimiento9002Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSensorMovimiento9002" class="">
                                            </div>
                                            <label for="divSerialNumberSensorMovimiento9002" id="lblSerialNumberSensorMovimiento9002" runat="server">Foto 30: S/N Sensor Movimiento 90° N° 2</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerialNumberSensorMovimiento9002" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSwitchPOENVR01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerialNumberSwitchPOENVR01Ejemplo" runat="server" alt="Foto 31.01: Serial Number Switch POE y NVR (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerialNumberSwitchPOENVR01Ejemplo">Foto 31.01: Serial Number Switch POE y NVR (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerialNumberSwitchPOENVR01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerialNumberSwitchPOENVR01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerialNumberSwitchPOENVR01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerialNumberSwitchPOENVR01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerialNumberSwitchPOENVR01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSwitchPOENVR01" class="">
                                            </div>
                                            <label for="divSerialNumberSwitchPOENVR01" id="lblSerialNumberSwitchPOENVR01" runat="server">Foto 31.01: Serial Number Switch POE y NVR</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerialNumberSwitchPOENVR01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSwitchPOENVR02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerialNumberSwitchPOENVR02Ejemplo" runat="server" alt="Foto 31.02: Serial Number Switch POE y NVR (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerialNumberSwitchPOENVR02Ejemplo">Foto 31.02: Serial Number Switch POE y NVR (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerialNumberSwitchPOENVR02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerialNumberSwitchPOENVR02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerialNumberSwitchPOENVR02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerialNumberSwitchPOENVR02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerialNumberSwitchPOENVR02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerialNumberSwitchPOENVR02" class="">
                                            </div>
                                            <label for="divSerialNumberSwitchPOENVR02" id="lblSerialNumberSwitchPOENVR02" runat="server">Foto 31.02: Serial Number Switch POE y NVR</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerialNumberSwitchPOENVR02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerialNumberControladorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgSerialNumberControladorEjemplo" runat="server" alt="Foto 32: Serial Number Controlador (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerialNumberControladorEjemplo">Foto 32: Serial Number Controlador (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerialNumberControlador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerialNumberControladorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerialNumberControladorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerialNumberControladorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerialNumberControladorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divSerialNumberControlador" class="">
                                            </div>
                                            <label for="divSerialNumberControlador" id="lblSerialNumberControlador" runat="server">Foto 32: Serial Number Controlador</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerialNumberControlador" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">04.- ETIQUETADO</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoEquiposControladorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEtiquetadoEquiposControladorEjemplo" runat="server" alt="Foto 33: Etiquetado de Equipos en Controlador (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoEquiposControladorEjemplo">Foto 33: Etiquetado de Equipos en Controlador (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoEquiposControlador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoEquiposControladorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoEquiposControladorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoEquiposControladorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoEquiposControladorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoEquiposControlador" class="">
                                            </div>
                                            <label for="divEtiquetadoEquiposControlador">Foto 33: Etiquetado de Equipos en Controlador</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoEquiposControlador" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoEquiposNVREjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgEtiquetadoEquiposNVREjemplo" runat="server" alt="Foto 34: Etiquetado de Equipos en NVR (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoEquiposNVREjemplo">Foto 34: Etiquetado de Equipos en NVR (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoEquiposNVR" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoEquiposNVRComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoEquiposNVRComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoEquiposNVRComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoEquiposNVRComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoEquiposNVR" class="">
                                            </div>
                                            <label for="divEtiquetadoEquiposNVR">Foto 34: Etiquetado de Equipos en NVR</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoEquiposNVR" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">05.- CHECKLIST</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divChecklistEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgChecklistEjemplo" runat="server" alt="Foto: Checklist (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divChecklistEjemplo">Foto: Checklist (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkChecklist" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spChecklistComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocChecklistComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtChecklistComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfChecklistComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divChecklist" class="">
                                            </div>
                                            <label for="divChecklist">Foto: Checklist</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfChecklist" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">06.- CAPTURAS DE PANTALLA</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCamaraExteriorModoNormalPosicion01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCamaraExteriorModoNormalPosicion01Ejemplo" runat="server" alt="Foto 35: Cámara Exterior Modo Normal Posición 1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCamaraExteriorModoNormalPosicion01Ejemplo">Foto 35: Cámara Exterior Modo Normal Posición 1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCamaraExteriorModoNormalPosicion01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCamaraExteriorModoNormalPosicion01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCamaraExteriorModoNormalPosicion01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCamaraExteriorModoNormalPosicion01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCamaraExteriorModoNormalPosicion01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCamaraExteriorModoNormalPosicion01" class="">
                                            </div>
                                            <label for="divCamaraExteriorModoNormalPosicion01">Foto 35: Cámara Exterior Modo Normal Posición 1</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCamaraExteriorModoNormalPosicion01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCamaraExteriorModoNormalPosicion02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCamaraExteriorModoNormalPosicion02Ejemplo" runat="server" alt="Foto 36: Cámara Exterior Modo Normal Posición 2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCamaraExteriorModoNormalPosicion02Ejemplo">Foto 36: Cámara Exterior Modo Normal Posición 2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCamaraExteriorModoNormalPosicion02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCamaraExteriorModoNormalPosicion02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCamaraExteriorModoNormalPosicion02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCamaraExteriorModoNormalPosicion02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCamaraExteriorModoNormalPosicion02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCamaraExteriorModoNormalPosicion02" class="">
                                            </div>
                                            <label for="divCamaraExteriorModoNormalPosicion02">Foto 36: Cámara Exterior Modo Normal Posición 2</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCamaraExteriorModoNormalPosicion02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCamaraInteriorModoNormalEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCamaraInteriorModoNormalEjemplo" runat="server" alt="Foto 37: Cámara Interior Modo Normal (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCamaraInteriorModoNormalEjemplo">Foto 37: Cámara Interior Modo Normal (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCamaraInteriorModoNormal" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCamaraInteriorModoNormalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCamaraInteriorModoNormalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCamaraInteriorModoNormalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCamaraInteriorModoNormalComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCamaraInteriorModoNormal" class="">
                                            </div>
                                            <label for="divCamaraInteriorModoNormal">Foto 37: Cámara Interior Modo Normal</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCamaraInteriorModoNormal" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCamaraInteriorModoInfrarojoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgCamaraInteriorModoInfrarojoEjemplo" runat="server" alt="Foto 38: Cámara Interior Modo Infrarojo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCamaraInteriorModoInfrarojoEjemplo">Foto 38: Cámara Interior Modo Infrarojo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCamaraInteriorModoInfrarojo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCamaraInteriorModoInfrarojoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCamaraInteriorModoInfrarojoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCamaraInteriorModoInfrarojoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCamaraInteriorModoInfrarojoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCamaraInteriorModoInfrarojo" class="">
                                            </div>
                                            <label for="divCamaraInteriorModoInfrarojo">Foto 38: Cámara Interior Modo Infrarojo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCamaraInteriorModoInfrarojo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">07.- CAPTURAS DE PANTALLA TECHNICIAN GUI</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaPuertaPrincipalAbiertaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaPuertaPrincipalAbiertaEjemplo" runat="server" alt="Foto 39: Technician Program Alarma Puerta Principal Abierta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaPuertaPrincipalAbiertaEjemplo">Foto 39: Technician Program Alarma Puerta Principal Abierta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaPuertaPrincipalAbierta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaPuertaPrincipalAbierta" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaPuertaPrincipalAbierta">Foto 39: Technician Program Alarma Puerta Principal Abierta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaPuertaPrincipalAbierta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaPuertaSalaEquiposAbiertaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaPuertaSalaEquiposAbiertaEjemplo" runat="server" alt="Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaPuertaSalaEquiposAbiertaEjemplo">Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaPuertaSalaEquiposAbierta" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaPuertaSalaEquiposAbierta">Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaCamaraInternaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaCamaraInternaEjemplo" runat="server" alt="Foto 41: Technician Program Alarma de Cámara Interna (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaCamaraInternaEjemplo">Foto 41: Technician Program Alarma de Cámara Interna (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaCamaraInterna" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaCamaraInternaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaCamaraInternaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaCamaraInternaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaCamaraInternaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaCamaraInterna" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaCamaraInterna">Foto 41: Technician Program Alarma de Cámara Interna</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaCamaraInterna" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaCamaraExternaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaCamaraExternaEjemplo" runat="server" alt="Foto 42: Technician Program Alarma de Cámara Externa (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaCamaraExternaEjemplo">Foto 42: Technician Program Alarma de Cámara Externa (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaCamaraExterna" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaCamaraExternaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaCamaraExternaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaCamaraExternaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaCamaraExternaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaCamaraExterna" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaCamaraExterna">Foto 42: Technician Program Alarma de Cámara Externa</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaCamaraExterna" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaSensorAniegoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaSensorAniegoEjemplo" runat="server" alt="Foto 43: Technician Program Alarma de Sensor de Aniego (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaSensorAniegoEjemplo">Foto 43: Technician Program Alarma de Sensor de Aniego (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaSensorAniego" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaSensorAniegoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaSensorAniegoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaSensorAniegoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaSensorAniegoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaSensorAniego" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaSensorAniego">Foto 43: Technician Program Alarma de Sensor de Aniego</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaSensorAniego" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaSensorHumoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaSensorHumoEjemplo" runat="server" alt="Foto 44: Technician Program Alarma de Sensor de Humo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaSensorHumoEjemplo">Foto 44: Technician Program Alarma de Sensor de Humo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaSensorHumo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaSensorHumoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaSensorHumoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaSensorHumoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaSensorHumoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaSensorHumo" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaSensorHumo">Foto 44: Technician Program Alarma de Sensor de Humo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaSensorHumo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaTamperSensor9001Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaTamperSensor9001Ejemplo" runat="server" alt="Foto 45: Technician Program Alarma Tamper Sensor de 90°-1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaTamperSensor9001Ejemplo">Foto 45: Technician Program Alarma Tamper Sensor de 90°-1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaTamperSensor9001" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaTamperSensor9001Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaTamperSensor9001Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaTamperSensor9001Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaTamperSensor9001Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaTamperSensor9001" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaTamperSensor9001">Foto 45: Technician Program Alarma Tamper Sensor de 90°-1</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaTamperSensor9001" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMovimientoSensor9001Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaMovimientoSensor9001Ejemplo" runat="server" alt="Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMovimientoSensor9001Ejemplo">Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaMovimientoSensor9001" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaMovimientoSensor9001Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaMovimientoSensor9001Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaMovimientoSensor9001Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaMovimientoSensor9001Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMovimientoSensor9001" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMovimientoSensor9001">Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaMovimientoSensor9001" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMaskingSensor9001Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaMaskingSensor9001Ejemplo" runat="server" alt="Foto 47: Technician Program Alarma Masking Sensor de 90°-1 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMaskingSensor9001Ejemplo">Foto 47: Technician Program Alarma Masking Sensor de 90°-1 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaMaskingSensor9001" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaMaskingSensor9001Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaMaskingSensor9001Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaMaskingSensor9001Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaMaskingSensor9001Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMaskingSensor9001" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMaskingSensor9001">Foto 47: Technician Program Alarma Masking Sensor de 90°-1</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaMaskingSensor9001" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaTamperSensor9002Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaTamperSensor9002Ejemplo" runat="server" alt="Foto 48: Technician Program Alarma Tamper Sensor de 90°-2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaTamperSensor9002Ejemplo">Foto 48: Technician Program Alarma Tamper Sensor de 90°-2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaTamperSensor9002" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaTamperSensor9002Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaTamperSensor9002Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaTamperSensor9002Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaTamperSensor9002Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaTamperSensor9002" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaTamperSensor9002">Foto 48: Technician Program Alarma Tamper Sensor de 90°-2</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaTamperSensor9002" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMovimientoSensor9002Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaMovimientoSensor9002Ejemplo" runat="server" alt="Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMovimientoSensor9002Ejemplo">Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaMovimientoSensor9002" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaMovimientoSensor9002Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaMovimientoSensor9002Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaMovimientoSensor9002Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaMovimientoSensor9002Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMovimientoSensor9002" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMovimientoSensor9002">Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaMovimientoSensor9002" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMaskingSensor9002Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaMaskingSensor9002Ejemplo" runat="server" alt="Foto 50: Technician Program Alarma Masking Sensor de 90°-2 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMaskingSensor9002Ejemplo">Foto 50: Technician Program Alarma Masking Sensor de 90°-2 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaMaskingSensor9002" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaMaskingSensor9002Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaMaskingSensor9002Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaMaskingSensor9002Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaMaskingSensor9002Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMaskingSensor9002" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMaskingSensor9002">Foto 50: Technician Program Alarma Masking Sensor de 90°-2</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaMaskingSensor9002" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaTamperSensor360Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaTamperSensor360Ejemplo" runat="server" alt="Foto 51: Technician Program Alarma Tamper Sensor de 360° (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaTamperSensor360Ejemplo">Foto 51: Technician Program Alarma Tamper Sensor de 360° (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaTamperSensor360" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaTamperSensor360Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaTamperSensor360Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaTamperSensor360Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaTamperSensor360Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaTamperSensor360" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaTamperSensor360">Foto 51: Technician Program Alarma Tamper Sensor de 360°</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaTamperSensor360" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMovimientoSensor360Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgTechnicianProgramAlarmaMovimientoSensor360Ejemplo" runat="server" alt="Foto 52: Technician Program Alarma Movimiento Sensor de 360° (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMovimientoSensor360Ejemplo">Foto 52: Technician Program Alarma Movimiento Sensor de 360° (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTechnicianProgramAlarmaMovimientoSensor360" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTechnicianProgramAlarmaMovimientoSensor360Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTechnicianProgramAlarmaMovimientoSensor360Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTechnicianProgramAlarmaMovimientoSensor360Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTechnicianProgramAlarmaMovimientoSensor360Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTechnicianProgramAlarmaMovimientoSensor360" class="">
                                            </div>
                                            <label for="divTechnicianProgramAlarmaMovimientoSensor360">Foto 52: Technician Program Alarma Movimiento Sensor de 360°</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTechnicianProgramAlarmaMovimientoSensor360" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">08.- CAPTURAS DE PING</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingCamara01IndoorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingCamara01IndoorEjemplo" runat="server" alt="Foto 53: Ping a la Cámara 1 - Indoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingCamara01IndoorEjemplo">Foto 53: Ping a la Cámara 1 - Indoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingCamara01Indoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingCamara01IndoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingCamara01IndoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingCamara01IndoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingCamara01IndoorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPingCamara01Indoor" class="">
                                            </div>
                                            <label for="divPingCamara01Indoor">Foto 53: Ping a la Cámara 1 - Indoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingCamara01Indoor" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingCamara02OutdoorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingCamara02OutdoorEjemplo" runat="server" alt="Foto 54: Ping a la Cámara 2 - Outdoor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingCamara02OutdoorEjemplo">Foto 54: Ping a la Cámara 2 - Outdoor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingCamara02Outdoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingCamara02OutdoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingCamara02OutdoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingCamara02OutdoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingCamara02OutdoorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPingCamara02Outdoor" class="">
                                            </div>
                                            <label for="divPingCamara02Outdoor">Foto 54: Ping a la Cámara 2 - Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingCamara02Outdoor" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingControladorEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingControladorEjemplo" runat="server" alt="Foto 55: Ping al Controlador (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingControladorEjemplo">Foto 55: Ping al Controlador (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingControlador" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingControladorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingControladorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingControladorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingControladorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPingControlador" class="">
                                            </div>
                                            <label for="divPingControlador">Foto 55: Ping al Controlador</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingControlador" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingGatewayEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingGatewayEjemplo" runat="server" alt="Foto 56: Ping al Gateway (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingGatewayEjemplo">Foto 56: Ping al Gateway (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingGateway" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingGatewayComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingGatewayComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingGatewayComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingGatewayComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPingGateway" class="">
                                            </div>
                                            <label for="divPingGateway">Foto 56: Ping al Gateway</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingGateway" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingNVREjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingNVREjemplo" runat="server" alt="Foto 57: Ping al NVR (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingNVREjemplo">Foto 57: Ping al NVR (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingNVR" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingNVRComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingNVRComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingNVRComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingNVRComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPingNVR" class="">
                                            </div>
                                            <label for="divPingNVR">Foto 57: Ping al NVR</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingNVR" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPingBiometricoEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPingBiometricoEjemplo" runat="server" alt="Foto 58: Ping al Biométrico (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPingBiometricoEjemplo">Foto 58: Ping al Biométrico (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPingBiometrico" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPingBiometricoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPingBiometricoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPingBiometricoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPingBiometricoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPingBiometrico" class="">
                                            </div>
                                            <label for="divPingBiometrico">Foto 58: Ping al Biométrico</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPingBiometrico" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMateriales">
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
                                        <input type="hidden" id="hfEquipamientosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:GridView ID="gvEquipamientos" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" DataKeyNames="Equipamiento_IdValor" OnRowDataBound="gvEquipamientos_RowDataBound">
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
                                                            <asp:TextBox ID="txtSerieEquipamiento" runat="server" Style="max-width: 269px; width: 100%;" Text='<%# Bind("SerieEquipamiento") %>' MaxLength="20"></asp:TextBox>
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
                                        <input type="hidden" id="hfMaterialesComentario" runat="server" />
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
                        <div class="tab-pane fade" id="tabATP">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkExtinguidorExternoFechaExpiracion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spExtinguidorExternoFechaExpiracionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocExtinguidorExternoFechaExpiracionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtExtinguidorExternoFechaExpiracionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfExtinguidorExternoFechaExpiracionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtExtinguidorExternoFechaExpiracion" class="form-control" placeholder="dd/mm/yyyy" runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtExtinguidorExternoFechaExpiracion">E. E. Fecha Expiración</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkExtinguidorInternoFechaExpiracion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spExtinguidorInternoFechaExpiracionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocExtinguidorInternoFechaExpiracionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtExtinguidorInternoFechaExpiracionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfExtinguidorInternoFechaExpiracionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtExtinguidorInternoFechaExpiracion" class="form-control" placeholder="dd/mm/yyyy" runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtExtinguidorInternoFechaExpiracion">E. I. Fecha Expiración</label>
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
    <input type="hidden" id="hfIdPerfil" runat="server"/>
    <input type="hidden" id="hfRutaVirtualTemporal" runat="server"/>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoActaSeguridad.js"></script>
</asp:Content>
