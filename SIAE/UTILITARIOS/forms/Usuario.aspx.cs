using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;

namespace UTILITARIOS.forms
{
    public partial class Usuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string GuardarUsuario(String metodo, String idPerfil, String idUsuario, String idTipoDocumento,
            String numeroDocumento, String nombreRazon, String apellidoPaterno, String apellidoMaterno, String password,
            String eMail
            //,String idTipoDocumentoContratista,String numeroDocumentoContratista)
            , String idContratista, String idUsuarioCreMod)
        {
            //Page page = (Page)HttpContext.Current.Handler;
            String strError = String.Empty;
            UsuarioBE usuarioBE = new UsuarioBE();
            //UsuarioBE Usuario = (UsuarioBE)page.Session["Usuario"];
            usuarioBE.Perfil.IdValor = idPerfil;
            usuarioBE.IdUsuario = idUsuario.ToUpper();
            usuarioBE.TipoDocumento.IdValor = idTipoDocumento;
            usuarioBE.NumeroDocumento = numeroDocumento.ToUpper();
            usuarioBE.NombreRazon = nombreRazon.ToUpper();
            usuarioBE.ApellidoPaterno = apellidoPaterno.ToUpper();
            usuarioBE.ApellidoMaterno = apellidoMaterno.ToUpper();
            usuarioBE.Password = password;
            usuarioBE.Email = eMail.ToUpper();
            //usuarioBE.Contratista.TipoDocumento.IdValor = idTipoDocumentoContratista;
            //usuarioBE.Contratista.NumeroDocumento = numeroDocumentoContratista;
            usuarioBE.Contratista.IdValor = idContratista;
            if (metodo == "I")
            {
                //usuarioBE.UsuarioCreacion = Usuario;
                usuarioBE.UsuarioCreacion = new UsuarioBE();
                usuarioBE.UsuarioCreacion.IdUsuario = idUsuarioCreMod;
            }
            else if (metodo == "U")
            {
                //usuarioBE.UsuarioModificacion = Usuario;
                usuarioBE.UsuarioModificacion = new UsuarioBE();
                usuarioBE.UsuarioModificacion.IdUsuario = idUsuarioCreMod;
            }

            try
            {
                if (metodo == "I")
                    UsuarioBL.InsertarUsuario(usuarioBE);
                else if (metodo == "U")
                    UsuarioBL.EditarUsuario(usuarioBE);

            }
            catch (Exception ex)
            {
                //strError = ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n");
                strError = ex.Message;
            }
            return strError;
        }

        [WebMethod]
        public static string EliminarUsuario(String idUsuario, String idUsuarioModificacion)
        {
            Page page = (Page)HttpContext.Current.Handler;
            String strError = String.Empty;
            UsuarioBE usuarioBE = new UsuarioBE();
            //UsuarioBE Usuario = (UsuarioBE)page.Session["Usuario"];
            usuarioBE.IdUsuario = idUsuario.ToUpper();
            //usuarioBE.UsuarioModificacion = Usuario;
            usuarioBE.UsuarioModificacion = new UsuarioBE();
            usuarioBE.UsuarioModificacion.IdUsuario = idUsuarioModificacion;

            try
            {
                UsuarioBL.EliminarUsuario(usuarioBE);
            }
            catch (Exception ex)
            {
                //strError = ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n");
                strError = ex.Message;
            }
            return strError;
        }

    }
}