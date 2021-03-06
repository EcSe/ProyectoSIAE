IF OBJECT_ID('USP_R_MEDICION_ENLACE_PTP_NO_LIC_A') IS NOT NULL
DROP PROC  USP_R_MEDICION_ENLACE_PTP_NO_LIC_A
GO
CREATE PROC USP_R_MEDICION_ENLACE_PTP_NO_LIC_A
@CH_ID_TAREA CHAR(7)
AS 
	BEGIN
		SELECT  DMP.CH_ID_NODO_A NODO_LOCAL,VC_ID_NODO_IIBB_B NODO_REMOTO,NU_RSS_LOCAL RSS_LOCAL,NU_RSS_REMOTO	RSS_REMOTO,
		NU_TIEMPO_PROMEDIO TIEMPO_PROM, NU_CAPACIDAD_SUBIDA CAP_SUBIDA,NU_CAPACIDAD_BAJADA CAP_BAJADA,
		PD.NU_DISTANCIA*1000 DISTANCIA_metros
		FROM DOCUMENTO_MED_ENLA_PROP DMP INNER JOIN PTP_DET PD
		ON (DMP.CH_ID_TAREA = PD.CH_ID_TAREA AND DMP.CH_ID_NODO_A = PD.CH_ID_NODO_A )
		WHERE PD.CH_ID_TAREA = @CH_ID_TAREA
	END
GO

