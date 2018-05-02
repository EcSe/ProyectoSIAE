using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntity;
using DataAccess;
using System.Data;
using System.Data.Common;

namespace BusinessLogic
{
    public class PTPDetalleBL
    {
        public static List<PTPDetalleBE> ListarPTPDetalles(PTPDetalleBE PTPDetalle)
        {
            List<PTPDetalleBE> lstResultadosBE = new List<PTPDetalleBE>();
            DBBaseDatos baseDatos = new DBBaseDatos();
            baseDatos.Configurar();
            baseDatos.Conectar();
            try
            {
                baseDatos.CrearComando("USP_PTP_DET", CommandType.StoredProcedure);
                baseDatos.AsignarParametroCadena("@PCH_TIPO_TRANSACCION", "S", true);

                if (PTPDetalle.PTP.NodoA.IdNodo.Equals(""))
                    baseDatos.AsignarParametroNulo("@PCH_ID_NODO_A", true);
                else
                    baseDatos.AsignarParametroCadena("@PCH_ID_NODO_A", PTPDetalle.PTP.NodoA.IdNodo, true);
                if (PTPDetalle.NodoB.IdNodo.Equals(""))
                    baseDatos.AsignarParametroNulo("@PCH_ID_NODO_B", true);
                else
                    baseDatos.AsignarParametroCadena("@PCH_ID_NODO_B", PTPDetalle.NodoB.IdNodo, true);

                DbDataReader drDatos = baseDatos.EjecutarConsulta();

                while (drDatos.Read())
                {
                    PTPDetalleBE item = new PTPDetalleBE();

                    item.PTP.NodoA.IdNodo= drDatos.GetString(drDatos.GetOrdinal("CH_ID_NODO_A"));
                    item.NodoB.IdNodo = drDatos.GetString(drDatos.GetOrdinal("CH_ID_NODO_B"));
                    lstResultadosBE.Add(item);
                }

                drDatos.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                baseDatos.Desconectar();
                baseDatos = null;
            }

            return lstResultadosBE;
        }
    }
}
