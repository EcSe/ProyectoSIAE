<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="BandejaTarea.aspx.cs" Inherits="SNW.forms.BandejaTarea" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center">Tareas</h2>
        <%--</div>--%>
    </div>
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
    <div class="row">
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
    <asp:HiddenField ID="hfIdContratista" runat="server" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/BandejaTarea.js"></script>
</asp:Content>
