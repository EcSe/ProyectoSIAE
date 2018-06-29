<%@ Page Title="Nodo .:SIAE:." Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="BandejaNodo.aspx.cs" Inherits="SNW.forms.BandejaNodo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center">Nodos</h2>
        <%--</div>--%>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtIdNodo"><span class="fa fa-barcode"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtIdNodo" class="form-control" placeholder=" " runat="server" MaxLength="12"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtIdNodo">Id Nodo</label>
                </span>
            </div>
        </div>
        <%--<div class="col-xs-12 col-sm-6 col-md-6">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtContratista"><span class="fa fa-user-circle-o"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtContratista" class="form-control " placeholder=" " runat="server" MaxLength="200" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                    <label for="cphContenido_txtContratista" id="lblContratista">Contratista</label>
                </span>
            </div>
        </div>--%>
    </div>
    <asp:UpdatePanel ID="upaBuscar" runat="server">
        <ContentTemplate>
            <div class="row">

                <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                    <asp:LinkButton ID="btnBuscar" runat="server" CssClass="btn btn-block btn-primary" Text="" OnClick="btnBuscar_Click" ><span class="fa fa-search"></span> Buscar</asp:LinkButton>
                </div>

            </div>
            <br />
            <div class="row" style="margin-bottom: 3px;">
                <div class="col-xs-12">
                    <h4>

                        <span style="float: right;">
                            <small>Total Nodos:</small>
                            <asp:Label ID="lblTotalRegistros" runat="server" CssClass="label label-warning" Text="0" />
                        </span>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 no-more-gridView">
                    <asp:GridView ID="gvNodos" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" Width="100%"  DataKeyNames="IdNodo" OnRowDataBound="gvNodos_RowDataBound">
                        <Columns>
                            <asp:BoundField DataField="IdNodo" HeaderText="Nodo" />
                            <asp:BoundField DataField="Nombre" HeaderText="Nombre" />
                            <asp:BoundField DataField="Region.Nombre" HeaderText="Región" />
                            <%--<asp:BoundField DataField="TipoNodoA.ValorCadena1" HeaderText="T. Nodo A" />
                            <asp:BoundField DataField="NodoIIBBA.IdNodo" HeaderText="Nodo A." />
                            <asp:BoundField DataField="TipoNodoB.ValorCadena1" HeaderText="T. Nodo B" />
                            <asp:BoundField DataField="NodoB.IdNodo" HeaderText="Nodo B" />
                            <asp:BoundField DataField="Contratista.ValorCadena1" HeaderText="Contratista" />
                            <asp:BoundField DataField="Documento.ValorCadena1" HeaderText="Documento" />--%>
                            <asp:TemplateField HeaderText="Acciones">
                                <ItemTemplate>
                                    <%--<asp:LinkButton ID="btnEditar" runat="server" CssClass="btn btn-default" ToolTip="Editar Documentación" OnClick="btnEditar_Click" ><span class="fa fa-pencil"></span></asp:LinkButton>
                                    <asp:LinkButton ID="btnDescargar" runat="server" CssClass="btn btn-primary" ToolTip="Descargar Documentación" OnClick="btnDescargar_Click"><span class="fa fa-download"></span></asp:LinkButton>--%>
                                    <asp:LinkButton ID="btnDescargarZip" runat="server" CssClass="btn btn-primary" ToolTip="Descargar Zip" OnClick="btnDescargarZip_Click" ><span class="fa fa-file-archive-o"></span></asp:LinkButton>
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
    <script src="../js/forms/BandejaNodo.js"></script>
</asp:Content>
