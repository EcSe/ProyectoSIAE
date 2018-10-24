using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.UI.HtmlControls;
using System.IO;
using System.IO.Compression;

namespace SNW.forms
{
    public partial class BandejaNodo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            //DocumentoBE documentoBE = new DocumentoBE();
            NodoBE Nodo = new NodoBE();
            //List<DocumentoBE> lstDocumentos = new List<DocumentoBE>();
            List<NodoBE> lstNodos = new List<NodoBE>();
            Nodo.IdNodo = txtIdNodo.Text;
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
            //if (!txtContratista.Text.Equals(""))
            //    Tarea.Contratista.IdValor = hfIdContratista.Value;

            try
            {
                lstNodos = NodoBL.ListarNodos(Nodo);
                Session["lstNodos"] = lstNodos;
                gvNodos.DataSource = lstNodos;
                gvNodos.DataBind();
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-danger','#lblAlertTitle','Error','#lblAlertBody','" + ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n") + "',true,true);", true);
            }
            lblTotalRegistros.Text = gvNodos.Rows.Count.ToString();
        }

        protected void btnDescargarZip_Click(object sender, EventArgs e)
        {
            LinkButton btnDescargarZip = (LinkButton)sender;
            GridViewRow gvrNodos = (GridViewRow)btnDescargarZip.NamingContainer;
            DocumentoBE documento = new DocumentoBE();

            EntidadDetalleBE rutaVirtualTemporalBE = new EntidadDetalleBE();
            rutaVirtualTemporalBE.Entidad.IdEntidad = "CONF";
            rutaVirtualTemporalBE.IdValor = "RUTA_VIRT_TEMP";
            rutaVirtualTemporalBE = EntidadDetalleBL.ListarEntidadDetalle(rutaVirtualTemporalBE)[0];

            documento.Tarea.NodoIIBBA.IdNodo = gvNodos.DataKeys[gvrNodos.RowIndex]["IdNodo"].ToString();
            //documento.Tarea.NodoIIBBA.IdNodo =
            //    Session["Tarea.NodoIIBBA.IdNodo"].ToString();

            ZipBL zip = new ZipBL();

            //DESCARGA LAS IMAGENES DENTRO DE SUS CARPETAS ZIPS RESPECTIVAS
            zip.DescargarZip(documento.Tarea.NodoIIBBA.IdNodo);
            //DESCARGA LOS EXCELS DENTRO DE LAS CARPETAS RESPECTIVAS PARA SU POSTERIOR ZIPEADO
            // zip.DescargarExcelInZip(documento.Tarea.NodoIIBBA.IdNodo);

          /*  String ruta = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\";

            ZipFile.CreateFromDirectory(ruta + documento.Tarea.NodoIIBBA.IdNodo, ruta + documento.Tarea.NodoIIBBA.IdNodo + ".zip", CompressionLevel.Fastest, true);
            */
            String nombreCarpetaZip = documento.Tarea.NodoIIBBA.IdNodo + ".zip";

            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "impresion", "window.open('" + rutaVirtualTemporalBE.ValorCadena1 + "/" + nombreCarpetaZip + "');", true);

        }

        protected void gvNodos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Nodo";
                e.Row.Cells[1].Attributes["data-title"] = "Nombre";
                e.Row.Cells[2].Attributes["data-title"] = "Región";
                e.Row.Cells[3].Attributes["data-title"] = "Acciones";
                
            }
        }
    }
}