﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BusinessEntity;
using BusinessLogic;

namespace SNW.forms
{
    public partial class DocumentoActaInstalacionAceptacionProtocoloIIBB : System.Web.UI.Page
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
                    //entidadDetalleBE.IdValor = Documento.Tarea.TipoTarea.IdValor.Equals("000002") ? "000015" : "000016";
                    entidadDetalleBE.IdValor = Request.QueryString["IdDocumento"];
                    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    Documento.Documento = entidadDetalleBE.Clone();

                    //h2Titulo.InnerText = entidadDetalleBE.ValorCadena3;
                    h2Titulo.InnerText = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ")";
                    //this.Title = entidadDetalleBE.ValorCadena3 + " .:SIAE:.";
                    this.Title = entidadDetalleBE.ValorCadena3 + " (Nodo o IIBB A: " + Tarea.NodoIIBBA.IdNodo + ") " + " .:SIAE:.";
                    #endregion

                    #region 1 Acta de Instalación FITEL

                    #region 2. INSTITUCIÓN BENEFICIARIA

                    #region 2.2. Infraestructura

                    #region Tipo Mástil
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "TIP_MAST";
                    UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlTipoMastil, "IdValor", "ValorCadena1", null);
                    #endregion

                    #endregion

                    #region 2.6. Característica de Propagación

                    #region Frecuencia Mzh
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "FREC_DOC";
                    UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlFrecuencia, "IdValor", "ValorCadena1", null);
                    #endregion

                    #endregion


                    #region 2.7. Mediciones de Enlaces

                    #region Mediciones de Enlaces de Propagación

                    List<PMPDetalleBE> lstPMPDetalle = new List<PMPDetalleBE>();
                    List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacion = new List<DocumentoMedicionEnlacePropagacionBE>();
                    PMPDetalleBE PMPDetalle = new PMPDetalleBE();
                    PMPDetalle.PMP.Nodo.IdNodo = Tarea.NodoIIBBA.IdNodo;
                    PMPDetalle.SectorIIBB = Tarea.Sector;
                    lstPMPDetalle = PMPDetalleBL.ListarPMPDetalles(PMPDetalle);
                    foreach (PMPDetalleBE item in lstPMPDetalle)
                    {
                        DocumentoMedicionEnlacePropagacionBE MedicionEnlacePropagacion = new DocumentoMedicionEnlacePropagacionBE();
                        MedicionEnlacePropagacion.Documento = Documento;
                        MedicionEnlacePropagacion.NodoA = item.PMP.Nodo;
                        MedicionEnlacePropagacion.NodoIIBBB.IdNodo = item.InstitucionBeneficiaria.IdInstitucionBeneficiaria;
                        lstMedicionEnlacePropagacion.Add(MedicionEnlacePropagacion);
                    }
                    Session["MedicionesEnlacePropagacion"] = lstMedicionEnlacePropagacion;
                    gvMedicionEnlacePropagacion.DataSource = lstMedicionEnlacePropagacion;
                    gvMedicionEnlacePropagacion.DataBind();

                    #endregion

                    #endregion

                    #region 2.8. Conectividad a la Red

                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DECI";
                    UtilitarioBL.AsignarEntidadDetalleDropdownlist(entidadDetalleBE, ddlVerificacionConectividad, "IdValor", "ValorCadena1", null);

                    #endregion

                    #endregion


                    #endregion

                    #region  3 Pantallas de Configuración

                    #region Access Point (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000226",
                        imgPantallaConfiguracionAccessPointEjemplo);
                    #endregion

                    #region Router Mikrotik (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000227",
                        imgPantallaConfiguracionRouterMikrotikEjemplo);
                    #endregion

                    #region Switch Dlink 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000228",
                        imgPantallaConfiguracionSwitchDlink01Ejemplo);
                    #endregion

                    #region Switch Dlink 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000229",
                        imgPantallaConfiguracionSwitchDlink02Ejemplo);
                    #endregion

                    #region UPS (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000230",
                        imgPantallaConfiguracionUPSEjemplo);
                    #endregion

                    #region All In One 01 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000231",
                        imgPantallaConfiguracionAllInOne01Ejemplo);
                    #endregion

                    #region All In One 02 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000232",
                        imgPantallaConfiguracionAllInOne02Ejemplo);
                    #endregion

                    #region Impresora (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000233",
                        imgPantallaConfiguracionImpresoraEjemplo);
                    #endregion

                    #endregion

                    #region 6 Material IIBB CPE

                    #region Equipamiento
                    //List<EntidadDetalleBE> lstEquipamiento = new List<EntidadDetalleBE>();
                    List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();
                    //entidadDetalleBE = new EntidadDetalleBE();
                    //entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    ////entidadDetalleBE.IdValor = "000001";
                    //entidadDetalleBE.IdValor = Documento.Documento.IdValor;
                    //entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    //entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "EQUI";
                    //entidadDetalleBE.Metodo = "*";
                    //lstEquipamiento = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    ////lstEquipamiento.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    //foreach (EntidadDetalleBE item in lstEquipamiento)
                    //{
                    //    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    //    DocumentoEquipamiento.Documento = Documento;
                    //    DocumentoEquipamiento.Equipamiento = item;
                    //    lstDocumentoEquipamiento.Add(DocumentoEquipamiento);
                    //}
                    //Session["Equipamientos"] = lstDocumentoEquipamiento;
                    ////gvMateriales.DataSource = lstMaterial;
                    //gvEquipamientos.DataSource = lstDocumentoEquipamiento;
                    //gvEquipamientos.DataBind();

                    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    DocumentoEquipamiento.Documento = Documento;
                    lstDocumentoEquipamiento = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    Session["Equipamientos"] = lstDocumentoEquipamiento;

                    gvEquipamientos.DataSource = lstDocumentoEquipamiento;
                    gvEquipamientos.DataBind();

                    #endregion

                    #region Materiales
                    List<EntidadDetalleBE> lstMaterial = new List<EntidadDetalleBE>();
                    List<DocumentoMaterialBE> lstDocumentoMaterial = new List<DocumentoMaterialBE>();
                    entidadDetalleBE = new EntidadDetalleBE();
                    entidadDetalleBE.Entidad.IdEntidad = "DOCU";
                    //entidadDetalleBE.IdValor = "000001";
                    entidadDetalleBE.IdValor = Documento.Documento.IdValor;
                    entidadDetalleBE.EntidadDetalleSecundario = new EntidadDetalleBE();
                    entidadDetalleBE.EntidadDetalleSecundario.Entidad.IdEntidad = "MAT";
                    entidadDetalleBE.Metodo = "*";
                    lstMaterial = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE);
                    //lstMaterial.ForEach(i => i.ValorBooleano1 = false);//No se puede eliminar
                    foreach (EntidadDetalleBE item in lstMaterial)
                    {
                        DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                        DocumentoMaterial.Documento = Documento;
                        DocumentoMaterial.Material = item;
                        lstDocumentoMaterial.Add(DocumentoMaterial);
                    }
                    Session["Materiales"] = lstDocumentoMaterial;
                    //gvMateriales.DataSource = lstMaterial;
                    gvMateriales.DataSource = lstDocumentoMaterial;
                    gvMateriales.DataBind();
                    #endregion

                    #endregion

                    #region 7 Reporte Fotográfico IIBB CPE

                    #region Foto 01: Panorámica de la Localidad (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000234",
                        imgPanoramicaLocalidadEjemplo);
                    #endregion

                    #region Foto 02: Fachada de la Institución (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000235",
                        imgFachadaInstitucionEjemplo);
                    #endregion

                    #region Foto 03.01: Impresora (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000236",
                        imgImpresoraEjemplo);
                    #endregion

                    #region Foto 03.02: Switch (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000237",
                        imgSwitchEjemplo);
                    #endregion

                    #region Foto 03.03: Router (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000238",
                        imgRouterEjemplo);
                    #endregion

                    #region Foto 03.04: PCsEncendidas (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000239",
                        imgPCsEncendidasEjemplo);
                    #endregion

                    #region Foto 03.05: UPS (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000240",
                        imgUPSEjemplo);
                    #endregion

                    #region Foto 03.06: Access Point (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000241",
                        imgAccessPointEjemplo);
                    #endregion

                    #region Foto 04.01: ODU-CPE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000242",
                        imgODUCPEEjemplo);
                    #endregion

                    #region Foto 04.02: Mástil (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000243",
                        imgMastilEjemplo);
                    #endregion

                    #region Foto 04.03: Panorámica de Antena Instalada en Mástil (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000244",
                        imgPanoramicaAntenaInstaladaMastilEjemplo);
                    #endregion

                    #region Foto 04.04: Recorrido STFP Cat5e (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000245",
                        imgRecorridoSFTPCat5eEjemplo);
                    #endregion

                    #region Foto 04.05: Ingreso de SFTP (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000246",
                        imgIngresoSFTPEjemplo);
                    #endregion

                    #region Foto 04.06: Recorrido de SFTP por Canaleta (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000247",
                        imgRecorridoSFTPCanaletaEjemplo);
                    #endregion

                    #region Foto 04.07: POE (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000248",
                        imgPOEEjemplo);
                    #endregion

                    #region Foto 04.08: Patch cord POE / Router (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000249",
                        imgPatchCordPOERouterEjemplo);
                    #endregion

                    #region Foto 05.01: Tablero General / Secundario (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000250",
                        imgTableroGeneralSecundarioEjemplo);
                    #endregion

                    #region Foto 05.02: Instalación de Breaker (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000251",
                        imgInstalacionBreakerEjemplo);
                    #endregion

                    #region Foto 05.03: Cable Conexión Eléctrica (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000252",
                        imgCableConexionElectricaEjemplo);
                    #endregion

                    #region Foto 05.04: Tomas de Energía (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000253",
                        imgTomasEnergiaEjemplo);
                    #endregion

                    #region Foto 05.05: Foto Interna de Instalación de Breaker (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000254",
                        imgFotoInternaInstalacionBreakerEjemplo);
                    #endregion

                    #region Foto 06.01: DNI / DJ Representante / Abonado (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000255",
                        imgDNIDJRepresentanteAbonado01Ejemplo);
                    #endregion

                    #region Foto 06.02: DNI / DJ Representante / Abonado (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000256",
                        imgDNIDJRepresentanteAbonado02Ejemplo);
                    #endregion

                    #region Foto 07.01: Switch (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000257",
                        imgEquipoSwitchEjemplo);
                    #endregion

                    #region Foto 07.02: Router (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000258",
                        imgEquipoRouterEjemplo);
                    #endregion

                    #region Foto 07.03: Regleta de Energía (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000259",
                        imgEquipoRegletaEnergiaEjemplo);
                    #endregion

                    #region Foto 07.04: UPS (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000260",
                        imgEquipoUPSEjemplo);
                    #endregion

                    #region Foto 07.05: Computador(as) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000261",
                        imgEquipoComputadorasEjemplo);
                    #endregion

                    #region Foto 07.06: Access Point (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000262",
                        imgEquipoAccessPointEjemplo);
                    #endregion

                    #region Foto 07.07: Impresora (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000263",
                        imgEquipoImpresoraEjemplo);
                    #endregion

                    #region Foto 07.08: Panoramica de Sala de Equipos (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000264",
                        imgPanoramicaSalaEquiposEjemplo);
                    #endregion

                    #region Foto 07.09: JACK RJ45 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000265",
                        imgEquipoJACKRJ45Ejemplo);
                    #endregion

                    #region Foto 08.01: Instalación del Pozo a Tierra (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000266",
                        imgPTInstalacionPozoTierraEjemplo);
                    #endregion

                    #region Foto 08.02: Conexiones en la Caja de Registro (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000267",
                        imgPTConexionesCajaRegistroEjemplo);
                    #endregion

                    #region Foto 08.03: Escala Utilizada y Resultado de Medición N° 1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000268",
                        imgPTEscalaUtilizadaResultadoMedicion01Ejemplo);
                    #endregion

                    #region Foto 08.04: Escala Utilizada y Resultado de Medición N° 2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000269",
                        imgPTEscalaUtilizadaResultadoMedicion02Ejemplo);
                    #endregion

                    #region Foto 08.05: Escala Utilizada y Resultado de Medición N° 3 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000270",
                        imgPTEscalaUtilizadaResultadoMedicion03Ejemplo);
                    #endregion

                    #region Foto 09.01: Instalación del Pozo a Tierra N° 1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000271",
                        imgPTPInstalacionPozoTierra01Ejemplo);
                    #endregion

                    #region Foto 09.02: Instalación del Pozo a Tierra N° 2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000272",
                        imgPTPInstalacionPozoTierra02Ejemplo);
                    #endregion

                    #region Foto 09.03: Escala Utilizada y Resultado de Medición N° 1 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000273",
                        imgPTPEscalaUtilizadaResultadoMedicion01Ejemplo);
                    #endregion

                    #region Foto 09.04: Escala Utilizada y Resultado de Medición N° 2 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000274",
                        imgPTPEscalaUtilizadaResultadoMedicion02Ejemplo);
                    #endregion

                    #region Foto 09.05: Escala Utilizada y Resultado de Medición N° 3 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000275",
                        imgPTPEscalaUtilizadaResultadoMedicion03Ejemplo);
                    #endregion

                    #region Foto 10.01: Pantalla de configuración (home) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000276",
                        imgPantallaConfiguracionHomeEjemplo);
                    #endregion

                    #region Foto 10.02: Pantalla de configuración (securiry) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000277",
                        imgPantallaConfiguracionSecurityEjemplo);
                    #endregion

                    #region Foto 10.03: Pantalla de configuración (radio parte 1) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000278",
                        imgPantallaConfiguracionRadio01Ejemplo);
                    #endregion

                    #region Foto 10.04: Pantalla de configuración (radio parte 2) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000279",
                        imgPantallaConfiguracionRadio02Ejemplo);
                    #endregion

                    #region Foto 10.05: Configuración del Sistema (System parte 1) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000280",
                        imgConfiguracionSistemaSystem01Ejemplo);
                    #endregion

                    #region Foto 10.06: Configuración del Sistema (System parte 2) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000281",
                        imgConfiguracionSistemaSystem02Ejemplo);
                    #endregion

                    #region Foto 10.07: Pantalla de Configuración (Network - parte 1) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000282",
                        imgPantallaConfiguracionNetwork01Ejemplo);
                    #endregion

                    #region Foto 10.08: Pantalla de Configuración (Network - parte 2) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000283",
                        imgPantallaConfiguracionNetwork02Ejemplo);
                    #endregion

                    #region Foto 10.09: Pantalla de Configuración (Monitor Wireless) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000284",
                        imgPantallaConfiguracionMonitorWirelessEjemplo);
                    #endregion

                    #region Foto 10.10: Configuración del Sistema (Tools Wireleess Linktest) (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000285",
                        imgConfiguracionSistemaToolsWirelessLinktestEjemplo);
                    #endregion

                    #region Foto 11.01: Monitor Donde se Muestre la Conexión al Sitio Web (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000286",
                        imgMonitorMuestraConexionSitioWebEjemplo);
                    #endregion

                    #region Foto 11.02: Monitor Donde se Muestre Conectividad al Nodo Terminal (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000287",
                        imgMonitorMuestraConectividadNodoTerminalEjemplo);
                    #endregion

                    #region Foto 11.03: Monitor Donde se Muestre Conectividad al Nodo Distrital de Cabecera (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000288",
                        imgMonitorMuestraConectividadNodoDistritalCabeceraEjemplo);
                    #endregion

                    #endregion

                    #region 8 Serie Equipos (fotos)

                    #region EPMP 1000 Force 180 (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000289",
                        imgEPMP1000Force180Ejemplo);
                    #endregion

                    #region EPMP 1000 Force 180
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "ICA0066",1, lblEPMP1000Force180);
                    #endregion

                    #region Foto 01: Access Point, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000290",
                        imgSerieAccessPointEjemplo);
                    #endregion

                    #region Foto 01: Access Point, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "NWCIRRXR-620", 1, lblSerieAccessPoint);
                    #endregion

                    #region Foto 02: Switch, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000291",
                        imgSerieSwitchEjemplo);
                    #endregion

                    #region Foto 02: Switch, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "NWDLDGS121010P", 1, lblSerieSwitch);
                    #endregion

                    #region Foto 03: Router, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000292",
                        imgSerieRouterEjemplo);
                    #endregion

                    #region Foto 03: Router, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "NWMKRB750GR3", 1, lblSerieRouter);
                    #endregion

                    #region Foto 04: Impresora, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000293",
                        imgSerieImpresoraEjemplo);
                    #endregion

                    #region Foto 04: Impresora, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "PRHPOJ8710", 1, lblSerieImpresora);
                    #endregion

                    #region Foto 05: UPS, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000294",
                        imgSerieUPSEjemplo);
                    #endregion

                    #region Foto 05: UPS, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "UPSLIGTX-MT-KIT", 1, lblSerieUPS);
                    #endregion

                    #region Foto 06: PC-01, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000295",
                        imgSeriePC01Ejemplo);
                    #endregion

                    #region Foto 06: PC-01, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "PCADAI455601", 1, lblSeriePC01);
                    #endregion

                    #region Foto 07: PC-02, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000296",
                        imgSeriePC02Ejemplo);
                    #endregion

                    #region Foto 07: PC-02, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "PCADAI455601", 2, lblSeriePC02);
                    #endregion

                    #region Foto 08: PC-03, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000297",
                        imgSeriePC03Ejemplo);
                    #endregion

                    #region Foto 08: PC-03, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "PCADAI455601", 3, lblSeriePC03);
                    #endregion

                    #region Foto 09: PC-04, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000298",
                        imgSeriePC04Ejemplo);
                    #endregion

                    #region Foto 09: PC-04, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "PCADAI455601", 4, lblSeriePC04);
                    #endregion

                    #region Foto 10: PC-05, incluir la serie y cartel IIBB (Ejemplo)
                    UtilitarioBL.AsignarEntidadDetalleImagen(entidadDetalleBE, "CAMP_EJE", "000299",
                        imgSeriePC05Ejemplo);
                    #endregion

                    #region Foto 10: PC-05, incluir la serie y cartel IIBB
                    UtilitarioBL.AsignarSerieLabel(lstDocumentoEquipamiento, "PCADAI455601", 5, lblSeriePC05);
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

                    //#region Verificamos si existe la documentacion
                    //DocumentoDetalleBE DocumentoDetalle = new DocumentoDetalleBE();
                    //List<DocumentoDetalleBE> lstDetalles = new List<DocumentoDetalleBE>();
                    //DocumentoDetalle.Documento = Documento;
                    //lstDetalles = DocumentoDetalleBL.ListarDocumentoDetalle(DocumentoDetalle);
                    //if (lstDetalles.Count > 0)
                    //{
                    //    String strRutaFisicaTemporal = "";

                    //    #region Ruta Fisica Temporal
                    //    entidadDetalleBE = new EntidadDetalleBE();
                    //    entidadDetalleBE.Entidad.IdEntidad = "CONF";
                    //    entidadDetalleBE.IdValor = "RUTA_TEMP";
                    //    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    //    strRutaFisicaTemporal = entidadDetalleBE.ValorCadena1;
                    //    #endregion

                    //    #region Ruta Virtual Temporal
                    //    entidadDetalleBE = new EntidadDetalleBE();
                    //    entidadDetalleBE.Entidad.IdEntidad = "CONF";
                    //    entidadDetalleBE.IdValor = "RUTA_VIRT_TEMP";
                    //    entidadDetalleBE = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalleBE)[0];
                    //    hfRutaVirtualTemporal.Value = entidadDetalleBE.ValorCadena1;
                    //    #endregion

                    //    #region Carátula

                    //    #region Frecuencia
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000001").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFrecuencia,
                    //        hfFrecuenciaComentario, ddlFrecuencia, null, null);
                    //    #endregion

                    //    #region Fecha
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000002").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkFecha,
                    //        hfFechaComentario, null,
                    //        txtFecha, null, null,
                    //        Type.GetType("System.DateTime"));
                    //    #endregion

                    //    #endregion

                    //    #region 1 Configuración y Pruebas

                    //    #region Dirección
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000003").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDireccion,
                    //        hfDireccionComentario, null,
                    //        txtDireccion, null, null,
                    //        Type.GetType("System.String"));
                    //    #endregion

                    //    #region Latitud
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000004").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLatitud,
                    //        hfLatitudComentario, null,
                    //        txtLatitud, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #region Longitud
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000005").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkLongitud,
                    //        hfLongitudComentario, null,
                    //        txtLongitud, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #region Altitud
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000006").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAltitud,
                    //        hfAltitudComentario, null,
                    //        txtAltitud, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #region Azimut
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000007").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAzimut,
                    //        hfAzimutComentario, null,
                    //        txtAzimut, null, null,
                    //        Type.GetType("System.Int32"));

                    //    #endregion

                    //    #region Down Tilt
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000008").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkDownTilt,
                    //        hfDownTiltComentario, null,
                    //        txtDownTilt, null, null,
                    //        Type.GetType("System.Int32"));
                    //    #endregion

                    //    #region Altura Instalada
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000009").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAlturaInstalada,
                    //        hfAlturaInstaladaComentario, null,
                    //        txtAlturaInstalada, null, null,
                    //        Type.GetType("System.Int32"));
                    //    #endregion

                    //    #region Capacidad Enlace
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000010").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkCapacidadEnlace,
                    //        hfCapacidadEnlaceComentario, null,
                    //        txtCapacidadEnlace, null, null,
                    //        Type.GetType("System.Int32"));
                    //    #endregion

                    //    #region Eficiencia Enlace
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000011").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEficienciaEnlace,
                    //        hfEficienciaEnlaceComentario, null,
                    //        txtEficienciaEnlace, null, null,
                    //        Type.GetType("System.Int32"));
                    //    #endregion

                    //    #region Capt 1: Configuration/Radio
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000012").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationRadio,
                    //        hfConfigurationRadioComentario, null, null,
                    //        hfConfigurationRadio, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));

                    //    #endregion

                    //    #region Capt 2: Configuration/QoS
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000013").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationQoS,
                    //        hfConfigurationQoSComentario, null, null,
                    //        hfConfigurationQoS, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 3.01: Configuration/System
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000014").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationSystem01,
                    //        hfConfigurationSystem01Comentario, null, null,
                    //        hfConfigurationSystem01, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 3.02: Configuration/System
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000015").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkConfigurationSystem02,
                    //        hfConfigurationSystem02Comentario, null, null,
                    //        hfConfigurationSystem02, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 4: Monitor/System
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000016").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMonitorSystem,
                    //        hfMonitorSystemComentario, null, null,
                    //        hfMonitorSystem, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 5.01: Monitor/Wireless
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000017").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMonitorWireless01,
                    //        hfMonitorWireless01Comentario, null, null,
                    //        hfMonitorWireless01, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 5.02: Monitor/Wireless
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000018").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMonitorWireless02,
                    //        hfMonitorWireless02Comentario, null, null,
                    //        hfMonitorWireless02, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 6: Tools/Wireless link test
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000019").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkToolsWireless,
                    //        hfToolsWirelessComentario, null, null,
                    //        hfToolsWireless, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Capt 7: Pantalla Home
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000019").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPantallaHome,
                    //        hfPantallaHomeComentario, null, null,
                    //        hfPantallaHome, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #endregion

                    //    #region 2 Materiales AP

                    //    #region Tipo Fuente
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000024").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkTipoFuente,
                    //        hfTipoFuenteComentario, ddlTipoFuente, null, null);
                    //    #endregion

                    //    #region Equipamientos
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000083").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEquipamientos,
                    //        hfEquipamientosComentario);
                    //    DocumentoEquipamientoBE DocumentoEquipamiento = new DocumentoEquipamientoBE();
                    //    DocumentoEquipamiento.Documento = Documento;
                    //    lstDocumentoEquipamiento = DocumentoEquipamientoBL.ListarDocumentoEquipamiento(DocumentoEquipamiento);
                    //    Session["Equipamientos"] = lstDocumentoEquipamiento;

                    //    gvEquipamientos.DataSource = lstDocumentoEquipamiento;
                    //    gvEquipamientos.DataBind();

                    //    Documento.Equipamientos = lstDocumentoEquipamiento;
                    //    #endregion

                    //    #region Materiales
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000026").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMateriales,
                    //        hfMaterialesComentario);
                    //    DocumentoMaterialBE DocumentoMaterial = new DocumentoMaterialBE();
                    //    DocumentoMaterial.Documento = Documento;
                    //    lstDocumentoMaterial = DocumentoMaterialBL.ListarDocumentoMaterial(DocumentoMaterial);
                    //    Session["Materiales"] = lstDocumentoMaterial;

                    //    gvMateriales.DataSource = lstDocumentoMaterial;
                    //    gvMateriales.DataBind();

                    //    Documento.Materiales = lstDocumentoMaterial;

                    //    #endregion

                    //    #endregion

                    //    #region 3 SFTP

                    //    #region Distancia B
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000027").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkB,
                    //        hfBComentario, null, txtB, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #region Distancia C
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000028").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkC,
                    //        hfCComentario, null, txtC, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #region Distancia D
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000029").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkD,
                    //        hfDComentario, null, txtD, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #region Distancia E
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000030").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkE, hfEComentario, null, txtE, null, null,
                    //        Type.GetType("System.Double"));
                    //    #endregion

                    //    #endregion

                    //    #region 7 Reporte Fotográfico

                    //    #region Foto 1: Panorámica Estacion A
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000031").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaEstacionA,
                    //        hfPanoramicaEstacionAComentario, null, null,
                    //        hfPanoramicaEstacionA, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 2: Posición Antena Instalada
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000032").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPosicionAntena,
                    //        hfPosicionAntenaComentario, null, null,
                    //        hfPosicionAntena, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 3: Antena ODU Torre
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000033").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAntenaODU,
                    //        hfAntenaODUComentario, null, null,
                    //        hfAntenaODU, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 4: UGPS
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000034").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkUGPS,
                    //        hfUGPSComentario, null, null,
                    //        hfUGPS, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 5: Engrasado Perno
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000035").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEngrasadoPerno,
                    //        hfEngrasadoPernoComentario, null, null,
                    //        hfEngrasadoPerno, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 6: Siliconeado Etiquetado Conector
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000036").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSiliconeadoEtiquetadoConector,
                    //        hfSiliconeadoEtiquetadoConectorComentario, null, null,
                    //        hfSiliconeadoEtiquetadoConector, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 8: Recorrido Cable SFTP
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000038").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkRecorridoCableSFTP,
                    //        hfRecorridoCableSFTPComentario, null, null,
                    //        hfRecorridoCableSFTP, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 9: Aterramiento Cable SFTP Outdoor
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000039").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoCableSFTPOutdoor,
                    //        hfAterramientoCableSFTPOutdoorComentario, null, null,
                    //        hfAterramientoCableSFTPOutdoor, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 10: Aterramiento Cable SFTP Indoor
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000040").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoCableSFTPIndoor,
                    //        hfAterramientoCableSFTPIndoorComentario, null, null,
                    //        hfAterramientoCableSFTPIndoor, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 11: Etiquetado POE
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000041").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEtiquetadoPOE,
                    //        hfEtiquetadoPOEComentario, null, null,
                    //        hfEtiquetadoPOE, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 12: Panorámica Rack
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000042").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPanoramicaRack,
                    //        hfPanoramicaRackComentario, null, null,
                    //        hfPanoramicaRack, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 13: Aterramiento POE
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000043").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkAterramientoPOE,
                    //        hfAterramientoPOEComentario, null, null,
                    //        hfAterramientoPOE, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 14.01: Emergencia POE Etiqueta
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000044").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEmergenciaPOEEtiqueta01,
                    //        hfEmergenciaPOEEtiqueta01Comentario, null, null,
                    //        hfEmergenciaPOEEtiqueta01, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 14.02: Emergencia POE Etiqueta
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000045").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkEmergenciaPOEEtiqueta02,
                    //        hfEmergenciaPOEEtiqueta02Comentario, null, null,
                    //        hfEmergenciaPOEEtiqueta02, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 15: Patch Core Salida POE
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000046").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPatchCoreSalidaPOE,
                    //        hfPatchCoreSalidaPOEComentario, null, null,
                    //        hfPatchCoreSalidaPOE, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 16: Patch Core Salida Switch
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000047").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkPatchCoreSalidaSwitch,
                    //        hfPatchCoreSalidaSwitchComentario, null, null,
                    //        hfPatchCoreSalidaSwitch, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 17: Serie POE
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000048").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSeriePOE,
                    //        hfSeriePOEComentario, null, null,
                    //        hfSeriePOE, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 18: Serie AP
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000049").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieAP,
                    //        hfSerieAPComentario, null, null,
                    //        hfSerieAP, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #region Foto 19: Serie Antena
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000050").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieAntena,
                    //        hfSerieAntenaComentario, null, null,
                    //        hfSerieAntena, strRutaFisicaTemporal,
                    //        Type.GetType("System.Byte[]"));
                    //    #endregion

                    //    #endregion

                    //    #region 8 Datos Generales del Nodo

                    //    #region # Serie ODU
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000051").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle,
                    //        chkSerieODU, hfSerieODUComentario,
                    //        null, txtSerieODU,
                    //        null, null, Type.GetType("System.String"));
                    //    #endregion

                    //    #region # Serie Antena
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000052").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkSerieNodoAntena,
                    //        hfSerieNodoAntenaComentario, null, txtSerieNodoAntena,
                    //        null, null, Type.GetType("System.String"));
                    //    #endregion

                    //    #region Mediciones de Enlaces de Propagación
                    //    DocumentoDetalle = lstDetalles.Where(dd => dd.Campo.IdValor == "000053").Select(dd => dd).First();
                    //    UtilitarioBL.ObtenerDocumentoDetalle(DocumentoDetalle, chkMedicionEnlacePropagacion,
                    //        hfMedicionEnlacePropagacionComentario);
                    //    DocumentoMedicionEnlacePropagacionBE DocumentoMedicionEnlacePropagacion = new DocumentoMedicionEnlacePropagacionBE();
                    //    DocumentoMedicionEnlacePropagacion.Documento = Documento;
                    //    DocumentoMedicionEnlacePropagacion.NodoA.IdNodo = Tarea.NodoIIBBA.IdNodo;
                    //    lstMedicionEnlacePropagacion = DocumentoMedicionEnlacePropagacionBL.ListarDocumentoMedicionEnlacePropagacion(DocumentoMedicionEnlacePropagacion);

                    //    Session["MedicionesEnlacePropagacion"] = lstMedicionEnlacePropagacion;

                    //    gvMedicionEnlacePropagacion.DataSource = lstMedicionEnlacePropagacion;
                    //    gvMedicionEnlacePropagacion.DataBind();

                    //    Documento.MedicionesEnlacePropagacion = lstMedicionEnlacePropagacion;

                    //    #endregion

                    //    #region Asignamos el metodo
                    //    Session["metodo"] = "U";//Update
                    //    #endregion

                    //    #endregion

                    //}
                    //#endregion


                }
                else
                {
                    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myModal", "openAlert('#divAlert','modal-header-danger','Error','No existe el código de la tarea o el código de documento.');", true);
                }
            }
        }

        protected void gvMedicionEnlacePropagacion_RowDataBound(object sender, GridViewRowEventArgs e)
        {

            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "CPE";
                e.Row.Cells[1].Attributes["data-title"] = "Estación Local";
                e.Row.Cells[2].Attributes["data-title"] = "RSS CPE (dBm)";
                e.Row.Cells[3].Attributes["data-title"] = "RSS Local (dBm)";
                e.Row.Cells[4].Attributes["data-title"] = "Tiempo Promedio (ms)";
                e.Row.Cells[5].Attributes["data-title"] = "Capacidad Subida (Mbps)";
                e.Row.Cells[6].Attributes["data-title"] = "Capacidad Bajada (Mbps)";

            }

        }

        protected void gvEquipamientos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Descripción";
                e.Row.Cells[2].Attributes["data-title"] = "Unidad";
                e.Row.Cells[3].Attributes["data-title"] = "N° Serie";
            }
        }

        protected void gvMateriales_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[0].Attributes["data-title"] = "Item";
                e.Row.Cells[1].Attributes["data-title"] = "Descripción";
                e.Row.Cells[2].Attributes["data-title"] = "Código";
                e.Row.Cells[3].Attributes["data-title"] = "Unidad";
                e.Row.Cells[4].Attributes["data-title"] = "Cantidad";
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
                    Documento, "000002", chkFecha,
                    hfFechaComentario, null,
                    txtFecha, null, null,
                    Type.GetType("System.DateTime"));
                #endregion

                #endregion

                #region 1 Acta de Instalación FITEL

                #region 1. UBICACIÓN DEL NODO

                #region Dirección Nodo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000075", chkDireccionNodo,
                    hfDireccionNodoComentario, null,
                    txtDireccionNodo, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #region 2. INSTITUCIÓN BENEFICIARIA

                #region 2.1. Ubicación

                #region Latitud (S)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000004", chkLatitud,
                    hfLatitudComentario, null,
                    txtLatitud, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Longitud (W)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000005", chkLongitud,
                    hfLongitudComentario, null,
                    txtLongitud, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Referencia Ubicación IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000280", chkReferenciaIIBB,
                    hfReferenciaIIBBComentario, null,
                    txtReferenciaIIBB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #region 2.2. Infraestructura

                #region Tipo Mástil
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000281", chkTipoMastil,
                    hfTipoMastilComentario, ddlTipoMastil, null, null);
                #endregion

                #region Altura Mástil (m)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000282", chkAlturaMastil,
                    hfAlturaMastilComentario, null,
                    txtAlturaMastil, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #region 2.4. Energía Eléctrica del Servicio Instalado

                #region Disponibilidad Horas (H)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000283", chkDisponibilidadHora,
                    hfDisponibilidadHoraComentario, null,
                    txtDisponibilidadHora, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #endregion

                #region 2.5. Sistema de Puesta a Tierra instituciones

                #region Valor Medio Medida 1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000284", chkValorMedioMedida01,
                    hfValorMedioMedida01Comentario, null,
                    txtValorMedioMedida01, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Valor Medio Medida 2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000285", chkValorMedioMedida02,
                    hfValorMedioMedida02Comentario, null,
                    txtValorMedioMedida02, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Valor Medio Medida 3
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000286", chkValorMedioMedida03,
                    hfValorMedioMedida03Comentario, null,
                    txtValorMedioMedida03, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #region 2.6. Característica de Propagación

                #region Potencia de transmisión (Watts ó dBm)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000287", chkPotenciaTransmision,
                    hfPotenciaTransmisionComentario, null,
                    txtPotenciaTransmision, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Frecuencia de operación (MHz)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000001", chkFrecuencia,
                    hfFrecuenciaComentario, ddlFrecuencia, null, null);
                #endregion

                #region Ancho de banda de canal (MHz)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000288", chkAnchoBandaCanal,
                    hfAnchoBandaCanalComentario, null,
                    txtAnchoBandaCanal, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Azimuth (X°)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000007", chkAzimuth,
                    hfAzimuthComentario, null,
                    txtAzimuth, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Elevación (Y°)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000289", chkElevacion,
                    hfElevacionComentario, null,
                    txtElevacion, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #endregion

                #region 2.7. Mediciones de Enlaces

                #region Mediciones de Enlaces de Propagación
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000053", chkMedicionEnlacePropagacion,
                    hfMedicionEnlacePropagacionComentario);
                List<DocumentoMedicionEnlacePropagacionBE> lstMedicionEnlacePropagacion = new List<DocumentoMedicionEnlacePropagacionBE>();
                lstMedicionEnlacePropagacion = (List<DocumentoMedicionEnlacePropagacionBE>)Session["MedicionesEnlacePropagacion"];

                foreach (GridViewRow item in gvMedicionEnlacePropagacion.Rows)
                {
                    String strIdNodo = gvMedicionEnlacePropagacion.DataKeys[item.RowIndex]["NodoA_IdNodo"].ToString();
                    String strIdIIBB = gvMedicionEnlacePropagacion.DataKeys[item.RowIndex]["NodoIIBBB_IdNodo"].ToString();
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
                    lstMedicionEnlacePropagacion.Where(w => w.NodoA.IdNodo == strIdNodo && w.NodoIIBBB.IdNodo == strIdIIBB).ToList().ForEach(s =>
                    {
                        s.RSSLocal = dblRSSLocal;
                        s.RSSRemoto = dblRSSRemoto;
                        s.TiempoPromedio = intTiempoPromedio;
                        s.CapidadSubida = dblCapacidadSubida;
                        s.CapidadBajada = dblCapacidadBajada;
                    });
                }

                Documento.MedicionesEnlacePropagacion = lstMedicionEnlacePropagacion;
                #endregion

                #endregion

                #region 2.8. Conectividad a la Red

                #region Conectividad a Gilat
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000290", chkVerificacionConectividad,
                    hfVerificacionConectividadComentario, ddlVerificacionConectividad, null, null);
                #endregion

                #region Conectividad al nodo terminal (tiempo de ida y vuelta) [ms]
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000291", chkConectividadNodoTerminal,
                    hfConectividadNodoTerminalComentario, null,
                    txtConectividadNodoTerminal, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Conectividad al nodo distrital (tiempo de ida y vuelta) [ms]
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000292", chkConectividadNodoDistrital,
                    hfConectividadNodoDistritalComentario, null,
                    txtConectividadNodoDistrital, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #region Conectividad al NOC (tiempo de ida y vuelta) [ms]
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000293", chkConectividadNOC,
                    hfConectividadNOCComentario, null,
                    txtConectividadNOC, null, null,
                    Type.GetType("System.Int32"));
                #endregion

                #endregion

                #endregion

                #region 4. DATOS DEL ENCARGADO

                #region Nombres y Apellidos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000294", chkNombreCompletoEncargado,
                    hfNombreCompletoEncargadoComentario, null,
                    txtNombreCompletoEncargado, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region DNI
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000295", chkDocumentoIdentidadEncargado,
                    hfDocumentoIdentidadEncargadoComentario, null,
                    txtDocumentoIdentidadEncargado, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Celular Contacto
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000296", chkCelularContactoEncargado,
                    hfCelularContactoEncargadoComentario, null,
                    txtCelularContactoEncargado, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Email
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000297", chkEmailEncargado,
                    hfEmailEncargadoComentario, null,
                    txtEmailEncargado, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #region 6. Firmas

                #region 6.1. Representante de la institución Beneficiaria

                #region Nombres y Apellidos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000298", chkNombreCompletoRepresentanteIIBB,
                    hfNombreCompletoRepresentanteIIBBComentario, null,
                    txtNombreCompletoRepresentanteIIBB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region DNI
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000299", chkDocumentoIdentidadRepresentanteIIBB,
                    hfDocumentoIdentidadRepresentanteIIBBComentario, null,
                    txtDocumentoIdentidadRepresentanteIIBB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Celular Contacto
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000300", chkCelularContactoRepresentanteIIBB,
                    hfCelularContactoRepresentanteIIBBComentario, null,
                    txtCelularContactoRepresentanteIIBB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Cargo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000301", chkCargoRepresentanteIIBB,
                    hfCargoRepresentanteIIBBComentario, null,
                    txtCargoRepresentanteIIBB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Email
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000302", chkEmailRepresentanteIIBB,
                    hfEmailRepresentanteIIBBComentario, null,
                    txtEmailRepresentanteIIBB, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #region 6.2. Representante del Operador

                #region Nombres y Apellidos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000303", chkNombreCompletoOperador,
                    hfNombreCompletoOperadorComentario, null,
                    txtNombreCompletoOperador, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region DNI
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000304", chkDocumentoIdentidadOperador,
                    hfDocumentoIdentidadOperadorComentario, null,
                    txtDocumentoIdentidadOperador, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Cargo
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000305", chkCargoOperador,
                    hfCargoOperadorComentario, null,
                    txtCargoOperador, null, null,
                    Type.GetType("System.String"));
                #endregion

                #region Email
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000306", chkEmailOperador,
                    hfEmailOperadorComentario, null,
                    txtEmailOperador, null, null,
                    Type.GetType("System.String"));
                #endregion

                #endregion

                #endregion

                #endregion

                #region 2 Configuración y Pruebas

                #region Altitud (msnm)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000006", chkAltitud,
                    hfAltitudComentario, null,
                    txtAltitud, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #region 3 Pantallas de Configuración

                #region Access Point
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000307", chkPantallaConfiguracionAccessPoint,
                    hfPantallaConfiguracionAccessPointComentario, null, null,
                    hfPantallaConfiguracionAccessPoint, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Router Mikrotik
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000308", chkPantallaConfiguracionRouterMikrotik,
                    hfPantallaConfiguracionRouterMikrotikComentario, null, null,
                    hfPantallaConfiguracionRouterMikrotik, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Switch Dlink 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000309", chkPantallaConfiguracionSwitchDlink01,
                    hfPantallaConfiguracionSwitchDlink01Comentario, null, null,
                    hfPantallaConfiguracionSwitchDlink01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Switch Dlink 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000310", chkPantallaConfiguracionSwitchDlink02,
                    hfPantallaConfiguracionSwitchDlink02Comentario, null, null,
                    hfPantallaConfiguracionSwitchDlink02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region UPS
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000311", chkPantallaConfiguracionUPS,
                    hfPantallaConfiguracionUPSComentario, null, null,
                    hfPantallaConfiguracionUPS, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region All In One 01
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000312", chkPantallaConfiguracionAllInOne01,
                    hfPantallaConfiguracionAllInOne01Comentario, null, null,
                    hfPantallaConfiguracionAllInOne01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region All In One 02
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000313", chkPantallaConfiguracionAllInOne02,
                    hfPantallaConfiguracionAllInOne02Comentario, null, null,
                    hfPantallaConfiguracionAllInOne02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Impresora
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000314", chkPantallaConfiguracionImpresora,
                    hfPantallaConfiguracionImpresoraComentario, null, null,
                    hfPantallaConfiguracionImpresora, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 4 Medición SPAT

                #region Medición del Sistema de Puesta a tierra

                #region Medida 1 Valor Medio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000315", chkMedicionSistemaPuestaTierraMedida01ValorMedio,
                    hfMedicionSistemaPuestaTierraMedida01ValorMedioComentario, null,
                    txtMedicionSistemaPuestaTierraMedida01ValorMedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Medida 2 Valor Medio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000316", chkMedicionSistemaPuestaTierraMedida02ValorMedio,
                    hfMedicionSistemaPuestaTierraMedida02ValorMedioComentario, null,
                    txtMedicionSistemaPuestaTierraMedida02ValorMedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Medida 3 Valor Medio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000317", chkMedicionSistemaPuestaTierraMedida03ValorMedio,
                    hfMedicionSistemaPuestaTierraMedida03ValorMedioComentario, null,
                    txtMedicionSistemaPuestaTierraMedida03ValorMedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #region Medición del Sistema de Puesta a tierra Pararrayos

                #region Medida 1 Valor Medio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000318", chkMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio,
                    hfMedicionSistemaPuestaTierraPararrayosMedida01ValorMedioComentario, null,
                    txtMedicionSistemaPuestaTierraPararrayosMedida01ValorMedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Medida 2 Valor Medio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000319", chkMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio,
                    hfMedicionSistemaPuestaTierraPararrayosMedida02ValorMedioComentario, null,
                    txtMedicionSistemaPuestaTierraPararrayosMedida02ValorMedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #region Medida 3 Valor Medio
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000320", chkMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio,
                    hfMedicionSistemaPuestaTierraPararrayosMedida03ValorMedioComentario, null,
                    txtMedicionSistemaPuestaTierraPararrayosMedida03ValorMedio, null, null,
                    Type.GetType("System.Double"));
                #endregion

                #endregion

                #endregion

                #region 6 Material IIBB CPE

                #region Equipamientos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000083", chkEquipamientos, hfEquipamientosComentario);
                //List<DocumentoEquipamientoBE> lstDocumentoEquipamiento = new List<DocumentoEquipamientoBE>();
                //lstDocumentoEquipamiento = (List<DocumentoEquipamientoBE>)Session["Equipamientos"];

                //foreach (GridViewRow item in gvEquipamientos.Rows)
                //{
                //    String strCodigoEquipamiento = gvEquipamientos.DataKeys[item.RowIndex]["Equipamiento_IdValor"].ToString();
                //    TextBox txtSerieEquipamiento = (TextBox)item.FindControl("txtSerieEquipamiento");
                //    lstDocumentoEquipamiento.Where(w => w.Equipamiento.IdValor == strCodigoEquipamiento).ToList().ForEach(s => s.SerieEquipamiento = txtSerieEquipamiento.Text.ToUpper());
                //}

                //Documento.Equipamientos = lstDocumentoEquipamiento;
                #endregion

                #region Materiales
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000026", chkMateriales,
                    hfMaterialesComentario);
                List<DocumentoMaterialBE> lstDocumentoMaterial = new List<DocumentoMaterialBE>();
                lstDocumentoMaterial = (List<DocumentoMaterialBE>)Session["Materiales"];

                foreach (GridViewRow item in gvMateriales.Rows)
                {
                    //String strCodigoMaterial = item.Cells[2].Text;
                    String strCodigoMaterial = gvMateriales.DataKeys[item.RowIndex]["Material_IdValor"].ToString();
                    TextBox txtCantidad = (TextBox)item.FindControl("txtCantidad");
                    Int32 intCantidad;
                    if (txtCantidad.Text.Equals(""))
                        intCantidad = 0;
                    else
                        intCantidad = Convert.ToInt32(txtCantidad.Text);
                    lstDocumentoMaterial.Where(w => w.Material.IdValor == strCodigoMaterial).ToList().ForEach(s => s.Cantidad = intCantidad);
                }

                Documento.Materiales = lstDocumentoMaterial;
                #endregion

                #endregion

                #region 7 Reporte Fotográfico IIBB CPE

                #region Foto 01: Panorámica de la Localidad
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000321", chkPanoramicaLocalidad,
                    hfPanoramicaLocalidadComentario, null, null,
                    hfPanoramicaLocalidad, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 02: Fachada de la Institución
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000322", chkFachadaInstitucion,
                    hfFachadaInstitucionComentario, null, null,
                    hfFachadaInstitucion, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03.01: Impresora
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000323", chkImpresora,
                    hfImpresoraComentario, null, null,
                    hfImpresora, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03.02: Switch
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000324", chkSwitch,
                    hfSwitchComentario, null, null,
                    hfSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03.03: Router
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000325", chkRouter,
                    hfRouterComentario, null, null,
                    hfRouter, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03.04: PCsEncendidas
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000326", chkPCsEncendidas,
                    hfPCsEncendidasComentario, null, null,
                    hfPCsEncendidas, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03.05: UPS
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000327", chkUPS,
                    hfUPSComentario, null, null,
                    hfUPS, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03.06: Access Point
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000328", chkAccessPoint,
                    hfAccessPointComentario, null, null,
                    hfAccessPoint, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.01: ODU-CPE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000329", chkODUCPE,
                    hfODUCPEComentario, null, null,
                    hfODUCPE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.02: Mástil
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000330", chkMastil,
                    hfMastilComentario, null, null,
                    hfMastil, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.03: Panorámica de Antena Instalada en Mástil
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000331", chkPanoramicaAntenaInstaladaMastil,
                    hfPanoramicaAntenaInstaladaMastilComentario, null, null,
                    hfPanoramicaAntenaInstaladaMastil, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.04: Recorrido STFP Cat5e
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000332", chkRecorridoSFTPCat5e,
                    hfRecorridoSFTPCat5eComentario, null, null,
                    hfRecorridoSFTPCat5e, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.05: Ingreso de SFTP
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000333", chkIngresoSFTP,
                    hfIngresoSFTPComentario, null, null,
                    hfIngresoSFTP, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.06: Recorrido de SFTP por Canaleta
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000334", chkRecorridoSFTPCanaleta,
                    hfRecorridoSFTPCanaletaComentario, null, null,
                    hfRecorridoSFTPCanaleta, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.07: POE
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000335", chkPOE,
                    hfPOEComentario, null, null,
                    hfPOE, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04.08: Patch cord POE / Router
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000336", chkPatchCordPOERouter,
                    hfPatchCordPOERouterComentario, null, null,
                    hfPatchCordPOERouter, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 05.01: Tablero General / Secundario
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000337", chkTableroGeneralSecundario,
                    hfTableroGeneralSecundarioComentario, null, null,
                    hfTableroGeneralSecundario, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 05.02: Instalación de Breaker
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000338", chkInstalacionBreaker,
                    hfInstalacionBreakerComentario, null, null,
                    hfInstalacionBreaker, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 05.03: Cable Conexión Eléctrica
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000339", chkCableConexionElectrica,
                    hfCableConexionElectricaComentario, null, null,
                    hfCableConexionElectrica, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 05.04: Tomas de Energía
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000340", chkTomasEnergia,
                    hfTomasEnergiaComentario, null, null,
                    hfTomasEnergia, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 05.05: Foto Interna de Instalación de Breaker
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000341", chkFotoInternaInstalacionBreaker,
                    hfFotoInternaInstalacionBreakerComentario, null, null,
                    hfFotoInternaInstalacionBreaker, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 06.01: DNI / DJ Representante / Abonado
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000342", chkDNIDJRepresentanteAbonado01,
                    hfDNIDJRepresentanteAbonado01Comentario, null, null,
                    hfDNIDJRepresentanteAbonado01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 06.02: DNI / DJ Representante / Abonado
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000343", chkDNIDJRepresentanteAbonado02,
                    hfDNIDJRepresentanteAbonado02Comentario, null, null,
                    hfDNIDJRepresentanteAbonado02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.01: Switch
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000344", chkEquipoSwitch,
                    hfEquipoSwitchComentario, null, null,
                    hfEquipoSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.02: Router
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000345", chkEquipoRouter,
                    hfEquipoRouterComentario, null, null,
                    hfEquipoRouter, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.03: Regleta de Energía
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000346", chkEquipoRegletaEnergia,
                    hfEquipoRegletaEnergiaComentario, null, null,
                    hfEquipoRegletaEnergia, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.04: UPS
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000347", chkEquipoUPS,
                    hfEquipoUPSComentario, null, null,
                    hfEquipoUPS, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.05: Computador(as)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000348", chkEquipoComputadoras,
                    hfEquipoComputadorasComentario, null, null,
                    hfEquipoComputadoras, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.06: Access Point
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000349", chkEquipoAccessPoint,
                    hfEquipoAccessPointComentario, null, null,
                    hfEquipoAccessPoint, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.07: Impresora
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000350", chkEquipoImpresora,
                    hfEquipoImpresoraComentario, null, null,
                    hfEquipoImpresora, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.08: Panoramica de Sala de Equipos
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000351", chkPanoramicaSalaEquipos,
                    hfPanoramicaSalaEquiposComentario, null, null,
                    hfPanoramicaSalaEquipos, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07.09: JACK RJ45
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000352", chkEquipoJACKRJ45,
                    hfEquipoJACKRJ45Comentario, null, null,
                    hfEquipoJACKRJ45, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 08.01: Instalación del Pozo a Tierra
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000353", chkPTInstalacionPozoTierra,
                    hfPTInstalacionPozoTierraComentario, null, null,
                    hfPTInstalacionPozoTierra, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 08.02: Conexiones en la Caja de Registro
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000354", chkPTConexionesCajaRegistro,
                    hfPTConexionesCajaRegistroComentario, null, null,
                    hfPTConexionesCajaRegistro, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 08.03: Escala Utilizada y Resultado de Medición N° 1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000355", chkPTEscalaUtilizadaResultadoMedicion01,
                    hfPTEscalaUtilizadaResultadoMedicion01Comentario, null, null,
                    hfPTEscalaUtilizadaResultadoMedicion01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 08.04: Escala Utilizada y Resultado de Medición N° 2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000356", chkPTEscalaUtilizadaResultadoMedicion02,
                    hfPTEscalaUtilizadaResultadoMedicion02Comentario, null, null,
                    hfPTEscalaUtilizadaResultadoMedicion02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 08.05: Escala Utilizada y Resultado de Medición N° 3
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000357", chkPTEscalaUtilizadaResultadoMedicion03,
                    hfPTEscalaUtilizadaResultadoMedicion03Comentario, null, null,
                    hfPTEscalaUtilizadaResultadoMedicion03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 09.01: Instalación del Pozo a Tierra N° 1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000358", chkPTPInstalacionPozoTierra01,
                    hfPTPInstalacionPozoTierra01Comentario, null, null,
                    hfPTPInstalacionPozoTierra01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 09.02: Instalación del Pozo a Tierra N° 2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000359", chkPTPInstalacionPozoTierra02,
                    hfPTPInstalacionPozoTierra02Comentario, null, null,
                    hfPTPInstalacionPozoTierra02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 09.03: Escala Utilizada y Resultado de Medición N° 1
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000360", chkPTPEscalaUtilizadaResultadoMedicion01,
                    hfPTPEscalaUtilizadaResultadoMedicion01Comentario, null, null,
                    hfPTPEscalaUtilizadaResultadoMedicion01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 09.04: Escala Utilizada y Resultado de Medición N° 2
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000361", chkPTPEscalaUtilizadaResultadoMedicion02,
                    hfPTPEscalaUtilizadaResultadoMedicion02Comentario, null, null,
                    hfPTPEscalaUtilizadaResultadoMedicion02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 09.05: Escala Utilizada y Resultado de Medición N° 3
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000362", chkPTPEscalaUtilizadaResultadoMedicion03,
                    hfPTPEscalaUtilizadaResultadoMedicion03Comentario, null, null,
                    hfPTPEscalaUtilizadaResultadoMedicion03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.01: Pantalla de configuración (home)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000363", chkPantallaConfiguracionHome,
                    hfPantallaConfiguracionHomeComentario, null, null,
                    hfPantallaConfiguracionHome, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.02: Pantalla de configuración (securiry)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000364", chkPantallaConfiguracionSecurity,
                    hfPantallaConfiguracionSecurityComentario, null, null,
                    hfPantallaConfiguracionSecurity, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.03: Pantalla de configuración (radio parte 1)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000365", chkPantallaConfiguracionRadio01,
                    hfPantallaConfiguracionRadio01Comentario, null, null,
                    hfPantallaConfiguracionRadio01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.04: Pantalla de configuración (radio parte 2)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000366", chkPantallaConfiguracionRadio02,
                    hfPantallaConfiguracionRadio02Comentario, null, null,
                    hfPantallaConfiguracionRadio02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.05: Configuración del Sistema (System parte 1)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000367", chkConfiguracionSistemaSystem01,
                    hfConfiguracionSistemaSystem01Comentario, null, null,
                    hfConfiguracionSistemaSystem01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.06: Configuración del Sistema (System parte 2)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000368", chkConfiguracionSistemaSystem02,
                    hfConfiguracionSistemaSystem02Comentario, null, null,
                    hfConfiguracionSistemaSystem02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.07: Pantalla de Configuración (Network - parte 1)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000369", chkPantallaConfiguracionNetwork01,
                    hfPantallaConfiguracionNetwork01Comentario, null, null,
                    hfPantallaConfiguracionNetwork01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.08: Pantalla de Configuración (Network - parte 2)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000370", chkPantallaConfiguracionNetwork02,
                    hfPantallaConfiguracionNetwork02Comentario, null, null,
                    hfPantallaConfiguracionNetwork02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.09: Pantalla de Configuración (Monitor Wireless)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000371", chkPantallaConfiguracionMonitorWireless,
                    hfPantallaConfiguracionMonitorWirelessComentario, null, null,
                    hfPantallaConfiguracionMonitorWireless, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10.10: Configuración del Sistema (Tools Wireleess Linktest)
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000372", chkConfiguracionSistemaToolsWirelessLinktest,
                    hfConfiguracionSistemaToolsWirelessLinktestComentario, null, null,
                    hfConfiguracionSistemaToolsWirelessLinktest, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 11.01: Monitor Donde se Muestre la Conexión al Sitio Web
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000373", chkMonitorMuestraConexionSitioWeb,
                    hfMonitorMuestraConexionSitioWebComentario, null, null,
                    hfMonitorMuestraConexionSitioWeb, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 11.02: Monitor Donde se Muestre Conectividad al Nodo Terminal
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000374", chkMonitorMuestraConectividadNodoTerminal,
                    hfMonitorMuestraConectividadNodoTerminalComentario, null, null,
                    hfMonitorMuestraConectividadNodoTerminal, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 11.03: Monitor Donde se Muestre Conectividad al Nodo Distrital de Cabecera
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000375", chkMonitorMuestraConectividadNodoDistritalCabecera,
                    hfMonitorMuestraConectividadNodoDistritalCabeceraComentario, null, null,
                    hfMonitorMuestraConectividadNodoDistritalCabecera, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #endregion

                #region 8 Serie Equipos (fotos)

                #region EPMP 1000 Force 180
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000376", chkEPMP1000Force180,
                    hfEPMP1000Force180Comentario, null, null,
                    hfEPMP1000Force180, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 01: Access Point, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000377", chkSerieAccessPoint,
                    hfSerieAccessPointComentario, null, null,
                    hfSerieAccessPoint, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 02: Switch, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000378", chkSerieSwitch,
                    hfSerieSwitchComentario, null, null,
                    hfSerieSwitch, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 03: Router, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000379", chkSerieRouter,
                    hfSerieRouterComentario, null, null,
                    hfSerieRouter, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 04: Impresora, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000380", chkSerieImpresora,
                    hfSerieImpresoraComentario, null, null,
                    hfSerieImpresora, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 05: UPS, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000381", chkSerieUPS,
                    hfSerieUPSComentario, null, null,
                    hfSerieUPS, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 06: PC-01, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000382", chkSeriePC01,
                    hfSeriePC01Comentario, null, null,
                    hfSeriePC01, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 07: PC-02, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000383", chkSeriePC02,
                    hfSeriePC02Comentario, null, null,
                    hfSeriePC02, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 08: PC-03, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000384", chkSeriePC03,
                    hfSeriePC03Comentario, null, null,
                    hfSeriePC03, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 09: PC-04, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000385", chkSeriePC04,
                    hfSeriePC04Comentario, null, null,
                    hfSeriePC04, strRutaFisicaTemporal,
                    Type.GetType("System.Byte[]"));
                #endregion

                #region Foto 10: PC-05, incluir la serie y cartel IIBB
                UtilitarioBL.AsignarDocumentoDetalle(DocumentoDetalle,
                    Documento, "000386", chkSeriePC05,
                    hfSeriePC05Comentario, null, null,
                    hfSeriePC05, strRutaFisicaTemporal,
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