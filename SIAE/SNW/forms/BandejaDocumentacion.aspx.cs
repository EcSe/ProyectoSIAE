using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.UI.HtmlControls;

namespace SNW.forms
{
    public partial class BandejaDocumentacion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                #region Asignar el contratista
                if (!Usuario.Perfil.IdValor.Equals("000001"))
                {
                    txtContratista.ReadOnly = true;
                    //txtContratista.Text = Usuario.Contratista.NombreCompleto;
                    //hfIdContratista.Value = Usuario.Contratista.TipoDocumento.IdValor + Usuario.Contratista.NumeroDocumento;
                    txtContratista.Text = Usuario.Contratista.ValorCadena1;
                    hfIdContratista.Value = Usuario.Contratista.IdValor;
                }
                #endregion

                #region Verificar si hubo una lista previa
                if (Session["lstTareas"] != null)
                {
                    List<TareaBE> lstTareas = (List<TareaBE>)Session["lstTareas"];
                    gvTareas.DataSource = lstTareas;
                    gvTareas.DataBind();
                    lblTotalRegistros.Text = gvTareas.Rows.Count.ToString();
                }
                #endregion
            }

        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            //DocumentoBE documentoBE = new DocumentoBE();
            TareaBE Tarea = new TareaBE();
            //List<DocumentoBE> lstDocumentos = new List<DocumentoBE>();
            List<TareaBE> lstTareas = new List<TareaBE>();
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
            Tarea.NodoIIBBA.IdNodo = txtIdNodoIIBB.Text;
            if (!txtContratista.Text.Equals(""))
                Tarea.Contratista.IdValor = hfIdContratista.Value;

            try
            {
                lstTareas = TareaBL.ListarTareas(Tarea,"Z");
                Session["lstTareas"] = lstTareas;
                gvTareas.DataSource = lstTareas;
                gvTareas.DataBind();
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-danger','#lblAlertTitle','Error','#lblAlertBody','" + ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n") + "',true,true);", true);
            }
            lblTotalRegistros.Text = gvTareas.Rows.Count.ToString();

        }

        protected void gvTareas_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Tarea";
                e.Row.Cells[1].Attributes["data-title"] = "Sector";
                e.Row.Cells[2].Attributes["data-title"] = "T. Tarea";
                e.Row.Cells[3].Attributes["data-title"] = "T. Nodo A";
                e.Row.Cells[4].Attributes["data-title"] = "Nodo A";
                e.Row.Cells[5].Attributes["data-title"] = "T. Nodo B";
                e.Row.Cells[6].Attributes["data-title"] = "Nodo B";
                e.Row.Cells[7].Attributes["data-title"] = "Contratista";
                //e.Row.Cells[8].Attributes["data-title"] = "Documento";
                //e.Row.Cells[9].Attributes["data-title"] = "Acciones";
                e.Row.Cells[8].Attributes["data-title"] = "Acciones";

                //LinkButton btnEditar = (LinkButton)e.Row.FindControl("btnEditar");
                //upaUsuario.Triggers.Add(new AsyncPostBackTrigger { ControlID = btnEditar.UniqueID, EventName ="click"});
                //ScriptManager.GetCurrent(this).RegisterAsyncPostBackControl(btnEditar);
            }
        }

        //protected void btnEditar_Click(object sender, EventArgs e)
        //{
        //    LinkButton btnEditar = (LinkButton)sender;
        //    DocumentoBE documento = new DocumentoBE();
        //    GridViewRow gvrRegistro = (GridViewRow)btnEditar.NamingContainer;
        //    UsuarioBE usuarioBE = new UsuarioBE();
        //    documento.Tarea.IdTarea = gvTareas.DataKeys[gvrRegistro.RowIndex]["Tarea_IdTarea"].ToString();
        //    documento.Documento.IdValor = gvTareas.DataKeys[gvrRegistro.RowIndex]["Documento_IdValor"].ToString();
        //    documento.Documento.ValorCadena1 = gvTareas.DataKeys[gvrRegistro.RowIndex]["Documento_ValorCadena1"].ToString();
        //    documento.Documento.ValorCadena2 = gvTareas.DataKeys[gvrRegistro.RowIndex]["Documento_ValorCadena2"].ToString();
        //    Response.Redirect(documento.Documento.ValorCadena2 + "?IdTarea=" + documento.Tarea.IdTarea + "&IdDocumento=" + documento.Documento.IdValor, true);


        //}

        protected void btnDescargar_Click(object sender, EventArgs e)
        {
                       LinkButton btnExportar = (LinkButton)sender;
   GridViewRow gvrRegistro = (GridViewRow)btnExportar.NamingContainer;
   DocumentoBE documento = new DocumentoBE();

             documento.Tarea.IdTarea = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Tarea_IdTarea"].ToString();
            documento.Documento.IdValor = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Documento_IdValor"].ToString();
            documento.Documento.ValorCadena1 = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Documento_ValorCadena1"].ToString();
            documento.Tarea.NodoIIBBA.IdNodo = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Tarea_IdNodo"].ToString();

            #region CodigoBueno
            /*
                         try
                        {
                            String rutaReporte = "";


                            switch (documento.Documento.IdValor)
                            {
                                case "000003": rutaReporte = "~/Reportes/PruebaInterferencia.rpt"; break;
                                case "000004": rutaReporte = "~/Reportes/InventarioPMP.rpt"; break;
                                case "000011": rutaReporte = "~/Reportes/PruebaServicioDITG_PMP.rpt"; break;
                                case "000017": rutaReporte = "~/Reportes/InstalacionPozoTierraTipoA.rpt"; break;
                                case "000007": rutaReporte = "~/Reportes/ProtocoloInstalacion.rpt"; break;

                            }

                            ReportDocument reporte = new ReportDocument();
                            reporte.Load(Server.MapPath(rutaReporte));

                            reporte.SetDatabaseLogon("sa", "123456", "ELVIN-MACBOOK", "SIAEDES");
                            reporte.SetParameterValue("@CH_ID_TAREA", documento.Tarea.IdTarea);

                            String usuarioWindows = Environment.UserName;
                            ExportOptions options;
                            DiskFileDestinationOptions diskFile = new DiskFileDestinationOptions();
                            ExcelFormatOptions format = new ExcelFormatOptions();
                            format.ExcelUseConstantColumnWidth = true;
                            diskFile.DiskFileName = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + documento.Documento.ValorCadena1 + " " + documento.Tarea.IdTarea + ".xls";
                            options = reporte.ExportOptions;
                            options.ExportDestinationType = ExportDestinationType.DiskFile;
                            options.ExportFormatType = ExportFormatType.Excel;
                            options.ExportDestinationOptions = diskFile;
                            options.ExportFormatOptions = format;

                            reporte.Export();
                            MessageBox.Show("Reporte Exportado Correctamente");
                            reporte.Close();
                            reporte.Dispose();

                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show(ex.ToString());

                        }
 
    */

        }

        protected void btnBuscarDocumentos_Click(object sender, EventArgs e)
        {
            LinkButton btnBuscarDocumentos = (LinkButton)sender;
            //String strIdUsuario = "";
            GridViewRow gvrTarea = (GridViewRow)btnBuscarDocumentos.NamingContainer;
            DocumentoBE Documento = new DocumentoBE();
            //strIdUsuario = gvUsuarios.DataKeys[gvrRegistro.RowIndex].Values[0].ToString();
            Documento.Tarea.IdTarea = gvTareas.DataKeys[gvrTarea.RowIndex]["IdTarea"].ToString();
            Documento.Tarea.TipoTarea.ValorCadena1 = gvTareas.DataKeys[gvrTarea.RowIndex]["TipoTarea_ValorCadena1"].ToString();
            Documento.Tarea.NodoIIBBA.IdNodo = gvTareas.DataKeys[gvrTarea.RowIndex]["NodoIIBBA_IdNodo"].ToString();
            //hfMetodo.Value = "U";//Update
            //LimpiarPopup();
            //InicializarPopup();
            AsignarDocumentos(Documento);
            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlertDocumento','#divAlertDocumentoHeader','modal-header-primary','#cphContenido_lblAlertDocumentoTitle','Documentos de Nodo: "+ Documento.Tarea.IdTarea + " || Tipo Tarea: " + Documento.Tarea.TipoTarea.ValorCadena1 + " || Nodo o IIBB A: " + Documento.Tarea.NodoIIBBA.IdNodo + "','','','static',false);", true);
            upaAlertDocumento.Update();
        }

        private void AsignarDocumentos(DocumentoBE Documento)
        {
            List<DocumentoBE> lstDocumentos = new List<DocumentoBE>();
            lstDocumentos = DocumentoBL.ListarDocumentos(Documento);

            gvDocumentos.DataSource = lstDocumentos;
            gvDocumentos.DataBind();
            lblTotalDocumentos.Text = gvDocumentos.Rows.Count.ToString();
        }

        protected void gvDocumentos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                DocumentoBE Documento = (DocumentoBE)e.Row.DataItem;

                //e.Row.Cells[0].Attributes["data-title"] = "Tarea";
                //e.Row.Cells[1].Attributes["data-title"] = "Sector";
                //e.Row.Cells[2].Attributes["data-title"] = "T. Tarea";
                //e.Row.Cells[3].Attributes["data-title"] = "T. Nodo A";
                //e.Row.Cells[4].Attributes["data-title"] = "Nodo A";
                //e.Row.Cells[5].Attributes["data-title"] = "T. Nodo B";
                //e.Row.Cells[6].Attributes["data-title"] = "Nodo B";
                //e.Row.Cells[7].Attributes["data-title"] = "Contratista";
                e.Row.Cells[0].Attributes["data-title"] = "Documento";
                e.Row.Cells[1].Attributes["data-title"] = "Acciones";

                HtmlAnchor lnkEditar = (HtmlAnchor)e.Row.FindControl("lnkEditar");
                lnkEditar.HRef = Documento.Documento.ValorCadena2 + "?IdTarea=" + Documento.Tarea.IdTarea + "&IdDocumento=" + Documento.Documento.IdValor;

                //btnEditar.PostBackUrl = "google.com";
                //upaUsuario.Triggers.Add(new AsyncPostBackTrigger { ControlID = btnEditar.UniqueID, EventName ="click"});
                //ScriptManager.GetCurrent(this).RegisterAsyncPostBackControl(btnEditar);


            }
        }

    }
}