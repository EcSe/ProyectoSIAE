IF OBJECT_ID('USP_R_RUTA_ZIP') IS NOT NULL
DROP PROC USP_R_RUTA_ZIP
GO
CREATE PROC USP_R_RUTA_ZIP
@VC_ID_NODO VARCHAR(12)
AS
	
	DECLARE 
		@CH_ID_DOCUMENTO CHAR(6),@CH_TIPO_INST CHAR(6)
		BEGIN 
	--	SET @CH_ID_DOCUMENTO = (SELECT CH_ID_DOCUMENTO
	--							FROM RUTA_CAMPO);
		SET @CH_TIPO_INST = SUBSTRING(@VC_ID_NODO,9,4)	
		
		--IF @CH_ID_DOCUMENTO = '000011'
		SELECT T.VC_ID_NODO_IIBB_A,RC.CH_ID_CAMPO,RC.VC_VALOR_CADENA1,
				RC.CH_ID_CARPETA,RC.VC_RUTA_CARPETA,DD.VB_VALOR_BINARIO, DD.VC_EXTENSION_ARCHIVO
				FROM DOCUMENTO_DET DD 
				INNER JOIN RUTA_CAMPO RC ON (DD.CH_ID_CAMPO = RC.CH_ID_CAMPO )
				INNER JOIN TAREA T ON (DD.CH_ID_TAREA = T.CH_ID_TAREA)
	WHERE T.VC_ID_NODO_IIBB_A LIKE '%'+@VC_ID_NODO+'%' AND RC.CH_ID_DOCUMENTO = DD.CH_ID_DOCUMENTO AND DD.VB_VALOR_BINARIO IS NOT NULL
	--AND SUBSTRING(VC_RUTA_CARPETA,2,4) = @CH_TIPO_INST
		END
GO

