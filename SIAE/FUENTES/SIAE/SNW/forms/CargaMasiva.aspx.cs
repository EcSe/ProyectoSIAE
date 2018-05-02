using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Data.OleDb;
using System.Data.Common;
using System.IO;

namespace SNW.forms
{
    public partial class CargaMasiva : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
                #region Listar formato carga masiva
                entidadDetalleBE.Entidad.IdEntidad = "MET";
                UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlMetodo, "IdValor", "ValorCadena1");
                #endregion

            }
        }

        protected void btnProcesar_Click(object sender, EventArgs e)
        {
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];

            ProyectoBL.InsertarProyectoProceso(hfArchivo,ddlMetodo,lnkLog, Usuario);
            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-success','#lblAlertTitle','Completado','#lblAlertBody','El archivo se ha procesado correctamente, favor revisar el log.',true,true);", true);
            divLog.Visible = true;
        }

        //protected void Button1_Click(object sender, EventArgs e)
        //{

        //}
    }
}