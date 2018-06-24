using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data.SqlClient;
using System.Data;
using System.IO;
using System.Windows.Forms;
using DataAccess;
using System.Globalization;
using BusinessEntity;

namespace BusinessLogic
{
    public class ReporteDocumentosBL
    {
        DBBaseDatos baseDatosDA = new DBBaseDatos();

        public void PruebaInterferencia(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();
           //controlar los valores nulos cuando se agregan los datos.
            try
            {
                baseDatosDA.CrearComando("USP_R_PRUEBAINTERFERENCIA", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

               String prueba =  ds.Tables[0].Rows[0]["COD_NODO"].ToString();
                String codNodo = ds.Tables[0].Rows[0]["COD_NODO"].ToString();

                byte[] imageBuffer = (byte[])ds.Tables[0].Rows[0]["CAP_PANT_EPMP1000"];

                MemoryStream EPMP1000 = new MemoryStream(imageBuffer);

               //// String usuarioWindows = Environment.UserName;
                //  String excelGenerado = "C:\\Users\\" + usuarioWindows + "\\Desktop\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\"+ IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);
                ExcelToolsBL.UpdateCell(excelGenerado, "Selección de Frecuencia", codNodo, 12, "E");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Selección de Frecuencia", EPMP1000, "", 18, 3, 525, 297);

                
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

        public void PruebaServicioDITGPMP(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {

            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_PRUEBAS_SERVICIO_DITG_PMP", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;


                #region Valores
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

                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando valores por Hoja de Excel
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", TIEMPO_PRUEBA, 34, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_MIN, 35, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_MAXIMO, 36, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_PROMEDIO, 37, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", JILTER_PROMEDIO, 38, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", DESV_ESTANDAR_RETARDO, 39, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", BYTES_RECIBIDOS, 40, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", THROUGHPUT_PROM, 41, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", DESCARTE_PAQUETES, 42, "E");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", FECHA_HORA_ROUTERm, "", 72, 2, 534, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", DIRECCIONES_MACm, "", 126, 2, 534, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", RESULTADO_PRUEBA_DITGm, "", 149, 2, 534, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_CPE_DESDE_NODO_Am, "", 48, 2, 534, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_ALL_USERS_01m, "", 98, 2, 177, 141);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_ALL_USERS_02m, "", 98, 5, 177, 141);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_ALL_USERS_03m, "", 98, 8, 177, 141);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_ALL_USERS_04m, "", 110, 2, 177, 141);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_ALL_USERS_05m, "", 110, 5, 177, 141);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", PING_ALL_USERS_06m, "", 110, 8, 177, 141);

                #endregion

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

        public void PruebaServicioDITGPTP(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_PRUEBAS_SERVICIO_DITG_PTP", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;


                #region Valores
                String TIEMPO_PRUEBA = ds.Tables[0].Rows[0]["TIEMPO_PRUEBA"].ToString();
                String RETARDO_MIN = ds.Tables[0].Rows[0]["RETARDO_MIN"].ToString();
                String RETARDO_MAXIMO = ds.Tables[0].Rows[0]["RETARDO_MAXIMO"].ToString();
                String RETARDO_PROMEDIO = ds.Tables[0].Rows[0]["RETARDO_PROMEDIO"].ToString();
                String JILTER_PROMEDIO = ds.Tables[0].Rows[0]["JILTER_PROMEDIO"].ToString();
                String DESV_ESTANDAR_RETARDO = ds.Tables[0].Rows[0]["DESV_ESTANDAR_RETARDO"].ToString();
                String BYTES_RECIBIDOS = ds.Tables[0].Rows[0]["BYTES_RECIBIDOS"].ToString();
                String THROUGHPUT_PROM = ds.Tables[0].Rows[0]["THROUGHPUT_PROM"].ToString();
                String DESCARTE_PAQUETES = ds.Tables[0].Rows[0]["DESCARTE_PAQUETES"].ToString();


                byte[] PANTALLA_RESULT_PRUEBA_DITG = (byte[])ds.Tables[0].Rows[0]["PANTALLA_RESULT_PRUEBA_DITG"];
                MemoryStream mPANTALLA_RESULT_PRUEBA_DITG = new MemoryStream(PANTALLA_RESULT_PRUEBA_DITG);
                byte[] FECHA_HORA_ROUTER = (byte[])ds.Tables[0].Rows[0]["FECHA_HORA_ROUTER"];
                MemoryStream FECHA_HORA_ROUTERm = new MemoryStream(FECHA_HORA_ROUTER);
                byte[] PING_TODOS_USUARIOS_MICRO = (byte[])ds.Tables[0].Rows[0]["PING_TODOS_USUARIOS_MICRO"];
                MemoryStream mPING_TODOS_USUARIOS_MICRO = new MemoryStream(PING_TODOS_USUARIOS_MICRO);
                byte[] DIRECCIONES_MAC = (byte[])ds.Tables[0].Rows[0]["DIRECCIONES_MAC"];
                MemoryStream DIRECCIONES_MACm = new MemoryStream(DIRECCIONES_MAC);
                byte[] RESULTADO_PRUEBA_DITG = (byte[])ds.Tables[0].Rows[0]["RESULTADO_PRUEBA_DITG"];
                MemoryStream RESULTADO_PRUEBA_DITGm = new MemoryStream(RESULTADO_PRUEBA_DITG);
               
                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando valores por Hoja de Excel
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", TIEMPO_PRUEBA, 34, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_MIN, 35, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_MAXIMO, 36, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", RETARDO_PROMEDIO, 37, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", JILTER_PROMEDIO, 38, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", DESV_ESTANDAR_RETARDO, 39, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", BYTES_RECIBIDOS, 40, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", THROUGHPUT_PROM, 41, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Pruebas de Servicios", DESCARTE_PAQUETES, 42, "E");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios",mPANTALLA_RESULT_PRUEBA_DITG, "", 48, 3, 660, 312);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", FECHA_HORA_ROUTERm, "", 72, 3, 660, 312);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios",mPING_TODOS_USUARIOS_MICRO, "", 98, 3, 660, 312);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", DIRECCIONES_MACm, "", 126, 2, 534, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Pruebas de Servicios", RESULTADO_PRUEBA_DITGm, "", 151, 2, 534, 234);
               
                #endregion

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {

                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }
        }
        public void Anexo2InventarioPMP(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ANEXO_02_INVENTARIO_PMP", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores
                String COD_NODO = ds.Tables[0].Rows[0]["COD_NODO"].ToString();

                byte[] ANTENA = (byte[])ds.Tables[0].Rows[0]["ANTENA"];
                MemoryStream ANTENAm = new MemoryStream(ANTENA);
                byte[] ARRESTOR_LAN = (byte[])ds.Tables[0].Rows[0]["ARRESTOR_LAN"];
                MemoryStream ARRESTOR_LANm = new MemoryStream(ARRESTOR_LAN);
                byte[] ODUs = (byte[])ds.Tables[0].Rows[0]["ODUs"];
                MemoryStream ODUsm = new MemoryStream(ODUs);
                byte[] POE = (byte[])ds.Tables[0].Rows[0]["POE"];
                MemoryStream POEm = new MemoryStream(POE);
                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Ingresando Valores
                ExcelToolsBL.UpdateCell(excelGenerado, "11 Serie logística","NODO: " +COD_NODO, 11, "B");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie logística", ANTENAm, "", 14, 2, 271, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie logística", ARRESTOR_LANm, "", 22, 2, 338, 254);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie logística", ODUsm, "", 29, 3, 178, 237);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie logística", POEm, "", 36, 2, 360, 269);

                #endregion

            }
            catch (Exception ex)
            {

                MessageBox.Show(ex.Message);
            }
            finally
            {

                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }
        }

        public void InstalacionPozoTierraTipoA(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {

            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_INSTALACION_POZO_TIERRA_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;


                #region valores String
                String TIPO_INSTITUCION = ds.Tables[0].Rows[0]["TIPO_INSTITUCION"].ToString();
                String CODIGO_IIBB = ds.Tables[0].Rows[0]["CODIGO_IIBB"].ToString();
                String NOMBRE_IIBB = ds.Tables[0].Rows[0]["NOMBRE_IIBB"].ToString();
                #endregion

                #region valores binarios

                #region Campos que no se usan en este tipo de pozo
                //byte[] CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB"];
                //MemoryStream CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBBm = new MemoryStream(CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB);
                //byte[] CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR"];
                //MemoryStream CINCO_OHM_UBICACION_POZO_ANTES_INSTALARm = new MemoryStream(CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR);
                //byte[] CINCO_OHM_PAN_ZANJA_ABIERTA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_ZANJA_ABIERTA"];
                //MemoryStream CINCO_OHM_PAN_ZANJA_ABIERTAm = new MemoryStream(CINCO_OHM_PAN_ZANJA_ABIERTA);
                //byte[] CINCO_OHM_PAN_VERTIDO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_TIERRA"];
                //MemoryStream CINCO_OHM_PAN_VERTIDO_TIERRAm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_TIERRA);
                //byte[] CINCO_OHM_PAN_VERTIDO_SAL = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_SAL"];
                //MemoryStream CINCO_OHM_PAN_VERTIDO_SALm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_SAL);
                //byte[] CINCO_OHM_PAN_VERTIDO_DISOLUCION = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_DISOLUCION"];
                //MemoryStream CINCO_OHM_PAN_VERTIDO_DISOLUCIONm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_DISOLUCION);
                //byte[] CINCO_OHM_PAN_COL_REJE_COBRE01 = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_COL_REJE_COBRE01"];
                //MemoryStream CINCO_OHM_PAN_COL_REJE_COBRE01m = new MemoryStream(CINCO_OHM_PAN_COL_REJE_COBRE01);
                //byte[] CINCO_OHM_PAN_COL_REJE_COBRE02 = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_COL_REJE_COBRE02"];
                //MemoryStream CINCO_OHM_PAN_COL_REJE_COBRE02m = new MemoryStream(CINCO_OHM_PAN_COL_REJE_COBRE02);
                //byte[] CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE"];
                //MemoryStream CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJEm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE);
                //byte[] CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO"];
                //MemoryStream CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTOm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO);
                //byte[] CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO"];
                //MemoryStream CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVOm = new MemoryStream(CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO);
                //byte[] CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA"];
                //MemoryStream CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJAm = new MemoryStream(CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA);
                //byte[] CINCO_OHM_MED1_PAN_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_MED1_PAN_POZO_TIERRA"];
                //MemoryStream CINCO_OHM_MED1_PAN_POZO_TIERRAm = new MemoryStream(CINCO_OHM_MED1_PAN_POZO_TIERRA);
                //byte[] CINCO_OHM_MED2_PAN_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_MED2_PAN_POZO_TIERRA"];
                //MemoryStream CINCO_OHM_MED2_PAN_POZO_TIERRAm = new MemoryStream(CINCO_OHM_MED2_PAN_POZO_TIERRA);
                //byte[] CINCO_OHM_MED3_PAN_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["CINCO_OHM_MED3_PAN_POZO_TIERRA"];
                //MemoryStream CINCO_OHM_MED3_PAN_POZO_TIERRAm = new MemoryStream(CINCO_OHM_MED3_PAN_POZO_TIERRA);
                #endregion

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

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando los datos 
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", TIPO_INSTITUCION, 7, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", CODIGO_IIBB, 7, "N");
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", NOMBRE_IIBB, 8, "G");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_FRONTAL_IIBBm, "", 13, 3, 1317, 340);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_UBIC_POZO_ANTES_INSTALACIONm, "", 49, 3, 1317, 340);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_ZANJA_ABIERTAm, "", 83, 3, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJAm, "", 83, 14, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJAm, "", 102, 3, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VESTIDO_DIS_CEMENTOm, "", 102, 14, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_REJE_COBRE_01m, "", 123, 3, 232, 335);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_REJE_COBRE_02m, "", 123, 8, 302, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VESTIDO_DIS_CEMENTOm, "", 123, 14, 675, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADAm, "", 142, 3, 533, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VERTIDO_RESTO_TIERRAm, "", 142, 14, 718, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VERTIDO_RELLENADO_TIERRAm, "", 160, 3, 534, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION1m, "", 181, 7, 863, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION2m, "", 181, 7, 863, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION3m, "", 181, 7, 863, 274);
                #endregion

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

        public void InstalacionPozoTierraTipoB(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {

            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_INSTALACION_POZO_TIERRA_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;


                #region valores String
                String TIPO_INSTITUCION = ds.Tables[0].Rows[0]["TIPO_INSTITUCION"].ToString();
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

                // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando los datos 

                #region Pozo a Tierra  10 ohm

                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", TIPO_INSTITUCION, 7, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", CODIGO_IIBB, 7, "N");
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 10 Ohm", NOMBRE_IIBB, 8, "G");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_FRONTAL_IIBBm, "", 13, 3, 1317, 340);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_UBIC_POZO_ANTES_INSTALACIONm, "", 49, 3, 1317, 340);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_ZANJA_ABIERTAm, "", 83, 3, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJAm, "", 83, 14, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJAm, "", 102, 3, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VESTIDO_DIS_CEMENTOm, "", 102, 14, 540, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_REJE_COBRE_01m, "", 123, 3, 232, 335);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_REJE_COBRE_02m, "", 123, 8, 302, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VESTIDO_DIS_CEMENTOm, "", 123, 14, 675, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADAm, "", 142, 3, 533, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VERTIDO_RESTO_TIERRAm, "", 142, 14, 718, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_VERTIDO_RELLENADO_TIERRAm, "", 160, 3, 534, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION1m, "", 181, 7, 1069, 351);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION2m, "", 201, 7, 1069, 351);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 10 Ohm", DIEZ_OHM_MEDICION3m, "", 221, 7, 1069, 351);

                #endregion

                #region Pozo a Tierra 5 ohm

                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 5 Ohm", TIPO_INSTITUCION, 7, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 5 Ohm", CODIGO_IIBB, 7, "N");
                ExcelToolsBL.UpdateCell(excelGenerado, "POZO A TIERRA 5 Ohm", NOMBRE_IIBB, 8, "G");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBBm, "", 13, 3, 1860, 480);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_UBICACION_POZO_ANTES_INSTALARm, "", 49, 3, 1799, 394);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_ZANJA_ABIERTAm, "", 83, 3, 755, 444);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_VERTIDO_TIERRAm, "", 83, 14, 916, 443);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_VERTIDO_SALm, "", 102, 3, 740, 444);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_VERTIDO_DISOLUCIONm, "", 102, 14, 974, 443);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_COL_REJE_COBRE01m, "", 123, 3, 232, 335);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_COL_REJE_COBRE02m, "", 123, 8, 302, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJEm, "", 123, 14, 675, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTOm, "", 142, 3, 533, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVOm, "", 142, 14, 718, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJAm, "", 160, 3, 534, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_MED1_PAN_POZO_TIERRAm, "", 181, 7, 1069, 351);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_MED2_PAN_POZO_TIERRAm, "", 201, 7, 1069, 351);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "POZO A TIERRA 5 Ohm", CINCO_OHM_MED3_PAN_POZO_TIERRAm, "", 221, 7, 1069, 351);

                #endregion
                #endregion

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

        public void ActaSeguridadDistribucion(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {

            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ACTA_SEGURIDAD_DISTRIBUCION", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_EQUIPAMIENTOS_SEGURIDAD_DISTRIBUCION", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_SEGURIDAD_DISTRIBUCION", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;


                #region valores_String
                String NOMBRE_NODO = "NODO " + ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy"); 

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

                DateTime extinguidor_fext = DateTime.Parse(ds.Tables[0].Rows[0]["EXTINGUIDOR_EXT_FECHA_EXPIRACION"].ToString());
                String EXTINGUIDOR_EXT_FECHA_EXPIRACION = extinguidor_fext.ToString("dd/MM/yyyy");

                DateTime extinguidor_fint = DateTime.Parse(ds.Tables[0].Rows[0]["EXTINGUIDOR_INT_FECHA_EXPIRACION"].ToString());
                String EXTINGUIDOR_INT_FECHA_EXPIRACION = extinguidor_fint.ToString("dd/MM/yyyy");

                String SERIAL_CAMARA_PTZ_INT = ds.Tables[0].Rows[0]["SERIAL_CAMARA_PTZ_INT"].ToString();
                String SERIAL_CAMARA_PTZ_EXT = ds.Tables[0].Rows[0]["SERIAL_CAMARA_PTZ_EXT"].ToString();
                String SERIAL_CONTROL_ALARMAS = ds.Tables[0].Rows[0]["SERIAL_CONTROL_ALARMAS"].ToString();
                String SERIAL_NVR = ds.Tables[0].Rows[0]["SERIAL_NVR"].ToString();
                String SERIAL_SWITCH_POE = ds.Tables[0].Rows[0]["SERIAL_SWITCH_POE"].ToString();
                String SERIAL_LECTOR_BIO = ds.Tables[0].Rows[0]["SERIAL_LECTOR_BIO"].ToString();
                String SERIAL_SENSOR_90_1 = ds.Tables[0].Rows[0]["SERIAL_SENSOR_90_1"].ToString();
                String SERIAL_SENSOR_90_2 = ds.Tables[0].Rows[0]["SERIAL_SENSOR_90_2"].ToString();
                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();

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
                //byte[] CERRADURA_ELECTROMAGNETICA_EXTERNA = (byte[])ds.Tables[0].Rows[0]["CERRADURA_ELECTROMAGNETICA_EXTERNA"];
                //MemoryStream mCERRADURA_ELECTROMAGNETICA_EXTERNA = new MemoryStream(CERRADURA_ELECTROMAGNETICA_EXTERNA);
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

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando datos

                #region Caratula
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", "NODO  " +NOMBRE_NODO, 15, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NOMBRE_NODO + " - PERU", 17, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", TIPO_NODO, 22, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", CODIGO_NODO, 24, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", FECHA, 26, "D");
                #endregion

                #region Acta de Instalacion Aceptacion

                ExcelToolsBL.UpdateCell(excelGenerado, "Acta de Instal- aceptación", "NODO  " + NOMBRE_NODO, 15, "E");

                #endregion


                #region Reporte Fotografico

                //aumentar ancho 70 y alto 60

                ExcelToolsBL.UpdateCell(excelGenerado, "Reporte fotográfico", " SISTEMAS DE SEGURIDAD NODO "+TIPO_NODO+ "_" + NOMBRE_NODO, 5, "B");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mFACHADA_DEL_NODO, "", 10, 4, 321, 260);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSALA_EQUIPOS_PANORAMICA_RACK, "", 10, 16, 202, 259);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_INTERIOR_01, "", 26, 3, 340, 254);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_INTERIOR_02, "", 26, 16, 221, 255);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_EQUIPOS_PATIO, "", 42, 3, 164, 195);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mBREAKER_ASIGNADO_PARA_SEGURIDAD, "", 42, 16, 195, 191);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTROMAGNETICA_EXTERNA, "", 59, 3, 157, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTROMAGNETICA_EXTERNA2, "", 59, 7, 146, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_EXTERMO, "", 59, 14, 162, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_EXTERNO2, "", 59, 19, 164, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTRICA_EXTERNA, "", 78, 5, 169, 221);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_90_EXTERNO_N1, "", 78, 14, 297, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_90_EXTERNO_N2, "", 96, 3, 254, 189);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSIRENA_ESTROBOSCOPICA, "", 96, 16, 146, 193);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mLECTOR_BIOMETRICO, "", 116, 5, 175, 217);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mLECTOR_TARJETA, "", 116, 16, 164, 217);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_PTZ, "", 135, 3, 296, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mEXTINTOR_EXTERIOR, "", 135, 14, 302, 227);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_INTERNO, "", 156, 3, 148, 205);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_INTERNO_2, "", 156, 7, 153, 205);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_OCUPACIONAL, "", 156, 14, 301, 200);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_DE_HUMO, "", 172, 3, 305, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_360, "", 172, 14, 306, 230);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_DE_INUNDACION, "", 188, 4, 197, 226);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_PTZ_INTERIOR, "", 188, 15, 235, 227);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mEXTINTOR_INTERIOR, "", 205, 4, 257, 341);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mRELE_EQUIPO_INTERO, "", 208, 14, 316, 243);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCONTROLADOR_NVR_SWITCH, "", 222, 7, 393, 244);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_CONTROLADOR, "", 247, 3, 302, 225);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_NVR_POE, "", 247, 14, 152, 211);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_NVR_POE_2, "", 247, 19, 165, 211);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_A_BARRA, "", 263, 3, 264, 197);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SENSOR_MOVIMIENTO_1, "", 282, 3, 274, 200);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SENSOR_MOVIMIENTO_2, "", 282, 15, 274, 200);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SWITCH_POE_NVR, "", 298, 3, 146, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SWITCH_POE_NVR_2, "", 298, 7, 169, 238);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_CONTROLADOR, "", 298, 15, 221, 239);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mETIQUETADOS_EQUIPOS_CONTROLADOR, "", 317, 6, 413, 225);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mETIQUETADOS_EQUIPOS_NVR, "", 335, 5, 460, 227);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCHECKLIST, "", 353, 7, 435, 542);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_MODO_NORMAL_POS1, "", 391, 6, 487, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_MODO_NORMAL_POS2, "", 408, 6, 454, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_INTERIOR_MODO_NORMAL, "", 425, 6, 448, 229);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_INTERIOR_MODO_INFRARROJO, "", 442, 6, 448, 229);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_PUERTA_PRINCIPAL_ABIERTA, "", 459, 5, 519, 271);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_PUERTA_SALAS_EQUIPOS_ABIERTA, "", 476, 5, 519, 271);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_CAMARA_INTERNA, "", 492, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_CAMARA_EXTERNA, "", 507, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_SENSOR_DE_ANIEGO, "", 522, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_SENSOR_DE_HUMO, "", 539, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_TAMPER_SENSOR_90_1, "", 554, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MOVIMIENTO_SENSOR_90_1, "", 569, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MASKING_SENSOR_90_1, "", 584, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_TAMPER_SENSOR_90_2, "", 599, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MOVIMIENTO_SENSOR_90_2, "", 614, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MASKING_SENSOR_90_2, "", 629, 6, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_ALARMA_TAMPER_SENSOR_360, "", 644, 6, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_ALARMA_MOVIMIENTO_SENSOR_360, "", 659, 6, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CAMARA_1_INDOOR, "", 676, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CAMARA_2_OUTDOOR, "", 693, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CONTROLADOR, "", 710, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_GATEWAY, "", 727, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_NVR, "", 744, 6, 454, 242);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_BIOMETRICO, "", 761, 5, 535, 231);
                #endregion

                #region Materiales

                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", "NODO  " + TIPO_NODO, 11, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", CODIGO_NODO, 11, "F");
              

                foreach (DataRow dr in ds1.Tables[0].Rows)
                {
                    String EQUIPO = dr["EQUIPO"].ToString();
                    String MARCA = dr["MARCA"].ToString();
                    String MODELO = dr["MODELO"].ToString();
                    String Nro_SERIE = dr["Nro_SERIE"].ToString();

                    int ind = Convert.ToInt32(ds1.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", Convert.ToString(ind+1), 16 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", EQUIPO, 16 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", "1", 16 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", MARCA, 16 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", MODELO, 16 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", Nro_SERIE, 16 + ind, "G");
                }


                foreach (DataRow dr in ds2.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String CODIGO = dr["CODIGO"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", Convert.ToString(ind + 1), 40 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", DESCRIPCION, 40 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", UNIDAD, 40 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", CANTIDAD, 40 + ind, "F");
                
                }
               
                #endregion

                #region ATP
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP",DEPARTAMENTO , 5, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", FECHA, 6, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", CODIGO_NODO, 5, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", NOMBRE_NODO, 6, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", EXTINGUIDOR_EXT_FECHA_EXPIRACION, 43, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", EXTINGUIDOR_INT_FECHA_EXPIRACION, 44, "G");
                #endregion

                #endregion

            }
            catch (Exception)
            {

                throw;
            }
            finally
            {

                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }

        }

        public void EstudioDeCampo(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {

            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ESTUDIO_DE_CAMPO", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;
                

                #region Ingresando Strings
               
                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

                String HORA_INICIO = ds.Tables[0].Rows[0]["HORA_INICIO"].ToString();
                String HORA_FIN = ds.Tables[0].Rows[0]["HORA_FIN"].ToString();
                String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();
                String UBIGEO = ds.Tables[0].Rows[0]["UBIGEO"].ToString();
                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();
                String PROVINCIA = ds.Tables[0].Rows[0]["PROVINCIA"].ToString();
                String DISTRITO = ds.Tables[0].Rows[0]["DISTRITO"].ToString();
                String NOMBRE_NODO = ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String LONGITUD_LOCALIDAD_PLAZA_PRINCIPAL = ds.Tables[0].Rows[0]["LONGITUD_LOCALIDAD_PLAZA_PRINCIPAL"].ToString();
                String LATITUD_LOCALIDAD_PLAZA_PRINCIPAL = ds.Tables[0].Rows[0]["LATITUD_LOCALIDAD_PLAZA_PRINCIPAL"].ToString();
                String ALTURA_MSNM = ds.Tables[0].Rows[0]["ALTURA_MSNM"].ToString();
                String AREA_NATURAL_PROTEG = ds.Tables[0].Rows[0]["AREA_NATURAL_PROTEG"].ToString();
                String NOMBRE_AREA_NATURAL = ds.Tables[0].Rows[0]["NOMBRE_AREA_NATURAL"].ToString();
                String RESTOS_ARQUEOLOGICOS = ds.Tables[0].Rows[0]["RESTOS_ARQUEOLOGICOS"].ToString();
                String ESPECIF_TIPO_RESTOS_ARQ = ds.Tables[0].Rows[0]["ESPECIF_TIPO_RESTOS_ARQ"].ToString();
                String BANCO_NACION = ds.Tables[0].Rows[0]["BANCO_NACION"].ToString();
                String AGENTE_BANCO_NACION = ds.Tables[0].Rows[0]["AGENTE_BANCO_NACION"].ToString();
                String CANTIDAD = ds.Tables[0].Rows[0]["CANTIDAD"].ToString();
                String OTROS_BANCOS = ds.Tables[0].Rows[0]["OTROS_BANCOS"].ToString();
                String CANTIDAD_OTROS_BANCOS = ds.Tables[0].Rows[0]["CANTIDAD_OTROS_BANCOS"].ToString();
                String ENTIDAD_IMPORTANTE = ds.Tables[0].Rows[0]["ENTIDAD_IMPORTANTE"].ToString();
                String IIEE = ds.Tables[0].Rows[0]["IIEE"].ToString();
                String CANTIDAD_IIEE = ds.Tables[0].Rows[0]["CANTIDAD_IIEE"].ToString();
                String POBLACION = ds.Tables[0].Rows[0]["POBLACION"].ToString();
                String N_DE_MUJERES = ds.Tables[0].Rows[0]["N_DE_MUJERES"].ToString();
                String N_DE_JOVENES_15_24 = ds.Tables[0].Rows[0]["N_DE_JOVENES_15_24"].ToString();
                String N_DE_PERSONAS_DISCAPACIDAD = ds.Tables[0].Rows[0]["N_DE_PERSONAS_DISCAPACIDAD"].ToString();
                String N_VIVIENDAS = ds.Tables[0].Rows[0]["N_VIVIENDAS"].ToString();
                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando datos al excel
                ExcelToolsBL.UpdateCell(excelGenerado,"Sheet3",FECHA,2,"A");
                ExcelToolsBL.UpdateCell(excelGenerado,"Sheet3",HORA_INICIO,2,"B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", HORA_FIN, 2, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", TIPO_NODO, 2, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", UBIGEO, 2, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", DEPARTAMENTO, 2, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", PROVINCIA, 2, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", DISTRITO, 2, "H");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", NOMBRE_NODO, 2, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", LONGITUD_LOCALIDAD_PLAZA_PRINCIPAL, 2, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", LATITUD_LOCALIDAD_PLAZA_PRINCIPAL, 2, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", ALTURA_MSNM, 2, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", AREA_NATURAL_PROTEG, 2, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", NOMBRE_AREA_NATURAL, 2, "N");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", RESTOS_ARQUEOLOGICOS, 2, "O");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", ESPECIF_TIPO_RESTOS_ARQ, 2, "P");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", BANCO_NACION, 2, "Q");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", AGENTE_BANCO_NACION, 2, "R");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", CANTIDAD, 2, "S");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", OTROS_BANCOS, 2, "T");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", CANTIDAD_OTROS_BANCOS, 2, "U");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", ENTIDAD_IMPORTANTE, 2, "V");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", IIEE, 2, "W");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", CANTIDAD_IIEE, 2, "X");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", POBLACION, 2, "Y");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", N_DE_MUJERES, 2, "Z");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", N_DE_JOVENES_15_24, 2, "AA");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", N_DE_PERSONAS_DISCAPACIDAD, 2, "AB");
                ExcelToolsBL.UpdateCell(excelGenerado, "Sheet3", N_VIVIENDAS, 2, "AC");
                #endregion

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

        public void ProtocoloInstalacion(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_PROTOCOLO_INSTALACION",CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores

                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();
                String NOMBRE_NODO = ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();
                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String FECHA = ds.Tables[0].Rows[0]["FECHA"].ToString();
                String NUM_SERIE_SWITCH = ds.Tables[0].Rows[0]["NUM_SERIE_SWITCH"].ToString();

                byte[] OMNISWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO_1_OMNISWITCH"];
                MemoryStream mOMNISWITCH = new MemoryStream(OMNISWITCH);
                byte[] PAN_RACK = (byte[])ds.Tables[0].Rows[0]["FOTO_2_PAN_RACK"];
                MemoryStream mPAN_RACK = new MemoryStream(PAN_RACK);
                byte[] CON_BREAKERS_ASIGNADOS = (byte[])ds.Tables[0].Rows[0]["FOTO_3_CON_BREAKERS_ASIGNADOS"];
                MemoryStream mCON_BREAKERS_ASIGNADOS = new MemoryStream(CON_BREAKERS_ASIGNADOS);
                byte[] CON_ALIMEN_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO_4_CON_ALIMEN_SWITCH"];
                MemoryStream mCON_ALIMEN_SWITCH = new MemoryStream(CON_ALIMEN_SWITCH);
                byte[] ATERRAMIENTO_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO_5_ATERRAMIENTO_SWITCH"];
                MemoryStream mATERRAMIENTO_SWITCH = new MemoryStream(ATERRAMIENTO_SWITCH);
                byte[] ATERRAMIENTO_BARRA = (byte[])ds.Tables[0].Rows[0]["FOTO_6_ATERRAMIENTO_BARRA"];
                MemoryStream mATERRAMIENTO_BARRA = new MemoryStream(ATERRAMIENTO_BARRA);

                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando Valores por Hoja Excel

                #region Caratula 
             
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", "NODO: " +" "+CODIGO_NODO+" "+" "+NOMBRE_NODO, 15, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", DEPARTAMENTO + "-PERU", 17, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", TIPO_NODO, 22, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", CODIGO_NODO, 24, "D");
                //areglar el formato de fecha
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", FECHA, 26, "D");
                #endregion

                ExcelToolsBL.UpdateCell(excelGenerado, "Acta de Instal- aceptación","NODO: "+CODIGO_NODO, 15, "E");

                #region Reporte Fotografico
                ExcelToolsBL.AddImageDocument(false, excelGenerado,"Reporte fotográfico", mOMNISWITCH, "", 11, 5, 490, 225);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPAN_RACK, "", 29, 8, 331, 226);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCON_BREAKERS_ASIGNADOS, "", 46, 5, 468, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCON_ALIMEN_SWITCH, "", 62, 5, 480, 223);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_SWITCH, "", 80, 5, 493, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_BARRA, "", 97, 5, 480, 160);
                #endregion

                #region Materiales
                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales","NODO: " + NOMBRE_NODO,11,"C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", CODIGO_NODO, 11, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", NUM_SERIE_SWITCH, 17, "G");
                #endregion

                #endregion
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

        public void ActaInstalacionAceptacionProtocoloSectorial(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ACTA_INSTALACION_ACEPTACION_PROTOCOLO_SECTORIAL", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MEDICION_SECTORIAL", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_IIBB_POR_TAREA", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_PROTOCOLO_SECTORIAL", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds3 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores


                #region Valores String

                String NOMBRE_NODO = ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();
                String FRECUENCIA = ds.Tables[0].Rows[0]["FRECUENCIA"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();
                String PROVINCIA = ds.Tables[0].Rows[0]["PROVINCIA"].ToString();
                String DISTRITO = ds.Tables[0].Rows[0]["DISTRITO"].ToString();
                String DIRECCION = ds.Tables[0].Rows[0]["DIRECCION"].ToString();
                String LATITUD_S = ds.Tables[0].Rows[0]["LATITUD_S"].ToString();
                String LONGITUD_W = ds.Tables[0].Rows[0]["LONGITUD_W"].ToString();
                String ALTITUD_MSNM = ds.Tables[0].Rows[0]["ALTITUD_MSNM"].ToString();
                String AZIMUT = ds.Tables[0].Rows[0]["AZIMUT"].ToString();
                String DOWN_TILT = ds.Tables[0].Rows[0]["DOWN_TILT"].ToString();
                String ALTURA_INST = ds.Tables[0].Rows[0]["ALTURA_INST"].ToString();
                String IP_ADDRESS = ds.Tables[0].Rows[0]["IP_ADDRESS"].ToString();
                String GATEWAY_IP = ds.Tables[0].Rows[0]["GATEWAY_IP"].ToString();
                String CAPACIDAD_ENLACE = ds.Tables[0].Rows[0]["CAPACIDAD_ENLACE"].ToString();
                String EFICIENCIA_ENLACE = ds.Tables[0].Rows[0]["EFICIENCIA_ENLACE"].ToString();
                String SITE_NAME_SSID = ds.Tables[0].Rows[0]["SITE_NAME_SSID"].ToString();

                String DISTANCIA_B = ds.Tables[0].Rows[0]["DISTANCIA_B"].ToString();
                String DISTANCIA_C = ds.Tables[0].Rows[0]["DISTANCIA_C"].ToString();
                String DISTANCIA_D = ds.Tables[0].Rows[0]["DISTANCIA_D"].ToString();
                String DISTANCIA_E = ds.Tables[0].Rows[0]["DISTANCIA_E"].ToString();
                String ALTURA_TORRE = ds.Tables[0].Rows[0]["ALTURA_TORRE"].ToString();

                String SERIE_ODU = ds.Tables[0].Rows[0]["#SERIE_ODU"].ToString();
                String SERIE_ANTENA = ds.Tables[0].Rows[0]["#SERIE_ANTENA"].ToString();

                String SERIAL_TERMINAL_ACCESS_POINT = ds.Tables[0].Rows[0]["SERIAL_TERMINAL_ACCESS_POINT"].ToString();
                String SERIAL_ANTENA_CAMBIUM_5GHZ = ds.Tables[0].Rows[0]["SERIAL_ANTENA_CAMBIUM_5GHZ"].ToString();
                String SERIAL_POE_INYECTOR = ds.Tables[0].Rows[0]["SERIAL_POE_INYECTOR"].ToString();

                String UBIGEO = ds.Tables[0].Rows[0]["UBIGEO"].ToString();

                String MODELO_PUERTO_NODO = ds.Tables[0].Rows[0]["MODELO_PUERTO_NODO"].ToString();
                String PUERTO_NODO = ds.Tables[0].Rows[0]["PUERTO_NODO"].ToString();

                /*   int a = Convert.ToInt32(ALTURA_INST);
             int b = Convert.ToInt32(DISTANCIA_B);
             int c = Convert.ToInt32(DISTANCIA_C);
             int d = Convert.ToInt32(DISTANCIA_D);
             int e = Convert.ToInt32(DISTANCIA_E);

             int L = a + b - c + d + e;

             int LT = L + 3;  */

                #endregion

                #region Valores Binarios

                byte[] CAP1_CONF_RADIO = (byte[])ds.Tables[0].Rows[0]["CAP1_CONF_RADIO"];
                MemoryStream mCAP1_CONF_RADIO = new MemoryStream(CAP1_CONF_RADIO);
                byte[] CAP2_CONF_QoS = (byte[])ds.Tables[0].Rows[0]["CAP2_CONF_QoS"];
                MemoryStream mCAP2_CONF_QoS = new MemoryStream(CAP2_CONF_QoS);
                byte[] CAP3_1_CONF_SYSTEM = (byte[])ds.Tables[0].Rows[0]["CAP3_1_CONF_SYSTEM"];
                MemoryStream mCAP3_1_CONF_SYSTEM = new MemoryStream(CAP3_1_CONF_SYSTEM);
                byte[] CAP3_2_CONF_SYSTEM = (byte[])ds.Tables[0].Rows[0]["CAP3_2_CONF_SYSTEM"];
                MemoryStream mCAP3_2_CONF_SYSTEM = new MemoryStream(CAP3_2_CONF_SYSTEM);
                byte[] CAP4_MONITOR_SYSTEM = (byte[])ds.Tables[0].Rows[0]["CAP4_MONITOR_SYSTEM"];
                MemoryStream mCAP4_MONITOR_SYSTEM = new MemoryStream(CAP4_MONITOR_SYSTEM);
                byte[] CAP5_1_MON_WIRELESS = (byte[])ds.Tables[0].Rows[0]["CAP5_1_MON_WIRELESS"];
                MemoryStream mCAP5_1_MON_WIRELESS = new MemoryStream(CAP5_1_MON_WIRELESS);
                byte[] CAP5_2_MON_WIRELESS = (byte[])ds.Tables[0].Rows[0]["CAP5_2_MON_WIRELESS"];
                MemoryStream mCAP5_2_MON_WIRELESS = new MemoryStream(CAP5_2_MON_WIRELESS);
                byte[] CAP6_TOOLS_WIRELESS = (byte[])ds.Tables[0].Rows[0]["CAP6_TOOLS_WIRELESS"];
                MemoryStream mCAP6_TOOLS_WIRELESS = new MemoryStream(CAP6_TOOLS_WIRELESS);
                byte[] CAP7_PANTALLA_HOME = (byte[])ds.Tables[0].Rows[0]["CAP7_PANTALLA_HOME"];
                MemoryStream mCAP7_PANTALLA_HOME = new MemoryStream(CAP7_PANTALLA_HOME);
        
                byte[] FOTO1_PAN_ESTACION_A = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_ESTACION_A"];
                MemoryStream mFOTO1_PAN_ESTACION_A = new MemoryStream(FOTO1_PAN_ESTACION_A);
                byte[] FOTO2_P0S_ANTENA_INST = (byte[])ds.Tables[0].Rows[0]["FOTO2_P0S_ANTENA_INST"];
                MemoryStream mFOTO2_P0S_ANTENA_INST = new MemoryStream(FOTO2_P0S_ANTENA_INST);
                byte[] FOTO3_ANTENA_ODU_TORRE = (byte[])ds.Tables[0].Rows[0]["FOTO3_ANTENA_ODU_TORRE"];
                MemoryStream mFOTO3_ANTENA_ODU_TORRE = new MemoryStream(FOTO3_ANTENA_ODU_TORRE);
                byte[] FOTO4_UGPS = (byte[])ds.Tables[0].Rows[0]["FOTO4_UGPS"];
                MemoryStream mFOTO4_UGPS = new MemoryStream(FOTO4_UGPS);
                byte[] FOTO5_ENGRASADO_PERNO = (byte[])ds.Tables[0].Rows[0]["FOTO5_ENGRASADO_PERNO"];
                MemoryStream mFOTO5_ENGRASADO_PERNO = new MemoryStream(FOTO5_ENGRASADO_PERNO);
                byte[] FOTO6_SILICONEADO_ETIQUETADO = (byte[])ds.Tables[0].Rows[0]["FOTO6_SILICONEADO_ETIQUETADO"];
                MemoryStream mFOTO6_SILICONEADO_ETIQUETADO = new MemoryStream(FOTO6_SILICONEADO_ETIQUETADO);
                byte[] FOTO8_RECORRIDO_CABLE_SFTP = (byte[])ds.Tables[0].Rows[0]["FOTO8_RECORRIDO_CABLE_SFTP"];
                MemoryStream mFOTO8_RECORRIDO_CABLE_SFTP = new MemoryStream(FOTO8_RECORRIDO_CABLE_SFTP);
                byte[] FOTO9_ATERRAMIENTO_CABLE_SFTP_OUT = (byte[])ds.Tables[0].Rows[0]["FOTO9_ATERRAMIENTO_CABLE_SFTP_OUT"];
                MemoryStream mFOTO9_ATERRAMIENTO_CABLE_SFTP_OUT = new MemoryStream(FOTO9_ATERRAMIENTO_CABLE_SFTP_OUT);
                byte[] FOTO10_ATERRAMIENTO_CABLE_SFTP_IN = (byte[])ds.Tables[0].Rows[0]["FOTO10_ATERRAMIENTO_CABLE_SFTP_IN"];
                MemoryStream mFOTO10_ATERRAMIENTO_CABLE_SFTP_IN = new MemoryStream(FOTO10_ATERRAMIENTO_CABLE_SFTP_IN);
                byte[] FOTO11_ETIQUETADO_POE = (byte[])ds.Tables[0].Rows[0]["FOTO11_ETIQUETADO_POE"];
                MemoryStream mFOTO11_ETIQUETADO_POE = new MemoryStream(FOTO11_ETIQUETADO_POE);
                byte[] FOTO12_PAN_RACK = (byte[])ds.Tables[0].Rows[0]["FOTO12_PAN_RACK"];
                MemoryStream mFOTO12_PAN_RACK = new MemoryStream(FOTO12_PAN_RACK);
                byte[] FOTO13_ATERRAMIENTO_POE = (byte[])ds.Tables[0].Rows[0]["FOTO13_ATERRAMIENTO_POE"];
                MemoryStream mFOTO13_ATERRAMIENTO_POE = new MemoryStream(FOTO13_ATERRAMIENTO_POE);
                byte[] FOTO14_1_EMERGENCIA_POE_ETIQUETA = (byte[])ds.Tables[0].Rows[0]["FOTO14_1_EMERGENCIA_POE_ETIQUETA"];
                MemoryStream mFOTO14_1_EMERGENCIA_POE_ETIQUETA = new MemoryStream(FOTO14_1_EMERGENCIA_POE_ETIQUETA);
                byte[] FOTO14_2_EMERGENCIA_POE_ETIQUETA = (byte[])ds.Tables[0].Rows[0]["FOTO14_2_EMERGENCIA_POE_ETIQUETA"];
                MemoryStream mFOTO14_2_EMERGENCIA_POE_ETIQUETA = new MemoryStream(FOTO14_2_EMERGENCIA_POE_ETIQUETA);
                byte[] FOTO15_PATCH_CORE_SALIDA_POE = (byte[])ds.Tables[0].Rows[0]["FOTO15_PATCH_CORE_SALIDA_POE"];
                MemoryStream mFOTO15_PATCH_CORE_SALIDA_POE = new MemoryStream(FOTO15_PATCH_CORE_SALIDA_POE);
                byte[] FOTO16_PATCH_CORE_SALIDA_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO16_PATCH_CORE_SALIDA_SWITCH"];
                MemoryStream mFOTO16_PATCH_CORE_SALIDA_SWITCH = new MemoryStream(FOTO16_PATCH_CORE_SALIDA_SWITCH);
                byte[] FOTO17_SERIE_POE = (byte[])ds.Tables[0].Rows[0]["FOTO17_SERIE_POE"];
                MemoryStream mFOTO17_SERIE_POE = new MemoryStream(FOTO17_SERIE_POE);
                byte[] FOTO18_SERIE_AP = (byte[])ds.Tables[0].Rows[0]["FOTO18_SERIE_AP"];
                MemoryStream mFOTO18_SERIE_AP = new MemoryStream(FOTO18_SERIE_AP);
                byte[] FOTO19_SERIE_ANTENA = (byte[])ds.Tables[0].Rows[0]["FOTO19_SERIE_ANTENA"];
                MemoryStream mFOTO19_SERIE_ANTENA = new MemoryStream(FOTO19_SERIE_ANTENA);

                #endregion

                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando Valores por hoja en Excel

                

                #region Caratula 
                ExcelToolsBL.UpdateCell(excelGenerado, "Título", "ESTACION  "+NOMBRE_NODO,14,"B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Título", CODIGO_NODO, 16, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Título", TIPO_NODO, 18, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Título", FRECUENCIA+" Mhz", 22, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Título", FECHA, 24, "D");
                #endregion

                #region Configuracion y Pruebas
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", NOMBRE_NODO, 12, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", "ESTACION  " + NOMBRE_NODO, 14, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", DIRECCION +"/"+NOMBRE_NODO+"/"+DISTRITO+"/"+PROVINCIA+"/"+DEPARTAMENTO, 15, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", LATITUD_S+"/"+LONGITUD_W+"/"+ALTITUD_MSNM, 16, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", "Autosoportada Triangular / " +ALTURA_TORRE  , 17, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", AZIMUT, 21, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", DOWN_TILT, 22, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", ALTURA_INST, 23, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", IP_ADDRESS, 32, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", GATEWAY_IP, 34, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", FRECUENCIA, 35, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", SITE_NAME_SSID, 43, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", SITE_NAME_SSID, 47, "E");


                ExcelToolsBL.AddImageDocument(false,excelGenerado, "1 Configuración y Pruebas",mCAP1_CONF_RADIO,"",51,2,590,354);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP2_CONF_QoS, "", 75, 2, 585, 332);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP3_1_CONF_SYSTEM, "", 101, 2, 280, 237);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP3_2_CONF_SYSTEM, "", 101, 6, 280, 237);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP4_MONITOR_SYSTEM, "", 122, 2, 544, 336);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP5_1_MON_WIRELESS, "", 148, 2, 294, 222);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP5_2_MON_WIRELESS, "", 148, 6, 294, 222);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP6_TOOLS_WIRELESS, "", 173, 3, 508, 300);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP7_PANTALLA_HOME, "", 200, 2, 551, 311);
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", EFICIENCIA_ENLACE, 246, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", CAPACIDAD_ENLACE, 247, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", NOMBRE_NODO, 249, "E");
                #endregion

                #region Materiales AP

                ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", "ESTACION " + NOMBRE_NODO, 12, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", SERIAL_TERMINAL_ACCESS_POINT, 17, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", SERIAL_ANTENA_CAMBIUM_5GHZ, 20, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", SERIAL_POE_INYECTOR, 25, "G");

                foreach (DataRow dr in ds3.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String CODIGO = dr["CODIGO"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds3.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", Convert.ToString(ind + 1), 32 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", DESCRIPCION, 32 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", CODIGO, 32 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", UNIDAD, 32 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", CANTIDAD, 32 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", "S/N", 32 + ind, "G");

                }

                #endregion

                #region SFTP
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", "ESTACION " + NOMBRE_NODO, 9, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", AZIMUT+"º", 16, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", ALTURA_TORRE, 17, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP",ALTURA_INST, 16, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_B, 16, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_C, 16, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_D, 16, "H");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_E, 16, "I");
              // ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", Convert.ToString(L), 16, "J");
              //  ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", Convert.ToString(LT), 16, "L");

                #endregion

                #region Asignaciones

                ExcelToolsBL.UpdateCell(excelGenerado, "4 Asignación",MODELO_PUERTO_NODO,17,"D");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Asignación", PUERTO_NODO, 17, "F");

                #endregion

                #region Instituciones Atendidas


                foreach (DataRow dr in ds2.Tables[0].Rows)
                {
                    String NOMBRE_INST = dr["NOMBRE_INST"].ToString();
                    String TIPO_IIBB = dr["TIPO_IIBB"].ToString();
                    String LATITUD = dr["LATITUD"].ToString();
                    String LONGITUD = dr["LONGITUD"].ToString();

                    int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", Convert.ToString(ind + 1), 18 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", NOMBRE_INST, 18 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", TIPO_IIBB, 18 + ind, "N");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", LATITUD, 18 + ind, "R");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", LONGITUD, 18 + ind, "Y");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", "SI", 18 + ind, "AE");
                }





                #endregion

                #region Reporte Fotografico

                ExcelToolsBL.UpdateCell(excelGenerado, "7 Reporte fotográfico", "NODO " + NOMBRE_NODO + "  (" + CODIGO_NODO + ")", 12, "B");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO1_PAN_ESTACION_A, "", 16, 4, 211, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO2_P0S_ANTENA_INST, "", 16, 15, 211, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO3_ANTENA_ODU_TORRE, "", 34, 3, 299, 269);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO4_UGPS, "", 34, 14, 299, 269);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO5_ENGRASADO_PERNO, "", 50, 3, 294, 308);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO6_SILICONEADO_ETIQUETADO, "", 50, 15, 294, 308);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO8_RECORRIDO_CABLE_SFTP, "", 71, 14, 295, 219);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO8_RECORRIDO_CABLE_SFTP, "", 85, 4, 295, 219);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO10_ATERRAMIENTO_CABLE_SFTP_IN, "", 86, 14, 294, 218);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO11_ETIQUETADO_POE, "", 103, 3, 299, 246);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO12_PAN_RACK, "", 102, 15, 214, 282);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO13_ATERRAMIENTO_POE, "", 120, 3, 295, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO14_1_EMERGENCIA_POE_ETIQUETA, "", 121, 14, 160, 198);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO14_2_EMERGENCIA_POE_ETIQUETA, "", 121, 19, 160, 198);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO15_PATCH_CORE_SALIDA_POE, "", 136, 3, 288, 213);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO16_PATCH_CORE_SALIDA_SWITCH, "", 136, 14, 288, 213);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO17_SERIE_POE, "", 153, 3, 288, 213);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO18_SERIE_AP, "", 152, 15, 193, 254);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO19_SERIE_ANTENA, "", 168, 3, 296, 248);
                #endregion


                #region Datos Generales del Nodo

                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", TIPO_NODO, 9, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", SITE_NAME_SSID, 12, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo",NOMBRE_NODO,12,"G");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", NOMBRE_NODO, 17, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", UBIGEO, 17, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DEPARTAMENTO, 20, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", PROVINCIA, 20, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DISTRITO, 20, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", SERIE_ODU, 29, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", SERIE_ANTENA, 30, "I");

                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", ALTURA_INST + " m", 50, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DOWN_TILT + " º",53, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", ALTITUD_MSNM + " m.s.n.m", 54, "I");

                foreach (DataRow dr in ds1.Tables[0].Rows)
                {
                    String NODO_A = dr["NODO_A"].ToString();
                    String IIBB = dr["IIBB"].ToString();
                    String RSS_LOCAL = dr["RSS_LOCAL"].ToString();
                    String RSS_REMOTO = dr["RSS_REMOTO"].ToString();
                    String TIEMPO_PROM = dr["TIEMPO_PROM"].ToString();
                    String CAP_SUBIDA = dr["CAP_SUBIDA"].ToString();
                    String CAP_BAJADA = dr["CAP_BAJADA"].ToString();
                    String DISTANCIA = dr["DISTANCIA"].ToString();

                    int ind = Convert.ToInt32(ds1.Tables[0].Rows.IndexOf(dr));

                        ExcelToolsBL.UpdateCell(excelGenerado,"8 Datos generales del nodo", NODO_A,61+ind,"B");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", IIBB, 61+ind, "C");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", RSS_LOCAL, 61 + ind, "D");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", RSS_REMOTO, 61 + ind, "E");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", "5", 61 + ind, "F");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", "64QAM 5/6", 61 + ind, "G"); 
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", TIEMPO_PROM, 61 + ind, "H");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", "UL "+CAP_SUBIDA+" /DL "+CAP_BAJADA, 61 + ind, "I");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DISTANCIA, 61 + ind, "K");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", FRECUENCIA, 61 + ind, "L");
                                                                                                                
                }

                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", UBIGEO, 78, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", NOMBRE_NODO, 78, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DISTRITO, 78, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", PROVINCIA, 78, "H");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DEPARTAMENTO, 78, "K");
                #endregion

                #endregion

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

        public void ActaInstalacionAceptacionProtocoloOmnidireccional(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            
                baseDatosDA.Configurar();
                baseDatosDA.Conectar();

                try
                {
                    baseDatosDA.CrearComando("USP_R_ACTA_INSTALACION_ACEPTACION_PROTOCOLO_OMNIDIRECCIONAL", CommandType.StoredProcedure);
                    baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                    DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                    baseDatosDA.CrearComando("USP_R_MEDICION_SECTORIAL", CommandType.StoredProcedure);
                    baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                    DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                    baseDatosDA.CrearComando("USP_R_IIBB_POR_TAREA", CommandType.StoredProcedure);
                    baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                    DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                    baseDatosDA.CrearComando("USP_R_MATERIALES_PROTOCOLO_SECTORIAL", CommandType.StoredProcedure);
                    baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                    DataSet ds3 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                    #region Valores


                    #region Valores String

                    String NOMBRE_NODO = ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                    String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                    String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();
                    String FRECUENCIA = ds.Tables[0].Rows[0]["FRECUENCIA"].ToString();

                    DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                    String FECHA = dtFecha.ToString("dd/MM/yyyy");

                    String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();
                    String PROVINCIA = ds.Tables[0].Rows[0]["PROVINCIA"].ToString();
                    String DISTRITO = ds.Tables[0].Rows[0]["DISTRITO"].ToString();
                    String DIRECCION = ds.Tables[0].Rows[0]["DIRECCION"].ToString();
                    String LATITUD_S = ds.Tables[0].Rows[0]["LATITUD_S"].ToString();
                    String LONGITUD_W = ds.Tables[0].Rows[0]["LONGITUD_W"].ToString();
                    String ALTITUD_MSNM = ds.Tables[0].Rows[0]["ALTITUD_MSNM"].ToString();
                    String AZIMUT = ds.Tables[0].Rows[0]["AZIMUT"].ToString();
                    String DOWN_TILT = ds.Tables[0].Rows[0]["DOWN_TILT"].ToString();
                    String ALTURA_INST = ds.Tables[0].Rows[0]["ALTURA_INST"].ToString();
                    String IP_ADDRESS = ds.Tables[0].Rows[0]["IP_ADDRESS"].ToString();
                    String GATEWAY_IP = ds.Tables[0].Rows[0]["GATEWAY_IP"].ToString();
                    String CAPACIDAD_ENLACE = ds.Tables[0].Rows[0]["CAPACIDAD_ENLACE"].ToString();
                    String EFICIENCIA_ENLACE = ds.Tables[0].Rows[0]["EFICIENCIA_ENLACE"].ToString();
                    String SITE_NAME_SSID = ds.Tables[0].Rows[0]["SITE_NAME_SSID"].ToString();

                    String DISTANCIA_B = ds.Tables[0].Rows[0]["DISTANCIA_B"].ToString();
                    String DISTANCIA_C = ds.Tables[0].Rows[0]["DISTANCIA_C"].ToString();
                    String DISTANCIA_D = ds.Tables[0].Rows[0]["DISTANCIA_D"].ToString();
                    String DISTANCIA_E = ds.Tables[0].Rows[0]["DISTANCIA_E"].ToString();
                    String ALTURA_TORRE = ds.Tables[0].Rows[0]["ALTURA_TORRE"].ToString();

                    String SERIE_ODU = ds.Tables[0].Rows[0]["#SERIE_ODU"].ToString();
                    String SERIE_ANTENA = ds.Tables[0].Rows[0]["#SERIE_ANTENA"].ToString();

                    String SERIAL_TERMINAL_ACCESS_POINT = ds.Tables[0].Rows[0]["SERIAL_TERMINAL_ACCESS_POINT"].ToString();
                    String SERIAL_ANTENA_CAMBIUM_5GHZ = ds.Tables[0].Rows[0]["SERIAL_ANTENA_CAMBIUM_5GHZ"].ToString();
                    String SERIAL_POE_INYECTOR = ds.Tables[0].Rows[0]["SERIAL_POE_INYECTOR"].ToString();

                    String UBIGEO = ds.Tables[0].Rows[0]["UBIGEO"].ToString();

                    String MODELO_PUERTO_NODO = ds.Tables[0].Rows[0]["MODELO_PUERTO_NODO"].ToString();
                    String PUERTO_NODO = ds.Tables[0].Rows[0]["PUERTO_NODO"].ToString();

                    /*   int a = Convert.ToInt32(ALTURA_INST);
                 int b = Convert.ToInt32(DISTANCIA_B);
                 int c = Convert.ToInt32(DISTANCIA_C);
                 int d = Convert.ToInt32(DISTANCIA_D);
                 int e = Convert.ToInt32(DISTANCIA_E);

                 int L = a + b - c + d + e;

                 int LT = L + 3;  */

                    #endregion

                    #region Valores Binarios

                    byte[] CAP1_CONF_RADIO = (byte[])ds.Tables[0].Rows[0]["CAP1_CONF_RADIO"];
                    MemoryStream mCAP1_CONF_RADIO = new MemoryStream(CAP1_CONF_RADIO);
                    byte[] CAP2_CONF_QoS = (byte[])ds.Tables[0].Rows[0]["CAP2_CONF_QoS"];
                    MemoryStream mCAP2_CONF_QoS = new MemoryStream(CAP2_CONF_QoS);
                    byte[] CAP3_1_CONF_SYSTEM = (byte[])ds.Tables[0].Rows[0]["CAP3_1_CONF_SYSTEM"];
                    MemoryStream mCAP3_1_CONF_SYSTEM = new MemoryStream(CAP3_1_CONF_SYSTEM);
                    byte[] CAP3_2_CONF_SYSTEM = (byte[])ds.Tables[0].Rows[0]["CAP3_2_CONF_SYSTEM"];
                    MemoryStream mCAP3_2_CONF_SYSTEM = new MemoryStream(CAP3_2_CONF_SYSTEM);
                    byte[] CAP4_MONITOR_SYSTEM = (byte[])ds.Tables[0].Rows[0]["CAP4_MONITOR_SYSTEM"];
                    MemoryStream mCAP4_MONITOR_SYSTEM = new MemoryStream(CAP4_MONITOR_SYSTEM);
                    byte[] CAP5_1_MON_WIRELESS = (byte[])ds.Tables[0].Rows[0]["CAP5_1_MON_WIRELESS"];
                    MemoryStream mCAP5_1_MON_WIRELESS = new MemoryStream(CAP5_1_MON_WIRELESS);
                    byte[] CAP5_2_MON_WIRELESS = (byte[])ds.Tables[0].Rows[0]["CAP5_2_MON_WIRELESS"];
                    MemoryStream mCAP5_2_MON_WIRELESS = new MemoryStream(CAP5_2_MON_WIRELESS);
                    byte[] CAP6_TOOLS_WIRELESS = (byte[])ds.Tables[0].Rows[0]["CAP6_TOOLS_WIRELESS"];
                    MemoryStream mCAP6_TOOLS_WIRELESS = new MemoryStream(CAP6_TOOLS_WIRELESS);
                    byte[] CAP7_PANTALLA_HOME = (byte[])ds.Tables[0].Rows[0]["CAP7_PANTALLA_HOME"];
                    MemoryStream mCAP7_PANTALLA_HOME = new MemoryStream(CAP7_PANTALLA_HOME);

                    byte[] FOTO1_PAN_ESTACION_A = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_ESTACION_A"];
                    MemoryStream mFOTO1_PAN_ESTACION_A = new MemoryStream(FOTO1_PAN_ESTACION_A);
                    byte[] FOTO2_P0S_ANTENA_INST = (byte[])ds.Tables[0].Rows[0]["FOTO2_P0S_ANTENA_INST"];
                    MemoryStream mFOTO2_P0S_ANTENA_INST = new MemoryStream(FOTO2_P0S_ANTENA_INST);
                    byte[] FOTO3_ANTENA_ODU_TORRE = (byte[])ds.Tables[0].Rows[0]["FOTO3_ANTENA_ODU_TORRE"];
                    MemoryStream mFOTO3_ANTENA_ODU_TORRE = new MemoryStream(FOTO3_ANTENA_ODU_TORRE);
                    byte[] FOTO4_UGPS = (byte[])ds.Tables[0].Rows[0]["FOTO4_UGPS"];
                    MemoryStream mFOTO4_UGPS = new MemoryStream(FOTO4_UGPS);
                    byte[] FOTO5_ENGRASADO_PERNO = (byte[])ds.Tables[0].Rows[0]["FOTO5_ENGRASADO_PERNO"];
                    MemoryStream mFOTO5_ENGRASADO_PERNO = new MemoryStream(FOTO5_ENGRASADO_PERNO);
                    byte[] FOTO6_SILICONEADO_ETIQUETADO = (byte[])ds.Tables[0].Rows[0]["FOTO6_SILICONEADO_ETIQUETADO"];
                    MemoryStream mFOTO6_SILICONEADO_ETIQUETADO = new MemoryStream(FOTO6_SILICONEADO_ETIQUETADO);
                    byte[] FOTO8_RECORRIDO_CABLE_SFTP = (byte[])ds.Tables[0].Rows[0]["FOTO8_RECORRIDO_CABLE_SFTP"];
                    MemoryStream mFOTO8_RECORRIDO_CABLE_SFTP = new MemoryStream(FOTO8_RECORRIDO_CABLE_SFTP);
                    byte[] FOTO9_ATERRAMIENTO_CABLE_SFTP_OUT = (byte[])ds.Tables[0].Rows[0]["FOTO9_ATERRAMIENTO_CABLE_SFTP_OUT"];
                    MemoryStream mFOTO9_ATERRAMIENTO_CABLE_SFTP_OUT = new MemoryStream(FOTO9_ATERRAMIENTO_CABLE_SFTP_OUT);
                    byte[] FOTO10_ATERRAMIENTO_CABLE_SFTP_IN = (byte[])ds.Tables[0].Rows[0]["FOTO10_ATERRAMIENTO_CABLE_SFTP_IN"];
                    MemoryStream mFOTO10_ATERRAMIENTO_CABLE_SFTP_IN = new MemoryStream(FOTO10_ATERRAMIENTO_CABLE_SFTP_IN);
                    byte[] FOTO11_ETIQUETADO_POE = (byte[])ds.Tables[0].Rows[0]["FOTO11_ETIQUETADO_POE"];
                    MemoryStream mFOTO11_ETIQUETADO_POE = new MemoryStream(FOTO11_ETIQUETADO_POE);
                    byte[] FOTO12_PAN_RACK = (byte[])ds.Tables[0].Rows[0]["FOTO12_PAN_RACK"];
                    MemoryStream mFOTO12_PAN_RACK = new MemoryStream(FOTO12_PAN_RACK);
                    byte[] FOTO13_ATERRAMIENTO_POE = (byte[])ds.Tables[0].Rows[0]["FOTO13_ATERRAMIENTO_POE"];
                    MemoryStream mFOTO13_ATERRAMIENTO_POE = new MemoryStream(FOTO13_ATERRAMIENTO_POE);
                    byte[] FOTO14_1_EMERGENCIA_POE_ETIQUETA = (byte[])ds.Tables[0].Rows[0]["FOTO14_1_EMERGENCIA_POE_ETIQUETA"];
                    MemoryStream mFOTO14_1_EMERGENCIA_POE_ETIQUETA = new MemoryStream(FOTO14_1_EMERGENCIA_POE_ETIQUETA);
                    byte[] FOTO14_2_EMERGENCIA_POE_ETIQUETA = (byte[])ds.Tables[0].Rows[0]["FOTO14_2_EMERGENCIA_POE_ETIQUETA"];
                    MemoryStream mFOTO14_2_EMERGENCIA_POE_ETIQUETA = new MemoryStream(FOTO14_2_EMERGENCIA_POE_ETIQUETA);
                    byte[] FOTO15_PATCH_CORE_SALIDA_POE = (byte[])ds.Tables[0].Rows[0]["FOTO15_PATCH_CORE_SALIDA_POE"];
                    MemoryStream mFOTO15_PATCH_CORE_SALIDA_POE = new MemoryStream(FOTO15_PATCH_CORE_SALIDA_POE);
                    byte[] FOTO16_PATCH_CORE_SALIDA_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO16_PATCH_CORE_SALIDA_SWITCH"];
                    MemoryStream mFOTO16_PATCH_CORE_SALIDA_SWITCH = new MemoryStream(FOTO16_PATCH_CORE_SALIDA_SWITCH);
                    byte[] FOTO17_SERIE_POE = (byte[])ds.Tables[0].Rows[0]["FOTO17_SERIE_POE"];
                    MemoryStream mFOTO17_SERIE_POE = new MemoryStream(FOTO17_SERIE_POE);
                    byte[] FOTO18_SERIE_AP = (byte[])ds.Tables[0].Rows[0]["FOTO18_SERIE_AP"];
                    MemoryStream mFOTO18_SERIE_AP = new MemoryStream(FOTO18_SERIE_AP);
                    byte[] FOTO19_SERIE_ANTENA = (byte[])ds.Tables[0].Rows[0]["FOTO19_SERIE_ANTENA"];
                    MemoryStream mFOTO19_SERIE_ANTENA = new MemoryStream(FOTO19_SERIE_ANTENA);

                    #endregion

                    #endregion

                    // String usuarioWindows = Environment.UserName;
                    String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                    File.Copy(rutaPlantilla, excelGenerado, true);

                    #region Agregando Valores por hoja en Excel



                    #region Caratula 
                    ExcelToolsBL.UpdateCell(excelGenerado, "Título", "ESTACION  " + NOMBRE_NODO, 14, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Título", CODIGO_NODO, 16, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Título", TIPO_NODO, 18, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Título", FRECUENCIA + " Mhz", 22, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Título", FECHA, 24, "D");
                    #endregion

                    #region Configuracion y Pruebas
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", NOMBRE_NODO, 12, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", "ESTACION  " + NOMBRE_NODO, 14, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", DIRECCION + "/" + NOMBRE_NODO + "/" + DISTRITO + "/" + PROVINCIA + "/" + DEPARTAMENTO, 15, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", LATITUD_S + "/" + LONGITUD_W + "/" + ALTITUD_MSNM, 16, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", "Autosoportada Triangular / " + ALTURA_TORRE, 17, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", AZIMUT, 21, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", DOWN_TILT, 22, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", ALTURA_INST, 23, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", IP_ADDRESS, 32, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", GATEWAY_IP, 34, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", FRECUENCIA, 35, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", SITE_NAME_SSID, 43, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", SITE_NAME_SSID, 47, "E");


                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP1_CONF_RADIO, "", 51, 2, 590, 354);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP2_CONF_QoS, "", 75, 2, 585, 332);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP3_1_CONF_SYSTEM, "", 101, 2, 280, 237);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP3_2_CONF_SYSTEM, "", 101, 6, 280, 237);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP4_MONITOR_SYSTEM, "", 122, 2, 544, 336);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP5_1_MON_WIRELESS, "", 148, 2, 294, 222);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP5_2_MON_WIRELESS, "", 148, 6, 294, 222);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP6_TOOLS_WIRELESS, "", 173, 3, 508, 300);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Pruebas", mCAP7_PANTALLA_HOME, "", 200, 2, 551, 311);
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", EFICIENCIA_ENLACE, 246, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", CAPACIDAD_ENLACE, 247, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Pruebas", NOMBRE_NODO, 249, "E");
                    #endregion

                    #region Materiales AP

                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", "ESTACION " + NOMBRE_NODO, 12, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", SERIAL_TERMINAL_ACCESS_POINT, 17, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", SERIAL_ANTENA_CAMBIUM_5GHZ, 20, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", SERIAL_POE_INYECTOR, 25, "G");

                    foreach (DataRow dr in ds3.Tables[0].Rows)
                    {
                        String DESCRIPCION = dr["DESCRIPCION"].ToString();
                        String CODIGO = dr["CODIGO"].ToString();
                        String UNIDAD = dr["UNIDAD"].ToString();
                        String CANTIDAD = dr["CANTIDAD"].ToString();

                        int ind = Convert.ToInt32(ds3.Tables[0].Rows.IndexOf(dr));

                        ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", Convert.ToString(ind + 1), 32 + ind, "B");
                        ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", DESCRIPCION, 32 + ind, "C");
                        ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", CODIGO, 32 + ind, "D");
                        ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", UNIDAD, 32 + ind, "E");
                        ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", CANTIDAD, 32 + ind, "F");
                        ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales AP", "S/N", 32 + ind, "G");

                    }

                    #endregion

                    #region SFTP
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", "ESTACION " + NOMBRE_NODO, 9, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", AZIMUT + "º", 16, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", ALTURA_TORRE, 17, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", ALTURA_INST, 16, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_B, 16, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_C, 16, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_D, 16, "H");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", DISTANCIA_E, 16, "I");
                    // ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", Convert.ToString(L), 16, "J");
                    //  ExcelToolsBL.UpdateCell(excelGenerado, "3 SFTP", Convert.ToString(LT), 16, "L");

                    #endregion

                    #region Asignaciones

                    ExcelToolsBL.UpdateCell(excelGenerado, "4 Asignación", MODELO_PUERTO_NODO, 17, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "4 Asignación", PUERTO_NODO, 17, "F");

                    #endregion

                    #region Instituciones Atendidas


                    foreach (DataRow dr in ds2.Tables[0].Rows)
                    {
                        String NOMBRE_INST = dr["NOMBRE_INST"].ToString();
                        String TIPO_IIBB = dr["TIPO_IIBB"].ToString();
                        String LATITUD = dr["LATITUD"].ToString();
                        String LONGITUD = dr["LONGITUD"].ToString();

                        int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                        ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", Convert.ToString(ind + 1), 18 + ind, "B");
                        ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", NOMBRE_INST, 18 + ind, "C");
                        ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", TIPO_IIBB, 18 + ind, "N");
                        ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", LATITUD, 18 + ind, "R");
                        ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", LONGITUD, 18 + ind, "Y");
                        ExcelToolsBL.UpdateCell(excelGenerado, "6 Instituciones Atendidas", "SI", 18 + ind, "AE");
                    }





                    #endregion

                    #region Reporte Fotografico

                    ExcelToolsBL.UpdateCell(excelGenerado, "7 Reporte fotográfico", "NODO " + NOMBRE_NODO + "  (" + CODIGO_NODO + ")", 12, "B");
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO1_PAN_ESTACION_A, "", 16, 4, 211, 277);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO2_P0S_ANTENA_INST, "", 16, 15, 211, 277);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO3_ANTENA_ODU_TORRE, "", 34, 3, 299, 269);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO4_UGPS, "", 34, 14, 299, 269);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO5_ENGRASADO_PERNO, "", 50, 3, 294, 308);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO6_SILICONEADO_ETIQUETADO, "", 50, 15, 294, 308);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO8_RECORRIDO_CABLE_SFTP, "", 71, 14, 295, 219);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO8_RECORRIDO_CABLE_SFTP, "", 85, 4, 295, 219);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO10_ATERRAMIENTO_CABLE_SFTP_IN, "", 86, 14, 294, 218);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO11_ETIQUETADO_POE, "", 103, 3, 299, 246);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO12_PAN_RACK, "", 102, 15, 214, 282);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO13_ATERRAMIENTO_POE, "", 120, 3, 295, 220);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO14_1_EMERGENCIA_POE_ETIQUETA, "", 121, 14, 160, 198);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO14_2_EMERGENCIA_POE_ETIQUETA, "", 121, 19, 160, 198);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO15_PATCH_CORE_SALIDA_POE, "", 136, 3, 288, 213);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO16_PATCH_CORE_SALIDA_SWITCH, "", 136, 14, 288, 213);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO17_SERIE_POE, "", 153, 3, 288, 213);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO18_SERIE_AP, "", 152, 15, 193, 254);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte fotográfico", mFOTO19_SERIE_ANTENA, "", 168, 3, 296, 248);
                    #endregion


                    #region Datos Generales del Nodo

                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", TIPO_NODO, 9, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", SITE_NAME_SSID, 12, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", NOMBRE_NODO, 12, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", NOMBRE_NODO, 17, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", UBIGEO, 17, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DEPARTAMENTO, 20, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", PROVINCIA, 20, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DISTRITO, 20, "I");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", SERIE_ODU, 29, "I");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", SERIE_ANTENA, 30, "I");

                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", ALTURA_INST + " m", 50, "I");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DOWN_TILT + " º", 53, "I");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", ALTITUD_MSNM + " m.s.n.m", 54, "I");

                    foreach (DataRow dr in ds1.Tables[0].Rows)
                    {
                        String NODO_A = dr["NODO_A"].ToString();
                        String IIBB = dr["IIBB"].ToString();
                        String RSS_LOCAL = dr["RSS_LOCAL"].ToString();
                        String RSS_REMOTO = dr["RSS_REMOTO"].ToString();
                        String TIEMPO_PROM = dr["TIEMPO_PROM"].ToString();
                        String CAP_SUBIDA = dr["CAP_SUBIDA"].ToString();
                        String CAP_BAJADA = dr["CAP_BAJADA"].ToString();
                        String DISTANCIA = dr["DISTANCIA"].ToString();

                        int ind = Convert.ToInt32(ds1.Tables[0].Rows.IndexOf(dr));

                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", NODO_A, 61 + ind, "B");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", IIBB, 61 + ind, "C");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", RSS_LOCAL, 61 + ind, "D");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", RSS_REMOTO, 61 + ind, "E");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", "5", 61 + ind, "F");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", "64QAM 5/6", 61 + ind, "G");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", TIEMPO_PROM, 61 + ind, "H");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", "UL " + CAP_SUBIDA + " /DL " + CAP_BAJADA, 61 + ind, "I");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DISTANCIA, 61 + ind, "K");
                        ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", FRECUENCIA, 61 + ind, "L");

                    }

                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", UBIGEO, 78, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", NOMBRE_NODO, 78, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DISTRITO, 78, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", PROVINCIA, 78, "H");
                    ExcelToolsBL.UpdateCell(excelGenerado, "8 Datos generales del nodo", DEPARTAMENTO, 78, "K");
                    #endregion

                    #endregion

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

        public void ActaInstalacionAceptacionProtocoloIIBB_A(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ACTA_INSTALACION_ACEPTACION_PROTOCOLO_IIBB_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MEDICION_ENLACE_IIBB_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_EQUIPAMIENTOS_IIBB_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_IIBB_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds3 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores

                #region Valores String
                String FRECUENCIA = ds.Tables[0].Rows[0]["FRECUENCIA"].ToString();
                String CODIGO_IIBB = ds.Tables[0].Rows[0]["CODIGO_IIBB"].ToString();
                String TIPO_INSTITUCION = ds.Tables[0].Rows[0]["TIPO_INSTITUCION"].ToString();
                String NOMBRE_IIBB = ds.Tables[0].Rows[0]["NOMBRE_IIBB"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();
                String PROVINCIA = ds.Tables[0].Rows[0]["PROVINCIA"].ToString();
                String DISTRITO = ds.Tables[0].Rows[0]["DISTRITO"].ToString();
                String NOMBRE_NODO = ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String UBIGEO = ds.Tables[0].Rows[0]["UBIGEO"].ToString();
                String LATITUD = ds.Tables[0].Rows[0]["LATITUD"].ToString();
                String LONGITUD = ds.Tables[0].Rows[0]["LONGITUD"].ToString();
                String ALTITUDmsnm = ds.Tables[0].Rows[0]["ALTITUDmsnm"].ToString();
                String AZIMUT = ds.Tables[0].Rows[0]["AZIMUT"].ToString();


                String DIRECCION_NODO = ds.Tables[0].Rows[0]["DIRECCION_NODO"].ToString();

                String ODU_CPE = ds.Tables[0].Rows[0]["ODU_CPE"].ToString();
                String ACCESS_POINT_INDOOR = ds.Tables[0].Rows[0]["ACCESS_POINT_INDOOR"].ToString();
                String SWITCH_COMUNICACIONES = ds.Tables[0].Rows[0]["SWITCH_COMUNICACIONES"].ToString();
                String ROUTER = ds.Tables[0].Rows[0]["ROUTER"].ToString();
                String EQUIPO_COMPUTO1 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO1"].ToString();
                //String EQUIPO_COMPUTO2 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO2"].ToString();
                //String EQUIPO_COMPUTO3 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO3"].ToString();
                //String EQUIPO_COMPUTO4 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO4"].ToString();
                //String EQUIPO_COMPUTO5 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO5"].ToString();
                String IMPRESORA_MULTIFUNCIONAL = ds.Tables[0].Rows[0]["IMPRESORA_MULTIFUNCIONAL"].ToString();
                String UPS = ds.Tables[0].Rows[0]["UPS"].ToString();
                String REFERENCIA_UBICACION_IIBB = ds.Tables[0].Rows[0]["REFERENCIA_UBICACION_IIBB"].ToString();
                String TIPO_MASTIL = ds.Tables[0].Rows[0]["TIPO_MASTIL"].ToString();
                String ALTURA_MASTIL = ds.Tables[0].Rows[0]["ALTURA_MASTIL"].ToString();
                String DISPONIBILIDAD_HORAS = ds.Tables[0].Rows[0]["DISPONIBILIDAD_HORAS"].ToString();
                //String VALOR_MEDIO_MEDIDA1 = ds.Tables[0].Rows[0]["VALOR_MEDIO_MEDIDA1"].ToString();
                //String VALOR_MEDIO_MEDIDA2 = ds.Tables[0].Rows[0]["VALOR_MEDIO_MEDIDA2"].ToString();
                //String VALOR_MEDIO_MEDIDA3 = ds.Tables[0].Rows[0]["VALOR_MEDIO_MEDIDA3"].ToString();
                String POTENCIA_TRANSMISION = ds.Tables[0].Rows[0]["POTENCIA_TRANSMISION"].ToString();
                String ANCHO_BANDA_CANAL = ds.Tables[0].Rows[0]["ANCHO_BANDA_CANAL"].ToString();
                String ELEVACION = ds.Tables[0].Rows[0]["ELEVACION"].ToString();
                String CONECTIVIDAD_GILAT = ds.Tables[0].Rows[0]["CONECTIVIDAD_GILAT"].ToString();
                String CONECTIVIDAD_NODO_TERMINAL = ds.Tables[0].Rows[0]["CONECTIVIDAD_NODO_TERMINAL"].ToString();
                String CONECTIVIDAD_NODO_DISTRITAL = ds.Tables[0].Rows[0]["CONECTIVIDAD_NODO_DISTRITAL"].ToString();
                String CONECTIVIDAD_NOC = ds.Tables[0].Rows[0]["CONECTIVIDAD_NOC"].ToString();
                String NOMBRES_APELLIDOS_ENCARGADO = ds.Tables[0].Rows[0]["NOMBRES_APELLIDOS_ENCARGADO"].ToString();
                String DOC_IDENTIDAD_ENCARGADO = ds.Tables[0].Rows[0]["DOC_IDENTIDAD_ENCARGADO"].ToString();
                String CELULAR_CONTACTO_ENCARGADO = ds.Tables[0].Rows[0]["CELULAR_CONTACTO_ENCARGADO"].ToString();
                String EMAIL_ENCARGADO_IIBB = ds.Tables[0].Rows[0]["EMAIL_ENCARGADO_IIBB"].ToString();
                String NOMBRES_APELLIDOS_REPRESENTANTE = ds.Tables[0].Rows[0]["NOMBRES_APELLIDOS_REPRESENTANTE"].ToString();
                String DOC_IDENTIDAD_REPRESENTANTE = ds.Tables[0].Rows[0]["DOC_IDENTIDAD_REPRESENTANTE"].ToString();
                String CELULAR_CONTACTO_REPRESENTANTE = ds.Tables[0].Rows[0]["CELULAR_CONTACTO_REPRESENTANTE"].ToString();
                String CARGO_REPRESENTANTE_IIBB = ds.Tables[0].Rows[0]["CARGO_REPRESENTANTE_IIBB"].ToString();
                String EMAIL_REPRESENTANTE_IIBB = ds.Tables[0].Rows[0]["EMAIL_REPRESENTANTE_IIBB"].ToString();
                //String NOMBRES_APELLIDOS_REPR_OPERADOR = ds.Tables[0].Rows[0]["NOMBRES_APELLIDOS_REPR_OPERADOR"].ToString();
                //String DOC_IDENTIDAD_REPR_OPERADOR = ds.Tables[0].Rows[0]["DOC_IDENTIDAD_REPR_OPERADOR"].ToString();
                //String CARGO_REPRESENTANTE_OPERADOR = ds.Tables[0].Rows[0]["CARGO_REPRESENTANTE_OPERADOR"].ToString();
                //String EMAIL_REPR_OPERADOR = ds.Tables[0].Rows[0]["EMAIL_REPR_OPERADOR"].ToString();

                //String MSPT_MEDIDA1_VALORMEDIO = ds.Tables[0].Rows[0]["MSPT_MEDIDA1_VALORMEDIO"].ToString();
                //String MSPT_MEDIDA2_VALORMEDIO = ds.Tables[0].Rows[0]["MSPT_MEDIDA2_VALORMEDIO"].ToString();
                //String MSPT_MEDIDA3_VALORMEDIO = ds.Tables[0].Rows[0]["MSPT_MEDIDA3_VALORMEDIO"].ToString();
                String MSPTP_MEDIDA1_VALORMEDIO = ds.Tables[0].Rows[0]["MSPTP_MEDIDA1_VALORMEDIO"].ToString();
                String MSPTP_MEDIDA2_VALORMEDIO = ds.Tables[0].Rows[0]["MSPTP_MEDIDA2_VALORMEDIO"].ToString();
                String MSPTP_MEDIDA3_VALORMEDIO = ds.Tables[0].Rows[0]["MSPTP_MEDIDA3_VALORMEDIO"].ToString();

                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String IP_IIBB = ds.Tables[0].Rows[0]["IP_IIBB"].ToString();

                #endregion

                #region Valores byte

                byte[] PANT_CONF_ACCESS_POINt = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ACCESS_POINt"];
                MemoryStream mPANT_CONF_ACCESS_POINt = new MemoryStream(PANT_CONF_ACCESS_POINt);
                byte[] PANT_CONF_ROUTER = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ROUTER"];
                MemoryStream mPANT_CONF_ROUTER = new MemoryStream(PANT_CONF_ROUTER);
                byte[] PANT_CONF_SWITCH01 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_SWITCH01"];
                MemoryStream mPANT_CONF_SWITCH01 = new MemoryStream(PANT_CONF_SWITCH01);
                byte[] PANT_CONF_SWITCH02 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_SWITCH02"];
                MemoryStream mPANT_CONF_SWITCH02 = new MemoryStream(PANT_CONF_SWITCH02);
                byte[] PANT_CONF_UPS = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_UPS"];
                MemoryStream mPANT_CONF_UPS = new MemoryStream(PANT_CONF_UPS);
                byte[] PANT_CONF_ALLINONE01 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ALLINONE01"];
                MemoryStream mPANT_CONF_ALLINONE01 = new MemoryStream(PANT_CONF_ALLINONE01);
                byte[] PANT_CONF_ALLINONE02 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ALLINONE02"];
                MemoryStream mPANT_CONF_ALLINONE02 = new MemoryStream(PANT_CONF_ALLINONE02);
                byte[] PANT_CONF_IMPRESORA = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_IMPRESORA"];
                MemoryStream mPANT_CONF_IMPRESORA = new MemoryStream(PANT_CONF_IMPRESORA);
                byte[] FOTO1_PAN_LOCALIDAD = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_LOCALIDAD"];
                MemoryStream mFOTO1_PAN_LOCALIDAD = new MemoryStream(FOTO1_PAN_LOCALIDAD);
                byte[] FOTO2_FACHADA_INSTITUCION = (byte[])ds.Tables[0].Rows[0]["FOTO2_FACHADA_INSTITUCION"];
                MemoryStream mFOTO2_FACHADA_INSTITUCION = new MemoryStream(FOTO2_FACHADA_INSTITUCION);
                byte[] FOTO3_1_IMPRESORA = (byte[])ds.Tables[0].Rows[0]["FOTO3_1_IMPRESORA"];
                MemoryStream mFOTO3_1_IMPRESORA = new MemoryStream(FOTO3_1_IMPRESORA);
                byte[] FOTO3_2_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO3_2_SWITCH"];
                MemoryStream mFOTO3_2_SWITCH = new MemoryStream(FOTO3_2_SWITCH);
                byte[] FOTO3_3_ROUTER = (byte[])ds.Tables[0].Rows[0]["FOTO3_3_ROUTER"];
                MemoryStream mFOTO3_3_ROUTER = new MemoryStream(FOTO3_3_ROUTER);
                byte[] FOTO3_4_PC_ENCENDIDAS = (byte[])ds.Tables[0].Rows[0]["FOTO3_4_PC_ENCENDIDAS"];
                MemoryStream mFOTO3_4_PC_ENCENDIDAS = new MemoryStream(FOTO3_4_PC_ENCENDIDAS);
                byte[] FOTO3_5_PC_UPS = (byte[])ds.Tables[0].Rows[0]["FOTO3_5_PC_UPS"];
                MemoryStream mFOTO3_5_PC_UPS = new MemoryStream(FOTO3_5_PC_UPS);
                byte[] FOTO3_6_ACCESS_POINT = (byte[])ds.Tables[0].Rows[0]["FOTO3_6_ACCESS_POINT"];
                MemoryStream mFOTO3_6_ACCESS_POINT = new MemoryStream(FOTO3_6_ACCESS_POINT);
                byte[] FOTO4_1_ODU_CPE = (byte[])ds.Tables[0].Rows[0]["FOTO4_1_ODU_CPE"];
                MemoryStream mFOTO4_1_ODU_CPE = new MemoryStream(FOTO4_1_ODU_CPE);
                byte[] FOTO4_2_MASTIL = (byte[])ds.Tables[0].Rows[0]["FOTO4_2_MASTIL"];
                MemoryStream mFOTO4_2_MASTIL = new MemoryStream(FOTO4_2_MASTIL);
                byte[] FOTO4_3_PAN_ANT_INSTAL_MASTIL = (byte[])ds.Tables[0].Rows[0]["FOTO4_3_PAN_ANT_INSTAL_MASTIL"];
                MemoryStream mFOTO4_3_PAN_ANT_INSTAL_MASTIL = new MemoryStream(FOTO4_3_PAN_ANT_INSTAL_MASTIL);
                byte[] FOTO4_4_RECORRIDO_SFTP_CATSE = (byte[])ds.Tables[0].Rows[0]["FOTO4_4_RECORRIDO_SFTP_CATSE"];
                MemoryStream mFOTO4_4_RECORRIDO_SFTP_CATSE = new MemoryStream(FOTO4_4_RECORRIDO_SFTP_CATSE);
                byte[] FOTO4_5_INGRESO_SFTP = (byte[])ds.Tables[0].Rows[0]["FOTO4_5_INGRESO_SFTP"];
                MemoryStream mFOTO4_5_INGRESO_SFTP = new MemoryStream(FOTO4_5_INGRESO_SFTP);
                byte[] FOTO4_6_RECORRIDO_SFTP_CANALETA = (byte[])ds.Tables[0].Rows[0]["FOTO4_6_RECORRIDO_SFTP_CANALETA"];
                MemoryStream mFOTO4_6_RECORRIDO_SFTP_CANALETA = new MemoryStream(FOTO4_6_RECORRIDO_SFTP_CANALETA);
                byte[] FOTO4_7_POE = (byte[])ds.Tables[0].Rows[0]["FOTO4_7_POE"];
                MemoryStream mFOTO4_7_POE = new MemoryStream(FOTO4_7_POE);
                byte[] FOTO4_8_PATCH_POE_ROUTER = (byte[])ds.Tables[0].Rows[0]["FOTO4_8_PATCH_POE_ROUTER"];
                MemoryStream mFOTO4_8_PATCH_POE_ROUTER = new MemoryStream(FOTO4_8_PATCH_POE_ROUTER);
                byte[] FOTO5_1_TABLERO_GENERAL_SECUNDARIO = (byte[])ds.Tables[0].Rows[0]["FOTO5_1_TABLERO_GENERAL_SECUNDARIO"];
                MemoryStream mFOTO5_1_TABLERO_GENERAL_SECUNDARIO = new MemoryStream(FOTO5_1_TABLERO_GENERAL_SECUNDARIO);
                byte[] FOTO5_2_INSTALACION_BREAKER = (byte[])ds.Tables[0].Rows[0]["FOTO5_2_INSTALACION_BREAKER"];
                MemoryStream mFOTO5_2_INSTALACION_BREAKER = new MemoryStream(FOTO5_2_INSTALACION_BREAKER);
                byte[] FOTO5_3_CABLE_CONEXION_ELECTRICA = (byte[])ds.Tables[0].Rows[0]["FOTO5_3_CABLE_CONEXION_ELECTRICA"];
                MemoryStream mFOTO5_3_CABLE_CONEXION_ELECTRICA = new MemoryStream(FOTO5_3_CABLE_CONEXION_ELECTRICA);
                byte[] FOTO5_4_TOMAS_ENERGIA = (byte[])ds.Tables[0].Rows[0]["FOTO5_4_TOMAS_ENERGIA"];
                MemoryStream mFOTO5_4_TOMAS_ENERGIA = new MemoryStream(FOTO5_4_TOMAS_ENERGIA);
                byte[] FOTO5_5_FOTO_INTERNA_INST_BREAKER = (byte[])ds.Tables[0].Rows[0]["FOTO5_5_FOTO_INTERNA_INST_BREAKER"];
                MemoryStream mFOTO5_5_FOTO_INTERNA_INST_BREAKER = new MemoryStream(FOTO5_5_FOTO_INTERNA_INST_BREAKER);
                byte[] FOTO6_1_DNI_DJREPRESENTANTE_ABONADO = (byte[])ds.Tables[0].Rows[0]["FOTO6_1_DNI_DJREPRESENTANTE_ABONADO"];
                MemoryStream mFOTO6_1_DNI_DJREPRESENTANTE_ABONADO = new MemoryStream(FOTO6_1_DNI_DJREPRESENTANTE_ABONADO);
                byte[] FOTO6_2_DNI_DJREPRESENTANTE_ABONADO = (byte[])ds.Tables[0].Rows[0]["FOTO6_2_DNI_DJREPRESENTANTE_ABONADO"];
                MemoryStream mFOTO6_2_DNI_DJREPRESENTANTE_ABONADO = new MemoryStream(FOTO6_2_DNI_DJREPRESENTANTE_ABONADO);
                byte[] FOTO7_1_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO7_1_SWITCH"];
                MemoryStream mFOTO7_1_SWITCH = new MemoryStream(FOTO7_1_SWITCH);
                byte[] FOTO7_2_ROUTER = (byte[])ds.Tables[0].Rows[0]["FOTO7_2_ROUTER"];
                MemoryStream mFOTO7_2_ROUTER = new MemoryStream(FOTO7_2_ROUTER);
                byte[] FOTO7_3_REGLETA_ENERGIA = (byte[])ds.Tables[0].Rows[0]["FOTO7_3_REGLETA_ENERGIA"];
                MemoryStream mFOTO7_3_REGLETA_ENERGIA = new MemoryStream(FOTO7_3_REGLETA_ENERGIA);
                byte[] FOTO7_4_UPS = (byte[])ds.Tables[0].Rows[0]["FOTO7_4_UPS"];
                MemoryStream mFOTO7_4_UPS = new MemoryStream(FOTO7_4_UPS);
                byte[] FOTO7_5_COMPUTADORAS = (byte[])ds.Tables[0].Rows[0]["FOTO7_5_COMPUTADORAS"];
                MemoryStream mFOTO7_5_COMPUTADORAS = new MemoryStream(FOTO7_5_COMPUTADORAS);
                byte[] FOTO7_6_ACESS_POINT = (byte[])ds.Tables[0].Rows[0]["FOTO7_6_ACESS_POINT"];
                MemoryStream mFOTO7_6_ACESS_POINT = new MemoryStream(FOTO7_6_ACESS_POINT);
                byte[] FOTO7_7_IMPRESORA = (byte[])ds.Tables[0].Rows[0]["FOTO7_7_IMPRESORA"];
                MemoryStream mFOTO7_7_IMPRESORA = new MemoryStream(FOTO7_7_IMPRESORA);
                byte[] FOTO7_8_PAN_SALA_EQUIPOS = (byte[])ds.Tables[0].Rows[0]["FOTO7_8_PAN_SALA_EQUIPOS"];
                MemoryStream mFOTO7_8_PAN_SALA_EQUIPOS = new MemoryStream(FOTO7_8_PAN_SALA_EQUIPOS);
                byte[] FOTO7_9_JACK_RJ45 = (byte[])ds.Tables[0].Rows[0]["FOTO7_9_JACK_RJ45"];
                MemoryStream mFOTO7_9_JACK_RJ45 = new MemoryStream(FOTO7_9_JACK_RJ45);
                byte[] FOTO8_1_INSTALACION_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["FOTO8_1_INSTALACION_POZO_TIERRA"];
                MemoryStream mFOTO8_1_INSTALACION_POZO_TIERRA = new MemoryStream(FOTO8_1_INSTALACION_POZO_TIERRA);
                byte[] FOTO8_2_CONEX_CAJA_REGISTRO = (byte[])ds.Tables[0].Rows[0]["FOTO8_2_CONEX_CAJA_REGISTRO"];
                MemoryStream mFOTO8_2_CONEX_CAJA_REGISTRO = new MemoryStream(FOTO8_2_CONEX_CAJA_REGISTRO);
                byte[] FOTO8_3_ESCALA_UTIL_RESULT_MEDICION1 = (byte[])ds.Tables[0].Rows[0]["FOTO8_3_ESCALA_UTIL_RESULT_MEDICION1"];
                MemoryStream mFOTO8_3_ESCALA_UTIL_RESULT_MEDICION1 = new MemoryStream(FOTO8_3_ESCALA_UTIL_RESULT_MEDICION1);
                byte[] FOTO8_4_ESCALA_UTIL_RESULT_MEDICION2 = (byte[])ds.Tables[0].Rows[0]["FOTO8_4_ESCALA_UTIL_RESULT_MEDICION2"];
                MemoryStream mFOTO8_4_ESCALA_UTIL_RESULT_MEDICION2 = new MemoryStream(FOTO8_4_ESCALA_UTIL_RESULT_MEDICION2);
                byte[] FOTO8_5_ESCALA_UTIL_RESULT_MEDICION3 = (byte[])ds.Tables[0].Rows[0]["FOTO8_5_ESCALA_UTIL_RESULT_MEDICION3"];
                MemoryStream mFOTO8_5_ESCALA_UTIL_RESULT_MEDICION3 = new MemoryStream(FOTO8_5_ESCALA_UTIL_RESULT_MEDICION3);
                byte[] FOTO9_1_INSTAL_POZO_TIERRA_1 = (byte[])ds.Tables[0].Rows[0]["FOTO9_1_INSTAL_POZO_TIERRA_1"];
                MemoryStream mFOTO9_1_INSTAL_POZO_TIERRA_1 = new MemoryStream(FOTO9_1_INSTAL_POZO_TIERRA_1);
                byte[] FOTO9_2_INSTAL_POZO_TIERRA_2 = (byte[])ds.Tables[0].Rows[0]["FOTO9_2_INSTAL_POZO_TIERRA_2"];
                MemoryStream mFOTO9_2_INSTAL_POZO_TIERRA_2 = new MemoryStream(FOTO9_2_INSTAL_POZO_TIERRA_2);
                byte[] FOTO9_3_ESCALA_UTIL_RESULT_MEDICION1 = (byte[])ds.Tables[0].Rows[0]["FOTO9_3_ESCALA_UTIL_RESULT_MEDICION1"];
                MemoryStream mFOTO9_3_ESCALA_UTIL_RESULT_MEDICION1 = new MemoryStream(FOTO9_3_ESCALA_UTIL_RESULT_MEDICION1);
                byte[] FOTO9_4_ESCALA_UTIL_RESULT_MEDICION2 = (byte[])ds.Tables[0].Rows[0]["FOTO9_4_ESCALA_UTIL_RESULT_MEDICION2"];
                MemoryStream mFOTO9_4_ESCALA_UTIL_RESULT_MEDICION2 = new MemoryStream(FOTO9_4_ESCALA_UTIL_RESULT_MEDICION2);
                byte[] FOTO9_5_ESCALA_UTIL_RESULT_MEDICION3 = (byte[])ds.Tables[0].Rows[0]["FOTO9_5_ESCALA_UTIL_RESULT_MEDICION3"];
                MemoryStream mFOTO9_5_ESCALA_UTIL_RESULT_MEDICION3 = new MemoryStream(FOTO9_5_ESCALA_UTIL_RESULT_MEDICION3);
                byte[] FOTO10_1_PANT_CONF_HOME = (byte[])ds.Tables[0].Rows[0]["FOTO10_1_PANT_CONF_HOME"];
                MemoryStream mFOTO10_1_PANT_CONF_HOME = new MemoryStream(FOTO10_1_PANT_CONF_HOME);
                byte[] FOTO10_2_PANT_CONF_SECURITY = (byte[])ds.Tables[0].Rows[0]["FOTO10_2_PANT_CONF_SECURITY"];
                MemoryStream mFOTO10_2_PANT_CONF_SECURITY = new MemoryStream(FOTO10_2_PANT_CONF_SECURITY);
                byte[] FOTO10_3_PANT_CONF_RADIO_1 = (byte[])ds.Tables[0].Rows[0]["FOTO10_3_PANT_CONF_RADIO_1"];
                MemoryStream mFOTO10_3_PANT_CONF_RADIO_1 = new MemoryStream(FOTO10_3_PANT_CONF_RADIO_1);
                byte[] FOTO10_4_PANT_CONF_RADIO_2 = (byte[])ds.Tables[0].Rows[0]["FOTO10_4_PANT_CONF_RADIO_2"];
                MemoryStream mFOTO10_4_PANT_CONF_RADIO_2 = new MemoryStream(FOTO10_4_PANT_CONF_RADIO_2);
                byte[] FOTO10_5_CONF_SISTEMA_1 = (byte[])ds.Tables[0].Rows[0]["FOTO10_5_CONF_SISTEMA_1"];
                MemoryStream mFOTO10_5_CONF_SISTEMA_1 = new MemoryStream(FOTO10_5_CONF_SISTEMA_1);
                byte[] FOTO10_6_CONF_SISTEMA_2 = (byte[])ds.Tables[0].Rows[0]["FOTO10_6_CONF_SISTEMA_2"];
                MemoryStream mFOTO10_6_CONF_SISTEMA_2 = new MemoryStream(FOTO10_6_CONF_SISTEMA_2);
                byte[] FOTO10_7_PANT_CONF_NETWORK_1 = (byte[])ds.Tables[0].Rows[0]["FOTO10_7_PANT_CONF_NETWORK_1"];
                MemoryStream mFOTO10_7_PANT_CONF_NETWORK_1 = new MemoryStream(FOTO10_7_PANT_CONF_NETWORK_1);
                byte[] FOTO10_8_PANT_CONF_NETWORK_2 = (byte[])ds.Tables[0].Rows[0]["FOTO10_8_PANT_CONF_NETWORK_2"];
                MemoryStream mFOTO10_8_PANT_CONF_NETWORK_2 = new MemoryStream(FOTO10_8_PANT_CONF_NETWORK_2);
                byte[] FOTO10_9_PANT_CONF_MONITOR_WIRELESS = (byte[])ds.Tables[0].Rows[0]["FOTO10_9_PANT_CONF_MONITOR_WIRELESS"];
                MemoryStream mFOTO10_9_PANT_CONF_MONITOR_WIRELESS = new MemoryStream(FOTO10_9_PANT_CONF_MONITOR_WIRELESS);
                byte[] FOTO10_10_CONF_SISTEMA_TOOLS = (byte[])ds.Tables[0].Rows[0]["FOTO10_10_CONF_SISTEMA_TOOLS"];
                MemoryStream mFOTO10_10_CONF_SISTEMA_TOOLS = new MemoryStream(FOTO10_10_CONF_SISTEMA_TOOLS);
                byte[] FOTO11_1_MON_CONEX_SITIO_WEB = (byte[])ds.Tables[0].Rows[0]["FOTO11_1_MON_CONEX_SITIO_WEB"];
                MemoryStream mFOTO11_1_MON_CONEX_SITIO_WEB = new MemoryStream(FOTO11_1_MON_CONEX_SITIO_WEB);
                byte[] FOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL = (byte[])ds.Tables[0].Rows[0]["FOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL"];
                MemoryStream mFOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL = new MemoryStream(FOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL);
                byte[] FOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL = (byte[])ds.Tables[0].Rows[0]["FOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL"];
                MemoryStream mFOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL = new MemoryStream(FOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL);
                byte[] FOTO_EPMP_1000_FORCE_180 = (byte[])ds.Tables[0].Rows[0]["FOTO_EPMP_1000_FORCE_180"];
                MemoryStream mFOTO_EPMP_1000_FORCE_180 = new MemoryStream(FOTO_EPMP_1000_FORCE_180);
                byte[] FOTO_1_ACCESS_POINT_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_1_ACCESS_POINT_SERIE"];
                MemoryStream mFOTO_1_ACCESS_POINT_SERIE = new MemoryStream(FOTO_1_ACCESS_POINT_SERIE);
                byte[] FOTO_2_SWITCH_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_2_SWITCH_SERIE"];
                MemoryStream mFOTO_2_SWITCH_SERIE = new MemoryStream(FOTO_2_SWITCH_SERIE);
                byte[] FOTO_3_ROUTER_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_3_ROUTER_SERIE"];
                MemoryStream mFOTO_3_ROUTER_SERIE = new MemoryStream(FOTO_3_ROUTER_SERIE);
                byte[] FOTO_4_IMPRESORA_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_4_IMPRESORA_SERIE"];
                MemoryStream mFOTO_4_IMPRESORA_SERIE = new MemoryStream(FOTO_4_IMPRESORA_SERIE);
                byte[] FOTO_5_UPS_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_5_UPS_SERIE"];
                MemoryStream mFOTO_5_UPS_SERIE = new MemoryStream(FOTO_5_UPS_SERIE);
                byte[] FOTO_6_PC01_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_6_PC01_SERIE"];
                MemoryStream mFOTO_6_PC01_SERIE = new MemoryStream(FOTO_6_PC01_SERIE);
                byte[] FOTO_7_PC02_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_7_PC02_SERIE"];
                MemoryStream mFOTO_7_PC02_SERIE = new MemoryStream(FOTO_7_PC02_SERIE);
                byte[] FOTO_8_PC03_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_8_PC03_SERIE"];
                MemoryStream mFOTO_8_PC03_SERIE = new MemoryStream(FOTO_8_PC03_SERIE);
                byte[] FOTO_9_PC04_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_9_PC04_SERIE"];
                MemoryStream mFOTO_9_PC04_SERIE = new MemoryStream(FOTO_9_PC04_SERIE);
                byte[] FOTO_10_PC05_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_10_PC05_SERIE"];
                MemoryStream mFOTO_10_PC05_SERIE = new MemoryStream(FOTO_10_PC05_SERIE);

                #endregion

                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando Valores por Hoja en Excel

                #region Caratula 
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", "INSTITUCION  " + NOMBRE_IIBB, 12, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", CODIGO_IIBB, 16, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", TIPO_INSTITUCION, 19, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", NOMBRE_IIBB, 22, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", FECHA, 28, "D");
                #endregion

                #region Acta de Instalacion FITEL

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "PROYECTO REGIONAL DE  " + DEPARTAMENTO, 10, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRE_NODO, 14, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", UBIGEO, 14, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DEPARTAMENTO, 15, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", PROVINCIA, 15, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DISTRITO, 16, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DIRECCION_NODO, 16, "J");

                if (TIPO_INSTITUCION.Equals("INSTITUCION EDUCATIVA"))
                {

                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "E");
                }
                else
                {
                    if (TIPO_INSTITUCION.Equals("CENTRO DE SALUD"))
                    {
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "H");
                    }
                    else
                    {
                        if (TIPO_INSTITUCION.Equals("COMISARIA"))
                        {
                            ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "J");
                        }
                        else
                        {
                            ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "M");
                        }
                    }
                }

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", LATITUD + "º", 21, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", LONGITUD + "º", 21, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", LATITUD + "º", 21, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DIRECCION_NODO + ", " + REFERENCIA_UBICACION_IIBB, 22, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", TIPO_MASTIL, 25, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ALTURA_MASTIL, 25, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CODIGO_IIBB, 25, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ODU_CPE, 30, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", SWITCH_COMUNICACIONES, 34, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ACCESS_POINT_INDOOR, 35, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", UPS, 36, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", IMPRESORA_MULTIFUNCIONAL, 37, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ROUTER, 38, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO1, 39, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO2, 40, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO3, 41, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO4, 42, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO5, 43, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DISPONIBILIDAD_HORAS, 58, "G");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", VALOR_MEDIO_MEDIDA1, 62, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", VALOR_MEDIO_MEDIDA2, 63, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", VALOR_MEDIO_MEDIDA3, 64, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", POTENCIA_TRANSMISION + " DBM", 70, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", FRECUENCIA + " MHz", 71, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ANCHO_BANDA_CANAL, 72, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", AZIMUT + "º", 71, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", FRECUENCIA, 72, "L");

                foreach (DataRow dr in ds1.Tables[0].Rows)
                {
                    String CPE = dr["CPE"].ToString();
                    String ESTACION_LOCAL = dr["ESTACION_LOCAL"].ToString();
                    String RSS_CPE = dr["RSS_CPE"].ToString();
                    String RSS_LOCAL = dr["RSS_LOCAL"].ToString();
                    String TIEMPO_PROM = dr["TIEMPO_PROM"].ToString();
                    String CAP_SUBIDA = dr["CAP_SUBIDA"].ToString();
                    String CAP_BAJADA = dr["CAP_BAJADA"].ToString();
                    String DISTANCIA_metros = dr["DISTANCIA_metros"].ToString(); 

                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CPE, 79, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ESTACION_LOCAL, 79, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", RSS_CPE, 79, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", RSS_LOCAL, 79, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", TIEMPO_PROM, 79, "J");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "UL " + CAP_SUBIDA + "/" + "DL " + CAP_BAJADA, 79, "K");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DISTANCIA_metros, 79, "L");
                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", FRECUENCIA + "MHz", 79, "M");

                }

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CONECTIVIDAD_GILAT, 83, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CONECTIVIDAD_NODO_TERMINAL, 84, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CONECTIVIDAD_NODO_TERMINAL, 85, "L");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRES_APELLIDOS_ENCARGADO, 95, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DOC_IDENTIDAD_ENCARGADO, 96, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CELULAR_CONTACTO_ENCARGADO, 97, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EMAIL_ENCARGADO_IIBB, 98, "F");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRES_APELLIDOS_REPRESENTANTE, 119, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DOC_IDENTIDAD_REPRESENTANTE, 119, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CARGO_REPRESENTANTE_IIBB, 119, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EMAIL_REPRESENTANTE_IIBB, 119, "L");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRES_APELLIDOS_REPR_OPERADOR, 120, "D");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DOC_IDENTIDAD_REPR_OPERADOR, 120, "I");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CARGO_REPRESENTANTE_OPERADOR, 120, "J");
                //ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EMAIL_REPR_OPERADOR, 120, "L");


                #endregion

                #region Configuracion y Pruebas

                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", NOMBRE_IIBB, 10, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CODIGO_IIBB, 13, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", NOMBRE_IIBB, 14, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", TIPO_INSTITUCION, 15, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", LATITUD+"º", 18, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", LONGITUD+"º", 19, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CODIGO_NODO, 23, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", IP_IIBB, 27, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", NOMBRES_APELLIDOS_REPRESENTANTE, 33, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CARGO_REPRESENTANTE_IIBB, 34, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CELULAR_CONTACTO_REPRESENTANTE, 35, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", ODU_CPE, 38, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", ALTURA_MASTIL, 41, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", TIPO_MASTIL, 42, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", ALTITUDmsnm+" M.S.N.M", 62, "D");


                #endregion

                #region Pantallas de Configuracion 

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ACCESS_POINt, "", 11, 3, 907, 491);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ROUTER, "", 54, 3, 908, 592);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_SWITCH01, "", 101, 4, 768, 401);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_SWITCH02, "", 121, 4, 732, 339);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_UPS, "", 138, 4, 767, 399);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ALLINONE01, "", 166, 4, 746, 447);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ALLINONE01, "", 169, 4, 736, 447);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_IMPRESORA, "", 196, 5, 593, 399);

                #endregion

                #region Medicion SPAT   
                //ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPT_MEDIDA1_VALORMEDIO, 7, "I");
                //ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPT_MEDIDA2_VALORMEDIO, 8, "I");
                //ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPT_MEDIDA3_VALORMEDIO, 9, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPTP_MEDIDA1_VALORMEDIO, 14, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPTP_MEDIDA2_VALORMEDIO, 15, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPTP_MEDIDA1_VALORMEDIO, 16, "I");

                #endregion

                #region Material IIBB

                ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", "INSTITUCION  " + NOMBRE_IIBB, 12, "F");

                foreach (DataRow dr in ds2.Tables[0].Rows)
                {
                    String EQUIPO = dr["EQUIPO"].ToString();
                    String MARCA = dr["MARCA"].ToString();
                    String MODELO = dr["MODELO"].ToString();
                    String Nro_SERIE = dr["Nro_SERIE"].ToString();

                    int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", Convert.ToString(ind + 1), 17 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", EQUIPO, 17 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", "1", 17 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", MARCA, 17 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", MODELO, 17 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", Nro_SERIE, 17 + ind, "G");
                }

                foreach (DataRow dr in ds3.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String CODIGO = dr["CODIGO"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds3.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", Convert.ToString(ind + 1), 32 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", DESCRIPCION, 32 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", CODIGO, 32 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", UNIDAD, 32 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", CANTIDAD, 32 + ind, "G");

                }

                #endregion

                #region Reporte Fotografico

                ExcelToolsBL.UpdateCell(excelGenerado, "7 Reporte Fotográfico IIBB CPE", CODIGO_IIBB + NOMBRE_IIBB, 7, "B");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO1_PAN_LOCALIDAD, "", 11, 2, 904, 505);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO2_FACHADA_INSTITUCION, "", 48, 5, 700, 391);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_1_IMPRESORA, "", 82, 4, 314, 251);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_2_SWITCH, "", 82, 15, 314, 251);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_3_ROUTER, "", 101, 3, 365, 275);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_4_PC_ENCENDIDAS, "", 101, 14, 368, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_5_PC_UPS, "", 121, 3, 385, 288);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_6_ACCESS_POINT, "", 121, 14, 378, 281);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_1_ODU_CPE, "", 141, 3, 385, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_2_MASTIL, "", 141, 14, 390, 288);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_3_PAN_ANT_INSTAL_MASTIL, "", 160, 3, 391, 292);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_4_RECORRIDO_SFTP_CATSE, "", 160, 14, 401, 296);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_5_INGRESO_SFTP, "", 178, 3, 375, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_6_RECORRIDO_SFTP_CANALETA, "", 178, 16, 211, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_7_POE, "", 197, 3, 371, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_8_PATCH_POE_ROUTER, "", 197, 14, 373, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_1_TABLERO_GENERAL_SECUNDARIO, "", 223, 3, 405, 299);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_2_INSTALACION_BREAKER, "", 223, 14, 402, 311);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_3_CABLE_CONEXION_ELECTRICA, "", 242, 3, 396, 300);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_4_TOMAS_ENERGIA, "", 237, 14, 353, 447);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_5_FOTO_INTERNA_INST_BREAKER, "", 256, 14, 392, 290);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO6_1_DNI_DJREPRESENTANTE_ABONADO, "", 274, 3, 431, 283);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO6_2_DNI_DJREPRESENTANTE_ABONADO, "", 274, 13, 444, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_1_SWITCH, "", 294, 3, 362, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_2_ROUTER, "", 294, 14, 369, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_3_REGLETA_ENERGIA, "", 311, 3, 405, 300);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_4_UPS, "", 274, 13, 236, 311);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_5_COMPUTADORAS, "", 328, 3, 361, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_6_ACESS_POINT, "", 328, 14, 370, 279);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_7_IMPRESORA, "", 345, 3, 364, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_8_PAN_SALA_EQUIPOS, "", 345, 14, 375, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_9_JACK_RJ45, "", 361, 3, 376, 281);

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_1_INSTALACION_POZO_TIERRA, "", 381, 3, 350, 279);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_2_CONEX_CAJA_REGISTRO, "", 381, 14, 371, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_3_ESCALA_UTIL_RESULT_MEDICION1, "", 400, 4, 271, 364);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_4_ESCALA_UTIL_RESULT_MEDICION2, "", 400, 16, 276, 375);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_5_ESCALA_UTIL_RESULT_MEDICION3, "", 416, 4, 276, 375);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_1_INSTAL_POZO_TIERRA_1, "", 436, 3, 367, 290);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_2_INSTAL_POZO_TIERRA_2, "", 436, 14, 385, 293);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_3_ESCALA_UTIL_RESULT_MEDICION1, "", 455, 4, 276, 372);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_4_ESCALA_UTIL_RESULT_MEDICION2, "", 455, 16, 280, 375);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_5_ESCALA_UTIL_RESULT_MEDICION3, "", 471, 4, 277, 369);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_1_PANT_CONF_HOME, "", 492, 3, 382, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_2_PANT_CONF_SECURITY, "", 492, 14, 385, 271);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_3_PANT_CONF_RADIO_1, "", 509, 3, 395, 266);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_4_PANT_CONF_RADIO_2, "", 509, 14, 382, 262);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_5_CONF_SISTEMA_1, "", 526, 3, 391, 279);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_6_CONF_SISTEMA_2, "", 526, 14, 368, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_7_PANT_CONF_NETWORK_1, "", 543, 3, 392, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_8_PANT_CONF_NETWORK_2, "", 543, 14, 378, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_9_PANT_CONF_MONITOR_WIRELESS, "", 560, 3, 391, 284);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_10_CONF_SISTEMA_TOOLS, "", 560, 14, 399, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO11_1_MON_CONEX_SITIO_WEB, "", 580, 4, 693, 461);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL, "", 596, 5, 690, 448);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL, "", 612, 4, 801, 451);
                #endregion

                #region Serie equipos fotos

                ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE","CPE: " +NOMBRE_IIBB,13, "B");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_EPMP_1000_FORCE_180, "", 15, 7, 680, 383);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_1_ACCESS_POINT_SERIE, "", 34, 2, 476, 611);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_2_SWITCH_SERIE, "", 34, 15, 351, 596);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_3_ROUTER_SERIE, "", 54, 2, 356, 383);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_4_IMPRESORA_SERIE, "", 54, 14, 351, 596);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_5_UPS_SERIE, "", 75, 10, 285, 425);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_6_PC01_SERIE, "", 98, 11, 280, 422);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_7_PC02_SERIE, "", 122, 3, 237, 387);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_8_PC03_SERIE, "", 122, 15, 237, 387);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_9_PC04_SERIE, "", 141, 2, 326, 358);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_10_PC05_SERIE, "", 141, 13, 326, 358);


                #endregion

                #endregion

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
        public void ActaInstalacionAceptacionProtocoloIIBB_B(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ACTA_INSTALACION_ACEPTACION_PROTOCOLO_IIBB_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA",IdTarea,true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MEDICION_ENLACE_IIBB_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_EQUIPAMIENTOS_IIBB_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_IIBB_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds3 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores

                #region Valores String
                String FRECUENCIA = ds.Tables[0].Rows[0]["FRECUENCIA"].ToString();
                String CODIGO_IIBB = ds.Tables[0].Rows[0]["CODIGO_IIBB"].ToString();
                String TIPO_INSTITUCION = ds.Tables[0].Rows[0]["TIPO_INSTITUCION"].ToString();
                String NOMBRE_IIBB = ds.Tables[0].Rows[0]["NOMBRE_IIBB"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();
                String PROVINCIA = ds.Tables[0].Rows[0]["PROVINCIA"].ToString();
                String DISTRITO = ds.Tables[0].Rows[0]["DISTRITO"].ToString();
                String NOMBRE_NODO = ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String UBIGEO = ds.Tables[0].Rows[0]["UBIGEO"].ToString();
                String LATITUD = ds.Tables[0].Rows[0]["LATITUD"].ToString();
                String LONGITUD = ds.Tables[0].Rows[0]["LONGITUD"].ToString();
                String ALTITUDmsnm = ds.Tables[0].Rows[0]["ALTITUDmsnm"].ToString();
                String AZIMUT = ds.Tables[0].Rows[0]["AZIMUT"].ToString();

               
                String DIRECCION_NODO = ds.Tables[0].Rows[0]["DIRECCION_NODO"].ToString();

                String ODU_CPE = ds.Tables[0].Rows[0]["ODU_CPE"].ToString();
                String ACCESS_POINT_INDOOR = ds.Tables[0].Rows[0]["ACCESS_POINT_INDOOR"].ToString();
                String SWITCH_COMUNICACIONES = ds.Tables[0].Rows[0]["SWITCH_COMUNICACIONES"].ToString();
                String ROUTER = ds.Tables[0].Rows[0]["ROUTER"].ToString();
                String EQUIPO_COMPUTO1 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO1"].ToString();
                String EQUIPO_COMPUTO2 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO2"].ToString();
                String EQUIPO_COMPUTO3 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO3"].ToString();
                String EQUIPO_COMPUTO4 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO4"].ToString();
                String EQUIPO_COMPUTO5 = ds.Tables[0].Rows[0]["EQUIPO_COMPUTO5"].ToString();
                String IMPRESORA_MULTIFUNCIONAL = ds.Tables[0].Rows[0]["IMPRESORA_MULTIFUNCIONAL"].ToString();
                String UPS = ds.Tables[0].Rows[0]["UPS"].ToString();
                String REFERENCIA_UBICACION_IIBB = ds.Tables[0].Rows[0]["REFERENCIA_UBICACION_IIBB"].ToString();
                String TIPO_MASTIL = ds.Tables[0].Rows[0]["TIPO_MASTIL"].ToString();
                String ALTURA_MASTIL = ds.Tables[0].Rows[0]["ALTURA_MASTIL"].ToString();
                String DISPONIBILIDAD_HORAS = ds.Tables[0].Rows[0]["DISPONIBILIDAD_HORAS"].ToString();
                String VALOR_MEDIO_MEDIDA1 = ds.Tables[0].Rows[0]["VALOR_MEDIO_MEDIDA1"].ToString();
                String VALOR_MEDIO_MEDIDA2 = ds.Tables[0].Rows[0]["VALOR_MEDIO_MEDIDA2"].ToString();
                String VALOR_MEDIO_MEDIDA3 = ds.Tables[0].Rows[0]["VALOR_MEDIO_MEDIDA3"].ToString();
                String POTENCIA_TRANSMISION = ds.Tables[0].Rows[0]["POTENCIA_TRANSMISION"].ToString();
                String ANCHO_BANDA_CANAL = ds.Tables[0].Rows[0]["ANCHO_BANDA_CANAL"].ToString();
                String ELEVACION = ds.Tables[0].Rows[0]["ELEVACION"].ToString();
                String CONECTIVIDAD_GILAT = ds.Tables[0].Rows[0]["CONECTIVIDAD_GILAT"].ToString();
                String CONECTIVIDAD_NODO_TERMINAL = ds.Tables[0].Rows[0]["CONECTIVIDAD_NODO_TERMINAL"].ToString();
                String CONECTIVIDAD_NODO_DISTRITAL = ds.Tables[0].Rows[0]["CONECTIVIDAD_NODO_DISTRITAL"].ToString();
                String CONECTIVIDAD_NOC = ds.Tables[0].Rows[0]["CONECTIVIDAD_NOC"].ToString();
                String NOMBRES_APELLIDOS_ENCARGADO = ds.Tables[0].Rows[0]["NOMBRES_APELLIDOS_ENCARGADO"].ToString();
                String DOC_IDENTIDAD_ENCARGADO = ds.Tables[0].Rows[0]["DOC_IDENTIDAD_ENCARGADO"].ToString();
                String CELULAR_CONTACTO_ENCARGADO = ds.Tables[0].Rows[0]["CELULAR_CONTACTO_ENCARGADO"].ToString();
                String EMAIL_ENCARGADO_IIBB = ds.Tables[0].Rows[0]["EMAIL_ENCARGADO_IIBB"].ToString();
                String NOMBRES_APELLIDOS_REPRESENTANTE = ds.Tables[0].Rows[0]["NOMBRES_APELLIDOS_REPRESENTANTE"].ToString();
                String DOC_IDENTIDAD_REPRESENTANTE = ds.Tables[0].Rows[0]["DOC_IDENTIDAD_REPRESENTANTE"].ToString();
                String CELULAR_CONTACTO_REPRESENTANTE = ds.Tables[0].Rows[0]["CELULAR_CONTACTO_REPRESENTANTE"].ToString();
                String CARGO_REPRESENTANTE_IIBB = ds.Tables[0].Rows[0]["CARGO_REPRESENTANTE_IIBB"].ToString();
                String EMAIL_REPRESENTANTE_IIBB = ds.Tables[0].Rows[0]["EMAIL_REPRESENTANTE_IIBB"].ToString();
                String NOMBRES_APELLIDOS_REPR_OPERADOR = ds.Tables[0].Rows[0]["NOMBRES_APELLIDOS_REPR_OPERADOR"].ToString();
                String DOC_IDENTIDAD_REPR_OPERADOR = ds.Tables[0].Rows[0]["DOC_IDENTIDAD_REPR_OPERADOR"].ToString();
                String CARGO_REPRESENTANTE_OPERADOR = ds.Tables[0].Rows[0]["CARGO_REPRESENTANTE_OPERADOR"].ToString();
                String EMAIL_REPR_OPERADOR = ds.Tables[0].Rows[0]["EMAIL_REPR_OPERADOR"].ToString();

                String MSPT_MEDIDA1_VALORMEDIO = ds.Tables[0].Rows[0]["MSPT_MEDIDA1_VALORMEDIO"].ToString();
                String MSPT_MEDIDA2_VALORMEDIO = ds.Tables[0].Rows[0]["MSPT_MEDIDA2_VALORMEDIO"].ToString();
                String MSPT_MEDIDA3_VALORMEDIO = ds.Tables[0].Rows[0]["MSPT_MEDIDA3_VALORMEDIO"].ToString();
                String MSPTP_MEDIDA1_VALORMEDIO = ds.Tables[0].Rows[0]["MSPTP_MEDIDA1_VALORMEDIO"].ToString();
                String MSPTP_MEDIDA2_VALORMEDIO = ds.Tables[0].Rows[0]["MSPTP_MEDIDA2_VALORMEDIO"].ToString();
                String MSPTP_MEDIDA3_VALORMEDIO = ds.Tables[0].Rows[0]["MSPTP_MEDIDA3_VALORMEDIO"].ToString();

                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String IP_IIBB = ds.Tables[0].Rows[0]["IP_IIBB"].ToString();

                #endregion

                #region Valores byte

                byte[] PANT_CONF_ACCESS_POINt = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ACCESS_POINt"];
                MemoryStream mPANT_CONF_ACCESS_POINt = new MemoryStream(PANT_CONF_ACCESS_POINt);
                byte[] PANT_CONF_ROUTER = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ROUTER"];
                MemoryStream mPANT_CONF_ROUTER = new MemoryStream(PANT_CONF_ROUTER);
                byte[] PANT_CONF_SWITCH01 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_SWITCH01"];
                MemoryStream mPANT_CONF_SWITCH01 = new MemoryStream(PANT_CONF_SWITCH01);
                byte[] PANT_CONF_SWITCH02 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_SWITCH02"];
                MemoryStream mPANT_CONF_SWITCH02 = new MemoryStream(PANT_CONF_SWITCH02);
                byte[] PANT_CONF_UPS = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_UPS"];
                MemoryStream mPANT_CONF_UPS = new MemoryStream(PANT_CONF_UPS);
                byte[] PANT_CONF_ALLINONE01 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ALLINONE01"];
                MemoryStream mPANT_CONF_ALLINONE01 = new MemoryStream(PANT_CONF_ALLINONE01);
                byte[] PANT_CONF_ALLINONE02 = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_ALLINONE02"];
                MemoryStream mPANT_CONF_ALLINONE02 = new MemoryStream(PANT_CONF_ALLINONE02);
                byte[] PANT_CONF_IMPRESORA = (byte[])ds.Tables[0].Rows[0]["PANT_CONF_IMPRESORA"];
                MemoryStream mPANT_CONF_IMPRESORA = new MemoryStream(PANT_CONF_IMPRESORA);
                byte[] FOTO1_PAN_LOCALIDAD = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_LOCALIDAD"];
                MemoryStream mFOTO1_PAN_LOCALIDAD = new MemoryStream(FOTO1_PAN_LOCALIDAD);
                byte[] FOTO2_FACHADA_INSTITUCION = (byte[])ds.Tables[0].Rows[0]["FOTO2_FACHADA_INSTITUCION"];
                MemoryStream mFOTO2_FACHADA_INSTITUCION = new MemoryStream(FOTO2_FACHADA_INSTITUCION);
                byte[] FOTO3_1_IMPRESORA = (byte[])ds.Tables[0].Rows[0]["FOTO3_1_IMPRESORA"];
                MemoryStream mFOTO3_1_IMPRESORA = new MemoryStream(FOTO3_1_IMPRESORA);
                byte[] FOTO3_2_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO3_2_SWITCH"];
                MemoryStream mFOTO3_2_SWITCH = new MemoryStream(FOTO3_2_SWITCH);
                byte[] FOTO3_3_ROUTER = (byte[])ds.Tables[0].Rows[0]["FOTO3_3_ROUTER"];
                MemoryStream mFOTO3_3_ROUTER = new MemoryStream(FOTO3_3_ROUTER);
                byte[] FOTO3_4_PC_ENCENDIDAS = (byte[])ds.Tables[0].Rows[0]["FOTO3_4_PC_ENCENDIDAS"];
                MemoryStream mFOTO3_4_PC_ENCENDIDAS = new MemoryStream(FOTO3_4_PC_ENCENDIDAS);
                byte[] FOTO3_5_PC_UPS = (byte[])ds.Tables[0].Rows[0]["FOTO3_5_PC_UPS"];
                MemoryStream mFOTO3_5_PC_UPS = new MemoryStream(FOTO3_5_PC_UPS);
                byte[] FOTO3_6_ACCESS_POINT = (byte[])ds.Tables[0].Rows[0]["FOTO3_6_ACCESS_POINT"];
                MemoryStream mFOTO3_6_ACCESS_POINT = new MemoryStream(FOTO3_6_ACCESS_POINT);
                byte[] FOTO4_1_ODU_CPE = (byte[])ds.Tables[0].Rows[0]["FOTO4_1_ODU_CPE"];
                MemoryStream mFOTO4_1_ODU_CPE = new MemoryStream(FOTO4_1_ODU_CPE);
                byte[] FOTO4_2_MASTIL = (byte[])ds.Tables[0].Rows[0]["FOTO4_2_MASTIL"];
                MemoryStream mFOTO4_2_MASTIL = new MemoryStream(FOTO4_2_MASTIL);
                byte[] FOTO4_3_PAN_ANT_INSTAL_MASTIL = (byte[])ds.Tables[0].Rows[0]["FOTO4_3_PAN_ANT_INSTAL_MASTIL"];
                MemoryStream mFOTO4_3_PAN_ANT_INSTAL_MASTIL = new MemoryStream(FOTO4_3_PAN_ANT_INSTAL_MASTIL);
                byte[] FOTO4_4_RECORRIDO_SFTP_CATSE = (byte[])ds.Tables[0].Rows[0]["FOTO4_4_RECORRIDO_SFTP_CATSE"];
                MemoryStream mFOTO4_4_RECORRIDO_SFTP_CATSE = new MemoryStream(FOTO4_4_RECORRIDO_SFTP_CATSE);
                byte[] FOTO4_5_INGRESO_SFTP = (byte[])ds.Tables[0].Rows[0]["FOTO4_5_INGRESO_SFTP"];
                MemoryStream mFOTO4_5_INGRESO_SFTP = new MemoryStream(FOTO4_5_INGRESO_SFTP);
                byte[] FOTO4_6_RECORRIDO_SFTP_CANALETA = (byte[])ds.Tables[0].Rows[0]["FOTO4_6_RECORRIDO_SFTP_CANALETA"];
                MemoryStream mFOTO4_6_RECORRIDO_SFTP_CANALETA = new MemoryStream(FOTO4_6_RECORRIDO_SFTP_CANALETA);
                byte[] FOTO4_7_POE = (byte[])ds.Tables[0].Rows[0]["FOTO4_7_POE"];
                MemoryStream mFOTO4_7_POE = new MemoryStream(FOTO4_7_POE);
                byte[] FOTO4_8_PATCH_POE_ROUTER = (byte[])ds.Tables[0].Rows[0]["FOTO4_8_PATCH_POE_ROUTER"];
                MemoryStream mFOTO4_8_PATCH_POE_ROUTER = new MemoryStream(FOTO4_8_PATCH_POE_ROUTER);
                byte[] FOTO5_1_TABLERO_GENERAL_SECUNDARIO = (byte[])ds.Tables[0].Rows[0]["FOTO5_1_TABLERO_GENERAL_SECUNDARIO"];
                MemoryStream mFOTO5_1_TABLERO_GENERAL_SECUNDARIO = new MemoryStream(FOTO5_1_TABLERO_GENERAL_SECUNDARIO);
                byte[] FOTO5_2_INSTALACION_BREAKER = (byte[])ds.Tables[0].Rows[0]["FOTO5_2_INSTALACION_BREAKER"];
                MemoryStream mFOTO5_2_INSTALACION_BREAKER = new MemoryStream(FOTO5_2_INSTALACION_BREAKER);
                byte[] FOTO5_3_CABLE_CONEXION_ELECTRICA = (byte[])ds.Tables[0].Rows[0]["FOTO5_3_CABLE_CONEXION_ELECTRICA"];
                MemoryStream mFOTO5_3_CABLE_CONEXION_ELECTRICA = new MemoryStream(FOTO5_3_CABLE_CONEXION_ELECTRICA);
                byte[] FOTO5_4_TOMAS_ENERGIA = (byte[])ds.Tables[0].Rows[0]["FOTO5_4_TOMAS_ENERGIA"];
                MemoryStream mFOTO5_4_TOMAS_ENERGIA = new MemoryStream(FOTO5_4_TOMAS_ENERGIA);
                byte[] FOTO5_5_FOTO_INTERNA_INST_BREAKER = (byte[])ds.Tables[0].Rows[0]["FOTO5_5_FOTO_INTERNA_INST_BREAKER"];
                MemoryStream mFOTO5_5_FOTO_INTERNA_INST_BREAKER = new MemoryStream(FOTO5_5_FOTO_INTERNA_INST_BREAKER);
                byte[] FOTO6_1_DNI_DJREPRESENTANTE_ABONADO = (byte[])ds.Tables[0].Rows[0]["FOTO6_1_DNI_DJREPRESENTANTE_ABONADO"];
                MemoryStream mFOTO6_1_DNI_DJREPRESENTANTE_ABONADO = new MemoryStream(FOTO6_1_DNI_DJREPRESENTANTE_ABONADO);
                byte[] FOTO6_2_DNI_DJREPRESENTANTE_ABONADO = (byte[])ds.Tables[0].Rows[0]["FOTO6_2_DNI_DJREPRESENTANTE_ABONADO"];
                MemoryStream mFOTO6_2_DNI_DJREPRESENTANTE_ABONADO = new MemoryStream(FOTO6_2_DNI_DJREPRESENTANTE_ABONADO);
                byte[] FOTO7_1_SWITCH = (byte[])ds.Tables[0].Rows[0]["FOTO7_1_SWITCH"];
                MemoryStream mFOTO7_1_SWITCH = new MemoryStream(FOTO7_1_SWITCH);
                byte[] FOTO7_2_ROUTER = (byte[])ds.Tables[0].Rows[0]["FOTO7_2_ROUTER"];
                MemoryStream mFOTO7_2_ROUTER = new MemoryStream(FOTO7_2_ROUTER);
                byte[] FOTO7_3_REGLETA_ENERGIA = (byte[])ds.Tables[0].Rows[0]["FOTO7_3_REGLETA_ENERGIA"];
                MemoryStream mFOTO7_3_REGLETA_ENERGIA = new MemoryStream(FOTO7_3_REGLETA_ENERGIA);
                byte[] FOTO7_4_UPS = (byte[])ds.Tables[0].Rows[0]["FOTO7_4_UPS"];
                MemoryStream mFOTO7_4_UPS = new MemoryStream(FOTO7_4_UPS);
                byte[] FOTO7_5_COMPUTADORAS = (byte[])ds.Tables[0].Rows[0]["FOTO7_5_COMPUTADORAS"];
                MemoryStream mFOTO7_5_COMPUTADORAS = new MemoryStream(FOTO7_5_COMPUTADORAS);
                byte[] FOTO7_6_ACESS_POINT = (byte[])ds.Tables[0].Rows[0]["FOTO7_6_ACESS_POINT"];
                MemoryStream mFOTO7_6_ACESS_POINT = new MemoryStream(FOTO7_6_ACESS_POINT);
                byte[] FOTO7_7_IMPRESORA = (byte[])ds.Tables[0].Rows[0]["FOTO7_7_IMPRESORA"];
                MemoryStream mFOTO7_7_IMPRESORA = new MemoryStream(FOTO7_7_IMPRESORA);
                byte[] FOTO7_8_PAN_SALA_EQUIPOS = (byte[])ds.Tables[0].Rows[0]["FOTO7_8_PAN_SALA_EQUIPOS"];
                MemoryStream mFOTO7_8_PAN_SALA_EQUIPOS = new MemoryStream(FOTO7_8_PAN_SALA_EQUIPOS);
                byte[] FOTO7_9_JACK_RJ45 = (byte[])ds.Tables[0].Rows[0]["FOTO7_9_JACK_RJ45"];
                MemoryStream mFOTO7_9_JACK_RJ45 = new MemoryStream(FOTO7_9_JACK_RJ45);
                byte[] FOTO8_1_INSTALACION_POZO_TIERRA = (byte[])ds.Tables[0].Rows[0]["FOTO8_1_INSTALACION_POZO_TIERRA"];
                MemoryStream mFOTO8_1_INSTALACION_POZO_TIERRA = new MemoryStream(FOTO8_1_INSTALACION_POZO_TIERRA);
                byte[] FOTO8_2_CONEX_CAJA_REGISTRO = (byte[])ds.Tables[0].Rows[0]["FOTO8_2_CONEX_CAJA_REGISTRO"];
                MemoryStream mFOTO8_2_CONEX_CAJA_REGISTRO = new MemoryStream(FOTO8_2_CONEX_CAJA_REGISTRO);
                byte[] FOTO8_3_ESCALA_UTIL_RESULT_MEDICION1 = (byte[])ds.Tables[0].Rows[0]["FOTO8_3_ESCALA_UTIL_RESULT_MEDICION1"];
                MemoryStream mFOTO8_3_ESCALA_UTIL_RESULT_MEDICION1 = new MemoryStream(FOTO8_3_ESCALA_UTIL_RESULT_MEDICION1);
                byte[] FOTO8_4_ESCALA_UTIL_RESULT_MEDICION2 = (byte[])ds.Tables[0].Rows[0]["FOTO8_4_ESCALA_UTIL_RESULT_MEDICION2"];
                MemoryStream mFOTO8_4_ESCALA_UTIL_RESULT_MEDICION2 = new MemoryStream(FOTO8_4_ESCALA_UTIL_RESULT_MEDICION2);
                byte[] FOTO8_5_ESCALA_UTIL_RESULT_MEDICION3 = (byte[])ds.Tables[0].Rows[0]["FOTO8_5_ESCALA_UTIL_RESULT_MEDICION3"];
                MemoryStream mFOTO8_5_ESCALA_UTIL_RESULT_MEDICION3 = new MemoryStream(FOTO8_5_ESCALA_UTIL_RESULT_MEDICION3);
                byte[] FOTO9_1_INSTAL_POZO_TIERRA_1 = (byte[])ds.Tables[0].Rows[0]["FOTO9_1_INSTAL_POZO_TIERRA_1"];
                MemoryStream mFOTO9_1_INSTAL_POZO_TIERRA_1 = new MemoryStream(FOTO9_1_INSTAL_POZO_TIERRA_1);
                byte[] FOTO9_2_INSTAL_POZO_TIERRA_2 = (byte[])ds.Tables[0].Rows[0]["FOTO9_2_INSTAL_POZO_TIERRA_2"];
                MemoryStream mFOTO9_2_INSTAL_POZO_TIERRA_2 = new MemoryStream(FOTO9_2_INSTAL_POZO_TIERRA_2);
                byte[] FOTO9_3_ESCALA_UTIL_RESULT_MEDICION1 = (byte[])ds.Tables[0].Rows[0]["FOTO9_3_ESCALA_UTIL_RESULT_MEDICION1"];
                MemoryStream mFOTO9_3_ESCALA_UTIL_RESULT_MEDICION1 = new MemoryStream(FOTO9_3_ESCALA_UTIL_RESULT_MEDICION1);
                byte[] FOTO9_4_ESCALA_UTIL_RESULT_MEDICION2 = (byte[])ds.Tables[0].Rows[0]["FOTO9_4_ESCALA_UTIL_RESULT_MEDICION2"];
                MemoryStream mFOTO9_4_ESCALA_UTIL_RESULT_MEDICION2 = new MemoryStream(FOTO9_4_ESCALA_UTIL_RESULT_MEDICION2);
                byte[] FOTO9_5_ESCALA_UTIL_RESULT_MEDICION3 = (byte[])ds.Tables[0].Rows[0]["FOTO9_5_ESCALA_UTIL_RESULT_MEDICION3"];
                MemoryStream mFOTO9_5_ESCALA_UTIL_RESULT_MEDICION3 = new MemoryStream(FOTO9_5_ESCALA_UTIL_RESULT_MEDICION3);
                byte[] FOTO10_1_PANT_CONF_HOME = (byte[])ds.Tables[0].Rows[0]["FOTO10_1_PANT_CONF_HOME"];
                MemoryStream mFOTO10_1_PANT_CONF_HOME = new MemoryStream(FOTO10_1_PANT_CONF_HOME);
                byte[] FOTO10_2_PANT_CONF_SECURITY = (byte[])ds.Tables[0].Rows[0]["FOTO10_2_PANT_CONF_SECURITY"];
                MemoryStream mFOTO10_2_PANT_CONF_SECURITY = new MemoryStream(FOTO10_2_PANT_CONF_SECURITY);
                byte[] FOTO10_3_PANT_CONF_RADIO_1 = (byte[])ds.Tables[0].Rows[0]["FOTO10_3_PANT_CONF_RADIO_1"];
                MemoryStream mFOTO10_3_PANT_CONF_RADIO_1 = new MemoryStream(FOTO10_3_PANT_CONF_RADIO_1);
                byte[] FOTO10_4_PANT_CONF_RADIO_2 = (byte[])ds.Tables[0].Rows[0]["FOTO10_4_PANT_CONF_RADIO_2"];
                MemoryStream mFOTO10_4_PANT_CONF_RADIO_2 = new MemoryStream(FOTO10_4_PANT_CONF_RADIO_2);
                byte[] FOTO10_5_CONF_SISTEMA_1 = (byte[])ds.Tables[0].Rows[0]["FOTO10_5_CONF_SISTEMA_1"];
                MemoryStream mFOTO10_5_CONF_SISTEMA_1 = new MemoryStream(FOTO10_5_CONF_SISTEMA_1);
                byte[] FOTO10_6_CONF_SISTEMA_2 = (byte[])ds.Tables[0].Rows[0]["FOTO10_6_CONF_SISTEMA_2"];
                MemoryStream mFOTO10_6_CONF_SISTEMA_2 = new MemoryStream(FOTO10_6_CONF_SISTEMA_2);
                byte[] FOTO10_7_PANT_CONF_NETWORK_1 = (byte[])ds.Tables[0].Rows[0]["FOTO10_7_PANT_CONF_NETWORK_1"];
                MemoryStream mFOTO10_7_PANT_CONF_NETWORK_1 = new MemoryStream(FOTO10_7_PANT_CONF_NETWORK_1);
                byte[] FOTO10_8_PANT_CONF_NETWORK_2 = (byte[])ds.Tables[0].Rows[0]["FOTO10_8_PANT_CONF_NETWORK_2"];
                MemoryStream mFOTO10_8_PANT_CONF_NETWORK_2 = new MemoryStream(FOTO10_8_PANT_CONF_NETWORK_2);
                byte[] FOTO10_9_PANT_CONF_MONITOR_WIRELESS = (byte[])ds.Tables[0].Rows[0]["FOTO10_9_PANT_CONF_MONITOR_WIRELESS"];
                MemoryStream mFOTO10_9_PANT_CONF_MONITOR_WIRELESS = new MemoryStream(FOTO10_9_PANT_CONF_MONITOR_WIRELESS);
                byte[] FOTO10_10_CONF_SISTEMA_TOOLS = (byte[])ds.Tables[0].Rows[0]["FOTO10_10_CONF_SISTEMA_TOOLS"];
                MemoryStream mFOTO10_10_CONF_SISTEMA_TOOLS = new MemoryStream(FOTO10_10_CONF_SISTEMA_TOOLS);
                byte[] FOTO11_1_MON_CONEX_SITIO_WEB = (byte[])ds.Tables[0].Rows[0]["FOTO11_1_MON_CONEX_SITIO_WEB"];
                MemoryStream mFOTO11_1_MON_CONEX_SITIO_WEB = new MemoryStream(FOTO11_1_MON_CONEX_SITIO_WEB);
                byte[] FOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL = (byte[])ds.Tables[0].Rows[0]["FOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL"];
                MemoryStream mFOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL = new MemoryStream(FOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL);
                byte[] FOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL = (byte[])ds.Tables[0].Rows[0]["FOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL"];
                MemoryStream mFOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL = new MemoryStream(FOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL);
                byte[] FOTO_EPMP_1000_FORCE_180 = (byte[])ds.Tables[0].Rows[0]["FOTO_EPMP_1000_FORCE_180"];
                MemoryStream mFOTO_EPMP_1000_FORCE_180 = new MemoryStream(FOTO_EPMP_1000_FORCE_180);
                byte[] FOTO_1_ACCESS_POINT_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_1_ACCESS_POINT_SERIE"];
                MemoryStream mFOTO_1_ACCESS_POINT_SERIE = new MemoryStream(FOTO_1_ACCESS_POINT_SERIE);
                byte[] FOTO_2_SWITCH_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_2_SWITCH_SERIE"];
                MemoryStream mFOTO_2_SWITCH_SERIE = new MemoryStream(FOTO_2_SWITCH_SERIE);
                byte[] FOTO_3_ROUTER_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_3_ROUTER_SERIE"];
                MemoryStream mFOTO_3_ROUTER_SERIE = new MemoryStream(FOTO_3_ROUTER_SERIE);
                byte[] FOTO_4_IMPRESORA_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_4_IMPRESORA_SERIE"];
                MemoryStream mFOTO_4_IMPRESORA_SERIE = new MemoryStream(FOTO_4_IMPRESORA_SERIE);
                byte[] FOTO_5_UPS_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_5_UPS_SERIE"];
                MemoryStream mFOTO_5_UPS_SERIE = new MemoryStream(FOTO_5_UPS_SERIE);
                byte[] FOTO_6_PC01_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_6_PC01_SERIE"];
                MemoryStream mFOTO_6_PC01_SERIE = new MemoryStream(FOTO_6_PC01_SERIE);
                byte[] FOTO_7_PC02_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_7_PC02_SERIE"];
                MemoryStream mFOTO_7_PC02_SERIE = new MemoryStream(FOTO_7_PC02_SERIE);
                byte[] FOTO_8_PC03_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_8_PC03_SERIE"];
                MemoryStream mFOTO_8_PC03_SERIE = new MemoryStream(FOTO_8_PC03_SERIE);
                byte[] FOTO_9_PC04_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_9_PC04_SERIE"];
                MemoryStream mFOTO_9_PC04_SERIE = new MemoryStream(FOTO_9_PC04_SERIE);
                byte[] FOTO_10_PC05_SERIE = (byte[])ds.Tables[0].Rows[0]["FOTO_10_PC05_SERIE"];
                MemoryStream mFOTO_10_PC05_SERIE = new MemoryStream(FOTO_10_PC05_SERIE);

                #endregion

                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando Valores por Hoja en Excel

                #region Caratula 
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula","INSTITUCION  "+NOMBRE_IIBB,12,"B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula",CODIGO_IIBB, 16, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", TIPO_INSTITUCION, 19, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", NOMBRE_IIBB, 22, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Caratula", FECHA  , 28, "D");
                #endregion

                #region Acta de Instalacion FITEL

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL","PROYECTO REGIONAL DE  "+DEPARTAMENTO,10,"C");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRE_NODO, 14, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", UBIGEO, 14, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DEPARTAMENTO, 15, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", PROVINCIA, 15, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DISTRITO, 16, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DIRECCION_NODO, 16, "J");

                if(TIPO_INSTITUCION.Equals("INSTITUCION EDUCATIVA"))
                {

                    ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "E");
                }
                else
                {
                    if (TIPO_INSTITUCION.Equals("CENTRO DE SALUD"))
                    {
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "H");
                    }
                    else
                    {
                        if (TIPO_INSTITUCION.Equals("COMISARIA"))
                        {
                            ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "J");
                        }
                        else
                        {
                            ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "X", 19, "M");
                        }
                    }
                    }

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", LATITUD+"º", 21, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", LONGITUD + "º", 21, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", LATITUD + "º", 21, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DIRECCION_NODO + ", "+REFERENCIA_UBICACION_IIBB, 22, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", TIPO_MASTIL, 25, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ALTURA_MASTIL, 25, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL",CODIGO_IIBB, 25, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ODU_CPE , 30, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", SWITCH_COMUNICACIONES, 34, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ACCESS_POINT_INDOOR, 35, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", UPS, 36, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", IMPRESORA_MULTIFUNCIONAL, 37, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ROUTER, 38, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO1, 39, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO2, 40, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO3, 41, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO4, 42, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EQUIPO_COMPUTO5, 43, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DISPONIBILIDAD_HORAS, 58, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", VALOR_MEDIO_MEDIDA1, 62, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", VALOR_MEDIO_MEDIDA2, 63, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", VALOR_MEDIO_MEDIDA3, 64, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", POTENCIA_TRANSMISION+" DBM", 70, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", FRECUENCIA+" MHz", 71, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ANCHO_BANDA_CANAL, 72, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", AZIMUT+"º", 71, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", FRECUENCIA, 72, "L");

                foreach (DataRow dr in ds1.Tables[0].Rows)
                {
                    String CPE = dr["CPE"].ToString();
                    String ESTACION_LOCAL = dr["ESTACION_LOCAL"].ToString();
                    String RSS_CPE = dr["RSS_CPE"].ToString();
                    String RSS_LOCAL = dr["RSS_LOCAL"].ToString();
                    String TIEMPO_PROM = dr["TIEMPO_PROM"].ToString();
                    String CAP_SUBIDA = dr["CAP_SUBIDA"].ToString();
                    String CAP_BAJADA = dr["CAP_BAJADA"].ToString();
                    String DISTANCIA_metros = dr["DISTANCIA_metros"].ToString();

                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CPE, 79, "C");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", ESTACION_LOCAL, 79, "D");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", RSS_CPE, 79, "E");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", RSS_LOCAL, 79, "F");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", TIEMPO_PROM, 79, "J");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", "UL " + CAP_SUBIDA + "/" + "DL " + CAP_BAJADA, 79, "K");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DISTANCIA_metros, 79, "L");
                        ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", FRECUENCIA + "MHz", 79, "M");
                   
                }

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CONECTIVIDAD_GILAT, 83, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CONECTIVIDAD_NODO_TERMINAL, 84, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CONECTIVIDAD_NODO_TERMINAL, 85, "L");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRES_APELLIDOS_ENCARGADO, 95, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DOC_IDENTIDAD_ENCARGADO, 96, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CELULAR_CONTACTO_ENCARGADO, 97, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EMAIL_ENCARGADO_IIBB, 98, "F");

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRES_APELLIDOS_REPRESENTANTE, 119, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DOC_IDENTIDAD_REPRESENTANTE, 119, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CARGO_REPRESENTANTE_IIBB, 119, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EMAIL_REPRESENTANTE_IIBB, 119, "L");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", NOMBRES_APELLIDOS_REPR_OPERADOR, 120, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", DOC_IDENTIDAD_REPR_OPERADOR, 120, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", CARGO_REPRESENTANTE_OPERADOR, 120, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Acta de Instalación FITEL", EMAIL_REPR_OPERADOR, 120, "L");


                #endregion

                #region Configuracion y Pruebas

                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas",NOMBRE_IIBB,10,"D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CODIGO_IIBB, 13, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", NOMBRE_IIBB, 14, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", TIPO_INSTITUCION, 15, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", LATITUD, 18, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", LONGITUD, 19, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CODIGO_NODO, 23, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", IP_IIBB, 27, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", NOMBRES_APELLIDOS_REPRESENTANTE, 33, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CARGO_REPRESENTANTE_IIBB, 34, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", CELULAR_CONTACTO_REPRESENTANTE, 35, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", ODU_CPE, 38, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", ALTURA_MASTIL, 41, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", TIPO_MASTIL, 42, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Configuración y Pruebas", ALTITUDmsnm, 62, "D");


                #endregion

                #region Pantallas de Configuracion 

                ExcelToolsBL.AddImageDocument(false,excelGenerado, "3 Pantallas de Configuración",mPANT_CONF_ACCESS_POINt,"",11,3,907,491);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ROUTER, "", 54, 3, 908,592);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_SWITCH01, "", 101, 4, 768, 401);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_SWITCH02, "", 121, 4, 732, 339);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_UPS, "", 138, 4, 767, 399);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ALLINONE01, "", 166, 4, 746, 447);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_ALLINONE01, "", 169, 4, 736, 447);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "3 Pantallas de Configuración", mPANT_CONF_IMPRESORA, "", 196, 5, 593, 399);

                #endregion

                #region Medicion SPAT   
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPT_MEDIDA1_VALORMEDIO,7,"I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPT_MEDIDA2_VALORMEDIO, 8, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPT_MEDIDA3_VALORMEDIO, 9, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPTP_MEDIDA1_VALORMEDIO, 14, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPTP_MEDIDA2_VALORMEDIO, 15, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Medición SPAT", MSPTP_MEDIDA1_VALORMEDIO, 16, "I");

                #endregion

                #region Material IIBB

                ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE","INSTITUCION  "+NOMBRE_IIBB,12,"F");

                foreach (DataRow dr in ds2.Tables[0].Rows)
                {
                    String EQUIPO = dr["EQUIPO"].ToString();
                    String MARCA = dr["MARCA"].ToString();
                    String MODELO = dr["MODELO"].ToString();
                    String Nro_SERIE = dr["Nro_SERIE"].ToString();

                    int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", Convert.ToString(ind + 1), 17 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", EQUIPO, 17 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", "1", 17 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", MARCA, 17 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", MODELO, 17 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", Nro_SERIE, 17 + ind, "G");
                }

                foreach (DataRow dr in ds3.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String CODIGO = dr["CODIGO"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds3.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", Convert.ToString(ind + 1), 32 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", DESCRIPCION, 32 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", CODIGO, 32 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", UNIDAD, 32 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "6 Material IIBB CPE", CANTIDAD, 32 + ind, "G");

                }

                #endregion

                #region Reporte Fotografico

                ExcelToolsBL.UpdateCell(excelGenerado, "7 Reporte Fotográfico IIBB CPE",CODIGO_IIBB + NOMBRE_IIBB,7,"B");
                ExcelToolsBL.AddImageDocument(false,excelGenerado, "7 Reporte Fotográfico IIBB CPE",mFOTO1_PAN_LOCALIDAD,"",11,2,904,505);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO2_FACHADA_INSTITUCION, "", 48, 5, 700, 391);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_1_IMPRESORA, "", 82, 4, 314, 251);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_2_SWITCH, "", 82, 15, 314, 251);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_3_ROUTER, "", 101, 3, 365, 275);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_4_PC_ENCENDIDAS, "", 101, 14, 368, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_5_PC_UPS, "", 121, 3, 385, 288);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO3_6_ACCESS_POINT, "", 121, 14, 378, 281);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_1_ODU_CPE, "", 141, 3, 385, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_2_MASTIL, "", 141, 14, 390, 288);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_3_PAN_ANT_INSTAL_MASTIL, "", 160,3, 391, 292);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_4_RECORRIDO_SFTP_CATSE, "", 160, 14, 401, 296);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_5_INGRESO_SFTP, "", 178, 3, 375, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_6_RECORRIDO_SFTP_CANALETA, "", 178, 16, 211, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_7_POE, "", 197, 3, 371, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO4_8_PATCH_POE_ROUTER, "", 197, 14, 373, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_1_TABLERO_GENERAL_SECUNDARIO, "", 223, 3, 405, 299);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_2_INSTALACION_BREAKER, "", 223, 14, 402, 311);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_3_CABLE_CONEXION_ELECTRICA, "", 242, 3, 396, 300);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_4_TOMAS_ENERGIA, "", 237, 14, 353, 447);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO5_5_FOTO_INTERNA_INST_BREAKER, "", 256, 14, 392, 290);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO6_1_DNI_DJREPRESENTANTE_ABONADO, "", 274, 3, 431, 283);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO6_2_DNI_DJREPRESENTANTE_ABONADO, "", 274, 13, 444, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_1_SWITCH, "", 294, 3, 362, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_2_ROUTER, "", 294, 14, 369, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_3_REGLETA_ENERGIA, "", 311, 3, 405, 300);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_4_UPS, "", 274, 13, 236, 311);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_5_COMPUTADORAS, "", 328, 3, 361, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_6_ACESS_POINT, "", 328, 14, 370, 279);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_7_IMPRESORA, "", 345, 3, 364, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_8_PAN_SALA_EQUIPOS, "", 345, 14, 375, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO7_9_JACK_RJ45, "", 361, 3, 376, 281);

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_1_INSTALACION_POZO_TIERRA, "", 381, 3, 350, 279);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_2_CONEX_CAJA_REGISTRO, "", 381, 14, 371, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_3_ESCALA_UTIL_RESULT_MEDICION1, "", 400, 4, 271, 364);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_4_ESCALA_UTIL_RESULT_MEDICION2, "", 400, 16, 276, 375);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO8_5_ESCALA_UTIL_RESULT_MEDICION3, "", 416, 4, 276, 375);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_1_INSTAL_POZO_TIERRA_1, "", 436, 3, 367, 290);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_2_INSTAL_POZO_TIERRA_2, "", 436, 14, 385, 293);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_3_ESCALA_UTIL_RESULT_MEDICION1, "", 455, 4, 276, 372);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_4_ESCALA_UTIL_RESULT_MEDICION2, "", 455,16, 280, 375);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO9_5_ESCALA_UTIL_RESULT_MEDICION3, "", 471, 4, 277, 369);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_1_PANT_CONF_HOME, "", 492, 3, 382, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_2_PANT_CONF_SECURITY, "", 492, 14, 385, 271);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_3_PANT_CONF_RADIO_1, "", 509, 3, 395,266);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_4_PANT_CONF_RADIO_2, "", 509, 14, 382, 262);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_5_CONF_SISTEMA_1, "", 526, 3, 391, 279);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_6_CONF_SISTEMA_2, "", 526, 14, 368, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_7_PANT_CONF_NETWORK_1, "", 543, 3, 392, 276);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_8_PANT_CONF_NETWORK_2, "", 543, 14, 378, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_9_PANT_CONF_MONITOR_WIRELESS, "", 560,3, 391, 284);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO10_10_CONF_SISTEMA_TOOLS, "", 560, 14, 399, 277);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO11_1_MON_CONEX_SITIO_WEB, "", 580, 4, 693, 461);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO11_2_MON_CONECTIVIDAD_NODO_TERMINAL, "", 596, 5, 690, 448);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "7 Reporte Fotográfico IIBB CPE", mFOTO11_3_MON_CONECTIVIDAD_NODO_DISTRITAL, "", 612, 4, 801, 451);
                #endregion

                #region Serie equipos fotos

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_EPMP_1000_FORCE_180, "", 15, 7, 680, 383);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_1_ACCESS_POINT_SERIE, "", 34, 2, 476, 611);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_2_SWITCH_SERIE, "", 34, 15, 351, 596);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_3_ROUTER_SERIE, "", 54, 2, 356, 383);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_4_IMPRESORA_SERIE, "", 54, 14, 351, 596);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_5_UPS_SERIE, "", 75, 10, 285, 425);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_6_PC01_SERIE, "", 98, 11, 280, 422);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_7_PC02_SERIE, "", 122, 3, 237, 387);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_8_PC03_SERIE, "", 122, 15, 237, 387);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_9_PC04_SERIE, "", 141, 2, 326, 358);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Serie Equipos (fotos)", mFOTO_10_PC05_SERIE, "", 141, 13, 326, 358);


                #endregion

                #endregion

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


        public void ActaSeguridadAcceso(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ACTA_SEGURIDAD__ACCESO", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_EQUIPAMIENTOS_SEGURIDAD_ACCESO", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_SEGURIDAD_ACCESO", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;



                #region valores_String
                String NOMBRE_NODO = "NODO " + ds.Tables[0].Rows[0]["NOMBRE_NODO"].ToString();
                String CODIGO_NODO = ds.Tables[0].Rows[0]["CODIGO_NODO"].ToString();
                String TIPO_NODO = ds.Tables[0].Rows[0]["TIPO_NODO"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

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

                DateTime extinguidor_fext = DateTime.Parse(ds.Tables[0].Rows[0]["EXTINGUIDOR_EXT_FECHA_EXPIRACION"].ToString());
                String EXTINGUIDOR_EXT_FECHA_EXPIRACION = extinguidor_fext.ToString("dd/MM/yyyy");

                DateTime extinguidor_fint = DateTime.Parse(ds.Tables[0].Rows[0]["EXTINGUIDOR_INT_FECHA_EXPIRACION"].ToString());
                String EXTINGUIDOR_INT_FECHA_EXPIRACION = extinguidor_fint.ToString("dd/MM/yyyy");

                String SERIAL_CAMARA_PTZ_INT = ds.Tables[0].Rows[0]["SERIAL_CAMARA_PTZ_INT"].ToString();
                String SERIAL_CAMARA_PTZ_EXT = ds.Tables[0].Rows[0]["SERIAL_CAMARA_PTZ_EXT"].ToString();
                String SERIAL_CONTROL_ALARMAS = ds.Tables[0].Rows[0]["SERIAL_CONTROL_ALARMAS"].ToString();
                String SERIAL_NVR = ds.Tables[0].Rows[0]["SERIAL_NVR"].ToString();
                String SERIAL_SWITCH_POE = ds.Tables[0].Rows[0]["SERIAL_SWITCH_POE"].ToString();
                String SERIAL_LECTOR_BIO = ds.Tables[0].Rows[0]["SERIAL_LECTOR_BIO"].ToString();
                String SERIAL_SENSOR_90_1 = ds.Tables[0].Rows[0]["SERIAL_SENSOR_90_1"].ToString();
                String SERIAL_SENSOR_90_2 = ds.Tables[0].Rows[0]["SERIAL_SENSOR_90_2"].ToString();
                String DEPARTAMENTO = ds.Tables[0].Rows[0]["DEPARTAMENTO"].ToString();


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

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Agregando datos

                #region Caratula 
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", "NODO  "+NOMBRE_NODO, 15, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NOMBRE_NODO + " - PERU", 17, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", TIPO_NODO, 22, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", CODIGO_NODO, 24, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", FECHA, 26, "D");
                #endregion

                #region Acta Instalacion Aceptacion
                ExcelToolsBL.UpdateCell(excelGenerado, "Acta de Instal- aceptación", "NODO  "+ NOMBRE_NODO, 15, "E");
                #endregion

                #region Reporte Fotografico

                ExcelToolsBL.UpdateCell(excelGenerado, "Reporte fotográfico", "SISTEMAS DE SEGURIDAD NODO  "+TIPO_NODO + " _" +NOMBRE_NODO, 5, "B");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mFACHADA_DEL_NODO, "", 10, 4, 237, 192);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSALA_EQUIPOS_PANORAMICA_RACK, "", 10, 16, 152, 194);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_INTERIOR_01, "", 26, 3, 271, 194);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_INTERIOR_02, "", 26, 16, 151, 195);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPANORAMICA_EQUIPOS_PATIO, "", 42, 3, 164, 195);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mBREAKER_ASIGNADO_PARA_SEGURIDAD, "", 42, 16, 195, 191);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTROMAGNETICA_EXTERNA, "", 59, 3, 157, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTROMAGNETICA_EXTERNA2, "", 59, 7, 146, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_EXTERMO, "", 59, 14, 162, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_EXTERNO2, "", 59, 19, 164, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCERRADURA_ELECTRICA_EXTERNA, "", 78, 5, 169, 221);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_90_EXTERNO_N1, "", 78, 14, 297, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_90_EXTERNO_N2, "", 96, 3, 254, 189);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSIRENA_ESTROBOSCOPICA, "", 96, 16, 146, 193);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mLECTOR_BIOMETRICO, "", 116, 5, 175, 217);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mLECTOR_TARJETA, "", 116, 16, 164, 217);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_PTZ, "", 135, 3, 296, 220);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mEXTINTOR_EXTERIOR, "", 135, 14, 302, 227);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_INTERNO, "", 156, 3, 148, 205);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MAGNETICO_INTERNO_2, "", 156, 7, 153, 205);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_OCUPACIONAL, "", 156, 14, 301, 200);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_DE_HUMO, "", 172, 3, 305, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_MOVIMIENTO_360, "", 172, 14, 306, 230);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSENSOR_DE_INUNDACION, "", 188, 4, 197, 226);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_PTZ_INTERIOR, "", 188, 15, 235, 227);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mEXTINTOR_INTERIOR, "", 205, 4, 257, 341);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mRELE_EQUIPO_INTERO, "", 208, 14, 316, 243);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCONTROLADOR_NVR_SWITCH, "", 222, 7, 393, 244);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_CONTROLADOR, "", 247, 3, 302, 225);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_NVR_POE, "", 247, 14, 152, 211);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_NVR_POE_2, "", 247, 19, 165, 211);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mATERRAMIENTO_A_BARRA, "", 263, 3, 264, 197);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SENSOR_MOVIMIENTO_1, "", 282, 3, 274, 200);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SENSOR_MOVIMIENTO_2, "", 282, 15, 274, 200);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SWITCH_POE_NVR, "", 298, 3, 146, 234);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_SWITCH_POE_NVR_2, "", 298, 7, 169, 238);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mSERIAL_NUMBER_CONTROLADOR, "", 298, 15, 221, 239);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mETIQUETADOS_EQUIPOS_CONTROLADOR, "", 317, 6, 413, 225);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mETIQUETADOS_EQUIPOS_NVR, "", 335, 5, 460, 227);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCHECKLIST, "", 353, 7, 435, 542);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_MODO_NORMAL_POS1, "", 391, 6, 487, 274);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_EXTERIOR_MODO_NORMAL_POS2, "", 408, 6, 454, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_INTERIOR_MODO_NORMAL, "", 425, 6, 448, 229);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mCAMARA_INTERIOR_MODO_INFRARROJO, "", 442, 6, 448, 229);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_PUERTA_PRINCIPAL_ABIERTA, "", 459, 5, 519, 271);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_PUERTA_SALAS_EQUIPOS_ABIERTA, "", 476, 5, 519, 271);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_CAMARA_INTERNA, "", 492, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_CAMARA_EXTERNA, "", 507, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_SENSOR_DE_ANIEGO, "", 522, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_SENSOR_DE_HUMO, "", 539, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_TAMPER_SENSOR_90_1, "", 554, 6, 443, 270);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MOVIMIENTO_SENSOR_90_1, "", 569, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MASKING_SENSOR_90_1, "", 584, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_TAMPER_SENSOR_90_2, "", 599, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MOVIMIENTO_SENSOR_90_2, "", 614, 5, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_MASKING_SENSOR_90_2, "", 629, 6, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_ALARMA_TAMPER_SENSOR_360, "", 644, 6, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mTPA_ALARMA_MOVIMIENTO_SENSOR_360, "", 659, 6, 531, 280);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CAMARA_1_INDOOR, "", 676, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CAMARA_2_OUTDOOR, "", 693, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_CONTROLADOR, "", 710, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_GATEWAY, "", 727, 5, 535, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_NVR, "", 744, 6, 454, 242);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte fotográfico", mPING_BIOMETRICO, "", 761, 5, 535, 231);
                #endregion

                #region Materiales

                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", "NODO  " + TIPO_NODO, 11, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", CODIGO_NODO, 11, "F");


                foreach (DataRow dr in ds1.Tables[0].Rows)
                {
                    String EQUIPO = dr["EQUIPO"].ToString();
                    String MARCA = dr["MARCA"].ToString();
                    String MODELO = dr["MODELO"].ToString();
                    String Nro_SERIE = dr["Nro_SERIE"].ToString();

                    int ind = Convert.ToInt32(ds1.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", Convert.ToString(ind + 1), 16 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", EQUIPO, 16 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", "1", 16 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", MARCA, 16 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", MODELO, 16 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", Nro_SERIE, 16 + ind, "G");
                }


                foreach (DataRow dr in ds2.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String CODIGO = dr["CODIGO"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", Convert.ToString(ind + 1), 40 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", DESCRIPCION, 40 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", UNIDAD, 40 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "Materiales", CANTIDAD, 40 + ind, "F");

                }

                #endregion

                #region ATP
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", DEPARTAMENTO, 5, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", FECHA, 6, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", CODIGO_NODO, 5, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", NOMBRE_NODO, 6, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", EXTINGUIDOR_EXT_FECHA_EXPIRACION, 43, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "ATP", EXTINGUIDOR_INT_FECHA_EXPIRACION, 44, "G");
                #endregion

                #endregion
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

        public void Anexo2InventarioPTP(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ANEXO_02_INVENTARIO_PTP", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores
                String COD_NODO_A = ds.Tables[0].Rows[0]["COD_NODO_A"].ToString();
                byte[] SERIE_ANTENA_EST_A = (byte[])ds.Tables[0].Rows[0]["SERIE_ANTENA_EST_A"];
                MemoryStream mSERIE_ANTENA_EST_A = new MemoryStream(SERIE_ANTENA_EST_A);
                byte[] SERIE_ODU_EST_A = (byte[])ds.Tables[0].Rows[0]["SERIE_ODU_EST_A"];
                MemoryStream mSERIE_ODU_EST_A = new MemoryStream(SERIE_ODU_EST_A);
                byte[] SERIE_POE_EST_A = (byte[])ds.Tables[0].Rows[0]["SERIE_POE_EST_A"];
                MemoryStream mSERIE_POE_EST_A = new MemoryStream(SERIE_POE_EST_A);

                String COD_NODO_B = ds.Tables[0].Rows[0]["COD_NODO_B"].ToString();
                byte[] SERIE_ANTENA_EST_B = (byte[])ds.Tables[0].Rows[0]["SERIE_ANTENA_EST_B"];
                MemoryStream mSERIE_ANTENA_EST_B = new MemoryStream(SERIE_ANTENA_EST_B);
                byte[] SERIE_ODU_EST_B = (byte[])ds.Tables[0].Rows[0]["SERIE_ODU_EST_B"];
                MemoryStream mSERIE_ODU_EST_B = new MemoryStream(SERIE_ODU_EST_B);
                byte[] SERIE_POE_EST_B = (byte[])ds.Tables[0].Rows[0]["SERIE_POE_EST_B"];
                MemoryStream mSERIE_POE_EST_B = new MemoryStream(SERIE_POE_EST_B);

                CMM4BE CMM4A = new CMM4BE();
                List<CMM4BE> lstCMM4A = new List<CMM4BE>();
                CMM4A.Nodo.IdNodo = COD_NODO_A;
                lstCMM4A = CMM4BL.ListarCMM4(CMM4A);

                CMM4BE CMM4B = new CMM4BE();
                List<CMM4BE> lstCMM4B = new List<CMM4BE>();
                CMM4A.Nodo.IdNodo = COD_NODO_B;
                lstCMM4B = CMM4BL.ListarCMM4(CMM4B);

                #endregion

                // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Ingresando Valores

                if (!lstCMM4A.Count.Equals(0))
                {
                    byte[] SERIE_CMM4_EST_A = (byte[])ds.Tables[0].Rows[0]["SERIE_CMM4_EST_A"];
                    MemoryStream mSERIE_CMM4_EST_A = new MemoryStream(SERIE_CMM4_EST_A);
                    byte[] SERIE_UGPS_EST_A = (byte[])ds.Tables[0].Rows[0]["SERIE_UGPS_EST_A"];
                    MemoryStream mSERIE_UGPS_EST_A = new MemoryStream(SERIE_UGPS_EST_A);
                    byte[] SERIE_CONVERSOR_EST_A = (byte[])ds.Tables[0].Rows[0]["SERIE_CONVERSOR_EST_A"];
                    MemoryStream mSERIE_CONVERSOR_EST_A = new MemoryStream(SERIE_CONVERSOR_EST_A);

                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_CMM4_EST_A, "", 36, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_UGPS_EST_A, "", 44, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_CONVERSOR_EST_A, "", 51, 3, 152, 117);

                }

                if (!lstCMM4B.Count.Equals(0))
                {
                   

                    byte[] SERIE_CMM4_EST_B = (byte[])ds.Tables[0].Rows[0]["SERIE_CMM4_EST_B"];
                    MemoryStream mSERIE_CMM4_EST_B = new MemoryStream(SERIE_CMM4_EST_B);
                    byte[] SERIE_UGPS_EST_B = (byte[])ds.Tables[0].Rows[0]["SERIE_UGPS_EST_B"];
                    MemoryStream mSERIE_UGPS_EST_B = new MemoryStream(SERIE_UGPS_EST_B);
                    byte[] SERIE_CONVERSOR_EST_B = (byte[])ds.Tables[0].Rows[0]["SERIE_CONVERSOR_EST_B"];
                    MemoryStream mSERIE_CONVERSOR_EST_B = new MemoryStream(SERIE_CONVERSOR_EST_B);

                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_CMM4_EST_B, "", 81, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_UGPS_EST_B, "", 89, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_CONVERSOR_EST_B, "", 96, 3, 152, 117);


                }

                ExcelToolsBL.UpdateCell(excelGenerado, "11 Serie Logística", "ENLACE "+COD_NODO_A+" - "+COD_NODO_B , 11, "B");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_ANTENA_EST_A, "", 15, 2, 271, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_ODU_EST_A, "", 22, 2, 338, 254);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_POE_EST_A, "", 30, 2, 338, 254);

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_ANTENA_EST_B, "", 60, 2, 271, 228);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_ODU_EST_B, "", 67, 2, 338, 254);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "11 Serie Logística", mSERIE_POE_EST_B, "", 75, 2, 338, 254);




                #endregion

            }
            catch (Exception ex)
            {

                MessageBox.Show(ex.Message);
            }
            finally
            {

                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }
        }

        public void ActaInstalacionPTPLicenciado(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("ACTA_INSTALACION_PTP_LIC", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA",IdTarea ,true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores String

                #region Caratula

                //NOMBRE LOCALIDAD
                String NODO_A = ds.Tables[0].Rows[0]["NODO_A"].ToString();
                String NODO_B = ds.Tables[0].Rows[0]["NODO_B"].ToString();
                String NOMBRE_NODO_A = ds.Tables[0].Rows[0]["NOMBRE_NODO_A"].ToString();
                String NOMBRE_NODO_B = ds.Tables[0].Rows[0]["NOMBRE_NODO_B"].ToString();
                String TIPO_NODO_A = ds.Tables[0].Rows[0]["TIPO_NODO_A"].ToString();
                String TIPO_NODO_B = ds.Tables[0].Rows[0]["TIPO_NODO_B"].ToString();
                String FRECUENCIA = ds.Tables[0].Rows[0]["FRECUENCIA"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

                #endregion

                #region Configuracion y Mediciones

                String DIREC_ESTACION_A = ds.Tables[0].Rows[0]["DIREC_ESTACION_A"].ToString();
                String DIREC_ESTACION_B = ds.Tables[0].Rows[0]["DIREC_ESTACION_B"].ToString();
                String DISTRITO_A = ds.Tables[0].Rows[0]["DISTRITO_A"].ToString();
                String DISTRITO_B = ds.Tables[0].Rows[0]["DISTRITO_B"].ToString();
                String PROVINCIA_A = ds.Tables[0].Rows[0]["PROVINCIA_A"].ToString();
                String PROVINCIA_B = ds.Tables[0].Rows[0]["PROVINCIA_B"].ToString();
                String DEPARTAMENTO_A = ds.Tables[0].Rows[0]["DEPARTAMENTO_A"].ToString();
                String DEPARTAMENTO_B = ds.Tables[0].Rows[0]["DEPARTAMENTO_B"].ToString();
                String LATITUD_A = ds.Tables[0].Rows[0]["LATITUD_A"].ToString();
                String LATITUD_B = ds.Tables[0].Rows[0]["LATITUD_B"].ToString();
                String LONGITUD_A = ds.Tables[0].Rows[0]["LONGITUD_A"].ToString();
                String LONGITUD_B = ds.Tables[0].Rows[0]["LONGITUD_B"].ToString();
                String ALTURAmsnm_A = ds.Tables[0].Rows[0]["ALTURAmsnm_A"].ToString();
                String ALTURAmsnm_B = ds.Tables[0].Rows[0]["ALTURAmsnm_B"].ToString();
                String REF_UBIC_EST_A = ds.Tables[0].Rows[0]["REF_UBIC_EST_A"].ToString();
                String REF_UBIC_EST_B = ds.Tables[0].Rows[0]["REF_UBIC_EST_B"].ToString();
                String ALTURA_TORRE_A = ds.Tables[0].Rows[0]["ALTURA_TORRE_A"].ToString();
                String ALTURA_TORRE_B = ds.Tables[0].Rows[0]["ALTURA_TORRE_B"].ToString();
                String DISTANCIA_A_B = ds.Tables[0].Rows[0]["DISTANCIA_A_B"].ToString();
                String MODULACION = ds.Tables[0].Rows[0]["MODULACION"].ToString();
                String POLARIZACION_A = ds.Tables[0].Rows[0]["POLARIZACION_A"].ToString();
                String POLARIZACION_B = ds.Tables[0].Rows[0]["POLARIZACION_B"].ToString();
                String AZIMUT_A = ds.Tables[0].Rows[0]["AZIMUT_A"].ToString();
                String AZIMUT_B = ds.Tables[0].Rows[0]["AZIMUT_B"].ToString();
                String IP_NODO_A = ds.Tables[0].Rows[0]["IP_NODO_A"].ToString();
                String IP_NODO_B = ds.Tables[0].Rows[0]["IP_NODO_B"].ToString();
                String DEFAULT_GATE_A = ds.Tables[0].Rows[0]["DEFAULT_GATE_A"].ToString();
                String DEFAULT_GATE_B = ds.Tables[0].Rows[0]["DEFAULT_GATE_B"].ToString();
                String POTENCIA_A = ds.Tables[0].Rows[0]["POTENCIA_A"].ToString();
                String POTENCIA_B = ds.Tables[0].Rows[0]["POTENCIA_B"].ToString();
                String MARGEN_DES_A = ds.Tables[0].Rows[0]["MARGEN_DES_A"].ToString();
                String MARGEN_DES_B = ds.Tables[0].Rows[0]["MARGEN_DES_B"].ToString();
                String NIVEL_UMBRAL_A_B = ds.Tables[0].Rows[0]["NIVEL_UMBRAL_A_B"].ToString();
                String NIVEL_RECEP_RADIO_A = ds.Tables[0].Rows[0]["NIVEL_RECEP_RADIO_A"].ToString();
                String NIVEL_RECEP_RADIO_B = ds.Tables[0].Rows[0]["NIVEL_RECEP_RADIO_B"].ToString();
                String PING_PTP_RADIO_A = ds.Tables[0].Rows[0]["PING_PTP_RADIO_A"].ToString();
                String PING_PTP_RADIO_B = ds.Tables[0].Rows[0]["PING_PTP_RADIO_B"].ToString();

                byte[] CONF_GEN_ENL_EST_A = (byte[])ds.Tables[0].Rows[0]["CONF_GEN_ENL_EST_A"];
                MemoryStream mCONF_GEN_ENL_EST_A = new MemoryStream(CONF_GEN_ENL_EST_A);
                byte[] CONF_GEN_ENL_EST_B = (byte[])ds.Tables[0].Rows[0]["CONF_GEN_ENL_EST_B"];
                MemoryStream mCONF_GEN_ENL_EST_B = new MemoryStream(CONF_GEN_ENL_EST_B);

                //CONFIGURACION DE LOS LAN ESTACION A 3 FOTOS
                //CONFIGURACION DE LOS LAN ESTACION B 3 FOTOS
                //CONFIGURACION DE ETHERNET SWITCH
                //CONFIGURACION DE ETHERNET SWTCH

                byte[] CONF_IP_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["CONF_IP_ESTAC_A"];
                MemoryStream mCONF_IP_ESTAC_A = new MemoryStream(CONF_IP_ESTAC_A);
                byte[] CONF_IP_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["CONF_IP_ESTAC_B"];
                MemoryStream mCONF_IP_ESTAC_B = new MemoryStream(CONF_IP_ESTAC_B);
                #endregion

                #region Longitud SFTP

                String VALOR_B_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_B_ESTAC_A"].ToString();
                String VALOR_C_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_C_ESTAC_A"].ToString();
                String VALOR_D_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_D_ESTAC_A"].ToString();
                String VALOR_E_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_E_ESTAC_A"].ToString();
                String VALOR_B_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_B_ESTAC_B"].ToString();
                String VALOR_C_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_C_ESTAC_B"].ToString();
                String VALOR_D_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_D_ESTAC_B"].ToString();
                String VALOR_E_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_E_ESTAC_B"].ToString();

                #endregion

                #region Asignaciones y Observaciones

                String SWITCH_ROUTER_A = ds.Tables[0].Rows[0]["SWITCH_ROUTER_A"].ToString();
                String SWITCH_ROUTER_B = ds.Tables[0].Rows[0]["SWITCH_ROUTER_B"].ToString();
                String CAP_BREAKER_ASIG_EST_A = ds.Tables[0].Rows[0]["CAP_BREAKER_ASIG_EST_A"].ToString();
                String VOLT_DC_ESTAC_A = ds.Tables[0].Rows[0]["VOLT_DC_ESTAC_A"].ToString();
                String POS_BREAKER_ASIG_ESTAC_A = ds.Tables[0].Rows[0]["POS_BREAKER_ASIG_ESTAC_A"].ToString();
                String POS_BARRA_ATERRA_ESTA_A = ds.Tables[0].Rows[0]["POS_BARRA_ATERRA_ESTA_A"].ToString();
                String CAP_BREAKER_ASIG_EST_B = ds.Tables[0].Rows[0]["CAP_BREAKER_ASIG_EST_B"].ToString();
                String VOLT_DC_ESTAC_B = ds.Tables[0].Rows[0]["VOLT_DC_ESTAC_B"].ToString();
                String POS_BREAKER_ASIG_ESTAC_B = ds.Tables[0].Rows[0]["POS_BREAKER_ASIG_ESTAC_B"].ToString();
                String POS_BARRA_ATERRA_ESTA_B = ds.Tables[0].Rows[0]["POS_BARRA_ATERRA_ESTA_B"].ToString();

                #endregion

                #region Calculo Propagacion

                byte[] INGENIERIA = (byte[])ds.Tables[0].Rows[0]["INGENIERIA"];
                MemoryStream mINGENIERIA = new MemoryStream(INGENIERIA);
                byte[] PERFIL = (byte[])ds.Tables[0].Rows[0]["PERFIL"];
                MemoryStream mPERFIL = new MemoryStream(PERFIL);

                #endregion

                #region Pruebas de Interferencia

                byte[] PANT_RADIO_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["PANT_RADIO_ESTAC_A"];
                MemoryStream mPANT_RADIO_ESTAC_A = new MemoryStream(PANT_RADIO_ESTAC_A);
                byte[] PANT_RADIO_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["PANT_RADIO_ESTAC_B"];
                MemoryStream mPANT_RADIO_ESTAC_B = new MemoryStream(PANT_RADIO_ESTAC_B);

                #endregion

                #region Serie Equipos Fotos

                byte[] SERIE_ANT_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_ANT_ESTAC_A"];
                MemoryStream mSERIE_ANT_ESTAC_A = new MemoryStream(SERIE_ANT_ESTAC_A);
                byte[] SERIE_ODU_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_ODU_ESTAC_A"];
                MemoryStream mSERIE_ODU_ESTAC_A = new MemoryStream(SERIE_ODU_ESTAC_A);
                byte[] SERIE_POE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_POE_ESTAC_A"];
                MemoryStream mSERIE_POE_ESTAC_A = new MemoryStream(SERIE_POE_ESTAC_A);
                byte[] SERIE_ANT_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_ANT_ESTAC_B"];
                MemoryStream mSERIE_ANT_ESTAC_B = new MemoryStream(SERIE_ANT_ESTAC_B);
                byte[] SERIE_ODU_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_ODU_ESTAC_B"];
                MemoryStream mSERIE_ODU_ESTAC_B = new MemoryStream(SERIE_ODU_ESTAC_B);
                byte[] SERIE_POE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_POE_ESTAC_B"];
                MemoryStream mSERIE_POE_ESTAC_B = new MemoryStream(SERIE_POE_ESTAC_B);

                #endregion

                #region Reporte Fotografico

                byte[] FOTO1_PAN_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_ESTAC_A"];
                MemoryStream mFOTO1_PAN_ESTAC_A = new MemoryStream(FOTO1_PAN_ESTAC_A);
                byte[] FOTO2_POS_ANT_INST_TORRE_A = (byte[])ds.Tables[0].Rows[0]["FOTO2_POS_ANT_INST_TORRE_A"];
                MemoryStream mFOTO2_POS_ANT_INST_TORRE_A = new MemoryStream(FOTO2_POS_ANT_INST_TORRE_A);
                byte[] FOTO3_FOTO_ANTENA_PTP_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO3_FOTO_ANTENA_PTP_ESTAC_A"];
                MemoryStream mFOTO3_FOTO_ANTENA_PTP_ESTAC_A = new MemoryStream(FOTO3_FOTO_ANTENA_PTP_ESTAC_A);
                byte[] FOTO4_ETIQ_PUERTO_ANT_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO4_ETIQ_PUERTO_ANT_ESTAC_A"];
                MemoryStream mFOTO4_ETIQ_PUERTO_ANT_ESTAC_A = new MemoryStream(FOTO4_ETIQ_PUERTO_ANT_ESTAC_A);
                byte[] FOTO5_ENGRAS_PERNOS_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO5_ENGRAS_PERNOS_ESTAC_A"];
                MemoryStream mFOTO5_ENGRAS_PERNOS_ESTAC_A = new MemoryStream(FOTO5_ENGRAS_PERNOS_ESTAC_A);
                byte[] FOTO6_SILC_CONECT_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO6_SILC_CONECT_ESTAC_A"];
                MemoryStream mFOTO6_SILC_CONECT_ESTAC_A = new MemoryStream(FOTO6_SILC_CONECT_ESTAC_A);
                byte[] FOTO7_ATERRAM_ODU_TORRE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO7_ATERRAM_ODU_TORRE_ESTAC_A"];
                MemoryStream mFOTO7_ATERRAM_ODU_TORRE_ESTAC_A = new MemoryStream(FOTO7_ATERRAM_ODU_TORRE_ESTAC_A);
                byte[] FOTO8_RECORRI_SFTP_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO8_RECORRI_SFTP_ESTAC_A"];
                MemoryStream mFOTO8_RECORRI_SFTP_ESTAC_A = new MemoryStream(FOTO8_RECORRI_SFTP_ESTAC_A);
                //pendiente revision 

                #endregion

                #region Datos Generales Nodo A

                String UBIGEO_A = ds.Tables[0].Rows[0]["UBIGEO_A"].ToString();
               

                #endregion

                #endregion
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void ActaInstalacionPTPNoLicenciado(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_ACTA_INSTALACION_PTP_NO_LIC", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_EQUIPAMIENTOS_PTP_NO_LIC_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA",IdTarea,true);
                DataSet ds1 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_PTP_NO_LIC_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds2 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_EQUIPAMIENTOS_PTP_NO_LIC_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds3 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MATERIALES_PTP_NO_LIC_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds4 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MEDICION_ENLACE_PTP_NO_LIC_A", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds5 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                baseDatosDA.CrearComando("USP_R_MEDICION_ENLACE_PTP_NO_LIC_B", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds6 = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores 

                #region Caratula

                //NOMBRE LOCALIDAD QUE LOCALIDAD SE PONDRIA LA A O LA B
                String NODO_A = ds.Tables[0].Rows[0]["NODO_A"].ToString();
                String NODO_B = ds.Tables[0].Rows[0]["NODO_B"].ToString();
                String NOMBRE_NODO_A = ds.Tables[0].Rows[0]["NOMBRE_NODO_A"].ToString();
                String NOMBRE_NODO_B = ds.Tables[0].Rows[0]["NOMBRE_NODO_B"].ToString();
                String TIPO_NODO_A = ds.Tables[0].Rows[0]["TIPO_NODO_A"].ToString();
                String TIPO_NODO_B = ds.Tables[0].Rows[0]["TIPO_NODO_B"].ToString();
                //String FRECUENCIA = ds.Tables[0].Rows[0]["FRECUENCIA"].ToString();

                DateTime dtFecha = DateTime.Parse(ds.Tables[0].Rows[0]["FECHA"].ToString());
                String FECHA = dtFecha.ToString("dd/MM/yyyy");

                #endregion

                #region Configuracion y Mediciones

                String DIREC_ESTACION_A = ds.Tables[0].Rows[0]["DIREC_ESTACION_A"].ToString();
                String DIREC_ESTACION_B = ds.Tables[0].Rows[0]["DIREC_ESTACION_B"].ToString();
                String DISTRITO_A = ds.Tables[0].Rows[0]["DISTRITO_A"].ToString();
                String DISTRITO_B = ds.Tables[0].Rows[0]["DISTRITO_B"].ToString();
                String PROVINCIA_A = ds.Tables[0].Rows[0]["PROVINCIA_A"].ToString();
                String PROVINCIA_B = ds.Tables[0].Rows[0]["PROVINCIA_B"].ToString();
                String DEPARTAMENTO_A = ds.Tables[0].Rows[0]["DEPARTAMENTO_A"].ToString();
                String DEPARTAMENTO_B = ds.Tables[0].Rows[0]["DEPARTAMENTO_B"].ToString();
                String LATITUD_A = ds.Tables[0].Rows[0]["LATITUD_A"].ToString();
                String LATITUD_B = ds.Tables[0].Rows[0]["LATITUD_B"].ToString();
                String LONGITUD_A = ds.Tables[0].Rows[0]["LONGITUD_A"].ToString();
                String LONGITUD_B = ds.Tables[0].Rows[0]["LONGITUD_B"].ToString();
                String REF_UBIC_EST_A = ds.Tables[0].Rows[0]["REF_UBIC_EST_A"].ToString();
                String REF_UBIC_EST_B = ds.Tables[0].Rows[0]["REF_UBIC_EST_B"].ToString();
                String ALTURA_TORRE_A = ds.Tables[0].Rows[0]["ALTURA_TORRE_A"].ToString();
                String ALTURA_TORRE_B = ds.Tables[0].Rows[0]["ALTURA_TORRE_B"].ToString();
                String DISTANCIA_A_B = ds.Tables[0].Rows[0]["DISTANCIA_A_B"].ToString();
                String MODULACION = ds.Tables[0].Rows[0]["MODULACION"].ToString();
                String POLARIZACION_A = ds.Tables[0].Rows[0]["POLARIZACION_A"].ToString();
                String POLARIZACION_B = ds.Tables[0].Rows[0]["POLARIZACION_B"].ToString();
                String AZIMUT_A = ds.Tables[0].Rows[0]["AZIMUT_A"].ToString();
                String AZIMUT_B = ds.Tables[0].Rows[0]["AZIMUT_B"].ToString();
                String IP_NODO_A = ds.Tables[0].Rows[0]["IP_NODO_A"].ToString();
                String IP_NODO_B = ds.Tables[0].Rows[0]["IP_NODO_B"].ToString();
                String DEFAULT_GATE_A_B = ds.Tables[0].Rows[0]["DEFAULT_GATE_A_B"].ToString();
                String POTENCIA_A = ds.Tables[0].Rows[0]["POTENCIA_A"].ToString();
                String POTENCIA_B = ds.Tables[0].Rows[0]["POTENCIA_B"].ToString();
                String MARGEN_DES_A = ds.Tables[0].Rows[0]["MARGEN_DES_A"].ToString();
                String MARGEN_DES_B = ds.Tables[0].Rows[0]["MARGEN_DES_B"].ToString();
                String NIVEL_UMBRAL_A_B = ds.Tables[0].Rows[0]["NIVEL_UMBRAL_A_B"].ToString();
                String NIVEL_RECEP_RADIO_A = ds.Tables[0].Rows[0]["NIVEL_RECEP_RADIO_A"].ToString();
                String NIVEL_RECEP_RADIO_B = ds.Tables[0].Rows[0]["NIVEL_RECEP_RADIO_B"].ToString();
                String PING_PTP_RADIO_A = ds.Tables[0].Rows[0]["PING_PTP_RADIO_A"].ToString();
                String PING_PTP_RADIO_B = ds.Tables[0].Rows[0]["PING_PTP_RADIO_B"].ToString();

                byte[] CONF_GEN_ENL_EST_A = (byte[])ds.Tables[0].Rows[0]["CONF_GEN_ENL_EST_A"];
                MemoryStream mCONF_GEN_ENL_EST_A = new MemoryStream(CONF_GEN_ENL_EST_A);
                byte[] CONF_GEN_ENL_EST_B = (byte[])ds.Tables[0].Rows[0]["CONF_GEN_ENL_EST_B"];
                MemoryStream mCONF_GEN_ENL_EST_B = new MemoryStream(CONF_GEN_ENL_EST_B);
                byte[] CONF_VLAN_ESTA_A = (byte[])ds.Tables[0].Rows[0]["CONF_VLAN_ESTA_A"];
                MemoryStream mCONF_VLAN_ESTA_A = new MemoryStream(CONF_VLAN_ESTA_A);
                byte[] CONF_VLAN_ESTA_B = (byte[])ds.Tables[0].Rows[0]["CONF_VLAN_ESTA_B"];
                MemoryStream mCONF_VLAN_ESTA_B = new MemoryStream(CONF_VLAN_ESTA_B);
                byte[] CONF_RADIO_ESTAC_A_1 = (byte[])ds.Tables[0].Rows[0]["CONF_RADIO_ESTAC_A_1"];
                MemoryStream mCONF_RADIO_ESTAC_A_1 = new MemoryStream(CONF_RADIO_ESTAC_A_1);
                byte[] CONF_RADIO_ESTAC_A_2 = (byte[])ds.Tables[0].Rows[0]["CONF_RADIO_ESTAC_A_2"];
                MemoryStream mCONF_RADIO_ESTAC_A_2 = new MemoryStream(CONF_RADIO_ESTAC_A_2);
                byte[] CONF_RADIO_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["CONF_RADIO_ESTAC_B"];
                MemoryStream mCONF_RADIO_ESTAC_B = new MemoryStream(CONF_RADIO_ESTAC_B);
                byte[] CONF_IP_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["CONF_IP_ESTAC_A"];
                MemoryStream mCONF_IP_ESTAC_A = new MemoryStream(CONF_IP_ESTAC_A);
                byte[] CONF_IP_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["CONF_IP_ESTAC_B"];
                MemoryStream mCONF_IP_ESTAC_B = new MemoryStream(CONF_IP_ESTAC_B);

                #endregion

                #region Longitud SFTP

                String VALOR_B_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_B_ESTAC_A"].ToString();
                String VALOR_C_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_C_ESTAC_A"].ToString();
                String VALOR_D_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_D_ESTAC_A"].ToString();
                String VALOR_E_ESTAC_A = ds.Tables[0].Rows[0]["VALOR_E_ESTAC_A"].ToString();
                String VALOR_B_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_B_ESTAC_B"].ToString();
                String VALOR_C_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_C_ESTAC_B"].ToString();
                String VALOR_D_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_D_ESTAC_B"].ToString();
                String VALOR_E_ESTAC_B = ds.Tables[0].Rows[0]["VALOR_E_ESTAC_B"].ToString();

                #endregion

                #region Asignaciones y Observaciones

                String SWITCH_ROUTER_A = ds.Tables[0].Rows[0]["SWITCH_ROUTER_A"].ToString();
                String SWITCH_ROUTER_B = ds.Tables[0].Rows[0]["SWITCH_ROUTER_B"].ToString();
                String CAP_BREAKER_ASIG_EST_A = ds.Tables[0].Rows[0]["CAP_BREAKER_ASIG_EST_A"].ToString();
                String VOLT_DC_ESTAC_A = ds.Tables[0].Rows[0]["VOLT_DC_ESTAC_A"].ToString();
                String POS_BREAKER_ASIG_ESTAC_A = ds.Tables[0].Rows[0]["POS_BREAKER_ASIG_ESTAC_A"].ToString();
                String POS_BARRA_ATERRA_ESTA_A = ds.Tables[0].Rows[0]["POS_BARRA_ATERRA_ESTA_A"].ToString();
                String CAP_BREAKER_ASIG_EST_B = ds.Tables[0].Rows[0]["CAP_BREAKER_ASIG_EST_B"].ToString();
                String VOLT_DC_ESTAC_B = ds.Tables[0].Rows[0]["VOLT_DC_ESTAC_B"].ToString();
                String POS_BREAKER_ASIG_ESTAC_B = ds.Tables[0].Rows[0]["POS_BREAKER_ASIG_ESTAC_B"].ToString();
                String POS_BARRA_ATERRA_ESTA_B = ds.Tables[0].Rows[0]["POS_BARRA_ATERRA_ESTA_B"].ToString();

                #endregion

                #region Calculo Propagacion

                byte[] INGENIERIA = (byte[])ds.Tables[0].Rows[0]["INGENIERIA"];
                MemoryStream mINGENIERIA = new MemoryStream(INGENIERIA);
                byte[] PERFIL = (byte[])ds.Tables[0].Rows[0]["PERFIL"];
                MemoryStream mPERFIL = new MemoryStream(PERFIL);

                #endregion

                #region Pruebas de Interferencia

                byte[] PANT_RADIO_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["PANT_RADIO_ESTAC_A"];
                MemoryStream mPANT_RADIO_ESTAC_A = new MemoryStream(PANT_RADIO_ESTAC_A);
                byte[] PANT_RADIO_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["PANT_RADIO_ESTAC_B"];
                MemoryStream mPANT_RADIO_ESTAC_B = new MemoryStream(PANT_RADIO_ESTAC_B);

                #endregion

                #region Serie Equipos Fotos

                byte[] SERIE_ANT_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_ANT_ESTAC_A"];
                MemoryStream mSERIE_ANT_ESTAC_A = new MemoryStream(SERIE_ANT_ESTAC_A);
                byte[] SERIE_ODU_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_ODU_ESTAC_A"];
                MemoryStream mSERIE_ODU_ESTAC_A = new MemoryStream(SERIE_ODU_ESTAC_A);
                byte[] SERIE_POE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_POE_ESTAC_A"];
                MemoryStream mSERIE_POE_ESTAC_A = new MemoryStream(SERIE_POE_ESTAC_A);

                CMM4BE CMM4A = new CMM4BE();
                List<CMM4BE> lstCMM4A = new List<CMM4BE>();
                CMM4A.Nodo.IdNodo =  NODO_A;
                lstCMM4A = CMM4BL.ListarCMM4(CMM4A);


                CMM4BE CMM4B = new CMM4BE();
                List<CMM4BE> lstCMM4B = new List<CMM4BE>();
                CMM4A.Nodo.IdNodo = NODO_B;
                lstCMM4A = CMM4BL.ListarCMM4(CMM4B);


                byte[] SERIE_ANT_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_ANT_ESTAC_B"];
                MemoryStream mSERIE_ANT_ESTAC_B = new MemoryStream(SERIE_ANT_ESTAC_B);
                byte[] SERIE_ODU_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_ODU_ESTAC_B"];
                MemoryStream mSERIE_ODU_ESTAC_B = new MemoryStream(SERIE_ODU_ESTAC_B);
                byte[] SERIE_POE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_POE_ESTAC_B"];
                MemoryStream mSERIE_POE_ESTAC_B = new MemoryStream(SERIE_POE_ESTAC_B);


                #endregion

                #region Reporte Fotografico

                #region Estacion A
                byte[] FOTO1_PAN_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_ESTAC_A"];
                MemoryStream mFOTO1_PAN_ESTAC_A = new MemoryStream(FOTO1_PAN_ESTAC_A);
                byte[] FOTO2_POS_ANT_INST_TORRE_A = (byte[])ds.Tables[0].Rows[0]["FOTO2_POS_ANT_INST_TORRE_A"];
                MemoryStream mFOTO2_POS_ANT_INST_TORRE_A = new MemoryStream(FOTO2_POS_ANT_INST_TORRE_A);
                byte[] FOTO3_FOTO_ANTENA_PTP_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO3_FOTO_ANTENA_PTP_ESTAC_A"];
                MemoryStream mFOTO3_FOTO_ANTENA_PTP_ESTAC_A = new MemoryStream(FOTO3_FOTO_ANTENA_PTP_ESTAC_A);
                byte[] FOTO4_ETIQ_PUERTO_ANT_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO4_ETIQ_PUERTO_ANT_ESTAC_A"];
                MemoryStream mFOTO4_ETIQ_PUERTO_ANT_ESTAC_A = new MemoryStream(FOTO4_ETIQ_PUERTO_ANT_ESTAC_A);
                byte[] FOTO5_ENGRAS_PERNOS_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO5_ENGRAS_PERNOS_ESTAC_A"];
                MemoryStream mFOTO5_ENGRAS_PERNOS_ESTAC_A = new MemoryStream(FOTO5_ENGRAS_PERNOS_ESTAC_A);
                byte[] FOTO6_SILC_CONECT_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO6_SILC_CONECT_ESTAC_A"];
                MemoryStream mFOTO6_SILC_CONECT_ESTAC_A = new MemoryStream(FOTO6_SILC_CONECT_ESTAC_A);
                byte[] FOTO7_ATERRAM_ODU_TORRE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO7_ATERRAM_ODU_TORRE_ESTAC_A"];
                MemoryStream mFOTO7_ATERRAM_ODU_TORRE_ESTAC_A = new MemoryStream(FOTO7_ATERRAM_ODU_TORRE_ESTAC_A);
                byte[] FOTO8_RECORRI_SFTP_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO8_RECORRI_SFTP_ESTAC_A"];
                MemoryStream mFOTO8_RECORRI_SFTP_ESTAC_A = new MemoryStream(FOTO8_RECORRI_SFTP_ESTAC_A);
                byte[] FOTO9_1__SFTP_OUT_1_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO9_1__SFTP_OUT_1_ESTAC_A"];
                MemoryStream mFOTO9_1__SFTP_OUT_1_ESTAC_A = new MemoryStream(FOTO9_1__SFTP_OUT_1_ESTAC_A);
                byte[] FOTO9_2_SFTP_OUT_2_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO9_2_SFTP_OUT_2_ESTAC_A"];
                MemoryStream mFOTO9_2_SFTP_OUT_2_ESTAC_A = new MemoryStream(FOTO9_2_SFTP_OUT_2_ESTAC_A);
                byte[] FOTO10_SALAN_OUT_ETIQ_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO10_SALAN_OUT_ETIQ_ESTAC_A"];
                MemoryStream mFOTO10_SALAN_OUT_ETIQ_ESTAC_A = new MemoryStream(FOTO10_SALAN_OUT_ETIQ_ESTAC_A);
                byte[] FOTO11_ATERRAM_SALAN_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO11_ATERRAM_SALAN_ESTAC_A"];
                MemoryStream mFOTO11_ATERRAM_SALAN_ESTAC_A = new MemoryStream(FOTO11_ATERRAM_SALAN_ESTAC_A);
                byte[] FOTO14_1_SFTP_IN_1_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO14_1_SFTP_IN_1_ESTAC_A"];
                MemoryStream mFOTO14_1_SFTP_IN_1_ESTAC_A = new MemoryStream(FOTO14_1_SFTP_IN_1_ESTAC_A);
                byte[] FOTO14_2_SFTP_IN_2_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO14_2_SFTP_IN_2_ESTAC_A"];
                MemoryStream mFOTO14_2_SFTP_IN_2_ESTAC_A = new MemoryStream(FOTO14_2_SFTP_IN_2_ESTAC_A);
                byte[] FOTO17_FOTO_PAN_RACK_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO17_FOTO_PAN_RACK_ESTAC_A"];
                MemoryStream mFOTO17_FOTO_PAN_RACK_ESTAC_A = new MemoryStream(FOTO17_FOTO_PAN_RACK_ESTAC_A);
                byte[] FOTO18_1_ATERRAM_POE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO18_1_ATERRAM_POE_ESTAC_A"];
                MemoryStream mFOTO18_1_ATERRAM_POE_ESTAC_A = new MemoryStream(FOTO18_1_ATERRAM_POE_ESTAC_A);
                byte[] FOTO18_2_ATERRAM_POE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO18_2_ATERRAM_POE_ESTAC_A"];
                MemoryStream mFOTO18_2_ATERRAM_POE_ESTAC_A = new MemoryStream(FOTO18_2_ATERRAM_POE_ESTAC_A);
                byte[] FOTO19_1_ENERG_POE_ETIQ_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO19_1_ENERG_POE_ETIQ_ESTAC_A"];
                MemoryStream mFOTO19_1_ENERG_POE_ETIQ_ESTAC_A = new MemoryStream(FOTO19_1_ENERG_POE_ETIQ_ESTAC_A);
                byte[] FOTO19_2_ENERG_POE_ETIQ_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO19_2_ENERG_POE_ETIQ_ESTAC_A"];
                MemoryStream mFOTO19_2_ENERG_POE_ETIQ_ESTAC_A = new MemoryStream(FOTO19_2_ENERG_POE_ETIQ_ESTAC_A);
                byte[] FOTO20_1_PATCH_POE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO20_1_PATCH_POE_ESTAC_A"];
                MemoryStream mFOTO20_1_PATCH_POE_ESTAC_A = new MemoryStream(FOTO20_1_PATCH_POE_ESTAC_A);
                byte[] FOTO20_2_PATCH_POE_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["FOTO20_2_PATCH_POE_ESTAC_A"];
                MemoryStream mFOTO20_2_PATCH_POE_ESTAC_A = new MemoryStream(FOTO20_2_PATCH_POE_ESTAC_A);
                #endregion

                #region Estacion B

                //byte[] FOTO1_PAN_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO1_PAN_ESTAC_B"];
                //MemoryStream mFOTO1_PAN_ESTAC_B = new MemoryStream(FOTO1_PAN_ESTAC_B);
                //byte[] FOTO2_POS_ANT_INST_TORRE_B = (byte[])ds.Tables[0].Rows[0]["FOTO2_POS_ANT_INST_TORRE_B"];
                //MemoryStream mFOTO2_POS_ANT_INST_TORRE_B = new MemoryStream(FOTO2_POS_ANT_INST_TORRE_B);
                //byte[] FOTO3_FOTO_ANTENA_PTP_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO3_FOTO_ANTENA_PTP_ESTAC_B"];
                //MemoryStream mFOTO3_FOTO_ANTENA_PTP_ESTAC_B = new MemoryStream(FOTO3_FOTO_ANTENA_PTP_ESTAC_B);
                //byte[] FOTO4_ETIQ_PUERTO_ANT_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO4_ETIQ_PUERTO_ANT_ESTAC_B"];
                //MemoryStream mFOTO4_ETIQ_PUERTO_ANT_ESTAC_B = new MemoryStream(FOTO4_ETIQ_PUERTO_ANT_ESTAC_B);
                //byte[] FOTO5_ENGRAS_PERNOS_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO5_ENGRAS_PERNOS_ESTAC_B"];
                //MemoryStream mFOTO5_ENGRAS_PERNOS_ESTAC_B = new MemoryStream(FOTO5_ENGRAS_PERNOS_ESTAC_B);
                //byte[] FOTO6_SILC_CONECT_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO6_SILC_CONECT_ESTAC_B"];
                //MemoryStream mFOTO6_SILC_CONECT_ESTAC_B = new MemoryStream(FOTO6_SILC_CONECT_ESTAC_B);
                //byte[] FOTO7_ATERRAM_ODU_TORRE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO7_ATERRAM_ODU_TORRE_ESTAC_B"];
                //MemoryStream mFOTO7_ATERRAM_ODU_TORRE_ESTAC_B = new MemoryStream(FOTO7_ATERRAM_ODU_TORRE_ESTAC_B);
                //byte[] FOTO8_RECORRI_SFTP_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO8_RECORRI_SFTP_ESTAC_B"];
                //MemoryStream mFOTO8_RECORRI_SFTP_ESTAC_B = new MemoryStream(FOTO8_RECORRI_SFTP_ESTAC_B);
                //byte[] FOTO9_1__SFTP_OUT_1_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO9_1__SFTP_OUT_1_ESTAC_B"];
                //MemoryStream mFOTO9_1__SFTP_OUT_1_ESTAC_B = new MemoryStream(FOTO9_1__SFTP_OUT_1_ESTAC_B);
                //byte[] FOTO9_2_SFTP_OUT_2_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO9_2_SFTP_OUT_2_ESTAC_B"];
                //MemoryStream mFOTO9_2_SFTP_OUT_2_ESTAC_B = new MemoryStream(FOTO9_2_SFTP_OUT_2_ESTAC_B);
                //byte[] FOTO10_SALAN_OUT_ETIQ_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO10_SALAN_OUT_ETIQ_ESTAC_B"];
                //MemoryStream mFOTO10_SALAN_OUT_ETIQ_ESTAC_B = new MemoryStream(FOTO10_SALAN_OUT_ETIQ_ESTAC_B);
                //byte[] FOTO11_ATERRAM_SALAN_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO11_ATERRAM_SALAN_ESTAC_B"];
                //MemoryStream mFOTO11_ATERRAM_SALAN_ESTAC_B = new MemoryStream(FOTO11_ATERRAM_SALAN_ESTAC_B);
                //byte[] FOTO14_1_SFTP_IN_1_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO14_1_SFTP_IN_1_ESTAC_B"];
                //MemoryStream mFOTO14_1_SFTP_IN_1_ESTAC_B = new MemoryStream(FOTO14_1_SFTP_IN_1_ESTAC_B);
                //byte[] FOTO14_2_SFTP_IN_2_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO14_2_SFTP_IN_2_ESTAC_B"];
                //MemoryStream mFOTO14_2_SFTP_IN_2_ESTAC_B = new MemoryStream(FOTO14_2_SFTP_IN_2_ESTAC_B);
                //byte[] FOTO17_FOTO_PAN_RACK_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO17_FOTO_PAN_RACK_ESTAC_B"];
                //MemoryStream mFOTO17_FOTO_PAN_RACK_ESTAC_B = new MemoryStream(FOTO17_FOTO_PAN_RACK_ESTAC_B);
                //byte[] FOTO18_1_ATERRAM_POE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO18_1_ATERRAM_POE_ESTAC_B"];
                //MemoryStream mFOTO18_1_ATERRAM_POE_ESTAC_B = new MemoryStream(FOTO18_1_ATERRAM_POE_ESTAC_B);
                //byte[] FOTO18_2_ATERRAM_POE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO18_2_ATERRAM_POE_ESTAC_B"];
                //MemoryStream mFOTO18_2_ATERRAM_POE_ESTAC_B = new MemoryStream(FOTO18_2_ATERRAM_POE_ESTAC_B);
                //byte[] FOTO19_1_ENERG_POE_ETIQ_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO19_1_ENERG_POE_ETIQ_ESTAC_B"];
                //MemoryStream mFOTO19_1_ENERG_POE_ETIQ_ESTAC_B = new MemoryStream(FOTO19_1_ENERG_POE_ETIQ_ESTAC_B);
                //byte[] FOTO19_2_ENERG_POE_ETIQ_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO19_2_ENERG_POE_ETIQ_ESTAC_B"];
                //MemoryStream mFOTO19_2_ENERG_POE_ETIQ_ESTAC_B = new MemoryStream(FOTO19_2_ENERG_POE_ETIQ_ESTAC_B);
                //byte[] FOTO20_1_PATCH_POE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO20_1_PATCH_POE_ESTAC_B"];
                //MemoryStream mFOTO20_1_PATCH_POE_ESTAC_B = new MemoryStream(FOTO20_1_PATCH_POE_ESTAC_B);
                //byte[] FOTO20_2_PATCH_POE_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["FOTO20_2_PATCH_POE_ESTAC_B"];
                //MemoryStream mFOTO20_2_PATCH_POE_ESTAC_B = new MemoryStream(FOTO20_2_PATCH_POE_ESTAC_B);


                #endregion

                #endregion

                #region Datos Generales Nodo A

                String UBIGEO_A = ds.Tables[0].Rows[0]["UBIGEO_A"].ToString();
                String SERIE_PTP_450_A = ds.Tables[0].Rows[0]["SERIE_PTP_450_A"].ToString();
                String FRECUENCIA_A = ds.Tables[0].Rows[0]["FRECUENCIA_A"].ToString();
                String PIRE_EIRP_A = ds.Tables[0].Rows[0]["PIRE_EIRP_A"].ToString();
                String ANTENA_MARCA_MODELO_A = ds.Tables[0].Rows[0]["ANTENA_MARCA_MODELO_A"].ToString();
                String GANANCIA_ANTENA_A = ds.Tables[0].Rows[0]["GANANCIA_ANTENA_A"].ToString();
                String ALTURA_ANTENA_A = ds.Tables[0].Rows[0]["ALTURA_ANTENA_A"].ToString();
                String ELEVACION_A = ds.Tables[0].Rows[0]["ELEVACION_A"].ToString();
                String ALTITUD_msnm_A = ds.Tables[0].Rows[0]["ALTITUD_msnm_A"].ToString();

                #endregion

                #region Datos Generales Nodo B

                String UBIGEO_B = ds.Tables[0].Rows[0]["UBIGEO_B"].ToString();
                String SERIE_PTP_450_B = ds.Tables[0].Rows[0]["SERIE_PTP_450_B"].ToString();
                String FRECUENCIA_B = ds.Tables[0].Rows[0]["FRECUENCIA_B"].ToString();
                String PIRE_EIRP_B = ds.Tables[0].Rows[0]["PIRE_EIRP_B"].ToString();
                String ANTENA_MARCA_MODELO_B = ds.Tables[0].Rows[0]["ANTENA_MARCA_MODELO_B"].ToString();
                String GANANCIA_ANTENA_B = ds.Tables[0].Rows[0]["GANANCIA_ANTENA_B"].ToString();
                String ALTURA_ANTENA_B = ds.Tables[0].Rows[0]["ALTURA_ANTENA_B"].ToString();
                String ELEVACION_B = ds.Tables[0].Rows[0]["ELEVACION_B"].ToString();
                String ALTITUD_msnm_B = ds.Tables[0].Rows[0]["ALTITUD_msnm_B"].ToString();

                #endregion

                #endregion

               // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";

                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Ingresando Valores

                #region Caratula

                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NOMBRE_NODO_A, 15, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NODO_A, 18, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NODO_B, 18, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NOMBRE_NODO_A, 19, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", NOMBRE_NODO_A, 19, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", TIPO_NODO_A, 20, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", TIPO_NODO_B, 20, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", FRECUENCIA_A, 22, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "Carátula", FECHA, 24, "E");

                #endregion

                #region Configuracion y Mediciones

                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", TIPO_NODO_A, 16, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", TIPO_NODO_B, 16, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NODO_A, 17, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NODO_B, 17, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NOMBRE_NODO_A, 18, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NOMBRE_NODO_B, 18, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DIREC_ESTACION_A, 19, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DIREC_ESTACION_B, 19, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DISTRITO_A, 20, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DISTRITO_B, 20, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", PROVINCIA_A, 21, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", PROVINCIA_B, 21, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DEPARTAMENTO_A, 22, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DEPARTAMENTO_B, 22, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", LATITUD_A, 23, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", LATITUD_B, 23, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", LONGITUD_A, 24, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", LONGITUD_B, 24, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", ALTITUD_msnm_A, 25, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", ALTITUD_msnm_B, 25, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", REF_UBIC_EST_A, 26, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", REF_UBIC_EST_B, 26, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", ALTURA_TORRE_A, 28, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", ALTURA_TORRE_B, 28, "J");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DISTANCIA_A_B, 29, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", MODULACION, 31, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", MODULACION, 31, "j");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", AZIMUT_A, 43, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", AZIMUT_B, 43, "j");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", "Modulación:"+ MODULACION+"QAM", 50, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", IP_NODO_A, 55, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", IP_NODO_B, 55, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", IP_NODO_A, 56, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", IP_NODO_B, 56, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", DEFAULT_GATE_A_B, 58, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", POTENCIA_A, 71, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", POTENCIA_B, 71, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", POTENCIA_A, 72, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", POTENCIA_B, 72, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", MARGEN_DES_A, 73, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", MARGEN_DES_B, 73, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NIVEL_UMBRAL_A_B, 74, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NIVEL_UMBRAL_A_B, 74, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NIVEL_RECEP_RADIO_A, 78, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", NIVEL_RECEP_RADIO_B, 78, "M");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", PING_PTP_RADIO_A+" ms", 87, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "1 Configuración y Mediciones", PING_PTP_RADIO_B+" ms", 87, "M");

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_GEN_ENL_EST_A, "", 94, 3, 712, 334);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_GEN_ENL_EST_B, "", 110, 3, 709, 299);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_VLAN_ESTA_A, "", 128, 3, 710, 285);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_VLAN_ESTA_B, "", 147, 3, 710, 284);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_RADIO_ESTAC_A_1, "", 170, 3, 334, 301);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_RADIO_ESTAC_A_2, "", 170, 7, 380, 298);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_RADIO_ESTAC_B, "", 187, 3, 688, 587);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_IP_ESTAC_A, "", 229, 3, 710, 231);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "1 Configuración y Mediciones", mCONF_IP_ESTAC_B, "", 245, 3, 687, 328);

                #endregion

                #region Materiales A

                ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", NOMBRE_NODO_A+" - "+ NOMBRE_NODO_B, 12, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", NOMBRE_NODO_A, 12, "F");

                foreach (DataRow dr in ds1.Tables[0].Rows)
                {
                    String EQUIPO = dr["EQUIPO"].ToString();
                    String MARCA = dr["MARCA"].ToString();
                    String MODELO = dr["MODELO"].ToString();
                    String Nro_SERIE = dr["Nro_SERIE"].ToString();

                    int ind = Convert.ToInt32(ds1.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", Convert.ToString(ind + 1), 17 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", EQUIPO, 17 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", "1", 17 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", MARCA, 17 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", MODELO, 17 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", Nro_SERIE, 17 + ind, "G");

                }

                foreach (DataRow dr in ds2.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds2.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", Convert.ToString(ind + 1), 32 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", DESCRIPCION, 32 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", UNIDAD, 32 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "2 Materiales A", CANTIDAD, 32 + ind, "F");

                }

                #endregion

                #region Materiales B

                ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", NOMBRE_NODO_A + " - " + NOMBRE_NODO_B, 12, "C");
                ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", NOMBRE_NODO_B, 12, "F");

                foreach (DataRow dr in ds3.Tables[0].Rows)
                {
                    String EQUIPO = dr["EQUIPO"].ToString();
                    String MARCA = dr["MARCA"].ToString();
                    String MODELO = dr["MODELO"].ToString();
                    String Nro_SERIE = dr["Nro_SERIE"].ToString();

                    int ind = Convert.ToInt32(ds3.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", Convert.ToString(ind + 1), 17 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", EQUIPO, 17 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", "1", 17 + ind, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", MARCA, 17 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", MODELO, 17 + ind, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", Nro_SERIE, 17 + ind, "G");

                }

                foreach (DataRow dr in ds4.Tables[0].Rows)
                {
                    String DESCRIPCION = dr["DESCRIPCION"].ToString();
                    String UNIDAD = dr["UNIDAD"].ToString();
                    String CANTIDAD = dr["CANTIDAD"].ToString();

                    int ind = Convert.ToInt32(ds4.Tables[0].Rows.IndexOf(dr));

                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", Convert.ToString(ind + 1), 32 + ind, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", DESCRIPCION, 32 + ind, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", UNIDAD, 32 + ind, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "3 Materiales B", CANTIDAD, 32 + ind, "F");

                }

                #endregion

                #region Longitud SFTP

                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP",NOMBRE_NODO_A+ " - "+NOMBRE_NODO_B , 13, "D");

                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", DIREC_ESTACION_A, 20, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", ALTURA_TORRE_A, 20, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", ALTURA_ANTENA_A, 20, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_B_ESTAC_A, 20, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_C_ESTAC_A, 20, "h");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_D_ESTAC_A, 20, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_E_ESTAC_A, 20, "J");

                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", DIREC_ESTACION_B , 22, "D");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", ALTURA_TORRE_B ,22, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", ALTURA_ANTENA_B, 22, "F");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_B_ESTAC_B, 22, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_C_ESTAC_B, 22, "h");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_D_ESTAC_B, 22, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "4 Longitud SFTP", VALOR_E_ESTAC_B, 22, "J");


                #endregion

                #region Asignaciones y Observaciones

                if (SWITCH_ROUTER_A.First().Equals("7"))
                {
                    ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", "Router Nokia Puerto"+" "+SWITCH_ROUTER_A.Last(), 17, "G");
                }else
                {
                    ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", "Omni Switch Puerto" + " " + SWITCH_ROUTER_A.Last(), 17, "G");
                }
                if (SWITCH_ROUTER_B.First().Equals("7"))
                {
                    ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", "Router Nokia Puerto" + " " + SWITCH_ROUTER_B.Last(), 22, "G");
                }
                else
                {
                    ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", "Omni Switch Puerto" + " " + SWITCH_ROUTER_B.Last(), 22, "G");
                }

                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones",CAP_BREAKER_ASIG_EST_A, 27, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", VOLT_DC_ESTAC_A, 28, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", POS_BREAKER_ASIG_ESTAC_A, 29, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", POS_BARRA_ATERRA_ESTA_A, 30, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", CAP_BREAKER_ASIG_EST_B, 34, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", VOLT_DC_ESTAC_B, 35, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", POS_BREAKER_ASIG_ESTAC_B, 36, "K");
                ExcelToolsBL.UpdateCell(excelGenerado, "5 Asignaciones y Observaciones", POS_BARRA_ATERRA_ESTA_B, 37, "K");


                #endregion

                #region Calculo Propagacion

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "6 Cálculo Propagacion", mINGENIERIA, "", 8, 3, 632,528);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "6 Cálculo Propagacion", mPERFIL, "", 33, 2, 654, 368);

                #endregion

                #region Pruebas de Interferencia

                ExcelToolsBL.UpdateCell(excelGenerado, "8 Pruebas de Interferencia", NODO_A, 15, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "8 Pruebas de Interferencia", NODO_B, 15, "F");
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Pruebas de Interferencia", mPANT_RADIO_ESTAC_A, "", 20, 3,700,268);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "8 Pruebas de Interferencia", mPANT_RADIO_ESTAC_B, "", 38, 3,698,269);

                #endregion

                #region Serie Equipos Fotos

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_ANT_ESTAC_A, "", 14, 3, 120, 98);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_ODU_ESTAC_A, "", 21, 3, 81, 113);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_POE_ESTAC_A, "", 29, 3, 152, 117);


                if (!lstCMM4A.Count.Equals(0))
                {
                    byte[] SERIE_CMM4_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_CMM4_ESTAC_A"];
                    MemoryStream mSERIE_CMM4_ESTAC_A = new MemoryStream(SERIE_CMM4_ESTAC_A);
                    byte[] SERIE_UGPS_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_UGPS_ESTAC_A"];
                    MemoryStream mSERIE_UGPS_ESTAC_A = new MemoryStream(SERIE_UGPS_ESTAC_A);
                    byte[] SERIE_CONVERSOR_ESTAC_A = (byte[])ds.Tables[0].Rows[0]["SERIE_CONVERSOR_ESTAC_A"];
                    MemoryStream mSERIE_CONVERSOR_ESTAC_A = new MemoryStream(SERIE_CONVERSOR_ESTAC_A);

                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_CMM4_ESTAC_A, "", 37, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_UGPS_ESTAC_A, "", 45, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_CONVERSOR_ESTAC_A, "", 52, 3, 152, 117);

                }

                if (!lstCMM4B.Count.Equals(0))
                {
                    byte[] SERIE_CMM4_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_CMM4_ESTAC_B"];
                    MemoryStream mSERIE_CMM4_ESTAC_B = new MemoryStream(SERIE_CMM4_ESTAC_B);
                    byte[] SERIE_UGPS_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_UGPS_ESTAC_B"];
                    MemoryStream mSERIE_UGPS_ESTAC_B = new MemoryStream(SERIE_UGPS_ESTAC_B);
                    byte[] SERIE_CONVERSOR_ESTAC_B = (byte[])ds.Tables[0].Rows[0]["SERIE_CONVERSOR_ESTAC_B"];
                    MemoryStream mSERIE_CONVERSOR_ESTAC_B = new MemoryStream(SERIE_CONVERSOR_ESTAC_B);

                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_CMM4_ESTAC_B, "", 82, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_UGPS_ESTAC_B, "", 90, 3, 152, 117);
                    ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_CONVERSOR_ESTAC_B, "", 97, 3, 152, 117);

                }


                ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_ANT_ESTAC_B, "", 59, 3, 179, 23);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_ODU_ESTAC_B, "", 66, 3, 81, 113);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "9 Serie Equipos (fotos)", mSERIE_POE_ESTAC_B, "", 75, 3, 152, 117);


                #endregion

                #region Reporte Fotografico

                #region Estacion A

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO1_PAN_ESTAC_A, "", 12,3, 401, 368);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO2_POS_ANT_INST_TORRE_A, "", 12,14 , 415, 378);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO3_FOTO_ANTENA_PTP_ESTAC_A, "", 29, 3, 397, 239);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO4_ETIQ_PUERTO_ANT_ESTAC_A, "", 29, 16, 189, 250);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO5_ENGRAS_PERNOS_ESTAC_A, "", 46, 3, 362, 278);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO6_SILC_CONECT_ESTAC_A, "", 46, 14, 189, 250);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO7_ATERRAM_ODU_TORRE_ESTAC_A, "", 62, 3,396, 448);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO8_RECORRI_SFTP_ESTAC_A, "", 62, 14, 393, 423);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO9_1__SFTP_OUT_1_ESTAC_A, "", 79, 4, 244, 176);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO9_2_SFTP_OUT_2_ESTAC_A, "", 90, 5, 244, 176);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO10_SALAN_OUT_ETIQ_ESTAC_A, "", 79, 15, 295, 327);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO11_ATERRAM_SALAN_ESTAC_A, "", 101, 3, 399, 245);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO14_1_SFTP_IN_1_ESTAC_A, "", 120, 14, 405, 185);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO14_2_SFTP_IN_2_ESTAC_A, "", 131, 14, 406, 157);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO17_FOTO_PAN_RACK_ESTAC_A, "", 152, 3, 377, 338);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO18_1_ATERRAM_POE_ESTAC_A, "", 152, 15, 334, 179);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO18_2_ATERRAM_POE_ESTAC_A, "", 163, 15, 264, 166);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO18_2_ATERRAM_POE_ESTAC_A, "", 163, 15, 264, 166);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO19_1_ENERG_POE_ETIQ_ESTAC_A, "", 169, 3, 345, 175);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO19_2_ENERG_POE_ETIQ_ESTAC_A, "", 180, 3, 385, 183);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO20_1_PATCH_POE_ESTAC_A, "", 169, 15, 296, 178);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO20_2_PATCH_POE_ESTAC_A, "", 180, 14, 323, 162);

                #endregion

                #region Estacion B

                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO1_PAN_ESTAC_A, "", 192, 3, 401, 368);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO2_POS_ANT_INST_TORRE_A, "", 192, 14, 415, 378);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO3_FOTO_ANTENA_PTP_ESTAC_A, "", 29, 3, 397, 239);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO4_ETIQ_PUERTO_ANT_ESTAC_A, "", 29, 16, 189, 250);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO5_ENGRAS_PERNOS_ESTAC_A, "", 46, 3, 362, 278);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO6_SILC_CONECT_ESTAC_A, "", 46, 14, 189, 250);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO7_ATERRAM_ODU_TORRE_ESTAC_A, "", 62, 3, 396, 448);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO8_RECORRI_SFTP_ESTAC_A, "", 62, 14, 393, 423);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO9_1__SFTP_OUT_1_ESTAC_A, "", 79, 4, 244, 176);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO9_2_SFTP_OUT_2_ESTAC_A, "", 90, 5, 244, 176);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO10_SALAN_OUT_ETIQ_ESTAC_A, "", 79, 15, 295, 327);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO11_ATERRAM_SALAN_ESTAC_A, "", 101, 3, 399, 245);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO14_1_SFTP_IN_1_ESTAC_A, "", 120, 14, 405, 185);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO14_2_SFTP_IN_2_ESTAC_A, "", 131, 14, 406, 157);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO17_FOTO_PAN_RACK_ESTAC_A, "", 152, 3, 377, 338);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO18_1_ATERRAM_POE_ESTAC_A, "", 152, 15, 334, 179);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO18_2_ATERRAM_POE_ESTAC_A, "", 163, 15, 264, 166);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO18_2_ATERRAM_POE_ESTAC_A, "", 163, 15, 264, 166);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO19_1_ENERG_POE_ETIQ_ESTAC_A, "", 169, 3, 345, 175);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO19_2_ENERG_POE_ETIQ_ESTAC_A, "", 180, 3, 385, 183);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO20_1_PATCH_POE_ESTAC_A, "", 169, 15, 296, 178);
                //ExcelToolsBL.AddImageDocument(false, excelGenerado, "10 Reporte Fotográfico", mFOTO20_2_PATCH_POE_ESTAC_A, "", 180, 14, 323, 162);

                #endregion


                #endregion

                #region Datos Generales Nodo A

                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", TIPO_NODO_A, 9, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A",NODO_A, 12, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", NOMBRE_NODO_A, 12, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", NOMBRE_NODO_A, 17, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", UBIGEO_A, 17, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", DEPARTAMENTO_A, 20, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", PROVINCIA_A, 20, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", DISTRITO_A, 20, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", SERIE_PTP_450_A, 29, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", FRECUENCIA_A+" Mhz", 40, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", PIRE_EIRP_A + " dbm", 44, "I");

                if(ANTENA_MARCA_MODELO_A.Equals("INTEGRADA"))
                {
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", "Cambium Networks/5092HH", 46, "I");

                } else if(ANTENA_MARCA_MODELO_A.Equals("0.6"))
                {

                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", "SHENGLU/SLU0652DD6B", 46, "I");
                }

                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", GANANCIA_ANTENA_A, 47, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", ALTURA_ANTENA_A, 49, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", ELEVACION_A, 52, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", ALTITUD_msnm_A, 53, "I");

                foreach (DataRow dr in ds5.Tables[0].Rows)
                {
                    String NODO_LOCAL = dr["NODO_LOCAL"].ToString();
                    String NODO_REMOTO = dr["NODO_REMOTO"].ToString();
                    String RSS_LOCAL = dr["RSS_LOCAL"].ToString();
                    String RSS_REMOTO = dr["RSS_REMOTO"].ToString();
                    String TIEMPO_PROM = dr["TIEMPO_PROM"].ToString();
                    String CAP_SUBIDA = dr["CAP_SUBIDA"].ToString();
                    String CAP_BAJADA = dr["CAP_BAJADA"].ToString();
                    String DISTANCIA_metros = dr["DISTANCIA_metros"].ToString();

                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", NODO_LOCAL, 60, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", NODO_REMOTO, 60, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", RSS_LOCAL, 60, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", RSS_REMOTO, 60, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", "20", 60, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", "16 QAM", 60, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", TIEMPO_PROM,60, "H");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", "UL " + CAP_SUBIDA + "/" + "DL " + CAP_BAJADA, 60, "I");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", DISTANCIA_metros, 60, "K");
                    ExcelToolsBL.UpdateCell(excelGenerado, "11 DATOS GENERALES NODO A", FRECUENCIA_A + "MHz", 60, "L");

                }


                #endregion

                #region Datos Generales Nodo B

                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", TIPO_NODO_B, 9, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", NODO_B, 12, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", NOMBRE_NODO_B, 12, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", NOMBRE_NODO_B, 17, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", UBIGEO_B, 17, "G");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", DEPARTAMENTO_B, 20, "B");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", PROVINCIA_B, 20, "E");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", DISTRITO_B, 20, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", SERIE_PTP_450_B, 29, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", FRECUENCIA_B + " Mhz", 40, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", PIRE_EIRP_B + " dbm", 44, "I");

                if (ANTENA_MARCA_MODELO_B.Equals("INTEGRADA"))
                {
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", "Cambium Networks/5092HH", 46, "I");

                }
                else if (ANTENA_MARCA_MODELO_B.Equals("0.6"))
                {

                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", "SHENGLU/SLU0652DD6B", 46, "I");
                }

                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", GANANCIA_ANTENA_B, 47, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", ALTURA_ANTENA_B, 49, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", ELEVACION_B, 52, "I");
                ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", ALTITUD_msnm_B, 53, "I");

                foreach (DataRow dr in ds6.Tables[0].Rows)
                {
                    String NODO_LOCAL = dr["NODO_LOCAL"].ToString();
                    String NODO_REMOTO = dr["NODO_REMOTO"].ToString();
                    String RSS_LOCAL = dr["RSS_LOCAL"].ToString();
                    String RSS_REMOTO = dr["RSS_REMOTO"].ToString();
                    String TIEMPO_PROM = dr["TIEMPO_PROM"].ToString();
                    String CAP_SUBIDA = dr["CAP_SUBIDA"].ToString();
                    String CAP_BAJADA = dr["CAP_BAJADA"].ToString();
                    String DISTANCIA_metros = dr["DISTANCIA_metros"].ToString();

                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", NODO_LOCAL, 60, "B");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", NODO_REMOTO, 60, "C");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", RSS_LOCAL, 60, "D");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", RSS_REMOTO, 60, "E");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", "20", 60, "F");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", "16 QAM", 60, "G");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", TIEMPO_PROM, 60, "H");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", "UL " + CAP_SUBIDA + "/" + "DL " + CAP_BAJADA, 60, "I");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", DISTANCIA_metros, 60, "K");
                    ExcelToolsBL.UpdateCell(excelGenerado, "12 DATOS GENERALES NODO B", FRECUENCIA_B + "MHz", 60, "L");

                }


                #endregion


                #endregion

            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Anexo3ReporteFotograficoCMM4(String IdNodo, String IdTarea, String valorCadena1, String rutaPlantilla)
        {
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();

            try
            {
                baseDatosDA.CrearComando("USP_R_REPORTE_CMM4", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@CH_ID_TAREA", IdTarea, true);
                DataSet ds = baseDatosDA.EjecutarConsultaDataTable().DataSet;

                #region Valores

                byte[] FOTO_1_EQUIPO_GPS = (byte[])ds.Tables[0].Rows[0]["FOTO_1_EQUIPO_GPS"];
                MemoryStream mFOTO_1_EQUIPO_GPS = new MemoryStream(FOTO_1_EQUIPO_GPS);
                byte[] FOTO2_1_ATERRAMIENTO_GPS = (byte[])ds.Tables[0].Rows[0]["FOTO2_1_ATERRAMIENTO_GPS"];
                MemoryStream mFOTO2_1_ATERRAMIENTO_GPS = new MemoryStream(FOTO2_1_ATERRAMIENTO_GPS);
                byte[] FOTO2_2_ATERRAMIENTO_GPS = (byte[])ds.Tables[0].Rows[0]["FOTO2_2_ATERRAMIENTO_GPS"];
                MemoryStream mFOTO2_2_ATERRAMIENTO_GPS = new MemoryStream(FOTO2_2_ATERRAMIENTO_GPS);
                byte[] FOTO3_RECORRIDO_CABLE_CNT300 = (byte[])ds.Tables[0].Rows[0]["FOTO3_RECORRIDO_CABLE_CNT300"];
                MemoryStream mFOTO3_RECORRIDO_CABLE_CNT300 = new MemoryStream(FOTO3_RECORRIDO_CABLE_CNT300);
                byte[] FOTO4_1_ATERRAMIENTO_CABLE_CNT300 = (byte[])ds.Tables[0].Rows[0]["FOTO4_1_ATERRAMIENTO_CABLE_CNT300"];
                MemoryStream mFOTO4_1_ATERRAMIENTO_CABLE_CNT300 = new MemoryStream(FOTO4_1_ATERRAMIENTO_CABLE_CNT300);
                byte[] FOTO4_2_ATERRAMIENTO_CABLE_CNT300 = (byte[])ds.Tables[0].Rows[0]["FOTO4_2_ATERRAMIENTO_CABLE_CNT300"];
                MemoryStream mFOTO4_2_ATERRAMIENTO_CABLE_CNT300 = new MemoryStream(FOTO4_2_ATERRAMIENTO_CABLE_CNT300);
                byte[] FOTO5_1_ETIQUETADO_POE_CMM4 = (byte[])ds.Tables[0].Rows[0]["FOTO5_1_ETIQUETADO_POE_CMM4"];
                MemoryStream mFOTO5_1_ETIQUETADO_POE_CMM4 = new MemoryStream(FOTO5_1_ETIQUETADO_POE_CMM4);
                byte[] FOTO5_2_ETIQUETADO_POE_CMM4 = (byte[])ds.Tables[0].Rows[0]["FOTO5_2_ETIQUETADO_POE_CMM4"];
                MemoryStream mFOTO5_2_ETIQUETADO_POE_CMM4 = new MemoryStream(FOTO5_2_ETIQUETADO_POE_CMM4);
                byte[] FOTO6_1_PATCH_CORE = (byte[])ds.Tables[0].Rows[0]["FOTO6_1_PATCH_CORE"];
                MemoryStream mFOTO6_1_PATCH_CORE = new MemoryStream(FOTO6_1_PATCH_CORE);
                byte[] FOTO6_2_PATCH_CORE = (byte[])ds.Tables[0].Rows[0]["FOTO6_2_PATCH_CORE"];
                MemoryStream mFOTO6_2_PATCH_CORE = new MemoryStream(FOTO6_2_PATCH_CORE);
                byte[] FOTO7_1_POE_CMM4 = (byte[])ds.Tables[0].Rows[0]["FOTO7_1_POE_CMM4"];
                MemoryStream mFOTO7_1_POE_CMM4 = new MemoryStream(FOTO7_1_POE_CMM4);
                byte[] FOTO7_2_POE_CMM4 = (byte[])ds.Tables[0].Rows[0]["FOTO7_2_POE_CMM4"];
                MemoryStream mFOTO7_2_POE_CMM4 = new MemoryStream(FOTO7_2_POE_CMM4);
                byte[] FOTO8_TDK_LAMBDA = (byte[])ds.Tables[0].Rows[0]["FOTO8_TDK_LAMBDA"];
                MemoryStream mFOTO8_TDK_LAMBDA = new MemoryStream(FOTO8_TDK_LAMBDA);
                byte[] FOTO9_1_ENERGIA_TDK_LAMBDA = (byte[])ds.Tables[0].Rows[0]["FOTO9_1_ENERGIA_TDK_LAMBDA"];
                MemoryStream mFOTO9_1_ENERGIA_TDK_LAMBDA = new MemoryStream(FOTO9_1_ENERGIA_TDK_LAMBDA);
                byte[] FOTO9_2_ENERGIA_TDK_LAMBDA = (byte[])ds.Tables[0].Rows[0]["FOTO9_2_ENERGIA_TDK_LAMBDA"];
                MemoryStream mFOTO9_2_ENERGIA_TDK_LAMBDA = new MemoryStream(FOTO9_2_ENERGIA_TDK_LAMBDA);
                byte[] FOTO10_CONEXION_TDK_CMM4 = (byte[])ds.Tables[0].Rows[0]["FOTO10_CONEXION_TDK_CMM4"];
                MemoryStream mFOTO10_CONEXION_TDK_CMM4 = new MemoryStream(FOTO10_CONEXION_TDK_CMM4);




                #endregion

                // String usuarioWindows = Environment.UserName;
                String excelGenerado = "C:\\inetpub\\wwwroot\\SIAE_ARCHIVOS\\TEMPORAL\\" + IdNodo + " " + valorCadena1 + " " + IdTarea + ".xlsx";
                File.Copy(rutaPlantilla, excelGenerado, true);

                #region Ingresando Valores

                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO_1_EQUIPO_GPS, "", 13, 3, 402, 340);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO2_1_ATERRAMIENTO_GPS, "", 13, 14, 373, 173);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO2_2_ATERRAMIENTO_GPS, "", 24, 14, 367, 161);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO3_RECORRIDO_CABLE_CNT300, "", 31, 4, 318, 341);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO4_1_ATERRAMIENTO_CABLE_CNT300, "", 31, 14, 372, 178);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO4_2_ATERRAMIENTO_CABLE_CNT300, "", 42, 14, 338, 147);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO5_1_ETIQUETADO_POE_CMM4, "", 49, 3, 338, 147);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO5_2_ETIQUETADO_POE_CMM4, "", 60, 4, 395, 166);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO6_1_PATCH_CORE, "", 49, 14, 405, 185);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO6_2_PATCH_CORE, "", 60, 14, 401, 157);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO7_1_POE_CMM4, "", 66, 5, 213, 181);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO7_2_POE_CMM4, "", 77, 4, 320, 164);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO8_TDK_LAMBDA, "", 66, 14, 397, 332);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO9_1_ENERGIA_TDK_LAMBDA, "", 82, 3, 399, 181);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO9_2_ENERGIA_TDK_LAMBDA, "", 93, 4, 299, 160);
                ExcelToolsBL.AddImageDocument(false, excelGenerado, "Reporte Fotográfico", mFOTO10_CONEXION_TDK_CMM4, "", 82, 15, 348, 341);

                #endregion

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}

