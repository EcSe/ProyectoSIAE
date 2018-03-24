using BusinessEntity;
using BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace LOG.master
{
    public partial class MasterPage : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

                #region Agregamos los css y javascript
                UtilitarioBL.AddClassMaster(this.Page);
                UtilitarioBL.AddScriptMaster(this.Page);
                #endregion

                #region Asignamos las imagenes
                EntidadDetalleBE rutaVirtualEstandar = new EntidadDetalleBE();
                rutaVirtualEstandar.Entidad.IdEntidad = "CONF";
                rutaVirtualEstandar.IdValor = "RUTA_VIRT_EST";
                UtilitarioBL.AsignarImagen(rutaVirtualEstandar, imgLogo, "/images/LogoSIAE60.png");
                #endregion

                if (Session["Usuario"] != null)
                {
                    UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                    lblIdUsuario.InnerText = Usuario.IdUsuario;
                    lblNombreCompleto.InnerText = Usuario.NombreRazon + " " + Usuario.ApellidoPaterno;
                    lblPerfil.InnerText = Usuario.Perfil.ValorCadena1;
                }
                else
                {
                    divUsuario.Visible = false;
                    btnUsuario.Visible = false;
                }
            }
        }
        protected void btnCerrarSesion_Click(object sender, EventArgs e)
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

        protected void btnInicio_Click(object sender, EventArgs e)
        {
            EntidadDetalleBE Principal = new EntidadDetalleBE();
            List<EntidadDetalleBE> lstEntidadDetalle = new List<EntidadDetalleBE>();
            Principal.Entidad.IdEntidad = "CONF";
            Principal.IdValor = "PRINC";
            Principal = EntidadDetalleBL.ListarEntidadDetalle(Principal)[0];
            Response.Redirect(Principal.ValorCadena1, true);
        }
    }
}