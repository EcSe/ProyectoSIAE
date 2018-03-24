using BusinessEntity;
using BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SNW.master
{
    public partial class MasterPage : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                #region Agregamos los css javascript
                UtilitarioBL.AddClassMaster(this.Page);
                UtilitarioBL.AddScriptMaster(this.Page);
                #endregion

                #region Asignamos los HiddenField e imagenes
                EntidadDetalleBE rutaVirtualEstandar = new EntidadDetalleBE();
                rutaVirtualEstandar.Entidad.IdEntidad = "CONF";
                rutaVirtualEstandar.IdValor = "RUTA_VIRT_EST";
                rutaVirtualEstandar = EntidadDetalleBL.ListarEntidadDetalle(rutaVirtualEstandar)[0];
                hfRutaVirtualEstandar.Value = rutaVirtualEstandar.ValorCadena1;
                UtilitarioBL.AsignarImagen(rutaVirtualEstandar, imgLogo, "/images/LogoSIAE60.png");
                #endregion

                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                AplicacionBE aplicacionBE = (AplicacionBE)Session["Aplicacion"];

                if (Session["Usuario"] != null)
                {
                    lblIdUsuario.InnerText = Usuario.IdUsuario;
                    lblNombreCompleto.InnerText = Usuario.NombreRazon + " " + Usuario.ApellidoPaterno;
                    lblPerfil.InnerText = Usuario.Perfil.ValorCadena1;
                }
                else
                {
                    divUsuario.Visible = false;
                    btnUsuario.Visible = false;
                }

                #region Cargamos el menu de opciones
                if (Session["Aplicacion"] != null)
                {
                    if (aplicacionBE.Opciones.Count().Equals(0))
                    {
                        aplicacionBE.Opciones = OpcionBL.ListarOpciones(Usuario, aplicacionBE);
                    }
                    if (aplicacionBE.Opciones.Count() > 0)
                    {
                        StringBuilder sbOpciones = new StringBuilder();
                        String strIdOpcionPadre = "";
                        //Int32 intIteracion = 0;

                        sbOpciones.Append("<div class=\"container-fluid\">");
                        #region Div de navbar-toggle
                        sbOpciones.Append("<div class=\"navbar-header\">");
                        sbOpciones.Append("<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#divMenu\">");
                        sbOpciones.Append("<span class=\"sr-only\">Menu</span>");
                        sbOpciones.Append("<span class=\"icon-bar\"></span>");
                        sbOpciones.Append("<span class=\"icon-bar\"></span>");
                        sbOpciones.Append("<span class=\"icon-bar\"></span>");
                        sbOpciones.Append("</button>");
                        sbOpciones.Append("</div>");
                        #endregion
                        #region Div de menu
                        sbOpciones.Append("<div class=\"collapse navbar-collapse\" id=\"divMenu\" runat=\"server\">");
                        sbOpciones.Append("<ul class=\"nav navbar-nav navbar-base-center\">");

                        foreach (OpcionBE item in aplicacionBE.Opciones)
                        {
                            IEnumerable<OpcionBE> OpcionesHijo = aplicacionBE.Opciones.Where(T => T.IdOpcionPadre == item.IdOpcion).Select(T => T);
                            String strCssSweepToTop = "";
                            String strHref = "";
                            if (item.Orden.Length == 2)//Solo cuando es el primer nivel del menu
                                strCssSweepToTop = "hvr-base-sweep-to-top-primary";
                            if (item.URL != null && item.URL.ToString().Length > 0)//Solo si hay valor en la propiedad
                                strHref = "href=\"" + item.URL + "\"";

                            #region Comparamos el id del ultimo padre recorrido con el id padre de la opcion actual para cerrar el submenu
                            if (strIdOpcionPadre.Length > 0)
                            {
                                if ((item.IdOpcionPadre != null ? item.IdOpcionPadre : "") != strIdOpcionPadre)
                                {
                                    sbOpciones.Append("</ul>");
                                    sbOpciones.Append("</li>");
                                    strIdOpcionPadre = "";
                                }
                            }
                            #endregion

                            if (OpcionesHijo.Count() > 0)
                            {
                                sbOpciones.Append("<li class=\"dropdown " + strCssSweepToTop + "\"><a " + strHref + " class=\"dropdown-toggle\" data-toggle=\"dropdown\" role =\"button\"><span class=\"" + item.Icono + "\"></span> " + item.Nombre + " <span class=\"caret\"></span></a>");
                                sbOpciones.Append("<ul class=\"dropdown-menu\">");
                                strIdOpcionPadre = item.IdOpcion;
                            }
                            else
                            {
                                sbOpciones.Append("<li class=\"" + strCssSweepToTop + "\"><a " + strHref + "><span class=\"" + item.Icono + "\"></span> " + item.Nombre + "</a></li>");

                            }

                        }

                        #region Verificamos si hubo algun padre que se estuvirera recocciendo para cerrarlo
                        if (strIdOpcionPadre.Length > 0)
                        {
                            sbOpciones.Append("</ul>");
                            sbOpciones.Append("</li>");
                            strIdOpcionPadre = "";
                        }
                        #endregion

                        #endregion

                        sbOpciones.Append("</div>");
                        sbOpciones.Append("</div>");

                        divNav.Attributes.Add("class", "navbar-base navbar-base-primary");
                        divNav.InnerHtml = sbOpciones.ToString();
                    }
                }
                #endregion
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