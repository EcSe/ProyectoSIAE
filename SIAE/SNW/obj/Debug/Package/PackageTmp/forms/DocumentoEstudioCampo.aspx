<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoEstudioCampo.aspx.cs" Inherits="SNW.forms.DocumentoEstudioCampo" %>

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
                        <li class="active"><a href="#tabEstudioCampo" data-toggle="tab"><span class="fa fa-book"></span>&nbsp;Estudio de Campo</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabEstudioCampo">
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
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkHoraInicio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spHoraInicioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocHoraInicioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtHoraInicioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfHoraInicioComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtHoraInicio" class="form-control" placeholder="hh:mm" runat="server" maxlength="10"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtHoraInicio">Hora Inicio</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkHoraFin" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spHoraFinComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocHoraFinComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtHoraFinComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfHoraFinComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtHoraFin" class="form-control" placeholder="hh:mm" runat="server" maxlength="10"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtHoraFin">Hora Fin</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkLongitudLocalidadDesdePlazaPrincipal" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spLongitudLocalidadDesdePlazaPrincipalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocLongitudLocalidadDesdePlazaPrincipalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtLongitudLocalidadDesdePlazaPrincipalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfLongitudLocalidadDesdePlazaPrincipalComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtLongitudLocalidadDesdePlazaPrincipal" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtLongitudLocalidadDesdePlazaPrincipal">Long. Loc. Plaza Princ.</label>
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
                                                    <asp:checkbox id="chkLatitudLocalidadDesdePlazaPrincipal" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spLatitudLocalidadDesdePlazaPrincipalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocLatitudLocalidadDesdePlazaPrincipalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtLatitudLocalidadDesdePlazaPrincipalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfLatitudLocalidadDesdePlazaPrincipalComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtLatitudLocalidadDesdePlazaPrincipal" class="form-control " placeholder=" " runat="server" maxlength="200" autocomplete="off"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtLatitudLocalidadDesdePlazaPrincipal">Lat. Loc. Plaza Princ.</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkAltura" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAlturaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAlturaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAlturaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAlturaComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAltura" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtAltura">Altura (m.s.n.m.)</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkAreaNaturalProtegida" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAreaNaturalProtegidaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAreaNaturalProtegidaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAreaNaturalProtegidaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAreaNaturalProtegidaComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAreaNaturalProtegida" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtAreaNaturalProtegida">Área Natural Protegida</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNombreAreaNatural" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNombreAreaNaturalComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNombreAreaNaturalComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNombreAreaNaturalComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNombreAreaNaturalComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNombreAreaNatural" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtNombreAreaNatural">Nombre Área Natural</label>
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
                                                    <asp:checkbox id="chkRestosArqueologicos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRestosArqueologicosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRestosArqueologicosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRestosArqueologicosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRestosArqueologicosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtRestosArqueologicos" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtRestosArqueologicos">Restos Arquelógicos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkTipoRestosArqueologicos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTipoRestosArqueologicosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTipoRestosArqueologicosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTipoRestosArqueologicosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTipoRestosArqueologicosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtTipoRestosArqueologicos" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtTipoRestosArqueologicos">Tip. Restos Arquelógicos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkBancoNacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spBancoNacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocBancoNacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtBancoNacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfBancoNacionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtBancoNacion" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtBancoNacion">Banco de la Nación</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkAgenteBancoNacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAgenteBancoNacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAgenteBancoNacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAgenteBancoNacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAgenteBancoNacionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtAgenteBancoNacion" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtAgenteBancoNacion">Agente Banco Nación</label>
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
                                                    <asp:checkbox id="chkCantidad" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCantidadComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCantidadComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCantidadComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCantidadComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCantidad" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtCantidad">Cantidad</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkOtrosBancos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosBancosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosBancosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosBancosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosBancosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtOtrosBancos" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtOtrosBancos">Otros Bancos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkCantidadOtrosBancos" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCantidadOtrosBancosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCantidadOtrosBancosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCantidadOtrosBancosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCantidadOtrosBancosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCantidadOtrosBancos" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtCantidadOtrosBancos">Cantidad Otros Bancos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkEntidadImportante" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEntidadImportanteComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEntidadImportanteComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEntidadImportanteComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEntidadImportanteComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtEntidadImportante" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtEntidadImportante">Entidad Importante</label>
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
                                                    <asp:checkbox id="chkInstitucionEducativa" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spInstitucionEducativaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocInstitucionEducativaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtInstitucionEducativaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfInstitucionEducativaComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtInstitucionEducativa" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtInstitucionEducativa">Institución Educativa</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkCantidadInstitucionEducativa" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCantidadInstitucionEducativaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCantidadInstitucionEducativaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCantidadInstitucionEducativaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCantidadInstitucionEducativaComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtCantidadInstitucionEducativa" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtCantidadInstitucionEducativa">Cantidad IIEE</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkPoblacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPoblacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPoblacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPoblacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPoblacionComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtPoblacion" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtPoblacion">Población</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNumeroMujeres" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNumeroMujeresComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNumeroMujeresComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNumeroMujeresComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNumeroMujeresComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNumeroMujeres" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtNumeroMujeres">N° de Mujeres</label>
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
                                                    <asp:checkbox id="chkNumeroJovenesEntre15y24Anios" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNumeroJovenesEntre15y24AniosComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNumeroJovenesEntre15y24AniosComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNumeroJovenesEntre15y24AniosComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNumeroJovenesEntre15y24AniosComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNumeroJovenesEntre15y24Anios" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtNumeroJovenesEntre15y24Anios">N° Jov. 15 y 24</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNumeroPersonasDiscapacidad" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNumeroPersonasDiscapacidadComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNumeroPersonasDiscapacidadComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNumeroPersonasDiscapacidadComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNumeroPersonasDiscapacidadComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNumeroPersonasDiscapacidad" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtNumeroPersonasDiscapacidad">N° Pers. Discapacidad</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkNumeroViviendas" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spNumeroViviendasComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocNumeroViviendasComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtNumeroViviendasComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfNumeroViviendasComentario" runat="server" />
                                        <span class="has-float-label">
                                            <asp:textbox id="txtNumeroViviendas" class="form-control" placeholder=" " runat="server" maxlength="10"></asp:textbox>
                                            <label for="cphContenido_txtNumeroViviendas">N° Viviendas</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
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
                    <asp:LinkButton ID="btnGuardar" runat="server" CssClass="btn btn-block btn-success" Text="" OnClick="btnGuardar_Click" ><span class="fa fa-floppy-o"></span> Guardar</asp:LinkButton>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <asp:LinkButton ID="btnCancelar" runat="server" CssClass="btn btn-block btn-danger" Text="" ><span class="fa fa-times"></span> Cancelar</asp:LinkButton>
                </div>
            </div>
        </ContentTemplate>
    </asp:updatepanel>
    <br />
    <br />
    <input type="hidden" id="hfIdPerfil" runat="server" />
    <input type="hidden" id="hfRutaVirtualTemporal" runat="server" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoEstudioCampo.js"></script>
</asp:Content>
