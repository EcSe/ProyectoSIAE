INSERT INTO ENTIDAD_DET(VC_ID_ENTIDAD,VC_ID_VALOR,VC_VALOR_CADENA1,VC_ID_USUARIO_CRE)
VALUES('CAMP_DOCU','000507','Ip Controladora','CRAMOS');

INSERT INTO DOCUMENTO_DET(CH_ID_DOCUMENTO,CH_ID_TAREA,CH_ID_CAMPO,BL_APROBADO,VC_ID_USUARIO_CRE,DT_FEC_CRE)
SELECT	CH_ID_DOCUMENTO,CH_ID_TAREA,'000507',0,VC_ID_USUARIO_CRE,DT_FEC_CRE
FROM	DOCUMENTO_DET
WHERE CH_ID_DOCUMENTO in ('000013','000014')
AND	CH_ID_CAMPO ='000002'