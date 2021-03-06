IF OBJECT_ID('USP_R_IIBB_POR_TAREA') IS NOT NULL
DROP PROC USP_R_IIBB_POR_TAREA
GO
CREATE PROC USP_R_IIBB_POR_TAREA
@CH_ID_TAREA CHAR(7)
AS	
	BEGIN
		SELECT IB.VC_NOMBRE	NOMBRE_INST,SUBSTRING(PPT.CH_ID_IIBB,9,4) TIPO_IIBB,IB.NU_LATITUD LATITUD,IB.NU_LONGITUD LONGITUD
		FROM INSTITUCION_BENEFICIARIA IB INNER JOIN PMP_DET_X_TAREA PPT
		ON IB.CH_ID_IIBB = PPT.CH_ID_IIBB
		WHERE PPT.CH_ID_TAREA = @CH_ID_TAREA
	END
GO	

