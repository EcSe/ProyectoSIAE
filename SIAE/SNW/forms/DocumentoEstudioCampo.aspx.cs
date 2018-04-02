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

                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
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
                //String strRutaFisicaTemporal = "";

                //#region Ruta Fisica Temporal
                //EntidadDetalle = new EntidadDetalleBE();
                //EntidadDetalle.Entidad.IdEntidad = "CONF";
                //EntidadDetalle.IdValor = "RUTA_TEMP";
                //EntidadDetalle = EntidadDetalleBL.ListarEntidadDetalle(EntidadDetalle)[0];
                //strRutaFisicaTemporal = EntidadDetalle.ValorCadena1;
                //#endregion

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