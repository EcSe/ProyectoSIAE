<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoInstalacionPozoTierra.aspx.cs" Inherits="SNW.forms.DocumentoInstalacionPozoTierra" %>

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
                        <li class="active"><a href="#tabPozoTierra5Ohm" data-toggle="tab"><span class="fa fa-bolt"></span>&nbsp;POZO A TIERRA 5 Ohm</a></li>
                        <li><a href="#tabPozoTierra10Ohm" data-toggle="tab"><span class="fa fa-bolt"></span>&nbsp;POZO A TIERRA 10 Ohm</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabPozoTierra5Ohm">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">1. Fotografía frontal de la IIBB</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5FrontalIIBBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5FrontalIIBBEjemplo" runat="server" alt="Frontal de la IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5FrontalIIBBEjemplo">Frontal de la IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5FrontalIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5FrontalIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5FrontalIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5FrontalIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5FrontalIIBBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5FrontalIIBB" class="">
                                            </div>
                                            <label for="divPT5FrontalIIBB">Frontal de la IIBB</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5FrontalIIBB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">2. Fotografía de la ubicación del pozo a tierra antes de ser instalado</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5UbicacionPTAntesInstalacionEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5UbicacionPTAntesInstalacionEjemplo" runat="server" alt="Ubicación del Pozo a Tierra Antes de ser Instalado (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5UbicacionPTAntesInstalacionEjemplo">Ubicación del pozo a Tierra Antes de ser Instalado (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5UbicacionPTAntesInstalacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5UbicacionPTAntesInstalacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5UbicacionPTAntesInstalacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5UbicacionPTAntesInstalacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5UbicacionPTAntesInstalacionComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5UbicacionPTAntesInstalacion" class="">
                                            </div>
                                            <label for="divPT5UbicacionPTAntesInstalacion">Ubicación del Pozo a Tierra Antes de ser Instalado</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5UbicacionPTAntesInstalacion" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">3. Fotografía de instalación de pozo a tierra</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaZanjaAbiertaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaZanjaAbiertaEjemplo" runat="server" alt="Panoramica de la zanja abierta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaZanjaAbiertaEjemplo">Panoramica de la zanja abierta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaZanjaAbierta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaZanjaAbiertaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaZanjaAbiertaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaZanjaAbiertaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaZanjaAbiertaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaZanjaAbierta" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaZanjaAbierta">Panoramica de la zanja abierta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaZanjaAbierta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo" runat="server" alt="Panorámica Vertido de Tierra Cultivo cernida en Zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo">Panorámica Vertido de Tierra Cultivo cernida en Zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja">Panorámica Vertido de Tierra Cultivo cernida en Zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo" runat="server" alt="Panorámica del vertido de la sal granulada en la zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo">Panorámica del vertido de la sal granulada en la zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja">Panorámica del vertido de la sal granulada en la zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo" runat="server" alt="Panorámica Vertido de la Disolución del Cemento Conductivo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo">Panorámica Vertido de la Disolución del Cemento Conductivo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo">Panorámica Vertido de la Disolución del Cemento Conductivo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo" runat="server" alt="Panorámica de la Colocación del Fleje de Cobre 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo">Panorámica de la Colocación del Fleje de Cobre 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaColocacionFlejeCobre01" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaColocacionFlejeCobre01">Panorámica de la Colocación del Fleje de Cobre 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo" runat="server" alt="Panorámica de la Colocación del Fleje de Cobre 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo">Panorámica de la Colocación del Fleje de Cobre 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaColocacionFlejeCobre02" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaColocacionFlejeCobre02">Panorámica de la Colocación del Fleje de Cobre 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo" runat="server" alt="Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo">Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje">Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo" runat="server" alt="Panorámica Vertido Sal Granu. Luego del Cemento Conductivo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo">Panorámica Vertido Sal Granu. Luego del Cemento Conductivo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo">Panorámica Vertido Sal Granu. Luego del Cemento Conductivo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo" runat="server" alt="Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo">Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja">Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo" runat="server" alt="Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo">Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja" class="">
                                            </div>
                                            <label for="divPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja">Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">4. Fotografía de medición del pozo a tierra</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5MedicionPTPanoramicaMedicionPT01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT5MedicionPTPanoramicaMedicionPT01Ejemplo" runat="server" alt="MEDICION 1: Foto panorámica de medición de pozo a tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5MedicionPTPanoramicaMedicionPT01Ejemplo">MEDICION 1: Foto panorámica de medición de pozo a tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5MedicionPTPanoramicaMedicionPT01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5MedicionPTPanoramicaMedicionPT01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5MedicionPTPanoramicaMedicionPT01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5MedicionPTPanoramicaMedicionPT01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5MedicionPTPanoramicaMedicionPT01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5MedicionPTPanoramicaMedicionPT01" class="">
                                            </div>
                                            <label for="divPT5MedicionPTPanoramicaMedicionPT01">MEDICION 1: Foto panorámica de medición de pozo a tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5MedicionPTPanoramicaMedicionPT01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5MedicionPTPanoramicaMedicionPT02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT5MedicionPTPanoramicaMedicionPT02Ejemplo" runat="server" alt="MEDICION 2: Foto panorámica de medición de pozo a tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5MedicionPTPanoramicaMedicionPT02Ejemplo">MEDICION 2: Foto panorámica de medición de pozo a tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5MedicionPTPanoramicaMedicionPT02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5MedicionPTPanoramicaMedicionPT02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5MedicionPTPanoramicaMedicionPT02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5MedicionPTPanoramicaMedicionPT02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5MedicionPTPanoramicaMedicionPT02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5MedicionPTPanoramicaMedicionPT02" class="">
                                            </div>
                                            <label for="divPT5MedicionPTPanoramicaMedicionPT02">MEDICION 2: Foto panorámica de medición de pozo a tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5MedicionPTPanoramicaMedicionPT02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT5MedicionPTPanoramicaMedicionPT03Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT5MedicionPTPanoramicaMedicionPT03Ejemplo" runat="server" alt="MEDICION 3: Foto panorámica de medición de pozo a tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT5MedicionPTPanoramicaMedicionPT03Ejemplo">MEDICION 3: Foto panorámica de medición de pozo a tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT5MedicionPTPanoramicaMedicionPT03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT5MedicionPTPanoramicaMedicionPT03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT5MedicionPTPanoramicaMedicionPT03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT5MedicionPTPanoramicaMedicionPT03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT5MedicionPTPanoramicaMedicionPT03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT5MedicionPTPanoramicaMedicionPT03" class="">
                                            </div>
                                            <label for="divPT5MedicionPTPanoramicaMedicionPT03">MEDICION 3: Foto panorámica de medición de pozo a tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT5MedicionPTPanoramicaMedicionPT03" runat="server" />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabPozoTierra10Ohm">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">1. Fotografía frontal de la IIBB</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10FrontalIIBBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10FrontalIIBBEjemplo" runat="server" alt="Frontal de la IIBB (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10FrontalIIBBEjemplo">Frontal de la IIBB (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10FrontalIIBB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10FrontalIIBBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10FrontalIIBBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10FrontalIIBBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10FrontalIIBBComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10FrontalIIBB" class="">
                                            </div>
                                            <label for="divPT10FrontalIIBB">Frontal de la IIBB</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10FrontalIIBB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">2. Fotografía de la ubicación del pozo a tierra antes de ser instalado</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10UbicacionPTAntesInstalacionEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10UbicacionPTAntesInstalacionEjemplo" runat="server" alt="Ubicación del Pozo a Tierra Antes de ser Instalado (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10UbicacionPTAntesInstalacionEjemplo">Ubicación del pozo a Tierra Antes de ser Instalado (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10UbicacionPTAntesInstalacion" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10UbicacionPTAntesInstalacionComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10UbicacionPTAntesInstalacionComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10UbicacionPTAntesInstalacionComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10UbicacionPTAntesInstalacionComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10UbicacionPTAntesInstalacion" class="">
                                            </div>
                                            <label for="divPT10UbicacionPTAntesInstalacion">Ubicación del Pozo a Tierra Antes de ser Instalado</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10UbicacionPTAntesInstalacion" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">3. Fotografía de instalación de pozo a tierra</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaZanjaAbiertaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaZanjaAbiertaEjemplo" runat="server" alt="Panoramica de la zanja abierta (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaZanjaAbiertaEjemplo">Panoramica de la zanja abierta (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaZanjaAbierta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaZanjaAbiertaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaZanjaAbiertaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaZanjaAbiertaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaZanjaAbiertaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaZanjaAbierta" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaZanjaAbierta">Panoramica de la zanja abierta</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaZanjaAbierta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo" runat="server" alt="Panorámica Vertido de Tierra Cultivo cernida en Zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo">Panorámica Vertido de Tierra Cultivo cernida en Zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja">Panorámica Vertido de Tierra Cultivo cernida en Zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo" runat="server" alt="Panorámica del vertido de la sal granulada en la zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo">Panorámica del vertido de la sal granulada en la zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja">Panorámica del vertido de la sal granulada en la zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo" runat="server" alt="Panorámica Vertido de la Disolución del Cemento Conductivo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo">Panorámica Vertido de la Disolución del Cemento Conductivo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo">Panorámica Vertido de la Disolución del Cemento Conductivo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo" runat="server" alt="Panorámica de la Colocación del Fleje de Cobre 01 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo">Panorámica de la Colocación del Fleje de Cobre 01 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaColocacionFlejeCobre01" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaColocacionFlejeCobre01">Panorámica de la Colocación del Fleje de Cobre 01</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo" runat="server" alt="Panorámica de la Colocación del Fleje de Cobre 02 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo">Panorámica de la Colocación del Fleje de Cobre 02 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaColocacionFlejeCobre02" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaColocacionFlejeCobre02">Panorámica de la Colocación del Fleje de Cobre 02</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo" runat="server" alt="Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo">Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje">Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo" runat="server" alt="Panorámica Vertido Sal Granu. Luego del Cemento Conductivo (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo">Panorámica Vertido Sal Granu. Luego del Cemento Conductivo (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo">Panorámica Vertido Sal Granu. Luego del Cemento Conductivo</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo" runat="server" alt="Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo">Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja">Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo" runat="server" alt="Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo">Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja" class="">
                                            </div>
                                            <label for="divPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja">Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">4. Fotografía de medición del pozo a tierra</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10MedicionPTPanoramicaMedicionPT01Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT10MedicionPTPanoramicaMedicionPT01Ejemplo" runat="server" alt="MEDICION 1:Foto panorámica de medición de pozo a tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10MedicionPTPanoramicaMedicionPT01Ejemplo">MEDICION 1:Foto panorámica de medición de pozo a tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10MedicionPTPanoramicaMedicionPT01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10MedicionPTPanoramicaMedicionPT01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10MedicionPTPanoramicaMedicionPT01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10MedicionPTPanoramicaMedicionPT01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10MedicionPTPanoramicaMedicionPT01Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10MedicionPTPanoramicaMedicionPT01" class="">
                                            </div>
                                            <label for="divPT10MedicionPTPanoramicaMedicionPT01">MEDICION 1:Foto panorámica de medición de pozo a tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10MedicionPTPanoramicaMedicionPT01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10MedicionPTPanoramicaMedicionPT02Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT10MedicionPTPanoramicaMedicionPT02Ejemplo" runat="server" alt="MEDICION 2:Foto panorámica de medición de pozo a tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10MedicionPTPanoramicaMedicionPT02Ejemplo">MEDICION 2:Foto panorámica de medición de pozo a tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10MedicionPTPanoramicaMedicionPT02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10MedicionPTPanoramicaMedicionPT02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10MedicionPTPanoramicaMedicionPT02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10MedicionPTPanoramicaMedicionPT02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10MedicionPTPanoramicaMedicionPT02Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10MedicionPTPanoramicaMedicionPT02" class="">
                                            </div>
                                            <label for="divPT10MedicionPTPanoramicaMedicionPT02">MEDICION 2:Foto panorámica de medición de pozo a tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10MedicionPTPanoramicaMedicionPT02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPT10MedicionPTPanoramicaMedicionPT03Ejemplo" class="form-control" style="height: 100%;">
                                                <img id="imgPT10MedicionPTPanoramicaMedicionPT03Ejemplo" runat="server" alt="MEDICION 3:Foto panorámica de medición de pozo a tierra (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPT10MedicionPTPanoramicaMedicionPT03Ejemplo">MEDICION 3:Foto panorámica de medición de pozo a tierra (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPT10MedicionPTPanoramicaMedicionPT03" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPT10MedicionPTPanoramicaMedicionPT03Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPT10MedicionPTPanoramicaMedicionPT03Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPT10MedicionPTPanoramicaMedicionPT03Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPT10MedicionPTPanoramicaMedicionPT03Comentario" runat="server" />
                                        <div class="has-float-label">
                                            <div id="divPT10MedicionPTPanoramicaMedicionPT03" class="">
                                            </div>
                                            <label for="divPT10MedicionPTPanoramicaMedicionPT03">MEDICION 3:Foto panorámica de medición de pozo a tierra</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPT10MedicionPTPanoramicaMedicionPT03" runat="server" />
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
    <script src="../js/forms/DocumentoInstalacionPozoTierra.js"></script>
</asp:Content>
