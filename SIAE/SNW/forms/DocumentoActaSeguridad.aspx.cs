using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;

namespace SNW.forms
{
    public partial class DocumentoActaSeguridadAcceso : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Request.QueryString["IdTarea"] != null && Request.QueryString["IdDocumento"] != null)
                {
                    EntidadDetalleBE entidadDetalleBE = new EntidadDetalleBE();
                    EntidadDetalleBE entidadDetalleSecundarioBE = new EntidadDetalleBE();
                    DocumentoBE Documento = new DocumentoBE();
                    TareaBE Tarea = new TareaBE();
                    UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                    //EntidadDetalleBE entidadDefecto = new EntidadDetalleBE();

                    #region Inicializamos el formulario

                    #region Inicializamos el Título

                    Tarea.IdTarea = Request.QueryString["IdTarea"];
                    Tarea = TareaBL.ListarTareas(Tarea)[0];

                    Documento.Tarea = Tarea;
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    //entidadDetalleBE.IdValor = Documento.Tarea.TipoTarea.IdValor.Equals("000010") ? "000013" : Documento.Tarea.TipoTarea.IdValor.Equals("000011") ? "000014" : "";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ") " + " .:SIAE:.";
                    #endregion

                    #region Listar Equipamiento
                    //List<EntidadDetalleBE> lstEquipamiento = new List<EntidadDetalleBE>();
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();
                    //entidadDetalleBE = new EntidadDetalleBE();
                    //entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    //entidadDetalleBE.IdValor = Documento.Tarea.TipoTarea.IdValor.Equals("000010") ? "000013" : Documento.Tarea.TipoTarea.IdValor.Equals("000011") ? "000014" : "";
                    //entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    //entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "EQUI";
                    //entidadDetalleBE.Metodo = "*";
                    //lstEquipamiento = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    ////lstEquipamiento.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    //foreach (EntidadDetalleBE item in lstEquipamiento)
                    //{
                    //    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    //    DocumentoEquipamiento.Documento = Documento;
                    //    DocumentoEquipamiento.Equipamiento = item;
                    //    lstDocumentoEquipamiento.Add(DocumentoEquipamiento);
                    //}
                    //Session["Equipamientos"] = lstDocumentoEquipamiento;
                    ////gvMateriales.DataSource = lstMaterial;
                    //gvEquipamientos.DataSource = lstDocumentoEquipamiento;
                    //gvEquipamientos.DataBind();

                    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    DocumentoEquipamiento.Documento = Documento;
                    lstDocumentoEquipamiento = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    Session["Equipamientos"] = lstDocumentoEquipamiento;

                    gvEquipamientos.DataSource = lstDocumentoEquipamiento;
                    gvEquipamientos.DataBind();

                    #endregion

                    #region Reporte Fotográfico

                    #region 01.- REPORTE FOTOGRÁFICO

                    #region Foto 1: Fachada del Nodo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000162",
                        imgFachadaNodoEjemplo);
                    #endregion

                    #region Foto 2: Sala Equipos Panorámica Rack (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000163",
                        imgSalaEquiposPanoramicaRackEjemplo);
                    #endregion

                    #region Foto 3: Panorámica Interior 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000164",
                        imgPanoramicaInterior01Ejemplo);
                    #endregion

                    #region Foto 4: Panorámica Interior 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000165",
                        imgPanoramicaInterior02Ejemplo);
                    #endregion

                    #region Foto 5: Panorámica de Equipos en Patio (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000166",
                        imgPanoramicaEquiposPatioEjemplo);
                    #endregion

                    #region Foto 6: Breaker Asignado para Seguridad (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000167",
                        imgBreakerAsignadoSeguridadEjemplo);
                    #endregion

                    #region Foto 7.01: Cerradura Electromagnética Externa (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000168",
                        imgCerraduraElectromagneticaExterna01Ejemplo);
                    #endregion

                    #region Foto 7.02: Cerradura Electromagnética Externa (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000169",
                        imgCerraduraElectromagneticaExterna02Ejemplo);
                    #endregion

                    #region Foto 8.01: Sensor Magnético Externo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000170",
                        imgSensorMagneticoExterno01Ejemplo);
                    #endregion

                    #region Foto 8.02: Sensor Magnético Externo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000171",
                        imgSensorMagneticoExterno02Ejemplo);
                    #endregion

                    #region Foto 9: Cerradura Eléctrica Externa (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000172",
                        imgCerraduraElectricaExternaEjemplo);
                    #endregion

                    #region Foto 10: Sensor Movimiento 90° Externo N°1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000173",
                        imgSensorMovimiento90Externo01Ejemplo);
                    #endregion

                    #region Foto 11: Sensor Movimiento 90° Externo N°2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000174",
                        imgSensorMovimiento90Externo02Ejemplo);
                    #endregion

                    #region Foto 12: Sirena Estroboscópica (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000175",
                        imgSirenaEstroboscopicaEjemplo);
                    #endregion

                    #region Foto 13: Lector Biométrico (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000176",
                        imgLectorBiometricoEjemplo);
                    #endregion

                    #region Foto 14: Lector Tarjeta (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000177",
                        imgLectorTarjetaEjemplo);
                    #endregion

                    #region Foto 15: Cámara Exterior PTZ (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000178",
                        imgCamaraExteriorPTZEjemplo);
                    #endregion

                    #region Foto 16: Extintor Exterior (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000179",
                        imgExtintorExteriorEjemplo);
                    #endregion

                    #region Foto 17.01: Sensor Magnético Interno (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000180",
                        imgSensorMagneticoInterno01Ejemplo);
                    #endregion

                    #region Foto 17.02: Sensor Magnético Interno (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000181",
                        imgSensorMagneticoInterno02Ejemplo);
                    #endregion

                    #region Foto 18: Sensor Ocupacional (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000182",
                        imgSensorOcupacionalEjemplo);
                    #endregion

                    #region Foto 19: Sensor de Humo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000183",
                        imgSensorHumoEjemplo);
                    #endregion

                    #region Foto 20: Sensor Movimiento 360 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000184",
                        imgSensorMovimiento360Ejemplo);
                    #endregion

                    #region Foto 21: Sensor de Inundación (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000185",
                        imgSensorInundacionEjemplo);
                    #endregion

                    #region Foto 22: Cámara PTZ Interior (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000186",
                        imgCamaraPTZInteriorEjemplo);
                    #endregion

                    #region Foto 23: Extintor Interior (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000187",
                        imgExtintorInteriorEjemplo);
                    #endregion

                    #region Foto 24: Rele (Equipo Interno) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000188",
                        imgReleEquipoInternoEjemplo);
                    #endregion

                    #region Foto 25: Controlador, NVR y Switch POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000189",
                        imgControladorNVRSwitchPOEEjemplo);
                    #endregion

                    #endregion

                    #region 02.- ATERRAMIENTO

                    #region Foto 26: Aterramiento Controlador (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000190",
                        imgAterramientoControladorEjemplo);
                    #endregion

                    #region Foto 27.01: Aterramiento NVR y POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000191",
                        imgAterramientoNVRPOE01Ejemplo);
                    #endregion

                    #region Foto 27.02: Aterramiento NVR y POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000192",
                        imgAterramientoNVRPOE02Ejemplo);
                    #endregion

                    #region Foto 28: Aterramiento a Barra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000193",
                        imgAterramientoBarraEjemplo);
                    #endregion

                    #endregion

                    #region 03.- SERIE DE EQUIPOS

                    #region Foto 29: Serial Number Sensor Movimiento 90° N° 1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000194",
                        imgSerialNumberSensorMovimiento9001Ejemplo);
                    #endregion

                    #region Foto 29: Serial Number Sensor Movimiento 90° N° 1
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "SEN-OD-090-001", 1,
                        lblSerialNumberSensorMovimiento9001);
                    #endregion

                    #region Foto 30: Serial Number Sensor Movimiento 90° N° 2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000195",
                        imgSerialNumberSensorMovimiento9002Ejemplo);
                    #endregion

                    #region Foto 29: Serial Number Sensor Movimiento 90° N° 2
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "SEN-OD-090-001", 2,
                        lblSerialNumberSensorMovimiento9002);
                    #endregion

                    #region Foto 31.01: Serial Number Switch POE y NVR (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000196",
                        imgSerialNumberSwitchPOENVR01Ejemplo);
                    #endregion

                    #region Foto 31.01: Serial Number Switch POE y NVR
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "SWT-ACC-0001TG", 1,
                        lblSerialNumberSwitchPOENVR01);
                    #endregion

                    #region Foto 31.02: Serial Number Switch POE y NVR (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000197",
                        imgSerialNumberSwitchPOENVR02Ejemplo);
                    #endregion

                    #region Foto 31.02: Serial Number Switch POE y NVR
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "SIS-GRB-0001;SIS-GRB-0001TG", 1,
                        lblSerialNumberSwitchPOENVR02);
                    #endregion

                    #region Foto 32: Serial Number Controlador (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000198",
                        imgSerialNumberControladorEjemplo);
                    #endregion

                    #region Foto 32: Serial Number Controlador
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "CONT-ACC-002;CONT-ACC-003", 1,
                        lblSerialNumberControlador);
                    #endregion

                    #endregion

                    #region 04.- ETIQUETADO

                    #region Foto 33: Etiquetado de Equipos en Controlador (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000199",
                        imgEtiquetadoEquiposControladorEjemplo);
                    #endregion

                    #region Foto 34: Etiquetado de Equipos en NVR (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000200",
                        imgEtiquetadoEquiposNVREjemplo);
                    #endregion

                    #endregion

                    #region 05.- CHECKLIST

                    #region Foto: Checklist (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000201",
                        imgChecklistEjemplo);
                    #endregion

                    #endregion

                    #region 06.- CAPTURAS DE PANTALLA

                    #region Foto 35: Cámara Exterior Modo Normal Posición 1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000202",
                        imgCamaraExteriorModoNormalPosicion01Ejemplo);
                    #endregion

                    #region Foto 36: Cámara Exterior Modo Normal Posición 2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000203",
                        imgCamaraExteriorModoNormalPosicion02Ejemplo);
                    #endregion

                    #region Foto 37: Cámara Interior Modo Normal (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000204",
                        imgCamaraInteriorModoNormalEjemplo);
                    #endregion

                    #region Foto 38: Cámara Interior Modo Infrarojo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000205",
                        imgCamaraInteriorModoInfrarojoEjemplo);
                    #endregion

                    #endregion

                    #region 07.- CAPTURAS DE PANTALLA TECHNICIAN GUI

                    #region Foto 39: Technician Program Alarma Puerta Principal Abierta (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000206",
                        imgTechnicianProgramAlarmaPuertaPrincipalAbiertaEjemplo);
                    #endregion

                    #region Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000207",
                        imgTechnicianProgramAlarmaPuertaSalaEquiposAbiertaEjemplo);
                    #endregion

                    #region Foto 41: Technician Program Alarma de Cámara Interna (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000208",
                        imgTechnicianProgramAlarmaCamaraInternaEjemplo);
                    #endregion

                    #region Foto 42: Technician Program Alarma de Cámara Externa (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000209",
                        imgTechnicianProgramAlarmaCamaraExternaEjemplo);
                    #endregion

                    #region Foto 43: Technician Program Alarma de Sensor de Aniego (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000210",
                        imgTechnicianProgramAlarmaSensorAniegoEjemplo);
                    #endregion

                    #region Foto 44: Technician Program Alarma de Sensor de Humo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000211",
                        imgTechnicianProgramAlarmaSensorHumoEjemplo);
                    #endregion

                    #region Foto 45: Technician Program Alarma Tamper Sensor de 90°-1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000212",
                        imgTechnicianProgramAlarmaTamperSensor9001Ejemplo);
                    #endregion

                    #region Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000213",
                        imgTechnicianProgramAlarmaMovimientoSensor9001Ejemplo);
                    #endregion

                    #region Foto 47: Technician Program Alarma Masking Sensor de 90°-1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000214",
                        imgTechnicianProgramAlarmaMaskingSensor9001Ejemplo);
                    #endregion

                    #region Foto 48: Technician Program Alarma Tamper Sensor de 90°-2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000215",
                        imgTechnicianProgramAlarmaTamperSensor9002Ejemplo);
                    #endregion

                    #region Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000216",
                        imgTechnicianProgramAlarmaMovimientoSensor9002Ejemplo);
                    #endregion

                    #region Foto 50: Technician Program Alarma Masking Sensor de 90°-2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000217",
                        imgTechnicianProgramAlarmaMaskingSensor9002Ejemplo);
                    #endregion

                    #region Foto 51: Technician Program Alarma Tamper Sensor de 360° (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000218",
                        imgTechnicianProgramAlarmaTamperSensor360Ejemplo);
                    #endregion

                    #region Foto 52: Technician Program Alarma Movimiento Sensor de 360° (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000219",
                        imgTechnicianProgramAlarmaMovimientoSensor360Ejemplo);
                    #endregion

                    #endregion

                    #region 08.- CAPTURAS DE PING

                    #region Foto 53: Ping a la Cámara 1 - Indoor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000220",
                        imgPingCamara01IndoorEjemplo);
                    #endregion

                    #region Foto 54: Ping a la Cámara 2 - Outdoor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000221",
                        imgPingCamara02OutdoorEjemplo);
                    #endregion

                    #region Foto 55: Ping al Controlador (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000222",
                        imgPingControladorEjemplo);
                    #endregion

                    #region Foto 56: Ping al Gateway (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000223",
                        imgPingGatewayEjemplo);
                    #endregion

                    #region Foto 57: Ping al NVR (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000224",
                        imgPingNVREjemplo);
                    #endregion

                    #region Foto 58: Ping al Biométrico (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000225",
                        imgPingBiometricoEjemplo);
                    #endregion

                    #endregion

                    #endregion                    

                    #region Listar Materiales
                    List<EntidadDetalleBE> lstMaterial = new List<EntidadDetalleBE>();
                    List<DocumentoMaterialBE> lstDocumentoMaterial = new List<DocumentoMaterialBE>();
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    entidadDetalleBE.IdValor = Documento.Tarea.TipoTarea.IdValor.Equals("000010") ? "000013" : Documento.Tarea.TipoTarea.IdValor.Equals("000011") ? "000014" : "";
                    entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "MAT";
                    entidadDetalleBE.Metodo = "*";
                    lstMaterial = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    //lstMaterial.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    foreach (EntidadDetalleBE item in lstMaterial)
                    {
                        DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                        DocumentoMaterial.Documento = Documento;
                        DocumentoMaterial.Material = item;
                        lstDocumentoMaterial.Add(DocumentoMaterial);
                    }
                    Session["Materiales"] = lstDocumentoMaterial;
                    //gvMateriales.DataSource = lstMaterial;
                    gvMateriales.DataSource = lstDocumentoMaterial;
                    gvMateriales.DataBind();
                    #endregion

                    #region Guardamos el documento
                    Session["Documento"] = Documento;
                    #endregion

                    #region Asignamos el metodo
                    Session["metodo"] = "I";//Insert
                    #endregion

                    #region Asignacion Perfil
                    hfIdPerfil.Value = Usuario.Perfil.IdValor;
                    #endregion

                    #endregion

                    #region Verificamos si existe la documentacion
                    DocumentoDetalleBE DocumentoDetalle = new DocumentoDetalleBE();
                    List<DocumentoDetalleBE> lstDetalles = new List<DocumentoDetalleBE>();
                    DocumentoDetalle.Documento = Documento;
                    lstDetalles = DocumentoDetalleBL.ListarDocumentoDetalle(DocumentoDetalle);
                    if (lstDetalles.Count > 0)
                    {
                        String strRutaFisicaTemporal = "";

                        #region Ruta Fisica Temporal
                        entidadDetalleBE = new EntidadDetalleBE();
                        entidadDetalleBE.Entidad.IdEntidad = "CONF";
                        entidadDetalleBE.IdValor = "RUTA_TEMP";
                        entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                        strRutaFisicaTemporal = entidadDetalleBE.ValorCadena1;
                        #endregion

                        #region Ruta Virtual Temporal
                        entidadDetalleBE = new EntidadDetalleBE();
                        entidadDetalleBE.Entidad.IdEntidad = "CONF";
                        entidadDetalleBE.IdValor = "RUTA_VIRT_TEMP";
                        entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                        hfRutaVirtualTemporal.Value = entidadDetalleBE.ValorCadena1;
                        #endregion

                        #region Carátula
                        
                        #region Fecha
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000002").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFecha,
                            hfFechaComentario, null,
                            txtFecha, null, null,
                            Type.GetType("System.DateTime"));
                        #endregion

                        #endregion

                        #region Reporte fotográfico

                        #region 01.- REPORTE FOTOGRÁFICO

                        #region Foto 1: Fachada del Nodo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000214").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFachadaNodo,
                            hfFachadaNodoComentario, null, null,
                            hfFachadaNodo, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 2: Sala Equipos Panorámica Rack
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000215").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSalaEquiposPanoramicaRack,
                            hfSalaEquiposPanoramicaRackComentario, null, null,
                            hfSalaEquiposPanoramicaRack, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 3: Panorámica Interior 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000216").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaInterior01,
                            hfPanoramicaInterior01Comentario, null, null,
                            hfPanoramicaInterior01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 4: Panorámica Interior 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000217").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaInterior02,
                            hfPanoramicaInterior02Comentario, null, null,
                            hfPanoramicaInterior02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 5: Panorámica de Equipos en Patio
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000218").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaEquiposPatio,
                            hfPanoramicaEquiposPatioComentario, null, null,
                            hfPanoramicaEquiposPatio, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 6: Breaker Asignado para Seguridad
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000219").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkBreakerAsignadoSeguridad,
                            hfBreakerAsignadoSeguridadComentario, null, null,
                            hfBreakerAsignadoSeguridad, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 7.01: Cerradura Electromagnética Externa
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000220").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCerraduraElectromagneticaExterna01,
                            hfCerraduraElectromagneticaExterna01Comentario, null, null,
                            hfCerraduraElectromagneticaExterna01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 7.02: Cerradura Electromagnética Externa
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000221").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCerraduraElectromagneticaExterna02,
                            hfCerraduraElectromagneticaExterna02Comentario, null, null,
                            hfCerraduraElectromagneticaExterna02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 8.01: Sensor Magnético Externo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000222").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMagneticoExterno01,
                            hfSensorMagneticoExterno01Comentario, null, null,
                            hfSensorMagneticoExterno01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 8.02: Sensor Magnético Externo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000223").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMagneticoExterno02,
                            hfSensorMagneticoExterno02Comentario, null, null,
                            hfSensorMagneticoExterno02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 9: Cerradura Eléctrica Externa
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000224").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCerraduraElectricaExterna,
                            hfCerraduraElectricaExternaComentario, null, null,
                            hfCerraduraElectricaExterna, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 10: Sensor Movimiento 90° Externo N°1
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000225").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMovimiento90Externo01,
                            hfSensorMovimiento90Externo01Comentario, null, null,
                            hfSensorMovimiento90Externo01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 11: Sensor Movimiento 90° Externo N°2
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000226").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMovimiento90Externo02,
                            hfSensorMovimiento90Externo02Comentario, null, null,
                            hfSensorMovimiento90Externo02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 12: Sirena Estroboscópica
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000227").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSirenaEstroboscopica,
                            hfSirenaEstroboscopicaComentario, null, null,
                            hfSirenaEstroboscopica, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 13: Lector Biométrico
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000228").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLectorBiometrico,
                            hfLectorBiometricoComentario, null, null,
                            hfLectorBiometrico, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 14: Lector Tarjeta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000229").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLectorTarjeta,
                            hfLectorTarjetaComentario, null, null,
                            hfLectorTarjeta, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 15: Cámara Exterior PTZ
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000230").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCamaraExteriorPTZ,
                            hfCamaraExteriorPTZComentario, null, null,
                            hfCamaraExteriorPTZ, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 16: Extintor Exterior
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000231").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkExtintorExterior,
                            hfExtintorExteriorComentario, null, null,
                            hfExtintorExterior, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 17.01: Sensor Magnético Interno
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000232").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMagneticoInterno01,
                            hfSensorMagneticoInterno01Comentario, null, null,
                            hfSensorMagneticoInterno01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 17.02: Sensor Magnético Interno
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000233").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMagneticoInterno02,
                            hfSensorMagneticoInterno02Comentario, null, null,
                            hfSensorMagneticoInterno02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 18: Sensor Ocupacional
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000234").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorOcupacional,
                            hfSensorOcupacionalComentario, null, null,
                            hfSensorOcupacional, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 19: Sensor de Humo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000235").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorHumo,
                            hfSensorHumoComentario, null, null,
                            hfSensorHumo, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 20: Sensor Movimiento 360
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000236").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorMovimiento360,
                            hfSensorMovimiento360Comentario, null, null,
                            hfSensorMovimiento360, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 21: Sensor de Inundación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000237").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSensorInundacion,
                            hfSensorInundacionComentario, null, null,
                            hfSensorInundacion, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 22: Cámara PTZ Interior
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000238").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCamaraPTZInterior,
                            hfCamaraPTZInteriorComentario, null, null,
                            hfCamaraPTZInterior, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 23: Extintor Interior
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000239").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkExtintorInterior,
                            hfExtintorInteriorComentario, null, null,
                            hfExtintorInterior, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 24: Rele (Equipo Interno)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000240").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkReleEquipoInterno,
                            hfReleEquipoInternoComentario, null, null,
                            hfReleEquipoInterno, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 25: Controlador, NVR y Switch POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000241").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkControladorNVRSwitchPOE,
                            hfControladorNVRSwitchPOEComentario, null, null,
                            hfControladorNVRSwitchPOE, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 02.- ATERRAMIENTO

                        #region Foto 26: Aterramiento Controlador
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000242").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoControlador,
                            hfAterramientoControladorComentario, null, null,
                            hfAterramientoControlador, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 27.01: Aterramiento NVR y POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000243").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoNVRPOE01,
                            hfAterramientoNVRPOE01Comentario, null, null,
                            hfAterramientoNVRPOE01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 27.02: Aterramiento NVR y POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000244").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoNVRPOE02,
                            hfAterramientoNVRPOE02Comentario, null, null,
                            hfAterramientoNVRPOE02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 28: Aterramiento a Barra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000245").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoBarra,
                            hfAterramientoBarraComentario, null, null,
                            hfAterramientoBarra, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 03.- SERIE DE EQUIPOS

                        #region Foto 29: Serial Number Sensor Movimiento 90° N° 1
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000246").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerialNumberSensorMovimiento9001,
                            hfSerialNumberSensorMovimiento9001Comentario, null, null,
                            hfSerialNumberSensorMovimiento9001, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 30: Serial Number Sensor Movimiento 90° N° 2
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000247").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerialNumberSensorMovimiento9002,
                            hfSerialNumberSensorMovimiento9002Comentario, null, null,
                            hfSerialNumberSensorMovimiento9002, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 31.01: Serial Number Switch POE y NVR
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000248").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerialNumberSwitchPOENVR01,
                            hfSerialNumberSwitchPOENVR01Comentario, null, null,
                            hfSerialNumberSwitchPOENVR01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 31.02: Serial Number Switch POE y NVR
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000249").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerialNumberSwitchPOENVR02,
                            hfSerialNumberSwitchPOENVR02Comentario, null, null,
                            hfSerialNumberSwitchPOENVR02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 32: Serial Number Controlador
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000250").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerialNumberControlador,
                            hfSerialNumberControladorComentario, null, null,
                            hfSerialNumberControlador, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 04.- ETIQUETADO

                        #region Foto 33: Etiquetado de Equipos en Controlador
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000251").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEtiquetadoEquiposControlador,
                            hfEtiquetadoEquiposControladorComentario, null, null,
                            hfEtiquetadoEquiposControlador, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 34: Etiquetado de Equipos en NVR
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000252").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEtiquetadoEquiposNVR,
                            hfEtiquetadoEquiposNVRComentario, null, null,
                            hfEtiquetadoEquiposNVR, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 05.- CHECKLIST

                        #region Foto: Checklist
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000253").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkChecklist,
                            hfChecklistComentario, null, null,
                            hfChecklist, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 06.- CAPTURAS DE PANTALLA

                        #region Foto 35: Cámara Exterior Modo Normal Posición 1
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000254").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCamaraExteriorModoNormalPosicion01,
                            hfCamaraExteriorModoNormalPosicion01Comentario, null, null,
                            hfCamaraExteriorModoNormalPosicion01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 36: Cámara Exterior Modo Normal Posición 2
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000255").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCamaraExteriorModoNormalPosicion02,
                            hfCamaraExteriorModoNormalPosicion02Comentario, null, null,
                            hfCamaraExteriorModoNormalPosicion02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 37: Cámara Interior Modo Normal
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000256").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCamaraInteriorModoNormal,
                            hfCamaraInteriorModoNormalComentario, null, null,
                            hfCamaraInteriorModoNormal, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 38: Cámara Interior Modo Infrarojo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000257").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCamaraInteriorModoInfrarojo,
                            hfCamaraInteriorModoInfrarojoComentario, null, null,
                            hfCamaraInteriorModoInfrarojo, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 07.- CAPTURAS DE PANTALLA TECHNICIAN GUI

                        #region Foto 39: Technician Program Alarma Puerta Principal Abierta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000258").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaPuertaPrincipalAbierta,
                            hfTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario, null, null,
                            hfTechnicianProgramAlarmaPuertaPrincipalAbierta, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000259").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta,
                            hfTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario, null, null,
                            hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 41: Technician Program Alarma de Cámara Interna
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000260").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaCamaraInterna,
                            hfTechnicianProgramAlarmaCamaraInternaComentario, null, null,
                            hfTechnicianProgramAlarmaCamaraInterna, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 42: Technician Program Alarma de Cámara Externa
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000261").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaCamaraExterna,
                            hfTechnicianProgramAlarmaCamaraExternaComentario, null, null,
                            hfTechnicianProgramAlarmaCamaraExterna, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 43: Technician Program Alarma de Sensor de Aniego
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000262").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaSensorAniego,
                            hfTechnicianProgramAlarmaSensorAniegoComentario, null, null,
                            hfTechnicianProgramAlarmaSensorAniego, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 44: Technician Program Alarma de Sensor de Humo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000263").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaSensorHumo,
                            hfTechnicianProgramAlarmaSensorHumoComentario, null, null,
                            hfTechnicianProgramAlarmaSensorHumo, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 45: Technician Program Alarma Tamper Sensor de 90°-1
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000264").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaTamperSensor9001,
                            hfTechnicianProgramAlarmaTamperSensor9001Comentario, null, null,
                            hfTechnicianProgramAlarmaTamperSensor9001, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000265").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaMovimientoSensor9001,
                            hfTechnicianProgramAlarmaMovimientoSensor9001Comentario, null, null,
                            hfTechnicianProgramAlarmaMovimientoSensor9001, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 47: Technician Program Alarma Masking Sensor de 90°-1
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000266").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaMaskingSensor9001,
                            hfTechnicianProgramAlarmaMaskingSensor9001Comentario, null, null,
                            hfTechnicianProgramAlarmaMaskingSensor9001, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 48: Technician Program Alarma Tamper Sensor de 90°-2
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000267").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaTamperSensor9002,
                            hfTechnicianProgramAlarmaTamperSensor9002Comentario, null, null,
                            hfTechnicianProgramAlarmaTamperSensor9002, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000268").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaMovimientoSensor9002,
                            hfTechnicianProgramAlarmaMovimientoSensor9002Comentario, null, null,
                            hfTechnicianProgramAlarmaMovimientoSensor9002, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 50: Technician Program Alarma Masking Sensor de 90°-2
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000269").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaMaskingSensor9002,
                            hfTechnicianProgramAlarmaMaskingSensor9002Comentario, null, null,
                            hfTechnicianProgramAlarmaMaskingSensor9002, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 51: Technician Program Alarma Tamper Sensor de 360°
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000270").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaTamperSensor360,
                            hfTechnicianProgramAlarmaTamperSensor360Comentario, null, null,
                            hfTechnicianProgramAlarmaTamperSensor360, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 52: Technician Program Alarma Movimiento Sensor de 360°
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000271").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTechnicianProgramAlarmaMovimientoSensor360,
                            hfTechnicianProgramAlarmaMovimientoSensor360Comentario, null, null,
                            hfTechnicianProgramAlarmaMovimientoSensor360, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 08.- CAPTURAS DE PING

                        #region Foto 53: Ping a la Cámara 1 - Indoor
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000272").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingCamara01Indoor,
                            hfPingCamara01IndoorComentario, null, null,
                            hfPingCamara01Indoor, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 54: Ping a la Cámara 2 - Outdoor
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000273").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingCamara02Outdoor,
                            hfPingCamara02OutdoorComentario, null, null,
                            hfPingCamara02Outdoor, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 55: Ping al Controlador
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000274").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingControlador,
                            hfPingControladorComentario, null, null,
                            hfPingControlador, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 56: Ping al Gateway
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000275").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingGateway,
                            hfPingGatewayComentario, null, null,
                            hfPingGateway, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 57: Ping al NVR
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000276").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingNVR,
                            hfPingNVRComentario, null, null,
                            hfPingNVR, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 58: Ping al Biométrico
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000277").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingBiometrico,
                            hfPingBiometricoComentario, null, null,
                            hfPingBiometrico, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #endregion

                        #region Materiales

                        #region Equipamientos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000083").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEquipamientos,
                            hfEquipamientosComentario);
                        #endregion

                        #region Materiales
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000026").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMateriales,
                            hfMaterialesComentario);
                        DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                        DocumentoMaterial.Documento = Documento;
                        lstDocumentoMaterial = DocumentoMaterialBL.ListarDocumentoMaterial(DocumentoMaterial);
                        Session["Materiales"] = lstDocumentoMaterial;

                        gvMateriales.DataSource = lstDocumentoMaterial;
                        gvMateriales.DataBind();

                        Documento.Materiales = lstDocumentoMaterial;

                        #endregion

                        #endregion

                        #region ATP

                        #region Extinguidor Externo Fecha Expiración
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000278").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkExtinguidorExternoFechaExpiracion,
                            hfExtinguidorExternoFechaExpiracionComentario, null,
                            txtExtinguidorExternoFechaExpiracion, null, null,
                            Type.GetType("System.DateTime"));
                        #endregion

                        #region Extinguidor Interno Fecha Expiración
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000279").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkExtinguidorInternoFechaExpiracion,
                            hfExtinguidorInternoFechaExpiracionComentario, null,
                            txtExtinguidorInternoFechaExpiracion, null, null,
                            Type.GetType("System.DateTime"));
                        #endregion

                        #endregion

                        #region Asignamos el metodo
                        Session["metodo"] = "U";//Update
                        #endregion

                    }
                    #endregion

                    

                }
                else
                {
                    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','modal-header-danger','Error','No existe el código de la tarea o el código de documento.');", true);
                }
            }
        }

        protected void gvEquipamientos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Equipos";
                e.Row.Cells[2].Attributes["data-title"] = "Marca";
                e.Row.Cells[3].Attributes["data-title"] = "Modelo";
                e.Row.Cells[4].Attributes["data-title"] = "N° Serie";

            }
        }

        protected void gvMateriales_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Descripción";
                e.Row.Cells[2].Attributes["data-title"] = "Código";
                e.Row.Cells[3].Attributes["data-title"] = "Unidad";
                e.Row.Cells[4].Attributes["data-title"] = "Cantidad";
            }
        }

        protected void btnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                DocumentoBE Documento = new DocumentoBE();
                DocumentoDetalleBE DocumentoDetalle = new DocumentoDetalleBE();
                EntidadDetalleBE EntidadDetalle = new EntidadDetalleBE();
                Documento = (DocumentoBE)Session["Documento"];
                String strRutaFisicaTemporal = "";

                #region Ruta Fisica Temporal
                EntidadDetalle = new EntidadDetalleBE();
                EntidadDetalle.Entidad.IdEntidad = "CONF";
                EntidadDetalle.IdValor = "RUTA_TEMP";
                EntidadDetalle = EntidadDetalleBL.ListarEntidadDetalle(EntidadDetalle)[0];
                strRutaFisicaTemporal = EntidadDetalle.ValorCadena1;
                #endregion

                #region Carátula

                #region Fecha
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000002", chkFecha,
                    hfFechaComentario, null,
                    txtFecha, null, null,
                    Type.GetType("System.DateTime"));
                #endregion

                #endregion

                #region Reporte fotográfico

                #region 01.- REPORTE FOTOGRÁFICO

                #region Foto 1: Fachada del Nodo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000214", chkFachadaNodo,
                    hfFachadaNodoComentario, null, null,
                    hfFachadaNodo, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2: Sala Equipos Panorámica Rack
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000215", chkSalaEquiposPanoramicaRack,
                    hfSalaEquiposPanoramicaRackComentario, null, null,
                    hfSalaEquiposPanoramicaRack, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 3: Panorámica Interior 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000216", chkPanoramicaInterior01,
                    hfPanoramicaInterior01Comentario, null, null,
                    hfPanoramicaInterior01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 4: Panorámica Interior 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000217", chkPanoramicaInterior02,
                    hfPanoramicaInterior02Comentario, null, null,
                    hfPanoramicaInterior02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5: Panorámica de Equipos en Patio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000218", chkPanoramicaEquiposPatio,
                    hfPanoramicaEquiposPatioComentario, null, null,
                    hfPanoramicaEquiposPatio, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6: Breaker Asignado para Seguridad
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000219", chkBreakerAsignadoSeguridad,
                    hfBreakerAsignadoSeguridadComentario, null, null,
                    hfBreakerAsignadoSeguridad, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.01: Cerradura Electromagnética Externa
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000220", chkCerraduraElectromagneticaExterna01,
                    hfCerraduraElectromagneticaExterna01Comentario, null, null,
                    hfCerraduraElectromagneticaExterna01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.02: Cerradura Electromagnética Externa
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000221", chkCerraduraElectromagneticaExterna02,
                    hfCerraduraElectromagneticaExterna02Comentario, null, null,
                    hfCerraduraElectromagneticaExterna02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 8.01: Sensor Magnético Externo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000222", chkSensorMagneticoExterno01,
                    hfSensorMagneticoExterno01Comentario, null, null,
                    hfSensorMagneticoExterno01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 8.02: Sensor Magnético Externo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000223", chkSensorMagneticoExterno02,
                    hfSensorMagneticoExterno02Comentario, null, null,
                    hfSensorMagneticoExterno02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9: Cerradura Eléctrica Externa
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000224", chkCerraduraElectricaExterna,
                    hfCerraduraElectricaExternaComentario, null, null,
                    hfCerraduraElectricaExterna, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10: Sensor Movimiento 90° Externo N°1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000225", chkSensorMovimiento90Externo01,
                    hfSensorMovimiento90Externo01Comentario, null, null,
                    hfSensorMovimiento90Externo01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 11: Sensor Movimiento 90° Externo N°2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000226", chkSensorMovimiento90Externo02,
                    hfSensorMovimiento90Externo02Comentario, null, null,
                    hfSensorMovimiento90Externo02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 12: Sirena Estroboscópica
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000227", chkSirenaEstroboscopica,
                    hfSirenaEstroboscopicaComentario, null, null,
                    hfSirenaEstroboscopica, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 13: Lector Biométrico
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000228", chkLectorBiometrico,
                    hfLectorBiometricoComentario, null, null,
                    hfLectorBiometrico, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 14: Lector Tarjeta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000229", chkLectorTarjeta,
                    hfLectorTarjetaComentario, null, null,
                    hfLectorTarjeta, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 15: Cámara Exterior PTZ
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000230", chkCamaraExteriorPTZ,
                    hfCamaraExteriorPTZComentario, null, null,
                    hfCamaraExteriorPTZ, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 16: Extintor Exterior
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000231", chkExtintorExterior,
                    hfExtintorExteriorComentario, null, null,
                    hfExtintorExterior, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 17.01: Sensor Magnético Interno
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000232", chkSensorMagneticoInterno01,
                    hfSensorMagneticoInterno01Comentario, null, null,
                    hfSensorMagneticoInterno01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 17.02: Sensor Magnético Interno
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000233", chkSensorMagneticoInterno02,
                    hfSensorMagneticoInterno02Comentario, null, null,
                    hfSensorMagneticoInterno02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 18: Sensor Ocupacional
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000234", chkSensorOcupacional,
                    hfSensorOcupacionalComentario, null, null,
                    hfSensorOcupacional, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 19: Sensor de Humo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000235", chkSensorHumo,
                    hfSensorHumoComentario, null, null,
                    hfSensorHumo, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 20: Sensor Movimiento 360
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000236", chkSensorMovimiento360,
                    hfSensorMovimiento360Comentario, null, null,
                    hfSensorMovimiento360, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 21: Sensor de Inundación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000237", chkSensorInundacion,
                    hfSensorInundacionComentario, null, null,
                    hfSensorInundacion, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 22: Cámara PTZ Interior
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000238", chkCamaraPTZInterior,
                    hfCamaraPTZInteriorComentario, null, null,
                    hfCamaraPTZInterior, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 23: Extintor Interior
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000239", chkExtintorInterior,
                    hfExtintorInteriorComentario, null, null,
                    hfExtintorInterior, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 24: Rele (Equipo Interno)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000240", chkReleEquipoInterno,
                    hfReleEquipoInternoComentario, null, null,
                    hfReleEquipoInterno, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 25: Controlador, NVR y Switch POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000241", chkControladorNVRSwitchPOE,
                    hfControladorNVRSwitchPOEComentario, null, null,
                    hfControladorNVRSwitchPOE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 02.- ATERRAMIENTO

                #region Foto 26: Aterramiento Controlador
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000242", chkAterramientoControlador,
                    hfAterramientoControladorComentario, null, null,
                    hfAterramientoControlador, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 27.01: Aterramiento NVR y POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000243", chkAterramientoNVRPOE01,
                    hfAterramientoNVRPOE01Comentario, null, null,
                    hfAterramientoNVRPOE01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 27.02: Aterramiento NVR y POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000244", chkAterramientoNVRPOE02,
                    hfAterramientoNVRPOE02Comentario, null, null,
                    hfAterramientoNVRPOE02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 28: Aterramiento a Barra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000245", chkAterramientoBarra,
                    hfAterramientoBarraComentario, null, null,
                    hfAterramientoBarra, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 03.- SERIE DE EQUIPOS

                #region Foto 29: Serial Number Sensor Movimiento 90° N° 1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000246", chkSerialNumberSensorMovimiento9001,
                    hfSerialNumberSensorMovimiento9001Comentario, null, null,
                    hfSerialNumberSensorMovimiento9001, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 30: Serial Number Sensor Movimiento 90° N° 2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000247", chkSerialNumberSensorMovimiento9002,
                    hfSerialNumberSensorMovimiento9002Comentario, null, null,
                    hfSerialNumberSensorMovimiento9002, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 31.01: Serial Number Switch POE y NVR
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000248", chkSerialNumberSwitchPOENVR01,
                    hfSerialNumberSwitchPOENVR01Comentario, null, null,
                    hfSerialNumberSwitchPOENVR01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 31.02: Serial Number Switch POE y NVR
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000249", chkSerialNumberSwitchPOENVR02,
                    hfSerialNumberSwitchPOENVR02Comentario, null, null,
                    hfSerialNumberSwitchPOENVR02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 32: Serial Number Controlador
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000250", chkSerialNumberControlador,
                    hfSerialNumberControladorComentario, null, null,
                    hfSerialNumberControlador, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 04.- ETIQUETADO

                #region Foto 33: Etiquetado de Equipos en Controlador
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000251", chkEtiquetadoEquiposControlador,
                    hfEtiquetadoEquiposControladorComentario, null, null,
                    hfEtiquetadoEquiposControlador, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 34: Etiquetado de Equipos en NVR
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000252", chkEtiquetadoEquiposNVR,
                    hfEtiquetadoEquiposNVRComentario, null, null,
                    hfEtiquetadoEquiposNVR, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 05.- CHECKLIST

                #region Foto: Checklist
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000253", chkChecklist,
                    hfChecklistComentario, null, null,
                    hfChecklist, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 06.- CAPTURAS DE PANTALLA

                #region Foto 35: Cámara Exterior Modo Normal Posición 1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000254", chkCamaraExteriorModoNormalPosicion01,
                    hfCamaraExteriorModoNormalPosicion01Comentario, null, null,
                    hfCamaraExteriorModoNormalPosicion01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 36: Cámara Exterior Modo Normal Posición 2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000255", chkCamaraExteriorModoNormalPosicion02,
                    hfCamaraExteriorModoNormalPosicion02Comentario, null, null,
                    hfCamaraExteriorModoNormalPosicion02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 37: Cámara Interior Modo Normal
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000256", chkCamaraInteriorModoNormal,
                    hfCamaraInteriorModoNormalComentario, null, null,
                    hfCamaraInteriorModoNormal, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 38: Cámara Interior Modo Infrarojo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000257", chkCamaraInteriorModoInfrarojo,
                    hfCamaraInteriorModoInfrarojoComentario, null, null,
                    hfCamaraInteriorModoInfrarojo, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 07.- CAPTURAS DE PANTALLA TECHNICIAN GUI

                #region Foto 39: Technician Program Alarma Puerta Principal Abierta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000258", chkTechnicianProgramAlarmaPuertaPrincipalAbierta,
                    hfTechnicianProgramAlarmaPuertaPrincipalAbiertaComentario, null, null,
                    hfTechnicianProgramAlarmaPuertaPrincipalAbierta, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 40: Technician Program Alarma Puerta Sala de Equipos Abierta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000259", chkTechnicianProgramAlarmaPuertaSalaEquiposAbierta,
                    hfTechnicianProgramAlarmaPuertaSalaEquiposAbiertaComentario, null, null,
                    hfTechnicianProgramAlarmaPuertaSalaEquiposAbierta, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 41: Technician Program Alarma de Cámara Interna
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000260", chkTechnicianProgramAlarmaCamaraInterna,
                    hfTechnicianProgramAlarmaCamaraInternaComentario, null, null,
                    hfTechnicianProgramAlarmaCamaraInterna, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 42: Technician Program Alarma de Cámara Externa
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000261", chkTechnicianProgramAlarmaCamaraExterna,
                    hfTechnicianProgramAlarmaCamaraExternaComentario, null, null,
                    hfTechnicianProgramAlarmaCamaraExterna, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 43: Technician Program Alarma de Sensor de Aniego
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000262", chkTechnicianProgramAlarmaSensorAniego,
                    hfTechnicianProgramAlarmaSensorAniegoComentario, null, null,
                    hfTechnicianProgramAlarmaSensorAniego, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 44: Technician Program Alarma de Sensor de Humo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000263", chkTechnicianProgramAlarmaSensorHumo,
                    hfTechnicianProgramAlarmaSensorHumoComentario, null, null,
                    hfTechnicianProgramAlarmaSensorHumo, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 45: Technician Program Alarma Tamper Sensor de 90°-1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000264", chkTechnicianProgramAlarmaTamperSensor9001,
                    hfTechnicianProgramAlarmaTamperSensor9001Comentario, null, null,
                    hfTechnicianProgramAlarmaTamperSensor9001, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 46: Technician Program Alarma Movimiento Sensor de 90°-1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000265", chkTechnicianProgramAlarmaMovimientoSensor9001,
                    hfTechnicianProgramAlarmaMovimientoSensor9001Comentario, null, null,
                    hfTechnicianProgramAlarmaMovimientoSensor9001, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 47: Technician Program Alarma Masking Sensor de 90°-1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000266", chkTechnicianProgramAlarmaMaskingSensor9001,
                    hfTechnicianProgramAlarmaMaskingSensor9001Comentario, null, null,
                    hfTechnicianProgramAlarmaMaskingSensor9001, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 48: Technician Program Alarma Tamper Sensor de 90°-2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000267", chkTechnicianProgramAlarmaTamperSensor9002,
                    hfTechnicianProgramAlarmaTamperSensor9002Comentario, null, null,
                    hfTechnicianProgramAlarmaTamperSensor9002, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 49: Technician Program Alarma Movimiento Sensor de 90°-2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000268", chkTechnicianProgramAlarmaMovimientoSensor9002,
                    hfTechnicianProgramAlarmaMovimientoSensor9002Comentario, null, null,
                    hfTechnicianProgramAlarmaMovimientoSensor9002, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 50: Technician Program Alarma Masking Sensor de 90°-2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000269", chkTechnicianProgramAlarmaMaskingSensor9002,
                    hfTechnicianProgramAlarmaMaskingSensor9002Comentario, null, null,
                    hfTechnicianProgramAlarmaMaskingSensor9002, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 51: Technician Program Alarma Tamper Sensor de 360°
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000270", chkTechnicianProgramAlarmaTamperSensor360,
                    hfTechnicianProgramAlarmaTamperSensor360Comentario, null, null,
                    hfTechnicianProgramAlarmaTamperSensor360, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 52: Technician Program Alarma Movimiento Sensor de 360°
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000271", chkTechnicianProgramAlarmaMovimientoSensor360,
                    hfTechnicianProgramAlarmaMovimientoSensor360Comentario, null, null,
                    hfTechnicianProgramAlarmaMovimientoSensor360, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 08.- CAPTURAS DE PING

                #region Foto 53: Ping a la Cámara 1 - Indoor
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000272", chkPingCamara01Indoor,
                    hfPingCamara01IndoorComentario, null, null,
                    hfPingCamara01Indoor, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 54: Ping a la Cámara 2 - Outdoor
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000273", chkPingCamara02Outdoor,
                    hfPingCamara02OutdoorComentario, null, null,
                    hfPingCamara02Outdoor, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 55: Ping al Controlador
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000274", chkPingControlador,
                    hfPingControladorComentario, null, null,
                    hfPingControlador, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 56: Ping al Gateway
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000275", chkPingGateway,
                    hfPingGatewayComentario, null, null,
                    hfPingGateway, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 57: Ping al NVR
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000276", chkPingNVR,
                    hfPingNVRComentario, null, null,
                    hfPingNVR, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 58: Ping al Biométrico
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000277", chkPingBiometrico,
                    hfPingBiometricoComentario, null, null,
                    hfPingBiometrico, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #endregion

                #region Materiales

                #region Equipamientos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000083", chkEquipamientos, hfEquipamientosComentario);
                //List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();
                //lstDocumentoEquipamiento = (List<DocumentoEquipamientoBE>)Session["Equipamientos"];

                //foreach (GridViewRow item in gvEquipamientos.Rows)
                //{
                //    String strCodigoEquipamiento = gvEquipamientos.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamiento");
                //    lstDocumentoEquipamiento.Where(w => w.Equipamiento.IdValor == strCodigoEquipamiento).ToList().ForEach(s => s.SerieEquipamiento = txtSerieEquipamiento.Text.ToUpper());
                //}

                //Documento.Equipamientos = lstDocumentoEquipamiento;
                #endregion

                #region Materiales
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000026", chkMateriales,
                    hfMaterialesComentario);
                List<DocumentoMaterialBE> lstDocumentoMaterial = new List<DocumentoMaterialBE>();
                lstDocumentoMaterial = (List<DocumentoMaterialBE>)Session["Materiales"];

                foreach (GridViewRow item in gvMateriales.Rows)
                {
                    String strCodigoMaterial = gvMateriales.DataKeys[item.RowIndex]["Material_IdValor"].ToString();
                    TextBox txtCantidad = (TextBox)item.FindControl("txtCantidad");
                    Double dblCantidad;
                    if (txtCantidad.Text.Equals(""))
                        dblCantidad = 0;
                    else
                        dblCantidad = Convert.ToDouble(txtCantidad.Text);
                    lstDocumentoMaterial.Where(w => w.Material.IdValor == strCodigoMaterial).ToList().ForEach(s => s.Cantidad = dblCantidad);
                }

                Documento.Materiales = lstDocumentoMaterial;
                #endregion

                #endregion

                #region ATP

                #region Extinguidor Externo Fecha Expiración
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000278", chkExtinguidorExternoFechaExpiracion,
                    hfExtinguidorExternoFechaExpiracionComentario, null,
                    txtExtinguidorExternoFechaExpiracion, null, null,
                    Type.GetType("System.DateTime"));
                #endregion

                #region Extinguidor Interno Fecha Expiración
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000279", chkExtinguidorInternoFechaExpiracion,
                    hfExtinguidorInternoFechaExpiracionComentario, null,
                    txtExtinguidorInternoFechaExpiracion, null, null,
                    Type.GetType("System.DateTime"));
                #endregion

                #endregion

                #region Usuario Creacion y modificacion
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                Documento.Detalles.ForEach(i =>
                {
                    i.UsuarioCreacion = Usuario;
                    i.UsuarioModificacion = Usuario;
                });
                //Documento.Equipamientos.ForEach(i =>
                //{
                //    i.UsuarioCreacion = Usuario;
                //    i.UsuarioModificacion = Usuario;
                //});
                Documento.Materiales.ForEach(i =>
                {
                    i.UsuarioCreacion = Usuario;
                    i.UsuarioModificacion = Usuario;
                });
                //Documento.MedicionesEnlacePropagacion.ForEach(i =>
                //{
                //    i.UsuarioCreacion = Usuario;
                //    i.UsuarioModificacion = Usuario;
                //});
                #endregion

                #region Guardar documento
                if (Session["metodo"].Equals("I"))
                    DocumentoBL.InsertarDocumento(Documento);
                else if (Session["metodo"].Equals("U"))
                    DocumentoBL.ActualizarDocumento(Documento);
                #endregion

                #region Enviar mail observaciones
                if (Usuario.Perfil.IdValor.Equals("000001"))
                    DocumentoBL.EnviarEmailObservaciones(Documento);
                #endregion

                #region Asignamos el metodo
                Session["metodo"] = "U";//Update
                #endregion

                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-success','#lblAlertTitle','Completado','#lblAlertBody','El documento se ha guardado correctamente.',true,true);", true);
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','#divAlertHeader','modal-header-danger','#lblAlertTitle','Error','#lblAlertBody','" + ex.Message.Replace("'", "\\'").Replace("\r", "\\r").Replace("\n", "\\n") + "',true,true);", true);
            }

        }

    }
}