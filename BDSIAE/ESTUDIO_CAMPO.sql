IF OBJECT_ID('USP_R_ESTUDIO_DE_CAMPO') IS NOT NULL
DROP PROC USP_R_ESTUDIO_DE_CAMPO
GO
CREATE PROC USP_R_ESTUDIO_DE_CAMPO
@CH_ID_TAREA CHAR(7)
AS
	BEGIN
		SELECT(SELECT DT_VALOR_FECHA
		FROM DOCUMENTO_DET DD
		WHERE CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_DOCUMENTO = '000005' 
		AND DD.CH_ID_CAMPO = '000002') AS FECHA,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000417') AS HORA_INICIO,

		
		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000418') AS HORA_FIN,

		(SELECT ED.VC_VALOR_CADENA1
		FROM TAREA T INNER JOIN ENTIDAD_DET ED
		ON(T.CH_ID_TIP_NODO_A = ED.VC_ID_VALOR
		AND VC_ID_ENTIDAD = 'TIP_NODO')
		WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS TIPO_NODO,

		(SELECT SUBSTRING(N.CH_ID_UBIGEO,5,5)
		FROM TAREA T INNER JOIN NODO N 
		ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
		WHERE  T.CH_ID_TAREA = @CH_ID_TAREA) AS UBIGEO,


		(SELECT  D.VC_NOMBRE
		FROM TAREA T INNER JOIN NODO N
		ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
		INNER JOIN DEPARTAMENTO D ON (D.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO)
		WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS DEPARTAMENTO,

		(SELECT P.VC_NOMBRE
		FROM TAREA T INNER JOIN NODO N 
		ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
		INNER JOIN PROVINCIA P ON (P.CH_ID_PROVINCIA = N.CH_ID_PROVINCIA)
		WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
		P.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO ) AS PROVINCIA,

		(SELECT D.VC_NOMBRE
		FROM TAREA T INNER JOIN NODO N
		ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO 
		INNER JOIN DISTRITO D ON (D.CH_ID_DISTRITO = N.CH_ID_DISTRITO)
		WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND 
		D.CH_ID_PROVINCIA = N.CH_ID_PROVINCIA
		AND D.CH_ID_DEPARTAMENTO =N.CH_ID_DEPARTAMENTO) AS DISTRITO,

		(SELECT N.VC_NOMBRE
		FROM TAREA T INNER JOIN NODO N
		ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
		WHERE T.CH_ID_TAREA=@CH_ID_TAREA) AS NOMBRE_NODO,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000419') AS LONGITUD_LOCALIDAD_PLAZA_PRINCIPAL,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000420') AS LATITUD_LOCALIDAD_PLAZA_PRINCIPAL,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000421') AS ALTURA_MSNM,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000422') AS AREA_NATURAL_PROTEG,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000423') AS NOMBRE_AREA_NATURAL,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000424') AS RESTOS_ARQUEOLOGICOS,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000425') AS ESPECIF_TIPO_RESTOS_ARQ,		

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000426') AS BANCO_NACION,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000427') AS AGENTE_BANCO_NACION,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000428') AS CANTIDAD,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000429') AS OTROS_BANCOS,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000430') AS CANTIDAD_OTROS_BANCOS,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000431') AS ENTIDAD_IMPORTANTE,

		(SELECt VC_VALOR_CADENA
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000432') AS IIEE,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000433') AS CANTIDAD_IIEE,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000434') AS POBLACION,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000435') AS N_DE_MUJERES,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000436') AS N_DE_JOVENES_15_24,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000437') AS N_DE_PERSONAS_DISCAPACIDAD,

		(SELECt IN_VALOR_ENTERO
		FROM DOCUMENTO_DET DD
		WHERE DD.CH_ID_TAREA = @CH_ID_TAREA
		AND DD.CH_ID_CAMPO = '000438') AS N_VIVIENDAS

	END
GO


	