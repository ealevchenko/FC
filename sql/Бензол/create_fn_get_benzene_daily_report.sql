USE [KRR-PA-CNT-Oil]
GO

/****** Object:  UserDefinedFunction [dbo].[get_benzene_daily_report]    Script Date: 25.04.2021 21:24:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO








CREATE FUNCTION [dbo].[get_benzene_daily_report]
 (
   @start datetime,
   @stop datetime
 )
	RETURNS 
	@daily TABLE(
		[start_dt] [datetime] NULL,
		[stop_dt] [datetime] NULL,
		[start_volume] [float] NULL,
		[start_volume15] [float] NULL,
		[start_mass] [float] NULL,
		[start_dens] [float] NULL,
		[start_dens15] [float] NULL,
		[stop_volume] [float] NULL,
		[stop_volume15] [float] NULL,
		[stop_mass] [float] NULL,
		[stop_dens] [float] NULL,
		[stop_dens15] [float] NULL,
		[dispensing_volume] [float] NULL,
		[dispensing_volume15] [float] NULL,
		[dispensing_mass] [float] NULL,
		[dispensing_dens] [float] NULL,
		[dispensing_dens15] [float] NULL,
		[deliverys_volume] [float] NULL,
		[deliverys_volume15] [float] NULL,
		[deliverys_mass] [float] NULL,
		[deliverys_dens] [float] NULL,
		[deliverys_dens15] [float] NULL
	)
	AS
	BEGIN
	declare @daily_tanks TABLE(
		[tank] [int] NOT NULL,
		[start_dt] [datetime] NULL,
		[stop_dt] [datetime] NULL,
		[start_volume] [float] NULL,
		[start_volume15] [float] NULL,
		[start_mass] [float] NULL,
		[start_dens] [float] NULL,
		[start_dens15] [float] NULL,
		[stop_volume] [float] NULL,
		[stop_volume15] [float] NULL,
		[stop_mass] [float] NULL,
		[stop_dens] [float] NULL,
		[stop_dens15] [float] NULL,
		[dispensing_volume] [float] NULL,
		[dispensing_volume15] [float] NULL,
		[dispensing_mass] [float] NULL,
		[dispensing_dens] [float] NULL,
		[dispensing_dens15] [float] NULL,
		[deliverys_volume] [float] NULL,
		[deliverys_volume15] [float] NULL,
		[deliverys_mass] [float] NULL,
		[deliverys_dens] [float] NULL,
		[deliverys_dens15] [float] NULL
	)

insert @daily_tanks
SELECT [tank]
      ,[start_dt]
      ,[stop_dt]
      ,[start_volume]
      ,[start_volume15]
      ,[start_mass]
      ,[start_dens]
      ,[start_dens15]
      ,[stop_volume]
      ,[stop_volume15]
      ,[stop_mass]
      ,[stop_dens]
      ,[stop_dens15]
      ,[dispensing_volume]
      ,[dispensing_volume15]
      ,[dispensing_mass]
      ,[dispensing_dens]
      ,[dispensing_dens15]
      ,[deliverys_volume]
      ,[deliverys_volume15]
      ,[deliverys_mass]
      ,[deliverys_dens]
      ,[deliverys_dens15]
  FROM [KRR-PA-CNT-Oil].[dbo].[Daily_Report_Benzene]
  where [start_dt] >= @start and [stop_dt] <= @stop

    insert @daily
	select 
		min(start_dt) as start_dt
		,max(stop_dt) as stop_dt
		,sum(start_volume) as start_volume
		,sum(start_volume15) as start_volume15
		,sum(start_mass) as start_mass
		,start_dens = CASE WHEN sum(start_volume)>0  THEN sum(start_mass) / sum(start_volume) ELSE 0 END
		,start_dens15 = CASE WHEN sum(start_volume15)>0  THEN sum(start_mass) / sum(start_volume15) ELSE 0 END
		,sum(stop_volume) as stop_volume
		,sum(stop_volume15) as stop_volume15
		,sum(stop_mass) as stop_mass
		,stop_dens = CASE WHEN sum(stop_volume)>0  THEN sum(stop_mass) / sum(stop_volume) ELSE 0 END
		,stop_dens15 = CASE WHEN sum(stop_volume15)>0  THEN sum(stop_mass) / sum(stop_volume15) ELSE 0 END
		-- выдали
		,sum(dispensing_volume) as dispensing_volume
		,sum(dispensing_volume15) as dispensing_volume15
		,sum(dispensing_mass) as dispensing_mass
		,dispensing_dens = CASE WHEN sum(dispensing_volume)>0  THEN sum(dispensing_mass) / sum(dispensing_volume) ELSE 0 END
		,dispensing_dens15 = CASE WHEN sum(dispensing_volume15)>0  THEN sum(dispensing_mass) / sum(dispensing_volume15) ELSE 0 END
		-- прием
		,sum(deliverys_volume) as deliverys_volume
		,sum(deliverys_volume15) as deliverys_volume15
		,sum(deliverys_mass) as deliverys_mass
		,deliverys_dens = CASE WHEN sum(deliverys_volume)>0  THEN sum(deliverys_mass) / sum(deliverys_volume) ELSE 0 END
		,deliverys_dens15 = CASE WHEN sum(deliverys_volume15)>0  THEN sum(deliverys_mass) / sum(deliverys_volume15) ELSE 0 END
		from @daily_tanks
		group by start_dt
	RETURN
 END




GO


