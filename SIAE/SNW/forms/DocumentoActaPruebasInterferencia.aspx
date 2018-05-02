<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoActaPruebasInterferencia.aspx.cs" Inherits="SNW.forms.DocumentoActaPruebasInterferencia" %>

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
                        <li class="active"><a href="#tabSeleccionFrecuencia" data-toggle="tab"><span class="fa fa-wifi"></span>&nbsp;Selección de Frecuencia</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabSeleccionFrecuencia">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divCapturaPantallaRadioEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgCapturaPantallaRadioEjemplo" runat="server" alt="Captura Pantalla Radio: ePMP1000 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divCapturaPantallaRadioEjemplo">Captura Pantalla Radio: ePMP1000 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkCapturaPantallaRadio" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spCapturaPantallaRadioComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocCapturaPantallaRadioComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtCapturaPantallaRadioComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfCapturaPantallaRadioComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divCapturaPantallaRadio" class="">
                                            </div>
                                            <label for="divCapturaPantallaRadio">Captura Pantalla Radio: ePMP1000</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfCapturaPantallaRadio" runat="server" />
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
                    <asp:LinkButton ID="btnCancelar" runat="server" CssClass="btn btn-block btn-danger" Text="" OnClick="btnCancelar_Click"><span class="fa fa-times"></span> Cancelar</asp:LinkButton>
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
    <script src="../js/forms/DocumentoActaPruebasInterferencia.js"></script>
</asp:Content>
