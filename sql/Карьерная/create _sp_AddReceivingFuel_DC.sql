USE [ASUTSK]
GO

/****** Object:  StoredProcedure [dbo].[AddReceivingFuel_DC]    Script Date: 14.07.2019 16:51:34 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




-- =============================================
-- Description:	Перенос данных в ЦОД
-- =============================================
CREATE PROCEDURE [dbo].[AddReceivingFuel_DC]

AS
BEGIN
declare @start_report datetime
declare @stop_report datetime

---- Проверим наличие таблицы [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingFuel_KGD] если нет создадим
--if OBJECT_ID(N'[10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingFuel_KGD]',N'U') is null
--begin
--	CREATE TABLE [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingFuel_KGD](
--		[id] [int] IDENTITY(1,1) NOT NULL,
--		[operator_name] [nvarchar](50) NOT NULL,
--		[smena_num] [int] NULL,
--		[smena_datetime] [datetime] NULL,

--		[railway_num_nak] [nvarchar](20) NOT NULL,
--		[railway_num_tanker] [nvarchar](20) NOT NULL,
--		[railway_level] real NULL,
--		[railway_volume] real NULL,
--		[railway_dens] real NULL,
--		[railway_mass] real NULL,
--		[railway_temp] real NULL,
--		[railway_water_level] real NULL,
--		[railway_water_volume] real NULL,
--		[railway_volume15] real NULL,
--		[railway_dens15] real NULL,
--		[railway_mass15] real NULL,

--		[start_datetime] [datetime] NULL,
--		[start_level] real NULL,
--		[start_volume] real NULL,
--		[start_dens] real NULL,
--		[start_mass] real NULL,
--		[start_temp] real NULL,
--		[start_water_level] real NULL,

--		[stop_datetime] [datetime] NULL,
--		[stop_level] real NULL,
--		[stop_volume] real NULL,
--		[stop_dens] real NULL,
--		[stop_mass] real NULL,
--		[stop_temp] real NULL,
--		[stop_water_level] real NULL,

--	 CONSTRAINT [PK_ReceivingFuel_KGD] PRIMARY KEY CLUSTERED 
--	(
--		[id] ASC
--	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
--	) ON [PRIMARY]
--end

-- Получим время начала запроса и конца
set @start_report = (select top(1) [start_datetime] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingFuel_KGD] order by [start_datetime] desc);

--Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
Set @stop_report =  (select top(1) [Start_Date] FROM [ASUTSK].[dbo].[Incomes]  where [End_Date] is not null order by [Start_Date] desc)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца

	set @start_report = CONVERT(datetime, '2019-05-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(SECOND,+1,@start_report)
	end;

	 --Проверим диапазон запроса
if (@start_report<@stop_report)
	begin
		INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingFuel_KGD]
           ([operator_name]
           ,[smena_num]
           ,[smena_datetime]
           ,[railway_num_nak]
           ,[railway_num_tanker]
           ,[railway_level]
           ,[railway_volume]
           ,[railway_dens]
           ,[railway_mass]
           ,[railway_temp]
           ,[railway_water_level]
           ,[railway_water_volume]
           ,[railway_volume15]
           ,[railway_dens15]
           ,[railway_mass15]
           ,[start_datetime]
           ,[start_level]
           ,[start_volume]
           ,[start_dens]
           ,[start_mass]
           ,[start_temp]
           ,[start_water_level]
           ,[stop_datetime]
           ,[stop_level]
           ,[stop_volume]
           ,[stop_dens]
           ,[stop_mass]
           ,[stop_temp]
           ,[stop_water_level])
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
		--exec [ASUTSK].[dbo].[GetReceivingFuelRW] @start_report, @stop_report
	end
END

GO


