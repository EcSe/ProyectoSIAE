﻿using BusinessEntity;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Xml.Serialization;

namespace BusinessLogic
{
    public static class UtilitarioBL
    {
        public const String WillNotBeIncluded ="";
        public static String ObtenerHTMLAplicacionActual(AplicacionBE aplicacioneActual)
        {
            StringBuilder sbAplicaciones = new StringBuilder();
            String strResultado = "";

            sbAplicaciones.Append("<div class=\"row\">");

            sbAplicaciones.Append("<div class=\"ms-feature col-sx-12 card flipInX animated\">");
            sbAplicaciones.Append("<div class=\"text-center card-block\">");
            sbAplicaciones.Append("<span class=\"ms-icon ms-icon-circle ms-icon-xxlg " + aplicacioneActual.EstiloIcono + " \">");
            sbAplicaciones.Append("<span class=\"" + aplicacioneActual.Icono + "\"></span>");
            sbAplicaciones.Append("</span>");
            sbAplicaciones.Append("<h4 class=\"" + aplicacioneActual.EstiloTitulo + "\">" + aplicacioneActual.Nombre + "</h4>");
            sbAplicaciones.Append("<p>" + aplicacioneActual.Descripcion + "</p>");
            //sbAplicaciones.Append("<a href=\"" + item.URLDefault + "?ticket=" + Usuario.Ticket + "\" class=\"btn " + item.EstiloBoton + " btn-raised\"><span class=\"glyphicon glyphicon-log-in\"></span> Entrar</a>");
            //sbAplicaciones.Append("<a href=\"" + item.URLDefault + "?ticket=" + Usuario.Ticket + "&aplicacion=" + item.IdAplicacion + "\" class=\"btn " + item.EstiloBoton + " btn-raised\"><span class=\"glyphicon glyphicon-log-in\"></span> Entrar</a>");
            sbAplicaciones.Append("</div>");
            sbAplicaciones.Append("</div>");
            sbAplicaciones.Append("</div>");

            strResultado = sbAplicaciones.ToString();
            return strResultado;
        }

        public static void AsignarEntidadDetalleDropdownlist(EntidadDetalleBE entidadDetalle,DropDownList dropDownList,String strCampoValor,String strCampoTexto,EntidadDetalleBE entidadDefecto = null,List<EntidadDetalleBE> lstQuitarElementos = null)
        {
            List<EntidadDetalleBE> lstEntidadesDetalle = new List<EntidadDetalleBE>();
            lstEntidadesDetalle = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalle);
            if (lstQuitarElementos != null)
            {
                foreach (EntidadDetalleBE item in lstQuitarElementos)
                {
                    lstEntidadesDetalle.RemoveAll(x => x.IdValor == item.IdValor);
                }
            }
            if (entidadDefecto != null)
            {
                lstEntidadesDetalle.Insert(0, entidadDefecto);
            }
            dropDownList.DataSource = lstEntidadesDetalle;
            dropDownList.DataValueField = strCampoValor;
            dropDownList.DataTextField = strCampoTexto;
            dropDownList.DataBind();
        }

        public static void AsignarImagen(EntidadDetalleBE entidadDetalle, HtmlImage imagen, String rutaImagen)
        {
            entidadDetalle = EntidadDetalleBL.ListarEntidadDetalle(entidadDetalle)[0];
            imagen.Src = entidadDetalle.ValorCadena1 + rutaImagen;
        }

        public static object ValidarDatoReader<T>(DbDataReader reader,Int32 fila,Boolean permiteNulo,String NombreCampo, out Boolean errorCampo, out Boolean errorDato, StreamWriter file)
        {
            object objRespuesta = null;
            errorCampo = false;
            errorDato = false;
            try
            {
                if (!permiteNulo && Convert.IsDBNull(reader.GetValue(reader.GetOrdinal(NombreCampo))))
                {
                    errorDato = true;
                    file.WriteLine("Fila " + fila.ToString() + ": El valor del campo \"" + NombreCampo + "\" no puede ser vacío.");
                }
                else
                {
                    if (reader.GetValue(reader.GetOrdinal(NombreCampo)).GetType() == typeof(T) || permiteNulo)
                    {
                        objRespuesta = reader.GetValue(reader.GetOrdinal(NombreCampo));
                    }
                    else
                    {
                        errorDato = true;
                        file.WriteLine("Fila " + fila.ToString() + ":El tipo de dato del campo \"" + NombreCampo + "\" no es válido.");
                    }
                }
            }
            catch (Exception ex)
            {
                if (ex.GetType().FullName.Equals("System.IndexOutOfRangeException"))
                {
                    errorCampo = true;
                    file.WriteLine("No existe el campo \"" + NombreCampo + "\"");
                }
                else
                {
                    errorDato = true;
                    file.WriteLine(ex.Message);
                }
            }

            return objRespuesta;
        }

        public static void AddLink(String rel,String type, String media, String href, Page page)
        {
            HtmlLink link = new HtmlLink();
            //Add appropriate attributes
            //link.Attributes.Add("rel", "stylesheet");
            link.Attributes.Add("rel", rel);
            //link.Attributes.Add("type", "text/css");
            link.Attributes.Add("type", type);
            //link.Attributes.Add("media", "screen, projection");
            link.Attributes.Add("media", media);
            link.Href = href;
            
            //add it to page head section
            page.Header.Controls.Add(link);

        }

        public static void AddClassMaster(Page page)
        {
            EntidadDetalleBE rutaVirtualEstandar = new EntidadDetalleBE();

            rutaVirtualEstandar.Entidad.IdEntidad = "CONF";
            rutaVirtualEstandar.IdValor = "RUTA_VIRT_EST";
            rutaVirtualEstandar = EntidadDetalleBL.ListarEntidadDetalle(rutaVirtualEstandar)[0];

            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/bootstrap.min.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/bootstrap-default.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/bootstrap-float-label.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/loader.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/animate.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/hover-default.css", page);
            //UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/checkbox-radio.css", page);//Conflicto con checbox-switch.css revisar antes de implantar
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/grid-view.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/font-awesome.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/default.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/checbox-switch.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/css/panel-with-nav-tabs.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/themes/classic.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/themes/classic.date.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/themes/classic.time.css", page);
            UtilitarioBL.AddLink("stylesheet", "text/css", "screen, projection", rutaVirtualEstandar.ValorCadena1 + "/upload/css/classic.css", page);
            UtilitarioBL.AddLink("shortcut icon", "image/png", "", rutaVirtualEstandar.ValorCadena1 + "/images/LogoSIAE60.png", page);
        }

        public static void AddScriptMaster(Page page)
        {
            EntidadDetalleBE rutaVirtualEstandar = new EntidadDetalleBE();

            rutaVirtualEstandar.Entidad.IdEntidad = "CONF";
            rutaVirtualEstandar.IdValor = "RUTA_VIRT_EST";
            rutaVirtualEstandar = EntidadDetalleBL.ListarEntidadDetalle(rutaVirtualEstandar)[0];

            page.ClientScript.RegisterClientScriptInclude("jquery-3.2.1.min.js", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/jquery-3.2.1.min.js");
            page.ClientScript.RegisterClientScriptInclude("bootstrap.min.js", rutaVirtualEstandar.ValorCadena1 + "/js/bootstrap.min.js");
            page.ClientScript.RegisterClientScriptInclude("utilitarios.js", rutaVirtualEstandar.ValorCadena1 + "/js/utilitarios.js");
            page.ClientScript.RegisterClientScriptInclude("bootstrap3-typeahead.js", rutaVirtualEstandar.ValorCadena1 + "/js/bootstrap3-typeahead.js");
            page.ClientScript.RegisterClientScriptInclude("picker.js", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/picker.js");
            page.ClientScript.RegisterClientScriptInclude("picker.date.js", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/picker.date.js");
            page.ClientScript.RegisterClientScriptInclude("picker.time.js", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/picker.time.js");
            page.ClientScript.RegisterClientScriptInclude("legacy.js", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/legacy.js");
            page.ClientScript.RegisterClientScriptInclude("es_PE.js", rutaVirtualEstandar.ValorCadena1 + "/pickadate.js-3.5.6/lib/translations/es_PE.js");
            page.ClientScript.RegisterClientScriptInclude("realuploader.js", rutaVirtualEstandar.ValorCadena1 + "/upload/js/realuploader.js");

        }

        /// <summary>
        /// Perform a deep Copy of the object.
        /// </summary>
        /// <typeparam name="T">The type of object being copied.</typeparam>
        /// <param name="source">The object instance to copy.</param>
        /// <returns>The copied object.</returns>
        //public static T Clone<T>(this T source)
        //{
        //    if (!typeof(T).IsSerializable)
        //        throw new ArgumentException("The type must be serializable.", "source");

        //    // Don't serialize a null object, simply return the default for that object
        //    if (Object.ReferenceEquals(source, null))
        //        return default(T);

        //    var Ser = new XmlSerializer(typeof(T));
        //    using (var Ms = new MemoryStream())
        //    {
        //        Ser.Serialize(Ms, source);
        //        Ms.Seek(0, SeekOrigin.Begin);
        //        return (T)Ser.Deserialize(Ms);
        //    }
        //}

        public static void AsignarDocumentoDetalle(DocumentoDetalleBE DocumentoDetalle,
            DocumentoBE Documento, String IdValor, CheckBox chkAprobado, 
            HtmlInputHidden hfComentario,
            DropDownList ddlValor = null, 
            TextBox txtValor = null,HiddenField hfValor = null, String strRutaArchivo = null, Type tipo = null)
        {
            DocumentoDetalle = new DocumentoDetalleBE();
            DocumentoDetalle.Documento = Documento;
            DocumentoDetalle.Campo.IdValor = IdValor;
            DocumentoDetalle.Aprobado = chkAprobado.Checked;
            DocumentoDetalle.Comentario = hfComentario.Value.ToUpper();
            if (ddlValor != null)
            {
                DocumentoDetalle.IdValor = ddlValor.SelectedValue;
                DocumentoDetalle.ValorCadena = ddlValor.SelectedItem.Text;
            }
            else if (txtValor != null)
            {
                if (tipo != null && tipo.Equals(Type.GetType("System.DateTime")))
                {
                    if (!txtValor.Text.Equals(""))
                        DocumentoDetalle.ValorFecha = Convert.ToDateTime(txtValor.Text);
                }
                else if (tipo != null && tipo.Equals(Type.GetType("System.String")))
                    DocumentoDetalle.ValorCadena = txtValor.Text.ToUpper();
                else if (tipo != null && tipo.Equals(Type.GetType("System.Double")))
                {
                    if (!txtValor.Text.Equals(""))
                        DocumentoDetalle.ValorNumerico = Convert.ToDouble(txtValor.Text);
                }
                else if (tipo != null && tipo.Equals(Type.GetType("System.Int32")))
                {
                    if (!txtValor.Text.Equals(""))
                        //DocumentoDetalle.ValorEntero = Convert.ToInt32(txtValor.Text);
                        DocumentoDetalle.ValorEntero = Convert.ToInt32(Convert.ToDouble(txtValor.Text));
                }

            }
            else if (hfValor != null)
            {
                if (tipo != null && tipo.Equals(Type.GetType("System.Byte[]")))
                {
                    if (!hfValor.Value.Equals(""))
                        DocumentoDetalle.ValorBinario = File.ReadAllBytes(strRutaArchivo + "\\" + hfValor.Value);
                }
            }
            Documento.Detalles.Add(DocumentoDetalle.Clone());
        }

        public static void ObtenerDocumentoDetalle(DocumentoDetalleBE DocumentoDetalle
            //,DocumentoBE Documento
            //,String IdValor
            , CheckBox chkAprobado,
            HtmlInputHidden hfComentario,
            DropDownList ddlValor = null,
            TextBox txtValor = null, HiddenField hfValor = null, String strRutaArchivo = null, Type tipo = null)
        {
            //DocumentoDetalle = new DocumentoDetalleBE();
            //DocumentoDetalle.Documento = Documento;
            //DocumentoDetalle.Campo.IdValor = IdValor;
            chkAprobado.Checked = DocumentoDetalle.Aprobado;
            hfComentario.Value = DocumentoDetalle.Comentario;
            if (ddlValor != null)
            {
                ddlValor.SelectedValue = DocumentoDetalle.IdValor;
                //DocumentoDetalle.IdValor = ddlValor.SelectedValue;
                //DocumentoDetalle.ValorCadena = ddlValor.SelectedItem.Text;
            }
            else if (txtValor != null)
            {
                if (tipo != null && tipo.Equals(Type.GetType("System.DateTime")))
                {
                    if (!DocumentoDetalle.ValorFecha.Equals(Convert.ToDateTime("01/01/0001 00:00:00.00")))
                        txtValor.Text = DocumentoDetalle.ValorFecha.ToString("dd/MM/yyyy");
                }
                else if (tipo != null && tipo.Equals(Type.GetType("System.String")))
                    txtValor.Text = DocumentoDetalle.ValorCadena;
                else if (tipo != null && tipo.Equals(Type.GetType("System.Double")))
                {
                    if (DocumentoDetalle.ValorNumerico!=null)
                        txtValor.Text = DocumentoDetalle.ValorNumerico.ToString();
                }
                else if (tipo != null && tipo.Equals(Type.GetType("System.Int32")))
                {
                    if (DocumentoDetalle.ValorEntero != null)
                        //DocumentoDetalle.ValorEntero = Convert.ToInt32(txtValor.Text);
                        txtValor.Text = DocumentoDetalle.ValorEntero.ToString();
                }

            }
            else if (hfValor != null)
            {
                if (tipo != null && tipo.Equals(Type.GetType("System.Byte[]")))
                {
                                       
                    if (DocumentoDetalle.ValorBinario != null)
                    {
                        //Creamos la imagen en ruta
                        String strArchivo = DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + DocumentoDetalle.Documento.Documento.IdValor + "_" + DocumentoDetalle.Campo.IdValor + ".png";
                        File.WriteAllBytes(strRutaArchivo + "\\" + strArchivo, DocumentoDetalle.ValorBinario); // Requires System.IO
                        hfValor.Value = strArchivo;
                    }
                        
                }
            }
            //Documento.Detalles.Add(DocumentoDetalle.Clone());
        }

        public static void AsignarEntidadDetalleImagen(EntidadDetalleBE EntidadDetalle,
            String strIdEntidad,String strIdValor,HtmlImage imgImagen)
        {
            EntidadDetalle = new EntidadDetalleBE();
            EntidadDetalle.Entidad.IdEntidad = strIdEntidad;
            EntidadDetalle.IdValor = strIdValor;
            EntidadDetalle = EntidadDetalleBL.ListarEntidadDetalle(EntidadDetalle)[0];
            imgImagen.Src = "data:image/png;base64," + Convert.ToBase64String(EntidadDetalle.ValorBinario1);
        }

        public static void AsignarSerieLabel(List<DocumentoEquipamientoBE> lstDocumentoEquipamiento,
            String strIdEquipamientos, Int32 intItem, HtmlGenericControl lblLabel)
        {
            String[] lstIdEquipamiento = strIdEquipamientos.Split(';');
            foreach (String idEquipamiento in lstIdEquipamiento)
            {
                //if (lstDocumentoEquipamiento.Where(de => de.Equipamiento.IdValor == idEquipamiento && de.Item == (intItem.Equals(0)?de.Item:intItem)).Select(de => de).Count().Equals(1))
                if (lstDocumentoEquipamiento.Where(de => de.Equipamiento.IdValor == idEquipamiento && de.Item == intItem).Select(de => de).Count().Equals(1))
                {
                    lblLabel.InnerText = lblLabel.InnerText +
                        //" [" + lstDocumentoEquipamiento.Where(de => de.Equipamiento.IdValor == idEquipamiento && de.Item == (intItem.Equals(0) ? de.Item : intItem)).Select(de => de).First().SerieEquipamiento +
                        " [" + lstDocumentoEquipamiento.Where(de => de.Equipamiento.IdValor == idEquipamiento && de.Item == intItem).Select(de => de).First().SerieEquipamiento +
                        "]";
                    return;
                }
            }
        }



    }
}