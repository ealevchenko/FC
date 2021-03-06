USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[ADD_DailyAccountingDetaliReport]    Script Date: 30.09.2019 23:44:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_DailyAccountingDetaliReport]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime
--> Выполним расчет и перенос по каждой емкости
--> Остатки
EXEC [ASU_AZSoperations].[dbo].[ADD_RemainsTanks]
--> Поступления
EXEC [ASU_AZSoperations].[dbo].[ADD_ReceivingTanks]
--> Выдачи
EXEC [ASU_AZSoperations].[dbo].[ADD_DeliveryTanks]

-- Проверим наличие таблицы [dbo].[Daily_Accounting_Detali_Report] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[Daily_Accounting_Detali_Report]',N'U') is null
begin
CREATE TABLE [dbo].[Daily_Accounting_Detali_Report](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt_start] [datetime] NULL,
	[dt_stop] [datetime] NULL,
	[fuel_type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[tank] [nvarchar](11) NULL,
	[serial_number] [nvarchar](10) NULL,
	[unified_tank_number] [nvarchar](21) NULL,
	[type_name] [nvarchar](100) NULL,
	[level_meters_model] [nvarchar](50) NULL,
	[level_meters_serial_number] [nvarchar](10) NULL,
	[dt_actual_remains_start] [datetime] NULL,
	[level_remains_start] [float] NULL,
	[volume_remains_start] [float] NULL,
	[dens_remains_start] [float] NULL,
	[dens_avg_remains_start] [float] NULL,
	[mass_remains_start] [float] NULL,
	[temp_remains_start] [float] NULL,
	[relation_remains_start] [float] NULL,
	[ratio_vd_remains_start] [float] NULL,
	[ratio_tv_remains_start] [float] NULL,
	[dens15_remains_start] [float] NULL,
	[volume15_remains_start] [float] NULL,
	[mass15_remains_start] [float] NULL,
	[volume_received] [float] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[count_tanks_delivery] [int] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[dt_actual_remains_stop] [datetime] NULL,
	[level_remains_stop] [float] NULL,
	[volume_remains_stop] [float] NULL,
	[dens_remains_stop] [float] NULL,
	[dens_avg_remains_stop] [float] NULL,
	[mass_remains_stop] [float] NULL,
	[temp_remains_stop] [float] NULL,
	[relation_remains_stop] [float] NULL,
	[ratio_vd_remains_stop] [float] NULL,
	[ratio_tv_remains_stop] [float] NULL,
	[dens15_remains_stop] [float] NULL,
	[volume15_remains_stop] [float] NULL,
	[mass15_remains_stop] [float] NULL,
	[permissible_volume15_error] [float] NULL,
	[permissible_mass15_error] [float] NULL
 CONSTRAINT [PK_Daily_Accounting_Detali_Report] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
end
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt_start] from [ASU_AZSoperations].[dbo].[Daily_Accounting_Detali_Report] order by [dt_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = (SELECT top(1) [dt] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] order by [dt])
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
	--select @start_report, @stop_report;
 --Проверим диапазон запроса
if (@start_report<@stop_report)
begin
 --select @start_report, @stop_report;
 set @date_start = @start_report;
 declare @row int
 set @row =0;
 WHILE @date_start < @stop_report
    BEGIN
		--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА ********************************
		-->
			INSERT INTO [ASU_AZSoperations].[dbo].[Daily_Accounting_Detali_Report]
			SELECT
			[dt_start],
	[dt_stop],
	[fuel_type],
	[ukt_zed],
	[tank],
	[serial_number],
	[unified_tank_number],
	[type_name],
	[level_meters_model],
	[level_meters_serial_number],
	[dt_actual_remains_start],
	[level_remains_start],
	[volume_remains_start],
	[dens_remains_start],
	[dens_avg_remains_start],
	[mass_remains_start],
	[temp_remains_start],
	[relation_remains_start],
	[ratio_vd_remains_start],
	[ratio_tv_remains_start],
	[dens15_remains_start],
	[volume15_remains_start],
	[mass15_remains_start],
	[volume_received],
	[mass_received],
	[dens_received],
	[temp_received],
	[volume15_received],
	[mass15_received],
	[dens15_received],
	[count_tanks_delivery],
	[volume_delivery],
	[mass_delivery],
	[dens_delivery],
	[temp_delivery],
	[volume15_delivery],
	[mass15_delivery],
	[dens15_delivery],
	[dt_actual_remains_stop],
	[level_remains_stop],
	[volume_remains_stop],
	[dens_remains_stop],
	[dens_avg_remains_stop],
	[mass_remains_stop],
	[temp_remains_stop],
	[relation_remains_stop],
	[ratio_vd_remains_stop],
	[ratio_tv_remains_stop],
	[dens15_remains_stop],
	[volume15_remains_stop],
	[mass15_remains_stop],
	[permissible_volume15_error],
	[permissible_mass15_error]
		  from get_tanks_value_detali_daily_accounting_report(@date_start)
				set @row = @row+1;
		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
		set @date_start = DATEADD(DAY,+1,@date_start);
    END;
	return @row;
end;

end

GO
