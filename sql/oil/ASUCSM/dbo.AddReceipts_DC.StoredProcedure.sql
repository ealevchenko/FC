USE [ASUCSM]
GO
/****** Object:  StoredProcedure [dbo].[AddReceipts_DC]    Script Date: 13.08.2019 23:02:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO









-- =============================================
-- Description:	Формирование отчета по приему масла и перенос в ЦОД
-- =============================================
CREATE PROCEDURE [dbo].[AddReceipts_DC]
AS
BEGIN
DECLARE	@return_value int
declare @start_report datetime
declare @stop_report datetime
declare @start datetime
declare @stop datetime

set @start_report = (select top(1) [DateStarted] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Receipts_OIL] order by [DateStarted] desc)
Set @stop_report = (SELECT top(1) [DateStarted] FROM [ASUCSM].[dbo].[Incomes] where [DateStop] is not null order by [DateStarted] desc)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = CONVERT(datetime, '2019-01-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(SECOND,+1,@start_report)
	end;
-- Проверим диапазон запроса
if (@start_report<@stop_report)
begin

INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Receipts_OIL]
           ([DateCreated]
           ,[OperatorCreated]
           ,[OilType]
           ,[TankNo]
           ,[CreatedLevel]
           ,[CreatedVolume]
           ,[CreatedMass]
           ,[CreatedTemp]
           ,[CreatedDens]
           ,[CreatedWater]
           ,[OrderId]
           ,[DateStarted]
           ,[OperatorStarted]
           ,[LevelStart]
           ,[VolumeStart]
           ,[MassStart]
           ,[TempStart]
           ,[DensStart]
           ,[WaterStart]
           ,[DateStop]
           ,[LevelStop]
           ,[VolumeStop]
           ,[MassStop]
           ,[TempStop]
           ,[DensStop]
           ,[WaterStop])
			SELECT [DateCreated]
				  ,[OperatorCreated]
				  ,[OilType]
				  ,[TankNo]
				  ,[CreatedLevel]
				  ,[CreatedVolume]
				  ,[CreatedMass]
				  ,[CreatedTemp]
				  ,[CreatedDens]
				  ,[CreatedWater]
				  ,[OrderId]
				  ,[DateStarted]
				  ,[OperatorStarted]
				  ,[LevelStart]
				  ,[VolumeStart]
				  ,[MassStart]
				  ,[TempStart]
				  ,[DensStart]
				  ,[WaterStart]
				  ,[DateStop]
				  ,[LevelStop]
				  ,[VolumeStop]
				  ,[MassStop]
				  ,[TempStop]
				  ,[DensStop]
				  ,[WaterStop]
			  FROM [ASUCSM].[dbo].[Incomes]
			  where [DateStarted]>= @start_report and [DateStop]<= @stop_report
			  order by [DateStarted] desc

end;

END
GO
