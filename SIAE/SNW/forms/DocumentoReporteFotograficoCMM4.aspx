<%@ Page Title="" Language="C#" MasterPageFile="~/master/MasterPage.Master" AutoEventWireup="true" CodeBehind="DocumentoReporteFotograficoCMM4.aspx.cs" Inherits="SNW.forms.DocumentoReporteFotograficoCMM4" %>

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
                        <li class="active"><a href="#tabReporteFotografico" data-toggle="tab"><span class="fa fa-file-image-o"></span>&nbsp;Reporte Fotográfico</a></li>
                    </ul>
                </div>
                <div class="panel-body">
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabReporteFotografico">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEquipoGPSEtiquetaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEquipoGPSEtiquetaEjemplo" runat="server" alt="Foto 1: Equipo GPS con Etiqueta Enrollada Visible (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEquipoGPSEtiquetaEjemplo">Foto 1: Equipo GPS con Etiqueta Enrollada Visible (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEquipoGPSEtiqueta" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEquipoGPSEtiquetaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEquipoGPSEtiquetaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEquipoGPSEtiquetaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEquipoGPSEtiquetaComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEquipoGPSEtiqueta" class="">
                                            </div>
                                            <label for="divEquipoGPSEtiqueta">Foto 1: Equipo GPS con Etiqueta Enrollada Visible</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEquipoGPSEtiqueta" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoGPS01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoGPS01Ejemplo" runat="server" alt="Foto 2.01: Aterramiento GPS (CMM4) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoGPS01Ejemplo">Foto 2.01: Aterramiento GPS (CMM4) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoGPS01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoGPS01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoGPS01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoGPS01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoGPS01Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoGPS01" class="">
                                            </div>
                                            <label for="divAterramientoGPS01">Foto 2.01: Aterramiento GPS (CMM4)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoGPS01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoGPS02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoGPS02Ejemplo" runat="server" alt="Foto 2.02: Aterramiento GPS (CMM4) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoGPS02Ejemplo">Foto 2.02: Aterramiento GPS (CMM4) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoGPS02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoGPS02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoGPS02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoGPS02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoGPS02Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoGPS02" class="">
                                            </div>
                                            <label for="divAterramientoGPS02">Foto 2.02: Aterramiento GPS (CMM4)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoGPS02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableCNT300Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgRecorridoCableCNT300Ejemplo" runat="server" alt="Foto 3: Recorrido de Cable CNT300 por Torre (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divRecorridoCableCNT300Ejemplo">Foto 3: Recorrido de Cable CNT300 por Torre (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkRecorridoCableCNT300" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spRecorridoCableCNT300Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocRecorridoCableCNT300Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtRecorridoCableCNT300Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfRecorridoCableCNT300Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divRecorridoCableCNT300" class="">
                                            </div>
                                            <label for="divRecorridoCableCNT300">Foto 3: Recorrido de Cable CNT300 por Torre</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfRecorridoCableCNT300" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableCNT30001Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoCableCNT30001Ejemplo" runat="server" alt="Foto 4.01: Aterramiento Cable CNT300 (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableCNT30001Ejemplo">Foto 4.01: Aterramiento Cable CNT300 (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableCNT30001" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableCNT30001Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableCNT30001Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableCNT30001Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableCNT30001Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableCNT30001" class="">
                                            </div>
                                            <label for="divAterramientoCableCNT30001">Foto 4.01: Aterramiento Cable CNT300 (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableCNT30001" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableCNT30002Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgAterramientoCableCNT30002Ejemplo" runat="server" alt="Foto 4.02: Aterramiento Cable CNT300 (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divAterramientoCableCNT30002Ejemplo">Foto 4.02: Aterramiento Cable CNT300 (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkAterramientoCableCNT30002" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spAterramientoCableCNT30002Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocAterramientoCableCNT30002Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtAterramientoCableCNT30002Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfAterramientoCableCNT30002Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divAterramientoCableCNT30002" class="">
                                            </div>
                                            <label for="divAterramientoCableCNT30002">Foto 4.02: Aterramiento Cable CNT300 (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfAterramientoCableCNT30002" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPOECMM401Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEtiquetadoPOECMM401Ejemplo" runat="server" alt="Foto 5.01: Etiquetado del POE/CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoPOECMM401Ejemplo">Foto 5.01: Etiquetado del POE/CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoPOECMM401" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoPOECMM401Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoPOECMM401Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoPOECMM401Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoPOECMM401Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPOECMM401" class="">
                                            </div>
                                            <label for="divEtiquetadoPOECMM401">Foto 5.01: Etiquetado del POE/CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoPOECMM401" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPOECMM402Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEtiquetadoPOECMM402Ejemplo" runat="server" alt="Foto 5.02: Etiquetado del POE/CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEtiquetadoPOECMM402Ejemplo">Foto 5.02: Etiquetado del POE/CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEtiquetadoPOECMM402" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEtiquetadoPOECMM402Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEtiquetadoPOECMM402Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEtiquetadoPOECMM402Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEtiquetadoPOECMM402Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEtiquetadoPOECMM402" class="">
                                            </div>
                                            <label for="divEtiquetadoPOECMM402">Foto 5.02: Etiquetado del POE/CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEtiquetadoPOECMM402" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreCMM4Switch01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPatchCoreCMM4Switch01Ejemplo" runat="server" alt="Foto 6.01: Patch Core del CMM4 al Switch/Router (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCoreCMM4Switch01Ejemplo">Foto 6.01: Patch Core del CMM4 al Switch/Router (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCoreCMM4Switch01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCoreCMM4Switch01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCoreCMM4Switch01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCoreCMM4Switch01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCoreCMM4Switch01Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreCMM4Switch01" class="">
                                            </div>
                                            <label for="divPatchCoreCMM4Switch01">Foto 6.01: Patch Core del CMM4 al Switch/Router (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCoreCMM4Switch01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreCMM4Switch02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPatchCoreCMM4Switch02Ejemplo" runat="server" alt="Foto 6.02: Patch Core del CMM4 al Switch/Router (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPatchCoreCMM4Switch02Ejemplo">Foto 6.02: Patch Core del CMM4 al Switch/Router (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPatchCoreCMM4Switch02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPatchCoreCMM4Switch02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPatchCoreCMM4Switch02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPatchCoreCMM4Switch02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPatchCoreCMM4Switch02Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPatchCoreCMM4Switch02" class="">
                                            </div>
                                            <label for="divPatchCoreCMM4Switch02">Foto 6.02: Patch Core del CMM4 al Switch/Router (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPatchCoreCMM4Switch02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPOECMM401Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPOECMM401Ejemplo" runat="server" alt="Foto 7.01: POE/CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPOECMM401Ejemplo">Foto 7.01: POE/CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPOECMM401" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPOECMM401Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPOECMM401Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPOECMM401Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPOECMM401Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPOECMM401" class="">
                                            </div>
                                            <label for="divPOECMM401">Foto 7.01: POE/CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPOECMM401" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divPOECMM402Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgPOECMM402Ejemplo" runat="server" alt="Foto 7.02: POE/CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divPOECMM402Ejemplo">Foto 7.02: POE/CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkPOECMM402" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spPOECMM402Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocPOECMM402Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtPOECMM402Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfPOECMM402Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divPOECMM402" class="">
                                            </div>
                                            <label for="divPOECMM402">Foto 7.02: POE/CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfPOECMM402" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divTDKLambdaEjemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgTDKLambdaEjemplo" runat="server" alt="Foto 8: TDK Lambda (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divTDKLambdaEjemplo">Foto 8: TDK Lambda (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkTDKLambda" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spTDKLambdaComentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocTDKLambdaComentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtTDKLambdaComentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfTDKLambdaComentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divTDKLambda" class="">
                                            </div>
                                            <label for="divTDKLambda">Foto 8: TDK Lambda</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfTDKLambda" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEnergiaTDKLambda01Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEnergiaTDKLambda01Ejemplo" runat="server" alt="Foto 9.01: Energía TDK-Lambda (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEnergiaTDKLambda01Ejemplo">Foto 9.01: Energía TDK-Lambda (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEnergiaTDKLambda01" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEnergiaTDKLambda01Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEnergiaTDKLambda01Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEnergiaTDKLambda01Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEnergiaTDKLambda01Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEnergiaTDKLambda01" class="">
                                            </div>
                                            <label for="divEnergiaTDKLambda01">Foto 9.01: Energía TDK-Lambda (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEnergiaTDKLambda01" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divEnergiaTDKLambda02Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgEnergiaTDKLambda02Ejemplo" runat="server" alt="Foto 9.02: Energía TDK-Lambda (Inicio/Fin) (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divEnergiaTDKLambda02Ejemplo">Foto 9.02: Energía TDK-Lambda (Inicio/Fin) (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkEnergiaTDKLambda02" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spEnergiaTDKLambda02Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocEnergiaTDKLambda02Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtEnergiaTDKLambda02Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfEnergiaTDKLambda02Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divEnergiaTDKLambda02" class="">
                                            </div>
                                            <label for="divEnergiaTDKLambda02">Foto 9.02: Energía TDK-Lambda (Inicio/Fin)</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfEnergiaTDKLambda02" runat="server" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <span class="input-group-addon"><span class="fa fa-file-image-o"></span></span>
                                        <div class="has-float-label">
                                            <div id="divConexionTDKLambdaCMM4Ejemplo" class="form-control" style="height: 100%;">
                                                <%--<asp:Image ID="imgConfigurationEjemplo" runat="server" />--%>
                                                <img id="imgConexionTDKLambdaCMM4Ejemplo" runat="server" alt="Foto 10: Conexión TDK-Lambda a CMM4 (Ejemplo)" style="width: 100%;" />
                                            </div>
                                            <label for="divConexionTDKLambdaCMM4Ejemplo">Foto 10: Conexión TDK-Lambda a CMM4 (Ejemplo)</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="form-group-base input-group">
                                        <div class="input-group-addon-base">
                                            <div class="checkbox checbox-switch switch-success">
                                                <label>
                                                    <asp:CheckBox ID="chkConexionTDKLambdaCMM4" runat="server" />
                                                    <span title="Aprobado"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <span class="input-group-addon"><span class="fa fa-comment" id="spConexionTDKLambdaCMM4Comentario" data-placement="top" title="Comentario" data-content="" data-toggle="popover" data-trigger="click"></span></span>
                                        <div id="pocConexionTDKLambdaCMM4Comentario" class="hide">
                                            <div class="row">
                                                <textarea id="txtConexionTDKLambdaCMM4Comentario" cols="50" rows="6" maxlength="2000" class="form-control"></textarea>
                                            </div>
                                        </div>
                                        <input type="hidden" id="hfConexionTDKLambdaCMM4Comentario" runat="server"/>
                                        <div class="has-float-label">
                                            <div id="divConexionTDKLambdaCMM4" class="">
                                            </div>
                                            <label for="divConexionTDKLambdaCMM4">Foto 10: Conexión TDK-Lambda a CMM4</label>
                                        </div>
                                    </div>
                                    <asp:HiddenField ID="hfConexionTDKLambdaCMM4" runat="server" />
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
    <script src="../js/forms/DocumentoReporteFotograficoCMM4.js"></script>
</asp:Content>
