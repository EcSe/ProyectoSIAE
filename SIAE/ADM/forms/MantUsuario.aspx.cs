using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.Services;

namespace ADM.forms
{
    public partial class MantUsuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
                EntidadDetalleBE entidadDetalleSecundarioBE = new EntidadDetalleBE();
                EntidadDetalleBE entidadDefecto = new EntidadDetalleBE();
                List<EntidadDetalleBE> lstQuitarElementos = new List<EntidadDetalleBE>();
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];

                #region Listar tipo de documento
                entidadDetalleBE.Entidad.IdEntidad = "TIP_DOC";
                entidadDefecto.IdValor = "";
                entidadDefecto.ValorCadena2 = "--TODOS--";
                UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlTipoDocumento, "IdValor", "ValorCadena2", entidadDefecto);
                #endregion
                #region Listar perfil
                entidadDefecto = new EntidadDetalleBE();
                entidadDefecto.IdValor = "";
                entidadDefecto.ValorCadena1 = "--TODOS--";

                entidadDetalleBE.Entidad.IdEntidad = "PERF";
                entidadDetalleBE.IdValor = Usuario.Perfil.IdValor;
                entidadDetalleSecundarioBE.Entidad.IdEntidad = "PERF";
                entidadDetalleBE.EntidadDetalleSecundario = entidadDetalleSecundarioBE;
                entidadDetalleBE.Metodo = "S";
                //if (Usuario.Perfil.IdValor.Equals("000002"))
                //{
                //    lstQuitarElementos.Add(new EntidadDetalleBE { IdValor = "000001" });
                //}
                UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlPerfil, "IdValor", "ValorCadena1", entidadDefecto);
                #endregion
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
            }
        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            UsuarioBE usuarioBE = new UsuarioBE();
            List<UsuarioBE> lstUsuarios = new List<UsuarioBE>();
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];

            usuarioBE.IdUsuario = txtIdUsuario.Text.ToUpper();
            usuarioBE.TipoDocumento.IdValor = ddlTipoDocumento.SelectedValue;
            usuarioBE.NumeroDocumento = txtNumeroDocumento.Text;
            usuarioBE.NombreRazon = txtNombreRazon.Text.ToUpper();
            usuarioBE.ApellidoPaterno = txtApellidoPaterno.Text.ToUpper();
            usuarioBE.ApellidoMaterno = txtApellidoMaterno.Text.ToUpper();
            usuarioBE.Perfil.IdValor = ddlPerfil.SelectedValue;
            if (!txtContratista.Text.Equals(""))
            {
                //usuarioBE.Contratista.TipoDocumento.IdValor = hfIdContratista.Value.Substring(0, 6);
                //usuarioBE.Contratista.NumeroDocumento = hfIdContratista.Value.Substring(6);
                usuarioBE.Contratista.IdValor = hfIdContratista.Value;
            }
            usuarioBE.Metodo = "S";
            usuarioBE.UsuarioCreacion = Usuario;

            try
            {
                lstUsuarios = UsuarioBL.ListarUsuarios(usuarioBE);
                Session["lstUsuarios"] = lstUsuarios;
                gvUsuarios.DataSource = lstUsuarios;
                gvUsuarios.DataBind();
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','modal-header-danger','Error','" + ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n") + "');", true);
            }
            lblTotalRegistros.Text = gvUsuarios.Rows.Count.ToString();
            
        }

        protected void gvUsuarios_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Código";
                e.Row.Cells[1].Attributes["data-title"] = "T. Doc.";
                e.Row.Cells[2].Attributes["data-title"] = "N. Doc.";
                e.Row.Cells[3].Attributes["data-title"] = "Nombre";
                e.Row.Cells[4].Attributes["data-title"] = "Perfil";
                e.Row.Cells[5].Attributes["data-title"] = "Contratista";
                e.Row.Cells[6].Attributes["data-title"] = "Acciones";

                //LinkButton btnEditar = (LinkButton)e.Row.FindControl("btnEditar");
                //upaUsuario.Triggers.Add(new AsyncPostBackTrigger { ControlID = btnEditar.UniqueID, EventName ="click"});
                //ScriptManager.GetCurrent(this).RegisterAsyncPostBackControl(btnEditar);
            }
        }

        protected void btnNuevo_Click(object sender, EventArgs e)
        {
            hfMetodo.Value = "I";//Insert
            LimpiarPopup();
            InicializarPopup();
            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlertUsuario','#divAlertUsuarioHeader','modal-header-primary','#cphContenido_lblAlertUsuarioTitle','Nuevo Usuario','','','static',false);", true);
            upaUsuario.Update();
        }

        protected void btnEditar_Click(object sender, EventArgs e)
        {
            LinkButton btnEditar = (LinkButton)sender;
            //String strIdUsuario = "";
            GridViewRow gvrRegistro = (GridViewRow)btnEditar.NamingContainer;
            UsuarioBE usuarioBE = new UsuarioBE();
            //strIdUsuario = gvUsuarios.DataKeys[gvrRegistro.RowIndex].Values[0].ToString();
            usuarioBE.IdUsuario = gvUsuarios.DataKeys[gvrRegistro.RowIndex].Values[0].ToString();
            hfMetodo.Value = "U";//Update
            LimpiarPopup();
            InicializarPopup();
            AsignarUsuario(usuarioBE);
            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlertUsuario','#divAlertUsuarioHeader','modal-header-primary','#cphContenido_lblAlertUsuarioTitle','Editar Usuario','','','static',false);", true);
            upaUsuario.Update();
        }

        protected void btnEliminar_Click(object sender, EventArgs e)
        {
            LinkButton btnEliminar = (LinkButton)sender;
            String strIdUsuario = "";
            GridViewRow gvrRegistro = (GridViewRow)btnEliminar.NamingContainer;
            List<UsuarioBE> lstUsuarios = (List<UsuarioBE>)Session["lstUsuarios"];
            strIdUsuario = gvUsuarios.DataKeys[gvrRegistro.RowIndex].Values[0].ToString();
            //UsuarioBE UsuarioActual = (new List<UsuarioBE>(lstUsuarios.Where(T => T.IdUsuario == strIdUsuario).Select(T => T)))[0];
            UsuarioBE UsuarioActual = lstUsuarios.Where(T => T.IdUsuario == strIdUsuario).First();
            Session["UsuarioActual"] = UsuarioActual;
            txtIdUsuarioU.Text = strIdUsuario;
            hfMetodo.Value = "D";//Delete
            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divConfirm','#divConfirmHeader','modal-header-primary','#cphContenido_lblConfirmTitle','Eliminar Usuario','#cphContenido_lblConfirmBody','" + "Está seguro(a) que desea eliminar el usuario " + UsuarioActual.NombreCompleto + "?','static',false);", true);
            upaUsuario.Update();
        }

        

        protected void btnGuardar_Click(object sender, EventArgs e)
        {
            //actualizamos la fila modificada
            if (hfMetodo.Value.Equals("U"))
            {
                UsuarioBE UsuarioActual = new UsuarioBE();
                UsuarioActual.IdUsuario = txtIdUsuarioU.Text;
                UsuarioActual = UsuarioBL.ListarUsuarios(UsuarioActual)[0];
                List<UsuarioBE> lstUsuarios = (List<UsuarioBE>)Session["lstUsuarios"];
                UsuarioBE UsuarioReemplazar = lstUsuarios.Where(T => T.IdUsuario == UsuarioActual.IdUsuario).First();
                var index = lstUsuarios.IndexOf(UsuarioReemplazar);
                if (index != -1)
                    lstUsuarios[index] = UsuarioActual;

                gvUsuarios.DataSource = lstUsuarios;
                gvUsuarios.DataBind();
            }
            

        }

        private void InicializarPopup()
        {
            //Response.Redirect("Usuario.aspx");
            EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
            EntidadDetalleBE entidadDetalleSecundarioBE = new EntidadDetalleBE();
            List<EntidadDetalleBE> lstQuitarElementos = new List<EntidadDetalleBE>();
            UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
            UsuarioBE UsuarioEditar = new UsuarioBE();

            #region Inizializar popup
            #region Listar perfil
            //if (ddlPerfilU.Items.Count.Equals(0))
            //{
                entidadDetalleBE.Entidad.IdEntidad = "PERF";
                entidadDetalleBE.IdValor = Usuario.Perfil.IdValor;
                entidadDetalleSecundarioBE.Entidad.IdEntidad = "PERF";
                entidadDetalleBE.EntidadDetalleSecundario = entidadDetalleSecundarioBE;
                entidadDetalleBE.Metodo = hfMetodo.Value;
                //if (Usuario.Perfil.IdValor.Equals("000002"))
                //{
                //    lstQuitarElementos.Add(new EntidadDetalleBE { IdValor = "000001" });
                //    lstQuitarElementos.Add(new EntidadDetalleBE { IdValor = "000002" });
                //}
                UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlPerfilU, "IdValor", "ValorCadena1", null, lstQuitarElementos);
            //}
            #endregion

            #region Listar tipo de documento
            if (ddlTipoDocumentoU.Items.Count.Equals(0))
            {
                entidadDetalleBE = new EntidadDetalleBE();
                entidadDetalleBE.Entidad.IdEntidad = "TIP_DOC";
                UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlTipoDocumentoU, "IdValor", "ValorCadena2");
            }
            #endregion

            if (!Usuario.Perfil.IdValor.Equals("000001"))
            {
                txtContratistaU.ReadOnly = true;
                //txtContratistaU.Text = Usuario.Contratista.NombreCompleto;
                //hfIdContratistaU.Value = Usuario.Contratista.TipoDocumento.IdValor + Usuario.Contratista.NumeroDocumento;
                txtContratistaU.Text = Usuario.Contratista.ValorCadena1;
                hfIdContratistaU.Value = Usuario.Contratista.IdValor;
            }
                

            #endregion
        }

        private void LimpiarPopup()
        {
            ddlPerfilU.SelectedIndex = 0;
            txtIdUsuarioU.Text = "";
            ddlTipoDocumentoU.SelectedIndex = 0;
            txtNumeroDocumentoU.Text = "";
            txtNombreRazonU.Text = "";
            txtApellidoPaternoU.Text = "";
            txtApellidoMaternoU.Text = "";
            //txtPasswordU.Text = "";
            txtPasswordU.Attributes.Add("value", "");
            txtEmailU.Text = "";
            txtContratistaU.Text = "";
            hfIdContratistaU.Value = "";
        }

        private void AsignarUsuario(UsuarioBE usuarioBE)
        {
            UsuarioBE UsuarioEditar = new UsuarioBE();
            UsuarioEditar = UsuarioBL.ListarUsuarios(usuarioBE)[0];

            ddlPerfilU.SelectedValue = UsuarioEditar.Perfil.IdValor;
            txtIdUsuarioU.Text = UsuarioEditar.IdUsuario;
            ddlTipoDocumentoU.SelectedValue = UsuarioEditar.TipoDocumento.IdValor;
            txtNumeroDocumentoU.Text = UsuarioEditar.NumeroDocumento;
            txtNombreRazonU.Text = UsuarioEditar.NombreRazon;
            txtApellidoPaternoU.Text = UsuarioEditar.ApellidoPaterno;
            txtApellidoMaternoU.Text = UsuarioEditar.ApellidoMaterno;
            //txtPassword.Text = UsuarioEditar.Password;
            txtPasswordU.Attributes.Add("value", UsuarioEditar.Password);
            //txtContratistaU.Text = UsuarioEditar.Contratista.NombreCompleto;
            //hfIdContratistaU.Value = UsuarioEditar.Contratista.TipoDocumento.IdValor + UsuarioEditar.Contratista.NumeroDocumento;
            txtContratistaU.Text = UsuarioEditar.Contratista.ValorCadena1;
            hfIdContratistaU.Value = UsuarioEditar.Contratista.IdValor;
            txtEmailU.Text = UsuarioEditar.Email;
        }

        protected void btnAceptar_Click(object sender, EventArgs e)
        {
            UsuarioBE UsuarioActual = new UsuarioBE();
            UsuarioActual.IdUsuario = txtIdUsuarioU.Text;
            //UsuarioActual = UsuarioBL.ListarUsuarios(UsuarioActual)[0];
            List<UsuarioBE> lstUsuarios = (List<UsuarioBE>)Session["lstUsuarios"];
            UsuarioBE UsuarioEliminar = lstUsuarios.Where(T => T.IdUsuario == UsuarioActual.IdUsuario).First();
            var index = lstUsuarios.IndexOf(UsuarioEliminar);
            if (index != -1)
                lstUsuarios.RemoveAt(index);

            gvUsuarios.DataSource = lstUsuarios;
            gvUsuarios.DataBind();
        }
    }
}