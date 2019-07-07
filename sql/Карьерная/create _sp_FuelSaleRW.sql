USE [ASUTSK]
GO

/****** Object:  StoredProcedure [dbo].[AddFuelSaleRW]    Script Date: 05.07.2019 13:18:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AddFuelSaleRW]

AS
BEGIN
declare @start_report datetime
declare @stop_report datetime
--declare @start datetime
--declare @stop datetime

-- Проверим наличие таблицы [dbo].[Daily_Report_15] если нет создадим
if OBJECT_ID(N'[ASUTSK].[dbo].[FuelSaleRW]',N'U') is null
begin
	CREATE TABLE [ASUTSK].[dbo].[FuelSaleRW](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[operator_name] [nvarchar](50) NOT NULL,
		[smena_num] [int] NULL,
		[smena_datetime] [datetime] NULL,
		[num] [int] NOT NULL,
		[fuel_type] [int] NOT NULL,
		[tank_num] [int] NOT NULL,
		[number_card] [nvarchar](20) NOT NULL,
		[id_card] [int] NULL,
		[dose] [numeric](9, 3) NULL,
		[passage] [char](1) NOT NULL,
		[volume] [int] NULL,
		[mass] [numeric](10, 3) NULL,
		[dens] [numeric](9, 5) NULL,
		[temp] [numeric](3, 1) NULL,
		[volume15] [int] NULL,
		[mass15] [numeric](10, 3) NULL,
		[dens15] [numeric](9, 5) NULL,

		[start_datetime] [datetime] NULL,
		[start_level] [numeric](7, 1) NULL,
		[start_volume] [numeric](9, 1) NULL,
		[start_dens] [numeric](9, 5) NULL,
		[start_mass] [numeric](9, 1) NULL,
		[start_temp] [numeric](3, 1) NULL,
		[start_water_level] [numeric](6, 1) NULL,
		[start_counter] [int] NULL,

		[stop_datetime] [datetime] NULL,
		[stop_level] [numeric](7, 1) NULL,
		[stop_volume] [numeric](9, 1) NULL,
		[stop_density] [numeric](9, 5) NULL,
		[stop_mass] [numeric](9, 1) NULL,
		[stop_temp] [numeric](3, 1) NULL,
		[stop_water_level] [numeric](6, 1) NULL,
		[stop_counter] [int] NULL,
		[auto_number] [nvarchar](20) NULL
	 CONSTRAINT [PK_FuelSaleRW] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
end

-- Получим время начала запроса и конца
set @start_report = (select top(1) [start_datetime] from [ASUTSK].[dbo].[FuelSaleRW] order by [start_datetime] desc);

--Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
Set @stop_report =  (select top(1) [Start_Date] FROM [ASUTSK].[dbo].[Outcomes]  where [End_Date] is not null order by [Start_Date] desc)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца

	set @start_report = CONVERT(datetime, '2019-05-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(SECOND,+1,@start_report)
	end;

	--select @start_report, @stop_report

	-- Проверим диапазон запроса
if (@start_report<@stop_report)
begin
	insert into [ASUTSK].[dbo].[FuelSaleRW]
	select
		[operator_name] = [User],
		--[User] = (SELECT top(1) [UserName] FROM [ASUTSK].[dbo].[UsersChanges] where CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102)<= [Start_Date] order by CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102) desc),
		--[smena_num] = (SELECT top(1) id FROM [ASUTSK].[dbo].[UsersChanges] where CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102)<= [Start_Date] order by CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102) desc),
		--[smena_datetime] = (SELECT top(1) CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102) FROM [ASUTSK].[dbo].[UsersChanges] where CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102)<= [Start_Date] order by CONVERT(DATETIME, SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 1, 4)+'-'+SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 9, 2)+'-' + SUBSTRING(CONVERT(char(10), [TimeStartWork] ,20), 6, 2)+' '+ CONVERT(char(16), [DateStartWork] ,20), 102) desc),
		[smena_num] = null,
		[smena_datetime] = null,
		[num]= [Out_Type],
		[fuel_type] = 107000024,
		[tank_num] = 4,
		[number_card] = [Card_Id],
		[id_card] = (SELECT TOP (1) [Id] FROM [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[azsCards] where [Number] = [Card_Id] collate SQL_Latin1_General_CP1_CI_AS),
		[dose] = null,
		[passage] = N'A',
		[volume] = cast(([End_Counter] - [Start_Counter]) as int),
		[mass] = cast(((([End_Counter] - [Start_Counter]) * (([End_Dens]+[Start_Dens])/2))/1000) as float),
		[dens] = (([End_Dens]+[Start_Dens])/2),
		[temp] = (([End_Temp]+[Start_Temp])/2),
		[volume15] = cast(([dbo].[GET_VOLUME15](N'107000024',(([End_Dens]+[Start_Dens])/2), (([End_Temp]+[Start_Temp])/2), ([End_Counter] - [Start_Counter]))) as int),
		[mass15] = ([dbo].[GET_VOLUME15](N'107000024',(([End_Dens]+[Start_Dens])/2), (([End_Temp]+[Start_Temp])/2), ([End_Counter] - [Start_Counter])) * [ASUTSK].[dbo].[GET_DENS15](N'107000024',(([End_Dens]+[Start_Dens])/2), (([End_Temp]+[Start_Temp])/2))*0.001),
		[dens15] = ([ASUTSK].[dbo].[GET_DENS15](N'107000024',(([End_Dens]+[Start_Dens])/2), (([End_Temp]+[Start_Temp])/2))),
		[start_datetime] = [Start_Date],
		[start_level] = [Start_Level],
		[start_volume] = [Start_Volume],
		[start_dens] = [Start_Dens],
		[start_mass] = [Start_Mass],
		[start_temp] = [Start_Temp],
		[start_water_level] = [Start_Water],
		[start_counter] = cast([Start_Counter] as int),
		[stop_datetime] = [End_Date],
		[stop_level] = [End_Level],
		[stop_volume] = [End_Volume],
		[stop_dens] = [End_Dens],
		[stop_mass] = [End_Mass],
		[stop_temp] = [End_Temp],
		[stop_water_level] = [End_Water],
		[stop_counter] = cast([End_Counter] as int),
		[auto_number] = Tr_nom
	FROM [ASUTSK].[dbo].[Outcomes]  
	where [End_Date] is not null and 
	[Start_Date] >= @start_report AND [Start_Date]<= @stop_report

	order by [Start_Date]
end;
END
GO


