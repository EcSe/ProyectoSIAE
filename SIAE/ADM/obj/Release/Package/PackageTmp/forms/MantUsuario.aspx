<%@ Page Title="Mantenimiento Usuario .:SIAE:." EnableEventValidation="true" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="MantUsuario.aspx.cs" Inherits="ADM.forms.MantUsuario" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphCabecera" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphContenido" runat="server">
    <div class="row">
        <%--<div class="col-xs-12">--%>
        <h2 class="color-primary text-center">Usuarios</h2>
        <%--</div>--%>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtIdUsuario"><span class="fa fa-barcode"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtIdUsuario" class="form-control" placeholder=" " runat="server" MaxLength="20"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtIdUsuario">Código</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                <span class="has-float-label">
                    <asp:DropDownList class="form-control" ID="ddlTipoDocumento" runat="server">
                    </asp:DropDownList>
                    <label for="cphContenido_ddlTipoDocumento">Tipo Documento</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtNumeroDocumento"><span class="fa fa-hashtag"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtNumeroDocumento" class="form-control" placeholder=" " runat="server" MaxLength="20" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtNumeroDocumento">Número Documento</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon" id="spTxtNombreRazon"><span class="fa fa-id-card-o"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtNombreRazon" class="form-control" placeholder=" " runat="server" MaxLength="100" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtNombreRazon">Nombre Razón</label>
                </span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtApellidoPaterno" class="form-control" placeholder=" " runat="server" MaxLength="50"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtApellidoPaterno">Apellido Paterno</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                <span class="has-float-label">
                    <asp:TextBox ID="txtApellidoMaterno" class="form-control" placeholder=" " runat="server" MaxLength="50"></asp:TextBox>
                    <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                    <label for="cphContenido_txtApellidoMaterno">Apellido Materno</label>
                </span>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="form-group input-group">
                <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                <span class="has-float-label">
                    <asp:DropDownList class="form-control" ID="ddlPerfil" runat="server">
                    </asp:DropDownList>
                    <label for="cphContenido_ddlPerfil">Perfil</label>
                </span>
            </div>
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
                        <span style="float: left;">
                            <asp:LinkButton ID="btnNuevo" runat="server" CssClass="btn btn-block btn-primary" Text="" OnClick="btnNuevo_Click"><span class="fa fa-plus"></span> Nuevo</asp:LinkButton>
                        </span>
                        <span style="float: right;">
                            <small>Total usuarios:</small>
                            <asp:Label ID="lblTotalRegistros" runat="server" CssClass="label label-warning" Text="0" />
                        </span>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 no-more-gridView">
                    <asp:GridView ID="gvUsuarios" runat="server" CssClass=" table-bordered table-striped table-condensed table-hover" AutoGenerateColumns="False" OnRowDataBound="gvUsuarios_RowDataBound" Width="100%" DataKeyNames="IdUsuario">
                        <Columns>
                            <asp:BoundField DataField="IdUsuario" HeaderText="Código" />
                            <asp:BoundField DataField="TipoDocumento.ValorCadena2" HeaderText="T. Doc." />
                            <asp:BoundField DataField="NumeroDocumento" HeaderText="N. Doc." />
                            <asp:BoundField DataField="NombreCompleto" HeaderText="Nombre" />
                            <asp:BoundField DataField="Perfil.ValorCadena1" HeaderText="Perfil" />
                            <asp:BoundField DataField="Contratista.ValorCadena1" HeaderText="Contratista" />
                            <asp:TemplateField HeaderText="Acciones">
                                <ItemTemplate>
                                    <asp:LinkButton ID="btnEditar" runat="server" CssClass="btn btn-default" ToolTip="Editar" OnClick="btnEditar_Click" ClientIDMode="AutoID"><span class="fa fa-pencil"></span></asp:LinkButton>
                                    <asp:LinkButton ID="btnEliminar" runat="server" CssClass="btn btn-danger" ToolTip="Eliminar" OnClick="btnEliminar_Click"><span class="fa fa-trash"></span></asp:LinkButton>
                                </ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                </div>
            </div>
            <asp:HiddenField ID="hfIdContratista" runat="server" />
        </ContentTemplate>
    </asp:UpdatePanel>
    <br />
    <br />
    <!-- Bootstrap Modal Dialog -->
    <asp:UpdatePanel ID="upaUsuario" runat="server" UpdateMode="Conditional">
        <ContentTemplate>
            <div class="modal fade" id="divAlertUsuario" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
                <div class="modal-dialog-full">
                    <div class="modal-content">
                        <%--<div id="divAlertHeader" class="modal-header modal-header-success">--%>
                        <div id="divAlertUsuarioHeader" class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">
                                <asp:Label ID="lblAlertUsuarioTitle" runat="server" Text=""></asp:Label>
                            </h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                                        <span class="has-float-label">
                                            <asp:DropDownList class="form-control" ID="ddlPerfilU" runat="server">
                                            </asp:DropDownList>
                                            <label for="cphContenido_ddlPerfilU">Perfil*</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon" id="spTxtIdUsuarioU"><span class="fa fa-barcode"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtIdUsuarioU" class="form-control" placeholder=" " runat="server" MaxLength="20" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtIdUsuarioU">Código*</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                                        <span class="has-float-label">
                                            <asp:DropDownList class="form-control" ID="ddlTipoDocumentoU" runat="server">
                                            </asp:DropDownList>
                                            <label for="cphContenido_ddlTipoDocumentoU">Tipo Documento*</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon" id="spTxtNumeroDocumentoU"><span class="fa fa-hashtag"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtNumeroDocumentoU" class="form-control" placeholder=" " runat="server" MaxLength="20" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtNumeroDocumentoU">Número Documento*</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon" id="spTxtNombreRazonU"><span class="fa fa-id-card-o"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtNombreRazonU" class="form-control" placeholder=" " runat="server" MaxLength="100" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtNombreRazonU">Nombre Razón*</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtApellidoPaternoU" class="form-control" placeholder=" " runat="server" MaxLength="50"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtApellidoPaternoU">Apellido Paterno</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon"><span class="fa fa-id-card-o"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtApellidoMaternoU" class="form-control" placeholder=" " runat="server" MaxLength="50"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtApellidoMaternoU">Apellido Materno</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon" id="spTxtPasswordU"><span class="fa fa-lock"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtPasswordU" class="form-control" placeholder=" " runat="server" MaxLength="50" TextMode="Password" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtPasswordU">Password*</label>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon" id="spTxtEmailU"><span class="fa fa-envelope"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtEmailU" class="form-control" placeholder=" " runat="server" MaxLength="100" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtEmailU">Correo electrónico*</label>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group input-group">
                                        <span class="input-group-addon" id="spTxtContratistaU"><span class="fa fa-user-circle-o"></span></span>
                                        <span class="has-float-label">
                                            <asp:TextBox ID="txtContratistaU" class="form-control " placeholder=" " runat="server" MaxLength="200" data-placement="top" title="" data-content="" data-toggle="popover" autocomplete="off" data-trigger="hover"></asp:TextBox>
                                            <%--<input class="form-control" id="txtUsuario2" type="text" placeholder="JVERDE" />--%>
                                            <label for="cphContenido_txtContratistaU" id="lblContratistaU">Contratista</label>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <asp:LinkButton ID="btnGuardar" runat="server" CssClass="btn btn-success" Text="" OnClick="btnGuardar_Click"><span class="fa fa-floppy-o"></span> Guardar</asp:LinkButton>
                            <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">
                                <span class="fa fa-times"></span> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Bootstrap Modal Dialog -->
            <div class="modal fade" id="divConfirm" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <%--<div id="divAlertHeader" class="modal-header modal-header-success">--%>
                        <div id="divConfirmHeader" class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">
                                <asp:Label ID="lblConfirmTitle" runat="server" Text=""></asp:Label></h4>
                        </div>
                        <div class="modal-body">
                            <asp:Label ID="lblConfirmBody" runat="server" Text=""></asp:Label>
                        </div>
                        <div class="modal-footer">
                            <asp:LinkButton ID="btnAceptar" runat="server" CssClass="btn btn-success" Text="" OnClick="btnAceptar_Click" ><span class="fa fa-check"></span> Aceptar</asp:LinkButton>
                            <button class="btn btn-danger" data-dismiss="modal" aria-hidden="true">
                                <span class="fa fa-times"></span> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <asp:HiddenField ID="hfIdContratistaU" runat="server" />
            <asp:HiddenField ID="hfMetodo" runat="server" />
        </ContentTemplate>
        <Triggers>
            <asp:AsyncPostBackTrigger ControlID="btnNuevo" EventName="Click" />
        </Triggers>
    </asp:UpdatePanel>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/MantUsuario.js"></script>
</asp:Content>

