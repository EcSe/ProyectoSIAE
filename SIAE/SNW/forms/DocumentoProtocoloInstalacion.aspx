<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoProtocoloInstalacion.aspx.cs" Inherits="SNW.forms.DocumentoProtocoloInstalacion" %>
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
                        <li><a href="#tabReporteFotografico" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;Reporte Fotográfico</a></li>
                        <li><a href="#tabMateriales" data-toggle="tab"><span class="fa fa-cubes"></span>&nbsp;Materiales</a></li>
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
                        <div class="tab-pane fade" id="tabReporteFotografico">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOmniswitchEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOmniswitchEjemplo" runat="server" alt="Foto 1: Omniswitch OS6450-24 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOmniswitchEjemplo">Foto 1: Omniswitch OS6450-24 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOmniswitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOmniswitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOmniswitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOmniswitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOmniswitchComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divOmniswitch" class="">
                                            </div>
                                            <label for="divOmniswitch">Foto 1: Omniswitch OS6450-24</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOmniswitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaRackSwitchEjemplo" runat="server" alt="Foto 2: Panorámica del Rack (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaRackSwitchEjemplo">Foto 2: Panorámica del Rack (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaRackSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaRackSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaRackSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaRackSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaRackSwitchComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaRackSwitch" class="">
                                            </div>
                                            <label for="divPanoramicaRackSwitch">Foto 2: Panorámica del Rack</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaRackSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConexionBreakersAsignadosEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConexionBreakersAsignadosEjemplo" runat="server" alt="Foto 3: Conexión en Breakers Asignados (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConexionBreakersAsignadosEjemplo">Foto 3: Conexión en Breakers Asignados (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConexionBreakersAsignados" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConexionBreakersAsignadosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConexionBreakersAsignadosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConexionBreakersAsignadosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConexionBreakersAsignadosComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConexionBreakersAsignados" class="">
                                            </div>
                                            <label for="divConexionBreakersAsignados">Foto 3: Conexión en Breakers Asignados</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConexionBreakersAsignados" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConexionAlimentacionSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConexionAlimentacionSwitchEjemplo" runat="server" alt="Foto 4: Conexión de Alimentación en Switch (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConexionAlimentacionSwitchEjemplo">Foto 4: Conexión de Alimentación en Switch (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConexionAlimentacionSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConexionAlimentacionSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConexionAlimentacionSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConexionAlimentacionSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConexionAlimentacionSwitchComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConexionAlimentacionSwitch" class="">
                                            </div>
                                            <label for="divConexionAlimentacionSwitch">Foto 4: Conexión de Alimentación en Switch</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConexionAlimentacionSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoSwitchEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoSwitchEjemplo" runat="server" alt="Foto 5: Aterramiento en el Switch (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoSwitchEjemplo">Foto 5: Aterramiento en el Switch (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoSwitch" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoSwitchComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoSwitchComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoSwitchComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoSwitchComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoSwitch" class="">
                                            </div>
                                            <label for="divAterramientoSwitch">Foto 5: Aterramiento en el Switch</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoSwitch" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoBarraTierraEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoBarraTierraEjemplo" runat="server" alt="Foto 6: Aterramiento en la Barra Tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoBarraTierraEjemplo">Foto 6: Aterramiento en la Barra Tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoBarraTierra" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoBarraTierraComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoBarraTierraComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoBarraTierraComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoBarraTierraComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoBarraTierra" class="">
                                            </div>
                                            <label for="divAterramientoBarraTierra">Foto 6: Aterramiento en la Barra Tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoBarraTierra" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabMateriales">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieSwitch" runat="server" />
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
                                        <input type="hidden" id="hfSerieSwitchComentario" runat="server"/>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtSerieSwitch" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                                            <label for="cphContenido_txtSerieSwitch"># Serie Switch</label>
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
    <script src="../js/forms/DocumentoProtocoloInstalacion.js"></script>
</asp:Content>
