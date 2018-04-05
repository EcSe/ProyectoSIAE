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
    public partial class DocumentoInstalacionPozoTierra : System.Web.UI.Page
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

                    #region POZO A TIERRA 5 Ohm

                    #region 1. Fotografía frontal de la IIBB

                    #region Frontal de la IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000300",
                        imgPT5FrontalIIBBEjemplo);
                    #endregion

                    #endregion

                    #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

                    #region Ubicación del pozo a Tierra Antes de ser Instalado (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000301",
                        imgPT5UbicacionPTAntesInstalacionEjemplo);
                    #endregion

                    #endregion

                    #region 3. Fotografía de instalación de pozo a tierra

                    #region Panoramica de la zanja abierta (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000302",
                        imgPT5InstalacionPTPanoramicaZanjaAbiertaEjemplo);
                    #endregion

                    #region Panorámica Vertido de Tierra Cultivo cernida en Zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000303",
                        imgPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo);
                    #endregion

                    #region Panorámica del vertido de la sal granulada en la zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000304",
                        imgPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo);
                    #endregion

                    #region Panorámica Vertido de la Disolución del Cemento Conductivo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000305",
                        imgPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo);
                    #endregion

                    #region Panorámica de la Colocación del Fleje de Cobre 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000306",
                        imgPT5InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo);
                    #endregion

                    #region Panorámica de la Colocación del Fleje de Cobre 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000307",
                        imgPT5InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo);
                    #endregion

                    #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000308",
                        imgPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo);
                    #endregion

                    #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000309",
                        imgPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo);
                    #endregion

                    #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000310",
                        imgPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo);
                    #endregion

                    #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000311",
                        imgPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo);
                    #endregion

                    #endregion

                    #region 4. Fotografía de medición del pozo a tierra

                    #region MEDICION 1:Foto panorámica de medición de pozo a tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000312",
                        imgPT5MedicionPTPanoramicaMedicionPT01Ejemplo);
                    #endregion

                    #region MEDICION 2:Foto panorámica de medición de pozo a tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000313",
                        imgPT5MedicionPTPanoramicaMedicionPT02Ejemplo);
                    #endregion

                    #region MEDICION 3:Foto panorámica de medición de pozo a tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000314",
                        imgPT5MedicionPTPanoramicaMedicionPT03Ejemplo);
                    #endregion

                    #endregion

                    #endregion

                    #region POZO A TIERRA 10 Ohm

                    #region 1. Fotografía frontal de la IIBB

                    #region Frontal de la IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000300",
                        imgPT10FrontalIIBBEjemplo);
                    #endregion

                    #endregion

                    #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

                    #region Ubicación del pozo a Tierra Antes de ser Instalado (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000301",
                        imgPT10UbicacionPTAntesInstalacionEjemplo);
                    #endregion

                    #endregion

                    #region 3. Fotografía de instalación de pozo a tierra

                    #region Panoramica de la zanja abierta (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000302",
                        imgPT10InstalacionPTPanoramicaZanjaAbiertaEjemplo);
                    #endregion

                    #region Panorámica Vertido de Tierra Cultivo cernida en Zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000303",
                        imgPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaEjemplo);
                    #endregion

                    #region Panorámica del vertido de la sal granulada en la zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000304",
                        imgPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaEjemplo);
                    #endregion

                    #region Panorámica Vertido de la Disolución del Cemento Conductivo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000305",
                        imgPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoEjemplo);
                    #endregion

                    #region Panorámica de la Colocación del Fleje de Cobre 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000306",
                        imgPT10InstalacionPTPanoramicaColocacionFlejeCobre01Ejemplo);
                    #endregion

                    #region Panorámica de la Colocación del Fleje de Cobre 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000307",
                        imgPT10InstalacionPTPanoramicaColocacionFlejeCobre02Ejemplo);
                    #endregion

                    #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000308",
                        imgPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeEjemplo);
                    #endregion

                    #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000309",
                        imgPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoEjemplo);
                    #endregion

                    #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000310",
                        imgPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaEjemplo);
                    #endregion

                    #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000311",
                        imgPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaEjemplo);
                    #endregion

                    #endregion

                    #region 4. Fotografía de medición del pozo a tierra

                    #region MEDICION 1:Foto panorámica de medición de pozo a tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000312",
                        imgPT10MedicionPTPanoramicaMedicionPT01Ejemplo);
                    #endregion

                    #region MEDICION 2:Foto panorámica de medición de pozo a tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000313",
                        imgPT10MedicionPTPanoramicaMedicionPT02Ejemplo);
                    #endregion

                    #region MEDICION 3:Foto panorámica de medición de pozo a tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000314",
                        imgPT10MedicionPTPanoramicaMedicionPT03Ejemplo);
                    #endregion

                    #endregion

                    #endregion

                    #region Guardamos el documento
                    Session["Documento"] = Documento;
                    #endregion

                    #region Asignacion Perfil
                    hfIdPerfil.Value = Usuario.Perfil.IdValor;
                    #endregion

                    #region Asignamos el metodo
                    Session["metodo"] = "I";//Insert
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

                        #region POZO A TIERRA 5 Ohm

                        #region 1. Fotografía frontal de la IIBB

                        #region Frontal de la IIBB
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000387").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                         chkPT5FrontalIIBB,
                           hfPT5FrontalIIBBComentario, null, null,
                           hfPT5FrontalIIBB, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

                        #region Ubicación del Pozo a Tierra Antes de ser Instalado
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000388").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5UbicacionPTAntesInstalacion,hfPT5UbicacionPTAntesInstalacionComentario, null, null,hfPT5UbicacionPTAntesInstalacion, strRutaFisicaTemporal,Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 3. Fotografía de instalación de pozo a tierra

                        #region Panoramica de la zanja abierta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000389").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaZanjaAbierta,             hfPT5InstalacionPTPanoramicaZanjaAbiertaComentario, null, null,
                           hfPT5InstalacionPTPanoramicaZanjaAbierta, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido de Tierra Cultivo cernida en Zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000390").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,         chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja,
                           hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica del vertido de la sal granulada en la zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000391").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja,
                           hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido de la Disolución del Cemento Conductivo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000392").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo,
                           hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica de la Colocación del Fleje de Cobre 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000393").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01,
                           hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario, null, null,
                           hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica de la Colocación del Fleje de Cobre 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000394").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02,
                           hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario, null, null,
                           hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000395").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje,
                           hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000396").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo,
                           hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000397").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja,
                           hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000398").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja,
                           hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario, null, null,
                           hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 4. Fotografía de medición del pozo a tierra

                        #region MEDICION 1:Foto panorámica de medición de pozo a tierra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000399").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5MedicionPTPanoramicaMedicionPT01,
                           hfPT5MedicionPTPanoramicaMedicionPT01Comentario, null, null,
                           hfPT5MedicionPTPanoramicaMedicionPT01, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region MEDICION 2:Foto panorámica de medición de pozo a tierra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000400").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5MedicionPTPanoramicaMedicionPT02,
                           hfPT5MedicionPTPanoramicaMedicionPT02Comentario, null, null,
                           hfPT5MedicionPTPanoramicaMedicionPT02, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region MEDICION 3:Foto panorámica de medición de pozo a tierra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000401").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,chkPT5MedicionPTPanoramicaMedicionPT03,
                           hfPT5MedicionPTPanoramicaMedicionPT03Comentario, null, null,
                           hfPT5MedicionPTPanoramicaMedicionPT03, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #endregion

                        #region POZO A TIERRA 10 Ohm

                        #region 1. Fotografía frontal de la IIBB

                        #region Frontal de la IIBB
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000402").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10FrontalIIBB,
                           hfPT10FrontalIIBBComentario, null, null,
                           hfPT10FrontalIIBB, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

                        #region Ubicación del Pozo a Tierra Antes de ser Instalado
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000403").Select(dd => dd).First();
                       UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPT10UbicacionPTAntesInstalacion,
                           hfPT10UbicacionPTAntesInstalacionComentario, null, null,
                           hfPT10UbicacionPTAntesInstalacion, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 3. Fotografía de instalación de pozo a tierra

                        #region Panoramica de la zanja abierta
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000404").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaZanjaAbierta,
                           hfPT10InstalacionPTPanoramicaZanjaAbiertaComentario, null, null,
                           hfPT10InstalacionPTPanoramicaZanjaAbierta, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido de Tierra Cultivo cernida en Zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000405").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja,
                           hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica del vertido de la sal granulada en la zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000406").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja,
                           hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido de la Disolución del Cemento Conductivo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000407").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo,
                           hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica de la Colocación del Fleje de Cobre 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000408").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01,
                           hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario, null, null,
                           hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica de la Colocación del Fleje de Cobre 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000409").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02,
                           hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario, null, null,
                           hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000410").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje,
                           hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000411").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo,
                           hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000412").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja,
                           hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000413").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja,
                           hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario, null, null,
                           hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 4. Fotografía de medición del pozo a tierra

                        #region MEDICION 1:Foto panorámica de medición de pozo a tierra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000414").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10MedicionPTPanoramicaMedicionPT01,
                           hfPT10MedicionPTPanoramicaMedicionPT01Comentario, null, null,
                           hfPT10MedicionPTPanoramicaMedicionPT01, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region MEDICION 2:Foto panorámica de medición de pozo a tierra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000415").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10MedicionPTPanoramicaMedicionPT02,
                           hfPT10MedicionPTPanoramicaMedicionPT02Comentario, null, null,
                           hfPT10MedicionPTPanoramicaMedicionPT02, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #region MEDICION 3:Foto panorámica de medición de pozo a tierra
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000416").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPT10MedicionPTPanoramicaMedicionPT03,
                           hfPT10MedicionPTPanoramicaMedicionPT03Comentario, null, null,
                           hfPT10MedicionPTPanoramicaMedicionPT03, strRutaFisicaTemporal,
                           Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #endregion

                        #region Asignamos el metodo
                        Session["metodo"] = "U"; //Update
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

                #region POZO A TIERRA 5 Ohm

                #region 1. Fotografía frontal de la IIBB

                #region Frontal de la IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000387", chkPT5FrontalIIBB,
                   hfPT5FrontalIIBBComentario, null, null,
                   hfPT5FrontalIIBB, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

                #region Ubicación del Pozo a Tierra Antes de ser Instalado
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000388", chkPT5UbicacionPTAntesInstalacion,
                   hfPT5UbicacionPTAntesInstalacionComentario, null, null,
                   hfPT5UbicacionPTAntesInstalacion, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 3. Fotografía de instalación de pozo a tierra

                #region Panoramica de la zanja abierta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000389", chkPT5InstalacionPTPanoramicaZanjaAbierta,
                   hfPT5InstalacionPTPanoramicaZanjaAbiertaComentario, null, null,
                   hfPT5InstalacionPTPanoramicaZanjaAbierta, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido de Tierra Cultivo cernida en Zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000390", chkPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja,
                   hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica del vertido de la sal granulada en la zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000391", chkPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja,
                   hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoSalGranuladaZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido de la Disolución del Cemento Conductivo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000392", chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo,
                   hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica de la Colocación del Fleje de Cobre 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000393", chkPT5InstalacionPTPanoramicaColocacionFlejeCobre01,
                   hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01Comentario, null, null,
                   hfPT5InstalacionPTPanoramicaColocacionFlejeCobre01, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica de la Colocación del Fleje de Cobre 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000394", chkPT5InstalacionPTPanoramicaColocacionFlejeCobre02,
                   hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02Comentario, null, null,
                   hfPT5InstalacionPTPanoramicaColocacionFlejeCobre02, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000395", chkPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje,
                   hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000396", chkPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo,
                   hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000397", chkPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja,
                   hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000398", chkPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja,
                   hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario, null, null,
                   hfPT5InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 4. Fotografía de medición del pozo a tierra

                #region MEDICION 1:Foto panorámica de medición de pozo a tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000399", chkPT5MedicionPTPanoramicaMedicionPT01,
                   hfPT5MedicionPTPanoramicaMedicionPT01Comentario, null, null,
                   hfPT5MedicionPTPanoramicaMedicionPT01, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region MEDICION 2:Foto panorámica de medición de pozo a tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000400", chkPT5MedicionPTPanoramicaMedicionPT02,
                   hfPT5MedicionPTPanoramicaMedicionPT02Comentario, null, null,
                   hfPT5MedicionPTPanoramicaMedicionPT02, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region MEDICION 3:Foto panorámica de medición de pozo a tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000401", chkPT5MedicionPTPanoramicaMedicionPT03,
                   hfPT5MedicionPTPanoramicaMedicionPT03Comentario, null, null,
                   hfPT5MedicionPTPanoramicaMedicionPT03, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #endregion

                #region POZO A TIERRA 10 Ohm

                #region 1. Fotografía frontal de la IIBB

                #region Frontal de la IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000402", chkPT10FrontalIIBB,
                   hfPT10FrontalIIBBComentario, null, null,
                   hfPT10FrontalIIBB, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 2. Fotografía de la ubicación del pozo a tierra antes de ser instalado

                #region Ubicación del Pozo a Tierra Antes de ser Instalado
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000403", chkPT10UbicacionPTAntesInstalacion,
                   hfPT10UbicacionPTAntesInstalacionComentario, null, null,
                   hfPT10UbicacionPTAntesInstalacion, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 3. Fotografía de instalación de pozo a tierra

                #region Panoramica de la zanja abierta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000404", chkPT10InstalacionPTPanoramicaZanjaAbierta,
                   hfPT10InstalacionPTPanoramicaZanjaAbiertaComentario, null, null,
                   hfPT10InstalacionPTPanoramicaZanjaAbierta, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido de Tierra Cultivo cernida en Zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000405", chkPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja,
                   hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanjaComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoTierraCultivoCernidaZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica del vertido de la sal granulada en la zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000406", chkPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja,
                   hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanjaComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoSalGranuladaZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido de la Disolución del Cemento Conductivo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000407", chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo,
                   hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivo, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica de la Colocación del Fleje de Cobre 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000408", chkPT10InstalacionPTPanoramicaColocacionFlejeCobre01,
                   hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01Comentario, null, null,
                   hfPT10InstalacionPTPanoramicaColocacionFlejeCobre01, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica de la Colocación del Fleje de Cobre 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000409", chkPT10InstalacionPTPanoramicaColocacionFlejeCobre02,
                   hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02Comentario, null, null,
                   hfPT10InstalacionPTPanoramicaColocacionFlejeCobre02, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Disolución Cemento Conduc. Sobre Fleje
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000410", chkPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje,
                   hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFlejeComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoDisolucionCementoConductivoSobreFleje, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Sal Granu. Luego del Cemento Conductivo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000411", chkPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo,
                   hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivoComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoSalGranuladaLuegoCementoConductivo, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Resto Tierra Cultivo Cernida Sobre Zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000412", chkPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja,
                   hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanjaComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoRestoTierraCultivoCernidaSobreZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Vertido Rellenado Tierra Cernida Sobre Zanja
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000413", chkPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja,
                   hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanjaComentario, null, null,
                   hfPT10InstalacionPTPanoramicaVertidoRellenadoTierraCernidaSobreZanja, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 4. Fotografía de medición del pozo a tierra

                #region MEDICION 1:Foto panorámica de medición de pozo a tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000414", chkPT10MedicionPTPanoramicaMedicionPT01,
                   hfPT10MedicionPTPanoramicaMedicionPT01Comentario, null, null,
                   hfPT10MedicionPTPanoramicaMedicionPT01, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region MEDICION 2:Foto panorámica de medición de pozo a tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000415", chkPT10MedicionPTPanoramicaMedicionPT02,
                   hfPT10MedicionPTPanoramicaMedicionPT02Comentario, null, null,
                   hfPT10MedicionPTPanoramicaMedicionPT02, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

                #region MEDICION 3:Foto panorámica de medición de pozo a tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                   Documento, "000416", chkPT10MedicionPTPanoramicaMedicionPT03,
                   hfPT10MedicionPTPanoramicaMedicionPT03Comentario, null, null,
                   hfPT10MedicionPTPanoramicaMedicionPT03, strRutaFisicaTemporal,
                   Type.GetType("System.Byte[]"));
                #endregion

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