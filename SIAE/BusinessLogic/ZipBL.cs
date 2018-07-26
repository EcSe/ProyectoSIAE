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
using System.Drawing.Imaging;

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
                    String nombreArchivo = dr["VC_VALOR_CADENA1"].ToString();
                   
                    byte[] binario = (byte[])dr["VB_VALOR_BINARIO"];
                    String extension = dr["VC_EXTENSION_ARCHIVO"].ToString();
                    //  String nombreCompleto = nombreArchivo + extension;
                    nombreArchivo = nombreArchivo.Replace(":", "");
                    String folder = IdNodo + rutaCarpeta;
                    String rutaCompleta = Path.Combine(ruta, folder);
                    Directory.CreateDirectory(rutaCompleta);

                    MemoryStream stream = new MemoryStream(binario);
                    Bitmap bm = new Bitmap(stream);
                    bm.Save(rutaCompleta + "\\" + nombreArchivo + extension); //, ImageFormat.Jpeg);
                    stream.Dispose();
                    //mBinario.Flush();
                    //mBinario.Close();
                    
                 

                    //FileStream fs = new FileStream(rutaCompleta+"\\"+nombreArchivo+extension,FileMode.Create,FileAccess.ReadWrite);
                    //bm.Save(stream, ImageFormat.Jpeg);
                    //byte[] bytes = stream.ToArray();
                    //fs.Write(bytes, 0, bytes.Length);

                    //bm.Save(rutaCompleta, ImageFormat.Jpeg );
                  

                    //FileStream fs = new FileStream(rutaCompleta+"\\"+valorBinario, FileMode.Create, FileAccess.ReadWrite);
                    //fs.Write(valorBinario, 0, valorBinario.Length);
                    //fs.Flush();
                    //fs.Close();
                    ////img.Save(rutaCompleta);
                    // File.WriteAllBytes(rutaCompleta + "\\" +nombreArchivo ,valorBinario);
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
