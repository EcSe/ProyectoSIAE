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

                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    #endregion

                    #region 11 Serie logística

                    #region Estacion A

                    #region Serie Antena (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000150",
                        imgSerieAntenaEstacionAEjemplo);
                    #endregion

                    #region Serie ODU (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000151",
                        imgSerieODUEstacionAEjemplo);
                    #endregion

                    #region Serie POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000152",
                        imgSeriePOEEstacionAEjemplo);
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

                        #region Serie UGPS (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000154",
                            imgSerieUGPSEstacionAEjemplo);
                        #endregion

                        #region Serie Conversor (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000155",
                            imgSerieConversorEstacionAEjemplo);
                        #endregion
                    }
                    #endregion

                    #region Estacion B

                    #region Serie Antena (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000156",
                        imgSerieAntenaEstacionBEjemplo);
                    #endregion

                    #region Serie ODU (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000157",
                        imgSerieODUEstacionBEjemplo);
                    #endregion

                    #region Serie POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000158",
                        imgSeriePOEEstacionBEjemplo);
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

                        #region Serie UGPS (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000160",
                            imgSerieUGPSEstacionBEjemplo);
                        #endregion

                        #region Serie Conversor (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000161",
                            imgSerieConversorEstacionBEjemplo);
                        #endregion
                    }
                    #endregion

                    #endregion

                    #region Guardamos el documento
                    Session["Documento"] = Documento;
                    #endregion

                    #endregion

                    #region Verificamos si existe la documentacion
                    //DocumentoActaProtocoloSectorialBE documentoActaProtocoloSectorial = new DocumentoActaProtocoloSectorialBE();
                    //List<DocumentoActaProtocoloSectorialBE> lstDocumentoActaProtocoloSectorial = new List<DocumentoActaProtocoloSectorialBE>();
                    //documentoActaProtocoloSectorial.Documento.Tarea.IdTarea = Request.QueryString["IdTarea"].ToString();
                    //lstDocumentoActaProtocoloSectorial = DocumentoActaProtocoloSectorialBL.ListarActasProtocoloSectorial(documentoActaProtocoloSectorial);
                    //if (lstDocumentoActaProtocoloSectorial.Count.Equals(1))
                    //{

                    //}
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

                #region Usuario Creacion
                UsuarioBE UsuarioCreacion = (UsuarioBE)Session["Usuario"];
                Documento.Detalles.ForEach(i => i.UsuarioCreacion = UsuarioCreacion);
                #endregion

                #region Guardar documento
                DocumentoBL.InsertarDocumento(Documento);
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