USE [ASUCSM]
GO
/****** Object:  StoredProcedure [dbo].[AddHourRemainsTanks]    Script Date: 13.08.2019 23:02:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[AddHourRemainsTanks]
AS
BEGIN
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

declare @db sysname
set @db = (select top(1)  db_name(s_mf.database_id) from sys.master_files s_mf where s_mf.state = 0 and has_dbaccess(db_name(s_mf.database_id)) = 1 and db_name(s_mf.database_id) like (N'CC_HMI%R') group by s_mf.database_id order by 1);

set @SQLString = N'EXEC ['+@db +'].[dbo].[AddHourRemainsTanks]'

EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition

END


GO
