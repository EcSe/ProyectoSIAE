using BusinessEntity;
using BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ADM.forms
{
    public partial class Utilitario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string[] GetTerceros(string nombreCompleto,string atividadTercero)
        {
            List<string> clientes = new List<string>();
            List<TerceroBE> lstTerceros = new List<TerceroBE>();
            TerceroBE terceroBE = new TerceroBE();
            terceroBE.Actividad.IdValor = atividadTercero;
            terceroBE.NombreCompleto = nombreCompleto.ToUpper();
            lstTerceros = TerceroBL.ListarTerceros(terceroBE);
            foreach (TerceroBE item in lstTerceros)
            {
                clientes.Add(String.Format("{0}{1}-{2}", item.TipoDocumento.IdValor, item.NumeroDocumento, item.NombreCompleto));
            }
            return clientes.ToArray();
        }
    }
}