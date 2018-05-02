using BusinessEntity;
using BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ADM.forms
{
    public partial class Inicio : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                List<AplicacionBE> lstAplicaciones = new List<AplicacionBE>();
                AplicacionBE aplicacionBE = new AplicacionBE();
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                String strHTMLAplicacionActual = "";

                //if (Session["Aplicaciones"] == null)
                //{
                    lstAplicaciones = AplicacionBL.ListarAplicaciones(Usuario);
                //    Session["Aplicaciones"] = lstAplicaciones;
                //}
                //else
                //{
                //    lstAplicaciones = (List<AplicacionBE>)Session["Aplicaciones"];
                //}
                aplicacionBE = (AplicacionBE)Session["Aplicacion"];

                IEnumerable<AplicacionBE> lstAplicacionActual = lstAplicaciones.Where(T => T.IdAplicacion == aplicacionBE.IdAplicacion).Select(T => T);
                foreach (AplicacionBE item in lstAplicacionActual)
                {
                    aplicacionBE = item;
                }
                strHTMLAplicacionActual = UtilitarioBL.ObtenerHTMLAplicacionActual(aplicacionBE);

                ContentPlaceHolder cphContenido = (ContentPlaceHolder)this.Master.FindControl("cphContenido");
                Label lblControlH1 = new Label();
                lblControlH1.Text = strHTMLAplicacionActual;
                cphContenido.Controls.Add(lblControlH1);

            }
        }
    }
}