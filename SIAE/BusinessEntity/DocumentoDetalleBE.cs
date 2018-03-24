﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntity
{
    public class DocumentoDetalleBE
    {
        public DocumentoBE Documento { get; set; }
        public EntidadDetalleBE Campo { get; set; }
        public String IdValor { get; set; }
        public String ValorCadena { get; set; }
        public Int32? ValorEntero { get; set; }
        public Double? ValorNumerico { get; set; }
        public DateTime ValorFecha { get; set; }
        public Boolean? ValorBoolean { get; set; }
        public Byte[] ValorBinario { get; set; }
        public Boolean Aprobado { get; set; }
        public String Comentario { get; set; }
        public UsuarioBE UsuarioCreacion { get; set; }
        public UsuarioBE UsuarioModificacion { get; set; }

        public DocumentoDetalleBE()
        {
            Campo = new EntidadDetalleBE();
            Comentario = string.Empty;
            IdValor = String.Empty;
            ValorCadena = String.Empty;
            ValorEntero = null;
            ValorNumerico = null;
            ValorBoolean = null;
            UsuarioCreacion = new UsuarioBE();
            UsuarioModificacion = new UsuarioBE();

        }
        public DocumentoDetalleBE Clone() {
            return (DocumentoDetalleBE)this.MemberwiseClone();
        }

    }
}
