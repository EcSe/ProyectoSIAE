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
    public partial class DocumentoActaInstalacionPTPLicenciado : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = "000009";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + " || Nodo B: " + Tarea.NodoB.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + " || Nodo B: " + Tarea.NodoB.IdNodo + ") " + " .:SIAE:.";
                    #endregion

                    #region 1 Configuración y Mediciones

                    #region Configuración General del Enlace Estación A (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000354",
                        imgConfiguracionGeneralEnlaceEstacionAEjemplo);
                    #endregion

                    #region Configuración General del Enlace Estación B (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000355",
                        imgConfiguracionGeneralEnlaceEstacionBEjemplo);
                    #endregion

                    #region Configuración de los LAN Estación A 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000356",
                        imgConfiguracionLANEstacionA01Ejemplo);
                    #endregion

                    #region Configuración de los LAN Estación A 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000357",
                        imgConfiguracionLANEstacionA02Ejemplo);
                    #endregion

                    #region Configuración de los LAN Estación A 03 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000358",
                        imgConfiguracionLANEstacionA03Ejemplo);
                    #endregion

                    #region Configuración de los LAN Estación B 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000359",
                        imgConfiguracionLANEstacionB01Ejemplo);
                    #endregion

                    #region Configuración de los LAN Estación B 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000360",
                        imgConfiguracionLANEstacionB02Ejemplo);
                    #endregion

                    #region Configuración de los LAN Estación B 03 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000361",
                        imgConfiguracionLANEstacionB03Ejemplo);
                    #endregion

                    #region Configuración Ethernet Switch Estación A 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000362",
                        imgConfiguracionEthernetSwitchEstacionA01Ejemplo);
                    #endregion

                    #region Configuración Ethernet Switch Estación A 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000363",
                        imgConfiguracionEthernetSwitchEstacionA02Ejemplo);
                    #endregion

                    #region Configuración Ethernet Switch Estación B 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000364",
                        imgConfiguracionEthernetSwitchEstacionB01Ejemplo);
                    #endregion

                    #region Configuración Ethernet Switch Estación B 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000365",
                        imgConfiguracionEthernetSwitchEstacionB02Ejemplo);
                    #endregion

                    #region Configuración IP Estación A (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000366",
                        imgConfiguracionIPEstacionAEjemplo);
                    #endregion

                    #region Configuración IP Estación B (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000367",
                        imgConfiguracionIPEstacionBEjemplo);
                    #endregion

                    #endregion

                    #region 2 Materiales A

                    #region Equipamiento
                    //List<EntidadDetalleBE> lstEquipamientoA = new List<EntidadDetalleBE>();
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamientoA = new List<DocumentoEquipamientoBE>();
                    //entidadDetalleBE = new EntidadDetalleBE();
                    //entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    //entidadDetalleBE.IdValor = "000008";
                    //entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    //entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "EQUI";
                    //entidadDetalleBE.Metodo = "*";
                    //lstEquipamientoA = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    ////lstEquipamiento.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    //foreach (EntidadDetalleBE item in lstEquipamientoA)
                    //{
                    //    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    //    DocumentoEquipamiento.Documento.Documento.IdValor = Documento.Documento.IdValor;
                    //    DocumentoEquipamiento.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                    //    DocumentoEquipamiento.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoIIBBA.IdNodo;
                    //    DocumentoEquipamiento.Documento.Tarea.NodoB.IdNodo = Documento.Tarea.NodoB.IdNodo;
                    //    DocumentoEquipamiento.Equipamiento = item;
                    //    lstDocumentoEquipamientoA.Add(DocumentoEquipamiento);
                    //}

                    #region Verificamos si tiene CMM4
                    CMM4BE CMM4A = new CMM4BE();
                    List<CMM4BE> lstCMM4A = new List<CMM4BE>();
                    CMM4A.Nodo.IdNodo = Tarea.NodoIIBBA.IdNodo;
                    lstCMM4A = CMM4BL.ListarCMM4(CMM4A);
                    //if (lstCMM4A.Count.Equals(0))//Si no tiene CMM4 le quitamos los equipamientos del CMM4
                    //{
                    //    //Quitar elementos de una lista
                    //    //http://ltuttini.blogspot.pe/2010/04/c-eliminar-items-en-una-lista.html
                    //    lstDocumentoEquipamientoA.RemoveAll(de => de.Equipamiento.IdValor.Equals("0000000008")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000010")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000011")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000012")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000013"));
                    //}
                    #endregion

                    //Session["EquipamientosA"] = lstDocumentoEquipamientoA;
                    ////gvMateriales.DataSource = lstMaterial;
                    //gvEquipamientosA.DataSource = lstDocumentoEquipamientoA;
                    //gvEquipamientosA.DataBind();

                    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    DocumentoEquipamiento.Documento = Documento;
                    lstDocumentoEquipamientoA = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    Session["EquipamientosA"] = lstDocumentoEquipamientoA;

                    gvEquipamientosA.DataSource = lstDocumentoEquipamientoA;
                    gvEquipamientosA.DataBind();

                    #endregion

                    #region Materiales
                    List<EntidadDetalleBE> lstMaterialA = new List<EntidadDetalleBE>();
                    List<DocumentoMaterialBE> lstDocumentoMaterialA = new List<DocumentoMaterialBE>();
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    entidadDetalleBE.IdValor = "000008";
                    entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "MAT";
                    entidadDetalleBE.Metodo = "*";
                    lstMaterialA = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    //lstMaterial.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    foreach (EntidadDetalleBE item in lstMaterialA)
                    {
                        DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                        DocumentoMaterial.Documento.Documento.IdValor = Documento.Documento.IdValor;
                        DocumentoMaterial.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                        DocumentoMaterial.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoIIBBA.IdNodo;
                        DocumentoMaterial.Documento.Tarea.NodoB.IdNodo = Documento.Tarea.NodoB.IdNodo;
                        DocumentoMaterial.Material = item;
                        lstDocumentoMaterialA.Add(DocumentoMaterial);
                    }
                    Session["MaterialesA"] = lstDocumentoMaterialA;
                    //gvMateriales.DataSource = lstMaterial;
                    gvMaterialesA.DataSource = lstDocumentoMaterialA;
                    gvMaterialesA.DataBind();
                    #endregion

                    #endregion

                    #region 3 Materiales B

                    #region Equipamiento
                    //List<EntidadDetalleBE> lstEquipamientoB = new List<EntidadDetalleBE>();
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamientoB = new List<DocumentoEquipamientoBE>();
                    //entidadDetalleBE = new EntidadDetalleBE();
                    //entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    //entidadDetalleBE.IdValor = "000008";
                    //entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    //entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "EQUI";
                    //entidadDetalleBE.Metodo = "*";
                    //lstEquipamientoB = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    //lstEquipamiento.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    //foreach (EntidadDetalleBE item in lstEquipamientoB)
                    //{
                    //    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    //    DocumentoEquipamiento.Documento.Documento.IdValor = Documento.Documento.IdValor;
                    //    DocumentoEquipamiento.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                    //    DocumentoEquipamiento.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoB.IdNodo;
                    //    DocumentoEquipamiento.Documento.Tarea.NodoB.IdNodo = Documento.Tarea.NodoIIBBA.IdNodo;
                    //    DocumentoEquipamiento.Equipamiento = item;
                    //    lstDocumentoEquipamientoB.Add(DocumentoEquipamiento);
                    //}

                    #region Verificamos si tiene CMM4
                    CMM4BE CMM4B = new CMM4BE();
                    List<CMM4BE> lstCMM4B = new List<CMM4BE>();
                    CMM4B.Nodo.IdNodo = Tarea.NodoB.IdNodo;
                    lstCMM4B = CMM4BL.ListarCMM4(CMM4B);
                    //if (lstCMM4B.Count.Equals(0))//Si no tiene CMM4 le quitamos los equipamientos del CMM4
                    //{
                    //    //Quitar elementos de una lista
                    //    //http://ltuttini.blogspot.pe/2010/04/c-eliminar-items-en-una-lista.html
                    //    lstDocumentoEquipamientoB.RemoveAll(de => de.Equipamiento.IdValor.Equals("0000000008")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000010")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000011")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000012")
                    //                                            || de.Equipamiento.IdValor.Equals("0000000013"));
                    //}
                    #endregion

                    //Session["EquipamientosB"] = lstDocumentoEquipamientoB;
                    ////gvMateriales.DataSource = lstMaterial;
                    //gvEquipamientosB.DataSource = lstDocumentoEquipamientoB;
                    //gvEquipamientosB.DataBind();

                    DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    //DocumentoEquipamiento.Documento = Documento.Clone();
                    //DocumentoEquipamiento.Documento.Tarea.NodoIIBBA.IdNodo = Tarea.NodoB.IdNodo;
                    DocumentoEquipamiento.Documento.Documento.IdValor = Documento.Documento.IdValor;
                    DocumentoEquipamiento.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                    DocumentoEquipamiento.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoB.IdNodo;
                    lstDocumentoEquipamientoB = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    Session["EquipamientosB"] = lstDocumentoEquipamientoB;

                    gvEquipamientosB.DataSource = lstDocumentoEquipamientoB;
                    gvEquipamientosB.DataBind();

                    #endregion

                    #region Materiales
                    List<EntidadDetalleBE> lstMaterialB = new List<EntidadDetalleBE>();
                    List<DocumentoMaterialBE> lstDocumentoMaterialB = new List<DocumentoMaterialBE>();
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    entidadDetalleBE.IdValor = "000008";
                    entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "MAT";
                    entidadDetalleBE.Metodo = "*";
                    lstMaterialB = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    //lstMaterial.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    foreach (EntidadDetalleBE item in lstMaterialB)
                    {
                        DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                        DocumentoMaterial.Documento.Documento.IdValor = Documento.Documento.IdValor;
                        DocumentoMaterial.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                        DocumentoMaterial.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoB.IdNodo;
                        DocumentoMaterial.Documento.Tarea.NodoB.IdNodo = Documento.Tarea.NodoIIBBA.IdNodo;
                        DocumentoMaterial.Material = item;
                        lstDocumentoMaterialB.Add(DocumentoMaterial);
                    }
                    Session["MaterialesB"] = lstDocumentoMaterialB;
                    //gvMateriales.DataSource = lstMaterial;
                    gvMaterialesB.DataSource = lstDocumentoMaterialB;
                    gvMaterialesB.DataBind();
                    #endregion

                    #endregion

                    #region 4 Longitud SFTP

                    #region SFTP (Gráfico)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000010",
                        imgSFTPEjemplo);
                    #endregion




                    #endregion

                    #region 6 Cálculo Propagacion

                    #region Ingeniería (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000067",
                        imgIngenieriaEjemplo);
                    #endregion

                    #region Perfil (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000068",
                        imgPerfilEjemplo);
                    #endregion

                    #endregion

                    #region 8 Pruebas de Interferencia

                    #region Pantalla RADIO Estación A (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000368",
                        imgPantallaRadioEstacionAEjemplo);
                    #endregion

                    #region Pantalla RADIO Estación B (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000369",
                        imgPantallaRadioEstacionBEjemplo);
                    #endregion

                    #endregion

                    #region 9 Serie Equipos (fotos)

                    #region Estacion A

                    #region Serie Antena (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000071",
                        imgSerieAntenaEstacionAEjemplo);
                    #endregion

                    #region Serie Antena
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "UBQBGD00S;UBQCGD00S;UBQFGD00S;UBQBGG00S;UBQCGG00S;U59CGY00S;UBUBGG00S", 1,
                        lblSerieAntenaEstacionA);
                    #endregion

                    #region Serie ODU (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000072",
                        imgSerieODUEstacionAEjemplo);
                    #endregion

                    #region Serie ODU
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "GB9612;GB9613;GB9614;GB9615;GB9616;GB9617;GB9726;GB9727;ICA0068;ICA0069", 1,
                        lblSerieODUEstacionA);
                    #endregion

                    #region Serie POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000073",
                        imgSeriePOEEstacionAEjemplo);
                    #endregion

                    #region Serie POE
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "D60077;D60078", 1,
                        lblSeriePOEEstacionA);
                    #endregion

                    hfCMM4A.Value = lstCMM4A.Count.ToString();
                    //if (!lstCMM4A.Count.Equals(0))//Si tiene CMM4 pedimos los equipos necesarios
                    //{
                    #region Serie CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000074",
                    imgSerieCMM4EstacionAEjemplo);
                    #endregion

                    #region Serie CMM4
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "ICA0071", 1,
                        lblSerieCMM4EstacionA);
                    #endregion

                    #region Serie UGPS (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000075",
                        imgSerieUGPSEstacionAEjemplo);
                    #endregion

                    #region Serie Conversor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000076",
                        imgSerieConversorEstacionAEjemplo);
                    #endregion

                    #region Serie Conversor
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoA,
                        "ICD001539", 1,
                        lblSerieConversorEstacionA);
                    #endregion

                    //}
                    #endregion

                    #region Estacion B

                    #region Serie Antena (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000077",
                        imgSerieAntenaEstacionBEjemplo);
                    #endregion

                    #region Serie Antena
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "UBQBGD00S;UBQCGD00S;UBQFGD00S;UBQBGG00S;UBQCGG00S;U59CGY00S;UBUBGG00S", 1,
                        lblSerieAntenaEstacionB);
                    #endregion

                    #region Serie ODU (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000078",
                        imgSerieODUEstacionBEjemplo);
                    #endregion

                    #region Serie ODU
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "GB9612;GB9613;GB9614;GB9615;GB9616;GB9617;GB9726;GB9727;ICA0068;ICA0069", 1,
                        lblSerieODUEstacionB);
                    #endregion

                    #region Serie POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000079",
                        imgSeriePOEEstacionBEjemplo);
                    #endregion

                    #region Serie POE
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "D60077;D60078", 1,
                        lblSeriePOEEstacionB);
                    #endregion

                    hfCMM4B.Value = lstCMM4B.Count.ToString();
                    //if (!lstCMM4B.Count.Equals(0))//Si tiene CMM4 pedimos los equipos necesarios
                    //{
                    #region Serie CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000080",
                    imgSerieCMM4EstacionBEjemplo);
                    #endregion

                    #region Serie CMM4
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "ICA0071", 1,
                        lblSerieCMM4EstacionB);
                    #endregion

                    #region Serie UGPS (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000081",
                        imgSerieUGPSEstacionBEjemplo);
                    #endregion

                    #region Serie Conversor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000082",
                        imgSerieConversorEstacionBEjemplo);
                    #endregion

                    #region Serie Conversor
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamientoB,
                        "ICD001539", 1,
                        lblSerieConversorEstacionB);
                    #endregion

                    //}
                    #endregion

                    #endregion

                    #region 10 Reporte Fotográfico

                    #region Estacion A

                    #region Foto 1: Panorámica de la Estación (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000370",
                        imgPanoramicaEstacionAEjemplo);
                    #endregion

                    #region Foto 2: Posición e Identificación Antena Instalada en Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000371",
                        imgPosicionIdentificacionEstacionAEjemplo);
                    #endregion

                    #region Foto 3: Antena y ODU en Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000372",
                        imgAntenaODUTorreEstacionAEjemplo);
                    #endregion

                    #region Foto 5: Engrasado de Pernos (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000373",
                        imgEngrasadoPernosEstacionAEjemplo);
                    #endregion

                    #region Foto 6: Siliconeado del Conector (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000374",
                        imgSiliconeadoConectorEstacionAEjemplo);
                    #endregion

                    #region Foto 7.01: Aterramiento ODU en Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000375",
                        imgAterramientoODUEstacionA01Ejemplo);
                    #endregion

                    #region Foto 7.02: Aterramiento ODU en Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000376",
                        imgAterramientoODUEstacionA02Ejemplo);
                    #endregion

                    #region Foto 8: Recorrido Cable SFTP (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000386",
                        imgRecorridoCableSFTPEstacionAEjemplo);
                    #endregion

                    #region Foto 9.01: Aterramiento Cable SFTP Outdoor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000387",
                        imgAterramientoCableSFTPOutdoor01EstacionAEjemplo);
                    #endregion

                    #region Foto 9.02: Aterramiento Cable SFTP Outdoor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000388",
                        imgAterramientoCableSFTPOutdoor02EstacionAEjemplo);
                    #endregion

                    #region Foto 21: Etiquetado del POE/CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000377",
                        imgEtiquetadoPOECMM4EstacionAEjemplo);
                    #endregion

                    #region Foto 22: Panorámica del Rack (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000378",
                        imgPanoramicaRackEstacionAEjemplo);
                    #endregion

                    #region Foto 23.01: Aterramiento POE (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000379",
                        imgAterramientoPOE01EstacionAEjemplo);
                    #endregion

                    #region Foto 23.02: Aterramiento POE (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000380",
                        imgAterramientoPOE02EstacionAEjemplo);
                    #endregion

                    #region Foto 24.01: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000381",
                        imgEnergiaPOEEtiqueta01EstacionAEjemplo);
                    #endregion

                    #region Foto 24.02: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000382",
                        imgEnergiaPOEEtiqueta02EstacionAEjemplo);
                    #endregion

                    #region Foto 25.01: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000383",
                        imgPatchCorePOESwitch01EstacionAEjemplo);
                    #endregion

                    #region Foto 25.02: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000384",
                        imgPatchCorePOESwitch02EstacionAEjemplo);
                    #endregion

                    #region Foto 27: POE/CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000385",
                        imgPOECMM4EstacionAEjemplo);
                    #endregion

                    #endregion

                    #region Estacion B

                    #region Foto 1: Panorámica de la Estación (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000370",
                        imgPanoramicaEstacionBEjemplo);
                    #endregion

                    #region Foto 2: Posición e Identificación Antena Instalada en Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000371",
                        imgPosicionIdentificacionEstacionBEjemplo);
                    #endregion

                    #region Foto 3: Antena y ODU en Torre (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000372",
                        imgAntenaODUTorreEstacionBEjemplo);
                    #endregion

                    #region Foto 5: Engrasado de Pernos (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000373",
                        imgEngrasadoPernosEstacionBEjemplo);
                    #endregion

                    #region Foto 6: Siliconeado del Conector (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000374",
                        imgSiliconeadoConectorEstacionBEjemplo);
                    #endregion

                    #region Foto 7: Aterramiento ODU en Torre 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000375",
                        imgAterramientoODUEstacionB01Ejemplo);
                    #endregion

                    #region Foto 7: Aterramiento ODU en Torre 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000376",
                        imgAterramientoODUEstacionB02Ejemplo);
                    #endregion

                    #region Foto 8: Recorrido Cable SFTP (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000386",
                        imgRecorridoCableSFTPEstacionBEjemplo);
                    #endregion

                    #region Foto 9.01: Aterramiento Cable SFTP Outdoor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000387",
                        imgAterramientoCableSFTPOutdoor01EstacionBEjemplo);
                    #endregion

                    #region Foto 9.02: Aterramiento Cable SFTP Outdoor (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000388",
                        imgAterramientoCableSFTPOutdoor02EstacionBEjemplo);
                    #endregion

                    #region Foto 21: Etiquetado del POE/CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000377",
                        imgEtiquetadoPOECMM4EstacionBEjemplo);
                    #endregion

                    #region Foto 22: Panorámica del Rack (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000378",
                        imgPanoramicaRackEstacionBEjemplo);
                    #endregion

                    #region Foto 23.01: Aterramiento POE (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000379",
                        imgAterramientoPOE01EstacionBEjemplo);
                    #endregion

                    #region Foto 23.02: Aterramiento POE (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000380",
                        imgAterramientoPOE02EstacionBEjemplo);
                    #endregion

                    #region Foto 24.01: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000381",
                        imgEnergiaPOEEtiqueta01EstacionBEjemplo);
                    #endregion

                    #region Foto 24.02: Energía de POE con Etiqueta (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000382",
                        imgEnergiaPOEEtiqueta02EstacionBEjemplo);
                    #endregion

                    #region Foto 25.01: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000383",
                        imgPatchCorePOESwitch01EstacionBEjemplo);
                    #endregion

                    #region Foto 25.02: Patch Core del POE al Switch (Inicio/Fin) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000384",
                        imgPatchCorePOESwitch02EstacionBEjemplo);
                    #endregion

                    #region Foto 27: POE/CMM4 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000385",
                        imgPOECMM4EstacionBEjemplo);
                    #endregion

                    #endregion

                    #endregion

                    #region 11 DATOS GENERALES NODO A

                    #region Mediciones de Enlaces de Propagación
                    List<PTPDetalleBE> lstPTPDetalle = new List<PTPDetalleBE>();
                    List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacionA = new List<DocumentoMedicionEnlacePropagacionBE>();
                    PTPDetalleBE PTPDetalle = new PTPDetalleBE();
                    PTPDetalle.PTP.NodoA.IdNodo = Tarea.NodoIIBBA.IdNodo;
                    PTPDetalle.NodoB.IdNodo = Tarea.NodoB.IdNodo;
                    lstPTPDetalle = PTPDetalleBL.ListarPTPDetalles(PTPDetalle);
                    foreach (PTPDetalleBE item in lstPTPDetalle)
                    {
                        DocumentoMedicionEnlacePropagacionBE MedicionEnlacePropagacion = new DocumentoMedicionEnlacePropagacionBE();
                        MedicionEnlacePropagacion.Documento = Documento;
                        MedicionEnlacePropagacion.NodoA = item.PTP.NodoA;
                        MedicionEnlacePropagacion.NodoIIBBB = item.NodoB;
                        lstMedicionEnlacePropagacionA.Add(MedicionEnlacePropagacion);
                    }
                    Session["MedicionesEnlacePropagacionA"] = lstMedicionEnlacePropagacionA;
                    gvMedicionEnlacePropagacionNodoA.DataSource = lstMedicionEnlacePropagacionA;
                    gvMedicionEnlacePropagacionNodoA.DataBind();
                    #endregion

                    #endregion

                    #region 12 DATOS GENERALES NODO B

                    #region Mediciones de Enlaces de Propagación
                    List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacionB = new List<DocumentoMedicionEnlacePropagacionBE>();
                    foreach (PTPDetalleBE item in lstPTPDetalle)
                    {
                        DocumentoMedicionEnlacePropagacionBE MedicionEnlacePropagacion = new DocumentoMedicionEnlacePropagacionBE();
                        MedicionEnlacePropagacion.Documento = Documento;
                        MedicionEnlacePropagacion.NodoA = item.NodoB;
                        MedicionEnlacePropagacion.NodoIIBBB = item.PTP.NodoA;
                        lstMedicionEnlacePropagacionB.Add(MedicionEnlacePropagacion);
                    }
                    Session["MedicionesEnlacePropagacionB"] = lstMedicionEnlacePropagacionB;
                    gvMedicionEnlacePropagacionNodoB.DataSource = lstMedicionEnlacePropagacionB;
                    gvMedicionEnlacePropagacionNodoB.DataBind();
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

                        #region Carátula

                        #region Fecha
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000002").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkFecha, hfFechaComentario,
                            null, txtFecha, null, null,
                            Type.GetType("System.DateTime"));
                        #endregion

                        #endregion

                        #region 1 Configuración y Mediciones

                        #region Dirección Estación A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000084").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkDireccionEstacionA,
                            hfDireccionEstacionAComentario,
                            null, txtDireccionEstacionA, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Dirección Estación B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000085").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkDireccionEstacionB,
                            hfDireccionEstacionBComentario,
                            null, txtDireccionEstacionB, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Referencia Ubicación Estación A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000086").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkReferenciaEstacionA,
                            hfReferenciaEstacionAComentario,
                            null, txtReferenciaEstacionA, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Referencia Ubicación Estación B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000087").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkReferenciaEstacionB,
                            hfReferenciaEstacionBComentario,
                            null, txtReferenciaEstacionB, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Nivel de Recepción de operación Radio A (dBm)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000088").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkNivelRecepcionOperacionRadioA,
                            hfNivelRecepcionOperacionRadioAComentario,
                            null, txtNivelRecepcionOperacionRadioA, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Nivel de Recepción de operación Radio B (dBm)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000089").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkNivelRecepcionOperacionRadioB,
                            hfNivelRecepcionOperacionRadioBComentario,
                            null, txtNivelRecepcionOperacionRadioB, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Ping PTP Radio A (ms)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000090").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPingPTPRadioA,
                            hfPingPTPRadioAComentario,
                            null, txtPingPTPRadioA, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Ping PTP Radio B (ms)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000091").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPingPTPRadioB,
                            hfPingPTPRadioBComentario,
                            null, txtPingPTPRadioB, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Configuración General del Enlace Estación A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000092").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionGeneralEnlaceEstacionA,
                            hfConfiguracionGeneralEnlaceEstacionAComentario, null, null,
                            hfConfiguracionGeneralEnlaceEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración General del Enlace Estación B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000093").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionGeneralEnlaceEstacionB,
                            hfConfiguracionGeneralEnlaceEstacionBComentario, null, null,
                            hfConfiguracionGeneralEnlaceEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración LAN Estación A 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000481").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionLANEstacionA01,
                            hfConfiguracionLANEstacionA01Comentario, null, null,
                            hfConfiguracionLANEstacionA01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración LAN Estación A 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000482").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionLANEstacionA02,
                            hfConfiguracionLANEstacionA02Comentario, null, null,
                            hfConfiguracionLANEstacionA02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración LAN Estación A 03
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000483").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionLANEstacionA03,
                            hfConfiguracionLANEstacionA03Comentario, null, null,
                            hfConfiguracionLANEstacionA03, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración LAN Estación B 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000484").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionLANEstacionB01,
                            hfConfiguracionLANEstacionB01Comentario, null, null,
                            hfConfiguracionLANEstacionB01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración LAN Estación B 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000485").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionLANEstacionB02,
                            hfConfiguracionLANEstacionB02Comentario, null, null,
                            hfConfiguracionLANEstacionB02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración LAN Estación B 03
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000486").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionLANEstacionB03,
                            hfConfiguracionLANEstacionB03Comentario, null, null,
                            hfConfiguracionLANEstacionB03, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración Ethernet Switch Estación A 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000497").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionEthernetSwitchEstacionA01,
                            hfConfiguracionEthernetSwitchEstacionA01Comentario, null, null,
                            hfConfiguracionEthernetSwitchEstacionA01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración Ethernet Switch Estación A 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000498").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionEthernetSwitchEstacionA02,
                            hfConfiguracionEthernetSwitchEstacionA02Comentario, null, null,
                            hfConfiguracionEthernetSwitchEstacionA02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración Ethernet Switch Estación B 01
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000499").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionEthernetSwitchEstacionB01,
                            hfConfiguracionEthernetSwitchEstacionB01Comentario, null, null,
                            hfConfiguracionEthernetSwitchEstacionB01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración Ethernet Switch Estación B 02
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000500").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionEthernetSwitchEstacionB02,
                            hfConfiguracionEthernetSwitchEstacionB02Comentario, null, null,
                            hfConfiguracionEthernetSwitchEstacionB02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración IP Estación A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000099").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionIPEstacionA,
                            hfConfiguracionIPEstacionAComentario, null, null,
                            hfConfiguracionIPEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Configuración IP Estación B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000100").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkConfiguracionIPEstacionB,
                            hfConfiguracionIPEstacionBComentario, null, null,
                            hfConfiguracionIPEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 2 Materiales A

                        #region Equipamientos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000101").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEquipamientosA, hfEquipamientosAComentario);
                        //List<DocumentoEquipamientoBE> lstDocumentoEquipamientoA = new List<DocumentoEquipamientoBE>();
                        //lstDocumentoEquipamientoA = (List<DocumentoEquipamientoBE>)Session["EquipamientosA"];

                        //foreach (GridViewRow item in gvEquipamientosA.Rows)
                        //{
                        //    String strCodigoEquipamiento = gvEquipamientosA.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                        //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamientoA");
                        //    lstDocumentoEquipamientoA.Where(w => w.Equipamiento.IdValor == strCodigoEquipamiento).ToList().ForEach(s => s.SerieEquipamiento = txtSerieEquipamiento.Text.ToUpper());
                        //}

                        //Documento.Equipamientos = lstDocumentoEquipamientoA;
                        #endregion
                        
                        #region Materiales
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000102").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMaterialesA,
                            hfMaterialesAComentario);
                        DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                        List<DocumentoMaterialBE> lstDocumentoMaterialA2 = new List<DocumentoMaterialBE>();
                        DocumentoMaterial.Documento = Documento;
                        lstDocumentoMaterialA2 = DocumentoMaterialBL.ListarDocumentoMaterial(DocumentoMaterial);
                        Session["MaterialesA"] = lstDocumentoMaterialA2;

                        gvMaterialesA.DataSource = lstDocumentoMaterialA2;
                        gvMaterialesA.DataBind();

                        Documento.Materiales = lstDocumentoMaterialA2;

                        #endregion

                        #endregion

                        #region 3 Materiales B

                        #region Equipamientos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000103").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkEquipamientosB,
                            hfEquipamientosBComentario);
                        //List<DocumentoEquipamientoBE> lstDocumentoEquipamientoB2 = new List<DocumentoEquipamientoBE>();
                        //lstDocumentoEquipamientoB2 = (List<DocumentoEquipamientoBE>)Session["EquipamientosB"];

                        //foreach (GridViewRow item in gvEquipamientosB.Rows)
                        //{
                        //    String strCodigoEquipamiento = gvEquipamientosB.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                        //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamientoB");
                        //    lstDocumentoEquipamientoB2.Where(w => w.Equipamiento.IdValor == strCodigoEquipamiento).ToList().ForEach(s => s.SerieEquipamiento = txtSerieEquipamiento.Text.ToUpper());
                        //}
                        //Insertar al final de la lista
                        //Documento.Equipamientos.InsertRange(Documento.Equipamientos.Count(), lstDocumentoEquipamientoB2);
                        #endregion
                        
                        #region Materiales
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000104").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMaterialesA,
                            hfMaterialesAComentario);
                        DocumentoMaterial = new DocumentoMaterialBE();
                        List<DocumentoMaterialBE> lstDocumentoMaterialB2 = new List<DocumentoMaterialBE>();
                        DocumentoMaterial.Documento.Documento.IdValor = Documento.Documento.IdValor;
                        DocumentoMaterial.Documento.Tarea.IdTarea = Documento.Tarea.IdTarea;
                        DocumentoMaterial.Documento.Tarea.NodoIIBBA.IdNodo = Documento.Tarea.NodoB.IdNodo;
                        lstDocumentoMaterialB2 = DocumentoMaterialBL.ListarDocumentoMaterial(DocumentoMaterial);
                        Session["MaterialesB"] = lstDocumentoMaterialB2;

                        gvMaterialesB.DataSource = lstDocumentoMaterialB2;
                        gvMaterialesB.DataBind();

                        //Insertar al final de la lista
                        Documento.Materiales.InsertRange(Documento.Materiales.Count(), lstDocumentoMaterialB2);

                        #endregion

                        #endregion

                        #region 4 Longitud SFTP

                        #region Estación A

                        #region Distancia B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000105").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkB_A, hfB_AComentario, null, txtB_A,
                            null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia C
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000106").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkC_A, hfC_AComentario,
                            null, txtC_A, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia D
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000107").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkD_A, hfD_AComentario,
                            null, txtD_A, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia E
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000108").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkE_A, hfE_AComentario,
                            null, txtE_A, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #endregion

                        #region Estación B

                        #region Distancia B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000109").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkB_B, hfB_BComentario,
                            null, txtB_B, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia C
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000110").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkC_B, hfC_BComentario,
                            null, txtC_B, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia D
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000111").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkD_B, hfD_BComentario,
                            null, txtD_B, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Distancia E
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000112").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkE_B, hfE_BComentario,
                            null, txtE_B, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #endregion

                        #endregion

                        #region 5 Asignaciones y Observaciones

                        #region Estación A

                        #region Capacidad Breaker (A)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000113").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkCapacidadBreakerEstacionA,
                            hfCapacidadBreakerEstacionAComentario, null,
                            txtCapacidadBreakerEstacionA, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Voltaje CD Breaker (V)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000114").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkVoltajeCDBreakerEstacionA,
                            hfVoltajeCDBreakerEstacionAComentario, null,
                            txtVoltajeCDBreakerEstacionA, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Posición Breaker
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000115").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPosicionBreakerEstacionA,
                            hfPosicionBreakerEstacionAComentario, null,
                            txtPosicionBreakerEstacionA, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Posi. Barra Aterramiento
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000116").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPosicionBarraAterramientoEstacionA,
                            hfPosicionBarraAterramientoEstacionAComentario, null,
                            txtPosicionBarraAterramientoEstacionA, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #endregion

                        #region Estación B

                        #region Capacidad Breaker (A)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000117").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkCapacidadBreakerEstacionB,
                            hfCapacidadBreakerEstacionBComentario, null,
                            txtCapacidadBreakerEstacionB, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Voltaje CD Breaker (V)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000118").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkVoltajeCDBreakerEstacionB,
                            hfVoltajeCDBreakerEstacionBComentario, null,
                            txtVoltajeCDBreakerEstacionB, null, null,
                            Type.GetType("System.Double"));
                        #endregion

                        #region Posición Breaker
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000119").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPosicionBreakerEstacionB,
                            hfPosicionBreakerEstacionBComentario, null,
                            txtPosicionBreakerEstacionB, null, null,
                            Type.GetType("System.Int32"));
                        #endregion

                        #region Posi. Barra Aterramiento
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000120").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPosicionBarraAterramientoEstacionB,
                            hfPosicionBarraAterramientoEstacionBComentario, null,
                            txtPosicionBarraAterramientoEstacionB, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #endregion

                        #endregion

                        #region 6 Cálculo Propagacion

                        #region Ingeniería
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000121").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkIngenieria,
                            hfIngenieriaComentario, null, null,
                            hfIngenieria, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Perfil
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000122").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPerfil,
                            hfPerfilComentario, null, null,
                            hfPerfil, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 8 Pruebas de Interferencia

                        #region Pantalla RADIO Estación A
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000123").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPantallaRadioEstacionA,
                            hfPantallaRadioEstacionAComentario, null, null,
                            hfPantallaRadioEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Pantalla RADIO Estación B
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000124").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPantallaRadioEstacionB,
                            hfPantallaRadioEstacionBComentario, null, null,
                            hfPantallaRadioEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region 9 Serie Equipos (fotos)

                        #region Estación A

                        #region Serie Antena
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000125").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSerieAntenaEstacionA,
                            hfSerieAntenaEstacionAComentario, null, null,
                            hfSerieAntenaEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie ODU
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000126").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkSerieODUEstacionA,
                            hfSerieODUEstacionAComentario, null, null,
                            hfSerieODUEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000127").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSeriePOEEstacionA,
                            hfSeriePOEEstacionAComentario, null, null,
                            hfSeriePOEEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        if (!hfCMM4A.Value.Equals("0"))
                        {
                            #region Serie CMM4
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000128").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                                chkSerieCMM4EstacionA,
                                hfSerieCMM4EstacionAComentario, null, null,
                                hfSerieCMM4EstacionA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie UGPS
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000129").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                                chkSerieUGPSEstacionA,
                                hfSerieUGPSEstacionAComentario, null, null,
                                hfSerieUGPSEstacionA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie Conversor
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000130").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                                chkSerieConversorEstacionA,
                                hfSerieConversorEstacionAComentario, null, null,
                                hfSerieConversorEstacionA, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                        }
                        #endregion

                        #region Estación B

                        #region Serie Antena
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000131").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSerieAntenaEstacionB,
                            hfSerieAntenaEstacionBComentario, null, null,
                            hfSerieAntenaEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie ODU
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000132").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSerieODUEstacionB,
                            hfSerieODUEstacionBComentario, null, null,
                            hfSerieODUEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Serie POE
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000133").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSeriePOEEstacionB,
                            hfSeriePOEEstacionBComentario, null, null,
                            hfSeriePOEEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        if (!hfCMM4B.Value.Equals("0"))
                        {
                            #region Serie CMM4
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000134").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                                chkSerieCMM4EstacionB,
                                hfSerieCMM4EstacionBComentario, null, null,
                                hfSerieCMM4EstacionB, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie UGPS
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000135").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                                chkSerieUGPSEstacionB,
                               hfSerieUGPSEstacionBComentario, null, null,
                                hfSerieUGPSEstacionB, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                            #region Serie Conversor
                            DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000136").Select(dd => dd).First();
                            UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                                chkSerieConversorEstacionB,
                                hfSerieConversorEstacionBComentario, null, null,
                                hfSerieConversorEstacionB, strRutaFisicaTemporal,
                                Type.GetType("System.Byte[]"));
                            #endregion

                        }
                        #endregion

                        #endregion

                        #region  10 Reporte Fotográfico

                        #region Estación A

                        #region Foto 1: Panorámica de la Estación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000137").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPanoramicaEstacionA,
                            hfPanoramicaEstacionAComentario, null, null,
                            hfPanoramicaEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 2: Posición e Identificación Antena Instalada en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000138").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPosicionIdentificacionEstacionA,
                            hfPosicionIdentificacionEstacionAComentario, null, null,
                            hfPosicionIdentificacionEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 3: Antena y ODU en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000487").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAntenaODUTorreEstacionA,
                            hfAntenaODUTorreEstacionAComentario, null, null,
                            hfAntenaODUTorreEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 5: Engrasado de Pernos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000141").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEngrasadoPernosEstacionA,
                            hfEngrasadoPernosEstacionAComentario, null, null,
                            hfEngrasadoPernosEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 6: Siliconeado del Conector
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000142").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSiliconeadoConectorEstacionA,
                            hfSiliconeadoConectorEstacionAComentario, null, null,
                            hfSiliconeadoConectorEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 7.01: Aterramiento ODU en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000488").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoODUEstacionA01,
                            hfAterramientoODUEstacionA01Comentario, null, null,
                            hfAterramientoODUEstacionA01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 7.02: Aterramiento ODU en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000489").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoODUEstacionA02,
                            hfAterramientoODUEstacionA02Comentario, null, null,
                            hfAterramientoODUEstacionA02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 8: Recorrido Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000144").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkRecorridoCableSFTPEstacionA,
                            hfRecorridoCableSFTPEstacionAComentario, null, null,
                            hfRecorridoCableSFTPEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 9.01: Aterramiento Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000145").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoCableSFTPOutdoor01EstacionA,
                            hfAterramientoCableSFTPOutdoor01EstacionAComentario, null, null,
                            hfAterramientoCableSFTPOutdoor01EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 9.02: Aterramiento Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000146").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoCableSFTPOutdoor02EstacionA,
                            hfAterramientoCableSFTPOutdoor02EstacionAComentario, null, null,
                            hfAterramientoCableSFTPOutdoor02EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 21: Etiquetado POE/CMM4
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000490").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEtiquetadoPOECMM4EstacionA,
                            hfEtiquetadoPOECMM4EstacionAComentario, null, null,
                            hfEtiquetadoPOECMM4EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 22: Panorámica del Rack
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000156").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPanoramicaRackEstacionA,
                            hfPanoramicaRackEstacionAComentario, null, null,
                            hfPanoramicaRackEstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 23.01: Aterramiento POE (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000157").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoPOE01EstacionA,
                            hfAterramientoPOE01EstacionAComentario, null, null,
                            hfAterramientoPOE01EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 23.02: Aterramiento POE (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000158").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                             chkAterramientoPOE02EstacionA,
                            hfAterramientoPOE02EstacionAComentario, null, null,
                            hfAterramientoPOE02EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 24.01: Energía de POE con Etiqueta (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000159").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                             chkEnergiaPOEEtiqueta01EstacionA,
                            hfEnergiaPOEEtiqueta01EstacionAComentario, null, null,
                            hfEnergiaPOEEtiqueta01EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 24.02: Energía de POE con Etiqueta (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000160").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEnergiaPOEEtiqueta02EstacionA,
                            hfEnergiaPOEEtiqueta02EstacionAComentario, null, null,
                            hfEnergiaPOEEtiqueta02EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 25.01: Patch Core del POE al Switch (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000161").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPatchCorePOESwitch01EstacionA,
                            hfPatchCorePOESwitch01EstacionAComentario, null, null,
                            hfPatchCorePOESwitch01EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 25.02: Patch Core del POE al Switch (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000162").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPatchCorePOESwitch02EstacionA,
                            hfPatchCorePOESwitch02EstacionAComentario, null, null,
                            hfPatchCorePOESwitch02EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 27: POE/CMM4
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000491").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPOECMM4EstacionA,
                            hfPOECMM4EstacionAComentario, null, null,
                            hfPOECMM4EstacionA, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #region Estación B

                        #region Foto 1: Panorámica de la Estación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000163").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPanoramicaEstacionB,
                            hfPanoramicaEstacionBComentario, null, null,
                            hfPanoramicaEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 2: Posición e Identificación Antena Instalada en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000164").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPosicionIdentificacionEstacionB,
                            hfPosicionIdentificacionEstacionBComentario, null, null,
                            hfPosicionIdentificacionEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 3: Antena y ODU en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000492").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAntenaODUTorreEstacionB,
                            hfAntenaODUTorreEstacionBComentario, null, null,
                            hfAntenaODUTorreEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 5: Engrasado de Pernos
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000167").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEngrasadoPernosEstacionB,
                            hfEngrasadoPernosEstacionBComentario, null, null,
                            hfEngrasadoPernosEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 6: Siliconeado del Conector
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000168").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSiliconeadoConectorEstacionB,
                            hfSiliconeadoConectorEstacionBComentario, null, null,
                            hfSiliconeadoConectorEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 7.01: Aterramiento ODU en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000493").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoODUEstacionB01,
                            hfAterramientoODUEstacionB01Comentario, null, null,
                            hfAterramientoODUEstacionB01, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 7.02: Aterramiento ODU en Torre
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000494").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoODUEstacionB02,
                            hfAterramientoODUEstacionB02Comentario, null, null,
                            hfAterramientoODUEstacionB02, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 8: Recorrido Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000170").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkRecorridoCableSFTPEstacionB,
                            hfRecorridoCableSFTPEstacionBComentario, null, null,
                            hfRecorridoCableSFTPEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 9.01: Aterramiento Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000171").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoCableSFTPOutdoor01EstacionB,
                            hfAterramientoCableSFTPOutdoor01EstacionBComentario, null, null,
                            hfAterramientoCableSFTPOutdoor01EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 9.02: Aterramiento Cable SFTP
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000172").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoCableSFTPOutdoor02EstacionB,
                            hfAterramientoCableSFTPOutdoor02EstacionBComentario, null, null,
                            hfAterramientoCableSFTPOutdoor02EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 21: Etiquetado POE/CMM4
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000495").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEtiquetadoPOECMM4EstacionB,
                            hfEtiquetadoPOECMM4EstacionBComentario, null, null,
                            hfEtiquetadoPOECMM4EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 22: Panorámica del Rack
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000182").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkPanoramicaRackEstacionB,
                            hfPanoramicaRackEstacionBComentario, null, null,
                            hfPanoramicaRackEstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 23.01: Aterramiento POE (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000183").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkAterramientoPOE01EstacionB,
                            hfAterramientoPOE01EstacionBComentario, null, null,
                            hfAterramientoPOE01EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 23.02: Aterramiento POE (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000184").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                             chkAterramientoPOE02EstacionB,
                            hfAterramientoPOE02EstacionBComentario, null, null,
                            hfAterramientoPOE02EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 24.01: Energía de POE con Etiqueta (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000185").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                             chkEnergiaPOEEtiqueta01EstacionB,
                            hfEnergiaPOEEtiqueta01EstacionBComentario, null, null,
                            hfEnergiaPOEEtiqueta01EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 24.02: Energía de POE con Etiqueta (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000186").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkEnergiaPOEEtiqueta02EstacionB,
                            hfEnergiaPOEEtiqueta02EstacionBComentario, null, null,
                            hfEnergiaPOEEtiqueta02EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 25.01: Patch Core del POE al Switch (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000187").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPatchCorePOESwitch01EstacionB,
                            hfPatchCorePOESwitch01EstacionBComentario, null, null,
                            hfPatchCorePOESwitch01EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 25.02: Patch Core del POE al Switch (Inicio/Fin)
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000188").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPatchCorePOESwitch02EstacionB,
                            hfPatchCorePOESwitch02EstacionBComentario, null, null,
                            hfPatchCorePOESwitch02EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #region Foto 27: POE/CMM4
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000496").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkPOECMM4EstacionB,
                            hfPOECMM4EstacionBComentario, null, null,
                            hfPOECMM4EstacionB, strRutaFisicaTemporal,
                            Type.GetType("System.Byte[]"));
                        #endregion

                        #endregion

                        #endregion

                        #region 11 DATOS GENERALES NODO A

                        #region # Serie PTP450i
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000189").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSeriePTP450iNodoA,
                            hfSeriePTP450iNodoAComentario, null,
                            txtSeriePTP450iNodoA, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Mediciones de Enlaces de Propagación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000190").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkMedicionEnlacePropagacionNodoA,
                            hfMedicionEnlacePropagacionNodoAComentario);
                        List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacionA2 = new List<DocumentoMedicionEnlacePropagacionBE>();
                        lstMedicionEnlacePropagacionA2 = (List<DocumentoMedicionEnlacePropagacionBE>)Session["MedicionesEnlacePropagacionA"];

                        foreach (GridViewRow item in gvMedicionEnlacePropagacionNodoA.Rows)
                        {
                            String strIdNodo = item.Cells[0].Text;
                            String strIdIIBB = item.Cells[1].Text;
                            TextBox txtRSSLocal = (TextBox)item.FindControl("txtRSSLocal");
                            TextBox txtRSSRemoto = (TextBox)item.FindControl("txtRSSRemoto");
                            TextBox txtTiempoPromedio = (TextBox)item.FindControl("txtTiempoPromedio");
                            TextBox txtCapacidadSubida = (TextBox)item.FindControl("txtCapacidadSubida");
                            TextBox txtCapacidadBajada = (TextBox)item.FindControl("txtCapacidadBajada");

                            Double dblRSSLocal, dblRSSRemoto, dblCapacidadSubida, dblCapacidadBajada;
                            Int32 intTiempoPromedio;
                            if (txtRSSLocal.Text.Equals(""))
                                dblRSSLocal = 0;
                            else
                                dblRSSLocal = Convert.ToDouble(txtRSSLocal.Text);
                            if (txtRSSRemoto.Text.Equals(""))
                                dblRSSRemoto = 0;
                            else
                                dblRSSRemoto = Convert.ToDouble(txtRSSRemoto.Text);
                            if (txtTiempoPromedio.Text.Equals(""))
                                intTiempoPromedio = 0;
                            else
                                intTiempoPromedio = Convert.ToInt32(txtTiempoPromedio.Text);
                            if (txtCapacidadSubida.Text.Equals(""))
                                dblCapacidadSubida = 0;
                            else
                                dblCapacidadSubida = Convert.ToDouble(txtCapacidadSubida.Text);
                            if (txtCapacidadBajada.Text.Equals(""))
                                dblCapacidadBajada = 0;
                            else
                                dblCapacidadBajada = Convert.ToDouble(txtCapacidadBajada.Text);
                            lstMedicionEnlacePropagacionA2.Where(w => w.NodoA.IdNodo == strIdNodo && w.NodoIIBBB.IdNodo == strIdIIBB).ToList().ForEach(s =>
                            {
                                s.RSSLocal = dblRSSLocal;
                                s.RSSRemoto = dblRSSRemoto;
                                s.TiempoPromedio = intTiempoPromedio;
                                s.CapidadSubida = dblCapacidadSubida;
                                s.CapidadBajada = dblCapacidadBajada;
                            });
                        }

                        Documento.MedicionesEnlacePropagacion = lstMedicionEnlacePropagacionA2;
                        #endregion

                        #endregion

                        #region 11 DATOS GENERALES NODO B

                        #region # Serie PTP450i
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000191").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                            chkSeriePTP450iNodoB,
                            hfSeriePTP450iNodoBComentario, null,
                            txtSeriePTP450iNodoB, null, null,
                            Type.GetType("System.String"));
                        #endregion

                        #region Mediciones de Enlaces de Propagación
                        DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000192").Select(dd => dd).First();
                        UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                           chkMedicionEnlacePropagacionNodoA,
                            hfMedicionEnlacePropagacionNodoAComentario);
                        List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacionB2 = new List<DocumentoMedicionEnlacePropagacionBE>();
                        lstMedicionEnlacePropagacionB2 = (List<DocumentoMedicionEnlacePropagacionBE>)Session["MedicionesEnlacePropagacionB"];

                        foreach (GridViewRow item in gvMedicionEnlacePropagacionNodoB.Rows)
                        {
                            String strIdNodo = item.Cells[0].Text;
                            String strIdIIBB = item.Cells[1].Text;
                            TextBox txtRSSLocal = (TextBox)item.FindControl("txtRSSLocal");
                            TextBox txtRSSRemoto = (TextBox)item.FindControl("txtRSSRemoto");
                            TextBox txtTiempoPromedio = (TextBox)item.FindControl("txtTiempoPromedio");
                            TextBox txtCapacidadSubida = (TextBox)item.FindControl("txtCapacidadSubida");
                            TextBox txtCapacidadBajada = (TextBox)item.FindControl("txtCapacidadBajada");

                            Double dblRSSLocal, dblRSSRemoto, dblCapacidadSubida, dblCapacidadBajada;
                            Int32 intTiempoPromedio;
                            if (txtRSSLocal.Text.Equals(""))
                                dblRSSLocal = 0;
                            else
                                dblRSSLocal = Convert.ToDouble(txtRSSLocal.Text);
                            if (txtRSSRemoto.Text.Equals(""))
                                dblRSSRemoto = 0;
                            else
                                dblRSSRemoto = Convert.ToDouble(txtRSSRemoto.Text);
                            if (txtTiempoPromedio.Text.Equals(""))
                                intTiempoPromedio = 0;
                            else
                                intTiempoPromedio = Convert.ToInt32(txtTiempoPromedio.Text);
                            if (txtCapacidadSubida.Text.Equals(""))
                                dblCapacidadSubida = 0;
                            else
                                dblCapacidadSubida = Convert.ToDouble(txtCapacidadSubida.Text);
                            if (txtCapacidadBajada.Text.Equals(""))
                                dblCapacidadBajada = 0;
                            else
                                dblCapacidadBajada = Convert.ToDouble(txtCapacidadBajada.Text);
                            lstMedicionEnlacePropagacionB2.Where(w => w.NodoA.IdNodo == strIdNodo && w.NodoIIBBB.IdNodo == strIdIIBB).ToList().ForEach(s =>
                            {
                                s.RSSLocal = dblRSSLocal;
                                s.RSSRemoto = dblRSSRemoto;
                                s.TiempoPromedio = intTiempoPromedio;
                                s.CapidadSubida = dblCapacidadSubida;
                                s.CapidadBajada = dblCapacidadBajada;
                            });
                        }
                        //Insertar al final de la lista
                        Documento.MedicionesEnlacePropagacion.InsertRange(Documento.MedicionesEnlacePropagacion.Count(), lstMedicionEnlacePropagacionB2);
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

        protected void gvEquipamientosA_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Equipos";
                e.Row.Cells[2].Attributes["data-title"] = "Marca";
                e.Row.Cells[3].Attributes["data-title"] = "Modelo";
                e.Row.Cells[4].Attributes["data-title"] = "N° Serie";
                //e.Row.Cells[5].Attributes["data-title"] = "Acciones";

                #region Inicializar Controles
                //TextBox txtDescripcion = (TextBox)e.Row.FindControl("txtDescripcion");
                //LinkButton btnEliminar = (LinkButton)e.Row.FindControl("btnEliminar");
                //EntidadDetalleBE item = (EntidadDetalleBE)e.Row.DataItem;
                //txtDescripcion.Enabled = item.ValorBooleano1;
                //btnEliminar.Visible = item.ValorBooleano1;
                #endregion
            }
        }

        protected void gvMaterialesA_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Descripción";
                e.Row.Cells[2].Attributes["data-title"] = "Unidad";
                e.Row.Cells[3].Attributes["data-title"] = "Cantidad";
                //e.Row.Cells[4].Attributes["data-title"] = "N° Serie";
                //e.Row.Cells[5].Attributes["data-title"] = "Acciones";

                #region Inicializar Controles
                //TextBox txtDescripcion = (TextBox)e.Row.FindControl("txtDescripcion");
                //LinkButton btnEliminar = (LinkButton)e.Row.FindControl("btnEliminar");
                //EntidadDetalleBE item = (EntidadDetalleBE)e.Row.DataItem;
                //txtDescripcion.Enabled = item.ValorBooleano1;
                //btnEliminar.Visible = item.ValorBooleano1;
                #endregion
            }
        }

        protected void gvEquipamientosB_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Equipos";
                e.Row.Cells[2].Attributes["data-title"] = "Marca";
                e.Row.Cells[3].Attributes["data-title"] = "Modelo";
                e.Row.Cells[4].Attributes["data-title"] = "N° Serie";
                //e.Row.Cells[5].Attributes["data-title"] = "Acciones";

                #region Inicializar Controles
                //TextBox txtDescripcion = (TextBox)e.Row.FindControl("txtDescripcion");
                //LinkButton btnEliminar = (LinkButton)e.Row.FindControl("btnEliminar");
                //EntidadDetalleBE item = (EntidadDetalleBE)e.Row.DataItem;
                //txtDescripcion.Enabled = item.ValorBooleano1;
                //btnEliminar.Visible = item.ValorBooleano1;
                #endregion
            }
        }

        protected void gvMaterialesB_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Descripción";
                e.Row.Cells[2].Attributes["data-title"] = "Unidad";
                e.Row.Cells[3].Attributes["data-title"] = "Cantidad";
                //e.Row.Cells[4].Attributes["data-title"] = "N° Serie";
                //e.Row.Cells[5].Attributes["data-title"] = "Acciones";

                #region Inicializar Controles
                //TextBox txtDescripcion = (TextBox)e.Row.FindControl("txtDescripcion");
                //LinkButton btnEliminar = (LinkButton)e.Row.FindControl("btnEliminar");
                //EntidadDetalleBE item = (EntidadDetalleBE)e.Row.DataItem;
                //txtDescripcion.Enabled = item.ValorBooleano1;
                //btnEliminar.Visible = item.ValorBooleano1;
                #endregion
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

                #region 1 Configuración y Mediciones

                #region Dirección Estación A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000084", chkDireccionEstacionA,
                    hfDireccionEstacionAComentario,
                    null, txtDireccionEstacionA, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Dirección Estación B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000085", chkDireccionEstacionB,
                    hfDireccionEstacionBComentario,
                    null, txtDireccionEstacionB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Referencia Ubicación Estación A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000086", chkReferenciaEstacionA,
                    hfReferenciaEstacionAComentario,
                    null, txtReferenciaEstacionA, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Referencia Ubicación Estación B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000087", chkReferenciaEstacionB,
                    hfReferenciaEstacionBComentario,
                    null, txtReferenciaEstacionB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Nivel de Recepción de operación Radio A (dBm)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000088", chkNivelRecepcionOperacionRadioA,
                    hfNivelRecepcionOperacionRadioAComentario,
                    null, txtNivelRecepcionOperacionRadioA, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Nivel de Recepción de operación Radio B (dBm)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000089", chkNivelRecepcionOperacionRadioB,
                    hfNivelRecepcionOperacionRadioBComentario,
                    null, txtNivelRecepcionOperacionRadioB, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Ping PTP Radio A (ms)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000090", chkPingPTPRadioA,
                    hfPingPTPRadioAComentario,
                    null, txtPingPTPRadioA, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Ping PTP Radio B (ms)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000091", chkPingPTPRadioB,
                    hfPingPTPRadioBComentario,
                    null, txtPingPTPRadioB, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Configuración General del Enlace Estación A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000092", chkConfiguracionGeneralEnlaceEstacionA,
                    hfConfiguracionGeneralEnlaceEstacionAComentario, null, null,
                    hfConfiguracionGeneralEnlaceEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración General del Enlace Estación B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000093", chkConfiguracionGeneralEnlaceEstacionB,
                    hfConfiguracionGeneralEnlaceEstacionBComentario, null, null,
                    hfConfiguracionGeneralEnlaceEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración LAN Estación A 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000481", chkConfiguracionLANEstacionA01,
                    hfConfiguracionLANEstacionA01Comentario, null, null,
                    hfConfiguracionLANEstacionA01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración LAN Estación A 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000482", chkConfiguracionLANEstacionA02,
                    hfConfiguracionLANEstacionA02Comentario, null, null,
                    hfConfiguracionLANEstacionA02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración LAN Estación A 03
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000483", chkConfiguracionLANEstacionA03,
                    hfConfiguracionLANEstacionA03Comentario, null, null,
                    hfConfiguracionLANEstacionA03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración LAN Estación B 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000484", chkConfiguracionLANEstacionB01,
                    hfConfiguracionLANEstacionB01Comentario, null, null,
                    hfConfiguracionLANEstacionB01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración LAN Estación B 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000485", chkConfiguracionLANEstacionB02,
                    hfConfiguracionLANEstacionB02Comentario, null, null,
                    hfConfiguracionLANEstacionB02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración LAN Estación B 03
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000486", chkConfiguracionLANEstacionB03,
                    hfConfiguracionLANEstacionB03Comentario, null, null,
                    hfConfiguracionLANEstacionB03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración Ethernet Switch Estación A 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000497", chkConfiguracionEthernetSwitchEstacionA01,
                    hfConfiguracionEthernetSwitchEstacionA01Comentario, null, null,
                    hfConfiguracionEthernetSwitchEstacionA01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración Ethernet Switch Estación A 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000498", chkConfiguracionEthernetSwitchEstacionA02,
                    hfConfiguracionEthernetSwitchEstacionA02Comentario, null, null,
                    hfConfiguracionEthernetSwitchEstacionA02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración Ethernet Switch Estación B 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000499", chkConfiguracionEthernetSwitchEstacionB01,
                    hfConfiguracionEthernetSwitchEstacionB01Comentario, null, null,
                    hfConfiguracionEthernetSwitchEstacionB01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración Ethernet Switch Estación B 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000500", chkConfiguracionEthernetSwitchEstacionB02,
                    hfConfiguracionEthernetSwitchEstacionB02Comentario, null, null,
                    hfConfiguracionEthernetSwitchEstacionB02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración IP Estación A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000099", chkConfiguracionIPEstacionA,
                    hfConfiguracionIPEstacionAComentario, null, null,
                    hfConfiguracionIPEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Configuración IP Estación B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000100", chkConfiguracionIPEstacionB,
                    hfConfiguracionIPEstacionBComentario, null, null,
                    hfConfiguracionIPEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 2 Materiales A

                #region Equipamientos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000101", chkEquipamientosA, hfEquipamientosAComentario);
                //List<DocumentoEquipamientoBE> lstDocumentoEquipamientoA = new List<DocumentoEquipamientoBE>();
                //lstDocumentoEquipamientoA = (List<DocumentoEquipamientoBE>)Session["EquipamientosA"];

                //foreach (GridViewRow item in gvEquipamientosA.Rows)
                //{
                //    String strCodigoEquipamiento = gvEquipamientosA.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamientoA");
                //    lstDocumentoEquipamientoA.Where(w => w.Equipamiento.IdValor == strCodigoEquipamiento).ToList().ForEach(s => s.SerieEquipamiento = txtSerieEquipamiento.Text.ToUpper());
                //}

                //Documento.Equipamientos = lstDocumentoEquipamientoA;
                #endregion

                #region Materiales
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000102", chkMaterialesA,
                    hfMaterialesAComentario);
                List<DocumentoMaterialBE> lstDocumentoMaterialA = new List<DocumentoMaterialBE>();
                lstDocumentoMaterialA = (List<DocumentoMaterialBE>)Session["MaterialesA"];

                foreach (GridViewRow item in gvMaterialesA.Rows)
                {
                    //String strCodigoMaterial = item.Cells[2].Text;
                    String strCodigoMaterial = gvMaterialesA.DataKeys[item.RowIndex]["Material_IdValor"].ToString();
                    TextBox txtCantidad = (TextBox)item.FindControl("txtCantidadA");
                    Double dblCantidad;
                    if (txtCantidad.Text.Equals(""))
                        dblCantidad = 0;
                    else
                        dblCantidad = Convert.ToDouble(txtCantidad.Text);
                    lstDocumentoMaterialA.Where(w => w.Material.IdValor == strCodigoMaterial).ToList().ForEach(s => s.Cantidad = dblCantidad);
                }

                Documento.Materiales = lstDocumentoMaterialA;
                #endregion

                #endregion

                #region 3 Materiales B

                #region Equipamientos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000103", chkEquipamientosB,
                    hfEquipamientosBComentario);
                //List<DocumentoEquipamientoBE> lstDocumentoEquipamientoB = new List<DocumentoEquipamientoBE>();
                //lstDocumentoEquipamientoB = (List<DocumentoEquipamientoBE>)Session["EquipamientosB"];

                //foreach (GridViewRow item in gvEquipamientosB.Rows)
                //{
                //    String strCodigoEquipamiento = gvEquipamientosB.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamientoB");
                //    lstDocumentoEquipamientoB.Where(w => w.Equipamiento.IdValor == strCodigoEquipamiento).ToList().ForEach(s => s.SerieEquipamiento = txtSerieEquipamiento.Text.ToUpper());
                //}
                ////Insertar al final de la lista
                //Documento.Equipamientos.InsertRange(Documento.Equipamientos.Count(), lstDocumentoEquipamientoB);
                #endregion

                #region Materiales
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000104", chkMaterialesB,
                    hfMaterialesBComentario);
                List<DocumentoMaterialBE> lstDocumentoMaterialB = new List<DocumentoMaterialBE>();
                lstDocumentoMaterialB = (List<DocumentoMaterialBE>)Session["MaterialesB"];

                foreach (GridViewRow item in gvMaterialesB.Rows)
                {
                    //String strCodigoMaterial = item.Cells[2].Text;
                    String strCodigoMaterial = gvMaterialesB.DataKeys[item.RowIndex]["Material_IdValor"].ToString();
                    TextBox txtCantidad = (TextBox)item.FindControl("txtCantidadB");
                    Double dblCantidad;
                    if (txtCantidad.Text.Equals(""))
                        dblCantidad = 0;
                    else
                        dblCantidad = Convert.ToDouble(txtCantidad.Text);
                    lstDocumentoMaterialB.Where(w => w.Material.IdValor == strCodigoMaterial).ToList().ForEach(s => s.Cantidad = dblCantidad);
                }
                //Insertar al final de la lista
                Documento.Materiales.InsertRange(Documento.Materiales.Count(), lstDocumentoMaterialB);
                #endregion

                #endregion

                #region 4 Longitud SFTP

                #region Estación A

                #region Distancia B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000105", chkB_A, hfB_AComentario, null, txtB_A,
                    null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia C
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000106", chkC_A, hfC_AComentario,
                    null, txtC_A, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia D
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000107", chkD_A, hfD_AComentario,
                    null, txtD_A, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia E
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000108", chkE_A, hfE_AComentario,
                    null, txtE_A, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #region Estación B

                #region Distancia B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000109", chkB_B, hfB_BComentario,
                    null, txtB_B, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia C
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000110", chkC_B, hfC_BComentario,
                    null, txtC_B, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia D
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000111", chkD_B, hfD_BComentario,
                    null, txtD_B, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Distancia E
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000112", chkE_B, hfE_BComentario,
                    null, txtE_B, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #endregion

                #region 5 Asignaciones y Observaciones

                #region Estación A

                #region Capacidad Breaker (A)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000113", chkCapacidadBreakerEstacionA,
                    hfCapacidadBreakerEstacionAComentario, null,
                    txtCapacidadBreakerEstacionA, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Voltaje CD Breaker (V)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000114", chkVoltajeCDBreakerEstacionA,
                    hfVoltajeCDBreakerEstacionAComentario, null,
                    txtVoltajeCDBreakerEstacionA, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Posición Breaker
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000115", chkPosicionBreakerEstacionA,
                    hfPosicionBreakerEstacionAComentario, null,
                    txtPosicionBreakerEstacionA, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Posi. Barra Aterramiento
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000116", chkPosicionBarraAterramientoEstacionA,
                    hfPosicionBarraAterramientoEstacionAComentario, null,
                    txtPosicionBarraAterramientoEstacionA, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #region Estación B

                #region Capacidad Breaker (A)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000117", chkCapacidadBreakerEstacionB,
                    hfCapacidadBreakerEstacionBComentario, null,
                    txtCapacidadBreakerEstacionB, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Voltaje CD Breaker (V)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000118", chkVoltajeCDBreakerEstacionB,
                    hfVoltajeCDBreakerEstacionBComentario, null,
                    txtVoltajeCDBreakerEstacionB, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Posición Breaker
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000119", chkPosicionBreakerEstacionB,
                    hfPosicionBreakerEstacionBComentario, null,
                    txtPosicionBreakerEstacionB, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Posi. Barra Aterramiento
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000120", chkPosicionBarraAterramientoEstacionB,
                    hfPosicionBarraAterramientoEstacionBComentario, null,
                    txtPosicionBarraAterramientoEstacionB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #endregion

                #region 6 Cálculo Propagacion

                #region Ingeniería
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000121", chkIngenieria,
                    hfIngenieriaComentario, null, null,
                    hfIngenieria, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Perfil
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000122", chkPerfil,
                    hfPerfilComentario, null, null,
                    hfPerfil, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 8 Pruebas de Interferencia

                #region Pantalla RADIO Estación A
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000123", chkPantallaRadioEstacionA,
                    hfPantallaRadioEstacionAComentario, null, null,
                    hfPantallaRadioEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Pantalla RADIO Estación B
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000124", chkPantallaRadioEstacionB,
                    hfPantallaRadioEstacionBComentario, null, null,
                    hfPantallaRadioEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 9 Serie Equipos (fotos)

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

                #region  10 Reporte Fotográfico

                #region Estación A

                #region Foto 1: Panorámica de la Estación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000137", chkPanoramicaEstacionA,
                    hfPanoramicaEstacionAComentario, null, null,
                    hfPanoramicaEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2: Posición e Identificación Antena Instalada en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000138", chkPosicionIdentificacionEstacionA,
                    hfPosicionIdentificacionEstacionAComentario, null, null,
                    hfPosicionIdentificacionEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 3: Antena y ODU en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000487", chkAntenaODUTorreEstacionA,
                    hfAntenaODUTorreEstacionAComentario, null, null,
                    hfAntenaODUTorreEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5: Engrasado de Pernos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000141", chkEngrasadoPernosEstacionA,
                    hfEngrasadoPernosEstacionAComentario, null, null,
                    hfEngrasadoPernosEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6: Siliconeado del Conector
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000142", chkSiliconeadoConectorEstacionA,
                    hfSiliconeadoConectorEstacionAComentario, null, null,
                    hfSiliconeadoConectorEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.01: Aterramiento ODU en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000488", chkAterramientoODUEstacionA01,
                    hfAterramientoODUEstacionA01Comentario, null, null,
                    hfAterramientoODUEstacionA01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.02: Aterramiento ODU en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000489", chkAterramientoODUEstacionA02,
                    hfAterramientoODUEstacionA02Comentario, null, null,
                    hfAterramientoODUEstacionA02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 8: Recorrido Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000144", chkRecorridoCableSFTPEstacionA,
                    hfRecorridoCableSFTPEstacionAComentario, null, null,
                    hfRecorridoCableSFTPEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9.01: Aterramiento Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000145", chkAterramientoCableSFTPOutdoor01EstacionA,
                    hfAterramientoCableSFTPOutdoor01EstacionAComentario, null, null,
                    hfAterramientoCableSFTPOutdoor01EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9.02: Aterramiento Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000146", chkAterramientoCableSFTPOutdoor02EstacionA,
                    hfAterramientoCableSFTPOutdoor02EstacionAComentario, null, null,
                    hfAterramientoCableSFTPOutdoor02EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 21: Etiquetado POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000490", chkEtiquetadoPOECMM4EstacionA,
                    hfEtiquetadoPOECMM4EstacionAComentario, null, null,
                    hfEtiquetadoPOECMM4EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 22: Panorámica del Rack
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000156", chkPanoramicaRackEstacionA,
                    hfPanoramicaRackEstacionAComentario, null, null,
                    hfPanoramicaRackEstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 23.01: Aterramiento POE (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000157", chkAterramientoPOE01EstacionA,
                    hfAterramientoPOE01EstacionAComentario, null, null,
                    hfAterramientoPOE01EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 23.02: Aterramiento POE (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000158", chkAterramientoPOE02EstacionA,
                    hfAterramientoPOE02EstacionAComentario, null, null,
                    hfAterramientoPOE02EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 24.01: Energía de POE con Etiqueta (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000159", chkEnergiaPOEEtiqueta01EstacionA,
                    hfEnergiaPOEEtiqueta01EstacionAComentario, null, null,
                    hfEnergiaPOEEtiqueta01EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 24.02: Energía de POE con Etiqueta (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000160", chkEnergiaPOEEtiqueta02EstacionA,
                    hfEnergiaPOEEtiqueta02EstacionAComentario, null, null,
                    hfEnergiaPOEEtiqueta02EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 25.01: Patch Core del POE al Switch (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000161", chkPatchCorePOESwitch01EstacionA,
                    hfPatchCorePOESwitch01EstacionAComentario, null, null,
                    hfPatchCorePOESwitch01EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 25.02: Patch Core del POE al Switch (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000162", chkPatchCorePOESwitch02EstacionA,
                    hfPatchCorePOESwitch02EstacionAComentario, null, null,
                    hfPatchCorePOESwitch02EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 27: POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000491", chkPOECMM4EstacionA,
                    hfPOECMM4EstacionAComentario, null, null,
                    hfPOECMM4EstacionA, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region Estación B

                #region Foto 1: Panorámica de la Estación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000163", chkPanoramicaEstacionB,
                    hfPanoramicaEstacionBComentario, null, null,
                    hfPanoramicaEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 2: Posición e Identificación Antena Instalada en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000164", chkPosicionIdentificacionEstacionB,
                    hfPosicionIdentificacionEstacionBComentario, null, null,
                    hfPosicionIdentificacionEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 3: Antena y ODU en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000492", chkAntenaODUTorreEstacionB,
                    hfAntenaODUTorreEstacionBComentario, null, null,
                    hfAntenaODUTorreEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 5: Engrasado de Pernos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000167", chkEngrasadoPernosEstacionB,
                    hfEngrasadoPernosEstacionBComentario, null, null,
                    hfEngrasadoPernosEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 6: Siliconeado del Conector
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000168", chkSiliconeadoConectorEstacionB,
                    hfSiliconeadoConectorEstacionBComentario, null, null,
                    hfSiliconeadoConectorEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.01: Aterramiento ODU en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000493", chkAterramientoODUEstacionB01,
                    hfAterramientoODUEstacionB01Comentario, null, null,
                    hfAterramientoODUEstacionB01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 7.02: Aterramiento ODU en Torre
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000494", chkAterramientoODUEstacionB02,
                    hfAterramientoODUEstacionB02Comentario, null, null,
                    hfAterramientoODUEstacionB02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 8: Recorrido Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000170", chkRecorridoCableSFTPEstacionB,
                    hfRecorridoCableSFTPEstacionBComentario, null, null,
                    hfRecorridoCableSFTPEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9.01: Aterramiento Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000171", chkAterramientoCableSFTPOutdoor01EstacionB,
                    hfAterramientoCableSFTPOutdoor01EstacionBComentario, null, null,
                    hfAterramientoCableSFTPOutdoor01EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 9.02: Aterramiento Cable SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000172", chkAterramientoCableSFTPOutdoor02EstacionB,
                    hfAterramientoCableSFTPOutdoor02EstacionBComentario, null, null,
                    hfAterramientoCableSFTPOutdoor02EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 21: Etiquetado POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000495", chkEtiquetadoPOECMM4EstacionB,
                    hfEtiquetadoPOECMM4EstacionBComentario, null, null,
                    hfEtiquetadoPOECMM4EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 22: Panorámica del Rack
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000182", chkPanoramicaRackEstacionB,
                    hfPanoramicaRackEstacionBComentario, null, null,
                    hfPanoramicaRackEstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 23.01: Aterramiento POE (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000183", chkAterramientoPOE01EstacionB,
                    hfAterramientoPOE01EstacionBComentario, null, null,
                    hfAterramientoPOE01EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 23.02: Aterramiento POE (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000184", chkAterramientoPOE02EstacionB,
                    hfAterramientoPOE02EstacionBComentario, null, null,
                    hfAterramientoPOE02EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 24.01: Energía de POE con Etiqueta (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000185", chkEnergiaPOEEtiqueta01EstacionB,
                    hfEnergiaPOEEtiqueta01EstacionBComentario, null, null,
                    hfEnergiaPOEEtiqueta01EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 24.02: Energía de POE con Etiqueta (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000186", chkEnergiaPOEEtiqueta02EstacionB,
                    hfEnergiaPOEEtiqueta02EstacionBComentario, null, null,
                    hfEnergiaPOEEtiqueta02EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 25.01: Patch Core del POE al Switch (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000187", chkPatchCorePOESwitch01EstacionB,
                    hfPatchCorePOESwitch01EstacionBComentario, null, null,
                    hfPatchCorePOESwitch01EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 25.02: Patch Core del POE al Switch (Inicio/Fin)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000188", chkPatchCorePOESwitch02EstacionB,
                    hfPatchCorePOESwitch02EstacionBComentario, null, null,
                    hfPatchCorePOESwitch02EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 27: POE/CMM4
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000496", chkPOECMM4EstacionB,
                    hfPOECMM4EstacionBComentario, null, null,
                    hfPOECMM4EstacionB, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #endregion

                #region 11 DATOS GENERALES NODO A

                #region # Serie PTP450i
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000189", chkSeriePTP450iNodoA,
                    hfSeriePTP450iNodoAComentario, null,
                    txtSeriePTP450iNodoA, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Mediciones de Enlaces de Propagación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000190", chkMedicionEnlacePropagacionNodoA,
                    hfMedicionEnlacePropagacionNodoAComentario);
                List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacionA = new List<DocumentoMedicionEnlacePropagacionBE>();
                lstMedicionEnlacePropagacionA = (List<DocumentoMedicionEnlacePropagacionBE>)Session["MedicionesEnlacePropagacionA"];

                foreach (GridViewRow item in gvMedicionEnlacePropagacionNodoA.Rows)
                {
                    String strIdNodo = item.Cells[0].Text;
                    String strIdIIBB = item.Cells[1].Text;
                    TextBox txtRSSLocal = (TextBox)item.FindControl("txtRSSLocal");
                    TextBox txtRSSRemoto = (TextBox)item.FindControl("txtRSSRemoto");
                    TextBox txtTiempoPromedio = (TextBox)item.FindControl("txtTiempoPromedio");
                    TextBox txtCapacidadSubida = (TextBox)item.FindControl("txtCapacidadSubida");
                    TextBox txtCapacidadBajada = (TextBox)item.FindControl("txtCapacidadBajada");

                    Double dblRSSLocal, dblRSSRemoto, dblCapacidadSubida, dblCapacidadBajada;
                    Int32 intTiempoPromedio;
                    if (txtRSSLocal.Text.Equals(""))
                        dblRSSLocal = 0;
                    else
                        dblRSSLocal = Convert.ToDouble(txtRSSLocal.Text);
                    if (txtRSSRemoto.Text.Equals(""))
                        dblRSSRemoto = 0;
                    else
                        dblRSSRemoto = Convert.ToDouble(txtRSSRemoto.Text);
                    if (txtTiempoPromedio.Text.Equals(""))
                        intTiempoPromedio = 0;
                    else
                        intTiempoPromedio = Convert.ToInt32(txtTiempoPromedio.Text);
                    if (txtCapacidadSubida.Text.Equals(""))
                        dblCapacidadSubida = 0;
                    else
                        dblCapacidadSubida = Convert.ToDouble(txtCapacidadSubida.Text);
                    if (txtCapacidadBajada.Text.Equals(""))
                        dblCapacidadBajada = 0;
                    else
                        dblCapacidadBajada = Convert.ToDouble(txtCapacidadBajada.Text);
                    lstMedicionEnlacePropagacionA.Where(w => w.NodoA.IdNodo == strIdNodo && w.NodoIIBBB.IdNodo == strIdIIBB).ToList().ForEach(s =>
                    {
                        s.RSSLocal = dblRSSLocal;
                        s.RSSRemoto = dblRSSRemoto;
                        s.TiempoPromedio = intTiempoPromedio;
                        s.CapidadSubida = dblCapacidadSubida;
                        s.CapidadBajada = dblCapacidadBajada;
                    });
                }

                Documento.MedicionesEnlacePropagacion = lstMedicionEnlacePropagacionA;
                #endregion

                #endregion

                #region 12 DATOS GENERALES NODO B

                #region # Serie PTP450i
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000191", chkSeriePTP450iNodoB,
                    hfSeriePTP450iNodoBComentario, null,
                    txtSeriePTP450iNodoB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Mediciones de Enlaces de Propagación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000192", chkMedicionEnlacePropagacionNodoA,
                    hfMedicionEnlacePropagacionNodoAComentario);
                List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacionB = new List<DocumentoMedicionEnlacePropagacionBE>();
                lstMedicionEnlacePropagacionB = (List<DocumentoMedicionEnlacePropagacionBE>)Session["MedicionesEnlacePropagacionB"];

                foreach (GridViewRow item in gvMedicionEnlacePropagacionNodoB.Rows)
                {
                    String strIdNodo = item.Cells[0].Text;
                    String strIdIIBB = item.Cells[1].Text;
                    TextBox txtRSSLocal = (TextBox)item.FindControl("txtRSSLocal");
                    TextBox txtRSSRemoto = (TextBox)item.FindControl("txtRSSRemoto");
                    TextBox txtTiempoPromedio = (TextBox)item.FindControl("txtTiempoPromedio");
                    TextBox txtCapacidadSubida = (TextBox)item.FindControl("txtCapacidadSubida");
                    TextBox txtCapacidadBajada = (TextBox)item.FindControl("txtCapacidadBajada");

                    Double dblRSSLocal, dblRSSRemoto, dblCapacidadSubida, dblCapacidadBajada;
                    Int32 intTiempoPromedio;
                    if (txtRSSLocal.Text.Equals(""))
                        dblRSSLocal = 0;
                    else
                        dblRSSLocal = Convert.ToDouble(txtRSSLocal.Text);
                    if (txtRSSRemoto.Text.Equals(""))
                        dblRSSRemoto = 0;
                    else
                        dblRSSRemoto = Convert.ToDouble(txtRSSRemoto.Text);
                    if (txtTiempoPromedio.Text.Equals(""))
                        intTiempoPromedio = 0;
                    else
                        intTiempoPromedio = Convert.ToInt32(txtTiempoPromedio.Text);
                    if (txtCapacidadSubida.Text.Equals(""))
                        dblCapacidadSubida = 0;
                    else
                        dblCapacidadSubida = Convert.ToDouble(txtCapacidadSubida.Text);
                    if (txtCapacidadBajada.Text.Equals(""))
                        dblCapacidadBajada = 0;
                    else
                        dblCapacidadBajada = Convert.ToDouble(txtCapacidadBajada.Text);
                    lstMedicionEnlacePropagacionB.Where(w => w.NodoA.IdNodo == strIdNodo && w.NodoIIBBB.IdNodo == strIdIIBB).ToList().ForEach(s =>
                    {
                        s.RSSLocal = dblRSSLocal;
                        s.RSSRemoto = dblRSSRemoto;
                        s.TiempoPromedio = intTiempoPromedio;
                        s.CapidadSubida = dblCapacidadSubida;
                        s.CapidadBajada = dblCapacidadBajada;
                    });
                }
                //Insertar al final de la lista
                Documento.MedicionesEnlacePropagacion.InsertRange(Documento.MedicionesEnlacePropagacion.Count(), lstMedicionEnlacePropagacionB);
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