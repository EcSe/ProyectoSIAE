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
                    UsuarioBE Usuario = (UsuarioBE)Session["Usuario"];
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

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ") " + " .:SIAE:.";
                    #endregion

                    #region Equipamiento
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();

                    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    DocumentoEquipamiento.Documento = Documento;
                    lstDocumentoEquipamiento = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    //Session["EquipamientosA"] = lstDocumentoEquipamientoA;

                    #endregion

                    #region 11 Serie logística

                    #region Antena s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000032",
                        imgAntenaSNEjemplo);
                    #endregion

                    #region Antena s/n
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "ICA0065;ICA0093;ICA0063", 1,
                        lblAntenaSN);
                    #endregion


                    #region Arrestor LAN s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000033",
                        imgArrestorLANSNEjemplo);
                    #endregion

                    #region ODUs s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000034",
                        imgODUsSNEjemplo);
                    #endregion

                    #region ODUs s/n
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "ICA0064", 1,
                        lblODUsSN);
                    #endregion

                    #region POE s/n (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000035",
                        imgPOESNEjemplo);
                    #endregion

                    #region POE s/n
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento,
                        "ICD001578", 1,
                        lblPOESN);
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

                        #region Antena s/n
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000055").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAntenaSN,
                            hfAntenaSNComentario, null, null,
                            hfAntenaSN, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Arrestor LAN s/n
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000056").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkArrestorLANSN,
                            hfArrestorLANSNComentario, null, null,
                            hfArrestorLANSN, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Arrestor ODUs s/n
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000057").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkODUsSN,
                            hfODUsSNComentario, null, null,
                            hfODUsSN, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Arrestor POE s/n
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000058").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPOESN,
                            hfPOESNComentario, null, null,
                            hfPOESN, strRutaFisicaTemporal,
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