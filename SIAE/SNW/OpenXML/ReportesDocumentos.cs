using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data;
using System.IO;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace SNW.OpenXML
{
    public class ReportesDocumentos
    {
        public void PruebaInterferencia(String IdNodo,String  IdTarea,String valorCadena1,String rutaPlantilla)
        {
            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
                SqlCommand cmd = new SqlCommand("USP_R_PRUEBAINTERFERENCIA", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CH_ID_TAREA", IdTarea);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                con.Close();


                String codNodo = ds.Tables[0].Rows[0]["COD_NODO"].ToString();

                byte[] imageBuffer = (byte[])ds.Tables[0].Rows[0]["CAP_PANT_EPMP1000"];

                MemoryStream EPMP1000 = new MemoryStream(imageBuffer);
             
                String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + IdNodo+ " "+ valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                ExcelTools.UpdateCell(excelGenerado, "Selección de Frecuencia", codNodo, 12, "E");
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", EPMP1000, "", 18, 3,525,297);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public void PruebaServicioDITGPMP(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {

            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
                SqlCommand cmd = new SqlCommand("USP_R_PRUEBAS_SERVICIO_DITG_PMP", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CH_ID_TAREA", IdTarea);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                con.Close();

                String TIEMPO_PRUEBA = ds.Tables[0].Rows[0]["TIEMPO_PRUEBA"].ToString();
                String RETARDO_MIN = ds.Tables[0].Rows[0]["RETARDO_MIN"].ToString();
                String RETARDO_MAXIMO = ds.Tables[0].Rows[0]["RETARDO_MAXIMO"].ToString();
                String RETARDO_PROMEDIO = ds.Tables[0].Rows[0]["RETARDO_PROMEDIO"].ToString();
                String JILTER_PROMEDIO = ds.Tables[0].Rows[0]["JILTER_PROMEDIO"].ToString();
                String DESV_ESTANDAR_RETARDO = ds.Tables[0].Rows[0]["DESV_ESTANDAR_RETARDO"].ToString();
                String BYTES_RECIBIDOS = ds.Tables[0].Rows[0]["BYTES_RECIBIDOS"].ToString();
                String THROUGHPUT_PROM = ds.Tables[0].Rows[0]["THROUGHPUT_PROM"].ToString();
                String DESCARTE_PAQUETES = ds.Tables[0].Rows[0]["DESCARTE_PAQUETES"].ToString();

                byte[] FECHA_HORA_ROUTER = (byte[])ds.Tables[0].Rows[0]["FECHA_HORA_ROUTER"];
                MemoryStream FECHA_HORA_ROUTERm = new MemoryStream(FECHA_HORA_ROUTER);
                byte[] DIRECCIONES_MAC = (byte[])ds.Tables[0].Rows[0]["DIRECCIONES_MAC"];
                MemoryStream DIRECCIONES_MACm = new MemoryStream(DIRECCIONES_MAC);
                byte[] RESULTADO_PRUEBA_DITG = (byte[])ds.Tables[0].Rows[0]["RESULTADO_PRUEBA_DITG"];
                MemoryStream RESULTADO_PRUEBA_DITGm = new MemoryStream(RESULTADO_PRUEBA_DITG);
                byte[] PING_CPE_DESDE_NODO_A = (byte[])ds.Tables[0].Rows[0]["PING_CPE_DESDE_NODO_A"];
                MemoryStream PING_CPE_DESDE_NODO_Am = new MemoryStream(PING_CPE_DESDE_NODO_A);
                byte[] PING_ALL_USERS_01 = (byte[])ds.Tables[0].Rows[0]["PING_ALL_USERS_01"];
                MemoryStream PING_ALL_USERS_01m = new MemoryStream(PING_ALL_USERS_01);
                byte[] PING_ALL_USERS_02 = (byte[])ds.Tables[0].Rows[0]["PING_ALL_USERS_02"];
                MemoryStream PING_ALL_USERS_02m = new MemoryStream(PING_ALL_USERS_02);
                byte[] PING_ALL_USERS_03 = (byte[])ds.Tables[0].Rows[0]["PING_ALL_USERS_03"];
                MemoryStream PING_ALL_USERS_03m = new MemoryStream(PING_ALL_USERS_03);
                byte[] PING_ALL_USERS_04 = (byte[])ds.Tables[0].Rows[0]["PING_ALL_USERS_04"];
                MemoryStream PING_ALL_USERS_04m = new MemoryStream(PING_ALL_USERS_04);
                byte[] PING_ALL_USERS_05 = (byte[])ds.Tables[0].Rows[0]["PING_ALL_USERS_05"];
                MemoryStream PING_ALL_USERS_05m = new MemoryStream(PING_ALL_USERS_05);
                byte[] PING_ALL_USERS_06 = (byte[])ds.Tables[0].Rows[0]["PING_ALL_USERS_06"];
                MemoryStream PING_ALL_USERS_06m = new MemoryStream(PING_ALL_USERS_06);



                String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", TIEMPO_PRUEBA, 34, "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_MIN, 35, "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_MAXIMO,36 , "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_PROMEDIO,37 , "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", JILTER_PROMEDIO, 38, "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", DESV_ESTANDAR_RETARDO,39 , "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", BYTES_RECIBIDOS, 40, "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", THROUGHPUT_PROM, 41, "F");
                ExcelTools.UpdateCell(excelGenerado, "Pruebas de Servicios", DESCARTE_PAQUETES,42 , "F");

                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", FECHA_HORA_ROUTERm, "", 72, 2, 534, 234);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", DIRECCIONES_MACm, "", 126, 2, 534, 234);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", RESULTADO_PRUEBA_DITGm, "", 149, 2, 534, 234);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_CPE_DESDE_NODO_Am, "", 48, 2, 534, 234);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_ALL_USERS_01m, "", 98, 2, 177, 141);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_ALL_USERS_02m, "", 98, 5, 177, 141);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_ALL_USERS_03m, "", 98, 8, 177, 141);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_ALL_USERS_04m, "", 110, 2, 177, 141);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_ALL_USERS_05m, "", 110, 5, 177, 141);
                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", PING_ALL_USERS_06m, "", 110, 8, 177, 141);

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}