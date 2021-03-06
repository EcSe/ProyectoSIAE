IF OBJECT_ID('USP_R_EQUIPAMIENTOS_PTP_LIC_B') IS NOT NULL
DROP PROC USP_R_EQUIPAMIENTOS_PTP_LIC_B
GO--
CREATE PROC USP_R_EQUIPAMIENTOS_PTP_LIC_B
@CH_ID_TAREA CHAR(7)
AS
	BEGIN
		SELECT ED.VC_VALOR_CADENA1 EQUIPO,ED.VC_VALOR_CADENA3 MARCA,
				ED.VC_VALOR_CADENA4 MODELO,DE.VC_SERIE_EQUIPAMIENTO Nro_SERIE
		FROM DOCUMENTO_EQUIPAMIENTO DE INNER JOIN ENTIDAD_DET ED
		ON DE.VC_ID_EQUIPAMIENTO = ED.VC_ID_VALOR AND ED.VC_ID_ENTIDAD = 'EQUI'
		INNER JOIN TAREA T ON (T.CH_ID_TAREA = DE.CH_ID_TAREA AND
		T.CH_ID_NODO_B = DE.VC_ID_NODO_IIBB )
		WHERE DE.CH_ID_TAREA= @CH_ID_TAREA AND DE.CH_ID_DOCUMENTO = '000008'
	END
GO