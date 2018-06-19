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
    public partial class DocumentoEstudioCampo : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000003";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ") " + " .:SIAE:.";
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

                    #region Fotos Adicionales

                    #region Cartel con Nombre de Letrero (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000317",
                        imgCartelNombreLetreroEjemplo);
                    #endregion

                    #region Centro Comunal con Cartel (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000318",
                        imgCentroComunalCartelEjemplo);
                    #endregion

                    #region Terreno Instalación Caseta 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000319",
                        imgTerrenoInstalacionCaseta01Ejemplo);
                    #endregion

                    #region Terreno Instalación Caseta 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000320",
                        imgTerrenoInstalacionCaseta02Ejemplo);
                    #endregion

                    #region Terreno Instalación Caseta 03 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000321",
                        imgTerrenoInstalacionCaseta03Ejemplo);
                    #endregion

                    #region Terreno Instalación Caseta 04 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000322",
                        imgTerrenoInstalacionCaseta04Ejemplo);
                    #endregion

                    #region Plaza con Miras al Nodo con Cartel (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000323",
                        imgPlazaMirasNodoCartelEjemplo);
                    #endregion

                    #region Panorámica Localidad con Cartel 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000324",
                        imgPanoramicaLocalidadCartel01Ejemplo);
                    #endregion

                    #region Panorámica Localidad con Cartel 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000325",
                        imgPanoramicaLocalidadCartel02Ejemplo);
                    #endregion

                    #region Panorámica Plaza Principal con Cartel (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000326",
                        imgPanoramicaPlazaPrincipalCartelEjemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000327",
                        imgPanoramicaDesdeNodo36001Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000328",
                        imgPanoramicaDesdeNodo36002Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 03 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000329",
                        imgPanoramicaDesdeNodo36003Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 04 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000330",
                        imgPanoramicaDesdeNodo36004Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 05 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000331",
                        imgPanoramicaDesdeNodo36005Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 06 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000332",
                        imgPanoramicaDesdeNodo36006Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 07 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000333",
                        imgPanoramicaDesdeNodo36007Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 08 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000334",
                        imgPanoramicaDesdeNodo36008Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 09 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000335",
                        imgPanoramicaDesdeNodo36009Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 10 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000336",
                        imgPanoramicaDesdeNodo36010Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 11 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000337",
                        imgPanoramicaDesdeNodo36011Ejemplo);
                    #endregion

                    #region Panorámica Desde Nodo (360°) 12 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000338",
                        imgPanoramicaDesdeNodo36012Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000339",
                        imgOtrosLugaresPrincipalesCartel01Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000340",
                        imgOtrosLugaresPrincipalesCartel02Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 03 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000341",
                        imgOtrosLugaresPrincipalesCartel03Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 04 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000342",
                        imgOtrosLugaresPrincipalesCartel04Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 05 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000343",
                        imgOtrosLugaresPrincipalesCartel05Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 06 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000344",
                        imgOtrosLugaresPrincipalesCartel06Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 07 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000345",
                        imgOtrosLugaresPrincipalesCartel07Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 08 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000346",
                        imgOtrosLugaresPrincipalesCartel08Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 09 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000347",
                        imgOtrosLugaresPrincipalesCartel09Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 10 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000348",
                        imgOtrosLugaresPrincipalesCartel10Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 11 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000349",
                        imgOtrosLugaresPrincipalesCartel11Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 12 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000350",
                        imgOtrosLugaresPrincipalesCartel12Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 13 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000351",
                        imgOtrosLugaresPrincipalesCartel13Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 14 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000352",
                        imgOtrosLugaresPrincipalesCartel14Ejemplo);
                    #endregion

                    #region Otros Lugares Principales con Cartel 15 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000353",
                        imgOtrosLugaresPrincipalesCartel15Ejemplo);
                    #endregion

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

                        #region Estudio de Campo

                        #region Fecha
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000002").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFecha,
                            hfFechaComentario, null,
                            txtFecha, null, null,
                            Type.GetType("System.DateTime"));
                        #endregion

                        #region Hora Inicio
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000417").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkHoraInicio,
                            hfHoraInicioComentario, null,
                            txtHoraInicio, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Hora Fin
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000417").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkHoraFin,
                            hfHoraFinComentario, null,
                            txtHoraFin, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Long. Loc. Plaza Princ.
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000419").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLongitudLocalidadDesdePlazaPrincipal,
                            hfLongitudLocalidadDesdePlazaPrincipalComentario, null,
                            txtLongitudLocalidadDesdePlazaPrincipal, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Lat. Loc. Plaza Princ.
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000420").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLatitudLocalidadDesdePlazaPrincipal,
                            hfLatitudLocalidadDesdePlazaPrincipalComentario, null,
                            txtLatitudLocalidadDesdePlazaPrincipal, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Altura (m.s.n.m.)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000421").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAltura,
                            hfAlturaComentario, null,
                            txtAltura, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Área Natural Protegida
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000422").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAreaNaturalProtegida,
                            hfAreaNaturalProtegidaComentario, null,
                            txtAreaNaturalProtegida, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Área Natural Protegida
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000423").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkNombreAreaNatural,
                            hfNombreAreaNaturalComentario, null,
                            txtNombreAreaNatural, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Restos Arquelógicos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000424").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkRestosArqueologicos,
                            hfRestosArqueologicosComentario, null,
                            txtRestosArqueologicos, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Tip. Restos Arquelógicos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000425").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTipoRestosArqueologicos,
                            hfTipoRestosArqueologicosComentario, null,
                            txtTipoRestosArqueologicos, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Banco de la Nación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000426").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkBancoNacion,
                            hfBancoNacionComentario, null,
                            txtBancoNacion, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Agente Banco Nación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000427").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAgenteBancoNacion,
                            hfAgenteBancoNacionComentario, null,
                            txtAgenteBancoNacion, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Cantidad
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000428").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCantidad,
                            hfCantidadComentario, null,
                            txtCantidad, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Otros Bancos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000429").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosBancos,
                            hfOtrosBancosComentario, null,
                            txtOtrosBancos, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Cantidad Otros Bancos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000430").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCantidadOtrosBancos,
                            hfCantidadOtrosBancosComentario, null,
                            txtCantidadOtrosBancos, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Entidad Importante
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000431").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEntidadImportante,
                            hfEntidadImportanteComentario, null,
                            txtEntidadImportante, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Institución Educativa
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000432").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkInstitucionEducativa,
                            hfInstitucionEducativaComentario, null,
                            txtInstitucionEducativa, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Cantidad IIEE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000433").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCantidadInstitucionEducativa,
                            hfCantidadInstitucionEducativaComentario, null,
                            txtCantidadInstitucionEducativa, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Población
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000434").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPoblacion,
                            hfPoblacionComentario, null,
                            txtPoblacion, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Población
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000435").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkNumeroMujeres,
                            hfNumeroMujeresComentario, null,
                            txtNumeroMujeres, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region N° Jov. 15 y 24
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000436").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkNumeroJovenesEntre15y24Anios,
                            hfNumeroJovenesEntre15y24AniosComentario, null,
                            txtNumeroJovenesEntre15y24Anios, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region N° Pers. Discapacidad
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000437").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkNumeroPersonasDiscapacidad,
                            hfNumeroPersonasDiscapacidadComentario, null,
                            txtNumeroPersonasDiscapacidad, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region N° Viviendas
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000438").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkNumeroViviendas,
                            hfNumeroViviendasComentario, null,
                            txtNumeroViviendas, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #endregion

                        #region Fotos Adicionales

                        #region Cartel con Nombre de Letrero
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000444").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCartelNombreLetrero,
                            hfCartelNombreLetreroComentario, null, null,
                            hfCartelNombreLetrero, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Centro Comunal con Cartel
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000445").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCentroComunalCartel,
                            hfCentroComunalCartelComentario, null, null,
                            hfCentroComunalCartel, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Terreno Instalación Caseta 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000446").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTerrenoInstalacionCaseta01,
                            hfTerrenoInstalacionCaseta01Comentario, null, null,
                            hfTerrenoInstalacionCaseta01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Terreno Instalación Caseta 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000447").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTerrenoInstalacionCaseta02,
                            hfTerrenoInstalacionCaseta02Comentario, null, null,
                            hfTerrenoInstalacionCaseta02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Terreno Instalación Caseta 03
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000448").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTerrenoInstalacionCaseta03,
                            hfTerrenoInstalacionCaseta03Comentario, null, null,
                            hfTerrenoInstalacionCaseta03, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Terreno Instalación Caseta 04
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000449").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTerrenoInstalacionCaseta04,
                            hfTerrenoInstalacionCaseta04Comentario, null, null,
                            hfTerrenoInstalacionCaseta04, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Plaza con Miras al Nodo con Cartel
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000450").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPlazaMirasNodoCartel,
                            hfPlazaMirasNodoCartelComentario, null, null,
                            hfPlazaMirasNodoCartel, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Localidad con Cartel 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000451").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaLocalidadCartel01,
                            hfPanoramicaLocalidadCartel01Comentario, null, null,
                            hfPanoramicaLocalidadCartel01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Localidad con Cartel 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000452").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaLocalidadCartel02,
                            hfPanoramicaLocalidadCartel02Comentario, null, null,
                            hfPanoramicaLocalidadCartel02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Plaza Principal con Cartel
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000453").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaPlazaPrincipalCartel,
                            hfPanoramicaPlazaPrincipalCartelComentario, null, null,
                            hfPanoramicaPlazaPrincipalCartel, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000454").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36001,
                            hfPanoramicaDesdeNodo36001Comentario, null, null,
                            hfPanoramicaDesdeNodo36001, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000455").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36002,
                            hfPanoramicaDesdeNodo36002Comentario, null, null,
                            hfPanoramicaDesdeNodo36002, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 03
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000456").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36003,
                            hfPanoramicaDesdeNodo36003Comentario, null, null,
                            hfPanoramicaDesdeNodo36003, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 04
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000457").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36004,
                            hfPanoramicaDesdeNodo36004Comentario, null, null,
                            hfPanoramicaDesdeNodo36004, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 05
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000458").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36005,
                            hfPanoramicaDesdeNodo36005Comentario, null, null,
                            hfPanoramicaDesdeNodo36005, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 06
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000459").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36006,
                            hfPanoramicaDesdeNodo36006Comentario, null, null,
                            hfPanoramicaDesdeNodo36006, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 07
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000460").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36007,
                            hfPanoramicaDesdeNodo36007Comentario, null, null,
                            hfPanoramicaDesdeNodo36007, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 08
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000461").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36008,
                            hfPanoramicaDesdeNodo36008Comentario, null, null,
                            hfPanoramicaDesdeNodo36008, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 09
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000462").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36009,
                            hfPanoramicaDesdeNodo36009Comentario, null, null,
                            hfPanoramicaDesdeNodo36009, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 10
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000463").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36010,
                            hfPanoramicaDesdeNodo36010Comentario, null, null,
                            hfPanoramicaDesdeNodo36010, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 11
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000464").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36011,
                            hfPanoramicaDesdeNodo36011Comentario, null, null,
                            hfPanoramicaDesdeNodo36011, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Panorámica Desde Nodo (360°) 12
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000465").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaDesdeNodo36012,
                            hfPanoramicaDesdeNodo36012Comentario, null, null,
                            hfPanoramicaDesdeNodo36012, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000466").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel01,
                            hfOtrosLugaresPrincipalesCartel01Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000467").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel02,
                            hfOtrosLugaresPrincipalesCartel02Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 03
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000468").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel03,
                            hfOtrosLugaresPrincipalesCartel03Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel03, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 04
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000469").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel04,
                            hfOtrosLugaresPrincipalesCartel04Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel04, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 05
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000470").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel05,
                            hfOtrosLugaresPrincipalesCartel05Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel05, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 06
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000471").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel06,
                            hfOtrosLugaresPrincipalesCartel06Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel06, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 07
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000472").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel07,
                            hfOtrosLugaresPrincipalesCartel07Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel07, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 08
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000473").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel08,
                            hfOtrosLugaresPrincipalesCartel08Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel08, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 09
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000474").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel09,
                            hfOtrosLugaresPrincipalesCartel09Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel09, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 10
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000475").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel10,
                            hfOtrosLugaresPrincipalesCartel10Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel10, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 11
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000476").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel11,
                            hfOtrosLugaresPrincipalesCartel11Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel11, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 12
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000477").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel12,
                            hfOtrosLugaresPrincipalesCartel12Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel12, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 13
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000478").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel13,
                            hfOtrosLugaresPrincipalesCartel13Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel13, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 14
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000479").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel14,
                            hfOtrosLugaresPrincipalesCartel14Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel14, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Otros Lugares Principales con Cartel 15
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000480").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkOtrosLugaresPrincipalesCartel15,
                            hfOtrosLugaresPrincipalesCartel15Comentario, null, null,
                            hfOtrosLugaresPrincipalesCartel15, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region Archivos Adicionales

                        #region Mapa Georeferenciado (.kmz)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000505").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMapaGeoreferenciado,
                            hfMapaGeoreferenciadoComentario, null, null,
                            hfMapaGeoreferenciado, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
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

                #region Estudio de Campo

                #region Fecha
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000002", chkFecha,
                    hfFechaComentario, null,
                    txtFecha, null, null,
                    Type.GetType("System.DateTime"));
                #endregion

                #region Hora Inicio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000417", chkHoraInicio,
                    hfHoraInicioComentario, null,
                    txtHoraInicio, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Hora Fin
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000418", chkHoraFin,
                    hfHoraFinComentario, null,
                    txtHoraFin, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Long. Loc. Plaza Princ.
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000419", chkLongitudLocalidadDesdePlazaPrincipal,
                    hfLongitudLocalidadDesdePlazaPrincipalComentario, null,
                    txtLongitudLocalidadDesdePlazaPrincipal, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Lat. Loc. Plaza Princ.
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000420", chkLatitudLocalidadDesdePlazaPrincipal,
                    hfLatitudLocalidadDesdePlazaPrincipalComentario, null,
                    txtLatitudLocalidadDesdePlazaPrincipal, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Altura (m.s.n.m.)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000421", chkAltura,
                    hfAlturaComentario, null,
                    txtAltura, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Área Natural Protegida
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000422", chkAreaNaturalProtegida,
                    hfAreaNaturalProtegidaComentario, null,
                    txtAreaNaturalProtegida, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Nombre Área Natural
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000423", chkNombreAreaNatural,
                    hfNombreAreaNaturalComentario, null,
                    txtNombreAreaNatural, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Restos Arquelógicos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000424", chkRestosArqueologicos,
                    hfRestosArqueologicosComentario, null,
                    txtRestosArqueologicos, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Tip. Restos Arquelógicos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000425", chkTipoRestosArqueologicos,
                    hfTipoRestosArqueologicosComentario, null,
                    txtTipoRestosArqueologicos, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Banco de la Nación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000426", chkBancoNacion,
                    hfBancoNacionComentario, null,
                    txtBancoNacion, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Agente Banco Nación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000427", chkAgenteBancoNacion,
                    hfAgenteBancoNacionComentario, null,
                    txtAgenteBancoNacion, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Cantidad
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000428", chkCantidad,
                    hfCantidadComentario, null,
                    txtCantidad, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Otros Bancos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000429", chkOtrosBancos,
                    hfOtrosBancosComentario, null,
                    txtOtrosBancos, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Cantidad Otros Bancos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000430", chkCantidadOtrosBancos,
                    hfCantidadOtrosBancosComentario, null,
                    txtCantidadOtrosBancos, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Entidad Importante
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000431", chkEntidadImportante,
                    hfEntidadImportanteComentario, null,
                    txtEntidadImportante, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Institución Educativa
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000432", chkInstitucionEducativa,
                    hfInstitucionEducativaComentario, null,
                    txtInstitucionEducativa, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Cantidad IIEE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000433", chkCantidadInstitucionEducativa,
                    hfCantidadInstitucionEducativaComentario, null,
                    txtCantidadInstitucionEducativa, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Población
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000434", chkPoblacion,
                    hfPoblacionComentario, null,
                    txtPoblacion, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region N° de Mujeres
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000435", chkNumeroMujeres,
                    hfNumeroMujeresComentario, null,
                    txtNumeroMujeres, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region N° Jov. 15 y 24
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000436", chkNumeroJovenesEntre15y24Anios,
                    hfNumeroJovenesEntre15y24AniosComentario, null,
                    txtNumeroJovenesEntre15y24Anios, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region N° Pers. Discapacidad
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000437", chkNumeroPersonasDiscapacidad,
                    hfNumeroPersonasDiscapacidadComentario, null,
                    txtNumeroPersonasDiscapacidad, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region N° Viviendas
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000438", chkNumeroViviendas,
                    hfNumeroViviendasComentario, null,
                    txtNumeroViviendas, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #endregion

                #region Fotos Adicionales

                #region Cartel con Nombre de Letrero
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000444", chkCartelNombreLetrero,
                    hfCartelNombreLetreroComentario, null, null,
                    hfCartelNombreLetrero, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Centro Comunal con Cartel
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000445", chkCentroComunalCartel,
                    hfCentroComunalCartelComentario, null, null,
                    hfCentroComunalCartel, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Terreno Instalación Caseta 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000446", chkTerrenoInstalacionCaseta01,
                    hfTerrenoInstalacionCaseta01Comentario, null, null,
                    hfTerrenoInstalacionCaseta01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Terreno Instalación Caseta 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000447", chkTerrenoInstalacionCaseta02,
                    hfTerrenoInstalacionCaseta02Comentario, null, null,
                    hfTerrenoInstalacionCaseta02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Terreno Instalación Caseta 03
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000448", chkTerrenoInstalacionCaseta03,
                    hfTerrenoInstalacionCaseta03Comentario, null, null,
                    hfTerrenoInstalacionCaseta03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Terreno Instalación Caseta 04
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000449", chkTerrenoInstalacionCaseta04,
                    hfTerrenoInstalacionCaseta04Comentario, null, null,
                    hfTerrenoInstalacionCaseta04, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Plaza con Miras al Nodo con Cartel
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000450", chkPlazaMirasNodoCartel,
                    hfPlazaMirasNodoCartelComentario, null, null,
                    hfPlazaMirasNodoCartel, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Localidad con Cartel 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000451", chkPanoramicaLocalidadCartel01,
                    hfPanoramicaLocalidadCartel01Comentario, null, null,
                    hfPanoramicaLocalidadCartel01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Localidad con Cartel 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000452", chkPanoramicaLocalidadCartel02,
                    hfPanoramicaLocalidadCartel02Comentario, null, null,
                    hfPanoramicaLocalidadCartel02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Plaza Principal con Cartel
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000453", chkPanoramicaPlazaPrincipalCartel,
                    hfPanoramicaPlazaPrincipalCartelComentario, null, null,
                    hfPanoramicaPlazaPrincipalCartel, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000454", chkPanoramicaDesdeNodo36001,
                    hfPanoramicaDesdeNodo36001Comentario, null, null,
                    hfPanoramicaDesdeNodo36001, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000455", chkPanoramicaDesdeNodo36002,
                    hfPanoramicaDesdeNodo36002Comentario, null, null,
                    hfPanoramicaDesdeNodo36002, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 03
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000456", chkPanoramicaDesdeNodo36003,
                    hfPanoramicaDesdeNodo36003Comentario, null, null,
                    hfPanoramicaDesdeNodo36003, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 04
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000457", chkPanoramicaDesdeNodo36004,
                    hfPanoramicaDesdeNodo36004Comentario, null, null,
                    hfPanoramicaDesdeNodo36004, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 05
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000458", chkPanoramicaDesdeNodo36005,
                    hfPanoramicaDesdeNodo36005Comentario, null, null,
                    hfPanoramicaDesdeNodo36005, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 06
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000459", chkPanoramicaDesdeNodo36006,
                    hfPanoramicaDesdeNodo36006Comentario, null, null,
                    hfPanoramicaDesdeNodo36006, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 07
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000460", chkPanoramicaDesdeNodo36007,
                    hfPanoramicaDesdeNodo36007Comentario, null, null,
                    hfPanoramicaDesdeNodo36007, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 08
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000461", chkPanoramicaDesdeNodo36008,
                    hfPanoramicaDesdeNodo36008Comentario, null, null,
                    hfPanoramicaDesdeNodo36008, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 09
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000462", chkPanoramicaDesdeNodo36009,
                    hfPanoramicaDesdeNodo36009Comentario, null, null,
                    hfPanoramicaDesdeNodo36009, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 10
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000463", chkPanoramicaDesdeNodo36010,
                    hfPanoramicaDesdeNodo36010Comentario, null, null,
                    hfPanoramicaDesdeNodo36010, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 11
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000464", chkPanoramicaDesdeNodo36011,
                    hfPanoramicaDesdeNodo36011Comentario, null, null,
                    hfPanoramicaDesdeNodo36011, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Panorámica Desde Nodo (360°) 12
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000465", chkPanoramicaDesdeNodo36012,
                    hfPanoramicaDesdeNodo36012Comentario, null, null,
                    hfPanoramicaDesdeNodo36012, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000466", chkOtrosLugaresPrincipalesCartel01,
                    hfOtrosLugaresPrincipalesCartel01Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000467", chkOtrosLugaresPrincipalesCartel02,
                    hfOtrosLugaresPrincipalesCartel02Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 03
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000468", chkOtrosLugaresPrincipalesCartel03,
                    hfOtrosLugaresPrincipalesCartel03Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 04
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000469", chkOtrosLugaresPrincipalesCartel04,
                    hfOtrosLugaresPrincipalesCartel04Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel04, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 05
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000470", chkOtrosLugaresPrincipalesCartel05,
                    hfOtrosLugaresPrincipalesCartel05Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel05, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 06
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000471", chkOtrosLugaresPrincipalesCartel06,
                    hfOtrosLugaresPrincipalesCartel06Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel06, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 07
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000472", chkOtrosLugaresPrincipalesCartel07,
                    hfOtrosLugaresPrincipalesCartel07Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel07, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 08
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000473", chkOtrosLugaresPrincipalesCartel08,
                    hfOtrosLugaresPrincipalesCartel08Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel08, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 09
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000474", chkOtrosLugaresPrincipalesCartel09,
                    hfOtrosLugaresPrincipalesCartel09Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel09, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 10
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000475", chkOtrosLugaresPrincipalesCartel10,
                    hfOtrosLugaresPrincipalesCartel10Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel10, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 11
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000476", chkOtrosLugaresPrincipalesCartel11,
                    hfOtrosLugaresPrincipalesCartel11Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel11, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 12
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000477", chkOtrosLugaresPrincipalesCartel12,
                    hfOtrosLugaresPrincipalesCartel12Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel12, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 13
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000478", chkOtrosLugaresPrincipalesCartel13,
                    hfOtrosLugaresPrincipalesCartel13Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel13, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 14
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000479", chkOtrosLugaresPrincipalesCartel14,
                    hfOtrosLugaresPrincipalesCartel14Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel14, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Otros Lugares Principales con Cartel 15
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000480", chkOtrosLugaresPrincipalesCartel15,
                    hfOtrosLugaresPrincipalesCartel15Comentario, null, null,
                    hfOtrosLugaresPrincipalesCartel15, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region Archivos Adicionales

                #region Mapa Georeferenciado (.kmz)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000505", chkMapaGeoreferenciado,
                    hfMapaGeoreferenciadoComentario, null, null,
                    hfMapaGeoreferenciado, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region Usuario Creacion y modificacion
                UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
                Documento.Detalles.ForEach(i =>
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