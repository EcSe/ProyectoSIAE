using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntity
{
    public class TareaBE
    {
        public String IdTarea { get; set; }
        public EntidadDetalleBE TipoTarea { get; set; }
        public String IdIsoNodo { get; set; }
        public EntidadDetalleBE Contratista { get; set; }
        public DateTime InicioInstalacion { get; set; }
        public DateTime FinInstalacion { get; set; }
        public EntidadDetalleBE Proyecto { get; set; }
        public EntidadDetalleBE TipoNodoA { get; set; }
        public NodoBE NodoIIBBA { get; set; }
        public EntidadDetalleBE TipoNodoB { get; set; }
        public NodoBE NodoB { get; set; }
        public String IdSectorAP { get; set; }
        public Int32 Sector { get; set; }
        public UsuarioBE UsuarioCreacion { get; set; }
        public UsuarioBE UsuarioModificacion { get; set; }
        public TareaBE()
        {
            TipoTarea = new EntidadDetalleBE();
            Contratista = new EntidadDetalleBE();
            Proyecto = new EntidadDetalleBE();
            TipoNodoA = new EntidadDetalleBE();
            NodoIIBBA = new NodoBE();
            TipoNodoB = new EntidadDetalleBE();
            NodoB = new NodoBE();
            UsuarioCreacion = new UsuarioBE();
            UsuarioModificacion = new UsuarioBE();
        }
    }
}
