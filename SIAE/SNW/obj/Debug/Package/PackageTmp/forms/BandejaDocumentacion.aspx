<%@ Page Title="Documentación .:SIAE:." Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="BandejaDocumentacion.aspx.cs" Inherits="SNW.forms.BandejaDocumentacion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center">Tareas</h2>
        <%--</div>--%>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtIdNodoIIBB"><span class="fa fa-barcode"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtIdNodoIIBB" class="form-control" placeholder=" " runat="server" MaxLength="12"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtIdNodoIIBB">Id Nodo o IIBB</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtContratista"><span class="fa fa-user-circle-o"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtContratista" class="form-control " placeholder=" " runat="server" MaxLength="200" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtContratista" id="lblContratista">Contratista</label>
                </span>
            </div>
        </div>
    </div>
    <asp:UpdatePanel ID="upaBuscar" runat="server">
        <ContentTemplate>
            <div class="row">

                <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                    <asp:LinkButton ID="btnBuscar" runat="server" CssClass="btn btn-block btn-primary" Text="" OnClick="btnBuscar_Click"><span class="fa fa-search"></span> Buscar</asp:LinkButton>
                </div>

            </div>
            <br />
            <div class="row" style="margin-bottom: 3px;">
                <div class="col-xs-12">
                    <h4>

                        <span style="float: right;">
                            <small>Total tareas:</small>
                            <asp:Label ID="lblTotalRegistros" runat="server" CssClass="label label-warning" Text="0" />
                        </span>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 no-more-gridView">
                    <asp:GridView ID="gvTareas" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" OnRowDataBound="gvTareas_RowDataBound" DataKeyNames="IdTarea,TipoTarea_ValorCadena1,NodoIIBBA_IdNodo,Tarea_Tipo_NodoA">
                        <Columns>
                            <asp:BoundField DataField="IdTarea" HeaderText="Tarea" />
                            <asp:BoundField DataField="IdSectorAP" HeaderText="Sector" />
                            <asp:BoundField DataField="TipoTarea.ValorCadena1" HeaderText="T. Tarea" />
                            <asp:BoundField DataField="TipoNodoA.ValorCadena1" HeaderText="T. Nodo A" />
                            <asp:BoundField DataField="NodoIIBBA.IdNodo" HeaderText="Nodo A." />
                            <asp:BoundField DataField="TipoNodoB.ValorCadena1" HeaderText="T. Nodo B" />
                            <asp:BoundField DataField="NodoB.IdNodo" HeaderText="Nodo B" />
                            <asp:BoundField DataField="Contratista.ValorCadena1" HeaderText="Contratista" />
                            <%--<asp:BoundField DataField="Documento.ValorCadena1" HeaderText="Documento" />--%>
                            <asp:TemplateField HeaderText="Acciones">
                                <ItemTemplate>
                                    <%--<asp:LinkButton ID="btnEditar" runat="server" CssClass="btn btn-default" ToolTip="Editar Documentación" OnClick="btnEditar_Click" ><span class="fa fa-pencil"></span></asp:LinkButton>
                                    <asp:LinkButton ID="btnDescargar" runat="server" CssClass="btn btn-primary" ToolTip="Descargar Documentación" OnClick="btnDescargar_Click"><span class="fa fa-download"></span></asp:LinkButton>--%>
                                    <asp:LinkButton ID="btnBuscarDocumentos" runat="server" CssClass="btn btn-primary" ToolTip="Ver Documentos" OnClick="btnBuscarDocumentos_Click"><span class="fa fa-search"></span></asp:LinkButton>
                                </ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <br />
    <br />
    <asp:HiddenField ID="hfIdContratista" runat="server" />

    <asp:UpdatePanel ID="upaAlertDocumento" runat="server" UpdateMode="Conditional">
        <ContentTemplate>
            <div class="modal fade" id="divAlertDocumento" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
                <div class="modal-dialog-full">

                    <div class="modal-content">

                        <%--<div id="divAlertHeader" class="modal-header modal-header-success">--%>
                        <div id="divAlertDocumentoHeader" class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">
                                <asp:Label ID="lblAlertDocumentoTitle" runat="server" Text=""></asp:Label>
                            </h4>
                        </div>
                        <asp:UpdatePanel ID="upaAlertBodyDocumentoHeader" runat="server" UpdateMode="Conditional">
                            <ContentTemplate>
                                <div class="modal-body">
                                    <div class="row" style="margin-bottom: 3px;">
                                        <div class="col-xs-12">
                                            <h4>
                                                <span style="float: right;">
                                                    <small>Total documentos:</small>
                                                    <asp:Label ID="lblTotalDocumentos" runat="server" CssClass="label label-warning" Text="0" />
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12 no-more-gridView">
                                            <asp:GridView ID="gvDocumentos" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" OnRowDataBound="gvDocumentos_RowDataBound" DataKeyNames="Documento_IdValor,Documento_ValorCadena1,Documento_ValorCadena2">
                                                <Columns>
                                                    <%--<asp:BoundField DataField="Tarea.IdTarea" HeaderText="Tarea" />
                                            <asp:BoundField DataField="Tarea.IdSectorAP" HeaderText="Sector" />
                                            <asp:BoundField DataField="Tarea.TipoTarea.ValorCadena1" HeaderText="T. Tarea" />
                                            <asp:BoundField DataField="Tarea.TipoNodoA.ValorCadena1" HeaderText="T. Nodo A" />
                                            <asp:BoundField DataField="Tarea.NodoIIBBA.IdNodo" HeaderText="Nodo A." />
                                            <asp:BoundField DataField="Tarea.TipoNodoB.ValorCadena1" HeaderText="T. Nodo B" />
                                            <asp:BoundField DataField="Tarea.NodoB.IdNodo" HeaderText="Nodo B" />
                                            <asp:BoundField DataField="Tarea.Contratista.ValorCadena1" HeaderText="Contratista" />--%>
                                                    <asp:BoundField DataField="Documento.ValorCadena1" HeaderText="Documento" />
                                                    <asp:TemplateField HeaderText="P. Avance">
                                                        <ItemTemplate>
                                                            <div class="progress">
                                                                <div id="divPorcentajeAvance" runat="server"></div>
                                                            </div>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="P. Aprobado">
                                                        <ItemTemplate>
                                                            <div class="progress">
                                                                <div id="divPorcentajeAprobado" runat="server"></div>
                                                            </div>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderText="Acciones">
                                                        <ItemTemplate>
                                                            <%--<asp:LinkButton ID="btnEditar" runat="server" CssClass="btn btn-default" ToolTip="Editar Documentación"><span class="fa fa-pencil"></span></asp:LinkButton>--%>
                                                            <a id="lnkEditar" runat="server" class="btn btn-success" title="Editar Documento" target="_blank"><span class="fa fa-pencil"></span></a>
                                                            <asp:LinkButton ID="btnDescargar" runat="server" CssClass="btn btn-primary" ToolTip="Descargar Documentación" OnClick="btnDescargar_Click"><span class="fa fa-download"></span></asp:LinkButton>
                                                        </ItemTemplate>
                                                    </asp:TemplateField>
                                                </Columns>
                                            </asp:GridView>

                                        </div>
                                    </div>
                                </div>
                                <%--<div class="modal-footer">
                            <asp:LinkButton ID="btnGuardar" runat="server" CssClass="btn btn-success" Text="" OnClick="btnGuardar_Click"><span class="fa fa-floppy-o"></span> Guardar</asp:LinkButton>
                            <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">
                                <span class="fa fa-times"></span> Cancelar
                            </button>
                        </div>--%>
                            </ContentTemplate>
                        </asp:UpdatePanel>
                    </div>

                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/BandejaDocumentacion.js"></script>
</asp:Content>
