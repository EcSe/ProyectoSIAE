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

            documento.Tarea.NodoIIBBA.IdNodo = gvNodos.DataKeys[gvrNodos.RowIndex]["IdNodo"].ToString();

            ZipBL zip = new ZipBL();

            zip.DescargarZip(documento.Tarea.NodoIIBBA.IdNodo);

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