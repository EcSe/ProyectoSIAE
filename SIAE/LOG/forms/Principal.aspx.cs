using BusinessEntity;
using BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LOG.forms
{
    public partial class Principal : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                List<AplicacionBE> lstAplicaciones = new List<AplicacionBE>();
                StringBuilder sbAplicaciones = new StringBuilder();
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];

                //if (Session["Aplicaciones"] == null)
                //{
                    lstAplicaciones = AplicacionBL.ListarAplicaciones(Usuario);
                //    Session["Aplicaciones"] = lstAplicaciones;
                //}
                //else
                //{
                //    lstAplicaciones = (List<AplicacionBE>)Session["Aplicaciones"];
                //}

                sbAplicaciones.Append("<div class=\"row\">");

                foreach (AplicacionBE item in lstAplicaciones)
                {
                    sbAplicaciones.Append("<div class=\"ms-feature col-lg-3 col-md-6 col-sm-6 card flipInX animated\">");
                    sbAplicaciones.Append("<div class=\"text-center card-block\">");
                    sbAplicaciones.Append("<span class=\"ms-icon ms-icon-circle ms-icon-xxlg " + item.EstiloIcono + " \">");
                    sbAplicaciones.Append("<span class=\"" + item.Icono + "\"></span>");
                    sbAplicaciones.Append("</span>");
                    sbAplicaciones.Append("<h4 class=\"" + item.EstiloTitulo + "\">" + item.Nombre + "</h4>");
                    sbAplicaciones.Append("<p>" + item.Descripcion + "</p>");
                    //sbAplicaciones.Append("<a href=\"" + item.URLDefault + "?ticket=" + Usuario.Ticket + "\" class=\"btn " + item.EstiloBoton + " btn-raised\"><span class=\"glyphicon glyphicon-log-in\"></span> Entrar</a>");
                    sbAplicaciones.Append("<a href=\"" + item.URLDefault + "?ticket=" + Usuario.Ticket + "&aplicacion=" + item.IdAplicacion + "\" class=\"btn " + item.EstiloBoton + " btn-raised\"><span class=\"glyphicon glyphicon-log-in\"></span> Entrar</a>");
                    sbAplicaciones.Append("</div>");
                    sbAplicaciones.Append("</div>");
                }
                sbAplicaciones.Append("</div>");

                ContentPlaceHolder cphContenido = (ContentPlaceHolder)this.Master.FindControl("cphContenido");
                Label lblControlH1 = new Label();
                lblControlH1.Text = sbAplicaciones.ToString();
                cphContenido.Controls.Add(lblControlH1);
            }
        }
    }
}