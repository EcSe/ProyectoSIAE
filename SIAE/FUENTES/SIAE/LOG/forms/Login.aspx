<%@ Page Title="Login .:SIAE:." Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="LOG.forms.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="mainbox margin-top col-xs-12 col-sm-8 col-md-6 col-lg-4 col-sm-offset-2  col-md-offset-3 col-lg-offset-4">
        <%-- Panel Inicio--%>
        <div class="panel panel-default flipInX animated">
            <div class="panel-heading">
                <div class="panel-title">Iniciar Sesión</div>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12 text-center padding-bottom-interno">
                        <img src="http://localhost/ESTANDAR_SIAE/images/LogoSIAE150.png" style="height: 100%; width: 100%; object-fit: contain; max-width:300px;" id="imgLogo" runat="server"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group input-group">
                            <span class="input-group-addon"><span class="fa fa-user"></span></span>
                            <span class="has-float-label">
                                <asp:TextBox ID="txtUsuario" class="form-control" placeholder=" " runat="server" MaxLength="20" autocomplete="off"></asp:TextBox>
                                <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                <label for="cphContenido_txtUsuario">Usuario</label>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group input-group">
                            <span class="input-group-addon"><span class="fa fa-lock"></span></span>
                            <span class="has-float-label">
                                <asp:TextBox ID="txtPassword" class="form-control" placeholder="••••••••" runat="server" TextMode="Password" MaxLength="50" autocomplete="off"></asp:TextBox>
                                <label for="cphContenido_txtPassword">Password</label>
                            </span>
                        </div>
                    </div>
                </div>
                <asp:UpdatePanel ID="upaIngresar" runat="server">
                    <ContentTemplate>
                        <div class="row">
                            <div class="col-xs-12">
                                <asp:LinkButton ID="btnIngresar" runat="server" CssClass="btn btn-block btn-primary" Text="Ingresar" OnClick="btnIngresar_Click"><span class="fa fa-sign-in"></span> Ingresar</asp:LinkButton>
                            </div>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </div>
        </div>
        <%-- Panel Fin--%>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/Login.js"></script>
</asp:Content>