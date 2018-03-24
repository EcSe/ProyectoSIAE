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
    public partial class DocumentoProtocoloInstalacion : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000007";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    #endregion

                    #region Reporte Fotográfico
                    #region Foto 1: Omniswitch OS6450-24 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000052",
                        imgOmniswitchEjemplo);
                    #endregion

                    #region Foto 2: Panorámica del Rack (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000053",
                        imgPanoramicaRackSwitchEjemplo);
                    #endregion

                    #region Foto 3: Conexión en Breakers Asignados (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000054",
                        imgConexionBreakersAsignadosEjemplo);
                    #endregion

                    #region Foto 4: Conexión de Alimentación en Switch (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000055",
                        imgConexionAlimentacionSwitchEjemplo);
                    #endregion

                    #region Foto 5: Aterramiento en el Switch (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000056",
                        imgAterramientoSwitchEjemplo);
                    #endregion

                    #region Foto 6: Aterramiento en la Barra Tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000057",
                       imgAterramientoBarraTierraEjemplo);
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

                #region Carátula

                #region Fecha
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000002", chkFecha, hfFechaComentario,
                    null, txtFecha, null, null,
                    Type.GetType("System.DateTime"));
                #endregion
                #endregion

                #region Reporte Fotográfico

                #region Foto 1: Omniswitch OS6450-24
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000076", chkOmniswitch,
                    hfOmniswitchComentario, null, null,
                    hfOmniswitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2: Panorámica del Rack
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000077", chkPanoramicaRackSwitch,
                    hfPanoramicaRackSwitchComentario, null, null,
                    hfPanoramicaRackSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 3: Conexión en Breakers Asignados
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000078", chkConexionBreakersAsignados,
                    hfConexionBreakersAsignadosComentario, null, null,
                    hfConexionBreakersAsignados, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 4: Conexión de Alimentación en Switch
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000079", chkConexionAlimentacionSwitch,
                    hfConexionAlimentacionSwitchComentario, null, null,
                    hfConexionAlimentacionSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5: Aterramiento en el Switch
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000080", chkAterramientoSwitch,
                    hfAterramientoSwitchComentario, null, null,
                    hfAterramientoSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6: Aterramiento en la Barra Tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000081", chkAterramientoBarraTierra,
                    hfAterramientoBarraTierraComentario, null, null,
                    hfAterramientoBarraTierra, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion                

                #region Materiales
                #region # Serie Switch
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000082", chkSerieSwitch, hfSerieSwitchComentario,
                    null, txtSerieSwitch, null, null,
                    Type.GetType("System.String"));
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