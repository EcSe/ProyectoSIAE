IF OBJECT_ID('USP_R_ACTA_INSTALACION_PTP_LIC') IS NOT NULL
DROP PROC USP_R_ACTA_INSTALACION_PTP_LIC
GO
CREATE PROC USP_R_ACTA_INSTALACION_PTP_LIC
@CH_ID_TAREA CHAR(7)
AS
	DECLARE @IMAGEN varbinary(MAX);
	SET @IMAGEN = (SELECT VB_VALOR_BINARIO1
				FROM ENTIDAD_DET
				WHERE VC_ID_ENTIDAD = 'CAMP_VACIO' 
				AND VC_ID_VALOR = '000001');
	BEGIN
		SELECT(SELECT DT_VALOR_FECHA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000002')AS FECHA,
			
			--#REGION CONFIGURACION Y MEDICIONES 

				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000084')AS DIREC_ESTACION_A,

				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000085')AS DIREC_ESTACION_B,

				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000086')AS REF_UBIC_EST_A,

				(SELECT DT_VALOR_FECHA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000087')AS REF_UBIC_EST_B,

				(SELECT NU_VALOR_NUMERICO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000088')AS NIVEL_RECEP_RADIO_A,

				(SELECT NU_VALOR_NUMERICO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000089')AS NIVEL_RECEP_RADIO_B,

				(SELECT IN_VALOR_ENTERO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000090')AS PING_PTP_RADIO_A,

				(SELECT IN_VALOR_ENTERO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000091')AS PING_PTP_RADIO_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000092')AS CONF_GEN_ENL_EST_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000093')AS CONF_GEN_ENL_EST_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000481')AS CONF_LAN_EST_A01,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000482')AS CONF_LAN_EST_A02,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000483')AS CONF_LAN_EST_A03,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000484')AS CONF_LAN_EST_B01,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000485')AS CONF_LAN_EST_B02,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000486')AS CONF_LAN_EST_B03,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000497')AS CONF_ETHER_SWITCH_EST_A01,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000498')AS CONF_ETHER_SWITCH_EST_A02,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000499')AS CONF_ETHER_SWITCH_EST_B01,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000500')AS CONF_ETHER_SWITCH_EST_B02,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000094')AS CONF_VLAN_ESTA_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000095')AS CONF_VLAN_ESTA_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000096')AS CONF_RADIO_ESTAC_A_1,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000097')AS CONF_RADIO_ESTAC_A_2,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000098')AS CONF_RADIO_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000099')AS CONF_IP_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000100')AS CONF_IP_ESTAC_B,

				(SELECT VC_ID_CANAL_NODO_A
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS CANAL_ESTAC_A,

				(SELECT VC_ID_CANAL_NODO_B
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS CANAL_ESTAC_B,

				(SELECT SUBSTRING(VC_MOD_RAD_NODO_A,12,3)
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA ) AS VELOCIDAD_HABILITADA,

				(SELECT SUBSTRING(VC_DES_EMI_NODO_A,1,3)
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ANCHO_BANDA,

				(SELECT VC_TR_MOD_ANT_NODO_A
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS MODEL_ANTENA_A,

				(SELECT VC_TR_MOD_ANT_NODO_B
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS MODEL_ANTENA_B,

				(SELECT VC_TR_DIA_ANT_NODO_A
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS DIAMETRO_A,

				(SELECT VC_TR_DIA_ANT_NODO_B
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS DIAMETRO_B,

				(SELECT IN_TR_ALT_ANT_NODO_A
				FROM PTP_DET
				 WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_ANTENA_A,

				(SELECT IN_TR_ALT_ANT_NODO_B
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_ANTENA_B,

				(SELECT  NU_SEN_REC_NODO_A
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS NIVEL_RECEP_NOM_A,

				(SELECT  NU_SEN_REC_NODO_B
				FROM PTP_DET
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS NIVEL_RECEP_NOM_B,
				--#ENDREGION

				--#REGION LONGITUD SFTP

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000105')AS VALOR_B_ESTAC_A,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000106')AS VALOR_C_ESTAC_A,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000107')AS VALOR_D_ESTAC_A,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000108')AS VALOR_E_ESTAC_A,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000109')AS VALOR_B_ESTAC_B,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000110')AS VALOR_C_ESTAC_B,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000111')AS VALOR_D_ESTAC_B,

				--(SELECT NU_VALOR_NUMERICO
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000112')AS VALOR_E_ESTAC_B,

				

				--#ENDREGION


				--#REGION ASIGNACIONES Y OBSERVACIONES 
				(SELECT IN_VALOR_ENTERO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000113')AS CAP_BREAKER_ASIG_EST_A,

				(SELECT NU_VALOR_NUMERICO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000114')AS VOLT_DC_ESTAC_A,

				(SELECT IN_VALOR_ENTERO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000115')AS POS_BREAKER_ASIG_ESTAC_A,

				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000116')AS POS_BARRA_ATERRA_ESTA_A,

				(SELECT IN_VALOR_ENTERO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000117')AS CAP_BREAKER_ASIG_EST_B,

				(SELECT NU_VALOR_NUMERICO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000118')AS VOLT_DC_ESTAC_B,

				(SELECT NU_VALOR_NUMERICO
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000119')AS POS_BREAKER_ASIG_ESTAC_B,

				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000120')AS POS_BARRA_ATERRA_ESTA_B,
				--#ENDREGION

				--#REGION CALCULO DE PROPAGACION
				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000121')AS INGENIERIA,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000122')AS PERFIL,
				--#ENDREGION

				--#REGION PRUEBAS DE INTERFERENCIA
				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000123')AS PANT_RADIO_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000124')AS PANT_RADIO_ESTAC_B,

				
				--#ENDREGION

				--#REGION SERIE EQUIPOS FOTOS
				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000125')AS SERIE_ANT_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000126')AS SERIE_ODU_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000127')AS SERIE_POE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000131')AS SERIE_ANT_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000132')AS SERIE_ODU_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000133')AS SERIE_POE_ESTAC_B,
				--#ENDREGION

				--#REGION REPORTE FOTOGRAFICO
				--#REGION ESTACION A 
				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000137')AS FOTO1_PAN_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000138')AS FOTO2_POS_ANT_INST_TORRE_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000487')AS FOTO3_FOTO_ANTENA_ODU_ESTAC_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000140')AS FOTO4_ETIQ_PUERTO_ANT_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000141')AS FOTO5_ENGRAS_PERNOS_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000142')AS FOTO6_SILC_CONECT_ESTAC_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000143')AS FOTO7_ATERRAM_ODU_TORRE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000488')AS FOTO7_1_ATERR_ODU_TORRE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000489')AS FOTO7_2_ATERR_ODU_TORRE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000144')AS FOTO8_RECORRI_SFTP_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000145')AS FOTO9_1__SFTP_OUT_1_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000146')AS FOTO9_2_SFTP_OUT_2_ESTAC_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000147')AS FOTO10_SALAN_OUT_ETIQ_ESTAC_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000148')AS FOTO11_ATERRAM_SALAN_ESTAC_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000151')AS FOTO14_1_SFTP_IN_1_ESTAC_A,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000152')AS FOTO14_2_SFTP_IN_2_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000490')AS FOTO21__EITQU_POE_CMM4_ESTAC_A,


				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000156')AS FOTO22__PAN_RACK_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000157')AS FOTO23_1_ATERRAM_POE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000158')AS FOTO23_2_ATERRAM_POE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000159')AS FOTO24_1_ENERG_POE_ETIQ_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000160')AS FOTO24_2_ENERG_POE_ETIQ_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000161')AS FOTO25_1_PATCH_POE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000162')AS FOTO25_2_PATCH_POE_ESTAC_A,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000491')AS FOTO27_POE_CMM4_ESTAC_A,

				--#ENDREGION

				--#REGION ESTACION B 
				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000163')AS FOTO1_PAN_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000164')AS FOTO2_POS_ANT_INST_TORRE_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000492')AS FOTO3_FOTO_ANTENA_ODU_ESTAC_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000166')AS FOTO4_ETIQ_PUERTO_ANT_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000167')AS FOTO5_ENGRAS_PERNOS_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000168')AS FOTO6_SILC_CONECT_ESTAC_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000169')AS FOTO7_ATERRAM_ODU_TORRE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000493')AS FOTO7_1_ATERR_ODU_TORRE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000494')AS FOTO7_2_ATERR_ODU_TORRE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000170')AS FOTO8_RECORRI_SFTP_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000171')AS FOTO9_1_SFTP_OUT_1_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000172')AS FOTO9_2_SFTP_OUT_2_ESTAC_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000173')AS FOTO10_SALAN_OUT_ETIQ_ESTAC_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000174')AS FOTO11_ATERRAM_SALAN_ESTAC_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000177')AS FOTO14_1_SFTP_IN_1_ESTAC_B,

				--(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				--FROM DOCUMENTO_DET DD
				--WHERE CH_ID_DOCUMENTO='000008' AND
				--CH_ID_TAREA = @CH_ID_TAREA AND
				--CH_ID_CAMPO = '000178')AS FOTO14_2_SFTP_IN_2_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000495')AS FOTO21__EITQU_POE_CMM4_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000182')AS FOTO22_PAN_RACK_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000183')AS FOTO23_1_ATERRAM_POE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000184')AS FOTO23_2_ATERRAM_POE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000185')AS FOTO24_1_ENERG_POE_ETIQ_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000186')AS FOTO24_2_ENERG_POE_ETIQ_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000187')AS FOTO25_1_PATCH_POE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000188')AS FOTO25_2_PATCH_POE_ESTAC_B,

				(SELECT ISNULL(VB_VALOR_BINARIO,@IMAGEN)
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000496')AS FOTO27_POE_CMM4_ESTAC_B,
				--#ENDREGION
				--#ENDREGION
-------------------------------------------------------------------------------

				--#REGION DATOS GENERALES NODO A
				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000189')AS SERIE_PTP_450__A,

			(SELECT N.CH_ID_UBIGEO
			FROM TAREA T INNER JOIN NODO N 
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE  T.CH_ID_TAREA = @CH_ID_TAREA) AS UBIGEO_A,

			(SELECT VC_DIS_FREC_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS  FRECUENCIA_A,

			(SELECT NU_EIRP_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS PIRE_EIRP_A,

			(SELECT VC_TR_DIA_ANT_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ANTENA_MARCA_MODELO_A,

			(SELECT NU_TR_GAIN_ANT_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS GANANCIA_ANTENA_A,

			(SELECT IN_TR_ALT_ANT_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_ANTENA_A,

			(SELECT NU_ELEVACION_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ELEVACION_A,

			(SELECT p.NU_COTA_NODO_A
			FROM PTP P INNER JOIN TAREA T 
			ON P.CH_ID_NODO_A = T.VC_ID_NODO_IIBB_A
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS ALTITUD_msnm_A,
	
			(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000189')AS SERIE_PTP_450_A,

				--#ENDREGION

				--#REGION DATOS GENERALES NODO B
							
			(SELECT N.CH_ID_UBIGEO
			FROM TAREA T INNER JOIN NODO N 
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			WHERE  T.CH_ID_TAREA = @CH_ID_TAREA) AS UBIGEO_B,

			(SELECT VC_DIS_FREC_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS  FRECUENCIA_B,

			(SELECT NU_EIRP_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS PIRE_EIRP_B,

			(SELECT VC_TR_DIA_ANT_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ANTENA_MARCA_MODELO_B,

			(SELECT NU_TR_GAIN_ANT_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS GANANCIA_ANTENA_B,

			(SELECT IN_TR_ALT_ANT_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_ANTENA_B,

			(SELECT NU_ELEVACION_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ELEVACION_B,

			(SELECT P.NU_COTA_NODO_B
			FROM PTP_DET P INNER JOIN TAREA T 
			ON P.CH_ID_NODO_B = T.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS ALTITUD_msnm_B,

				(SELECT VC_VALOR_CADENA
				FROM DOCUMENTO_DET DD
				WHERE CH_ID_DOCUMENTO='000008' AND
				CH_ID_TAREA = @CH_ID_TAREA AND
				CH_ID_CAMPO = '000191')AS SERIE_PTP_450_B,

				--#ENDREGION 

	--VALORES FUERA DEL FORMULARIO 

				(SELECT CH_ID_NODO_A
				FROM PTP_DET
				WHERE CH_ID_TAREA= @CH_ID_TAREA) AS NODO_A,

				(SELECT CH_ID_NODO_B
				FROM PTP_DET
				WHERE CH_ID_TAREA= @CH_ID_TAREA) AS NODO_B,

				(SELECT ED.VC_VALOR_CADENA1
				FROM TAREA T INNER JOIN ENTIDAD_DET ED
				ON(T.CH_ID_TIP_NODO_A = ED.VC_ID_VALOR
				AND VC_ID_ENTIDAD = 'TIP_NODO')
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS TIPO_NODO_A,

				(SELECT ED.VC_VALOR_CADENA1
				FROM TAREA T INNER JOIN ENTIDAD_DET ED
				ON(T.CH_ID_TIP_NODO_B = ED.VC_ID_VALOR
				AND VC_ID_ENTIDAD = 'TIP_NODO')
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS TIPO_NODO_B,

				(SELECT N.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N
				ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
				WHERE T.CH_ID_TAREA= @CH_ID_TAREA ) AS NOMBRE_NODO_A,

				(SELECT N.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N
				ON T.CH_ID_NODO_B = N.CH_ID_NODO
				WHERE T.CH_ID_TAREA= @CH_ID_TAREA) AS NOMBRE_NODO_B,

				(SELECT SUBSTRING(VC_MOD_RAD_NODO_A,5,2)
				FROM PTP_DET	
				WHERE CH_ID_TAREA = @CH_ID_TAREA) AS FRECUENCIA,

				(SELECT D.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N
				ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO 
				INNER JOIN DISTRITO D 
				ON (D.CH_ID_DISTRITO = N.CH_ID_DISTRITO)
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND 
				D.CH_ID_PROVINCIA = N.CH_ID_PROVINCIA
				AND D.CH_ID_DEPARTAMENTO =N.CH_ID_DEPARTAMENTO) AS DISTRITO_A,

				(SELECT D.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N
				ON T.CH_ID_NODO_B = N.CH_ID_NODO 
				INNER JOIN DISTRITO D 
				ON (D.CH_ID_DISTRITO = N.CH_ID_DISTRITO)
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND 
				D.CH_ID_PROVINCIA = N.CH_ID_PROVINCIA
				AND D.CH_ID_DEPARTAMENTO =N.CH_ID_DEPARTAMENTO) AS DISTRITO_B,

				(SELECT P.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N 
				ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
				INNER JOIN PROVINCIA P ON
				 (P.CH_ID_PROVINCIA = N.CH_ID_PROVINCIA)
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
				P.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO) AS PROVINCIA_A,

				(SELECT P.VC_NOMBRE
				FROM TAREA T INNER JOIN NODO N 
				ON T.CH_ID_NODO_B = N.CH_ID_NODO
				INNER JOIN PROVINCIA P ON 
				(P.CH_ID_PROVINCIA = N.CH_ID_PROVINCIA)
				WHERE T.CH_ID_TAREA = @CH_ID_TAREA AND
			P.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO	) AS PROVINCIA_B,

			(SELECT  D.VC_NOMBRE
			FROM TAREA T INNER JOIN NODO N
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			INNER JOIN DEPARTAMENTO D ON (D.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS DEPARTAMENTO_A,

			(SELECT  D.VC_NOMBRE
			FROM TAREA T INNER JOIN NODO N
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			INNER JOIN DEPARTAMENTO D ON (D.CH_ID_DEPARTAMENTO = N.CH_ID_DEPARTAMENTO)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS DEPARTAMENTO_B,

			(SELECT N.NU_LATITUD			
			FROM TAREA T INNER JOIN NODO N 
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS LATITUD_A,

			(SELECT N.NU_LATITUD
			FROM TAREA T INNER JOIN NODO N 
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS LATITUD_B,

			(SELECT N.NU_LONGITUD			
			FROM TAREA T INNER JOIN NODO N 
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS LONGITUD_A,

			(SELECT N.NU_LONGITUD
			FROM TAREA T INNER JOIN NODO N 
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS LONGITUD_B,

			(SELECT P.NU_COTA_NODO_A
			FROM TAREA T INNER JOIN PTP P 
			ON T.VC_ID_NODO_IIBB_A  = P.CH_ID_NODO_A
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ALTURAmsnm_A,

			(SELECT P.NU_COTA_NODO_A
			FROM TAREA T INNER JOIN PTP P 
			ON T.CH_ID_NODO_B  = P.CH_ID_NODO_A
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS ALTURAmsnm_B,

			(SELECT IN_ALT_TORRE
			FROM TAREA T INNER JOIN NODO N 
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_TORRE_A,

			(SELECT IN_ALT_TORRE
			FROM TAREA T INNER JOIN NODO N 
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_TORRE_B,

			(SELECT NU_DISTANCIA
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS DISTANCIA_A_B,

			(SELECT SUBSTRING( P.VC_MOD_RAD_NODO_A,17,5)
			FROM TAREA T INNER JOIN PTP_DET P 
			ON T.VC_ID_NODO_IIBB_A = P.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS MODULACION,

			--FRECUENCIA DE TX Y RXX DATOS

			(SELECT VC_DIS_FREC_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS FRECUENCIA_TX_A,

			(SELECT VC_DIS_FREC_NODO_B
			FROM PTP_DET
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS FRECUENCIA_TX_B,



			(SELECT ED.VC_VALOR_CADENA1
			FROM  PTP_DET P INNER JOIN ENTIDAD_DET ED 
			ON (ED.VC_ID_VALOR = P.CH_ID_POLARIZACION 
			AND ED.VC_ID_ENTIDAD = 'POL') 
			INNER JOIN TAREA T ON T.VC_ID_NODO_IIBB_A = P.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS POLARIZACION_A,

			(SELECT ED.VC_VALOR_CADENA1
			FROM  PTP_DET P INNER JOIN ENTIDAD_DET ED 
			ON (ED.VC_ID_VALOR = P.CH_ID_POLARIZACION 
			AND ED.VC_ID_ENTIDAD = 'POL') 
			INNER JOIN TAREA T ON T.CH_ID_NODO_B = P.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS POLARIZACION_B,


			(SELECT P.NU_AZIMUTH_NODO_A
			FROM PTP_DET P INNER JOIN TAREA T 
			ON P.CH_ID_NODO_A = T.VC_ID_NODO_IIBB_A
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS AZIMUT_A,

			(SELECT P.NU_AZIMUTH_NODO_B
			FROM PTP_DET P INNER JOIN TAREA T 
			ON P.CH_ID_NODO_B = T.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS AZIMUT_B,

			--#REGION MODIFICACIONES PARA LAS IP DEL NODO

			(SELECT SUBSTRING(VC_IP_NODO_A,1,2)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON (T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			AND T.CH_ID_NODO_B = IPP.CH_ID_NODO_B)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_A_1,

			(SELECT SUBSTRING(VC_IP_NODO_A,4,2)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON (T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			AND T.CH_ID_NODO_B = IPP.CH_ID_NODO_B)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_A_2,

			(SELECT SUBSTRING(VC_IP_NODO_A,7,3)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON (T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			AND T.CH_ID_NODO_B = IPP.CH_ID_NODO_B)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_A_3,

			(SELECT SUBSTRING(VC_IP_NODO_A,10,4)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON (T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			AND T.CH_ID_NODO_B = IPP.CH_ID_NODO_B)
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_A_4,

			(SELECT SUBSTRING(IPP.VC_IP_NODO_B,1,2)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON T.CH_ID_NODO_B = IPP.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_B_1,

			(SELECT SUBSTRING(IPP.VC_IP_NODO_B,4,2)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON T.CH_ID_NODO_B = IPP.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_B_2,

			(SELECT SUBSTRING(IPP.VC_IP_NODO_B,7,3)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON T.CH_ID_NODO_B = IPP.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_B_3,

			(SELECT SUBSTRING(IPP.VC_IP_NODO_B,10,4)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON T.CH_ID_NODO_B = IPP.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS IP_NODO_B_4,

			(SELECT SUBSTRING(VC_DEF_GATEWAY,1,2)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP IPP
			ON T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA =@CH_ID_TAREA) AS DEFAULT_GATE_AB_1,

			(SELECT SUBSTRING(VC_DEF_GATEWAY,4,2)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP IPP
			ON T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA =@CH_ID_TAREA) AS DEFAULT_GATE_AB_2,

			(SELECT SUBSTRING(VC_DEF_GATEWAY,7,3)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP IPP
			ON T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA =@CH_ID_TAREA) AS DEFAULT_GATE_AB_3,

			(SELECT SUBSTRING(VC_DEF_GATEWAY,10,4)
			FROM TAREA T INNER JOIN IP_PLANNING_PTP IPP
			ON T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA =@CH_ID_TAREA) AS DEFAULT_GATE_AB_4,
--#ENDREGION


			(SELECT VC_DEF_GATEWAY
			FROM TAREA T INNER JOIN IP_PLANNING_PTP IPP
			ON T.CH_ID_NODO_B = IPP.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS DEFAULT_GATE_B,

			(SELECT IN_POT_TX_NODO_A
			FROm PTP_DET 		
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS POTENCIA_A,

			(SELECT IN_POT_TX_NODO_B
			FROM PTP_DET 
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS POTENCIA_B,

			(SELECT NU_MAR_EFE_DES_NODO_A
			FROM  PTP_DET 
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS MARGEN_DES_A,

			(SELECT NU_MAR_EFE_DES_NODO_B
			FROM  PTP_DET 
			WHERE CH_ID_TAREA = @CH_ID_TAREA) AS MARGEN_DES_B,

			(SELECT NU_RX_NIV_UMB_NODO_A
			FROM PTP_DET
			WHERE CH_ID_TAREA =@CH_ID_TAREA) AS NIVEL_UMBRAL_A_B,

			(SELECT  N.IN_ALT_TORRE
			FROM TAREA T INNER JOIN NODO N 
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_TORRE_A,

			(SELECT N.IN_ALT_TORRE
			FROM TAREA T INNER JOIN NODO N 
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS ALTURA_TORRE_B,

			---ASIGNACIONES Y OBSERVACIONES 
			(SELECT IPP.VC_PUERTO_NODO_A
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON T.VC_ID_NODO_IIBB_A = IPP.CH_ID_NODO_A
			WHERE T.CH_ID_TAREA = @CH_ID_TAREA) AS SWITCH_ROUTER_A,
				
			(SELECT IPP.VC_PUERTO_NODO_B
			FROM TAREA T INNER JOIN IP_PLANNING_PTP_DET IPP
			ON T.CH_ID_NODO_B = IPP.CH_ID_NODO_B
			WHERE T.CH_ID_TAREA =@CH_ID_TAREA) as SWITCH_ROUTER_B,

			(SELECT N.CH_ID_UBIGEO
			FROM TAREA T INNER JOIN NODO N 
			ON T.VC_ID_NODO_IIBB_A = N.CH_ID_NODO
			WHERE  T.CH_ID_TAREA = @CH_ID_TAREA) AS UBIGEO_A,

			(SELECT N.CH_ID_UBIGEO
			FROM TAREA T INNER JOIN NODO N 
			ON T.CH_ID_NODO_B = N.CH_ID_NODO
			WHERE  T.CH_ID_TAREA = @CH_ID_TAREA) AS UBIGEO_B
	END
GO

