USE [ASUTSK]
GO

/****** Object:  StoredProcedure [dbo].[AddReceivingFuelRW]    Script Date: 07.07.2019 22:00:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Description:	Перенос данных в ЦОД
-- =============================================
CREATE PROCEDURE [dbo].[AddReceivingFuelRW]

AS
BEGIN
declare @start_report datetime
declare @stop_report datetime

-- Проверим наличие таблицы [dbo].[ReceivingFuelRW] если нет создадим
if OBJECT_ID(N'[ASUTSK].[dbo].[ReceivingFuelRW]',N'U') is null
begin
	CREATE TABLE [ASUTSK].[dbo].[ReceivingFuelRW](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[operator_name] [nvarchar](50) NOT NULL,
		[smena_num] [int] NULL,
		[smena_datetime] [datetime] NULL,

		[railway_num_nak] [nvarchar](20) NOT NULL,
		[railway_num_tanker] [nvarchar](20) NOT NULL,
		[railway_level] real NULL,
		[railway_volume] real NULL,
		[railway_dens] real NULL,
		[railway_mass] real NULL,
		[railway_temp] real NULL,
		[railway_water_level] real NULL,
		[railway_water_volume] real NULL,
		[railway_volume15] real NULL,
		[railway_dens15] real NULL,
		[railway_mass15] real NULL,

		[start_datetime] [datetime] NULL,
		[start_level] real NULL,
		[start_volume] real NULL,
		[start_dens] real NULL,
		[start_mass] real NULL,
		[start_temp] real NULL,
		[start_water_level] real NULL,

		[stop_datetime] [datetime] NULL,
		[stop_level] real NULL,
		[stop_volume] real NULL,
		[stop_dens] real NULL,
		[stop_mass] real NULL,
		[stop_temp] real NULL,
		[stop_water_level] real NULL,

	 CONSTRAINT [PK_ReceivingFuelRW] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
end

-- Получим время начала запроса и конца
set @start_report = (select top(1) [start_datetime] from [ASUTSK].[dbo].[ReceivingFuelRW] order by [start_datetime] desc);

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
		insert into [ASUTSK].[dbo].[ReceivingFuelRW]
		exec [dbo].[GetReceivingFuelRW] @start_report, @stop_report
	end
END

GO


