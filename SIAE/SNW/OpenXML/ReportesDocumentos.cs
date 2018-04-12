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
                SqlCommand cmd = new SqlCommand("[USP_R_INSTALACION_POZO_TIERRA_A]", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CH_ID_TAREA", IdTarea);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                con.Close();

                #region valores String
                String INSTITUCION = ds.Tables[0].Rows[0]["INSTITUCION"].ToString();
                String CODIGO_IIBB = ds.Tables[0].Rows[0]["CODIGO_IIBB"].ToString();
                String NOMBRE_IIBB = ds.Tables[0].Rows[0]["NOMBRE_IIBB"].ToString();
                #endregion

                #region valores binarios
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

                #region Agregando los datos 
                ExcelTools.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", INSTITUCION,7,"G");
                ExcelTools.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", CODIGO_IIBB, 7, "O");
                ExcelTools.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", NOMBRE_IIBB, 8, "K");

                ExcelTools.AddImageDocument(false,excelGenerado, "POZO A TIERRA 10 Ohm",DIEZ_OHM_FRONTAL_IIBBm,"",13,3,1317,340);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_UBIC_POZO_ANTES_INSTALACIONm, "", 49, 3, 1317, 340);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_ZANJA_ABIERTAm, "", 83, 3, 540, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJAm, "", 83, 14, 540, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJAm, "", 102, 3, 540, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VESTIDO_DIS_CEMENTOm, "", 102, 14, 540, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_REJE_COBRE_01m, "", 123, 3, 232, 335);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_REJE_COBRE_02m, "", 123, 8, 302, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm",DIEZ_OHM_VESTIDO_DIS_CEMENTOm, "", 123, 14, 675, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm",DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADAm, "", 142, 3, 533, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VERTIDO_RESTO_TIERRAm, "", 142, 14, 718, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VERTIDO_RELLENADO_TIERRAm, "", 160,3, 534, 334);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION1m, "", 181, 7, 863, 274);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION2m, "", 181, 7, 863, 274);
                ExcelTools.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION3m, "", 181, 7, 863, 274);
                #endregion

            }
            catch (Exception ex)
            {

                MessageBox.Show(ex.Message);
            }

        }

        public void ActaSeguridadDistribucion(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            try
            {
                SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);
                SqlCommand cmd = new SqlCommand("[USP_R_ACTA_SEGURIDAD_DISTRIBUCION]", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CH_ID_TAREA", IdTarea);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataSet ds = new DataSet();
                da.Fill(ds);
                con.Close();

                #region valores_String
                String NOMBRE_NODO = "NODO " +ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();
                String FECHA = ds.Tables[0].Rows[0]["FECHA"].ToString();
                String POWER_CABLE_3X14AWG = ds.Tables[0].Rows[0]["POWER_CABLE_3X14AWG"].ToString();
                String OUTDOOR_CABLE_2X0_22SQMM_RED_BLACK = ds.Tables[0].Rows[0]["OUTDOOR_CABLE_2X0_22SQMM_RED_BLACK"].ToString();
                String OUTDOOR_CABLE_4X0_22SQMM = ds.Tables[0].Rows[0]["OUTDOOR_CABLE_4X0_22SQMM"].ToString();
                String SILICONA_TRANSPARENTE_200ML = ds.Tables[0].Rows[0]["SILICONA_TRANSPARENTE_200ML"].ToString();
                String TUBO_CORRUGADO_PLEGABLE_PVC_20MM = ds.Tables[0].Rows[0]["TUBO_CORRUGADO_PLEGABLE_PVC_20MM"].ToString();
                String SPIRAL_WRAP_12MM_WHITE = ds.Tables[0].Rows[0]["SPIRAL_WRAP_12MM_WHITE"].ToString();
                String STEEL_FLEXIBLE_CONDUIT_34_DFX_LT = ds.Tables[0].Rows[0]["STEEL_FLEXIBLE_CONDUIT_34_DFX_LT"].ToString();
                String GROUND_CABLE_AWG_10_YELLOWGREEN = ds.Tables[0].Rows[0]["GROUND_CABLE_AWG_10_YELLOWGREEN"].ToString();
                String DATA_CABLE_CAT5E_FOR_OUTDOOR = ds.Tables[0].Rows[0]["DATA_CABLE_CAT5E_FOR_OUTDOOR"].ToString();
                String LAN_CABLE_CAT5E_UTP_24AWG_LSZH_GREY = ds.Tables[0].Rows[0]["LAN_CABLE_CAT5E_UTP_24AWG_LSZH_GREY"].ToString();
                String PVC_TAPE_25M_X_19MM_BLACK = ds.Tables[0].Rows[0]["PVC_TAPE_25M_X_19MM_BLACK"].ToString();
                String EXTINGUIDOR_EXT_FECHA_EXPIRACION = ds.Tables[0].Rows[0]["EXTINGUIDOR_EXT_FECHA_EXPIRACION"].ToString();
                String EXTINGUIDOR_INT_FECHA_EXPIRACION = ds.Tables[0].Rows[0]["EXTINGUIDOR_INT_FECHA_EXPIRACION"].ToString();
                #endregion

                #region valores binarios
                byte[] FACHADA_DEL_NODO = (byte[])ds.Tables[0].Rows[0]["FACHADA_DEL_NODO"];
                MemoryStream mFACHADA_DEL_NODO = new MemoryStream(FACHADA_DEL_NODO);
                byte[] SALA_EQUIPOS_PANORAMICA_RACK = (byte[])ds.Tables[0].Rows[0]["SALA_EQUIPOS_PANORAMICA_RACK"];
                MemoryStream mSALA_EQUIPOS_PANORAMICA_RACK = new MemoryStream(SALA_EQUIPOS_PANORAMICA_RACK);
                byte[] PANORAMICA_INTERIOR_01 = (byte[])ds.Tables[0].Rows[0]["PANORAMICA_INTERIOR_01"];
                MemoryStream mPANORAMICA_INTERIOR_01 = new MemoryStream(PANORAMICA_INTERIOR_01);
                byte[] PANORAMICA_INTERIOR_02 = (byte[])ds.Tables[0].Rows[0]["PANORAMICA_INTERIOR_02"];
                MemoryStream mPANORAMICA_INTERIOR_02 = new MemoryStream(PANORAMICA_INTERIOR_02);
                byte[] PANORAMICA_EQUIPOS_PATIO = (byte[])ds.Tables[0].Rows[0]["PANORAMICA_EQUIPOS_PATIO"];
                MemoryStream mPANORAMICA_EQUIPOS_PATIO = new MemoryStream(PANORAMICA_EQUIPOS_PATIO);
                byte[] BREAKER_ASIGNADO_PARA_SEGURIDAD = (byte[])ds.Tables[0].Rows[0]["BREAKER_ASIGNADO_PARA_SEGURIDAD"];
                MemoryStream mBREAKER_ASIGNADO_PARA_SEGURIDAD = new MemoryStream(BREAKER_ASIGNADO_PARA_SEGURIDAD);
                byte[] CERRADURA_ELECTROMAGNETICA_EXTERNA = (byte[])ds.Tables[0].Rows[0]["CERRADURA_ELECTROMAGNETICA_EXTERNA"];
                MemoryStream mCERRADURA_ELECTROMAGNETICA_EXTERNA = new MemoryStream(CERRADURA_ELECTROMAGNETICA_EXTERNA);
                byte[] CERRADURA_ELECTROMAGNETICA_EXTERNA2 = (byte[])ds.Tables[0].Rows[0]["CERRADURA_ELECTROMAGNETICA_EXTERNA2"];
                MemoryStream mCERRADURA_ELECTROMAGNETICA_EXTERNA2 = new MemoryStream(CERRADURA_ELECTROMAGNETICA_EXTERNA2);
                byte[] SENSOR_MAGNETICO_EXTERMO = (byte[])ds.Tables[0].Rows[0]["SENSOR_MAGNETICO_EXTERMO"];
                MemoryStream mSENSOR_MAGNETICO_EXTERMO = new MemoryStream(SENSOR_MAGNETICO_EXTERMO);
                byte[] SENSOR_MAGNETICO_EXTERNO2 = (byte[])ds.Tables[0].Rows[0]["SENSOR_MAGNETICO_EXTERNO2"];
                MemoryStream mSENSOR_MAGNETICO_EXTERNO2 = new MemoryStream(SENSOR_MAGNETICO_EXTERNO2);
                byte[] CERRADURA_ELECTRICA_EXTERNA = (byte[])ds.Tables[0].Rows[0]["CERRADURA_ELECTRICA_EXTERNA"];
                MemoryStream mCERRADURA_ELECTRICA_EXTERNA = new MemoryStream(CERRADURA_ELECTRICA_EXTERNA);
                byte[] SENSOR_MOVIMIENTO_90_EXTERNO_N1 = (byte[])ds.Tables[0].Rows[0]["SENSOR_MOVIMIENTO_90_EXTERNO_N1"];
                MemoryStream mSENSOR_MOVIMIENTO_90_EXTERNO_N1 = new MemoryStream(SENSOR_MOVIMIENTO_90_EXTERNO_N1);
                byte[] SENSOR_MOVIMIENTO_90_EXTERNO_N2 = (byte[])ds.Tables[0].Rows[0]["SENSOR_MOVIMIENTO_90_EXTERNO_N2"];
                MemoryStream mSENSOR_MOVIMIENTO_90_EXTERNO_N2 = new MemoryStream(SENSOR_MOVIMIENTO_90_EXTERNO_N2);
                byte[] SIRENA_ESTROBOSCOPICA = (byte[])ds.Tables[0].Rows[0]["SIRENA_ESTROBOSCOPICA"];
                MemoryStream mSIRENA_ESTROBOSCOPICA = new MemoryStream(SIRENA_ESTROBOSCOPICA);
                byte[] LECTOR_BIOMETRICO = (byte[])ds.Tables[0].Rows[0]["LECTOR_BIOMETRICO"];
                MemoryStream mLECTOR_BIOMETRICO = new MemoryStream(LECTOR_BIOMETRICO);
                byte[] LECTOR_TARJETA = (byte[])ds.Tables[0].Rows[0]["LECTOR_TARJETA"];
                MemoryStream mLECTOR_TARJETA = new MemoryStream(LECTOR_TARJETA);
                byte[] CAMARA_EXTERIOR_PTZ = (byte[])ds.Tables[0].Rows[0]["CAMARA_EXTERIOR_PTZ"];
                MemoryStream mCAMARA_EXTERIOR_PTZ = new MemoryStream(CAMARA_EXTERIOR_PTZ);
                byte[] EXTINTOR_EXTERIOR = (byte[])ds.Tables[0].Rows[0]["EXTINTOR_EXTERIOR"];
                MemoryStream mEXTINTOR_EXTERIOR = new MemoryStream(EXTINTOR_EXTERIOR);
                byte[] SENSOR_MAGNETICO_INTERNO = (byte[])ds.Tables[0].Rows[0]["SENSOR_MAGNETICO_INTERNO"];
                MemoryStream mSENSOR_MAGNETICO_INTERNO = new MemoryStream(SENSOR_MAGNETICO_INTERNO);
                byte[] SENSOR_MAGNETICO_INTERNO_2 = (byte[])ds.Tables[0].Rows[0]["SENSOR_MAGNETICO_INTERNO_2"];
                MemoryStream mSENSOR_MAGNETICO_INTERNO_2 = new MemoryStream(SENSOR_MAGNETICO_INTERNO_2);
                byte[] SENSOR_OCUPACIONAL = (byte[])ds.Tables[0].Rows[0]["SENSOR_OCUPACIONAL"];
                MemoryStream mSENSOR_OCUPACIONAL = new MemoryStream(SENSOR_OCUPACIONAL);
                byte[] SENSOR_DE_HUMO = (byte[])ds.Tables[0].Rows[0]["SENSOR_DE_HUMO"];
                MemoryStream mSENSOR_DE_HUMO = new MemoryStream(SENSOR_DE_HUMO);
                byte[] SENSOR_MOVIMIENTO_360 = (byte[])ds.Tables[0].Rows[0]["SENSOR_MOVIMIENTO_360"];
                MemoryStream mSENSOR_MOVIMIENTO_360 = new MemoryStream(SENSOR_MOVIMIENTO_360);
                byte[] SENSOR_DE_INUNDACION = (byte[])ds.Tables[0].Rows[0]["SENSOR_DE_INUNDACION"];
                MemoryStream mSENSOR_DE_INUNDACION = new MemoryStream(SENSOR_DE_INUNDACION);
                byte[] CAMARA_PTZ_INTERIOR = (byte[])ds.Tables[0].Rows[0]["CAMARA_PTZ_INTERIOR"];
                MemoryStream mCAMARA_PTZ_INTERIOR = new MemoryStream(CAMARA_PTZ_INTERIOR);
                byte[] EXTINTOR_INTERIOR = (byte[])ds.Tables[0].Rows[0]["EXTINTOR_INTERIOR"];
                MemoryStream mEXTINTOR_INTERIOR = new MemoryStream(EXTINTOR_INTERIOR);
                byte[] RELE_EQUIPO_INTERO = (byte[])ds.Tables[0].Rows[0]["RELE_EQUIPO_INTERO"];
                MemoryStream mRELE_EQUIPO_INTERO = new MemoryStream(RELE_EQUIPO_INTERO);
                byte[] CONTROLADOR_NVR_SWITCH = (byte[])ds.Tables[0].Rows[0]["CONTROLADOR_NVR_SWITCH"];
                MemoryStream mCONTROLADOR_NVR_SWITCH = new MemoryStream(CONTROLADOR_NVR_SWITCH);
                byte[] ATERRAMIENTO_CONTROLADOR = (byte[])ds.Tables[0].Rows[0]["ATERRAMIENTO_CONTROLADOR"];
                MemoryStream mATERRAMIENTO_CONTROLADOR = new MemoryStream(ATERRAMIENTO_CONTROLADOR);
                byte[] ATERRAMIENTO_NVR_POE = (byte[])ds.Tables[0].Rows[0]["ATERRAMIENTO_NVR_POE"];
                MemoryStream mATERRAMIENTO_NVR_POE = new MemoryStream(ATERRAMIENTO_NVR_POE);
                byte[] ATERRAMIENTO_NVR_POE_2 = (byte[])ds.Tables[0].Rows[0]["ATERRAMIENTO_NVR_POE_2"];
                MemoryStream mATERRAMIENTO_NVR_POE_2 = new MemoryStream(ATERRAMIENTO_NVR_POE_2);
                byte[] ATERRAMIENTO_A_BARRA = (byte[])ds.Tables[0].Rows[0]["ATERRAMIENTO_A_BARRA"];
                MemoryStream mATERRAMIENTO_A_BARRA = new MemoryStream(ATERRAMIENTO_A_BARRA);
                byte[] SERIAL_NUMBER_SENSOR_MOVIMIENTO_1 = (byte[])ds.Tables[0].Rows[0]["SERIAL_NUMBER_SENSOR_MOVIMIENTO_1"];
                MemoryStream mSERIAL_NUMBER_SENSOR_MOVIMIENTO_1 = new MemoryStream(SERIAL_NUMBER_SENSOR_MOVIMIENTO_1);
                byte[] SERIAL_NUMBER_SENSOR_MOVIMIENTO_2 = (byte[])ds.Tables[0].Rows[0]["SERIAL_NUMBER_SENSOR_MOVIMIENTO_2"];
                MemoryStream mSERIAL_NUMBER_SENSOR_MOVIMIENTO_2 = new MemoryStream(SERIAL_NUMBER_SENSOR_MOVIMIENTO_2);
                byte[] SERIAL_NUMBER_SWITCH_POE_NVR = (byte[])ds.Tables[0].Rows[0]["SERIAL_NUMBER_SWITCH_POE_NVR"];
                MemoryStream mSERIAL_NUMBER_SWITCH_POE_NVR = new MemoryStream(SERIAL_NUMBER_SWITCH_POE_NVR);
                byte[] SERIAL_NUMBER_SWITCH_POE_NVR_2 = (byte[])ds.Tables[0].Rows[0]["SERIAL_NUMBER_SWITCH_POE_NVR_2"];
                MemoryStream mSERIAL_NUMBER_SWITCH_POE_NVR_2 = new MemoryStream(SERIAL_NUMBER_SWITCH_POE_NVR_2);
                byte[] SERIAL_NUMBER_CONTROLADOR = (byte[])ds.Tables[0].Rows[0]["SERIAL_NUMBER_CONTROLADOR"];
                MemoryStream mSERIAL_NUMBER_CONTROLADOR = new MemoryStream(SERIAL_NUMBER_CONTROLADOR);
                byte[] ETIQUETADOS_EQUIPOS_CONTROLADOR = (byte[])ds.Tables[0].Rows[0]["ETIQUETADOS_EQUIPOS_CONTROLADOR"];
                MemoryStream mETIQUETADOS_EQUIPOS_CONTROLADOR = new MemoryStream(ETIQUETADOS_EQUIPOS_CONTROLADOR);
                byte[] ETIQUETADOS_EQUIPOS_NVR = (byte[])ds.Tables[0].Rows[0]["ETIQUETADOS_EQUIPOS_NVR"];
                MemoryStream mETIQUETADOS_EQUIPOS_NVR = new MemoryStream(ETIQUETADOS_EQUIPOS_NVR);
                byte[] CHECKLIST = (byte[])ds.Tables[0].Rows[0]["CHECKLIST"];
                MemoryStream mCHECKLIST = new MemoryStream(CHECKLIST);
                byte[] CAMARA_EXTERIOR_MODO_NORMAL_POS1 = (byte[])ds.Tables[0].Rows[0]["CAMARA_EXTERIOR_MODO_NORMAL_POS1"];
                MemoryStream mCAMARA_EXTERIOR_MODO_NORMAL_POS1 = new MemoryStream(CAMARA_EXTERIOR_MODO_NORMAL_POS1);
                byte[] CAMARA_EXTERIOR_MODO_NORMAL_POS2 = (byte[])ds.Tables[0].Rows[0]["CAMARA_EXTERIOR_MODO_NORMAL_POS2"];
                MemoryStream mCAMARA_EXTERIOR_MODO_NORMAL_POS2 = new MemoryStream(CAMARA_EXTERIOR_MODO_NORMAL_POS2);
                byte[] CAMARA_INTERIOR_MODO_NORMAL = (byte[])ds.Tables[0].Rows[0]["CAMARA_INTERIOR_MODO_NORMAL"];
                MemoryStream mCAMARA_INTERIOR_MODO_NORMAL = new MemoryStream(CAMARA_INTERIOR_MODO_NORMAL);
                byte[] CAMARA_INTERIOR_MODO_INFRARROJO = (byte[])ds.Tables[0].Rows[0]["CAMARA_INTERIOR_MODO_INFRARROJO"];
                MemoryStream mCAMARA_INTERIOR_MODO_INFRARROJO = new MemoryStream(CAMARA_INTERIOR_MODO_INFRARROJO);
                byte[] TPA_PUERTA_PRINCIPAL_ABIERTA = (byte[])ds.Tables[0].Rows[0]["TPA_PUERTA_PRINCIPAL_ABIERTA"];
                MemoryStream mTPA_PUERTA_PRINCIPAL_ABIERTA = new MemoryStream(TPA_PUERTA_PRINCIPAL_ABIERTA);
                byte[] TPA_PUERTA_SALAS_EQUIPOS_ABIERTA = (byte[])ds.Tables[0].Rows[0]["TPA_PUERTA_SALAS_EQUIPOS_ABIERTA"];
                MemoryStream mTPA_PUERTA_SALAS_EQUIPOS_ABIERTA = new MemoryStream(TPA_PUERTA_SALAS_EQUIPOS_ABIERTA);
                byte[] TPA_CAMARA_INTERNA = (byte[])ds.Tables[0].Rows[0]["TPA_CAMARA_INTERNA"];
                MemoryStream mTPA_CAMARA_INTERNA = new MemoryStream(TPA_CAMARA_INTERNA);
                byte[] TPA_CAMARA_EXTERNA = (byte[])ds.Tables[0].Rows[0]["TPA_CAMARA_EXTERNA"];
                MemoryStream mTPA_CAMARA_EXTERNA = new MemoryStream(TPA_CAMARA_EXTERNA);
                byte[] TPA_SENSOR_DE_ANIEGO = (byte[])ds.Tables[0].Rows[0]["TPA_SENSOR_DE_ANIEGO"];
                MemoryStream mTPA_SENSOR_DE_ANIEGO = new MemoryStream(TPA_SENSOR_DE_ANIEGO);
                byte[] TPA_SENSOR_DE_HUMO = (byte[])ds.Tables[0].Rows[0]["TPA_SENSOR_DE_HUMO"];
                MemoryStream mTPA_SENSOR_DE_HUMO = new MemoryStream(TPA_SENSOR_DE_HUMO);
                byte[] TPA_TAMPER_SENSOR_90_1 = (byte[])ds.Tables[0].Rows[0]["TPA_TAMPER_SENSOR_90_1"];
                MemoryStream mTPA_TAMPER_SENSOR_90_1 = new MemoryStream(TPA_TAMPER_SENSOR_90_1);
                byte[] TPA_MOVIMIENTO_SENSOR_90_1 = (byte[])ds.Tables[0].Rows[0]["TPA_MOVIMIENTO_SENSOR_90_1"];
                MemoryStream mTPA_MOVIMIENTO_SENSOR_90_1 = new MemoryStream(TPA_MOVIMIENTO_SENSOR_90_1);
                byte[] TPA_MASKING_SENSOR_90_1 = (byte[])ds.Tables[0].Rows[0]["TPA_MASKING_SENSOR_90_1"];
                MemoryStream mTPA_MASKING_SENSOR_90_1 = new MemoryStream(TPA_MASKING_SENSOR_90_1);
                byte[] TPA_TAMPER_SENSOR_90_2 = (byte[])ds.Tables[0].Rows[0]["TPA_TAMPER_SENSOR_90_2"];
                MemoryStream mTPA_TAMPER_SENSOR_90_2 = new MemoryStream(TPA_TAMPER_SENSOR_90_2);
                byte[] TPA_MOVIMIENTO_SENSOR_90_2 = (byte[])ds.Tables[0].Rows[0]["TPA_MOVIMIENTO_SENSOR_90_2"];
                MemoryStream mTPA_MOVIMIENTO_SENSOR_90_2 = new MemoryStream(TPA_MOVIMIENTO_SENSOR_90_2);
                byte[] TPA_MASKING_SENSOR_90_2 = (byte[])ds.Tables[0].Rows[0]["TPA_MASKING_SENSOR_90_2"];
                MemoryStream mTPA_MASKING_SENSOR_90_2 = new MemoryStream(TPA_MASKING_SENSOR_90_2);
                byte[] TPA_ALARMA_TAMPER_SENSOR_360 = (byte[])ds.Tables[0].Rows[0]["TPA_ALARMA_TAMPER_SENSOR_360"];
                MemoryStream mTPA_ALARMA_TAMPER_SENSOR_360 = new MemoryStream(TPA_ALARMA_TAMPER_SENSOR_360);
                byte[] TPA_ALARMA_MOVIMIENTO_SENSOR_360 = (byte[])ds.Tables[0].Rows[0]["TPA_ALARMA_MOVIMIENTO_SENSOR_360"];
                MemoryStream mTPA_ALARMA_MOVIMIENTO_SENSOR_360 = new MemoryStream(TPA_ALARMA_MOVIMIENTO_SENSOR_360);
                byte[] PING_CAMARA_1_INDOOR = (byte[])ds.Tables[0].Rows[0]["PING_CAMARA_1_INDOOR"];
                MemoryStream mPING_CAMARA_1_INDOOR = new MemoryStream(PING_CAMARA_1_INDOOR);
                byte[] PING_CAMARA_2_OUTDOOR = (byte[])ds.Tables[0].Rows[0]["PING_CAMARA_2_OUTDOOR"];
                MemoryStream mPING_CAMARA_2_OUTDOOR = new MemoryStream(PING_CAMARA_2_OUTDOOR);
                byte[] PING_CONTROLADOR = (byte[])ds.Tables[0].Rows[0]["PING_CONTROLADOR"];
                MemoryStream mPING_CONTROLADOR = new MemoryStream(PING_CONTROLADOR);
                byte[] PING_GATEWAY = (byte[])ds.Tables[0].Rows[0]["PING_GATEWAY"];
                MemoryStream mPING_GATEWAY = new MemoryStream(PING_GATEWAY);
                byte[] PING_NVR = (byte[])ds.Tables[0].Rows[0]["PING_NVR"];
                MemoryStream mPING_NVR = new MemoryStream(PING_NVR);
                byte[] PING_BIOMETRICO = (byte[])ds.Tables[0].Rows[0]["PING_BIOMETRICO"];
                MemoryStream mPING_BIOMETRICO = new MemoryStream(PING_BIOMETRICO);
                #endregion

                String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando datos
                ExcelTools.UpdateCell(excelGenerado, "Carátula",NOMBRE_NODO,15,"D");
                ExcelTools.UpdateCell(excelGenerado, "Carátula",NOMBRE_NODO,17,"D");
                ExcelTools.UpdateCell(excelGenerado, "Carátula", TIPO_NODO, 22, "D");
                ExcelTools.UpdateCell(excelGenerado, "Carátula",CODIGO_NODO,24,"D");
                ExcelTools.UpdateCell(excelGenerado, "Carátula", FECHA, 26, "D");

                ExcelTools.AddImageDocument(false,excelGenerado, "Reporte fotográfico",mFACHADA_DEL_NODO,"",10,4,237,192);
                ExcelTools.AddImageDocument(false,excelGenerado, "Reporte fotográfico",mSALA_EQUIPOS_PANORAMICA_RACK,"",10,16,152,194);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_INTERIOR_01, "",26,3,271,194);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_INTERIOR_02, "", 26, 16, 151, 195);
                ExcelTools.AddImageDocument(false,excelGenerado, "Reporte fotográfico",mPANORAMICA_EQUIPOS_PATIO,"",42,3,164,195);
                ExcelTools.AddImageDocument(false,excelGenerado, "Reporte fotográfico",mBREAKER_ASIGNADO_PARA_SEGURIDAD,"",42,16,195,191);
                ExcelTools.AddImageDocument(false,excelGenerado, "Reporte fotográfico",mCERRADURA_ELECTROMAGNETICA_EXTERNA,"",59,3,157,175);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTROMAGNETICA_EXTERNA2, "", 59, 7, 146, 175);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_EXTERMO, "", 59, 14, 162, 175);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_EXTERNO2, "", 59, 19, 164, 175);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTRICA_EXTERNA, "", 78, 5, 169,221);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_90_EXTERNO_N1, "", 78, 14, 297, 220);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_90_EXTERNO_N2, "", 96, 3, 254, 189);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSIRENA_ESTROBOSCOPICA, "", 96, 16, 146, 193);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mLECTOR_BIOMETRICO, "", 116, 5, 175, 217);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mLECTOR_TARJETA, "", 116, 16, 164, 217);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_PTZ, "", 135, 3, 296, 220);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mEXTINTOR_EXTERIOR, "", 135, 14, 302, 227);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_INTERNO, "", 156, 3, 148, 205);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_INTERNO_2, "", 156, 7, 153, 205);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_OCUPACIONAL, "", 156, 14, 301, 200);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_DE_HUMO, "", 172, 3, 305, 228);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_360, "", 172, 14, 306, 230);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_DE_INUNDACION, "", 188, 4, 197, 226);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_PTZ_INTERIOR, "", 188, 15, 235, 227);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mEXTINTOR_INTERIOR, "", 205, 4, 257, 341);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mRELE_EQUIPO_INTERO, "", 208, 14, 316, 243 );
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCONTROLADOR_NVR_SWITCH, "", 222, 7, 393, 244);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_CONTROLADOR, "", 247, 3, 302, 225);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_NVR_POE, "", 247, 14, 152, 211);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_NVR_POE_2, "", 247, 19, 165, 211);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_A_BARRA, "", 263, 3, 264, 197);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SENSOR_MOVIMIENTO_1, "", 282, 3, 274, 200);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SENSOR_MOVIMIENTO_2, "", 282, 15, 274, 200);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SWITCH_POE_NVR, "", 298, 3, 146, 234);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SWITCH_POE_NVR_2, "", 298, 7, 169, 238);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_CONTROLADOR, "", 298, 15, 221, 239);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mETIQUETADOS_EQUIPOS_CONTROLADOR, "", 317, 6, 413, 225);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mETIQUETADOS_EQUIPOS_NVR, "", 335, 5, 460, 227);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCHECKLIST, "", 353, 7, 435, 542);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_MODO_NORMAL_POS1, "", 391, 6, 487, 274);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_MODO_NORMAL_POS2, "", 408, 6, 454, 228);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_INTERIOR_MODO_NORMAL, "", 425, 6, 448, 229);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_INTERIOR_MODO_INFRARROJO, "", 442, 6, 448, 229);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_PUERTA_PRINCIPAL_ABIERTA, "", 459, 5, 519, 271);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_PUERTA_SALAS_EQUIPOS_ABIERTA, "", 476, 5, 519, 271);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_CAMARA_INTERNA, "", 492, 6, 443, 270);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_CAMARA_EXTERNA, "", 507, 6, 443, 270);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_SENSOR_DE_ANIEGO, "", 522, 5, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_SENSOR_DE_HUMO, "", 539, 6, 443, 270);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_TAMPER_SENSOR_90_1, "", 554, 6, 443, 270);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MOVIMIENTO_SENSOR_90_1, "", 569, 5, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MASKING_SENSOR_90_1, "", 584, 5, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_TAMPER_SENSOR_90_2, "", 599, 5, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MOVIMIENTO_SENSOR_90_2, "", 614, 5, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MASKING_SENSOR_90_2, "", 629, 6, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_ALARMA_TAMPER_SENSOR_360, "", 644, 6, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_ALARMA_MOVIMIENTO_SENSOR_360, "", 659, 6, 531, 280);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CAMARA_1_INDOOR, "", 676, 5, 535, 231);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CAMARA_2_OUTDOOR, "", 693, 5, 535, 231);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CONTROLADOR, "", 710, 5, 535, 231);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_GATEWAY, "", 727, 5, 535, 231);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_NVR, "", 744, 6, 454, 242);
                ExcelTools.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_BIOMETRICO, "", 761, 5, 535, 231);

                #endregion

            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}