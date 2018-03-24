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
    public partial class DocumentoInventarioPMP : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000004";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    #endregion

                    #region Antena s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000032",
                        imgAntenaSNEjemplo);
                    #endregion

                    #region Arrestor LAN s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000033",
                        imgArrestorLANSNEjemplo);
                    #endregion

                    #region ODUs s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000034",
                        imgODUsSNEjemplo);
                    #endregion

                    #region POE s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000035",
                        imgPOESNEjemplo);
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
                #region Antena s/n
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000055", chkAntenaSN,
                    hfAntenaSNComentario, null, null,
                    hfAntenaSN, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Arrestor LAN s/n
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000056", chkArrestorLANSN,
                    hfArrestorLANSNComentario, null, null,
                    hfArrestorLANSN, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Arrestor ODUs s/n
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000057", chkODUsSN,
                    hfODUsSNComentario, null, null,
                    hfODUsSN, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Arrestor POE s/n
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000058", chkPOESN,
                    hfPOESNComentario, null, null,
                    hfPOESN, strRutaFisicaTemporal,
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