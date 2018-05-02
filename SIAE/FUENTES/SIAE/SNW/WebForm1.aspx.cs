//using Microsoft.Reporting.WebForms;//Agregar referenia a Microsoft.ReporViewer.Webforms
//using Microsoft.Office.Interop.Excel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
//using Spire.Xls;

//using net.sf.jasperreports.engine;
//using net.sf.jasperreports.engine.JasperExportManager;
//using net.sf.jasperreports.engine.JasperFillManager;
//using net.sf.jasperreports.engine.JasperPrint;
//net.sf.jasperreports.engine
namespace SNW
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                //ReportViewer rvPrueba = new ReportViewer();
                //rvPrueba.LocalReport.ReportPath = "C:\\Users\\Carlos\\Documents\\Visual Studio 2015\\Projects\\SIAE\\SNW\\reportes\\Título.rdlc";
                //rvPrueba.LocalReport.Refresh();
                //Warning[] warnings;
                //string[] streamids;
                //string mimeType;
                //string encoding;
                //string extension;
                //byte[] bytes = rvPrueba.LocalReport.Render("Excel", "", out mimeType, out encoding, out extension, out streamids, out warnings);
                ////create file stream in create mode
                //FileStream fs = new FileStream("c:\\Temp\\Prueba.xls", FileMode.Create);
                ////create Excel file
                //fs.Write(bytes, 0, bytes.Length);
                //fs.Close();

                //// Get jasper report
                //String jrxmlFileName = "C:\\Users\\Carlos\\JaspersoftWorkspace\\MyReports\\Blank_A4.jrxml";
                //String jasperFileName = "C:\\Users\\Carlos\\JaspersoftWorkspace\\MyReports\\Blank_A4.jasper";
                //String pdfFileName = "C:\\Temp\\Blank_A4.pdf";
                ////JasperCompileManager.compileReportToFile(jrxmlFileName, jasperFileName);
                //DefaultJasperReportsContext dfrContex = null;
                //dfrContex = new DefaultJasperReportsContext();
                //dfrContex.ToString();
                //// Generate jasper print
                //JasperPrint jprint = (JasperPrint)JasperFillManager.fillReport(jasperFileName, null);

                // Export pdf file
                //JasperExportManager.exportReportToPdfFile(jprint, pdfFileName);


                #region Unir EXcel
                //https://www.e-iceblue.com/Tutorials/Spire.XLS/Spire.XLS-Program-Guide/Excel-Merge-Merge-Excel-Files-into-One-with-C-VB.NET.html
                //Workbook newbook = new Workbook();
                //newbook.Version = ExcelVersion.Version2010;
                //newbook.Worksheets.Clear();

                //Workbook tempbook = new Workbook();
                //string[] excelFiles = new String[] { "C:\\Temp\\Prueba.xls", "C:\\Temp\\report1.xls", "C:\\Temp\\Blank_A4.xls" };
                //for (int i = 0; i < excelFiles.Length; i++)
                //{
                //    tempbook.LoadFromFile(excelFiles[i]);
                //    foreach (Worksheet sheet in tempbook.Worksheets)
                //    {
                //        newbook.Worksheets.AddCopy(sheet);
                //    }
                //}
                //newbook.Worksheets[0].Name = "Título";
                //newbook.Worksheets[1].Name = "1 Configuración y Pruebas";
                //newbook.Worksheets[2].Name = "2 Materiales AP";

                //newbook.Worksheets[0].TabColor = System.Drawing.Color.FromArgb(0, 32, 96);
                //newbook.Worksheets[1].TabColor = System.Drawing.Color.FromArgb(0, 32, 96);
                //newbook.Worksheets[2].TabColor = System.Drawing.Color.FromArgb(0, 32, 96);

                //newbook.SaveToFile("C:\\Temp\\result.xlsx", ExcelVersion.Version2010);
                //tempbook.LoadFromFile("C:\\Temp\\result.xlsx");
                //tempbook.Worksheets[tempbook.Worksheets.Count - 1].Remove();
                //newbook.SaveToFile("C:\\Temp\\result2.xlsx", ExcelVersion.Version2010);
                //System.Diagnostics.Process.Start("C:\\Temp\\result2.xlsx");
                #endregion

                //Workbook tempbook = new Workbook();

            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {

        }

        protected void Button2_Click(object sender, EventArgs e)
        {

        }
    }
}
