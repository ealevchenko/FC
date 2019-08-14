USE [CC_HMI_CFG2_19_08_09_13_43_08R]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[AddHourRemainsTanks]

SELECT	'Return Value' = @return_value

GO
