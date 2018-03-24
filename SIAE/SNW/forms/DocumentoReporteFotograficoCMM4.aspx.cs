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
    public partial class DocumentoReporteFotograficoCMM4 : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000006";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    #endregion

                    #region Reporte Fotográfico
                    #region Foto 1: Equipo GPS con Etiqueta Enrollada Visible (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000036",
                        imgEquipoGPSEtiquetaEjemplo);
                    #endregion

                    #region Foto 2.01: ATERRAMIENTO GPS(CMM4) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000037",
                        imgAterramientoGPS01Ejemplo);
                    #endregion

                    #region Foto 2.02: ATERRAMIENTO GPS(CMM4) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000038",
                        imgAterramientoGPS02Ejemplo);
                    #endregion

                    #region Foto 3: Recorrido de Cable CNT300 por Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000039",
                        imgRecorridoCableCNT300Ejemplo);
                    #endregion

                    #region Foto 4.01: Aterramiento Cable CNT300 (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000040",
                        imgAterramientoCableCNT30001Ejemplo);
                    #endregion

                    #region Foto 4.02: Aterramiento Cable CNT300 (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000041",
                        imgAterramientoCableCNT30002Ejemplo);
                    #endregion

                    #region Foto 5.01: Etiquetado del POE/CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000042",
                        imgEtiquetadoPOECMM401Ejemplo);
                    #endregion

                    #region Foto 5.02: Etiquetado del POE/CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000043",
                        imgEtiquetadoPOECMM402Ejemplo);
                    #endregion

                    #region Foto 6.01: Patch Core del CMM4 al Switch/Router (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000044",
                        imgPatchCoreCMM4Switch01Ejemplo);
                    #endregion

                    #region Foto 6.02: Patch Core del CMM4 al Switch/Router (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000045",
                        imgPatchCoreCMM4Switch02Ejemplo);
                    #endregion

                    #region Foto 7.01: POE/CMM4
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000046",
                        imgPOECMM401Ejemplo);
                    #endregion

                    #region Foto 7.02: POE/CMM4
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000047",
                        imgPOECMM402Ejemplo);
                    #endregion

                    #region Foto 8: TDK Lambda
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000048",
                        imgTDKLambdaEjemplo);
                    #endregion

                    #region Foto 9.01: Energía TDK-Lambda (Inicio/Fin)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000049",
                        imgEnergiaTDKLambda01Ejemplo);
                    #endregion

                    #region Foto 9.02: Energía TDK-Lambda (Inicio/Fin)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000050",
                        imgEnergiaTDKLambda02Ejemplo);
                    #endregion

                    #region Foto 10: Conexión TDK-Lambda a CMM4
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000051",
                        imgConexionTDKLambdaCMM4Ejemplo);
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

                #region Reporte Fotográfico
                #region Foto 1: Equipo GPS con Etiqueta Enrollada Visible
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000059", chkEquipoGPSEtiqueta,
                    hfEquipoGPSEtiquetaComentario, null, null,
                    hfEquipoGPSEtiqueta, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2.01: Aterramiento GPS (CMM4)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000060", chkAterramientoGPS01,
                    hfAterramientoGPS01Comentario, null, null,
                    hfAterramientoGPS01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2.02: Aterramiento GPS (CMM4)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000061", chkAterramientoGPS02,
                    hfAterramientoGPS02Comentario, null, null,
                    hfAterramientoGPS02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 3: Recorrido de Cable CNT300 por Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000062", chkRecorridoCableCNT300,
                    hfRecorridoCableCNT300Comentario, null, null,
                    hfRecorridoCableCNT300, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 4.01: Aterramiento Cable CNT300 (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000063", chkAterramientoCableCNT30001,
                    hfAterramientoCableCNT30001Comentario, null, null,
                    hfAterramientoCableCNT30001, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 4.02: Aterramiento Cable CNT300 (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000064", chkAterramientoCableCNT30002,
                    hfAterramientoCableCNT30002Comentario, null, null,
                    hfAterramientoCableCNT30002, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5.01: Etiquetado del POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000065", chkEtiquetadoPOECMM401,
                    hfEtiquetadoPOECMM401Comentario, null, null,
                    hfEtiquetadoPOECMM401, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5.02: Etiquetado del POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000066", chkEtiquetadoPOECMM402,
                    hfEtiquetadoPOECMM402Comentario, null, null,
                    hfEtiquetadoPOECMM402, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6.01: Patch Core del CMM4 al Switch/Router (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000067", chkPatchCoreCMM4Switch01,
                    hfPatchCoreCMM4Switch01Comentario, null, null,
                    hfPatchCoreCMM4Switch01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6.02: Patch Core del CMM4 al Switch/Router (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000068", chkPatchCoreCMM4Switch02,
                    hfPatchCoreCMM4Switch02Comentario, null, null,
                    hfPatchCoreCMM4Switch02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.01: POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000069", chkPOECMM401,
                    hfPOECMM401Comentario, null, null,
                    hfPOECMM401, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.02: POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000070", chkPOECMM402,
                    hfPOECMM402Comentario, null, null,
                    hfPOECMM402, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 8: TDK Lambda
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000071", chkTDKLambda,
                    hfTDKLambdaComentario, null, null,
                    hfTDKLambda, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9.01: Energía TDK-Lambda (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000072", chkEnergiaTDKLambda01,
                    hfEnergiaTDKLambda01Comentario, null, null,
                    hfEnergiaTDKLambda01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9.02: Energía TDK-Lambda (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000073", chkEnergiaTDKLambda02,
                    hfEnergiaTDKLambda02Comentario, null, null,
                    hfEnergiaTDKLambda02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10: Conexión TDK-Lambda a CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000074", chkConexionTDKLambdaCMM4,
                    hfConexionTDKLambdaCMM4Comentario, null, null,
                    hfConexionTDKLambdaCMM4, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion 

                #region Usuario Creacion
                UsuarioBE UsuarioCreacion = (UsuarioBE)Session["Usuario"];
                Documento.Detalles.ForEach(i => i.UsuarioCreacion = UsuarioCreacion);
                //Documento.Materiales.ForEach(i => i.UsuarioCreacion = UsuarioCreacion);
                //Documento.MedicionesEnlacePropagacion.ForEach(i => i.UsuarioCreacion = UsuarioCreacion);
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