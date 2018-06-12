IF OBJECT_ID('USP_R_INSTALACION_POZO_TIERRA_A') IS NOT NULL
DROP PROC USP_R_INSTALACION_POZO_TIERRA_A
GO
CREATE PROC USP_R_INSTALACION_POZO_TIERRA_A
@CH_ID_TAREA CHAR(7)
AS
	BEGIN 
			SELECT( SELECT TIP_IIBB.VC_VALOR_CADENA1
				FROM TAREA T LEFT JOIN	ENTIDAD_DET TIP_IIBB ON (TIP_IIBB.VC_ID_ENTIDAD = 'TIP_IIBB'
				AND SUBSTRING(T.VC_ID_NODO_IIBB_A,9,2) = TIP_IIBB.VC_ID_VALOR)
				WHERE LEN(VC_ID_NODO_IIBB_A) > 7 AND CH_ID_TAREA = @CH_ID_TAREA ) AS TIPO_INSTITUCION,

				(SELECT IB.CH_ID_IIBB
				FROM TAREA T INNER JOIN INSTITUCION_BENEFICIARIA IB
				ON T.VC_ID_NODO_IIBB_A = IB.CH_ID_IIBB
				WHERE T.CH_ID_TAREA =@CH_ID_TAREA ) AS CODIGO_IIBB,

				(SELECT IB.VC_NOMBRE
				FROM TAREA T INNER JOIN INSTITUCION_BENEFICIARIA IB
				ON T.VC_ID_NODO_IIBB_A = IB.CH_ID_IIBB
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA	) AS NOMBRE_IIBB,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000387') AS  CINCO_OHM_FOTOGRAFIA_FRONTAL_iIBB,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000388') AS CINCO_OHM_UBICACION_POZO_ANTES_INSTALAR,
				
				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000389') AS CINCO_OHM_PAN_ZANJA_ABIERTA,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000390') AS CINCO_OHM_PAN_VERTIDO_TIERRA,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000391') AS CINCO_OHM_PAN_VERTIDO_SAL,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000392') AS CINCO_OHM_PAN_VERTIDO_DISOLUCION,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000393') AS CINCO_OHM_PAN_COL_REJE_COBRE01,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000394') AS CINCO_OHM_PAN_COL_REJE_COBRE02,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000395')  AS CINCO_OHM_PAN_VERTIDO_DISOLUCION_SOBRE_REJE,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000396') AS  CINCO_OHM_PAN_VERTIDO_SAL_GRANULADO_LUEGO_DEL_CEMENTO,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000397') AS CINCO_OHM_PAN_VERTIDO_RESTO_TIERRA_CULTIVO,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000398') AS  CINCO_OHM_PAN_RELLENADO_TIERRA_CERNIDA_ZANJA,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000399') AS CINCO_OHM_MED1_PAN_POZO_TIERRA,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000400') AS CINCO_OHM_MED2_PAN_POZO_TIERRA,

				--(SELECT VB_VALOR_BINARIO
				--FROM DOCUMENTO_DET DD 
				--WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_DOCUMENTO = '000017' AND
				--CH_ID_CAMPO ='000401') AS CINCO_OHM_MED3_PAN_POZO_TIERRA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000402') AS DIEZ_OHM_FRONTAL_IIBB,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000403') AS DIEZ_OHM_UBIC_POZO_ANTES_INSTALACION,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000404') AS DIEZ_OHM_PAN_ZANJA_ABIERTA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000405') AS DIEZ_OHM_PAN_VERITDO_TIERRA_EN_ZANJA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000406') AS DIEZ_OHM_PAN_VERTIDO_SAL_GRANULADA_ZANJA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000407') AS DIEZ_OHM_VESTIDO_DIS_CEMENTO,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000408') AS DIEZ_OHM_PAN_REJE_COBRE_01,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000409') AS DIEZ_OHM_PAN_REJE_COBRE_02,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000410') AS DIEZ_OHM_PAN_VERTIDO_DIS_ZANJA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000411') AS DIEZ_OHM_PAN_VERTIDO_sAL_GRANULADA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000412') AS DIEZ_OHM_VERTIDO_RESTO_TIERRA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000413') AS DIEZ_OHM_VERTIDO_RELLENADO_TIERRA,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000414') AS DIEZ_OHM_MEDICION1,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000415') AS DIEZ_OHM_MEDICION2,

				(SELECT VB_VALOR_BINARIO
				FROM DOCUMENTO_DET DD 
				WHERE CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_DOCUMENTO = '000017' AND
				CH_ID_CAMPO ='000416') AS DIEZ_OHM_MEDICION3
	END
GO
