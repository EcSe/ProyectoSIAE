    <%@ Page Title="Carga Masiva .:SIAE:." Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="CargaMasiva.aspx.cs" Inherits="SNW.forms.CargaMasiva" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center">Carga Masiva</h2>
        <%--</div>--%>
    </div>

    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon"><span class="fa fa-bolt"></span></span>
                <span class="has-float-label">
                    <asp:DropDownList class="form-control" ID="ddlMetodo" runat="server">
                    </asp:DropDownList>
                    <label for="cphContenido_ddlMetodo">Metodo*</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6">
            <%--<div class="form-group input-group">
                <span class="input-group-addon" id="spTxtArchivo">
                    <span class="fa fa-file-excel-o"></span>
                    <asp:FileUpload ID="fuArchivo" runat="server" accept=".xls,.xlsx" AllowMultiple="true" Style="position: absolute; top: 0; left: 0; min-width: 100%; min-height: 100%; text-align: right; filter: alpha(opacity=0); opacity: 0; outline: none; background: white; cursor: inherit; display: block;" />
                </span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtArchivo" class="form-control" placeholder="" runat="server" MaxLength="20" Text="" disabled="disabled"></asp:TextBox>
                    <label for="cphContenido_txtArchivo">Archivo</label>
                </span>

            </div>--%>
            <div class="form-group-base input-group">
                <span class="input-group-addon" id="spDivArchivo"><span class="fa fa-file-excel-o"></span></span>
                <div class="has-float-label">
                    <div id="divArchivo" class="" data-content="" title="" data-toggle="popover" data-placement="top" data-trigger="hover" >
                    </div>
                    <label for="divArchivo">Archivo*</label>
                </div>
            </div>
            <asp:HiddenField ID="hfArchivo" runat="server" />
        </div>
    </div>
    <asp:UpdatePanel ID="upaProcesar" runat="server">
        <ContentTemplate>
            <div class="row ">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                    <asp:LinkButton ID="btnProcesar" runat="server" CssClass="btn btn-block btn-primary" Text="" OnClick="btnProcesar_Click"><span class="fa fa-cog"></span> Procesar</asp:LinkButton>
                </div>
            </div>
            <br />
            <div class="row" id="divLog" runat="server" visible="false">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                    <a id="lnkLog" runat="server" class="btn btn-block btn-success" download><span class="fa fa-cloud-download"></span> Descargar log</a>
                </div>
            </div>
            
        </ContentTemplate>
    </asp:UpdatePanel>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/CargaMasiva.js"></script>
</asp:Content>
