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
    public partial class DocumentoInventarioPTP : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000012";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ") " + " .:SIAE:.";
                    #endregion

                    #region Equipamiento A
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamientoA = new List<DocumentoEquipamientoBE>();

                    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    DocumentoEquipamiento.Documento = Documento;
                    lstDocumentoEquipamientoA = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    //Session["EquipamientosA"] = lstDocumentoEquipamientoA;

                    #endregion

                    #region Equipamiento B
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamientoB = new List<DocumentoEquipamientoBE>();

                    DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    DocumentoEquipamiento.Documento.Documento.IdValor = Documento.Documento.IdValor;
                    DocumentoEquipamiento.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                    DocumentoEquipamiento.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoB.IdNodo;
                    lstDocumentoEquipamientoB = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    #endregion

                    #region 11 Serie logística

                    #region Estacion A

                    #region Serie Antena (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000150",
                        imgSerieAntenaEstacionAEjemplo);
                    #endregion

                    #region Serie Antena
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "UBQBGD00S;UBQCGD00S;UBQFGD00S;UBUBGG00S;UBUCGG00S", 1,
                        lblSerieAntenaEstacionA);
                    #endregion

                    #region Serie ODU (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000151",
                        imgSerieODUEstacionAEjemplo);
                    #endregion

                    #region Serie ODU
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "GB9612;GB9613;GB9614;GB9615;GB9616;GB9617;GB9726;GB9727", 1,
                        lblSerieODUEstacionA);
                    #endregion

                    #region Serie POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000152",
                        imgSeriePOEEstacionAEjemplo);
                    #endregion

                    #region Serie POE
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "D60077;D60078", 1,
                        lblSeriePOEEstacionA);
                    #endregion

                    #region Verificamos si Estacion A tiene CMM4
                    CMM4BE CMM4A = new CMM4BE();
                    List<CMM4BE> lstCMM4A = new List<CMM4BE>();
                    CMM4A.Nodo.IdNodo = Tarea.NodoIIBBA.IdNodo;
                    lstCMM4A = CMM4BL.ListarCMM4(CMM4A);
                    hfCMM4A.Value = lstCMM4A.Count.ToString();
                    #endregion

                    if (!lstCMM4A.Count.Equals(0))//Si tiene CMM4 pedimos los equipos necesarios
                    {
                        #region Serie CMM4 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000153",
                        imgSerieCMM4EstacionAEjemplo);
                        #endregion

                        #region Serie CMM4
                        UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                            "ICA0071", 1,
                            lblSerieCMM4EstacionA);
                        #endregion

                        #region Serie UGPS (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000154",
                            imgSerieUGPSEstacionAEjemplo);
                        #endregion

                        #region Serie Conversor (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000155",
                            imgSerieConversorEstacionAEjemplo);
                        #endregion

                        #region Serie Conversor
                        UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                            "ICD001539", 1,
                            lblSerieConversorEstacionA);
                        #endregion

                    }
                    #endregion

                    #region Estacion B

                    #region Serie Antena (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000156",
                        imgSerieAntenaEstacionBEjemplo);
                    #endregion

                    #region Serie Antena
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "UBQBGD00S;UBQCGD00S;UBQFGD00S;UBUBGG00S;UBUCGG00S", 1,
                        lblSerieAntenaEstacionB);
                    #endregion

                    #region Serie ODU (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000157",
                        imgSerieODUEstacionBEjemplo);
                    #endregion

                    #region Serie ODU
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "GB9612;GB9613;GB9614;GB9615;GB9616;GB9617;GB9726;GB9727", 1,
                        lblSerieODUEstacionB);
                    #endregion

                    #region Serie POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000158",
                        imgSeriePOEEstacionBEjemplo);
                    #endregion

                    #region Serie POE
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "D60077;D60078", 1,
                        lblSeriePOEEstacionB);
                    #endregion

                    #region Verificamos si Estacion B tiene CMM4
                    CMM4BE CMM4B = new CMM4BE();
                    List<CMM4BE> lstCMM4B = new List<CMM4BE>();
                    CMM4B.Nodo.IdNodo = Tarea.NodoB.IdNodo;
                    lstCMM4B = CMM4BL.ListarCMM4(CMM4B);
                    hfCMM4B.Value = lstCMM4B.Count.ToString();
                    #endregion


                    if (!lstCMM4B.Count.Equals(0))//Si tiene CMM4 pedimos los equipos necesarios
                    {
                        #region Serie CMM4 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000159",
                        imgSerieCMM4EstacionBEjemplo);
                        #endregion

                        #region Serie CMM4
                        UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                            "ICA0071", 1,
                            lblSerieCMM4EstacionB);
                        #endregion

                        #region Serie UGPS (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000160",
                            imgSerieUGPSEstacionBEjemplo);
                        #endregion

                        #region Serie Conversor (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000161",
                            imgSerieConversorEstacionBEjemplo);
                        #endregion

                        #region Serie Conversor
                        UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                            "ICD001539", 1,
                            lblSerieConversorEstacionA);
                        #endregion

                    }
                    #endregion

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

                        #region 11 Serie logística

                        #region Estación A

                        #region Serie Antena
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000125").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieAntenaEstacionA,
                            hfSerieAntenaEstacionAComentario, null, null,
                            hfSerieAntenaEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie ODU
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000126").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieODUEstacionA,
                            hfSerieODUEstacionAComentario, null, null,
                            hfSerieODUEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000127").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSeriePOEEstacionA,
                            hfSeriePOEEstacionAComentario, null, null,
                            hfSeriePOEEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        if (!hfCMM4A.Value.Equals("0"))
                        {
                            #region Serie CMM4
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000128").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieCMM4EstacionA,
                                hfSerieCMM4EstacionAComentario, null, null,
                                hfSerieCMM4EstacionA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie UGPS
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000129").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieUGPSEstacionA,
                                hfSerieUGPSEstacionAComentario, null, null,
                                hfSerieUGPSEstacionA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie Conversor
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000130").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieConversorEstacionA,
                                hfSerieConversorEstacionAComentario, null, null,
                                hfSerieConversorEstacionA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                        }

                        #endregion

                        #region Estación B

                        #region Serie Antena
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000131").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieAntenaEstacionB,
                            hfSerieAntenaEstacionBComentario, null, null,
                            hfSerieAntenaEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie ODU
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000132").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieODUEstacionB,
                            hfSerieODUEstacionBComentario, null, null,
                            hfSerieODUEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000133").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSeriePOEEstacionB,
                            hfSeriePOEEstacionBComentario, null, null,
                            hfSeriePOEEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        if (!hfCMM4B.Value.Equals("0"))
                        {
                            #region Serie CMM4
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000134").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieCMM4EstacionB,
                                hfSerieCMM4EstacionBComentario, null, null,
                                hfSerieCMM4EstacionB, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie UGPS
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000135").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieUGPSEstacionB,
                                hfSerieUGPSEstacionBComentario, null, null,
                                hfSerieUGPSEstacionB, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie Conversor
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000136").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieConversorEstacionB,
                                hfSerieConversorEstacionBComentario, null, null,
                                hfSerieConversorEstacionB, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                        }

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

                #region 11 Serie logística

                #region Estación A

                #region Serie Antena
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000125", chkSerieAntenaEstacionA,
                    hfSerieAntenaEstacionAComentario, null, null,
                    hfSerieAntenaEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Serie ODU
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000126", chkSerieODUEstacionA,
                    hfSerieODUEstacionAComentario, null, null,
                    hfSerieODUEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Serie POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000127", chkSeriePOEEstacionA,
                    hfSeriePOEEstacionAComentario, null, null,
                    hfSeriePOEEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                if (!hfCMM4A.Value.Equals("0"))
                {
                    #region Serie CMM4
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000128", chkSerieCMM4EstacionA,
                        hfSerieCMM4EstacionAComentario, null, null,
                        hfSerieCMM4EstacionA, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Serie UGPS
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000129", chkSerieUGPSEstacionA,
                        hfSerieUGPSEstacionAComentario, null, null,
                        hfSerieUGPSEstacionA, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Serie Conversor
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000130", chkSerieConversorEstacionA,
                        hfSerieConversorEstacionAComentario, null, null,
                        hfSerieConversorEstacionA, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                }
                #endregion

                #region Estación B

                #region Serie Antena
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000131", chkSerieAntenaEstacionB,
                    hfSerieAntenaEstacionBComentario, null, null,
                    hfSerieAntenaEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Serie ODU
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000132", chkSerieODUEstacionB,
                    hfSerieODUEstacionBComentario, null, null,
                    hfSerieODUEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Serie POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000133", chkSeriePOEEstacionB,
                    hfSeriePOEEstacionBComentario, null, null,
                    hfSeriePOEEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                if (!hfCMM4B.Value.Equals("0"))
                {
                    #region Serie CMM4
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000134", chkSerieCMM4EstacionB,
                        hfSerieCMM4EstacionBComentario, null, null,
                        hfSerieCMM4EstacionB, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Serie UGPS
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000135", chkSerieUGPSEstacionB,
                       hfSerieUGPSEstacionBComentario, null, null,
                        hfSerieUGPSEstacionB, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Serie Conversor
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000136", chkSerieConversorEstacionB,
                        hfSerieConversorEstacionBComentario, null, null,
                        hfSerieConversorEstacionB, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                }
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
                //Documento.Materiales.ForEach(i =>
                //{
                //    i.UsuarioCreacion = Usuario;
                //    i.UsuarioModificacion = Usuario;
                //});
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