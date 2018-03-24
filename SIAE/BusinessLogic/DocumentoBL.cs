using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntity;
using DataAccess;
using System.Data;
using System.Data.Common;


namespace BusinessLogic
{
    public class DocumentoBL
    {
        public static List<DocumentoBE> ListarDocumentos(DocumentoBE documentoBE)
        {
            List<DocumentoBE> lstResultadosBE = new List<DocumentoBE>();
            DBBaseDatos baseDatosDA = new DBBaseDatos();
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();
            try
            {
                baseDatosDA.CrearComando("USP_DOCUMENTO", CommandType.StoredProcedure);
                baseDatosDA.AsignarParametroCadena("@PCH_TIPO_TRANSACCION", "S", true);

                //if (documentoBE.Tarea.NodoIIBBA.IdNodo != null && !documentoBE.Tarea.NodoIIBBA.IdNodo.Equals(""))
                if (!documentoBE.Tarea.NodoIIBBA.IdNodo.Equals(""))
                    baseDatosDA.AsignarParametroCadena("@PVC_ID_NODO_IIBB", documentoBE.Tarea.NodoIIBBA.IdNodo, true);
                else
                    baseDatosDA.AsignarParametroNulo("@PVC_ID_NODO_IIBB", true);
                if (documentoBE.Tarea.Contratista.IdValor.Equals(""))
                    baseDatosDA.AsignarParametroNulo("@PCH_ID_CONTRATISTA", true);
                else
                    baseDatosDA.AsignarParametroCadena("@PCH_ID_CONTRATISTA", documentoBE.Tarea.Contratista.IdValor, true);

                DbDataReader drDatos = baseDatosDA.EjecutarConsulta();

                while (drDatos.Read())
                {
                    DocumentoBE item = new DocumentoBE();

                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_TAREA")))
                        item.Tarea.IdTarea = drDatos.GetString(drDatos.GetOrdinal("CH_ID_TAREA"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_SECTOR")))
                        item.Tarea.IdSectorAP = drDatos.GetString(drDatos.GetOrdinal("CH_ID_SECTOR"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_TIP_TAREA")))
                        item.Tarea.TipoTarea.IdValor = drDatos.GetString(drDatos.GetOrdinal("CH_ID_TIP_TAREA"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("VC_NOM_TIP_TAREA")))
                        item.Tarea.TipoTarea.ValorCadena1 = drDatos.GetString(drDatos.GetOrdinal("VC_NOM_TIP_TAREA"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_TIP_NODO_A")))
                        item.Tarea.TipoNodoA.IdValor = drDatos.GetString(drDatos.GetOrdinal("CH_ID_TIP_NODO_A"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("VC_NOM_TIP_NODO_A")))
                        item.Tarea.TipoNodoA.ValorCadena1 = drDatos.GetString(drDatos.GetOrdinal("VC_NOM_TIP_NODO_A"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("VC_ID_NODO_IIBB_A")))
                        item.Tarea.NodoIIBBA.IdNodo = drDatos.GetString(drDatos.GetOrdinal("VC_ID_NODO_IIBB_A"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_TIP_NODO_B")))
                        item.Tarea.TipoNodoB.IdValor = drDatos.GetString(drDatos.GetOrdinal("CH_ID_TIP_NODO_B"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("VC_NOM_TIP_NODO_B")))
                        item.Tarea.TipoNodoB.ValorCadena1 = drDatos.GetString(drDatos.GetOrdinal("VC_NOM_TIP_NODO_B"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_NODO_B")))
                        item.Tarea.NodoB.IdNodo = drDatos.GetString(drDatos.GetOrdinal("CH_ID_NODO_B"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("CH_ID_CONTRATISTA")))
                        item.Tarea.Contratista.IdValor = drDatos.GetString(drDatos.GetOrdinal("CH_ID_CONTRATISTA"));
                    if (!drDatos.IsDBNull(drDatos.GetOrdinal("VC_NOM_CONTRATISTA")))
                        item.Tarea.Contratista.ValorCadena1 = drDatos.GetString(drDatos.GetOrdinal("VC_NOM_CONTRATISTA"));
                    item.Documento.IdValor = drDatos.GetString(drDatos.GetOrdinal("CH_ID_DOCUMENTO"));
                    item.Documento.ValorCadena1 = drDatos.GetString(drDatos.GetOrdinal("VC_NOM_DOCUMENTO"));
                    item.Documento.ValorCadena2 = drDatos.GetString(drDatos.GetOrdinal("VC_URL_DOCUMENTO"));
                    lstResultadosBE.Add(item);
                }

                drDatos.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }

            return lstResultadosBE;
        }

        public static void InsertarDocumento(DocumentoBE Documento)
        {
            DBBaseDatos baseDatosDA = new DBBaseDatos();
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();
            try
            {
                baseDatosDA.ComenzarTransaccion();

                #region Insertamos los detalles
                foreach (DocumentoDetalleBE item in Documento.Detalles)
                {
                    DocumentoDetalleBL.InsertarDocumentoDetalle(item, baseDatosDA);
                }
                #endregion

                #region Insertamos los equipamientos
                foreach (DocumentoEquipamientoBE item in Documento.Equipamientos)
                {
                    DocumentoEquipamientoBL.InsertarDocumentoEquipamiento(item, baseDatosDA);
                }
                #endregion

                #region Insertamos los materiales
                foreach (DocumentoMaterialBE item in Documento.Materiales)
                {
                    DocumentoMaterialBL.InsertarDocumentoMaterial(item, baseDatosDA);
                }
                #endregion

                #region Insertamos las Mediciones de enlaces de propagación
                foreach (DocumentoMedicionEnlacePropagacionBE item in Documento.MedicionesEnlacePropagacion)
                {
                    DocumentoMedicionEnlacePropagacionBL.InsertarDocumentoMedicionEnlacePropagacion(item, baseDatosDA);
                }
                #endregion
                baseDatosDA.ConfirmarTransaccion();
            }
            catch (Exception ex)
            {
                baseDatosDA.CancelarTransaccion();
                throw ex;
            }
            finally
            {
                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }

        }

        public static void ActualizarDocumento(DocumentoBE Documento)
        {
            DBBaseDatos baseDatosDA = new DBBaseDatos();
            baseDatosDA.Configurar();
            baseDatosDA.Conectar();
            try
            {
                baseDatosDA.ComenzarTransaccion();

                #region Insertamos los detalles
                foreach (DocumentoDetalleBE item in Documento.Detalles)
                {
                    DocumentoDetalleBL.ActualizarDocumentoDetalle(item, baseDatosDA);
                }
                #endregion

                #region Actualizamos los equipamientos
                foreach (DocumentoEquipamientoBE item in Documento.Equipamientos)
                {
                    DocumentoEquipamientoBL.ActualizarDocumentoEquipamiento(item, baseDatosDA);
                }
                #endregion

                #region Actualizamos los materiales
                foreach (DocumentoMaterialBE item in Documento.Materiales)
                {
                    DocumentoMaterialBL.ActualizarDocumentoMaterial(item, baseDatosDA);
                }
                #endregion

                #region Actualizamos las Mediciones de enlaces de propagación
                foreach (DocumentoMedicionEnlacePropagacionBE item in Documento.MedicionesEnlacePropagacion)
                {
                    DocumentoMedicionEnlacePropagacionBL.ActualizarDocumentoMedicionEnlacePropagacion(item, baseDatosDA);
                }
                #endregion

                baseDatosDA.ConfirmarTransaccion();
            }
            catch (Exception ex)
            {
                baseDatosDA.CancelarTransaccion();
                throw ex;
            }
            finally
            {
                baseDatosDA.Desconectar();
                baseDatosDA = null;
            }

        }
    }
}
