using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.UI.HtmlControls;
using System.Windows.Forms;


namespace SNW.forms
{
    public partial class BandejaAvanceAprobacion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
                EntidadDetalleBE entidadDefecto = new EntidadDetalleBE();

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

                #region Listar tipo de documento
                entidadDetalleBE.Entidad.IdEntidad = "PROY";
                entidadDefecto.IdValor = "";
                entidadDefecto.ValorCadena1 = "--TODOS--";
                UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlProyecto, "IdValor", "ValorCadena1", entidadDefecto);
                #endregion

                #region Verificar si hubo una lista previa
                if (Session["lstDocumentos"] != null)
                {
                    List<DocumentoBE> lstDocumentos = (List<DocumentoBE>)Session["lstDocumentos"];
                    gvAvanceAprobacion.DataSource = lstDocumentos;
                    gvAvanceAprobacion.DataBind();
                    lblTotalRegistros.Text = gvAvanceAprobacion.Rows.Count.ToString();
                }
                #endregion
            }
        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            //DocumentoBE documentoBE = new DocumentoBE();
            DocumentoBE Documento = new DocumentoBE();
            //List<DocumentoBE> lstDocumentos = new List<DocumentoBE>();
            List<DocumentoBE> lstDocumentos = new List<DocumentoBE>();
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
            Documento.Tarea.NodoIIBBA.IdNodo = txtIdNodoIIBB.Text;
            if (!txtContratista.Text.Equals(""))
                Documento.Tarea.Contratista.IdValor = hfIdContratista.Value;
            Documento.Tarea.Proyecto.IdValor = ddlProyecto.SelectedValue;

            try
            {
                lstDocumentos = DocumentoBL.ListarDocumentos(Documento);
                Session["lstDocumentos"] = lstDocumentos;
                gvAvanceAprobacion.DataSource = lstDocumentos;
                gvAvanceAprobacion.DataBind();
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-danger','#lblAlertTitle','Error','#lblAlertBody','" + ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n") + "',true,true);", true);
            }
            lblTotalRegistros.Text = gvAvanceAprobacion.Rows.Count.ToString();

        }

        protected void gvAvanceAprobacion_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                DocumentoBE Documento = (DocumentoBE)e.Row.DataItem;
                String strClass = "";

                e.Row.Cells[0].Attributes["data-title"] = "Tarea";
                //e.Row.Cells[1].Attributes["data-title"] = "Sector";
                e.Row.Cells[1].Attributes["data-title"] = "Proyecto";
                e.Row.Cells[2].Attributes["data-title"] = "T. Tarea";
                e.Row.Cells[3].Attributes["data-title"] = "T. Nodo A";
                e.Row.Cells[4].Attributes["data-title"] = "Nodo A";
                e.Row.Cells[5].Attributes["data-title"] = "T. Nodo B";
                e.Row.Cells[6].Attributes["data-title"] = "Nodo B";
                e.Row.Cells[7].Attributes["data-title"] = "Contratista";
                e.Row.Cells[8].Attributes["data-title"] = "Documento";
                e.Row.Cells[9].Attributes["data-title"] = "P. Avance";
                e.Row.Cells[10].Attributes["data-title"] = "P. Aprobado";

                #region Porcentaje avance
                HtmlGenericControl divPorcentajeAvance = (HtmlGenericControl)e.Row.FindControl("divPorcentajeAvance");
                if (Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAvance * 100)) < 50)
                    strClass = "progress-bar progress-bar-danger";
                else if (Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAvance * 100)) < 100)
                    strClass = "progress-bar progress-bar-warning";
                else
                    strClass = "progress-bar progress-bar-success";
                divPorcentajeAvance.Attributes.Add("class", strClass);
                divPorcentajeAvance.Attributes.Add("style", "width: " + Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAvance * 100)).ToString() + "%;");
                divPorcentajeAvance.InnerHtml = Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAvance * 100)).ToString() + "%";
                #endregion

                #region Porcentaje aprobado
                HtmlGenericControl divPorcentajeAprobado = (HtmlGenericControl)e.Row.FindControl("divPorcentajeAprobado");
                if (Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAprobado * 100)) < 50)
                    strClass = "progress-bar progress-bar-danger";
                else if (Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAprobado * 100)) < 100)
                    strClass = "progress-bar progress-bar-warning";
                else
                    strClass = "progress-bar progress-bar-success";
                divPorcentajeAprobado.Attributes.Add("class", strClass);
                divPorcentajeAprobado.Attributes.Add("style", "width: " + Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAprobado * 100)).ToString() + "%;");
                divPorcentajeAprobado.InnerHtml = Convert.ToInt32(Math.Ceiling(Documento.PorcentajeAprobado * 100)).ToString() + "%";
                #endregion

            }
            else if (e.Row.RowType == DataControlRowType.Footer)
            {
                String strClass = "";
                e.Row.Cells[9].Attributes["data-title"] = "P. Avance";
                e.Row.Cells[10].Attributes["data-title"] = "P. Aprobado";
                List<DocumentoBE> lstDocumentos = (List<DocumentoBE>)Session["lstDocumentos"];
                Int32 intSuma = 0,intPromedio = 0;


                #region Unir celdas
                // First cell is used for specifying the Total text
                int intNoOfMergeCol = e.Row.Cells.Count - 2; /*except last column */
                for (int intCellCol = 1; intCellCol < intNoOfMergeCol; intCellCol++)
                    e.Row.Cells.RemoveAt(0);
                e.Row.Cells[0].ColumnSpan = intNoOfMergeCol;
                e.Row.Cells[0].HorizontalAlign = HorizontalAlign.Right;
                #endregion

                #region Porcentaje avance
                HtmlGenericControl divPorcentajeAvance = (HtmlGenericControl)e.Row.FindControl("divPorcentajeAvance");
                intSuma = 0;
                intPromedio = 0;
                foreach (DocumentoBE item in lstDocumentos)
                {
                    intSuma = intSuma + Convert.ToInt32(Math.Ceiling(item.PorcentajeAvance * 100));
                }
                intPromedio = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(intSuma)/Convert.ToDouble(lstDocumentos.Count)));

                if (intPromedio < 50)
                    strClass = "progress-bar progress-bar-danger";
                else if (intPromedio < 100)
                    strClass = "progress-bar progress-bar-warning";
                else
                    strClass = "progress-bar progress-bar-success";
                divPorcentajeAvance.Attributes.Add("class", strClass);
                divPorcentajeAvance.Attributes.Add("style", "width: " + intPromedio.ToString() + "%;");
                divPorcentajeAvance.InnerHtml = intPromedio + "%";
                #endregion

                #region Porcentaje Aprobado
                HtmlGenericControl divPorcentajeAprobado = (HtmlGenericControl)e.Row.FindControl("divPorcentajeAprobado");
                intSuma = 0;
                intPromedio = 0;
                foreach (DocumentoBE item in lstDocumentos)
                {
                    intSuma = intSuma + Convert.ToInt32(Math.Ceiling(item.PorcentajeAprobado * 100));
                }
                intPromedio = Convert.ToInt32(Math.Ceiling(Convert.ToDouble(intSuma) / Convert.ToDouble(lstDocumentos.Count)));

                if (intPromedio < 50)
                    strClass = "progress-bar progress-bar-danger";
                else if (intPromedio < 100)
                    strClass = "progress-bar progress-bar-warning";
                else
                    strClass = "progress-bar progress-bar-success";
                divPorcentajeAprobado.Attributes.Add("class", strClass);
                divPorcentajeAprobado.Attributes.Add("style", "width: " + intPromedio.ToString() + "%;");
                divPorcentajeAprobado.InnerHtml = intPromedio + "%";
                #endregion

            }
        }
    }
}