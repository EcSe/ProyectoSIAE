using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;

namespace SNW.forms
{
    public partial class ObtenerBytesArchivo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnGuardar_Click(object sender, EventArgs e)
        {
            EntidadDetalleBE EntidadDetalle = new EntidadDetalleBE();
            EntidadDetalle.UsuarioCreacion = new UsuarioBE();
            EntidadDetalle.Entidad.IdEntidad = txtVC_ID_ENTIDAD.Text;
            EntidadDetalle.IdValor = txtVC_ID_VALOR.Text;
            EntidadDetalle.ValorCadena1 = txtVC_VALOR_CADENA1.Text;
            EntidadDetalle.ValorBinario1 = prueba.FileBytes;
            EntidadDetalle.UsuarioCreacion.IdUsuario = txtVC_ID_USUARIO_CRE.Text;

            EntidadDetalleBL.InsertarEntidadDetalle(EntidadDetalle);
        }
    }
}