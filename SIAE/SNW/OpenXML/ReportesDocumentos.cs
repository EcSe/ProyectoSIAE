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
using System.Windows.Forms;


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

                ExcelTools.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", FECHA_HORA_ROUTERm, "", 7, 2, 534, 234);
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

        public void Anexo2InventarioPMP(String IdNodo,String IdTarea,String valorCadena1,String rutaPlantilla)
        {
            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
                SqlCommand cmd = new SqlCommand("USP_R_ANEXO_02_INVENTARIO_PMP", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CH_ID_TAREA", IdTarea);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                con.Close();

                String COD_NODO = ds.Tables[0].Rows[0]["COD_NODO"].ToString();

                byte[] ANTENA = (byte[])ds.Tables[0].Rows[0]["ANTENA"];
                MemoryStream ANTENAm = new MemoryStream(ANTENA);
                byte[] ARRESTOR_LAN = (byte[])ds.Tables[0].Rows[0]["ARRESTOR_LAN"];
                MemoryStream ARRESTOR_LANm = new MemoryStream(ARRESTOR_LAN);
                byte[] ODUs = (byte[])ds.Tables[0].Rows[0]["ODUs"];
                MemoryStream ODUsm = new MemoryStream(ODUs);
                byte[] POE = (byte[])ds.Tables[0].Rows[0]["POE"];
                MemoryStream POEm = new MemoryStream(POE);


                String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                ExcelTools.UpdateCell(excelGenerado, "11 Serie logística",COD_NODO, 11, "A");
                ExcelTools.AddImageDocument(false, excelGenerado, "11 Serie logística", ANTENAm, "", 14, 3, 489, 368);
                ExcelTools.AddImageDocument(false, excelGenerado, "11 Serie logística", ARRESTOR_LANm, "", 22, 3, 489, 368);
                ExcelTools.AddImageDocument(false, excelGenerado, "11 Serie logística", ODUsm, "", 29, 3, 250, 368);
                ExcelTools.AddImageDocument(false, excelGenerado, "11 Serie logística", POEm, "", 36, 3, 489, 368);

            }
            catch(Exception ex)
            {

                MessageBox.Show(ex.Message);
            }
        }

        public void InstalacionPozoTierra(String IdNodo,String IdTarea, String valorCadena1,String rutaPlantilla)
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

                #region CAMPOS
                String INSTITUCION = ds.Tables[0].Rows[0]["INSTITUCION"].ToString();
                String CODIGO_IIBB = ds.Tables[0].Rows[0]["CODIGO_IIBB"].ToString();
                String NOMBRE_IIBB = ds.Tables[0].Rows[0]["NOMBRE_IIBB"].ToString();

                byte[] CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB"];
                MemoryStream CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBBm = new MemoryStream(CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB);
                byte[] CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR"];
                MemoryStream CINCO_OHM_UBICACION_POZO_ANTES_INSTALARm = new MemoryStream(CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR);
                byte[] CINCO_OHM_PAN_ZANJA_ABIERTA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_ZANJA_ABIERTA"];
                MemoryStream CINCO_OHM_PAN_ZANJA_ABIERTAm = new MemoryStream(CINCO_OHM_PAN_ZANJA_ABIERTA);
                byte[] CINCO_OHM_PAN_VERTIDO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_TIERRA"];
                MemoryStream CINCO_OHM_PAN_VERTIDO_TIERRAm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_TIERRA);
                byte[] CINCO_OHM_PAN_VERTIDO_SAL = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_SAL"];
                MemoryStream CINCO_OHM_PAN_VERTIDO_SALm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_SAL);
                byte[] CINCO_OHM_PAN_VERTIDO_DISOLUCION = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_DISOLUCION"];
                MemoryStream CINCO_OHM_PAN_VERTIDO_DISOLUCIONm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_DISOLUCION);
                byte[] CINCO_OHM_PAN_COL_REJE_COBRE01 = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_COL_REJE_COBRE01"];
                MemoryStream CINCO_OHM_PAN_COL_REJE_COBRE01m = new MemoryStream(CINCO_OHM_PAN_COL_REJE_COBRE01);
                byte[] CINCO_OHM_PAN_COL_REJE_COBRE02 = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_COL_REJE_COBRE02"];
                MemoryStream CINCO_OHM_PAN_COL_REJE_COBRE02m = new MemoryStream(CINCO_OHM_PAN_COL_REJE_COBRE02);
                byte[] CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE"];
                MemoryStream CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJEm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE);
                byte[] CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO"];
                MemoryStream CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTOm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO);
                byte[] CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO"];
                MemoryStream CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVOm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO);
                byte[] CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA"];
                MemoryStream CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJAm = new MemoryStream(CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA);
                byte[] CINCO_OHM_MED1_PAN_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_MED1_PAN_POZO_TIERRA"];
                MemoryStream CINCO_OHM_MED1_PAN_POZO_TIERRAm = new MemoryStream(CINCO_OHM_MED1_PAN_POZO_TIERRA);
                byte[] CINCO_OHM_MED2_PAN_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_MED2_PAN_POZO_TIERRA"];
                MemoryStream CINCO_OHM_MED2_PAN_POZO_TIERRAm = new MemoryStream(CINCO_OHM_MED2_PAN_POZO_TIERRA);
                byte[] CINCO_OHM_MED3_PAN_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_MED3_PAN_POZO_TIERRA"];
                MemoryStream CINCO_OHM_MED3_PAN_POZO_TIERRAm = new MemoryStream(CINCO_OHM_MED3_PAN_POZO_TIERRA);
                byte[] DIEZ_OHM_FRONTAL_IIBB = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_FRONTAL_IIBB"];
                MemoryStream DIEZ_OHM_FRONTAL_IIBBm = new MemoryStream(DIEZ_OHM_FRONTAL_IIBB);
                byte[] DIEZ_OHM_UBIC_POZO_ANTES_INSTALACION = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_UBIC_POZO_ANTES_INSTALACION"];
                MemoryStream DIEZ_OHM_UBIC_POZO_ANTES_INSTALACIONm = new MemoryStream(DIEZ_OHM_UBIC_POZO_ANTES_INSTALACION);
                byte[] DIEZ_OHM_PAN_ZANJA_ABIERTA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_ZANJA_ABIERTA"];
                MemoryStream DIEZ_OHM_PAN_ZANJA_ABIERTAm = new MemoryStream(DIEZ_OHM_PAN_ZANJA_ABIERTA);
                byte[] DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJA"];
                MemoryStream DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJAm = new MemoryStream(DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJA);
                byte[] DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJA"];
                MemoryStream DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJAm = new MemoryStream(DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJA);
                byte[] DIEZ_OHM_VESTIDO_DIS_CEMENTO = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_VESTIDO_DIS_CEMENTO"];
                MemoryStream DIEZ_OHM_VESTIDO_DIS_CEMENTOm = new MemoryStream(DIEZ_OHM_VESTIDO_DIS_CEMENTO);
                byte[] DIEZ_OHM_PAN_REJE_COBRE_01 = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_REJE_COBRE_01"];
                MemoryStream DIEZ_OHM_PAN_REJE_COBRE_01m = new MemoryStream(DIEZ_OHM_PAN_REJE_COBRE_01);
                byte[] DIEZ_OHM_PAN_REJE_COBRE_02 = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_REJE_COBRE_02"];
                MemoryStream DIEZ_OHM_PAN_REJE_COBRE_02m = new MemoryStream(DIEZ_OHM_PAN_REJE_COBRE_02);
                byte[] DIEZ_OHM_PAN_VERTIDO_DIS_ZANJA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_VERTIDO_DIS_ZANJA"];
                MemoryStream DIEZ_OHM_PAN_VERTIDO_DIS_ZANJAm = new MemoryStream(DIEZ_OHM_PAN_VERTIDO_DIS_ZANJA);
                byte[] DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADA"];
                MemoryStream DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADAm = new MemoryStream(DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADA);
                byte[] DIEZ_OHM_VERTIDO_RESTO_TIERRA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_VERTIDO_RESTO_TIERRA"];
                MemoryStream DIEZ_OHM_VERTIDO_RESTO_TIERRAm = new MemoryStream(DIEZ_OHM_VERTIDO_RESTO_TIERRA);
                byte[] DIEZ_OHM_VERTIDO_RELLENADO_TIERRA = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_VERTIDO_RELLENADO_TIERRA"];
                MemoryStream DIEZ_OHM_VERTIDO_RELLENADO_TIERRAm = new MemoryStream(DIEZ_OHM_VERTIDO_RELLENADO_TIERRA);
                byte[] DIEZ_OHM_MEDICION1 = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_MEDICION1"];
                MemoryStream DIEZ_OHM_MEDICION1m = new MemoryStream(DIEZ_OHM_MEDICION1);
                byte[] DIEZ_OHM_MEDICION2 = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_MEDICION2"];
                MemoryStream DIEZ_OHM_MEDICION2m = new MemoryStream(DIEZ_OHM_MEDICION2);
                byte[] DIEZ_OHM_MEDICION3 = (byte[])ds.Tables[0].Rows[0]["DIEZ_OHM_MEDICION3"];
                MemoryStream DIEZ_OHM_MEDICION3m = new MemoryStream(DIEZ_OHM_MEDICION3);
                #endregion

                String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);



            }
            catch (Exception ex)
            {

                MessageBox.Show(ex.Message);
            }

        }
    }
}