using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using DataAccess;
using BusinessEntity;
using System.IO;
using System.Drawing;

namespace BusinessLogic
{
   public  class ZipBL
    {
        DBBaseDatos baseDatosDA = new DBBaseDatos();

        public void DescargarZip(String IdNodo)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            String ruta = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\";

            try
            {
                baseDatosDA.CrearComando("USP_R_RUTA_ZIP",CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@VC_ID_NODO",IdNodo,true);
                DataTable dt = baseDatosDA.EjecutarConsultaDataTable();
                
                foreach(DataRow dr in dt.Rows)
                {
                    String rutaCarpeta = dr["VC_RUTA_CARPETA"].ToString();

                    byte[] valorBinario = (byte[])dr["VB_VALOR_BINARIO"];

                  //MemoryStream mBinario = new MemoryStream(valorBinario);
                  //  Image img = (Bitmap)((new ImageConverter()).ConvertFrom(valorBinario));
                    String folder = IdNodo + rutaCarpeta;
                    String rutaCompleta = Path.Combine(ruta, folder);
                    ////img.Save(rutaCompleta);
                    File.WriteAllBytes(rutaCompleta,valorBinario);
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
