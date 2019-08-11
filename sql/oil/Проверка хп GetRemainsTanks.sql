USE [ASUCSM]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[GetRemainsTanks] '2019-08-11 11:00:00.000'

SELECT	'Return Value' = @return_value

GO
