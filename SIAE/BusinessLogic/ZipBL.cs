using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using DataAccess;
using BusinessEntity;
using System.IO;

namespace BusinessLogic
{
   public  class ZipBL
    {
        DBBaseDatos baseDatosDA = new DBBaseDatos();

        public void DescargarZip(String IdNodo)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_RUTA_ZIP",CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@VC_ID_NODO",IdNodo,true);
                DataTable dt = baseDatosDA.EjecutarConsultaDataTable();
                String prueba = dt.Rows[0]["Columns"].ToString();
                foreach(DataRow dr in dt.Rows)
                {
                    String rutaCarpeta = dr["VC_RUTA_CARPETA"].ToString();

                    byte[] valorBinario = (byte[])dr["VB_VALOR_BINARIO"];

                  MemoryStream mBinario = new MemoryStream(valorBinario);

                }

                
                
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }
        }
    }
}
