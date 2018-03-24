using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using System.Xml;
using System.IO;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using System.Diagnostics;

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
                if (Session["lstDocumentos"] != null)
                {
                    List<DocumentoBE> lstDocumentos = (List<DocumentoBE>)Session["lstDocumentos"];
                    gvDocumentos.DataSource = lstDocumentos;
                    gvDocumentos.DataBind();
                    lblTotalRegistros.Text = gvDocumentos.Rows.Count.ToString();
                }
                #endregion
            }

        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            DocumentoBE documentoBE = new DocumentoBE();
            List<DocumentoBE> lstDocumentos = new List<DocumentoBE>();
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
            documentoBE.Tarea.NodoIIBBA.IdNodo = txtIdNodoIIBB.Text;
            if (!txtContratista.Text.Equals(""))
                documentoBE.Tarea.Contratista.IdValor = hfIdContratista.Value;

            try
            {
                lstDocumentos = DocumentoBL.ListarDocumentos(documentoBE);
                Session["lstDocumentos"] = lstDocumentos;
                gvDocumentos.DataSource = lstDocumentos;
                gvDocumentos.DataBind();
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-danger','#lblAlertTitle','Error','#lblAlertBody','" + ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n") + "',true,true);", true);
            }
            lblTotalRegistros.Text = gvDocumentos.Rows.Count.ToString();

        }

        protected void gvDocumentos_RowDataBound(object sender, GridViewRowEventArgs e)
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
                e.Row.Cells[8].Attributes["data-title"] = "Documento";
                e.Row.Cells[9].Attributes["data-title"] = "Acciones";

                //LinkButton btnEditar = (LinkButton)e.Row.FindControl("btnEditar");
                //upaUsuario.Triggers.Add(new AsyncPostBackTrigger { ControlID = btnEditar.UniqueID, EventName ="click"});
                //ScriptManager.GetCurrent(this).RegisterAsyncPostBackControl(btnEditar);
            }
        }

        protected void btnEditar_Click(object sender, EventArgs e)
        {
            LinkButton btnEditar = (LinkButton)sender;
            DocumentoBE documento = new DocumentoBE();
            GridViewRow gvrRegistro = (GridViewRow)btnEditar.NamingContainer;
            UsuarioBE usuarioBE = new UsuarioBE();
            documento.Tarea.IdTarea = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Tarea_IdTarea"].ToString();
            documento.Documento.IdValor = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Documento_IdValor"].ToString();
            documento.Documento.ValorCadena1 = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Documento_ValorCadena1"].ToString();
            documento.Documento.ValorCadena2 = gvDocumentos.DataKeys[gvrRegistro.RowIndex]["Documento_ValorCadena2"].ToString();
            Response.Redirect(documento.Documento.ValorCadena2 + "?IdTarea=" + documento.Tarea.IdTarea + "&IdDocumento=" + documento.Documento.IdValor, true);

            //if (documento.Documento.ValorCadena1.Equals("000001"))//ACTA DE INSTALACION - ACEPTACION PROTOCOLO (SECTORIAL)
            //{
                
            //}

        }

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
            #endregion

            #region COdigoOpenXML

            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
            SqlCommand cmd = new SqlCommand("USP_R_PRUEBAINTERFERENCIA", con);
            con.Open();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@CH_ID_TAREA", documento.Tarea.IdTarea);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            da.Fill(ds);

            //DataTable dt = ds.Tables[0];

            String codNodo = ds.Tables[0].Rows[0]["COD_NODO"].ToString();

          /*  foreach (DataRow row in dt.Rows)
            {
                String codNodo = Convert.ToString(row["COD_NODO"]);
                
            }
            */
            String usuarioWindows = Environment.UserName;
            String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + documento.Documento.ValorCadena1 + " " + documento.Tarea.IdTarea + ".xls";
            String templateName = "~/Reportes/PruebaInterferencia.rpt";

            WorksheetPart wsPart = null;
            WorkbookPart wbPart = null;
            SpreadsheetDocument document = null;
            SheetData sheetData = null;
            //sobreescribe archivos existentes
            File.Copy(Server.MapPath(templateName), excelGenerado, true);
            //abrimos el excel copiado de la planilla
           // document = SpreadsheetDocument.Open(excelGenerado, true);

            UpdateCell(excelGenerado,codNodo,12,"E");

          
            #endregion
        }


        public static void UpdateCell(String docName,String text,uint rowIndex,String columName)
        {
            
            using (SpreadsheetDocument spreadSheet = SpreadsheetDocument.Open(docName, true))
            {
                WorksheetPart worksheetPart = GetWorkSheetPartByName(spreadSheet, "Seleccion de Frecuencia");

                if(worksheetPart != null)
                {

                    Cell cell = GetCell(worksheetPart.Worksheet, columName, rowIndex);
                    cell.CellValue = new CellValue(text);
                    cell.DataType = new EnumValue<CellValues>(CellValues.Number);

                    //guardarel workSheet
                    worksheetPart.Worksheet.Save();
                }

            }

        }
        private static WorksheetPart GetWorkSheetPartByName(SpreadsheetDocument document, String sheetName)
        {

            IEnumerable<Sheet> sheets = document.WorkbookPart.Workbook.GetFirstChild<Sheets>().Elements<Sheet>().Where(s => s.Name == sheetName);

            if(sheets.Count() == 0)
            {
                //the worksheet especificado no existe
                return null;
            }
            String relationShipId = sheets.First().Id.Value;
            WorksheetPart worksheetPart = (WorksheetPart)
                        document.WorkbookPart.GetPartById(relationShipId);
            return worksheetPart;

        }

        private static Cell GetCell(Worksheet worksheet,String columName,uint rowIndex)
        {
            Row row = GetRow(worksheet, rowIndex);
            if (row == null) return null;

            return row.Elements<Cell>().Where(c => String.Compare
                    (c.CellReference.Value, columName + rowIndex, true) == 0).First();

        }

        private static Row GetRow(Worksheet worksheet, uint rowIndex)
        {
            return worksheet.GetFirstChild<SheetData>().
                Elements<Row>().Where(r => r.RowIndex == rowIndex).First();

        }
    }
}