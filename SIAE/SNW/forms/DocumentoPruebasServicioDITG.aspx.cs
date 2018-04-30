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
    public partial class DocumentoPruebasServicioDITGPTP : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000010";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ") " + " .:SIAE:.";
                    #endregion

                    #region Pruebas de Servicios

                    if (Request.QueryString["IdDocumento"].Equals("000010"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
                    {
                        #region Pantalla Resultado Prueba DITG (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000135",
                            imgPantallaResultadoPruebaDITGEjemplo);
                        #endregion
                    }
                    else if (Request.QueryString["IdDocumento"].Equals("000011"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
                    {
                        #region Ping hacia CPE Desde Nodo A (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000140",
                            imgPingHaciaCPEDesdeNodoAEjemplo);
                        #endregion
                    }


                    #region Fecha Hora Router Distrital Desde Nodo A (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000136",
                        imgFechaHoraRouterDesdeNodoAEjemplo);
                    #endregion

                    if (Request.QueryString["IdDocumento"].Equals("000010"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
                    {
                        #region Ping Todos Usuarios Sólo Microonda (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000137",
                            imgPingTodosUsuariosSoloMicroondaEjemplo);
                        #endregion
                    }
                    else if (Request.QueryString["IdDocumento"].Equals("000011"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
                    {
                        #region Ping Todos Usuarios Sólo Microonda 01 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000142",
                            imgPingTodosUsuariosSoloMicroonda01Ejemplo);
                        #endregion

                        #region Ping Todos Usuarios Sólo Microonda 02 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000143",
                            imgPingTodosUsuariosSoloMicroonda02Ejemplo);
                        #endregion

                        #region Ping Todos Usuarios Sólo Microonda 03 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000144",
                            imgPingTodosUsuariosSoloMicroonda03Ejemplo);
                        #endregion

                        #region Ping Todos Usuarios Sólo Microonda 04 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000145",
                            imgPingTodosUsuariosSoloMicroonda04Ejemplo);
                        #endregion

                        #region Ping Todos Usuarios Sólo Microonda 05 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000146",
                            imgPingTodosUsuariosSoloMicroonda05Ejemplo);
                        #endregion

                        #region Ping Todos Usuarios Sólo Microonda 06 (Ejemplo)
                        UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000147",
                            imgPingTodosUsuariosSoloMicroonda06Ejemplo);
                        #endregion
                    }

                    #region Direcciones MAC (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000138",
                        imgDireccionesMACEjemplo);
                    #endregion

                    #region Resultado Prueba DITG (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000139",
                        imgResultadoPruebaDITGEjemplo);
                    #endregion

                    #endregion

                    #region Guardamos el documento
                    Session["Documento"] = Documento;
                    #endregion

                    #region Asignacion Perfil
                    hfIdPerfil.Value = Usuario.Perfil.IdValor;
                    #endregion

                    #region Asignacion Documento
                    hfIdDocumento.Value = Request.QueryString["IdDocumento"];
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

                        #region Pruebas de Servicio

                        #region Tiempo Prueba (s)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000193").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTiempoPrueba,
                            hfTiempoPruebaComentario, null,
                            txtTiempoPrueba, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Retardo Mín. (RTT) (s)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000194").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkRetardoMinimo,
                            hfRetardoMinimoComentario, null,
                            txtRetardoMinimo, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Retardo Máx. (RTT) (s)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000195").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkRetardoMaximo,
                            hfRetardoMaximoComentario, null,
                            txtRetardoMaximo, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Retardo Prom. (RTT) (s)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000196").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkRetardoPromedio,
                            hfRetardoPromedioComentario, null,
                            txtRetardoPromedio, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Jitter Promedio (s)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000197").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkJitterPromedio,
                            hfJitterPromedioComentario, null,
                            txtJitterPromedio, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Jitter Promedio (s)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000198").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDesviacionEstandarRetardo,
                            hfDesviacionEstandarRetardoComentario, null,
                            txtDesviacionEstandarRetardo, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Bytes Recibidos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000199").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkBytesRecibidos,
                            hfBytesRecibidosComentario, null,
                            txtBytesRecibidos, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Throughput Prom. (Kbps)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000200").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkThroughputPromedio,
                            hfThroughputPromedioComentario, null,
                            txtThroughputPromedio, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Descarte Paquetes
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000201").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDescartePaquetes,
                            hfDescartePaquetesComentario, null,
                            txtDescartePaquetes, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        if (hfIdDocumento.Value.Equals("000010"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
                        {
                            #region Foto 1: Fachada del Nodo
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000202").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPantallaResultadoPruebaDITG,
                                hfPantallaResultadoPruebaDITGComentario, null, null,
                                hfPantallaResultadoPruebaDITG, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion
                        }
                        else if (hfIdDocumento.Value.Equals("000011"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
                        {
                            #region Ping hacia CPE Desde Nodo A
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000207").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingHaciaCPEDesdeNodoA,
                                hfPingHaciaCPEDesdeNodoAComentario, null, null,
                                hfPingHaciaCPEDesdeNodoA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion
                        }

                        #region Fecha Hora Router Distrital Desde Nodo A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000203").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFechaHoraRouterDesdeNodoA,
                            hfFechaHoraRouterDesdeNodoAComentario, null, null,
                            hfFechaHoraRouterDesdeNodoA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        if (hfIdDocumento.Value.Equals("000010"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
                        {
                            #region Ping Todos Usuarios Sólo Microonda
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000204").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda,
                                hfPingTodosUsuariosSoloMicroondaComentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion
                        }
                        else if (hfIdDocumento.Value.Equals("000011"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
                        {
                            #region Ping Todos Usuarios Sólo Microonda 01
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000208").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda01,
                                hfPingTodosUsuariosSoloMicroonda01Comentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda01, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Ping Todos Usuarios Sólo Microonda 02
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000209").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda02,
                                hfPingTodosUsuariosSoloMicroonda02Comentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda02, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Ping Todos Usuarios Sólo Microonda 03
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000210").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda03,
                                hfPingTodosUsuariosSoloMicroonda03Comentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda03, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Ping Todos Usuarios Sólo Microonda 04
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000211").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda04,
                                hfPingTodosUsuariosSoloMicroonda04Comentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda04, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Ping Todos Usuarios Sólo Microonda 05
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000212").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda05,
                                hfPingTodosUsuariosSoloMicroonda05Comentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda05, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Ping Todos Usuarios Sólo Microonda 06
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000213").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPingTodosUsuariosSoloMicroonda06,
                                hfPingTodosUsuariosSoloMicroonda06Comentario, null, null,
                                hfPingTodosUsuariosSoloMicroonda06, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                        }

                        #region Direcciones MAC
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000205").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDireccionesMAC,
                            hfDireccionesMACComentario, null, null,
                            hfDireccionesMAC, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Resultado Prueba DITG
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000206").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkResultadoPruebaDITG,
                            hfResultadoPruebaDITGComentario, null, null,
                            hfResultadoPruebaDITG, strRutaFisicaTemporal,
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

                #region Pruebas de Servicios

                #region Tiempo Prueba (s)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000193", chkTiempoPrueba,
                    hfTiempoPruebaComentario, null, txtTiempoPrueba, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Retardo Mín. (RTT) (s)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000194", chkRetardoMinimo,
                    hfRetardoMinimoComentario, null,
                    txtRetardoMinimo, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Retardo Máx. (RTT) (s)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000195", chkRetardoMaximo,
                    hfRetardoMaximoComentario, null,
                    txtRetardoMaximo, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Retardo Prom. (RTT) (s)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000196", chkRetardoPromedio,
                    hfRetardoPromedioComentario, null,
                    txtRetardoPromedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Jitter Promedio (s)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000197", chkJitterPromedio,
                    hfJitterPromedioComentario, null,
                    txtJitterPromedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Desv. Estan. Retardo (s)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000198", chkDesviacionEstandarRetardo,
                    hfDesviacionEstandarRetardoComentario, null,
                    txtDesviacionEstandarRetardo, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Bytes Recibidos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000199", chkBytesRecibidos,
                    hfBytesRecibidosComentario, null,
                    txtBytesRecibidos, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Throughput Prom. (Kbps)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000200", chkThroughputPromedio,
                    hfThroughputPromedioComentario, null,
                    txtThroughputPromedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Descarte Paquetes
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000201", chkDescartePaquetes,
                    hfDescartePaquetesComentario, null,
                    txtDescartePaquetes, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                if (hfIdDocumento.Value.Equals("000010"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
                {
                    #region Pantalla Resultado Prueba DITG
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000202", chkPantallaResultadoPruebaDITG,
                    hfPantallaResultadoPruebaDITGComentario, null, null,
                    hfPantallaResultadoPruebaDITG, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                    #endregion
                }
                else if (hfIdDocumento.Value.Equals("000011"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
                {
                    #region Ping hacia CPE Desde Nodo A
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000207", chkPingHaciaCPEDesdeNodoA,
                    hfPingHaciaCPEDesdeNodoAComentario, null, null,
                    hfPingHaciaCPEDesdeNodoA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                    #endregion
                }

                #region Fecha Hora Router Distrital Desde Nodo A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000203", chkFechaHoraRouterDesdeNodoA,
                    hfFechaHoraRouterDesdeNodoAComentario, null, null,
                    hfFechaHoraRouterDesdeNodoA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                if (hfIdDocumento.Value.Equals("000010"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PTP
                {
                    #region Ping Todos Usuarios Sólo Microonda
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000204", chkPingTodosUsuariosSoloMicroonda,
                        hfPingTodosUsuariosSoloMicroondaComentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion
                }
                else if (hfIdDocumento.Value.Equals("000011"))//ANEXO 01 PRUEBAS DE SERVICIO DITG PMP
                {
                    #region Ping Todos Usuarios Sólo Microonda 01
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000208", chkPingTodosUsuariosSoloMicroonda01,
                        hfPingTodosUsuariosSoloMicroonda01Comentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda01, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Ping Todos Usuarios Sólo Microonda 02
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000209", chkPingTodosUsuariosSoloMicroonda02,
                        hfPingTodosUsuariosSoloMicroonda02Comentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda02, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Ping Todos Usuarios Sólo Microonda 03
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000210", chkPingTodosUsuariosSoloMicroonda03,
                        hfPingTodosUsuariosSoloMicroonda03Comentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda03, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Ping Todos Usuarios Sólo Microonda 04
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000211", chkPingTodosUsuariosSoloMicroonda04,
                        hfPingTodosUsuariosSoloMicroonda04Comentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda04, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Ping Todos Usuarios Sólo Microonda 05
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000212", chkPingTodosUsuariosSoloMicroonda05,
                        hfPingTodosUsuariosSoloMicroonda05Comentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda05, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion

                    #region Ping Todos Usuarios Sólo Microonda 06
                    UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                        Documento, "000213", chkPingTodosUsuariosSoloMicroonda06,
                        hfPingTodosUsuariosSoloMicroonda06Comentario, null, null,
                        hfPingTodosUsuariosSoloMicroonda06, strRutaFisicaTemporal,
                        Type.GetType("System.Byte[]"));
                    #endregion
                }

                #region Direcciones MAC
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000205", chkDireccionesMAC,
                    hfDireccionesMACComentario, null, null,
                    hfDireccionesMAC, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Resultado Prueba DITG
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000206", chkResultadoPruebaDITG,
                    hfResultadoPruebaDITGComentario, null, null,
                    hfResultadoPruebaDITG, strRutaFisicaTemporal,
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