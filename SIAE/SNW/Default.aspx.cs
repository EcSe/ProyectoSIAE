using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.Security;


namespace SNW
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.QueryString["ticket"] != null && Request.QueryString["aplicacion"] != null)
                {
                    UsuarioBE usuarioBE = new UsuarioBE();
                    AplicacionBE aplicacionBE = new AplicacionBE();

                    usuarioBE.Ticket = Request.QueryString["ticket"].ToString();
                    aplicacionBE.IdAplicacion = Request.QueryString["aplicacion"].ToString();
                    UsuarioBL.ObtenerUsuarioTicket(usuarioBE);

                    List<UsuarioBE> lstUsuarios = UsuarioBL.ListarUsuarios(usuarioBE);

                    if (lstUsuarios.Count == 1)
                    {
                        Session["Usuario"] = lstUsuarios[0];
                        Session["Aplicacion"] = aplicacionBE;
                        FormsAuthentication.SetAuthCookie(lstUsuarios[0].IdUsuario, true);
                        UsuarioBL.GenerarTicket(lstUsuarios[0]);
                        //Response.Redirect("forms/Principal.aspx");
                        Response.Redirect("forms/Inicio.aspx");
                    }
                    else
                    {
                        ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','modal-header-danger','Error','Usuario y/o contraseña inválido.');", true);
                        //ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "$('#divAlert').modal();", true);
                    }

                }
                //DocumentoBL.EnviarEmailObservaciones(new DocumentoBE());

            }
        }
    }
}