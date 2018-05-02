
IF OBJECT_ID('USP_R_PROTOCOLO_INSTALACION') IS NOT NULL
DROP PROC USP_R_PROTOCOLO_INSTALACION
GO
CREATE PROC USP_R_PROTOCOLO_INSTALACION
@CH_ID_TAREA CHAR(7)
AS
	BEGIN
				SELECT(SELECT  D.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N
				ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
				INNER JOIN DEPARTAMENTO D ON (D.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO)
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS DEPARTAMENTO,

				(SELECT N.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N
				ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
				WHERE T.CH_ID_TAREA=@CH_ID_TAREA) AS NOMBRE_NODO,

				(SELECT ED.VC_VALOR_CADENA1
				FROM TAREA T INNER JOIN ENTIDAD_DET ED
				ON(T.CH_ID_TIP_NODO_A = ED.VC_ID_VALOR
				AND VC_ID_ENTIDAD = 'TIP_NODO')
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS TIPO_NODO,

				(SELECT T.VC_ID_NODO_IIBB_A
				FROM TAREA T INNER JOIN ENTIDAD_DET ED
				ON(T.CH_ID_TIP_NODO_A = ED.VC_ID_VALOR
				AND VC_ID_ENTIDAD = 'TIP_NODO')
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS CODIGO_NODO,	

				(SELECT DD.DT_VALOR_FECHA
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000002') AS FECHA,

				(SELECT DD.VB_VALOR_BINARIO
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000076') AS FOTO_1_OMNISWITCH,

				(SELECT DD.VB_VALOR_BINARIO
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000077') AS FOTO_2_PAN_RACK,

				(SELECT DD.VB_VALOR_BINARIO
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000078') AS FOTO_3_CON_BREAKERS_ASIGNADOS,

				(SELECT DD.VB_VALOR_BINARIO
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000079') AS FOTO_4_CON_ALIMEN_SWITCH,

				(SELECT DD.VB_VALOR_BINARIO
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000080')AS FOTO_5_ATERRAMIENTO_SWITCH,

				(SELECT DD.VB_VALOR_BINARIO
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000081') AS FOTO_6_ATERRAMIENTO_BARRA,

				(SELECT DD.VC_VALOR_CADENA
				FROM TAREA T INNER JOIN DOCUMENTO_DET DD
				ON T.CH_ID_TAREA = DD.CH_ID_TAREA
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				DD.CH_ID_DOCUMENTO= '000007' AND
				DD.CH_ID_CAMPO = '000082') AS NUM_SERIE_SWITCH
	END
GO


