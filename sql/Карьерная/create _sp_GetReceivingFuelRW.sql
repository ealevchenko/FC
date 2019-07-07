USE [ASUTSK]
GO

/****** Object:  StoredProcedure [dbo].[GetReceivingFuelRW]    Script Date: 07.07.2019 22:00:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Description:	Выборка данных по приему топлива
-- =============================================
CREATE PROCEDURE [dbo].[GetReceivingFuelRW]
	@start_report datetime,
	@stop_report datetime
AS
BEGIN
SELECT 
	[operator_name] = [User]
   ,[smena_num] = null
   ,[smena_datetime] = null
   ,[railway_num_nak] = [Cist_Nakl_Nom]
   ,[railway_num_tanker] = [Cist_nom]
   ,[railway_level] = [Cist_Level]
   ,[railway_volume] = [Cist_Vol]*1000
   ,[railway_dens] = [Cist_Dens]
   ,[railway_mass] = [Cist_Mass]
   ,[railway_temp] = [Cist_Temp]
   ,[railway_water_level] = [Cist_WaterLev]
   ,[railway_water_volume] = [Cist_WaterVol]
   ,[railway_volume15] = [ASUTSK].[dbo].[GET_VOLUME15](N'107000024',[Cist_Dens],[Cist_Temp],[Cist_Vol]*1000)
   ,[railway_dens15]  = [ASUTSK].[dbo].[GET_DENS15](N'107000024',[Cist_Dens],[Cist_Temp])
   ,[railway_mass15] = ([ASUTSK].[dbo].[GET_VOLUME15](N'107000024',[Cist_Dens],[Cist_Temp],[Cist_Vol]*1000)*[ASUTSK].[dbo].[GET_DENS15](N'107000024',[Cist_Dens],[Cist_Temp])*0.001)
   ,[start_datetime] = [Start_Date]
   ,[start_level] = [Start_Level]
   ,[start_volume] = [Start_Volume]
   ,[start_dens] = [Start_Dens]
   ,[start_mass] = [Start_Mass]
   ,[start_temp] = [Start_Temp]
   ,[start_water_level] = [Start_Water]
   ,[stop_datetime] = [End_Date]
   ,[stop_level] = [End_Level]
   ,[stop_volume] = [End_Volume]
   ,[stop_dens] = [End_Dens]
   ,[stop_mass] = [End_Mass]
   ,[stop_temp] = [End_Temp]
   ,[stop_water_level] = [End_Water]
FROM [ASUTSK].[dbo].[Incomes]  
where [End_Date] is not null and 
[Start_Date] >= @start_report AND [Start_Date]<= @stop_report 
order by [Start_Date]
END
GO


