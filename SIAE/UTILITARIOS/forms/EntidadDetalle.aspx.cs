using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.Web.Services;

namespace UTILITARIOS.forms
{
    public partial class EntidadDetalle : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string[] GetEntidadesDetalle(string idEntidadPrimaria, string valorCadena1)
        {
            List<string> entidadesDetalle = new List<string>();
            List<EntidadDetalleBE> lstEntidadesDetalle = new List<EntidadDetalleBE>();
            EntidadDetalleBE entidadDetalle = new EntidadDetalleBE();
            entidadDetalle.Entidad.IdEntidad = idEntidadPrimaria;
            entidadDetalle.ValorCadena1 = valorCadena1.ToUpper();
            lstEntidadesDetalle = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalle);
            foreach (EntidadDetalleBE item in lstEntidadesDetalle)
            {
                entidadesDetalle.Add(String.Format("{0}-{1}", item.IdValor, item.ValorCadena1));
            }
            return entidadesDetalle.ToArray();
        }
    }
}