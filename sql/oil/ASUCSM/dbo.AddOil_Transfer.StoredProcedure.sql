USE [ASUCSM]
GO
/****** Object:  StoredProcedure [dbo].[AddOil_Transfer]    Script Date: 13.08.2019 23:02:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






-- =============================================
-- Description:	Формирование отчета по перекачкам
-- =============================================
CREATE PROCEDURE [dbo].[AddOil_Transfer]
AS
BEGIN
DECLARE	@return_value int
declare @start_report datetime
declare @stop_report datetime
declare @start datetime
declare @stop datetime

-- Проверим наличие таблицы [ASUCSM].[dbo].[Oil_Transfer] если нет создадим
if OBJECT_ID(N'[ASUCSM].[dbo].[Oil_Transfer]',N'U') is null
begin
CREATE TABLE [ASUCSM].[dbo].[Oil_Transfer](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NOT NULL,
	[OilType] [nvarchar](50) NOT NULL,
	[out_tank] [nvarchar](10) NOT NULL,
	[out_dv] real NULL,
	[out_dens] real NULL,
	[out_dm_calc] real NULL,
	[in_tank] [nvarchar](10) NOT NULL,
	[in_dv] real NULL,
	[in_dens] real NULL,
	[in_dm_calc] real NULL,
	[delta_v] real NULL,
	[delta_m_calc] real NULL,
 CONSTRAINT [PK_Oil_Transfer] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
end
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [ASUCSM].[dbo].[Oil_Transfer] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '23:59:59', 102)
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

INSERT INTO [dbo].[Oil_Transfer]
           ([dt]
           ,[OilType]
           ,[out_tank]
           ,[out_dv]
           ,[out_dens]
           ,[out_dm_calc]
           ,[in_tank]
           ,[in_dv]
           ,[in_dens]
           ,[in_dm_calc]
           ,[delta_v]
           ,[delta_m_calc])
		   SELECT dt, OilType, out_tank, out_dv, out_dens, out_dm_calc, in_tank, in_dv, in_dens, in_dm_calc, delta_v, delta_m_calc  
			FROM [ASUCSM].[dbo].[Perek_Rep_View] 
			WHERE dt >= @start_report and dt <=@stop_report
			ORDER BY dt

end;

END
GO
