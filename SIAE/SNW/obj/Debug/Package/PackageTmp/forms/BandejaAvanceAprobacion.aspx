<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="BandejaAvanceAprobacion.aspx.cs" Inherits="SNW.forms.BandejaAvanceAprobacion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center">Documentos</h2>
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
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                <span class="has-float-label">
                    <asp:DropDownList class="form-control" ID="ddlProyecto" runat="server">
                    </asp:DropDownList>
                    <label for="cphContenido_ddlProyecto">Proyecto</label>
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
                            <small>Total registros:</small>
                            <asp:Label ID="lblTotalRegistros" runat="server" CssClass="label label-warning" Text="0" />
                        </span>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 no-more-gridView">
                    <asp:GridView ID="gvAvanceAprobacion" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%" OnRowDataBound="gvAvanceAprobacion_RowDataBound" ShowFooter="True">
                        <Columns>
                            <asp:BoundField DataField="Tarea.IdTarea" HeaderText="Tarea" />
                            <asp:BoundField DataField="Tarea.Proyecto.ValorCadena1" HeaderText="Proyecto" />
                            <asp:BoundField DataField="Tarea.TipoTarea.ValorCadena1" HeaderText="T. Tarea" />
                            <asp:BoundField DataField="Tarea.TipoNodoA.ValorCadena1" HeaderText="T. Nodo A" />
                            <asp:BoundField DataField="Tarea.NodoIIBBA.IdNodo" HeaderText="Nodo A." />
                            <asp:BoundField DataField="Tarea.TipoNodoB.ValorCadena1" HeaderText="T. Nodo B" />
                            <asp:BoundField DataField="Tarea.NodoB.IdNodo" HeaderText="Nodo B" />
                            <asp:BoundField DataField="Tarea.Contratista.ValorCadena1" HeaderText="Contratista" />
                            <asp:TemplateField HeaderText="Documento">
                                <FooterTemplate>
                                    <div>
                                        <strong>Promedio</strong>
                                    </div>
                                </FooterTemplate>
                                <ItemTemplate>
                                    <asp:Label ID="lblDocumento" runat="server" Text='<%# Bind("Documento.ValorCadena1") %>'></asp:Label>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="P. Avance">
                                <FooterTemplate>
                                    <div class="progress">
                                        <div id="divPorcentajeAvance" runat="server"></div>
                                    </div>
                                </FooterTemplate>
                                <ItemTemplate>
                                    <div class="progress">
                                        <div id="divPorcentajeAvance" runat="server"></div>
                                    </div>
                                </ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="P. Aprobado">
                                <FooterTemplate>
                                    <div class="progress">
                                        <div id="divPorcentajeAprobado" runat="server"></div>
                                    </div>
                                </FooterTemplate>
                                <ItemTemplate>
                                    <div class="progress">
                                        <div id="divPorcentajeAprobado" runat="server"></div>
                                    </div>
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
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/BandejaDocumentacion.js"></script>
</asp:Content>

