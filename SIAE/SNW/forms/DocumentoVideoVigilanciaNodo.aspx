<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoVideoVigilanciaNodo.aspx.cs" Inherits="SNW.forms.DocumentoVideoVigilanciaNodo" %>

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
                        <li class="active"><a href="#tabVideos" data-toggle="tab"><span class="fa fa-file-video-o"></span>&nbsp;Videos</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabVideos">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkVideoCamaraIndoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spVideoCamaraIndoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocVideoCamaraIndoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtVideoCamaraIndoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfVideoCamaraIndoorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divVideoCamaraIndoor" class="">
                                            </div>
                                            <label for="divVideoCamaraIndoor">Video Cámara Indoor</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfVideoCamaraIndoor" runat="server" />
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkVideoCamaraOutdoor" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spVideoCamaraOutdoorComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocVideoCamaraOutdoorComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtVideoCamaraOutdoorComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfVideoCamaraOutdoorComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divVideoCamaraOutdoor" class="">
                                            </div>
                                            <label for="divVideoCamaraOutdoor">Video Cámara Outdoor</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfVideoCamaraOutdoor" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:checkbox id="chkVideoSirena" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spVideoSirenaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocVideoSirenaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtVideoSirenaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfVideoSirenaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divVideoSirena" class="">
                                            </div>
                                            <label for="divVideoSirena">Video Sirena</label>
                                        </div>
                                    </div>
                                    <asp:hiddenfield id="hfVideoSirena" runat="server" />
                                </div>
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
                    <asp:LinkButton ID="btnGuardar" runat="server" CssClass="btn btn-block btn-success" Text="" OnClick="btnGuardar_Click"><span class="fa fa-floppy-o"></span> Guardar</asp:LinkButton>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <asp:LinkButton ID="btnCancelar" runat="server" CssClass="btn btn-block btn-danger" Text=""><span class="fa fa-times"></span> Cancelar</asp:LinkButton>
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
    <script src="../js/forms/DocumentoVideoVigilanciaNodo.js"></script>
</asp:Content>
