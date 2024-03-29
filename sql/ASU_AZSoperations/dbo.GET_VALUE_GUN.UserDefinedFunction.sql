USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[GET_VALUE_GUN]    Script Date: 30.09.2019 23:43:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE FUNCTION [dbo].[GET_VALUE_GUN](@trk sysname, @gun sysname, @type sysname, @start sysname, @stop sysname) 
	RETURNS nvarchar(max)
	AS
	BEGIN 
	
DECLARE @SQLString nvarchar(max);

declare @table_name sysname
--set @table_name = 'GunsCnts';
set @table_name = 'TRK_Counters';

set @SQLString = N'
select 
[type] = '+@type+',
[num] = N'''+@trk+''',
[start_valume] = (select top(1) ['+@gun+'] from [dbo].['+@table_name+'] where [TimeStamp] <= CONVERT(datetime,'''+@start+''',120) order by [TimeStamp] desc),
[stop_valume] = (select top(1) ['+@gun+'] from [dbo].['+@table_name+'] where [TimeStamp] <= CONVERT(datetime,'''+@stop+''',120) order by [TimeStamp] desc)
'
RETURN @SQLString
	END
GO
