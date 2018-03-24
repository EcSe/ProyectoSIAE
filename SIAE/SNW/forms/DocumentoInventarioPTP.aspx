<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoInventarioPTP.aspx.cs" Inherits="SNW.forms.DocumentoInventarioPTP" %>
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
                        <li class="active"><a href="#tabSerieLogistica" data-toggle="tab"><span class="fa fa-dropbox"></span>&nbsp;11 Serie logística</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabSerieLogistica">
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación A</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieAntenaEstacionAEjemplo" runat="server" alt="Serie Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAntenaEstacionAEjemplo">Serie Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieAntenaEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAntenaEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAntenaEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAntenaEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAntenaEstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionA" class="">
                                            </div>
                                            <label for="divSerieAntenaEstacionA">Serie Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieAntenaEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieODUEstacionAEjemplo" runat="server" alt="Serie ODU (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieODUEstacionAEjemplo">Serie ODU (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieODUEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieODUEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieODUEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieODUEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieODUEstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionA" class="">
                                            </div>
                                            <label for="divSerieODUEstacionA">Serie ODU</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieODUEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSeriePOEEstacionAEjemplo" runat="server" alt="Serie POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePOEEstacionAEjemplo">Serie POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePOEEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePOEEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePOEEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePOEEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePOEEstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionA" class="">
                                            </div>
                                            <label for="divSeriePOEEstacionA">Serie POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSeriePOEEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieCMM4EstacionA">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieCMM4EstacionAEjemplo" runat="server" alt="Serie CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieCMM4EstacionAEjemplo">Serie CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieCMM4EstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieCMM4EstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieCMM4EstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieCMM4EstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieCMM4EstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionA" class="">
                                            </div>
                                            <label for="divSerieCMM4EstacionA">Serie CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieCMM4EstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieUGPSEstacionA">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieUGPSEstacionAEjemplo" runat="server" alt="Serie UGPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieUGPSEstacionAEjemplo">Serie UGPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieUGPSEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieUGPSEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieUGPSEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieUGPSEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieUGPSEstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionA" class="">
                                            </div>
                                            <label for="divSerieUGPSEstacionA">Serie UGPS</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieUGPSEstacionA" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieConversorEstacionA">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionAEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieConversorEstacionAEjemplo" runat="server" alt="Serie Conversor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieConversorEstacionAEjemplo">Serie Conversor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieConversorEstacionA" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieConversorEstacionAComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieConversorEstacionAComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieConversorEstacionAComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieConversorEstacionAComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionA" class="">
                                            </div>
                                            <label for="divSerieConversorEstacionA">Serie Conversor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieConversorEstacionA" runat="server" />
                                </div>
                            </div>
                            <asp:HiddenField ID="hfCMM4A" runat="server" />
                            <div class="row">
                                <h4 class="color-primary text-center" runat="server">Estación B</h4>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieAntenaEstacionBEjemplo" runat="server" alt="Serie Antena (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieAntenaEstacionBEjemplo">Serie Antena (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieAntenaEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieAntenaEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieAntenaEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieAntenaEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieAntenaEstacionBComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieAntenaEstacionB" class="">
                                            </div>
                                            <label for="divSerieAntenaEstacionB">Serie Antena</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieAntenaEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieODUEstacionBEjemplo" runat="server" alt="Serie ODU (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieODUEstacionBEjemplo">Serie ODU (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieODUEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieODUEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieODUEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieODUEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieODUEstacionBComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieODUEstacionB" class="">
                                            </div>
                                            <label for="divSerieODUEstacionB">Serie ODU</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieODUEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSeriePOEEstacionBEjemplo" runat="server" alt="Serie POE (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSeriePOEEstacionBEjemplo">Serie POE (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSeriePOEEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSeriePOEEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSeriePOEEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSeriePOEEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSeriePOEEstacionBComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSeriePOEEstacionB" class="">
                                            </div>
                                            <label for="divSeriePOEEstacionB">Serie POE</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSeriePOEEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieCMM4EstacionB">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieCMM4EstacionBEjemplo" runat="server" alt="Serie CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieCMM4EstacionBEjemplo">Serie CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieCMM4EstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieCMM4EstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieCMM4EstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieCMM4EstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieCMM4EstacionBComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieCMM4EstacionB" class="">
                                            </div>
                                            <label for="divSerieCMM4EstacionB">Serie CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieCMM4EstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieUGPSEstacionB">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieUGPSEstacionBEjemplo" runat="server" alt="Serie UGPS (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieUGPSEstacionBEjemplo">Serie UGPS (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieUGPSEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieUGPSEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieUGPSEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieUGPSEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieUGPSEstacionBComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieUGPSEstacionB" class="">
                                            </div>
                                            <label for="divSerieUGPSEstacionB">Serie UGPS</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieUGPSEstacionB" runat="server" />
                                </div>
                            </div>
                            <div class="row" id="rowSerieConversorEstacionB">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionBEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgSerieConversorEstacionBEjemplo" runat="server" alt="Serie Conversor (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divSerieConversorEstacionBEjemplo">Serie Conversor (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkSerieConversorEstacionB" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spSerieConversorEstacionBComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocSerieConversorEstacionBComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtSerieConversorEstacionBComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfSerieConversorEstacionBComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divSerieConversorEstacionB" class="">
                                            </div>
                                            <label for="divSerieConversorEstacionB">Serie Conversor</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfSerieConversorEstacionB" runat="server" />
                                </div>
                            </div>
                            <asp:HiddenField ID="hfCMM4B" runat="server" />
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
                    <asp:LinkButton ID="btnGuardar" runat="server" CssClass="btn btn-block btn-success" Text="" OnClick="btnGuardar_Click" ><span class="fa fa-floppy-o"></span> Guardar</asp:LinkButton>
                </div>
                <div class="col-xs-12 col-sm-3">
                    <asp:LinkButton ID="btnCancelar" runat="server" CssClass="btn btn-block btn-danger" Text=""><span class="fa fa-times"></span> Cancelar</asp:LinkButton>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <br />
    <br />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphPie" runat="server">
    <script src="../js/forms/DocumentoInventarioPTP.js"></script>
</asp:Content>
