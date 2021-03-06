USE [SIAEDES]
GO

/****** Object:  StoredProcedure [dbo].[USP_R_ANEXO_02_INVENTARIO_PMP]    Script Date: 13/03/2018 15:10:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF OBJECT_ID('USP_R_ANEXO_02_INVENTARIO_PMP') IS NOT NULL
DROP PROC USP_R_ANEXO_02_INVENTARIO_PMP
GO
CREATE PROC [dbo].[USP_R_ANEXO_02_INVENTARIO_PMP]
@CH_ID_TAREA CHAR(7)
AS
	DECLARE @IMAGEN varbinary(MAX);
	SET @IMAGEN = (SELECT VB_VALOR_BINARIO1
				FROM ENTIDAD_DET
				WHERE VC_ID_ENTIDAD = 'CAMP_VACIO' 
				AND VC_ID_VALOR = '000001');
	BEGIN
			SELECT(SELECT T.VC_ID_NODO_IIBB_A
			FROM  TAREA T 
			WHERE CH_ID_TAREA =@CH_ID_TAREA) AS COD_NODO,

			(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD
			WHERE CH_ID_TAREA = @CH_ID_TAREA AND
			CH_ID_DOCUMENTO='000004' AND
			CH_ID_CAMPO='000055')AS ANTENA, --55,

	(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD
			WHERE CH_ID_TAREA = @CH_ID_TAREA AND
			CH_ID_DOCUMENTO='000004' AND
			CH_ID_CAMPO='000056') AS ARRESTOR_LAN,-- 56

	(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD
			WHERE CH_ID_TAREA = @CH_ID_TAREA AND
			CH_ID_DOCUMENTO='000004' AND
			CH_ID_CAMPO='000057') AS  ODUs, --57
	(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD
			WHERE CH_ID_TAREA = @CH_ID_TAREA AND
			CH_ID_DOCUMENTO='000004' AND
			CH_ID_CAMPO='000058') AS POE  --58

	END
GO

