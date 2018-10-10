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
                        <li><a href="#tabFotosAdicionales" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;Fotos Adicionales</a></li>
                        <li><a href="#tabArchivosAdicionales" data-toggle="tab"><span class="fa fa-file"></span>&nbsp;Archivos Adicionales</a></li>
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
                                            
                                            <label for="cphContenido_txtFecha">Fecha</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAltura" runat="server" />
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
                                            <asp:TextBox ID="txtAltura" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            
                                            <label for="cphContenido_txtAltura">Altura (m.s.n.m.)</label>
                                        </span>
                                    </div>
                                </div>
                                <%--<div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkHoraInicio" runat="server" />
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
                                            <asp:TextBox ID="txtHoraInicio" class="form-control" placeholder="hh:mm" runat="server" MaxLength="10"></asp:TextBox>
                                            
                                            <label for="cphContenido_txtHoraInicio">Hora Inicio</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkHoraFin" runat="server" />
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
                                            <asp:TextBox ID="txtHoraFin" class="form-control" placeholder="hh:mm" runat="server" MaxLength="10"></asp:TextBox>
                                            
                                            <label for="cphContenido_txtHoraFin">Hora Fin</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkLongitudLocalidadDesdePlazaPrincipal" runat="server" />
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
                                            <asp:TextBox ID="txtLongitudLocalidadDesdePlazaPrincipal" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            
                                            <label for="cphContenido_txtLongitudLocalidadDesdePlazaPrincipal">Long. Loc. Plaza Princ.</label>
                                        </span>
                                    </div>
                                </div>--%>
                            </div>
                            <%--<div class="row">
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkLatitudLocalidadDesdePlazaPrincipal" runat="server" />
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
                                            <asp:TextBox ID="txtLatitudLocalidadDesdePlazaPrincipal" class="form-control " placeholder=" " runat="server" MaxLength="200" autocomplete="off"></asp:TextBox>
                                            
                                            <label for="cphContenido_txtLatitudLocalidadDesdePlazaPrincipal">Lat. Loc. Plaza Princ.</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAreaNaturalProtegida" runat="server" />
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
                                            <asp:TextBox ID="txtAreaNaturalProtegida" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            
                                            <label for="cphContenido_txtAreaNaturalProtegida">Área Natural Protegida</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkNombreAreaNatural" runat="server" />
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
                                            <asp:TextBox ID="txtNombreAreaNatural" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            
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
                                                    <asp:CheckBox ID="chkRestosArqueologicos" runat="server" />
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
                                            <asp:TextBox ID="txtRestosArqueologicos" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtRestosArqueologicos">Restos Arquelógicos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTipoRestosArqueologicos" runat="server" />
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
                                            <asp:TextBox ID="txtTipoRestosArqueologicos" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtTipoRestosArqueologicos">Tip. Restos Arquelógicos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkBancoNacion" runat="server" />
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
                                            <asp:TextBox ID="txtBancoNacion" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtBancoNacion">Banco de la Nación</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAgenteBancoNacion" runat="server" />
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
                                            <asp:TextBox ID="txtAgenteBancoNacion" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
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
                                                    <asp:CheckBox ID="chkCantidad" runat="server" />
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
                                            <asp:TextBox ID="txtCantidad" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtCantidad">Cantidad</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosBancos" runat="server" />
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
                                            <asp:TextBox ID="txtOtrosBancos" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtOtrosBancos">Otros Bancos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCantidadOtrosBancos" runat="server" />
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
                                            <asp:TextBox ID="txtCantidadOtrosBancos" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtCantidadOtrosBancos">Cantidad Otros Bancos</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEntidadImportante" runat="server" />
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
                                            <asp:TextBox ID="txtEntidadImportante" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
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
                                                    <asp:CheckBox ID="chkInstitucionEducativa" runat="server" />
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
                                            <asp:TextBox ID="txtInstitucionEducativa" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtInstitucionEducativa">Institución Educativa</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCantidadInstitucionEducativa" runat="server" />
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
                                            <asp:TextBox ID="txtCantidadInstitucionEducativa" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtCantidadInstitucionEducativa">Cantidad IIEE</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPoblacion" runat="server" />
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
                                            <asp:TextBox ID="txtPoblacion" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtPoblacion">Población</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkNumeroMujeres" runat="server" />
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
                                            <asp:TextBox ID="txtNumeroMujeres" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
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
                                                    <asp:CheckBox ID="chkNumeroJovenesEntre15y24Anios" runat="server" />
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
                                            <asp:TextBox ID="txtNumeroJovenesEntre15y24Anios" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtNumeroJovenesEntre15y24Anios">N° Jov. 15 y 24</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkNumeroPersonasDiscapacidad" runat="server" />
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
                                            <asp:TextBox ID="txtNumeroPersonasDiscapacidad" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtNumeroPersonasDiscapacidad">N° Pers. Discapacidad</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-lg-3">
                                    <div class="form-group input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkNumeroViviendas" runat="server" />
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
                                            <asp:TextBox ID="txtNumeroViviendas" class="form-control" placeholder=" " runat="server" MaxLength="10"></asp:TextBox>
                                            <label for="cphContenido_txtNumeroViviendas">N° Viviendas</label>
                                        </span>
                                    </div>
                                </div>
                            </div>--%>
                            <div class="row">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabFotosAdicionales">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCartelNombreLetreroEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgCartelNombreLetreroEjemplo" runat="server" alt="Cartel con Nombre de Letrero (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCartelNombreLetreroEjemplo">Cartel con Nombre de Letrero (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCartelNombreLetrero" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCartelNombreLetreroComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCartelNombreLetreroComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCartelNombreLetreroComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCartelNombreLetreroComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCartelNombreLetrero" class="">
                                            </div>
                                            <label for="divCartelNombreLetrero">Cartel con Nombre de Letrero</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCartelNombreLetrero" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCentroComunalCartelEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgCentroComunalCartelEjemplo" runat="server" alt="Centro Comunal con Cartel (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCentroComunalCartelEjemplo">Centro Comunal con Cartel (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCentroComunalCartel" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCentroComunalCartelComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCentroComunalCartelComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCentroComunalCartelComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCentroComunalCartelComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divCentroComunalCartel" class="">
                                            </div>
                                            <label for="divCentroComunalCartel">Centro Comunal con Cartel</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCentroComunalCartel" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgTerrenoInstalacionCaseta01Ejemplo" runat="server" alt="Terreno Instalación Caseta 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta01Ejemplo">Terreno Instalación Caseta 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTerrenoInstalacionCaseta01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTerrenoInstalacionCaseta01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTerrenoInstalacionCaseta01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTerrenoInstalacionCaseta01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTerrenoInstalacionCaseta01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta01" class="">
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta01">Terreno Instalación Caseta 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTerrenoInstalacionCaseta01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgTerrenoInstalacionCaseta02Ejemplo" runat="server" alt="Terreno Instalación Caseta 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta02Ejemplo">Terreno Instalación Caseta 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTerrenoInstalacionCaseta02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTerrenoInstalacionCaseta02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTerrenoInstalacionCaseta02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTerrenoInstalacionCaseta02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTerrenoInstalacionCaseta02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta02" class="">
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta02">Terreno Instalación Caseta 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTerrenoInstalacionCaseta02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta03Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgTerrenoInstalacionCaseta03Ejemplo" runat="server" alt="Terreno Instalación Caseta 03 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta03Ejemplo">Terreno Instalación Caseta 03 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTerrenoInstalacionCaseta03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTerrenoInstalacionCaseta03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTerrenoInstalacionCaseta03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTerrenoInstalacionCaseta03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTerrenoInstalacionCaseta03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta03" class="">
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta03">Terreno Instalación Caseta 03</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTerrenoInstalacionCaseta03" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta04Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgTerrenoInstalacionCaseta04Ejemplo" runat="server" alt="Terreno Instalación Caseta 04 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta04Ejemplo">Terreno Instalación Caseta 04 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTerrenoInstalacionCaseta04" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTerrenoInstalacionCaseta04Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTerrenoInstalacionCaseta04Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTerrenoInstalacionCaseta04Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTerrenoInstalacionCaseta04Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divTerrenoInstalacionCaseta04" class="">
                                            </div>
                                            <label for="divTerrenoInstalacionCaseta04">Terreno Instalación Caseta 04</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTerrenoInstalacionCaseta04" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPlazaMirasNodoCartelEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPlazaMirasNodoCartelEjemplo" runat="server" alt="Plaza con Miras al Nodo con Cartel (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPlazaMirasNodoCartelEjemplo">Plaza con Miras al Nodo con Cartel (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPlazaMirasNodoCartel" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPlazaMirasNodoCartelComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPlazaMirasNodoCartelComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPlazaMirasNodoCartelComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPlazaMirasNodoCartelComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPlazaMirasNodoCartel" class="">
                                            </div>
                                            <label for="divPlazaMirasNodoCartel">Plaza con Miras al Nodo con Cartel</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPlazaMirasNodoCartel" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaLocalidadCartel01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaLocalidadCartel01Ejemplo" runat="server" alt="Panorámica Localidad con Cartel 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaLocalidadCartel01Ejemplo">Panorámica Localidad con Cartel 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaLocalidadCartel01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaLocalidadCartel01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaLocalidadCartel01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaLocalidadCartel01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaLocalidadCartel01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaLocalidadCartel01" class="">
                                            </div>
                                            <label for="divPanoramicaLocalidadCartel01">Panorámica Localidad con Cartel 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaLocalidadCartel01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaLocalidadCartel02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaLocalidadCartel02Ejemplo" runat="server" alt="Panorámica Localidad con Cartel 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaLocalidadCartel02Ejemplo">Panorámica Localidad con Cartel 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaLocalidadCartel02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaLocalidadCartel02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaLocalidadCartel02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaLocalidadCartel02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaLocalidadCartel02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaLocalidadCartel02" class="">
                                            </div>
                                            <label for="divPanoramicaLocalidadCartel02">Panorámica Localidad con Cartel 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaLocalidadCartel02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaPlazaPrincipalCartelEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaPlazaPrincipalCartelEjemplo" runat="server" alt="Panorámica Plaza Principal con Cartel (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaPlazaPrincipalCartelEjemplo">Panorámica Plaza Principal con Cartel (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaPlazaPrincipalCartel" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaPlazaPrincipalCartelComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaPlazaPrincipalCartelComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaPlazaPrincipalCartelComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaPlazaPrincipalCartelComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaPlazaPrincipalCartel" class="">
                                            </div>
                                            <label for="divPanoramicaPlazaPrincipalCartel">Panorámica Plaza Principal con Cartel</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaPlazaPrincipalCartel" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36001Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36001Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36001Ejemplo">Panorámica Desde Nodo (360°) 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36001" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36001Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36001Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36001Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36001Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36001" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36001">Panorámica Desde Nodo (360°) 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36001" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36002Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36002Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36002Ejemplo">Panorámica Desde Nodo (360°) 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36002" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36002Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36002Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36002Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36002Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36002" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36002">Panorámica Desde Nodo (360°) 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36002" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36003Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36003Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 03 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36003Ejemplo">Panorámica Desde Nodo (360°) 03 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36003" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36003Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36003Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36003Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36003Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36003" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36003">Panorámica Desde Nodo (360°) 03</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36003" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36004Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36004Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 04 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36004Ejemplo">Panorámica Desde Nodo (360°) 04 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36004" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36004Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36004Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36004Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36004Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36004" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36004">Panorámica Desde Nodo (360°) 04</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36004" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36005Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36005Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 05 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36005Ejemplo">Panorámica Desde Nodo (360°) 05 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36005" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36005Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36005Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36005Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36005Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36005" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36005">Panorámica Desde Nodo (360°) 05</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36005" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36006Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36006Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 06 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36006Ejemplo">Panorámica Desde Nodo (360°) 06 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36006" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36006Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36006Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36006Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36006Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36006" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36006">Panorámica Desde Nodo (360°) 06</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36006" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36007Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36007Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 07 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36007Ejemplo">Panorámica Desde Nodo (360°) 07 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36007" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36007Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36007Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36007Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36007Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36007" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36007">Panorámica Desde Nodo (360°) 07</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36007" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36008Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36008Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 08 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36008Ejemplo">Panorámica Desde Nodo (360°) 08 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36008" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36008Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36008Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36008Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36008Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36008" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36008">Panorámica Desde Nodo (360°) 08</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36008" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36009Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36009Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 09 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36009Ejemplo">Panorámica Desde Nodo (360°) 09 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36009" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36009Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36009Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36009Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36009Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36009" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36009">Panorámica Desde Nodo (360°) 09</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36009" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36010Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36010Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 10 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36010Ejemplo">Panorámica Desde Nodo (360°) 10 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36010" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36010Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36010Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36010Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36010Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36010" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36010">Panorámica Desde Nodo (360°) 10</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36010" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36011Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36011Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 11 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36011Ejemplo">Panorámica Desde Nodo (360°) 11 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36011" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36011Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36011Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36011Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36011Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36011" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36011">Panorámica Desde Nodo (360°) 11</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36011" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36012Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPanoramicaDesdeNodo36012Ejemplo" runat="server" alt="Panorámica Desde Nodo (360°) 12 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36012Ejemplo">Panorámica Desde Nodo (360°) 12 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPanoramicaDesdeNodo36012" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPanoramicaDesdeNodo36012Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPanoramicaDesdeNodo36012Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPanoramicaDesdeNodo36012Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPanoramicaDesdeNodo36012Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPanoramicaDesdeNodo36012" class="">
                                            </div>
                                            <label for="divPanoramicaDesdeNodo36012">Panorámica Desde Nodo (360°) 12</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPanoramicaDesdeNodo36012" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel01Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel01Ejemplo">Otros Lugares Principales con Cartel 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel01" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel01">Otros Lugares Principales con Cartel 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel02Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel02Ejemplo">Otros Lugares Principales con Cartel 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel02" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel02">Otros Lugares Principales con Cartel 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel03Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel03Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 03 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel03Ejemplo">Otros Lugares Principales con Cartel 03 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel03" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel03">Otros Lugares Principales con Cartel 03</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel03" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel04Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel04Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 04 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel04Ejemplo">Otros Lugares Principales con Cartel 04 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel04" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel04Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel04Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel04Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel04Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel04" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel04">Otros Lugares Principales con Cartel 04</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel04" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel05Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel05Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 05 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel05Ejemplo">Otros Lugares Principales con Cartel 05 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel05" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel05Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel05Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel05Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel05Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel05" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel05">Otros Lugares Principales con Cartel 05</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel05" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel06Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel06Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 06 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel06Ejemplo">Otros Lugares Principales con Cartel 06 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel06" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel06Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel06Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel06Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel06Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel06" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel06">Otros Lugares Principales con Cartel 06</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel06" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel07Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel07Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 07 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel07Ejemplo">Otros Lugares Principales con Cartel 07 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel07" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel07Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel07Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel07Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel07Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel07" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel07">Otros Lugares Principales con Cartel 07</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel07" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel08Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel08Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 08 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel08Ejemplo">Otros Lugares Principales con Cartel 08 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel08" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel08Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel08Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel08Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel08Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel08" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel08">Otros Lugares Principales con Cartel 08</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel08" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel09Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel09Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 09 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel09Ejemplo">Otros Lugares Principales con Cartel 09 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel09" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel09Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel09Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel09Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel09Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel09" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel09">Otros Lugares Principales con Cartel 09</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel09" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel10Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel10Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 10 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel10Ejemplo">Otros Lugares Principales con Cartel 10 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel10" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel10Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel10Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel10Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel10Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel10" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel10">Otros Lugares Principales con Cartel 10</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel10" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel11Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel11Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 11 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel11Ejemplo">Otros Lugares Principales con Cartel 11 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel11" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel11Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel11Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel11Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel11Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel11" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel11">Otros Lugares Principales con Cartel 11</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel11" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel12Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel12Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 12 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel12Ejemplo">Otros Lugares Principales con Cartel 12 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel12" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel12Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel12Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel12Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel12Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel12" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel12">Otros Lugares Principales con Cartel 12</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel12" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel13Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel13Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 13 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel13Ejemplo">Otros Lugares Principales con Cartel 13 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel13" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel13Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel13Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel13Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel13Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel13" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel13">Otros Lugares Principales con Cartel 13</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel13" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel14Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel14Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 14 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel14Ejemplo">Otros Lugares Principales con Cartel 14 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel14" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel14Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel14Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel14Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel14Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel14" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel14">Otros Lugares Principales con Cartel 14</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel14" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel15Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgOtrosLugaresPrincipalesCartel15Ejemplo" runat="server" alt="Otros Lugares Principales con Cartel 15 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel15Ejemplo">Otros Lugares Principales con Cartel 15 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkOtrosLugaresPrincipalesCartel15" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spOtrosLugaresPrincipalesCartel15Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocOtrosLugaresPrincipalesCartel15Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtOtrosLugaresPrincipalesCartel15Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfOtrosLugaresPrincipalesCartel15Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divOtrosLugaresPrincipalesCartel15" class="">
                                            </div>
                                            <label for="divOtrosLugaresPrincipalesCartel15">Otros Lugares Principales con Cartel 15</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfOtrosLugaresPrincipalesCartel15" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabArchivosAdicionales">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkMapaGeoreferenciado" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spMapaGeoreferenciadoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocMapaGeoreferenciadoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtMapaGeoreferenciadoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfMapaGeoreferenciadoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divMapaGeoreferenciado" class="">
                                            </div>
                                            <label for="divMapaGeoreferenciado">Mapa Georeferenciado (.kmz)</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfMapaGeoreferenciado" runat="server" />
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
    <script src="../js/forms/DocumentoEstudioCampo.js"></script>
</asp:Content>
