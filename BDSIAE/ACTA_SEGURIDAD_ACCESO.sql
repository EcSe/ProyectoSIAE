IF OBJECT_ID('USP_R_ACTA_SEGURIDAD__ACCESO') IS NOT NULL
DROP PROC USP_R_ACTA_SEGURIDAD__ACCESO
GO
CREATE PROC USP_R_ACTA_SEGURIDAD__ACCESO
@CH_ID_TAREA CHAR(7)
AS
	DECLARE @IMAGEN varbinary(MAX);
	SET @IMAGEN = (SELECT VB_VALOR_BINARIO1
				FROM ENTIDAD_DET
				WHERE VC_ID_ENTIDAD = 'CAMP_VACIO' 
				AND VC_ID_VALOR = '000001');
	BEGIN
		SELECT(SELECT N.VC_NOMBRE
			FROM TAREA T INNER JOIN NODO N
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA=@CH_ID_TAREA) AS NOMBRE_NODO,

			(SELECT T.VC_ID_NODO_IIBB_A
			FROM TAREA T INNER JOIN ENTIDAD_DET ED
			ON(T.CH_ID_TIP_NODO_A = ED.VC_ID_VALOR
			AND VC_ID_ENTIDAD = 'TIP_NODO')
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS CODIGO_NODO,

			(SELECT ED.VC_VALOR_CADENA1
			FROM TAREA T INNER JOIN ENTIDAD_DET ED
			ON(T.CH_ID_TIP_NODO_A = ED.VC_ID_VALOR
			AND VC_ID_ENTIDAD = 'TIP_NODO')
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS TIPO_NODO,


			(SELECT DD.DT_VALOR_FECHA
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000002'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS FECHA,

			
			--REPORTE FOTOGRAFICO
			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000214'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS FACHADA_DEL_NODO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000215'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SALA_EQUIPOS_PANORAMICA_RACK,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000216'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PANORAMICA_INTERIOR_01,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000217'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PANORAMICA_INTERIOR_02,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000218'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PANORAMICA_EQUIPOS_PATIO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000219'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS BREAKER_ASIGNADO_PARA_SEGURIDAD,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000220'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CERRADURA_ELECTROMAGNETICA_EXTERNA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000221'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CERRADURA_ELECTROMAGNETICA_EXTERNA2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000222'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MAGNETICO_EXTERMO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000223'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MAGNETICO_EXTERNO2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000224'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CERRADURA_ELECTRICA_EXTERNA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000225'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MOVIMIENTO_90_EXTERNO_N1,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000226'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MOVIMIENTO_90_EXTERNO_N2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000227'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SIRENA_ESTROBOSCOPICA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000228'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS LECTOR_BIOMETRICO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000229'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS LECTOR_TARJETA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000230'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CAMARA_EXTERIOR_PTZ,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000231'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS EXTINTOR_EXTERIOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000232'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MAGNETICO_INTERNO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000233'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MAGNETICO_INTERNO_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000234'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_OCUPACIONAL,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000235'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_DE_HUMO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000236'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_MOVIMIENTO_360,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000237'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SENSOR_DE_INUNDACION,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000238'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CAMARA_PTZ_INTERIOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000239'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS EXTINTOR_INTERIOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000240'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS RELE_EQUIPO_INTERO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000241'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CONTROLADOR_NVR_SWITCH,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000242'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS ATERRAMIENTO_CONTROLADOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000243'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS ATERRAMIENTO_NVR_POE,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000244'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS ATERRAMIENTO_NVR_POE_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000245'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS ATERRAMIENTO_A_BARRA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000246'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SERIAL_NUMBER_SENSOR_MOVIMIENTO_1,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000247'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SERIAL_NUMBER_SENSOR_MOVIMIENTO_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000248'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SERIAL_NUMBER_SWITCH_POE_NVR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000249'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SERIAL_NUMBER_SWITCH_POE_NVR_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000250'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS SERIAL_NUMBER_CONTROLADOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000251'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS ETIQUETADOS_EQUIPOS_CONTROLADOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000252'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS ETIQUETADOS_EQUIPOS_NVR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000253'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CHECKLIST,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000254'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CAMARA_EXTERIOR_MODO_NORMAL_POS1,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000255'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CAMARA_EXTERIOR_MODO_NORMAL_POS2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000256'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CAMARA_INTERIOR_MODO_NORMAL,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000257'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS CAMARA_INTERIOR_MODO_INFRARROJO,

			--TPA=TECHNICIAN PROGRAM ALARMA
			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000258'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_PUERTA_PRINCIPAL_ABIERTA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000259'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_PUERTA_SALAS_EQUIPOS_ABIERTA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000260'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_CAMARA_INTERNA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000261'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_CAMARA_EXTERNA,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000262'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_SENSOR_DE_ANIEGO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000263'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_SENSOR_DE_HUMO,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000264'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_TAMPER_SENSOR_90_1,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000265'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_MOVIMIENTO_SENSOR_90_1,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000266'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_MASKING_SENSOR_90_1,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000267'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_TAMPER_SENSOR_90_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000268'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_MOVIMIENTO_SENSOR_90_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000269'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_MASKING_SENSOR_90_2,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000270'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_ALARMA_TAMPER_SENSOR_360,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000271'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS TPA_ALARMA_MOVIMIENTO_SENSOR_360,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000272'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PING_CAMARA_1_INDOOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000273'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PING_CAMARA_2_OUTDOOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000274'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PING_CONTROLADOR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000275'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PING_GATEWAY,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000276'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PING_NVR,

			(SELECT ISNULL(DD.VB_VALOR_BINARIO,@IMAGEN)
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000277'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS PING_BIOMETRICO,


			--FECHAS
			(SELECT DD.DT_VALOR_FECHA
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000278'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS EXTINGUIDOR_EXT_FECHA_EXPIRACION,

			(SELECT DD.DT_VALOR_FECHA
			FROM DOCUMENTO_DET DD INNER JOIN TAREA T 
			ON DD.CH_ID_TAREA = T.CH_ID_TAREA
			WHERE DD.CH_ID_DOCUMENTO = '000013 '
			AND DD.CH_ID_CAMPO='000279'
			AND T.CH_ID_TAREA = @CH_ID_TAREA ) AS EXTINGUIDOR_INT_FECHA_EXPIRACION,

			(SELECT  D.VC_NOMBRE
			FROM TAREA T INNER JOIN NODO N
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			INNER JOIN DEPARTAMENTO D ON (D.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS DEPARTAMENTO,
	--SERIAL NUMBER CONTROLADOR 10/10/2018
			(SELECT VC_SERIE_EQUIPAMIENTO
			FROM DOCUMENTO_EQUIPAMIENTO
			WHERE CH_ID_TAREA = @CH_ID_TAREA AND CH_ID_DOCUMENTO = '000013'
			AND VC_ID_EQUIPAMIENTO = 'CONT-ACC-003') AS SERIAL_CONTROLADOR,

			--IP CONTROLADOR 
			(SELECT VC_VALOR_CADENA
			FROM DOCUMENTO_DET
			WHERE CH_ID_CAMPO = '000507'AND CH_ID_DOCUMENTO = '000013'
			AND CH_ID_TAREA = @CH_ID_TAREA) AS IP_CONTROLADOR
	END
GO

