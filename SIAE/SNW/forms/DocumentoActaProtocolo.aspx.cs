using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;
using System.IO;

namespace SNW.forms
{
    public partial class DocumentoActaProtocolo : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = Documento.Tarea.Sector.Equals(0) ? "000002" : "000001";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    #endregion

                    #region Listar frecuencia
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "FREC_DOC";
                    UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlFrecuencia, "IdValor", "ValorCadena1", null);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 1: Configuration/Radio
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000001",
                        imgConfigurationRadioEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 2: Configuration/QoS
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000002",
                        imgConfigurationQoSEEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 3.01: Configuration/System
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000003",
                        imgConfigurationSystem01Ejemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 3.02: Configuration/System
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000004",
                        imgConfigurationSystem02Ejemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 4: Monitor/System
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000005",
                        imgMonitorSystemEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 5.01: Monitor/Wireless
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000006",
                        imgMonitorWireless01Ejemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 5.02: Monitor/Wireless
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000007",
                        imgMonitorWireless02Ejemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 6: Tools/Wireless link test
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000008",
                        imgToolsWirelessEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Capt 6: Pantalla Home
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000009",
                        imgPantallaHomeEjemplo);
                    #endregion

                    //#region Listar tipo equipamiento
                    //entidadDetalleBE = new EntidadDetalleBE();
                    //entidadDetalleBE.Entidad.IdEntidad = "TIP_EQUI_INS";
                    ////entidadDefecto.IdValor = "";
                    ////entidadDefecto.ValorCadena1 = "--SELECCIONAR--";
                    //UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlTipoFuente, "IdValor", "ValorCadena1", null);
                    //#endregion

                    #region Listar Equipamiento
                    //List<EntidadDetalleBE> lstEquipamiento = new List<EntidadDetalleBE>();
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();
                    //entidadDetalleBE = new EntidadDetalleBE();
                    //entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    ////entidadDetalleBE.IdValor = "000001";
                    //entidadDetalleBE.IdValor = Documento.Documento.IdValor;
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

                    #region Listar Materiales
                    List<EntidadDetalleBE> lstMaterial = new List<EntidadDetalleBE>();
                    List<DocumentoMaterialBE> lstDocumentoMaterial = new List<DocumentoMaterialBE>();
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    entidadDetalleBE.IdValor = "000001";
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

                    #region Obtenemos el valor para la imagen de ejemplo del SFTP
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000010",
                        imgSFTPEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Panorámica Estacion A
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000011",
                        imgPanoramicaEstacionAEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Posición Antena Instalada
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000012",
                        imgPosicionAntenaEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Antena ODU Torre
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000013",
                        imgAntenaODUEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de UGPS
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000014",
                        imgUGPSEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Engrasado Perno
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000015",
                        imgEngrasadoPernoEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Siliconeado Etiquetado Conector
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000016",
                        imgSiliconeadoEtiquetadoConectorEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Recorrido Cable SFTP
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000018",
                        imgRecorridoCableSFTPEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Aterramiento Cable SFTP Outdoor
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000019",
                        imgAterramientoCableSFTPOutdoorEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Aterramiento Cable SFTP Indoor
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000020",
                        imgAterramientoCableSFTPIndoorEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Etiquetado POE
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000021",
                        imgEtiquetadoPOEEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Panorámica Rack
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000022",
                        imgPanoramicaRackEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Aterramiento POE
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000023",
                        imgAterramientoPOEEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Emergencia POE Etiqueta 01
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000024",
                        imgEmergenciaPOEEtiqueta01Ejemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Emergencia POE Etiqueta 02
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000025",
                        imgEmergenciaPOEEtiqueta02Ejemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Patch Core Salida POE
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000026",
                        imgPatchCoreSalidaPOEEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Patch Core Salida Switch
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000027",
                        imgPatchCoreSalidaSwitchEjemplo);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Serie POE
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000028",
                        imgSeriePOEEjemplo);
                    #endregion

                    #region Foto 17: Serie POE
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "ICD001578", 1, lblSeriePOE);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Serie AP
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000029",
                        imgSerieAPEjemplo);
                    #endregion

                    #region Foto 18: Serie AP
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "ICA0064", 1, lblSerieAP);
                    #endregion

                    #region Obtenemos el valor para la imagen de ejemplo de Serie Antena
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000030",
                        imgSerieAntenaEjemplo);
                    #endregion

                    #region Foto 19: Serie Antena
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "ICA0063;ICA0065;ICA0093", 1, lblSerieAntena);
                    #endregion

                    #region Listar 6.3 Mediciones de enlaces de propagación

                    List<PMPDetalleBE> lstPMPDetalle = new List<PMPDetalleBE>();
                    List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacion = new List<DocumentoMedicionEnlacePropagacionBE>();
                    PMPDetalleBE PMPDetalle = new PMPDetalleBE();
                    PMPDetalle.PMP.Nodo.IdNodo = Tarea.NodoIIBBA.IdNodo;
                    PMPDetalle.SectorIIBB = Tarea.Sector;
                    lstPMPDetalle = PMPDetalleBL.ListarPMPDetalles(PMPDetalle);
                    foreach (PMPDetalleBE item in lstPMPDetalle)
                    {
                        DocumentoMedicionEnlacePropagacionBE MedicionEnlacePropagacion = new DocumentoMedicionEnlacePropagacionBE();
                        MedicionEnlacePropagacion.Documento = Documento;
                        MedicionEnlacePropagacion.NodoA = item.PMP.Nodo;
                        MedicionEnlacePropagacion.NodoIIBBB.IdNodo = item.InstitucionBeneficiaria.IdInstitucionBeneficiaria;
                        lstMedicionEnlacePropagacion.Add(MedicionEnlacePropagacion);
                    }
                    Session["MedicionesEnlacePropagacion"] = lstMedicionEnlacePropagacion;
                    gvMedicionEnlacePropagacion.DataSource = lstMedicionEnlacePropagacion;
                    gvMedicionEnlacePropagacion.DataBind();
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

                        #region Titulo
                        #region Frecuencia
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000001").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFrecuencia,
                            hfFrecuenciaComentario, ddlFrecuencia, null, null);
                        #endregion

                        #region Fecha
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000002").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFecha,
                            hfFechaComentario, null,
                            txtFecha, null, null,
                            Type.GetType("System.DateTime"));
                        #endregion

                        #endregion

                        #region 1 Configuración y Pruebas

                        #region Dirección
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000003").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDireccion,
                            hfDireccionComentario, null,
                            txtDireccion, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Latitud
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000004").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLatitud,
                            hfLatitudComentario, null,
                            txtLatitud, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Longitud
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000005").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLongitud,
                            hfLongitudComentario, null,
                            txtLongitud, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Altitud
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000006").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAltitud,
                            hfAltitudComentario, null,
                            txtAltitud, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Azimut
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000007").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAzimut,
                            hfAzimutComentario, null,
                            txtAzimut, null, null,
                            Type.GetType("System.Int32"));

                        #endregion

                        #region Down Tilt
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000008").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDownTilt,
                            hfDownTiltComentario, null,
                            txtDownTilt, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Altura Instalada
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000009").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAlturaInstalada,
                            hfAlturaInstaladaComentario, null,
                            txtAlturaInstalada, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Capacidad Enlace
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000010").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCapacidadEnlace,
                            hfCapacidadEnlaceComentario, null,
                            txtCapacidadEnlace, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Eficiencia Enlace
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000011").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEficienciaEnlace,
                            hfEficienciaEnlaceComentario, null,
                            txtEficienciaEnlace, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Capt 1: Configuration/Radio
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000012").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationRadio,
                            hfConfigurationRadioComentario, null, null,
                            hfConfigurationRadio, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));

                        #endregion

                        #region Capt 2: Configuration/QoS
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000013").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationQoS,
                            hfConfigurationQoSComentario, null, null,
                            hfConfigurationQoS, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 3.01: Configuration/System
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000014").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationSystem01,
                            hfConfigurationSystem01Comentario, null, null,
                            hfConfigurationSystem01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 3.02: Configuration/System
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000015").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationSystem02,
                            hfConfigurationSystem02Comentario, null, null,
                            hfConfigurationSystem02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 4: Monitor/System
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000016").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMonitorSystem,
                            hfMonitorSystemComentario, null, null,
                            hfMonitorSystem, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 5.01: Monitor/Wireless
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000017").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMonitorWireless01,
                            hfMonitorWireless01Comentario, null, null,
                            hfMonitorWireless01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 5.02: Monitor/Wireless
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000018").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMonitorWireless02,
                            hfMonitorWireless02Comentario, null, null,
                            hfMonitorWireless02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 6: Tools/Wireless link test
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000019").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkToolsWireless,
                            hfToolsWirelessComentario, null, null,
                            hfToolsWireless, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Capt 7: Pantalla Home
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000019").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPantallaHome,
                            hfPantallaHomeComentario, null, null,
                            hfPantallaHome, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 2 Materiales AP

                        //#region Tipo Fuente
                        //DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000024").Select(dd => dd).First();
                        //UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTipoFuente,
                        //    hfTipoFuenteComentario, ddlTipoFuente, null, null);
                        //#endregion

                        #region Equipamientos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000083").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEquipamientos,
                            hfEquipamientosComentario);
                        //DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                        //DocumentoEquipamiento.Documento = Documento;
                        //lstDocumentoEquipamiento = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                        //Session["Equipamientos"] = lstDocumentoEquipamiento;

                        //gvEquipamientos.DataSource = lstDocumentoEquipamiento;
                        //gvEquipamientos.DataBind();

                        //Documento.Equipamientos = lstDocumentoEquipamiento;
                        #endregion

                        #region Materiales
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000026").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkMateriales,
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

                        #region 3 SFTP

                        #region Distancia B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000027").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkB,
                            hfBComentario, null, txtB, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia C
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000028").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkC,
                            hfCComentario, null, txtC, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia D
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000029").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkD,
                            hfDComentario, null, txtD, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia E
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000030").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkE, hfEComentario, null, txtE, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #endregion

                        #region 7 Reporte Fotográfico

                        #region Foto 1: Panorámica Estacion A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000031").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaEstacionA,
                            hfPanoramicaEstacionAComentario, null, null,
                            hfPanoramicaEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 2: Posición Antena Instalada
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000032").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPosicionAntena,
                            hfPosicionAntenaComentario, null, null,
                            hfPosicionAntena, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 3: Antena ODU Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000033").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAntenaODU,
                            hfAntenaODUComentario, null, null,
                            hfAntenaODU, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 4: UGPS
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000034").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkUGPS,
                            hfUGPSComentario, null, null,
                            hfUGPS, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 5: Engrasado Perno
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000035").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEngrasadoPerno,
                            hfEngrasadoPernoComentario, null, null,
                            hfEngrasadoPerno, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 6: Siliconeado Etiquetado Conector
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000036").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSiliconeadoEtiquetadoConector,
                            hfSiliconeadoEtiquetadoConectorComentario, null, null,
                            hfSiliconeadoEtiquetadoConector, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 8: Recorrido Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000038").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkRecorridoCableSFTP,
                            hfRecorridoCableSFTPComentario, null, null,
                            hfRecorridoCableSFTP, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 9: Aterramiento Cable SFTP Outdoor
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000039").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoCableSFTPOutdoor,
                            hfAterramientoCableSFTPOutdoorComentario, null, null,
                            hfAterramientoCableSFTPOutdoor, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 10: Aterramiento Cable SFTP Indoor
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000040").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoCableSFTPIndoor,
                            hfAterramientoCableSFTPIndoorComentario, null, null,
                            hfAterramientoCableSFTPIndoor, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 11: Etiquetado POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000041").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEtiquetadoPOE,
                            hfEtiquetadoPOEComentario, null, null,
                            hfEtiquetadoPOE, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 12: Panorámica Rack
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000042").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaRack,
                            hfPanoramicaRackComentario, null, null,
                            hfPanoramicaRack, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 13: Aterramiento POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000043").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoPOE,
                            hfAterramientoPOEComentario, null, null,
                            hfAterramientoPOE, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 14.01: Emergencia POE Etiqueta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000044").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEmergenciaPOEEtiqueta01,
                            hfEmergenciaPOEEtiqueta01Comentario, null, null,
                            hfEmergenciaPOEEtiqueta01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 14.02: Emergencia POE Etiqueta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000045").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEmergenciaPOEEtiqueta02,
                            hfEmergenciaPOEEtiqueta02Comentario, null, null,
                            hfEmergenciaPOEEtiqueta02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 15: Patch Core Salida POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000046").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPatchCoreSalidaPOE,
                            hfPatchCoreSalidaPOEComentario, null, null,
                            hfPatchCoreSalidaPOE, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 16: Patch Core Salida Switch
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000047").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPatchCoreSalidaSwitch,
                            hfPatchCoreSalidaSwitchComentario, null, null,
                            hfPatchCoreSalidaSwitch, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 17: Serie POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000048").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSeriePOE,
                            hfSeriePOEComentario, null, null,
                            hfSeriePOE, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 18: Serie AP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000049").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieAP,
                            hfSerieAPComentario, null, null,
                            hfSerieAP, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 19: Serie Antena
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000050").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieAntena,
                            hfSerieAntenaComentario, null, null,
                            hfSerieAntena, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 8 Datos Generales del Nodo

                        #region # Serie ODU
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000051").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSerieODU, hfSerieODUComentario,
                            null, txtSerieODU,
                            null, null, Type.GetType("System.String"));
                        #endregion

                        #region # Serie Antena
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000052").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieNodoAntena,
                            hfSerieNodoAntenaComentario, null, txtSerieNodoAntena,
                            null, null, Type.GetType("System.String"));
                        #endregion

                        #region Mediciones de Enlaces de Propagación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000053").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkMedicionEnlacePropagacion,
                            hfMedicionEnlacePropagacionComentario);
                        DocumentoMedicionEnlacePropagacionBE DocumentoMedicionEnlacePropagacion = new DocumentoMedicionEnlacePropagacionBE();
                        DocumentoMedicionEnlacePropagacion.Documento = Documento;
                        DocumentoMedicionEnlacePropagacion.NodoA.IdNodo= Tarea.NodoIIBBA.IdNodo;
                        lstMedicionEnlacePropagacion = DocumentoMedicionEnlacePropagacionBL.ListarDocumentoMedicionEnlacePropagacion(DocumentoMedicionEnlacePropagacion);

                        Session["MedicionesEnlacePropagacion"] = lstMedicionEnlacePropagacion;

                        gvMedicionEnlacePropagacion.DataSource = lstMedicionEnlacePropagacion;
                        gvMedicionEnlacePropagacion.DataBind();

                        Documento.MedicionesEnlacePropagacion = lstMedicionEnlacePropagacion;

                        #endregion

                        #region Asignamos el metodo
                        Session["metodo"] = "U";//Update
                        #endregion

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

        protected void gvMedicionEnlacePropagacion_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Local";
                e.Row.Cells[1].Attributes["data-title"] = "Remoto";
                e.Row.Cells[2].Attributes["data-title"] = "RSS Local (dBm)";
                e.Row.Cells[3].Attributes["data-title"] = "RSS Remoto (dBm)";
                e.Row.Cells[4].Attributes["data-title"] = "Tiempo Promedio (ms)";
                e.Row.Cells[5].Attributes["data-title"] = "Capacidad Subida (Mbps)";
                e.Row.Cells[6].Attributes["data-title"] = "Capacidad Bajada (Mbps)";
                //e.Row.Cells[5].Attributes["data-title"] = "Acciones";

            }
        }

        protected void gvEquipamientos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Descripción";
                e.Row.Cells[2].Attributes["data-title"] = "Unidad";
                e.Row.Cells[3].Attributes["data-title"] = "N° Serie";
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

                #region Titulo
                #region Frecuencia
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000001", chkFrecuencia,
                    hfFrecuenciaComentario, ddlFrecuencia, null, null);
                #endregion

                #region Fecha
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000002", chkFecha,
                    hfFechaComentario, null,
                    txtFecha, null, null,
                    Type.GetType("System.DateTime"));
                //DocumentoDetalle = new DocumentoDetalleBE();
                //DocumentoDetalle.Documento = Documento;
                //DocumentoDetalle.Campo.IdValor = "000002";
                //DocumentoDetalle.Aprobado = chkFecha.Checked;
                //if (!txtFecha.Text.Equals(""))
                //    DocumentoDetalle.ValorFecha = Convert.ToDateTime(txtFecha.Text);
                //Documento.Detalles.Add(DocumentoDetalle.Clone());
                #endregion
                #endregion

                #region 1 Configuración y Pruebas
                #region Dirección
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000003", chkDireccion,
                    hfDireccionComentario, null,
                    txtDireccion, null, null,
                    Type.GetType("System.String"));
                //DocumentoDetalle = new DocumentoDetalleBE();
                //DocumentoDetalle.Documento = Documento;
                //DocumentoDetalle.Campo.IdValor = "000003";
                //DocumentoDetalle.Aprobado = chkDireccion.Checked;
                //DocumentoDetalle.ValorCadena = txtDireccion.Text.ToUpper();
                //Documento.Detalles.Add(DocumentoDetalle.Clone());
                #endregion

                #region Latitud
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000004", chkLatitud,
                    hfLatitudComentario, null,
                    txtLatitud, null, null,
                    Type.GetType("System.Double"));
                //DocumentoDetalle = new DocumentoDetalleBE();
                //DocumentoDetalle.Documento = Documento;
                //DocumentoDetalle.Campo.IdValor = "000004";
                //DocumentoDetalle.Aprobado = chkLatitud.Checked;
                //if (!txtLatitud.Text.Equals(""))
                //    DocumentoDetalle.ValorNumerico = Convert.ToDouble(txtLatitud.Text);
                //Documento.Detalles.Add(DocumentoDetalle.Clone());
                #endregion

                #region Longitud
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000005", chkLongitud,
                    hfLongitudComentario, null,
                    txtLongitud, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Altitud
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000006", chkAltitud,
                    hfAltitudComentario, null,
                    txtAltitud, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Azimut
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000007", chkAzimut,
                    hfAzimutComentario, null,
                    txtAzimut, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Down Tilt
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000008", chkDownTilt,
                    hfDownTiltComentario, null,
                    txtDownTilt, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Altura Instalada
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000009", chkAlturaInstalada,
                    hfAlturaInstaladaComentario, null,
                    txtAlturaInstalada, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Capacidad Enlace
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000010", chkCapacidadEnlace,
                    hfCapacidadEnlaceComentario, null,
                    txtCapacidadEnlace, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Eficiencia Enlace
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000011", chkEficienciaEnlace,
                    hfEficienciaEnlaceComentario, null,
                    txtEficienciaEnlace, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Capt 1: Configuration/Radio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000012", chkConfigurationRadio,
                    hfConfigurationRadioComentario, null, null,
                    hfConfigurationRadio, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));

                #endregion

                #region Capt 2: Configuration/QoS
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000013", chkConfigurationQoS,
                    hfConfigurationQoSComentario, null, null,
                    hfConfigurationQoS, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));

                #endregion

                #region Capt 3.01: Configuration/System
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000014", chkConfigurationSystem01,
                    hfConfigurationSystem01Comentario, null, null,
                    hfConfigurationSystem01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Capt 3.02: Configuration/System
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000015", chkConfigurationSystem02,
                    hfConfigurationSystem02Comentario, null, null,
                    hfConfigurationSystem02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Capt 4: Monitor/System
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000016", chkMonitorSystem,
                    hfMonitorSystemComentario, null, null,
                    hfMonitorSystem, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Capt 5.01: Monitor/Wireless
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000017", chkMonitorWireless01,
                    hfMonitorWireless01Comentario, null, null,
                    hfMonitorWireless01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Capt 5.02: Monitor/Wireless
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000018", chkMonitorWireless02,
                    hfMonitorWireless02Comentario, null, null,
                    hfMonitorWireless02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Capt 6: Tools/Wireless link test
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000019", chkToolsWireless,
                    hfToolsWirelessComentario, null, null,
                    hfToolsWireless, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Capt 7: Pantalla Home
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000020", chkPantallaHome,
                    hfPantallaHomeComentario, null, null,
                    hfPantallaHome, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion
                #endregion

                #region 2 Materiales AP
                #region # Serie Terminal AP
                //UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                //    Documento, "000021", chkSerieTerminalAP, null, txtSerieTerminalAP, null, null,
                //    Type.GetType("System.String"));
                #endregion

                #region # Serie Antena Sectorial
                //UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                //    Documento, "000022", chkSerieAntenaSectorial, null, txtSerieAntenaSectorial, null, null,
                //    Type.GetType("System.String"));
                #endregion

                #region # Serie Terminal GPS
                //UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                //    Documento, "000023", chkSerieTerminalGPS, null, txtSerieTerminalGPS,
                //    null, null,Type.GetType("System.String"));
                #endregion

                //#region Tipo Fuente
                //UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                //    Documento, "000024", chkTipoFuente,
                //    hfTipoFuenteComentario, ddlTipoFuente, null, null);
                //#endregion

                #region # Serie Fuente
                //UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                //    Documento, "000025", chkSerieFuente, null, txtSerieFuente,
                //    null, null, Type.GetType("System.String"));
                #endregion

                #region Equipamientos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000083", chkEquipamientos, hfEquipamientosComentario);
                //List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();
                //lstDocumentoEquipamiento = (List<DocumentoEquipamientoBE>)Session["Equipamientos"];

                //foreach (GridViewRow item in gvEquipamientos.Rows)
                //{
                //    String strCodigoEquipamiento = gvEquipamientos.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamiento");
                //    //String strSerieEquipamiento;
                //    //if (txtCantidad.Text.Equals(""))
                //    //    intCantidad = 0;
                //    //else
                //    //    intCantidad = Convert.ToInt32(txtCantidad.Text);
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
                    //String strCodigoMaterial = item.Cells[2].Text;
                    String strCodigoMaterial = gvMateriales.DataKeys[item.RowIndex]["Material_IdValor"].ToString();
                    TextBox txtCantidad = (TextBox)item.FindControl("txtCantidad");
                    Int32 intCantidad;
                    if (txtCantidad.Text.Equals(""))
                        intCantidad = 0;
                    else
                        intCantidad = Convert.ToInt32(txtCantidad.Text);
                    lstDocumentoMaterial.Where(w => w.Material.IdValor == strCodigoMaterial).ToList().ForEach(s => s.Cantidad = intCantidad);
                }

                Documento.Materiales = lstDocumentoMaterial;
                #endregion

                #endregion

                #region 3 SFTP

                #region Distancia B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000027", chkB, hfBComentario, null, txtB, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia C
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000028", chkC, hfCComentario, null, txtC, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia D
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000029", chkD, hfDComentario, null, txtD, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia E
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000030", chkE, hfEComentario, null, txtE, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #region 7 Reporte Fotográfico

                #region Foto 1: Panorámica Estacion A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000031", chkPanoramicaEstacionA,
                    hfPanoramicaEstacionAComentario, null, null,
                    hfPanoramicaEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2: Posición Antena Instalada
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000032", chkPosicionAntena,
                    hfPosicionAntenaComentario, null, null,
                    hfPosicionAntena, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 3: Antena ODU Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000033", chkAntenaODU,
                    hfAntenaODUComentario, null, null,
                    hfAntenaODU, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 4: UGPS
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000034", chkUGPS,
                    hfUGPSComentario, null, null,
                    hfUGPS, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5: Engrasado Perno
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000035", chkEngrasadoPerno,
                    hfEngrasadoPernoComentario, null, null,
                    hfEngrasadoPerno, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6: Siliconeado Etiquetado Conector
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000036", chkSiliconeadoEtiquetadoConector,
                    hfSiliconeadoEtiquetadoConectorComentario, null, null,
                    hfSiliconeadoEtiquetadoConector, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 8: Recorrido Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000038", chkRecorridoCableSFTP,
                    hfRecorridoCableSFTPComentario, null, null,
                    hfRecorridoCableSFTP, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9: Aterramiento Cable SFTP Outdoor
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000039", chkAterramientoCableSFTPOutdoor,
                    hfAterramientoCableSFTPOutdoorComentario, null, null,
                    hfAterramientoCableSFTPOutdoor, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10: Aterramiento Cable SFTP Indoor
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000040", chkAterramientoCableSFTPIndoor,
                    hfAterramientoCableSFTPIndoorComentario, null, null,
                    hfAterramientoCableSFTPIndoor, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 11: Etiquetado POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000041", chkEtiquetadoPOE,
                    hfEtiquetadoPOEComentario, null, null,
                    hfEtiquetadoPOE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 12: Panorámica Rack
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000042", chkPanoramicaRack,
                    hfPanoramicaRackComentario, null, null,
                    hfPanoramicaRack, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 13: Aterramiento POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000043", chkAterramientoPOE,
                    hfAterramientoPOEComentario, null, null,
                    hfAterramientoPOE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 14.01: Emergencia POE Etiqueta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000044", chkEmergenciaPOEEtiqueta01,
                    hfEmergenciaPOEEtiqueta01Comentario, null, null,
                    hfEmergenciaPOEEtiqueta01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 14.02: Emergencia POE Etiqueta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000045", chkEmergenciaPOEEtiqueta02,
                    hfEmergenciaPOEEtiqueta02Comentario, null, null,
                    hfEmergenciaPOEEtiqueta02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 15: Patch Core Salida POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000046", chkPatchCoreSalidaPOE,
                    hfPatchCoreSalidaPOEComentario, null, null,
                    hfPatchCoreSalidaPOE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 16: Patch Core Salida Switch
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000047", chkPatchCoreSalidaSwitch,
                    hfPatchCoreSalidaSwitchComentario, null, null,
                    hfPatchCoreSalidaSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 17: Serie POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000048", chkSeriePOE,
                    hfSeriePOEComentario, null, null,
                    hfSeriePOE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 18: Serie AP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000049", chkSerieAP,
                    hfSerieAPComentario, null, null,
                    hfSerieAP, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 19: Serie Antena
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000050", chkSerieAntena,
                    hfSerieAntenaComentario, null, null,
                    hfSerieAntena, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 8 Datos Generales del Nodo
                #region # Serie ODU
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000051", chkSerieODU, hfSerieODUComentario,
                    null, txtSerieODU,
                    null, null, Type.GetType("System.String"));
                #endregion

                #region # Serie Antena
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000052", chkSerieNodoAntena,
                    hfSerieNodoAntenaComentario, null, txtSerieNodoAntena,
                    null, null, Type.GetType("System.String"));
                #endregion

                #region Mediciones de Enlaces de Propagación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000053", chkMedicionEnlacePropagacion,
                    hfMedicionEnlacePropagacionComentario);
                List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacion = new List<DocumentoMedicionEnlacePropagacionBE>();
                lstMedicionEnlacePropagacion = (List<DocumentoMedicionEnlacePropagacionBE>)Session["MedicionesEnlacePropagacion"];

                foreach (GridViewRow item in gvMedicionEnlacePropagacion.Rows)
                {
                    String strIdNodo = gvMedicionEnlacePropagacion.DataKeys[item.RowIndex]["NodoA_IdNodo"].ToString();
                    String strIdIIBB = gvMedicionEnlacePropagacion.DataKeys[item.RowIndex]["NodoIIBBB_IdNodo"].ToString();
                    TextBox txtRSSLocal = (TextBox)item.FindControl("txtRSSLocal");
                    TextBox txtRSSRemoto = (TextBox)item.FindControl("txtRSSRemoto");
                    TextBox txtTiempoPromedio = (TextBox)item.FindControl("txtTiempoPromedio");
                    TextBox txtCapacidadSubida = (TextBox)item.FindControl("txtCapacidadSubida");
                    TextBox txtCapacidadBajada = (TextBox)item.FindControl("txtCapacidadBajada");

                    Double dblRSSLocal, dblRSSRemoto, dblCapacidadSubida, dblCapacidadBajada;
                    Int32 intTiempoPromedio;
                    if (txtRSSLocal.Text.Equals(""))
                        dblRSSLocal = 0;
                    else
                        dblRSSLocal = Convert.ToDouble(txtRSSLocal.Text);
                    if (txtRSSRemoto.Text.Equals(""))
                        dblRSSRemoto = 0;
                    else
                        dblRSSRemoto = Convert.ToDouble(txtRSSRemoto.Text);
                    if (txtTiempoPromedio.Text.Equals(""))
                        intTiempoPromedio = 0;
                    else
                        intTiempoPromedio = Convert.ToInt32(txtTiempoPromedio.Text);
                    if (txtCapacidadSubida.Text.Equals(""))
                        dblCapacidadSubida = 0;
                    else
                        dblCapacidadSubida = Convert.ToDouble(txtCapacidadSubida.Text);
                    if (txtCapacidadBajada.Text.Equals(""))
                        dblCapacidadBajada = 0;
                    else
                        dblCapacidadBajada = Convert.ToDouble(txtCapacidadBajada.Text);
                    lstMedicionEnlacePropagacion.Where(w => w.NodoA.IdNodo == strIdNodo && w.NodoIIBBB.IdNodo == strIdIIBB).ToList().ForEach(s =>
                    {
                        s.RSSLocal = dblRSSLocal;
                        s.RSSRemoto = dblRSSRemoto;
                        s.TiempoPromedio = intTiempoPromedio;
                        s.CapidadSubida = dblCapacidadSubida;
                        s.CapidadBajada = dblCapacidadBajada;
                    });
                }

                Documento.MedicionesEnlacePropagacion = lstMedicionEnlacePropagacion;
                #endregion

                #endregion

                #region Usuario Creacion y modificacion
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                Documento.Detalles.ForEach(i =>
                {
                    i.UsuarioCreacion = Usuario;
                    i.UsuarioModificacion = Usuario;
                });
                Documento.Equipamientos.ForEach(i =>
                {
                    i.UsuarioCreacion = Usuario;
                    i.UsuarioModificacion = Usuario;
                });
                Documento.Materiales.ForEach(i =>
                {
                    i.UsuarioCreacion = Usuario;
                    i.UsuarioModificacion = Usuario;
                });
                Documento.MedicionesEnlacePropagacion.ForEach(i =>
                {
                    i.UsuarioCreacion = Usuario;
                    i.UsuarioModificacion = Usuario;
                });
                #endregion

                #region Guardar documento
                if (Session["metodo"].Equals("I"))
                    DocumentoBL.InsertarDocumento(Documento);
                else if (Session["metodo"].Equals("U"))
                    DocumentoBL.ActualizarDocumento(Documento);
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