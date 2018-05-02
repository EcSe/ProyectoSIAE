using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.Security;

namespace LOG.forms
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                #region Verificamos cerrar sesion
                if (Request.QueryString["IdMetodo"] != null)
                {
                    if (Request.QueryString["IdMetodo"].Equals("OUT"))
                    {
                        EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
                        List<EntidadDetalleBE> lstEntidadDetalle = new List<EntidadDetalleBE>();

                        entidadDetalleBE.Entidad.IdEntidad = "CONF";
                        entidadDetalleBE.IdValor = "LOGIN";
                        lstEntidadDetalle = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                        Session.Clear();
                        FormsAuthentication.SignOut();
                        Context.User = null;
                        Session.Abandon();

                        //Response.Redirect("/forms/Login.aspx", true);
                        Response.Redirect(lstEntidadDetalle[0].ValorCadena1, true);
                    }
                }
                #endregion

                #region Asignamos las imagenes
                EntidadDetalleBE rutaVirtualEstandar = new EntidadDetalleBE();
                rutaVirtualEstandar.Entidad.IdEntidad = "CONF";
                rutaVirtualEstandar.IdValor = "RUTA_VIRT_EST";
                UtilitarioBL.AsignarImagen(rutaVirtualEstandar, imgLogo, "/images/LogoSIAE150.png");
                #endregion

                txtUsuario.Focus();
            }
        }
        protected void btnIngresar_Click(object sender, EventArgs e)
        {
            UsuarioBE usuarioBE = new UsuarioBE();
            usuarioBE.IdUsuario = txtUsuario.Text.ToUpper();
            usuarioBE.Password = txtPassword.Text.Trim().Equals("") ? "$$$" : txtPassword.Text.Trim();

            List<UsuarioBE> lstUsuarios = UsuarioBL.ListarUsuarios(usuarioBE);

            if (lstUsuarios.Count == 1)
            {
                EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
                List<EntidadDetalleBE> lstEntidadDetalle = new List<EntidadDetalleBE>();
                entidadDetalleBE.Entidad.IdEntidad = "CONF";
                entidadDetalleBE.IdValor = "MAIN_LOG";
                lstEntidadDetalle = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);

                Session["Usuario"] = lstUsuarios[0];

                FormsAuthentication.SetAuthCookie(lstUsuarios[0].IdUsuario, true);
                UsuarioBL.GenerarTicket(lstUsuarios[0]);
                //Response.Redirect("Principal.aspx");
                Response.Redirect(lstEntidadDetalle[0].ValorCadena1, true);

            }
            else
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-danger','#lblAlertTitle','Error','#lblAlertBody','Usuario y/o contraseña inválido.',true,true);", true);
                //ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "$('#divAlert').modal();", true);
            }
        }
    }
}